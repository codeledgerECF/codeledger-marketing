// Shared helpers for all CodeLedger Academy videos.

function SeriesBug({ label }) {
  return (
    <div style={{
      position: 'absolute', top: 56, left: 80,
      display: 'flex', alignItems: 'center', gap: 14,
      fontFamily: BRAND.fontMono, fontWeight: 600,
      color: 'rgba(246,239,225,0.55)',
      fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase',
    }}>
      <div style={{ width: 14, height: 14, background: BRAND.copper, transform: 'rotate(45deg)' }} />
      <span style={{ color: BRAND.copper }}>CL</span>
      <span style={{ color: 'rgba(246,239,225,0.35)' }}>·</span>
      <span>{label}</span>
    </div>
  );
}

// Title scene helper. duration = 3s
function TitleScene({ start, num, title, sub }) {
  const end = start + 3;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug label={`CodeLedger Academy · Feature ${num}`} />
        <Sprite start={start + 0.1} end={end}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 24,
          }}>
            <div style={{
              fontFamily: BRAND.fontMono, fontSize: 14,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: BRAND.copper, fontWeight: 600,
            }}>Feature {num}</div>
            <div style={{
              fontFamily: BRAND.fontSans, fontWeight: 800,
              fontSize: 120, color: BRAND.paper,
              letterSpacing: '-0.04em', lineHeight: 1, textAlign: 'center',
              textWrap: 'balance', padding: '0 80px',
            }}>{title}</div>
            <div style={{
              fontFamily: BRAND.fontMono, fontSize: 26,
              color: BRAND.termGo, marginTop: 12,
              textAlign: 'center',
            }}>{sub}</div>
          </div>
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// End scene helper. duration = 6s
function EndScene({ start, cmd }) {
  const end = start + 6;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug label="CodeLedger Academy" />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 36,
        }}>
          <Sprite start={start + 0.2} end={end} keepMounted>
            {(({ localTime: lt }) => {
              const txt = typedText(cmd, 0, 1.2, lt);
              return (
                <div style={{
                  fontFamily: BRAND.fontMono, fontSize: 64, color: BRAND.termInk,
                  textAlign: 'center', maxWidth: 1700,
                }}>
                  <span style={{ color: BRAND.copper, fontWeight: 600 }}>$ </span>
                  {txt}
                  <span style={{
                    display: 'inline-block', width: 18, height: 56,
                    background: BRAND.termInk, marginLeft: 8,
                    transform: 'translateY(8px)',
                    opacity: Math.floor(lt * 2) % 2 === 0 ? 1 : 0.15,
                  }} />
                </div>
              );
            })}
          </Sprite>
          <Sprite start={start + 2.0} end={end}>
            <div style={{
              fontFamily: BRAND.fontMono, fontSize: 16,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'rgba(246,239,225,0.5)',
              fontWeight: 600, marginTop: 18,
              textAlign: 'center',
            }}>CodeLedger Academy · contextecf.com</div>
          </Sprite>
        </div>
        <Sprite start={end - 0.6} end={end} keepMounted>
          {(({ progress }) => (
            <div style={{
              position: 'absolute', inset: 0,
              background: '#000', opacity: progress, pointerEvents: 'none',
            }} />
          ))}
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// Caption helper - bottom-centered for scenes
function BottomCaption({ text, accent = true, size = 36 }) {
  return (
    <NarrationBlock
      style={{ bottom: 70 }}
      color={BRAND.paper}
      lines={[{ text, size, accent, weight: 700 }]}
      align="center"
    />
  );
}

// Scene wrapper — dark background with series bug
function AcademyScene({ start, dur, num, children }) {
  return (
    <Sprite start={start} end={start + dur}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug label={`CodeLedger Academy · Feature ${num}`} />
        {children}
      </SceneFrame>
    </Sprite>
  );
}

// Eyebrow — small uppercase label above a scene
function Eyebrow({ text, top = 150 }) {
  return (
    <div style={{
      position: 'absolute', top, left: 0, right: 0,
      textAlign: 'center',
      fontFamily: BRAND.fontMono, fontSize: 14,
      letterSpacing: '0.32em', textTransform: 'uppercase',
      color: BRAND.copper, fontWeight: 600,
    }}>{text}</div>
  );
}

// Page mount helper
function mountApp(App) {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}

Object.assign(window, {
  SeriesBug, TitleScene, EndScene, BottomCaption,
  AcademyScene, Eyebrow, mountApp,
});
