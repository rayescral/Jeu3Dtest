// Bruitages synthétisés avec la Web Audio API : aucun fichier son à charger.
export function createAudio() {
  let ctx = null;
  let muted = false;

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, dur, { type = 'square', vol = 0.15, slide = null, delay = 0 } = {}) {
    if (muted || !ensure()) return;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }

  function noise(dur, { vol = 0.2, freq = 1200, delay = 0 } = {}) {
    if (muted || !ensure()) return;
    const t = ctx.currentTime + delay;
    const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(ctx.destination);
    src.start(t);
  }

  return {
    unlock: ensure,
    toggle() { muted = !muted; return muted; },
    get muted() { return muted; },
    swing: () => noise(0.18, { vol: 0.25, freq: 2500 }),
    hit: () => { tone(220, 0.12, { slide: 80, vol: 0.2 }); noise(0.1, { vol: 0.2, freq: 800 }); },
    kill: () => { tone(500, 0.08, { type: 'triangle' }); tone(300, 0.2, { type: 'triangle', slide: 60, delay: 0.06 }); },
    hurt: () => tone(160, 0.3, { type: 'sawtooth', slide: 60, vol: 0.2 }),
    jump: () => tone(300, 0.15, { type: 'triangle', slide: 600, vol: 0.12 }),
    pickup: () => [660, 880, 1320].forEach((f, i) => tone(f, 0.18, { type: 'triangle', vol: 0.15, delay: i * 0.07 })),
    heal: () => [520, 780].forEach((f, i) => tone(f, 0.2, { type: 'sine', vol: 0.2, delay: i * 0.08 })),
    stomp: () => { tone(90, 0.4, { type: 'sine', slide: 40, vol: 0.4 }); noise(0.3, { vol: 0.3, freq: 300 }); },
    roar: () => { tone(110, 0.9, { type: 'sawtooth', slide: 55, vol: 0.25 }); tone(165, 0.9, { type: 'sawtooth', slide: 70, vol: 0.15 }); },
    portal: () => [392, 523, 659, 784, 1046].forEach((f, i) => tone(f, 0.35, { type: 'sine', vol: 0.18, delay: i * 0.1 })),
    win: () => [523, 659, 784, 1046, 784, 1046].forEach((f, i) => tone(f, 0.3, { type: 'triangle', vol: 0.18, delay: i * 0.13 })),
    lose: () => [392, 330, 262, 196].forEach((f, i) => tone(f, 0.35, { type: 'triangle', vol: 0.18, delay: i * 0.18 })),
  };
}
