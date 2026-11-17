# Gradients and backgrounds (`GR`)

Gradients are not slop. Default gradients are. These rules describe gradients that look made on purpose,
and where to make them (`toolkit/gradients.md`, `toolkit/shapes-and-backgrounds.md`, `recipes/gradients.md`).

## When

- **GR-01 A gradient needs a job.** Lighting a product, setting a time of day, carrying a brand colour across a
  whole surface, separating a section from the next. "The section looked empty" is not a job (`SL-02`).
- **GR-02 One signature gradient per site.** Reuse it in two or three places (hero, one feature, the footer or
  OG image). Different gradients in every section are noise.
- **GR-03 Not in text, not as a border glow.** No gradient-filled headlines (`SL-28`), no glowing gradient
  borders around cards (`SL-54`).

## How

- **GR-04 Colours from the palette.** Stops come from the colour tokens (`CL-04`), or from the hero photo.
  Never the purple-to-blue default (`SL-01`).
- **GR-05 Interpolate in OKLCH.** `linear-gradient(in oklch, …)` avoids the grey, muddy middle that sRGB
  gradients get between distant hues. Close hues are safer than opposite ones.
- **GR-06 Few stops, soft transitions.** Two to four stops. Use easing stops (extra stops along a curve) so
  there is no visible band edge.
- **GR-07 Mesh gradients from layered radials.** Build soft "mesh" backgrounds from two to four overlapping
  `radial-gradient()` layers on a base colour, or export one from a gradient tool as an image. Keep the
  brightest area behind the content that matters, not dead centre by reflex (`SL-55`).
- **GR-08 Fight banding.** Large smooth gradients band on 8-bit screens. Add very subtle noise (an exported
  noise PNG at 2–4 % opacity, or noise baked into an exported image), or export with dithering. Grain as a
  visible effect is a style choice (`SL-08`, `DITHER GRAIN`).
- **GR-09 Check text on gradients.** Measure contrast at the lightest and darkest point behind the text, not
  the average. If it fails anywhere, add a scrim or move the text.
- **GR-10 Both themes.** A gradient designed on light may glow on dark. Define a dark variant with lower
  lightness and chroma.

## Backgrounds, patterns and shapes

- **GR-11 Backgrounds hold back.** A background texture or pattern sits at low contrast so it never competes
  with type. If you notice it before the headline, it is too strong.
- **GR-12 Patterns from a real system.** Use generated patterns with a clear logic (grid, radial, flow,
  isometric) from a pattern tool, tuned to the palette, instead of hand-drawn random shapes (`SL-70`).
- **GR-13 Export the right format.** SVG for patterns and shapes (optimised with SVGO), AVIF/WebP for photo-like
  gradients and mesh exports, CSS only when the gradient is simple. Animated shader gradients render only while
  visible and stop for reduced motion (`PF-21`).
- **GR-14 Dividers with intent.** Wave or angled section dividers only when the style is organic or playful,
  and the same divider shape across the site.
