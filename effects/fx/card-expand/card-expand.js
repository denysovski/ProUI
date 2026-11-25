// ProUI fx: card expand. Usage: <section class="xfx-cexpand" data-xfx-cexpand style="--inset: 5vw"> <h2 data-rise>…</h2> …</section>
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (const el of document.querySelectorAll('[data-xfx-cexpand]')) {
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, 1 - top / (innerHeight * .9)));
      el.style.setProperty('--p', p.toFixed(4));
      el.style.setProperty('--rise', Math.min(1, Math.max(0, (p - .75) / .25)).toFixed(3));
    };
    addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    update();
  }
})();
