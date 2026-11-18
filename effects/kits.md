# Effect kits

> A kit is a small family of components that look like they belong together: same motion style, same kind of light, same depth. A modern site uses one kit from top to bottom instead of a mix of libraries. The kit sets the style; the effect level and the effect budget set how much of it is used.

[Effects library](README.md) · [Sections](../blueprints/sections.md) · [Levels](levels.md) · [Presets](presets.md)

## The effect budget

The level from the intake caps the kind of effect. The budget caps the number. Count every component that
moves on its own, reacts to the pointer, or renders on a canvas; hover colour changes and focus rings do not count.

| The user says or chose | Effects on the whole site | Signature moments |
| --- | --- | --- |
| "no effects", level None | 0 | 0 |
| "just a little", "a couple", "a few", "one or two 3D things" | **at most 2**, the user's number if they gave one | 1 |
| level Subtle | up to 4, all light (CSS or Motion) | 1 |
| level Modern | up to 6 on the home page, 2 on inner pages | 1 per page |
| level Immersive 3D | up to 8 on the home page, one 3D scene per page | 1 per page |

- A number the user gives always wins over the table: "two 3D models" means two, not two per page (`EF-20`).
- When the budget is small, spend it on the hero and on one section that explains the product (a feature
  tour, a gallery). Everything else stays plain.
- List the planned effects in the outline with their place, so the user sees the count before the build.

## The kits

Each kit lists what to use per section. Keep to one kit; when a section needs something the kit lacks, use a
plain version instead of borrowing from another kit.

### Quiet (Motion Primitives only)

For: Subtle level, classic, editorial, minimal, luxury, local businesses that want "a bit of life".
Feel: soft fades and blurs, gentle springs, no glow.

| Section | Component |
| --- | --- |
| Header | MP `animated-background` (active link) |
| Hero | MP `text-effect` (preset `fade-in-blur`, per word) on the headline |
| Content blocks | MP `in-view` and `animated-group` entrances, once |
| Logos | MP `infinite-slider` with `progressive-blur` |
| Cards | MP `tilt` (small angle) or `spotlight` inside the card |
| Work | MP `morphing-dialog` to open a project |
| Numbers | MP `animated-number` |
| Pricing toggle | MP `animated-background` + `sliding-number` |
| FAQ | MP `accordion` |
| Buttons | MP `magnetic` on the primary button only |

Install: copy from [kits/motion-primitives](kits/motion-primitives/) or `npx motion-primitives@latest add <name>`.

### Modern dark (Motion Primitives + Aceternity light effects)

For: Modern level, SaaS, developer tools, agencies, dark products.
Feel: thin beams and spotlights on near-black, glowing borders, crisp type.

| Section | Component |
| --- | --- |
| Header | ACE `floating-navbar` or `resizable-navbar` |
| Hero (signature) | **one of** ACE `spotlight-new`, `background-beams`, `lamp`; headline with MP `text-effect` |
| Product | real screenshot in ACE `container-scroll-animation` |
| Logos | MP `infinite-slider` |
| Features | ACE `bento-grid` with `glowing-effect` borders |
| Feature tour | ACE `sticky-scroll-reveal` (counts as the inner-page signature if used there) |
| Testimonials | ACE `animated-testimonials` |
| Pricing | ACE `moving-border` on the recommended plan's button only |
| FAQ | MP `accordion` |
| Final CTA | plain accent block (the hero already has the effect) |

Matching React Bits backgrounds if Aceternity's are not enough: `DarkVeil`, `Threads`, `LightRays`.

### Modern light (Motion Primitives + Aceternity surfaces)

For: Modern level, products, startups, services with a light brand.
Feel: soft gradients, subtle grain, depth from shadows rather than glow.

| Section | Component |
| --- | --- |
| Hero (signature) | **one of** ACE `aurora-background` (low intensity), `background-gradient-animation`, `noise-background`, RB `Grainient`, `SoftAurora`; headline with ACE `flip-words` or MP `text-loop` for one word |
| Logos | MP `infinite-slider` with `progressive-blur` |
| Features | ACE `bento-grid` or `card-hover-effect`; MP `tilt` for product shots |
| Work | ACE `apple-cards-carousel` or `focus-cards` |
| Before and after | MP `image-comparison` or ACE `compare` |
| Testimonials | ACE `card-stack` |
| Numbers | MP `animated-number` |
| FAQ | MP `accordion` |

### Immersive (Aceternity 3D + one 3D scene)

For: Immersive 3D level, campaigns, launches, portfolios, global companies.
Feel: one real 3D moment, everything around it calm so it stands out.

| Section | Component |
| --- | --- |
| Hero (signature) | **one of** ACE `3d-globe` / `globe` (real locations), `hero-parallax` (real product shots), RB `Orb`, 21st Spline Scene |
| Product story | ACE `container-scroll-animation` or `macbook-scroll` |
| Gallery | ACE `3d-marquee` or RB `DomeGallery` (this is the second 3D moment; stop here) |
| Cards | ACE `3d-card` for a few featured items |
| Everything else | Quiet kit |

### Retro (React Bits + Aceternity pixel effects)

For: Old-school feel at Subtle or Modern level.
Feel: pixels, dithering, terminal text, kept readable.

| Section | Component |
| --- | --- |
| Hero (signature) | **one of** RB `FaultyTerminal`, `Dither`, `PixelBlast`, ACE `dither-shader` |
| Headline | RB `DecryptedText` or MP `text-scramble` |
| Product | ACE `terminal` with real commands |
| Cards | RB `PixelCard` |
| Everything else | plain, mono font for data |

### Playful (React Bits + Motion Primitives springs)

For: Playful feel at Modern level.

| Section | Component |
| --- | --- |
| Hero (signature) | RB `Ballpit` or `BounceCards` with real products |
| Headline | RB `RotatingText` or MP `text-roll` |
| Navigation | RB `Dock` or ACE `floating-dock` on portfolios only |
| Buttons | RB `ClickSpark` on the primary action |
| FAQ | MP `accordion` |

## Prompt for the build

Use this text when asking for or writing a section, filled in from `xslop/DECISIONS.md`:

```text
Build the <section> for <site>. Kit: <kit>. Level: <level>. Effects left in the budget: <n>.
Content: <real content>. Primary action: <action>.
Use <component> from the kit, restyled to the tokens (--bg, --surface, --text, --accent, radius, fonts).
Remove the demo text and colours. Lazy-load anything with canvas or WebGL, pause it off screen,
give it a static fallback and a reduced-motion version. Keep all text real HTML.
If the budget is 0, build it plain.
```

## Rules

`EF-01` level, `EF-02` one hero effect, `EF-03` restyle, `EF-12` one GPU canvas, `EF-20` budget,
`EF-21` one kit, `SL-34` no pointer-chasing glows in working UI, `SL-68` marquees need real content.
