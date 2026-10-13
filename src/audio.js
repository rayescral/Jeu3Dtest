// Sons synthétisés avec la Web Audio API : souffle du vent et bips du variomètre.
export function createAudio() {
  let ctx = null, muted = false;
  let windGain, windFilter, sinkOsc, sinkGain, master;
  let nextBeep = 0;

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.connect(ctx.destination);

    // Bruit rose en boucle filtré : le souffle sur la verrière.
    const len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.997 * b0 + w * 0.029; b1 = 0.985 * b1 + w * 0.032; b2 = 0.95 * b2 + w * 0.048;
      d[i] = (b0 + b1 + b2) * 0.35;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf; src.loop = true;
    windFilter = ctx.createBiquadFilter(); windFilter.type = 'lowpass'; windFilter.frequency.value = 600; windFilter.Q.value = 0.7;
    windGain = ctx.createGain(); windGain.gain.value = 0;
    src.connect(windFilter).connect(windGain).connect(master);
    src.start();

    // Grondement grave quand ça descend fort.
    sinkOsc = ctx.createOscillator(); sinkOsc.type = 'sine'; sinkOsc.frequency.value = 260;
    sinkGain = ctx.createGain(); sinkGain.gain.value = 0;
    sinkOsc.connect(sinkGain).connect(master);
    sinkOsc.start();
  }

  function beep(freq, dur, vol = 0.07, type = 'square') {
    if (!ctx || muted) return;
    const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = type; o.frequency.value = freq;
    f.type = 'lowpass'; f.frequency.value = 2200;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.005);
    g.gain.setValueAtTime(vol, t + dur - 0.01);
    g.gain.linearRampToValueAtTime(0, t + dur);
    o.connect(f).connect(g).connect(master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  return {
    init,
    get muted() { return muted; },
    toggle() {
      muted = !muted;
      if (master) master.gain.value = muted ? 0 : 1;
      return muted;
    },
    // speed en m/s, vario en m/s, flying = faux une fois posé.
    update(speed, vario, flying, stalled) {
      if (!ctx) return;
      const t = ctx.currentTime;
      const k = flying ? Math.min(1, Math.max(0, (speed - 8) / 60)) : 0;
      windGain.gain.setTargetAtTime(0.05 + k * k * 0.5, t, 0.2);
      windFilter.frequency.setTargetAtTime(250 + speed * 22, t, 0.2);
      // Variomètre : bips d'autant plus aigus et rapides que l'on monte vite.
      if (flying && vario > 0.25) {
        if (t >= nextBeep) {
          const period = Math.max(0.12, 0.55 - vario * 0.08);
          beep(520 + Math.min(vario, 6) * 110, period * 0.5);
          nextBeep = t + period;
        }
      } else {
        nextBeep = t;
      }
      const sink = flying && vario < -2.2 ? Math.min(1, (-vario - 2.2) / 3) : 0;
      sinkGain.gain.setTargetAtTime(sink * 0.05, t, 0.15);
      sinkOsc.frequency.setTargetAtTime(240 - sink * 60, t, 0.2);
      if (stalled && flying && Math.random() < 0.08) beep(180, 0.06, 0.08, 'sawtooth');
    },
    chime() { [660, 880, 1100].forEach((f, i) => setTimeout(() => beep(f, 0.16, 0.08, 'triangle'), i * 120)); },
    thud() { beep(90, 0.25, 0.25, 'sine'); },
  };
}
