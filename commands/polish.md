# ProUI polish

Refine an existing surface. Polish is not a hidden redesign: keep the visual world, content and behaviour. If
the concept is wrong, say so and suggest `bolder`, `quieter` or a new direction instead.

Fix in this order:

- broken tasks, misleading state, inaccessible paths
- missing states: loading, empty, error, success, disabled (`ST`, `IX-01`)
- flow, hierarchy, responsive and design-system drift (`LY`, `DC-05`)
- visual and motion inconsistencies: alignment, optical centring, icon sizes, radii, timing (`DC-14`,
  `DC-17`, `MO`)
- copy consistency (`CP-08`) and code cleanup

Classify each drift: missing token, one-off implementation, conceptual mismatch or local defect, and fix it at
the right level (a token, a shared component, or the one place).
