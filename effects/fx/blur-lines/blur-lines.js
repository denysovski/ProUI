// ProUI fx: blur lines. Usage: <h2 data-xfx-lines>Guided by our vision…</h2>, <p data-xfx-blur-in>…</p>
// Words are wrapped once; line numbers are measured after fonts load and again on resize.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('xfx-lines-ready');
  const targets = document.querySelectorAll('[data-xfx-lines]');
  for (const el of targets) {
    el.setAttribute('aria-label', el.textContent.trim().replace(/\s+/g, ' '));
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach((w, i) => {
      const s = document.createElement('span');
      s.className = 'xfx-word'; s.textContent = w; s.setAttribute('aria-hidden', 'true');
      el.append(s, i < words.length - 1 ? ' ' : '');
    });
  }
  const measure = () => {
    for (const el of targets) {
      let line = -1, top = null;
      for (const w of el.querySelectorAll('.xfx-word')) {
        if (w.offsetTop !== top) { top = w.offsetTop; line += 1; }
        w.style.setProperty('--line', line);
      }
    }
  };
  (document.fonts?.ready || Promise.resolve()).then(measure);
  addEventListener('resize', measure);
  document.querySelectorAll('[data-xfx-blur-in]').forEach((el, i) => el.style.setProperty('--i', el.dataset.i ?? i % 4));
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll('[data-xfx-lines], [data-xfx-blur-in]').forEach((el) => io.observe(el));
})();
