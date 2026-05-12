// Feature 04 — Context Broker
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f04">
      <TitleScene start={0} num="04" title="Context Broker" sub="Live retrieval for long sessions" />

      {/* Problem: session drift */}
      <AcademyScene start={3} dur={10} num="04">
        <Eyebrow text="Session drift" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
            <Sprite start={3.4} end={13}>
              <div style={{ flex: 'none', fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.termDim, width: 60 }}>turn 1</div>
              <div style={{
                padding: '14px 22px', background: 'rgba(74,222,128,0.1)',
                border: '1px solid #4ade80', borderRadius: 8,
                fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper,
                display: 'inline-block', marginLeft: 16,
              }}>"Fix the auth bug"</div>
            </Sprite>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36, marginLeft: 60 }}>
            <Sprite start={5} end={13}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.termDim, marginRight: 16 }}>turn 12</div>
              <div style={{
                padding: '14px 22px', background: 'rgba(251,191,36,0.1)',
                border: '1px solid #fbbf24', borderRadius: 8,
                fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper,
                display: 'inline-block',
              }}>"What about the discount validation flow?"</div>
            </Sprite>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 120 }}>
            <Sprite start={6.6} end={13}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.termDim, marginRight: 16 }}>turn 20</div>
              <div style={{
                padding: '14px 22px', background: 'rgba(248,113,113,0.1)',
                border: '1px solid #f87171', borderRadius: 8,
                fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper,
                display: 'inline-block',
              }}>"Add retry logic to the payment webhook"</div>
            </Sprite>
          </div>
        </div>
        <Sprite start={8.2} end={13}>
          <div style={{
            position: 'absolute', top: 660, left: 120, right: 120,
            background: 'rgba(248,113,113,0.08)', border: '1px solid #f87171',
            padding: '20px 28px', borderRadius: 8,
            fontFamily: BRAND.fontMono, fontSize: 22, color: '#f87171', fontWeight: 600, textAlign: 'center',
          }}>Agent still has auth files loaded · stale context</div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="Stale context. Wrong files. Wrong answers." />
        </Sprite>
      </AcademyScene>

      {/* Command — JSON */}
      <AcademyScene start={13} dur={15} num="04">
        <Sprite start={13.2} end={28}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger broker refresh --task "Fix checkout discount validation" --json', typeFor: 2.0 },
              { at: 2.5, type: 'out', text: '{', size: 22 },
              { at: 2.8, type: 'ok',  text: '  "decision": "refreshed",', size: 20 },
              { at: 3.2, type: 'warn',text: '  "reason": "intent_drift",', size: 20 },
              { at: 3.6, type: 'out', text: '  "bundle": {', size: 20 },
              { at: 4.0, type: 'out', text: '    "bundle_id": "bnd_91be4d2",', size: 20 },
              { at: 4.3, type: 'out', text: '    "confidence_level": "medium"', size: 20 },
              { at: 4.6, type: 'out', text: '  },', size: 20 },
              { at: 4.9, type: 'out', text: '  "delta": {', size: 20 },
              { at: 5.3, type: 'ok',  text: '    "added": ["src/payments/retry.ts"],', size: 20 },
              { at: 5.7, type: 'err', text: '    "removed": ["src/checkout/coupons.ts"],', size: 20 },
              { at: 6.0, type: 'out', text: '    "token_delta": 830', size: 20 },
              { at: 6.3, type: 'out', text: '  },', size: 20 },
              { at: 6.6, type: 'out', text: '  "nextAction": "Use these ranked files first."', size: 20 },
              { at: 7.0, type: 'out', text: '}', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      {/* What it does — three panels */}
      <AcademyScene start={28} dur={14} num="04">
        <Eyebrow text="Refresh · delta · resume" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 80, right: 80, display: 'flex', gap: 24 }}>
          {[
            { t: 'broker refresh', s: 'Detects intent drift', detail: 'old task: auth bug\nnew task: discount validation', delay: 0.4, color: BRAND.copper },
            { t: 'delta computed', s: '+1 file · −1 file · 830 tokens', detail: '+ retry.ts\n− coupons.ts', delay: 1.6, color: '#60a5fa' },
            { t: 'agent resumes', s: 'New bundle. Right place.', detail: 'bnd_91be4d2 active', delay: 2.8, color: '#4ade80' },
          ].map((p, i) => (
            <Sprite key={i} start={28 + p.delay} end={42} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.6, 0, 1);
                return (
                  <div style={{
                    flex: 1, opacity: op, transform: `translateY(${(1-op)*16}px)`,
                    background: 'rgba(255,255,255,0.04)', border: `1px solid ${p.color}40`,
                    borderTop: `3px solid ${p.color}`, borderRadius: 10, padding: '28px 24px', minHeight: 360,
                  }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: p.color, fontWeight: 600, marginBottom: 14 }}>STEP {i+1}</div>
                    <div style={{ fontFamily: BRAND.fontSans, fontSize: 28, fontWeight: 700, color: BRAND.paper, letterSpacing: '-0.01em', marginBottom: 14 }}>{p.t}</div>
                    <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 18, color: BRAND.termInk, marginBottom: 24 }}>{p.s}</div>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 15, color: p.color, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{p.detail}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={39} end={41.8}>
          <BottomCaption text="The broker asks: has the task changed? Then acts." />
        </Sprite>
      </AcademyScene>

      {/* Payoff */}
      <AcademyScene start={42} dur={13} num="04">
        <Eyebrow text="Before · after" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', gap: 40 }}>
          <Sprite start={42.4} end={55}>
            <div style={{ flex: 1, background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.3)', borderTop: '4px solid #f87171', borderRadius: 6, padding: '28px 32px', height: 460 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#f87171', marginBottom: 18 }}>BEFORE</div>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 64, fontWeight: 800, color: '#f87171', letterSpacing: '-0.04em', lineHeight: 1 }}>40 files</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termDim, marginTop: 8, marginBottom: 28 }}>stale · auth context still loaded</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper, lineHeight: 1.9 }}>
                <div style={{ color: '#f87171' }}>✗ 5 wrong answers</div>
                <div style={{ color: '#f87171' }}>✗ Token cost spirals</div>
                <div style={{ color: '#f87171' }}>✗ Agent confused</div>
              </div>
            </div>
          </Sprite>
          <Sprite start={43.4} end={55}>
            <div style={{ flex: 1, background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.3)', borderTop: '4px solid #4ade80', borderRadius: 6, padding: '28px 32px', height: 460 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#4ade80', marginBottom: 18 }}>AFTER</div>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 64, fontWeight: 800, color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1 }}>8 files</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termDim, marginTop: 8, marginBottom: 28 }}>current · discount validation in focus</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper, lineHeight: 1.9 }}>
                <div style={{ color: '#4ade80' }}>✓ Correct path found</div>
                <div style={{ color: '#4ade80' }}>✓ 830-token delta</div>
                <div style={{ color: '#4ade80' }}>✓ Session continues</div>
              </div>
            </div>
          </Sprite>
        </div>
        <Sprite start={51} end={54.8}>
          <BottomCaption text="Discipline for long sessions." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger broker refresh --task "..."' />
    </Stage>
  );
}
mountApp(App);
