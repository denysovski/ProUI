# FRAMER sections: 80 building blocks

[FRAMER style](README.md) · [Motion recipes](motion.md) · [Live gallery](gallery/index.html) · [Reference sites](../../inspiration/site-studies/reference-sites.md)

Every section has an ID (`F-01`…`F-80`), a build prompt, its motion and what it does on a phone. Ask for them
by ID or name: *"hero F-03, then F-27 and F-44, close with F-66 and footer F-69"*. All 80 are built in plain
HTML, CSS and JS in the [live gallery](gallery/index.html); in a React project use the Framer Motion
recipes in [motion.md](motion.md).

Rules that hold for every section: real content only (`SL-43`, `SL-44`), one signature motion per page
(`EF-20`), text visible without JavaScript (`SL-72`), reduced-motion versions (`MO`), keyboard access to
everything interactive (`AX`), phone layout designed, not squeezed (`LY-24`).

Groups: [Heroes](#heroes) · [Headers and navigation](#headers-and-navigation) · [Proof](#proof) · [Features](#features) · [Work and galleries](#work-and-galleries) · [Process and story](#process-and-story) · [Numbers](#numbers) · [Pricing, questions and calls to action](#pricing-questions-and-calls-to-action) · [Footers](#footers) · [Deck](#deck)

## Heroes

**F-01 Wordmark hero.** Full-bleed photo, the brand name at 45–50 vw across the bottom, cropped by the
viewport; two small text blocks hung from columns 7 and 9; place and live clock top right.
*Motion:* sinks at 0.15 of the scroll under a growing black shade (recede). *Phone:* wordmark at 24 vw, blocks stack.

**F-02 Statement hero.** White page, one 56–72 px statement starting at column 5 with its first line
indented by a third; a small label at column 4; one text link under it.
*Motion:* lines appear through a 4 px blur, 60 ms apart. *Phone:* full width, indent 15 %.

**F-03 Video card hero.** Headline left, short paragraph right, a 16:9 video card below at 80 % width.
*Motion:* the card grows to the full width and squares its corners as you scroll. *Phone:* card starts at 100 %.

**F-04 Word split hero.** Two words of the headline with a small photo between them.
*Motion:* the photo grows until it fills the screen, cutting through three photos (pinned). *Phone:* shorter pin (200 svh).

**F-05 Members hero.** A row of small portraits above the studio name set huge.
*Motion:* hovering a portrait grows it and swaps the giant word to the person's name, letter by letter (after Skiper UI `skiper6`). *Phone:* tap to select, portraits scroll sideways.

**F-06 Split then-and-now.** Archive photo in black and white on the left, the present day on the right,
the line between them is the headline. *Motion:* the right half wipes in from the seam on scroll. *Phone:* stacked.

**F-07 Product on stage.** One product photo centred on a soft grey stage, name above in 500, price and
one primary button below, three spec facts across the bottom edge.
*Motion:* product rises 24 px and sharpens from blur once. *Phone:* specs become a two-line list.

**F-08 One-screen film.** A full-screen muted video, four menu words spread across the middle, the logo small
at the bottom centre. *Motion:* hovering a word blurs the film (focus pull). *Phone:* words become a column.

**F-09 Search hero.** A headline and one large input as the main action, with three real example queries
as chips under it. *Motion:* placeholder cycles through the examples, chips fill the input on click. *Phone:* input full width.

**F-10 Collage hero.** Headline in the middle, four or five real photos at different sizes around it,
each slightly offset from the grid. *Motion:* photos drift at different scroll speeds (0.9–1.15). *Phone:* two photos above, two below.

## Headers and navigation

**F-11 Dock menu.** A dark pill at the bottom centre ("Menu", hamburger, current page) that grows upward
into a frosted panel; the page behind recedes to 0.976 under a veil. *Phone:* full-width dock.

**F-12 Folding header.** A wide header over the hero that folds into a small floating pill after 120 px.
*Motion:* width and radius animate with a spring (stiffness 320, damping 34). *Phone:* pill from the start.

**F-13 Corner header.** No bar: logo top left, two links top right, a live clock or location under them.
*Motion:* none; the corners stay fixed with `mix-blend-mode: difference`. *Phone:* the same, smaller.

**F-14 Morphing island.** A small capsule at the top centre naming the current section; click to expand
it into the section list. *Motion:* layout animation of the capsule (shared `layoutId`). *Phone:* the same.

**F-15 Side rail.** A narrow left strip with the logo, rotated text links and an icon button for the menu.
*Motion:* the rail label rolls to the current chapter. *Phone:* becomes a top bar.

**F-16 Mega panel.** One white sheet under the bar that changes height between groups; content slides in
from the side you move toward; images inside zoom slightly on hover. *Phone:* accordion sheet.

**F-17 Full-screen menu.** The page slides down and dims while a dark panel with five large links rises;
each link rolls its letters on hover. *Phone:* the same with 40 px links.

**F-18 Breadcrumb bar.** A thin bar under the header with the path and a progress line for long articles.
*Motion:* progress line scales with scroll. *Phone:* only the current page and back arrow.

## Proof

**F-19 Logo wall.** Client logos in a hairline grid of six cells; cells turn over one at a time to the next
logo every few seconds. *Phone:* three columns.

**F-20 Logo marquee.** One row of real client logos moving slowly, pausing on hover and focus, with a fade
at both edges. Only with real logos (`SL-68`). *Phone:* the same, slower.

**F-21 Quote with portrait.** One real quote at 32–40 px, the person's photo, name, role and company.
*Motion:* quote appears line by line. *Phone:* photo above.

**F-22 Testimonial slider.** Three real quotes, arrows and a "1 of 3" counter, the logos of the companies
under the quote. *Motion:* cross-fade with 12 px slide. *Phone:* swipe.

**F-23 Case result strip.** Three results from real projects ("+38 % bookings, Hotel Lipa"), each linking
to its case study. *Motion:* numbers count up once. *Phone:* stacked.

**F-24 Awards list.** A table of awards: year, award, project, with a hairline per row and the project
image following the cursor on hover. *Phone:* image above each row.

**F-25 Press quotes.** Three short press quotes set big, the publication logo under each.
*Phone:* carousel.

**F-26 Review score.** The real average rating, the number of reviews and the source, next to two quotes.
*Phone:* stacked.

## Features

**F-27 Bento with real content.** Five tiles of different sizes, each showing a real screenshot, a number
or a short video of the feature, never an icon and four words (`SL-10`). *Motion:* tiles rise 40 ms apart once. *Phone:* one column.

**F-28 Sticky feature tour.** Left column of feature names pinned, right column scrolls screenshots; the
active name gets the ink colour and a hairline indicator moves to it. *Phone:* tabs above the images.

**F-29 Tabs with preview.** Four tabs; each owns a screenshot that cross-fades in a large frame.
*Motion:* the tab highlight moves with a shared layout animation. *Phone:* tabs scroll sideways.

**F-30 Feature dialog.** A grid of small preview tiles, each opens a tall dialog with the detail.
*Motion:* the tile morphs into the dialog (shared element). *Phone:* full-screen sheet.

**F-31 Comparison slider.** Before and after images with a draggable divider and keyboard steps.
*Phone:* the same.

**F-32 Spec table.** A product spec sheet: model codes, units, hairline rows, letter-spaced labels used
once for the table head. *Phone:* two-column definition list.

**F-33 Expanding strip.** Five tall photo panels edge to edge; the hovered or focused one widens and its
title rises. *Phone:* vertical stack.

**F-34 Feature with live demo.** A small working piece of the product (a calculator, a toggle, a preview)
next to two lines of copy. *Phone:* demo first.

**F-35 Integrations cloud.** Real integration logos in a loose cluster that the cursor pushes aside and
that springs back. *Phone:* static grid.

**F-36 Accordion features.** Four features as an accordion with a large image that changes with the open
item. *Phone:* image inside the open item.

## Work and galleries

**F-37 Contact sheet.** Two columns of square tiles alternating photo and white; the caption sits in the
corner of the white tile. *Phone:* one column, captions under photos.

**F-38 Hover index.** A list of project names; the one nearest the cursor is brightest and a preview card
in the corner wipes to its image. *Phone:* thumbnails inline.

**F-39 Horizontal case study.** Vertical scroll turns into a sideways walk through one project: intro,
stills of different sizes, a quote. *Phone:* normal vertical flow.

**F-40 Stacking cards.** Project cards that pin and stack; the covered card shrinks and dims.
*Phone:* the same, shorter.

**F-41 Coverflow.** A snap carousel with a slight 3D tilt on the side items; arrows, swipe and keys.
*Phone:* swipe only.

**F-42 Masonry with filter.** Filter chips and a masonry of projects; filtering follows `MO-29`
(fade, drop 14 px, swap, rise 45 ms apart). *Phone:* two columns.

**F-43 Lightbox grid.** A grid of photos that opens a full-screen viewer with captions and keyboard
navigation. *Phone:* the same.

**F-44 Centre strip.** One vertical strip of stills in the middle of a blurred backdrop, project name and
credit on the left. *Phone:* full width strip.

**F-45 Image follow list.** Rows of services or projects; a photo follows the cursor while you hover a row.
*Phone:* photo inside the row.

**F-46 Before the fold reel.** A small looping reel in the corner of a text section, enlarges on click
into a player with captions. *Phone:* inline player.

## Process and story

**F-47 Process rail.** Four steps along a line; a bead travels the line as you scroll and each step lights
up. *Phone:* vertical line.

**F-48 Pinned process list.** The section holds; each step comes forward in turn and the image beside it
changes. *Phone:* steps with their images.

**F-49 Chapters.** A long story in chapters, a small chapter label pinned top left, one idea and one image
per chapter. *Phone:* label in the header.

**F-50 Timeline.** Years down a centre line that draws as you scroll; entries alternate sides.
*Phone:* line on the left.

**F-51 Manifesto parting.** One photo in the centre, manifesto lines scroll past and part around it.
*Phone:* photo pinned at the top, lines under it.

**F-52 Team grid.** Real team portraits in black and white, name and role, colour on hover.
*Phone:* two columns.

**F-53 Values with focus.** A statement where corner brackets move from word to word; the rest softens.
*Phone:* the same.

**F-54 Section stack chapters.** Three full-screen chapters that stack; each covered one scales back.
*Phone:* the same with shorter chapters.

## Numbers

**F-55 Stat wall.** Nine dark squares with a large percentage and a short caption each, intro text on the
left (from the pitch-deck reel). *Phone:* three columns of smaller squares.

**F-56 Big number.** One giant number ("40+") with a short paragraph and one photo, framed by corner
brackets. *Phone:* number at 30 vw.

**F-57 Glass stats over light.** Four stats in frosted tiles over one real photo or video (glass only
because it sits on imagery, `SL-04`). *Phone:* two by two.

**F-58 Counting row.** Four numbers that count up once, each with a source line. *Phone:* two by two.

**F-59 Bar comparison.** Three dark columns of different heights with value tags and a one-line
conclusion. *Motion:* columns grow from the baseline once. *Phone:* the same.

**F-60 Odometer year.** A score or price that rolls digit by digit when the year or plan changes.
*Phone:* the same.

## Pricing, questions and calls to action

**F-61 Price list for services.** Packages as rows: name, what is included, from-price, a link to ask.
Not three tiers by reflex (`SL-11`). *Phone:* stacked rows.

**F-62 Two plans with a switch.** Monthly and yearly with rolling prices and the saving stated in money.
*Phone:* stacked.

**F-63 FAQ accordion.** Questions as buttons, answers revealed line by line, one open at a time.
*Phone:* the same.

**F-64 Booking card.** A dark card with a portrait, "Book a call" and the real number of free slots this
month. *Phone:* full width.

**F-65 Big CTA statement.** A black half with one paragraph and a small pill button, next to a portrait
lit in the brand colour. *Phone:* stacked.

**F-66 Contact form, short.** Name, email, one message field, a budget select, and the reply time.
*Phone:* the same.

## Footers

**F-67 Wordmark footer.** The brand name fitted to the full width at the bottom, links in three small
columns above it, copyright at 12 px. *Phone:* wordmark fitted again.

**F-68 Dock footer.** The footer is uncovered with a parallax as the page lifts off it; its parts rise
through masks. *Phone:* no parallax.

**F-69 Fat footer.** Six columns that map the whole site, newsletter, legal links and a status line.
*Phone:* accordion columns.

**F-70 Minimal footer.** One line: name, year, three links, back to top. *Phone:* two lines.

## Deck

Ten screens from the grayscale pitch-deck system in the [reference reel](../../inspiration/site-studies/reference-sites.md#pitch-deck-reel),
rebuilt as website sections. Corner metadata (page name top left, company bottom left, page number bottom
right) is allowed here only because it is real navigation in a deck-like page, never as decoration (`SL-17`).

**F-71 Glass cover.** A soft checkerboard of frosted squares, title bottom left at 64 px, small meta above it.

**F-72 Agenda.** A centred ordered list of the chapters over the glass texture; each item links to its chapter.

**F-73 Problem statement.** A bracket-style headline right of centre, three small text blocks on the left.

**F-74 Mosaic.** One tall and two stacked image slots on the right, a short text block on the left.

**F-75 Scattered images.** Four small images floating at different positions around one centred statement.

**F-76 Stat wall dark.** F-55 on a black page with a light intro block.

**F-77 Bar chart page.** F-59 at full page size with a caption block on the left.

**F-78 Split contact.** White half with contact lines (real ones), grey half for a photo.

**F-79 Mission on glass.** One large statement centred on the glass texture.

**F-80 Closing page.** Thank-you line, one contact action, the logo, and the page number in the corner.
