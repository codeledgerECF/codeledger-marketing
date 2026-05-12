// Feature 11 — Project Notebook
function App() {
  return (
    <Stage width={1920} height={1080} duration={70} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f11">
      <TitleScene start={0} num="11" title="Project Notebook" sub="Durable repo-owned memory" />

      <AcademyScene start={3} dur={10} num="11">
        <Eyebrow text="Same lesson · three sprints" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120 }}>
          {[
            { sprint: 'sprint 1', t: 'Engineer learns: auth middleware must preserve public route bypass', color: '#4ade80', delay: 0.3 },
            { sprint: 'sprint 3', t: 'Different engineer breaks the same invariant', color: '#fbbf24', delay: 1.6 },
            { sprint: 'sprint 5', t: 'It happens again — production incident', color: '#f87171', delay: 2.9 },
          ].map((m, i) => (
            <Sprite key={i} start={3 + m.delay} end={13} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 22, opacity: op, transform: `translateY(${(1-op)*12}px)` }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: m.color, letterSpacing: '0.18em', width: 100, fontWeight: 700, textTransform: 'uppercase' }}>{m.sprint}</div>
                    <div style={{ flex: 1, padding: '14px 22px', background: `rgba(${m.color==='#4ade80'?'74,222,128':m.color==='#fbbf24'?'251,191,36':'248,113,113'},0.06)`, border: `1px solid ${m.color}40`, borderLeft: `3px solid ${m.color}`, borderRadius: 6, fontFamily: BRAND.fontSerif, fontSize: 21, color: BRAND.paper }}>{m.t}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="Hard-won lessons disappear into chat history." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={15} num="11">
        <Sprite start={13.2} end={28}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger notebook', typeFor: 0.9 },
              { at: 1.4, type: 'dim', text: '', gap: 8 },
              { at: 1.6, type: 'err', text: 'note_001  invariant   Auth middleware must preserve public route bypass', size: 19 },
              { at: 2.2, type: 'out', text: 'note_002  decision    Prefer route metadata over path string matching', size: 19 },
              { at: 2.8, type: 'out', text: 'note_003  pr-outcome  PR #418 required explicit regression test', size: 19 },
              { at: 3.6, type: 'dim', text: '', gap: 18 },
              { at: 3.8, type: 'banner', text: 'MCP response · codeledger_project_notebook', size: 18, bold: true },
              { at: 4.4, type: 'dim', text: '', gap: 8 },
              { at: 4.6, type: 'out', text: '{', size: 18 },
              { at: 4.9, type: 'out', text: '  "kind": "invariant",', size: 18 },
              { at: 5.3, type: 'out', text: '  "title": "Auth middleware must preserve anonymous route bypass",', size: 18 },
              { at: 5.8, type: 'warn',text: '  "guidance": "Treat invariant notes as hard constraints unless superseded."', size: 17 },
              { at: 6.3, type: 'out', text: '}', size: 18 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={28} dur={15} num="11">
        <Eyebrow text="Five kinds of memory · one place" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>
          {[
            { k: 'decision', c: '#4ade80', t: 'Prefer route metadata' },
            { k: 'invariant', c: '#f87171', t: 'Preserve route bypass' },
            { k: 'deferral', c: '#fbbf24', t: 'Migrate when stable' },
            { k: 'why-not', c: '#94a3b8', t: 'Tried regex, fragile' },
            { k: 'pr-outcome', c: '#60a5fa', t: 'PR #418 needed test' },
          ].map((card, i) => (
            <Sprite key={i} start={28 + 0.3 + i*0.3} end={43} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{
                    opacity: op, transform: `translateY(${(1-op)*16}px)`,
                    padding: '20px 18px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${card.c}40`, borderTop: `4px solid ${card.c}`, borderRadius: 8, minHeight: 320,
                  }}>
                    <div style={{ display: 'inline-block', padding: '4px 10px', background: `${card.c}22`, border: `1px solid ${card.c}`, borderRadius: 3, fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.1em', color: card.c, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>{card.k}</div>
                    <div style={{ fontFamily: BRAND.fontSans, fontSize: 17, fontWeight: 600, color: BRAND.paper, lineHeight: 1.35, marginBottom: 16 }}>{card.t}</div>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, color: BRAND.termDim, lineHeight: 1.8 }}>
                      <div>tags: auth, middleware</div>
                      <div>updated: 2026-05-12</div>
                    </div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={40} end={42.8}>
          <BottomCaption text="Repo-native memory. Searchable. Versioned." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={43} dur={17} num="11">
        <Eyebrow text="Next activation · memory injected" top={150} />
        <Sprite start={43.4} end={60}>
          <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ padding: '20px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 10 }}>$ codeledger activate --task "Refactor auth middleware"</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.paper }}>Bundle bnd_42f19ac · confidence: high</div>
            </div>
            <Sprite start={45} end={60}>
              <div style={{ padding: '24px 32px', background: 'rgba(248,113,113,0.08)', border: '1px solid #f87171', borderLeft: '4px solid #f87171', borderRadius: 8 }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#f87171', fontWeight: 700, marginBottom: 14, textTransform: 'uppercase' }}>⚡ Memory context · injected automatically</div>
                <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 26, color: BRAND.paper, lineHeight: 1.4 }}>
                  invariant: Auth middleware must preserve <span style={{ color: '#f87171', fontStyle: 'normal', fontWeight: 700 }}>anonymous route bypass</span>
                </div>
              </div>
            </Sprite>
            <Sprite start={48} end={60}>
              <div style={{ padding: '20px 28px', background: 'rgba(74,222,128,0.08)', border: '1px solid #4ade80', borderRadius: 8, textAlign: 'center', fontFamily: BRAND.fontMono, fontSize: 22, color: '#4ade80', fontWeight: 600 }}>
                ✓ Agent does not break the constraint
              </div>
            </Sprite>
          </div>
        </Sprite>
        <Sprite start={57} end={59.8}>
          <BottomCaption text="The agent starts knowing what the team learned." />
        </Sprite>
      </AcademyScene>

      <EndScene start={60} cmd='codeledger notebook' />
    </Stage>
  );
}
mountApp(App);
