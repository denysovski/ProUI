# Installing effects

> How the agent adds a catalogue component to a project.

[Effects library](README.md)

## React projects (Next.js, Vite, Astro with React)

```bash
# once: shadcn setup (creates components.json, lib/utils, Tailwind wiring)
npx shadcn@latest init
```

Add the React Bits registry to `components.json`:

```json
{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

```bash
# React Bits: <Name>-<JS|TS>-<CSS|TW>
npx shadcn@latest add @react-bits/SplitText-TS-TW
npx shadcn@latest add @react-bits/DarkVeil-TS-TW

# Motion Primitives: from the official registry, or copy from effects/kits/motion-primitives/
npx motion-primitives@latest add text-effect
npx shadcn@latest add "https://motion-primitives.com/c/accordion.json"

# Aceternity UI (free components): registry name from effects/catalog/aceternity.md
npm i motion clsx tailwind-merge
npx shadcn@latest add @aceternity/spotlight-new
npx shadcn@latest add @aceternity/bento-grid

# 21st.dev: needs a free 21st.dev account (sign in, or use the Magic MCP / copy-prompt button)
npx shadcn@latest add https://21st.dev/r/shuding/cobe-globe
```

The CLI installs the npm dependencies the component needs (`three`, `ogl`, `gsap`, `motion`…). Commit the generated files; they are now the project's own code.

## After installing

```tsx
// load heavy effects only on the client and only when needed
import dynamic from "next/dynamic";
const DarkVeil = dynamic(() => import("@/components/DarkVeil"), { ssr: false });

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <DarkVeil />
      </div>
      <h1>Real headline from the brief</h1>
    </section>
  );
}
```

- Restyle with tokens; remove demo text and images.
- Wrap GPU effects so they render only while visible and stop for reduced motion (`EF` rules, `recipes/RECIPES.md`).
- Give every WebGL component a static poster or CSS gradient fallback.

## Projects without React

- Plain HTML, Astro without React, WordPress: use the effect idea, not the component. Rebuild it with the
  recipes in `recipes/` (GSAP, three.js, CSS), or mount a single React island only for that section.
- Spline scenes can be embedded with the `<spline-viewer>` web component without React.
- Never load React only to animate one headline.

## Licences

| Source | Licence | What it means |
| --- | --- | --- |
| Motion Primitives | MIT | free for any use; the source is saved in `kits/motion-primitives/`; keep the copyright notice |
| Aceternity UI (free components) | Aceternity licence | free in your own and client projects; do not redistribute or resell the source; Pro blocks need a paid licence |
| React Bits | MIT + Commons Clause | free in any website or product, including paid ones; do not sell or redistribute the components themselves |
| 21st.dev | per component (MIT, Apache-2.0 and others) | check the component page before shipping; keep notices the licence asks for |

## 21st.dev download limits

A free 21st.dev account can download two components per day (the counter resets at midnight UTC); more needs
a paid marketplace membership. So the agent picks 21st.dev components only at the design checkpoint, at most
the one or two the site really uses, and prefers React Bits (no account, no limit) when both offer a similar
effect.
