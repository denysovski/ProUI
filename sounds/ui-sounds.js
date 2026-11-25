// ProUI sounds: small interface sounds synthesised with the Web Audio API. No files to download, about 3 kB.
// OFF BY DEFAULT. Sound plays only after the visitor turns it on with a visible toggle, and the choice is remembered.
//
//   <button data-xsound-toggle aria-pressed="false">Sound off</button>
//   <a href="/work" data-xsound="hover tap">Work</a>      (hover → soft tick, click → tap)
//   <button data-xsound="tap">Add</button>
//   window.xsound.play('success')                          (from your own code)
//
// Sounds: tick, tap, soft, toggle-on, toggle-off, whoosh, pop, success, error.
(() => {
  const KEY = 'xsound';
  let ctx = null, master = null;
  let on = false;
  try { on = localStorage.getItem(KEY) === 'on'; } catch { /* storage blocked: stay off */ }
  const volume = parseFloat(document.documentElement.dataset.xsoundVolume || '0.18');

  const audio = () => {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain(); master.gain.value = volume; master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  const tone = (freq, dur, { type = 'sine', attack = .004, gain = 1, to = null, delay = 0 } = {}) => {
    const a = audio(), t = a.currentTime + delay;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .02);
  };
  const noise = (dur, { from = 800, to = 3000, gain = .5 } = {}) => {
    const a = audio(), t = a.currentTime;
    const buf = a.createBuffer(1, a.sampleRate * dur, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.Q.value = 1.2;
    f.frequency.setValueAtTime(from, t); f.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + dur * .3); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(master); src.start(t);
  };
  const SOUNDS = {
    tick: () => tone(2400, .035, { type: 'triangle', gain: .35 }),
    soft: () => tone(880, .09, { gain: .25, attack: .012 }),
    tap: () => { tone(320, .07, { type: 'triangle', gain: .9, to: 180 }); tone(1600, .03, { gain: .2 }); },
    'toggle-on': () => { tone(660, .07, { gain: .5 }); tone(990, .09, { gain: .45, delay: .06 }); },
    'toggle-off': () => { tone(990, .07, { gain: .45 }); tone(660, .09, { gain: .5, delay: .06 }); },
    whoosh: () => noise(.32, { from: 400, to: 2600, gain: .35 }),
    pop: () => tone(520, .09, { gain: .8, to: 1040, attack: .002 }),
    success: () => { tone(784, .12, { gain: .5 }); tone(1175, .18, { gain: .45, delay: .08 }); },
    error: () => { tone(220, .14, { type: 'square', gain: .18 }); tone(196, .2, { type: 'square', gain: .18, delay: .1 }); },
  };
  let last = 0;
  const play = (name) => {
    if (!on || !SOUNDS[name]) return;
    const now = performance.now();
    if (name === 'tick' && now - last < 45) return; // no machine-gun ticks when sweeping across a list
    last = now;
    try { SOUNDS[name](); } catch { /* audio unavailable */ }
  };
  const set = (value) => {
    on = value;
    try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch { /* ignore */ }
    document.querySelectorAll('[data-xsound-toggle]').forEach((b) => {
      b.setAttribute('aria-pressed', String(on));
      if (b.dataset.labelOn) b.textContent = on ? b.dataset.labelOn : b.dataset.labelOff;
    });
    if (on) play('toggle-on');
  };
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-xsound-toggle]');
    if (t) { if (on) play('toggle-off'); set(!on); return; }
    const el = e.target.closest('[data-xsound]');
    if (el) el.dataset.xsound.split(' ').filter((n) => n !== 'hover').forEach((n) => play(n === 'tap' ? 'tap' : n));
  });
  document.addEventListener('pointerover', (e) => {
    const el = e.target.closest('[data-xsound~="hover"]');
    if (el && !el.contains(e.relatedTarget) && e.pointerType === 'mouse') play(el.dataset.xsoundHover || 'tick');
  });
  document.addEventListener('focusin', (e) => { if (e.target.matches('[data-xsound~="hover"]') && e.target.matches(':focus-visible')) play('tick'); });
  window.xsound = { play, set, get on() { return on; } };
  set(on);
})();
