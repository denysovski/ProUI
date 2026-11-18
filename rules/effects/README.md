# Effects and 3D Rulebook

> Modern effects, shaders and 3D from the effects library, used at the level the user chose and without hurting speed or access.

[All rulebooks](../README.md) · Prefix `EF` · Design

## Do

Positive rules: what a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `EF-01` | **Effects match the intake answer** | The effect level the user chose (none, subtle, modern, immersive 3D) caps every effect on the site. Never add 3D or shaders because the brief said "modern" without asking (`effects/levels.md`). |
| `EF-02` | **One hero effect per page** | Each page has at most one leading effect, usually in the first screen. Everything else supports it quietly. |
| `EF-03` | **Restyle every component** | Installed components take the project's colours, radius, type and spacing tokens. Demo colours, demo text and demo images are removed. |
| `EF-04` | **Lazy-load heavy effects** | WebGL, three.js, R3F and Spline load after first paint (dynamic import, `ssr: false`, or on idle/visible), never in the critical path. |
| `EF-05` | **Render only while visible** | Animated canvases pause when off screen (IntersectionObserver) and when the tab is hidden. |
| `EF-06` | **Cap the pixel ratio** | GPU effects render at `devicePixelRatio` capped at 1.5–2, and lower on small screens. |
| `EF-07` | **A static fallback** | Every GPU effect has a poster image or CSS gradient that shows before it loads, if WebGL fails, and for reduced motion. |
| `EF-08` | **Reduced motion version** | With `prefers-reduced-motion`, effects stop or become a still frame; text animations show the final text immediately. |
| `EF-09` | **Content stays real HTML** | Headlines, labels and links inside effects remain selectable text in the DOM, readable by screen readers and search engines. |
| `EF-10` | **Test on a mid-range phone** | Effects are checked on a real mid-range Android phone or with 4× CPU throttling: smooth scroll, INP under 200 ms, no overheating. |
| `EF-11` | **Install from the official source** | Components come from their registry (React Bits, 21st.dev) with their licence checked and recorded in the project. |
| `EF-20` | **Respect the effect budget** | Count every effect that moves on its own, follows the pointer or renders on a canvas. "A few" or "a couple" means two at most on the whole site; a number the user gives is the number. List the planned effects with their places in the outline (`effects/kits.md`). |
| `EF-21` | **One kit per site** | Pick one kit (Quiet, Modern dark, Modern light, Studio, Immersive, Retro, Playful) and take every effect from it, so motion, light and depth look like one family. When the kit has nothing for a section, build that section plain. |
| `EF-23` | **Credit the libraries that ask for it** | Free Skiper UI components require attribution: add a credit in the footer, colophon or credits page when one is used. Keep the MIT notice for Motion Primitives and any licence file a 21st.dev component ships with. |

## Don't

Negative rules: what never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `EF-12` | **Several GPU canvases at once** | Never more than one WebGL canvas visible at the same time. |
| `EF-13` | **3D on every section** | No 3D object, shader or tilt in every section. Repetition turns a signature into noise. |
| `EF-14` | **Effects behind body text** | No moving background behind paragraphs, forms or prices. |
| `EF-15` | **Cursor replacements in working UI** | No custom cursors, cursor trails or blob cursors on forms, shops, dashboards or long reading pages. |
| `EF-16` | **Effects as the LCP element** | The largest element of the first screen is never a canvas that waits for JavaScript; use a poster or real image. |
| `EF-17` | **Demo content left in** | No placeholder images, sample names or lorem text from component demos. |
| `EF-18` | **React only for an effect** | Do not add React to a non-React site just to run one animation; rebuild the idea with CSS, GSAP or three.js. |
| `EF-19` | **Redistributing component libraries** | Never copy React Bits or 21st.dev component source into a template, kit or skill for sale or redistribution; install per project. |
| `EF-22` | **Mixing effect families** | An Aceternity beam hero, a React Bits shader section, a 21st.dev 3D carousel and Motion Primitives cards on one page. Each library has its own motion language; mixed, the page looks assembled from demos. |
| `EF-24` | **Copying paid components** | Rebuilding a paid library component from its preview code, or pasting Pro source into a project without a licence. The motion recipes describe the pattern; build it from the description. |

## Related anti-slop rules

Don'ts from the [Anti-Slop Rulebook](../anti-slop/README.md) that belong to this subject.

| ID | Avoid |
| --- | --- |
| `SL-03` | Glowing background orbs |
| `SL-19` | Untouched component library |
| `SL-35` | Everything fades in on scroll |
| `SL-54` | Dark glow |
| `SL-68` | Marquee filler |
| `SL-72` | Content hidden at rest |

## How to check

- Compare the effects on each page with the effect level in `proui/DECISIONS.md`.
- Lighthouse on mobile and a 4× CPU-throttled recording: no long frames while scrolling.
- Turn on reduced motion and disable WebGL (`chrome://flags` or a browser without GPU): fallbacks appear.

## Sources

- [React Bits](https://reactbits.dev/get-started/index)
- [21st.dev 3D components](https://21st.dev/community/components/s/3d)
- [web.dev: Animations and performance](https://web.dev/articles/animations-guide)
- [Motion Primitives](https://motion-primitives.com)
- [Aceternity UI components](https://ui.aceternity.com/components)
- [Skiper UI quick start and licence](https://skiper-ui.com/docs/quick-start)
- [Annnimate animations](https://annnimate.com/animations)

---

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
