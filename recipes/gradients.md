# Gradient recipes

Code for the `GR` rules. Replace the colour values with the project's tokens.

## Tokens in OKLCH

```css
:root {
  --bg:        oklch(0.985 0.006 75);   /* tinted off-white (CL-06) */
  --text:      oklch(0.22 0.02 60);
  --accent:    oklch(0.62 0.19 35);
  --accent-2:  oklch(0.78 0.12 70);
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg:       oklch(0.18 0.012 60);
    --text:     oklch(0.93 0.01 75);
    --accent:   oklch(0.70 0.16 35);  /* lighter, slightly less chroma (CL-12) */
    --accent-2: oklch(0.66 0.10 70);
  }
}
```

## Linear gradient interpolated in OKLCH (GR-05)

```css
.band {
  background: linear-gradient(in oklch 135deg, var(--accent), var(--accent-2));
}
/* fallback for browsers without interpolation syntax */
@supports not (background: linear-gradient(in oklch, red, blue)) {
  .band { background: linear-gradient(135deg, var(--accent), var(--accent-2)); }
}
```

## Soft mesh from layered radials (GR-07)

The brightest area sits where the content needs light, here behind the product image on the right.

```css
.hero {
  background:
    radial-gradient(60% 70% at 75% 40%, oklch(0.80 0.10 70 / 0.9), transparent 70%),
    radial-gradient(50% 60% at 15% 85%, oklch(0.70 0.14 35 / 0.6), transparent 70%),
    radial-gradient(40% 50% at 95% 95%, oklch(0.60 0.12 20 / 0.5), transparent 70%),
    var(--bg);
}
```

## Eased stops against banding (GR-06, GR-08)

```css
.fade-to-bg {
  background: linear-gradient(to bottom,
    oklch(0.62 0.19 35) 0%,
    oklch(0.62 0.19 35 / 0.74) 19%,
    oklch(0.62 0.19 35 / 0.54) 34%,
    oklch(0.62 0.19 35 / 0.38) 47%,
    oklch(0.62 0.19 35 / 0.24) 60%,
    oklch(0.62 0.19 35 / 0.12) 74%,
    oklch(0.62 0.19 35 / 0.04) 87%,
    oklch(0.62 0.19 35 / 0) 100%);
}
```

For very large smooth areas, overlay an exported noise texture at very low opacity so 8-bit screens do not show
steps. This is anti-banding, not a visible grain effect:

```css
.hero::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: url("/textures/noise-256.png"); /* a small tileable noise PNG */
  opacity: 0.03; mix-blend-mode: overlay;
}
```

## Scrim for text over a gradient or photo (GR-09)

```css
.hero__text { position: relative; }
.hero__text::before {
  content: ""; position: absolute; inset: -2rem; z-index: -1;
  background: radial-gradient(closest-side, oklch(0 0 0 / 0.35), transparent);
}
```

## Animated gradient, only while visible (GR-13, PF-21)

```js
const el = document.querySelector('.hero');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const io = new IntersectionObserver(([e]) => {
  el.classList.toggle('is-animating', e.isIntersecting && !reduce.matches);
});
io.observe(el);
```

```css

.hero.is-animating { animation: drift 18s ease-in-out infinite alternate; }
@property --x { syntax: "<percentage>"; inherits: false; initial-value: 75%; }
@keyframes drift { to { --x: 60%; } }
.hero { background: radial-gradient(60% 70% at var(--x) 40%, var(--accent-2), transparent 70%), var(--bg); }
```
