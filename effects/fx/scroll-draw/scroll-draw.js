// ProUI fx: scroll draw. An SVG path draws itself as its section scrolls through the viewport.
// Usage: <svg data-xfx-draw data-start="0.85" data-end="0.25"><path d="…" fill="none" stroke="currentColor"/></svg>
// start/end: viewport positions (0 top, 1 bottom) where drawing begins and finishes.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (const svg of document.querySelectorAll('[data-xfx-draw]')) {
    const paths = [...svg.querySelectorAll('path, line, polyline, circle')];
    svg.setAttribute('aria-hidden', svg.getAttribute('aria-hidden') || 'true');
    if (reduce) continue;
    const start = parseFloat(svg.dataset.start || '0.85'), end = parseFloat(svg.dataset.end || '0.25');
    paths.forEach((p) => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.dataset.len = L; });
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = svg.getBoundingClientRect(), vh = innerHeight;
      const a = vh * start, b = vh * end; // top of svg moves from a to b
      const t = Math.min(1, Math.max(0, (a - r.top) / (a - b + r.height * .5)));
      paths.forEach((p) => { p.style.strokeDashoffset = p.dataset.len * (1 - t); });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    new IntersectionObserver(([e]) => { e.isIntersecting ? addEventListener('scroll', onScroll, { passive: true }) : removeEventListener('scroll', onScroll); update(); }).observe(svg);
  }
})();
