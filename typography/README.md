<img src="cover.jpg" alt="Typography: type metrics on the letters Ag and four font roles" width="100%">

[Back to ProUI](../README.md) · [Paid display faces](#paid-display-faces-worth-buying) · [Reference tables](reference.md) · [Type pairing method](../blueprints/type-pairing.md) · [Typography Rulebook](../rules/typography/README.md)

**Which fonts modern websites use, which free fonts give the same feel, and which fit which kind of site.** Every font shown here is free for commercial use. The detailed tables live in [reference.md](reference.md).

<img src="specimens/grotesk-statements.jpg" alt="Six grotesk headlines with small pixel labels on warm backgrounds" width="100%">

## The short version

1. **Start with a grotesk.** Most modern sites use one sans family for everything: Apple, Google, Linear, Vercel, GitHub, Zalando, Prada.
2. **Make headlines big, not bold.** Weight 500–600, tracking −2 % to −5 %, line height around 1.
3. **Add one accent voice at most.** A mono or pixel font for labels and numbers, or a serif for statements.
4. **Two families, three at most.** Body text stays at 16 px or more.
5. **Check Czech and the licence** before you build (`TY-26`, `TY-27`).

## Pick by kind of site

- **SaaS, developer tools:** Geist + Geist Mono, or Inter + JetBrains Mono
- **Studio, portfolio, agency:** Schibsted Grotesk or Host Grotesk + a pixel label (Jersey 10, Tiny5, VT323)
- **E-shop:** Inter Tight for headlines, Inter for everything else; Zalando Sans or Archivo also work
- **Fashion and luxury:** EB Garamond or Bodoni Moda + Manrope or Inter Tight; Jost for a Futura look
- **Sport and sales:** Oswald, Anton or Barlow Condensed capitals + Barlow
- **Editorial, blog:** Newsreader or Source Serif 4 + Familjen Grotesk
- **Friendly apps, booking, travel:** Figtree, Plus Jakarta Sans or Google Sans Flex
- **Finance, B2B:** Manrope or Hanken Grotesk + IBM Plex Mono for numbers

<img src="specimens/pairings.jpg" alt="Six small website heroes, one pairing for each kind of site" width="100%">

## Paid display faces worth buying

Ten new sans faces picked by [Craftwork](https://www.instagram.com/p/Df438jtDUl9/) in November 2026. They are
cheap (10–54 USD) and give a site a voice that free fonts rarely have, which helps against the
overused-font look (`SL-59`). Use **one** of them for headlines or a wordmark and keep a free grotesk for
text. Before building, buy the licence that covers web use, check that Czech accents are included
(`TY-20`, `TY-27`), test it on a specimen next to the text font (`TY-26`), and never ship the free "demo" files, which are for personal use only.

| Font | Price | Character | Use it for | Style keyword | Free stand-in for drafts |
| --- | --- | --- | --- | --- | --- |
| **Magnuvo** (Limitype) | 31 USD | heavy geometric display with sharp angular cuts | posters, events, streetwear, packaging | `POSTER COLLAGE`, `RED SIGNAL` | Unbounded 800, Syne 800 |
| **Xipta Sans** | 23 USD | neutral neo-grotesk in three weights | product sites, UI, editorial text | `PRODUCT CLEAN`, `SWISS MINIMAL` | Inter Tight, Schibsted Grotesk |
| **Hook** | 14 USD | bold condensed headline sans, 16 styles | sport, surf, outdoor, sales headlines | `MEGA TYPE`, `BLACK COAL` | Anton, Bebas Neue |
| **Forten Crush** | 30 USD | retro sans with softly rounded corners | food, drinks, vintage brands, merch | `PLAYFUL POP` | Rubik 800, Bowlby One |
| **GC Skywrath** (Onyx Studio) | 54 USD | variable sans, eight weights, ink traps | tech brands, studios, identities that need one family from UI to headline | `CONCRETE LIME`, `BLACK COAL` | Familjen Grotesk, Bricolage Grotesque |
| **Artocle** | 31 USD | sharp condensed display, tall narrow letters | huge one-line headlines, posters, music | `MEGA TYPE`, `POSTER COLLAGE` | Big Shoulders Display, Antonio |
| **Zunero Club** | 30 USD | playful geometric that breaks the rules | kids, games, community, festivals | `PLAYFUL POP` | Rubik Mono One, Righteous |
| **Oklean** | 35 USD | thin, wide, elegant sans for logos | fashion, beauty, hotels, wordmarks | `NOIR PORTRAIT`, `EDITORIAL CREAM` | Jost 300, Tenor Sans |
| **Nuvorqa** | 10 USD | rounded unicase in five weights | tech and kids brands, short labels and logos, never paragraphs | `PLAYFUL POP`, `LIGHT BEAM` | Unica One |
| **Vyreliq** | 10 USD | calm contemporary sans for identities and editorial | studios, magazines, brand guidelines | `EDITORIAL CREAM`, `SWISS MINIMAL` | Host Grotesk, Geologica |

The best value here: **GC Skywrath** when one family has to do everything, **Hook** or **Artocle** for a
single huge headline, **Oklean** for a luxury wordmark. The display-only faces (Magnuvo, Forten Crush,
Zunero Club, Nuvorqa) are for a few words per page; set them at 48 px and up.

## Saans and the Unanim type system

[unanim.studio](../inspiration/site-studies/unanim.md) runs its whole brand on **Saans** by Displaay Type
Foundry, in two weights only: **400 for everything big** (the 711 px wordmark included) and **500 for
small UI labels**. Nothing is bold. Hierarchy comes from size: 12–13 px labels sit next to a word that is
half the screen tall.

Saans is a commercial font: buy a licence from Displaay before using it in a build (`TY-27`); trial files
are for testing only. These free fonts give the same feel, shown below in the same system (Inter, Geist and Instrument Sans would also work but are overused, `SL-59`):

| Font | Closeness | Notes |
| --- | --- | --- |
| **Host Grotesk** | closest | similar open shapes and rounded terminals; 400 and 500 cover everything |
| **Hanken Grotesk** | neutral | safest for small UI, slightly colder |
| **Albert Sans** | warmer | softer curves, good for long indented statements |
| **Onest** | technical | when the studio also ships product UI; good Cyrillic |

The system, whichever font you use:

```css
:root { --font: "Saans", "Host Grotesk", sans-serif; }
body  { font: 400 15px/1.5 var(--font); letter-spacing: -.007em; }
.ui   { font-size: 13px; line-height: 15px; font-weight: 500; -webkit-font-smoothing: auto; }
.menu { font-size: 17px; line-height: 15px; font-weight: 500; }
.statement { font-size: clamp(32px, 3.4vw, 52px); line-height: 1.05; letter-spacing: -.02em; text-indent: 28%; }
.wordmark  { font-size: 49vw; line-height: 1; letter-spacing: -.03em; font-weight: 400; white-space: nowrap; }
```

<img src="specimens/unanim-type.jpg" alt="A dark studio hero with a giant cropped lowercase wordmark and a dock menu, above four columns showing Host Grotesk, Hanken Grotesk, Albert Sans and Onest at 400 and 500 with an indented statement" width="100%">

## Grotesks

The default for modern websites. Neutral ones (Inter, Geist) for interfaces, characterful ones (Schibsted, Host, Familjen, Bricolage) for big statements.

<img src="specimens/grotesks.jpg" alt="24 free grotesk fonts with sample text and Czech test line" width="100%">

## Bitmap and pixel labels

For tags, counters, order numbers and status lines, always in capitals next to a grotesk. Never for paragraphs. Silkscreen, DotGothic16 and Workbench have no Czech characters.

<img src="specimens/bitmap-labels.jpg" alt="12 pixel and bitmap fonts shown as labels and chips" width="100%">

## Mono

For prices, code, dates and small uppercase labels. One mono per site.

<img src="specimens/mono.jpg" alt="12 free monospace fonts" width="100%">

## Serifs for fashion, luxury and editorial

A serif carries the statement; a plain grotesk carries prices, sizes and navigation.

<img src="specimens/serif-fashion.jpg" alt="16 free serif and didone fonts" width="100%">

## Condensed, geometric and display

Condensed capitals sell sport and sales. Geometric sans reads as fashion and architecture. Headlines only.

<img src="specimens/display-condensed.jpg" alt="12 condensed, geometric and display fonts" width="100%">

## What big brands use

Measured on the live sites in November 2026. Where the brand font is free it is shown as is; otherwise a free font with a similar feel. Full numbers (sizes, weights, tracking) are in [reference.md](reference.md#what-big-brands-use).

**Free brand fonts you can use today:** Google Sans Flex (Google), Mona Sans and Hubot Sans (GitHub), Geist and Geist Pixel (Vercel), Zalando Sans (Zalando), Inter (Linear), Roboto (Alza). Hermès uses EB Garamond, Manrope and Overpass Mono, all free.

<img src="specimens/brands-tech.jpg" alt="Fonts of 14 tech brands with free matches" width="100%">

<img src="specimens/brands-eshops.jpg" alt="Fonts of 9 e-shops with free matches" width="100%">

<img src="specimens/brands-fashion.jpg" alt="Fonts of 8 fashion and luxury brands with free matches" width="100%">

## Before you build

- Set the real headline, a paragraph, a button, a price and a label in the chosen fonts, side by side.
- Type `Příliš žluťoučký kůň úpěl ďábelské ódy` and check that no letter falls back to another font.
- Self-host WOFF2 files (Fontsource or the foundry), load only the weights you use, `font-display: swap`.
- Never ship a trial font. Paid fonts are bought for the domain before launch; build with the free match until then.

Where to get free fonts: [Google Fonts](https://fonts.google.com), [Fontsource](https://fontsource.org) (npm packages), [Fontshare](https://www.fontshare.com) (Satoshi, General Sans, Switzer), [Geist](https://vercel.com/font).

The sheets are rendered from open-licence fonts with original sample text; the generator is in [`specimens/src`](specimens/src/). Brand names identify the sites measured; no logos or brand fonts are included.
