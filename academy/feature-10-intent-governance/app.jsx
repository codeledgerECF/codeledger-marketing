// Feature 10 — Intent Governance
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f10">
      <TitleScene start={0} num="10" title="Intent Governance" sub="$ codeledger intent" />

      <AcademyScene start={3} dur={10} num="10">
        <Eyebrow text="Session drift · undetected" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[
            { t: 'Refactor auth middleware', src: 'src/auth/*', tag: 'declared', color: '#4ade80', delay: 0.3 },
            { t: 'Edit payment webhook retry logic', src: 'src/payments/webhook.ts', tag: 'msg 10', color: '#fbbf24', delay: 1.6 },
            { t: 'Restructure database migrations', src: 'migrations/**', tag: 'msg 20', color: '#f87171', delay: 2.8 },
          ].map((m, i) => (
            <Sprite key={i} start={3 + m.delay} end={13} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18, opacity: op, transform: `translateY(${(1-op)*12}px)` }}>
                    <div style={{ width: 80, fontFamily: BRAND.fontMono, fontSize: 13, color: m.color, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{m.tag}</div>
                    <div style={{ flex: 1, padding: '14px 22px', background: `rgba(${m.color === '#4ade80' ? '74,222,128' : m.color === '#fbbf24' ? '251,191,36' : '248,113,113'},0.08)`, border: `1px solid ${m.color}`, borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper }}>"{m.t}"</div>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: m.color, width: 220, textAlign: 'right' }}>{m.src}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={6.5} end={13}>
          <div style={{ position: 'absolute', top: 510, left: 120, right: 120, padding: '18px 28px', background: 'rgba(248,113,113,0.08)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 20, color: '#f87171', textAlign: 'center', fontWeight: 600 }}>
            All 3 tracked as: "auth refactor"
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="Task drift. No one noticed." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={12} num="10">
        <Sprite start={13.2} end={25}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger intent show', typeFor: 1.0 },
              { at: 1.4, type: 'dim', text: '', gap: 12 },
              { at: 1.6, type: 'out', text: 'Task: Refactor auth middleware', size: 24 },
              { at: 2.4, type: 'err', text: 'Status: DRIFTED', size: 28, bold: true },
              { at: 3.2, type: 'warn',text: 'Current work touching: src/payments/webhook.ts', size: 22 },
              { at: 4.0, type: 'out', text: 'Last acknowledged: 09:41', size: 22 },
              { at: 5.0, type: 'dim', text: '', gap: 14 },
              { at: 5.2, type: 'dim', text: 'Action: acknowledge or correct intent', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={25} dur={14} num="10">
        <Eyebrow text="Drift score rises · choose a path" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim, letterSpacing: '0.18em', marginBottom: 12 }}>DECLARED · refactor:auth:middleware</div>
            <Sprite start={25.6} end={39} keepMounted>
              {(({ localTime: lt }) => {
                const prog = clamp(lt/2.5, 0, 1);
                return (
                  <div style={{ height: 30, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                    <div style={{ width: `${prog*72}%`, height: '100%', background: `linear-gradient(to right, #4ade80 0%, #fbbf24 50%, #f87171 100%)` }} />
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${prog*72}%`, padding: '0 14px', display: 'flex', alignItems: 'center', fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.paper, fontWeight: 700 }}>drift {Math.round(prog * 72)}%</div>
                  </div>
                );
              })}
            </Sprite>
          </div>
          <Sprite start={28.5} end={39}>
            <div style={{ padding: '20px 28px', background: 'rgba(184,122,107,0.1)', border: '1px solid #B87A6B', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.copper, fontWeight: 600, textAlign: 'center', marginBottom: 26 }}>
              ⚠ Intent misaligned — acknowledge or correct
            </div>
          </Sprite>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <Sprite start={31} end={39}>
              <div style={{ padding: '24px 28px', background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.4)', borderTop: '3px solid #4ade80', borderRadius: 8 }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#4ade80', fontWeight: 700, marginBottom: 12 }}>ACKNOWLEDGE</div>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.paper }}>$ codeledger intent ack</div>
              </div>
            </Sprite>
            <Sprite start={32} end={39}>
              <div style={{ padding: '24px 28px', background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.4)', borderTop: '3px solid #60a5fa', borderRadius: 8 }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#60a5fa', fontWeight: 700, marginBottom: 12 }}>CORRECT</div>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.paper }}>$ codeledger intent set --task "..."</div>
              </div>
            </Sprite>
          </div>
        </div>
        <Sprite start={36} end={38.8}>
          <BottomCaption text="Drift becomes visible — and a decision." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={39} dur={10} num="10">
        <Eyebrow text="Every drift event recorded" top={170} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sprite start={39.4} end={49}>
            <div style={{ textAlign: 'center', maxWidth: 1400 }}>
              <div style={{ fontFamily: BRAND.fontSans, fontWeight: 800, fontSize: 76, color: BRAND.paper, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                AI sessions wander.<br/><span style={{ color: BRAND.copper }}>Intent makes drift visible.</span>
              </div>
            </div>
          </Sprite>
        </div>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger intent show' />
    </Stage>
  );
}
mountApp(App);
