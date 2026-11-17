# Gradients: tools and how to use them

Rules: `rules/gradients/README.md` (`GR`). Code: `recipes/gradients.md`.

## Tools

| Tool | URL | Use it for |
| --- | --- | --- |
| Balsa UI Gradient Studio | https://balsa-ui.com/tools/gradient-studio | building multi-stop and mesh-style gradients and copying the CSS; Balsa UI is an open-code component system for Vue and React built for agents |
| Pryzm Studio | https://pryzm.design/studio | backgrounds that blend three layers (a gradient, an optional photo, an optional pattern) into one image, exported in high resolution for heroes, decks and OG images |
| ShaderGradient | https://shadergradient.co | animated 3D mesh gradients as code, GIF or images; for one hero moment only (`PF-21`) |
| OKLCH colour picker | https://oklch.com | picking stops in OKLCH and checking they stay in gamut (`CL-05`, `GR-05`) |
| minitools.design gradients filter | https://minitools.design | a directory with many more gradient tools: Background Studio (soft mesh previewed in product screens), Gradientool, Gradlab (multi-point mesh, CSS/SVG export), mmeshy, Zoxilsi Studio (WebGL mesh with code), Sfumato, Colir, Gradient Lab, Gradient Builder, Ramps Studio (colour ramps and semantic tokens) |

## How the agent uses them

- The agent cannot drive these tools by itself unless a browser is connected. In the workflow it either
  writes the gradient in CSS (`recipes/gradients.md`) or, at the type-and-colour checkpoint, suggests a tool
  and the settings to try, and the user exports and drops the file in `public/`.
- Take stops from the palette tokens (`GR-04`); interpolate in OKLCH (`GR-05`).
- Export photo-like gradients as AVIF/WebP at the size used, not as giant PNGs (`PF-01`).
- Check text contrast over the lightest and darkest point (`GR-09`).
- Make a dark variant (`GR-10`).
