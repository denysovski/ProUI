# unanim.studio: a full study

[Site studies](README.md) · [Reference sites](reference-sites.md) · [Unanim motion in plain JS](../../effects/fx/README.md#unanim-set) · [Typography](../../typography/README.md#saans-and-the-unanim-type-system) · [FRAMER style](../../style/framer/README.md)

**The best example in this repository of a brand identity that carries a whole website.** unanim.studio
(Brussels, Braine-l'Alleud, 2020–2026) is a digital studio site built with Nuxt. It was studied in the
browser in November 2026: computed styles, stylesheets and transforms were read from the live page at
1440 × 900, and the studio's Dribbble shots (US©24, US©26, ACE Padel Club SoMe) were looked at for
the identity outside the website. Everything below is measured or described in our own words. No text,
photos, logos or code from the site go into a build (`SL-43`, `EF-24`): learn the system, then make
your own.

## Why it works, in one paragraph

One typeface in two weights. Black, white, one grey and one red. Photographs and video that are
always full-bleed and always people or real work, never decoration. Text sits in small blocks pushed
to an edge, so the composition is asymmetric but never messy: every block hangs from a column of a
strict grid. Motion is slow, eased and quiet: things recede, darken, fade through a blur and rise a
quarter of a line. There is nothing on the page that only exists to look clever, and that restraint
is the brand.

## Type

| What | Value |
| --- | --- |
| Family | **Saans** (Displaay Type Foundry), self-hosted woff2 |
| Weights | 400 Regular and 500 Medium. Nothing heavier anywhere, not even the giant wordmark |
| Fallback | `sans-serif` |
| Smoothing | `-webkit-font-smoothing: auto` on small UI text (it keeps small Saans crisp on Mac) |
| Tracking | slightly negative everywhere: about −0.007 em on UI, −0.0128 em on the 711 px wordmark |

The scale, measured at 1440 px:

| Role | Size / line height | Weight | Where |
| --- | --- | --- | --- |
| Giant wordmark | 711 px / 726 px | 400 | "US." and "unanim.studio" across the full width, cropped by the viewport |
| Statement | about 48 px / 1.05 | 400 | "Guided by our unique vision…", first line indented |
| Menu links | 17 px / 15 px | 500 | inside the dock menu |
| Body and button | 15.2 px / 22.9 px | 400 | "Book a call" card, paragraphs |
| Project caption | 14 px / 18.9 px | 500 name, 400 services | under each work tile |
| Small UI | 13 px / 15 px | 500 | header labels, "Dedicated to Purpose—driven Digital" |
| Micro | 12 px / 11.3 px | 400 | "1 slot left for Nov.", copyright |

Lessons:

- **One family, two weights.** Hierarchy comes from size and space, never from bold.
- **The wordmark is set in Regular.** At 711 px, weight 400 already looks heavy; Medium would be crude.
- **Line height under 1 for display and UI labels** (17/15, 12/11.3), above 1.4 only for paragraphs.
- **The first line of a statement is indented** (`t-indent`) by about a third of the measure: an
  editorial habit that breaks the left edge and makes a paragraph look composed.
- **Tiny type next to giant type.** 12–13 px labels next to a 711 px word is the whole contrast system.

Saans is a commercial font. Free fonts that give the same feel are listed in
[typography/README.md](../../typography/README.md#saans-and-the-unanim-type-system).

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#ffffff` | page |
| `--ink` | `#000000` | text, closing section, footer |
| `--bar` | `#1e1e1e` | the dock bar, the booking card |
| `--glass` | `rgba(30,30,30,.30)` + `blur(40px) saturate(1.2)` | the opened menu panel |
| `--stroke` | `1px solid #ffffff3d` | hairlines on dark |
| `--veil` | `rgba(0,0,0,.35)` | behind the open menu |
| red | a warm vermilion, close to `#e8401c` | only in photography and the social identity (US©24, US©26 posters), never as a UI colour |

The site itself is black and white; the colour comes from the photographs. That is why the red works
so hard when it appears: it is the background of a portrait, not a button.

## Layout

- Margin `1.625rem` (26 px) on desktop, gutter `1.25rem`. A rem is tied to the viewport
  (`--vw-rem: 1.0582vw`), so the whole layout scales with the window like a poster.
- The page is a 12-column grid, but almost nothing is centred. The statement starts at column 6, the
  label "Studio" at column 5, captions hang at the inner corner of each image.
- **The work grid** is two columns of square tiles that alternate photo and white: photo left, white
  right with the caption in its bottom-left corner, then swapped. It reads like a contact sheet.
- Sections are full-bleed and touch each other. No cards, no rounded panels in the content, no shadows.

## Navigation: the dock

The header is almost empty: a small link pair top left ("Instagram, LinkedIn"), place and a live clock
top right ("Braine-l'Alleud 02:33:43"), and a dark **Book a call** card with a portrait, also top right.
The real navigation is a **dock at the bottom centre**:

- A pill 266 × 48 px, `#1e1e1e`, radius 55 px. Left: the word "Menu". Right: a hamburger and a white
  inner pill naming the current page ("Homepage").
- **Opening.** The dock grows upward into a frosted panel 285 × 475 px. The panel is the same shape
  revealed with `clip-path: inset(calc(100% - 3.5rem) 0 0 round 20px 20px 29px 29px)` → `inset(0)`
  over **640 ms, cubic-bezier(.32,.72,0,1)**, while its content moves from `translateY(25%)` to 0 on
  the same curve.
- Inside, each line (Homepage, Works, Services, Studio, Contact, then Instagram, Dribbble, LinkedIn)
  rises out of a mask from `translateY(calc(100% + .3em))`, **800 ms, cubic-bezier(.16,1,.3,1)**,
  delayed `200 ms + i × 50 ms`. A hairline draws from the left (`scaleX(0)` → 1, 1.1 s). A white
  **Pitchdeck** pill fades and rises last.
- The hamburger rotates 90° and its three lines fold into an × (500 ms); the inner pill's word rolls
  from "Homepage" to "Close" (word track moving 100 %).
- **The page recedes.** The whole page behind gets `scale: .976` (800 ms, cubic-bezier(.32,.72,0,1))
  and a black veil at 35 % fades in over 640 ms. The page looks pushed back under glass.
- **Closing is faster and harder:** clip-path back in 420 ms, cubic-bezier(.65,0,.35,1), 60 ms late;
  the lines drop out in 260 ms with only 15 ms between them; the page returns in 520 ms.
- On phones the dock spans the width (margins 3 px) and the panel opens to the full width.

Rebuilt in plain JavaScript: [`effects/fx/dock-menu`](../../effects/fx/dock-menu/).

## The hero that recedes

The first screen is a full-bleed black and white group photo with the wordmark across the bottom,
cut by the viewport. When you scroll:

- The hero section moves **down** at 0.15 of the scroll (`translate3d(0, scroll × .15, 0)`), so it
  scrolls away slower than the page: it seems to sink.
- The photo inside moves from `translateY(-7%)` to about `0.5%` over the same distance: a second,
  smaller parallax inside the first.
- A black layer (`.home-hero__shade`) over the hero goes from opacity 0 to about 0.76 linearly with
  progress (scroll ÷ hero height).
- The next section is white, sits above the hero (`z-index`) and slides over it. Because the hero
  is darkening underneath, the white section looks lit, and its first line ("Guided by our unique
  vision…") becomes the focus without any animation of its own.

This is the effect in the request: *the landing page goes into the background and a black shade puts
the focus on the white section*. Rebuilt in plain JavaScript: [`effects/fx/recede-hero`](../../effects/fx/recede-hero/).

## Reveals

- **Blocks** (`data-reveal="in"`): opacity 0 and `blur(4px)` → sharp, 700 ms,
  cubic-bezier(.45,0,.55,1), delayed `150 ms + index × 80 ms`. No movement at all.
- **Lines** (`data-reveal="lines"`): the text is split into words; each word fades through the same
  blur and rises from `translateY(.25em)` over 900 ms, cubic-bezier(.16,1,.3,1). Words on the same
  line share a delay; every new line adds **60 ms**. The paragraph appears line by line, softly.
- Before measuring, the element is hidden with `opacity:0 !important` so nothing flashes.

Rebuilt in plain JavaScript: [`effects/fx/blur-lines`](../../effects/fx/blur-lines/).

## Micro-interactions

- **Press:** `.pressable` scales on press in 120 ms, ease-out cubic-bezier(.23,1,.32,1).
- **Hover underline swap:** the underline shrinks to the right, then grows again from the left
  (500 ms, keyframes at 45 % and 46 % switch the transform origin). It says "this is a link" without
  a colour change.
- **Hover prefix:** a `./` slides in before the link (opacity, 200 ms), like a path in a terminal.
- **Durations as tokens:** press .12 s, hover .2 s, close .2 s, open .3 s, reveal .6 s, footer fade 1 s.
- **Two easings for everything:** `--ease-out: cubic-bezier(.23,1,.32,1)` and
  `--ease-in-out: cubic-bezier(.77,0,.175,1)`; plus the "sheet" curve (.32,.72,0,1) for things that
  open and the expo-out (.16,1,.3,1) for things that rise.
- **View transitions** between pages; on phones the new page arrives through a pixel clip.
- **The booking card** in the header recedes with the page (same `scale .976`) when a panel opens.
- **Reduced motion:** hover prefixes and underline swaps are switched off; panels fade instead of clip.

## The end of the page

- **Closing statement:** a black half next to a red-lit portrait, one 32 px paragraph ("Attention is
  easy to buy and hard to keep…"), and a small white "How can we help" pill with an arrow.
- **The giant "US." wordmark** then crosses from the closing section into the footer, white on red and
  black, cropped by both.
- **Footer:** three columns of small links on black (the current page has the `/` prefix), a small
  video cell that swaps between clips with a 1 s cross-fade, a round logo, copyright in 12 px.

## The identity outside the website

From the studio's own posters and social posts:

- **The team as silhouettes.** Five people in black against grey or red. The studio never shows faces
  in its own marketing; the silhouette is the logo.
- **The year mark.** "US©24", "US©26": the studio name shortened to US, the copyright sign used as a
  glyph, and the year. Set huge, often crossed by a translucent X.
- **Stat posters.** "®2020 / 7 members / & 26 awards / 83 projects" on a red portrait: the numbers in
  the same Regular weight as everything else, the "&" and "®" in the accent, lines pushed to different
  indents so the block steps down the poster.
- **Asymmetry with a grid.** Big words bleed off one edge, small text blocks sit in the opposite corner,
  a tiny round logo in a third. Never centred, never balanced, always aligned.
- **For clients they switch voice.** ACE Padel Club: a condensed capital face in mint green and white
  on black and white sport photography, an electric blue grainy brush stroke, a giant star-shaped "A"
  crossing the athlete, and story cards (9:16) with a tiny paragraph and the club logo bottom left.
  The studio identity stays quiet so the client's can be loud.

These rules are the base of the [BrandIt](https://github.com/denysovski/BrandIt) ad library.

## Build prompts

**Studio site in the Unanim manner (your brand, not theirs):**

> Build a studio website in one grotesk at 400 and 500 only (Saans, or Host Grotesk / Inter Tight if
> the licence is not bought). Black and white UI; colour only from photography. 26 px margins, a
> 12-column grid, text blocks hung from columns 5–7, nothing centred. First screen: a full-bleed photo
> with the wordmark at 50 vw across the bottom, cropped. On scroll the hero sinks at 0.15 of the scroll
> and a black shade grows to 0.75 while the white statement section slides over it. Navigation is a
> dark dock pill at the bottom centre that opens upward into a frosted panel; the page behind scales to
> 0.976 under a 35 % veil. Reveal text line by line through a 4 px blur, 60 ms per line. Work as a
> two-column contact sheet of square photos alternating with white squares holding the caption.

**Only the dock:** use [`effects/fx/dock-menu`](../../effects/fx/dock-menu/).

**Only the receding hero:** use [`effects/fx/recede-hero`](../../effects/fx/recede-hero/).

## Checklist when you borrow from it

- Keep one family and two weights. If a headline feels weak, make it bigger, not bolder.
- Real photography is not optional for this look. With stock or AI filler it falls apart (`IM`).
- The dock must be keyboard reachable, trap focus while open, close on Escape and announce state
  (`NV-08`, `AX`). The original's links are real anchors; keep that.
- Give the receding hero a reduced-motion fallback (no transform, shade only at the end).
- 12 px labels pass contrast only on pure black or white; check them on photos (`CL-09`).
