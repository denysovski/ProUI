# Typography (`TY`)

Type carries most of a website. These rules combine the reading research behind Apple's and Microsoft's
guidelines with what separates set type from default type. Sizes are CSS pixels unless noted.

## Choosing faces

- **TY-01 Choose faces for the subject, not the category.** Write one sentence about who reads this and where,
  then pick faces that fit that scene. "Tech wants mono", "books want a serif" and "luxury wants a thin
  didone" are the associations to break, not follow. Check `SL-59` before naming a face.
- **TY-02 Product UI can use one family.** Dashboards, settings and tools are often best in one well-tuned sans
  (or the system stack) for headings, labels, buttons and data. Marketing pages can pair a display face with a
  text face.
- **TY-03 At most two families, three only with a reason.** A display face, a text face, and optionally a mono
  for data (`DC-04`). Every extra family weakens the hierarchy.
- **TY-04 Avoid thin weights for text.** Body and UI text stay at Regular (400) or heavier; Light, Thin and
  Ultralight are for large display sizes only. If a face only looks good thin, it is the wrong text face.

## Scale and hierarchy

- **TY-05 A real type scale.** 5 to 7 sizes on a ratio: about 1.125–1.2 for product UI, 1.25–1.5 for
  marketing. Adjacent heading levels differ by at least about 1.25× (`SL-60`). Define them as tokens
  (`DC-05`); no one-off sizes.
- **TY-06 Body text 16 px minimum on the web.** 17–18 px is often better for long reading. Secondary text can
  go to 14 px; nothing a person needs to read goes below 12 px, and UI labels never below 11 px. Inputs are at
  least 16 px so iOS does not zoom into them.
- **TY-07 Fixed scale in apps, fluid scale in marketing.** Product UI uses fixed `rem` sizes. Landing pages may
  use `clamp()` for display sizes, with a sensible minimum and maximum; body text stays fixed.
- **TY-08 Hierarchy through more than size.** Combine size, weight and colour (primary / secondary text
  tokens). Do not rely on colour alone and do not use more than three weights.
- **TY-09 Keep hierarchy when text is zoomed.** At 200 % browser zoom the order and relative weight of headings
  stay the same, nothing overlaps and nothing gets cut off. Use `rem` for type, not `px` locked in containers.

## Measure and rhythm

- **TY-10 Line length 45–75 characters for body text.** Set `max-width` in `ch` (about `65ch`). Data tables
  and dense UI can run wider; prose cannot.
- **TY-11 Line height by role.** Body 1.5–1.7, UI text about 1.4, headings 1.05–1.25. Below 1.3 on body text
  is too tight. Longer lines need more leading.
- **TY-12 Tracking by size.** Body text at 0. Uppercase labels +0.02 to +0.08em. Large display can tighten
  slightly, never below about -0.04em (`SL-62`). Never letter-space lowercase body text wider than 0.05em.
- **TY-13 Vertical rhythm.** More space above a heading than below it, so the heading belongs to the text that
  follows. Paragraph spacing about 0.75–1em.
- **TY-14 No justified text on the web.** It creates rivers without proper hyphenation. Left-aligned (start
  aligned) text, centred only for short display lines.
- **TY-15 No all-caps paragraphs.** Uppercase is for short labels of a few words. See `SL-26`.

## Details

- **TY-16 Balance and pretty wrapping.** `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs,
  no single-word last lines (`DC-16`). Use `text-box: trim-both cap alphabetic` where supported to align text
  to its box optically.
- **TY-17 Real typographic characters.** Curly quotes and apostrophes, proper ellipsis (…), en dash for ranges
  (9–17 h), non-breaking spaces between number and unit (`10 kg`), and the right local quotes („…“ in Czech).
- **TY-18 Numerals by context.** Tabular figures in tables, prices and timers (`DC-18`); proportional or
  oldstyle figures in running text if the face has them.
- **TY-19 Load fonts properly.** Self-host or use a fast CDN, subset to the needed languages (Latin Extended for
  Czech diacritics), `font-display: swap`, preload the one or two files used above the fold, and set
  `size-adjust` / metric overrides on the fallback to avoid layout shift.
- **TY-20 Check every language you ship.** Diacritics (č, ř, ů, ž), long German words and right-to-left
  scripts must render in the chosen face. A display face without the needed glyphs is not an option.
