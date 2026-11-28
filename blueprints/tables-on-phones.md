# Tables on phones

> A table that does not fit a phone is rebuilt in six moves, not shrunk to 11 px or left to scroll sideways.

[Blueprints](README.md) · [Layout Rulebook](../rules/layout/README.md) · [Dashboards Rulebook](../rules/dashboards/README.md)

An invoices table with eight columns (number, customer, amount, status, issued, due, method, actions) on a
375 px phone becomes 11 px text in a sideways-scrolling box: nobody can read it, and the one thing people
came for (who owes what) is lost. Shrinking is not the fix. Restructure it (`LY-26`). The six moves follow a
video by Design Motion (September 2026).

## The six moves

| # | Move | What to do | Example |
| --- | --- | --- | --- |
| 1 | **Rank** by use, not position | sort the columns into **identity** (who or what), **value** (the number people act on) and **state** (status); everything else is secondary | Customer · Amount · Status |
| 2 | **Stack** two lines per row | name on the left, value on the right on the first line; state and one detail below | `Ada Lindqvist ……… $1,204.00` / `● Paid · Due Mar 4` |
| 3 | **Slot** one place for the value | the value keeps one right-aligned slot with tabular numbers, so the rows still read as a column of numbers (`DC-18`) | |
| 4 | **Label** the ambiguous | values that could mean several things get a word ("Due Mar 4", "Issued Feb 2"); obvious ones do not (a price needs no "Amount:") | |
| 5 | **Reveal** what is hidden | the secondary columns are one tap away: the row expands in place, or a bottom sheet opens with all fields and the actions. Hidden is not deleted, and it is never a new page | tap → number, method, issued, actions |
| 6 | **Breakpoint** owned by the table | the table switches layout by its own width with a container query, not the screen's, so it also works in a narrow sidebar or a split view on desktop | `@container (max-width: 700px)` |

Sorting and filtering stay available above the list (a sort select and filter chips), and the first column's
identity becomes the row's accessible name.

## Markup and CSS

One real `<table>` for every size: screen readers keep the table semantics, and only the layout changes.

```html
<div class="table-wrap">
  <table class="data">
    <caption class="sr-only">Invoices</caption>
    <thead>
      <tr><th scope="col">Invoice</th><th scope="col">Customer</th><th scope="col">Amount</th>
          <th scope="col">Status</th><th scope="col">Due</th><th scope="col"><span class="sr-only">Actions</span></th></tr>
    </thead>
    <tbody>
      <tr>
        <td data-slot="meta">INV-2041</td>
        <th scope="row" data-slot="identity">Ada Lindqvist</th>
        <td data-slot="value">$1,204.00</td>
        <td data-slot="state"><span class="status status--paid">Paid</span></td>
        <td data-slot="detail" data-label="Due">Mar 4</td>
        <td data-slot="actions"><button aria-expanded="false" aria-controls="inv-2041">Details</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

```css
.table-wrap { container-type: inline-size; }
.data { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
.data [data-slot="value"] { text-align: right; }

@container (max-width: 700px) {
  .data thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  .data tr {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: "identity value" "state detail";
    gap: 4px 16px;
    padding: 14px 0;
    border-bottom: 1px solid rgb(0 0 0 / 0.08);
  }
  .data td, .data th { display: block; padding: 0; text-align: left; }
  .data [data-slot="identity"] { grid-area: identity; font-weight: 600; }
  .data [data-slot="value"] { grid-area: value; text-align: right; }
  .data [data-slot="state"] { grid-area: state; display: flex; gap: 8px; align-items: center; }
  /* the one ambiguous detail gets its label, under the value */
  .data [data-slot="detail"] { grid-area: detail; text-align: right; color: var(--muted); }
  .data [data-slot="detail"]::before { content: attr(data-label) " "; }
  /* secondary columns wait for the tap */
  .data [data-slot="meta"], .data [data-slot="actions"] { display: none; }
  .data tr { cursor: pointer; }
}
```

The whole row opens the details (an expanding row or a bottom sheet with every field and the actions);
make sure a real `button` inside the row carries the action, so it works by keyboard, and that the expanded
content is announced (`aria-expanded`).

## Checks

- 320, 375 and 430 px wide, and the table inside a 360 px desktop sidebar: identity, value and state
  readable without sideways scrolling.
- Numbers still line up on the right.
- Every hidden field reachable by tap and by keyboard; nothing lost compared with the desktop table.
- Screen reader: the table and its row headers are announced; the visually hidden header row is still there.
