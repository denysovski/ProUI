// ProUI fx: roll link. Usage: <a class="xfx-roll" data-xfx-roll href="/work">Work</a>
// Splits the label into letters for the animation and keeps the real text for screen readers.
(() => {
  for (const el of document.querySelectorAll('[data-xfx-roll]')) {
    const text = el.textContent.trim();
    el.setAttribute('aria-label', el.getAttribute('aria-label') || text);
    el.textContent = '';
    [...text].forEach((c, i) => {
      const s = document.createElement('span');
      s.className = 'xfx-roll-char'; s.textContent = c; s.dataset.c = c; s.style.setProperty('--ci', i);
      s.setAttribute('aria-hidden', 'true');
      el.append(s);
    });
  }
})();
