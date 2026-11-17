# Dashboard recipes

Code for the `DB` rules. Plain HTML/CSS; adapt to the project's framework and component library.

## Shell (DB-02, DB-03)

```html
<div class="app">
  <nav class="app__nav" aria-label="Main">…</nav>
  <header class="app__header">
    <h1>Orders</h1>
    <div class="app__actions"><button class="btn btn--primary">New order</button></div>
  </header>
  <main class="app__main" id="main">…</main>
</div>
```

```css
.app {
  display: grid; min-height: 100dvh;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "nav header" "nav main";
}
.app__nav    { grid-area: nav; background: var(--surface-chrome); border-inline-end: 1px solid var(--border); }
.app__header { grid-area: header; display: flex; align-items: center; justify-content: space-between;
               gap: var(--space-4); padding: var(--space-4) var(--space-6); }
.app__main   { grid-area: main; padding: var(--space-6); container-type: inline-size; }
@media (max-width: 64rem) {
  .app { grid-template-columns: 1fr; grid-template-areas: "header" "main"; }
  .app__nav { display: none; } /* becomes a drawer opened from the header (LY-14) */
}
```

## Headline number with context (DB-06)

```html
<section class="metric" aria-labelledby="m-revenue">
  <h2 id="m-revenue" class="metric__label">Revenue, November</h2>
  <p class="metric__value">€48,210</p>
  <p class="metric__delta metric__delta--up"><span aria-hidden="true">▲</span> 12.4 % vs October</p>
  <svg class="metric__spark" viewBox="0 0 120 32" role="img" aria-label="Revenue trend over 30 days, rising">
    <polyline fill="none" stroke="currentColor" stroke-width="1.5" points="0,26 20,24 40,25 60,18 80,14 100,12 120,6"/>
  </svg>
</section>
```

```css
.metric__value { font-size: var(--text-2xl); font-variant-numeric: tabular-nums; font-weight: 600; }
.metric__delta--up   { color: var(--success); }
.metric__delta--down { color: var(--danger); }
```

## Table (DB-09)

```css
.table { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
.table thead th { position: sticky; top: 0; background: var(--surface); text-align: start;
                  font-weight: 600; border-block-end: 1px solid var(--border); }
.table td, .table th { padding: var(--space-2) var(--space-3); }
.table td.num, .table th.num { text-align: end; }
.table tbody tr:hover { background: var(--surface-hover); }
.table th[aria-sort] button { all: unset; cursor: pointer; }
.table-wrap { overflow-x: auto; } /* narrow screens scroll the table, not the page */
```

Sortable headers use `<th aria-sort="ascending">` with a button inside; the visible arrow matches.

## Skeleton (DB-11, ST-02)

```css
.skeleton { background: var(--surface-muted); border-radius: var(--radius-sm); position: relative; overflow: hidden; }
.skeleton::after {
  content: ""; position: absolute; inset: 0; transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, oklch(1 0 0 / 0.35), transparent);
  animation: shimmer 1.4s ease-in-out infinite;
}
@keyframes shimmer { to { transform: translateX(100%); } }
@media (prefers-reduced-motion: reduce) { .skeleton::after { animation: none; } }
```

Mark the loading region with `aria-busy="true"` and announce completion with a polite live region (`AX-15`).

## Widget error with retry (DB-13)

```html
<div class="widget-error" role="alert">
  <p>Couldn't load traffic sources. The analytics service didn't respond.</p>
  <button class="btn">Try again</button>
</div>
```
