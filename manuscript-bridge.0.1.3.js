/**
 * Manuscript runtime bridge — v0.1.3
 *
 * Host page integration for the Manuscript browser extension (Chrome / Edge).
 * The extension's content script must be injected on the host page —
 * this library only sends postMessage commands; it does not replay on
 * its own. If the extension is missing, `load()` rejects and (by
 * default) a small install prompt is shown.
 *
 * What changed in 0.1.3 (additive — 0.1.2 hosts keep working):
 *   - New API: openStore(), openHomepage(), mountLauncher(),
 *              unmountLauncher().
 *   - mountLauncher() renders a tokens-aligned launcher pill in the
 *     bottom-right of the host page inside its own Shadow DOM so host
 *     CSS can't shift it. When the extension is missing, the same
 *     pill morphs into an "Install Manuscript" prompt.
 *     Host-page launcher buttons (the v0.1.2 pattern) keep working —
 *     just don't call mountLauncher() if you have your own.
 *   - configure() accepts: homepageUrl (opt-in extra link in the
 *     install prompt), storeUrl (override default Web Store URL),
 *     lang ('auto' | 'en' | 'ko'), onInstallClick, onHomeClick.
 *   - isInstalled() result is cached per-page so repeat calls don't
 *     re-ping. Use refreshInstalled() to bust the cache.
 *
 * Quick start (script tag, host-owned button — v0.1.2 style):
 *   <script src="manuscript-bridge.0.1.3.js"></script>
 *   <button id="start">Take the tour</button>
 *   <script>
 *     document.getElementById('start').addEventListener('click', async () => {
 *       if (!(await manuscript.isInstalled())) {
 *         manuscript.openStore();
 *         return;
 *       }
 *       await manuscript.load(scenarioJson);
 *       await manuscript.play({ standalone: true });
 *     });
 *   </script>
 *
 * Quick start (auto-mounted launcher — new in 0.1.3):
 *   <script src="manuscript-bridge.0.1.3.js"></script>
 *   <script>
 *     manuscript.configure({
 *       homepageUrl: 'https://zendy00.github.io/manuscript-pages/',
 *     });
 *     manuscript.mountLauncher({
 *       scenarioUrl: '/tours/my-tour.json',  // or scenario: {...}
 *     });
 *   </script>
 *
 * API (additive to 0.1.2):
 *   manuscript.load(scenario)                — scenario: object | JSON string
 *   manuscript.play({ startIndex, paused, standalone })
 *   manuscript.pause()
 *   manuscript.next() / prev() / jump(index)
 *   manuscript.exit()
 *   manuscript.isInstalled()                 — Promise<boolean>, cached
 *   manuscript.refreshInstalled()            — clear cache + re-ping
 *   manuscript.openStore()                   — open Web Store in a new tab
 *   manuscript.openHomepage()                — open homepageUrl (no-op + warn if unset)
 *   manuscript.mountLauncher({ scenario?, scenarioUrl?, label?, lang? })
 *   manuscript.unmountLauncher()
 *   manuscript.configure({
 *     banner, timeoutMs, lang,
 *     storeUrl, homepageUrl,
 *     onInstallClick, onHomeClick,
 *   })
 *
 * Cross-page note: scenarios that span multiple URLs only progress
 * while the extension is loaded on that page. If the user navigates
 * to a URL where the extension is not active, replay pauses silently.
 */
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.manuscript = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var HOST_SOURCE = 'manuscript:host';
  var EXT_SOURCE = 'manuscript:ext';
  var READY_EVENT = 'manuscript:ready';
  var EXITED_EVENT = 'manuscript:exited';
  var DEFAULT_TIMEOUT_MS = 1500;

  // Default URLs — overridable via configure({storeUrl, homepageUrl}).
  // storeUrl points at the canonical listing; homepageUrl is opt-in
  // (the install prompt only shows the "Learn more" link when this is
  // explicitly set, so most hosts don't get a homepage button by
  // default).
  var DEFAULT_STORE_URL =
    'https://chromewebstore.google.com/detail/manuscript/feihbocomfcdghadlmnmkamehfkmdall';

  // localStorage key tracking the last extension version the user
  // dismissed the install prompt for — if the extension publishes a
  // new version, we surface the prompt again. We don't have a real
  // extension version here (we're not installed!), so the dismiss key
  // is keyed by bridge version for now. Good enough: hosts upgrading
  // the bridge usually means they shipped new tour content too.
  var DISMISS_KEY = 'mn:bridge-prompt-dismissed';

  var config = {
    banner: true,
    timeoutMs: DEFAULT_TIMEOUT_MS,
    lang: 'auto', // 'auto' | 'en' | 'ko'
    storeUrl: DEFAULT_STORE_URL,
    homepageUrl: null, // opt-in
    onInstallClick: null,
    onHomeClick: null,
  };

  var requestSeq = 0;
  function newRequestId() {
    requestSeq += 1;
    return 'mr-' + Date.now().toString(36) + '-' + requestSeq;
  }

  function postHost(payload) {
    var msg = Object.assign({ source: HOST_SOURCE }, payload);
    window.postMessage(msg, '*');
  }

  function awaitReply(requestId, ackType, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var timer = window.setTimeout(function () {
        window.removeEventListener('message', handler);
        reject(new Error('Manuscript extension did not respond within ' + timeoutMs + 'ms'));
      }, timeoutMs);
      function handler(ev) {
        var data = ev.data;
        if (!data || data.source !== EXT_SOURCE) return;
        if (data.type !== ackType) return;
        if (data.requestId !== requestId) return;
        window.clearTimeout(timer);
        window.removeEventListener('message', handler);
        if (data.ok === false) {
          reject(new Error(typeof data.error === 'string' ? data.error : 'Request failed'));
        } else {
          resolve(data);
        }
      }
      window.addEventListener('message', handler);
    });
  }

  /**
   * Ping with retry. Content scripts and page inline scripts both run at
   * document_idle; the order isn't guaranteed, so a first ping can arrive
   * before web-bridge has attached its listener. We re-send every
   * `retryIntervalMs` (default 200ms) until either a pong comes back or
   * `totalTimeoutMs` elapses. The bridge also wakes up immediately if the
   * extension dispatches the `manuscript:ready` event.
   */
  function ping(totalTimeoutMs) {
    var limit = totalTimeoutMs || config.timeoutMs;
    var retryIntervalMs = 200;
    return new Promise(function (resolve, reject) {
      var start = Date.now();
      var resolved = false;
      var retryTimer = null;
      var readyHandler = null;

      function tryOnce() {
        if (resolved) return;
        var requestId = newRequestId();
        var perAttempt = Math.min(retryIntervalMs + 50, limit);
        awaitReply(requestId, 'pong', perAttempt).then(
          function (res) {
            if (resolved) return;
            resolved = true;
            if (retryTimer !== null) window.clearTimeout(retryTimer);
            if (readyHandler) window.removeEventListener(READY_EVENT, readyHandler);
            resolve(res);
          },
          function () {
            if (resolved) return;
            if (Date.now() - start >= limit) {
              resolved = true;
              if (readyHandler) window.removeEventListener(READY_EVENT, readyHandler);
              reject(new Error('Manuscript extension did not respond within ' + limit + 'ms'));
              return;
            }
            retryTimer = window.setTimeout(tryOnce, 0);
          },
        );
        postHost({ type: 'ping', requestId: requestId });
      }

      readyHandler = function () {
        if (resolved) return;
        if (retryTimer !== null) window.clearTimeout(retryTimer);
        tryOnce();
      };
      window.addEventListener(READY_EVENT, readyHandler);

      tryOnce();
    });
  }

  // --- isInstalled cache --------------------------------------------------
  // First call kicks off a ping; subsequent calls within the same page
  // resolve immediately. The `manuscript:ready` event also primes the
  // cache to true — so a host that calls isInstalled() right after the
  // extension wakes up gets an instant true.
  var installedCache = null; // null = unknown, true/false = decided
  var inflightCheck = null;

  window.addEventListener(READY_EVENT, function () {
    installedCache = true;
    hideLauncherInstallMode();
  });

  function isInstalled() {
    if (installedCache !== null) return Promise.resolve(installedCache);
    if (inflightCheck) return inflightCheck;
    inflightCheck = ping(config.timeoutMs).then(
      function () {
        installedCache = true;
        inflightCheck = null;
        return true;
      },
      function () {
        installedCache = false;
        inflightCheck = null;
        return false;
      },
    );
    return inflightCheck;
  }

  function refreshInstalled() {
    installedCache = null;
    inflightCheck = null;
    return isInstalled();
  }

  function ensureInstalled() {
    return isInstalled().then(function (yes) {
      if (yes) return;
      if (config.banner) showLauncher({ forceInstallMode: true });
      throw new Error('Manuscript extension is not installed.');
    });
  }

  // --- Public command wrappers --------------------------------------------
  function load(scenario) {
    if (scenario === null || scenario === undefined) {
      return Promise.reject(new Error('scenario is required'));
    }
    return ensureInstalled().then(function () {
      var requestId = newRequestId();
      var p = awaitReply(requestId, 'load-ack', config.timeoutMs);
      postHost({ type: 'load', requestId: requestId, scenario: scenario });
      return p;
    });
  }

  function play(options) {
    var opts = options || {};
    return ensureInstalled().then(function () {
      var requestId = newRequestId();
      var p = awaitReply(requestId, 'play-ack', config.timeoutMs);
      postHost({
        type: 'play',
        requestId: requestId,
        startIndex: typeof opts.startIndex === 'number' ? opts.startIndex : 0,
        paused: opts.paused === true,
        standalone: opts.standalone !== false,
      });
      return p;
    });
  }

  function pause() { postHost({ type: 'pause' }); return Promise.resolve(); }
  function next()  { postHost({ type: 'next' });  return Promise.resolve(); }
  function prev()  { postHost({ type: 'prev' });  return Promise.resolve(); }
  function jump(index) { postHost({ type: 'jump', index: index }); return Promise.resolve(); }

  function exit() {
    var requestId = newRequestId();
    var p = awaitReply(requestId, 'exit-ack', config.timeoutMs).catch(function () {
      return undefined;
    });
    postHost({ type: 'exit', requestId: requestId });
    return p;
  }

  // --- Store / homepage helpers ------------------------------------------
  function openStore() {
    try {
      if (typeof config.onInstallClick === 'function') {
        try { config.onInstallClick(); } catch (_) {}
      }
      window.open(config.storeUrl, '_blank', 'noopener');
    } catch (_) {}
  }

  function openHomepage() {
    if (!config.homepageUrl) {
      try {
        console.warn(
          '[manuscript] openHomepage() called but homepageUrl is not set. ' +
          'Call manuscript.configure({ homepageUrl: "https://…" }) first.',
        );
      } catch (_) {}
      return;
    }
    try {
      if (typeof config.onHomeClick === 'function') {
        try { config.onHomeClick(); } catch (_) {}
      }
      window.open(config.homepageUrl, '_blank', 'noopener');
    } catch (_) {}
  }

  function configure(next) {
    if (!next || typeof next !== 'object') return;
    if (typeof next.banner === 'boolean') config.banner = next.banner;
    if (typeof next.timeoutMs === 'number' && next.timeoutMs > 0) {
      config.timeoutMs = next.timeoutMs;
    }
    if (next.lang === 'auto' || next.lang === 'en' || next.lang === 'ko') {
      config.lang = next.lang;
    }
    if (typeof next.storeUrl === 'string' && next.storeUrl) {
      config.storeUrl = next.storeUrl;
    }
    if (typeof next.homepageUrl === 'string' || next.homepageUrl === null) {
      config.homepageUrl = next.homepageUrl || null;
    }
    if (typeof next.onInstallClick === 'function' || next.onInstallClick === null) {
      config.onInstallClick = next.onInstallClick || null;
    }
    if (typeof next.onHomeClick === 'function' || next.onHomeClick === null) {
      config.onHomeClick = next.onHomeClick || null;
    }
    // Re-render the launcher if it's already mounted so changes to
    // labels / homepage visibility / lang take effect immediately.
    if (launcherHost) renderLauncher();
  }

  // --- Exit notification --------------------------------------------------
  var exitHandlers = [];
  function emitExited() {
    try { window.dispatchEvent(new Event(EXITED_EVENT)); }
    catch (_) {}
    for (var i = 0; i < exitHandlers.length; i++) {
      try { exitHandlers[i](); } catch (_) {}
    }
  }
  window.addEventListener('message', function (ev) {
    var d = ev.data;
    if (!d || d.source !== EXT_SOURCE) return;
    if (d.type !== 'exited') return;
    emitExited();
  });

  function onExit(handler) {
    if (typeof handler !== 'function') return function () {};
    exitHandlers.push(handler);
    return function () {
      var i = exitHandlers.indexOf(handler);
      if (i >= 0) exitHandlers.splice(i, 1);
    };
  }

  // --- Launcher / install prompt UI --------------------------------------
  // Single Shadow-DOM-isolated component that swaps between two
  // states without remounting:
  //
  //   - "tour mode"    : extension is installed → shows the Take-the-tour
  //                      pill. Click runs the configured scenario.
  //   - "install mode" : extension is missing → shows Install Manuscript
  //                      Web Store, plus optional Learn-more link if
  //                      homepageUrl is configured. Has a × dismiss
  //                      that persists in localStorage.
  //
  // Hosts that prefer their own button keep working — they just don't
  // call mountLauncher(). The install prompt still pops on a failed
  // load()/play() unless config.banner === false.
  var launcherHost = null;     // outer <div> in document
  var launcherRoot = null;     // ShadowRoot
  var launcherOpts = null;     // { scenario, scenarioUrl, label }
  var launcherInstallMode = false;

  function dismissedForCurrentVersion() {
    try {
      var v = localStorage.getItem(DISMISS_KEY);
      return v === '0.1.3';
    } catch (_) {
      return false;
    }
  }

  function markDismissed() {
    try { localStorage.setItem(DISMISS_KEY, '0.1.3'); } catch (_) {}
  }

  function detectLang() {
    if (config.lang === 'en' || config.lang === 'ko') return config.lang;
    try {
      var docLang = (document.documentElement.getAttribute('lang') ||
                     document.body && document.body.getAttribute('lang') ||
                     navigator.language || 'en').toLowerCase();
      if (docLang.indexOf('ko') === 0) return 'ko';
    } catch (_) {}
    return 'en';
  }

  function t(key) {
    var L = detectLang();
    var dict = {
      tour:       { en: 'Take the tour',         ko: '투어 시작' },
      install:    { en: 'Install Manuscript',    ko: 'Manuscript 설치' },
      learnMore:  { en: 'Learn more',            ko: '자세히 보기' },
      dismiss:    { en: 'Dismiss',               ko: '닫기' },
      installAria:{ en: 'Install the Manuscript extension', ko: 'Manuscript 확장 설치' },
      tourAria:   { en: 'Start the Manuscript tour', ko: 'Manuscript 투어 시작' },
    };
    return (dict[key] && dict[key][L]) || (dict[key] && dict[key].en) || key;
  }

  // Inline styles — replicates tokens.css colors/shadow/radius so the
  // launcher looks consistent on hosts that don't ship the design
  // system. Shadow DOM isolation means we don't need !important.
  var LAUNCHER_CSS = [
    ':host{all:initial;}',
    '.mn-launcher{',
      'position:fixed;right:24px;bottom:24px;z-index:2147483647;',
      'display:inline-flex;align-items:center;gap:8px;',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Pretendard Variable",Pretendard,Roboto,sans-serif;',
      'font-size:14px;font-weight:500;line-height:1.4;',
      'border:0;border-radius:999px;cursor:pointer;',
      'padding:10px 16px 10px 14px;',
      'background:oklch(0.20 0.020 240);color:oklch(0.99 0.003 240);',
      'box-shadow:0 8px 22px rgba(0,0,0,0.18),0 2px 6px rgba(0,0,0,0.10);',
      'opacity:0.92;transition:opacity 0.15s ease,transform 0.15s ease;',
    '}',
    '.mn-launcher:hover{opacity:1;transform:translateY(-1px);}',
    '.mn-launcher:focus-visible{outline:2px solid oklch(0.60 0.13 245);outline-offset:2px;}',
    '.mn-launcher .mn-icon{display:inline-block;width:14px;height:14px;flex:0 0 auto;}',
    '.mn-launcher .mn-label{letter-spacing:0.01em;}',
    /* install mode — same chip footprint but with an inline secondary
       link + dismiss × */
    '.mn-install{',
      'position:fixed;right:24px;bottom:24px;z-index:2147483647;',
      'display:inline-flex;align-items:center;gap:6px;',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Pretendard Variable",Pretendard,Roboto,sans-serif;',
      'font-size:14px;line-height:1.4;',
      'background:oklch(1 0 0);color:oklch(0.20 0.020 240);',
      'border:1px solid oklch(0.84 0.010 240);',
      'border-radius:999px;',
      'padding:6px 6px 6px 14px;',
      'box-shadow:0 8px 22px rgba(0,0,0,0.18),0 2px 6px rgba(0,0,0,0.10);',
    '}',
    '.mn-install-cta{',
      'appearance:none;border:0;background:oklch(0.48 0.085 245);color:oklch(0.99 0.003 240);',
      'font:inherit;font-weight:500;cursor:pointer;',
      'padding:6px 14px;border-radius:999px;display:inline-flex;align-items:center;gap:6px;',
    '}',
    '.mn-install-cta:hover{background:oklch(0.40 0.090 245);}',
    '.mn-install-cta:focus-visible{outline:2px solid oklch(0.60 0.13 245);outline-offset:2px;}',
    '.mn-install-home{',
      'appearance:none;border:0;background:transparent;color:oklch(0.50 0.015 240);',
      'font:inherit;cursor:pointer;padding:6px 8px;border-radius:6px;text-decoration:underline;',
    '}',
    '.mn-install-home:hover{color:oklch(0.20 0.020 240);background:oklch(0.965 0.006 240);}',
    '.mn-install-x{',
      'appearance:none;border:0;background:transparent;color:oklch(0.66 0.010 240);',
      'font:inherit;font-size:18px;line-height:1;cursor:pointer;',
      'width:28px;height:28px;border-radius:50%;display:inline-grid;place-items:center;',
    '}',
    '.mn-install-x:hover{background:oklch(0.965 0.006 240);color:oklch(0.20 0.020 240);}',
    '.mn-install-x:focus-visible{outline:2px solid oklch(0.60 0.13 245);outline-offset:2px;}',
    /* dark-mode follow: if host page sets data-palette ending in -dark
       on body, mirror the dark surface tones */
    '@media (prefers-color-scheme: dark){',
      '.mn-launcher{background:oklch(0.19 0.012 245);color:oklch(0.97 0.003 245);}',
      '.mn-install{background:oklch(0.14 0.010 245);color:oklch(0.97 0.003 245);border-color:oklch(0.32 0.012 245);}',
      '.mn-install-home{color:oklch(0.78 0.006 245);}',
      '.mn-install-home:hover{color:oklch(0.97 0.003 245);background:oklch(0.19 0.012 245);}',
      '.mn-install-x{color:oklch(0.62 0.008 245);}',
      '.mn-install-x:hover{background:oklch(0.19 0.012 245);color:oklch(0.97 0.003 245);}',
    '}',
    /* respect users who don't want motion */
    '@media (prefers-reduced-motion:reduce){',
      '.mn-launcher{transition:none;}',
    '}',
  ].join('');

  // SVG icons — kept inline so the bundle is one file, no fetches.
  var PLAY_SVG =
    '<svg class="mn-icon" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">' +
    '<path d="M3 2.5v9l8-4.5-8-4.5z"/></svg>';
  var INSTALL_SVG =
    '<svg class="mn-icon" viewBox="0 0 14 14" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M7 1v8M3.5 6L7 9l3.5-3M2 11h10"/></svg>';

  function ensureHost() {
    if (launcherHost) return;
    if (typeof document === 'undefined' || !document.body) return;
    launcherHost = document.createElement('div');
    launcherHost.setAttribute('data-manuscript-bridge', 'launcher');
    // attach to documentElement so host page's stacking contexts don't
    // bury the chip behind a modal or sticky header.
    document.documentElement.appendChild(launcherHost);
    launcherRoot = launcherHost.attachShadow({ mode: 'open' });
    var style = document.createElement('style');
    style.textContent = LAUNCHER_CSS;
    launcherRoot.appendChild(style);
  }

  function renderLauncher() {
    if (!launcherRoot) return;
    // wipe previous content (preserve <style>)
    var nodes = Array.prototype.slice.call(launcherRoot.childNodes);
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeName !== 'STYLE') launcherRoot.removeChild(nodes[i]);
    }

    if (launcherInstallMode) {
      var wrap = document.createElement('div');
      wrap.className = 'mn-install';

      var cta = document.createElement('button');
      cta.type = 'button';
      cta.className = 'mn-install-cta';
      cta.setAttribute('aria-label', t('installAria'));
      cta.innerHTML = INSTALL_SVG + '<span class="mn-label">' + escapeHtml(t('install')) + '</span>';
      cta.addEventListener('click', openStore);
      wrap.appendChild(cta);

      if (config.homepageUrl) {
        var home = document.createElement('button');
        home.type = 'button';
        home.className = 'mn-install-home';
        home.textContent = t('learnMore');
        home.addEventListener('click', openHomepage);
        wrap.appendChild(home);
      }

      var x = document.createElement('button');
      x.type = 'button';
      x.className = 'mn-install-x';
      x.setAttribute('aria-label', t('dismiss'));
      x.textContent = '×';
      x.addEventListener('click', function () {
        markDismissed();
        unmountLauncher();
      });
      wrap.appendChild(x);

      launcherRoot.appendChild(wrap);
      return;
    }

    // tour mode — single pill that starts replay.
    var label = (launcherOpts && launcherOpts.label) || t('tour');
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mn-launcher';
    btn.setAttribute('aria-label', t('tourAria'));
    btn.innerHTML = PLAY_SVG + '<span class="mn-label">' + escapeHtml(label) + '</span>';
    btn.addEventListener('click', launcherClick);
    launcherRoot.appendChild(btn);
  }

  function launcherClick() {
    var opts = launcherOpts || {};
    var run = Promise.resolve(opts.scenario || null);
    if (!opts.scenario && opts.scenarioUrl) {
      run = fetch(opts.scenarioUrl).then(function (r) {
        if (!r.ok) throw new Error('Failed to load scenario: ' + r.status);
        return r.json();
      });
    }
    run.then(function (scenario) {
      if (!scenario) {
        throw new Error('mountLauncher requires either `scenario` or `scenarioUrl`.');
      }
      return load(scenario).then(function () {
        return play({ standalone: opts.standalone !== false });
      });
    }).catch(function (err) {
      // ensureInstalled() inside load() has already shown the install
      // prompt — we just need to log if it's some other failure.
      if (err && err.message && err.message.indexOf('not installed') === -1) {
        try { console.error('[manuscript] launcher run failed:', err); } catch (_) {}
      }
    });
  }

  function showLauncher(opts) {
    var force = opts && opts.forceInstallMode === true;
    if (!config.banner && force) return; // host opted out of all UI
    if (dismissedForCurrentVersion() && force) return;
    ensureHost();
    if (!launcherHost) return;
    if (force) launcherInstallMode = true;
    renderLauncher();
  }

  function hideLauncherInstallMode() {
    if (!launcherHost) return;
    if (!launcherInstallMode) return;
    launcherInstallMode = false;
    // If a scenario was queued for the tour launcher, swap back to it;
    // otherwise just remove the host entirely.
    if (launcherOpts) {
      renderLauncher();
    } else {
      unmountLauncher();
    }
  }

  function mountLauncher(options) {
    var opts = options || {};
    launcherOpts = {
      scenario: opts.scenario || null,
      scenarioUrl: typeof opts.scenarioUrl === 'string' ? opts.scenarioUrl : null,
      label: typeof opts.label === 'string' ? opts.label : null,
      standalone: opts.standalone !== false,
    };
    if (!launcherOpts.scenario && !launcherOpts.scenarioUrl) {
      try {
        console.warn(
          '[manuscript] mountLauncher() needs either `scenario` or `scenarioUrl`.',
        );
      } catch (_) {}
    }
    ensureHost();
    if (!launcherHost) return;

    // Decide initial mode based on cached install state.
    //
    // `config.banner` controls the AUTO popup from ensureInstalled()
    // (load/play failure), not mountLauncher — the host called us
    // explicitly, so we always render something unless the user has
    // actively dismissed the install prompt for this bridge version.
    isInstalled().then(function (yes) {
      if (yes) {
        launcherInstallMode = false;
        renderLauncher();
      } else if (dismissedForCurrentVersion()) {
        // Extension missing AND user explicitly dismissed earlier —
        // honor the dismissal and tear down.
        unmountLauncher();
      } else {
        launcherInstallMode = true;
        renderLauncher();
      }
    });
  }

  function unmountLauncher() {
    if (!launcherHost) return;
    try { launcherHost.remove(); } catch (_) {}
    launcherHost = null;
    launcherRoot = null;
    launcherInstallMode = false;
    // keep launcherOpts so re-mount is possible
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return {
    // commands
    load: load,
    play: play,
    pause: pause,
    next: next,
    prev: prev,
    jump: jump,
    exit: exit,
    // discovery
    isInstalled: isInstalled,
    refreshInstalled: refreshInstalled,
    // navigation (new in 0.1.3)
    openStore: openStore,
    openHomepage: openHomepage,
    // launcher UI (new in 0.1.3)
    mountLauncher: mountLauncher,
    unmountLauncher: unmountLauncher,
    // config + exit notification
    configure: configure,
    onExit: onExit,
    version: '0.1.3',
  };
});
