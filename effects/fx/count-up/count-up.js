// ProUI fx: count up. Usage: <span data-xfx-count="12500" data-prefix="" data-suffix=" +" data-decimals="0" data-duration="1600">12 500 +</span>
// The final value is in the HTML, so search engines, screen readers and no-JS visitors see it. Runs once in view.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = (t) => 1 - Math.pow(1 - t, 4);
  const lang = document.documentElement.lang || undefined;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      const el = e.target, to = parseFloat(el.dataset.xfxCount), dec = parseInt(el.dataset.decimals || '0', 10);
      const fmt = new Intl.NumberFormat(lang, { minimumFractionDigits: dec, maximumFractionDigits: dec });
      const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', dur = parseInt(el.dataset.duration || '1600', 10);
      el.setAttribute('aria-label', pre + fmt.format(to) + suf);
      const inner = document.createElement('span'); inner.setAttribute('aria-hidden', 'true'); el.replaceChildren(inner);
      if (reduce) { inner.textContent = pre + fmt.format(to) + suf; continue; }
      const t0 = performance.now();
      const tick = (now) => { const t = Math.min(1, (now - t0) / dur); inner.textContent = pre + fmt.format(to * ease(t)) + suf; if (t < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }
  }, { threshold: .6 });
  document.querySelectorAll('[data-xfx-count]').forEach((el) => io.observe(el));
})();
