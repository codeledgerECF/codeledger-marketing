// Feature 12 — Verification
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f12">
      <TitleScene start={0} num="12" title="Verification" sub="$ codeledger verify" />

      <AcademyScene start={3} dur={10} num="12">
        <Eyebrow text="The agent's word vs the evidence" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
            <div style={{ padding: '24px 32px', background: 'rgba(74,222,128,0.06)', border: '1px solid #4ade80', borderRadius: 8, marginBottom: 28 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: '#4ade80', letterSpacing: '0.22em', marginBottom: 10, fontWeight: 700 }}>AGENT SAYS</div>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 28, color: BRAND.paper }}>"Done. The refactor is complete and behavior-preserving."</div>
            </div>
            <div style={{ padding: '24px 32px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: '#f87171', letterSpacing: '0.22em', marginBottom: 10, fontWeight: 700 }}>REVIEWER FINDS</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 20, color: BRAND.paper, lineHeight: 1.8 }}>
                <div>✗ regression test missing for bypass path</div>
                <div>✗ out-of-scope file changed: src/shared/core/middleware.ts</div>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="The agent said safe. The evidence disagreed." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={14} num="12">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger verify --task "Refactor auth middleware"', typeFor: 1.6 },
              { at: 2.0, type: 'dim', text: '', gap: 10 },
              { at: 2.2, type: 'ok',  text: 'Decision: passed', size: 26, bold: true },
              { at: 3.0, type: 'out', text: '', gap: 12 },
              { at: 3.2, type: 'out', text: 'Evidence:', size: 22 },
              { at: 3.8, type: 'ok',  text: '  active bundle: current', size: 20 },
              { at: 4.4, type: 'ok',  text: '  changed files: within task scope', size: 20 },
              { at: 5.0, type: 'ok',  text: '  nearby tests: detected', size: 20 },
              { at: 5.6, type: 'ok',  text: '  policy: satisfied', size: 20 },
              { at: 6.4, type: 'dim', text: '', gap: 14 },
              { at: 6.6, type: 'warn',text: 'Next: run targeted tests before opening PR', size: 20 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={27} dur={15} num="12">
        <Eyebrow text="Five deterministic checks" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 240, right: 240 }}>
          {[
            { t: 'Active bundle current', ok: true, delay: 0.4 },
            { t: 'Changed files within task scope', ok: true, delay: 1.2 },
            { t: 'Nearby tests detected', ok: true, delay: 2.0 },
            { t: 'Policy satisfied', ok: true, delay: 2.8 },
            { t: 'Test run evidence', ok: false, delay: 3.6 },
          ].map((c, i) => (
            <Sprite key={i} start={27 + c.delay} end={42} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 24px', marginBottom: 12, background: c.ok ? 'rgba(74,222,128,0.05)' : 'rgba(251,191,36,0.05)', border: `1px solid ${c.ok ? '#4ade80' : '#fbbf24'}40`, borderLeft: `3px solid ${c.ok ? '#4ade80' : '#fbbf24'}`, borderRadius: 6, opacity: op, transform: `translateX(${(1-op)*-16}px)` }}>
                    <div style={{ width: 32, height: 32, borderRadius: 16, background: c.ok ? '#4ade80' : '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0d18', fontWeight: 800, fontSize: 18 }}>{c.ok ? '✓' : '!'}</div>
                    <div style={{ flex: 1, fontFamily: BRAND.fontSerif, fontSize: 22, color: BRAND.paper }}>{c.t}</div>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: c.ok ? '#4ade80' : '#fbbf24', fontWeight: 700, letterSpacing: '0.18em' }}>{c.ok ? 'PASS' : 'PENDING'}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={39} end={41.8}>
          <BottomCaption text="Deterministic checks. Not confidence. Evidence." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={42} dur={13} num="12">
        <Eyebrow text="Evidence-backed PR" top={150} />
        <Sprite start={42.4} end={55}>
          <Card x={360} y={240} width={1200} height={520} accent="#4ade80" paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <div style={{ padding: '6px 14px', background: 'rgba(74,222,128,0.2)', border: '1px solid #4ade80', borderRadius: 14, fontFamily: BRAND.fontMono, fontSize: 13, color: '#4ade80', fontWeight: 700 }}>PR #4421 · OPEN</div>
              <div style={{ flex: 1 }} />
              <div style={{ padding: '6px 12px', background: 'rgba(74,222,128,0.15)', border: '1px solid #4ade80', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 12, color: '#4ade80', fontWeight: 700, letterSpacing: '0.18em' }}>VERIFY: PASSED</div>
            </div>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 36, fontWeight: 700, color: BRAND.paper, marginBottom: 30 }}>Refactor auth middleware</div>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termInk, lineHeight: 1.9 }}>
              <div><span style={{ color: BRAND.termDim, width: 200, display: 'inline-block' }}>Verify report:</span><span style={{ color: '#4ade80' }}>ver_9012ab</span></div>
              <div><span style={{ color: BRAND.termDim, width: 200, display: 'inline-block' }}>Bundle:</span><span>bnd_42f19ac</span></div>
              <div><span style={{ color: BRAND.termDim, width: 200, display: 'inline-block' }}>Evidence:</span><span style={{ color: '#4ade80' }}>5 checks · evidence-backed</span></div>
            </div>
          </Card>
        </Sprite>
        <Sprite start={52} end={54.8}>
          <BottomCaption text="The repo verifies. Not just the agent." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger verify --task "..."' />
    </Stage>
  );
}
mountApp(App);
