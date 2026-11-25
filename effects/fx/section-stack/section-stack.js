// ProUI fx: section stack. Usage: <main class="xfx-sstack" data-xfx-sstack><section>…</section><section>…</section></main>
// Sections taller than the screen still work: they stick only once their bottom reaches the bottom.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (const root of document.querySelectorAll('[data-xfx-sstack]')) {
    const secs = [...root.children];
    secs.forEach((s) => { if (s.offsetHeight > innerHeight) s.style.top = `${innerHeight - s.offsetHeight}px`; });
    let frame = 0;
    const update = () => {
      frame = 0;
      secs.forEach((s, i) => {
        const next = secs[i + 1];
        if (!next) return;
        const p = Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / innerHeight));
        s.style.setProperty('--s', (1 - .06 * p).toFixed(4));
        s.style.setProperty('--r', `${(p * 28).toFixed(1)}px`);
        s.style.setProperty('--b', (1 - .45 * p).toFixed(3));
      });
    };
    addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    update();
  }
})();
