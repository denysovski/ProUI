# Sections

> Every common website section: its job, the content it needs, and the component that fits each effect level. The effect level from the intake picks the column; the kit from [effects/kits.md](../effects/kits.md) keeps every pick in one visual family.

[Blueprints](README.md) · [Landing page](landing-page.md) · [Effect kits](../effects/kits.md) · [Effect levels](../effects/levels.md)

**Sources:** `MP` Motion Primitives (saved in [effects/kits/motion-primitives](../effects/kits/motion-primitives/)),
`ACE` Aceternity UI (install `@aceternity/<name>`), `RB` React Bits (install `@react-bits/<Name>-TS-TW`),
`21st` 21st.dev, `SK` Skiper UI (free, credit required). For the Studio kit, every section is built from a
GSAP [motion recipe](../effects/catalog/motion-recipes.md) instead. "Plain" means HTML and CSS only: no library.

> [!IMPORTANT]
> The table lists options, not a shopping list. A page gets **one** signature effect (`EF-02`). Every other
> section uses the None or Subtle column even when the level is Modern or Immersive 3D. If the user asked for
> "a few" or "a couple" of effects, the whole site gets at most two (`EF-20`).

## Header and navigation

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| orient and offer the main action | logo, four to six links, one button, language switch | plain sticky header (`LY-18`) | MP `animated-background` for the active-link highlight | ACE `resizable-navbar` or `floating-navbar` | same as Modern; never a 3D header |

## Hero

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| say what it is, for whom, and the main action | headline with the outcome, one sentence, primary and secondary action, the real product or a photo | plain, strong type and a real image | MP `text-effect` on the headline, MP `in-view` on the image | one background: ACE `aurora-background`, `background-beams`, `spotlight-new`, `lamp`, or RB `Silk`, `DarkVeil`, `Grainient`; headline with MP `text-effect` or ACE `flip-words` | one 3D scene: ACE `3d-globe` / `globe`, `hero-parallax`, `container-scroll-animation`, RB `Orb`, 21st Spline Scene; poster image as the LCP |

## Proof strip (logos, ratings, numbers)

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| show quickly that others trust it | real client logos with permission, a rating with its source, one usage number | static logo row | MP `infinite-slider` with `progressive-blur` edges, pauses on reduced motion | RB `LogoLoop` or ACE `infinite-moving-cards` | same as Modern |

## Services, product or features

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| show what the visitor gets | each service or feature with a real visual, what it includes, a price or link | plain grid or alternating rows (`SL-09`, `SL-57`) | MP `tilt` or `spotlight` on cards, MP `animated-group` for the entrance | ACE `bento-grid`, `glowing-effect` borders, `card-hover-effect`, `sticky-scroll-reveal` for a feature tour; RB `MagicBento`, `SpotlightCard` | ACE `3d-card`, `3d-pin`, RB `DomeGallery`, 21st 3D carousel, for one section only |

## How it works

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| show that starting is easy | three to five named steps, no numbers as decoration (`SL-17`) | plain row or vertical list | MP `transition-panel` or `in-view` | ACE `timeline` or `tracing-beam` | same as Modern |

## Work, gallery, case studies

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| prove quality with real work | real photos, project name, result | plain grid with real image sizes (`LY-17`) | MP `morphing-dialog` for project detail, MP `image-comparison` for before and after | ACE `focus-cards`, `apple-cards-carousel`, `layout-grid`, `compare`; RB `Masonry`, `CircularGallery` | RB `DomeGallery`, `InfiniteMenu`, ACE `3d-marquee` |

## Testimonials

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| show results for people like the visitor | three to five named quotes with role and photo, with permission (`SL-43`) | plain cards or one large quote | static cards with MP `in-view`; never auto-rotating quotes (`IX-21`) | ACE `animated-testimonials` or `card-stack` | same as Modern |

## Numbers and results

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| make a claim concrete | real figures with their source and date | plain large numbers, tabular figures (`TY-18`) | MP `animated-number` or `sliding-number` once in view | RB `CountUp` | same as Modern |

## Pricing

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| answer "what does it cost" ([pricing.md](pricing.md)) | three packages or tiers, toggle, comparison, FAQ | plain cards and table | MP `animated-background` for the billing toggle, MP `sliding-number` for the price change | ACE `glowing-effect` or `moving-border` on the recommended card only | same as Modern; no 3D on pricing |

## FAQ

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| remove the last doubts | five to eight real questions, grouped if more | `<details>` elements | MP `accordion` | MP `accordion` | MP `accordion` |

## Final call to action

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| convert the convinced | one sentence, the primary action, what happens next | plain block in the accent colour | MP `border-trail` or `glow-effect` on the button | ACE `vortex`, `background-gradient-animation` or `container-cover` if the hero has no background effect | same as Modern |

## Contact

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| make reaching the business easy ([contact.md](contact.md)) | phone, email, address, hours, form, map | plain | MP `text-morph` on the submit button for sending / sent | same as Subtle; ACE `world-map` for several offices with real locations | ACE `3d-globe` for global offices, real locations only |

## Footer

| Job | Content | None | Subtle | Modern | Immersive 3D |
| --- | --- | --- | --- | --- | --- |
| contact, links, legal ([footer.md](footer.md)) | slim, standard or fat | plain | plain | large brand wordmark, ACE `text-hover-effect` on it at most | same as Modern |

## Overlays and small details

| Need | Pick |
| --- | --- |
| modal | MP `dialog` or `morphing-dialog`; ACE `animated-modal` |
| tooltip | ACE `animated-tooltip` for avatars; plain tooltip elsewhere |
| tabs | MP `transition-panel` with `animated-background` |
| reading progress on articles | MP `scroll-progress` |
| search field | ACE `placeholders-and-vanish-input` (Modern only) |
| file upload | ACE `file-upload` |
| loading text | MP `text-shimmer` |
