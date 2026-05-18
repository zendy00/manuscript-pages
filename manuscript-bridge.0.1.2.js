/**
 * Manuscript runtime bridge — v0.1.2
 *
 * Host page integration for the Manuscript Chrome extension.
 * The extension's content script must be injected on the host page —
 * this library only sends postMessage commands; it does not replay on
 * its own. If the extension is missing, `load()` rejects and (by
 * default) a small install banner is shown.
 *
 * Quick start (script tag):
 *   <script src="manuscript-bridge.0.1.2.js"></script>
 *   <script>
 *     await manuscript.load(scenarioJson);
 *     await manuscript.play();
 *   </script>
 *
 * Quick start (ESM):
 *   import manuscript from './manuscript-bridge.0.1.2.js';
 *   await manuscript.load(scenarioJson);
 *   await manuscript.play();
 *
 * API:
 *   manuscript.load(scenario)             — scenario: object | JSON string
 *   manuscript.play({ startIndex, paused })
 *   manuscript.pause()
 *   manuscript.next()
 *   manuscript.prev()
 *   manuscript.jump(index)
 *   manuscript.exit()
 *   manuscript.isInstalled()              — Promise<boolean>
 *   manuscript.configure({ banner: false, timeoutMs: 1500 })
 *
 * Cross-page note: scenarios that span multiple URLs only progress
 * while the extension is loaded on that page (which it is, on every
 * page where the user enabled Manuscript). If the user navigates to a
 * URL where the extension is not active, replay pauses silently.
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

  var config = {
    banner: true,
    timeoutMs: DEFAULT_TIMEOUT_MS,
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

      // Fast wake: if the extension's content script dispatches ready
      // after we start polling, retry immediately instead of waiting for
      // the next interval.
      readyHandler = function () {
        if (resolved) return;
        if (retryTimer !== null) window.clearTimeout(retryTimer);
        tryOnce();
      };
      window.addEventListener(READY_EVENT, readyHandler);

      tryOnce();
    });
  }

  function ensureInstalled() {
    return ping(config.timeoutMs).catch(function (err) {
      if (config.banner) showInstallBanner();
      throw err;
    });
  }

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
        // standalone (default true): bridge-initiated playback leaves no
        // authoring panel behind on exit. Pass `{ standalone: false }`
        // explicitly to fall back to the legacy panel-visible behavior.
        standalone: opts.standalone !== false,
      });
      return p;
    });
  }

  function pause() {
    postHost({ type: 'pause' });
    return Promise.resolve();
  }
  function next() {
    postHost({ type: 'next' });
    return Promise.resolve();
  }
  function prev() {
    postHost({ type: 'prev' });
    return Promise.resolve();
  }
  function jump(index) {
    postHost({ type: 'jump', index: index });
    return Promise.resolve();
  }
  function exit() {
    var requestId = newRequestId();
    var p = awaitReply(requestId, 'exit-ack', config.timeoutMs).catch(function () {
      // If extension is gone, the exit is effectively done from the host's view.
      return undefined;
    });
    postHost({ type: 'exit', requestId: requestId });
    return p;
  }

  function isInstalled() {
    return ping(config.timeoutMs).then(
      function () { return true; },
      function () { return false; },
    );
  }

  function configure(next) {
    if (!next || typeof next !== 'object') return;
    if (typeof next.banner === 'boolean') config.banner = next.banner;
    if (typeof next.timeoutMs === 'number' && next.timeoutMs > 0) {
      config.timeoutMs = next.timeoutMs;
    }
  }

  // Some hosts call load() before the content script has a chance to
  // attach its message listener. The extension dispatches a
  // `manuscript:ready` event on init — listening to it lets us retry
  // a queued operation, but for the public API we just rely on the
  // ping timeout (1.5s default) which is generous enough.
  window.addEventListener(READY_EVENT, function () {
    /* hook reserved for future queued-call replay */
  });

  // Listen for unsolicited 'exited' messages from the extension —
  // these fire when a replay ends (user hit ✕, last step finished
  // exit, etc.). Re-broadcast as a DOM CustomEvent on window so host
  // pages can wire `addEventListener('manuscript:exited', ...)` and
  // restore their own UI (e.g. show the launcher button again).
  var exitHandlers = [];
  function emitExited() {
    try {
      window.dispatchEvent(new Event(EXITED_EVENT));
    } catch (_) { /* very old browsers */ }
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

  /** Register a one-shot or persistent handler for replay exit.
   *  Returns a function that unregisters the handler. */
  function onExit(handler) {
    if (typeof handler !== 'function') return function () {};
    exitHandlers.push(handler);
    return function () {
      var i = exitHandlers.indexOf(handler);
      if (i >= 0) exitHandlers.splice(i, 1);
    };
  }

  // --- Install banner ----------------------------------------------------
  var bannerEl = null;
  function showInstallBanner() {
    if (bannerEl || typeof document === 'undefined') return;
    bannerEl = document.createElement('div');
    bannerEl.setAttribute('role', 'dialog');
    bannerEl.setAttribute('aria-live', 'polite');
    bannerEl.style.cssText = [
      'position:fixed', 'right:16px', 'bottom:16px', 'z-index:2147483647',
      'max-width:320px', 'padding:14px 16px',
      'background:#fff', 'color:#111',
      'border:1px solid rgba(0,0,0,0.12)',
      'border-radius:10px',
      'box-shadow:0 12px 36px rgba(0,0,0,0.18)',
      'font:14px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
    ].join(';');
    bannerEl.innerHTML =
      '<div style="font-weight:600;margin-bottom:6px;">Manuscript extension required</div>' +
      '<div style="opacity:0.78;margin-bottom:10px;">' +
      'This walkthrough needs the Manuscript Chrome extension. Install it and refresh this page.' +
      '</div>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end;">' +
      '<button data-mn-action="install" style="appearance:none;border:0;background:#111;color:#fff;padding:6px 12px;border-radius:6px;font-weight:600;cursor:pointer;">Install</button>' +
      '<button data-mn-action="dismiss" style="appearance:none;border:0;background:transparent;color:#444;padding:6px 12px;border-radius:6px;cursor:pointer;">Dismiss</button>' +
      '</div>';
    bannerEl.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !t.getAttribute) return;
      var action = t.getAttribute('data-mn-action');
      if (action === 'install') {
        window.open('https://chromewebstore.google.com/search/manuscript', '_blank', 'noopener');
      } else if (action === 'dismiss') {
        hideInstallBanner();
      }
    });
    document.body.appendChild(bannerEl);

    // Auto-dismiss if the extension shows up later (content script init
    // dispatches manuscript:ready).
    window.addEventListener(READY_EVENT, hideInstallBanner, { once: true });
  }

  function hideInstallBanner() {
    if (!bannerEl) return;
    bannerEl.remove();
    bannerEl = null;
  }

  return {
    load: load,
    play: play,
    pause: pause,
    next: next,
    prev: prev,
    jump: jump,
    exit: exit,
    isInstalled: isInstalled,
    configure: configure,
    onExit: onExit,
    version: '0.1.2',
  };
});
