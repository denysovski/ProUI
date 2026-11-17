# Colour (`CL`)

Colour has jobs: identity, hierarchy, state and meaning. These rules keep it doing those jobs.

## Strategy

- **CL-01 Pick a colour strategy before picking colours.** One of: **Restrained** (tinted neutrals plus one
  accent; the default for product UI), **Committed** (one strong colour covers 30–60 % of the surface),
  **Full palette** (three or four named roles), **Drenched** (the surface is the colour). Write the choice into
  the decisions record.
- **CL-02 Light or dark is decided, never defaulted.** Write one sentence about where the site is used (who,
  where, under what light) and let it decide. Neither mode is the safe choice.
- **CL-03 Colours come from the subject.** Take them from the product, its photography, its materials or its
  place, not from a generic palette generator. See `SL-01`, `SL-64` to `SL-67`.

## System

- **CL-04 Roles, not swatches.** Name colours by job: `bg`, `surface`, `surface-raised`, `text`, `text-muted`,
  `border`, `accent`, `accent-contrast`, `focus`, `success`, `warning`, `danger`, `info`. Components use roles,
  never raw values.
- **CL-05 Define colours in OKLCH.** `oklch()` keeps lightness steps even across hues, so ramps and dark-mode
  variants are predictable. Keep sRGB fallbacks only where old browsers matter.
- **CL-06 Tint the neutrals.** Greys lean slightly towards the brand hue (chroma about 0.005–0.02). Pure
  `#000` and `#fff` are rarely the right ground; near-black and off-white are.
- **CL-07 A small palette.** About 8–12 tokens for a marketing site, a few more for an app with states. Fewer
  opacities and fewer shades (`SL-07`).
- **CL-08 One meaning per colour.** If the accent means "you can click this", do not use it for decoration or
  static text. Status colours mean status only.

## Contrast and access

- **CL-09 Contrast table before building.** Check every text/background pair you will use: 4.5:1 for body
  text, 3:1 for large text (about 24 px, or 19 px bold), icons and control borders, 7:1 for small text when
  possible. Check both themes and hover/disabled states.
- **CL-10 Never colour alone.** Errors, status, chart series and required fields also carry a label, icon,
  pattern or shape. Check with a colour-blindness simulation.
- **CL-11 No grey text on coloured backgrounds.** Muted grey on a coloured surface drops contrast; use a tint
  of the surface colour or white/near-black at a checked ratio.

## Themes

- **CL-12 Dark mode is redesigned, not inverted.** Dim, slightly tinted grounds; raised surfaces get lighter,
  not shadowed; accents usually lose a little chroma and gain lightness; body text is off-white, not pure
  white. Large white areas in images are softened.
- **CL-13 Follow the system setting.** Respect `prefers-color-scheme`; add a manual switch only when people ask
  for it, and remember their choice. Support `prefers-contrast: more` with stronger borders and text.
- **CL-14 Elevation in dark mode is lighter, not darker.** Each raised layer (card, popover, dialog) is a step
  lighter than the one below.

## Use

- **CL-15 Accent sparingly.** The primary action, links, the current selection and focus. Not every icon,
  heading and border (`DC-11`).
- **CL-16 Respect culture and context.** Red can mean danger, loss or luck; green can mean gain or not. In
  charts and finance follow the audience's convention, and label the meaning.
