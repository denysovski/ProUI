# Effects library

> Ready-to-install effects for modern websites: 3D scenes, shader backgrounds, animated text, interactive cards and galleries. This is what XSlop reaches for when someone asks for a "modern web" or a "website with 3D effects".

[Back to XSlop](../README.md)

| File | What's inside |
| --- | --- |
| [levels.md](levels.md) | the four effect levels, from no effects to immersive 3D, and what each one allows |
| [kits.md](kits.md) | style-consistent kits (Quiet, Modern dark, Modern light, Immersive, Retro, Playful) and the effect budget |
| [presets.md](presets.md) | ready combinations per style keyword and per site type |
| [install.md](install.md) | how to install components from React Bits and 21st.dev, and what to do without React |
| [catalog/motion-primitives.md](catalog/motion-primitives.md) | all 33 Motion Primitives components; source saved in [kits/motion-primitives](kits/motion-primitives/) (MIT) |
| [catalog/aceternity.md](catalog/aceternity.md) | the 114 free Aceternity UI components with registry names |
| [catalog/skiper-ui.md](catalog/skiper-ui.md) | the 37 free Skiper UI components (attribution required) |
| [catalog/motion-recipes.md](catalog/motion-recipes.md) | 133 GSAP build prompts for studio-style motion, studied from Annnimate, written in our own words |
| [catalog/react-bits.md](catalog/react-bits.md) | every React Bits component: backgrounds, animations, text, components, micro-interactions |
| [catalog/21st-3d.md](catalog/21st-3d.md) | 3D components from 21st.dev: heroes, shaders, globes, orbs, tilt cards, 3D carousels, scroll |
| [Effects Rulebook](../rules/effects/README.md) | the rules every effect must pass (`EF`) |

## How the agent uses it

```text
Intake question "How much effect?"      ->  an effect level (levels.md)
Feel and level                           ->  one kit (kits.md) and an effect budget
Direction (style keyword)                ->  a preset (presets.md) inside that kit
Sections (blueprints/sections.md)        ->  one component per section, within the budget
Design checkpoint                        ->  the user sees the picks with their links and approves
Build                                    ->  install from the registry (install.md), restyle to tokens,
                                             apply the Effects Rulebook (lazy-load, reduced motion, budget)
```

> [!IMPORTANT]
> Motion Primitives is MIT, so its source is saved in `kits/motion-primitives/` with its licence. The others
> are installed into each project from their official registries and their source is not copied into XSlop:
> Aceternity and React Bits do not allow redistribution, and 21st.dev components belong to their authors.

## The short version

- Ask first. The intake questions decide the effect level; never add 3D because the brief said "modern".
- One hero effect per page, one signature moment per site, everything else quiet.
- One kit per site, and the effect budget: "a few" means two at most.
- Restyle every component to the project's tokens: colours, radius, type. Demo colours are a giveaway (`SL-19`).
- Heavy effects (WebGL, Spline, R3F) load lazily, pause off screen, cap pixel ratio and have a static fallback.
- Everything works with `prefers-reduced-motion` and without JavaScript for content.
