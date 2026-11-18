# Type pairing

> A method for choosing typefaces for a website and pairing them, with free starter pairings for each feel from the intake. Every pairing is shown as a specimen with the real headline and copy before it is chosen.

[Blueprints](README.md) · [Typography Rulebook](../rules/typography/README.md) · [Colour schemes](colour-schemes.md) · [Font sources](../toolkit/design-tools.md)

## The method

| Step | What to do | Rules |
| --- | --- | --- |
| Give each face a job | **display** for headlines (personality allowed), **text** for paragraphs and UI (readability first), optional **mono** for data, prices, code. Two families is the normal limit | `TY-03`, `SL-25` |
| Choose the text face first | it carries most of the page: a large x-height, open counters, clear distinction between `Il1` and `O0`, real italics, the weights you need, every language you ship | `TY-06`, `TY-20` |
| Choose the display face for the subject | what the type says has to fit the business: a geometric grotesk says "engineered", a high-contrast serif says "editorial or luxury", a rounded sans says "friendly". Not the most popular choice of the year (`SL-59`) | `TY-01` |
| Contrast, but do not conflict | pair a serif with a sans, or two sans faces with clearly different structure; or one family in very different weights and sizes. Two faces that are almost the same look like a mistake | `TY-08` |
| Share some DNA | similar x-height and proportions, or the same era or construction, so the pair feels like one system | |
| Or use a superfamily | serif, sans and mono designed together (IBM Plex, Source) are the safest pairing | |
| Set the scale | a modular scale (1.2 for product UI, 1.25 to 1.333 for marketing), fluid sizes on marketing pages | `TY-05`, `TY-07` |
| Test with real content | the real headline, a paragraph, a button, a price, in both themes and on a phone | |
| Load it well | WOFF2, `font-display: swap`, only the weights used, preload the text face, metric-matched fallback | `TY-19`, `TY-21` |

## Starter pairings

All fonts are free: **Fontshare** (free for commercial use, served from its CSS API) or **Google Fonts**.

| Feel | Display | Text | Mono (optional) | Why it works |
| --- | --- | --- | --- | --- |
| Classic and trustworthy | Gambetta (Fontshare) | Switzer (Fontshare) | | sturdy transitional serif for headings, neutral sans for reading |
| Classic, one family | IBM Plex Serif | IBM Plex Sans | IBM Plex Mono | a superfamily: shared proportions, safe for law, finance, public bodies |
| Modern product | Cabinet Grotesk (Fontshare) | Satoshi (Fontshare) | JetBrains Mono | tight, bold grotesk headlines over a calm geometric text face |
| Modern technical | Bricolage Grotesque | Hanken Grotesk | JetBrains Mono | characterful variable display, plain text face, real mono for data |
| Modern bold / agency | Clash Grotesk (Fontshare) | Supreme (Fontshare) | | wide, confident headlines; works at very large sizes |
| Editorial | Zodiak (Fontshare) | Literata | | high-contrast display serif and a serif built for long reading |
| Editorial with sans | Gloock | Schibsted Grotesk | | dramatic headings, a newspaper-like sans for text |
| Minimal | Switzer only, weights 400 / 500 / 700 | Switzer | | one family, hierarchy from size and weight |
| Playful | Chillax (Fontshare) | General Sans (Fontshare) | | rounded, friendly display over a clean sans |
| Luxury | Bespoke Serif (Fontshare), light weights at large sizes | Switzer | | fine serif with wide spacing, quiet sans for details |
| Old-school print | Young Serif | Archivo | | warm, vintage serif with a sturdy grotesk |
| Old-school pixel / terminal | Silkscreen (headings only) | IBM Plex Mono | | pixel display for a few words, readable mono for the rest |
| Health and care | Erode (Fontshare) | Atkinson Hyperlegible Next | | soft serif warmth, a text face designed for legibility |
| Nature and local | Gambarino (Fontshare) | Hanken Grotesk | | organic serif headings, plain friendly text |
| Shop | Familjen Grotesk | Manrope | | clear product names, compact text for prices and details |

Faces on the overused list (`SL-59`: Inter, Roboto, Geist, Space Grotesk, Plus Jakarta Sans, DM Sans, Outfit,
Instrument Sans, Syne, Fraunces, Playfair Display, Cormorant, Newsreader, Instrument Serif) can still be the
**text** face when they are the best fit; they are not used as the display face by default.

## Setting the pair

```css
:root {
  --font-display: "Cabinet Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-text: "Satoshi", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* marketing scale, ratio 1.25, fluid between 360 and 1440 px */
  --step-0: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  --step-1: clamp(1.25rem, 1.18rem + 0.35vw, 1.4rem);
  --step-2: clamp(1.56rem, 1.43rem + 0.6vw, 1.95rem);
  --step-3: clamp(1.95rem, 1.72rem + 1.1vw, 2.75rem);
  --step-4: clamp(2.44rem, 2rem + 2.2vw, 4rem);
}
h1, h2, h3 { font-family: var(--font-display); text-wrap: balance; }
body { font-family: var(--font-text); font-size: var(--step-0); line-height: 1.55; }
.price, .data { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
```

Line length 45 to 75 characters (`TY-10`), line height 1.1 to 1.2 for display and 1.5 to 1.7 for text (`TY-11`),
tighter tracking on large headings and looser on small caps (`TY-12`).

## Avoid

- Three or more families without a reason (`TY-03`).
- Display faces for paragraphs (`TY-24`); thin weights for body text (`TY-04`).
- Mono on every label to look technical (`SL-25`).
- A pairing chosen from a list without seeing it with the real copy.
