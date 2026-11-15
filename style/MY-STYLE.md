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
- Never count things on the page: no 01 / 02 / 03, 001, (04) or "1 / 5" labels on sections, cards, photos,
  steps or lists. I hate that pattern. Name things instead (`SL-17`, a hard rule).
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

All 878 loaded pins were sorted into themes (full lists with links in `style/PINS.md`):

| Theme | Pins | Share | Typical look |
| --- | --- | --- | --- |
| Clean product and app UI | 227 | 26 % | white or very light pages, real UI, phone mockups, fintech and booking flows; saved mostly for UX details |
| Dark tech and SaaS | 182 | 21 % | near-black pages, product UI at large size, orange or blue light behind the product, code |
| Fashion, streetwear and creative studios | 154 | 18 % | black and white photos, dark clothing, one red accent, heavy uppercase type, cropped mega headlines; strongest among the older saves |
| Editorial, architecture and interiors | 133 | 15 % | cream, stone and sage, serif headlines with italics, landscape and building photography; growing in the newer saves |
| Playful colourful | 77 | 9 % | bright illustration-led pages; occasional |
| Poster, collage and brutalist | 38 | 4 % | poster grids, torn paper, halftone, stickers, big numbers |
| Abstract 3D, particles and dither | 35 | 4 % | chrome and glass objects, particle type, dither shapes |
| Art, gallery and culture | 32 | 4 % | paintings, engravings, museum layouts, dates and statistics |

The board is half "how to build it" (product UI, dark SaaS) and half "how it should feel" (fashion, editorial,
poster, art, 3D). The second half is where the personal taste lives; the first half is reference for UX.

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

### 5.6 Pins and style keywords

- `style/PINS.md` lists every classified pin by theme with links.
- `style/STYLES.md` turns the board into named style keywords (BLACK COAL, EDITORIAL CREAM, MEGA TYPE,
  DITHER GRAIN and more) that I can put in a prompt.

## 6. Documentation preferences

- READMEs plain and readable: no emojis, no icon rows, no colourful badges, no full-page screenshots.
- Simple explanations of what something contains and what it intentionally avoids.
