# Effect presets

> Ready combinations. Pick the row for the chosen style, then keep only what the effect level allows.

[Effects library](README.md) · React Bits names install as `@react-bits/<Name>-TS-TW`; 21st.dev names link from the [3D catalogue](catalog/21st-3d.md).

## By style keyword

| Style keyword | Background or hero | Text | Interaction | Level needed |
| --- | --- | --- | --- | --- |
| BLACK COAL | React Bits `DarkVeil`, `Silk`, `Threads` | `BlurText`, `SplitText` | `SpotlightCard`, `Magnet` | Modern |
| LIGHT BEAM | `LightRays`, `Beams`, `LightPillar` | `ShinyText` | `StarBorder` on the primary button | Modern |
| VOID PARTICLES | `Particles`, `Antigravity`, `Galaxy`; 21st Aether Vortex, Orb Flow Background | `DecryptedText` | `ClickSpark` | Modern or Immersive |
| CHROME OBJECT | `MetallicPaint`, `LiquidChrome`; 21st Spline Scene, Lycoris Specimen, Liquid Metal | `SplitText` | `TiltedCard`, `GlareHover` | Immersive 3D |
| DITHER GRAIN | `Dither`, `PixelBlast`, `Grainient`; 21st Dither Helix Carousel, ASCII Turntable | `AsciiText`, `DecryptedText` | `PixelCard` | Modern |
| SWISS MINIMAL | none | `SplitText` on the headline only | `Magnet` on the main button | Subtle |
| MEGA TYPE | none or `Noise` | `TextPressure`, `VariableProximity`, `ScrollVelocity` | none | Modern |
| EDITORIAL CREAM | none | `ScrollReveal`, `GradualBlur` | `FadeContent` | Subtle |
| GALLERY CLASSIC | none | `BlurText` | `Masonry`, `CircularGallery` | Subtle or Modern |
| POSTER COLLAGE | `Noise` | `FallingText` | `BounceCards`, `StickerPeel` | Modern |
| NOIR PORTRAIT | `Noise` | `BlurText` | `ShapeBlur` on images | Subtle |
| PRODUCT CLEAN | `SoftAurora` at low intensity | `CountUp` for real numbers | 21st 3D Stacked Website Cards Scroll, `ModelViewer` | Modern |
| PLAYFUL POP | `Ballpit` | `Shuffle`, `RotatingText` | `BounceCards`, `ClickSpark`, `Dock` | Modern |
| RED SIGNAL | `ColorBends` in the accent | `GlitchText` sparingly | `ElectricBorder` on one element | Modern |

## By request

| The user says | Start with |
| --- | --- |
| "modern web" | Modern level: one shader background in the hero (`Silk`, `DarkVeil`, `LiquidEther`), an animated headline (`SplitText`), one interactive section (`MagicBento`, `CardSwap` or a 21st 3D carousel) |
| "web with 3D effects" | Immersive 3D level: a 3D hero (21st Spline Scene, Orbit Delivery Hero, Geometric Orb or React Bits `Orb`, `CrystalizedBall`), one 3D gallery (`DomeGallery`, `InfiniteMenu`, 21st Coverflow Carousel, Formation), a scroll-driven sequence (21st Scroll Stacking Cards, Domino Scroll Image Gallery) |
| "gradients" | Modern level with a gradient background (`Grainient`, `SoftAurora`, `Aurora`, `GradientWaves`) restyled to the palette, plus the `GR` rules |
| "globe", "global company" | 21st COBE Globe, Globe CDN, Globe Flights or Country Flags Globe, with real locations only |
| "AI product", "voice assistant" | React Bits `Orb`; 21st Orb (ElevenLabs), Agentic Factory |
| "clean, classic, no effects" | None level; no catalogue components |
| "old-school", "retro", "Y2K" | `FaultyTerminal`, `AsciiText`, `PixelTransition`, `Dither`; keep content readable and fast |

## Rules for every preset

- Prefer React Bits when it has a similar effect: 21st.dev downloads are limited on free accounts (`install.md`).
- Replace demo colours, radii and fonts with the project's tokens.
- Keep exactly one GPU canvas visible at a time.
- Put real content into components: real photos in galleries, real numbers in counters, real logos in loops.
