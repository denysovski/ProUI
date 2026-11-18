# Blueprints

> How real websites are put together: which pages a site needs, which sections a landing page has and in what order, how pricing, contact pages and footers work, and how to choose colours and type. The workflow's **Design system** and **Structure** stages read from here.

[Back to XSlop](../README.md) · [Page Structure Rulebook](../rules/structure/README.md) · [Effect kits](../effects/kits.md)

| File | What's inside | Used in stage |
| --- | --- | --- |
| [site-types.md](site-types.md) | sitemaps per kind of site: service business, company, SaaS, shop, portfolio, restaurant, personal | Structure |
| [landing-page.md](landing-page.md) | the landing page section by section, the question each section answers, CTA rhythm, what comes after the landing page | Structure |
| [sections.md](sections.md) | every common section with its job, the content it needs and the components that fit each effect level | Structure, Build |
| [pricing.md](pricing.md) | tiered pricing for services and products, comparison tables, billing toggles, "contact us" pricing | Structure |
| [contact.md](contact.md) | contact pages for companies and local businesses, forms, maps, departments | Structure |
| [footer.md](footer.md) | slim, standard and fat footers and when each fits | Structure |
| [colour-schemes.md](colour-schemes.md) | a method for building a palette, the 60-30-10 split, starter palettes per feel | Design system |
| [type-pairing.md](type-pairing.md) | a method for choosing and pairing typefaces, starter pairings per feel | Design system |

## How the workflow uses the blueprints

```text
Intake: kind of site, feel, effect level   ->  site-types.md picks the sitemap
                                               landing-page.md picks the section order
Design system                              ->  colour-schemes.md and type-pairing.md give two or three options
Structure                                  ->  sections.md fills every section with content and one component
                                               from the effect kit (effects/kits.md), capped by the level
Outline checkpoint                         ->  the user sees pages, sections and picked components, and approves
```

## The principle

A page follows the visitor's questions in the order they arrive: *What is this? Is it for me? Does it work?
Can I trust it? What does it cost? What if...? How do I start?* Every section answers one of them. A section
that cannot be filled with real content is left out rather than faked (`SL-43`, `PG-03`).
