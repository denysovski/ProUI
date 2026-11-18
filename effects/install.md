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

# 21st.dev: copy the command from the component page
npx shadcn@latest add https://21st.dev/r/ElevenLabs/orb
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
| React Bits | MIT + Commons Clause | free in any website or product, including paid ones; do not sell or redistribute the components themselves |
| 21st.dev | per component (MIT, Apache-2.0 and others) | check the component page before shipping; keep notices the licence asks for |
