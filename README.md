# XSlop

![XSlop: a rulebook for building websites that look made by a person, not generated](assets/banner-dark.jpg)

One big skill sheet (`SKILL.md`) for AI agents (Claude, ChatGPT, Cursor…) that tells them how to build websites
that don't look generated ("AI slop", "vibecoded"), but like a finished product made by a person.

Every rule has its own ID (for example `SL-14`, `MO-04`), so I can tell the agent exactly what to include and
what to leave out.

## How it fits into a project

XSlop is an add-on skillset. Load it next to a project's own instructions (brief, brand guidelines, design
system, README, CLAUDE.md / AGENTS.md) so the agent understands the project better and knows what quality bar
to aim for. The order of precedence is: my instructions in the chat first, then the project's own rules and
design system, then XSlop. If a project's brand deliberately uses something XSlop calls slop, the project wins.

## How to use it

Example prompts:

- `Build a website for a coffee shop using XSlop.` – applies every rule.
- `Use XSlop, but keep SL-25 (mono fonts).` – allows that pattern, used sparingly.
- `Use XSlop, skip PE-10.` – skips that rule.
- `XSlop, only SEO and PF.` – applies only those groups.
- `XSlop audit of this site.` – builds nothing, just reviews the site and lists what fails.
- `Build a site for a ceramics studio in EDITORIAL CREAM + MEGA TYPE.` – uses style keywords from `style/STYLES.md`.

As a skill: put the folder with `SKILL.md` among the agent's skills (for example in Claude). It loads
automatically when you say "XSlop".

## What it contains

| Group | IDs | Contents |
| --- | --- | --- |
| Slop to avoid | `SL-01` to `SL-48` | visual and copy patterns that make a site look AI-generated |
| Design craft | `DC-01` to `DC-20` | small decisions that make a design feel considered |
| Motion | `MO-01` to `MO-20` | how to animate fast and naturally, without effects for their own sake |
| States | `ST-01` to `ST-10` | empty, loading, error, offline, slow network, zero results, permission denied, session expiry, validation, success |
| Production essentials | `PE-01` to `PE-14` | 404, CTA, favicon, OG image, thank-you page, legal pages, cookies, analytics, contact details, Git, accessibility |
| SEO | `SEO-01` to `SEO-16` | sitemap, robots.txt, canonical, titles, descriptions, H1, heading order, alt text, schema, links, URLs, HTTPS, Search Console, llms.txt |
| Performance | `PF-01` to `PF-21` | images, lazy loading, Core Web Vitals, code splitting, caching, database, Lighthouse, lightweight 3D and video |

At the end there is a checklist the agent goes through before saying the work is done.

Next to the core sheet there are packs the agent loads when it needs them:

| Pack | What it contains |
| --- | --- |
| `inspiration/INSPIRATION.md` | where to look for inspiration (Dark, Recent, Saved, Mobbin, Dribbble, Designeer), what each is good for, how to analyse a reference, and patterns worth learning |
| `toolkit/TOOLKIT.md` | libraries, assets and fonts to build with (GSAP, Made With GSAP, Lenis, React Bits, 21st.dev, Codrops, Spline, three.js, SVGL, SVG Doodles, Fontshare): when to use each, install code, licence notes, guardrails |
| `recipes/RECIPES.md` | ready patterns with code: smooth scroll, reveals, split text, pinned gallery, magnetic button, marquee, popovers, custom select, toasts, light 3D hero, countdown, tracking boxes |
| `style/MY-STYLE.md` | my personal style, applied on top of the rules, including the main keys from my Pinterest web-design board |
| `style/STYLES.md` | 14 named style keywords and modifiers to use in prompts (for example `BLACK COAL + MEGA TYPE, maximal`) |
| `style/PINS.md` | all 878 pins from my board sorted into themes, as links |
| `references/` | screenshots of the inspiration and tool sites, and what to learn from each |

## What I want to avoid

These are the things I don't want on a site (the `SL` rules). Some are marked "soft": those are fine only when
they are a deliberate part of the style and not everywhere.

Colour and surfaces
- purple-to-blue gradients
- gradient backgrounds instead of real content (soft)
- glowing blurred orbs in the background
- frosted glass panels everywhere (soft)
- pointless strong shadows
- dark mode with unreadable grey text
- lots of shades and opacities instead of a simple palette
- grain / dither effects just because they are trendy (soft)

Layout and components
- three feature cards with icons in a row
- empty bento grids
- generic three-tier pricing
- everything in bordered boxes, boxes inside boxes
- dividers everywhere
- tags and pills everywhere
- "New" badges above headlines
- a small eyebrow above every heading (soft)
- section numbering that means nothing (soft)
- super-rounded squircles everywhere
- untouched component libraries (shadcn/ui)
- overloaded fake UI mockups
- needlessly complex diagrams

Type
- Instrument Serif and the "AI serif" look
- italics on random words
- tight letter-spacing in body text
- mono fonts everywhere (soft)
- ALL CAPS in every subtitle (soft)
- periods at the end of headlines (soft)
- headlines filled with a colour gradient

Icons and decoration
- Lucide icons on every line
- emojis in headings and buttons
- sparkles on everything "AI" or "new"
- decorative "code" elements on a site that isn't about code
- ASCII images and animations
- glows and beams that follow the cursor

Motion
- everything fading and sliding in on scroll
- bouncy, springy animations on everyday UI

Copy
- em dashes in every sentence
- "It's not X, it's Y" phrasing
- generic hero copy ("Supercharge your workflow")
- wordy, repetitive text
- vague buttons ("Get started", "Learn more")
- claims without proof

Trust
- fake testimonials
- leftover placeholder info (lorem ipsum, 123 Main Street)
- no real product demo
- broken embeds (maps, videos, chat)
- forms that ask for too much
- forms that can't be used with a keyboard

## Source checklists

XSlop was built from these checklists, which I collected as screenshots. The texts are copied here as they
appeared, with the XSlop rule that covers each item.

### Design polish (In under 40 seconds)

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Delete filler badges | `DC-01` |
| 2 | Drop redundant labels | `DC-02` |
| 3 | Unitalicize random words | `DC-03` |
| 4 | Mono only where needed | `DC-04` |
| 5 | Use a design system | `DC-05` |
| 6 | Show the actual product | `DC-06` |
| 7 | Enlarge the main feature | `DC-07` |
| 8 | Group with spacing | `DC-08` |
| 9 | Make headlines specific | `DC-09` |
| 10 | Emphasize the CTA | `DC-10` |
| 11 | Add an accent colour | `DC-11` |
| 12 | Keep icons consistent | `DC-12` |
| 13 | Remove embellishments | `DC-13` |
| 14 | Inner radius = outer − padding | `DC-14` |
| 15 | Improve text contrast | `DC-15` |
| 16 | Wrap headlines properly | `DC-16` |
| 17 | Align by eye, not pixels | `DC-17` |
| 18 | Use tabular nums | `DC-18` |
| 19 | Add loading states | `DC-19` |
| 20 | Animate useful feedback | `DC-20` |

### 20 Ways to Make Beautiful AI Animations (In under 60 seconds)

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Ease-out for entrances | `MO-01` |
| 2 | Dropdowns at 150–250ms | `MO-02` |
| 3 | Stagger list rows by 30ms | `MO-03` |
| 4 | Scale to 0.97 on press | `MO-04` |
| 5 | Stretch moving knobs 12% | `MO-05` |
| 6 | Stagger as details settle | `MO-06` |
| 7 | Arcs for object movement | `MO-07` |
| 8 | Pulse to confirm success | `MO-08` |
| 9 | Ease-in-out for moves | `MO-09` |
| 10 | Start popovers at 0.95 | `MO-10` |
| 11 | Enter from the trigger | `MO-11` |
| 12 | Exit to the trigger | `MO-12` |
| 13 | No bounce on everyday UI | `MO-13` |
| 14 | Don't tween while held | `MO-14` |
| 15 | Make exits 20% shorter | `MO-15` |
| 16 | Overlap old & new states | `MO-16` |
| 17 | Masks for reveals & colour | `MO-17` |
| 18 | Crossfade icons + blur | `MO-18` |
| 19 | Rubber band past bounds | `MO-19` |
| 20 | Reuse the same layoutId | `MO-20` |

### Performance checklist

Marked in the screenshot as things to do or things to avoid.

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Do: Cache API responses | ``PF-12`` |
| 2 | Do: Load balancer | ``PF-19`` |
| 3 | Do: Index the Database | ``PF-15`` |
| 4 | Do: Compress images | ``PF-01`` |
| 5 | Do: Loading skeletons | ``ST-02`` |
| 6 | Do: Cache expensive queries | ``PF-14`` |
| 7 | Avoid: N+1 database queries | ``PF-16`` |
| 8 | Do: Debounce input handlers | ``PF-09`` |
| 9 | Do: Split code into chunks | ``PF-04`` |
| 10 | Do: add CDN | ``PF-11`` |
| 11 | Do: Server-side caching | ``PF-13`` |
| 12 | Do: Paginate large lists | ``PF-10`` |
| 13 | Do: Lighthouse audit | ``PF-20`` |
| 14 | Do: Compress API payloads | ``PF-17`` |
| 15 | Avoid: Unnecessary re-renders | ``PF-08`` |
| 16 | Do: Minify JS and CSS | ``PF-05`` |
| 17 | Do: Add Lazy Loading | ``PF-02`` |
| 18 | Do: Defer non-critical scripts | ``PF-06`` |
| 19 | Avoid: Unused dependencies | ``PF-07`` |
| 20 | Do: Database connection pooling | ``PF-18`` |

### 20 SEO checks for your vibecoded website (Give this checklist to Claude)

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Build sitemap.xml | `SEO-01` |
| 2 | Add robots.txt | `SEO-02` |
| 3 | Remove noindex tags | `SEO-03` |
| 4 | Add canonical tags | `SEO-04` |
| 5 | Add meta titles | `SEO-05` |
| 6 | Meta descriptions | `SEO-06` |
| 7 | One H1 per page | `SEO-07` |
| 8 | Fix heading order | `SEO-08` |
| 9 | Add alt text | `SEO-09` |
| 10 | Add schema markup | `SEO-10` |
| 11 | Add internal links | `SEO-11` |
| 12 | Fix broken links | `SEO-12` |
| 13 | Compress images | `PF-01` |
| 14 | Core Web Vitals | `PF-03` |
| 15 | Fix mobile layout | `PE-04` |
| 16 | Enforce HTTPS | `SEO-14` |
| 17 | Clean up URL slugs | `SEO-13` |
| 18 | Add an og:image | `PE-06` |
| 19 | Verify Search Console | `SEO-15` |
| 20 | Add llms.txt | `SEO-16` |

### UI states

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Empty State: Guide user before data exists. | `ST-01` |
| 2 | Loading State: Perceived speed matters; keep wait active. | `ST-02` |
| 3 | Error State: Clear cause plus actionable recovery. | `ST-03` |
| 4 | Offline State: Inform state; prevent blank views. | `ST-04` |
| 5 | Slow Network: Show incremental progress, avoid frozen spinners. | `ST-05` |
| 6 | Zero Search Results: Provide suggestions/alternatives, avoid dead ends. | `ST-06` |
| 7 | Permission Denied: Explain rationale and recovery route. | `ST-07` |
| 8 | Session Expiry: Persist draft state before auth teardown. | `ST-08` |
| 9 | Form Validation: Inline error placement at exact input field. | `ST-09` |
| 10 | Success State: Acknowledge completion, provide clear next step. | `ST-10` |

### 30 reasons your site looks vibecoded (give this to claude/chatgpt)

Items 4–9 were partly covered in the screenshot; the visible letters are kept and the likely full text is in brackets.

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Purple-to-blue gradients | `SL-01` |
| 2 | 3 feature cards in a row | `SL-09` |
| 3 | Fake testimonials | `SL-43` |
| 4 | Sp… [Sparkles] | `SL-31` |
| 5 | “It… [“It's not X, it's Y” copy] | `SL-38` |
| 6 | Gr… [Gradient text] | `SL-28` |
| 7 | Gl… …here [Glassmorphism everywhere] | `SL-04` |
| 8 | Po… …ows [Pointless shadows] | `SL-05` |
| 9 | Ge… [Generic copy] | `SL-39` |
| 10 | Untouched shadcn/ui | `SL-19` |
| 11 | Glowing background orbs | `SL-03` |
| 12 | Emojis in every heading | `SL-30` |
| 13 | Badges above headlines | `SL-15` |
| 14 | Em dashes everywhere | `SL-37` |
| 15 | Lucid icons everywhere | `SL-29` |
| 16 | Empty bento grids | `SL-10` |
| 17 | Generic 3-tier pricing | `SL-11` |
| 18 | Everything fades on scroll | `SL-35` |
| 19 | Cursor-following beams | `SL-34` |
| 20 | Low-contrast dark mode | `SL-06` |
| 21 | Inconsistent spacing | `DC-05` |
| 22 | Vague button labels | `SL-41` |
| 23 | No real product demos | `SL-45` |
| 24 | Claims without proof | `SL-42` |
| 25 | Forms asking for too much | `SL-47` |
| 26 | Keyboard-unfriendly forms | `SL-48` |
| 27 | Broken third-party embeds | `SL-46` |
| 28 | Placeholder business info | `SL-44` |
| 29 | No privacy policy | `PE-08` |
| 30 | No terms and conditions | `PE-09` |

### Your vibe coded site is fake. It's missing 20 things that make it real

Item 20 is an advert for a paid service in the original; XSlop only asks for the code to be in a Git repository.

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Custom 404 page | `PE-01` |
| 2 | CTA above the fold | `PE-02` |
| 3 | Meta title per page | `SEO-05` |
| 4 | Meta description per page | `SEO-06` |
| 5 | Open Graph image | `PE-06` |
| 6 | Favicon set | `PE-05` |
| 7 | robots.txt | `SEO-02` |
| 8 | sitemap.xml | `SEO-01` |
| 9 | Alt text on every image | `SEO-09` |
| 10 | Mobile breakpoints | `PE-04` |
| 11 | Sticky mobile CTA | `PE-03` |
| 12 | Loading states | `ST-02` |
| 13 | Form error states | `ST-09` |
| 14 | Thank-you page | `PE-07` |
| 15 | Privacy policy page | `PE-08` |
| 16 | Terms page | `PE-09` |
| 17 | Cookie banner | `PE-10` |
| 18 | Analytics installed | `PE-11` |
| 19 | Real contact address | `PE-12` |
| 20 | A GitHub repo connected to vayahq.com (20 fixes = 20 paid commits) | `PE-13` |

### 20 AI Design Slop Indicators (In under 30 seconds)

| # | Text from the screenshot | XSlop rule |
| --- | --- | --- |
| 1 | Tags & pills | `SL-14` |
| 2 | Excessive italics | `SL-23` |
| 3 | Instrument Serif | `SL-22` |
| 4 | Negative kerning | `SL-24` |
| 5 | Over-the-top detailed UI | `SL-20` |
| 6 | Overusing dividers | `SL-13` |
| 7 | Color shades & opacities | `SL-07` |
| 8 | Containers with borders | `SL-12` |
| 9 | Overly detailed diagrams | `SL-21` |
| 10 | Verbose, redundant text | `SL-40` |
| 11 | Code breadcrumbs | `SL-32` |
| 12 | Section numbering | `SL-17` |
| 13 | Eyebrows | `SL-16` |
| 14 | Dithering | `SL-08` |
| 15 | ASCII images | `SL-33` |
| 16 | Squircles | `SL-18` |
| 17 | Excessive mono fonts | `SL-25` |
| 18 | ALL CAPS subtitles | `SL-26` |
| 19 | Gradient backgrounds | `SL-02` |
| 20 | Periods in titles | `SL-27` |

## Files

- `SKILL.md` – the core skill sheet.
- `inspiration/`, `toolkit/`, `recipes/`, `style/`, `references/` – the packs described above.
- `README.md` – this overview.
- `assets/banner-dark.jpg` – the image above, a dark 3D scene (chrome X, dissolving slop blob, bloom) rendered with three.js (`assets/banner.html` is its source).
