// Feature 07 — Session Timeline
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f07">
      <TitleScene start={0} num="07" title="Session Timeline" sub="The ground truth of your session" />

      <AcademyScene start={3} dur={10} num="07">
        <Eyebrow text="Next morning · chat is gone" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 240, left: 0, right: 0, textAlign: 'center' }}>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 56, fontWeight: 700, color: BRAND.paper, letterSpacing: '-0.02em', marginBottom: 28 }}>
              3 hours of work.<br/>
              <span style={{ color: BRAND.termDim }}>Chat history compacted.</span>
            </div>
            <div style={{ marginTop: 50, fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.termDim, lineHeight: 2 }}>
              <div>What did the agent do?</div>
              <div>Which files changed?</div>
              <div>Was it verified?</div>
            </div>
          </div>
        </Sprite>
        <Sprite start={10} end={12.8}>
          <BottomCaption text="No record. Just memory." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={14} num="07">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger sessions list', typeFor: 1.2 },
              { at: 1.6, type: 'dim', text: '', gap: 8 },
              { at: 1.8, type: 'ok',  text: 'sess_2026_05_12_001  active   Refactor auth middleware', size: 20 },
              { at: 2.3, type: 'out', text: 'sess_2026_05_11_004  closed   Add checkout coupon validation', size: 20 },
              { at: 2.8, type: 'out', text: 'sess_2026_05_10_002  closed   Investigate webhook retry failures', size: 20 },
              { at: 3.6, type: 'dim', text: '', gap: 18 },
              { at: 3.8, type: 'cmd', text: 'codeledger session-progress', typeFor: 1.0 },
              { at: 5.2, type: 'dim', text: '', gap: 10 },
              { at: 5.4, type: 'out', text: 'bundle recall: 0.86', size: 22 },
              { at: 5.9, type: 'out', text: 'files touched: 3', size: 22 },
              { at: 6.4, type: 'warn',text: 'verification: pending', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={27} dur={15} num="07">
        <Eyebrow text="Append-only · local · readable" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 80, right: 80 }}>
          {[
            { t: 'activate', d: 'bnd_42f19ac', color: '#60a5fa', delay: 0.4 },
            { t: 'refine', d: '+ guest-coupons.ts', color: '#fbbf24', delay: 1.4 },
            { t: 'checkpoint', d: 'chk_27af', color: '#a5b4fc', delay: 2.4 },
            { t: 'verify', d: 'passed', color: '#4ade80', delay: 3.4 },
            { t: 'governance', d: 'egr_9f12d0', color: BRAND.copper, delay: 4.4 },
            { t: 'summary', d: '94% reduction', color: '#4ade80', delay: 5.4 },
          ].map((e, i) => (
            <Sprite key={i} start={27 + e.delay} end={42} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                const left = (i / 5) * 100;
                return (
                  <div style={{ position: 'absolute', left: `${left}%`, top: 0, width: '17%', textAlign: 'center', opacity: op, transform: `translateY(${(1-op)*16}px)` }}>
                    <div style={{ width: 28, height: 28, borderRadius: 14, background: e.color, margin: '0 auto 14px', boxShadow: `0 0 20px ${e.color}` }} />
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.18em', color: e.color, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>{e.t}</div>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.paper }}>{e.d}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
          <Sprite start={28} end={42}>
            <div style={{ position: 'absolute', top: 14, left: '6%', right: '6%', height: 2, background: 'linear-gradient(to right, #60a5fa, #fbbf24, #a5b4fc, #4ade80, #B87A6B, #4ade80)', opacity: 0.4, zIndex: -1 }} />
          </Sprite>
        </div>
        <Sprite start={38} end={41.8}>
          <BottomCaption text="Every event recorded. Locally. Always readable." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={42} dur={13} num="07">
        <Eyebrow text="Handoff without a meeting" top={150} />
        <Sprite start={42.4} end={55}>
          <Card x={360} y={240} width={1200} height={560} accent={BRAND.copper} paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.copper, marginBottom: 14 }}>.codeledger/session/timeline.md</div>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 32, fontWeight: 700, color: BRAND.paper, marginBottom: 28 }}>Refactor auth middleware</div>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termInk, lineHeight: 2.0 }}>
              <div><span style={{ color: BRAND.termDim, width: 200, display: 'inline-block' }}>Files in play:</span><span>middleware.ts · session.ts · token-refresh.ts</span></div>
              <div><span style={{ color: BRAND.termDim, width: 200, display: 'inline-block' }}>Verification:</span><span style={{ color: '#4ade80' }}>passed (5 checks)</span></div>
              <div><span style={{ color: BRAND.termDim, width: 200, display: 'inline-block' }}>Open risks:</span><span style={{ color: '#fbbf24' }}>missing regression test on bypass path</span></div>
              <div><span style={{ color: BRAND.termDim, width: 200, display: 'inline-block' }}>Last governance:</span><span>safe_with_tests_required</span></div>
            </div>
            <div style={{ marginTop: 32, padding: '14px 22px', background: 'rgba(74,222,128,0.08)', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 16, color: '#4ade80' }}>
              ✓ Teammate productive in 2 minutes
            </div>
          </Card>
        </Sprite>
        <Sprite start={52} end={54.8}>
          <BottomCaption text="Handoff without a meeting." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger session-progress' />
    </Stage>
  );
}
mountApp(App);
