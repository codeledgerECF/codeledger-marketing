// Feature 14 — CI and PR Intelligence
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f14">
      <TitleScene start={0} num="14" title="PR Intelligence" sub="$ codeledger ci pr-check" />

      <AcademyScene start={3} dur={10} num="14">
        <Eyebrow text="The PR looked fine" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
            <div style={{ padding: '20px 28px', background: '#fff', borderRadius: 8, marginBottom: 24, color: '#1f2328' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ background: '#1f883d', color: '#fff', padding: '4px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Open</span>
                <span style={{ fontFamily: BRAND.fontSans, fontSize: 22, fontWeight: 500 }}>Minor refactor, no behavior changes</span>
                <span style={{ color: '#59636e' }}>#4421</span>
              </div>
              <div style={{ fontFamily: BRAND.fontSerif, fontSize: 16, color: '#59636e', fontStyle: 'italic', marginTop: 12 }}>"Just a small cleanup."</div>
            </div>
            <div style={{ padding: '14px 22px', background: 'rgba(248,113,113,0.08)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper }}>
              <span style={{ color: BRAND.termDim, marginRight: 12 }}>NEXT DAY</span>
              <span style={{ color: '#f87171', fontWeight: 700 }}>incident · auth bypass regression</span>
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="The PR looked fine. The evidence was missing." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={14} num="14">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="ci · pr-check"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger ci pr-check --governance', typeFor: 1.4 },
              { at: 1.8, type: 'dim', text: '', gap: 10 },
              { at: 2.0, type: 'banner', text: 'PR #4421 · changed files: 5 · risk: medium', size: 22, bold: true },
              { at: 2.8, type: 'out', text: '', gap: 10 },
              { at: 3.0, type: 'out', text: 'Evidence:', size: 22 },
              { at: 3.5, type: 'ok',  text: '  bundle: bnd_42f19ac', size: 20 },
              { at: 4.0, type: 'ok',  text: '  tests: 2', size: 20 },
              { at: 4.5, type: 'warn',text: '  missing evidence: 1', size: 20 },
              { at: 5.2, type: 'dim', text: '', gap: 10 },
              { at: 5.4, type: 'out', text: 'Governance:', size: 22 },
              { at: 5.9, type: 'warn',text: '  disposition: safe_with_tests_required', size: 22, bold: true },
              { at: 6.4, type: 'out', text: '  receipt: egr_pr_418_001', size: 20 },
              { at: 7.0, type: 'dim', text: '', gap: 10 },
              { at: 7.2, type: 'ok',  text: 'Decision: advisory_pass', size: 22, bold: true },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={27} dur={15} num="14">
        <Eyebrow text="Reviewer sees · in GitHub · already" top={150} />
        <Sprite start={27.4} end={42}>
          <div style={{ position: 'absolute', top: 230, left: 220, right: 220, background: '#fff', border: '1px solid #d0d7de', borderRadius: 12, overflow: 'hidden', color: '#1f2328' }}>
            <div style={{ padding: '16px 22px', background: '#f6f8fa', borderBottom: '1px solid #d0d7de', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: BRAND.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 12, height: 12, background: BRAND.copper, transform: 'rotate(45deg)' }} />
              </div>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 14 }}><b>codeledger-bot</b> commented · just now</div>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 26, fontWeight: 800, color: BRAND.navy, marginBottom: 22, display: 'flex', alignItems: 'center', gap: 10 }}>🛡 CodeLedger Review</div>
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: 14, fontFamily: BRAND.fontMono, fontSize: 17 }}>
                <div style={{ color: '#59636e' }}>Risk:</div>
                <div><span style={{ padding: '4px 12px', background: '#fbedd6', color: '#bc6c25', borderRadius: 12, fontWeight: 700, fontSize: 13 }}>MEDIUM</span></div>
                <div style={{ color: '#59636e' }}>Drift:</div>
                <div><span style={{ padding: '4px 12px', background: '#dcfce7', color: '#16a34a', borderRadius: 12, fontWeight: 700, fontSize: 13 }}>NONE</span></div>
                <div style={{ color: '#59636e' }}>Evidence Gaps:</div>
                <div><span style={{ padding: '4px 12px', background: '#fee2e2', color: '#dc2626', borderRadius: 12, fontWeight: 700, fontSize: 13 }}>DETECTED</span></div>
              </div>
              <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid #d0d7de' }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.18em', color: '#59636e', marginBottom: 10 }}>SUGGESTED FOCUS</div>
                <ul style={{ fontFamily: BRAND.fontSerif, fontSize: 18, color: '#1f2328', paddingLeft: 22 }}>
                  <li style={{ marginBottom: 6 }}>Auth session-store.ts lacks test coverage</li>
                  <li>Missing regression test for public route bypass</li>
                </ul>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={39} end={41.8}>
          <BottomCaption text="Repo-grounded signal. Not author self-report." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={42} dur={13} num="14">
        <Eyebrow text="Three sprints · same PR class" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 120, right: 120, display: 'flex', gap: 30 }}>
          <Sprite start={42.4} end={55}>
            <div style={{ flex: 1, padding: '32px 36px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderTop: '4px solid #f87171', borderRadius: 6 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#f87171', fontWeight: 700, marginBottom: 22 }}>WITHOUT CODELEDGER</div>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 76, fontWeight: 800, color: '#f87171', letterSpacing: '-0.04em', lineHeight: 1 }}>2</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termDim, marginTop: 8 }}>incidents · post-merge</div>
            </div>
          </Sprite>
          <Sprite start={43.4} end={55}>
            <div style={{ flex: 1, padding: '32px 36px', background: 'rgba(74,222,128,0.06)', border: '1px solid #4ade80', borderTop: '4px solid #4ade80', borderRadius: 6 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#4ade80', fontWeight: 700, marginBottom: 22 }}>WITH CODELEDGER</div>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 76, fontWeight: 800, color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1 }}>0</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termDim, marginTop: 8 }}>tests added · before merge</div>
            </div>
          </Sprite>
        </div>
        <Sprite start={51} end={54.8}>
          <BottomCaption text="Signal before merge. Not investigation after." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger ci pr-check --governance' />
    </Stage>
  );
}
mountApp(App);
