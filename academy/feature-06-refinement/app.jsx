// Feature 06 — Context Refinement
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f06">
      <TitleScene start={0} num="06" title="Context Refinement" sub="$ codeledger refine" />

      {/* Problem */}
      <AcademyScene start={3} dur={8} num="06">
        <Eyebrow text="Mid-task discovery" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Sprite start={3.2} end={11}>
            <div style={{ padding: '20px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: BRAND.termDim, letterSpacing: '0.22em', marginBottom: 10 }}>INITIAL TASK</div>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 24, color: BRAND.paper }}>"Fix flaky checkout test"</div>
              <div style={{ marginTop: 14, fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termDim }}>Bundle: admin coupons, cart logic</div>
            </div>
          </Sprite>
          <Sprite start={5.5} end={11}>
            <div style={{ padding: '20px 28px', background: 'rgba(251,191,36,0.06)', border: '1px solid #fbbf24', borderRadius: 8 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: '#fbbf24', letterSpacing: '0.22em', marginBottom: 10 }}>WHAT THE DEV LEARNS</div>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 24, color: BRAND.paper }}>"The bug is only in the GUEST checkout coupon branch."</div>
            </div>
          </Sprite>
        </div>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Original context is wrong. No way to update it." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={13} num="06">
        <Sprite start={11.2} end={24}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger refine --learned "The failing path is the guest checkout coupon branch"', typeFor: 2.4 },
              { at: 3.0, type: 'dim', text: '', gap: 14 },
              { at: 3.2, type: 'banner', text: 'Learned: The failing path is the guest checkout coupon branch', size: 22, bold: true },
              { at: 4.0, type: 'out', text: '', gap: 12 },
              { at: 4.2, type: 'out', text: 'Context delta:', size: 22 },
              { at: 4.8, type: 'ok',  text: '  added:    src/checkout/guest-coupons.ts', size: 20 },
              { at: 5.3, type: 'ok',  text: '  added:    src/checkout/guest-coupons.test.ts', size: 20 },
              { at: 5.8, type: 'err', text: '  removed:  src/checkout/admin-coupons.ts', size: 20 },
              { at: 6.6, type: 'dim', text: '', gap: 10 },
              { at: 6.8, type: 'dim', text: 'Wrote: .codeledger/active-bundle.md', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      {/* What it does — before/after bundle */}
      <AcademyScene start={24} dur={14} num="06">
        <Eyebrow text="Same task thread · sharper context" top={150} />
        <div style={{ position: 'absolute', top: 230, left: 120, right: 120, display: 'flex', gap: 40 }}>
          {[
            { label: 'BEFORE', color: '#f87171', files: [
              ['cart.ts', false], ['admin-coupons.ts', 'wrong'],
              ['order.ts', false], ['types.ts', false],
              ['validator.ts', false], ['index.ts', false],
            ], delay: 0.4 },
            { label: 'AFTER', color: '#4ade80', files: [
              ['cart.ts', false], ['guest-coupons.ts', 'new'],
              ['guest-coupons.test.ts', 'new'], ['order.ts', false],
              ['validator.ts', false], ['types.ts', false],
            ], delay: 2.0 },
          ].map((col, i) => (
            <Sprite key={i} start={24 + col.delay} end={38} keepMounted>
              {(({ localTime: lt }) => (
                <div style={{ flex: 1, opacity: clamp(lt/0.6, 0, 1), background: `rgba(${i ? '74,222,128' : '248,113,113'},0.05)`, border: `1px solid ${col.color}40`, borderTop: `4px solid ${col.color}`, borderRadius: 6, padding: '28px 32px', minHeight: 460 }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: col.color, fontWeight: 600, marginBottom: 24 }}>{col.label}</div>
                  {col.files.map(([f, flag], j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      fontFamily: BRAND.fontMono, fontSize: 17, color: flag === 'wrong' ? '#f87171' : flag === 'new' ? '#4ade80' : BRAND.paper,
                    }}>
                      <span style={{ color: BRAND.termDim, width: 24 }}>{j+1}.</span>
                      <span style={{ flex: 1, textDecoration: flag === 'wrong' ? 'line-through' : 'none' }}>{f}</span>
                      {flag === 'new' && <span style={{ fontSize: 11, padding: '2px 8px', background: 'rgba(74,222,128,0.2)', borderRadius: 3, fontWeight: 700, letterSpacing: '0.1em' }}>NEW</span>}
                      {flag === 'wrong' && <span style={{ fontSize: 11, padding: '2px 8px', background: 'rgba(248,113,113,0.2)', borderRadius: 3, fontWeight: 700, letterSpacing: '0.1em' }}>WRONG</span>}
                    </div>
                  ))}
                </div>
              ))}
            </Sprite>
          ))}
        </div>
        <Sprite start={35} end={37.8}>
          <BottomCaption text="Same task thread. Sharper context." />
        </Sprite>
      </AcademyScene>

      {/* Payoff */}
      <AcademyScene start={38} dur={11} num="06">
        <Eyebrow text="Bug fixed in 2 edits" top={170} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sprite start={38.4} end={49}>
            <div style={{ textAlign: 'center', maxWidth: 1400 }}>
              <div style={{ fontFamily: BRAND.fontSans, fontWeight: 800, fontSize: 80, color: '#4ade80', letterSpacing: '-0.035em', lineHeight: 1.05, marginBottom: 24 }}>
                Right file · right edit
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.paper, lineHeight: 2, marginTop: 36, textAlign: 'left', display: 'inline-block' }}>
                <div style={{ color: BRAND.termDim }}>src/checkout/guest-coupons.ts</div>
                <div style={{ color: '#4ade80' }}>+ if (cart.isGuest &amp;&amp; cart.coupons.length) {`{`}</div>
                <div style={{ color: '#4ade80' }}>+   validateGuestCouponLimit(cart);</div>
                <div style={{ color: '#4ade80' }}>+ {`}`}</div>
              </div>
            </div>
          </Sprite>
        </div>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Real tasks evolve. Refinement keeps context honest." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger refine --learned "..."' />
    </Stage>
  );
}
mountApp(App);
