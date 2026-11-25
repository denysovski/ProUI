# Interface sounds (optional)

[Back to ProUI](../README.md) · [Effects](../effects/README.md) · [Demo](demo.html)

**Small sounds for hover, tap and toggles. Off by default and never used unless the user asks for sound.**
Websites are silent by convention: people browse at work, on trains, with music playing, and an unexpected
sound reads as an ad. So sound is an *option* a brief can ask for ("with interface sounds", "a sound
toggle like apekon.com"), not a step of the workflow, and the workflow never adds it on its own.

## When it fits

- Playful products, games, music and audio brands, interactive installations, immersive WebGL pieces.
- A portfolio that is meant to feel like an object (a camera, a radio, a toy).
- Never on forms people need to finish, banking, healthcare, government or documentation.

## Rules

- **Off until the visitor turns it on** with a visible toggle (a speaker icon or "Sound off/on"), usually
  bottom right next to other utilities. The choice is remembered in `localStorage`.
- **Nothing plays on load or on scroll.** Only direct actions: hover with a mouse, focus with the keyboard,
  click, toggle, success, error.
- **Quiet and short:** master volume 0.18, every sound under 350 ms, no music loops.
- **Never the only feedback.** Every sound has a visual state change too (`AX`, `ST`).
- **Throttled:** hover ticks at most every 45 ms, so sweeping across a list is not a machine gun.
- **No sound on touch hover** (there is no hover on touch).

## Use

```html
<script src="sounds/ui-sounds.js" defer></script>
<button data-xsound-toggle aria-pressed="false" data-label-on="Sound on" data-label-off="Sound off">Sound off</button>
<a href="/work" data-xsound="hover tap">Work</a>
<button data-xsound="pop">Add to bag</button>
<script>form.addEventListener('submit', () => window.xsound.play('success'))</script>
```

Change the volume with `<html data-xsound-volume="0.12">`.

## The sounds

| Name | Use | File |
| --- | --- | --- |
| `tick` | hover on links and menu items | [tick.wav](wav/tick.wav) |
| `soft` | hover on large cards and images | [soft.wav](wav/soft.wav) |
| `tap` | click on buttons | [tap.wav](wav/tap.wav) |
| `toggle-on`, `toggle-off` | switches, sound toggle, theme | [on](wav/toggle-on.wav), [off](wav/toggle-off.wav) |
| `whoosh` | opening a menu or panel | [whoosh.wav](wav/whoosh.wav) |
| `pop` | add to cart, like, save | [pop.wav](wav/pop.wav) |
| `success` | form sent, payment done | [success.wav](wav/success.wav) |
| `error` | validation failed | [error.wav](wav/error.wav) |

`ui-sounds.js` synthesises them with the Web Audio API, so nothing is downloaded. The WAV files are the
same sounds rendered by `node sounds/make-wav.mjs`, for frameworks or apps that prefer files (use
`new Audio(url)` with the same rules). All sounds are original and free to use in ProUI projects.
