# Motion (`MO`)

Animation should make the interface feel fast and physical. If in doubt, make it shorter and subtler.
Always respect `prefers-reduced-motion`: replace movement with a simple fade or nothing.

- **MO-01 Ease-out for entrances.** Things that appear start fast and settle (for example
  `cubic-bezier(0.22, 1, 0.36, 1)`).
- **MO-02 Dropdowns at 150–250 ms.** Menus, selects and tooltips open quickly.
- **MO-03 Stagger list rows by about 30 ms.** Each row starts slightly after the previous one. Cap the total
  stagger so long lists do not crawl.
- **MO-04 Scale to 0.97 on press.** Buttons shrink slightly while pressed.
- **MO-05 Stretch moving knobs about 12 %.** A toggle knob or slider thumb stretches in its direction of
  travel while moving, then settles.
- **MO-06 Stagger details as they settle.** The container arrives first, then its title, then the smaller
  details.
- **MO-07 Arcs for object movement.** Objects travelling across the screen follow a slight curve, not a
  straight line.
- **MO-08 Pulse to confirm success.** A short scale pulse (about 1 → 1.06 → 1) when something succeeds.
- **MO-09 Ease-in-out for moves.** An element already on screen moving to a new position eases in and out.
- **MO-10 Start popovers at 0.95.** Popovers and tooltips grow from 95 % scale and 0 opacity, not from zero.
- **MO-11 Enter from the trigger.** Set `transform-origin` to the button that opened it, so the popover grows
  out of it.
- **MO-12 Exit to the trigger.** On close it shrinks back towards the same point.
- **MO-13 No bounce on everyday UI.** No spring overshoot on menus, dialogs, toggles or tabs. Save bounce for
  rare playful moments.
- **MO-14 Do not tween while held.** While the user drags a slider, sheet or card, it follows the pointer
  1:1 with no easing. Animate only after release.
- **MO-15 Make exits about 20 % shorter** than the matching entrance.
- **MO-16 Overlap old and new states.** Crossfade between states so there is never an empty frame.
- **MO-17 Masks for reveals and colour changes.** Reveal content or swap a colour with a moving `clip-path`
  mask rather than a plain fade.
- **MO-18 Crossfade icons with blur.** When an icon changes (menu to close, copy to check), crossfade with a
  small blur (about 2–4 px) and a slight scale.
- **MO-19 Rubber band past bounds.** Dragging or scrolling past an edge moves with increasing resistance,
  then springs back.
- **MO-20 Reuse the same `layoutId`.** In Framer Motion (or a FLIP technique elsewhere), give the same
  element the same `layoutId` in both places so it travels between them: a card into its detail view, the
  underline of the active tab.
