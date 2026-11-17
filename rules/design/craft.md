# Design craft (`DC`)

Small decisions that separate a considered design from a template.

- **DC-01 Delete filler badges.** Remove any badge, chip or label that does not carry information.
- **DC-02 Drop redundant labels.** No "Email:" above a field whose placeholder is already an email. No
  "Our Services" above three service cards. If the content says it, the label does not need to.
- **DC-03 Unitalicize random words.** Italics only for titles of works, foreign words or one deliberate
  emphasis.
- **DC-04 Mono only where needed.** Numbers that change or align (prices, timers, tables), codes, IDs.
- **DC-05 Use a design system.** Define tokens before building: colour, type scale (about 5–7 sizes),
  spacing scale (for example 4, 8, 12, 16, 24, 32, 48, 64, 96), radii, shadows, motion durations. Never
  invent a one-off value.
- **DC-06 Show the actual product.** Real screenshots, real photos, real UI. Mockups only of the real thing.
- **DC-07 Enlarge the main feature.** The most important thing on each page is clearly the biggest. Hierarchy
  is readable at a glance.
- **DC-08 Group with spacing.** Related items sit closer together, groups sit further apart. Spacing does
  the grouping before any border or background.
- **DC-09 Make headlines specific.** "Invoices sent in 30 seconds" beats "Revolutionise your finances".
- **DC-10 Emphasise the CTA.** One primary action per view, visually the strongest element. Secondary
  actions look secondary.
- **DC-11 One accent colour, used sparingly.** For the primary button, links and key highlights only.
- **DC-12 Keep icons consistent.** One set, one stroke width, one size grid, one corner style.
- **DC-13 Remove embellishments.** Ornaments, extra gradients and decorative shapes that say nothing go.
- **DC-14 Inner radius = outer radius − padding.** A card with 20 px radius and 8 px padding holds children
  with 12 px radius. Nested corners then look concentric.
- **DC-15 Text contrast.** WCAG AA at least: 4.5:1 for body text, 3:1 for large text and UI parts. Check
  muted text and dark mode especially.
- **DC-16 Wrap headlines properly.** `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs. No
  single orphaned word on the last line. Set a sensible max width (about 60–75 characters for body text).
- **DC-17 Align by eye, not by pixels.** Optically centre play triangles, arrows and round icons. Nudge
  icons next to text to sit on the visual centre line.
- **DC-18 Tabular numbers.** `font-variant-numeric: tabular-nums` for prices, timers, counters and table
  columns, so digits do not jump.
- **DC-19 Loading states everywhere.** See `ST-02`.
- **DC-20 Animate useful feedback.** Animation confirms something happened (added to bag, saved, error). It
  is never only decoration.
