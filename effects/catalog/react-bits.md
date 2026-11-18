# React Bits catalogue

> Every component in [React Bits](https://reactbits.dev/get-started/index), an open-source library of animated React components, with what it renders with and how to install it.

[Effects library](../README.md) · [21st.dev 3D catalogue](21st-3d.md) · [Install guide](../install.md)

> [!IMPORTANT]
> React Bits is MIT with a Commons Clause: components may be used in any website or product, including paid ones, but must not be sold or redistributed on their own or in a bundle. XSlop therefore lists them and installs them into each project from the official registry; it does not copy their source into this repository.

## Install

```bash
# one component (TypeScript + Tailwind flavour; also JS-CSS, JS-TW, TS-CSS)
npx shadcn@latest add @react-bits/<Name>-TS-TW

# or with jsrepo
npx jsrepo@latest add https://reactbits.dev/r/<Name>-TS-TW
```

Add the registry once to `components.json`: `"registries": { "@react-bits": "https://reactbits.dev/r/{name}.json" }`.

**Rendering:** `WebGL` needs a GPU canvas (heaviest, lazy-load it), `Canvas` is 2D canvas, `JS animation` uses GSAP or Motion, `CSS / DOM` is the lightest.

## Contents

- [Backgrounds](#backgrounds)
- [Animations](#animations)
- [Text animations](#text-animations)
- [Components](#components)
- [Micro](#micro)

## Backgrounds

Full-section animated backgrounds, mostly WebGL shaders. Use one per page, behind the hero or one feature.

| Component | What it does | Renders with | Install |
| --- | --- | --- | --- |
| [AcidSquares](https://reactbits.dev/backgrounds/acid-squares) | A rolling field of glossy squares that ripples under two drifting colored lights. | WebGL | `@react-bits/AcidSquares-TS-TW` |
| [AeroShards](https://reactbits.dev/backgrounds/aero-shards) | Silk ribbons of thick glass shards streaming on layered depths among survey markers, catching light along their edges. | WebGL <sub>vgpu</sub> | `@react-bits/AeroShards-TS-TW` |
| [Antigravity](https://reactbits.dev/backgrounds/antigravity) | A field of particles that lifts into a glowing ring around the cursor and bursts outward on click. | WebGL | `@react-bits/Antigravity-TS-TW` |
| [Aurora](https://reactbits.dev/backgrounds/aurora) | A soft, calm aurora that flows across the top of the page and drifts toward the cursor. | WebGL | `@react-bits/Aurora-TS-TW` |
| [Balatro](https://reactbits.dev/backgrounds/balatro) | The swirling Balatro paint shader, with crisp pixels, a cursor that stirs the paint and click whirlpools. | WebGL | `@react-bits/Balatro-TS-TW` |
| [Ballpit](https://reactbits.dev/backgrounds/ballpit) | A soft-lit pit of physics balls you can shove with the cursor, grab, throw and blast apart. | WebGL | `@react-bits/Ballpit-TS-TW` |
| [Beams](https://reactbits.dev/backgrounds/beams) | Glossy ribbons that ripple in the dark and catch the light, which follows your cursor. | WebGL | `@react-bits/Beams-TS-TW` |
| [ColorBends](https://reactbits.dev/backgrounds/color-bends) | Vibrant color bends with smooth flowing animation. | WebGL <sub>three</sub> | `@react-bits/ColorBends-TS-TW` |
| [CRTWarp](https://reactbits.dev/backgrounds/crt-warp) | A blocky plasma glowing on a curved CRT, with real scanlines, a phosphor mask, afterglow and a power-on intro. | WebGL | `@react-bits/CRTWarp-TS-TW` |
| [DarkVeil](https://reactbits.dev/backgrounds/dark-veil) | A silky veil of light that drifts in the dark and bends around the cursor. | WebGL | `@react-bits/DarkVeil-TS-TW` |
| [Dither](https://reactbits.dev/backgrounds/dither) | Retro dithered waves with Bayer, halftone, line and noise patterns, palettes and cursor trails. | WebGL | `@react-bits/Dither-TS-TW` |
| [DotField](https://reactbits.dev/backgrounds/dot-field) | A gradient dot field seen through a lens that follows the cursor, magnifying, pinching or swirling the dots. | WebGL | `@react-bits/DotField-TS-TW` |
| [DotGrid](https://reactbits.dev/backgrounds/dot-grid) | A springy dot grid that the cursor flicks and drags through like jelly, with click shockwaves. | WebGL | `@react-bits/DotGrid-TS-TW` |
| [EvilEye](https://reactbits.dev/backgrounds/evil-eye) | Procedural evil eye shader with animated iris, slit pupil, and fiery outer glow. | WebGL <sub>ogl</sub> | `@react-bits/EvilEye-TS-TW` |
| [FaultyTerminal](https://reactbits.dev/backgrounds/faulty-terminal) | A flickering CRT terminal of glowing glyphs, with phosphor trails under the cursor and glitches on click. | WebGL | `@react-bits/FaultyTerminal-TS-TW` |
| [Ferrofluid](https://reactbits.dev/backgrounds/ferrofluid) | A glossy sea of magnetic fluid where swells of spikes roll in and the cursor raises a crown. | WebGL | `@react-bits/Ferrofluid-TS-TW` |
| [FloatingLines](https://reactbits.dev/backgrounds/floating-lines) | Ribbons of fine glowing lines that drift in waves, part around the cursor and curl when clicked. | WebGL | `@react-bits/FloatingLines-TS-TW` |
| [FluxLines](https://reactbits.dev/backgrounds/flux-lines) | Glowing flux lines tracing a churning magnetic fluid. The cursor magnet reveals and curls them. | WebGL | `@react-bits/FluxLines-TS-TW` |
| [Galaxy](https://reactbits.dev/backgrounds/galaxy) | Endless flight through a twinkling starfield with warp jumps, cursor repulsion and star palettes. | WebGL | `@react-bits/Galaxy-TS-TW` |
| [GhostFibers](https://reactbits.dev/backgrounds/ghost-fibers) | Layered ribbons of fine glowing fibers that twist, fold and drift through soft depth of field. | WebGL | `@react-bits/GhostFibers-TS-TW` |
| [GradientASCII](https://reactbits.dev/backgrounds/gradient-ascii) | Soft gradient glows drawn in ASCII characters that scramble under the cursor. | WebGL | `@react-bits/GradientASCII-TS-TW` |
| [GradientBlinds](https://reactbits.dev/backgrounds/gradient-blinds) | Satin gradient blinds lit by a spotlight that follows the cursor, swaying and turning toward the light. | WebGL | `@react-bits/GradientBlinds-TS-TW` |
| [GradientWaves](https://reactbits.dev/backgrounds/gradient-waves) | Lit satin waves rolling in from a hazy horizon, with a light that follows the cursor and swells on click. | WebGL | `@react-bits/GradientWaves-TS-TW` |
| [Grainient](https://reactbits.dev/backgrounds/grainient) | Flowing grainy gradients you can stir with the cursor. | WebGL | `@react-bits/Grainient-TS-TW` |
| [GridDistortion](https://reactbits.dev/backgrounds/grid-distortion) | Image background that breaks into a grid of blocks under the cursor and settles back into place. | WebGL | `@react-bits/GridDistortion-TS-TW` |
| [GridMotion](https://reactbits.dev/backgrounds/grid-motion) | A tilted wall of drifting tiles that slides with the pointer and lights up where it rests. | CSS / DOM | `@react-bits/GridMotion-TS-TW` |
| [GridScan](https://reactbits.dev/backgrounds/grid-scan) | A 3D grid room swept by a scanning light that follows your view. | WebGL | `@react-bits/GridScan-TS-TW` |
| [HoloMosaic](https://reactbits.dev/backgrounds/holo-mosaic) | Holographic tiles that split light into sweeping color as it moves, with glitter, a flip-in intro and click waves. | WebGL | `@react-bits/HoloMosaic-TS-TW` |
| [Hyperspeed](https://reactbits.dev/backgrounds/hyperspeed) | Night highway of glowing light trails on a winding road that warps into hyperspace while you hold. | WebGL <sub>three</sub> | `@react-bits/Hyperspeed-TS-TW` |
| [Iridescence](https://reactbits.dev/backgrounds/iridescence) | Liquid iridescent surface with shifting folds that you can stir with the cursor. | WebGL | `@react-bits/Iridescence-TS-TW` |
| [LetterGlitch](https://reactbits.dev/backgrounds/letter-glitch) | A calm field of letters that flicker, scramble and glitch in color, stirred by the cursor and torn by clicks. | WebGL | `@react-bits/LetterGlitch-TS-TW` |
| [Lightfall](https://reactbits.dev/backgrounds/lightfall) | Streaks of light falling down a curved tunnel, bending around the cursor and stretching into warp trails on hold. | WebGL | `@react-bits/Lightfall-TS-TW` |
| [Lightning](https://reactbits.dev/backgrounds/lightning) | Crackling, branching lightning that bends toward the cursor and strikes wherever you click. | WebGL | `@react-bits/Lightning-TS-TW` |
| [LightPillar](https://reactbits.dev/backgrounds/light-pillar) | A swirling pillar of light that ignites on load, leans toward the cursor and surges on click. | WebGL | `@react-bits/LightPillar-TS-TW` |
| [LightRays](https://reactbits.dev/backgrounds/light-rays) | Volumetric light rays from any edge, with source glow and haze. The cursor steers the beam and casts a shadow. | WebGL | `@react-bits/LightRays-TS-TW` |
| [LightTunnel](https://reactbits.dev/backgrounds/light-tunnel) | A swirling fibre-optic tunnel where comets of light race into depth, steered by the cursor. | WebGL | `@react-bits/LightTunnel-TS-TW` |
| [LineWaves](https://reactbits.dev/backgrounds/line-waves) | Fine lines that flow in silky waves while a band of light drifts through them. | WebGL | `@react-bits/LineWaves-TS-TW` |
| [LiquidChrome](https://reactbits.dev/backgrounds/liquid-chrome) | Soft ribbons of liquid chrome that swirl through a dark pool, ripple under the cursor and catch the light as it moves. | WebGL | `@react-bits/LiquidChrome-TS-TW` |
| [LiquidEther](https://reactbits.dev/backgrounds/liquid-ether) | A glowing liquid that swirls under the cursor, colored by how fast it flows. | WebGL | `@react-bits/LiquidEther-TS-TW` |
| [MagicRings](https://reactbits.dev/backgrounds/magic-rings) | Glowing rings that pulse outward in a wave, swell toward the cursor and flare on click. | WebGL | `@react-bits/MagicRings-TS-TW` |
| [MagnetLines](https://reactbits.dev/backgrounds/magnet-lines) | A field of magnetic lines that swing toward the cursor, ripple outward and spin with every click. | WebGL | `@react-bits/MagnetLines-TS-TW` |
| [MicroSlats](https://reactbits.dev/backgrounds/micro-slats) | A wall of tiny slats that becomes a rolling sea in perspective, with glinting crests. | WebGL <sub>ogl</sub> | `@react-bits/MicroSlats-TS-TW` |
| [MoltenMetal](https://reactbits.dev/backgrounds/molten-metal) | Swirling caustic filaments with white-hot cores that heat up under the cursor and flare on click. | WebGL | `@react-bits/MoltenMetal-TS-TW` |
| [Orb](https://reactbits.dev/backgrounds/orb) | A glowing ring of swirling color that breathes, trails an orbiting light and reaches toward the cursor. | WebGL | `@react-bits/Orb-TS-TW` |
| [Particles](https://reactbits.dev/backgrounds/particles) | A drifting 3D field of particles with glow, twinkle, constellation lines and cursor interaction. | WebGL | `@react-bits/Particles-TS-TW` |
| [PatternWaves](https://reactbits.dev/backgrounds/pattern-waves) | A lit halftone surface of dots, lines or glyphs that moves like draped silk. | WebGL <sub>ogl</sub> | `@react-bits/PatternWaves-TS-TW` |
| [PixelBlast](https://reactbits.dev/backgrounds/pixel-blast) | Dithered pixel clouds that drift, shimmer and light up under the cursor, with ripples, shapes and a perspective floor. | WebGL | `@react-bits/PixelBlast-TS-TW` |
| [PixelSnow](https://reactbits.dev/backgrounds/pixel-snow) | Pixel-art snowflakes drifting down in layers of depth, brushed aside by the cursor. | WebGL | `@react-bits/PixelSnow-TS-TW` |
| [Plasma](https://reactbits.dev/backgrounds/plasma) | Folds of satin light twisting slowly through the dark, turning to follow the cursor. | WebGL | `@react-bits/Plasma-TS-TW` |
| [PlasmaWave](https://reactbits.dev/backgrounds/plasma-wave) | Two ribbons of plasma curling through each other, with soft glow and white-hot cores. | WebGL | `@react-bits/PlasmaWave-TS-TW` |
| [Prism](https://reactbits.dev/backgrounds/prism) | Rotating prism of glowing spectral light with configurable shape, colors and motion. | WebGL | `@react-bits/Prism-TS-TW` |
| [PrismaticBurst](https://reactbits.dev/backgrounds/prismatic-burst) | A burst of prismatic light rays that leans toward the cursor and sends a wave of light outward on click. | WebGL | `@react-bits/PrismaticBurst-TS-TW` |
| [Radar](https://reactbits.dev/backgrounds/radar) | A radar scope whose sweep leaves a phosphor afterglow and picks up moving contacts. | WebGL | `@react-bits/Radar-TS-TW` |
| [RippleGrid](https://reactbits.dev/backgrounds/ripple-grid) | A crisp grid that ripples like water, bending and lighting up as waves pass through it. | WebGL | `@react-bits/RippleGrid-TS-TW` |
| [Scanner](https://reactbits.dev/backgrounds/scanner) | Glowing interference lines swept by a scan beam, with a CRT finish, cursor lensing and click pings. | WebGL | `@react-bits/Scanner-TS-TW` |
| [ShapeGrid](https://reactbits.dev/backgrounds/shape-grid) | A drifting grid of shapes that lights up under the cursor, with perspective tilt and rainbow trails. | Canvas | `@react-bits/ShapeGrid-TS-TW` |
| [ShapeWaves](https://reactbits.dev/backgrounds/shape-waves) | A field of triangles, circles and squares that brighten and grow along rolling waves. | WebGL <sub>vgpu</sub> | `@react-bits/ShapeWaves-TS-TW` |
| [SideRays](https://reactbits.dev/backgrounds/side-rays) | Shafts of light that fan in from a corner or side, shimmer slowly and lean toward the cursor. | WebGL | `@react-bits/SideRays-TS-TW` |
| [Silk](https://reactbits.dev/backgrounds/silk) | Flowing satin folds with glossy highlights that turn toward the cursor and ripple on click. | WebGL | `@react-bits/Silk-TS-TW` |
| [SlicedWaves](https://reactbits.dev/backgrounds/sliced-waves) | Waves of colored light sliced into glowing bars, seen in depth with a focus that follows the cursor. | WebGL | `@react-bits/SlicedWaves-TS-TW` |
| [SoftAurora](https://reactbits.dev/backgrounds/soft-aurora) | Soft aurora borealis shader with 3D Perlin noise and cosine gradient palettes. | WebGL | `@react-bits/SoftAurora-TS-TW` |
| [Threads](https://reactbits.dev/backgrounds/threads) | Flowing threads that fray apart and part around the cursor, from fine silk to contour lines. | WebGL | `@react-bits/Threads-TS-TW` |
| [Topography](https://reactbits.dev/backgrounds/topography) | A 3D landscape drawn in glowing contour lines that rises under the cursor, with light pulses on click. | WebGL | `@react-bits/Topography-TS-TW` |
| [Waves](https://reactbits.dev/backgrounds/waves) | Dense flowing lines that sway like silk, bend around the cursor and spring back into place. | WebGL | `@react-bits/Waves-TS-TW` |
| [WebThreads](https://reactbits.dev/backgrounds/web-threads) | Glowing threads woven through luminous pinch points that light up under the cursor and carry light on click. | WebGL | `@react-bits/WebThreads-TS-TW` |

## Animations

Cursor effects, reveals, borders, transitions and interactive objects.

| Component | What it does | Renders with | Install |
| --- | --- | --- | --- |
| [AnimatedContent](https://reactbits.dev/animations/animated-content) | Wrapper that reveals its content on scroll with slides, blur, 3D tilts, soft wipes and staggered children. | JS animation <sub>gsap</sub> | `@react-bits/AnimatedContent-TS-TW` |
| [BlobCursor](https://reactbits.dev/animations/blob-cursor) | Liquid metal blob cursor that stretches, sloshes and bursts into droplets, in chrome, jelly, pearl or ink. | WebGL <sub>three</sub> | `@react-bits/BlobCursor-TS-TW` |
| [ClickSpark](https://reactbits.dev/animations/click-spark) | Bursts of sparks at every click, as dashes, comets, dots or stars, that can spill around buttons. | Canvas | `@react-bits/ClickSpark-TS-TW` |
| [Crosshair](https://reactbits.dev/animations/crosshair) | Crosshair cursor with live coordinates that locks onto links and buttons and measures them. | Canvas | `@react-bits/Crosshair-TS-TW` |
| [CrystalizedBall](https://reactbits.dev/animations/crystalized-ball) | A glass ball with a crackling electric rim and glowing dust that swirls with the cursor. | WebGL <sub>ogl</sub> | `@react-bits/CrystalizedBall-TS-TW` |
| [Cubes](https://reactbits.dev/animations/cubes) | A grid of outlined 3D cubes that turn to face the cursor, spin when swept and ripple on click. | WebGL | `@react-bits/Cubes-TS-TW` |
| [CursorGrid](https://reactbits.dev/animations/cursor-grid) | A crisp grid whose cells light up and fade behind the cursor, with grid styles, tiles and click pulses. | WebGL | `@react-bits/CursorGrid-TS-TW` |
| [DitherVeil](https://reactbits.dev/animations/dither-veil) | A 1-bit dithered photo the cursor burns through to full colour, knitting back cell by cell. | WebGL <sub>ogl</sub> | `@react-bits/DitherVeil-TS-TW` |
| [ElasticMesh](https://reactbits.dev/animations/elastic-mesh) | Turns text or any logo into a puffy inflated shape you can press, poke and stretch like jelly. | WebGL | `@react-bits/ElasticMesh-TS-TW` |
| [ElectricBorder](https://reactbits.dev/animations/electric-border) | Wraps any element in crackling strands of current that surge near the cursor and leap off in sparks. | WebGL | `@react-bits/ElectricBorder-TS-TW` |
| [ElectricLogo](https://reactbits.dev/animations/electric-logo) | Turns any logo into a living lightning outline, with arcs that leap off its edges. | WebGL <sub>ogl</sub> | `@react-bits/ElectricLogo-TS-TW` |
| [FadeContent](https://reactbits.dev/animations/fade-content) | Wrapper that fades content in on scroll, plain or out of focus, from washed-out gray, or through grain, mist and pixel blocks. | JS animation <sub>gsap</sub> | `@react-bits/FadeContent-TS-TW` |
| [GhostCursor](https://reactbits.dev/animations/ghost-cursor) | A ghost of glowing smoke that floats after the cursor and curls away as it rises. | WebGL | `@react-bits/GhostCursor-TS-TW` |
| [GlareHover](https://reactbits.dev/animations/glare-hover) | A glossy light streak that sweeps across any element in the direction the cursor moves. | CSS / DOM | `@react-bits/GlareHover-TS-TW` |
| [GlowCursor](https://reactbits.dev/animations/glow-cursor) | Light that pours from the cursor, drifts softly through the air and cools as it fades. | WebGL | `@react-bits/GlowCursor-TS-TW` |
| [GradualBlur](https://reactbits.dev/animations/gradual-blur) | Progressive edge blur for headers, footers, captions and carousels, with an optional fade to color that hides at the ends of a scroll. | CSS / DOM | `@react-bits/GradualBlur-TS-TW` |
| [HalftoneReveal](https://reactbits.dev/animations/halftone-reveal) | A halftone print of an image whose dots swell into the real photo under the cursor. | WebGL | `@react-bits/HalftoneReveal-TS-TW` |
| [ImageTrail](https://reactbits.dev/animations/image-trail) | Cursor-based image trail with several built-in variants. | JS animation <sub>gsap</sub> | `@react-bits/ImageTrail-TS-TW` |
| [LaserFlow](https://reactbits.dev/animations/laser-flow) | A beam of light that splashes onto your content and pours over its corners. | WebGL | `@react-bits/LaserFlow-TS-TW` |
| [LogoLoop](https://reactbits.dev/animations/logo-loop) | Continuously looping marquee of brand or tech logos with seamless repeat and hover pause. | CSS / DOM | `@react-bits/LogoLoop-TS-TW` |
| [Magnet](https://reactbits.dev/animations/magnet) | Elements magnetically ease toward the cursor then settle back with spring physics. | CSS / DOM | `@react-bits/Magnet-TS-TW` |
| [MetaBalls](https://reactbits.dev/animations/meta-balls) | Liquid metaballs that merge, stretch and pinch apart, with a cursor blob that pushes through them. | WebGL | `@react-bits/MetaBalls-TS-TW` |
| [MetallicPaint](https://reactbits.dev/animations/metallic-paint) | Liquid chrome that flows over your logo or text, adapted from Paper's Liquid Metal shader. | WebGL | `@react-bits/MetallicPaint-TS-TW` |
| [Noise](https://reactbits.dev/animations/noise) | Film grain overlay for photos and pages, from fine 35mm grain to dust, paper and TV static. | Canvas | `@react-bits/Noise-TS-TW` |
| [OrbitImages](https://reactbits.dev/animations/orbit-images) | SVG Path customizable orbiting images effect | CSS / DOM | `@react-bits/OrbitImages-TS-TW` |
| [PixelSwap](https://reactbits.dev/animations/pixel-swap) | New content builds in pixel by pixel in a springy wave that starts wherever the cursor enters. | CSS / DOM | `@react-bits/PixelSwap-TS-TW` |
| [PixelTrail](https://reactbits.dev/animations/pixel-trail) | Glossy pixels melt into a fluid goo trail behind the cursor, with color shifts and drips. | WebGL | `@react-bits/PixelTrail-TS-TW` |
| [PixelTransition](https://reactbits.dev/animations/pixel-transition) | Retro pixel dissolve that covers a card in solid pixels, swaps the content underneath and clears again. | Canvas | `@react-bits/PixelTransition-TS-TW` |
| [Ribbons](https://reactbits.dev/animations/ribbons) | Springy ribbons that trail the cursor, in lens, comet or even shapes with an optional wave. | WebGL | `@react-bits/Ribbons-TS-TW` |
| [RippleDistortion](https://reactbits.dev/animations/ripple-distortion) | Pointer-driven water displacement that warps content and leaves a decaying wake. | WebGL <sub>ogl</sub> | `@react-bits/RippleDistortion-TS-TW` |
| [ScrollExpand](https://reactbits.dev/animations/scroll-expand) | A rounded media frame that grows to full bleed as it scrolls through the viewport. | CSS / DOM | `@react-bits/ScrollExpand-TS-TW` |
| [ShapeBlur](https://reactbits.dev/animations/shape-blur) | A crisp logo or shape that drifts out of focus under the pointer like a camera lens. | WebGL | `@react-bits/ShapeBlur-TS-TW` |
| [SplashCursor](https://reactbits.dev/animations/splash-cursor) | A fluid simulation that trails the cursor in swirling ink and bursts into a splash on click. | WebGL | `@react-bits/SplashCursor-TS-TW` |
| [StarBorder](https://reactbits.dev/animations/star-border) | A twinkling star that travels the exact outline of any button, pill or card, trailing light and stardust. | Canvas | `@react-bits/StarBorder-TS-TW` |
| [StickerPeel](https://reactbits.dev/animations/sticker-peel) | A die-cut sticker you can peel at any edge, drag, throw and swing, in gloss, matte or holographic finishes. | WebGL | `@react-bits/StickerPeel-TS-TW` |
| [Strands](https://reactbits.dev/animations/strands) | Spectral strands that twist inside a frosted glass orb and swell into a smooth bulge where they come together, like the new Siri. | WebGL | `@react-bits/Strands-TS-TW` |
| [SwarmCursor](https://reactbits.dev/animations/swarm-cursor) | A liquid swarm of particles that flows after the cursor, curls into eddies and pours around hovered buttons. | WebGL | `@react-bits/SwarmCursor-TS-TW` |
| [TargetCursor](https://reactbits.dev/animations/target-cursor) | A reticle cursor whose corner brackets snap around targets, matching their shape. | CSS / DOM | `@react-bits/TargetCursor-TS-TW` |

## Text animations

Animated headlines and text effects. One per page, on the headline that matters.

| Component | What it does | Renders with | Install |
| --- | --- | --- | --- |
| [AsciiText](https://reactbits.dev/text-animations/ascii-text) | Waving ASCII text that tilts toward the pointer, scrambles on hover and ripples on click. | CSS / DOM | `@react-bits/AsciiText-TS-TW` |
| [BlurText](https://reactbits.dev/text-animations/blur-text) | Text starts blurred then crisply resolves for a soft-focus reveal effect. | JS animation <sub>motion</sub> | `@react-bits/BlurText-TS-TW` |
| [CircularText](https://reactbits.dev/text-animations/circular-text) | Layouts characters around a circle with optional rotation animation. | JS animation <sub>motion</sub> | `@react-bits/CircularText-TS-TW` |
| [CountUp](https://reactbits.dev/text-animations/count-up) | Animated number counter supporting formatting and decimals. | JS animation <sub>motion</sub> | `@react-bits/CountUp-TS-TW` |
| [CurvedLoop](https://reactbits.dev/text-animations/curved-loop) | Flowing looping text path along a customizable curve with drag interaction. | CSS / DOM | `@react-bits/CurvedLoop-TS-TW` |
| [DecryptedText](https://reactbits.dev/text-animations/decrypted-text) | Hacker-style decryption cycling random glyphs until resolving to real text. | Canvas <sub>motion</sub> | `@react-bits/DecryptedText-TS-TW` |
| [DepthText](https://reactbits.dev/text-animations/depth-text) | Layered extruded type with parallax that shifts against the pointer. | CSS / DOM | `@react-bits/DepthText-TS-TW` |
| [EchoText](https://reactbits.dev/text-animations/echo-text) | Ghosted copies trail behind the text and settle into a single word. | CSS / DOM | `@react-bits/EchoText-TS-TW` |
| [FallingText](https://reactbits.dev/text-animations/falling-text) | Text that breaks apart and tumbles into a pile you can drag, throw and swipe, then flies back into place. | JS animation <sub>matter-js</sub> | `@react-bits/FallingText-TS-TW` |
| [FoldText](https://reactbits.dev/text-animations/fold-text) | Lines unfold into place like creased paper opening flat. | JS animation <sub>gsap</sub> | `@react-bits/FoldText-TS-TW` |
| [FuzzyText](https://reactbits.dev/text-animations/fuzzy-text) | Vibrating fuzzy text with controllable hover intensity. | Canvas | `@react-bits/FuzzyText-TS-TW` |
| [GlitchText](https://reactbits.dev/text-animations/glitch-text) | RGB split and distortion glitch effect with jitter effects. | CSS / DOM | `@react-bits/GlitchText-TS-TW` |
| [GradientText](https://reactbits.dev/text-animations/gradient-text) | Living gradients inside your text: a sliding sweep, a drifting mesh or a swinging conic fan. | CSS / DOM | `@react-bits/GradientText-TS-TW` |
| [MaskedHeading](https://reactbits.dev/text-animations/masked-heading) | A headline with a drifting colour mesh or image showing through, revealed word by word. | JS animation <sub>gsap</sub> | `@react-bits/MaskedHeading-TS-TW` |
| [ParticleText](https://reactbits.dev/text-animations/particle-text) | Text assembles from drifting particles that scatter and reform on demand. | Canvas | `@react-bits/ParticleText-TS-TW` |
| [RotatingText](https://reactbits.dev/text-animations/rotating-text) | Cycles through multiple phrases with 3D rotate / flip transitions. | JS animation <sub>motion</sub> | `@react-bits/RotatingText-TS-TW` |
| [ScrambledText](https://reactbits.dev/text-animations/scrambled-text) | Detects cursor position and applies a distortion effect to text. | JS animation <sub>gsap</sub> | `@react-bits/ScrambledText-TS-TW` |
| [ScrollFloat](https://reactbits.dev/text-animations/scroll-float) | Text gently floats / parallax shifts on scroll. | JS animation <sub>gsap</sub> | `@react-bits/ScrollFloat-TS-TW` |
| [ScrollReveal](https://reactbits.dev/text-animations/scroll-reveal) | Text gently unblurs and reveals on scroll. | JS animation <sub>gsap</sub> | `@react-bits/ScrollReveal-TS-TW` |
| [ScrollVelocity](https://reactbits.dev/text-animations/scroll-velocity) | Text marquee animatio - speed and distortion scale with user's scroll velocity. | JS animation <sub>motion</sub> | `@react-bits/ScrollVelocity-TS-TW` |
| [ShinyText](https://reactbits.dev/text-animations/shiny-text) | A sheen of light that sweeps across text, from soft bands to chrome-like reflections. | Canvas | `@react-bits/ShinyText-TS-TW` |
| [Shuffle](https://reactbits.dev/text-animations/shuffle) | Animated text reveal where characters shuffle before settling. | Canvas <sub>gsap, @gsap/react</sub> | `@react-bits/Shuffle-TS-TW` |
| [SplitFlapText](https://reactbits.dev/text-animations/split-flap-text) | Mechanical split-flap departure board that clacks through to each new phrase. | CSS / DOM | `@react-bits/SplitFlapText-TS-TW` |
| [SplitText](https://reactbits.dev/text-animations/split-text) | Splits text into characters / words for staggered entrance animation. | JS animation <sub>gsap, @gsap/react</sub> | `@react-bits/SplitText-TS-TW` |
| [StrokeText](https://reactbits.dev/text-animations/stroke-text) | Outlined letterforms draw themselves on, then flood with fill. | JS animation <sub>gsap</sub> | `@react-bits/StrokeText-TS-TW` |
| [TechText](https://reactbits.dev/text-animations/tech-text) | A wordmark whose letters turn into dashed vector paths under the cursor. | Canvas | `@react-bits/TechText-TS-TW` |
| [TextCursor](https://reactbits.dev/text-animations/text-cursor) | Text or emoji that trails your cursor as stamped copies, a following chain or a ribbon of letters. | CSS / DOM | `@react-bits/TextCursor-TS-TW` |
| [TextLoop](https://reactbits.dev/text-animations/text-loop) | A seamless text marquee that flows along curved SVG paths. | JS animation <sub>gsap</sub> | `@react-bits/TextLoop-TS-TW` |
| [TextPressure](https://reactbits.dev/text-animations/text-pressure) | Characters scale / warp interactively based on pointer pressure zone. | CSS / DOM | `@react-bits/TextPressure-TS-TW` |
| [TextType](https://reactbits.dev/text-animations/text-type) | Typewriter effect with blinking cursor and adjustable typing cadence. | JS animation <sub>gsap</sub> | `@react-bits/TextType-TS-TW` |
| [TrueFocus](https://reactbits.dev/text-animations/true-focus) | Applies dynamic blur / clarity based over a series of words in order. | JS animation <sub>motion</sub> | `@react-bits/TrueFocus-TS-TW` |
| [VariableProximity](https://reactbits.dev/text-animations/variable-proximity) | Letter styling changes continuously with pointer distance mapping. | CSS / DOM | `@react-bits/VariableProximity-TS-TW` |
| [WarpText](https://reactbits.dev/text-animations/warp-text) | WebGL warp that bends and refracts the text around the pointer. | WebGL <sub>ogl</sub> | `@react-bits/WarpText-TS-TW` |

## Components

Complete interactive components: galleries, carousels, cards, menus, docks.

| Component | What it does | Renders with | Install |
| --- | --- | --- | --- |
| [AccordionGallery](https://reactbits.dev/components/accordion-gallery) | Panels expand on hover or focus, revealing parallax imagery and captions. | JS animation <sub>gsap</sub> | `@react-bits/AccordionGallery-TS-TW` |
| [AnimatedList](https://reactbits.dev/components/animated-list) | A scrolling list whose rows spring into view, with a gliding selection and arrow keys. | CSS / DOM | `@react-bits/AnimatedList-TS-TW` |
| [BorderGlow](https://reactbits.dev/components/border-glow) | Glowing mesh-gradient border that follows cursor direction and intensifies near edges. | CSS / DOM | `@react-bits/BorderGlow-TS-TW` |
| [BounceCards](https://reactbits.dev/components/bounce-cards) | A fan of photo cards that bounce in, then spread apart and straighten the one you hover. | CSS / DOM | `@react-bits/BounceCards-TS-TW` |
| [BubbleMenu](https://reactbits.dev/components/bubble-menu) | Floating circular expanding menu with staggered item reveal. | JS animation <sub>gsap</sub> | `@react-bits/BubbleMenu-TS-TW` |
| [CardNav](https://reactbits.dev/components/card-nav) | A navigation bar that springs open into a row of cards, each with its own links. | CSS / DOM | `@react-bits/CardNav-TS-TW` |
| [CardSwap](https://reactbits.dev/components/card-swap) | A 3D stack of cards that sends the front card to the back on a timer, or when you fling it. | CSS / DOM | `@react-bits/CardSwap-TS-TW` |
| [Carousel](https://reactbits.dev/components/carousel) | Swipeable cards for feature tours, stories and galleries, with five transitions and an autoplay timer. | CSS / DOM | `@react-bits/Carousel-TS-TW` |
| [ChromaGrid](https://reactbits.dev/components/chroma-grid) | A grid of grayscale photo cards where a spotlight follows the cursor and brings back color. | CSS / DOM | `@react-bits/ChromaGrid-TS-TW` |
| [CircularCarousel](https://reactbits.dev/components/circular-carousel) | A 3D ring of images with bendable cards, momentum drag, snapping and click to focus. | CSS / DOM | `@react-bits/CircularCarousel-TS-TW` |
| [CircularGallery](https://reactbits.dev/components/circular-gallery) | A curved image gallery you can drag, scroll or tab through, with cards that open to the full image. | WebGL | `@react-bits/CircularGallery-TS-TW` |
| [Counter](https://reactbits.dev/components/counter) | An odometer-style number whose digits roll to every new value, with currency, separators and locales. | CSS / DOM | `@react-bits/Counter-TS-TW` |
| [CurvedInput](https://reactbits.dev/components/curved-input) | Arc-bent input bar with text, caret and submit button all following the curve. | CSS / DOM | `@react-bits/CurvedInput-TS-TW` |
| [DecayCard](https://reactbits.dev/components/decay-card) | An image card that tears and melts as the pointer moves, then pulls itself back together. | WebGL | `@react-bits/DecayCard-TS-TW` |
| [DepthCarousel](https://reactbits.dev/components/depth-carousel) | Cards recede into depth on a 3D rail, with drag, keyboard and auto-advance. | JS animation <sub>gsap</sub> | `@react-bits/DepthCarousel-TS-TW` |
| [Dock](https://reactbits.dev/components/dock) | macOS style dock with smooth magnification, launch bounce, badges and context menus. | CSS / DOM | `@react-bits/Dock-TS-TW` |
| [DomeGallery](https://reactbits.dev/components/dome-gallery) | Immersive 3D dome gallery projecting images on a hemispheric surface. | JS animation <sub>@use-gesture/react</sub> | `@react-bits/DomeGallery-TS-TW` |
| [DriftWall](https://reactbits.dev/components/drift-wall) | An endless perspective wall of tiles drifting past, lifting on hover. | CSS / DOM | `@react-bits/DriftWall-TS-TW` |
| [ElasticSlider](https://reactbits.dev/components/elastic-slider) | A slider that grows under your cursor and stretches like rubber when pulled past either end, then springs back. | Canvas | `@react-bits/ElasticSlider-TS-TW` |
| [FlexCarousel](https://reactbits.dev/components/flex-carousel) | An infinite image row that flows through invisible liquid glass at its edges. | WebGL <sub>ogl</sub> | `@react-bits/FlexCarousel-TS-TW` |
| [FlowingMenu](https://reactbits.dev/components/flowing-menu) | A full-height menu with a liquid band that glides between rows and reveals a scrolling marquee of each item. | CSS / DOM | `@react-bits/FlowingMenu-TS-TW` |
| [FluidGlass](https://reactbits.dev/components/fluid-glass) | A 3D glass object that refracts your headline, image or video, follows the cursor and melts between shapes. | WebGL | `@react-bits/FluidGlass-TS-TW` |
| [FlyingPosters](https://reactbits.dev/components/flying-posters) | 3D posters that twist and flip as you scroll or drag through an endless column. | WebGL | `@react-bits/FlyingPosters-TS-TW` |
| [Folder](https://reactbits.dev/components/folder) | Folder that drops its flap open or swings open like a book, with pages you can pick. | WebGL | `@react-bits/Folder-TS-TW` |
| [GlassIcons](https://reactbits.dev/components/glass-icons) | Liquid glass icons that bend the color behind them, for app grids, docks and social links. | WebGL | `@react-bits/GlassIcons-TS-TW` |
| [GlassSurface](https://reactbits.dev/components/glass-surface) | Apple-style liquid glass that bends what is behind it, in a rounded panel or any logo shape. | WebGL | `@react-bits/GlassSurface-TS-TW` |
| [GooeyNav](https://reactbits.dev/components/gooey-nav) | A navigation bar whose active pill breaks into goo that flows over to the item you pick. | WebGL | `@react-bits/GooeyNav-TS-TW` |
| [HoloCard](https://reactbits.dev/components/holo-card) | Collectible trading card with a real holographic foil and glitter that sparkles as it tilts. | WebGL | `@react-bits/HoloCard-TS-TW` |
| [InfiniteMenu](https://reactbits.dev/components/infinite-menu) | A draggable sphere of image tiles that snaps the nearest one forward and shows its title. | WebGL | `@react-bits/InfiniteMenu-TS-TW` |
| [InfiniteSpiral](https://reactbits.dev/components/infinite-spiral) | An endlessly looping 3D helix of images with adjustable motion, depth and spacing. | CSS / DOM | `@react-bits/InfiniteSpiral-TS-TW` |
| [Lanyard](https://reactbits.dev/components/lanyard) | Swinging 3D badge on a stretchy woven band that you can drag, throw or click to flip. | WebGL <sub>three</sub> | `@react-bits/Lanyard-TS-TW` |
| [LineSidebar](https://reactbits.dev/components/line-sidebar) | Static list navigation with a cursor-proximity effect that shifts and highlights nearby items. | CSS / DOM | `@react-bits/LineSidebar-TS-TW` |
| [MagicBento](https://reactbits.dev/components/magic-bento) | A bento grid of feature cards with live artwork, edge light that follows the cursor and a click wave. | Canvas | `@react-bits/MagicBento-TS-TW` |
| [Masonry](https://reactbits.dev/components/masonry) | A masonry gallery that springs into place, reflows as it resizes and opens images in a lightbox. | CSS / DOM | `@react-bits/Masonry-TS-TW` |
| [ModelViewer](https://reactbits.dev/components/model-viewer) | A product-style 3D model viewer that frames itself and floats over a soft shadow. | WebGL <sub>@react-three/fiber, @react-three/drei, three</sub> | `@react-bits/ModelViewer-TS-TW` |
| [MorphSlider](https://reactbits.dev/components/morph-slider) | WebGL slider that melts between images with a displacement transition. | WebGL <sub>ogl, gsap</sub> | `@react-bits/MorphSlider-TS-TW` |
| [OptionWheel](https://reactbits.dev/components/option-wheel) | Curved option picker that spins with scroll, drag or arrow keys, tilting items away. | CSS / DOM | `@react-bits/OptionWheel-TS-TW` |
| [PillNav](https://reactbits.dev/components/pill-nav) | A pill navigation bar where a fill rises through each link as its label rolls over, with a sliding active dot. | CSS / DOM | `@react-bits/PillNav-TS-TW` |
| [PixelCard](https://reactbits.dev/components/pixel-card) | A card that fills with twinkling pixels on hover, rippling out from the center or the cursor. | Canvas | `@react-bits/PixelCard-TS-TW` |
| [ProfileCard](https://reactbits.dev/components/profile-card) | A framed profile card that tilts toward the cursor, with holographic foil shining through a tiled pattern. | CSS / DOM | `@react-bits/ProfileCard-TS-TW` |
| [ReflectiveCard](https://reactbits.dev/components/reflective-card) | A metal ID card that reflects your camera or a looping video and catches the light as it tilts. | WebGL | `@react-bits/ReflectiveCard-TS-TW` |
| [ScrollStack](https://reactbits.dev/components/scroll-stack) | Cards pin and stack as you scroll, settling back into a dimmed deck with smooth, jitter-free motion. | CSS / DOM | `@react-bits/ScrollStack-TS-TW` |
| [SpecularButton](https://reactbits.dev/components/specular-button) | Glass button whose edge catches the light, with a highlight that glides toward the cursor. | WebGL | `@react-bits/SpecularButton-TS-TW` |
| [SpotlightCard](https://reactbits.dev/components/spotlight-card) | Card lit by a soft spotlight that follows the pointer, catches its edge and reaches nearby cards. | CSS / DOM | `@react-bits/SpotlightCard-TS-TW` |
| [Stack](https://reactbits.dev/components/stack) | Pile of cards you can drag, flick or click through, with thrown cards tucking underneath. | JS animation <sub>motion</sub> | `@react-bits/Stack-TS-TW` |
| [StaggeredMenu](https://reactbits.dev/components/staggered-menu) | Menu with staggered item animations and smooth transitions on open/close. | JS animation <sub>gsap</sub> | `@react-bits/StaggeredMenu-TS-TW` |
| [Stepper](https://reactbits.dev/components/stepper) | A multi-step flow with a gliding step indicator, spring transitions and horizontal or vertical layouts. | CSS / DOM | `@react-bits/Stepper-TS-TW` |
| [TiltedCard](https://reactbits.dev/components/tilted-card) | A 3D card that tilts toward the cursor, with glare, a soft shadow, floating layers and a flip side. | CSS / DOM | `@react-bits/TiltedCard-TS-TW` |

## Micro

Small interaction details for buttons, toggles, inputs, toasts and loaders.

| Component | What it does | Renders with | Install |
| --- | --- | --- | --- |
| [BellToggle](https://reactbits.dev/micro/bell-toggle) | Pill toggle where a press rings the bell, crossfades the label and unfurls the pill. | JS animation <sub>motion</sub> | `@react-bits/BellToggle-TS-TW` |
| [BranchedMenu](https://reactbits.dev/micro/branched-menu) | Collapsible menu that branches each section from a trunk and traces a line to your pick. | CSS / DOM | `@react-bits/BranchedMenu-TS-TW` |
| [CallChip](https://reactbits.dev/micro/call-chip) | Tool-call chip whose fill wipes across as a live timer ticks, ending green or shaking red. | CSS / DOM | `@react-bits/CallChip-TS-TW` |
| [CodeSlots](https://reactbits.dev/micro/code-slots) | One-time code input whose digits spring into their slots, with paste and SMS autofill. | JS animation <sub>motion</sub> | `@react-bits/CodeSlots-TS-TW` |
| [CometDial](https://reactbits.dev/micro/comet-dial) | Tick-ring dial you flick by angle, with a comet that streaks behind the lit head. | JS animation <sub>motion</sub> | `@react-bits/CometDial-TS-TW` |
| [DodgeField](https://reactbits.dev/micro/dodge-field) | Wrapper that makes any child dodge the pointer until it relents and glides home. | JS animation <sub>motion</sub> | `@react-bits/DodgeField-TS-TW` |
| [FlipCard](https://reactbits.dev/micro/flip-card) | Two-faced card that flips in 3D on a click, drag or flick and settles on a spring. | JS animation <sub>motion</sub> | `@react-bits/FlipCard-TS-TW` |
| [FlyingButton](https://reactbits.dev/micro/flying-button) | Button that fires its thrusters on hover, lifts off on a WebGL smoke plume and lands back in its own cloud. | WebGL | `@react-bits/FlyingButton-TS-TW` |
| [FolderFloat](https://reactbits.dev/micro/folder-float) | Folder whose notes spring out into a floating cloud when it opens on hover or press. | JS animation <sub>matter-js</sub> | `@react-bits/FolderFloat-TS-TW` |
| [FuseButton](https://reactbits.dev/micro/fuse-button) | Action button whose done state carries an undo on a burning fuse. | CSS / DOM | `@react-bits/FuseButton-TS-TW` |
| [GlideSelect](https://reactbits.dev/micro/glide-select) | Select chip whose menu pops from its corner and whose highlight glides between rows. | CSS / DOM | `@react-bits/GlideSelect-TS-TW` |
| [HoldButton](https://reactbits.dev/micro/hold-button) | Hold-to-confirm button whose liquid fill rises while pressed and snaps back if you let go. | CSS / DOM | `@react-bits/HoldButton-TS-TW` |
| [JellyRadio](https://reactbits.dev/micro/jelly-radio) | Radio group of chips where the chosen one swells and barges its neighbours outward. | JS animation <sub>motion</sub> | `@react-bits/JellyRadio-TS-TW` |
| [LatticeLoader](https://reactbits.dev/micro/lattice-loader) | Agent status row with a lattice of cells that brighten in a wave beside a live stopwatch. | CSS / DOM | `@react-bits/LatticeLoader-TS-TW` |
| [PaperCrumple](https://reactbits.dev/micro/paper-crumple) | An image that crumples into a textured 3D sheet while you hold and drag it. | WebGL <sub>three</sub> | `@react-bits/PaperCrumple-TS-TW` |
| [PeekRating](https://reactbits.dev/micro/peek-rating) | Star rating that lifts a wave of stars up to the pointer, then commits with a pop on click. | CSS / DOM | `@react-bits/PeekRating-TS-TW` |
| [PromptBar](https://reactbits.dev/micro/prompt-bar) | Chat composer with @ sources, / commands, a model picker, dictation and attachments. | Canvas <sub>motion</sub> | `@react-bits/PromptBar-TS-TW` |
| [PulseHeart](https://reactbits.dev/micro/pulse-heart) | Like button that contracts to a dot, flips colour and pulses back as the count ticks over. | CSS / DOM | `@react-bits/PulseHeart-TS-TW` |
| [RefineFrame](https://reactbits.dev/micro/refine-frame) | Media frame that steps an image through generation stages without any layout shift. | Canvas | `@react-bits/RefineFrame-TS-TW` |
| [RubberSegment](https://reactbits.dev/micro/rubber-segment) | Segmented control whose rubber thumb stretches across the gap and squashes into place. | JS animation <sub>motion</sub> | `@react-bits/RubberSegment-TS-TW` |
| [ScrubField](https://reactbits.dev/micro/scrub-field) | Number chip you drag to scrub, with rubber-band limits and click to type. | JS animation <sub>motion</sub> | `@react-bits/ScrubField-TS-TW` |
| [Shredder](https://reactbits.dev/micro/shredder) | A list with a paper shredder at the bottom that cuts dragged rows into curling strips. | Canvas | `@react-bits/Shredder-TS-TW` |
| [SlideCommit](https://reactbits.dev/micro/slide-commit) | Slide-to-confirm handle that spins while your action runs and unfurls into a done pill. | JS animation <sub>motion</sub> | `@react-bits/SlideCommit-TS-TW` |
| [SlingButton](https://reactbits.dev/micro/sling-button) | Send button you pull back like a slingshot and release to fire. | JS animation <sub>motion</sub> | `@react-bits/SlingButton-TS-TW` |
| [SloshGauge](https://reactbits.dev/micro/slosh-gauge) | Tank gauge whose liquid chases the value, tilts as it moves and splashes when it fills. | CSS / DOM | `@react-bits/SloshGauge-TS-TW` |
| [SpringCheck](https://reactbits.dev/micro/spring-check) | Checkbox row where one spring fills the box, draws the tick and strikes through the label. | JS animation <sub>motion</sub> | `@react-bits/SpringCheck-TS-TW` |
| [SquishSwitch](https://reactbits.dev/micro/squish-switch) | Switch whose thumb stretches with speed and squashes against the end when you flick it. | JS animation <sub>motion</sub> | `@react-bits/SquishSwitch-TS-TW` |
| [StatusMark](https://reactbits.dev/micro/status-mark) | Agent task status glyph that morphs from an idle ring to a progress arc, then a check. | JS animation <sub>motion</sub> | `@react-bits/StatusMark-TS-TW` |
| [SwipeRow](https://reactbits.dev/micro/swipe-row) | List row that swipes open to reveal actions and deletes on a full swipe. | JS animation <sub>motion</sub> | `@react-bits/SwipeRow-TS-TW` |
| [SwipeToast](https://reactbits.dev/micro/swipe-toast) | Toast that swipes down to dismiss and burns a thin fuse for its remaining time. | JS animation <sub>motion</sub> | `@react-bits/SwipeToast-TS-TW` |
| [TearTicket](https://reactbits.dev/micro/tear-ticket) | Ticket whose perforated stub tears off by hand, fibre by fibre, and drops away. | JS animation <sub>motion</sub> | `@react-bits/TearTicket-TS-TW` |
| [ThoughtLine](https://reactbits.dev/micro/thought-line) | Reasoning trace header with a live clock that folds its steps into one line when done. | JS animation <sub>motion</sub> | `@react-bits/ThoughtLine-TS-TW` |
| [VoicePill](https://reactbits.dev/micro/voice-pill) | Mic button that swells into a capsule of live equalizer bars and a timer while recording. | Canvas | `@react-bits/VoicePill-TS-TW` |
| [WakeSlider](https://reactbits.dev/micro/wake-slider) | Thumbless range slider of thin bars where drag speed raises a wake behind the handle. | JS animation <sub>motion</sub> | `@react-bits/WakeSlider-TS-TW` |
| [WarmTooltip](https://reactbits.dev/micro/warm-tooltip) | Tooltip group where the first label waits, then its siblings open instantly while warm. | JS animation <sub>motion</sub> | `@react-bits/WarmTooltip-TS-TW` |

---

<sub>Generated by `scripts/build-effects.mjs` from the JSON file next to this one. Edit the JSON, then run the script.</sub>
