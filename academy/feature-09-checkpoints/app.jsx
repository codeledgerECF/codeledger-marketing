// Feature 09 — Checkpoints
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f09">
      <TitleScene start={0} num="09" title="Checkpoints" sub="$ codeledger checkpoint" />

      <AcademyScene start={3} dur={8} num="09">
        <Eyebrow text="Mid-refactor · risky change ahead" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 160px' }}>
            <div style={{ textAlign: 'center', maxWidth: 1400 }}>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 38, color: BRAND.paper, lineHeight: 1.4, marginBottom: 30 }}>
                "I want to try the agent's big structural change…<br/><span style={{ color: '#fbbf24' }}>but I need a way back if it breaks things.</span>"
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termDim, marginTop: 36 }}>git tracks <span style={{ color: BRAND.paper }}>code</span> — but not <span style={{ color: '#fbbf24' }}>task state</span></div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Git tracks code. Not task state." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={12} num="09">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger checkpoint create --label "before auth refactor"', typeFor: 1.6 },
              { at: 2.0, type: 'ok',  text: 'id: chk_27af', size: 22, bold: true },
              { at: 2.4, type: 'out', text: 'label: before auth refactor', size: 20 },
              { at: 2.8, type: 'out', text: 'task: Refactor auth middleware', size: 20 },
              { at: 3.3, type: 'dim', text: 'Wrote: .codeledger/checkpoints/chk_27af.json', size: 18, gap: 14 },
              { at: 4.6, type: 'dim', text: '— time passes, things go wrong —', size: 18, gap: 18 },
              { at: 5.4, type: 'cmd', text: 'codeledger checkpoint restore chk_27af', typeFor: 1.2 },
              { at: 7.0, type: 'ok',  text: 'Restored: active task, active bundle pointer, session metadata', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={23} dur={14} num="09">
        <Eyebrow text="Pin → drift → restore" top={150} />
        <Sprite start={23.4} end={37}>
          <div style={{ position: 'absolute', top: 280, left: 80, right: 80, height: 240, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 100, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
            <Sprite start={24} end={37} keepMounted>
              {(({ localTime: lt }) => {
                const prog = clamp(lt/3.0, 0, 1);
                return (
                  <div style={{ position: 'absolute', top: 92, left: 0, width: `${prog*100}%`, height: 20, background: 'linear-gradient(to right, #4ade80 0%, #4ade80 30%, #f87171 60%, #f87171 90%)', borderRadius: 2, transition: 'none' }} />
                );
              })}
            </Sprite>
            {/* pin */}
            <Sprite start={24.4} end={37} keepMounted>
              <div style={{ position: 'absolute', left: '20%', top: 0 }}>
                <div style={{ width: 4, height: 100, background: BRAND.copper, marginLeft: 14 }} />
                <div style={{ width: 32, height: 32, borderRadius: 16, background: BRAND.copper, transform: 'translateX(-2px)', boxShadow: `0 0 24px ${BRAND.copper}` }} />
                <div style={{ marginTop: 14, fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.copper, fontWeight: 700, whiteSpace: 'nowrap', transform: 'translateX(-50px)' }}>chk_27af · pin</div>
              </div>
            </Sprite>
            <Sprite start={29} end={37} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ position: 'absolute', left: '75%', top: 60, opacity: op }}>
                    <div style={{ padding: '8px 14px', background: 'rgba(248,113,113,0.15)', border: '1px solid #f87171', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 14, color: '#f87171', fontWeight: 700 }}>BROKEN</div>
                  </div>
                );
              })}
            </Sprite>
            <Sprite start={31} end={37} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ position: 'absolute', left: '20%', top: 140, transform: `translateX(-50%)`, fontSize: 60, color: BRAND.copper, opacity: op, fontFamily: BRAND.fontMono }}>↶</div>
                );
              })}
            </Sprite>
          </div>
        </Sprite>
        <div style={{ position: 'absolute', top: 640, left: 0, right: 0, textAlign: 'center', fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.termInk, letterSpacing: '0.08em' }}>
          task · bundle · session metadata — all restored
        </div>
        <Sprite start={34} end={36.8}>
          <BottomCaption text="Try the risky path. Keep the safe way back." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={37} dur={12} num="09">
        <Eyebrow text="Risky refactor · worked · checkpoint still there" top={150} />
        <Sprite start={37.4} end={49}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: BRAND.fontSans, fontWeight: 800, fontSize: 96, color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1 }}>It works.</div>
              <div style={{ marginTop: 36, fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.termInk, lineHeight: 1.9 }}>
                <div>✓ tests green</div>
                <div>✓ verify passed</div>
                <div style={{ color: BRAND.copper }}>↳ chk_27af still saved · proof of before-state</div>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Try the risky path. Keep the safe way back." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger checkpoint create --label "..."' />
    </Stage>
  );
}
mountApp(App);
