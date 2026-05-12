// Feature 24 — Prompt Coach
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f24">
      <TitleScene start={0} num="24" title="Prompt Coach" sub="Task intelligence before activation" />

      <AcademyScene start={3} dur={8} num="24">
        <Eyebrow text="Vague task · vague context" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
            <div style={{ padding: '24px 36px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 36, color: BRAND.paper }}>"Fix checkout"</div>
            <div style={{ padding: '18px 28px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 20, color: BRAND.paper, textAlign: 'center', lineHeight: 1.8 }}>
              <div>confidence: <span style={{ color: '#f87171' }}>low</span></div>
              <div>14 files equally plausible</div>
              <div>bundle unhelpful</div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Vague prompt. Vague context. Vague results." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={12} num="24">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger prompt suggest --task "Fix checkout"', typeFor: 1.5 },
              { at: 1.9, type: 'dim', text: '', gap: 10 },
              { at: 2.1, type: 'out', text: 'Original: Fix checkout', size: 22 },
              { at: 2.8, type: 'ok',  text: 'Suggested: Fix guest checkout coupon validation and add', size: 20 },
              { at: 3.3, type: 'ok',  text: '           regression test for stacked discounts.', size: 20 },
              { at: 4.0, type: 'out', text: '', gap: 10 },
              { at: 4.2, type: 'out', text: 'Add: Done when targeted checkout tests pass.', size: 20 },
              { at: 5.0, type: 'dim', text: '', gap: 18 },
              { at: 5.2, type: 'cmd', text: 'codeledger prompt-validate --task "Fix checkout"', typeFor: 1.4 },
              { at: 6.8, type: 'warn',text: 'Score: 0.71', size: 22 },
              { at: 7.2, type: 'err', text: 'Decision: weak', size: 22 },
              { at: 7.7, type: 'err', text: 'Missing: target path, validation signal', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={23} dur={14} num="24">
        <Eyebrow text="Sufficiency check · before context selection" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', gap: 40 }}>
          <Sprite start={23.4} end={37}>
            <div style={{ flex: 1, padding: '32px 36px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderTop: '4px solid #f87171', borderRadius: 8, height: 460 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#f87171', fontWeight: 700, marginBottom: 22 }}>WEAK</div>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper, marginBottom: 22 }}>"Fix checkout"</div>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 64, fontWeight: 800, color: '#f87171', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 22 }}>
                <Ticker from={0} to={0.71} dur={1.4} fmt={v => v.toFixed(2)} />
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.paper, lineHeight: 1.9 }}>
                <div style={{ color: '#f87171' }}>✗ no target path</div>
                <div style={{ color: '#f87171' }}>✗ no validation signal</div>
                <div style={{ color: '#f87171' }}>✗ no Done condition</div>
              </div>
            </div>
          </Sprite>
          <Sprite start={25} end={37}>
            <div style={{ flex: 1, padding: '32px 36px', background: 'rgba(74,222,128,0.06)', border: '1px solid #4ade80', borderTop: '4px solid #4ade80', borderRadius: 8, height: 460 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#4ade80', fontWeight: 700, marginBottom: 22 }}>STRONG</div>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 18, color: BRAND.paper, marginBottom: 22, lineHeight: 1.4 }}>"Fix guest checkout coupon validation; add stacked-discount regression test"</div>
              <div style={{ fontFamily: BRAND.fontSans, fontSize: 64, fontWeight: 800, color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 22 }}>
                <Ticker from={0} to={0.94} dur={1.4} fmt={v => v.toFixed(2)} />
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.paper, lineHeight: 1.9 }}>
                <div style={{ color: '#4ade80' }}>✓ target path</div>
                <div style={{ color: '#4ade80' }}>✓ validation signal</div>
                <div style={{ color: '#4ade80' }}>✓ Done condition</div>
              </div>
            </div>
          </Sprite>
        </div>
        <Sprite start={33} end={36.8}>
          <BottomCaption text="Prompt quality gates. Before context selection." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={37} dur={12} num="24">
        <Eyebrow text="Bundle quality follows prompt quality" top={150} />
        <Sprite start={37.4} end={49}>
          <div style={{ position: 'absolute', top: 270, left: 240, right: 240 }}>
            <div style={{ display: 'flex', gap: 30 }}>
              <div style={{ flex: 1, padding: '24px 32px', background: 'rgba(248,113,113,0.05)', border: '1px solid #f87171', borderRadius: 8 }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: '#f87171', letterSpacing: '0.22em', marginBottom: 14, fontWeight: 700 }}>WEAK PROMPT</div>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.paper, lineHeight: 2 }}>
                  <div>14 files · confidence low</div>
                  <div style={{ color: '#f87171' }}>3 wrong files included</div>
                </div>
              </div>
              <div style={{ flex: 1, padding: '24px 32px', background: 'rgba(74,222,128,0.05)', border: '1px solid #4ade80', borderRadius: 8 }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: '#4ade80', letterSpacing: '0.22em', marginBottom: 14, fontWeight: 700 }}>STRONG PROMPT</div>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.paper, lineHeight: 2 }}>
                  <div>6 files · confidence high</div>
                  <div style={{ color: '#4ade80' }}>0 wrong files</div>
                </div>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="A better task creates a better bundle." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger prompt suggest --task "..."' />
    </Stage>
  );
}
mountApp(App);
