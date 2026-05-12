// Feature 23 — System Map & Structural Intelligence
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f23">
      <TitleScene start={0} num="23" title="System Map" sub="Structural intelligence" />

      <AcademyScene start={3} dur={10} num="23">
        <Eyebrow text="Blast radius · unknown" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
            <div style={{ padding: '20px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, marginBottom: 22, fontFamily: BRAND.fontMono, fontSize: 20, color: BRAND.paper }}>
              <span style={{ color: BRAND.termDim, marginRight: 10 }}>edit:</span><span style={{ color: BRAND.copper }}>src/auth/middleware.ts</span>
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8 }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#f87171', marginBottom: 10, fontWeight: 700 }}>RESULT</div>
              <div style={{ fontFamily: BRAND.fontSerif, fontSize: 24, color: BRAND.paper, lineHeight: 1.45 }}>
                Change ships. <span style={{ color: '#f87171', fontWeight: 700 }}>4 downstream services break.</span><br/>
                <span style={{ color: BRAND.termDim, fontStyle: 'italic' }}>The agent never knew middleware.ts had 12 dependents.</span>
              </div>
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="Blast radius unknown. Until after the incident." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={13} num="23">
        <Sprite start={13.2} end={26}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger system-map', typeFor: 1.0 },
              { at: 1.4, type: 'dim', text: '', gap: 10 },
              { at: 1.6, type: 'out', text: 'Domains: auth · checkout · payments', size: 22 },
              { at: 2.2, type: 'out', text: '', gap: 10 },
              { at: 2.4, type: 'warn',text: 'High-centrality files:', size: 22, bold: true },
              { at: 3.0, type: 'warn',text: '  src/auth/middleware.ts', size: 22 },
              { at: 3.5, type: 'warn',text: '  src/payments/webhook.ts', size: 22 },
              { at: 4.6, type: 'dim', text: '', gap: 18 },
              { at: 4.8, type: 'cmd', text: 'codeledger graph', typeFor: 0.8 },
              { at: 6.0, type: 'err', text: 'src/auth/middleware.ts has 12 dependents', size: 24, bold: true },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={26} dur={15} num="23">
        <Eyebrow text="Dependency graph · centrality" top={150} />
        <div style={{ position: 'absolute', top: 220, left: 0, right: 0, height: 580 }}>
          <Sprite start={26.4} end={41} keepMounted>
            {(({ localTime: lt }) => {
              const op = clamp(lt/0.5, 0, 1);
              const fan = clamp(lt/2.2, 0, 1);
              return (
                <svg viewBox="0 0 1920 580" style={{ width: '100%', height: 580, opacity: op }}>
                  {/* Edges from center node to 12 dependents */}
                  {Array.from({ length: 12 }, (_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const x2 = 960 + Math.cos(angle) * 380;
                    const y2 = 290 + Math.sin(angle) * 230;
                    const dx = (x2 - 960) * fan;
                    const dy = (y2 - 290) * fan;
                    return <line key={i} x1={960} y1={290} x2={960+dx} y2={290+dy} stroke={BRAND.copper} strokeWidth={1.5} opacity={0.5} />;
                  })}
                  {/* Dependent nodes */}
                  {Array.from({ length: 12 }, (_, i) => {
                    const showAt = i * 0.12;
                    if (fan < showAt) return null;
                    const angle = (i / 12) * Math.PI * 2;
                    const x = 960 + Math.cos(angle) * 380;
                    const y = 290 + Math.sin(angle) * 230;
                    return <circle key={i} cx={x} cy={y} r={14} fill="#60a5fa" />;
                  })}
                  {/* Center hub */}
                  <circle cx={960} cy={290} r={40} fill={BRAND.copper} />
                  <circle cx={960} cy={290} r={40} fill="none" stroke={BRAND.copper} strokeWidth={2} opacity={0.5}>
                    <animate attributeName="r" from="40" to="64" dur="1.6s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.6s" repeatCount="indefinite"/>
                  </circle>
                  <text x={960} y={350} textAnchor="middle" fontFamily={BRAND.fontMono} fontSize={16} fontWeight={700} fill={BRAND.paper}>middleware.ts</text>
                  <text x={960} y={372} textAnchor="middle" fontFamily={BRAND.fontMono} fontSize={12} fill={BRAND.copper} letterSpacing="2">12 DEPENDENTS</text>
                </svg>
              );
            })}
          </Sprite>
        </div>
        <Sprite start={37.5} end={40.8}>
          <BottomCaption text="12 files depend on this. Every agent should know." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={41} dur={14} num="23">
        <Eyebrow text="Hotspots · before the first edit" top={150} />
        <Sprite start={41.4} end={55}>
          <div style={{ position: 'absolute', top: 240, left: 240, right: 240 }}>
            {[
              { f: 'src/auth/middleware.ts', churn: 'HIGH', risk: 'HIGH', color: '#f87171' },
              { f: 'src/payments/webhook.ts', churn: 'MEDIUM', risk: 'HIGH', color: '#fb923c' },
              { f: 'src/checkout/discounts.ts', churn: 'MEDIUM', risk: 'MEDIUM', color: '#fbbf24' },
              { f: 'src/api/middleware/cors.ts', churn: 'LOW', risk: 'LOW', color: '#4ade80' },
            ].map((row, i) => (
              <Sprite key={i} start={41.4 + i*0.4} end={55} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt/0.5, 0, 1);
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '18px 28px', marginBottom: 14, background: 'rgba(255,255,255,0.04)', border: `1px solid ${row.color}40`, borderLeft: `4px solid ${row.color}`, borderRadius: 6, opacity: op, transform: `translateX(${(1-op)*-16}px)` }}>
                      <div style={{ flex: 1, fontFamily: BRAND.fontMono, fontSize: 17, color: BRAND.paper }}>{row.f}</div>
                      <div style={{ width: 150, fontFamily: BRAND.fontMono, fontSize: 13, color: row.churn==='HIGH'?'#f87171':row.churn==='MEDIUM'?'#fbbf24':'#4ade80', fontWeight: 700, letterSpacing: '0.18em' }}>CHURN · {row.churn}</div>
                      <div style={{ width: 150, fontFamily: BRAND.fontMono, fontSize: 13, color: row.risk==='HIGH'?'#f87171':row.risk==='MEDIUM'?'#fbbf24':'#4ade80', fontWeight: 700, letterSpacing: '0.18em' }}>RISK · {row.risk}</div>
                    </div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </Sprite>
        <Sprite start={51.5} end={54.8}>
          <BottomCaption text="Structural intelligence. Before the first edit." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger system-map' />
    </Stage>
  );
}
mountApp(App);
