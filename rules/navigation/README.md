# Navigation Rulebook

> Menus, wayfinding, search, footers and URLs that let people find things and know where they are.

[All rulebooks](../README.md) · Prefix `NV` · Interaction

## Do

Positive rules: what a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `NV-01` | **Navigation visible on desktop** | On desktop, show the main sections as visible links in the header. Hidden menus are found later and used less. |
| `NV-02` | **Few, clear top-level items** | About four to seven top-level items named in the visitors' words, ordered by importance. |
| `NV-03` | **Show where people are** | The current section is marked in the navigation (`aria-current="page"`), and deeper pages show breadcrumbs. |
| `NV-04` | **Logo links home** | The logo in the header links to the home page on every page. |
| `NV-05` | **One primary action in the header** | The header carries at most one primary button (Book, Buy, Contact); everything else is a link. |
| `NV-06` | **Search for larger sites** | Sites with more than a few dozen pages or products have a search field that is visible, forgiving and fast. |
| `NV-07` | **A footer that works** | The footer repeats key links: contact, opening hours or support, legal pages, social profiles, a short sitemap. |
| `NV-08` | **Accessible mobile menu** | The mobile menu opens with a labelled button, traps focus while open, closes with Escape and returns focus to the button. |
| `NV-09` | **URLs for every state worth sharing** | Tabs, filters, search results and opened items that people may share or revisit have their own URL. |

## Don't

Negative rules: what never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `NV-10` | **Mystery-meat navigation** | No icon-only navigation without labels, and no clever names ("Explore", "Universe") instead of plain ones ("Work", "Pricing"). |
| `NV-11` | **Hover-only menus** | Menus open on click or tap and keyboard as well as hover, and do not close when the pointer slips off for a moment. |
| `NV-12` | **Mega menus without structure** | Large menus have grouped, labelled columns; never a wall of links. |
| `NV-13` | **Different navigation on every page** | The header and its order stay the same across the site. Only the current marker changes. |
| `NV-14` | **Links that open new tabs by default** | Internal links stay in the same tab. External links open in the same tab too unless leaving would lose work. |

## How to check

- Find three key pages from the home page without search, on phone and desktop.
- Tab through the header and mobile menu with the keyboard.

## Sources

- [NN/g: Hamburger menus and hidden navigation](https://www.nngroup.com/articles/hamburger-menus/)
- [NN/g: Auto-forwarding carousels](https://www.nngroup.com/articles/auto-forwarding/)

---

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
