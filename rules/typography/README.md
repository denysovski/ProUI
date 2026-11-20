# Typography Rulebook

> Choosing faces, setting a scale, measure, leading and tracking, and loading fonts properly.

[All rulebooks](../README.md) · Prefix `TY` · Design

## Do

Positive rules: what a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `TY-01` | **Choose faces for the subject, not the category** | Write one sentence about who reads this and where, then pick faces that fit that scene. "Tech wants mono", "books want a serif" and "luxury wants a thin didone" are the associations to break, not follow. Check `SL-59` before naming a face. |
| `TY-02` | **Product UI can use one family** | Dashboards, settings and tools are often best in one well-tuned sans (or the system stack) for headings, labels, buttons and data. Marketing pages can pair a display face with a text face. |
| `TY-03` | **At most two families, three only with a reason** | A display face, a text face, and optionally a mono for data (`DC-04`). Every extra family weakens the hierarchy. |
| `TY-05` | **A real type scale** | 5 to 7 sizes on a ratio: about 1.125–1.2 for product UI, 1.25–1.5 for marketing. Adjacent heading levels differ by at least about 1.25× (`SL-60`). Define them as tokens (`DC-05`); no one-off sizes. |
| `TY-06` | **Body text 16 px minimum on the web** | 17–18 px is often better for long reading. Secondary text can go to 14 px; nothing a person needs to read goes below 12 px, and UI labels never below 11 px. Inputs are at least 16 px so iOS does not zoom into them. |
| `TY-07` | **Fixed scale in apps, fluid scale in marketing** | Product UI uses fixed `rem` sizes. Landing pages may use `clamp()` for display sizes, with a sensible minimum and maximum; body text stays fixed. |
| `TY-08` | **Hierarchy through more than size** | Combine size, weight and colour (primary / secondary text tokens). Do not rely on colour alone and do not use more than three weights. |
| `TY-09` | **Keep hierarchy when text is zoomed** | At 200 % browser zoom the order and relative weight of headings stay the same, nothing overlaps and nothing gets cut off. Use `rem` for type, not `px` locked in containers. |
| `TY-10` | **Line length 45–75 characters for body text** | Set `max-width` in `ch` (about `65ch`). Data tables and dense UI can run wider; prose cannot. |
| `TY-11` | **Line height by role** | Body 1.5–1.7, UI text about 1.4, headings 1.05–1.25. Below 1.3 on body text is too tight. Longer lines need more leading. |
| `TY-12` | **Tracking by size** | Body text at 0. Uppercase labels +0.02 to +0.08em. Large display can tighten slightly, never below about -0.04em (`SL-62`). Never letter-space lowercase body text wider than 0.05em. |
| `TY-13` | **Vertical rhythm** | More space above a heading than below it, so the heading belongs to the text that follows. Paragraph spacing about 0.75–1em. |
| `TY-16` | **Balance and pretty wrapping** | `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs, no single-word last lines (`DC-16`). Use `text-box: trim-both cap alphabetic` where supported to align text to its box optically. |
| `TY-17` | **Real typographic characters** | Curly quotes and apostrophes, proper ellipsis (…), en dash for ranges (9–17 h), non-breaking spaces between number and unit (`10 kg`), and the right local quotes („…“ in Czech). |
| `TY-18` | **Numerals by context** | Tabular figures in tables, prices and timers (`DC-18`); proportional or oldstyle figures in running text if the face has them. |
| `TY-19` | **Load fonts properly** | Self-host or use a fast CDN, subset to the needed languages (Latin Extended for Czech diacritics), `font-display: swap`, preload the one or two files used above the fold, and set `size-adjust` / metric overrides on the fallback to avoid layout shift. |
| `TY-20` | **Check every language you ship** | Diacritics (č, ř, ů, ž), long German words and right-to-left scripts must render in the chosen face. A display face without the needed glyphs is not an option. |
| `TY-21` | **Load only the weights you use** | Two or three weights per family at most, preferably one variable font file. Every extra weight is extra bytes and extra noise. |
| `TY-22` | **Hyphenate narrow columns** | In narrow columns and on phones, use `hyphens: auto` with the correct `lang`, so ragged edges stay calm. |
| `TY-26` | **Test the pair on a specimen** | Before building, set the chosen faces together on one page: a headline, a paragraph, a button, a label and a table row, in every language you ship (including `Příliš žluťoučký kůň úpěl ďábelské ódy` for Czech). The pair works when the x-heights look related, the text face reads well at 16 px, the contrast between the faces is clear (serif with sans, or display with text) and no glyph is missing. See `typography/README.md`. |

## Don't

Negative rules: what never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `TY-04` | **Thin weights for text** | Body and UI text stay at Regular (400) or heavier; Light, Thin and Ultralight are for large display sizes only. If a face only looks good thin, it is the wrong text face. |
| `TY-14` | **Justified text** | It creates rivers without proper hyphenation. Left-aligned (start aligned) text, centred only for short display lines. |
| `TY-15` | **All-caps paragraphs** | Uppercase is for short labels of a few words. See `SL-26`. |
| `TY-23` | **Faux bold and italic** | Never let the browser fake a weight or style the font file does not have. Load the real file or set `font-synthesis: none`. |
| `TY-24` | **Display faces for body text** | Display and decorative faces are for large sizes only. Paragraphs, labels and forms use a text face designed for small sizes. |
| `TY-25` | **Centred long paragraphs** | Centred text is for short display lines. Anything longer than two or three lines is start-aligned. |
| `TY-27` | **Trial or unlicensed fonts in production** | Trial versions, fonts copied from another site and desktop-only licences are not shipped. Check the licence covers web use and the expected traffic; when the client will not buy the commercial face, use the free alternative listed in `typography/README.md`. |

## Related anti-slop rules

Don'ts from the [Anti-Slop Rulebook](../anti-slop/README.md) that belong to this subject.

| ID | Avoid |
| --- | --- |
| `SL-22` | Instrument Serif and the default "AI serif" look |
| `SL-23` | Excessive italics |
| `SL-24` | Negative kerning on body text |
| `SL-25` | Excessive mono fonts |
| `SL-26` | ALL CAPS subtitles everywhere |
| `SL-27` | Periods in titles |
| `SL-28` | Gradient-filled headline text |
| `SL-59` | Overused display faces |
| `SL-60` | Flat type hierarchy |
| `SL-61` | Oversized H1 by reflex |
| `SL-62` | Extreme negative tracking |
| `SL-63` | Italic serif display by reflex |
| `SL-66` | Broadsheet costume |

## How to check

- Check body size, measure and line height in DevTools on a phone and a desktop.
- Zoom to 200 % and set a larger default font size: hierarchy holds, nothing overlaps.
- Render every shipped language and check diacritics.

## Sources

- [Apple HIG: Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- [Fluent 2: Typography](https://fluent2.microsoft.design/typography)
- [Practical Typography](https://practicaltypography.com)

---

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
