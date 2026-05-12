// Feature 16 — Review Coverage & Merge Checks
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f16">
      <TitleScene start={0} num="16" title="Review Coverage" sub="$ codeledger review-gate · merge-check" />

      <AcademyScene start={3} dur={8} num="16">
        <Eyebrow text="CODEOWNERS exists · review didn't follow" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 160px' }}>
            <div style={{ textAlign: 'center', maxWidth: 1300 }}>
              <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 30, color: BRAND.paper, lineHeight: 1.45, marginBottom: 28 }}>
                PR touches <span style={{ color: BRAND.copper }}>src/auth/middleware.ts</span>
              </div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 20, color: BRAND.termInk, lineHeight: 2 }}>
                <div style={{ color: '#fbbf24' }}>required reviewer: @platform-auth</div>
                <div style={{ color: '#f87171' }}>assigned: author's teammates</div>
                <div style={{ color: '#f87171', fontWeight: 700, marginTop: 14 }}>incident · auth session bug shipped</div>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Ownership exists. Reviews don't enforce it." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={13} num="16">
        <Sprite start={11.2} end={24}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger review-gate', typeFor: 1.0 },
              { at: 1.4, type: 'dim', text: '', gap: 10 },
              { at: 1.6, type: 'warn',text: 'Decision: needs_owner_review', size: 24, bold: true },
              { at: 2.4, type: 'out', text: 'Reason: changed file matches CODEOWNERS-protected path', size: 20 },
              { at: 3.0, type: 'out', text: 'Owners: @platform-auth', size: 20 },
              { at: 4.2, type: 'dim', text: '', gap: 18 },
              { at: 4.4, type: 'cmd', text: 'codeledger review-coverage', typeFor: 1.0 },
              { at: 5.8, type: 'dim', text: '', gap: 10 },
              { at: 6.0, type: 'out', text: 'owners mapped: 4/5', size: 22 },
              { at: 6.5, type: 'warn',text: 'tests mapped: 3/5', size: 22 },
              { at: 7.2, type: 'err', text: 'Gap: src/auth/session-store.ts needs owner review', size: 20 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={24} dur={14} num="16">
        <Eyebrow text="5 changed files · evidence overlay" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120 }}>
          {[
            { f: 'login.ts', owner: 'mapped', tests: 'present', color: '#4ade80' },
            { f: 'token-refresh.ts', owner: 'mapped', tests: 'present', color: '#4ade80' },
            { f: 'middleware.ts', owner: 'mapped', tests: 'present', color: '#4ade80' },
            { f: 'guards.ts', owner: 'mapped', tests: 'missing', color: '#fbbf24' },
            { f: 'session-store.ts', owner: 'missing', tests: 'missing', color: '#f87171' },
          ].map((row, i) => (
            <Sprite key={i} start={24 + 0.4 + i*0.4} end={38} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '16px 24px', marginBottom: 10, background: `rgba(${row.color==='#4ade80'?'74,222,128':row.color==='#fbbf24'?'251,191,36':'248,113,113'},0.06)`, border: `1px solid ${row.color}40`, borderLeft: `3px solid ${row.color}`, borderRadius: 6, opacity: op, transform: `translateX(${(1-op)*-16}px)` }}>
                    <div style={{ flex: 1, fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper }}>{row.f}</div>
                    <div style={{ width: 200, fontFamily: BRAND.fontMono, fontSize: 13, color: row.owner === 'mapped' ? '#4ade80' : '#f87171', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>OWNER · {row.owner}</div>
                    <div style={{ width: 200, fontFamily: BRAND.fontMono, fontSize: 13, color: row.tests === 'present' ? '#4ade80' : '#fbbf24', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>TESTS · {row.tests}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={34} end={37.8}>
          <BottomCaption text="Repo evidence. Not author memory." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={38} dur={11} num="16">
        <Eyebrow text="merge-check · review_ready" top={170} />
        <Sprite start={38.4} end={49}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-block', padding: '20px 36px', background: 'rgba(74,222,128,0.1)', border: '2px solid #4ade80', borderRadius: 12 }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, letterSpacing: '0.22em', color: '#4ade80', fontWeight: 700, marginBottom: 12 }}>STATUS</div>
                <div style={{ fontFamily: BRAND.fontSans, fontSize: 80, fontWeight: 800, color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1 }}>review_ready</div>
              </div>
              <div style={{ marginTop: 36, fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper, lineHeight: 1.9 }}>
                <div>✓ All 5 files owners mapped</div>
                <div>✓ All 5 files tests present</div>
                <div>✓ Governance: advisory pass</div>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Merge when evidence supports it." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger merge-check' />
    </Stage>
  );
}
mountApp(App);
