// The Money Files — Video 6: Jio vs Elon Musk (flat 2D character style)
import { makeKit } from './kit.js';
export default function (A) {
  const { ctx, DUR, line_, atp, scene, cue, clamp, ease, smooth, pop, hash, HEAD, SANS } = A;
  const K = makeKit(A);
  const { RED, YEL, NAVY, INK, SK, fillPath, rr, cir, elp, stroke, T, tw, grad, shade, office, city, space, village, hut, person, tag, bubble, post, phone, satellite, earth, india, coin, cash, tower, dish, chart, bigX, check, panel, caption, bigNum, rocket, store, factory, smoke, calendar, chapterCard } = K;
  const S = sub => line_(sub).start, E = sub => line_(sub).end, P = (sub, ph) => atp(sub, ph);
  const sc = (a, b, fn) => { scene(a, b, fn); cue(a + 0.02, 'whoosh'); };
  const ELON = (o = {}) => ({ shirt: '#1c1f26', pants: '#2a2e38', skin: SK[0], hair: 'elon', hairCol: '#3a2a20', label: 'MUSK', ...o });
  const AMB = (o = {}) => ({ shirt: '#f4f1ea', pants: '#d9d2c3', skin: SK[2], hair: 'amb', kurta: true, build: 1.15, label: 'AMBANI', ...o });
  const OFF = (o = {}) => ({ shirt: '#eaeaea', jacket: '#5d6470', tie: '#2a4d8f', pants: '#4a505c', skin: SK[3], hair: 'side', glasses: true, mustache: true, ...o });
  const crowdP = (k) => ({ shirt: ['#e8343f', '#3a86ff', '#2ecc71', '#ffbe0b', '#8338ec', '#ff6b35', '#06d6a0'][k % 7], pants: ['#2c3346', '#4a3b2c', '#3b4a5c'][k % 3], skin: SK[1 + (k % 4)], hair: ['short', 'long', 'side', 'bun', 'short'][k % 5] });
  const ch = (t0, t1, n, title, c1, c2) => { sc(t0, t1, (t) => chapterCard(t, t0, n, title, c1, c2)); cue(t0 + 0.4, 'hit', 0.8); };

  // =================== HOOK ===================
  sc(0, S('But there\'s one country') - 0.15, (t) => {
    space(t); earth(960, 1500, 900, t);
    for (let k = 0; k < 14; k++) { const a = -Math.PI + k / 13 * Math.PI + t * 0.04; satellite(960 + Math.cos(a) * 1050, 1500 + Math.sin(a) * 1050 * 0.95, 0.42, a + Math.PI / 2); }
    bigNum(t, S('Elon Musk has thousands') + 0.4, 'THOUSANDS OF SATELLITES', 960, 150, 110, '#fff');
    const items = [[S('He can beam'), 'A BOAT AT SEA', 380], [S('To a war zone.'), 'A WAR ZONE', 960], [S('To a cabin'), 'A CABIN IN ALASKA', 1540]];
    if (t > S('He can beam')) items.forEach(([t0, s, x]) => { if (t > t0) { tag(x, 420, s, 56, '#fff', INK, pop(t, t0, 0.3)); stroke([[x, 470], [x, 640]], 'rgba(140,210,255,0.8)', 6); } });
  });
  sc(S('But there\'s one country') - 0.15, S('And earlier this month') - 0.15, (t) => {
    space(t); const p = ease((t - S('But there\'s one country')) / 1.2); earth(960, 560 + (1 - p) * 300, 380, t * 0.4);
    india(1040, 520, 260 * p + 1, '#ff9f43');
    if (t > S('A country of one point')) { bigNum(t, S('A country of one point'), '1.4 BILLION PEOPLE', 960, 960, 110, YEL); }
    satellite(380, 260, 0.6, -0.3); satellite(1560, 300, 0.6, 0.4); bigX(1040, 520, 140, (t - S('But there\'s one country') - 1.2) / 0.5);
  });
  cue(S('A country of one point'), 'hit', 0.7);
  sc(S('And earlier this month') - 0.15, S('So who is this man?') - 0.15, (t) => {
    office('#dde8f5', '#9aa7bd'); const pm = S('"Prime Minister Ambani."');
    person(420, 860, 1.25, ELON({ mood: t > pm ? 'smug' : 'neutral', talk: t < pm, arms: [12, 60], hold: () => { rr(-24, -70, 48, 90, 8, '#222'); } }), t);
    const items = [[P('Not to a president', 'president'), 'PRESIDENT', 0], [P('Not to a prime minister', 'prime'), 'PRIME MINISTER', 1]];
    items.forEach(([t0, s, k]) => { if (t > t0) { tag(1300, 250 + k * 130, s, 60, '#fff', INK, pop(t, t0)); bigX(1300, 250 + k * 130, 50, (t - t0 - 0.3) / 0.3); } });
    if (t > S('To a businessman.')) tag(1300, 510, 'A BUSINESSMAN', 64, YEL, INK, pop(t, S('To a businessman.')));
    if (t > pm) post(1150, 760, 0.85, 'Elon Musk', '@elonmusk', ['"Prime Minister Ambani"'], pop(t, pm, 0.4), 'Ambani');
  });
  cue(S('"Prime Minister Ambani."'), 'hit', 1.0);
  sc(S('So who is this man?') - 0.15, S('Chapter one.') - 0.1, (t) => {
    city('#ffb36b', '#ffe0a8', '#e58a4e', '#c9693a', '#ffd27a');
    person(1150, 900, 1.5, AMB({ mood: 'smug', arms: [14, 20] }), t);
    elp(1150, 380, 210, 46, 'rgba(255,255,255,0)');
    fillPath([[1150 - 70, 300], [1150 - 70, 260], [1150 - 35, 285], [1150, 245], [1150 + 35, 285], [1150 + 70, 260], [1150 + 70, 300]], 'rgba(0,0,0,0)');
    T('?', 1400, 260, 200, YEL, HEAD, 'center', { outline: 14, shadow: true, rot: 0.2 });
    if (t > S('And why does the richest')) { person(420, 900, 1.0, ELON({ mood: 'angry', arms: [12, 120] }), t); bubble(470, 230, 520, 140, 'HE\'S IN MY WAY!', 70, pop(t, S('And why does the richest')), [-0.4, 1]); }
  });
  // =================== CHAPTER 1 ===================
  ch(S('Chapter one.') - 0.1, S('Right now, in America') - 0.15, 1, 'THE CHEAPEST INTERNET ON EARTH', '#ff6b35', NAVY);
  sc(S('Right now, in America') - 0.15, S('Eight cents.') - 0.15, (t) => {
    grad('#ffffff', '#eef2f8'); rr(958, 0, 4, 1080, 0, '#ccd'); T('AMERICA', 480, 150, 80, NAVY); T('INDIA', 1440, 150, 80, '#d1601c');
    phone(480, 560, 0.9, { draw: () => { T('1 GB', 0, -150, 70, '#555'); T('$5–10', 0, 0, 120, RED); T('SEVERAL DOLLARS', 0, 120, 38, '#555'); } });
    if (t > S('In India, it costs')) phone(1440, 560, 0.9, { draw: () => { T('1 GB', 0, -150, 70, '#555'); T('$0.08', 0, 0, 120, '#18a957'); T('≈ ₹7.7', 0, 120, 44, '#555'); } }, Math.sin(Math.min(1, (t - S('In India, it costs')) * 3) * Math.PI) * 0.05);
    T('*typical prepaid prices', 480, 1000, 30, '#99a', SANS);
  });
  cue(S('In India, it costs'), 'pop', 0.7);
  sc(S('Eight cents.') - 0.15, S('And it\'s cheap because') - 0.15, (t) => {
    grad('#14213d', '#22345e'); coin(960, 470, 230 * pop(t, S('Eight cents.'), 0.5), '8¢');
    caption(t, S('That\'s not a typo.'), 'NOT A TYPO', 820, 90, INK, YEL); caption(t, S('It\'s among the cheapest'), 'AMONG THE CHEAPEST IN THE WORLD', 960, 70, '#fff', RED);
  });
  cue(S('Eight cents.'), 'hit', 0.8);
  sc(S('And it\'s cheap because') - 0.15, S('That network is called Jio.') - 0.15, (t) => {
    city('#9ad0ff', '#e3f3ff', '#7fa7cf', '#5d82ad', '#cfe6ff'); const mk = S('Mukesh Ambani.'), ri = S('The richest person in Asia.'), ch2 = S('The chairman of'), co = S('A company that started');
    person(560, 920, 1.45, AMB({ mood: 'smile', arms: [14, 30] }), t);
    if (t > ri) tag(560, 140, 'RICHEST PERSON IN ASIA', 54, YEL, INK, pop(t, ri)); if (t > ch2) tag(560, 230, 'CHAIRMAN, RELIANCE INDUSTRIES', 44, '#fff', INK, pop(t, ch2));
    if (t > co) { const items = [[co, '🧵 POLYESTER'], [P('A company that started', 'refines oil'), '🛢️ OIL'], [P('A company that started', 'supermarkets'), '🛒 SUPERMARKETS'], [P('A company that started', 'phone network'), '📶 INDIA\'S BIGGEST PHONE NETWORK']];
      items.forEach(([t0, s], k) => { if (t > t0) { const p = pop(t, t0); ctx.save(); ctx.translate(1350, 330 + k * 150); ctx.scale(p, p); panel(-330, -55, 660, 110, k === 3 ? '#14213d' : '#fff', 18); T(s, 0, 4, 54, k === 3 ? YEL : INK); ctx.restore(); } }); }
  });
  sc(S('That network is called Jio.') - 0.15, S('Chapter two.') - 0.1, (t) => {
    grad('#0f3c8c', '#1d64d6'); const p = pop(t, S('That network is called Jio.') + 0.2, 0.5); ctx.save(); ctx.translate(960, 500); ctx.scale(p, p); cir(0, 0, 260, '#fff'); T('Jio', 0, 10, 220, '#0f3c8c', SANS, 'center', { weight: 800 }); ctx.restore();
    tower(300, 980, 1.2, '#cfd8ea', t); tower(1620, 980, 1.2, '#cfd8ea', t + 1);
  });
  cue(S('That network is called Jio.') + 0.2, 'hit', 0.9);
  // =================== CHAPTER 2 ===================
  ch(S('Chapter two.') - 0.1, S('In September twenty sixteen') - 0.15, 2, 'THE FREE INTERNET AMBUSH', '#2ecc71', NAVY);
  sc(S('In September twenty sixteen') - 0.15, S('It gave everything away.') - 0.15, (t) => {
    city('#ffcf8a', '#ff9a6a', '#d9774e', '#b75d3a', '#ffcf8a'); calendar(420, 430, 1.1, 'SEPT', '2016');
    person(1250, 920, 1.4, AMB({ mood: 'smug', pose: 'wave', arms: [14, 160] }), t); tag(1250, 140, 'JIO LAUNCHES', 70, '#0f3c8c', '#fff', pop(t, S('In September twenty sixteen') + 0.6));
  });
  sc(S('It gave everything away.') - 0.15, S('Imagine a new carrier') - 0.15, (t) => {
    grad('#2ecc71', '#1b9e55'); const items = [[S('Free calls.'), 'FREE CALLS', 480], [S('Free data.'), 'FREE DATA', 1440]];
    bigNum(t, S('It gave everything away.') + 0.2, 'EVERYTHING FREE', 960, 200, 150, '#fff');
    items.forEach(([t0, s, x]) => { if (t > t0) { const p = pop(t, t0); ctx.save(); ctx.translate(x, 600); ctx.scale(p, p); panel(-300, -170, 600, 340, '#fff', 30); T(s, 0, -60, 90, INK); T('₹0', 0, 70, 130, '#18a957'); ctx.restore(); } });
    if (t > S('For months.')) tag(960, 950, 'FOR MONTHS', 80, YEL, INK, pop(t, S('For months.')));
  });
  ['Free calls.', 'Free data.', 'For months.'].forEach(s => cue(S(s), 'pop', 0.6));
  sc(S('Imagine a new carrier') - 0.15, S('That\'s exactly what India did.') - 0.15, (t) => {
    city('#7cc6ff', '#e6f6ff', '#9bb8d6', '#7d9cc0', '#e6f2ff'); store(1250, 860, 1.4, 'NEW CARRIER', RED);
    tag(1250, 220, 'UNLIMITED EVERYTHING · $0', 64, YEL, INK, pop(t, P('Imagine a new carrier', 'unlimited')));
    person(440, 920, 1.3, { ...crowdP(1), mood: t > S('What would you do?') ? 'shock' : 'smile', gaze: [1, 0] }, t); if (t > S('What would you do?')) T('?', 600, 330, 160, YEL, HEAD, 'center', { outline: 12 });
  });
  sc(S('That\'s exactly what India did.') - 0.15, S('For the old phone companies') - 0.15, (t) => {
    city('#ffd08a', '#fff0d0', '#e8b077', '#cc8f58'); const t0 = S('That\'s exactly what India did.'), n = Math.floor(clamp((t - t0) / 6) * 40);
    store(1500, 860, 0.9, 'Jio', '#0f3c8c');
    for (let k = 0; k < Math.min(n, 18); k++) { const xx = 1250 - k * 70 + ((t * 40) % 70); person(xx, 960 - (k % 2) * 30, 0.55, { ...crowdP(k), mood: 'smile', walk: true }, t + k); }
    const cnt = S('Jio signed up'); if (t > cnt) { const v = Math.floor(clamp((t - cnt) / 2.5) * 100); bigNum(t, cnt, v + ' MILLION', 620, 220, 150, YEL); tag(620, 360, 'IN JUST 170 DAYS', 60, '#fff', INK, pop(t, P('Jio signed up', 'one hundred and seventy'))); }
    if (t > S('About seven new customers')) tag(620, 470, '≈ 7 NEW CUSTOMERS EVERY SECOND', 46, RED, '#fff', pop(t, S('About seven new customers')));
  });
  cue(S('Jio signed up'), 'hit', 0.8);
  sc(S('For the old phone companies') - 0.15, S('When the dust settled') - 0.15, (t) => {
    office('#e9e3d6', '#a8916f'); const so = S('Some sold out.'), mg = S('Some merged'), sd = S('And some shut down'), br = S('One of the companies that collapsed');
    person(500, 920, 1.25, { shirt: '#fff', jacket: '#8a2b2b', tie: RED, skin: SK[1], hair: 'bald', mood: 'shock', sweat: true, label: 'OLD TELECOMS' }, t);
    const p = clamp((t - S('Their customers walked')) / 2.5); panel(900, 260, 820, 460, '#fff', 20); chart(960, 320, 700, 340, [90, 92, 88, 70, 45, 30, 22, 12], 1, RED); if (t > S('Their profits collapsed.')) bigNum(t, S('Their profits collapsed.'), 'PROFITS ↓', 1310, 220, 90, RED);
    [[so, 'SOLD OUT'], [mg, 'MERGED'], [sd, 'SHUT DOWN']].forEach(([t0, s], k) => { if (t > t0) tag(1050 + k * 260, 820, s, 50, k === 2 ? RED : INK, '#fff', pop(t, t0)); });
    if (t > br) { ctx.fillStyle = 'rgba(10,15,30,0.7)'; ctx.fillRect(-200, -200, 2400, 1500); person(960, 940, 1.3, { shirt: '#fff', jacket: '#3d3d46', tie: '#555', skin: SK[1], hair: 'side', mood: 'sad', label: 'HIS YOUNGER BROTHER\'S COMPANY' }, t); bigX(960, 330, 90, (t - br - 1.2) / 0.4); }
  });
  cue(S('And some shut down'), 'hit', 0.8);
  sc(S('When the dust settled') - 0.15, S('And Jio was the king.') - 0.15, (t) => {
    grad('#fff6e5', '#ffe2b3'); const t0 = S('When the dust settled'); panel(220, 220, 900, 560, '#fff', 24); chart(290, 300, 760, 400, [100, 96, 60, 30, 16, 10, 8, 7], clamp((t - t0) / 2.5), RED);
    T('DATA PRICE IN INDIA', 670, 260, 50, INK); bigNum(t, t0 + 2.2, '−90%+', 1450, 400, 220, RED);
    if (t > S('Hundreds of millions of people')) { for (let k = 0; k < 7; k++) person(1180 + k * 100, 980, 0.45, { ...crowdP(k), mood: 'smile', arms: [12, 60], hold: () => rr(-12, -30, 24, 40, 4, '#222') }, t + k); tag(1450, 700, 'ONLINE FOR THE FIRST TIME', 46, '#2ecc71', '#fff', pop(t, S('Hundreds of millions of people'))); }
  });
  sc(S('And Jio was the king.') - 0.15, S('So remember this playbook.') - 0.15, (t) => {
    grad('#0f3c8c', '#1d64d6'); person(960, 930, 1.5, AMB({ mood: 'smug', crown: true, arms: [14, 14] }), t);
    if (t > S('Today it has more than')) bigNum(t, S('Today it has more than'), '500 MILLION+ SUBSCRIBERS', 960, 150, 100, YEL);
  });
  sc(S('So remember this playbook.') - 0.15, S('Because now, someone wants') - 0.15, (t) => {
    grad('#2b2d42', '#1a1b2e'); panel(460, 160, 1000, 720, '#f7f0e0', 16); T('THE PLAYBOOK', 960, 250, 90, INK);
    [[S('Go in cheap.'), '1. GO IN CHEAP'], [S('Take the whole market.'), '2. TAKE THE WHOLE MARKET'], [S('Then decide the price.'), '3. THEN DECIDE THE PRICE']].forEach(([t0, s], k) => { if (t > t0) { T(s, 560, 400 + k * 140, 74, k === 2 ? RED : INK, HEAD, 'left', { sc: pop(t, t0) }); } });
  });
  ['Go in cheap.', 'Take the whole market.', 'Then decide the price.'].forEach(s => cue(S(s), 'pop', 0.6));
  sc(S('Because now, someone wants') - 0.15, S('Chapter three.') - 0.1, (t) => {
    grad('#2b2d42', '#1a1b2e'); panel(160, 260, 600, 520, '#f7f0e0', 16); T('THE PLAYBOOK', 460, 330, 60, INK);
    const u = ease((t - S('Because now, someone wants')) / 1.2); person(1700 - 400 * u, 930, 1.35, ELON({ flip: true, walk: u < 1, mood: 'smug', arms: [12, 100] }), t);
    if (t > P('Because now, someone wants', 'against Jio')) tag(1300, 200, '...AGAINST JIO', 80, RED, '#fff', pop(t, P('Because now, someone wants', 'against Jio')));
  });
  // =================== CHAPTER 3 ===================
  ch(S('Chapter three.') - 0.1, S('Starlink first tried') - 0.15, 3, 'THE ROCKET MAN KNOCKS', '#3a86ff', NAVY);
  sc(S('Starlink first tried') - 0.15, S('Then the government stepped in.') - 0.15, (t) => {
    space(t); earth(960, 1400, 800, t); rocket(420, 520 - ((t * 60) % 300), 0.9, 0, t); calendar(1500, 360, 0.9, 'YEAR', '2021', '#3a86ff');
    if (t > S('More than seven thousand')) { bigNum(t, S('More than seven thousand'), '7,000+ PRE-ORDERS', 960, 160, 110, '#fff'); tag(960, 290, '$99 DEPOSIT EACH', 60, YEL, INK, pop(t, P('More than seven thousand', 'ninety-nine'))); }
  });
  sc(S('Then the government stepped in.') - 0.15, S('So Starlink went back') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); person(560, 920, 1.35, OFF({ mood: 'angry', arms: [12, 100], label: 'INDIA\'S TELECOM DEPT.' }), t);
    const nl = S('Starlink didn\'t have a license.'); if (t > nl) { tag(1300, 240, 'NO LICENSE', 90, RED, '#fff', pop(t, nl)); }
    const st = S('It was told to stop'); if (t > st) { panel(1000, 400, 600, 420, '#fff', 20); T('REFUND', 1300, 470, 64, INK); for (let k = 0; k < 6; k++) if (t > st + 1 + k * 0.25) { coin(1120 + (k % 3) * 180, 600 + Math.floor(k / 3) * 150, 50, '$'); } }
  });
  cue(S('Starlink didn\'t have a license.'), 'hit', 0.8);
  sc(S('So Starlink went back') - 0.15, S('In twenty twenty-four, a new fight') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); const t0 = S('So Starlink went back');
    for (let k = 0; k < 14; k++) { const n = Math.min(14, Math.floor((t - t0) * 4)); if (k < n) rr(760 + (k % 2) * 8, 760 - k * 30, 400, 26, 3, k % 2 ? '#fff' : '#f2f2f2'); }
    person(400, 920, 1.25, ELON({ mood: 'worried', arms: [12, 30] }), t); tag(960, 200, 'THE PAPERWORK BEGINS', 80, INK, '#fff', pop(t, P('And the paperwork', 'paperwork')));
  });
  sc(S('In twenty twenty-four, a new fight') - 0.15, S('Reliance argued') - 0.15, (t) => {
    space(t); earth(960, 1350, 700, t); satellite(960, 330, 1.0, 0.1);
    const sp = S('The airwaves.'); for (let k = 0; k < 6; k++) { const r = ((t * 120 + k * 70) % 420) + 40; ctx.beginPath(); ctx.arc(960, 380, r, 0.5, Math.PI - 0.5); ctx.strokeStyle = `rgba(140,210,255,${1 - r / 460})`; ctx.lineWidth = 8; ctx.stroke(); }
    calendar(300, 300, 0.75, 'YEAR', '2024', '#8338ec'); if (t > S('Spectrum.')) bigNum(t, S('Spectrum.'), 'SPECTRUM', 1450, 300, 140, YEL);
  });
  sc(S('Reliance argued') - 0.15, S('Musk fired back') - 0.15, (t) => {
    office('#f3e2c7', '#c99b6a'); person(560, 920, 1.35, AMB({ mood: 'neutral', talk: true, arms: [14, 70] }), t);
    rr(1000, 360, 600, 40, 10, '#7a4a25'); rr(1260, 400, 40, 380, 6, '#7a4a25'); const p = pop(t, S('Reliance argued') + 0.4);
    bubble(1300, 220, 720, 170, ['SELL IT AT', 'AUCTION!'], 70, p, [-0.6, 1]); if (t > P('Like the airwaves', 'billions')) { cash(1180, 330, 0.8); cash(1420, 330, 0.8); }
  });
  sc(S('Musk fired back') - 0.15, S('And this time, Musk won.') - 0.15, (t) => {
    grad('#1c2541', '#0b132b'); person(400, 930, 1.3, ELON({ mood: 'angry', talk: true, arms: [12, 60], hold: () => rr(-24, -70, 48, 90, 8, '#222') }), t);
    post(1180, 500, 1.0, 'Elon Musk', '@elonmusk', ['Auctioning satellite spectrum', 'would be "unprecedented"'], pop(t, S('He called an auction') - 0.3, 0.4), 'unprecedented');
    T('paraphrased', 1180, 760, 30, '#8a94ad', SANS);
  });
  sc(S('And this time, Musk won.') - 0.15, S('Chapter four.') - 0.1, (t) => {
    office('#e3e8ef', '#8f9bb0'); person(960, 920, 1.3, OFF({ mood: 'neutral', talk: t < S('No auction.'), arms: [12, 30], label: 'TELECOM MINISTER' }), t);
    if (t > S('India\'s telecom minister')) tag(960, 160, 'SPECTRUM: ALLOCATED, NOT AUCTIONED', 66, '#fff', INK, pop(t, P('India\'s telecom minister', 'administratively')));
    if (t > S('No auction.')) bigX(1500, 420, 90, (t - S('No auction.')) / 0.4);
    if (t > S('Round one, Elon.')) { const p = pop(t, S('Round one, Elon.')); ctx.save(); ctx.translate(420, 420); ctx.scale(p, p); panel(-220, -120, 440, 240, YEL, 24); T('ROUND 1', 0, -30, 80, INK); T('MUSK', 0, 56, 80, RED); ctx.restore(); }
  });
  cue(S('Round one, Elon.'), 'hit', 0.9);
  // =================== CHAPTER 4 ===================
  ch(S('Chapter four.') - 0.1, S('Then, in March twenty twenty-five') - 0.15, 4, 'THE STRANGE HANDSHAKE', '#8338ec', NAVY);
  sc(S('Then, in March twenty twenty-five') - 0.15, S('Its biggest rival, Airtel') - 0.15, (t) => {
    city('#c9b6ff', '#f1eaff', '#a58ee0', '#8a72c9', '#efe7ff'); const sg = S('Jio signed a deal'), u = ease((t - sg) / 0.8);
    person(700 + 60 * u, 920, 1.3, AMB({ mood: 'smile', arms: [14, 70 + 10 * u] }), t); person(1220 - 60 * u, 920, 1.3, ELON({ flip: true, mood: 'smile', arms: [12, 70 + 10 * u] }), t);
    calendar(960, 250, 0.7, 'MARCH', '2025', '#8338ec'); if (t > S('To sell Starlink')) tag(960, 470, 'STARLINK KITS IN JIO STORES', 56, YEL, INK, pop(t, S('To sell Starlink')));
  });
  cue(S('Jio signed a deal'), 'hit', 0.8);
  sc(S('Its biggest rival, Airtel') - 0.15, S('Why?') - 0.15, (t) => {
    grad('#f1eaff', '#d9ccff'); store(520, 820, 1.0, 'Jio', '#0f3c8c'); store(1400, 820, 1.0, 'airtel', RED); dish(520, 860, 0.9); dish(1400, 860, 0.9);
    if (t > S('So the two giants')) { tag(960, 170, '80% OF INDIA\'S PHONE MARKET', 66, INK, '#fff', pop(t, S('So the two giants'))); tag(960, 290, 'NOW PARTNERS WITH THEIR RIVAL', 56, YEL, INK, pop(t, S('So the two giants') + 1.5)); }
  });
  sc(S('Why?') - 0.15, S('And by the summer of') - 0.15, (t) => {
    office('#f3e2c7', '#c99b6a'); person(700, 920, 1.35, AMB({ mood: 'smug', arms: [14, 60] }), t); person(1200, 920, 1.3, ELON({ flip: true, mood: 'neutral', arms: [12, 12] }), t);
    if (t > P('One theory', 'keep')) bubble(560, 220, 640, 190, ['KEEP YOUR RIVALS', 'CLOSER'], 66, pop(t, P('One theory', 'keep')), [0.3, 1]);
    if (t > S('If Starlink was coming')) tag(1300, 200, 'BE THE ONE SELLING IT', 56, YEL, INK, pop(t, P('If Starlink was coming', 'better')));
  });
  sc(S('And by the summer of') - 0.15, S('Chapter five.') - 0.1, (t) => {
    village(t); const lic = S('And by the summer of'), gw = S('Gateways were being built.');
    if (t > lic) { const p = pop(t, lic + 0.4); ctx.save(); ctx.translate(420, 330); ctx.scale(p, p); ctx.rotate(-0.05); panel(-220, -140, 440, 280, '#fff', 14); T('LICENSE', 0, -60, 64, INK); check(0, 40, 50, (t - lic - 0.8) / 0.4); ctx.restore(); }
    if (t > gw) { dish(1150, 760, 1.4); dish(1350, 760, 1.4); dish(1550, 760, 1.4); }
    if (t > S('It looked like launch day')) tag(1350, 240, 'LAUNCH DAY: SOON?', 66, '#2ecc71', '#fff', pop(t, S('It looked like launch day')));
    if (t > S('It wasn\'t.')) { ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(-200, -200, 2400, 1500); bigNum(t, S('It wasn\'t.'), 'IT WASN\'T.', 960, 540, 200, RED, { outline: 16 }); }
  });
  cue(S('It wasn\'t.'), 'boom', 0.8);
  // =================== CHAPTER 5 ===================
  ch(S('Chapter five.') - 0.1, S('Fast forward to October') - 0.15, 5, 'PRIME MINISTER AMBANI', RED, NAVY);
  sc(S('Fast forward to October') - 0.15, S('The last steps keep') - 0.15, (t) => {
    village(t); calendar(330, 300, 0.75, 'OCT', '2026', RED); dish(1100, 760, 1.4); dish(1300, 760, 1.4); dish(1500, 760, 1.4);
    if (t > S('But it still has zero')) bigNum(t, S('But it still has zero'), '0 PAYING CUSTOMERS', 1300, 250, 120, RED);
  });
  sc(S('The last steps keep') - 0.15, S('And Musk ran out of patience.') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); const t0 = S('The last steps keep');
    for (let k = 0; k < 18; k++) rr(1150 + (k % 2) * 10, 800 - k * 32, 420, 28, 3, k % 2 ? '#fff' : '#eee');
    person(560, 920, 1.3, OFF({ mood: 'neutral', arms: [12, 40], hold: () => { rr(-40, -10, 80, 14, 4, '#c0392b'); fillPath([[-60, 6], [60, 6], [40, 40], [-40, 40]], '#8a5a3a'); } , label: 'OFFICIALS' }), t);
    [[S('Security clearances.'), 'SECURITY CLEARANCE ⏳'], [S('Final spectrum pricing.'), 'SPECTRUM PRICING ⏳']].forEach(([a, s], k) => { if (t > a) tag(1360, 180 + k * 120, s, 56, k ? YEL : '#fff', INK, pop(t, a)); });
  });
  sc(S('And Musk ran out of patience.') - 0.15, S('Then he went further.') - 0.15, (t) => {
    grad('#1c2541', '#0b132b'); person(500, 930, 1.35, ELON({ mood: 'angry', talk: t > S('He posted on X'), sweat: true, arms: [12, 60], hold: () => rr(-24, -70, 48, 90, 8, '#222') }), t);
    if (t > S('He posted on X')) post(1220, 480, 0.95, 'Elon Musk', '@elonmusk', ['Indian "oligarchs" are', 'holding Starlink back'], pop(t, S('He posted on X') + 0.2, 0.4), 'oligarchs');
    T('paraphrased', 1220, 720, 30, '#8a94ad', SANS);
  });
  sc(S('Then he went further.') - 0.15, S('The message was hard') - 0.15, (t) => {
    grad('#1c2541', '#0b132b'); const pm = P('He addressed Mukesh', 'Prime');
    post(960, 360, 1.15, 'Elon Musk', '@elonmusk', ['Dear "Prime Minister Ambani"...', 'will you allow Starlink to compete?'], pop(t, pm - 0.4, 0.4), 'Prime Minister Ambani');
    if (t > pm) person(960, 1000, 0.95, AMB({ mood: 'neutral', crown: t > pm + 0.6, arms: [14, 14] }), t);
  });
  cue(P('He addressed Mukesh', 'Prime'), 'boom', 0.9);
  sc(S('The message was hard') - 0.15, S('India\'s government pushed back') - 0.15, (t) => {
    grad('#fff1d6', '#ffd18a'); const t0 = S('Musk was suggesting');
    person(560, 930, 1.3, AMB({ mood: 'smug', arms: [14, 14] }), t); person(1360, 930, 1.3, OFF({ mood: 'worried', arms: [12, 12], label: 'GOVERNMENT' }), t);
    const tilt = t > t0 ? -0.18 * ease((t - t0) / 1) : 0; ctx.save(); ctx.translate(960, 300); ctx.rotate(tilt); rr(-520, -14, 1040, 28, 8, '#5d4630'); cir(-480, 40, 60, '#0f3c8c'); cir(480, 40, 60, '#8f9bb0'); ctx.restore(); fillPath([[930, 330], [990, 330], [960, 280]], '#5d4630');
    if (t > t0) tag(960, 120, 'MORE SAY THAN THE GOVERNMENT?', 64, '#fff', INK, pop(t, t0 + 0.8));
  });
  sc(S('India\'s government pushed back') - 0.15, S('Reliance didn\'t reply') - 0.15, (t) => {
    office('#e3e8ef', '#8f9bb0'); person(1350, 920, 1.35, OFF({ mood: 'angry', talk: true, arms: [12, 110] }), t);
    if (t > S('It said there\'s no favoritism.')) tag(1350, 140, 'NO FAVORITISM', 80, RED, '#fff', pop(t, S('It said there\'s no favoritism.')));
    const q = S('Starlink, Jio\'s own satellite'); if (t > q) ['STARLINK', 'JIO SATELLITE', 'ONEWEB'].forEach((s, k) => { if (t > q + k * 0.5) { const p = pop(t, q + k * 0.5); ctx.save(); ctx.translate(250 + k * 280, 500); ctx.scale(p, p); panel(-120, -150, 240, 300, '#fff', 16); satellite(0, -50, 0.5); T(s, 0, 90, 40, INK); T('⏳ WAITING', 0, 130, 30, '#888'); ctx.restore(); } });
  });
  sc(S('Reliance didn\'t reply') - 0.15, S('Then Musk made a promise.') - 0.15, (t) => {
    grad('#0f3c8c', '#1d64d6'); person(960, 930, 1.4, AMB({ mood: 'neutral', arms: [14, 14] }), t); for (let k = 0; k < 3; k++) T('.', 1150 + k * 40, 350, 120, '#fff', HEAD, 'center', { sc: clamp(Math.sin(t * 4 - k) + 0.5) });
    tag(960, 140, 'NO COMMENT', 80, '#fff', INK, pop(t, S('Reliance didn\'t reply') + 0.3));
  });
  sc(S('Then Musk made a promise.') - 0.15, S('And he added one line') - 0.15, (t) => {
    village(t); person(1300, 940, 1.3, ELON({ mood: 'smile', talk: true, arms: [12, 100] }), t);
    bubble(560, 260, 760, 210, ['TOO EXPENSIVE?', 'NOBODY WILL BUY IT.'], 62, pop(t, S('If Starlink is too expensive') - 0.1), [0.5, 1]);
    if (t > S('So the price will have')) tag(560, 520, 'PROMISE: "AFFORDABLE"', 66, YEL, INK, pop(t, S('So the price will have')));
  });
  sc(S('And he added one line') - 0.15, S('Chapter six.') - 0.1, (t) => {
    grad('#1c2541', '#0b132b'); post(960, 360, 1.15, 'Elon Musk', '@elonmusk', ['"Ambani\'s profits will be lower,', 'but he is not going out of business"'], pop(t, S('His profits will be lower') - 0.2, 0.4), 'profits will be lower');
    person(960, 1000, 0.9, AMB({ mood: 'angry', arms: [14, 14] }), t);
  });
  // =================== CHAPTER 6 ===================
  ch(S('Chapter six.') - 0.1, S('Ambani didn\'t answer') - 0.15, 6, 'THE EMPIRE STRIKES BACK', '#0f3c8c', '#0b132b');
  sc(S('Ambani didn\'t answer') - 0.15, S('A few days later') - 0.15, (t) => {
    space(t); const sat = S('He answered with satellites.'); person(960, 1000, 1.3, AMB({ mood: 'smug', arms: [14, 150] }), t);
    if (t < sat) { post(960, 330, 0.9, 'Reliance', '@reliance', ['(no reply)'], 1); bigX(960, 330, 120, (t - S('Ambani didn\'t answer') - 0.8) / 0.4); }
    else for (let k = 0; k < 12; k++) { const u = clamp((t - sat - k * 0.1) / 0.8); satellite(960 + Math.cos(k / 12 * 6.28) * 600 * ease(u), 380 + Math.sin(k / 12 * 6.28) * 200 * ease(u), 0.4 * u, k); }
  });
  cue(S('He answered with satellites.'), 'hit', 0.9);
  sc(S('A few days later') - 0.15, S('The target?') - 0.15, (t) => {
    space(t); earth(960, 1500, 900, t * 0.5); const ss = S('Nearly sixteen hundred'), gs = S('Twenty-three ground');
    if (t > ss) { const n = Math.floor(clamp((t - ss) / 2) * 1600); for (let k = 0; k < Math.min(260, n / 6); k++) { const a = Math.PI + hash(k) * Math.PI, r = 980 + hash(k, 2) * 160; cir(960 + Math.cos(a) * r, 1500 + Math.sin(a) * r, 4, '#bfe6ff'); } bigNum(t, ss, n.toLocaleString('en-US') + ' SATELLITES', 960, 200, 130, '#fff'); }
    if (t > gs) tag(960, 330, '23 GROUND STATIONS', 60, YEL, INK, pop(t, gs)); if (t > S('Built with the satellite')) tag(960, 430, 'BUILT WITH SES', 50, '#fff', INK, pop(t, S('Built with the satellite')));
    tag(960, 960, 'JIO · INDIA MOBILE CONGRESS 2026', 44, '#0f3c8c', '#fff', 1);
  });
  sc(S('The target?') - 0.15, S('And then came the money.') - 0.15, (t) => {
    grad('#16213e', '#0f3460'); const at = india(960, 560, 820, '#ff9f43'); const t0 = S('More than six hundred thousand');
    if (t > t0) for (let k = 0; k < 140; k++) { if (hash(k, 7) > clamp((t - t0) / 2)) continue; const u = 0.15 + hash(k, 1) * 0.75, v = 0.1 + hash(k, 2) * 0.75; const [x, y] = at(u, v); cir(x, y, 6, '#fff'); }
    bigNum(t, t0, '600,000+ VILLAGES', 1460, 220, 100, YEL);
    if (t > S('The exact places Starlink')) tag(1460, 360, 'STARLINK\'S TARGET TOO', 56, RED, '#fff', pop(t, S('The exact places Starlink')));
  });
  sc(S('And then came the money.') - 0.15, S('Big investors didn\'t flinch') - 0.15, (t) => {
    city('#0b132b', '#1c2541', '#243b6b', '#1b2c52', '#ffd27a'); const ipo = S('That same month, Jio Platforms');
    panel(260, 240, 900, 560, '#fff', 24); T('JIO PLATFORMS', 710, 300, 60, INK); chart(330, 380, 760, 340, [10, 12, 11, 18, 22, 30, 42, 60], clamp((t - ipo) / 3), '#18a957');
    if (t > ipo) tag(1500, 260, 'INDIA\'S LARGEST IPO EVER', 54, YEL, INK, pop(t, ipo + 0.5));
    if (t > S('It raised about')) { bigNum(t, S('It raised about'), '$3.2B RAISED', 1500, 440, 110, '#2ecc71'); bigNum(t, P('It raised about', 'one hundred and eight'), '$108B VALUE', 1500, 600, 110, '#fff'); }
    cash(1500, 900, 1.0);
  });
  cue(S('It raised about'), 'hit', 0.8);
  sc(S('Big investors didn\'t flinch') - 0.15, S('So while Musk was posting') - 0.15, (t) => {
    office('#dfe7f2', '#8b98ae'); for (let k = 0; k < 5; k++) person(260 + k * 220, 940, 0.75, { shirt: '#fff', jacket: ['#2b2d42', '#3d405b', '#22223b', '#4a4e69', '#2b2d42'][k], tie: RED, skin: SK[k % 5], hair: ['side', 'short', 'bald', 'side', 'bun'][k], mood: 'smile', arms: [12, 160] }, t + k);
    bigNum(t, S('Institutional buyers bid'), '26× OVERSUBSCRIBED', 1450, 360, 120, YEL); T('(institutional investors)', 1450, 470, 40, '#555', SANS);
  });
  sc(S('So while Musk was posting') - 0.15, S('Chapter seven.') - 0.1, (t) => {
    grad('#ffffff', '#eef2f8'); rr(958, 0, 4, 1080, 0, '#ccd');
    person(480, 930, 1.25, ELON({ mood: 'angry', talk: true, arms: [12, 60], hold: () => rr(-24, -70, 48, 90, 8, '#222') }), t); tag(480, 150, 'POSTING', 70, INK, '#fff', 1);
    person(1440, 930, 1.25, AMB({ mood: 'smug', arms: [14, 60], hold: () => { ctx.translate(30, -20); cash(0, 0, 0.5); } }), t); tag(1440, 150, 'RAISING MONEY', 70, '#18a957', '#fff', pop(t, P('So while Musk was posting', 'Ambani')));
    if (t > S('And building a satellite')) satellite(1440, 330, 0.6, Math.sin(t) * 0.2);
  });
  // =================== CHAPTER 7 ===================
  ch(S('Chapter seven.') - 0.1, S('Here\'s the thing most') - 0.15, 7, 'WHO ACTUALLY WINS?', YEL, NAVY);
  sc(S('Here\'s the thing most') - 0.15, S('The real battle') - 0.15, (t) => {
    city('#ffd6a5', '#fff1e0', '#e0a96d', '#c48a52', '#fff1c0'); tag(960, 120, 'MUMBAI', 70, INK, '#fff', 1); tower(400, 900, 1.2, '#6b7280', t); tower(1520, 900, 1.2, '#6b7280', t + 0.5);
    person(960, 940, 1.2, { ...crowdP(3), mood: 'smile', arms: [12, 60], hold: () => rr(-12, -30, 24, 40, 4, '#222') }, t);
    if (t > S('A satellite dish can')) { dish(1300, 980, 1.1); bigX(1300, 860, 70, (t - S('A satellite dish can') - 0.5) / 0.4); tag(960, 260, '8¢ PER GB IS HARD TO BEAT', 60, YEL, INK, pop(t, S('A satellite dish can'))); }
  });
  sc(S('The real battle') - 0.15, S('That\'s where hundreds') - 0.15, (t) => {
    const items = [[S('Remote villages.'), 'VILLAGES'], [S('Mountains.'), 'MOUNTAINS'], [S('Islands.'), 'ISLANDS'], [S('Border regions.'), 'BORDER REGIONS']];
    village(t); if (t > S('Mountains.')) { fillPath([[1200, 760], [1500, 360], [1800, 760]], '#8a94a6'); fillPath([[1430, 450], [1500, 360], [1570, 450], [1530, 430], [1500, 460], [1470, 430]], '#fff'); }
    items.forEach(([t0, s], k) => { if (t > t0) tag(300 + k * 440, 130, s, 52, k % 2 ? YEL : '#fff', INK, pop(t, t0)); });
    if (t > S('Places where no cable')) { dish(700, 790, 1.0); satellite(700, 300, 0.6, 0.2); stroke([[700, 360], [700, 700]], 'rgba(255,255,255,0.8)', 6); }
  });
  ['Remote villages.', 'Mountains.', 'Islands.', 'Border regions.'].forEach(s => cue(S(s), 'pop', 0.55));
  sc(S('That\'s where hundreds') - 0.15, S('Chapter eight.') - 0.1, (t) => {
    grad('#16213e', '#0f3460'); const at = india(760, 560, 820, '#ff9f43'); for (let k = 0; k < 90; k++) { const [x, y] = at(0.15 + hash(k, 1) * 0.75, 0.1 + hash(k, 2) * 0.75); cir(x, y, 6, hash(k, 3) > 0.5 ? '#fff' : 'rgba(255,255,255,0.25)'); }
    bigNum(t, S('That\'s where hundreds'), 'STILL OFFLINE', 1450, 380, 120, '#fff');
    if (t > S('And that\'s where the next')) { coin(1450, 640, 110, '$'); tag(1450, 840, 'THE NEXT FORTUNE', 64, YEL, INK, pop(t, S('And that\'s where the next'))); }
  });
  // =================== CHAPTER 8 ===================
  ch(S('Chapter eight.') - 0.1, S('So think back to') - 0.15, 8, 'THE PLAYBOOK COMES HOME', '#2ecc71', NAVY);
  sc(S('So think back to') - 0.15, S('Ten years later') - 0.15, (t) => {
    grad('#f4e3c3', '#e9cfa0'); ctx.globalAlpha = 0.9; calendar(380, 300, 0.75, 'SEPT', '2016'); ctx.globalAlpha = 1;
    person(1100, 930, 1.35, AMB({ mood: 'smug', arms: [14, 160], pose: 'wave' }), t); if (t > S('That newcomer was Jio.')) tag(1100, 150, 'THE NEWCOMER WAS JIO', 66, '#0f3c8c', '#fff', pop(t, S('That newcomer was Jio.')));
  });
  sc(S('Ten years later') - 0.15, S('The question isn\'t') - 0.15, (t) => {
    space(t); earth(960, 1400, 760, t); calendar(380, 300, 0.75, 'OCT', '2026', RED);
    person(1150, 930, 1.35, ELON({ mood: 'smile', arms: [12, 160], pose: 'wave' }), t);
    [[S('Cheap prices.'), 'CHEAP PRICES'], [S('Everyone connected.'), 'EVERYONE CONNECTED']].forEach(([t0, s], k) => { if (t > t0) tag(1500, 220 + k * 120, s, 60, k ? YEL : '#fff', INK, pop(t, t0)); });
  });
  sc(S('The question isn\'t') - 0.15, S('If you enjoyed') - 0.15, (t) => {
    grad('#1c2541', '#0b132b'); person(560, 930, 1.3, AMB({ mood: 'smug', arms: [14, 14] }), t); person(1360, 930, 1.3, ELON({ flip: true, mood: 'angry', arms: [12, 14] }), t);
    T('VS', 960, 520, 200, YEL, HEAD, 'center', { outline: 16, sc: 1 + 0.04 * Math.sin(t * 4) });
    if (t > S('It\'s whether Mukesh')) caption(t, S('It\'s whether Mukesh'), 'WILL HISTORY REPEAT ITSELF?', 140, 90, INK, YEL);
  });
  sc(S('If you enjoyed') - 0.15, DUR + 2, (t) => {
    grad('#14213d', '#22345e'); const t0 = S('If you enjoyed'), cl = t > t0 + 1.4; T('THE MONEY FILES', 960, 160, 100, '#fff', HEAD);
    const p = pop(t, t0, 0.4); ctx.save(); ctx.translate(960, 400); ctx.scale(p, p); rr(-380, -100, 760, 200, 100, cl ? '#666' : RED); T(cl ? 'SUBSCRIBED ✓' : 'SUBSCRIBE', 0, 8, 110, '#fff'); ctx.restore();
    if (t > S('Next time:')) { panel(360, 620, 1200, 260, '#fff', 20); T('NEXT FILE', 960, 680, 46, '#d1601c'); T('THE SECRET HISTORY OF RELIANCE', 960, 790, 80, INK); }
  });
  cue(S('If you enjoyed') + 1.4, 'pop', 0.8);
}
