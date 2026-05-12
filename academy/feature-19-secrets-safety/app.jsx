// Feature 19 — Secrets & Safety Checks
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f19">
      <TitleScene start={0} num="19" title="Secrets & Safety" sub="$ codeledger detect-secrets" />

      <AcademyScene start={3} dur={8} num="19">
        <Eyebrow text="Credential leak · 1 second" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', top: 240, left: 200, right: 200 }}>
            <div style={{ padding: '24px 32px', background: '#0e1424', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termInk, lineHeight: 1.85 }}>
              <div style={{ color: BRAND.termDim, marginBottom: 10 }}>src/config/env-template.ts</div>
              <div><span style={{ color: '#c4b5fd' }}>export const</span> <span style={{ color: BRAND.paper }}>API_KEY</span> <span style={{ color: '#94a3b8' }}>=</span> <span style={{ color: '#fbbf24', background: 'rgba(248,113,113,0.2)', padding: '2px 6px', borderRadius: 3 }}>"sk_live_4f29Bc73aD2eAFGHwxyz"</span>;</div>
              <div><span style={{ color: '#c4b5fd' }}>export const</span> <span style={{ color: BRAND.paper }}>STRIPE_SECRET</span> <span style={{ color: '#94a3b8' }}>=</span> <span style={{ color: '#fbbf24' }}>process.env.STRIPE_SECRET</span>;</div>
            </div>
            <div style={{ marginTop: 22, padding: '14px 24px', background: 'rgba(248,113,113,0.08)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 20, color: '#f87171', textAlign: 'center', fontWeight: 700 }}>
              ✗ committed · pushed · exposed
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Credential exposure. Happened in 1 second." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={12} num="19">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger detect-secrets', typeFor: 1.2 },
              { at: 1.6, type: 'dim', text: '', gap: 10 },
              { at: 1.8, type: 'err', text: 'Status: FAILED', size: 26, bold: true },
              { at: 2.6, type: 'out', text: '', gap: 10 },
              { at: 2.8, type: 'warn',text: 'Findings:', size: 22 },
              { at: 3.4, type: 'err', text: '  high confidence: 1', size: 22 },
              { at: 3.9, type: 'err', text: '  src/config/env-template.ts line 14: possible API key pattern', size: 18 },
              { at: 5.0, type: 'dim', text: '', gap: 18 },
              { at: 5.2, type: 'cmd', text: 'codeledger preflight', typeFor: 0.9 },
              { at: 6.4, type: 'dim', text: '', gap: 8 },
              { at: 6.6, type: 'err', text: 'Ready: no', size: 24 },
              { at: 7.2, type: 'out', text: 'Checks: clean worktree: yes · context: present · secrets: BLOCKED', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={23} dur={14} num="19">
        <Eyebrow text="Three guardrail layers" top={150} />
        <div style={{ position: 'absolute', top: 250, left: 120, right: 120, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            { t: 'detect-secrets', s: 'Scans for credential patterns', color: '#f87171', icon: '🔐' },
            { t: 'preflight-edit', s: 'Checks before each file write', color: '#fbbf24', icon: '🛂' },
            { t: 'guardrails', s: 'Active rules: protected paths · risky commands · policy', color: '#4ade80', icon: '🛡' },
          ].map((row, i) => (
            <Sprite key={i} start={23 + 0.5 + i*0.8} end={37} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '22px 32px', background: `rgba(${row.color==='#4ade80'?'74,222,128':row.color==='#fbbf24'?'251,191,36':'248,113,113'},0.06)`, border: `1px solid ${row.color}40`, borderLeft: `4px solid ${row.color}`, borderRadius: 8, opacity: op, transform: `translateX(${(1-op)*-16}px)` }}>
                    <div style={{ fontSize: 36, width: 50, textAlign: 'center' }}>{row.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: row.color, fontWeight: 700, marginBottom: 6 }}>LAYER {i+1}</div>
                      <div style={{ fontFamily: BRAND.fontSans, fontWeight: 700, fontSize: 24, color: BRAND.paper, letterSpacing: '-0.005em', marginBottom: 4 }}>{row.t}</div>
                      <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 17, color: BRAND.termInk }}>{row.s}</div>
                    </div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={33} end={36.8}>
          <BottomCaption text="Local-first guardrails. Before the damage happens." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={37} dur={12} num="19">
        <Eyebrow text="Two paths" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', gap: 30 }}>
          <Sprite start={37.4} end={49}>
            <div style={{ flex: 1, padding: '28px 32px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderTop: '4px solid #f87171', borderRadius: 8, height: 460 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#f87171', fontWeight: 700, marginBottom: 20 }}>WITHOUT</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.paper, lineHeight: 2 }}>
                <div>1. secret committed</div>
                <div>2. push to origin</div>
                <div>3. incident</div>
                <div>4. credential rotation</div>
                <div style={{ color: '#f87171', fontWeight: 700, marginTop: 14 }}>4 hours of remediation</div>
              </div>
            </div>
          </Sprite>
          <Sprite start={38.4} end={49}>
            <div style={{ flex: 1, padding: '28px 32px', background: 'rgba(74,222,128,0.06)', border: '1px solid #4ade80', borderTop: '4px solid #4ade80', borderRadius: 8, height: 460 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#4ade80', fontWeight: 700, marginBottom: 20 }}>WITH</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.paper, lineHeight: 2 }}>
                <div>1. agent writes file</div>
                <div>2. preflight detects secret</div>
                <div>3. commit BLOCKED</div>
                <div>4. dev fixes locally</div>
                <div style={{ color: '#4ade80', fontWeight: 700, marginTop: 14 }}>0 seconds of remediation</div>
              </div>
            </div>
          </Sprite>
        </div>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Before the damage happens. Not after." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger detect-secrets' />
    </Stage>
  );
}
mountApp(App);
