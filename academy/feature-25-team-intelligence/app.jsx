// Feature 25 — Team Ledger & Enterprise Control Plane
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f25">
      <TitleScene start={0} num="25" title="Team Intelligence" sub="Enterprise context control plane" />

      <AcademyScene start={3} dur={10} num="25">
        <Eyebrow text="100 sessions/week · invisible to leadership" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 240, left: 120, right: 120 }}>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 56, fontWeight: 800, color: BRAND.paper, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 36, textAlign: 'center' }}>
              10 devs · <span style={{ color: BRAND.copper }}>100 sessions/week</span>
            </div>
            <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 26, color: BRAND.paper, textAlign: 'center', lineHeight: 1.5 }}>
              VP: "Are we improving? Which areas are risky? Is AI making things better?"
            </div>
            <div style={{ marginTop: 18, padding: '14px 24px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 18, color: '#f87171', textAlign: 'center' }}>
              today: spreadsheet · gut feeling · retrospectives
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="100 sessions of engineering evidence. Invisible to leadership." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={13} num="25">
        <Sprite start={13.2} end={26}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="team-ledger"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger team-metrics', typeFor: 1.2 },
              { at: 1.6, type: 'dim', text: '', gap: 10 },
              { at: 1.8, type: 'banner', text: 'Period: last 30 days', size: 22, bold: true },
              { at: 2.6, type: 'out', text: '', gap: 10 },
              { at: 2.8, type: 'ok',  text: 'CodeLedger-assisted PRs: 42', size: 24 },
              { at: 3.5, type: 'ok',  text: 'average context reduction: 61%', size: 24 },
              { at: 4.2, type: 'out', text: 'governance receipts: 18', size: 24 },
              { at: 4.9, type: 'warn',text: 'high-risk paths reviewed: 9', size: 24 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={26} dur={15} num="25">
        <Eyebrow text="Dashboard · four quadrants" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {[
            { label: 'Context quality', val: '87', color: '#4ade80', kind: 'bar', barFrom: 0, barTo: 87 },
            { label: 'Governance posture', val: 'Shadow · healthy', color: '#60a5fa', kind: 'status' },
            { label: 'Release confidence', val: 'Medium-High', color: BRAND.copper, kind: 'gauge', barTo: 78 },
            { label: 'Recurring risks', val: 'auth · webhook', color: '#f87171', kind: 'list' },
          ].map((q, i) => (
            <Sprite key={i} start={26 + 0.4 + i*0.5} end={41} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ opacity: op, transform: `translateY(${(1-op)*14}px)`, padding: '28px 32px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${q.color}40`, borderTop: `4px solid ${q.color}`, borderRadius: 8, minHeight: 220 }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 14 }}>{q.label.toUpperCase()}</div>
                    {q.kind === 'bar' && (
                      <>
                        <div style={{ fontFamily: BRAND.fontSans, fontSize: 64, fontWeight: 800, color: q.color, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 18 }}>{q.val}</div>
                        <div style={{ height: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 7, overflow: 'hidden' }}>
                          <div style={{ width: `${q.barTo * clamp(lt/1.2,0,1)}%`, height: '100%', background: q.color }} />
                        </div>
                      </>
                    )}
                    {q.kind === 'gauge' && (
                      <>
                        <div style={{ fontFamily: BRAND.fontSans, fontSize: 42, fontWeight: 800, color: q.color, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 18 }}>{q.val}</div>
                        <div style={{ height: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 7, overflow: 'hidden' }}>
                          <div style={{ width: `${q.barTo * clamp(lt/1.2,0,1)}%`, height: '100%', background: q.color }} />
                        </div>
                      </>
                    )}
                    {q.kind === 'status' && (
                      <div style={{ fontFamily: BRAND.fontSans, fontSize: 42, fontWeight: 800, color: q.color, letterSpacing: '-0.02em', lineHeight: 1, marginTop: 18 }}>{q.val}</div>
                    )}
                    {q.kind === 'list' && (
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.paper, lineHeight: 1.9, marginTop: 14 }}>
                        <div>· auth <span style={{ color: '#f87171' }}>HIGH</span></div>
                        <div>· webhook <span style={{ color: '#fbbf24' }}>MEDIUM</span></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={37} end={40.8}>
          <BottomCaption text="Signals from every session. Aggregated. Actionable." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={41} dur={14} num="25">
        <Eyebrow text="Insight pack · one action item" top={150} />
        <Sprite start={41.4} end={55}>
          <Card x={360} y={240} width={1200} height={520} accent={BRAND.copper} paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.copper, marginBottom: 18, fontWeight: 700 }}>INSIGHT PACK · WEEK 19</div>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 36, fontWeight: 700, color: BRAND.paper, marginBottom: 30, letterSpacing: '-0.015em' }}>Recurring risk · auth area needs more test coverage</div>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termInk, lineHeight: 2 }}>
              <div>· 9 PRs touched auth paths in last 30 days</div>
              <div>· 5 had missing test evidence at PR open</div>
              <div>· 2 produced post-merge incidents</div>
            </div>
            <div style={{ marginTop: 30, padding: '14px 22px', background: 'rgba(74,222,128,0.08)', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 16, color: '#4ade80' }}>
              recommended: add auth regression suite to required CI gate
            </div>
          </Card>
        </Sprite>
        <Sprite start={51.5} end={54.8}>
          <BottomCaption text="Local evidence. Team-level insight. No source code exposed." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger team-metrics' />
    </Stage>
  );
}
mountApp(App);
