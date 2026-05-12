// Feature 20 — MCP Server
function App() {
  return (
    <Stage width={1920} height={1080} duration={70} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f20">
      <TitleScene start={0} num="20" title="MCP Server" sub="Model Context Protocol · for every agent" />

      <AcademyScene start={3} dur={10} num="20">
        <Eyebrow text="Three agents · same repo · zero shared context" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 250, left: 120, right: 120, display: 'flex', gap: 30 }}>
            {['Claude Code', 'Cursor', 'Windsurf'].map((agent, i) => (
              <div key={i} style={{ flex: 1, padding: '32px 24px', background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontFamily: BRAND.fontSans, fontWeight: 700, fontSize: 26, color: BRAND.paper, marginBottom: 18 }}>{agent}</div>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: '#f87171', lineHeight: 2 }}>
                  <div>own repo search</div>
                  <div>own file discovery</div>
                  <div>burning tokens</div>
                </div>
              </div>
            ))}
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="Every agent. Same repo. Zero shared context." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={14} num="20">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger mcp', typeFor: 0.7 },
              { at: 1.0, type: 'dim', text: '', gap: 10 },
              { at: 1.2, type: 'ok',  text: 'Status: listening', size: 26, bold: true },
              { at: 2.0, type: 'out', text: '', gap: 10 },
              { at: 2.2, type: 'banner', text: 'Tools:', size: 22, bold: true },
              { at: 2.8, type: 'out', text: '  codeledger_project_notebook', size: 22 },
              { at: 3.3, type: 'out', text: '  govern_engineering_output', size: 22 },
              { at: 3.8, type: 'out', text: '  verify_engineering_claims', size: 22 },
              { at: 4.3, type: 'out', text: '  get_engineering_disposition', size: 22 },
              { at: 4.8, type: 'out', text: '  fallback_to_engineering_plan', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={27} dur={18} num="20">
        <Eyebrow text="One hub · any agent" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 0, right: 0, height: 540 }}>
          {/* central hub */}
          <Sprite start={27.4} end={45}>
            <div style={{ position: 'absolute', top: 200, left: '50%', transform: 'translateX(-50%)', width: 280, height: 200, background: 'rgba(184,122,107,0.1)', border: '2px solid #B87A6B', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 60px rgba(184,122,107,0.5)' }}>
              <div style={{ width: 36, height: 36, background: BRAND.copper, transform: 'rotate(45deg)', marginBottom: 16 }} />
              <div style={{ fontFamily: BRAND.fontSans, fontWeight: 800, fontSize: 24, color: BRAND.copper, letterSpacing: '-0.01em' }}>MCP Hub</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: BRAND.termDim, letterSpacing: '0.18em', marginTop: 6 }}>CODELEDGER</div>
            </div>
          </Sprite>
          {/* three agents */}
          {[
            { name: 'Claude Code', x: 100, y: 80, req: '"What context do I need?"' },
            { name: 'Cursor', x: 100, y: 360, req: '"Is this output safe?"' },
            { name: 'Windsurf', x: 1500, y: 220, req: '"What did the team decide?"' },
          ].map((agent, i) => (
            <Sprite key={i} start={28.4 + i*0.8} end={45} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.6, 0, 1);
                return (
                  <div style={{ position: 'absolute', left: agent.x, top: agent.y, width: 320, opacity: op }}>
                    <div style={{ padding: '18px 22px', background: 'rgba(96,165,250,0.08)', border: '1px solid #60a5fa', borderRadius: 8 }}>
                      <div style={{ fontFamily: BRAND.fontSans, fontWeight: 700, fontSize: 20, color: BRAND.paper, marginBottom: 8 }}>{agent.name}</div>
                      <div style={{ fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 15, color: BRAND.termInk, lineHeight: 1.4 }}>{agent.req}</div>
                    </div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={36} end={45}>
          <div style={{ position: 'absolute', bottom: 150, left: 0, right: 0, textAlign: 'center', fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.copper, letterSpacing: '0.18em' }}>
            response in &lt; 200ms
          </div>
        </Sprite>
        <Sprite start={42} end={44.8}>
          <BottomCaption text="One source of truth. Any agent. Any IDE." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={45} dur={18} num="20">
        <Eyebrow text="Not a search tool · an operating layer" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 120, right: 120, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            'Context retrieval', 'Repo-aware search', 'Project Notebook',
            'Session recording', 'Governance', 'Safe fallback plans',
          ].map((label, i) => (
            <Sprite key={i} start={45 + 0.3 + i*0.3} end={63} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt/0.5, 0, 1);
                return (
                  <div style={{ opacity: op, transform: `translateY(${(1-op)*12}px)`, padding: '28px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,122,107,0.4)', borderTop: `3px solid ${BRAND.copper}`, borderRadius: 8, textAlign: 'center', minHeight: 130 }}>
                    <div style={{ fontFamily: BRAND.fontSans, fontWeight: 700, fontSize: 22, color: BRAND.paper, letterSpacing: '-0.005em' }}>{label}</div>
                  </div>
                );
              })}
            </Sprite>
          ))}
        </div>
        <Sprite start={59} end={62.8}>
          <BottomCaption text="Not a search tool. An operating layer." />
        </Sprite>
      </AcademyScene>

      <EndScene start={63} cmd='codeledger mcp' />
    </Stage>
  );
}
mountApp(App);
