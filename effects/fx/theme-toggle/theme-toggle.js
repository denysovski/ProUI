// ProUI fx: theme toggle. Usage: <button class="xfx-theme-toggle" data-xfx-theme-toggle aria-label="Dark theme" aria-pressed="false">…icon…</button>
// Sets data-theme="light|dark" on <html>, remembers the choice, follows the system on first visit.
(() => {
  const root = document.documentElement;
  const KEY = 'xfx-theme';
  const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const save = (v) => { try { localStorage.setItem(KEY, v); } catch {} };
  const initial = read() || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.dataset.theme = initial;
  const sync = () => document.querySelectorAll('[data-xfx-theme-toggle]').forEach((b) => b.setAttribute('aria-pressed', String(root.dataset.theme === 'dark')));
  sync();
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-xfx-theme-toggle]');
    if (!btn) return;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const apply = () => { root.dataset.theme = next; save(next); sync(); };
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return apply();
    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    root.style.setProperty('--xfx-x', `${x}px`);
    root.style.setProperty('--xfx-y', `${y}px`);
    root.style.setProperty('--xfx-r', `${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px`);
    document.startViewTransition(apply);
  });
})();
