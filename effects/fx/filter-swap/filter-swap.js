// ProUI fx: filter swap. Usage: see filter-swap.css. Buttons carry data-xfx-filter-btn="<tag>" ("*" = all),
// items carry data-tags="<tag> <tag>". One list per page by default; pass a root to filterSwap() for more.
// Timing: out 450/600 ms, swap at 260 ms, in with a 45 ms stagger (React or Vue: same classes, same timings).
(() => {
  const OUT = 260, STEP = 45;
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  function filterSwap(list = document.querySelector('[data-xfx-filter]'), buttons = document.querySelectorAll('[data-xfx-filter-btn]')) {
    if (!list) return;
    const items = [...list.children];
    let current = null, timer = 0;
    const match = (el, f) => f === '*' || (' ' + (el.dataset.tags || '') + ' ').includes(' ' + f + ' ');
    function apply(f) {
      if (f === current) return;
      current = f;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.xfxFilterBtn === f)));
      clearTimeout(timer);
      const show = items.filter((el) => match(el, f));
      if (reduce()) { items.forEach((el) => { el.hidden = !match(el, f); el.classList.remove('is-out'); }); return; }
      items.forEach((el) => { if (!el.hidden) el.classList.add('is-out'); });   // 1. the shown set fades out
      timer = setTimeout(() => {                                                // 2. swap
        items.forEach((el) => { el.hidden = !match(el, f); });
        show.forEach((el, i) => {                                               // 3. new set rises in, one by one
          el.classList.add('is-out');
          requestAnimationFrame(() => setTimeout(() => el.classList.remove('is-out'), i * STEP));
        });
      }, OUT);
    }
    buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.xfxFilterBtn)));
    const first = [...buttons].find((b) => b.getAttribute('aria-pressed') === 'true');
    apply(first ? first.dataset.xfxFilterBtn : '*');
  }
  window.filterSwap = filterSwap;
  filterSwap();
})();
