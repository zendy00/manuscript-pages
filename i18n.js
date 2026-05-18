// Language toggle for the Manuscript landing page.
// We use the [data-en] / [data-ko] CSS-based visibility pattern (see styles.css)
// rather than a key dictionary — the page is single-author and the per-block
// translations stay together in the HTML, which is easier to keep in sync.

const STORAGE_KEY = 'manuscript-site-lang';
const SUPPORTED = ['en', 'ko'];

function pickInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch (_) {}
  const nav = (navigator.language || 'en').split('-')[0].toLowerCase();
  return SUPPORTED.includes(nav) ? nav : 'en';
}

function applyLang(lang) {
  document.body.setAttribute('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  const select = document.getElementById('lang-select');
  if (select && select.value !== lang) select.value = lang;
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) toggle.setAttribute('aria-label', lang === 'ko' ? '메뉴' : 'Menu');
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

function init() {
  applyLang(pickInitialLang());
  const select = document.getElementById('lang-select');
  if (select) {
    select.addEventListener('change', (e) => applyLang(e.target.value));
  }

  // Mobile hamburger toggle for the primary nav. The nav is hidden by
  // default at narrow widths (see styles.css media query); the toggle
  // adds .is-open to slide it down. Closes on link click, outside
  // click, and Escape.
  const nav = document.getElementById('primary-nav');
  const toggles = document.querySelectorAll('.nav-toggle');
  if (nav && toggles.length > 0) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      toggles.forEach((t) => t.setAttribute('aria-expanded', String(open)));
    };
    toggles.forEach((t) =>
      t.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!nav.classList.contains('is-open'));
      })
    );
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => setOpen(false))
    );
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(e.target)) return;
      if ([...toggles].some((t) => t.contains(e.target))) return;
      setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // Smooth-scroll for in-page nav links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  });

  // Active section highlight in guide TOC
  const tocLinks = Array.from(document.querySelectorAll('.guide-toc a'));
  if (tocLinks.length) {
    const sections = tocLinks
      .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            tocLinks.forEach((l) =>
              l.classList.toggle('is-active', l.getAttribute('href') === '#' + id)
            );
          }
        });
      },
      { rootMargin: '-30% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
