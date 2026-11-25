// FRAMER gallery: the small interactions of sections that have no shared fx file.
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const progress = (el, start = 1, end = 0) => { const r = el.getBoundingClientRect(); return clamp((innerHeight * start - r.top) / (r.height + innerHeight * (start - end))); };
  const pinned = (el) => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); };
  const scrollers = [];
  const onScroll = (fn) => scrollers.push(fn);
  let raf = 0;
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; scrollers.forEach((f) => f()); }); }, { passive: true });

  // clocks
  const clocks = $$('[data-clock]');
  const tick = () => clocks.forEach((c) => { c.textContent = new Date().toLocaleTimeString('en-GB'); });
  tick(); setInterval(tick, 1000);

  // F-06 then and now
  $$('[data-f06]').forEach((el) => onScroll(() => el.style.setProperty('--p', reduce ? 1 : clamp(progress(el, .9, .2) * 1.6).toFixed(3))));
  // F-09 cycling placeholder and chips
  $$('[data-f09]').forEach((input) => {
    const chips = $$('.pill', input.closest('section'));
    chips.forEach((c) => c.addEventListener('click', () => { input.value = c.textContent; input.focus(); }));
    if (reduce) return;
    let i = 0;
    setInterval(() => { if (document.activeElement !== input && !input.value) { i = (i + 1) % chips.length; input.placeholder = chips[i].textContent; } }, 2800);
  });
  // F-10 collage drift
  $$('[data-f10] .ph').forEach((p) => { const s = parseFloat(p.dataset.speed); onScroll(() => { if (reduce) return; const r = p.closest('section').getBoundingClientRect(); p.style.transform = `translateY(${(r.top * (s - 1)).toFixed(1)}px)`; }); });
  // F-12 folding header
  $$('[data-f12] .bar').forEach((bar) => onScroll(() => bar.classList.toggle('is-folded', bar.parentElement.getBoundingClientRect().top < -40)));
  // F-14 island
  $$('[data-island]').forEach((el) => { const b = $('button', el); b.addEventListener('click', () => { const o = !el.classList.contains('is-open'); el.classList.toggle('is-open', o); b.setAttribute('aria-expanded', String(o)); }); });
  // F-16 mega panel with direction
  $$('[data-f16]').forEach((root) => {
    const sheet = $('.sheet', root), panels = $$('.panel', root), btns = $$('.pill', root);
    let cur = -1, t;
    const open = (i) => {
      clearTimeout(t);
      panels.forEach((p, k) => { p.classList.toggle('is-on', k === i); p.classList.toggle('from-left', k === i && cur > i); });
      btns.forEach((b, k) => b.classList.toggle('is-on', k === i));
      cur = i; sheet.style.setProperty('--h', i < 0 ? '0px' : `${panels[i].offsetHeight}px`);
    };
    btns.forEach((b, i) => { b.addEventListener('mouseenter', () => open(i)); b.addEventListener('click', () => open(cur === i ? -1 : i)); });
    root.addEventListener('mouseleave', () => { t = setTimeout(() => open(-1), 220); });
  });
  // F-17 full-screen menu
  $$('[data-f17]').forEach((root) => { const b = $('.btn', root); b.addEventListener('click', () => { const o = !root.classList.contains('is-open'); root.classList.toggle('is-open', o); b.setAttribute('aria-expanded', String(o)); b.textContent = o ? 'Close' : 'Menu'; $$('.menu a', root).forEach((a) => { a.tabIndex = o ? 0 : -1; }); }); });
  // F-18 reading progress
  $$('[data-f18]').forEach((el) => onScroll(() => $('.crumbs', el).style.setProperty('--p', progress($('article', el), .2, .8).toFixed(3))));
  // F-19 logo wall turns one cell at a time
  $$('[data-f19]').forEach((root) => {
    if (reduce) return;
    const cells = $$('.cell', root); let n = 6, k = 0;
    setInterval(() => {
      const cell = cells[k % cells.length], old = $('span', cell), next = document.createElement('span');
      next.textContent = `[Client ${String.fromCharCode(65 + (n++ % 12))}]`; next.className = 'in'; cell.append(next);
      requestAnimationFrame(() => requestAnimationFrame(() => { next.className = ''; old.className = 'out'; }));
      setTimeout(() => old.remove(), 800); k += 2;
    }, 1800);
  });
  // F-22 slider
  $$('[data-f22]').forEach((root) => {
    const s = $$('.slide', root), c = $('[data-count]', root); let i = 0;
    const go = (d) => { i = (i + d + s.length) % s.length; s.forEach((x, k) => x.classList.toggle('is-on', k === i)); c.textContent = `${i + 1} of ${s.length}`; };
    $('[data-prev]', root).onclick = () => go(-1); $('[data-next]', root).onclick = () => go(1); go(0);
  });
  // follow image (F-24, F-45)
  const follow = $('.follow'), fimg = $('img', follow);
  let fx = 0, fy = 0, tx = 0, ty = 0, fr = 0;
  const loop = () => { fx += (tx - fx) * .18; fy += (ty - fy) * .18; follow.style.transform = `translate(${fx + 18}px, ${fy + 18}px)`; fr = Math.abs(tx - fx) + Math.abs(ty - fy) > .5 ? requestAnimationFrame(loop) : 0; };
  $$('[data-follow] [data-img]').forEach((row) => {
    row.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'mouse') return; fimg.src = row.dataset.img; follow.classList.add('is-on'); });
    row.addEventListener('pointerleave', () => follow.classList.remove('is-on'));
    row.addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; if (!fr) fr = requestAnimationFrame(loop); });
  });
  // F-28 sticky tour
  $$('[data-f28]').forEach((root) => {
    const names = $$('.names a', root), bar = $('.names i', root), shots = $$('.shots .media', root);
    const set = (i) => { names.forEach((n, k) => n.classList.toggle('is-on', k === i)); bar.style.setProperty('--y', `${names[i].offsetTop}px`); bar.style.setProperty('--h', `${names[i].offsetHeight}px`); };
    onScroll(() => { let best = 0; shots.forEach((s, k) => { if (s.getBoundingClientRect().top < innerHeight * .5) best = k; }); set(best); }); set(0);
  });
  // F-29 tabs with a moving highlight
  $$('[data-f29]').forEach((root) => {
    const tabs = $$('[role=tab]', root), hl = $('.hl', root), imgs = $$('.frame img', root);
    const set = (i, focus) => { tabs.forEach((t, k) => { t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1; }); imgs.forEach((m, k) => m.classList.toggle('is-on', k === i)); hl.style.setProperty('--x', `${tabs[i].offsetLeft}px`); hl.style.setProperty('--w', `${tabs[i].offsetWidth}px`); if (focus) tabs[i].focus(); };
    tabs.forEach((t, i) => { t.onclick = () => set(i); t.onkeydown = (e) => { if (e.key === 'ArrowRight') set((i + 1) % tabs.length, true); if (e.key === 'ArrowLeft') set((i - 1 + tabs.length) % tabs.length, true); }; });
    (document.fonts?.ready || Promise.resolve()).then(() => set(0));
  });
  // F-30 feature dialog
  $$('[data-f30]').forEach((root) => {
    const d = $('dialog', root); let from = null;
    $$('[data-open]', root).forEach((b) => b.onclick = () => { from = b; $('[data-title]', d).textContent = b.textContent.trim(); d.showModal(); });
    $('[data-close]', d).onclick = () => d.close(); d.addEventListener('close', () => from?.focus());
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
  });
  // F-31 comparison
  $$('[data-f31]').forEach((r) => { const set = () => r.parentElement.style.setProperty('--x', `${r.value}%`); r.oninput = set; set(); });
  // F-34 live demo
  $$('[data-f34]').forEach((r) => { const o = $('[data-f34o]', r.closest('.demo')); const set = () => { o.textContent = `€ ${Math.round(r.value * 12 * .35).toLocaleString('en-GB')}`; }; r.oninput = set; set(); });
  // F-35 tags pushed by the cursor
  $$('[data-f35]').forEach((cloud) => {
    if (reduce) return;
    const tags = $$('.tag', cloud);
    cloud.addEventListener('pointermove', (e) => tags.forEach((t) => {
      const r = t.getBoundingClientRect(), dx = r.left + r.width / 2 - e.clientX, dy = r.top + r.height / 2 - e.clientY, d = Math.hypot(dx, dy);
      const f = Math.max(0, 140 - d) / 140; t.style.transform = `translate(${dx / (d || 1) * f * 46}px, ${dy / (d || 1) * f * 46}px) rotate(${dx * f * .05}deg)`;
    }));
    cloud.addEventListener('pointerleave', () => tags.forEach((t) => { t.style.transform = ''; }));
  });
  // F-36 accordion swaps the image
  $$('[data-f36]').forEach((root) => { const ds = $$('details', root), im = $$('.frame img', root); ds.forEach((d, i) => d.addEventListener('toggle', () => { if (d.open) { ds.forEach((x) => { if (x !== d) x.open = false; }); im.forEach((m, k) => m.classList.toggle('is-on', k === i)); } })); });
  // F-38 hover index: brightness by distance
  $$('[data-f38]').forEach((root) => {
    const links = $$('.list a', root), imgs = $$('.prev img', root);
    const show = (k) => imgs.forEach((m, i) => m.classList.toggle('is-on', i === k));
    root.addEventListener('pointermove', (e) => { let best = 0, bd = 1e9; links.forEach((a, i) => { const r = a.getBoundingClientRect(); const d = Math.abs(e.clientY - (r.top + r.height / 2)); a.style.setProperty('--o', Math.max(.22, 1 - d / 260).toFixed(2)); if (d < bd) { bd = d; best = i; } }); show(best); });
    root.addEventListener('pointerleave', () => links.forEach((a) => a.style.removeProperty('--o')));
    links.forEach((a, i) => a.addEventListener('focus', () => { links.forEach((x) => x.style.setProperty('--o', x === a ? 1 : .3)); show(i); }));
    show(0);
  });
  // F-39 horizontal case study
  $$('[data-f39]').forEach((root) => { const strip = $('.strip', root); onScroll(() => { if (innerWidth < 761) return; const t = pinned(root); strip.style.setProperty('--tx', `${(-(strip.scrollWidth - innerWidth) * t).toFixed(1)}px`); }); });
  // F-43 lightbox
  $$('[data-f43]').forEach((root) => {
    const btns = $$('.grid button', root), d = $('dialog', root), big = $('dialog > img', root), cap = $('[data-cap]', d); let i = 0, from;
    const show = (k) => { i = (k + btns.length) % btns.length; big.src = $('img', btns[i]).src; cap.textContent = `Photo ${i + 1} of ${btns.length}`; };
    btns.forEach((b, k) => b.onclick = () => { from = b; show(k); d.showModal(); });
    $('[data-prev]', d).onclick = () => show(i - 1); $('[data-next]', d).onclick = () => show(i + 1); $('[data-close]', d).onclick = () => d.close();
    d.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') show(i + 1); if (e.key === 'ArrowLeft') show(i - 1); });
    d.addEventListener('close', () => from?.focus());
  });
  // F-44 centre strip scrolls slower than the page
  $$('.f44 .strip').forEach((s) => onScroll(() => { if (reduce) return; const r = s.parentElement.getBoundingClientRect(); s.style.transform = `translateY(${(-r.top * .35 - 80).toFixed(1)}px)`; }));
  // F-46 reel grows
  $$('[data-f46]').forEach((b) => b.onclick = () => b.classList.toggle('is-big'));
  // F-47 rail
  $$('[data-f47]').forEach((rail) => { const steps = $$('.step', rail); onScroll(() => { const p = reduce ? 1 : clamp(progress(rail, .8, .3) * 1.3); rail.style.setProperty('--p', p.toFixed(3)); steps.forEach((s, i) => s.classList.toggle('is-on', p >= i / steps.length)); }); });
  // F-48 pinned process
  $$('[data-f48]').forEach((root) => { const li = $$('li', root), im = $$('.frame img', root); onScroll(() => { const k = Math.min(li.length - 1, Math.floor(pinned(root) * li.length)); li.forEach((x, i) => x.classList.toggle('is-on', i === k)); im.forEach((x, i) => x.classList.toggle('is-on', i <= k)); }); });
  // F-50 timeline draws
  $$('[data-f50]').forEach((tl) => onScroll(() => tl.style.setProperty('--p', reduce ? 1 : progress(tl, .7, .5).toFixed(3))));
  // F-51 manifesto parts around the photo
  $$('[data-f51]').forEach((root) => {
    const lines = $('.lines', root), ps = $$('p', lines), photo = $('.photo', root);
    onScroll(() => {
      const t = pinned(root); lines.style.setProperty('--ty', `${(-t * (lines.offsetHeight + innerHeight)).toFixed(1)}px`);
      const pr = photo.getBoundingClientRect();
      ps.forEach((p) => { const r = p.getBoundingClientRect(); const d = Math.abs((r.top + r.height / 2) - (pr.top + pr.height / 2)); const g = Math.max(0, 1 - d / (pr.height * .75)); p.style.setProperty('--g', (g * pr.width * .62).toFixed(1)); });
    });
  });
  // F-59 bars grow once
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .4 });
  $$('[data-f59]').forEach((el) => io.observe(el));
  // F-60 odometer
  $$('[data-f60]').forEach((root) => {
    const digits = $('[data-digits]', root), val = $('[data-val]', root), btns = $$('.pill', root);
    const col = () => `<span class="d"><span>${[...'0123456789'].map((n) => `<i>${n}</i>`).join('')}</span></span>`;
    const set = (v) => { if (digits.children.length !== v.length) digits.innerHTML = /* proui-ignore SEC-06: static digits */ [...v].map(col).join(''); [...v].forEach((n, i) => digits.children[i].firstElementChild.style.setProperty('--v', n)); val.textContent = v; };
    btns.forEach((b) => b.onclick = () => { btns.forEach((x) => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); }); set(b.dataset.v); });
    set('836');
  });
  // F-62 plans switch
  $$('[data-f62]').forEach((root) => {
    const btns = $$('.sw button', root);
    const set = (monthly) => { btns.forEach((b) => b.setAttribute('aria-pressed', String((b.dataset.m === '1') === monthly))); $$('.plan', root).forEach((p) => { const [m, y] = $('.price', p).dataset.p.split(',').map(Number); $('.price', p).textContent = monthly ? `€ ${m}` : `€ ${y}`; $('.save', p).textContent = monthly ? '' : `You save € ${m * 12 - y} a year`; }); };
    btns.forEach((b) => b.onclick = () => set(b.dataset.m === '1'));
  });
  // F-63 FAQ, one open at a time
  $$('[data-f63]').forEach((root) => { const bs = $$('button', root); bs.forEach((b) => b.onclick = () => { const open = b.getAttribute('aria-expanded') !== 'true'; bs.forEach((x) => { x.setAttribute('aria-expanded', 'false'); $('#' + x.getAttribute('aria-controls')).classList.remove('is-open'); }); if (open) { b.setAttribute('aria-expanded', 'true'); $('#' + b.getAttribute('aria-controls')).classList.add('is-open'); } }); });
  // F-68 footer uncovered
  $$('[data-f68]').forEach((root) => { const f = $('footer', root); onScroll(() => f.style.setProperty('--p', reduce ? 1 : progress(f, 1, .6).toFixed(3))); });

  scrollers.forEach((f) => f());
})();
