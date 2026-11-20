# Animations seen on the studied sites

> The motion the seventeen sites actually ship, measured from their stylesheets and running animations, with the timing values and a build prompt for each pattern. All prompts describe the idea in our own words; build them from scratch (`EF-24`).

[Site studies](README.md) · [Motion recipes](../../effects/catalog/motion-recipes.md) · [Motion Rulebook](../../rules/motion/README.md)

## Timing the sites use

| Curve | `cubic-bezier` | Duration | Used for | Seen on |
| --- | --- | --- | --- | --- |
| Expo out | `0.19, 1, 0.22, 1` | 0.2 s UI, 1–2 s reveals | everything that should feel instant and then settle | Cloudflare, Mobbin |
| Quint out | `0.22, 1, 0.36, 1` | 0.16 s, 0.38 s | hovers, panel opens | Agentcard |
| Quart out | `0.165, 0.84, 0.44, 1` | 0.3 s | buttons, cards | Fruitful |
| Quart in-out | `0.77, 0, 0.175, 1` | 0.6 s | section transitions | Fruitful |
| Sheet (iOS-like) | `0.32, 0.72, 0, 1` | 0.5 s | panels, cards rising | X Money |
| Standard | `0.4, 0, 0.2, 1` | 0.15–0.5 s | default for UI | xAI, Shopify Editions, Cosmos, Brik |
| Steps | `steps(4)` | 0.3 s | playful, hand-made feel | Town |

Rules of thumb from the sample: UI feedback 150–200 ms, hovers 200–400 ms, reveals 500–1000 ms, nothing on a loop except marquees, background video and a status pulse. Only Fruitful and Heron load GSAP; the rest do everything with CSS transitions and keyframes.

## Patterns and prompts

| Pattern | Seen on | What it says about the site |
| --- | --- | --- |
| Letter-by-letter headline with a caret | Jack & Jill | "we are a conversation", AI that types |
| Words rise one by one | X Money, Brik | a confident launch, one idea per word |
| Images open inside the headline | Mobbin, Brik, Town | the product is visual; show it in the sentence |
| Rotating noun | Cosmos | the catalogue is endless |
| Floating objects in depth | Agentcard, Cosmos | many things, one place |
| Data art that drifts | Heron, Mintlify | the brand is made of data |
| Text fills on scroll | Town | read this, it matters |
| Speed bars | TypeSafe | the claim is measurable |
| Logo marquee | Cloudflare, Heron, Agentcard, Cosmos | trust, quickly |
| Video hero with a pause button | Cloudflare, Rox, Taxi, X Money | real footage instead of illustration |
| Status pulse | Mintlify footer | the service is alive |
| Stepped transitions | Town | playful, analogue |

### Letter-by-letter headline with a caret

```text
Headline reveal for <hero>: split the headline into letters (keep the full text in aria-label), reveal
them left to right at 18–25 ms per letter with opacity only, a 2 px caret travels with the last letter
and blinks twice at the end, then fades. Runs once on load. Reduced motion: show the full headline.
```

### Words rise one by one

```text
Split the headline into words wrapped in overflow-hidden spans; each word moves from 100 % to 0
translateY with cubic-bezier(0.32,0.72,0,1), 600 ms, 60 ms stagger, starting 150 ms after load.
Reduced motion: no movement.
```

### Images open inside the headline

```text
Headline with inline media: after selected words insert a rounded slot (height = cap height × 1.1,
radius 0.25em) containing a real product image. Slots start at width 0 and open to their final width
with expo out, 1 s, 120 ms apart, pushing the words. On mobile the slots shrink to a dot or hide.
```

### Rotating noun

```text
Rotating word in "<fixed phrase> / <noun>": a list of 6–8 nouns; every 2.5 s the current noun slides
up and fades while the next slides in from below (400 ms, standard curve). The container width
animates to the new word. Pause on hover, focus and reduced motion; screen readers get the phrase
with the first noun only.
```

### Floating objects in depth

```text
Hero field of 20–30 objects (3D renders or real photos) at three depths: near (scale 1, sharp),
middle (0.8, blur 1px), far (0.6, blur 3px, 70 % opacity). Each drifts on its own slow loop (8–14 s)
and shifts slightly against the pointer (near more than far). Keep a clear zone behind the headline.
Pause off screen; reduced motion: static composition.
```

### Data art that drifts

```text
Draw the brand symbol from 2 000–6 000 small bars on a canvas, sampled from an SVG silhouette; colour
each bar from the palette, then shift hue by ±8° on a slow sine (20 s). Bars near the pointer lift
1–2 px. Cap DPR at 1.5, pause when hidden, static image for reduced motion and as the poster.
```

### Text fills on scroll

```text
Manifesto paragraph that fills as it is read: render the text at 25 % opacity, overlay the same text
at full colour clipped by a mask whose width follows scroll progress through the section (line by
line). No pinning. Reduced motion: full colour.
```

### Speed bars

```text
Comparison chart for <claim>: horizontal bars for each competitor and for us, labels in mono; when the
chart enters, bars grow from 0 to their value with expo out, ours last and in the accent, numbers
count up with tabular figures. Data in an accessible table behind it.
```

### Logo marquee

```text
Logo row under the hero: real client logos with permission, greyscale at 60 % opacity, infinite
horizontal scroll at 30–40 px/s, edges faded with a mask, pause on hover and focus, static grid when
reduced motion is on.
```

### Video hero with a pause control

```text
Full-bleed muted looping video (6–12 s, under 3 MB, poster image) with a dark gradient for text
contrast and a visible Pause button in the corner (WCAG 2.2.2). Video does not autoplay with sound and
pauses off screen.
```

### Status pulse

```text
Footer status line: a 6 px dot in success green with a soft pulse (scale 1 → 2.2, opacity .5 → 0, 2 s
loop) next to "All systems normal", linking to the status page. The text comes from the status API;
fall back to "Status" without a claim if it fails.
```

### Stepped transitions

```text
Playful UI states with transition-timing-function: steps(4) at 300 ms for hover colour and icon
changes, so they jump in four frames like hand-drawn animation. Use only for small UI, never for
layout or scroll.
```

## What the colours, icons and motion say

| Signal | Reads as | Example |
| --- | --- | --- |
| Warm near-black and cream instead of #000 and #fff | crafted, premium, printed | Cloudflare, Taxi, Jack & Jill |
| One saturated accent used only for the main action | decisive, clear | Cloudflare orange, Heron coral |
| A full saturated field once (hero only) | bold launch, consumer energy | Agentcard blue |
| Brand ink instead of black | warmth, personality without colour noise | Heron brown |
| Small coloured squares beside menu items or chips | organised, a system | Heron nav, Brik categories |
| Mono labels in uppercase | engineered, precise | Mintlify, Cloudflare, Ramp design |
| Square corners | serious, editorial, tool-like | Rox, TypeSafe, Brik |
| Pills | friendly, modern product | Cloudflare, X Money, Cosmos |
| Slow, few animations | confidence | Rox, Ramp design |
| Many small playful animations | approachable, consumer | Town, Agentcard |
