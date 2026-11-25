// ProUI fx: focus words. Usage: <p data-xfx-focus>We design brands that people remember.</p>
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (const el of document.querySelectorAll('[data-xfx-focus]')) {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', words.join(' '));
    el.textContent = '';
    const spans = words.map((w, i) => { const s = document.createElement('span'); s.className = 'xfx-fword'; s.textContent = w; s.setAttribute('aria-hidden', 'true'); el.append(s, i < words.length - 1 ? ' ' : ''); return s; });
    const frame = document.createElement('span');
    frame.className = 'xfx-fframe'; frame.setAttribute('aria-hidden', 'true'); frame.innerHTML = '<i></i><i></i><i></i><i></i>'; // proui-ignore SEC-06: static markup
    el.append(frame);
    let raf = 0, last = -1;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const t = (innerHeight * .75 - r.top) / (r.height + innerHeight * .35);
      el.classList.toggle('is-live', t > 0 && t < 1);
      const i = Math.min(spans.length - 1, Math.max(0, Math.floor(t * spans.length)));
      if (i === last) return;
      last = i;
      spans.forEach((s, k) => s.classList.toggle('is-on', k === i));
      const s = spans[i];
      frame.style.transform = `translate(${s.offsetLeft}px, ${s.offsetTop}px)`;
      frame.style.width = `${s.offsetWidth}px`; frame.style.height = `${s.offsetHeight}px`;
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    update();
  }
})();
