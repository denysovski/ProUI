# Source checklists

XSlop started from checklists collected as screenshots. Their items are listed here with the XSlop rule that
covers each one. Wording is kept close to the originals; "Do"/"Avoid" prefixes are turned into positive and
negative rules.

[Back to references](README.md)

## Design polish checklist

| Item | XSlop rule |
| --- | --- |
| Delete filler badges | `DC-01` |
| Drop redundant labels | `DC-02` |
| Unitalicize random words | `DC-03` |
| Mono only where needed | `DC-04` |
| Use a design system | `DC-05` |
| Show the actual product | `DC-06` |
| Enlarge the main feature | `DC-07` |
| Group with spacing | `DC-08` |
| Make headlines specific | `DC-09` |
| Emphasize the CTA | `DC-10` |
| Add an accent colour | `DC-11` |
| Keep icons consistent | `DC-12` |
| Remove embellishments | `DC-13` |
| Inner radius = outer − padding | `DC-14` |
| Improve text contrast | `DC-15` |
| Wrap headlines properly | `DC-16` |
| Align by eye, not pixels | `DC-17` |
| Use tabular nums | `DC-18` |
| Add loading states | `DC-19` |
| Animate useful feedback | `DC-20` |

## Animation checklist

| Item | XSlop rule |
| --- | --- |
| Ease-out for entrances | `MO-01` |
| Dropdowns at 150–250ms | `MO-02` |
| Stagger list rows by 30ms | `MO-03` |
| Scale to 0.97 on press | `MO-04` |
| Stretch moving knobs 12% | `MO-05` |
| Stagger as details settle | `MO-06` |
| Arcs for object movement | `MO-07` |
| Pulse to confirm success | `MO-08` |
| Ease-in-out for moves | `MO-09` |
| Start popovers at 0.95 | `MO-10` |
| Enter from the trigger | `MO-11` |
| Exit to the trigger | `MO-12` |
| No bounce on everyday UI | `MO-13` |
| Don't tween while held | `MO-14` |
| Make exits 20% shorter | `MO-15` |
| Overlap old & new states | `MO-16` |
| Masks for reveals & colour | `MO-17` |
| Crossfade icons + blur | `MO-18` |
| Rubber band past bounds | `MO-19` |
| Reuse the same layoutId | `MO-20` |

## Performance checklist

Positive items are things to do; negative items are things to avoid.

| Kind | Item | XSlop rule |
| --- | --- | --- |
| Positive | Cache API responses | `PF-12` |
| Positive | Load balancer | `PF-19` |
| Positive | Index the Database | `PF-15` |
| Positive | Compress images | `PF-01` |
| Positive | Loading skeletons | `ST-02` |
| Positive | Cache expensive queries | `PF-14` |
| Negative | N+1 database queries | `PF-16` |
| Positive | Debounce input handlers | `PF-09` |
| Positive | Split code into chunks | `PF-04` |
| Positive | Add CDN | `PF-11` |
| Positive | Server-side caching | `PF-13` |
| Positive | Paginate large lists | `PF-10` |
| Positive | Lighthouse audit | `PF-20` |
| Positive | Compress API payloads | `PF-17` |
| Negative | Unnecessary re-renders | `PF-08` |
| Positive | Minify JS and CSS | `PF-05` |
| Positive | Add Lazy Loading | `PF-02` |
| Positive | Defer non-critical scripts | `PF-06` |
| Negative | Unused dependencies | `PF-07` |
| Positive | Database connection pooling | `PF-18` |

## SEO checklist

| Item | XSlop rule |
| --- | --- |
| Build sitemap.xml | `SEO-01` |
| Add robots.txt | `SEO-02` |
| Remove noindex tags | `SEO-03` |
| Add canonical tags | `SEO-04` |
| Add meta titles | `SEO-05` |
| Meta descriptions | `SEO-06` |
| One H1 per page | `SEO-07` |
| Fix heading order | `SEO-08` |
| Add alt text | `SEO-09` |
| Add schema markup | `SEO-10` |
| Add internal links | `SEO-11` |
| Fix broken links | `SEO-12` |
| Compress images | `PF-01` |
| Core Web Vitals | `PF-03` |
| Fix mobile layout | `PE-04` |
| Enforce HTTPS | `SEO-14` |
| Clean up URL slugs | `SEO-13` |
| Add an og:image | `PE-06` |
| Verify Search Console | `SEO-15` |
| Add llms.txt | `SEO-16` |

## UI states checklist

| Item | XSlop rule |
| --- | --- |
| Empty State: Guide user before data exists. | `ST-01` |
| Loading State: Perceived speed matters; keep wait active. | `ST-02` |
| Error State: Clear cause plus actionable recovery. | `ST-03` |
| Offline State: Inform state; prevent blank views. | `ST-04` |
| Slow Network: Show incremental progress, avoid frozen spinners. | `ST-05` |
| Zero Search Results: Provide suggestions/alternatives, avoid dead ends. | `ST-06` |
| Permission Denied: Explain rationale and recovery route. | `ST-07` |
| Session Expiry: Persist draft state before auth teardown. | `ST-08` |
| Form Validation: Inline error placement at exact input field. | `ST-09` |
| Success State: Acknowledge completion, provide clear next step. | `ST-10` |

## "Looks vibecoded" checklist

Some items were partly covered in the screenshot; the visible letters are kept and the likely full text is in brackets.

| Item | XSlop rule |
| --- | --- |
| Purple-to-blue gradients | `SL-01` |
| 3 feature cards in a row | `SL-09` |
| Fake testimonials | `SL-43` |
| Sp… [Sparkles] | `SL-31` |
| “It… [“It's not X, it's Y” copy] | `SL-38` |
| Gr… [Gradient text] | `SL-28` |
| Gl… …here [Glassmorphism everywhere] | `SL-04` |
| Po… …ows [Pointless shadows] | `SL-05` |
| Ge… [Generic copy] | `SL-39` |
| Untouched shadcn/ui | `SL-19` |
| Glowing background orbs | `SL-03` |
| Emojis in every heading | `SL-30` |
| Badges above headlines | `SL-15` |
| Em dashes everywhere | `SL-37` |
| Lucid icons everywhere | `SL-29` |
| Empty bento grids | `SL-10` |
| Generic 3-tier pricing | `SL-11` |
| Everything fades on scroll | `SL-35` |
| Cursor-following beams | `SL-34` |
| Low-contrast dark mode | `SL-06` |
| Inconsistent spacing | `DC-05` |
| Vague button labels | `SL-41` |
| No real product demos | `SL-45` |
| Claims without proof | `SL-42` |
| Forms asking for too much | `SL-47` |
| Keyboard-unfriendly forms | `SL-48` |
| Broken third-party embeds | `SL-46` |
| Placeholder business info | `SL-44` |
| No privacy policy | `PE-08` |
| No terms and conditions | `PE-09` |

## Missing essentials checklist

The last item is an advert for a paid service in the original; XSlop only asks for the code to be in a Git repository.

| Item | XSlop rule |
| --- | --- |
| Custom 404 page | `PE-01` |
| CTA above the fold | `PE-02` |
| Meta title per page | `SEO-05` |
| Meta description per page | `SEO-06` |
| Open Graph image | `PE-06` |
| Favicon set | `PE-05` |
| robots.txt | `SEO-02` |
| sitemap.xml | `SEO-01` |
| Alt text on every image | `SEO-09` |
| Mobile breakpoints | `PE-04` |
| Sticky mobile CTA | `PE-03` |
| Loading states | `ST-02` |
| Form error states | `ST-09` |
| Thank-you page | `PE-07` |
| Privacy policy page | `PE-08` |
| Terms page | `PE-09` |
| Cookie banner | `PE-10` |
| Analytics installed | `PE-11` |
| Real contact address | `PE-12` |
| A GitHub repo connected to vayahq.com (20 fixes = 20 paid commits) | `PE-13` |

## AI design slop indicators

| Item | XSlop rule |
| --- | --- |
| Tags & pills | `SL-14` |
| Excessive italics | `SL-23` |
| Instrument Serif | `SL-22` |
| Negative kerning | `SL-24` |
| Over-the-top detailed UI | `SL-20` |
| Overusing dividers | `SL-13` |
| Color shades & opacities | `SL-07` |
| Containers with borders | `SL-12` |
| Overly detailed diagrams | `SL-21` |
| Verbose, redundant text | `SL-40` |
| Code breadcrumbs | `SL-32` |
| Section numbering | `SL-17` |
| Eyebrows | `SL-16` |
| Dithering | `SL-08` |
| ASCII images | `SL-33` |
| Squircles | `SL-18` |
| Excessive mono fonts | `SL-25` |
| ALL CAPS subtitles | `SL-26` |
| Gradient backgrounds | `SL-02` |
| Periods in titles | `SL-27` |
