# Motion recipes

> 133 build prompts for the motion patterns seen on award-level studio sites, written for XSlop so any of them can be built from scratch with GSAP. The pattern list was studied from [Annnimate](https://annnimate.com/animations), a paid GSAP library; the prompts are our own descriptions, no code was copied. Each row links to the original for reference.

[Effects library](../README.md) · [Kits](../kits.md) · [Motion briefs](../briefs/README.md) · [Sections](../../blueprints/sections.md) · [Motion Rulebook](../../rules/motion/README.md)

Recipes with a link have a full [brief](../briefs/README.md): structure, timeline, options, accessibility and mobile behaviour.

| Level | Recipes | Use |
| --- | --- | --- |
| Subtle | 55 | any site at Subtle level and above; most of them are what makes a site feel finished |
| Modern | 64 | Modern level; one signature recipe per page, the rest Subtle |
| Immersive | 14 | Immersive 3D level; one per page, heavy, lazy-loaded |

## How to build any recipe

```text
Build the <recipe> from effects/catalog/motion-recipes.md for <section> of <site>.
Stack: GSAP 3.13+ (all plugins are free), @gsap/react useGSAP in React, template refs + cleanup in Vue,
or plain JS. Register only the plugins listed for the recipe.
Content: <real content>. Tokens: --bg, --surface, --text, --accent, fonts, radius from the design system.
Rules: keep real HTML text (SplitText output aria-hidden, original text in aria-label or sr-only);
wrap motion in gsap.matchMedia() with a (prefers-reduced-motion: reduce) branch that shows the end state;
ScrollTrigger reveals run once unless the recipe is scrubbed; pinned sections get a skip link and must not trap
keyboard focus; pointer effects are off on touch; three.js recipes lazy-load, pause off screen and cap DPR at 1.5.
Count it against the effect budget in xslop/DECISIONS.md.
```

Shared setup:

```bash
npm i gsap @gsap/react
```

```js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // recipe animation here; return a cleanup if needed
});
```

## Contents

- [Text](#text)
- [Scroll sections](#scroll-sections)
- [Galleries and sliders](#galleries-and-sliders)
- [Navigation and menus](#navigation-and-menus)
- [Buttons](#buttons)
- [UI components](#ui-components)
- [Shaders and WebGL](#shaders-and-webgl)

## Text

| Recipe | Level | GSAP tools | Build prompt | Seen at |
| --- | --- | --- | --- | --- |
| **[Line or word reveal](../briefs/text-reveal.md)** | Subtle | SplitText, ScrollTrigger | Split the headline into lines with masks; each line slides up from below its mask with a 0.08 s stagger when 70 % in view. Run once. | [annnimate](https://annnimate.com/animations/text-reveal) |
| **Character fade-in** | Subtle | SplitText, ScrollTrigger | Split into characters and fade opacity only, in order or shuffled, scrubbed to the first half of the section. No movement, so it suits calm brands. | [annnimate](https://annnimate.com/animations/character-appear) |
| **Cinematic title** | Modern | SplitText, ScrollTrigger | Large title lines enter alternately from left and right with a long expo ease, like film credits. Lines, words or chars, each with its own stagger. | [annnimate](https://annnimate.com/animations/cinematic-text) |
| **Popping letters** | Modern | SplitText, ScrollTrigger | Characters scale from 0 with a small random rotation and a back-out bounce, origin top-left. For playful one-line statements only. | [annnimate](https://annnimate.com/animations/popping-text) |
| **3D folding letters** | Modern | SplitText, ScrollTrigger | Characters rotate in on the X axis from 90 degrees with perspective on the parent, scrubbed to scroll. Keep to one headline. | [annnimate](https://annnimate.com/animations/folding-text) |
| **Text scramble** | Subtle | ScrambleText or custom | Characters cycle through a charset (A-Z, 0-9, binary) and lock in left to right. Trigger on view, hover or click. Real text in an aria-label. | [annnimate](https://annnimate.com/animations/text-scramble) |
| **[Two-colour scramble](../briefs/dual-scramble.md)** | Subtle | ScrambleText, ScrollTrigger | Scramble first in the accent colour, then settle into the text colour. Stack the final text under the scramble span so the layout never shifts. | [annnimate](https://annnimate.com/animations/dual-scramble) |
| **Typewriter** | Subtle | GSAP timeline | Type a phrase character by character, pause, delete, type the next. Timeline only, no intervals. Caret blinks with CSS. Stop after one cycle when reduced motion is on. | [annnimate](https://annnimate.com/animations/typewriter) |
| **Shimmer wave** | Subtle | SplitText | A highlight travels across the characters as a wave of brightness and slight lift. Loop slowly or once on view. | [annnimate](https://annnimate.com/animations/text-shimmer-wave) |
| **Fill on scroll** | Subtle | SplitText, ScrollTrigger | Big headline starts as outline or muted colour and fills line by line with scroll; an accent band rides the edge of the fill. | [annnimate](https://annnimate.com/animations/text-fill-wave) |
| **Word focus brackets** | Modern | SplitText, ScrollTrigger | Four corner brackets move from word to word and resize to each; the framed word stays sharp, the rest blur slightly. Scroll or hover drives it. | [annnimate](https://annnimate.com/animations/focus-text) |
| **[Word wheel](../briefs/rotating-words.md)** | Modern | ScrollTrigger | Words on a vertical wheel with 3D rotateX; the centre word is full opacity, the others fade with distance. Scroll-driven or autoplay that lands on the last word. | [annnimate](https://annnimate.com/animations/rotating-words) |
| **Rolling first word** | Modern | ScrollTrigger, Inertia | One word in a sentence rolls through a looping list as you scroll while the rest of the sentence stays still; the active word gets the accent. | [annnimate](https://annnimate.com/animations/word-roller) |
| **Typed text morph** | Subtle | Flip | As the user types, letters that shift position glide to their new place with Flip. For search fields and live headlines. | [annnimate](https://annnimate.com/animations/text-morph) |
| **Velocity type** | Modern | ScrollTrigger | Variable font axes (weight, width, slant) follow scroll velocity, then ease back to rest. Needs a variable font; clamp the range so text stays readable. | [annnimate](https://annnimate.com/animations/velocity-type) |
| **[Echo headline](../briefs/echo-headline.md)** | Immersive | ScrollTrigger | One word with stacked copies behind it in 3D that spread out with scroll and fade with depth. Copies are aria-hidden. | [annnimate](https://annnimate.com/animations/echo-headline) |
| **Crossover text** | Modern | ScrollTrigger | A big headline changes colour exactly where images pass under it, using a duplicated layer clipped to the image bounds. | [annnimate](https://annnimate.com/animations/crossover-text) |
| **Text on a hidden path** | Modern | ScrollTrigger | Words appear one by one along an invisible SVG curve as you scroll; only the words show the line. | [annnimate](https://annnimate.com/animations/text-on-path) |
| **Parting text** | Modern | ScrollTrigger | A fixed image in the centre while manifesto lines scroll past; each line splits around the image and closes after it. | [annnimate](https://annnimate.com/animations/parting-text) |
| **Editorial indent** | Subtle | SplitText, ScrollTrigger | Lines rise from masks, then the first line slides right to open an indent and a small image fades into the gap. | [annnimate](https://annnimate.com/animations/paragraph-indent) |
| **Zoom through text** | Immersive | SplitText, ScrollTrigger | A big word scales up with scroll until the camera passes between two letters into the next section. Pin the section; give a skip link. | [annnimate](https://annnimate.com/animations/zoom-through-text) |
| **Images inside a headline** | Modern | SplitText, ScrollTrigger | Small photos sit between words; on view the lines rise and the photo slots widen, pushing words apart. | [annnimate](https://annnimate.com/animations/inline-image-headline) |
| **Block wipe text** | Subtle | SplitText, ScrollTrigger | Each line is covered by a rounded block that shrinks to zero width while the text slides in behind it. | [annnimate](https://annnimate.com/animations/rectangle-text-reveal) |
| **Scribble highlight** | Subtle | ScrollTrigger, DrawSVG | A hand-drawn circle or underline draws around one key word when the headline enters. One word per page. | [annnimate](https://annnimate.com/animations/scribble-highlighter) |
| **[Split-flap board](../briefs/split-flap-board.md)** | Modern | GSAP | Tiles flip through characters like a station board, rows cascading left to right, each tile landing on its own beat. For scores, times, launches. | [annnimate](https://annnimate.com/animations/split-flap-board) |
| **Directional underline** | Subtle | CSS or GSAP | Underline grows from the left on hover and leaves to the right on exit. The default link hover for most sites. | [annnimate](https://annnimate.com/animations/text-underline) |
| **Text split by image** | Immersive | ScrollTrigger | An image grows from zero between two halves of a headline and pushes them apart; scrub or on enter. Hero only. | [annnimate](https://annnimate.com/animations/text-split-zoom) |

## Scroll sections

| Recipe | Level | GSAP tools | Build prompt | Seen at |
| --- | --- | --- | --- | --- |
| **Scroll reveal set** | Subtle | ScrollTrigger | One utility with six reveals: fade, slide up, scale, clip, blur, rotate, with stagger for grids. The base layer of every site; run once, 400 to 700 ms. | [annnimate](https://annnimate.com/animations/element-reveal) |
| **Parallax layers** | Subtle | ScrollTrigger | Layers move at different speeds (background 0.8, foreground 1.1). Keep the difference small; disable on reduced motion. | [annnimate](https://annnimate.com/animations/parallax) |
| **Section colour change** | Subtle | ScrollTrigger | Page background and text colours tween as zones enter, instead of hard section breaks. Check contrast at every step. | [annnimate](https://annnimate.com/animations/background-color) |
| **Reading progress** | Subtle | ScrollTrigger | Ring with percentage, thin bar, or text counter for long pages and articles. | [annnimate](https://annnimate.com/animations/progress) |
| **Hide-on-scroll header** | Subtle | ScrollTrigger | Header hides when scrolling down past a threshold, shows on scroll up and always shows near the top and when focus is inside it. | [annnimate](https://annnimate.com/animations/hide-header) |
| **[Stacking cards](../briefs/stacking-cards.md)** | Modern | ScrollTrigger | Pinned frame; each new card slides up over the last, which scales back, tilts and dims; a small counter jumps to any card. Text arrives after its card settles. | [annnimate](https://annnimate.com/animations/stacking-cards) |
| **Tilted panel stands up** | Modern | ScrollTrigger | An image lies tilted back under the headline and rotates upright to fill the grid as you scroll; headline lifts away. | [annnimate](https://annnimate.com/animations/container-scroll) |
| **Media breaks out** | Modern | ScrollTrigger | A video band sits in the grid beside copy, then grows to full bleed with scroll. For showreels and case study intros. | [annnimate](https://annnimate.com/animations/breakout-media) |
| **Capsule hero** | Immersive | ScrollTrigger, SplitText | Two giant letters part to reveal a video in a rounded capsule; click expands it to full screen and back. | [annnimate](https://annnimate.com/animations/capsule-hero) |
| **Shape mask reveal** | Subtle | ScrollTrigger | Content opens through a growing circle, oval, blob or image mask (clip-path or mask-image), scrubbed. | [annnimate](https://annnimate.com/animations/mask-reveal) |
| **Torn reveal per image** | Subtle | ScrollTrigger | Each image tears open from the middle with a rough edge when it enters. SVG mask, no WebGL; use on every image of a case study. | [annnimate](https://annnimate.com/animations/noise-image-reveal) |
| **Media travels between zones** | Modern | Flip, ScrollTrigger | One media element moves and resizes into a different container at each scroll step. Product storytelling. | [annnimate](https://annnimate.com/animations/flip-zone) |
| **Pile to grid** | Modern | Flip, ScrollTrigger | Cards start in a rotated pile and fly to their grid positions on scroll. | [annnimate](https://annnimate.com/animations/multi-flip) |
| **Scatter cluster** | Modern | ScrollTrigger | A pile of photo and stat cards in the centre scatters to its places as you scroll, uncovering the headline; reverses on scroll back. | [annnimate](https://annnimate.com/animations/scatter-cluster) |
| **Velocity clip** | Modern | ScrollTrigger | Clip-path inset grows with scroll speed and direction, then relaxes. Kinetic editorial headers. | [annnimate](https://annnimate.com/animations/velocity-clip) |
| **SVG line draw** | Subtle | ScrollTrigger, DrawSVG | Stroke draws from 0 to 100 % through the section. For line illustrations and connectors. | [annnimate](https://annnimate.com/animations/svg-draw-path) |
| **Grid parallax modes** | Modern | ScrollTrigger, ScrollSmoother | Columns of an image grid move at different speeds: elastic, wave, centre pull. Needs smooth scrolling; keep it off on touch. | [annnimate](https://annnimate.com/animations/animated-grid) |
| **Grid chapters** | Modern | ScrollTrigger, SplitText | Three chapters on a visible grid; pinned centre text swaps line by line while images drift at their own speeds. | [annnimate](https://annnimate.com/animations/grid-chapters) |
| **Step wipe** | Modern | ScrollTrigger, SplitText | Tall section where background and centre card clip open together for each product step; title, number and text swap in sync. | [annnimate](https://annnimate.com/animations/step-wipe) |
| **Horizontal case study** | Modern | ScrollTrigger, SplitText | Vertical scroll drives a sideways strip: intro, images of different sizes, note, quote; each panel reveals once. Stacks into a column on phones. | [annnimate](https://annnimate.com/animations/horizontal-case-study) |
| **Pinned process list** | Modern | ScrollTrigger | Steps come forward one at a time while a thin line grows to each and the image beside it changes. Click a step to jump. | [annnimate](https://annnimate.com/animations/process-list) |
| **[Process rail with bead](../briefs/process-rail.md)** | Modern | ScrollTrigger, MotionPath, DrawSVG | A bead travels along a line drawing it, each step lights up when reached and its image fades in. | [annnimate](https://annnimate.com/animations/process-rail) |
| **Orb process** | Immersive | ScrollTrigger | Ring of step names around a glossy orb; the ring turns each step to the top and the orb shifts to that step's colours. | [annnimate](https://annnimate.com/animations/orb-process) |
| **Sticky chapter rail** | Subtle | ScrollTrigger | Chapter names pinned on the left with scroll-spy; a hairline indicator slides and resizes to the active one. | [annnimate](https://annnimate.com/animations/feature-rail) |
| **Timeline dial** | Modern | ScrollTrigger, Inertia | Months or years around a large dial with ticks; scroll clicks it round one step with an elastic landing. Year in review, company history. | [annnimate](https://annnimate.com/animations/year-dial) |
| **Rising stat cards** | Subtle | ScrollTrigger | Stat cards rise and straighten into a grid, numbers roll like an odometer when each card arrives. | [annnimate](https://annnimate.com/animations/rising-stats) |
| **Counter** | Subtle | ScrollTrigger | Rolling digits per column or a simple count-up with prefix and suffix; tabular figures. | [annnimate](https://annnimate.com/animations/counter) |
| **Logo wall shuffle** | Subtle | ScrollTrigger | Client logos in a hairline grid swap one cell at a time while the section is pinned; arrows step a full set. | [annnimate](https://annnimate.com/animations/logo-shuffle) |
| **Image dissolve** | Immersive | ScrollTrigger, three.js | Noise shader dissolves one image into the next with scroll progress. | [annnimate](https://annnimate.com/animations/image-dissolve-scroll) |
| **Torn paper transition** | Immersive | ScrollTrigger, three.js | The first image tears away bottom up to paper, the paper tears onto the next image. | [annnimate](https://annnimate.com/animations/torn-paper-transition) |
| **Fog transition** | Immersive | ScrollTrigger, three.js | A fog bank rolls up and swallows one scene, then clears onto another; headline fades in the fog too. | [annnimate](https://annnimate.com/animations/fog-reveal) |
| **Bending image field** | Immersive | ScrollTrigger, three.js | Photos at different depths bend like fabric with scroll speed and flatten when still. | [annnimate](https://annnimate.com/animations/scroll-mesh-bend) |
| **[Images fly toward viewer](../briefs/image-fly-in.md)** | Immersive | ScrollTrigger | Images move from deep in the page toward the viewer around a clear centre for content; drifts with the cursor. | [annnimate](https://annnimate.com/animations/image-fly-in) |

## Galleries and sliders

| Recipe | Level | GSAP tools | Build prompt | Seen at |
| --- | --- | --- | --- | --- |
| **Draggable marquee** | Subtle | Draggable, Inertia | Endless row with autoplay that can be dragged and snaps to the centre item; pause on hover and focus; static under reduced motion. | [annnimate](https://annnimate.com/animations/marquee) |
| **Parallax slider** | Modern | Draggable, Inertia | Looping slides with inner layers at different speeds; autoplay pauses on hover. | [annnimate](https://annnimate.com/animations/infinite-parallax-slider) |
| **Infinite drag grid** | Modern | Draggable | Grid you drag in any direction with momentum and seamless wrap. Portfolios and galleries. | [annnimate](https://annnimate.com/animations/infinite-draggable-grid) |
| **Wipe slider** | Modern | SplitText | Full-screen hero slides; each change wipes the background from the travel direction while copy masks out and in. | [annnimate](https://annnimate.com/animations/wipe-slider) |
| **[Curtain slider](../briefs/curtain-slider.md)** | Modern | GSAP | The outgoing image splits into columns that wipe away one after another; arrows, drag and keys. | [annnimate](https://annnimate.com/animations/curtain-slider) |
| **[Scale slider](../briefs/scale-slider.md)** | Modern | Draggable, Inertia | Square photos shrink toward one edge, the largest cropped by the screen; drag, throw or scroll. | [annnimate](https://annnimate.com/animations/scale-slider) |
| **Lens rail** | Modern | Draggable, Inertia | Strip of photos dragged sideways; the one passing the centre grows like under a magnifier. | [annnimate](https://annnimate.com/animations/lens-rail) |
| **Expanding strip** | Subtle | GSAP | Tall panels edge to edge; the hovered one widens and its title rises, the others compress. | [annnimate](https://annnimate.com/animations/expanding-strip) |
| **Card fan** | Subtle | GSAP | A stack of cards fans into an arc on hover; the card under the pointer lifts forward. | [annnimate](https://annnimate.com/animations/card-fan) |
| **Photo stack** | Modern | MotionPath | A stack unfolds into a strip and a featured image on click; clicking a thumbnail swaps the feature. | [annnimate](https://annnimate.com/animations/photo-stack-gallery) |
| **[Diagonal gallery](../briefs/diagonal-gallery.md)** | Modern | ScrollTrigger | Photos queue on a diagonal; each scroll step moves the current one to a thumbnail top-left and grows the next into the centre. | [annnimate](https://annnimate.com/animations/diagonal-gallery) |
| **Radial ring** | Modern | GSAP | A slowly turning ring of cards sized to fit the screen; behind a hero or CTA. | [annnimate](https://annnimate.com/animations/radial-gallery) |
| **Spiral gallery** | Immersive | three.js, Draggable | Cards on an endless vertical helix; drag to spin with momentum. | [annnimate](https://annnimate.com/animations/spiral-gallery) |
| **Drifting card deck** | Immersive | three.js, Draggable, Inertia | WebGL deck fanned on a diagonal that drifts; cards part around the cursor and the hovered one updates a detail panel. | [annnimate](https://annnimate.com/animations/drift-gallery) |
| **Project wheel** | Modern | ScrollTrigger, Inertia | Project titles on the edge of a large wheel; the one at the centre lights up and swaps the image beside it. | [annnimate](https://annnimate.com/animations/project-wheel) |
| **Portrait ring** | Modern | ScrollTrigger | Greyscale portraits around a ring; scroll turns the next one into the top slot in colour with its name. | [annnimate](https://annnimate.com/animations/portrait-ring) |
| **Bento focus** | Modern | Flip | Bento grid with one large slot; clicking a small tile grows it into the slot and reflows the others. | [annnimate](https://annnimate.com/animations/bento-focus) |
| **Animated filter grid** | Subtle | Flip | Category filter and grid/list toggle where cards fly to new places instead of jumping. | [annnimate](https://annnimate.com/animations/flip-filter) |
| **Category swap portraits** | Modern | GSAP | Centred category list with portrait cards around it; choosing a category swaps all photos with a lift and blur. | [annnimate](https://annnimate.com/animations/cast-list) |
| **Team slider with filters** | Subtle | Draggable | Group chips filter a horizontal card slider; clicking a person opens a short profile over the photo. | [annnimate](https://annnimate.com/animations/team-roster) |
| **Testimonial sphere** | Immersive | three.js, ScrollTrigger | Draggable sphere of image planes behind frosted testimonial cards; off on phones. | [annnimate](https://annnimate.com/animations/testimonial-globe) |
| **Locations globe** | Immersive | ScrollTrigger | Dotted globe you can drag; selecting a location turns it to face, shows the label and draws routes. | [annnimate](https://annnimate.com/animations/network-globe) |
| **Circular slider** | Subtle | Draggable, MotionPath | Value input dragged around a circle with an arc that fills; keyboard arrows must work. | [annnimate](https://annnimate.com/animations/circular-slider) |

## Navigation and menus

| Recipe | Level | GSAP tools | Build prompt | Seen at |
| --- | --- | --- | --- | --- |
| **[Header folds into a pill](../briefs/floating-navbar.md)** | Subtle | ScrollTrigger | Wide header over the hero that shrinks into a floating pill after the first scroll and opens again at the top. | [annnimate](https://annnimate.com/animations/floating-navbar) |
| **Pill to menu panel** | Modern | GSAP | A small Menu pill grows into the whole navigation panel; links cascade in and roll on hover. | [annnimate](https://annnimate.com/animations/morphing-pill-menu) |
| **Section island** | Modern | ScrollTrigger | A capsule at the top names the current section; click grows it into the section list and a short preview. | [annnimate](https://annnimate.com/animations/morphing-island) |
| **Page turns into menu** | Modern | GSAP | The page slides, rotates and scales away while the menu overlay slides in; burger morphs to X; image per link. | [annnimate](https://annnimate.com/animations/fullscreen-slide-menu) |
| **[Two-panel drawer](../briefs/multi-level-drawer-menu.md)** | Subtle | GSAP | Drawer reveals with clip-path; hovering a category opens a second panel beside it; drill-down on mobile. | [annnimate](https://annnimate.com/animations/multi-level-drawer-menu) |
| **Morphing mega menu** | Subtle | GSAP | One dropdown container that changes height between groups, content enters from the side you came from, with hover intent. | [annnimate](https://annnimate.com/animations/mega-menu) |
| **Gooey action menu** | Modern | SVG filter | A floating button that fans out actions joined by a gooey filter; arc, line, grid or radial. | [annnimate](https://annnimate.com/animations/gooey-menu) |
| **Footer with dock** | Modern | ScrollTrigger, SplitText | Footer uncovered with parallax, columns rise through masks, a glass pill morphs into quick navigation. | [annnimate](https://annnimate.com/animations/dock-footer) |
| **Glow footer** | Subtle | ScrollTrigger, SplitText | Footer with a soft glow from the bottom edge and a wordmark sized to the full width; links with a slide underline. | [annnimate](https://annnimate.com/animations/gradient-footer) |
| **[Proximity index](../briefs/hover-index.md)** | Modern | GSAP | List of projects whose brightness falls off with distance from the pointer; a preview card wipes to the hovered project. | [annnimate](https://annnimate.com/animations/hover-index) |
| **Index wipe** | Modern | GSAP | Full-screen list where hovering a name wipes its photo into the background from the pointer direction. | [annnimate](https://annnimate.com/animations/index-wipe) |
| **Liquid list hover** | Subtle | GSAP | Rows fill with a curved shape from the side the pointer enters. | [annnimate](https://annnimate.com/animations/hoverable-list) |
| **List with following image** | Subtle | GSAP | Hovering a row shows its image near the pointer, eased; desktop only. | [annnimate](https://annnimate.com/animations/image-follow-list) |

## Buttons

| Recipe | Level | GSAP tools | Build prompt | Seen at |
| --- | --- | --- | --- | --- |
| **Magnetic button** | Subtle | GSAP | Button and its label follow the pointer with different strength. Primary action only. | [annnimate](https://annnimate.com/animations/magnetic-button) |
| **Circle fill from pointer** | Subtle | GSAP | Fill grows from where the pointer enters, timed so it always takes the same duration. | [annnimate](https://annnimate.com/animations/circle-fill-button) |
| **Curved fill from direction** | Subtle | GSAP | A wave-shaped fill enters from the pointer side and leaves the same way. | [annnimate](https://annnimate.com/animations/curve-fill-button) |
| **Slide-up fill** | Subtle | GSAP | Fill slides up from the bottom with optional scale; label colour switches for contrast. | [annnimate](https://annnimate.com/animations/background-fill-button) |
| **Icon morph button** | Subtle | GSAP | Icon rotates or morphs and the button fills on hover. | [annnimate](https://annnimate.com/animations/icon-button) |
| **Jelly button** | Modern | GSAP | Squashes on press and wobbles back from the side the pointer came from. Playful brands. | [annnimate](https://annnimate.com/animations/jiggly-button) |
| **Gradient flow button** | Subtle | CSS | A multi-colour gradient flows across on hover. Playful brands, one per page. | [annnimate](https://annnimate.com/animations/rainbow-button) |

## UI components

| Recipe | Level | GSAP tools | Build prompt | Seen at |
| --- | --- | --- | --- | --- |
| **[Accordion](../briefs/accordion.md)** | Subtle | SplitText | Animated height with the answer's lines rising through masks; single or multiple open. | [annnimate](https://annnimate.com/animations/accordion) |
| **Liquid accordion** | Modern | GSAP | The answer pours out of the question pill and settles into a panel. | [annnimate](https://annnimate.com/animations/morphing-accordion) |
| **Tabs joined to content** | Modern | GSAP | The active tab pill is joined to the panel by a curved neck that follows it. | [annnimate](https://annnimate.com/animations/morphing-tabs) |
| **Morphing dialog** | Subtle | Flip | Trigger card grows into the dialog with shared elements; others fade in. Focus trap and Escape. | [annnimate](https://annnimate.com/animations/morphing-dialog) |
| **[Rising dialog](../briefs/feature-dialog.md)** | Subtle | GSAP | Preview tile opens a tall dialog; page dims and blurs behind. | [annnimate](https://annnimate.com/animations/feature-dialog) |
| **Push drawer** | Modern | SplitText | Hero click slides in a detail panel while the hero moves away and darkens; reverse on close. | [annnimate](https://annnimate.com/animations/detail-drawer) |
| **List row to panel** | Modern | GSAP | Clicking a row grows it into a detail panel with its thumbnail and title travelling into place. | [annnimate](https://annnimate.com/animations/morphing-list) |
| **Liquid select** | Modern | GSAP | Dropdown separates from the trigger with a gooey neck; chosen value rolls into place. | [annnimate](https://annnimate.com/animations/morphing-select) |
| **Shared tooltip** | Subtle | GSAP | One tooltip slides between toolbar buttons and resizes to each caption. | [annnimate](https://annnimate.com/animations/morphing-tooltip) |
| **Smart tooltip** | Subtle | Flip | Tooltip anchored or following the pointer that flips at viewport edges. | [annnimate](https://annnimate.com/animations/tooltip) |
| **Liquid toasts** | Modern | GSAP | Toasts stack with a stretching neck between them; hover fans the stack. | [annnimate](https://annnimate.com/animations/gooey-toast) |
| **Gooey filter chips** | Modern | GSAP | Chosen chips fly into a tray and merge with a gooey neck; result count rolls. | [annnimate](https://annnimate.com/animations/gooey-filter-chips) |
| **Rolling quantity stepper** | Subtle | GSAP | Plus and minus roll the digits up or down; holding repeats faster. | [annnimate](https://annnimate.com/animations/pill-stepper) |
| **Multi-step form** | Subtle | MorphSVG | Steps slide in the travel direction, labels float, the send button morphs to a loading dot then a tick. | [annnimate](https://annnimate.com/animations/multi-step-form) |
| **[Pricing toggle](../briefs/pricing.md)** | Subtle | GSAP | Monthly/yearly switch rolls every price digit by digit and pops a savings chip. | [annnimate](https://annnimate.com/animations/pricing) |
| **Video player with fullscreen grow** | Subtle | Flip | Custom controls; fullscreen grows from its place and returns without stopping the video. | [annnimate](https://annnimate.com/animations/video-player) |
| **Cursor with labels** | Subtle | GSAP | Eased cursor dot with a label on hover targets; off on touch and reduced motion. | [annnimate](https://annnimate.com/animations/custom-cursor) |
| **Image trail** | Modern | GSAP | Images spawn along the pointer path and shrink away. Portfolios only. | [annnimate](https://annnimate.com/animations/image-trail) |
| **Tilt card** | Subtle | GSAP | Card tilts toward the pointer with glare and shadow; small angle. | [annnimate](https://annnimate.com/animations/3d-card-flip) |
| **[Elastic divider](../briefs/elastic-divider.md)** | Subtle | GSAP | A section line springs and rings when the pointer sweeps across it. | [annnimate](https://annnimate.com/animations/elastic-divider) |
| **[Magnetic tag cloud](../briefs/magnetic-tag-cloud.md)** | Modern | Draggable | Tags knocked away by fast pointer moves and pulled back home. | [annnimate](https://annnimate.com/animations/magnetic-tag-cloud) |
| **Random rotation reveal** | Subtle | GSAP | Grid items reveal with a small random angle for a loose, handmade layout. | [annnimate](https://annnimate.com/animations/random-rotate) |

## Shaders and WebGL

| Recipe | Level | GSAP tools | Build prompt | Seen at |
| --- | --- | --- | --- | --- |
| **Mesh gradient** | Modern | three.js | Up to eight colour anchors orbit and blend; the pointer stirs them. Hero background; colours from the palette. | [annnimate](https://annnimate.com/animations/mesh-gradient) |
| **Ink bloom** | Modern | three.js | A single wash of brand colour hangs from the top edge and reaches for the cursor. | [annnimate](https://annnimate.com/animations/ink-bloom) |
| **Dither filter** | Modern | three.js | Images or video rendered as two-colour ordered dither with a lens that shows the real colours under the pointer. | [annnimate](https://annnimate.com/animations/dithering) |
| **Dither cursor trail** | Modern | three.js | A fading trail behind the pointer drawn in dither dots; no image needed. | [annnimate](https://annnimate.com/animations/dither-cursor-trail) |
| **ASCII image** | Modern | three.js | Picture redrawn as characters by brightness, typing itself in. | [annnimate](https://annnimate.com/animations/ascii-image) |
| **[ASCII overlay](../briefs/ascii-overlay.md)** | Modern | three.js, ScrollTrigger | Characters bloom over the bright parts of a photo or video with scroll; the photo stays. | [annnimate](https://annnimate.com/animations/ascii-overlay) |
| **CRT glitch** | Modern | three.js | Image behind curved CRT glass that breaks into static on hover and locks back. | [annnimate](https://annnimate.com/animations/image-glitch) |
| **Gooey paint reveal** | Modern | three.js | Pointer paints gooey blobs that cut through a cover to the content below. | [annnimate](https://annnimate.com/animations/gooey-hover-reveal) |

---

<sub>Generated by `scripts/build-effects.mjs` from the JSON file next to this one. Edit the JSON, then run the script.</sub>
