// Sons synthétisés (Web Audio) : bip du scanner, tiroir-caisse, terminal, échanges de balle,
// pas, brossage, oiseaux. Aucun fichier à charger.
export function createAudio() {
  let ctx = null, master = null, muted = false, brush = null;

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.8;
    master.connect(ctx.destination);
  }

  function tone(freq, dur, { type = 'sine', vol = 0.2, slide = null, delay = 0, attack = 0.005 } = {}) {
    if (!ctx || muted) return;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(master);
    o.start(t); o.stop(t + dur + 0.05);
  }
  function noise(dur, { vol = 0.2, freq = 1500, q = 1, type = 'bandpass', delay = 0 } = {}) {
    if (!ctx || muted) return;
    const t = ctx.currentTime + delay;
    const len = Math.ceil(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = buf; f.type = type; f.frequency.value = freq; f.Q.value = q;
    g.gain.value = vol;
    src.connect(f).connect(g).connect(master);
    src.start(t);
  }

  return {
    init,
    get muted() { return muted; },
    toggle() { muted = !muted; if (master) master.gain.value = muted ? 0 : 0.8; return muted; },
    beep: () => tone(1850, 0.09, { type: 'square', vol: 0.06 }),
    cash: () => { noise(0.12, { vol: 0.25, freq: 3000 }); tone(2400, 0.4, { vol: 0.08, delay: 0.05 }); tone(3200, 0.5, { vol: 0.06, delay: 0.08 }); },
    card: () => { tone(1200, 0.08, { type: 'square', vol: 0.05 }); tone(1600, 0.12, { type: 'square', vol: 0.05, delay: 0.1 }); },
    error: () => { tone(220, 0.18, { type: 'square', vol: 0.06 }); tone(180, 0.22, { type: 'square', vol: 0.06, delay: 0.16 }); },
    click: () => tone(900, 0.03, { type: 'square', vol: 0.03 }),
    coin: () => { tone(2600, 0.08, { type: 'triangle', vol: 0.06 }); tone(3400, 0.1, { type: 'triangle', vol: 0.04, delay: 0.03 }); },
    note: () => noise(0.08, { vol: 0.15, freq: 4000, q: 0.5 }),
    pick: () => noise(0.12, { vol: 0.18, freq: 700, q: 0.7 }),
    place: () => { noise(0.05, { vol: 0.2, freq: 1200 }); tone(320, 0.06, { vol: 0.05 }); },
    order: () => { tone(660, 0.1, { vol: 0.08 }); tone(880, 0.14, { vol: 0.08, delay: 0.1 }); },
    notify: () => { tone(880, 0.12, { vol: 0.07 }); tone(1320, 0.18, { vol: 0.06, delay: 0.1 }); },
    level: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.25, { type: 'triangle', vol: 0.1, delay: i * 0.11 })),
    build: () => { noise(0.25, { vol: 0.25, freq: 400 }); [392, 523, 659].forEach((f, i) => tone(f, 0.3, { type: 'triangle', vol: 0.08, delay: 0.2 + i * 0.1 })); },
    // Frappe de balle, atténuée avec la distance.
    ball(dist) {
      const v = Math.max(0, 1 - dist / 45) ** 2 * 0.35;
      if (v < 0.01) return;
      noise(0.05, { vol: v, freq: 1100, q: 2 });
      tone(420, 0.07, { vol: v * 0.4, slide: 260 });
    },
    step: () => noise(0.06, { vol: 0.035, freq: 500, q: 0.8 }),
    bird() {
      const base = 2400 + Math.random() * 1600;
      for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) tone(base * (1 + Math.random() * 0.2), 0.08, { vol: 0.02, slide: base * 1.3, delay: i * 0.12 });
    },
    brushing(on) {
      if (!ctx || muted) { if (brush) { brush.stop(); brush = null; } return; }
      if (on && !brush) {
        const len = ctx.sampleRate;
        const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (0.5 + 0.5 * Math.sin(i / len * Math.PI * 6) ** 2);
        const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900;
        const g = ctx.createGain(); g.gain.value = 0.12;
        src.connect(f).connect(g).connect(master);
        src.start();
        brush = src;
      } else if (!on && brush) { brush.stop(); brush = null; }
    },
  };
}
