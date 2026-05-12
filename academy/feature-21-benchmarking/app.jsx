// Feature 21 — Benchmarking Harness
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f21">
      <TitleScene start={0} num="21" title="Benchmarking Harness" sub="$ codeledger compare" />

      <AcademyScene start={3} dur={8} num="21">
        <Eyebrow text="VP asks a hard question" top={180} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32, padding: '0 200px' }}>
            <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 30, color: BRAND.paper, textAlign: 'center', maxWidth: 1100 }}>
              "Is CodeLedger actually improving our AI performance?"
              <div style={{ fontFamily: BRAND.fontMono, fontStyle: 'normal', fontSize: 13, color: BRAND.termDim, marginTop: 12, letterSpacing: '0.18em' }}>— VP, ENGINEERING</div>
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 28, color: BRAND.paper, textAlign: 'center' }}>
              "It feels better."
              <div style={{ fontFamily: BRAND.fontMono, fontStyle: 'normal', fontSize: 13, color: '#f87171', marginTop: 10, letterSpacing: '0.18em' }}>— ENGINEER</div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Feelings are not benchmarks." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={14} num="21">
        <Sprite start={11.2} end={25}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="benchmark"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger compare --scenario scenarios/auth-refactor.json', typeFor: 1.8 },
              { at: 2.2, type: 'dim', text: '', gap: 12 },
              { at: 2.4, type: 'err', text: 'Without CodeLedger:', size: 22, bold: true },
              { at: 3.0, type: 'out', text: '  completed: false', size: 22 },
              { at: 3.5, type: 'out', text: '  token estimate: 118,000', size: 22 },
              { at: 4.4, type: 'dim', text: '', gap: 12 },
              { at: 4.6, type: 'ok',  text: 'With CodeLedger:', size: 22, bold: true },
              { at: 5.2, type: 'ok',  text: '  completed: true', size: 22 },
              { at: 5.7, type: 'ok',  text: '  token estimate: 42,000', size: 22 },
              { at: 6.6, type: 'dim', text: '', gap: 12 },
              { at: 6.8, type: 'banner', text: 'Delta:', size: 22, bold: true },
              { at: 7.4, type: 'ok',  text: '  token reduction: 64%', size: 24, bold: true },
              { at: 8.0, type: 'ok',  text: '  outcome improved: yes', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={25} dur={15} num="21">
        <Eyebrow text="Same agent · same repo · same task" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', gap: 40 }}>
          <Sprite start={25.4} end={40}>
            <div style={{ flex: 1, padding: '32px 36px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderTop: '4px solid #f87171', borderRadius: 8, height: 500 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#f87171', fontWeight: 700, marginBottom: 22 }}>WITHOUT</div>
              <div style={{ fontFamily: BRAND.fontSans, fontWeight: 800, fontSize: 96, color: '#f87171', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8 }}>
                <Ticker from={0} to={118000} dur={1.6} fmt={v => Math.round(v/1000) + 'k'} />
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.termDim, marginBottom: 24 }}>tokens · failed</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.paper, lineHeight: 1.9 }}>
                <div>✗ never completed</div>
                <div>✗ wrong files loaded</div>
                <div>✗ agent gave up</div>
              </div>
            </div>
          </Sprite>
          <Sprite start={26.4} end={40}>
            <div style={{ flex: 1, padding: '32px 36px', background: 'rgba(74,222,128,0.06)', border: '1px solid #4ade80', borderTop: '4px solid #4ade80', borderRadius: 8, height: 500 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#4ade80', fontWeight: 700, marginBottom: 22 }}>WITH</div>
              <div style={{ fontFamily: BRAND.fontSans, fontWeight: 800, fontSize: 96, color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8 }}>
                <Ticker from={0} to={42000} dur={1.6} fmt={v => Math.round(v/1000) + 'k'} />
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.termDim, marginBottom: 24 }}>tokens · completed</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.paper, lineHeight: 1.9 }}>
                <div>✓ task done</div>
                <div>✓ 6 relevant files</div>
                <div>✓ tests passed</div>
              </div>
            </div>
          </Sprite>
        </div>
        <Sprite start={36} end={39.8}>
          <BottomCaption text="Same task. Different context. Different outcome." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={40} dur={12} num="21">
        <Eyebrow text="Aggregate report · 12 scenarios" top={150} />
        <Sprite start={40.4} end={52}>
          <Card x={360} y={240} width={1200} height={540} accent="#4ade80" paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 32, fontWeight: 700, color: BRAND.paper, marginBottom: 36 }}>codeledger report · 30 days</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28 }}>
              {[
                ['runs analyzed', '12', BRAND.copper],
                ['completion lift', '+18%', '#4ade80'],
                ['token reduction', '57%', '#4ade80'],
                ['context precision', '0.78', '#60a5fa'],
              ].map(([k, v, c], i) => (
                <div key={i}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 10 }}>{k.toUpperCase()}</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 64, fontWeight: 800, color: c, letterSpacing: '-0.04em', lineHeight: 1 }}>{v}</div>
                </div>
              ))}
            </div>
          </Card>
        </Sprite>
        <Sprite start={48.5} end={51.8}>
          <BottomCaption text="Reproducible. Anyone can verify." />
        </Sprite>
      </AcademyScene>

      <EndScene start={52} cmd='codeledger compare --scenario <file>' />
    </Stage>
  );
}
mountApp(App);
