// ProUI fx: word split. Usage:
// <section class="xfx-wsplit" data-xfx-wsplit><div class="xfx-wsplit-stage">
//   <span class="xfx-wsplit-word">Made</span><div class="xfx-wsplit-media"><img …><img …><img …></div><span class="xfx-wsplit-word">here</span>
// </div></section>
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-xfx-wsplit] img:last-child').forEach((i) => i.classList.add('is-on')); return;
  }
  for (const root of document.querySelectorAll('[data-xfx-wsplit]')) {
    const imgs = [...root.querySelectorAll('.xfx-wsplit-media img')];
    let frame = 0;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const update = () => {
      frame = 0;
      const r = root.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      const p = ease(Math.min(1, t / .85));
      root.style.setProperty('--p', p.toFixed(4));
      const n = Math.min(imgs.length - 1, Math.floor(t * imgs.length));
      imgs.forEach((img, i) => img.classList.toggle('is-on', i === n));
    };
    addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    update();
  }
})();
