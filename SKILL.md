---
name: xslop
description: Rulebook for building websites that look designed by a person, not generated. Use when building, redesigning or reviewing a website or web app, or when the user says "XSlop", "no slop", "make it not look vibecoded" or names XSlop rule IDs to include or skip.
---

# XSlop — a rulebook against AI slop

XSlop is one sheet of rules for making websites that look and behave like a real, finished product made by a
careful person, not like something generated in five minutes. It covers five things:

1. **Slop to avoid**: visual patterns that make a site look AI-generated (`SL`).
2. **Design craft**: small decisions that make a design feel considered (`DC`).
3. **Motion**: how to animate so it feels fast and natural (`MO`).
4. **States**: every situation the UI has to handle, not just the happy path (`ST`).
5. **Production essentials**: the pages, files, SEO and performance work every real site has (`PE`, `SEO`, `PF`).

Every rule has an ID. The user refers to rules by ID or by name to switch them on or off.

---

## 1. How to use this sheet

### Default behaviour

When the user asks for a website (or says "use XSlop") without further instructions:

- Apply **every rule** in this sheet.
- `SL` rules are **things to avoid**. Do not produce them.
- All other rules are **things to do**. Do them.
- Some `SL` rules are marked **(soft)**: the pattern itself is fine when it is a deliberate part of the brand,
  used sparingly and consistently. They are only slop when they appear by default or everywhere. When you keep a
  soft pattern, keep it on purpose and keep it rare.

### Overrides from the user

The user may say things like:

- `XSlop, but keep SL-17` or `keep mono fonts`: that pattern is allowed. Use it deliberately, not everywhere.
- `XSlop, skip PE-19` or `no cookie banner`: do not do that rule.
- `XSlop only SEO and PF`: apply only those groups.
- `XSlop audit`: do not build. Review an existing site against every rule and report what fails.

The user's explicit words always win over this sheet. If an override conflicts with a law or with basic
accessibility (for example skipping a privacy policy on a site that collects emails in the EU), do what they
asked and mention the risk in one line.

### Working order

1. Read the brief. Decide what the site is, who it is for and the **one action** a visitor should take.
2. Settle the design system first (`DC-05`): colours, type scale, spacing, radii, motion durations.
3. Build with real content. Where real content is missing, ask for it or mark it clearly as a placeholder
   that has to be replaced, never present it as real (`SL-03`, `PE-19`).
4. Build every state (`ST`), not just the filled, logged-in, fast-network version.
5. Add the production essentials (`PE`, `SEO`, `PF`).
6. Run the final checklist (section 8) before saying it is done.

---

## 2. Slop to avoid (`SL`)

These patterns make a site read as "generated". Avoid them by default.

### Colour and surfaces

- **SL-01 Purple-to-blue gradients.** The default "AI startup" gradient. Pick colours that come from the
  brand, the product or its photography instead.
- **SL-02 Gradient backgrounds as filler** (soft). A gradient behind a section in place of real content or
  imagery. Acceptable as one signature brand element; slop when every section has one.
- **SL-03 Glowing background orbs.** Blurred coloured blobs floating behind content to add "depth".
- **SL-04 Glassmorphism everywhere** (soft). Frosted translucent panels on every card. Use only where
  something really sits above imagery (a header over a photo, a sheet over a map).
- **SL-05 Pointless shadows.** Strong drop shadows on everything. Use elevation only to show that something
  floats (menus, dialogs, dragged items).
- **SL-06 Low-contrast dark mode.** Grey text on near-black that is hard to read. See `DC-15`.
- **SL-07 Too many shades and opacities.** Text at 70 %, 50 %, 40 % and 30 %, five greys, three tints of one
  colour. Use a small, named palette: typically ink, muted, surface, border, one accent, one danger.
- **SL-08 Dithering and grain as decoration** (soft). Pixel-dither or noise effects on images and gradients
  because they are trendy.

### Layout and components

- **SL-09 Three feature cards in a row.** Icon, title and two lines, three times. Show the feature itself
  (screenshot, demo, numbers) or use a layout that fits the content.
- **SL-10 Empty bento grids.** A grid of uneven tiles holding an icon and four words each. Bento only works
  when each tile holds something real to look at.
- **SL-11 Generic three-tier pricing.** Starter, Pro and Enterprise with "Most popular" in the middle, even
  when the product has one price. Show the pricing the business actually has.
- **SL-12 Containers with borders.** Every block wrapped in a bordered box, boxes inside boxes. Separate
  content with spacing first (`DC-08`), borders second.
- **SL-13 Overusing dividers.** Hairlines between everything. Whitespace usually does the job.
- **SL-14 Tags and pills everywhere.** Small rounded labels on every item without a job to do.
- **SL-15 Badges above headlines.** "New", "Introducing" or a sparkle chip above every heading. Use one only
  for real news.
- **SL-16 Eyebrows on every heading** (soft). A small kicker above each title ("FEATURES" above "Our
  features"). Fine occasionally when it adds information (a date, a category, a step number).
- **SL-17 Section numbering** (soft). "01 / 02 / 03" on sections whose order means nothing. Fine for real
  steps or a real sequence.
- **SL-18 Squircles everywhere.** iOS-style super-rounded squares on every icon and card.
- **SL-19 Untouched component library.** shadcn/ui (or any kit) in its default look. Restyle it to the brand:
  colours, radii, type, spacing, states.
- **SL-20 Over-the-top detailed UI mockups.** Fake dashboards crowded with tiny charts and numbers that show
  nothing real. Show the actual product (`DC-06`).
- **SL-21 Overly detailed diagrams.** Complex schematics that look clever and explain nothing.

### Type

- **SL-22 Instrument Serif and the default "AI serif" look.** Instrument Serif (often italic) mixed into
  headlines has become a cliché. Choose type for the brand.
- **SL-23 Excessive italics.** Random single words in italics for "elegance". Italics need a reason.
- **SL-24 Negative kerning on body text.** Tight tracking is fine on large display headlines and nowhere else.
- **SL-25 Excessive mono fonts** (soft). Monospace on every label to look "technical". Use mono for data
  that benefits from it: prices, timers, codes, IDs, specs. See `DC-04`.
- **SL-26 ALL CAPS subtitles everywhere** (soft). Wide-tracked uppercase on every label and subheading.
- **SL-27 Periods in titles** (soft). "Built for speed." on every heading. Fine as an occasional voice
  choice, slop as a rule.
- **SL-28 Gradient-filled headline text.** Headlines filled with a colour gradient.

### Icons and decoration

- **SL-29 Lucide icons everywhere.** The default icon set on every line. Use icons only where they help
  scanning, from one consistent set (`DC-12`), styled to the brand.
- **SL-30 Emojis in headings and UI.** "🚀 Fast", "🔒 Secure". Never in headings, buttons or navigation.
- **SL-31 Sparkle icons for anything "AI" or "new".** ✨ as decoration.
- **SL-32 Code breadcrumbs as decoration.** `~/app`, `// comments`, `{ }` and terminal chrome on a site
  that is not about code.
- **SL-33 ASCII art and ASCII animations.** Text-character imagery used as an effect.
- **SL-34 Cursor-following beams and spotlights.** Glows that chase the pointer. Effect for its own sake.

### Motion

- **SL-35 Everything fades in on scroll.** Every block sliding and fading as it enters. It slows reading and
  tires people. Animate a few key moments only (section 4).
- **SL-36 Bouncy everyday UI.** Springy overshoot on menus, toggles and dialogs (`MO-13`).

### Words

- **SL-37 Em dashes everywhere.** A dash in every sentence is the clearest sign of generated copy. Use
  commas, full stops and colons.
- **SL-38 "It's not X, it's Y" phrasing.** "It's not just a tool, it's a revolution." Say what it does.
- **SL-39 Generic hero copy.** "Supercharge your workflow", "The future of X". Write a specific headline
  (`DC-09`).
- **SL-40 Verbose, redundant text.** Paragraphs that repeat the heading in other words. Cut it in half.
- **SL-41 Vague button labels.** "Get started", "Learn more", "Submit". Say what happens: "Download the
  price list", "Book a 20-minute call", "Place order".
- **SL-42 Claims without proof.** "10× faster", "Trusted by thousands" without numbers, sources or names.
  Back it up or remove it.

### Trust and honesty

- **SL-43 Fake testimonials.** Invented quotes from "Sarah K., CEO" with stock headshots. Use real ones or
  none. Never present invented reviews as genuine.
- **SL-44 Placeholder business info.** Lorem ipsum, "123 Main Street", info@company.com, fake phone numbers
  left in the build.
- **SL-45 No real product demo.** Abstract illustrations instead of screenshots, video or a live demo.
- **SL-46 Broken third-party embeds.** Maps, videos, calendars or chat widgets that fail to load or break the
  layout. Test every embed and give it a fallback.
- **SL-47 Forms asking for too much.** Phone, company, job title and budget before any value is shown. Ask
  only what is needed now.
- **SL-48 Keyboard-unfriendly forms.** Wrong tab order, Enter does not submit, no visible focus. See `ST-09`.

---

## 3. Design craft (`DC`)

Small decisions that separate a considered design from a template.

- **DC-01 Delete filler badges.** Remove any badge, chip or label that does not carry information.
- **DC-02 Drop redundant labels.** No "Email:" above a field whose placeholder is already an email. No
  "Our Services" above three service cards. If the content says it, the label does not need to.
- **DC-03 Unitalicize random words.** Italics only for titles of works, foreign words or one deliberate
  emphasis.
- **DC-04 Mono only where needed.** Numbers that change or align (prices, timers, tables), codes, IDs.
- **DC-05 Use a design system.** Define tokens before building: colour, type scale (about 5–7 sizes),
  spacing scale (for example 4, 8, 12, 16, 24, 32, 48, 64, 96), radii, shadows, motion durations. Never
  invent a one-off value.
- **DC-06 Show the actual product.** Real screenshots, real photos, real UI. Mockups only of the real thing.
- **DC-07 Enlarge the main feature.** The most important thing on each page is clearly the biggest. Hierarchy
  is readable at a glance.
- **DC-08 Group with spacing.** Related items sit closer together, groups sit further apart. Spacing does
  the grouping before any border or background.
- **DC-09 Make headlines specific.** "Invoices sent in 30 seconds" beats "Revolutionise your finances".
- **DC-10 Emphasise the CTA.** One primary action per view, visually the strongest element. Secondary
  actions look secondary.
- **DC-11 One accent colour, used sparingly.** For the primary button, links and key highlights only.
- **DC-12 Keep icons consistent.** One set, one stroke width, one size grid, one corner style.
- **DC-13 Remove embellishments.** Ornaments, extra gradients and decorative shapes that say nothing go.
- **DC-14 Inner radius = outer radius − padding.** A card with 20 px radius and 8 px padding holds children
  with 12 px radius. Nested corners then look concentric.
- **DC-15 Text contrast.** WCAG AA at least: 4.5:1 for body text, 3:1 for large text and UI parts. Check
  muted text and dark mode especially.
- **DC-16 Wrap headlines properly.** `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs. No
  single orphaned word on the last line. Set a sensible max width (about 60–75 characters for body text).
- **DC-17 Align by eye, not by pixels.** Optically centre play triangles, arrows and round icons. Nudge
  icons next to text to sit on the visual centre line.
- **DC-18 Tabular numbers.** `font-variant-numeric: tabular-nums` for prices, timers, counters and table
  columns, so digits do not jump.
- **DC-19 Loading states everywhere.** See `ST-02`.
- **DC-20 Animate useful feedback.** Animation confirms something happened (added to bag, saved, error). It
  is never only decoration.

---

## 4. Motion (`MO`)

Animation should make the interface feel fast and physical. If in doubt, make it shorter and subtler.
Always respect `prefers-reduced-motion`: replace movement with a simple fade or nothing.

- **MO-01 Ease-out for entrances.** Things that appear start fast and settle (for example
  `cubic-bezier(0.22, 1, 0.36, 1)`).
- **MO-02 Dropdowns at 150–250 ms.** Menus, selects and tooltips open quickly.
- **MO-03 Stagger list rows by about 30 ms.** Each row starts slightly after the previous one. Cap the total
  stagger so long lists do not crawl.
- **MO-04 Scale to 0.97 on press.** Buttons shrink slightly while pressed.
- **MO-05 Stretch moving knobs about 12 %.** A toggle knob or slider thumb stretches in its direction of
  travel while moving, then settles.
- **MO-06 Stagger details as they settle.** The container arrives first, then its title, then the smaller
  details.
- **MO-07 Arcs for object movement.** Objects travelling across the screen follow a slight curve, not a
  straight line.
- **MO-08 Pulse to confirm success.** A short scale pulse (about 1 → 1.06 → 1) when something succeeds.
- **MO-09 Ease-in-out for moves.** An element already on screen moving to a new position eases in and out.
- **MO-10 Start popovers at 0.95.** Popovers and tooltips grow from 95 % scale and 0 opacity, not from zero.
- **MO-11 Enter from the trigger.** Set `transform-origin` to the button that opened it, so the popover grows
  out of it.
- **MO-12 Exit to the trigger.** On close it shrinks back towards the same point.
- **MO-13 No bounce on everyday UI.** No spring overshoot on menus, dialogs, toggles or tabs. Save bounce for
  rare playful moments.
- **MO-14 Do not tween while held.** While the user drags a slider, sheet or card, it follows the pointer
  1:1 with no easing. Animate only after release.
- **MO-15 Make exits about 20 % shorter** than the matching entrance.
- **MO-16 Overlap old and new states.** Crossfade between states so there is never an empty frame.
- **MO-17 Masks for reveals and colour changes.** Reveal content or swap a colour with a moving `clip-path`
  mask rather than a plain fade.
- **MO-18 Crossfade icons with blur.** When an icon changes (menu to close, copy to check), crossfade with a
  small blur (about 2–4 px) and a slight scale.
- **MO-19 Rubber band past bounds.** Dragging or scrolling past an edge moves with increasing resistance,
  then springs back.
- **MO-20 Reuse the same `layoutId`.** In Framer Motion (or a FLIP technique elsewhere), give the same
  element the same `layoutId` in both places so it travels between them: a card into its detail view, the
  underline of the active tab.

---

## 5. States (`ST`)

Design and build every state, not only the happy path.

- **ST-01 Empty state.** Before there is any data, explain what this place is for and give one clear action
  ("Create your first project").
- **ST-02 Loading state.** Skeletons that match the final layout, disabled and busy buttons, progress where
  the duration is known. The wait should look active.
- **ST-03 Error state.** Say what happened in plain words and give a way out: retry, go back, contact support.
  Never only "Something went wrong".
- **ST-04 Offline state.** Tell the user they are offline (a small bar), keep already loaded content visible,
  queue or disable actions that need the network.
- **ST-05 Slow network.** Show incremental progress and partial content. A spinner that never changes looks
  frozen; after a few seconds, say that it is still working.
- **ST-06 Zero search results.** Offer a spelling fix, related results, popular items or a way to clear
  filters. Never a dead end.
- **ST-07 Permission denied.** Explain why access is blocked and how to get it ("Ask an admin", "Allow camera
  in browser settings").
- **ST-08 Session expiry.** Save drafts and form input before signing the user out, and restore them after
  they sign back in.
- **ST-09 Form validation.** Errors appear inline at the exact field, in plain words, after the user leaves
  the field or submits. Focus moves to the first error. Correct tab order, Enter submits, visible focus rings.
- **ST-10 Success state.** Confirm completion clearly and offer the next step ("Track your order",
  "Continue shopping").

---

## 6. Production essentials (`PE`)

What every real, launched website has.

- **PE-01 Custom 404 page.** In the site's design, with links home, to search and to key pages.
- **PE-02 CTA above the fold.** The primary action is visible without scrolling on desktop and mobile.
- **PE-03 Sticky mobile CTA.** On phones, the primary action stays reachable (for example a bar at the bottom)
  where it makes sense: product pages, booking, sign-up.
- **PE-04 Mobile breakpoints.** Tested at roughly 360, 390, 768, 1024, 1440 and 1920 px. No horizontal
  scroll, tap targets at least 44 px.
- **PE-05 Favicon set.** `favicon.ico` or SVG, `apple-touch-icon` (180 px), icons for Android and the web
  manifest.
- **PE-06 Open Graph and social preview.** `og:title`, `og:description`, `og:image` (1200 × 630), Twitter
  card tags, per page where it matters.
- **PE-07 Thank-you page or state.** After a form or an order, a confirmation with the next step.
- **PE-08 Privacy policy page.** Required in the EU (GDPR) whenever the site collects any personal data,
  including analytics and newsletter emails.
- **PE-09 Terms page.** Terms and conditions, required for shops and services.
- **PE-10 Cookie banner.** Needed in the EU for non-essential cookies (analytics, marketing). "Reject" must be
  as easy as "Accept". Load those scripts only after consent.
- **PE-11 Analytics installed.** Plausible, Umami, Google Analytics or similar, respecting consent.
- **PE-12 Real contact details.** Real address, email, phone and company ID where applicable.
- **PE-13 Version control.** The code lives in a Git repository with meaningful commits.
- **PE-14 Accessibility basics.** Semantic HTML, labelled inputs, visible focus, keyboard navigation for every
  interactive element, `lang` attribute, reduced-motion support.

---

## 7. SEO (`SEO`) and performance (`PF`)

### SEO

- **SEO-01 sitemap.xml** listing every public page, linked from robots.txt.
- **SEO-02 robots.txt** that allows the public site and blocks private areas.
- **SEO-03 No stray `noindex`.** Make sure no public page still carries a `noindex` left from development.
- **SEO-04 Canonical tags.** One canonical URL per page (`<link rel="canonical">`).
- **SEO-05 Unique meta title per page.** Specific, about 60 characters at most.
- **SEO-06 Unique meta description per page.** About 155 characters, written to earn the click.
- **SEO-07 One H1 per page** that states what the page is about.
- **SEO-08 Logical heading order.** H1 → H2 → H3, no skipped levels for styling reasons.
- **SEO-09 Alt text on every meaningful image**, empty `alt=""` on purely decorative ones.
- **SEO-10 Schema markup.** JSON-LD for the relevant types: Organization, Product, Article, FAQPage,
  BreadcrumbList, LocalBusiness.
- **SEO-11 Internal links** between related pages with descriptive anchor text.
- **SEO-12 No broken links.** Check every internal and external link before launch.
- **SEO-13 Clean URL slugs.** `/shop/m1-puffer`, not `/page?id=8273`.
- **SEO-14 HTTPS everywhere** with a redirect from http.
- **SEO-15 Search Console verified** and the sitemap submitted.
- **SEO-16 llms.txt** at the site root: a short plain description of the site and links to its key pages for
  AI assistants.

### Performance

- **PF-01 Compress images.** Modern formats (AVIF/WebP), correct dimensions, `srcset` and `sizes`, explicit
  `width` and `height` to prevent layout shift.
- **PF-02 Lazy loading** for below-the-fold images, iframes and heavy sections (`loading="lazy"`).
- **PF-03 Core Web Vitals.** Good LCP (under 2.5 s), INP (under 200 ms) and CLS (under 0.1).
- **PF-04 Code splitting.** Load only the JavaScript the current page needs.
- **PF-05 Minify JS and CSS** (any modern bundler does this in production builds).
- **PF-06 Defer non-critical scripts.** Analytics, chat and embeds load with `defer`, `async` or after
  interaction.
- **PF-07 Remove unused dependencies.**
- **PF-08 Avoid unnecessary re-renders.** In React and similar: keep state local, memoise expensive parts,
  avoid new objects in props on every render.
- **PF-09 Debounce input handlers.** Search-as-you-type waits about 250–300 ms after the last keystroke.
- **PF-10 Paginate or virtualise long lists.**
- **PF-11 Use a CDN** for static files.
- **PF-12 Cache API responses** on the client and server where data allows.
- **PF-13 Server-side caching** of rendered pages or fragments.
- **PF-14 Cache expensive queries** (stats, rankings) and refresh them on a schedule.
- **PF-15 Index the database** on columns used for lookups, filters and sorting.
- **PF-16 Avoid N+1 queries.** Load related data in one query (JOIN, eager loading), not one query per item.
- **PF-17 Compress API payloads.** Return only needed fields; enable gzip or brotli.
- **PF-18 Database connection pooling.**
- **PF-19 Load balancing** when traffic needs more than one server.
- **PF-20 Lighthouse audit** before launch; fix what it flags.
- **PF-21 Heavy visuals stay light.** WebGL, video and large animations render only while visible, cap pixel
  ratio and frame rate, and have a static fallback for weak devices and reduced motion.

---

## 8. Final checklist

Before calling the site finished, check and report briefly:

1. No `SL` pattern present unless the user kept it (and then used deliberately and sparingly).
2. Design tokens exist and are used; nothing off-scale (`DC-05`).
3. Every page has one clear primary action (`DC-10`, `PE-02`).
4. All ten states exist where they apply (`ST-01` to `ST-10`).
5. Contrast passes AA, keyboard works end to end, reduced motion respected (`DC-15`, `PE-14`).
6. Tested at mobile, tablet and desktop widths (`PE-04`).
7. 404, legal pages, cookie consent, favicon, OG image, analytics in place (`PE`).
8. Titles, descriptions, H1s, alt text, sitemap, robots, canonical, schema, llms.txt done (`SEO`).
9. Lighthouse run; Core Web Vitals in the green (`PF-03`, `PF-20`).
10. No placeholder content left: search the build for "lorem", "example.com", "123 Main", "TODO" (`SL-44`).

Report what was done, what was skipped on the user's request, and anything that still needs real content from
the user.
