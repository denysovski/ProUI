# Effects library

> Ready-to-install effects for modern websites: 3D scenes, shader backgrounds, animated text, interactive cards and galleries. This is what XSlop reaches for when someone asks for a "modern web" or a "website with 3D effects".

[Back to XSlop](../README.md)

| File | What's inside |
| --- | --- |
| [levels.md](levels.md) | the four effect levels, from no effects to immersive 3D, and what each one allows |
| [presets.md](presets.md) | ready combinations per style keyword and per site type |
| [install.md](install.md) | how to install components from React Bits and 21st.dev, and what to do without React |
| [catalog/react-bits.md](catalog/react-bits.md) | every React Bits component: backgrounds, animations, text, components, micro-interactions |
| [catalog/21st-3d.md](catalog/21st-3d.md) | 3D components from 21st.dev: heroes, shaders, globes, orbs, tilt cards, 3D carousels, scroll |
| [Effects Rulebook](../rules/effects/README.md) | the rules every effect must pass (`EF`) |

## How the agent uses it

```text
Intake question "How much effect?"      ->  an effect level (levels.md)
Direction (style keyword)                ->  a preset (presets.md)
Preset + level                           ->  2-4 named components from the catalogues
Design checkpoint                        ->  the user sees the picks with their links and approves
Build                                    ->  install from the registry (install.md), restyle to tokens,
                                             apply the Effects Rulebook (lazy-load, reduced motion, budget)
```

> [!IMPORTANT]
> Components are installed into each project from their official registries. Their source is not copied into
> XSlop: React Bits does not allow redistribution in a bundle, and 21st.dev components belong to their
> authors, each with its own licence.

## The short version

- Ask first. The intake questions decide the effect level; never add 3D because the brief said "modern".
- One hero effect per page, one signature moment per site, everything else quiet.
- Restyle every component to the project's tokens: colours, radius, type. Demo colours are a giveaway (`SL-19`).
- Heavy effects (WebGL, Spline, R3F) load lazily, pause off screen, cap pixel ratio and have a static fallback.
- Everything works with `prefers-reduced-motion` and without JavaScript for content.
