// Feature 02 — Task Activation — codeledger activate
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f02">
      <TitleScene start={0} num="02" title="Task Activation" sub="$ codeledger activate --task &quot;...&quot;" />

      {/* Problem: agent searches noisily, tokens balloon */}
      <AcademyScene start={3} dur={10} num="02">
        <Eyebrow text="Without activation" top={150} />
        <div style={{ position: 'absolute', top: 230, left: 120, right: 120, display: 'flex', gap: 40 }}>
          <Sprite start={3.2} end={13} keepMounted>
            {(({ localTime: lt }) => (
              <div style={{ flex: 1, opacity: clamp(lt/0.6, 0, 1) }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 20 }}>USER PROMPT</div>
                <div style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                  padding: '24px 28px', borderRadius: 8,
                  fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 28, color: BRAND.paper,
                  lineHeight: 1.4,
                }}>"Add validation to the checkout discount flow."</div>
                <div style={{ marginTop: 30, fontFamily: BRAND.fontMono, fontSize: 15, color: BRAND.termDim, lineHeight: 1.9 }}>
                  <div style={{ color: BRAND.termWarn, marginBottom: 8 }}>Agent: "Let me search your repo..."</div>
                  {['opening logger.ts', 'opening config.ts', 'opening helpers.ts', 'opening utils/*', 'opening 40 random files'].map((s, i) => (
                    <div key={i} style={{ opacity: clamp((lt - 1.0 - i*0.4)/0.4, 0, 1) }}>• {s}</div>
                  ))}
                </div>
              </div>
            ))}
          </Sprite>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: BRAND.termDim }}>SESSION TOKENS</div>
            <Sprite start={4.5} end={13}>
              <div style={{ fontFamily: BRAND.fontSans, fontWeight: 800, fontSize: 96, color: BRAND.termWarn, letterSpacing: '-0.04em', lineHeight: 1 }}>
                <Ticker from={12000} to={89000} dur={2.5} fmt={v => Math.round(v).toLocaleString()} />
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim, textAlign: 'center', marginTop: 8 }}>12k → 34k → 89k</div>
            </Sprite>
          </div>
        </div>
        <Sprite start={10} end={12.8}>
          <BottomCaption text="The agent searches. You pay for the noise." />
        </Sprite>
      </AcademyScene>

      {/* Command */}
      <AcademyScene start={13} dur={14} num="02">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger activate --task "Add validation to the checkout discount flow"', typeFor: 2.2 },
              { at: 2.6, type: 'dim', text: '', gap: 8 },
              { at: 2.8, type: 'banner', text: 'CodeLedger activated context', size: 26, bold: true },
              { at: 3.4, type: 'out', text: '', gap: 10 },
              { at: 3.6, type: 'out', text: 'Task: Add validation to the checkout discount flow', size: 20 },
              { at: 4.2, type: 'out', text: 'Bundle id: bnd_42f19ac', size: 20 },
              { at: 4.6, type: 'ok',  text: 'confidence: high', size: 20 },
              { at: 5.0, type: 'out', text: 'selected files: 6 / estimated tokens: 7,420', size: 20 },
              { at: 5.6, type: 'dim', text: '', gap: 10 },
              { at: 5.8, type: 'out', text: '1. src/checkout/discounts.ts        keyword_match, dep_match, recent_churn', size: 18 },
              { at: 6.4, type: 'out', text: '2. src/checkout/discounts.test.ts   test_relevant, same_domain', size: 18 },
              { at: 7.0, type: 'out', text: '3. src/checkout/cart.ts             dependency_match', size: 18 },
              { at: 7.8, type: 'dim', text: 'Wrote: .codeledger/active-bundle.md', size: 18, gap: 14 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      {/* What it does — scoring signals */}
      <AcademyScene start={27} dur={15} num="02">
        <Eyebrow text="Three signals · deterministic scoring" top={140} />
        <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
          {[
            { label: 'keyword_match', color: '#4ade80', pct: 91, delay: 0.4 },
            { label: 'dependency_match', color: '#60a5fa', pct: 87, delay: 1.0 },
            { label: 'recent_churn', color: '#fbbf24', pct: 74, delay: 1.6 },
          ].map((s, i) => (
            <Sprite key={i} start={27 + s.delay} end={42} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                const bar = clamp(lt/1.4, 0, 1);
                return (
                  <div style={{ opacity: op, marginBottom: 36, transform: `translateY(${(1-op)*12}px)` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontFamily: BRAND.fontMono, fontSize: 20, color: BRAND.paper, letterSpacing: '0.04em' }}>{s.label}</span>
                      <span style={{ fontFamily: BRAND.fontMono, fontSize: 24, color: s.color, fontWeight: 700 }}>{(s.pct/100).toFixed(2)}</span>
                    </div>
                    <div style={{ height: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 7, overflow: 'hidden' }}>
                      <div style={{ width: `${s.pct * bar}%`, height: '100%', background: s.color, borderRadius: 7 }} />
                    </div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={31} end={42}>
          <div style={{ position: 'absolute', top: 540, left: 120, right: 120 }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 20 }}>RANKED FILES</div>
            {[
              ['discounts.ts', 0.91], ['discounts.test.ts', 0.87], ['cart.ts', 0.74],
              ['orders.ts', 0.62], ['validator.ts', 0.51], ['types.ts', 0.43],
            ].map(([f, s], i) => (
              <Sprite key={i} start={31 + i*0.18} end={42} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt/0.4, 0, 1);
                  return (
                    <div style={{ display: 'flex', gap: 24, fontFamily: BRAND.fontMono, fontSize: 18, padding: '6px 0', opacity: op, transform: `translateX(${(1-op)*-10}px)` }}>
                      <span style={{ color: BRAND.termDim, width: 28 }}>{i+1}.</span>
                      <span style={{ color: '#4ade80', width: 70 }}>{s.toFixed(2)}</span>
                      <span style={{ color: BRAND.paper }}>{f}</span>
                    </div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </Sprite>
        <Sprite start={39.5} end={41.8}>
          <BottomCaption text="Deterministic scoring. Not a guess." />
        </Sprite>
      </AcademyScene>

      {/* Payoff */}
      <AcademyScene start={42} dur={13} num="02">
        <Eyebrow text="Active bundle ready" top={150} />
        <Sprite start={42.4} end={55}>
          <Card x={420} y={240} width={1080} height={520} accent={BRAND.copper} paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.copper, marginBottom: 16 }}>.codeledger/active-bundle.md</div>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 36, fontWeight: 800, color: BRAND.paper, letterSpacing: '-0.02em', marginBottom: 28 }}>Add validation to the checkout discount flow</div>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 20, lineHeight: 2, color: BRAND.termInk }}>
              <div><span style={{ color: BRAND.termDim, width: 140, display: 'inline-block' }}>Files:</span><span style={{ color: '#4ade80', fontWeight: 700 }}>6</span></div>
              <div><span style={{ color: BRAND.termDim, width: 140, display: 'inline-block' }}>Tokens:</span><span style={{ color: '#4ade80', fontWeight: 700 }}>7,420</span></div>
              <div><span style={{ color: BRAND.termDim, width: 140, display: 'inline-block' }}>Confidence:</span><span style={{ color: '#4ade80', fontWeight: 700 }}>HIGH</span></div>
            </div>
            <div style={{ marginTop: 28, padding: '14px 20px', background: 'rgba(74,222,128,0.1)', border: '1px solid #4ade80', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 16, color: '#4ade80' }}>
              ✓ Agent ready. Starts in the right place.
            </div>
          </Card>
        </Sprite>
        <Sprite start={52} end={54.8}>
          <BottomCaption text="Agent starts in the right place. Every time." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger activate --task "your task here"' />
    </Stage>
  );
}
mountApp(App);
