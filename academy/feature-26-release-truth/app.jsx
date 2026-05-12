// Feature 26 — Release Truth
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f26">
      <TitleScene start={0} num="26" title="Release Truth" sub="Evidence-grounded release decisions" />

      <AcademyScene start={3} dur={10} num="26">
        <Eyebrow text="Release meeting" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
            <div style={{ padding: '20px 28px', background: 'rgba(74,222,128,0.06)', border: '1px solid #4ade80', borderRadius: 8, marginBottom: 22, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 26, color: BRAND.paper, textAlign: 'center' }}>
              "CI is green. Are we good to ship?"
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.paper, lineHeight: 1.9 }}>
              <div style={{ color: '#f87171', fontWeight: 700, marginBottom: 8 }}>but…</div>
              <div>· auth path changed without tests</div>
              <div>· webhook retry never verified</div>
              <div>· 1 governance warning open</div>
            </div>
            <div style={{ marginTop: 16, padding: '12px 22px', background: '#1a0808', border: '1px solid #f87171', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 18, color: '#f87171', textAlign: 'center', fontWeight: 700 }}>
              ship anyway · rollback next morning
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="Green CI. Missing evidence. Incident." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={14} num="26">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="release"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger release-truth', typeFor: 1.2 },
              { at: 1.6, type: 'dim', text: '', gap: 10 },
              { at: 1.8, type: 'ok',  text: 'Confidence: 0.84', size: 28, bold: true },
              { at: 2.6, type: 'out', text: '', gap: 10 },
              { at: 2.8, type: 'out', text: 'verification reports: 4', size: 22 },
              { at: 3.3, type: 'out', text: 'governance receipts: 3', size: 22 },
              { at: 3.8, type: 'ok',  text: 'unresolved blockers: 0', size: 22 },
              { at: 5.0, type: 'dim', text: '', gap: 18 },
              { at: 5.2, type: 'cmd', text: 'codeledger release-decision', typeFor: 1.0 },
              { at: 6.4, type: 'warn',text: 'Decision: proceed_with_review', size: 24, bold: true },
              { at: 7.0, type: 'warn',text: 'one owner review pending', size: 20 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={27} dur={14} num="26">
        <Eyebrow text="Confidence meter · 0.84 is not 1.0" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 220, right: 220 }}>
          <Sprite start={27.4} end={41} keepMounted>
            {(({ localTime: lt }) => {
              const prog = clamp(lt/2.0, 0, 1);
              const val = 0.84 * prog;
              return (
                <>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 96, fontWeight: 800, color: BRAND.copper, letterSpacing: '-0.04em', lineHeight: 1, textAlign: 'center', marginBottom: 22 }}>{val.toFixed(2)}</div>
                  <div style={{ height: 22, background: 'rgba(255,255,255,0.06)', borderRadius: 11, overflow: 'hidden', marginBottom: 30 }}>
                    <div style={{ width: `${val * 100}%`, height: '100%', background: `linear-gradient(to right, ${BRAND.copper} 0%, #fbbf24 100%)`, borderRadius: 11 }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
                    {[
                      ['verify reports', '4', '#4ade80'],
                      ['receipts', '3', '#4ade80'],
                      ['CI', 'pass', '#4ade80'],
                      ['owner review', 'pending', '#fbbf24'],
                    ].map(([k, v, c], i) => (
                      <div key={i} style={{ textAlign: 'center', padding: '14px 12px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${c}40`, borderRadius: 6 }}>
                        <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.18em', color: BRAND.termDim, marginBottom: 6 }}>{k.toUpperCase()}</div>
                        <div style={{ fontFamily: BRAND.fontMono, fontSize: 22, fontWeight: 700, color: c }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })}
          </Sprite>
        </div>
        <Sprite start={37} end={40.8}>
          <BottomCaption text="0.84 is not 1.0. That gap is meaningful." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={41} dur={14} num="26">
        <Eyebrow text="History · makes the next decision smarter" top={150} />
        <Sprite start={41.4} end={55}>
          <div style={{ position: 'absolute', top: 260, left: 220, right: 220 }}>
            {[
              ['2026.05.10', 'passed', 'no rollback', '#4ade80'],
              ['2026.05.03', 'warning', 'owner review late · post-release fix', '#fbbf24'],
              ['2026.04.25', 'blocked', 'release_blocked → tests added before ship', '#60a5fa'],
            ].map(([date, status, note, color], i) => (
              <Sprite key={i} start={41.4 + i*0.5} end={55} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt/0.5, 0, 1);
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '18px 28px', marginBottom: 12, background: 'rgba(255,255,255,0.04)', border: `1px solid ${color}40`, borderLeft: `3px solid ${color}`, borderRadius: 6, opacity: op }}>
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim, width: 130 }}>{date}</div>
                      <div style={{ width: 110, fontFamily: BRAND.fontMono, fontSize: 13, color, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{status}</div>
                      <div style={{ flex: 1, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 18, color: BRAND.paper }}>{note}</div>
                    </div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </Sprite>
        <Sprite start={51} end={54.8}>
          <BottomCaption text="History makes the next decision smarter." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger release-truth' />
    </Stage>
  );
}
mountApp(App);
