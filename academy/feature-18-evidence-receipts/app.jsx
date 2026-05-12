// Feature 18 — Evidence & Receipts
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f18">
      <TitleScene start={0} num="18" title="Evidence & Receipts" sub="Every decision · a traceable artifact" />

      <AcademyScene start={3} dur={8} num="18">
        <Eyebrow text="Incident review" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30, padding: '0 160px' }}>
            <div style={{ padding: '20px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 28, color: BRAND.paper, maxWidth: 1000, textAlign: 'center' }}>
              "Why did that change ship without tests?"
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 28, color: BRAND.paper, maxWidth: 1000, textAlign: 'center' }}>
              "The agent said it was safe."
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Words are not receipts. Claims are not evidence." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={12} num="18">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger evidence', typeFor: 0.9 },
              { at: 1.4, type: 'dim', text: '', gap: 10 },
              { at: 1.6, type: 'ok',  text: 'manifest: man_7812fd', size: 24 },
              { at: 2.2, type: 'ok',  text: 'verify report: ver_9012ab', size: 24 },
              { at: 2.8, type: 'ok',  text: 'governance receipt: egr_9f12d0', size: 24 },
              { at: 4.0, type: 'dim', text: '', gap: 18 },
              { at: 4.2, type: 'cmd', text: 'codeledger sign-manifest', typeFor: 1.0 },
              { at: 5.6, type: 'ok',  text: 'Signature: sig_9bca...', size: 24 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={23} dur={14} num="18">
        <Eyebrow text="Chain of custody · task to receipt" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 80, right: 80, display: 'flex', gap: 30, alignItems: 'center' }}>
          {[
            { label: 'Context Bundle', id: 'bnd_42f19ac', color: '#60a5fa' },
            { label: 'Verification Report', id: 'ver_9012ab', color: '#4ade80' },
            { label: 'Governance Receipt', id: 'egr_9f12d0', color: BRAND.copper },
          ].map((node, i) => (
            <React.Fragment key={i}>
              <Sprite start={23 + 0.5 + i*1.2} end={37} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt/0.5, 0, 1);
                  return (
                    <div style={{ flex: 1, opacity: op, transform: `translateY(${(1-op)*16}px)`, textAlign: 'center', padding: '32px 24px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${node.color}`, borderTop: `4px solid ${node.color}`, borderRadius: 10 }}>
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: node.color, fontWeight: 700, marginBottom: 16 }}>{node.label.toUpperCase()}</div>
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 26, fontWeight: 700, color: BRAND.paper }}>{node.id}</div>
                    </div>
                  );
                })}
              </Sprite>
              {i < 2 && (
                <Sprite start={24.0 + i*1.2} end={37} keepMounted>
                  {(({ localTime: lt }) => {
                    const op = clamp(lt/0.5, 0, 1);
                    return (
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 36, color: BRAND.copper, opacity: op }}>→</div>
                    );
                  })}
                </Sprite>
              )}
            </React.Fragment>
          ))}
        </div>
        <Sprite start={33.5} end={36.8}>
          <BottomCaption text="Linked by task · bundle ID · merkle root." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={37} dur={12} num="18">
        <Eyebrow text="Same question · this time answered" top={150} />
        <Sprite start={37.4} end={49}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: 1500 }}>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 30, color: BRAND.termInk, marginBottom: 32 }}>
                "Why did that change ship without tests?"
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 22, color: BRAND.paper, lineHeight: 1.9, textAlign: 'left', display: 'inline-block' }}>
                <div>→ receipt <span style={{ color: BRAND.copper }}>egr_9f12d0</span></div>
                <div>→ disposition <span style={{ color: '#fbbf24' }}>safe_with_tests_required</span></div>
                <div>→ <span style={{ color: '#f87171', fontWeight: 700 }}>tests were required · never run · that is the gap</span></div>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Receipts make accountability possible." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger evidence' />
    </Stage>
  );
}
mountApp(App);
