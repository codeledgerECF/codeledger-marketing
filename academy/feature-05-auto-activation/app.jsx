// Feature 05 — Auto-Activation
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f05">
      <TitleScene start={0} num="05" title="Auto-Activation" sub="Zero-friction context" />

      {/* Problem: stale through 3 tasks */}
      <AcademyScene start={3} dur={8} num="05">
        <Eyebrow text="Three tasks · one stale bundle" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120 }}>
          {[
            { t: 'Fix the auth bug', delay: 0.3, ctx: 'auth files' },
            { t: 'Now update the payment webhook', delay: 1.4, ctx: 'still auth files' },
            { t: 'Also check the tests', delay: 2.5, ctx: 'still auth files' },
          ].map((m, i) => (
            <Sprite key={i} start={3 + m.delay} end={11} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20, opacity: op, transform: `translateY(${(1-op)*10}px)` }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.termDim, width: 60 }}>msg {i+1}</div>
                    <div style={{
                      padding: '14px 22px', background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
                      fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper, flex: 1,
                    }}>"{m.t}"</div>
                    <div style={{
                      padding: '6px 12px',
                      background: i === 0 ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
                      border: `1px solid ${i === 0 ? '#4ade80' : '#f87171'}`, borderRadius: 4,
                      fontFamily: BRAND.fontMono, fontSize: 13, color: i === 0 ? '#4ade80' : '#f87171', fontWeight: 600,
                    }}>{m.ctx}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Context never updated. Stale for 2 tasks." />
        </Sprite>
      </AcademyScene>

      {/* Command — hooks fire */}
      <AcademyScene start={11} dur={12} num="05">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd=".codeledger/hooks.json"
            lines={[
              { at: 0, type: 'banner', text: '⚡ hooks.json triggered · UserPromptSubmit', size: 24, bold: true },
              { at: 0.8, type: 'dim', text: '', gap: 14 },
              { at: 1.0, type: 'cmd', text: 'codeledger auto-refresh --prompt "Add retry handling to the payment webhook"', typeFor: 1.6 },
              { at: 3.0, type: 'dim', text: '', gap: 10 },
              { at: 3.2, type: 'ok',  text: 'Auto-refresh decision: refreshed', size: 22, bold: true },
              { at: 4.0, type: 'out', text: 'Reason: new task detected', size: 20 },
              { at: 4.4, type: 'out', text: 'Task: Add retry handling to the payment webhook', size: 20 },
              { at: 4.9, type: 'out', text: 'Bundle: bnd_91be4d2', size: 20 },
              { at: 5.4, type: 'dim', text: 'Wrote: .codeledger/active-bundle.md', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      {/* What it does — flowchart */}
      <AcademyScene start={23} dur={15} num="05">
        <Eyebrow text="Smart skip · auto-activate" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 80, right: 80, display: 'flex', gap: 30 }}>
          <Sprite start={23.4} end={38} keepMounted>
            {(({ localTime: lt }) => (
              <div style={{ flex: 1, opacity: clamp(lt/0.5, 0, 1) }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 14 }}>USER SENDS MESSAGE</div>
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: 22, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper, minHeight: 140 }}>"Refactor the auth flow"</div>
                <div style={{ textAlign: 'center', fontFamily: BRAND.fontMono, fontSize: 32, color: BRAND.copper, margin: '24px 0' }}>↓</div>
                <div style={{
                  background: 'rgba(184,122,107,0.08)', border: '1px solid #B87A6B', borderRadius: 10,
                  padding: 22, textAlign: 'center',
                  fontFamily: BRAND.fontSans, fontSize: 20, fontWeight: 700, color: BRAND.copper,
                }}>Is this a new meaningful task?</div>
              </div>
            ))}
          </Sprite>

          <Sprite start={26} end={38} keepMounted>
            {(({ localTime: lt }) => (
              <div style={{ flex: 1, opacity: clamp(lt/0.5, 0, 1), display: 'flex', flexDirection: 'column', gap: 30, justifyContent: 'center' }}>
                <div style={{
                  background: 'rgba(74,222,128,0.08)', border: '1px solid #4ade80', borderRadius: 10,
                  padding: 22,
                }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.22em', color: '#4ade80', marginBottom: 8 }}>YES → ACTIVATE</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.paper, lineHeight: 1.8 }}>
                    <div>"fix the webhook"</div>
                    <div>"refactor auth"</div>
                    <div>"add validation"</div>
                  </div>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10,
                  padding: 22,
                }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 8 }}>NO → SKIP</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termDim, lineHeight: 1.8 }}>
                    <div>"yes please"</div>
                    <div>"continue"</div>
                    <div>"looks good"</div>
                  </div>
                </div>
              </div>
            ))}
          </Sprite>
        </div>
        <Sprite start={35} end={37.8}>
          <BottomCaption text="The hook decides. Every prompt. Automatically." />
        </Sprite>
      </AcademyScene>

      {/* Payoff: session timeline 5 tasks each w fresh bundle */}
      <AcademyScene start={38} dur={11} num="05">
        <Eyebrow text="Five tasks · five fresh bundles" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 120, right: 120 }}>
          {['Fix auth bug', 'Update webhook retry', 'Add discount validation', 'Refactor middleware', 'Tighten tests'].map((t, i) => (
            <Sprite key={i} start={38.4 + i*0.6} end={49} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16, opacity: op, transform: `translateX(${(1-op)*-16}px)` }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: BRAND.termDim, width: 50, textAlign: 'right' }}>{i+1}.</div>
                    <div style={{
                      flex: 1, padding: '12px 20px', background: 'rgba(74,222,128,0.06)',
                      border: '1px solid rgba(74,222,128,0.3)', borderLeft: '3px solid #4ade80', borderRadius: 6,
                      fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 20, color: BRAND.paper,
                    }}>{t}</div>
                    <div style={{
                      padding: '8px 14px', background: 'rgba(184,122,107,0.1)', border: '1px solid #B87A6B', borderRadius: 4,
                      fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.copper, fontWeight: 600,
                    }}>bnd_{(0x42f19ac + i*0x11).toString(16)}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={46} end={48.8}>
          <BottomCaption text="Every task. Right context. No manual steps." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='auto-activation · enabled via hooks' />
    </Stage>
  );
}
mountApp(App);
