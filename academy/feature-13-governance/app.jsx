// Feature 13 — Engineering Governance
function App() {
  return (
    <Stage width={1920} height={1080} duration={70} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f13">
      <TitleScene start={0} num="13" title="Engineering Governance" sub="Post-inference claim verification" />

      <AcademyScene start={3} dur={10} num="13">
        <Eyebrow text="4 claims · zero evidence" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
            <div style={{ padding: '28px 36px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.termDim, letterSpacing: '0.22em', marginBottom: 16 }}>AGENT OUTPUT</div>
              <div style={{ fontFamily: BRAND.fontSerif, fontSize: 26, color: BRAND.paper, lineHeight: 1.5 }}>
                "This refactor is <span style={{ background: 'rgba(251,191,36,0.25)', padding: '2px 6px', borderRadius: 3 }}>behavior-preserving</span>. <span style={{ background: 'rgba(251,191,36,0.25)', padding: '2px 6px', borderRadius: 3 }}>Tests cover all paths</span>. <span style={{ background: 'rgba(251,191,36,0.25)', padding: '2px 6px', borderRadius: 3 }}>No side effects</span>. <span style={{ background: 'rgba(251,191,36,0.25)', padding: '2px 6px', borderRadius: 3 }}>Safe to merge</span>."
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="4 claims. Zero evidence. How do you know?" />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={15} num="13">
        <Sprite start={13.2} end={28}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger verify --task "Refactor auth middleware" --governance', typeFor: 1.9 },
              { at: 2.4, type: 'dim', text: '', gap: 10 },
              { at: 2.6, type: 'ok',  text: 'Decision: passed', size: 24, bold: true },
              { at: 3.2, type: 'out', text: '', gap: 10 },
              { at: 3.4, type: 'banner', text: 'Engineering governance:', size: 22, bold: true },
              { at: 4.0, type: 'out', text: '  mode: shadow', size: 20 },
              { at: 4.4, type: 'out', text: '  output class: patch', size: 20 },
              { at: 4.9, type: 'warn',text: '  disposition: safe_with_tests_required', size: 22, bold: true },
              { at: 5.5, type: 'out', text: '  claims detected: 4', size: 20 },
              { at: 6.0, type: 'warn',text: '  evidence coverage: partial', size: 20 },
              { at: 6.6, type: 'out', text: '  receipt: egr_9f12d0', size: 20 },
              { at: 7.1, type: 'dim', text: '  merkle root: 4a7f...', size: 18 },
              { at: 7.8, type: 'warn',text: 'Next: run auth middleware regression tests before merge', size: 20 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={28} dur={16} num="13">
        <Eyebrow text="Each claim · checked · disposed" top={150} />
        <div style={{ position: 'absolute', top: 230, left: 120, right: 120, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
          {[
            { c: 'behavior-preserving', e: 'partial', color: '#fbbf24' },
            { c: 'tests cover paths', e: 'missing', color: '#f87171' },
            { c: 'no side effects', e: 'present', color: '#4ade80' },
            { c: 'safe to merge', e: 'tests_required', color: '#fbbf24' },
          ].map((card, i) => (
            <Sprite key={i} start={28.4 + i*0.4} end={44} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ opacity: op, transform: `translateX(${(1-op)*-16}px)`, padding: '22px 28px', background: `rgba(${card.color==='#4ade80'?'74,222,128':card.color==='#fbbf24'?'251,191,36':'248,113,113'},0.06)`, border: `1px solid ${card.color}40`, borderLeft: `4px solid ${card.color}`, borderRadius: 6 }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 8 }}>CLAIM {i+1}</div>
                    <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper, marginBottom: 12 }}>"{card.c}"</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: BRAND.fontMono, fontSize: 14 }}>
                      <span style={{ color: BRAND.termDim }}>evidence:</span>
                      <span style={{ color: card.color, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{card.e}</span>
                    </div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={32} end={44}>
          <div style={{ position: 'absolute', bottom: 130, left: 120, right: 120, padding: '16px 28px', background: 'rgba(184,122,107,0.1)', border: '1px solid #B87A6B', borderRadius: 8, fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper, textAlign: 'center', letterSpacing: '0.06em' }}>
            receipt egr_9f12d0 · merkle root 4a7f… · disposition: <span style={{ color: '#fbbf24', fontWeight: 700 }}>safe_with_tests_required</span>
          </div>
        </Sprite>
        <Sprite start={41} end={43.8}>
          <BottomCaption text="Claims checked. Not accepted. Disposition produced." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={44} dur={14} num="13">
        <Eyebrow text="Disposition spectrum" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 80, right: 80 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'stretch', height: 120 }}>
            {[
              ['safe_to_apply', '#4ade80'],
              ['safe_with_tests_required', '#fbbf24'],
              ['needs_owner_review', '#fb923c'],
              ['needs_security_review', '#f87171'],
              ['release_blocked', '#dc2626'],
            ].map(([label, color], i) => (
              <Sprite key={i} start={44.4 + i*0.4} end={58} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt/0.5, 0, 1);
                  const highlight = i === 1;
                  return (
                    <div style={{
                      flex: 1, opacity: op,
                      background: highlight ? `${color}30` : `${color}10`,
                      border: `1px solid ${color}`, borderRadius: 6,
                      padding: '14px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8,
                      transform: highlight ? 'translateY(-12px)' : 'none',
                      boxShadow: highlight ? `0 0 30px ${color}80` : 'none',
                    }}>
                      <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color, fontWeight: 700, textAlign: 'center', letterSpacing: '0.04em' }}>{label}</div>
                      {highlight && <div style={{ fontFamily: BRAND.fontMono, fontSize: 10, color: BRAND.paper, fontWeight: 700, letterSpacing: '0.18em' }}>← THIS CASE</div>}
                    </div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </div>
        <Sprite start={53} end={57.8}>
          <BottomCaption text="Governance does not block. It tells you what's missing." />
        </Sprite>
      </AcademyScene>

      <EndScene start={58} cmd='codeledger verify --governance' />
    </Stage>
  );
}
mountApp(App);
