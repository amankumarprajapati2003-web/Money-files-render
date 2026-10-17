// Thumbnails for Video 4 (rendered at t = 2.5 s): ?variant read from the timing-free scene list
export default function (A) {
  const { ctx, scene, poly, circ, rect, rrect, line, text, bg, person, phoneBig, stamp, pig, MARK, HEAD } = A;
  const V = new URLSearchParams(location.search).get('variant') || 'a';
  scene(0, 10, (t) => {
    if (V === 'a') {
      bg('#141b3a', '#3a1f4a'); const g = ctx.createRadialGradient(1250, 520, 50, 1250, 520, 700); g.addColorStop(0, 'rgba(255,60,60,0.45)'); g.addColorStop(1, 'rgba(255,60,60,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 1080);
      person(470, 1210, 2.55, { shirt: '#3f8f6a', hair: 'short', phone: 1, night: true, gaze: [0.9, -0.3], brow: 'up', mouth: 'open', sweat: true, hands: [[-60, -30], [60, -110]] }, 0.3);
      ctx.save(); ctx.translate(1290, 470); ctx.rotate(-0.03); rrect(-470, -120, 940, 240, 60, '#e9ebf0', 10); poly([[-380, 110], [-440, 190], [-300, 118]], '#e9ebf0', true, 10); text('Hi, is this Sarah?', 0, 6, 104, '#111', HEAD, 'center', 0); ctx.restore();
      text('UNKNOWN NUMBER · 2:14 AM', 1290, 300, 44, '#c9d2ff', HEAD, 'center', 0);
      text("DON'T REPLY", 1290, 130, 170, '#ff2b2b', MARK, 'center', 24);
      ctx.save(); ctx.translate(1290, 840); ctx.rotate(-0.06); rrect(-380, -95, 760, 190, 18, '#ffd400', 8); text('-$1,000,000', 0, 8, 160, '#111', HEAD, 'center', 0); ctx.restore();
    } else {
      bg('#fff1d6', '#ffd18a'); pig(560, 640, 1.6, 0.5, 'scared');
      for (let k = 0; k < 7; k++) circ(300 + k * 90, 950 + (k % 2) * 30, 30, '#ffd34d', 6, 18);
      ctx.save(); ctx.translate(980, 260); ctx.rotate(-0.7); rect(-18, 0, 36, 420, '#8a5a2b'); rect(-110, -50, 220, 100, '#777'); ctx.restore();
      phoneBig(1500, 560, 0.85, [{ t: 0, side: 'in', text: 'Hi, is this Sarah?' }], 3, { who: 'Unknown number' });
      text('PIG BUTCHERING', 760, 140, 140, '#d6202a', MARK, 'center', 20); stamp('SCAM', 1500, 560, 170, -0.18, 1);
    }
  });
}
