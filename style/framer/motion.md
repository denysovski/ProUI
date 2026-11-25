# FRAMER motion recipes (Framer Motion / Motion for React)

[FRAMER style](README.md) · [Sections](sections.md) · [Plain-JS versions](../../effects/fx/README.md#unanim-set)

The same motion system as the [plain-JS effects](../../effects/fx/README.md#unanim-set), written for React with
`motion` (the package formerly called `framer-motion`, import from `motion/react`). Use these when the stack is
React or Next.js, or when a Framer site gets a code component. Install: `npm i motion`.

## Tokens

```ts
// motion-tokens.ts
export const ease = {
  out: [0.23, 1, 0.32, 1],      // hovers, presses
  rise: [0.16, 1, 0.3, 1],      // things that rise or reveal (expo out)
  sheet: [0.32, 0.72, 0, 1],    // panels and sheets that open
  shut: [0.65, 0, 0.35, 1],     // panels that close (faster, harder)
  inOut: [0.77, 0, 0.175, 1],   // page-level moves
} as const;
export const dur = { press: 0.12, hover: 0.2, close: 0.26, open: 0.64, reveal: 0.7, rise: 0.9 } as const;
export const spring = {
  ui: { type: 'spring', stiffness: 320, damping: 34 },          // pills, tabs, islands: no overshoot (MO-13)
  layout: { type: 'spring', stiffness: 170, damping: 26, mass: 1 }, // layoutId moves, cards growing into dialogs
} as const;
```

## Reveal: lines through a blur

```tsx
import { motion, useReducedMotion } from 'motion/react';
import { ease } from './motion-tokens';

export function BlurLines({ lines }: { lines: string[] }) {
  const reduce = useReducedMotion();
  return (
    <h2 aria-label={lines.join(' ')}>
      {lines.map((line, l) => (
        <span key={l} aria-hidden style={{ display: 'block' }}>
          {line.split(' ').map((w, i) => (
            <motion.span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }}
              initial={reduce ? false : { opacity: 0, filter: 'blur(4px)', y: '0.25em' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ opacity: { duration: 0.7, ease: [0.45, 0, 0.55, 1] }, filter: { duration: 0.7 }, y: { duration: 0.9, ease: ease.rise }, delay: 0.15 + l * 0.06 }}
            >{w}</motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
}
```

Pass the lines as the designer broke them; on phones join them and let the browser wrap (the delay then
follows the word index divided by an estimate of words per line).

## Recede hero (F-01)

```tsx
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function RecedeHero({ src, alt, children }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-7%', '0.5%']);
  const shade = useTransform(scrollYProgress, [0, 1], [0, 0.78]);
  return (
    <motion.section ref={ref} style={{ y, position: 'relative', zIndex: 0, overflow: 'hidden', minHeight: '100svh' }}>
      <motion.img src={src} alt={alt} style={{ y: imgY, position: 'absolute', inset: '-8% 0 0', width: '100%', height: '108%', objectFit: 'cover' }} />
      <motion.div aria-hidden style={{ opacity: shade, position: 'absolute', inset: 0, background: '#000', zIndex: 2 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </motion.section>
  );
}
// The next section: position: relative; z-index: 1; background: white.
```

## Dock menu (F-11)

```tsx
import { AnimatePresence, motion } from 'motion/react';
import { ease } from './motion-tokens';

const panel = {
  closed: { clipPath: 'inset(calc(100% - 54px) 0 0 0 round 20px 20px 29px 29px)', transition: { duration: 0.42, ease: ease.shut, delay: 0.06 } },
  open: { clipPath: 'inset(0 0 0 0 round 20px 20px 29px 29px)', transition: { duration: 0.64, ease: ease.sheet } },
};
const item = {
  closed: (i: number) => ({ y: 'calc(100% + 0.3em)', transition: { duration: 0.26, ease: ease.shut, delay: i * 0.015 } }),
  open: (i: number) => ({ y: 0, transition: { duration: 0.8, ease: ease.rise, delay: 0.2 + i * 0.05 } }),
};
// <AnimatePresence>{open && <motion.div variants={panel} initial="closed" animate="open" exit="closed">…
//   {links.map((l, i) => <li style={{ overflow: 'hidden' }}><motion.a custom={i} variants={item}>…</motion.a></li>)}
// The page wrapper: animate={{ scale: open ? 0.976 : 1 }} transition={{ duration: open ? 0.8 : 0.52, ease: open ? ease.sheet : ease.shut }}
// Focus trap, Escape and aria-expanded as in effects/fx/dock-menu/dock-menu.js.
```

## Hover members (F-05, after Skiper UI `skiper6`)

```tsx
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export function HoverMembers({ members, fallback = 'Studio', accent = '#e8401c' }) {
  const [active, setActive] = useState<number | null>(null);
  const word = active === null ? fallback : members[active].name;
  return (
    <section style={{ display: 'grid', justifyItems: 'center', gap: 48 }} onPointerLeave={() => setActive(null)}>
      <ul style={{ display: 'flex', alignItems: 'center', height: 128, listStyle: 'none' }}>
        {members.map((m, i) => (
          <motion.li key={m.name} animate={{ width: active === i ? 120 : 60, height: active === i ? 120 : 60 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <button onPointerEnter={() => setActive(i)} onFocus={() => setActive(i)} style={{ width: '100%', height: '100%', padding: 5 }}>
              <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
            </button>
          </motion.li>
        ))}
      </ul>
      <p aria-hidden style={{ position: 'relative', height: '0.86em', overflow: 'hidden', fontSize: 'clamp(64px,17vw,260px)', lineHeight: 0.86, textTransform: 'uppercase', color: active === null ? 'inherit' : accent }}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span key={word} style={{ display: 'flex' }}>
            {[...word].map((c, i) => (
              <motion.span key={i} initial={{ y: '105%' }} animate={{ y: 0, transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1], delay: i * 0.032 } }}
                exit={{ y: '-105%', transition: { duration: 0.38, ease: [0.65, 0, 0.35, 1], delay: i * 0.022 } }}>{c}</motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </p>
    </section>
  );
}
```

## Shared element: tile → dialog (F-30)

```tsx
<motion.article layoutId={`card-${id}`} onClick={() => setOpen(id)} transition={spring.layout}>…</motion.article>
<AnimatePresence>{open && (
  <motion.div layoutId={`card-${open}`} role="dialog" aria-modal="true" transition={spring.layout}>…</motion.div>
)}</AnimatePresence>
```

Give the image and title their own `layoutId`s so they travel separately; everything that exists only in the
dialog fades in after 120 ms. Return focus to the tile on close.

## Tabs with a moving highlight (F-29, F-14)

```tsx
{tabs.map((t) => (
  <button key={t.id} role="tab" aria-selected={t.id === current} onClick={() => setCurrent(t.id)} style={{ position: 'relative' }}>
    {t.id === current && <motion.span layoutId="tab-pill" transition={spring.ui} style={{ position: 'absolute', inset: 0, borderRadius: 99, background: '#0d0d0d' }} />}
    <span style={{ position: 'relative', mixBlendMode: 'difference', color: '#fff' }}>{t.label}</span>
  </button>
))}
```

## Section stack (F-54) and card expand (F-03)

```tsx
const { scrollYProgress } = useScroll({ target: nextRef, offset: ['start end', 'start start'] });
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
const radius = useTransform(scrollYProgress, [0, 1], [0, 28]);
const dim = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
// covered section: style={{ position: 'sticky', top: 0, scale, borderRadius: radius, filter: useMotionTemplate`brightness(${dim})` }}

const inset = useTransform(progress, [0, 1], ['6vw', '0vw']);
const r = useTransform(progress, [0, 1], [32, 0]);
const clip = useMotionTemplate`inset(0 ${inset} round ${r}px)`; // card expand
```

## Filter swap (F-42, MO-29)

```tsx
<AnimatePresence mode="wait">
  <motion.ul key={filter} exit={{ opacity: 0, y: 14, transition: { opacity: { duration: 0.36 }, y: { duration: 0.48 } } }}>
    {items.map((it, i) => (
      <motion.li key={it.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.045, ease: ease.rise } }}>…</motion.li>
    ))}
  </motion.ul>
</AnimatePresence>
```

## Reduced motion

Wrap the app in `<MotionConfig reducedMotion="user">`. It turns transforms off and keeps opacity, which is
what `MO` asks for. Scroll-linked values (`useScroll`) still update: gate them with `useReducedMotion()` and
render the end state.
