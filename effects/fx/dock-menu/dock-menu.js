// ProUI fx: dock menu. Markup:
// <div class="xfx-dock" data-xfx-dock>
//   <div class="xfx-dock-panel" id="dock-panel"><div class="xfx-dock-content">
//     <p class="xfx-dock-label">Menu</p><ul><li><a href="/">Homepage</a></li>…</ul><hr class="xfx-dock-rule">
//     <p class="xfx-dock-label">Social</p><ul>…</ul><a class="xfx-dock-cta" href="/deck.pdf">Pitchdeck</a></div></div>
//   <button class="xfx-dock-bar" aria-expanded="false" aria-controls="dock-panel">Menu
//     <span class="xfx-dock-lines" aria-hidden="true"><i></i><i></i><i></i></span>
//     <span class="xfx-dock-pill" aria-hidden="true"><span>Homepage</span><span>Close</span></span></button>
// </div>
// Wrap the rest of the page in <div data-xfx-recede>. Escape closes, focus stays inside while open.
(() => {
  for (const dock of document.querySelectorAll('[data-xfx-dock]')) {
    const bar = dock.querySelector('.xfx-dock-bar');
    const panel = dock.querySelector('.xfx-dock-panel');
    const veil = document.createElement('div');
    veil.className = 'xfx-dock-veil';
    document.body.append(veil);
    const links = [...panel.querySelectorAll('a')];
    links.forEach((a, i) => a.style.setProperty('--i', i));
    panel.inert = true;
    const page = document.querySelector('[data-xfx-recede]');
    const set = (open) => {
      if (open && page) page.style.transformOrigin = `50% ${scrollY - page.offsetTop + innerHeight / 2}px`;
      dock.classList.toggle('is-open', open);
      document.documentElement.classList.toggle('xfx-dock-open', open);
      bar.setAttribute('aria-expanded', String(open));
      bar.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      panel.inert = !open;
      if (open) setTimeout(() => links[0]?.focus({ preventScroll: true }), 220);
    };
    bar.addEventListener('click', () => set(!dock.classList.contains('is-open')));
    veil.addEventListener('click', () => set(false));
    links.forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => {
      if (!dock.classList.contains('is-open')) return;
      if (e.key === 'Escape') { set(false); bar.focus(); }
      if (e.key === 'Tab') {
        const f = [...links, bar];
        const i = f.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
      }
    });
  }
})();
