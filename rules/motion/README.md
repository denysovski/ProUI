# Motion Rulebook

> Timing, easing and choreography that make an interface feel fast and physical.

[All rulebooks](../README.md) · Prefix `MO` · Interaction

## Do

Positive rules: what a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `MO-01` | **Ease-out for entrances** | Things that appear start fast and settle (for example `cubic-bezier(0.22, 1, 0.36, 1)`). |
| `MO-02` | **Dropdowns at 150–250 ms** | Menus, selects and tooltips open quickly. |
| `MO-03` | **Stagger list rows by about 30 ms** | Each row starts slightly after the previous one. Cap the total stagger so long lists do not crawl. |
| `MO-04` | **Scale to 0.97 on press** | Buttons shrink slightly while pressed. |
| `MO-05` | **Stretch moving knobs about 12 %** | A toggle knob or slider thumb stretches in its direction of travel while moving, then settles. |
| `MO-06` | **Stagger details as they settle** | The container arrives first, then its title, then the smaller details. |
| `MO-07` | **Arcs for object movement** | Objects travelling across the screen follow a slight curve, not a straight line. |
| `MO-08` | **Pulse to confirm success** | A short scale pulse (about 1 → 1.06 → 1) when something succeeds. |
| `MO-09` | **Ease-in-out for moves** | An element already on screen moving to a new position eases in and out. |
| `MO-10` | **Start popovers at 0.95** | Popovers and tooltips grow from 95 % scale and 0 opacity, not from zero. |
| `MO-11` | **Enter from the trigger** | Set `transform-origin` to the button that opened it, so the popover grows out of it. |
| `MO-12` | **Exit to the trigger** | On close it shrinks back towards the same point. |
| `MO-15` | **Make exits about 20 % shorter** | An exit runs about 20 % shorter than the matching entrance, so closing feels instant. |
| `MO-16` | **Overlap old and new states** | Crossfade between states so there is never an empty frame. |
| `MO-17` | **Masks for reveals and colour changes** | Reveal content or swap a colour with a moving `clip-path` mask rather than a plain fade. |
| `MO-18` | **Crossfade icons with blur** | When an icon changes (menu to close, copy to check), crossfade with a small blur (about 2–4 px) and a slight scale. |
| `MO-19` | **Rubber band past bounds** | Dragging or scrolling past an edge moves with increasing resistance, then springs back. |
| `MO-20` | **Reuse the same `layoutId`** | In Framer Motion (or a FLIP technique elsewhere), give the same element the same `layoutId` in both places so it travels between them: a card into its detail view, the underline of the active tab. |
| `MO-21` | **Native page transitions** | Use the View Transitions API for page and state transitions where it is supported, with an instant fallback. |
| `MO-22` | **Scroll-driven animation in CSS** | Prefer CSS scroll-driven animations (`animation-timeline`) over scroll listeners, with a static fallback. |
| `MO-23` | **Animate only transform and opacity** | Moving things use `transform` and `opacity`; filter and clip-path only for short, bounded moments. |

## Don't

Negative rules: what never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `MO-13` | **Bounce on everyday UI** | No spring overshoot on menus, dialogs, toggles or tabs. Save bounce for rare playful moments. |
| `MO-14` | **Easing while the user drags** | While the user drags a slider, sheet or card, it follows the pointer 1:1 with no easing. Animate only after release. |
| `MO-24` | **Scroll hijacking** | Never take over the scroll wheel or trackpad to move the page in fixed steps, change its speed, or lock it until an animation ends. |
| `MO-25` | **Animating layout properties** | Never animate `width`, `height`, `top`, `left`, `margin` or `padding` in a loop; they force layout on every frame. |
| `MO-26` | **Motion that blocks input** | The user can click, scroll and type while something animates. No intro sequence holds the page hostage. |
| `MO-27` | **Parallax on text** | Text never moves at a different speed than the page. Parallax, if any, is for background imagery and stops for reduced motion. |
| `MO-28` | **Endless decorative loops** | No looping animation on content that people read or use (rotating badges, pulsing buttons, floating cards). |

## Related anti-slop rules

Don'ts from the [Anti-Slop Rulebook](../anti-slop/README.md) that belong to this subject.

| ID | Avoid |
| --- | --- |
| `SL-35` | Everything fades in on scroll |
| `SL-36` | Bouncy everyday UI |
| `SL-68` | Marquee filler |
| `SL-69` | Pulsing dots and blinking cursors |
| `SL-72` | Content hidden at rest |

## How to check

- Record the signature moment; check the performance panel for long frames.
- Turn on reduced motion and check every animation has a calm alternative.

## Sources

- [Apple HIG: Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [MDN: View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)

---

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
