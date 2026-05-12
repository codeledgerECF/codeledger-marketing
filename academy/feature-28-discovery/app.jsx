// Feature 28 — Discovery & Onboarding
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f28">
      <TitleScene start={0} num="28" title="Discovery Gate" sub="$ codeledger discover" />

      <AcademyScene start={3} dur={10} num="28">
        <Eyebrow text="2 weeks later · duplicate found" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
            <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, marginBottom: 22, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 28, color: BRAND.paper }}>
              "Starting work on a new notification service…"
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(248,113,113,0.08)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 20, color: BRAND.paper, lineHeight: 1.7 }}>
              <div style={{ color: '#f87171', fontWeight: 700, marginBottom: 8 }}>2 weeks later:</div>
              <div>src/alerts/ already exists</div>
              <div style={{ color: '#f87171' }}>· duplicate code · wasted sprint · roll back</div>
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="The repo already had it. The agent didn't know." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={14} num="28">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger discover --task "Build notification service"', typeFor: 1.7 },
              { at: 2.2, type: 'dim', text: '', gap: 10 },
              { at: 2.4, type: 'err', text: 'Verdict: NO_GO_ALREADY_EXISTS', size: 26, bold: true },
              { at: 3.2, type: 'warn',text: 'Existing: src/alerts/notification.ts', size: 22 },
              { at: 3.8, type: 'ok',  text: 'Posture: EXTEND_EXISTING_SYSTEM', size: 22 },
              { at: 4.4, type: 'out', text: 'Insertion point: src/alerts/', size: 22 },
              { at: 5.6, type: 'dim', text: '', gap: 18 },
              { at: 5.8, type: 'cmd', text: 'codeledger demo', typeFor: 0.8 },
              { at: 7.0, type: 'banner', text: 'CodeLedger 60s Repo Proof', size: 22, bold: true },
              { at: 7.8, type: 'out', text: 'Repo signal: Git · pnpm · TypeScript · tests detected', size: 19 },
              { at: 8.4, type: 'ok',  text: 'Next Move: codeledger activate --task "audit auth boundary invariants"', size: 19 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={27} dur={15} num="28">
        <Eyebrow text="Three verdicts · one decision" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', gap: 24 }}>
          {[
            { v: 'GO_GENUINELY_NEW', s: 'Build it', color: '#4ade80' },
            { v: 'GO_EXTENSION_ONLY', s: 'Extend at insertion point', color: '#fbbf24' },
            { v: 'NO_GO_ALREADY_EXISTS', s: 'Do not duplicate', color: '#f87171', highlight: true },
          ].map((c, i) => (
            <Sprite key={i} start={27 + 0.5 + i*0.6} end={42} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ flex: 1, opacity: op, transform: `translateY(${(1-op)*16}px)`, padding: '32px 26px', background: `rgba(${c.color==='#4ade80'?'74,222,128':c.color==='#fbbf24'?'251,191,36':'248,113,113'},${c.highlight ? 0.18 : 0.06})`, border: `1px solid ${c.color}`, borderTop: `4px solid ${c.color}`, borderRadius: 10, textAlign: 'center', minHeight: 290, boxShadow: c.highlight ? `0 0 40px ${c.color}50` : 'none' }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.16em', color: c.color, fontWeight: 700, marginBottom: 22 }}>VERDICT {i+1}</div>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, fontWeight: 700, color: BRAND.paper, marginBottom: 22, lineHeight: 1.3, letterSpacing: '0.02em' }}>{c.v}</div>
                    <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.termInk }}>{c.s}</div>
                    {c.highlight && <div style={{ marginTop: 18, fontFamily: BRAND.fontMono, fontSize: 11, color: c.color, fontWeight: 700, letterSpacing: '0.18em' }}>← THIS CASE</div>}
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={38} end={41.8}>
          <BottomCaption text="Eight pipeline stages. One verdict. Before a line is written." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={42} dur={13} num="28">
        <Eyebrow text="2-week effort · redirected" top={150} />
        <Sprite start={42.4} end={55}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 1300 }}>
              <div style={{ display: 'flex', gap: 50, alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '24px 32px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, minWidth: 360 }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: '#f87171', letterSpacing: '0.22em', marginBottom: 10, fontWeight: 700 }}>WITHOUT DISCOVERY</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 60, fontWeight: 800, color: '#f87171', letterSpacing: '-0.04em', lineHeight: 1 }}>2 weeks</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim, marginTop: 8 }}>duplicate code · rollback</div>
                </div>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 40, color: BRAND.copper }}>→</div>
                <div style={{ padding: '24px 32px', background: 'rgba(74,222,128,0.06)', border: '1px solid #4ade80', borderRadius: 8, minWidth: 360 }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: '#4ade80', letterSpacing: '0.22em', marginBottom: 10, fontWeight: 700 }}>WITH DISCOVERY</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 60, fontWeight: 800, color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1 }}>40 lines</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim, marginTop: 8 }}>added to src/alerts/</div>
                </div>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={51.5} end={54.8}>
          <BottomCaption text="Discovery prevents the fourth auth helper." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger discover --task "..."' />
    </Stage>
  );
}
mountApp(App);
