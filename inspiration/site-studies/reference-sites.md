# Seven reference sites and one pitch-deck reel

[Site studies](README.md) · [Unanim study](unanim.md) · [New effects](../../effects/fx/README.md) · [FRAMER style](../../style/framer/README.md)

**Studied in the browser in November 2026 at 1440 × 900.** For each site: the stack read from the page,
the fonts actually loaded, the moves that make it feel expensive, and a prompt that rebuilds the idea for
another brand. Inspiration, never a copy (`SL-43`, `EF-24`).

What they share: GSAP and Lenis smooth scrolling on six of seven, a preloader on four, one family or one
pair of families, black or near-black on four, very long pages that are paced like a film, and almost no
decoration that is not a photograph, a video or type.

| Site | Kind | Stack | Fonts | The idea worth learning |
| --- | --- | --- | --- | --- |
| [Journalist House](#journalist-house) | luxury residential tower | Webflow, GSAP, ScrollTrigger, Flip, Lenis | Canela Deck 100/300, PP Neue Montreal 400/600, Futura Demi | a 42 000 px story in chapters; archive photo becomes the new building |
| [Apekon](#apekon) | product and engineering studio | three.js, GSAP, Lenis | Montserrat Z 400/700 | a WebGL night sky and a wordmark that switches alphabets |
| [Jeppesen](#jeppesen) | one-person brand studio | GSAP, three.js | Author, Clash Grotesk | warm paper grain, a giant wordmark with the logo as a letter |
| [Motive](#motive) | industrial energy | GSAP, ScrollTrigger, Lenis | Articulat CF, IBM Plex Mono | light trails behind glass stat tiles, corner brackets |
| [Blurred](#blurred) | production company | three.js, GSAP, Lenis | Frama 400/500 | one screen, one video, the menu blurs the film |
| [InterNest](#internest) | real estate | GSAP, Lenis, Swiper | Montserrat, Poppins | the logo flies from the loader into the header |
| [Focus Industries](#focus-industries) | autonomous drones | GSAP, Lenis | General Sans 400–700 | spec-sheet typography, letter-spaced labels, an inset grey page |
| [Pitch deck reel](#pitch-deck-reel) | a Figma deck system (Akoya) | video | a neo-grotesk | ten screen types that become website sections |

## Journalist House

- **Pacing.** One page 41 782 px tall, cut into chapters ("Chapter 01 — The project") with a small
  chapter label pinned top left. Every chapter is one idea and one image.
- **Then and now.** The first screen is a black and white archive photo of the old press house; the
  scroll splits the screen and the new tower slides in beside it in colour. History becomes the sales
  argument.
- **A vertical rail.** Navigation is a narrow white strip on the left with rotated labels ("Select a
  residence", "Inquire"). The content gets the whole width.
- **Serif for feeling, grotesk for facts.** Canela Deck Thin in capitals for statements ("A new
  landmark in Tel Aviv"), Neue Montreal for everything practical.
- **Build prompt:** *A long chaptered landing page for a building, a hotel or a heritage brand. Pin a
  small chapter label top left. Open on an archive photo in black and white and reveal the present-day
  photo beside it with a vertical wipe as the visitor scrolls. Thin serif capitals for statements,
  neutral grotesk for details, a narrow left rail with rotated text links.*

## Apekon

- **Loader to night sky.** A counter (`000` → `100`) and a "Loading" label under a small logo, then a
  black WebGL scene: drifting stars, soft silk-like light, and later a faceted dark sphere lit from
  above with one sentence across it.
- **The wordmark changes alphabet.** "απεικόν" in Greek scrambles into "apekón" in Latin: the company's
  origin told in one micro-animation.
- **Sound toggle** bottom right next to an accessibility button. Sound is off until clicked.
- **Right-edge award badge** (vertical tab) and a tiny right-aligned menu stack in capitals.
- **Build prompt:** *A dark studio site with one WebGL scene that changes as you scroll (stars → light
  → one object). Loader counts to 100. The logo scrambles between two spellings of the name. Menu as
  five tiny right-aligned capitals top right. An opt-in sound toggle bottom right.*

## Jeppesen

- **Paper.** Warm off-white `#ebe7e1`-like background with film grain over everything.
- **Wordmark with the logo inside it.** "J✻PPESEN": the asterisk logo replaces a letter, spins slowly,
  and the whole word sits at the bottom of the first screen.
- **Video card rises out of the hero** and grows to almost full width as you scroll; the headline under
  it fills from grey to black word by word ("The gap between how good you are and how good you look…").
- **Dark band** with client logos in a hairline grid of rounded cells and a testimonial slider (01/03).
- **Two buttons only:** "Talk to Lucas" (dark, with an icon) and "Menu" (light). A real name on the CTA.
- **Build prompt:** *A personal studio site on warm grain paper. The logo mark replaces one letter of a
  giant wordmark at the bottom of the hero and rotates. Scroll grows a video card from the hero to the
  width of the page. The statement under it fills from grey to ink word by word. The CTA uses the
  founder's first name.*

## Motive

- **Light as the brand.** Neon light trails (pink, orange, blue) streak behind a black page; stats sit
  on top in frosted glass tiles (1.1B, 235M, 349M, $40M+) with a mono label under each number.
- **Corner brackets** frame sections like a viewfinder; big outlined "40+" with "Years of experience"
  in mono capitals.
- **Mono for data, grotesk for claims:** IBM Plex Mono for labels, Articulat for everything else.
- **Build prompt:** *An industrial B2B page on black. One light-trail video or canvas behind the stats.
  Stats in four glass tiles with mono labels. Sections framed by thin corner brackets. A giant number
  for the company's age next to a short paragraph and one photo.*

## Blurred

- **One screen.** The home page is 900 px tall: one slow, motion-blurred fashion film, four words across
  the middle (About, Services, Works, Talents) evenly spaced, the wordmark small at the bottom centre.
- **Focus pull.** Hovering a menu word blurs the whole film behind it, like a camera losing focus, so
  the word becomes the only sharp thing.
- **Works** is one vertical strip of portraits in the centre of the blurred film with the project name
  and production credit to the left.
- **Build prompt:** *A one-screen home for a film or production company: a slow full-screen video, four
  menu words spread across the middle, the logo tiny at the bottom. Hovering a word blurs the video by
  16–24 px. Works open as a centred vertical strip of stills over the blurred film.*

## InterNest

- **Logo handoff.** The loader shows the bronze line logo centred over a dark radial gradient; then the
  mark flies to the top-left corner while the wordmark settles centred beneath it and fades: the loader
  becomes the header.
- **A compass needle** spins in the cookie dialog. A small brand detail in the least loved component.
- **Build prompt:** *Preloader for a premium service brand: line logo in a metallic gradient centred on
  a dark vignette, then the mark travels (Flip) to its place in the header and the page fades in under
  it.*

## Focus Industries

- **Spec sheet as a design language.** Product names like "VK — 66 Recon", "CF — 12 Eyes"; letter-spaced
  capitals ("S O U N D", "S I Z E") as labels; numbers with units ("52 dBA from 10 m").
- **Roll links:** every button label is doubled in the DOM and rolls on hover.
- **Inset grey page:** a light grey sheet sits inside black margins with a huge headline ("Flying Eyes")
  and a spec table, like a printed data sheet laid on a desk.
- **Sticky product rail** on the left with thumbnails and model names while articles scroll on the right.
- **Build prompt:** *A hardware product site written like a spec sheet: model codes, units, letter-spaced
  capital labels, hairline tables. A sticky left rail lists the models with thumbnails. One section is a
  light grey inset page inside black margins with a giant product name and a spec table.*

## Pitch deck reel

The reel shows a grayscale Figma pitch-deck system (88 pages) flipping through its layouts. Each layout
is useful as a website section, and all ten are in the [FRAMER section library](../../style/framer/sections.md#deck)
as `F-71` to `F-80`:

1. **Cover on glass:** a soft checkerboard of frosted squares, title bottom left, tiny meta above it.
2. **Stat wall:** nine dark squares with a big percentage each and a short caption; intro text left.
3. **Agenda:** a centred numbered list of eight chapters over the glass background.
4. **Problem statement:** a bracketed headline right of centre, a few small text blocks on the left.
5. **Image mosaic:** one tall and two stacked image slots on the right, copy on the left.
6. **Scattered images:** four small images floating around one centred statement.
7. **Bar comparison:** three dark columns of different heights with value tags.
8. **Split contact:** white half with contact lines, grey half for a photo.
9. **Mission over glass:** one large statement centred on the glass texture.
10. **Corner metadata everywhere:** page name top left, company bottom left, page number bottom right.

The quality comes from the system, not from any one slide: one font, a strict margin, tiny labels in
the corners, big numbers, and lots of grey.
