# XSlop harden

Make the interface survive real data and real conditions.

- **Text:** very long names and titles, one character, empty, emoji, accents (č, ř, ů), German compound words,
  right-to-left text. Use `min-width: 0` on flex/grid children, `overflow-wrap: anywhere` where needed,
  line clamps with a way to see the full text.
- **Numbers:** zero, negative, millions, decimals and currencies, formatted with `Intl.NumberFormat` and
  `Intl.DateTimeFormat` for the locale.
- **Lists:** none, one, a thousand items (`PF-10`).
- **Network:** offline, slow 3G, timeouts, 400/401/403/404/429/500 responses, each with its own message and a
  way forward (`ST-03` to `ST-07`).
- **Input:** paste, autofill, double submit, back button after submit, session expiry mid-form (`ST-08`,
  `IX-14`).
- **Display:** 200 % zoom, 320 px width, landscape phone, very wide screens, dark mode, forced colours.
- **i18n:** allow 30–40 % longer translations; never build sentences from fragments; plural rules from an i18n
  library.
