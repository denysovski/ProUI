# XSlop critique

A design review. It does not change code. Use `references/critique-rubric.md` and report with
`templates/reports/CRITIQUE.md`.

## Look

- Open the real page at desktop (1440) and mobile (390) widths, and walk the primary task. Screenshots are
  evidence; judge the rendered page, not the code.
- First impression in five seconds: what is it, for whom, what do I do? Write the honest answer.

## Score

- **Heuristics.** Score the ten usability heuristics 0–4 each (total out of 40).
- **Cognitive load.** Count choices per group (more than about four in one group is a flag), competing focal
  points, unexplained terms.
- **Personas.** Walk the main task as two or three personas from the rubric (power user, first-timer,
  accessibility user, mobile in a hurry, sceptical buyer) plus one from `PRODUCT.md`.
- **Slop.** List every `SL` rule the page breaks, with where.

## Report

- Issues tagged P0 (blocks the task), P1 (major), P2 (minor), P3 (polish), each with location, rule ID, why it
  matters and a concrete fix.
- What works and must be kept.
- The three fixes with the biggest effect.
