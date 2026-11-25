// ProUI fx: recede hero. Usage:
// <section class="xfx-recede" data-xfx-recede-hero data-speed=".15" data-shade=".78">
//   <img class="xfx-recede-media" src="team.jpg" alt="…"><div class="xfx-recede-shade"></div> <h1>…</h1></section>
// <section>next, light section</section>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (const hero of document.querySelectorAll('[data-xfx-recede-hero]')) {
    const speed = parseFloat(hero.dataset.speed || '.15');
    const maxShade = parseFloat(hero.dataset.shade || '.78');
    let start = 0, frame = 0;
    const measure = () => { hero.style.transform = ''; start = hero.getBoundingClientRect().top + scrollY; update(); };
    const update = () => {
      frame = 0;
      const y = Math.max(0, scrollY - start);
      const p = Math.min(1, y / hero.offsetHeight);
      if (!reduce) {
        hero.style.transform = `translate3d(0, ${(Math.min(y, hero.offsetHeight) * speed).toFixed(1)}px, 0)`;
        hero.style.setProperty('--xfx-img', `${(-7 + 7.5 * p).toFixed(2)}%`);
      }
      hero.style.setProperty('--xfx-shade', (p * maxShade).toFixed(3));
    };
    addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    addEventListener('resize', measure);
    measure();
  }
})();
