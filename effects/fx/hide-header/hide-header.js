// ProUI fx: hide header. Usage: <header class="xfx-hide-header" data-xfx-hide-header data-threshold="120">…</header>
(() => {
  for (const h of document.querySelectorAll('[data-xfx-hide-header]')) {
    const threshold = parseFloat(h.dataset.threshold || '120');
    let last = scrollY, frame = 0;
    const update = () => {
      frame = 0;
      const y = scrollY, d = y - last;
      if (Math.abs(d) < 6) return;
      h.classList.toggle('is-hidden', d > 0 && y > threshold && !document.documentElement.matches('[data-menu-open]'));
      last = y;
    };
    addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
  }
})();
