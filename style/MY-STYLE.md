# My style (denysovski)

The personal taste profile to apply on top of XSlop when building something for me. Project instructions still
come first; this file decides the look and feel when nothing else does.

**Sources.** Sections 1–4 come from the NATURIK project and the feedback I gave while building it. Section 5
comes from my Pinterest board `web-design` (1,797 pins; the first 900 were loaded and every third one, 300 pins,
was looked at in detail). The pin images themselves are not stored in this repository because they belong to
their authors; only the conclusions are.

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

### 5.1 What the board is made of

Approximate shares in the 300-pin sample:

| Share | Theme | Typical look |
| --- | --- | --- |
| about 30 % | Fashion, streetwear and creative studios | black and white photography, models in dark outerwear, one hot accent (red, orange or acid), heavy uppercase type, poster grids, collage and torn-paper textures |
| about 25 % | Dark tech and SaaS | near-black pages, product UI cards, light streaks and glows behind the product, particle and 3D renders (neon green, teal), code snippets |
| about 20 % | Editorial, architecture and interiors | cream, beige and stone backgrounds, large landscape and building photography, high-contrast serif headlines with italics, lots of white space |
| about 10 % | Art, gallery and culture | classical paintings and engravings, museum layouts, dates and big numbers, "meet the artist" pages |
| about 15 % | Other | clean light fintech and mobile app UI, colourful playful illustration sites, real estate, a few UX diagrams and tips |

### 5.2 The main keys of my style

1. **Typography is the hero.** Oversized words that run off the edge of the screen (STUDIO, ILLUSION, VOID,
   GILLTEK, LUMERA), set in heavy condensed or wide grotesks, usually uppercase. The headline is often the
   biggest graphic on the page.
2. **Two type moods.** Either a bold grotesk (fashion, tech) or an elegant high-contrast serif with italics
   (architecture, editorial, art). Rarely both in equal weight; when mixed, the serif is used for one or two
   words.
3. **Mostly monochrome, one hot accent.** Black, white, grey or cream carry the page; one strong colour
   (red, orange, acid green, cobalt) marks the key word, the CTA or a sticker.
4. **Dark first, cream second.** Dark pages dominate. The light alternative is warm (cream, paper, stone),
   not pure white.
5. **Full-bleed photography.** People and products shot large, often black and white or cold-graded,
   cropped hard. Fashion editorial and architecture photography over illustrations.
6. **Poster and print influence.** Grids from posters and magazines, big numbers and dates, labels and
   codes in small type, stickers, collage, torn paper, halftone and grain textures.
7. **One 3D or abstract object.** Chrome, iridescent or glass objects, particles and sculptures used as a
   single centrepiece, not as background filler.
8. **Minimal chrome.** Thin navigation, small labels, very little UI decoration around the content.
9. **Asymmetric, editorial layouts.** Text in narrow columns beside large images, generous empty areas,
   elements overlapping the edges of images.
10. **Tech pages with light, not boxes.** On dark SaaS pages the product sits in a soft beam or glow of
    light that comes from the brand colour, with the UI shown at large size.

### 5.3 How to apply it

- Start from the dark + one accent palette, or the cream editorial palette, depending on the brand.
- Choose one display face with strong character (condensed grotesk or high-contrast serif) and one quiet text
  face. Fontshare candidates: Clash Display, Cabinet Grotesk, Boska, Gambetta, with General Sans or Switzer for
  text.
- Give every page one oversized typographic moment and one strong image or 3D object.
- Keep the UI around it minimal and precise: hairlines, small labels, tight alignment.

### 5.4 What the board contains that XSlop still filters

Some saved pins use patterns XSlop treats as slop: purple-blue gradients and glow orbs on SaaS pages, three
feature cards in a row, generic pricing tables, emoji-heavy playful sites. They are on the board as references
for single details, not as the direction. When building for me, the keys in 5.2 win and XSlop still applies.

## 6. Documentation preferences

- READMEs plain and readable: no emojis, no icon rows, no colourful badges, no full-page screenshots.
- Simple explanations of what something contains and what it intentionally avoids.
