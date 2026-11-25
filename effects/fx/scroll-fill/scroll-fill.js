// ProUI fx: scroll fill. Usage: <p data-xfx-fill>The gap between how good you are and how good you look…</p>
(() => {
  for (const el of document.querySelectorAll('[data-xfx-fill]')) {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', words.join(' '));
    el.innerHTML = words.map((w) => `<span class="xfx-fw" aria-hidden="true">${w.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))}</span>`).join(' '); // proui-ignore SEC-06: words escaped
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) continue;
    const spans = [...el.children];
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      // 0 when the top enters at 85 % of the screen, 1 when the bottom reaches 40 %
      const t = Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .45)));
      spans.forEach((s, i) => s.style.setProperty('--f', Math.min(1, Math.max(0, t * spans.length - i)).toFixed(3)));
    };
    addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    update();
  }
})();
