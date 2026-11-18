# ProUI colorize

A colour pass. Load `rules/color/README.md` and `rules/gradients/README.md`.

- Name the strategy (`CL-01`) and the light/dark reason (`CL-02`).
- Rebuild the palette as roles in OKLCH (`CL-04`, `CL-05`), tinted neutrals (`CL-06`).
- Produce a contrast table for every text/background pair in both themes (`CL-09`) and fix failures at the
  token.
- Define the signature gradient if the style uses one: stops from the palette, OKLCH interpolation, banding
  check, dark variant (`GR-02` to `GR-10`). Build it with a tool from `toolkit/gradients.md` or
  `recipes/gradients.md`.
- Check colour-blind safety of states and charts (`CL-10`).
