// Pilot scenes (text-scam cold open, Piper voice)
export default function (A) {
  const { ctx, L, DUR, at, scene, clamp, ease, smooth, pop, hash, poly, circ, ell, rect, rrect, line, limb, text, bg, person, phoneBig, bills, counter, stamp, usMap, pig, MARK, HEAD, SANS } = A;
  const T = i => L[i].start, E = i => L[i].end;


// 1. "Hi... is this Sarah?" — you, on the couch, at night
scene(0, T(2) - 0.15, (t) => {
  bg('#141b3a', '#2a2350'); circ(1650, 170, 70, '#fff3c4', 6); for (let k = 0; k < 14; k++) circ(200 + hash(k) * 1600, 60 + hash(k, 3) * 300, 3, '#fff', 0, 6);
  rect(1460, 80, 360, 300, null, 9); line(1640, 80, 1640, 380, 8); line(1460, 230, 1820, 230, 8);
  rrect(120, 640, 1000, 260, 50, '#5b3f8c'); rrect(90, 540, 120, 330, 40, '#6a4a9e'); rrect(1030, 540, 120, 330, 40, '#6a4a9e'); rrect(140, 470, 960, 150, 40, '#6a4a9e');
  ctx.save(); const g = ctx.createRadialGradient(640, 420, 10, 640, 420, 260); g.addColorStop(0, 'rgba(140,220,255,0.35)'); g.addColorStop(1, 'rgba(140,220,255,0)'); ctx.fillStyle = g; ctx.fillRect(300, 150, 700, 600); ctx.restore();
  const hi = at(0, 'Hi'), reply = T(1), almost = at(1, 'Almost.');
  const surprised = t > hi, mouth = t > almost ? 'smile' : surprised ? 'o' : 'flat';
  person(600, 770, 1.7, { shirt: '#3f8f6a', hair: 'short', sit: true, phone: 1, night: true, gaze: [0.6, 0.4], brow: surprised && t < reply ? 'up' : 'flat', mouth, hands: [[-30, -40], [40, -70]] }, t);
  const z = pop(t, hi - 0.4, 0.45); if (t > hi - 0.4) phoneBig(1330, 560, 0.95 * z, [{ t: hi, side: 'in', text: 'Hi, is this Sarah?' }, { t: reply + 0.6, side: 'out', text: 'Sorry, wrong number' }, { t: almost - 0.15, side: 'in', text: 'Oh no, sorry! You seem really nice though 😊' }], t, { who: '+1 (415) •••-••••' });
  if (t > almost) { const d = ease((t - almost) / 0.5); line(1330, -20, 1330, 70 + d * 120, 5); poly([[1330, 190 + d * 0], [1330, 230], [1300, 250], [1280, 220]].map(([a, b]) => [a, b - (1 - d) * 120]), null, false, 8, '#bbb'); }
});
// 2. $20.9 billion — the whole country's losses, then the biggest category
scene(T(2) - 0.15, T(3) - 0.15, (t) => {
  bg('#ffe9b8', '#ffd27a'); usMap(760, 560, 1.15, '#8fd0a4'); const big = at(2, 'The single'), cat = at(2, 'Crypto'), seven = at(2, 'Seven');
  for (let k = 0; k < 9; k++) { const px = 380 + hash(k, 1) * 760, py = 430 + hash(k, 2) * 280, p = pop(t, T(2) + 0.25 + k * 0.18, 0.3); if (p <= 0) continue; ctx.save(); ctx.translate(px, py); ctx.scale(p, p); rrect(-16, -28, 32, 56, 6, '#222', 4); ctx.restore(); bills(t, T(2) + 0.5 + k * 0.18, px, py, 1480, 760, 3, 1.4, 60); }
  poly([[1360, 640], [1600, 640], [1520, 820], [1440, 820]], '#555'); text('SCAMS', 1480, 700, 54, '#fff', HEAD, 'center', 8);
  counter(20900000000 * smooth((t - T(2) - 0.3) / 2.6), 760, 180, 120); text('LOST BY AMERICANS IN 2025', 760, 290, 52, '#ffd400', HEAD, 'center', 9);
  if (t > big - 0.2) { const p = ease((t - big + 0.2) / 0.5); ctx.save(); ctx.translate(-600 * (1 - p), 0);
    person(280, 960, 1.4, { coat: '#c99a5b', hat: true, hair: 'short', gaze: [1, -0.3], brow: 'angry', mouth: t > seven ? 'open' : 'flat', mag: true, hands: [[-60, -30], [90, -150]] }, t); ctx.restore(); }
  if (t > cat - 0.1) { const p = pop(t, cat - 0.1, 0.4); ctx.save(); ctx.translate(1500, 330); ctx.scale(p, p); rrect(-330, -110, 660, 220, 26, '#d6202a'); text('CRYPTO INVESTMENT SCAMS', 0, -42, 52, '#fff', HEAD, 'center', 0);
    counter(7.2e9 * smooth((t - seven) / 1.4), 0, 40, 92, '$'); ctx.restore(); }
});
// 3. The small-town bank in Kansas, and the $47 million
scene(T(3) - 0.15, at(4, 'Today') - 0.1, (t) => {
  bg('#9fd8ff', '#e8f6ff'); rect(-50, 820, 2020, 300, '#e9c45a', 0); for (let k = 0; k < 60; k++) line(k * 34, 830 + hash(k) * 30, k * 34 + 10, 790 + hash(k) * 30, 5, '#b08a2a');
  const col = at(4, 'His bank'), cracked = t > col; ctx.save(); if (cracked) { ctx.translate(1200 + Math.sin(t * 50) * 4 * clamp(1 - (t - col)), 0); ctx.rotate(0.03 * ease((t - col) / 0.4)); ctx.translate(-1200, 0); }
  poly([[880, 360], [1200, 220], [1520, 360]], '#f1ece0'); rect(900, 360, 600, 470, '#f1ece0'); for (const cx of [960, 1080, 1320, 1440]) rect(cx - 22, 400, 44, 420, '#ddd6c6', 5);
  rrect(1150, 600, 100, 230, 10, '#7a5230'); rect(1040, 380, 320, 64, '#2b4b7a', 6); text('HEARTLAND BANK', 1200, 413, 40, '#fff', HEAD, 'center', 0);
  if (cracked) { poly([[1000, 360], [1040, 480], [1010, 560], [1060, 700]], null, false, 7); poly([[1420, 420], [1380, 520], [1430, 620]], null, false, 7); }
  ctx.restore(); text('SMALL-TOWN KANSAS', 400, 150, 64, '#fff', MARK, 'center', 12);
  const wire = at(4, 'wired');
  person(560, 860, 1.55, { shirt: '#ffffff', tie: true, glasses: true, hair: 'gray', pants: '#3a3a4a', phone: 1, gaze: [0.5, 0.4], brow: t > col ? 'worried' : 'flat', mouth: t > col ? 'frown' : 'smile', sweat: t > col, hands: [[-60, -30], [50, -90]] }, t);
  if (t < wire) phoneBig(790, 470, 0.36 * pop(t, T(3) + 0.8, 0.35), [{ t: T(3) + 1.1, side: 'in', text: 'Hi 👋' }], t);
  if (t > wire) { bills(t, wire, 1250, 650, 2050, 300, 26, 1.8, 160); counter(47e6 * smooth((t - wire) / 1.8), 1450, 150, 110); text('WIRED AWAY', 1450, 250, 50, '#ffd400', HEAD, 'center', 9);
    [['$1.5M', 0.4], ['$10M', 1.1]].forEach(([s, d], k) => { const p = pop(t, wire + d, 0.3); if (p > 0) { ctx.save(); ctx.translate(1720, 470 + k * 110); ctx.scale(p, p); rrect(-110, -40, 220, 80, 14, '#fff'); text(s, 0, 2, 50, '#1e7a3a', HEAD, 'center', 0); ctx.restore(); } }); }
  if (cracked) { const p = pop(t, col + 0.15, 0.4); ctx.save(); ctx.translate(1200, 560); ctx.rotate(-0.12); ctx.scale(p, p); rrect(-150, -50, 300, 100, 10, '#d6202a'); text('CLOSED', 0, 3, 70, '#fff', HEAD, 'center', 0); ctx.restore(); }
});
// 4. 24 years — behind bars
scene(at(4, 'Today') - 0.1, T(5) - 0.15, (t) => {
  bg('#5d6470', '#3a3f48'); const t0 = at(4, 'Today') - 0.1;
  person(960, 900, 1.75, { shirt: '#ff8a1e', pants: '#ff8a1e', glasses: true, hair: 'gray', gaze: [0, 0.6], brow: 'worried', mouth: 'frown', hands: [[-70, -20], [70, -20]] }, t);
  const d = ease((t - t0 - 0.3) / 0.35); for (let k = 0; k < 9; k++) rect(560 + k * 100, -1100 + d * 1100, 26, 1100, '#8a929e', 6); rect(520, -60 + d * 0, 880, 40, '#8a929e', 6);
  stamp('24 YEARS', 960, 300, 170, -0.12, (t - t0 - 0.75) / 0.18); text('FEDERAL PRISON', 960, 470, 56, '#fff', HEAD, 'center', 10);
});
// 5. Who is typing: the scam compound
scene(T(5) - 0.15, T(6) - 0.15, (t) => {
  bg('#121417', '#20252b'); rect(80, 70, 420, 240, '#0b0d10', 8); for (let k = 0; k < 9; k++) line(80 + k * 52, 70, 80 + k * 52 + 26, 310, 4, '#555');
  for (let k = 0; k < 8; k++) poly([[80 + k * 55, 60], [100 + k * 55, 44], [120 + k * 55, 60]], null, false, 5, '#888');
  const pris = at(5, 'prisoners'), traf = at(5, 'Trafficked'), lock = at(5, 'Locked'), forced = at(5, 'forced');
  for (let k = 0; k < 3; k++) { const x = 800 + k * 390, typ = Math.sin(t * 22 + k) > 0;
    const glow = ctx.createRadialGradient(x, 560, 10, x, 560, 240); glow.addColorStop(0, 'rgba(120,200,255,0.25)'); glow.addColorStop(1, 'rgba(120,200,255,0)'); ctx.fillStyle = glow; ctx.fillRect(x - 260, 300, 520, 520);
    person(x, 860, 1.3, { shirt: ['#5a6b7d', '#6d5a7d', '#5a7d6b'][k], hair: k === 1 ? 'long' : 'short', hairCol: '#1d1d1d', skin: ['#e0b48f', '#d9a57c', '#c98f68'][k], gaze: [0, 0.8], brow: 'worried', mouth: 'frown', hands: [[-50, -10 + (typ ? -6 : 0)], [50, -10 + (typ ? 0 : -6)]] }, t + k);
    rect(x - 170, 830, 340, 28, '#3b3b3b', 6); rrect(x - 100, 715, 200, 120, 8, '#222', 6); ctx.fillStyle = '#9fe3ff'; ctx.fillRect(x - 86, 727, 172, 94); }
  person(330, 930, 1.55, { shirt: '#1d1d1d', pants: '#1d1d1d', skin: '#1d1d1d', hat: false, hair: 'short', hairCol: '#000', gaze: [1, 0], brow: 'angry', mouth: 'flat', hands: [[-60, -20], [80, -150]] }, t);
  line(455, 700, 500, 560, 16, '#444');
  if (t > pris) text('THEY ARE VICTIMS TOO', 1160, 150, 72, '#ff5a5a', MARK, 'center', 12);
  if (t > traf) { const p = pop(t, traf, 0.3); ctx.save(); ctx.translate(1160, 270); ctx.scale(p, p); rrect(-300, -42, 600, 84, 10, '#ffd400'); text('TRAFFICKED · PASSPORTS TAKEN', 0, 2, 44, '#111', HEAD, 'center', 0); ctx.restore(); }
  if (t > lock) text('MYANMAR · CAMBODIA', 290, 400, 48, '#fff', HEAD, 'center', 8);
  if (t > forced) phoneBig(1640, 540, 0.42 * pop(t, forced, 0.35), [{ t: forced + 0.3, side: 'out', text: 'Hi, is this Sarah?' }], t, { who: 'Message' });
});
// 6. Pig butchering — the piggy bank fattened, then smashed
scene(T(6) - 0.15, T(7) - 0.15, (t) => {
  bg('#fff6e6', '#ffe1c2'); rect(-50, 760, 2020, 400, '#c98d5a', 0); line(-50, 760, 1970, 760, 8);
  const fat = at(6, 'fattens'), takes = at(6, 'takes'), title = T(6) + 0.1;
  const grow = 0.75 + 0.45 * smooth((t - fat) / 1.2), smashed = t > takes;
  for (let k = 0; k < 10; k++) { const u = (t - fat - k * 0.12) / 0.6; if (u > 0 && u < 1) circ(960 + Math.sin(k) * 30, 200 + u * 340, 22, '#ffd34d', 5, 16); }
  if (!smashed) pig(960, 640, grow, t, t > takes - 0.5 ? 'scared' : 'happy');
  else { const u = (t - takes); for (let k = 0; k < 9; k++) { const a = -Math.PI * (0.1 + hash(k) * 0.8), v = 260 + hash(k, 2) * 260; ctx.save(); ctx.translate(960 + Math.cos(a) * v * u, 640 + Math.sin(a) * v * u + 420 * u * u); ctx.rotate(u * 8 + k); poly([[-50, -30], [40, -40], [55, 25], [-30, 40]], '#ff9db5', true, 6); ctx.restore(); }
    for (let k = 0; k < 16; k++) { const a = -Math.PI * hash(k, 7), v = 240 + hash(k, 8) * 320; circ(960 + Math.cos(a) * v * u, 640 + Math.sin(a) * v * u + 420 * u * u, 20, '#ffd34d', 5, 14); } }
  const hs = takes - 0.35, hu = clamp((t - hs) / 0.35); if (t > hs - 0.4 && t < takes + 0.6) { ctx.save(); ctx.translate(1300, 300); ctx.rotate(-1.4 + 1.5 * ease(hu)); rect(-14, 0, 28, 380, '#8a5a2b'); rect(-90, -40, 180, 80, '#777'); ctx.restore(); }
  if (t > title) { const p = pop(t, title, 0.4); ctx.save(); ctx.translate(960, 170); ctx.scale(p, p); text('PIG BUTCHERING', 0, 0, 130, '#d6202a', MARK, 'center', 16); ctx.restore(); }
});
// 7. The moment to stop replying
scene(T(7) - 0.15, DUR + 1, (t) => {
  bg('#141b3a', '#2a2350'); const stop = at(7, 'stop');
  person(480, 940, 1.6, { shirt: '#3f8f6a', hair: 'short', phone: 1, night: true, gaze: [0.7, 0.2], brow: 'up', mouth: 'o', hands: [[-60, -30], [50, -100]] }, t);
  person(960, 940, 1.5, { coat: '#c99a5b', hat: true, hair: 'short', gaze: [-1, 0], brow: 'angry', mouth: t > stop ? 'open' : 'flat', hands: [[-110, -130], [60, -20]] }, t);
  phoneBig(1480, 540, 0.9, [{ t: T(7) + 0.2, side: 'in', text: 'Hi, is this Sarah?' }], t);
  stamp("DON'T REPLY", 1480, 560, 120, -0.18, (t - stop) / 0.18);
  if (t > E(7) + 0.4) { const p = ease((t - E(7) - 0.4) / 0.5); ctx.fillStyle = `rgba(0,0,0,${0.75 * p})`; ctx.fillRect(0, 0, 1920, 1080); ctx.globalAlpha = p;
    text('THE TEXT THAT STEALS', 960, 440, 110, '#fff', HEAD, 'center', 0); text('$1,000,000', 960, 590, 190, '#ffd400', MARK, 'center', 18); ctx.globalAlpha = 1; }
});


}
