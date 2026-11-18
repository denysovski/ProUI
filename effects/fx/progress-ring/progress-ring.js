// ProUI fx: progress ring. Usage: <button class="xfx-ring" data-xfx-ring aria-label="Back to top"></button>
(() => {
  const btn = document.querySelector('[data-xfx-ring]');
  if (!btn) return;
  const R = 25, C = 2 * Math.PI * R;
  btn.insertAdjacentHTML('afterbegin', `<svg viewBox="0 0 56 56" aria-hidden="true"><circle class="xfx-ring-track" cx="28" cy="28" r="${R}"/><circle class="xfx-ring-bar" cx="28" cy="28" r="${R}" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg><span class="xfx-ring-value" aria-hidden="true">0</span>`);
  const bar = btn.querySelector('.xfx-ring-bar'), val = btn.querySelector('.xfx-ring-value');
  let frame = 0;
  const update = () => {
    frame = 0;
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, scrollY / max) : 0;
    bar.style.strokeDashoffset = C * (1 - p);
    val.textContent = Math.round(p * 100);
    btn.classList.toggle('is-visible', scrollY > innerHeight * .5);
  };
  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
  addEventListener('resize', update);
  btn.addEventListener('click', () => { scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); document.querySelector('h1, main')?.focus?.({ preventScroll: true }); });
  update();
})();
