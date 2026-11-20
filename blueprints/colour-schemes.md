# Colour schemes

> A method for building a website palette that fits the subject, stays accessible and has a clear accent, plus starter palettes for each feel from the intake. Starters are a starting point: shift hue and chroma toward the brand before using one.

[Blueprints](README.md) · [Colour Rulebook](../rules/color/README.md) · [Gradients Rulebook](../rules/gradients/README.md) · [Type pairing](type-pairing.md)

## The method

| Step | What to do | Rules |
| --- | --- | --- |
| Start from the subject | collect colours that already belong to it: the logo, the product, the photography, the place, the material. A bakery's crust, a forest's greens, a law firm's ink and paper | `CL-03` |
| Pick a strategy | **monochrome + accent** (one hue for everything, one accent for actions), **analogous** (neighbouring hues, calm), **complementary** (two opposite hues, energetic, one dominates), **neutral + signal** (greys tinted toward the brand, one strong accent) | `CL-01` |
| Decide light or dark | from the feel and the use: long reading and trust lean light; products, night, cinema and luxury can lean dark. Say why | `CL-02` |
| Split 60-30-10 | **60 %** dominant (background and large areas), **30 %** secondary (surfaces, sections, navigation, imagery), **10 %** accent (buttons, links, focus, highlights). The accent stays rare so it keeps pointing at the action | `CL-15` |
| Name roles | `bg`, `surface`, `text`, `text-muted`, `border`, `accent`, `on-accent`, plus `success`, `warning`, `danger`, `focus`. Components use roles, never raw values | `CL-04`, `CL-17` |
| Build in OKLCH | keep hue and chroma, step lightness for ramps (50 to 950). Tint neutrals with a little of the brand hue (chroma 0.005 to 0.02) | `CL-05`, `CL-06` |
| Keep it small | one dominant, one secondary, one accent, two or three neutrals, then state colours. Five to seven in total | `CL-07` |
| Check contrast | body text 4.5:1 or more (aim for 7:1), large text and UI parts 3:1, button text on the accent 4.5:1. Make the table for both themes before building | `CL-09` |
| Design the other theme | dark mode is a new palette: lower chroma, lighter surfaces for elevation, no pure black under pure white | `CL-12`, `CL-14` |

## Reading the feel

| Feel from the intake | Lightness | Chroma | Hue direction |
| --- | --- | --- | --- |
| Classic | light background, deep text | low, one deep accent | navy, ink, oxblood, forest |
| Modern | either; strong contrast | neutrals near zero, one vivid accent | from the product; avoid purple-to-blue by default (`SL-01`) |
| Old-school | dark terminal or cream paper | high on one hue | phosphor green, amber, print red and blue |
| Editorial | warm paper, near-black ink | very low, one print accent | red, ultramarine, ochre |
| Minimal | white or near-white | almost none | the accent can be the text colour |
| Playful | light, tinted | high, two hues at most | warm and saturated, one dominates |
| Luxury | very dark or stone | low | warm neutrals, brass, deep green |

## Starter palettes

All pairs below were checked: text on background, muted text on background, and button text on the accent.

| Feel | Fits | Background | Surface | Text | Muted text | Accent | On accent | Contrast (text / muted / button) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Classic and trustworthy | law, finance, clinics, public bodies | `#f9f6f1` | `#efebe2` | `#122032` | `#4a5666` | `#164781` | `#faf8f5` | 15.3 / 6.9 / 8.7 |
| Modern dark | SaaS, developer tools, agencies | `#0b0d11` | `#16181d` | `#eceff2` | `#9fa5ae` | `#6fda75` | `#091509` | 16.8 / 7.8 / 10.6 |
| Modern light | products, startups, services | `#f9fafc` | `#edf0f4` | `#161b24` | `#585e69` | `#cc2a1b` | `#fffbfa` | 16.6 / 6.3 / 5.2 |
| Editorial | magazines, writers, cultural venues | `#f6f2e5` | `#ebe4d4` | `#1a1512` | `#5c534d` | `#af2b25` | `#f8f5ee` | 16.1 / 6.7 / 6.0 |
| Luxury | hotels, jewellery, high-end services | `#0d0b09` | `#191512` | `#ece7df` | `#a49d94` | `#d3aa64` | `#130e0b` | 16.0 / 7.4 / 8.8 |
| Playful | kids, food, events, consumer apps | `#faf5e3` | `#f2e8c3` | `#221c3c` | `#55516f` | `#c91b86` | `#fff9fd` | 14.9 / 6.9 / 5.1 |
| Old-school terminal | retro, developer, games | `#09120b` | `#101f13` | `#95f198` | `#70a971` | `#f7b83d` | `#09120b` | 13.9 / 6.9 / 10.8 |
| Minimal | portfolios, architecture, galleries | `#fcfcfc` | `#f0f2f4` | `#101214` | `#616366` | `#101214` | `#fcfcfc` | 18.3 / 5.8 / 18.3 |
| Nature and local | farms, gardens, outdoor, local trades | `#f4f6ee` | `#e5eadc` | `#132717` | `#4c5d4f` | `#236436` | `#f7faf2` | 14.5 / 6.5 / 6.7 |
| Health and care | clinics, therapy, care services | `#f4fafa` | `#e6f1f2` | `#11242d` | `#4d5e66` | `#007373` | `#f8fdfd` | 15.1 / 6.4 / 5.5 |

As CSS variables (two examples; the rest follow the same pattern):

```css
/* Modern dark */
:root {
  --bg: oklch(16.0% 0.008 260);
  --surface: oklch(21.0% 0.01 260);
  --text: oklch(95.0% 0.005 260);
  --text-muted: oklch(72.0% 0.015 260);
  --accent: oklch(80.0% 0.17 145);
  --on-accent: oklch(18.0% 0.03 145);
}

/* Editorial */
:root {
  --bg: oklch(96.0% 0.018 90);
  --surface: oklch(92.0% 0.022 88);
  --text: oklch(20.0% 0.01 60);
  --text-muted: oklch(45.0% 0.015 60);
  --accent: oklch(50.0% 0.17 28);
  --on-accent: oklch(97.0% 0.01 90);
}
```

## Palettes measured on real sites

Colours read from the computed styles of live sites in November 2026 (`inspiration/site-studies/`). They show
what "luxurious, not garish" looks like in practice: warm grounds, deep inks, one accent. Use them as proof
that a combination works, then shift the hue toward the brand (`CL-22`); never copy a brand's palette whole.

| Feel | Ground | Ink | Secondary text | Accent | Seen on |
| --- | --- | --- | --- | --- | --- |
| warm dark, technical | `rgb(21,20,20)` | cream `rgb(255,251,245)` | ink at 60 % | orange `rgb(255,94,31)` | Cloudflare |
| warm light, calm | off-white `rgb(247,246,244)` | `rgb(12,10,8)` | ink at 60 % | none, ink buttons | Rox |
| paper and electric | paper `rgb(242,241,236)` | `rgb(16,15,15)` | ink at 55 % | blue `rgb(0,0,255)`, hero only | Agentcard |
| cream editorial | cream `rgb(250,244,235)` | near-black | ink at 66 % | black video hero | Taxi Studio |
| ivory and earth | ivory `rgb(249,250,240)` | brown `rgb(74,24,9)` | brown at 60 % | coral `rgb(255,131,94)` | Heron |
| white and deep green | white | near-black | ink at 60 % | green `rgb(11,116,67)` with mint text `rgb(217,255,224)` | Fruitful |
| white and lime | white | near-black | ink at 55 % | lime pill | Ramp design |
| near-black product | `rgb(10,10,10)` | white | white at 55 % | none, white pills | xAI, X Money |

What they share: no pure `#fff` grounds on the warm sites and no pure `#000` text anywhere; secondary text is
the ink at lower opacity, not a separate grey; the accent appears on the primary action and almost nowhere
else; a saturated field is used once, in the hero, if at all.

## Avoid

- Garish colour: neon on neon, rainbow gradients, saturated backgrounds behind long text (`CL-23`).

- Picking colours before the strategy and the reason (`CL-01`).
- Several saturated accents in one view (`CL-20`); the accent on large backgrounds.
- Grey text on coloured backgrounds (`CL-11`); colour as the only signal (`CL-10`, `CL-19`).
- Demo colours from a component library left in place (`SL-19`, `EF-03`).

## Tools

Palette and contrast tools are listed in [toolkit/design-tools.md](../toolkit/design-tools.md): OKLCH pickers,
contrast checkers and palette generators. Gradients come from the palette ([recipes/gradients.md](../recipes/gradients.md)).
