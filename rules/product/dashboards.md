# Dashboards and product UI (`DB`)

For surfaces where the visitor is doing a job: dashboards, admin panels, tools, settings, data tables. Load
`modes/operate.md` with these rules. Patterns and references are in `inspiration/dashboards.md`; code in
`recipes/dashboard.md`.

## The shell

- **DB-01 The task before the look.** Someone who uses tools like this should know where everything is before
  they notice the style. Style comes through type, palette, density and one signature move, never through a
  strange layout or invented controls.
- **DB-02 A standard shell.** Side navigation (collapsible) or top bar, a page header with title and primary
  action, then the work area. Breadcrumbs for deep hierarchies, a command menu for power users.
- **DB-03 A second neutral for chrome.** Sidebar and toolbars sit on a slightly different neutral than the
  content surface, so structure is visible without borders everywhere.
- **DB-04 Density with a choice.** Comfortable by default, compact available where people scan many rows.
  Compact means tighter spacing, not smaller type below `TY-06`.

## Data

- **DB-05 Lead with the question.** The first thing on a dashboard answers the user's main question ("Are we on
  track this month?"), not a wall of equal KPI tiles.
- **DB-06 Numbers with context.** Every headline number shows its unit, its period and a comparison (vs last
  period, vs target) and, when it changes over time, a small trend line with the change marked.
- **DB-07 Charts that fit the question.** Line for change over time, bar for comparison, stacked bar for parts
  of a whole over time, table for exact values. No pie charts with more than about five slices, no 3D charts,
  no dual axes without labels.
- **DB-08 Honest charts.** Bar charts start at zero, axes are labelled with units, series are labelled directly
  where possible, and colour is never the only key (`CL-10`). Follow `dataviz` guidance for palettes.
- **DB-09 Real tables.** Sticky header, sortable columns with a visible sort state, right-aligned tabular
  numbers (`DC-18`), left-aligned text, row hover, selection with bulk actions, pagination or virtualisation
  for long lists (`PF-10`).
- **DB-10 Filters over what they filter.** Filters sit above or beside the data they scope, show what is
  active, and can be cleared in one action. The URL keeps filter state so views can be shared.

## States

- **DB-11 Skeletons, not spinners in content.** Loading tables and charts show their own shape (`ST-02`).
- **DB-12 Empty states teach.** A new account's empty dashboard explains what will appear and offers the first
  action, with sample data clearly labelled as sample if shown (`ST-01`).
- **DB-13 Partial failure.** One failed widget shows its own error and retry; the rest of the dashboard keeps
  working.
- **DB-14 Status colours only for status.** Red for critical, amber for warning, green for success, blue for
  information, each with an icon or label. Inactive items are not shown in full-saturation colours.

## Behaviour

- **DB-15 Fast transitions.** 150–250 ms for UI changes, no page-load choreography, no decorative motion
  (`MO-02`).
- **DB-16 Inline over modal.** Edit in place or in a side panel; keep context. Modals only for short focused
  tasks (`IX-07`).
- **DB-17 Respect power users.** Keyboard navigation in tables, shortcuts for frequent actions, bulk
  operations, saved views.
- **DB-18 Realistic demo data.** Mockups and empty-account demos use plausible names, values and units, with
  one interesting state visible (an alert, a degraded service), never tiles of random numbers (`SL-20`).
