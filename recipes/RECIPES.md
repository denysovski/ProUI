# Recipes pack

Tested patterns for components, motion and effects, written for plain HTML/CSS/JS with GSAP and Lenis. Each
recipe says when to use it, the code skeleton, and the guardrails. Adapt the values to the project's design
tokens. Load this file when implementing.

Shared conventions:

```css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);     /* entrances (MO-01) */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* moves (MO-09) */
  --dur-fast: 180ms;   /* dropdowns, hovers (MO-02) */
  --dur-base: 320ms;   /* panels, cards */
  --dur-slow: 700ms;   /* section reveals */
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

```js
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
```

---

## Smooth scroll + scroll animations (Lenis + GSAP)

Use on content-led marketing and portfolio sites. Skip on dashboards and apps.

```js
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let lenis = null
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}
// stop page scroll while a modal is open
export const lockScroll = (on) => (on ? lenis?.stop() : lenis?.start())
```

Guardrails: `data-lenis-prevent` on scrollable panels; keep anchors working; no smooth scroll for reduced
motion.

---

## Section reveal (only for key moments)

Use for a handful of headlines or hero elements, not every block (`SL-35`).

```js
gsap.utils.toArray('[data-reveal]').forEach((el) => {
  if (reduce) return
  gsap.from(el, {
    y: 24, opacity: 0, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
  })
})
```

---

## Split-text headline reveal

Use for the hero headline or one statement per page.

```js
// wrap each word in a mask so it slides up from behind a clip
function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/)
  el.setAttribute('aria-label', el.textContent.trim())
  el.innerHTML = words.map((w) => `<span class="w" aria-hidden="true"><span>${w}</span></span>`).join(' ')
  return el.querySelectorAll('.w > span')
}
const inner = splitWords(document.querySelector('[data-split]'))
gsap.from(inner, { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.04 })
```

```css
.w { display: inline-block; overflow: hidden; vertical-align: top; }
.w > span { display: inline-block; }
```

Guardrails: keep the real text in `aria-label`; stagger stays short (MO-03).

---

## Scroll-scrubbed word highlight (manifesto paragraph)

Words go from muted to full ink as the paragraph scrolls through the viewport.

```js
const words = splitWords(document.querySelector('[data-scrub]'))
gsap.fromTo(words, { opacity: 0.18 }, {
  opacity: 1, stagger: 0.05, ease: 'none',
  scrollTrigger: { trigger: '[data-scrub]', start: 'top 75%', end: 'bottom 45%', scrub: true },
})
```

Guardrails: the end state must be fully readable; for reduced motion show the text at full opacity.

---

## Pinned horizontal gallery

Use for a "closer look" sequence of images or steps on desktop. On mobile, use native horizontal scroll with
scroll-snap instead.

```js
const mm = gsap.matchMedia()
mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
  const track = document.querySelector('.gallery__track')
  gsap.to(track, {
    x: () => -(track.scrollWidth - innerWidth),
    ease: 'none',
    scrollTrigger: { trigger: '.gallery', pin: true, scrub: 1, end: () => '+=' + track.scrollWidth, invalidateOnRefresh: true },
  })
})
```

---

## Magnetic button

Use on one or two primary CTAs, pointer devices only.

```js
document.querySelectorAll('[data-magnetic]').forEach((btn) => {
  if (reduce || !matchMedia('(hover: hover)').matches) return
  const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' })
  const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' })
  btn.addEventListener('pointermove', (e) => {
    const r = btn.getBoundingClientRect()
    xTo((e.clientX - r.left - r.width / 2) * 0.25)
    yTo((e.clientY - r.top - r.height / 2) * 0.25)
  })
  btn.addEventListener('pointerleave', () => { xTo(0); yTo(0) })
})
```

Pair with the press state:

```css
.btn { transition: transform var(--dur-fast) var(--ease-out); }
.btn:active { transform: scale(0.97); }            /* MO-04 */
```

---

## Infinite marquee (ticker strip)

Use for a single strip of short facts or logos. Pause on hover; stop for reduced motion.

```html
<div class="marquee" aria-label="The spring drop is live. 106 of 500 left.">
  <div class="marquee__track" aria-hidden="true"><span>…content…</span><span>…same content…</span></div>
</div>
```

```css
.marquee { overflow: hidden; }
.marquee__track { display: flex; width: max-content; animation: marquee 30s linear infinite; }
.marquee:hover .marquee__track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .marquee__track { animation: none; } }
```

---

## Popover / dropdown that grows from its trigger

Implements MO-02, MO-10, MO-11, MO-12, MO-15.

```css
.pop {
  transform-origin: var(--origin, top left);
  opacity: 0; transform: scale(0.95);
  transition: opacity 150ms var(--ease-out), transform 150ms var(--ease-out);
  pointer-events: none;
}
.pop.is-open {
  opacity: 1; transform: none; pointer-events: auto;
  transition-duration: 190ms;   /* exits are ~20% shorter than entrances */
}
```

Set `--origin` from the trigger's position (for example `top right` when the trigger sits at the right
edge). Close on Escape and outside click, return focus to the trigger, and use the proper ARIA pattern
(`aria-expanded`, `role="listbox"` / `menu`).

---

## Custom select (combobox)

Use when the native select clashes with the design. Requirements: hidden input with the value for forms;
button with `aria-haspopup="listbox"` and `aria-expanded`; list with `role="listbox"`, options with
`role="option"` and `aria-selected`; keyboard: arrows, Home/End, Enter/Space, Escape, type-ahead; opens
upward when there is no room below; on small screens the list is full field width.

---

## Icon swap with blur (MO-18)

```css
.icon-swap { display: grid; }
.icon-swap > * { grid-area: 1 / 1; transition: opacity 200ms, filter 200ms, transform 200ms var(--ease-out); }
.icon-swap [data-state="off"] { opacity: 0; filter: blur(3px); transform: scale(0.8); }
```

---

## Success pulse (MO-08)

```js
const pulse = (el) => gsap.fromTo(el, { scale: 1 }, { scale: 1.06, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out' })
```

Use on the bag count after "add to bag", a saved badge, a sent message.

---

## Toast notifications

Small, dark, bottom corner, one action link, auto-dismiss after 4–8 s, pause on hover, `role="status"`
(polite) or `role="alert"` for errors. Stack newest at the bottom; never cover the primary CTA on mobile.

---

## Lightweight 3D hero object (three.js)

Use for one signature object. Checklist from real tuning work:

- Indexed geometry (merge vertices) and the lowest detail that still looks smooth.
- Cheap vertex displacement (a few sine waves) instead of 3D noise when the motion is calm.
- Pixel ratio capped at 1 (0.85 on small screens); antialias only on desktop.
- 30 fps cap when motion is slow; render only while the canvas is on screen (IntersectionObserver).
- Compile shaders off the main thread when supported (`renderer.compileAsync`), boot in idle time.
- Simple eased hover and tilt, no spring physics.
- Static image fallback for no-WebGL, weak GPUs and reduced motion.

---

## Reservation countdown (e-commerce scarcity, honest version)

Show a hold timer only when stock is actually reserved. Start on add-to-bag, show minutes:seconds with
tabular numbers (`DC-18`), turn red under 2 minutes, warn once with a toast, release the items when it ends,
and tell the user what happened in the bag with an option to add them back.

---

## Tracking-box overlay (technical / camera aesthetic)

Thin-bordered boxes with corner ticks and tiny mono labels, connected by dashed SVG lines to a hub. Keep it
sparse (about 6–11 boxes), move a few boxes per beat (every 1–1.5 s), ease moves (0.5–0.6 s), and redraw lines
only while something moves. Pause the whole system off-screen.
