# Annnimate catalogue

> Every animation listed on [annnimate.com/animations](https://annnimate.com/animations) in November 2026
> (168 pages), described in our own words so you can ask for the idea by name and build it with GSAP.
> Annnimate is a paid library; nothing from its code is in ProUI. The 21 free ones have full build
> briefs in [effects/briefs](../briefs/README.md).

[Effects library](../README.md) · [Motion briefs](../briefs/README.md) · [Motion recipes](motion-recipes.md) · [Plain-JS fx](../fx/README.md) · [Kits](../kits.md)

## How to use this list

- Name the idea in the prompt: *"services section as a Services Index"*, *"page change as a Curtain Transition"*.
- Count it against the effect budget (`EF-20`, `EF-21`). A page gets one signature scroll moment, one
  transition style for the whole site and as many quiet UI details as it needs.
- Level: **S** subtle, **M** modern, **I** immersive (`effects/levels.md`). Shaders and WebGL are **I**.
- Every one needs a reduced-motion version and real text in the DOM (`MO`, `AX`).
- Page transitions on multi-page sites: build them on the View Transitions API with a GSAP or CSS
  timeline, and keep them under 900 ms in total (`MO-11`).

## Contents

[Page transitions](#page-transitions) · [Section transitions](#section-transitions) · [Scroll](#scroll) · [Sections](#sections) · [UI components](#ui-components) · [Menus](#menus) · [Buttons](#buttons) · [Shaders](#shaders) · [Experimental](#experimental)

## Page transitions

| Name | What happens | Level |
| --- | --- | --- |
| Card Transition | the page shrinks into a card on a dark stage, a sheet rises inside it, the next page grows back to full screen | M |
| Circle Transition | two dark circles grow from the click point, then the new page opens as a hole from the same spot | M |
| Columns Transition | five columns rise one after another and leave upward like blinds (three on phones) | M |
| Curtain Transition | a panel rises from the bottom, covers the page and carries on off the top | S |
| Diagonal Transition | the next page drops in with a slanted edge that flattens on landing; the old page sinks and dims | M |
| Fade Transition | a plain cross-fade, no cover | S |
| Match Cut Transition | the page pulls back and speeds up, cuts to the next page at the smallest size, which springs forward | M |
| Morph Transition | a photo on one page moves and resizes into the same photo on the next (shared element) | M |
| Reel Transition | a dark panel wipes up and flashes a reel of images; the last one stays as the panel leaves | I |
| Rows Transition | five horizontal bands slide across, top to bottom, cover and leave on the other side | M |
| Slide Over Transition | the next page slides up over the current, which sinks, dims and drifts up behind | S |
| Smoke Transition | the new page arrives through a ragged smoke mask that billows from the click | I |
| Swing Transition | a dark square swings in around the bottom-left corner, holds, swings out round the bottom-right | M |
| Window Transition | a thin window strip at the bottom grows to full screen while the old page grows past and dims | M |
| Wipe Transition | a panel sweeps in from the left, overtakes the page and carries on out to the right | S |

## Section transitions

| Name | What happens | Level |
| --- | --- | --- |
| Card Expand | the next section rises as an inset dark card and squares its corners as it reaches full width | M |
| Color Shift | the whole page blends background, text and grey into the next section's palette as it arrives | S |
| Gradient Reveal | a soft coloured hill rises from the bottom and swells until its dark core fills the screen | M |
| Horizon Gradient | the next dark section rises like a planet's edge with a sunrise rim, flattens and fills the screen | I |
| Image Handoff | the hero is a rounded card; a photo card rises under it and pushes the seam up, then shrinks into the next section | M |
| Pixel Wipe | a dark hero breaks into square pixels flipping to the light section below in a ragged front | M |
| Section Stack | each section holds while the next slides over it; the covered one scales down, rounds and dims | S |
| Split Reveal | the section splits down the middle and both halves swing open like doors onto the next | M |
| Word Split Expand | a small photo between two words grows to fill the screen, cutting through a few photos on the way | M |

## Scroll

| Name | What happens | Level |
| --- | --- | --- |
| Character Appear | characters fade in one by one with no movement, in order or at random | S |
| Crossover Text | a headline changes colour exactly where photos scroll under it, so image edges slice through letters | M |
| [Echo Headline](../briefs/echo-headline.md) | one word grows a 3D slab of fading copies of itself as you scroll | I |
| Focus Text | four corner brackets jump from word to word; the framed word stays sharp, the rest softens | M |
| Folding Text | characters fold and unfold in 3D on X or Y as you scroll | M |
| Hide Header | the header hides on the way down and returns on the way up, with zones where it always shows | S |
| Inline Image Headline | small photos tucked between words open their slots and push the words apart | M |
| Mask Reveal | content opens through a circle, oval, blob or image mask as you scroll | M |
| Morph Gap | two words part and a small shape between them morphs dot → square → diamond → bar through the palette | M |
| Multi Flip | a pile of overlapped, rotated cards flies out to grid positions (Flip) | M |
| Noise Image Reveal | an image tears open from the middle with a rough circle when it enters | M |
| Paragraph Indent | lines rise from a mask, then the first line slides right to open an indent where a small image fades in | S |
| Parallax | layers at different speeds | S |
| Popping Text | characters pop in with a random rotation and a bounce, in a staircase layout | M |
| [Process Rail](../briefs/process-rail.md) | a bead draws a line through steps that light up as it passes | M |
| Progress | reading progress as a ring, a bar or a counter | S |
| Project Wheel | project titles sit on a big turning wheel; the one in the middle lights up and swaps the photo | M |
| [Rotating Words](../briefs/rotating-words.md) | a wheel of words with the centred one sharp | M |
| Scatter Cluster | a pile of photo and stat cards scatters to its places and uncovers the headline | M |
| Scribble Highlighter | a hand-drawn circle or underline draws itself around one word | S |
| Shape Reveal | images open through a soft shape (pebble, arch…) that grows while the photo stays still | M |
| SVG Draw Path | a stroke draws from 0 to 100 % through the section | S |
| Text Fill Wave | a headline fills with colour line by line, with a bright accent riding the fill edge | M |
| Text On Path | words appear one by one along an invisible curve | M |
| Text Reveal | words or characters rise with a stagger | S |
| Text Split Zoom | an image grows from nothing between split words and pushes them apart | M |
| Velocity Clip | elements clip more the faster you scroll | M |
| Velocity Type | a variable font gains weight, width and slant from scroll speed, then relaxes | M |
| Word Roller | the first word of a sentence rolls through an endless list as you scroll | M |
| Zoom Through Text | a big word grows until you fly through the gap between two letters into the next section | I |

## Sections

| Name | What happens | Level |
| --- | --- | --- |
| Alternating Timeline | a centre line draws down; entries alternate text and photo as it reaches them | S |
| Arc Carousel | round photos travel along one thin arc; the current one large, neighbours smaller | M |
| Breakout Media | a film band beside the copy grows to every edge as you scroll | M |
| Capsule Hero | two giant letters split to show a video in a rounded capsule; click to fill the screen | M |
| Card File Hero | a long file of photo cards on edge under a headline rises in a wave under the pointer | M |
| Cast List | a centred category list with four portrait cards around it; picking a category swaps all photos | M |
| Column Gallery | columns raise a slice of photo on hover; click opens them into one full-bleed picture | M |
| Container Scroll | an image lying tilted back stands up to face you and fills the grid | M |
| [Diagonal Gallery](../briefs/diagonal-gallery.md) | a queue of photos steps along a diagonal | M |
| Dock Footer | the footer is uncovered with a parallax, then its parts rise through masks | S |
| Drift Gallery | a WebGL deck of cards drifts diagonally; drag to throw, the cursor parts the cards | I |
| Feature Rail | chapter names pinned left with a sliding indicator, content scrolls right | S |
| Flip Filter | filtering flies cards to their new spots; a toggle switches grid and list | M |
| Gradient Footer | a soft glow rises off the bottom edge under a giant brand name that fits the width | S |
| Grid Chapters | three chapters on a visible grid; pinned centre text swaps line by line, images drift at their own speeds | M |
| Horizontal Case Study | vertical scroll becomes a sideways magazine walk through a project | M |
| Hover Image Headline | letters near the cursor shrink away and product photos grow in their place | I |
| [Hover Index](../briefs/hover-index.md) | project names brighten by distance to the cursor; a preview wipes in the corner | M |
| Image Tabs | each tab owns a photo; switching pulls the frame back and hard-cuts to the next | M |
| Logo Shuffle | a fixed hairline grid of client logos turns over one cell at a time as you scroll | S |
| Network Globe | a draggable dotted globe turns to a chosen location and draws routes | I |
| Orb Process | a ring of step names turns each step to the top around a living orb | M |
| Orbit Gallery | a ring of soft-shaped photos turns around the headline; drag to throw | M |
| Parting Text | one photo holds the centre; manifesto lines part around it like water around a stone | M |
| Photo Pile | photos land along a curve, growing as they pile up over the headline | M |
| Portrait Ring | a ring of portraits turns the next one into the top slot as you scroll | M |
| [Pricing](../briefs/pricing.md) | prices roll digit by digit on the monthly/yearly switch | S |
| Process List | a pinned how-we-work list; each step comes forward with a line and an image | S |
| Rising Cards | a fixed headline while product cards rise over it one by one | M |
| Rising Stats | five stat cards rise and straighten into a grid; numbers roll like an odometer | S |
| Score Columns | scores sit in circles at the height of their value; the year rolls and circles move | M |
| Services Index | left side holds, right side scrolls; the centred service darkens and a thumbnail opens a gap | S |
| [Stacking Cards](../briefs/stacking-cards.md) | cards slide up and cover the last, which shrinks and tilts away | M |
| Step Wipe | a tall section wipes between product steps; background and card clip open together | M |
| Team Roster | group chips filter a card slider; a blurred panel shows a profile | S |
| Testimonial Globe | a WebGL sphere of images with frosted testimonial cards | I |
| Timeline Steps | a sticky photo frame wipes in a new photo diagonally as each step reaches the middle | S |
| Word Stream | a long list lights up word by word with the scroll and drifts up into a blur | M |
| Wipe Slider | full-screen slides wipe open from the direction of travel; titles mask out and in | M |
| Year Dial | photos ride a big dial of months that clicks round with an elastic landing | M |

## UI components

| Name | What happens | Level |
| --- | --- | --- |
| [Accordion](../briefs/accordion.md) | animated height and a line-by-line text reveal | S |
| Bend Slider | a range slider whose line arcs up when you hold the knob | M |
| Bento Focus | clicking a small bento tile grows it into the big slot; the rest re-settle | M |
| Bubble Tabs | tabs swap a cluster of image and word circles; shared ones glide, others pop | M |
| Card Fan | a stack of cards fans into an arc on hover; the hovered card blooms most | S |
| Circular Slider | drag a handle round a ring to set 0–100 | S |
| [Curtain Slider](../briefs/curtain-slider.md) | the outgoing image is cut into twelve columns that wipe away one by one | M |
| Depth Stack | a squared stack of product cards steps back in perspective on hover | M |
| Detail Drawer | the hero is the trigger; a detail panel pushes it aside with a parallax clip | M |
| [Dual Scramble](../briefs/dual-scramble.md) | text scrambles through the accent, then resolves | S |
| Expanding Strip | tall edge-to-edge panels; the hovered one blooms wide | S |
| [Feature Dialog](../briefs/feature-dialog.md) | a tall dialog rises from a tile with a gradient band | S |
| Gooey Filter Chips | chips fly into a tray and merge with a gooey neck; the count rolls | M |
| Gooey Toast | toasts stack joined by stretching necks; hover fans them | M |
| Hoverable List | rows fill with an organic curve from the side the cursor entered | S |
| Image Follow List | hovering list rows shows an image that follows the cursor | S |
| Index Wipe | a full-screen index; hovering wipes its photo in from the direction of travel | M |
| Infinite Draggable Grid | a looping draggable grid with momentum | M |
| Infinite Parallax Slider | a looping slider with layers at different speeds | M |
| Lens Rail | a draggable strip; the photo passing the middle grows as under a magnifier | M |
| Linked Panels | stacked cards joined by concave necks that stretch on hover and snap apart | M |
| [Magnetic Tag Cloud](../briefs/magnetic-tag-cloud.md) | tags knocked by the cursor spring back to their spots | M |
| Mask Slider | pressing pulls masks in; moving bows them into a pillow shape | M |
| Match Cut Slider | slides change with a match cut: pull back, cut at the same size, spring forward | M |
| Morphing Accordion | answers pour out of their question pill like liquid | M |
| Morphing Dialog | a trigger morphs into the dialog (Flip on shared ids) | S |
| Morphing Island | a pinned capsule names the current section and grows into a section list | S |
| Morphing List | a clicked row grows into a detail panel; its parts travel to their new places | M |
| Morphing Select | the dropdown is born from the trigger with a gooey separation | M |
| Morphing Tabs | the highlight pill is joined to the panel by a curved neck that follows it | M |
| Morphing Tooltip | one tooltip slides and resizes between toolbar buttons | S |
| Multi-Step Form | three steps with direction-aware slides; the button morphs into a dot and a tick | S |
| Photo Stack Gallery | a stack unfolds into a strip and a large featured photo | S |
| Pill Stepper | plus and minus roll the digits up or down; holding repeats faster | S |
| Radial Gallery | a slow ring of image cards behind a hero or CTA | M |
| [Scale Slider](../briefs/scale-slider.md) | squares shrink toward one edge; drag, throw or drift | M |
| Spiral Gallery | an endless helix of cards climbing around an axis | I |
| [Split Flap Board](../briefs/split-flap-board.md) | station-board tiles riffle to the next result | M |
| Text Morph | characters move smoothly as you type (Flip) | S |
| Text Scramble | characters cycle through a charset before resolving | S |
| Tooltip | follows the cursor or anchors to an element | S |
| Typewriter | types, pauses and deletes a list of phrases | S |
| Video Player | custom controls; fullscreen grows the player out of its place | S |

## Menus

| Name | What happens | Level |
| --- | --- | --- |
| [Floating Navbar](../briefs/floating-navbar.md) | a wide header folds into a floating pill on scroll | S |
| Fullscreen Slide Menu | the page slides, turns and shrinks away while a dark overlay slides in like a turned page | M |
| Mega Menu | one dropdown that morphs height between groups, direction-aware content, hover intent | S |
| Morphing Pill Menu | a small Menu pill grows into the whole navigation panel; links cascade by letter | M |
| [Multi-Level Drawer Menu](../briefs/multi-level-drawer-menu.md) | two drawer panels revealed by clip-path | S |
| Preview Menu | a dark panel grows from the logo; hovering a link slides a filmstrip of previews | M |

## Buttons

| Name | What happens | Level |
| --- | --- | --- |
| Jiggly Button | squashes like jelly on press and wobbles back, poked from the side the cursor enters | M |

## Shaders

| Name | What happens | Level |
| --- | --- | --- |
| [ASCII Overlay](../briefs/ascii-overlay.md) | characters bloom over the bright parts of a photo | I |
| ASCII Image | a picture redrawn as characters that type themselves in | I |
| Condensation | a fogged window over media; drops run down and the cursor wipes a streak | I |
| Dither Cursor Trail | a cursor trail breaking into ordered-dither dots | I |
| Dithering | a 2-colour Bayer dither of an image or video with a reveal lens | I |
| Edge Carousel | discs never get cut at the edge: they smear into the border as a streak | I |
| Focus Tiles | small tiles scan a video and magnify their patch | I |
| Fog Reveal | a fog bank rolls up and clears onto a different photo | I |
| Gooey Hover Reveal | drawing with the cursor cuts a liquid hole through a cover | I |
| Image Dissolve Scroll | fBm noise dissolves one image into the next | I |
| Image Glitch | a photo behind CRT glass that breaks into static on hover | I |
| Ink Bloom | a cloud of brand colour bleeds off the top edge and reaches for the cursor | I |
| Mesh Gradient | up to eight colour anchors orbit; the cursor stirs them | M |
| Scroll Mesh Bend | layered photos bend like fabric on fast scroll | I |
| Torn Paper Transition | the first photo tears away to paper, the paper tears to the second | I |

## Experimental

| Name | What happens | Level |
| --- | --- | --- |
| Dappled Light | leaf shadows on a wall around a lit patch that follows the pointer | M |
| [Elastic Divider](../briefs/elastic-divider.md) | a divider line twangs like a string when the cursor crosses it | S |
| Flip Zone | one media element moves between zones (Flip) as you scroll | M |
| Gooey Menu | a floating button fans out child actions in a liquid blob | M |
| Gooey Preloader | blobs swirl into one disc while a counter goes to 100, then the disc opens onto the page | M |
| [Image Fly-In](../briefs/image-fly-in.md) | images fly toward the viewer around a clear centre | I |
| Image Vignette | blur, darkening and grain grow toward the edges of a photo (CSS only) | S |
| Infinite Draggable Grid | see UI components | M |
| Rectangle Text Reveal | each line is uncovered by a rounded rectangle that shrinks away | S |

## Ready in plain JavaScript

Several of these ideas are now in [`effects/fx`](../fx/README.md) without GSAP: Section Stack
(`section-stack`), Word Split Expand (`word-split`), Text Fill Wave (`scroll-fill`), Image Handoff
and Card Expand (`card-expand`), Morphing Pill Menu (`dock-menu`), Hide Header, Focus Text
(`focus-words`), and the filter idea of Flip Filter (`filter-swap`).
