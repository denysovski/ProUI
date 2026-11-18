// XSlop fx: stack scroll. Usage: <ol class="xfx-stack" data-xfx-stack> <li>…</li> … </ol>
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (const list of document.querySelectorAll('[data-xfx-stack]')) {
    const cards = [...list.children];
    const minScale = parseFloat(list.dataset.minScale || '0.88');
    cards.forEach((c, i) => c.style.setProperty('--i', i));
    let frame = 0;
    const update = () => {
      frame = 0;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        // progress: how far the next card has travelled over this one (0..1)
        const a = card.getBoundingClientRect(), b = next.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, 1 - (b.top - a.top) / a.height));
        const depth = cards.length - 1 - i;
        card.style.setProperty('--s', (1 - (1 - minScale) * p * Math.min(1, depth / 2 + .5)).toFixed(4));
        card.style.setProperty('--d', (1 - .35 * p).toFixed(3));
      });
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { addEventListener('scroll', onScroll, { passive: true }); update(); }
      else removeEventListener('scroll', onScroll);
    });
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    io.observe(list);
  }
})();
