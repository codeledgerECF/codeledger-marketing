// Feature 22 — Cowork Mode
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f22">
      <TitleScene start={0} num="22" title="Cowork Mode" sub="Context for knowledge work" />

      <AcademyScene start={3} dur={8} num="22">
        <Eyebrow text="Writing a migration rollout plan" top={170} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 160px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: BRAND.fontSerif, fontSize: 30, color: BRAND.paper, marginBottom: 32, lineHeight: 1.4 }}>
                Needs: prior rollback notes · related ADRs · team decisions
              </div>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['Notion', 'GitHub', 'Wiki', 'Chat history', 'Drive'].map((s, i) => (
                  <div key={i} style={{ padding: '12px 22px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 6, fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper }}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={9} end={10.8}>
          <BottomCaption text="Bundles are for code. What about plans?" />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={11} dur={12} num="22">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger cowork-start --intent "Draft the migration rollout plan"', typeFor: 1.8 },
              { at: 2.4, type: 'dim', text: '', gap: 10 },
              { at: 2.6, type: 'ok',  text: 'Intent: Draft the migration rollout plan', size: 22 },
              { at: 3.2, type: 'out', text: 'Context: docs and engineering evidence selected', size: 22 },
              { at: 4.2, type: 'dim', text: '', gap: 18 },
              { at: 4.4, type: 'cmd', text: 'codeledger cowork-refresh', typeFor: 0.9 },
              { at: 5.6, type: 'ok',  text: 'Added: docs/migrations/rollback-plan.md', size: 22 },
              { at: 6.2, type: 'ok',  text: 'Added: docs/decisions/adr-2024-stripe-cutover.md', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={23} dur={14} num="22">
        <Eyebrow text="Cowork bundle · docs not code" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 220, right: 220 }}>
          {[
            { f: 'docs/migrations/rollback-plan.md', reason: 'rollback referenced in prior migration', color: '#4ade80' },
            { f: 'docs/decisions/adr-2024-stripe-cutover.md', reason: 'related architectural decision', color: '#60a5fa' },
            { f: 'docs/runbooks/payments-incident.md', reason: 'last incident affecting same domain', color: '#fbbf24' },
            { f: 'docs/postmortems/q3-migration-2024.md', reason: 'lessons learned for similar work', color: BRAND.copper },
          ].map((row, i) => (
            <Sprite key={i} start={23 + 0.4 + i*0.5} end={37} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '18px 28px', marginBottom: 14, background: 'rgba(255,255,255,0.04)', border: `1px solid ${row.color}40`, borderLeft: `3px solid ${row.color}`, borderRadius: 6, opacity: op, transform: `translateX(${(1-op)*-16}px)` }}>
                    <div style={{ flex: 1, fontFamily: BRAND.fontMono, fontSize: 18, color: BRAND.paper }}>{row.f}</div>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: row.color, fontStyle: 'italic' }}>← {row.reason}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={33} end={36.8}>
          <BottomCaption text="Same selection logic. Different source material." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={37} dur={12} num="22">
        <Eyebrow text="Plan written · rollback found automatically" top={150} />
        <Sprite start={37.4} end={49}>
          <Card x={420} y={260} width={1080} height={480} accent={BRAND.copper} paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.copper, marginBottom: 16, fontWeight: 700 }}>MIGRATION-ROLLOUT.md</div>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 32, fontWeight: 700, color: BRAND.paper, marginBottom: 28 }}># Stripe v2 Migration · Rollout Plan</div>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.termInk, lineHeight: 1.9 }}>
              <div>## Rollback procedure</div>
              <div style={{ color: BRAND.termDim, fontStyle: 'italic', marginLeft: 20, fontSize: 14 }}>(referenced from docs/migrations/rollback-plan.md)</div>
              <div style={{ marginTop: 14 }}>1. Pause webhook queue</div>
              <div>2. Revert API version flag</div>
              <div>3. Replay buffered events</div>
            </div>
          </Card>
        </Sprite>
        <Sprite start={45.5} end={48.8}>
          <BottomCaption text="Engineering work includes plans. Now plans have context too." />
        </Sprite>
      </AcademyScene>

      <EndScene start={49} cmd='codeledger cowork-start --intent "..."' />
    </Stage>
  );
}
mountApp(App);
