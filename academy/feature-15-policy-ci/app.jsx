// Feature 15 — Policy and CI Setup
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f15">
      <TitleScene start={0} num="15" title="CI Policy Setup" sub="$ codeledger setup-ci" />

      <AcademyScene start={3} dur={8} num="15">
        <Eyebrow text="Policies exist · they don't run" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 1300 }}>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 36, color: BRAND.paper, lineHeight: 1.4, marginBottom: 36 }}>
                "Auth changes require owner review."
              </div>
              <div style={{ display: 'inline-block', padding: '20px 30px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.paper, letterSpacing: '0.04em' }}>
                <span style={{ color: '#f87171' }}>buried in a wiki page</span> · no one reads it
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Policies exist. They just don't run automatically." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={12} num="15">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger setup-ci', typeFor: 1.0 },
              { at: 1.4, type: 'dim', text: '', gap: 10 },
              { at: 1.6, type: 'ok',  text: 'Created: .github/workflows/codeledger.yml', size: 22 },
              { at: 2.4, type: 'ok',  text: 'Created: .codeledger/policy.json', size: 22 },
              { at: 3.2, type: 'dim', text: '', gap: 12 },
              { at: 3.4, type: 'banner', text: 'Default mode: advisory', size: 22, bold: true },
              { at: 4.0, type: 'out', text: '', gap: 10 },
              { at: 4.2, type: 'dim', text: 'Next: review policy before enabling blocking checks', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={23} dur={14} num="15">
        <Eyebrow text="Gradual rollout · 4 phases" top={150} />
        <div style={{ position: 'absolute', top: 250, left: 80, right: 80, display: 'flex', gap: 14 }}>
          {[
            { phase: 'Phase 1', title: 'Advisory', sub: 'All pass · signals visible', color: '#4ade80' },
            { phase: 'Phase 2', title: 'PR comments', sub: 'Reviewer sees risk · evidence', color: '#60a5fa' },
            { phase: 'Phase 3', title: 'Shadow governance', sub: 'Dispositions recorded · no block', color: '#a5b4fc' },
            { phase: 'Phase 4', title: 'Selective enforce', sub: 'Only release_blocked blocks', color: BRAND.copper },
          ].map((p, i) => (
            <Sprite key={i} start={23 + 0.4 + i*0.8} end={37} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ flex: 1, opacity: op, transform: `translateY(${(1-op)*16}px)`, padding: '24px 22px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${p.color}40`, borderTop: `4px solid ${p.color}`, borderRadius: 8, minHeight: 240 }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: p.color, fontWeight: 700, marginBottom: 12 }}>{p.phase.toUpperCase()}</div>
                    <div style={{ fontFamily: BRAND.fontSans, fontSize: 26, fontWeight: 700, color: BRAND.paper, letterSpacing: '-0.005em', marginBottom: 10, lineHeight: 1.1 }}>{p.title}</div>
                    <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 16, color: BRAND.termInk, lineHeight: 1.5 }}>{p.sub}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={33} end={36.8}>
          <BottomCaption text="Start advisory. Block only when you trust the signal." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={37} dur={12} num="15">
        <Eyebrow text="policy.json · inspectable · commitable" top={150} />
        <Sprite start={37.4} end={49}>
          <div style={{ position: 'absolute', top: 240, left: 360, right: 360, background: '#0e1424', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '32px 40px', fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.termInk, lineHeight: 1.9 }}>
            <div style={{ color: '#94a3b8' }}>{`{`}</div>
            <div style={{ paddingLeft: 24 }}><span style={{ color: '#c4b5fd' }}>"protected_paths"</span><span style={{ color: '#94a3b8' }}>: </span>[<span style={{ color: '#fbbf24' }}>"src/auth/**"</span>, <span style={{ color: '#fbbf24' }}>"migrations/**"</span>],</div>
            <div style={{ paddingLeft: 24 }}><span style={{ color: '#c4b5fd' }}>"blocking"</span><span style={{ color: '#94a3b8' }}>: </span>[<span style={{ color: '#fbbf24' }}>"release_blocked"</span>],</div>
            <div style={{ paddingLeft: 24 }}><span style={{ color: '#c4b5fd' }}>"require_review"</span><span style={{ color: '#94a3b8' }}>: </span>[<span style={{ color: '#fbbf24' }}>"needs_security_review"</span>]</div>
            <div style={{ color: '#94a3b8' }}>{`}`}</div>
          </div>
        </Sprite>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Inspectable. Automatable. Commitable." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger setup-ci' />
    </Stage>
  );
}
mountApp(App);
