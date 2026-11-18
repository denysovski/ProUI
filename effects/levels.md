# Effect levels

> The intake asks how much effect the visitor should feel. The answer is one of four levels; it caps what may be used.

[Effects library](README.md)

| Level | Feels like | Allowed | Not allowed |
| --- | --- | --- | --- |
| **None** | classic, calm, fast | hover and focus states, button feedback, a simple page fade | scroll animations, animated text, canvas, WebGL |
| **Subtle** | refined, quietly modern | CSS transitions, one entrance per page, tilt or spotlight cards, a marquee with real content | WebGL, Spline, cursor effects, animated backgrounds |
| **Modern** | contemporary, alive | everything in Subtle, one animated headline, one interactive component (gallery, carousel, card stack), one shader or gradient background in the hero, lazy-loaded | more than one GPU canvas per view, effects behind body text, cursor replacements |
| **Immersive 3D** | an experience | everything in Modern, one 3D hero scene (Spline, R3F, globe, 3D object), one scroll-driven 3D sequence, a matching background | 3D on every section, several WebGL canvases at once, effects that block reading or input |

## What each level costs

| Level | Typical extra JavaScript | Targets that still apply |
| --- | --- | --- |
| None | none | LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 |
| Subtle | 0–20 KB | same |
| Modern | 30–120 KB, shader loads after first paint | same, on a mid-range phone |
| Immersive 3D | 150–600 KB+ (three.js, Spline runtime) loaded after first paint | same; the 3D scene is not the LCP element, a poster image is |

## Choosing by site type

| Site | Usual level |
| --- | --- |
| Law firm, clinic, accountant, public office | None or Subtle |
| Restaurant, shop, local service | Subtle |
| SaaS, startup, agency, product launch | Modern |
| Portfolio, campaign, music, games, creative studio | Modern or Immersive 3D |
| Dashboard or tool (operate mode) | None, with fast UI transitions only |
| Docs, blog (read mode) | None |
