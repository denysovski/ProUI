# My style (denysovski)

The personal taste profile to apply on top of XSlop when building something for me. Project instructions still
come first; this file decides the look and feel when nothing else does.

**Sources.** Sections 1–4 come from the NATURIK project and the feedback I gave while building it. Section 5
comes from my Pinterest board `web-design`: of its 1,797 pins, Pinterest loads 878 on the web, and all 878 were
looked at and measured. The pin images are not copied here because most were made by other designers; section
5.6 links to example pins on Pinterest instead.

---

## 1. Overall direction

- Premium, cold, nocturnal and technical. Fashion lookbook meets gallery catalogue meets product launch.
- Confident and minimal, with a lot of breathing room. Big type, few elements, each one deliberate.
- Real product and real photography lead. The design frames the content; it does not decorate it.
- Brutalist edges are welcome (oversized type, hard crops, raw data labels), but the finish is polished.

## 2. Visual language

- **Colour:** a dark base (near-black ink) and a light paper / bone base, alternating by section. One
  electric accent (cobalt blue in NATURIK) and one secondary signal colour (acid green). Red only for
  warnings and timers. A signature vertical gradient from black into the accent colour is allowed as a brand
  moment, not on every section.
- **Type:** one main neo-grotesk (Hanken Grotesk in NATURIK), tight tracking on display sizes, light and
  regular weights for large text, medium for UI. Display moments may mix in a decorative or blackletter
  initial and a chrome / metallic word, as a deliberate signature. A mono only for data: counters, sizes,
  timers, SKUs.
- **Shapes:** soft radii (around 14–28 px), 1 px hairlines, frosted glass only over imagery, long soft
  shadows only for floating layers.
- **Imagery:** desaturated, cold-lit product and editorial photography; night, snow, neon reflections;
  extreme close-ups of materials.
- **3D:** one glossy hero object or a playful 3D form (blob, chrome object, clay shape) per page, lit softly,
  with a blurred floor shadow.

## 3. Motion

- Calm and slow rather than flashy. When in doubt: slower, fewer, lighter.
- Smooth inertial scroll, pinned sections for storytelling, one signature effect per section at most.
- Animations must not replay or flash when an option changes (for example switching a shipping method only
  re-renders, no fade).
- Performance matters more than spectacle: if an effect makes scrolling feel laggy, simplify it (fewer
  elements, lower frame rate, cheaper shader) before anything else.

## 4. Copy and details

- Short, confident English. Fashion and art language ("drop", "numbered", "edition", "when it's gone, it's
  gone"). No emojis in UI.
- Buttons in normal weight, not bold. Headlines in one font family, highlighted words by colour, not by a
  different font.
- No demo or developer notes visible to visitors.
- Honest scarcity: real counters and real reservation timers, explained clearly.
- In Figma and screenshots, show one representative card or frame of a repeating section, not the whole
  scrolling strip.

## 5. Pinterest board: web-design

### 5.1 Measured colour profile (all 878 loaded pins)

Every pin image was sampled for brightness and colour.

| Measure | All pins | Newest 300 | Oldest 300 |
| --- | --- | --- | --- |
| Mostly light (bright background) | 50 % | 56 % | 45 % |
| Mostly dark | 29 % | 18 % | 38 % |
| In between (photo-led) | 21 % | 26 % | 17 % |
| Nearly monochrome (under 4 % saturated pixels) | 52 % | 49 % | 60 % |

Where colour does appear, it is mostly **red, orange and pink (48 % of all saturated pixels)** and **blue to
cyan (38 %)**. Green and lime are rare (12 %); purple and magenta almost absent.

Trend: the older saves are darker and more monochrome (streetwear, black and red); the newer saves are lighter
(editorial, architecture, clean product pages) while keeping the same accent colours.

### 5.2 Themes on the board

| Theme | Roughly | Typical look |
| --- | --- | --- |
| Streetwear and fashion stores | large, strongest among the older saves | black and white photos, models in dark clothing, black pages with one red accent, heavy uppercase and condensed type, product grids |
| Fashion and creative studios | large | oversized headline words cropped at the edges, editorial photo crops, white or black pages, one hot accent |
| Editorial, architecture and interiors | large, growing in the newer saves | cream, stone and sage backgrounds, elegant serif headlines with italics, landscape and building photography, wide margins |
| Dark tech and SaaS | medium | near-black pages, product UI at large size, orange or blue light beams behind the product, code and dashboards |
| Clean product and app UI | medium | white or very light pages, cards, phone mockups, fintech and booking flows; saved for UX details |
| Poster, collage and brutalist | medium | poster grids, torn paper, halftone, stickers, very large numbers and dates |
| Art, gallery and culture | small | classical paintings and engravings, museum layouts, big statistics, dates |
| Abstract 3D and particles | small | chrome and iridescent objects, glass forms, particle typography, used as one centrepiece |
| Playful colourful | small | bright illustration-led pages; occasional, not the core taste |

### 5.3 The main keys of my style

1. **Typography is the hero.** Oversized words that run off the edge of the screen, set in heavy
   condensed or wide grotesks, usually uppercase. The headline is often the biggest graphic on the page.
2. **Two type moods.** A bold grotesk for fashion, streetwear and tech, or an elegant high-contrast serif with
   italics for architecture, editorial and art. When mixed, the serif is used for one or two words.
3. **Mostly monochrome.** Half of the saved designs have almost no colour: black, white, grey, cream.
4. **One accent, usually red-orange or blue.** When colour appears it is a single strong red, orange or
   cobalt / electric blue, used on the key word, a sticker or the CTA. Green and purple are rare.
5. **Light and dark in balance, trending lighter.** Dark pages for streetwear and tech, warm light pages
   (cream, paper, stone, not pure white) for editorial and product work. Newer saves lean light.
6. **Full-bleed photography.** People and products shot large, often black and white or cold-graded,
   cropped hard. Photography over illustration.
7. **Poster and print influence.** Grids from posters and magazines, big numbers and dates, small labels and
   codes, stickers, collage, halftone and grain.
8. **One 3D or abstract object** as a centrepiece (chrome, glass, particles), never as background filler.
9. **Minimal chrome.** Thin navigation, small labels, little UI decoration around the content.
10. **Asymmetric, editorial layouts.** Narrow text columns beside large images, generous empty areas,
    elements overlapping image edges.
11. **On dark tech pages, light instead of boxes.** The product sits in a beam or glow of light in the
    brand colour, with the UI shown large.

### 5.4 How to apply it

- Pick the mode from the brand: **dark mode** (streetwear, tech, nightlife) or **warm light mode**
  (editorial, architecture, product, culture).
- One display face with strong character and one quiet text face. Fontshare candidates: Clash Display or
  Cabinet Grotesk for the grotesk mood, Boska or Gambetta for the serif mood, with General Sans or Switzer for
  text.
- One accent colour from the red-orange or blue family unless the brand says otherwise.
- Every page gets one oversized typographic moment and one strong image or 3D object.
- Keep the UI around it minimal and precise: hairlines, small labels, tight alignment.

### 5.5 What the board contains that XSlop still filters

Some saved pins use patterns XSlop treats as slop: purple-blue gradients and glow orbs on SaaS pages, three
feature cards in a row, generic pricing tables, emoji-heavy playful sites. They are on the board for single
details, not as the direction. When building for me, the keys in 5.3 win and XSlop still applies.

### 5.6 Example pins by theme

Links to pins on the board (opening them needs Pinterest).

- **Streetwear and fashion stores:** [1](https://cz.pinterest.com/pin/661255157834990238/) · [2](https://cz.pinterest.com/pin/661255157834990229/) · [3](https://cz.pinterest.com/pin/661255157834990227/) · [4](https://cz.pinterest.com/pin/661255157830862801/) · [5](https://cz.pinterest.com/pin/661255157830862786/) · [6](https://cz.pinterest.com/pin/661255157830862776/) · [7](https://cz.pinterest.com/pin/661255157830829030/) · [8](https://cz.pinterest.com/pin/661255157830829028/) · [9](https://cz.pinterest.com/pin/661255157830829022/) · [10](https://cz.pinterest.com/pin/661255157830828953/) · [11](https://cz.pinterest.com/pin/661255157830828836/) · [12](https://cz.pinterest.com/pin/661255157830828820/) · [13](https://cz.pinterest.com/pin/661255157830828685/) · [14](https://cz.pinterest.com/pin/661255157830828668/) · [15](https://cz.pinterest.com/pin/661255157830272313/)
- **Fashion and creative studios:** [1](https://cz.pinterest.com/pin/661255157835225661/) · [2](https://cz.pinterest.com/pin/661255157834990237/) · [3](https://cz.pinterest.com/pin/661255157834990234/) · [4](https://cz.pinterest.com/pin/661255157834990232/) · [5](https://cz.pinterest.com/pin/661255157834990224/) · [6](https://cz.pinterest.com/pin/661255157833963461/) · [7](https://cz.pinterest.com/pin/661255157833910534/) · [8](https://cz.pinterest.com/pin/661255157833910450/) · [9](https://cz.pinterest.com/pin/661255157831026003/) · [10](https://cz.pinterest.com/pin/661255157830935503/)
- **Poster, collage and brutalist:** [1](https://cz.pinterest.com/pin/661255157835225660/) · [2](https://cz.pinterest.com/pin/661255157834109112/) · [3](https://cz.pinterest.com/pin/661255157834109009/) · [4](https://cz.pinterest.com/pin/661255157833963319/) · [5](https://cz.pinterest.com/pin/661255157833959068/) · [6](https://cz.pinterest.com/pin/661255157833925301/) · [7](https://cz.pinterest.com/pin/661255157833921414/) · [8](https://cz.pinterest.com/pin/661255157832938350/) · [9](https://cz.pinterest.com/pin/661255157830897336/) · [10](https://cz.pinterest.com/pin/661255157830897330/)
- **Dark tech and SaaS:** [1](https://cz.pinterest.com/pin/661255157834990239/) · [2](https://cz.pinterest.com/pin/661255157833963403/) · [3](https://cz.pinterest.com/pin/661255157833959147/) · [4](https://cz.pinterest.com/pin/661255157833959143/) · [5](https://cz.pinterest.com/pin/661255157833921301/) · [6](https://cz.pinterest.com/pin/661255157833910494/) · [7](https://cz.pinterest.com/pin/661255157832478885/) · [8](https://cz.pinterest.com/pin/661255157831008818/) · [9](https://cz.pinterest.com/pin/661255157830925098/) · [10](https://cz.pinterest.com/pin/661255157830869219/)
- **Abstract 3D and particles:** [1](https://cz.pinterest.com/pin/661255157835225656/) · [2](https://cz.pinterest.com/pin/661255157834108985/) · [3](https://cz.pinterest.com/pin/661255157833963369/) · [4](https://cz.pinterest.com/pin/661255157833925232/) · [5](https://cz.pinterest.com/pin/661255157833921424/) · [6](https://cz.pinterest.com/pin/661255157833921420/) · [7](https://cz.pinterest.com/pin/661255157833921419/) · [8](https://cz.pinterest.com/pin/661255157833910416/) · [9](https://cz.pinterest.com/pin/661255157832643335/) · [10](https://cz.pinterest.com/pin/661255157831044982/)
- **Editorial, architecture and interiors:** [1](https://cz.pinterest.com/pin/661255157834990230/) · [2](https://cz.pinterest.com/pin/661255157834109160/) · [3](https://cz.pinterest.com/pin/661255157834109157/) · [4](https://cz.pinterest.com/pin/661255157834109156/) · [5](https://cz.pinterest.com/pin/661255157833963460/) · [6](https://cz.pinterest.com/pin/661255157833963306/) · [7](https://cz.pinterest.com/pin/661255157833959154/) · [8](https://cz.pinterest.com/pin/661255157833959043/) · [9](https://cz.pinterest.com/pin/661255157833959038/) · [10](https://cz.pinterest.com/pin/661255157832478917/) · [11](https://cz.pinterest.com/pin/661255157830869123/)
- **Art, gallery and culture:** [1](https://cz.pinterest.com/pin/661255157834108993/) · [2](https://cz.pinterest.com/pin/661255157833959131/) · [3](https://cz.pinterest.com/pin/661255157833959055/) · [4](https://cz.pinterest.com/pin/661255157833929521/) · [5](https://cz.pinterest.com/pin/661255157833925231/) · [6](https://cz.pinterest.com/pin/661255157832938354/) · [7](https://cz.pinterest.com/pin/661255157832935757/) · [8](https://cz.pinterest.com/pin/661255157832643244/)
- **Playful colourful:** [1](https://cz.pinterest.com/pin/661255157834109135/) · [2](https://cz.pinterest.com/pin/661255157833963323/) · [3](https://cz.pinterest.com/pin/661255157833959075/) · [4](https://cz.pinterest.com/pin/661255157833925318/) · [5](https://cz.pinterest.com/pin/661255157833925248/) · [6](https://cz.pinterest.com/pin/661255157833910470/)
- **Clean product and app UI:** [1](https://cz.pinterest.com/pin/661255157834109132/) · [2](https://cz.pinterest.com/pin/661255157834109122/) · [3](https://cz.pinterest.com/pin/661255157834109119/) · [4](https://cz.pinterest.com/pin/661255157833963320/) · [5](https://cz.pinterest.com/pin/661255157833929498/) · [6](https://cz.pinterest.com/pin/661255157833925308/) · [7](https://cz.pinterest.com/pin/661255157833910460/) · [8](https://cz.pinterest.com/pin/661255157832927433/)

## 6. Documentation preferences

- READMEs plain and readable: no emojis, no icon rows, no colourful badges, no full-page screenshots.
- Simple explanations of what something contains and what it intentionally avoids.
