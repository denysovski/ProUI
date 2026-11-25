// Renders the same sounds as ui-sounds.js into 16-bit mono WAV files (44.1 kHz) for projects that prefer files.
// node sounds/make-wav.mjs  →  sounds/wav/*.wav
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const out = fileURLToPath(new URL('./wav/', import.meta.url));
mkdirSync(out, { recursive: true });
const SR = 44100;
const env = (t, dur, attack) => (t < attack ? t / attack : Math.exp(-6 * (t - attack) / (dur - attack)));
const osc = (type, ph) => {
  const x = ph % 1;
  if (type === 'triangle') return 4 * Math.abs(x - .5) - 1;
  if (type === 'square') return x < .5 ? 1 : -1;
  return Math.sin(2 * Math.PI * x);
};
const render = (parts, total) => {
  const n = Math.ceil(SR * total), buf = new Float32Array(n);
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) * 2 - 1;
  for (const p of parts) {
    let ph = 0; let lp = 0;
    const start = Math.floor((p.delay || 0) * SR), len = Math.floor(p.dur * SR);
    for (let i = 0; i < len && start + i < n; i++) {
      const t = i / SR, k = t / p.dur;
      const f = p.to ? p.freq * Math.pow(p.to / p.freq, k) : p.freq;
      ph += f / SR;
      let s;
      if (p.noise) { const r = rnd(); lp += (r - lp) * Math.min(1, f / SR * 6); s = (r - lp) * .8; } else s = osc(p.type || 'sine', ph);
      buf[start + i] += s * env(t, p.dur, p.attack || .004) * (p.gain || 1) * .5;
    }
  }
  return buf;
};
const wav = (name, buf) => {
  const b = Buffer.alloc(44 + buf.length * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + buf.length * 2, 4); b.write('WAVEfmt ', 8); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34);
  b.write('data', 36); b.writeUInt32LE(buf.length * 2, 40);
  buf.forEach((v, i) => b.writeInt16LE(Math.max(-1, Math.min(1, v)) * 32767 | 0, 44 + i * 2));
  writeFileSync(out + name + '.wav', b);
};
const S = {
  tick: [[{ freq: 2400, dur: .035, type: 'triangle', gain: .35 }], .06],
  soft: [[{ freq: 880, dur: .09, gain: .25, attack: .012 }], .12],
  tap: [[{ freq: 320, to: 180, dur: .07, type: 'triangle', gain: .9 }, { freq: 1600, dur: .03, gain: .2 }], .1],
  'toggle-on': [[{ freq: 660, dur: .07, gain: .5 }, { freq: 990, dur: .09, gain: .45, delay: .06 }], .17],
  'toggle-off': [[{ freq: 990, dur: .07, gain: .45 }, { freq: 660, dur: .09, gain: .5, delay: .06 }], .17],
  whoosh: [[{ noise: true, freq: 400, to: 2600, dur: .32, gain: .5, attack: .1 }], .34],
  pop: [[{ freq: 520, to: 1040, dur: .09, gain: .8, attack: .002 }], .11],
  success: [[{ freq: 784, dur: .12, gain: .5 }, { freq: 1175, dur: .18, gain: .45, delay: .08 }], .28],
  error: [[{ freq: 220, dur: .14, type: 'square', gain: .18 }, { freq: 196, dur: .2, type: 'square', gain: .18, delay: .1 }], .32],
};
for (const [name, [parts, total]] of Object.entries(S)) wav(name, render(parts, total));
console.log('wrote', Object.keys(S).length, 'files to', out);
