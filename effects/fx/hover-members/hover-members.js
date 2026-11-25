// ProUI fx: hover members. Markup:
// <section class="xfx-members" data-xfx-members data-default="Studio">
//   <ul class="xfx-members-row"><li><button type="button" data-name="Kaia"><img src="kaia.jpg" alt="Kaia, art director"></button></li>…</ul>
//   <p class="xfx-members-word" aria-hidden="true"></p>
// </section>
(() => {
  for (const root of document.querySelectorAll('[data-xfx-members]')) {
    const word = root.querySelector('.xfx-members-word');
    const buttons = [...root.querySelectorAll('[data-name]')];
    const fallback = root.dataset.default || '';
    const cursor = document.createElement('span');
    cursor.className = 'xfx-members-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>'; // proui-ignore SEC-06: static icon
    root.append(cursor);
    let current = null;
    const show = (text, isName) => {
      if (text === current) return;
      current = text;
      // the old word leaves from its own centred layer, so the new one can lay out freely
      const old = [...word.children].filter((s) => s.tagName === 'SPAN');
      if (old.length) {
        const ghost = document.createElement('span');
        ghost.className = 'xfx-members-ghost' + (word.classList.contains('is-name') ? ' is-name' : '');
        ghost.append(...old);
        word.append(ghost);
        setTimeout(() => ghost.remove(), 560);
      }
      word.classList.toggle('is-name', isName);
      [...text].forEach((c, i) => {
        const s = document.createElement('span');
        s.textContent = c === ' ' ? ' ' : c; s.style.setProperty('--i', i);
        word.insertBefore(s, word.querySelector('.xfx-members-ghost'));
      });
    };
    word.style.position = 'relative';
    show(fallback, false);
    const activate = (b) => {
      buttons.forEach((x) => x.classList.toggle('is-active', x === b));
      show(b ? b.dataset.name : fallback, !!b);
    };
    buttons.forEach((b) => {
      b.addEventListener('pointerenter', () => { activate(b); root.classList.add('is-hovering'); });
      b.addEventListener('focus', () => activate(b));
      b.addEventListener('blur', () => activate(null));
    });
    root.querySelector('.xfx-members-row').addEventListener('pointerleave', () => { activate(null); root.classList.remove('is-hovering'); });
    // the tag follows the pointer with a little lag
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const loop = () => { x += (tx - x) * .2; y += (ty - y) * .2; cursor.style.transform = `translate(${x}px, ${y}px)`; raf = Math.abs(tx - x) + Math.abs(ty - y) > .3 ? requestAnimationFrame(loop) : 0; };
    root.addEventListener('pointermove', (e) => {
      const r = root.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(loop);
    });
  }
})();
