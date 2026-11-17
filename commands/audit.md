# XSlop audit

A technical review of the implementation. It does not fix; it documents for other commands. Report with
`templates/reports/AUDIT.md`.

Score five dimensions 0–4 (total out of 20):

- **Accessibility** (`AX`, `DC-15`, `IX-05`): contrast, focus, keyboard, semantics, labels, reduced motion.
- **Performance** (`PF`): Lighthouse, Core Web Vitals, image weight, JavaScript size, layout shift, heavy
  visuals.
- **Theming** (`CL`, `DC-05`): tokens used everywhere, no hard-coded values, dark mode correct if offered.
- **Responsive** (`LY-14` to `LY-16`, `PE-04`): 360 to 1920 px, no horizontal scroll, touch targets, zoom.
- **Integrity** (`SL`, `scripts/xslop-scan.mjs`): slop patterns, design-system drift, placeholder content.

Bands: 18–20 excellent, 14–17 good, 10–13 acceptable, 6–9 poor, 0–5 critical.

Also list every `PE`, `SEO`, `SEC` and `GH` rule that fails or is not applicable, with the reason.
