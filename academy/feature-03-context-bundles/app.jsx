// Feature 03 — Context Bundles
function App() {
  return (
    <Stage width={1920} height={1080} duration={60} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f03">
      <TitleScene start={0} num="03" title="Context Bundles" sub="The core CodeLedger artifact" />

      {/* Problem: oversized prompt overflow */}
      <AcademyScene start={3} dur={8} num="03">
        <Eyebrow text="Without bundling" top={150} />
        <Sprite start={3.2} end={11}>
          <div style={{ position: 'absolute', top: 240, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 760, height: 500, position: 'relative',
              border: '2px dashed rgba(248,113,113,0.5)', borderRadius: 12,
              padding: '24px 28px', overflow: 'hidden',
            }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#f87171', marginBottom: 14 }}>AGENT PROMPT (overflowing)</div>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, lineHeight: 1.7, color: 'rgba(216,224,238,0.5)' }}>
                {Array.from({length: 30}, (_, i) => (
                  <div key={i}>src/{['auth','payments','billing','shared','api','tests'][i%6]}/file-{i}.ts</div>
                ))}
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 200,
                background: 'linear-gradient(to bottom, transparent, #0a0d18)',
              }} />
            </div>
          </div>
        </Sprite>
        <Sprite start={5} end={11}>
          <div style={{
            position: 'absolute', top: 360, right: 200,
            background: 'rgba(248,113,113,0.08)', border: '1px solid #f87171', padding: '24px 32px',
            fontFamily: BRAND.fontMono,
          }}>
            <div style={{ fontSize: 12, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 8 }}>TOKENS</div>
            <div style={{ fontSize: 72, fontWeight: 800, color: '#f87171', letterSpacing: '-0.04em', lineHeight: 1 }}>
              <Ticker from={200000} to={420000} dur={2.5} fmt={v => Math.round(v/1000) + 'k'} />
            </div>
          </div>
        </Sprite>
        <Sprite start={8.5} end={10.8}>
          <BottomCaption text="More context is not better context." />
        </Sprite>
      </AcademyScene>

      {/* Command — JSON bundle */}
      <AcademyScene start={11} dur={12} num="03">
        <Sprite start={11.2} end={23}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger bundle --task "Fix flaky checkout test" --json', typeFor: 1.5 },
              { at: 2.0, type: 'dim', text: '', gap: 14 },
              { at: 2.2, type: 'out', text: '{', size: 22 },
              { at: 2.5, type: 'out', text: '  "bundle_id": "bnd_42f19ac",', size: 20 },
              { at: 2.9, type: 'out', text: '  "file_count": 5,', size: 20 },
              { at: 3.3, type: 'out', text: '  "total_tokens": 6120,', size: 20 },
              { at: 3.7, type: 'ok',  text: '  "confidence_level": "high",', size: 20 },
              { at: 4.1, type: 'out', text: '  "files": [', size: 20 },
              { at: 4.5, type: 'out', text: '    {', size: 20 },
              { at: 4.8, type: 'out', text: '      "path": "src/checkout/discounts.test.ts",', size: 20 },
              { at: 5.2, type: 'out', text: '      "score": 0.91,', size: 20 },
              { at: 5.6, type: 'out', text: '      "reasons": ["keyword_match", "test_relevant"]', size: 20 },
              { at: 6.0, type: 'out', text: '    }', size: 20 },
              { at: 6.4, type: 'out', text: '  ]', size: 20 },
              { at: 6.8, type: 'out', text: '}', size: 22 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      {/* What it does — two surfaces */}
      <AcademyScene start={23} dur={14} num="03">
        <Eyebrow text="One artifact · two surfaces" top={140} />
        <div style={{ position: 'absolute', top: 220, left: 120, right: 120, display: 'flex', gap: 40 }}>
          <Sprite start={23.4} end={37} keepMounted>
            {(({ localTime: lt }) => (
              <div style={{ flex: 1, opacity: clamp(lt/0.6, 0, 1) }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: BRAND.copper, marginBottom: 18 }}>HUMAN</div>
                <div style={{
                  background: '#1a1f2e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8,
                  padding: '24px 28px', minHeight: 420,
                  fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termInk, lineHeight: 1.8,
                }}>
                  <div style={{ color: BRAND.copper, fontWeight: 700, marginBottom: 14 }}># Active bundle</div>
                  <div style={{ color: BRAND.termDim, marginBottom: 18 }}>Task: Fix flaky checkout test</div>
                  <div style={{ color: BRAND.paper, marginBottom: 10 }}>## Selected files</div>
                  {[
                    ['1.', 'discounts.test.ts', 'keyword_match · test_relevant'],
                    ['2.', 'discounts.ts', 'dependency_match'],
                    ['3.', 'cart.ts', 'same_domain'],
                  ].map(([n, f, r], i) => (
                    <div key={i} style={{ marginBottom: 6, fontSize: 14 }}>
                      <span style={{ color: BRAND.copper }}>{n}</span> <span style={{ color: BRAND.paper }}>{f}</span>
                      <div style={{ paddingLeft: 26, color: BRAND.termDim, fontSize: 13 }}>{r}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim, textAlign: 'center' }}>→ Human review</div>
              </div>
            ))}
          </Sprite>
          <Sprite start={24.2} end={37} keepMounted>
            {(({ localTime: lt }) => (
              <div style={{ flex: 1, opacity: clamp(lt/0.6, 0, 1) }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#4ade80', marginBottom: 18 }}>MACHINE</div>
                <div style={{
                  background: '#1a1f2e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8,
                  padding: '24px 28px', minHeight: 420,
                  fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termInk, lineHeight: 1.7,
                }}>
                  <div style={{ color: '#94a3b8' }}>{`{`}</div>
                  <div style={{ paddingLeft: 16 }}><span style={{ color: '#c4b5fd' }}>"bundle_id"</span><span style={{ color: '#94a3b8' }}>: </span><span style={{ color: '#fbbf24' }}>"bnd_42f19ac"</span>,</div>
                  <div style={{ paddingLeft: 16 }}><span style={{ color: '#c4b5fd' }}>"file_count"</span><span style={{ color: '#94a3b8' }}>: </span><span style={{ color: '#5eead4' }}>5</span>,</div>
                  <div style={{ paddingLeft: 16 }}><span style={{ color: '#c4b5fd' }}>"total_tokens"</span><span style={{ color: '#94a3b8' }}>: </span><span style={{ color: '#5eead4' }}>6120</span>,</div>
                  <div style={{ paddingLeft: 16 }}><span style={{ color: '#c4b5fd' }}>"confidence_level"</span><span style={{ color: '#94a3b8' }}>: </span><span style={{ color: '#fbbf24' }}>"high"</span>,</div>
                  <div style={{ paddingLeft: 16 }}><span style={{ color: '#c4b5fd' }}>"files"</span><span style={{ color: '#94a3b8' }}>: [...]</span></div>
                  <div style={{ color: '#94a3b8' }}>{`}`}</div>
                </div>
                <div style={{ marginTop: 16, fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim, textAlign: 'center' }}>→ CI / MCP / Agents</div>
              </div>
            ))}
          </Sprite>
        </div>
        <Sprite start={34.5} end={36.8}>
          <BottomCaption text="One artifact. Two surfaces. Full traceability." />
        </Sprite>
      </AcademyScene>

      {/* Payoff — bundle ID across three moments */}
      <AcademyScene start={37} dur={13} num="03">
        <Eyebrow text="The bundle ID is the receipt" top={150} />
        <div style={{ position: 'absolute', top: 280, left: 120, right: 120, display: 'flex', gap: 40, alignItems: 'center' }}>
          {['Activation', 'Verification', 'PR comment'].map((step, i) => (
            <React.Fragment key={i}>
              <Sprite start={37.4 + i*0.8} end={50} keepMounted>
                {(({ localTime: lt }) => (
                  <div style={{ flex: 1, textAlign: 'center', opacity: clamp(lt/0.6, 0, 1), transform: `translateY(${(1-clamp(lt/0.6,0,1))*12}px)` }}>
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.18em', color: BRAND.termDim, marginBottom: 14, textTransform: 'uppercase' }}>{step}</div>
                    <div style={{
                      background: 'rgba(184,122,107,0.1)', border: '1px solid rgba(184,122,107,0.5)', borderRadius: 8,
                      padding: '28px 24px',
                      fontFamily: BRAND.fontMono, fontSize: 26, fontWeight: 700, color: BRAND.copper,
                    }}>bnd_42f19ac</div>
                  </div>
                )}}
              </Sprite>
              {i < 2 && (
                <Sprite start={38.2 + i*0.8} end={50} keepMounted>
                  {(({ localTime: lt }) => (
                    <div style={{ fontFamily: BRAND.fontMono, fontSize: 36, color: BRAND.copper, opacity: clamp(lt/0.5, 0, 1) }}>→</div>
                  )}}
                </Sprite>
              )}
            </React.Fragment>
          ))}
        </div>
        <Sprite start={45} end={49.8}>
          <BottomCaption text="Every decision traces back to the bundle that drove it." />
        </Sprite>
      </AcademyScene>

      <EndScene start={50} cmd='codeledger bundle --task "..." --json' />
    </Stage>
  );
}
mountApp(App);
