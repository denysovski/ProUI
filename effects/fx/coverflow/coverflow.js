// XSlop fx: coverflow. Usage: <div class="xfx-coverflow" data-xfx-coverflow> <ul class="xfx-coverflow-track">…</ul>
//   <div class="xfx-coverflow-nav"><button data-prev aria-label="Previous">←</button><button data-next aria-label="Next">→</button></div></div>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (const root of document.querySelectorAll('[data-xfx-coverflow]')) {
    const track = root.querySelector('.xfx-coverflow-track');
    const items = [...track.children];
    const tilt = parseFloat(getComputedStyle(root).getPropertyValue('--xfx-cf-tilt')) || 42;
    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = track.scrollLeft + track.clientWidth / 2;
      items.forEach((el) => {
        const c = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.max(-2, Math.min(2, (c - mid) / el.offsetWidth)); // -2..2 cards from centre
        const a = Math.abs(d);
        el.style.setProperty('--ry', `${-Math.sign(d) * Math.min(1, a) * tilt}deg`);
        el.style.setProperty('--tz', `${-a * 120}px`);
        el.style.setProperty('--sc', (1 - Math.min(a, 1) * .12).toFixed(3));
        el.style.setProperty('--o', (1 - Math.max(0, a - 1) * .6).toFixed(3));
        el.style.setProperty('--z', String(10 - Math.round(a * 3)));
        el.setAttribute('aria-current', a < .5 ? 'true' : 'false');
      });
    };
    if (!reduce) { track.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true }); addEventListener('resize', update); update(); }
    const step = (dir) => track.scrollBy({ left: dir * items[0].offsetWidth, behavior: reduce ? 'auto' : 'smooth' });
    root.querySelector('[data-prev]')?.addEventListener('click', () => step(-1));
    root.querySelector('[data-next]')?.addEventListener('click', () => step(1));
    track.setAttribute('tabindex', '0');
    track.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); } if (e.key === 'ArrowRight') { e.preventDefault(); step(1); } });
  }
})();
