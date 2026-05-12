// Shared visual primitives for the CodeLedger launch video.
// All components must be used inside a <Stage> and (usually) a <Sprite>.

// ── Brand palette ──────────────────────────────────────────────────────────
const BRAND = {
  paper:    '#f6efe1',
  paper2:   '#eee4cf',
  ink:      '#1c2230',
  inkSoft:  '#5b6478',
  rule:     '#d8cdb3',
  navy:     '#1A2744',
  navy2:    '#2b3a5c',
  navyDeep: '#0e1628',
  copper:   '#B87A6B',
  copperSoft:'#f5e4df',
  ochre:    '#bc6c25',
  green:    '#0b6e4f',
  greenSoft:'#e4efe8',
  brick:    '#a23b2a',
  termBg:   '#0a0f1c',
  termInk:  '#d8e0ee',
  termDim:  '#6a7895',
  termAcc:  '#e6c896',
  termGo:   '#7ed4a8',
  termWarn: '#f0b170',
  termErr:  '#f08770',
  fontSans: '"Inter Tight", system-ui, sans-serif',
  fontSerif:'"Source Serif 4", Georgia, serif',
  fontMono: '"JetBrains Mono", ui-monospace, monospace',
};

// ── Narration: copper eyebrow + ink line(s), bottom-third ──────────────────
// Each "beat" is a narration line that fades in, holds, fades out.
// Multiple Narration sprites can be stacked across a scene.
function NarrationBlock({ lines = [], style = {}, accent = BRAND.copper, color = BRAND.paper, align = 'left', maxWidth = 1100 }) {
  const { localTime, duration } = useSprite();
  const entry = 0.45;
  const exit = 0.45;
  const exitStart = Math.max(0, duration - exit);
  let op = 1, ty = 0;
  if (localTime < entry) {
    const t = Easing.easeOutCubic(clamp(localTime / entry, 0, 1));
    op = t; ty = (1 - t) * 14;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exit, 0, 1));
    op = 1 - t; ty = -t * 6;
  }
  return (
    <div style={{
      position: 'absolute',
      left: 120, right: 120, bottom: 120,
      opacity: op,
      transform: `translateY(${ty}px)`,
      textAlign: align,
      ...style,
    }}>
      <div style={{
        maxWidth, marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: BRAND.fontSerif,
            fontStyle: i === 0 ? 'normal' : 'italic',
            fontSize: line.size || 40,
            fontWeight: line.weight || 500,
            lineHeight: 1.32,
            color: line.accent ? accent : color,
            letterSpacing: '0.002em',
            textWrap: 'balance',
            marginTop: i === 0 ? 0 : 6,
          }}>
            {line.text || line}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Centered hero caption (for impact moments) ─────────────────────────────
function HeroCaption({ eyebrow, title, accent = BRAND.copper, color = BRAND.paper }) {
  const { localTime, duration } = useSprite();
  const entry = 0.6;
  const exit = 0.5;
  const exitStart = Math.max(0, duration - exit);
  let op = 1, ty = 0, scale = 1;
  if (localTime < entry) {
    const t = Easing.easeOutCubic(clamp(localTime / entry, 0, 1));
    op = t; ty = (1 - t) * 20; scale = 0.98 + 0.02 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exit, 0, 1));
    op = 1 - t; ty = -t * 10; scale = 1 + 0.01 * t;
  }
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: op, transform: `translateY(${ty}px) scale(${scale})`,
      textAlign: 'center', padding: '0 160px',
    }}>
      {eyebrow && (
        <div style={{
          fontFamily: BRAND.fontMono,
          fontSize: 18, letterSpacing: '0.28em',
          color: accent, fontWeight: 600, textTransform: 'uppercase',
          marginBottom: 36,
        }}>{eyebrow}</div>
      )}
      <div style={{
        fontFamily: BRAND.fontSans, fontWeight: 800,
        fontSize: 96, lineHeight: 1.02,
        letterSpacing: '-0.035em',
        color, textWrap: 'balance', maxWidth: 1500,
      }}>{title}</div>
    </div>
  );
}

// ── Terminal line: types out chars over `typeFor` seconds ──────────────────
function typedText(full, started, typeFor, t) {
  if (t < started) return '';
  const local = clamp((t - started) / typeFor, 0, 1);
  const n = Math.floor(full.length * local);
  return full.slice(0, n);
}

// Terminal panel — render lines that appear/type at specific local times.
// lines: [{at, type:'cmd'|'out'|'ok'|'warn'|'err'|'dim'|'banner', text, typeFor?, blink?}]
function Terminal({
  x = 120, y = 120, width = 1680, height = 720,
  lines = [],
  title = 'codeledger',
  cwd = '~/payments',
  caret = true,
  scale = 1,
}) {
  const { localTime } = useSprite();
  const t = localTime;
  const colorFor = {
    cmd: BRAND.paper,
    out: BRAND.termInk,
    ok: BRAND.termGo,
    warn: BRAND.termWarn,
    err: BRAND.termErr,
    dim: BRAND.termDim,
    banner: BRAND.termAcc,
    prompt: BRAND.copper,
  };
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width, height,
      background: BRAND.termBg,
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 14,
      boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
      overflow: 'hidden',
      transform: `scale(${scale})`, transformOrigin: 'center',
      fontFamily: BRAND.fontMono,
    }}>
      {/* Chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '14px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          {['#ff6058', '#ffbd2f', '#28c940'].map(c => (
            <div key={c} style={{ width: 12, height: 12, borderRadius: 6, background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, textAlign: 'center',
          fontFamily: BRAND.fontMono, fontSize: 13,
          color: BRAND.termDim, letterSpacing: '0.06em',
        }}>{title} — {cwd}</div>
        <div style={{ width: 60 }} />
      </div>

      {/* Body */}
      <div style={{
        padding: '28px 32px',
        fontSize: 22, lineHeight: 1.55,
        color: BRAND.termInk,
      }}>
        {lines.map((line, i) => {
          if (t < line.at) return null;
          const text = line.typeFor
            ? typedText(line.text, line.at, line.typeFor, t)
            : line.text;
          const isLast = i === lines.length - 1;
          const showCaret = caret && isLast && t < line.at + (line.typeFor || 0.001) + 0.3;
          return (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 12,
              color: colorFor[line.type] || BRAND.termInk,
              whiteSpace: 'pre',
              marginTop: line.gap || 0,
              fontWeight: line.bold ? 600 : 400,
              fontSize: line.size || 22,
              opacity: line.opacity != null ? line.opacity : 1,
            }}>
              {line.type === 'cmd' && (
                <span style={{ color: BRAND.copper, fontWeight: 600 }}>$</span>
              )}
              <span>
                {text}
                {showCaret && (
                  <span style={{
                    display: 'inline-block', width: 10, height: 22,
                    background: BRAND.termInk, marginLeft: 4,
                    transform: 'translateY(3px)',
                    opacity: Math.floor(t * 2) % 2 === 0 ? 1 : 0.2,
                  }} />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ranked file scan list (Scene 2) ────────────────────────────────────────
function FileScanList({ x, y, files = [], start = 0, perItem = 0.06 }) {
  const { localTime } = useSprite();
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      fontFamily: BRAND.fontMono, fontSize: 18,
      color: BRAND.termInk,
    }}>
      {files.map((f, i) => {
        const at = start + i * perItem;
        const visible = localTime >= at;
        if (!visible) return null;
        const local = clamp((localTime - at) / 0.25, 0, 1);
        const op = local;
        const tx = (1 - local) * -10;
        return (
          <div key={i} style={{
            display: 'flex', gap: 18, alignItems: 'baseline',
            padding: '4px 0',
            opacity: op, transform: `translateX(${tx}px)`,
          }}>
            <span style={{ color: BRAND.termDim, width: 32, textAlign: 'right' }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ color: f.dim ? BRAND.termDim : BRAND.termAcc, width: 70 }}>{f.score}</span>
            <span style={{ color: f.dim ? BRAND.termDim : BRAND.termInk }}>{f.path}</span>
          </div>
        );
      })}
    </div>
  );
}

// ── Card (Discovery / Review / Summary panels) ─────────────────────────────
function Card({ x, y, width, height, children, accent = BRAND.copper, style = {}, paper = BRAND.paper }) {
  const { localTime, duration } = useSprite();
  const entry = 0.6;
  let op = 1, scale = 1, ty = 0;
  if (localTime < entry) {
    const t = Easing.easeOutCubic(clamp(localTime / entry, 0, 1));
    op = t; scale = 0.96 + 0.04 * t; ty = (1 - t) * 16;
  }
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width, height,
      background: paper,
      border: `1px solid ${BRAND.rule}`,
      borderLeft: `6px solid ${accent}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      borderRadius: 4,
      opacity: op, transform: `translateY(${ty}px) scale(${scale})`,
      fontFamily: BRAND.fontSerif, color: BRAND.ink,
      padding: 36,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── Stamped status pill (GO / WARN / etc) ──────────────────────────────────
function StatusPill({ label, color = BRAND.green, bg = BRAND.greenSoft, size = 14 }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: BRAND.fontMono, fontSize: size,
      fontWeight: 700, letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color, background: bg,
      padding: '6px 14px',
      borderRadius: 2,
      border: `1px solid ${color}`,
      whiteSpace: 'nowrap',
    }}>{label}</span>
  );
}

// ── Ticker number — counts up to a target value ────────────────────────────
function Ticker({ from = 0, to, start = 0, dur = 1, fmt = (v) => Math.round(v).toLocaleString(), style }) {
  const { localTime } = useSprite();
  let val = to;
  if (localTime < start) val = from;
  else if (localTime < start + dur) {
    const t = Easing.easeOutCubic(clamp((localTime - start) / dur, 0, 1));
    val = from + (to - from) * t;
  }
  return <span style={style}>{fmt(val)}</span>;
}

// ── Scene-frame: applies a subtle vignette + scanline texture overlay ──────
function SceneFrame({ background = BRAND.paper, dark = false, children }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background, overflow: 'hidden',
    }}>
      {children}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: dark
          ? 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)'
          : 'radial-gradient(ellipse at center, transparent 55%, rgba(28,34,48,0.12) 100%)',
      }} />
      {/* Paper grain / scanlines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: dark ? 0.06 : 0.03,
        backgroundImage: dark
          ? 'repeating-linear-gradient(to bottom, transparent 0 2px, rgba(255,255,255,0.6) 2px 3px)'
          : 'repeating-linear-gradient(to bottom, transparent 0 60px, rgba(26,39,68,0.4) 60px 61px)',
      }} />
    </div>
  );
}

// ── Chrome/header used across the deck (small ContextECF mark in corner) ───
function CornerMark({ light = false, label = 'CodeLedger', sub = 'v0.10.18' }) {
  return (
    <div style={{
      position: 'absolute', top: 60, left: 80,
      display: 'flex', alignItems: 'center', gap: 14,
      fontFamily: BRAND.fontSans, fontWeight: 800,
      color: light ? BRAND.paper : BRAND.navy,
      fontSize: 22, letterSpacing: '-0.005em',
      whiteSpace: 'nowrap',
    }}>
      <div style={{
        width: 18, height: 18, background: BRAND.copper,
        transform: 'rotate(45deg)', flexShrink: 0,
      }} />
      <span style={{ whiteSpace: 'nowrap' }}>Context<span style={{ color: BRAND.copper }}>ECF</span> · {label}</span>
      <span style={{
        fontFamily: BRAND.fontMono, fontSize: 12,
        color: light ? 'rgba(246,239,225,0.45)' : BRAND.inkSoft,
        letterSpacing: '0.18em', fontWeight: 500,
        marginLeft: 6,
        whiteSpace: 'nowrap',
      }}>{sub}</span>
    </div>
  );
}

// ── Slow drift wrapper (used for background scenes) ────────────────────────
function Drift({ amount = 30, dur = 12, children }) {
  const { localTime } = useSprite();
  const phase = (localTime % dur) / dur;
  const dx = Math.sin(phase * Math.PI * 2) * amount;
  const dy = Math.cos(phase * Math.PI * 2) * amount * 0.6;
  return (
    <div style={{
      position: 'absolute', inset: 0,
      transform: `translate(${dx}px, ${dy}px)`,
    }}>{children}</div>
  );
}

Object.assign(window, {
  BRAND,
  NarrationBlock, HeroCaption,
  Terminal, FileScanList, Card, StatusPill, Ticker,
  SceneFrame, CornerMark, Drift,
  typedText,
});
