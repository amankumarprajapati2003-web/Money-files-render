// The Money Files — Video 4: The Text That Steals $1,000,000 (illustrated character style)
// Every scene is anchored to a sentence of the narration (substring lookup), so re-voicing only needs re-alignment.
export default function (A) {
  const { ctx, DUR, line_, atp, scene, cue, clamp, ease, smooth, pop, hash, poly, circ, ell, rect, rrect, line, limb, text, bg, person, phoneBig, bills, counter, stamp, usMap, pig, MARK, HEAD, SANS, TYPE, INK } = A;
  const S = sub => line_(sub).start, E = sub => line_(sub).end, P = (sub, ph) => atp(sub, ph);
  const RED = '#d6202a', YEL = '#ffd400', GRN = '#2fa35a';
  const sc = (a, b, fn) => { scene(a, b, fn); cue(a + 0.02, 'whoosh'); };
  // ---------- characters ----------
  const YOU = (o = {}) => ({ shirt: '#3f8f6a', hair: 'short', ...o });
  const SARAH = (o = {}) => ({ shirt: '#c2185b', hair: 'long', hairCol: '#2b1a12', skin: '#f3c9a6', mouth: 'smile', ...o });
  const DET = (o = {}) => ({ coat: '#c99a5b', hat: true, hair: 'short', ...o });
  const BANKER = (o = {}) => ({ shirt: '#ffffff', tie: true, glasses: true, hair: 'gray', pants: '#3a3a4a', ...o });
  const DENNIS = (o = {}) => ({ shirt: '#3d5a99', hair: 'short', hairCol: '#5a4030', skin: '#e9b48a', ...o });
  const KAIMI = (o = {}) => ({ shirt: '#f08a24', hair: 'short', hairCol: '#1d1d1d', skin: '#c98f68', glasses: true, ...o });
  // ---------- props ----------
  const tag = (x, y, s, size = 50, fill = YEL, col = '#111', rot = 0, p = 1) => { if (p <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p, p); ctx.font = `${size}px ${HEAD}`; const w = ctx.measureText(s).width + size * 0.8; rrect(-w / 2, -size * 0.65, w, size * 1.3, 12, fill, 6); text(s, 0, 2, size, col, HEAD, 'center', 0); ctx.restore(); };
  const ptag = (t, t0, x, y, s, size, fill, col, rot) => { if (t >= t0) { tag(x, y, s, size, fill, col, rot, pop(t, t0, 0.3)); } };
  const night = () => { bg('#141b3a', '#2a2350'); for (let k = 0; k < 14; k++) circ(200 + hash(k) * 1600, 60 + hash(k, 3) * 300, 3, '#fff', 0, 6); };
  const room = () => { bg('#f6efe3', '#efe2cc'); rect(-50, 820, 2020, 300, '#caa077', 0); line(-50, 820, 1970, 820, 8); };
  const desk = (x, y, w = 520) => { rect(x - w / 2, y, w, 30, '#8a5a3b'); rect(x - w / 2 + 20, y + 30, 20, 200, '#7a4a2b', 5); rect(x + w / 2 - 40, y + 30, 20, 200, '#7a4a2b', 5); };
  const coin = (x, y, r = 34, sym = '$') => { circ(x, y, r, '#ffd34d', 6, 22); text(sym, x, y + 2, r * 1.2, '#a8740b', HEAD, 'center', 0); };
  const btc = (x, y, r = 40) => { circ(x, y, r, '#f7931a', 6, 22); text('B', x, y + 3, r * 1.35, '#fff', HEAD, 'center', 0); line(x - r * 0.12, y - r * 0.85, x - r * 0.12, y - r * 0.6, 5, '#fff'); line(x + r * 0.15, y - r * 0.85, x + r * 0.15, y - r * 0.6, 5, '#fff'); };
  const car = (x, y, s = 1, col = '#e53935') => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); poly([[-120, 0], [-110, -40], [-50, -50], [-20, -85], [60, -85], [90, -45], [125, -35], [125, 0]], col); circ(-65, 2, 26, '#222'); circ(75, 2, 26, '#222'); poly([[-10, -78], [52, -78], [74, -48], [-30, -48]], '#bfe6ff', true, 5); ctx.restore(); };
  const plane = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ell(0, 0, 130, 28, '#e8eef7'); poly([[-20, -10], [30, -10], [-30, -95], [-55, -95]], '#9ab7e0', true, 5); poly([[-20, 10], [30, 10], [-30, 95], [-55, 95]], '#9ab7e0', true, 5); poly([[-110, -5], [-100, -55], [-80, -55], [-85, -5]], '#9ab7e0', true, 5); for (let k = 0; k < 5; k++) circ(-40 + k * 30, -4, 6, '#5a7fb5', 3, 8); ctx.restore(); };
  const dinner = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ell(0, 30, 120, 26, '#fff'); rect(-12, -60, 24, 70, '#fff8e1', 5); poly([[0, -60], [8, -82], [0, -96], [-8, -82]], '#ffb300', true, 4); ell(-70, 10, 40, 14, '#ddd', 4); ell(70, 10, 40, 14, '#ddd', 4); line(-10, 60, -40, 140, 7); line(10, 60, 40, 140, 7); ctx.restore(); };
  const moneyBag = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ell(0, 20, 90, 80, '#c8a165'); poly([[-30, -55], [30, -55], [45, -90], [-45, -90]], '#c8a165', true, 6); text('$', 0, 26, 90, '#5a3d1e', HEAD, 'center', 0); ctx.restore(); };
  const bigX = (x, y, s, p) => { if (p <= 0) return; const q = clamp(p); poly([[x - s, y - s], [x - s + 2 * s * Math.min(1, q * 2), y - s + 2 * s * Math.min(1, q * 2)]], null, false, 22, RED); if (q > 0.5) poly([[x + s, y - s], [x + s - 2 * s * (q - 0.5) * 2, y - s + 2 * s * (q - 0.5) * 2]], null, false, 22, RED); };
  const check = (x, y, s, p) => { if (p <= 0) return; poly([[x - s, y], [x - s * 0.3, y + s * 0.7], [x + s, y - s * 0.8]].slice(0, p > 0.5 ? 3 : 2), null, false, 20, GRN); };
  const church = (x, y, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); rect(-90, -120, 180, 160, '#f4ede0'); poly([[-100, -120], [0, -200], [100, -120]], '#c0392b'); rect(-20, -300, 40, 110, '#f4ede0'); line(0, -360, 0, -300, 7); line(-20, -340, 20, -340, 7); rrect(-25, -40, 50, 80, 20, '#7a5230', 5); ctx.restore(); };
  const jar = (x, y, s, label, fill) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); rrect(-80, -120, 160, 220, 30, 'rgba(200,235,255,0.6)'); rect(-90, -150, 180, 34, '#9b7a55'); ctx.save(); ctx.beginPath(); ctx.rect(-78, 100 - 210 * fill, 156, 210 * fill); ctx.clip(); for (let k = 0; k < 9; k++) coin(-40 + (k % 3) * 40, 70 - Math.floor(k / 3) * 50, 22); ctx.restore(); tag(0, 0, label, 30, '#fff', '#111'); ctx.restore(); };
  const calendar = (x, y, day, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); rrect(-120, -130, 240, 260, 18, '#fff'); rect(-120, -130, 240, 70, RED); text('DAY', 0, -95, 40, '#fff', HEAD, 'center', 0); text(String(day), 0, 30, 130, '#111', HEAD, 'center', 0); ctx.restore(); };
  const invoice = (x, y, rot, label, amount, p) => { if (p <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p, p); rect(-170, -210, 340, 420, '#fff'); text(label, 0, -150, 64, RED, HEAD, 'center', 0); for (let k = 0; k < 4; k++) line(-130, -80 + k * 40, 130 - hash(k) * 80, -80 + k * 40, 5, '#bbb'); text(amount, 0, 120, 70, '#111', MARK, 'center', 0); ctx.restore(); };
  const appPhone = (x, y, s, t, o) => { // generic fake trading app
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); rrect(-230, -420, 460, 840, 60, '#1b1b1f'); rrect(-205, -390, 410, 780, 36, '#0f1724', 4);
    text('CRYPTO PRO+', 0, -330, 40, '#7ee0a3', HEAD, 'center', 0); text('Your balance', 0, -260, 30, '#9fb0c8', SANS, 'center', 0);
    counter(o.bal, 0, -195, o.big || 72, '$', '', o.frozen ? '#9fd0ff' : '#ffffff');
    const pts = []; for (let k = 0; k <= 30; k++) { const u = k / 30; pts.push([-170 + 340 * u, 40 - u * 150 * (o.up ?? 1) + Math.sin(k * 1.7) * 14]); }
    poly(pts.slice(0, Math.max(2, Math.floor(31 * clamp(o.chart ?? 1)))), null, false, 7, o.frozen ? '#4a6080' : '#2fd47a');
    if (o.ticker) { ctx.save(); ctx.beginPath(); ctx.rect(-200, 110, 400, 50); ctx.clip(); const off = (t * 120) % 600; ['BTC +4.2%', 'ETH +3.1%', 'USDT 1.00', 'SOL +6.8%'].forEach((s2, k) => text(s2, 220 - off + k * 170, 136, 30, '#7ee0a3', SANS, 'left', 0)); ctx.restore(); }
    rrect(-170, 200, 340, 80, 20, o.frozen ? '#3a4a60' : '#2fd47a'); text(o.btn || 'WITHDRAW', 0, 242, 44, o.frozen ? '#9fb0c8' : '#06331a', HEAD, 'center', 0);
    if (o.support) { rrect(-170, 300, 340, 60, 16, '#22324a', 4); text('💬 Live support: online', 0, 330, 26, '#cfe1ff', SANS, 'center', 0); }
    if (o.frozen) { ctx.globalAlpha = 0.85; rrect(-205, -390, 410, 780, 36, 'rgba(160,220,255,0.35)', 0); ctx.globalAlpha = 1; for (let k = 0; k < 6; k++) poly([[-200 + k * 70, -390], [-170 + k * 70, -330], [-190 + k * 70, -300]], '#e8f7ff', true, 4); }
    ctx.restore(); };
  const chapter = (t0, t1, n, title) => sc(t0, t1, (t) => {
    bg('#1d2333', '#2b3550'); const p = ease((t - t0) / 0.45); ctx.save(); ctx.translate(0, (1 - p) * 700);
    rrect(400, 230, 400, 90, 18, '#d4a85c'); rrect(380, 290, 1160, 560, 26, '#e0b56a'); text('CASE FILE 04', 600, 278, 44, '#5a3d1e', TYPE, 'center', 0);
    text(`CHAPTER ${n}`, 960, 430, 70, '#5a3d1e', HEAD, 'center', 0); rrect(520, 490, 880, 170, 14, '#fffaf0'); text(title, 960, 578, title.length > 18 ? 76 : 96, '#141414', MARK, 'center', 0); ctx.restore();
    person(1650, 980, 1.3, DET({ gaze: [-1, -0.3], brow: 'angry', mouth: 'flat', hands: [[-110, -150], [60, -20]] }), t);
    stamp(`CH. ${n}`, 1260, 360, 80, -0.2, (t - t0 - 0.7) / 0.16); });
  // ======================= COLD OPEN =======================
  sc(0, S('In twenty twenty-five') - 0.15, (t) => {
    night(); rect(1460, 80, 360, 300, null, 9); line(1640, 80, 1640, 380, 8); line(1460, 230, 1820, 230, 8); circ(1650, 170, 60, '#fff3c4', 6);
    rrect(120, 640, 1000, 260, 50, '#5b3f8c'); rrect(90, 540, 120, 330, 40, '#6a4a9e'); rrect(1030, 540, 120, 330, 40, '#6a4a9e'); rrect(140, 470, 960, 150, 40, '#6a4a9e');
    const g = ctx.createRadialGradient(620, 420, 10, 620, 420, 260); g.addColorStop(0, 'rgba(140,220,255,0.35)'); g.addColorStop(1, 'rgba(140,220,255,0)'); ctx.fillStyle = g; ctx.fillRect(300, 150, 700, 600);
    const hi = S('"Hi, is this Sarah?"'), reply = S('Wrong number.'), almost = S('Almost.');
    person(600, 770, 1.7, YOU({ sit: true, phone: 1, night: true, gaze: [0.6, 0.4], brow: t > hi && t < reply ? 'up' : 'flat', mouth: t > almost ? 'smile' : t > hi ? 'o' : 'flat', hands: [[-30, -40], [40, -70]] }), t);
    if (t > hi - 0.4) phoneBig(1330, 560, 0.95 * pop(t, hi - 0.4, 0.45), [{ t: hi, side: 'in', text: 'Hi, is this Sarah?' }, { t: reply + 0.3, side: 'out', text: 'Sorry, wrong number' }, { t: almost - 0.1, side: 'in', text: 'Oh no, sorry! You seem really nice though 😊' }], t, { who: '+1 (415) •••-••••' });
    if (t > almost) { const d = ease((t - almost) / 0.5); line(1330, -20, 1330, -50 + d * 240, 5); poly([[1330, 190], [1330, 230], [1300, 250], [1280, 220]].map(([a, b]) => [a, b - (1 - d) * 240]), null, false, 8, '#bbb'); }
  });
  cue(S('"Hi, is this Sarah?"'), 'pop', 0.6); cue(S('Wrong number.') + 0.3, 'pop', 0.5); cue(S('Almost.') - 0.1, 'pop', 0.6);
  sc(S('In twenty twenty-five') - 0.15, S('One of those messages') - 0.15, (t) => {
    bg('#ffe9b8', '#ffd27a'); usMap(760, 560, 1.15, '#8fd0a4'); const t0 = S('In twenty twenty-five'), big = S('The single biggest'), cat = S('Crypto investment scams.'), seven = S('Seven point two');
    for (let k = 0; k < 9; k++) { const px = 380 + hash(k, 1) * 760, py = 430 + hash(k, 2) * 280, p = pop(t, t0 + 0.25 + k * 0.2, 0.3); if (p <= 0) continue; ctx.save(); ctx.translate(px, py); ctx.scale(p, p); rrect(-16, -28, 32, 56, 6, '#222', 4); ctx.restore(); bills(t, t0 + 0.5 + k * 0.2, px, py, 1480, 760, 3, 1.4, 60); }
    poly([[1360, 640], [1600, 640], [1520, 820], [1440, 820]], '#555'); text('SCAMS', 1480, 700, 54, '#fff', HEAD, 'center', 8);
    counter(20.9e9 * smooth((t - t0 - 0.3) / 3), 760, 180, 120); text('LOST BY AMERICANS IN 2025', 760, 290, 52, YEL, HEAD, 'center', 9);
    if (t > big - 0.2) { const p = ease((t - big + 0.2) / 0.5); ctx.save(); ctx.translate(-600 * (1 - p), 0); person(280, 960, 1.4, DET({ gaze: [1, -0.3], brow: 'angry', mouth: t > seven ? 'open' : 'flat', mag: true, hands: [[-60, -30], [90, -150]] }), t); ctx.restore(); }
    if (t > cat - 0.1) { const p = pop(t, cat - 0.1, 0.4); ctx.save(); ctx.translate(1500, 330); ctx.scale(p, p); rrect(-330, -110, 660, 220, 26, RED); text('CRYPTO INVESTMENT SCAMS', 0, -42, 52, '#fff', HEAD, 'center', 0); counter(7.2e9 * smooth((t - seven) / 1.4), 0, 40, 92); ctx.restore(); }
    text('SOURCE: FBI INTERNET CRIME REPORT', 1700, 1040, 26, '#5a3d1e', TYPE, 'right', 0);
  });
  cue(S('Crypto investment scams.') - 0.1, 'hit', 0.6);
  const bankScene = (t, o) => {
    bg('#9fd8ff', '#e8f6ff'); rect(-50, 820, 2020, 300, '#e9c45a', 0); for (let k = 0; k < 60; k++) line(k * 34, 830 + hash(k) * 30, k * 34 + 10, 790 + hash(k) * 30, 5, '#b08a2a');
    const cr = o.cracked; ctx.save(); if (cr > 0) { ctx.translate(1200 + Math.sin(t * 50) * 4 * clamp(1 - cr), 0); ctx.rotate(0.03 * ease(cr / 0.4)); ctx.translate(-1200, 0); }
    poly([[880, 360], [1200, 220], [1520, 360]], '#f1ece0'); rect(900, 360, 600, 470, '#f1ece0'); for (const cx of [960, 1080, 1320, 1440]) rect(cx - 22, 400, 44, 420, '#ddd6c6', 5);
    rrect(1150, 600, 100, 230, 10, '#7a5230'); rect(1000, 380, 400, 64, '#2b4b7a', 6); text('HEARTLAND TRI-STATE BANK', 1200, 413, 36, '#fff', HEAD, 'center', 0);
    if (cr > 0) { poly([[1000, 360], [1040, 480], [1010, 560], [1060, 700]], null, false, 7); poly([[1420, 420], [1380, 520], [1430, 620]], null, false, 7); }
    ctx.restore(); };
  sc(S('One of those messages') - 0.15, S('Today he') - 0.1, (t) => {
    const col = S('His bank collapsed.'), wire = P('Within months', 'wired'); bankScene(t, { cracked: t > col ? t - col : 0 });
    text('SMALL-TOWN KANSAS', 400, 150, 64, '#fff', MARK, 'center', 12);
    person(560, 860, 1.55, BANKER({ phone: 1, gaze: [0.5, 0.4], brow: t > col ? 'worried' : 'flat', mouth: t > col ? 'frown' : 'smile', sweat: t > col, hands: [[-60, -30], [50, -90]] }), t);
    if (t < wire) phoneBig(790, 470, 0.36 * pop(t, S('One of those messages') + 0.8, 0.35), [{ t: S('One of those messages') + 1.1, side: 'in', text: 'Hi 👋' }], t);
    if (t > wire) { bills(t, wire, 1250, 650, 2050, 300, 26, 1.8, 160); counter(47e6 * smooth((t - wire) / 1.8), 1450, 150, 110); text('WIRED AWAY', 1450, 250, 50, YEL, HEAD, 'center', 9); }
    ptag(t, col + 0.15, 1200, 560, 'CLOSED', 70, RED, '#fff', -0.12);
  });
  cue(P('Within months', 'wired'), 'ticks'); cue(S('His bank collapsed.'), 'boom', 0.8);
  const prison = (t, t0, who = BANKER, label = 'FEDERAL PRISON', st = '24 YEARS') => {
    bg('#5d6470', '#3a3f48'); person(960, 900, 1.75, who({ shirt: '#ff8a1e', pants: '#ff8a1e', gaze: [0, 0.6], brow: 'worried', mouth: 'frown', hands: [[-70, -20], [70, -20]] }), t);
    const d = ease((t - t0 - 0.3) / 0.35); for (let k = 0; k < 9; k++) rect(560 + k * 100, -1100 + d * 1100, 26, 1100, '#8a929e', 6);
    stamp(st, 960, 300, 170, -0.12, (t - t0 - 0.75) / 0.18); text(label, 960, 470, 56, '#fff', HEAD, 'center', 10); };
  sc(S('Today he') - 0.1, S('And the people typing') - 0.15, (t) => prison(t, S('Today he') - 0.1));
  cue(S('Today he') + 0.2, 'hit', 0.9); cue(S('Today he') + 0.65, 'hit', 1.0);
  const compound = (t, o = {}) => {
    bg('#121417', '#20252b'); rect(80, 70, 420, 240, '#0b0d10', 8); for (let k = 0; k < 9; k++) line(80 + k * 52, 70, 80 + k * 52 + 26, 310, 4, '#555');
    for (let k = 0; k < 8; k++) poly([[80 + k * 55, 60], [100 + k * 55, 44], [120 + k * 55, 60]], null, false, 5, '#888');
    for (let k = 0; k < 3; k++) { const x = 800 + k * 390, typ = Math.sin(t * 22 + k) > 0;
      const glow = ctx.createRadialGradient(x, 560, 10, x, 560, 240); glow.addColorStop(0, 'rgba(120,200,255,0.25)'); glow.addColorStop(1, 'rgba(120,200,255,0)'); ctx.fillStyle = glow; ctx.fillRect(x - 260, 300, 520, 520);
      person(x, 860, 1.3, { shirt: ['#5a6b7d', '#6d5a7d', '#5a7d6b'][k], hair: k === 1 ? 'long' : 'short', hairCol: '#1d1d1d', skin: ['#e0b48f', '#d9a57c', '#c98f68'][k], gaze: [0, 0.8], brow: 'worried', mouth: 'frown', hands: [[-50, -10 + (typ ? -6 : 0)], [50, -10 + (typ ? 0 : -6)]] }, t + k);
      rect(x - 170, 830, 340, 28, '#3b3b3b', 6); rrect(x - 100, 715, 200, 120, 8, '#222', 6); ctx.fillStyle = '#9fe3ff'; ctx.fillRect(x - 86, 727, 172, 94); }
    if (o.guard !== false) { person(330, 930, 1.55, { shirt: '#1d1d1d', pants: '#1d1d1d', skin: '#1d1d1d', hair: 'short', hairCol: '#000', gaze: [1, 0], brow: 'angry', mouth: 'flat', hands: [[-60, -20], [80, -150]] }, t); line(455, 700, 500, 560, 16, '#444'); } };
  sc(S('And the people typing') - 0.15, S('This is the story') - 0.15, (t) => {
    compound(t); const pris = S('Many of them were prisoners'), traf = S('Trafficked'), forced = P('Trafficked', 'forced');
    if (t > pris) text('THEY ARE VICTIMS TOO', 1160, 150, 72, '#ff5a5a', MARK, 'center', 12);
    ptag(t, traf, 1160, 270, 'TRAFFICKED · PASSPORTS TAKEN', 44); if (t > traf + 1) text('MYANMAR · CAMBODIA', 290, 400, 48, '#fff', HEAD, 'center', 8);
    if (t > forced) phoneBig(1640, 540, 0.42 * pop(t, forced, 0.35), [{ t: forced + 0.3, side: 'out', text: 'Hi, is this Sarah?' }], t, { who: 'Message' });
  });
  cue(S('And the people typing') - 0.1, 'braam', 0.45);
  const pigScene = (t, fat, takes, title, t0) => {
    bg('#fff6e6', '#ffe1c2'); rect(-50, 760, 2020, 400, '#c98d5a', 0); line(-50, 760, 1970, 760, 8); const grow = 0.75 + 0.45 * smooth((t - fat) / 1.2), smashed = t > takes;
    for (let k = 0; k < 10; k++) { const u = (t - fat - k * 0.12) / 0.6; if (u > 0 && u < 1) circ(960 + Math.sin(k) * 30, 200 + u * 340, 22, '#ffd34d', 5, 16); }
    if (!smashed) pig(960, 640, grow, t, t > takes - 0.5 ? 'scared' : 'happy');
    else { const u = t - takes; for (let k = 0; k < 9; k++) { const a = -Math.PI * (0.1 + hash(k) * 0.8), v = 260 + hash(k, 2) * 260; ctx.save(); ctx.translate(960 + Math.cos(a) * v * u, 640 + Math.sin(a) * v * u + 420 * u * u); ctx.rotate(u * 8 + k); poly([[-50, -30], [40, -40], [55, 25], [-30, 40]], '#ff9db5', true, 6); ctx.restore(); }
      for (let k = 0; k < 16; k++) { const a = -Math.PI * hash(k, 7), v = 240 + hash(k, 8) * 320; circ(960 + Math.cos(a) * v * u, 640 + Math.sin(a) * v * u + 420 * u * u, 20, '#ffd34d', 5, 14); } }
    const hs = takes - 0.35, hu = clamp((t - hs) / 0.35); if (t > hs - 0.4 && t < takes + 0.6) { ctx.save(); ctx.translate(1300, 300); ctx.rotate(-1.4 + 1.5 * ease(hu)); rect(-14, 0, 28, 380, '#8a5a2b'); rect(-90, -40, 180, 80, '#777'); ctx.restore(); }
    if (title && t > t0) { const p = pop(t, t0, 0.4); ctx.save(); ctx.translate(960, 170); ctx.scale(p, p); text('PIG BUTCHERING', 0, 0, 130, RED, MARK, 'center', 16); ctx.restore(); } };
  sc(S('This is the story') - 0.15, S('And by the end') - 0.15, (t) => pigScene(t, P('The scam that fattens', 'fattens'), P('The scam that fattens', 'takes'), true, S('This is the story') + 0.1));
  cue(P('The scam that fattens', 'takes') - 1.4, 'riser', P('The scam that fattens', 'takes')); cue(P('The scam that fattens', 'takes'), 'hit', 1.0); cue(P('The scam that fattens', 'takes'), 'boom', 0.7);
  sc(S('And by the end') - 0.15, S('Chapter one.') - 0.1, (t) => {
    night(); const stop = P('And by the end', 'stop');
    person(480, 940, 1.6, YOU({ phone: 1, night: true, gaze: [0.7, 0.2], brow: 'up', mouth: 'o', hands: [[-60, -30], [50, -100]] }), t);
    person(960, 940, 1.5, DET({ gaze: [-1, 0], brow: 'angry', mouth: t > stop ? 'open' : 'flat', hands: [[-110, -130], [60, -20]] }), t);
    phoneBig(1480, 540, 0.9, [{ t: S('And by the end') + 0.2, side: 'in', text: 'Hi, is this Sarah?' }], t); stamp("DON'T REPLY", 1480, 560, 120, -0.18, (t - stop) / 0.18);
  });
  cue(P('And by the end', 'stop'), 'hit', 1.0);
  // ======================= CHAPTER 1 =======================
  chapter(S('Chapter one.') - 0.1, S('It usually begins') - 0.15, 1, 'WRONG NUMBER'); cue(S('Chapter one.') + 0.6, 'hit', 0.8);
  sc(S('It usually begins') - 0.15, S('You reply: sorry') - 0.15, (t) => {
    room(); person(380, 960, 1.5, YOU({ phone: 1, gaze: [0.8, -0.3], brow: 'up', mouth: 'flat', hands: [[-60, -30], [50, -100]] }), t);
    const apps = [['TEXT', '#2fb84f'], ['INSTAGRAM', '#d6297a'], ['FACEBOOK', '#3b5ec2'], ['WHATSAPP', '#25b35a'], ['LINKEDIN', '#1f6fb2'], ['DATING APP', '#ff5a6e']];
    const ts = [S('A text.'), P('A message on', 'Instagram'), P('A message on', 'Facebook'), P('A message on', 'WhatsApp'), P('A message on', 'LinkedIn'), P('A message on', 'dating')];
    apps.forEach(([n, c], k) => { if (t < ts[k]) return; const p = pop(t, ts[k], 0.3), x = 900 + (k % 3) * 340, y = 300 + Math.floor(k / 3) * 360; ctx.save(); ctx.translate(x, y); ctx.scale(p, p); rrect(-110, -110, 220, 220, 50, c); poly([[-50, -30], [50, -30], [50, 30], [0, 30], [-30, 55], [-25, 30], [-50, 30]], '#fff', true, 5); text(n, 0, 150, 44, '#111', HEAD, 'center', 0); ctx.restore(); });
    text('A STRANGER', 960, 110, 80, RED, MARK, 'center', 12);
  });
  ['A text.'].forEach(s => cue(S(s), 'pop', 0.5)); ['Instagram', 'Facebook', 'WhatsApp', 'LinkedIn', 'dating'].forEach(w => cue(P('A message on', w), 'pop', 0.45));
  sc(S('You reply: sorry') - 0.15, S("They're friendly.") - 0.15, (t) => {
    night(); person(520, 960, 1.6, YOU({ phone: 1, night: true, gaze: [0.6, 0.2], brow: 'flat', mouth: t > S('They apologize') ? 'smile' : 'flat', hands: [[-60, -30], [50, -100]] }), t);
    const a = S('They apologize'); phoneBig(1300, 540, 0.95, [{ t: S('You reply: sorry') - 0.6, side: 'in', text: 'Hi, is this Sarah?' }, { t: S('You reply: sorry') + 0.5, side: 'out', text: 'Sorry, wrong number' }, { t: a, side: 'in', text: "Oh, I'm so sorry!" }, { t: a + 1.0, side: 'in', text: "Where are you from? 😊" }, { t: a + 1.8, side: 'out', text: 'Ohio, you?' }], t, { who: 'Sarah?' });
  });
  cue(S('You reply: sorry') + 0.5, 'pop', 0.5); cue(S('They apologize'), 'pop', 0.5); cue(S('They apologize') + 1.0, 'pop', 0.5);
  sc(S("They're friendly.") - 0.15, S('They never ask for money.') - 0.15, (t) => {
    bg('#ffe7ef', '#ffd0e0'); person(420, 960, 1.6, SARAH({ gaze: [0.5, 0], brow: 'up', mouth: 'grin', hands: [[-80, -60], [90, -120]] }), t);
    ptag(t, S("They're friendly."), 420, 160, 'FRIENDLY', 56, '#fff', '#111', -0.05); ptag(t, S('Successful.'), 420, 260, 'SUCCESSFUL', 56, '#fff', '#111', 0.04); ptag(t, S('Good-looking.'), 420, 360, 'GOOD-LOOKING', 56, '#fff', '#111', -0.03);
    const ph = [[P('Their photos', 'sports'), (x, y) => car(x, y + 40, 1.1)], [P('Their photos', 'rooftop'), (x, y) => dinner(x, y, 1)], [P('Their photos', 'first-class'), (x, y) => plane(x, y, 1)]];
    ph.forEach(([t0, draw], k) => { if (t < t0) return; const p = pop(t, t0, 0.35), x = 1000 + k * 330, y = 560 + (k % 2) * 60; ctx.save(); ctx.translate(x, y); ctx.rotate((k - 1) * 0.08); ctx.scale(p, p); rect(-150, -170, 300, 340, '#fff'); rect(-130, -150, 260, 240, '#bfe2ff', 4); draw(0, -30); ctx.restore(); });
  });
  ['Successful.', 'Good-looking.'].forEach(s => cue(S(s), 'pop', 0.5)); ['sports', 'rooftop', 'first-class'].forEach(w => cue(P('Their photos', w), 'pop', 0.5));
  sc(S('They never ask for money.') - 0.15, S('Instead they ask') - 0.15, (t) => {
    room(); moneyBag(960, 520, 1.6); bigX(960, 520, 170, (t - S('They never ask') - 0.3) / 0.5); if (t > S('Not at first.')) text('...NOT AT FIRST', 960, 880, 90, RED, MARK, 'center', 14);
  });
  cue(S('Not at first.'), 'hit', 0.6);
  sc(S('Instead they ask') - 0.15, S('The scammers have a name') - 0.15, (t) => {
    night(); const t0 = S('Instead they ask'), t1 = S('The scammers have a name'); calendar(1600, 300, 1 + Math.floor(27 * clamp((t - S('Every day')) / 1.4)), 0.9);
    person(520, 960, 1.6, YOU({ phone: 1, night: true, gaze: [0.6, 0.2], brow: 'flat', mouth: 'smile', hands: [[-60, -30], [50, -100]] }), t);
    const qs = [[S('Instead they ask'), 'How was your day? 😊'], [S('Your job.'), 'What do you do for work?'], [S('Your divorce.'), "I'm sorry about the divorce..."], [S('Your debts.'), 'Money stress? I can help 💛']];
    phoneBig(1100, 560, 0.85, qs.map(([tt, s2]) => ({ t: tt, side: 'in', text: s2 })), t, { who: 'Sarah' });
  });
  ['Your job.', 'Your divorce.', 'Your debts.'].forEach(s => cue(S(s), 'pop', 0.5)); cue(S('Every day'), 'ticks');
  sc(S('The scammers have a name') - 0.15, S('Chapter two.') - 0.1, (t) => {
    room(); const sha = S("In Chinese, it's called"), plate = S('The pig-butchering plate.'), fat = S('First, you fatten'), sl = S('Then, you slaughter');
    if (t < sha) { ctx.save(); ctx.translate(960, 500); ctx.rotate(-0.04); rrect(-300, -260, 600, 520, 20, '#3a2a5a'); text('THE', 0, -120, 80, YEL, HEAD, 'center', 0); text('PLAYBOOK', 0, 0, 130, '#fff', MARK, 'center', 0); text('TOP SECRET', 0, 140, 50, RED, HEAD, 'center', 0); ctx.restore(); }
    else { text('"SHA ZHU PAN"', 960, 170, 110, RED, MARK, 'center', 14); if (t > plate) { ell(960, 720, 420, 90, '#fff'); ell(960, 715, 320, 60, '#eee', 5); line(450, 600, 470, 820, 12, '#999'); line(1470, 600, 1450, 820, 12, '#999'); }
      pig(960, 560, (0.6 + 0.5 * smooth((t - fat) / 1.0)) * (t > plate ? 1 : 0.0001), t, t > sl ? 'scared' : 'happy'); if (t > plate) text('= THE PIG-BUTCHERING PLATE', 960, 300, 64, '#111', HEAD, 'center', 0);
      if (t > sl) stamp('THEN THE SLAUGHTER', 960, 930, 90, -0.06, (t - sl) / 0.18); }
  });
  cue(S('Then, you slaughter'), 'hit', 0.9);
  // ======================= CHAPTER 2 =======================
  chapter(S('Chapter two.') - 0.1, S('Once they have') - 0.15, 2, 'THE FATTENING'); cue(S('Chapter two.') + 0.6, 'hit', 0.8);
  sc(S('Once they have') - 0.15, S('The app looks real.') - 0.15, (t) => {
    bg('#ffe7ef', '#ffd0e0'); const un = S('An uncle'), pl = S('A platform with steady'), te = S("They'll teach you");
    person(420, 960, 1.6, SARAH({ gaze: [1, -0.2], brow: 'up', mouth: t > te ? 'grin' : 'smile', hands: [[-60, -40], [80, -170]] }), t);
    text('🤫 A SECRET...', 420, 150, 70, '#111', MARK, 'center', 0);
    if (t > un) { const p = ease((t - un) / 0.5); ctx.save(); ctx.translate((1 - p) * 500, 0); person(1100, 960, 1.55, { shirt: '#222', tie: false, hair: 'gray', glasses: true, pants: '#222', gaze: [-0.6, 0], mouth: 'grin', brow: 'flat', hands: [[-60, -30], [70, -150]] }, t); circ(1100, 770, 18, YEL, 5, 12); btc(1170, 620, 46); text('"UNCLE"', 1100, 1030, 54, '#fff', HEAD, 'center', 9); ctx.restore(); }
    if (t > pl) { const p = pop(t, pl, 0.4); ctx.save(); ctx.translate(1600, 380); ctx.scale(p, p); rrect(-220, -160, 440, 320, 20, '#0f1724'); const pts = []; for (let k = 0; k <= 20; k++) pts.push([-180 + 18 * k, 100 - k * 10 + Math.sin(k) * 8]); poly(pts, null, false, 8, '#2fd47a'); text('+20%', 0, -100, 60, '#2fd47a', HEAD, 'center', 0); ctx.restore(); }
    ptag(t, te, 1600, 620, 'STEP BY STEP', 54);
  });
  cue(S('An uncle'), 'whoosh'); cue(S('A platform with steady'), 'pop', 0.5); cue(S("They'll teach you"), 'pop', 0.5);
  sc(S('The app looks real.') - 0.15, S('A small business owner') - 0.15, (t) => {
    bg('#11182a', '#1f2b48'); const sm = S('You start small.'), nx = S('The next day');
    const bal = t < sm ? 0 : t < nx ? 500 * smooth((t - sm) / 0.8) : 500 + 112 * smooth((t - nx) / 0.8);
    appPhone(1300, 540, 1.05, t, { bal, chart: (t - S('Live charts.')) / 1.0, ticker: t > S('Price tickers.'), support: t > S('A customer support'), btn: 'DEPOSIT' });
    person(500, 960, 1.6, YOU({ phone: 1, night: true, gaze: [0.8, -0.2], brow: 'up', mouth: t > nx ? 'grin' : 'o', hands: [[-60, -30], [50, -100]] }), t);
    ptag(t, S('Live charts.'), 500, 200, 'LIVE CHARTS', 50, '#fff'); ptag(t, S('Price tickers.'), 500, 300, 'PRICE TICKERS', 50, '#fff'); ptag(t, S('A customer support'), 500, 400, 'SUPPORT CHAT', 50, '#fff');
    if (t > nx) text('+22% 📈', 1300, 70, 70, '#2fd47a', MARK, 'center', 10);
  });
  ['Live charts.', 'Price tickers.', 'A customer support', 'The next day'].forEach(s => cue(S(s), 'pop', 0.5)); cue(S('You start small.'), 'ticks');
  sc(S('A small business owner') - 0.15, S('On the screen, his trades') - 0.15, (t) => {
    room(); const ex = S('She said she was'), sep = S('He was going through'), hrs = S('She talked with him');
    rect(80, 330, 520, 440, '#fff7e8'); rect(80, 330, 520, 80, '#3d5a99'); text("DENNIS'S SHOP", 340, 372, 46, '#fff', HEAD, 'center', 0); text('MARYLAND', 340, 280, 60, '#111', MARK, 'center', 8);
    person(500, 970, 1.5, DENNIS({ phone: 1, gaze: [0.7, 0], brow: t > sep && t < hrs ? 'worried' : 'flat', mouth: t > hrs ? 'smile' : t > sep ? 'frown' : 'flat', hands: [[-60, -30], [50, -100]] }), t);
    text('"DENNIS" (CNBC PSEUDONYM)', 500, 1040, 32, '#5a3d1e', TYPE, 'center', 0);
    if (t > ex - 0.4) { const p = pop(t, ex - 0.4, 0.4); ctx.save(); ctx.translate(1450, 0); ctx.scale(p, 1); person(0, 960, 1.5, SARAH({ shirt: '#222', gaze: [-1, 0], mouth: 'grin', hands: [[-80, -40], [70, -60]] }), t); ctx.restore(); ptag(t, ex, 1450, 230, 'WEALTHY EXECUTIVE?', 50, '#fff'); }
    if (t > sep) { ctx.save(); ctx.translate(950, 300); poly([[-90, 0], [0, -80], [90, 0]], '#c0392b'); rect(-70, 0, 140, 110, '#f4ede0'); poly([[0, -80], [-12, 0], [12, 50], [-6, 110]], null, false, 8, RED); ctx.restore(); }
    if (t > hrs) { const a = (t - hrs) * 6; circ(960, 640, 90, '#fff'); line(960, 640, 960 + Math.cos(a) * 70, 640 + Math.sin(a) * 70, 8); line(960, 640, 960 + Math.cos(a / 12) * 50, 640 + Math.sin(a / 12) * 50, 10); text('HOURS. EVERY DAY.', 960, 790, 52, '#111', HEAD, 'center', 0); }
  });
  cue(S('She said she was') - 0.4, 'whoosh'); cue(S('She talked with him'), 'ticks');
  sc(S('On the screen, his trades') - 0.15, S('Chapter three.') - 0.1, (t) => {
    bg('#11182a', '#1f2b48'); const p20 = S('Around twenty'), cl = S('His balance climbed'), wd = S('Then he tried');
    const bal = 30000 + 1170000 * smooth((t - S('On the screen')) / ((cl + 1.5) - S('On the screen')));
    appPhone(1300, 540, 1.05, t, { bal: t > wd ? 1243000 : bal, chart: 1, ticker: true, btn: 'WITHDRAW' });
    person(500, 960, 1.6, DENNIS({ phone: 1, night: true, gaze: [0.8, -0.2], brow: 'up', mouth: 'grin', hands: [[-60, -30], [50, -100]] }), t);
    for (let k = 0; k < 4; k++) ptag(t, p20 + k * 0.3, 760, 200 + k * 110, '+20%', 56, '#2fd47a', '#06331a', (k % 2 ? 0.06 : -0.06));
    if (t > wd) { const q = clamp((t - wd - 0.4) / 0.3); ctx.save(); ctx.translate(1300, 782); ctx.scale(1 - 0.1 * Math.sin(q * Math.PI), 1 - 0.1 * Math.sin(q * Math.PI)); ctx.restore(); person(1500, 1000, 0.01, YOU(), t); }
  });
  cue(S('Around twenty'), 'pop', 0.5); cue(S('His balance climbed'), 'ticks'); cue(S('Then he tried') + 0.5, 'pop', 0.6);
  // ======================= CHAPTER 3 =======================
  chapter(S('Chapter three.') - 0.1, S('The account froze.') - 0.15, 3, 'THE SLAUGHTER'); cue(S('Chapter three.') + 0.6, 'hit', 0.8);
  sc(S('The account froze.') - 0.15, S("That's the moment") - 0.15, (t) => {
    bg('#0d1626', '#172a44'); const fz = S('The account froze.'), pay = S('To unlock it');
    appPhone(760, 540, 1.05, t, { bal: 1243000, chart: 1, frozen: t > fz + 0.2, btn: t > fz + 0.2 ? 'FROZEN' : 'WITHDRAW' });
    stamp('FROZEN', 760, 300, 120, -0.15, (t - fz - 0.3) / 0.16, '#3a8fe0');
    invoice(1400, 520, 0.06, 'UNLOCK FEE', '$180,000', pop(t, pay + 0.3, 0.4));
  });
  cue(S('The account froze.') + 0.3, 'hit', 0.9); cue(S('To unlock it') + 0.3, 'pop', 0.6);
  sc(S("That's the moment") - 0.15, S('None of the money') - 0.15, (t) => {
    room(); person(380, 960, 1.6, DENNIS({ gaze: [1, -0.2], brow: 'worried', mouth: 'frown', sweat: true, hands: [[-70, -30], [70, -30]] }), t);
    invoice(900, 500, -0.08, 'TAX', '$64,000', pop(t, S('A tax.'), 0.35)); invoice(1260, 520, 0.05, 'FEE', '$38,500', pop(t, S('A fee.'), 0.35)); invoice(1620, 500, -0.04, 'PENALTY', '$51,200', pop(t, S('A penalty.'), 0.35));
    if (t > S('Pay a little more')) text('"PAY A LITTLE MORE..."', 1260, 900, 80, RED, MARK, 'center', 12);
    text('EXAMPLE AMOUNTS', 1820, 1040, 26, '#5a3d1e', TYPE, 'right', 0);
  });
  ['A tax.', 'A fee.', 'A penalty.'].forEach(s => cue(S(s), 'hit', 0.5));
  sc(S('None of the money') - 0.15, S('And then came the cruelest') - 0.15, (t) => {
    bg('#0d1626', '#172a44'); const fk = S('The platform was fake.'), nm = S('The profits were just'), lo = S('Dennis lost around');
    if (t < fk) appPhone(760, 540, 1.05, t, { bal: 1243000, chart: 1, frozen: true, btn: 'FROZEN' });
    else { const u = clamp((t - fk) / 0.6); for (let k = 0; k < 8; k++) { ctx.save(); ctx.translate(760 + (hash(k) - 0.5) * 500 * u, 540 + (hash(k, 2) - 0.5) * 600 * u + 300 * u * u); ctx.rotate(u * (hash(k, 3) - 0.5) * 4); rrect(-90, -110, 180, 220, 10, '#1b1b1f'); ctx.restore(); } rrect(560, 300, 400, 480, 20, '#222'); text('EMPTY', 760, 540, 90, '#666', HEAD, 'center', 0); }
    if (t > nm) text('JUST NUMBERS ON A SCREEN', 760, 140, 70, '#fff', MARK, 'center', 12);
    if (t > lo) { person(1460, 960, 1.6, DENNIS({ gaze: [0, 0.6], brow: 'worried', mouth: 'frown', hands: [[-70, -20], [70, -20]] }), t); counter(500000 * smooth((t - lo) / 1.0), 1460, 260, 110, '-$', '', '#ff5a5a'); text('LOST', 1460, 360, 56, '#fff', HEAD, 'center', 8); }
  });
  cue(S('The platform was fake.'), 'boom', 0.8); cue(S('Dennis lost around'), 'ticks');
  sc(S('And then came the cruelest') - 0.15, S('A teacher in Hawaii') - 0.15, (t) => {
    room(); const fm = S('A "recovery firm"'), fee = S('For a fee.'), same = S('It was the same kind'), more = S('And he lost even more.');
    person(400, 960, 1.6, DENNIS({ phone: 1, gaze: [1, -0.2], brow: t > same ? 'worried' : 'up', mouth: t > same ? 'frown' : 'o', hands: [[-60, -30], [50, -100]] }), t);
    if (t > fm) { phoneBig(1200, 540, 0.9 * pop(t, fm, 0.4), [{ t: fm + 0.3, side: 'in', text: 'RECOVERY EXPERTS ✅ We can get your money back!' }, { t: fee, side: 'in', text: 'Small fee first: $42,000' }], t, { who: 'Fund Recovery Ltd' }); }
    if (t > same) stamp('SAME SCAM', 1200, 520, 120, -0.15, (t - same) / 0.18); if (t > more) text('HE LOST EVEN MORE', 960, 120, 84, RED, MARK, 'center', 14);
  });
  cue(S('A "recovery firm"') + 0.3, 'pop', 0.6); cue(S('For a fee.'), 'pop', 0.6); cue(S('It was the same kind'), 'hit', 0.9);
  sc(S('A teacher in Hawaii') - 0.15, S('Chapter four.') - 0.1, (t) => {
    bg('#7fd6ff', '#fff3c4'); rect(-50, 800, 2020, 300, '#f6dd9b', 0); ell(1650, 820, 500, 60, '#4ab3e0', 0);
    ctx.save(); ctx.translate(1700, 800); line(0, 0, -40, -380, 26, '#8a5a2b'); for (let k = 0; k < 5; k++) { const a = -2.6 + k * 0.5; poly([[-40, -380], [-40 + Math.cos(a) * 180, -380 + Math.sin(a) * 120 + 40]], null, false, 26, '#2f9e4f'); } ctx.restore();
    rect(120, 250, 520, 330, '#2e4a3b'); text('A + B = ?', 380, 420, 70, '#fff', MARK, 'center', 0); text('HAWAII', 380, 180, 70, '#111', MARK, 'center', 0);
    person(500, 960, 1.55, KAIMI({ phone: 1, gaze: [0.8, -0.1], brow: t > S('Months later') ? 'worried' : 'up', mouth: t > S('Months later') ? 'frown' : 'smile', hands: [[-60, -30], [50, -100]] }), t);
    text('"KAIMI" (CNBC PSEUDONYM) · TEACHER', 500, 1040, 30, '#5a3d1e', TYPE, 'center', 0);
    if (t < S('Months later')) phoneBig(1150, 520, 0.8 * pop(t, S('A teacher in Hawaii') + 1.5, 0.4), [{ t: S('A teacher in Hawaii') + 2, side: 'in', text: 'Haha cute monkey pic 🐒' }, { t: S('A teacher in Hawaii') + 3, side: 'in', text: 'Want to learn trading? 📈' }], t, { who: '"Mike" · Instagram' });
    else { counter(120000 * smooth((t - S('Months later')) / 1.2), 1150, 350, 120, '-$', '+', '#ff3b3b'); invoice(1150, 720, 0.05, 'FEES', 'TO FREE HIS OWN MONEY', pop(t, S('Months later') + 1.2, 0.4)); }
  });
  cue(S('A teacher in Hawaii') + 2, 'pop', 0.5); cue(S('Months later'), 'ticks');
  // ======================= CHAPTER 4 =======================
  chapter(S('Chapter four.') - 0.1, S('You might be thinking') - 0.15, 4, 'THE BANKER'); cue(S('Chapter four.') + 0.6, 'hit', 0.8);
  sc(S('You might be thinking') - 0.15, S('He was the CEO') - 0.15, (t) => {
    room(); const sh = S('Shan Hanes probably');
    person(600, 960, 1.7, YOU({ gaze: [0, 0], brow: 'flat', mouth: 'smile', hands: [[-90, -120 + Math.sin(t * 8) * 10], [70, -20]] }), t);
    text('"NOT ME."', 600, 200, 100, '#111', MARK, 'center', 0);
    if (t > sh) { const p = ease((t - sh) / 0.45); ctx.save(); ctx.translate((1 - p) * 700, 0); person(1350, 960, 1.6, BANKER({ gaze: [-1, 0], brow: 'flat', mouth: 'smile', hands: [[-90, -120], [70, -20]] }), t); text('SHAN HANES', 1350, 200, 90, RED, MARK, 'center', 12); ctx.restore(); }
  });
  sc(S('He was the CEO') - 0.15, S('In late twenty twenty-two') - 0.15, (t) => {
    bankScene(t, { cracked: 0 }); ctx.save(); ctx.translate(300, 470); rect(-10, 0, 20, 360, '#7a5a3a'); rrect(-200, -150, 400, 170, 12, '#2f7a3a'); text('ELKHART, KANSAS', 0, -100, 50, '#fff', HEAD, 'center', 0); text('POP. ~2,000', 0, -40, 44, '#fff', HEAD, 'center', 0); ctx.restore();
    person(660, 900, 1.45, BANKER({ gaze: [0.5, 0], mouth: 'grin', hands: [[-60, -30], [100, -170 + Math.sin(t * 7) * 12]] }), t);
    ptag(t, S('A banker.'), 660, 220, 'CEO', 60, '#fff'); ptag(t, S('A pillar of the community.'), 1200, 140, 'A PILLAR OF THE COMMUNITY', 54);
    if (t > S('A town of about')) for (let k = 0; k < 3; k++) person(1600 + k * 110, 960, 0.9, { shirt: ['#e57373', '#64b5f6', '#81c784'][k], hair: k === 1 ? 'long' : 'short', mouth: 'smile', gaze: [-1, 0], hands: [[-60, -30], [60, -120]] }, t + k);
  });
  cue(S('A pillar of the community.'), 'pop', 0.6);
  sc(S('In late twenty twenty-two') - 0.15, S('Then he started wiring') - 0.15, (t) => {
    room(); const own = S('First, he used'), ch = S('Then, according to prosecutors'), cl = S('Ten thousand'), co = S('Sixty thousand');
    person(320, 960, 1.55, BANKER({ phone: 1, gaze: [0.8, -0.2], brow: t > ch ? 'worried' : 'flat', mouth: t > ch ? 'frown' : 'smile', sweat: t > co, hands: [[-60, -30], [50, -100]] }), t);
    if (t < own) phoneBig(1100, 520, 0.85, [{ t: S('In late twenty') + 0.6, side: 'in', text: 'Hi! Want to see my crypto strategy? 📈' }], t, { who: 'WhatsApp' });
    else { ptag(t, own, 760, 250, 'HIS OWN SAVINGS', 50, '#fff'); if (t > ch) { church(900, 760, 0.9); ptag(t, ch, 900, 820, 'CHURCH  $40K', 48); bills(t, ch, 900, 600, 380, 700, 6, 1.2, 80); }
      if (t > cl) { ptag(t, cl, 1300, 520, 'INVESTMENT CLUB  $10K', 48); bills(t, cl, 1300, 520, 380, 700, 4, 1.2, 80); }
      if (t > co) { jar(1640, 620, 1.1, "DAUGHTER'S COLLEGE FUND", 1 - smooth((t - co) / 1.5)); ptag(t, co, 1640, 860, '$60K', 56); bills(t, co, 1640, 600, 380, 700, 6, 1.2, 80); } }
    text('ACCORDING TO PROSECUTORS', 1820, 1040, 26, '#5a3d1e', TYPE, 'right', 0);
  });
  cue(S('Then, according to prosecutors'), 'hit', 0.6); cue(S('Sixty thousand'), 'hit', 0.7);
  sc(S('Then he started wiring') - 0.15, S('Forty-seven million dollars.') - 0.1, (t) => {
    bankScene(t, { cracked: 0 }); const el = S('Eleven wires'), w1 = S('One for one point five'), w2 = S('One for ten million.');
    person(560, 860, 1.55, BANKER({ phone: 1, gaze: [0.5, 0.4], brow: 'worried', mouth: 'frown', sweat: true, hands: [[-60, -30], [50, -90]] }), t);
    bills(t, S('Then he started wiring'), 1250, 650, 2050, 300, 30, 2.2, 160);
    if (t > el) { const n = 1 + Math.floor(10 * clamp((t - el) / 1.6)); text(`WIRE ${n} OF 11`, 1500, 150, 90, '#fff', HEAD, 'center', 12); text('IN ~8 WEEKS', 1500, 250, 50, YEL, HEAD, 'center', 8); }
    ptag(t, w1, 1720, 470, '$1,500,000', 60, '#fff', '#1e7a3a'); ptag(t, w2, 1720, 600, '$10,000,000', 70, '#fff', '#1e7a3a');
  });
  cue(S('Eleven wires'), 'ticks'); cue(S('One for one point five'), 'pop', 0.6); cue(S('One for ten million.'), 'hit', 0.8);
  sc(S('Forty-seven million dollars.') - 0.1, S('In July twenty twenty-three') - 0.15, (t) => {
    bg('#101318', '#1d232c'); const g = S('Gone.'), nv = S('He never made');
    if (t < g) counter(47e6 * smooth((t - S('Forty-seven million')) / 0.9), 960, 480, 220, '$', '', YEL);
    else { const u = clamp((t - g) / 0.5); ctx.globalAlpha = 1 - u; counter(47e6, 960, 480, 220, '$', '', YEL); ctx.globalAlpha = 1; for (let k = 0; k < 20; k++) circ(960 + (hash(k) - 0.5) * 1400 * u, 480 + (hash(k, 4) - 0.5) * 600 * u, 10 * (1 - u) + 1, '#ffd34d', 0, 8); text('GONE.', 960, 480, 200, '#fff', MARK, 'center', 16); }
    if (t > nv) stamp('PROFIT: $0', 960, 800, 130, -0.08, (t - nv) / 0.18);
  });
  cue(S('Gone.'), 'boom', 0.9); cue(S('He never made'), 'hit', 0.9);
  sc(S('In July twenty twenty-three') - 0.15, S('In August twenty twenty-four') - 0.15, (t) => {
    const sd = P('In July', 'shut'), dp = S('Depositors were'), shh = S('Shareholders were'); bankScene(t, { cracked: t > sd ? t - sd : 0 }); ptag(t, sd + 0.15, 1200, 560, 'CLOSED BY REGULATORS', 58, RED, '#fff', -0.08);
    if (t > dp) { for (let k = 0; k < 3; k++) person(200 + k * 150, 960, 0.95, { shirt: ['#e57373', '#64b5f6', '#81c784'][k], mouth: 'smile', gaze: [1, 0] }, t + k); ptag(t, dp, 350, 300, 'DEPOSITORS: PROTECTED ✔', 46, '#2fa35a', '#fff'); }
    if (t > shh) { for (let k = 0; k < 2; k++) person(1650 + k * 160, 960, 0.95, { shirt: '#455a64', tie: true, mouth: 'frown', brow: 'worried', gaze: [-1, 0.5], hands: [[-70, 0], [70, 0]] }, t + k); ptag(t, shh, 1720, 300, 'SHAREHOLDERS: WIPED OUT', 46, RED, '#fff'); }
  });
  cue(P('In July', 'shut'), 'boom', 0.8);
  sc(S('In August twenty twenty-four') - 0.15, S('Chapter five.') - 0.1, (t) => {
    const t0 = S('In August twenty twenty-four'); prison(t, t0 + 1.2, BANKER, 'SENTENCED AUGUST 2024', '24+ YEARS');
    if (t < t0 + 1.4) { const q = clamp((t - t0) / 0.8); ctx.save(); ctx.translate(1500, 360); ctx.rotate(-0.9 + 0.9 * ease(q)); rect(-20, 0, 40, 200, '#7a4a2b'); rrect(-90, -50, 180, 80, 16, '#8a5a3b'); ctx.restore(); }
    if (t > S('Longer than prosecutors')) text('LONGER THAN PROSECUTORS ASKED', 960, 960, 64, YEL, HEAD, 'center', 10);
  });
  cue(S('In August twenty twenty-four') + 0.8, 'hit', 1.0); cue(S('In August twenty twenty-four') + 1.5, 'hit', 0.9); cue(S('In August twenty twenty-four') + 1.95, 'hit', 1.0);
  // ======================= CHAPTER 5 =======================
  chapter(S('Chapter five.') - 0.1, S('So who is on the other end') - 0.15, 5, "WHO'S REALLY TYPING"); cue(S('Chapter five.') + 0.6, 'hit', 0.8);
  sc(S('So who is on the other end') - 0.15, S('Passports taken.') - 0.15, (t) => {
    const of = S('Often, not a con artist'), yp = S('A young person');
    if (t < yp) { bg('#ffe9b8', '#ffd27a'); rect(560, 300, 800, 520, '#fff7e8'); poly([[520, 300], [960, 120], [1400, 300]], '#c0392b'); for (let k = 0; k < 4; k++) rect(620 + k * 190, 420, 110, 150, '#bfe6ff', 6); text('A CON ARTIST IN A MANSION?', 960, 980, 72, '#111', MARK, 'center', 0); if (t > of) bigX(960, 520, 360, (t - of - 0.3) / 0.5); }
    else { bg('#e8f0ff', '#cfdcff'); rrect(1100, 260, 640, 420, 20, '#fff'); text('JOBS ABROAD!', 1420, 340, 70, RED, HEAD, 'center', 0); text('Customer service · Tech', 1420, 430, 40, '#111', SANS, 'center', 0); text('$2,000/month · Free housing', 1420, 500, 40, '#111', SANS, 'center', 0); text('Apply now ✈', 1420, 600, 44, '#2f80ff', SANS, 'center', 0);
      person(560, 960, 1.6, { shirt: '#7e57c2', hair: 'short', skin: '#d9a57c', gaze: [1, -0.2], brow: 'up', mouth: 'grin', hands: [[-60, -30], [90, -150]] }, t);
      if (t > P('A young person', 'driven')) { const u = ease((t - P('A young person', 'driven')) / 1.2); ctx.save(); ctx.translate(-200 + 2400 * u, 0); rrect(-180, 820, 360, 140, 30, '#555'); circ(-110, 960, 36, '#222'); circ(110, 960, 36, '#222'); rect(-150, 840, 120, 60, '#9fd0ff', 5); ctx.restore(); text('→ ACROSS THE BORDER', 1300, 1020, 54, '#111', HEAD, 'center', 0); } }
  });
  cue(S('Often, not a con artist') + 0.3, 'hit', 0.6); cue(S('A young person'), 'whoosh');
  sc(S('Passports taken.') - 0.15, S('One of the most notorious') - 0.15, (t) => {
    compound(t); ptag(t, S('Passports taken.'), 1160, 160, 'PASSPORTS TAKEN', 52); ptag(t, S('Phones taken.'), 1160, 260, 'PHONES TAKEN', 52); ptag(t, S('Daily quotas.'), 1160, 360, 'DAILY QUOTAS', 52);
    if (t > S('Former workers')) text('17-HOUR DAYS · BEATINGS · THREATS', 960, 1030, 50, '#ff8a8a', HEAD, 'center', 8);
    if (t > S('The only way out')) invoice(1650, 560, 0.08, 'CONTRACT TERMINATION FEE', 'RANSOM', pop(t, S('The only way out'), 0.4));
  });
  ['Passports taken.', 'Phones taken.', 'Daily quotas.'].forEach(s => cue(S(s), 'hit', 0.5)); cue(S('The only way out'), 'pop', 0.6);
  sc(S('One of the most notorious') - 0.15, S('Satellite internet.') - 0.15, (t) => {
    bg('#cfe8ff', '#eaf5ff'); const rd = S('When Myanmar');
    poly([[300, 150], [700, 120], [820, 420], [700, 760], [560, 980], [420, 700], [320, 420]], '#c9e3b0'); text('MYANMAR', 520, 380, 60, '#2f5a2a', HEAD, 'center', 0);
    poly([[820, 420], [1150, 380], [1250, 620], [1100, 980], [900, 900], [700, 760]], '#f3d9a6'); text('THAILAND', 1000, 620, 60, '#7a5a2a', HEAD, 'center', 0);
    poly([[1250, 620], [1500, 600], [1580, 820], [1350, 900], [1100, 980]], '#f6c6c6'); text('CAMBODIA', 1360, 760, 48, '#7a2a2a', HEAD, 'center', 0);
    poly([[820, 420], [760, 560], [700, 760]], null, false, 8, RED); circ(800, 500, 22, RED, 6, 14); ptag(t, S('One of the most notorious') + 1.0, 560, 520, 'K K PARK', 56, RED, '#fff');
    if (t > rd) { ptag(t, rd, 1500, 200, 'RAID · OCTOBER 2025', 54); counter(2000 * smooth((t - rd - 1) / 1.2), 1500, 340, 90, '', '+ PEOPLE', '#111'); ptag(t, P('When Myanmar', 'thirty'), 1500, 480, '30+ STARLINK TERMINALS', 50, '#fff'); }
  });
  cue(S('When Myanmar'), 'hit', 0.7);
  sc(S('Satellite internet.') - 0.15, S('Chapter six.') - 0.1, (t) => {
    bg('#0b1022', '#1c2448'); for (let k = 0; k < 30; k++) circ(hash(k) * 1920, hash(k, 2) * 600, 3, '#fff', 0, 6);
    ctx.save(); ctx.translate(1500 - (t * 40) % 400, 160); rect(-60, -20, 120, 40, '#9aa5b8'); rect(-200, -14, 130, 28, '#3a5aa0', 4); rect(70, -14, 130, 28, '#3a5aa0', 4); ctx.restore();
    rect(260, 640, 300, 30, '#ccc'); poly([[300, 640], [520, 640], [480, 560], [340, 560]], '#eee'); line(410, 560, 410, 450, 6, '#eee');
    for (let k = 0; k < 6; k++) { const u = ((t * 0.5 + k / 6) % 1); circ(410 + (1500 - 410) * u, 450 - Math.sin(u * Math.PI) * 300, 10, '#7ee0ff', 0, 10); }
    usMap(1500, 820, 0.55, '#8fd0a4'); for (let k = 0; k < 5; k++) { const u = ((t * 0.6 + k / 5) % 1); ctx.save(); ctx.translate(1300 + k * 70, 760 + (k % 2) * 40); ctx.scale(0.6, 0.6); rrect(-16, -28, 32, 56, 6, '#222', 4); ctx.restore(); if (u < 0.3) circ(1300 + k * 70, 720, 16, '#2f80ff', 4, 10); }
    text('KEEPING THE MESSAGES FLOWING', 960, 1010, 62, '#fff', MARK, 'center', 12);
  });
  // ======================= CHAPTER 6 =======================
  chapter(S('Chapter six.') - 0.1, S('On October fourteenth') - 0.15, 6, 'THE $15 BILLION SEIZURE'); cue(S('Chapter six.') + 0.6, 'hit', 0.8);
  sc(S('On October fourteenth') - 0.15, S('Prosecutors say he led') - 0.15, (t) => {
    bg('#e9eef5', '#d3dbe6'); rect(1100, 250, 600, 600, '#f4f1ea'); for (let k = 0; k < 5; k++) rect(1150 + k * 110, 330, 50, 500, '#e2ddd2', 5); poly([[1080, 250], [1400, 130], [1720, 250]], '#f4f1ea'); text('U.S. COURTHOUSE · BROOKLYN', 1400, 900, 44, '#111', HEAD, 'center', 0);
    const nm = P('On October fourteenth', 'Chen'); rrect(180, 220, 760, 640, 16, '#fff');
    text('UNITED STATES v.', 560, 320, 60, '#111', TYPE, 'center', 0); if (t > nm) text('CHEN ZHI', 560, 460, 110, RED, MARK, 'center', 0);
    text('INDICTMENT UNSEALED', 560, 600, 48, '#111', HEAD, 'center', 0); text('OCT 14, 2025', 560, 680, 48, '#111', HEAD, 'center', 0); stamp('CHARGED', 560, 790, 80, -0.1, (t - nm - 0.4) / 0.16);
  });
  cue(P('On October fourteenth', 'Chen') + 0.4, 'hit', 0.8);
  sc(S('Prosecutors say he led') - 0.15, S('The Justice Department seized') - 0.15, (t) => {
    bg('#fff3e0', '#ffe0b2'); const bh = P('Prosecutors say he led', 'ran');
    for (let k = 0; k < 4; k++) { const x = 300 + k * 230, h = 300 + k * 60; rect(x, 820 - h, 180, h, ['#90a4ae', '#b0bec5', '#78909c', '#cfd8dc'][k]); for (let r = 0; r < h / 70 - 1; r++) rect(x + 30, 850 - h + r * 70, 120, 30, '#bfe6ff', 4); }
    text('PRINCE GROUP', 650, 180, 96, '#111', MARK, 'center', 0); text('REAL ESTATE · FINANCE · CAMBODIA', 650, 270, 44, '#5a3d1e', HEAD, 'center', 0);
    person(1450, 960, 1.6, { shirt: '#1d1d1d', tie: true, pants: '#1d1d1d', hair: 'short', hairCol: '#111', glasses: true, mouth: 'flat', brow: 'flat', gaze: [-0.6, 0], hands: [[-70, -20], [70, -20]] }, t);
    text('CHEN ZHI · CHARGED, NOT CONVICTED', 1450, 1040, 32, '#5a3d1e', TYPE, 'center', 0);
    if (t > bh) { const u = ease((t - bh) / 0.6); ctx.save(); ctx.globalAlpha = u; rect(240, 560, 960, 300, 'rgba(20,20,20,0.85)', 6); text('BEHIND IT: FORCED-LABOR SCAM COMPOUNDS', 720, 710, 46, '#ff6b6b', HEAD, 'center', 0); ctx.restore(); }
    text('PROSECUTORS SAY', 1820, 160, 30, RED, TYPE, 'right', 0);
  });
  cue(P('Prosecutors say he led', 'ran'), 'hit', 0.7);
  sc(S('The Justice Department seized') - 0.15, S('In January twenty twenty-six') - 0.15, (t) => {
    bg('#0f1724', '#1d2b45'); const fb = S('About fifteen billion'), lg = S('Officials called'), pk = S('Prosecutors said that at its peak');
    for (let k = 0; k < 40; k++) { const u = clamp((t - S('The Justice Department seized') - k * 0.05) / 0.8); if (u <= 0) continue; btc(600 + (k % 8) * 70 + (Math.floor(k / 8) % 2) * 35, 900 - Math.floor(k / 8) * 60 - (1 - ease(u)) * 600, 34); }
    counter(127271 * smooth((t - S('The Justice Department seized')) / 1.5), 640, 200, 110, '', ' BITCOIN', '#f7931a');
    if (t > fb) { counter(15e9 * smooth((t - fb) / 1.0), 1450, 380, 110, '$', '', '#ffffff'); text('AT THE TIME', 1450, 480, 50, YEL, HEAD, 'center', 8); }
    if (t > lg) tag(1450, 620, 'LARGEST FORFEITURE ACTION IN U.S. HISTORY', 40, RED, '#fff', -0.03, pop(t, lg, 0.35));
    if (t > pk) { tag(1450, 800, 'UP TO $30,000,000 A DAY', 60, YEL, '#111', 0.03, pop(t, pk, 0.35)); text('(PROSECUTORS SAY)', 1450, 890, 36, '#fff', TYPE, 'center', 0); }
  });
  cue(S('The Justice Department seized'), 'ticks'); cue(S('Officials called'), 'hit', 0.8); cue(S('Prosecutors said that at its peak'), 'pop', 0.7);
  sc(S('In January twenty twenty-six') - 0.15, S('Chapter seven.') - 0.1, (t) => {
    bg('#e8f0ff', '#cfdcff'); const st = S('The U.S. case is stalled.'), lw = S('And his lawyers');
    ctx.save(); ctx.translate(0, 0); text('CAMBODIA', 400, 200, 80, '#111', MARK, 'center', 0); text('CHINA', 1500, 200, 80, '#111', MARK, 'center', 0); text('U.S.A.', 960, 900, 70, '#111', MARK, 'center', 0); ctx.restore();
    const u = ease((t - S('In January twenty twenty-six') - 1.5) / 2.0); const px = 400 + 1100 * u, py = 420 - Math.sin(u * Math.PI) * 140; plane(px, py, 0.9);
    line(560, 700, 1360, 700, 8, '#888'); poly([[1340, 680], [1380, 700], [1340, 720]], '#888');
    if (t > P('In January twenty twenty-six', 'sent')) bigX(960, 800, 60, (t - P('In January twenty twenty-six', 'sent') - 0.6) / 0.4);
    if (t > st) stamp('U.S. CASE STALLED', 960, 560, 90, -0.08, (t - st) / 0.18);
    if (t > lw) { btc(1600, 820, 60); text('LAWYERS: "GIVE THE BITCOIN BACK"', 1340, 1010, 46, '#111', HEAD, 'center', 0); }
  });
  cue(S('The U.S. case is stalled.'), 'hit', 0.9);
  // ======================= CHAPTER 7 =======================
  chapter(S('Chapter seven.') - 0.1, S('Washington is fighting') - 0.15, 7, 'THE FIGHT BACK'); cue(S('Chapter seven.') + 0.6, 'hit', 0.8);
  sc(S('Washington is fighting') - 0.15, S('But for most victims') - 0.15, (t) => {
    bg('#dfe7f2', '#c3d1e3'); for (let k = 0; k < 3; k++) { person(500 + k * 300, 960, 1.35, { shirt: '#1f2b45', pants: '#1f2b45', hair: 'short', mouth: 'flat', brow: 'angry', gaze: [1, 0], hands: [[-60, -30], [70, -40]] }, t + k); text('STRIKE FORCE', 500 + k * 300, 760, 26, YEL, HEAD, 'center', 0); }
    text('SCAM CENTER STRIKE FORCE', 960, 150, 84, '#1f2b45', MARK, 'center', 0);
    if (t > P('Washington is fighting', 'seized')) { counter(580e6 * smooth((t - P('Washington is fighting', 'seized')) / 1.4), 1500, 420, 100, '$', '+', '#1e7a3a'); text('CRYPTO SEIZED', 1500, 520, 54, '#111', HEAD, 'center', 0); for (let k = 0; k < 5; k++) btc(1350 + k * 75, 650, 32); }
  });
  cue(P('Washington is fighting', 'seized'), 'ticks');
  sc(S('But for most victims') - 0.15, S('Chapter eight.') - 0.1, (t) => {
    room(); const df = S('Which means the best');
    person(500, 960, 1.6, DENNIS({ gaze: [0, 0.6], brow: 'worried', mouth: 'frown', hands: [[-70, -20], [70, -20]] }), t);
    if (t < df) { bills(t, S('But for most victims'), 700, 600, 2100, 200, 18, 2.4, 160); text('IT RARELY COMES BACK', 1300, 200, 80, RED, MARK, 'center', 12); }
    else { person(1250, 960, 1.6, DET({ gaze: [-1, 0], brow: 'flat', mouth: 'smile', hands: [[-80, -60], [90, -160]] }), t); ctx.save(); ctx.translate(1520, 520); ctx.rotate(0.08); rrect(-170, -220, 340, 440, 14, '#3a2a5a'); text('THE', 0, -120, 56, YEL, HEAD, 'center', 0); text('PLAYBOOK', 0, -30, 80, '#fff', MARK, 'center', 0); text('KNOW IT FIRST', 0, 100, 40, '#fff', HEAD, 'center', 0); ctx.restore(); }
  });
  // ======================= CHAPTER 8 =======================
  chapter(S('Chapter eight.') - 0.1, S('So here are the red flags.') - 0.15, 8, 'THE RED FLAGS'); cue(S('Chapter eight.') + 0.6, 'hit', 0.8);
  sc(S('So here are the red flags.') - 0.15, S("If it's happened") - 0.15, (t) => {
    bg('#fff6e6', '#ffe1c2'); text('THE 4 RED FLAGS', 960, 110, 96, RED, MARK, 'center', 14);
    const fl = [[S('One.'), '"WRONG NUMBER"... THAT KEEPS CHATTING'], [S('Two.'), 'ONLINE FRIEND + CRYPTO / FOREX'], [S('Three.'), 'PAY FEES TO WITHDRAW YOUR MONEY'], [S('Four.'), '"WE CAN RECOVER IT" FOR A FEE']];
    fl.forEach(([t0, s2], k) => { if (t < t0) return; const p = pop(t, t0, 0.35), y = 270 + k * 200, wave = Math.sin(t * 4 + k) * 0.08; ctx.save(); ctx.translate(260, y); ctx.scale(p, p); line(0, -70, 0, 90, 12, '#5a3d1e'); ctx.save(); ctx.translate(0, -70); ctx.rotate(wave); poly([[0, 0], [120, 10], [100, 45], [125, 80], [0, 75]], RED, true, 6); ctx.restore(); text(String(k + 1), -60, 10, 90, '#111', HEAD, 'center', 0); ctx.restore();
      ctx.save(); ctx.globalAlpha = clamp((t - t0) / 0.3); text(s2, 470, y + 5, 58, '#111', HEAD, 'left', 0); ctx.restore(); });
    person(1650, 980, 1.3, DET({ gaze: [-1, -0.2], brow: 'angry', mouth: 'open', mag: true, hands: [[-60, -30], [90, -150]] }), t);
  });
  ['One.', 'Two.', 'Three.', 'Four.'].forEach(s => cue(S(s), 'hit', 0.6));
  sc(S("If it's happened") - 0.15, S('Because right now') - 0.15, (t) => {
    bg('#e8f0ff', '#cfdcff'); rrect(460, 300, 1000, 300, 30, '#fff'); text('REPORT IT:', 960, 380, 70, '#111', HEAD, 'center', 0); text('ic3.gov', 960, 500, 130, '#1f4fbf', MARK, 'center', 0);
    if (t > S('And tell someone.')) { person(560, 980, 1.2, DENNIS({ mouth: 'open', brow: 'flat', gaze: [1, 0], hands: [[-60, -30], [80, -120]] }), t); person(860, 980, 1.2, { shirt: '#ab47bc', hair: 'long', mouth: 'smile', gaze: [-1, 0], hands: [[-80, -120], [60, -30]] }, t); }
    if (t > S('Shame is exactly')) text('NO SHAME. THEY COUNT ON SILENCE.', 1350, 900, 52, RED, MARK, 'center', 0);
  });
  cue(S("If it's happened") + 0.6, 'pop', 0.7);
  sc(S('Because right now') - 0.15, S('Next time on') - 0.15, (t) => {
    compound(t, { guard: false }); const hi = S('"Hi, is this Sarah?"', 'Hi') || 0; const t1 = line_('Because right now').end;
    phoneBig(1640, 540, 0.5 * pop(t, t1 - 0.2, 0.35), [{ t: t1, side: 'out', text: 'Hi, is this Sarah?' }], t, { who: 'Message' });
    text('SOMEWHERE, RIGHT NOW...', 1160, 150, 72, '#fff', MARK, 'center', 12);
  });
  sc(S('Next time on') - 0.15, S('Subscribe, so') - 0.15, (t) => {
    bg('#2a1840', '#4a2a5a'); const t0 = S('Next time on'); poly([[200, 860], [200, 640], [300, 560], [400, 640], [400, 860]], '#3a2a5a'); circ(300, 560, 60, '#3a2a5a'); rect(520, 380, 30, 480, '#3a2a5a'); rect(1500, 420, 30, 440, '#3a2a5a'); ell(1100, 640, 260, 140, '#3a2a5a'); rect(800, 640, 600, 220, '#3a2a5a');
    text('NEXT CASE FILE', 960, 150, 70, YEL, HEAD, 'center', 0); text('ISTANBUL', 960, 260, 110, '#fff', MARK, 'center', 12);
    for (let k = 0; k < 7; k++) { const p = pop(t, t0 + 1.5 + k * 0.25, 0.3); if (p <= 0) continue; ctx.save(); ctx.translate(560 + k * 135, 760); ctx.scale(p, p); rect(-22, -90, 44, 180, '#b8b8b8', 5); circ(0, 0, 50, '#e0c060', 6, 22); circ(0, 0, 36, '#14324a', 4, 18); line(0, 0, 0, -26, 5, '#fff'); line(0, 0, 18, 0, 5, '#fff'); ctx.restore(); }
    if (t > t0 + 2.5) text('53 ROLEX WATCHES (REPORTED)', 960, 950, 64, '#fff', HEAD, 'center', 10);
  });
  sc(S('Subscribe, so') - 0.15, DUR + 2, (t) => {
    bg('#141b3a', '#2a2350'); const t0 = S('Subscribe, so'), clk = t0 + 1.3, cl = t > clk;
    text('THE MONEY FILES', 960, 200, 80, '#fff', MARK, 'center', 12); const p = pop(t, t0, 0.4); ctx.save(); ctx.translate(960, 560); ctx.scale(p, p); rrect(-420, -110, 840, 220, 110, cl ? '#555' : RED); text(cl ? 'SUBSCRIBED ✓' : 'SUBSCRIBE', 0, 6, 120, '#fff', HEAD, 'center', 0); ctx.restore();
    person(1500, 1000, 1.3, DET({ gaze: [-1, -0.4], mouth: 'grin', brow: 'up', hands: [[-150, -330 + (cl ? 10 : 0)], [60, -20]] }), t);
    if (cl) text('🔔', 1480, 560, 120, '#ffd400', SANS, 'center', 0);
  });
  cue(S('Subscribe, so') + 1.3, 'pop', 0.8);
}
