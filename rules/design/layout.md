# Layout and spacing (`LY`)

## Hierarchy

- **LY-01 Most important first.** People read top to bottom and from the start edge. The main message and
  action sit near the top and the leading side (`DC-07`, `PE-02`).
- **LY-02 The squint test.** Blur the screen (or squint): you should still see one clear focal point, then two
  or three groups. If everything has equal weight, nothing leads.
- **LY-03 Progressive disclosure.** Show what most people need; put the rest behind a link, a disclosure, a tab
  or the next page. Do not put every option on the first screen.
- **LY-04 Separate controls from content.** Navigation and toolbars look like controls; content looks like
  content. A floating bar over content needs a clear edge or a scroll-edge fade, not a heavy box.

## Spacing

- **LY-05 One spacing scale on a 4 px base.** For example 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Every margin,
  padding and gap comes from it (`DC-05`).
- **LY-06 Proximity groups.** Space inside a group is clearly smaller than space between groups (at least about
  1.5–2×). Spacing groups before borders or backgrounds do (`DC-08`, `SL-12`).
- **LY-07 Vary the rhythm.** A page with the same gap everywhere is monotonous. Dense passages earn quiet ones;
  section spacing is larger than block spacing, which is larger than element spacing.
- **LY-08 Use `gap`.** Lay out with flex/grid `gap` instead of margins on children, so spacing stays
  consistent and no stray margin collapses.
- **LY-09 Comfortable padding.** Cards and buttons have enough inner padding that text never touches the edge;
  on phones, body text keeps at least 16 px from the screen edge (never under 12 px).

## Structure

- **LY-10 A grid with a reason.** A 12-column (or 4/8 on mobile) grid with fixed gutters, and content that
  sometimes breaks it on purpose. Align edges: things that look aligned must be aligned.
- **LY-11 Alignment and indentation show hierarchy.** Items on the same edge read as siblings; indented items
  read as children. Do not centre everything.
- **LY-12 Not every section is a centred stack.** Mix compositions: split, offset, full-bleed image, list,
  table, long text. A row of equal cards is the template (`SL-09`, `SL-57`).
- **LY-13 Real content widths.** Text blocks capped by measure (`TY-10`); images and data allowed wider; the
  page container about 1200–1440 px with fluid side padding.

## Adaptation

- **LY-14 Same function on every size.** A smaller screen may show less at once (sidebar becomes a drawer, a
  table becomes cards or scrolls) but never removes a feature.
- **LY-15 Container queries for components.** Components adapt to the space they get (`@container`), not only
  to the viewport, so the same card works in a sidebar and a main column.
- **LY-16 Respect safe areas.** `env(safe-area-inset-*)` for fixed bars on phones with notches and home
  indicators; sticky CTAs sit above the home indicator (`PE-03`).
