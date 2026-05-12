// Feature 08 — Session Summary
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f08">
      <TitleScene start={0} num="08" title="Session Summary" sub="$ codeledger session-summary" />

      <AcademyScene start={3} dur={8} num="08">
        <Eyebrow text="A manager's question" top={180} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36, padding: '0 120px' }}>
            <div style={{ padding: '20px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 32, color: BRAND.paper, maxWidth: 1000, textAlign: 'center' }}>
              "Was the AI useful today?"
              <div style={{ fontFamily: BRAND.fontMono, fontStyle: 'normal', fontSize: 13, color: BRAND.termDim, marginTop: 10, letterSpacing: '0.18em' }}>— MANAGER</div>
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 28, color: BRAND.paper, maxWidth: 1000, textAlign: 'center' }}>
              "I think so?"
              <div style={{ fontFamily: BRAND.fontMono, fontStyle: 'normal', fontSize: 13, color: '#f87171', marginTop: 10, letterSpacing: '0.18em' }}>— DEVELOPER</div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Useful is not a measurement." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={13} num="08">
        <Sprite start={11.2} end={24}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger session-summary', typeFor: 1.0 },
              { at: 1.4, type: 'dim', text: '', gap: 8 },
              { at: 1.6, type: 'banner', text: 'CodeLedger session summary', size: 24, bold: true },
              { at: 2.2, type: 'out', text: '', gap: 10 },
              { at: 2.4, type: 'out', text: 'Task: Refactor auth middleware', size: 22 },
              { at: 3.0, type: 'out', text: 'selected files: 7', size: 22 },
              { at: 3.5, type: 'out', text: 'files used: 5', size: 22 },
              { at: 4.0, type: 'ok',  text: 'context reduction: 94%', size: 22 },
              { at: 4.5, type: 'ok',  text: 'token savings: 38,400 estimated tokens', size: 22 },
              { at: 5.2, type: 'ok',  text: 'verify: passed', size: 22 },
              { at: 5.8, type: 'out', text: 'notebook updates: 1', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={24} dur={14} num="08">
        <Eyebrow text="Three deterministic signals" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
          {[
            { label: 'Bundle recall', val: 71, suffix: '%', color: '#60a5fa', sub: '5 / 7 used', delay: 0.4 },
            { label: 'Token savings', val: 38400, suffix: ' tokens', color: BRAND.copper, sub: '≈ $1.14', delay: 1.4, fmt: v => '~' + Math.round(v).toLocaleString() },
            { label: 'Context reduction', val: 94, suffix: '%', color: '#4ade80', sub: '7 → 5 files', delay: 2.4 },
          ].map((m, i) => (
            <Sprite key={i} start={24 + m.delay} end={38} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ opacity: op, transform: `translateY(${(1-op)*14}px)`, padding: '32px 28px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${m.color}40`, borderTop: `4px solid ${m.color}`, borderRadius: 8 }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 16 }}>{m.label.toUpperCase()}</div>
                    <div style={{ fontFamily: BRAND.fontSans, fontSize: 76, fontWeight: 800, color: m.color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                      <Ticker from={0} to={m.val} dur={1.4} fmt={m.fmt || (v => Math.round(v))} />
                      <span style={{ fontSize: 22, color: BRAND.termDim, fontWeight: 500, marginLeft: 6, letterSpacing: 0 }}>{m.suffix}</span>
                    </div>
                    <div style={{ marginTop: 16, fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim }}>{m.sub}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={32} end={37.8}>
          <BottomCaption text="Not a feel-good summary. Deterministic signals." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={38} dur={11} num="08">
        <Eyebrow text="30-day aggregate · 5 developers" top={150} />
        <Sprite start={38.4} end={49}>
          <Card x={360} y={250} width={1200} height={520} accent={BRAND.copper} paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 32, fontWeight: 700, color: BRAND.paper, marginBottom: 36 }}>Team summary · May 2026</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28 }}>
              {[
                ['avg context reduction', '61%', '#4ade80'],
                ['governed PRs', '18', BRAND.copper],
                ['sessions logged', '147', '#60a5fa'],
                ['notebook updates', '34', BRAND.copper],
              ].map(([k, v, c], i) => (
                <div key={i}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 10 }}>{k.toUpperCase()}</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 60, fontWeight: 800, color: c, letterSpacing: '-0.04em', lineHeight: 1 }}>{v}</div>
                </div>
              ))}
            </div>
          </Card>
        </Sprite>
        <Sprite start={46} end={48.8}>
          <BottomCaption text="Every session leaves evidence." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger session-summary' />
    </Stage>
  );
}
mountApp(App);
