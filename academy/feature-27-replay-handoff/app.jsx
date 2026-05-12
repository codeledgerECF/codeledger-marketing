// Feature 27 — Replay, Time Travel, Handoff
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f27">
      <TitleScene start={0} num="27" title="Replay & Handoff" sub="Context that survives the session" />

      <AcademyScene start={3} dur={8} num="27">
        <Eyebrow text="5pm Friday · handoff to a different timezone" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 160px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: BRAND.fontSerif, fontSize: 30, color: BRAND.paper, lineHeight: 1.45, marginBottom: 30 }}>
                Teammate has:
              </div>
              <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['PR diff', 'commit message', 'silence'].map((s, i) => (
                  <div key={i} style={{ padding: '14px 24px', background: i === 2 ? 'rgba(248,113,113,0.08)' : 'rgba(255,255,255,0.04)', border: i === 2 ? '1px solid #f87171' : '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontFamily: BRAND.fontMono, fontSize: 20, color: i === 2 ? '#f87171' : BRAND.paper, fontWeight: i === 2 ? 700 : 400 }}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="The context lived in the session. The session is gone." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={12} num="27">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger context-handoff', typeFor: 1.2 },
              { at: 1.6, type: 'dim', text: '', gap: 10 },
              { at: 1.8, type: 'banner', text: 'Handoff brief', size: 22, bold: true },
              { at: 2.4, type: 'out', text: '  task, active files, open risks, validation status', size: 20 },
              { at: 3.0, type: 'ok',  text: '  Ready for: another developer or agent', size: 20 },
              { at: 4.4, type: 'dim', text: '', gap: 18 },
              { at: 4.6, type: 'cmd', text: 'codeledger shared-summary', typeFor: 1.0 },
              { at: 5.8, type: 'out', text: 'Audience: reviewer', size: 22 },
              { at: 6.3, type: 'out', text: 'Includes: what changed · why context was selected · what still needs review', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={23} dur={14} num="27">
        <Eyebrow text="Replay · session reconstructed" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 80, right: 80 }}>
          <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', margin: '40px 80px 24px', position: 'relative' }}>
            <Sprite start={23.4} end={37} keepMounted>
              {(({ localTime: lt }) => {
                const prog = clamp(lt/3.0, 0, 1);
                return <div style={{ position: 'absolute', top: 0, left: 0, width: `${prog*100}%`, height: 4, background: 'linear-gradient(to right, #60a5fa, #fbbf24, #4ade80, #B87A6B)' }} />;
              })}
            </Sprite>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', padding: '0 50px' }}>
            {[
              { t: 'activate', d: 'bnd_42f19ac', color: '#60a5fa' },
              { t: 'refine', d: 'guest-coupons.ts', color: '#fbbf24' },
              { t: 'verify', d: 'passed', color: '#4ade80' },
              { t: 'governance', d: 'egr_9f12d0', color: BRAND.copper },
            ].map((e, i) => (
              <Sprite key={i} start={23.6 + i*0.6} end={37} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt/0.5, 0, 1);
                  return (
                    <div style={{ textAlign: 'center', width: 250, opacity: op, transform: `translateY(${(1-op)*12}px) translateY(-72px)` }}>
                      <div style={{ width: 24, height: 24, borderRadius: 12, background: e.color, margin: '0 auto 16px', boxShadow: `0 0 20px ${e.color}` }} />
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.18em', color: e.color, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>{e.t}</div>
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.paper }}>{e.d}</div>
                    </div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </div>
        <Sprite start={33} end={36.8}>
          <BottomCaption text="Replay reconstructs what happened without re-running it." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={37} dur={12} num="27">
        <Eyebrow text="Teammate productive in 2 minutes" top={150} />
        <Sprite start={37.4} end={49}>
          <Card x={420} y={250} width={1080} height={500} accent={BRAND.copper} paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.copper, marginBottom: 18, fontWeight: 700 }}>HANDOFF BRIEF · TEAMMATE VIEW</div>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 32, fontWeight: 700, color: BRAND.paper, marginBottom: 28 }}>Refactor auth middleware</div>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.termInk, lineHeight: 1.9 }}>
              <div><span style={{ color: BRAND.termDim, width: 180, display: 'inline-block' }}>files in play:</span>middleware.ts · token-refresh.ts</div>
              <div><span style={{ color: BRAND.termDim, width: 180, display: 'inline-block' }}>open warning:</span><span style={{ color: '#fbbf24' }}>missing bypass test</span></div>
              <div><span style={{ color: BRAND.termDim, width: 180, display: 'inline-block' }}>verification:</span><span style={{ color: '#4ade80' }}>passed (advisory)</span></div>
              <div><span style={{ color: BRAND.termDim, width: 180, display: 'inline-block' }}>next move:</span>add regression test then re-verify</div>
            </div>
          </Card>
        </Sprite>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Handoff is not a meeting. It is a file." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger context-handoff' />
    </Stage>
  );
}
mountApp(App);
