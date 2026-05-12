// Feature 01 — Repo Scanning — codeledger scan
// 60s. 6 scenes. Series: CodeLedger Academy.

// ── Series chrome ──────────────────────────────────────────
function SeriesBug({ label = 'CodeLedger Academy · Feature 01' }) {
  return (
    <div style={{
      position: 'absolute', top: 56, left: 80,
      display: 'flex', alignItems: 'center', gap: 14,
      fontFamily: BRAND.fontMono, fontWeight: 600,
      color: 'rgba(246,239,225,0.55)',
      fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase',
    }}>
      <div style={{ width: 14, height: 14, background: BRAND.copper, transform: 'rotate(45deg)' }} />
      <span style={{ color: BRAND.copper }}>CL</span>
      <span style={{ color: 'rgba(246,239,225,0.35)' }}>·</span>
      <span>{label}</span>
    </div>
  );
}

function EndChrome() {
  return (
    <div style={{
      position: 'absolute', bottom: 60, right: 80,
      fontFamily: BRAND.fontMono, fontSize: 13,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'rgba(246,239,225,0.4)',
    }}>contextecf.com</div>
  );
}

// ════════════════════════════════════════════════════════════
// SCENE 1 — TITLE (0:00 – 0:03)
// ════════════════════════════════════════════════════════════
function S1({ start = 0 }) {
  const end = start + 3;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug />
        <Sprite start={start + 0.1} end={end}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 24,
          }}>
            <div style={{
              fontFamily: BRAND.fontMono, fontSize: 14,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: BRAND.copper, fontWeight: 600,
            }}>Feature 01</div>
            <div style={{
              fontFamily: BRAND.fontSans, fontWeight: 800,
              fontSize: 128, color: BRAND.paper,
              letterSpacing: '-0.04em', lineHeight: 1,
            }}>Repo Scanning</div>
            <div style={{
              fontFamily: BRAND.fontMono, fontSize: 28,
              color: BRAND.termGo, marginTop: 12,
            }}>$ codeledger scan</div>
          </div>
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════
// SCENE 2 — THE PROBLEM (0:03 – 0:13)
// ════════════════════════════════════════════════════════════
function S2({ start = 3 }) {
  const end = start + 10;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug />

        {/* Agent searching blindly — list of files getting hit */}
        <Sprite start={start + 0.2} end={end}>
          <div style={{
            position: 'absolute', top: 200, left: 120,
            width: 760,
            fontFamily: BRAND.fontMono, fontSize: 16,
            color: 'rgba(216,224,238,0.32)', lineHeight: 1.85,
          }}>
            <div style={{ color: 'rgba(216,224,238,0.55)', marginBottom: 14, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Agent scanning · 1,248 files</div>
            {[
              'src/auth/login.ts',
              'src/payments/handlers/checkout.ts',
              'src/api/middleware/cors.ts',
              'src/billing/invoice-formatter.ts',
              'src/shared/utils/string-helpers.ts',
              'src/feature-flags/index.ts',
              'src/payments/db/transactions.ts',
              'src/shared/core/db-pool.ts',
              'src/auth/token-refresh.ts',
              'src/payments/handlers/refund.ts',
              'src/api/routes/index.ts',
              'src/billing/reports.ts',
              '... 1,236 more',
            ].map((p, i) => (
              <div key={i} style={{ opacity: i > 6 ? 0.5 : 1 }}>{p}</div>
            ))}
          </div>
        </Sprite>

        {/* Pass labels — guessing, wrong files, wrong files again */}
        <Sprite start={start + 1.4} end={start + 3.4}>
          <div style={{
            position: 'absolute', top: 280, right: 180,
            fontFamily: BRAND.fontMono, fontSize: 32, fontWeight: 700,
            color: BRAND.termWarn, letterSpacing: '0.02em',
          }}>guessing<span style={{ opacity: 0.5 }}>...</span></div>
        </Sprite>
        <Sprite start={start + 3.6} end={start + 5.4}>
          <div style={{
            position: 'absolute', top: 380, right: 180,
            fontFamily: BRAND.fontMono, fontSize: 32, fontWeight: 700,
            color: BRAND.termErr,
          }}>wrong files</div>
        </Sprite>
        <Sprite start={start + 5.6} end={start + 7.4}>
          <div style={{
            position: 'absolute', top: 480, right: 180,
            fontFamily: BRAND.fontMono, fontSize: 32, fontWeight: 700,
            color: BRAND.termErr,
          }}>wrong files again</div>
        </Sprite>

        {/* Token counter */}
        <Sprite start={start + 7.0} end={end}>
          <div style={{
            position: 'absolute', top: 620, right: 180,
            background: 'rgba(248,135,112,0.08)',
            border: `1px solid ${BRAND.termErr}`,
            padding: '20px 28px',
            fontFamily: BRAND.fontMono,
          }}>
            <div style={{ color: BRAND.termDim, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10 }}>Tokens wasted</div>
            <div style={{ fontSize: 64, fontWeight: 800, color: BRAND.termErr, letterSpacing: '-0.03em', lineHeight: 1 }}>
              <Ticker from={0} to={118000} dur={1.6} />
            </div>
          </div>
        </Sprite>

        {/* Caption */}
        <Sprite start={start + 7.8} end={end - 0.2}>
          <NarrationBlock
            style={{ bottom: 80 }}
            color={BRAND.paper}
            lines={[
              { text: 'Every session. From scratch.', size: 44, accent: true, weight: 700 },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════
// SCENE 3 — THE COMMAND (0:13 – 0:25)
// ════════════════════════════════════════════════════════════
function S3({ start = 13 }) {
  const end = start + 12;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug />
        <Sprite start={start + 0.2} end={end}>
          <Terminal
            x={160} y={150} width={1600} height={780}
            title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0.0, type: 'cmd', text: 'codeledger scan', typeFor: 0.9 },
              { at: 1.4, type: 'dim', text: '', gap: 14 },
              { at: 1.6, type: 'banner', text: 'CodeLedger scan complete', size: 28, bold: true },
              { at: 2.4, type: 'out', text: '', gap: 12 },
              { at: 2.6, type: 'out', text: 'files indexed: 1,248', size: 24 },
              { at: 3.4, type: 'out', text: 'dependency graph: built', size: 24 },
              { at: 4.2, type: 'out', text: 'test map: built', size: 24 },
              { at: 5.0, type: 'out', text: 'churn index: updated', size: 24 },
              { at: 5.8, type: 'dim', text: '', gap: 14 },
              { at: 6.0, type: 'dim', text: 'Wrote: .codeledger/cache/repo-index.json', size: 22 },
            ]}
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════
// SCENE 4 — WHAT IT DOES (0:25 – 0:40)
// ════════════════════════════════════════════════════════════
function S4({ start = 25 }) {
  const end = start + 15;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug />
        <div style={{
          position: 'absolute', top: 160, left: 0, right: 0,
          textAlign: 'center',
          fontFamily: BRAND.fontMono, fontSize: 14,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: BRAND.copper, fontWeight: 600,
        }}>One deterministic model · three layers</div>

        {/* Three columns: dependency graph / test map / churn index */}
        <div style={{ position: 'absolute', top: 240, left: 80, right: 80, display: 'flex', gap: 30 }}>
          {/* L1 — dependency graph */}
          <Sprite start={start + 0.4} end={end} keepMounted>
            {(({ localTime: lt }) => {
              const op = clamp(lt / 0.6, 0, 1);
              const lineProg = clamp((lt - 0.8) / 2.0, 0, 1);
              return (
                <div style={{
                  flex: 1, opacity: op, transform: `translateY(${(1-op)*16}px)`,
                  background: 'rgba(96,165,250,0.06)',
                  border: '1px solid rgba(96,165,250,0.3)',
                  borderRadius: 10, padding: '28px 24px', height: 500,
                  position: 'relative',
                }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 14 }}>Layer 1</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 26, fontWeight: 700, color: BRAND.paper, marginBottom: 24 }}>Dependency graph</div>
                  <svg viewBox="0 0 400 320" style={{ width: '100%', height: 320 }}>
                    {[
                      [200, 60], [80, 150], [200, 150], [320, 150],
                      [40, 260], [140, 260], [240, 260], [340, 260],
                    ].map(([cx, cy], i) => {
                      const shows = lineProg > i * 0.06;
                      if (!shows) return null;
                      return <circle key={i} cx={cx} cy={cy} r={10} fill="#60a5fa" />;
                    })}
                    {[
                      [200, 60, 80, 150], [200, 60, 200, 150], [200, 60, 320, 150],
                      [80, 150, 40, 260], [80, 150, 140, 260], [200, 150, 240, 260],
                      [320, 150, 340, 260], [320, 150, 240, 260],
                    ].map(([x1, y1, x2, y2], i) => {
                      const lp = clamp(lineProg * 8 - i, 0, 1);
                      return (
                        <line key={i}
                          x1={x1} y1={y1}
                          x2={x1 + (x2-x1)*lp} y2={y1 + (y2-y1)*lp}
                          stroke="#60a5fa" strokeWidth={2} strokeOpacity={0.5} />
                      );
                    })}
                  </svg>
                </div>
              );
            })}
          </Sprite>

          {/* L2 — test map */}
          <Sprite start={start + 1.8} end={end} keepMounted>
            {(({ localTime: lt }) => {
              const op = clamp(lt / 0.6, 0, 1);
              const prog = clamp((lt - 0.8) / 2.0, 0, 1);
              return (
                <div style={{
                  flex: 1, opacity: op, transform: `translateY(${(1-op)*16}px)`,
                  background: 'rgba(74,222,128,0.06)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  borderRadius: 10, padding: '28px 24px', height: 500,
                  position: 'relative',
                }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4ade80', marginBottom: 14 }}>Layer 2</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 26, fontWeight: 700, color: BRAND.paper, marginBottom: 24 }}>Test map</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, lineHeight: 2.4 }}>
                    {[
                      ['discounts.ts', 'discounts.test.ts'],
                      ['cart.ts', 'cart.test.ts'],
                      ['checkout.ts', 'checkout.test.ts'],
                      ['auth.ts', 'auth.test.ts'],
                      ['webhook.ts', 'webhook.test.ts'],
                    ].map(([src, t], i) => {
                      const shows = prog > i * 0.18;
                      if (!shows) return null;
                      return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ color: BRAND.termInk, width: 130 }}>{src}</span>
                          <span style={{ color: '#4ade80', fontSize: 14, letterSpacing: 2 }}>┄┄┄→</span>
                          <span style={{ color: '#4ade80' }}>{t}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Sprite>

          {/* L3 — churn index */}
          <Sprite start={start + 3.2} end={end} keepMounted>
            {(({ localTime: lt }) => {
              const op = clamp(lt / 0.6, 0, 1);
              const prog = clamp((lt - 0.8) / 2.0, 0, 1);
              return (
                <div style={{
                  flex: 1, opacity: op, transform: `translateY(${(1-op)*16}px)`,
                  background: 'rgba(184,122,107,0.06)',
                  border: '1px solid rgba(184,122,107,0.3)',
                  borderRadius: 10, padding: '28px 24px', height: 500,
                }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: BRAND.copper, marginBottom: 14 }}>Layer 3</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 26, fontWeight: 700, color: BRAND.paper, marginBottom: 24 }}>Churn index</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[
                      ['middleware.ts', 92],
                      ['webhook.ts', 78],
                      ['discounts.ts', 61],
                      ['cors.ts', 44],
                      ['db-pool.ts', 28],
                    ].map(([name, pct], i) => {
                      const lp = clamp(prog * 5 - i, 0, 1);
                      return (
                        <div key={i}>
                          <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, color: BRAND.termInk, marginBottom: 4, display: 'flex', justifyContent: 'space-between' }}>
                            <span>{name}</span><span style={{ color: BRAND.copper }}>{Math.round(pct * lp)}</span>
                          </div>
                          <div style={{ height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
                            <div style={{
                              width: `${pct * lp}%`, height: '100%',
                              background: `linear-gradient(90deg, #B87A6B 0%, ${pct > 60 ? '#f87171' : '#fbbf24'} 100%)`,
                            }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Sprite>
        </div>

        {/* Caption */}
        <Sprite start={start + 11.0} end={end - 0.2}>
          <NarrationBlock
            style={{ bottom: 60 }}
            color={BRAND.paper}
            lines={[
              { text: 'One deterministic model. Used by every command.', size: 32, accent: true, weight: 700 },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════
// SCENE 5 — PAYOFF (0:40 – 0:54)
// ════════════════════════════════════════════════════════════
function S5({ start = 40 }) {
  const end = start + 14;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug />
        <div style={{
          position: 'absolute', top: 150, left: 0, right: 0,
          textAlign: 'center',
          fontFamily: BRAND.fontMono, fontSize: 14,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: BRAND.copper, fontWeight: 600,
        }}>Without scan · with scan</div>

        <div style={{ position: 'absolute', top: 240, left: 100, right: 100, display: 'flex', gap: 40 }}>
          {/* Without */}
          <Sprite start={start + 0.4} end={end} keepMounted>
            {(({ localTime: lt }) => {
              const op = clamp(lt / 0.6, 0, 1);
              return (
                <div style={{
                  flex: 1, opacity: op,
                  background: 'rgba(248,113,113,0.06)',
                  border: '1px solid rgba(248,113,113,0.3)',
                  borderTop: '4px solid #f87171',
                  borderRadius: 6, padding: '32px 36px', height: 480,
                }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f87171', fontWeight: 600, marginBottom: 18 }}>Without scan</div>
                  <div style={{
                    fontFamily: BRAND.fontSans, fontSize: 88, fontWeight: 800,
                    color: '#f87171', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8,
                  }}>
                    <Ticker from={0} to={118000} dur={1.2} fmt={v => Math.round(v).toLocaleString()} />
                  </div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termDim, marginBottom: 28 }}>tokens · random files</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termInk, lineHeight: 2 }}>
                    {['util.ts', 'logger.ts', 'config.ts', 'helpers.ts', 'random.ts'].map((f, i) => (
                      <div key={i} style={{ opacity: 0.6, color: '#f87171' }}>· {f}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </Sprite>

          {/* With */}
          <Sprite start={start + 1.4} end={end} keepMounted>
            {(({ localTime: lt }) => {
              const op = clamp(lt / 0.6, 0, 1);
              return (
                <div style={{
                  flex: 1, opacity: op,
                  background: 'rgba(74,222,128,0.06)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  borderTop: '4px solid #4ade80',
                  borderRadius: 6, padding: '32px 36px', height: 480,
                }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4ade80', fontWeight: 600, marginBottom: 18 }}>With scan</div>
                  <div style={{
                    fontFamily: BRAND.fontSans, fontSize: 88, fontWeight: 800,
                    color: '#4ade80', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8,
                  }}>
                    <Ticker from={0} to={7000} dur={1.2} fmt={v => Math.round(v).toLocaleString()} />
                  </div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termDim, marginBottom: 28 }}>tokens · 6 ranked files</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termInk, lineHeight: 2 }}>
                    {['0.94  checkout.ts', '0.91  refund.ts', '0.85  rate-limit.ts', '0.79  cors.ts', '0.74  webhook.ts'].map((f, i) => (
                      <div key={i} style={{ color: '#4ade80' }}>· {f}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </Sprite>
        </div>

        {/* Big stat */}
        <Sprite start={start + 8.0} end={end - 0.2}>
          <div style={{
            position: 'absolute', bottom: 100, left: 0, right: 0,
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: BRAND.fontSans, fontWeight: 800,
              fontSize: 76, color: BRAND.copper,
              letterSpacing: '-0.03em', lineHeight: 1,
            }}>
              <Ticker from={0} to={94} dur={1.2} fmt={v => Math.round(v) + '%'} />
              <span style={{ fontSize: 32, color: BRAND.paper, fontWeight: 500, marginLeft: 14, letterSpacing: '-0.005em' }}>context reduction</span>
            </div>
          </div>
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════
// SCENE 6 — END CARD (0:54 – 0:60)
// ════════════════════════════════════════════════════════════
function S6({ start = 54 }) {
  const end = start + 6;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#0a0d18" dark>
        <SeriesBug />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 36,
        }}>
          <Sprite start={start + 0.2} end={end} keepMounted>
            {(({ localTime: lt }) => {
              const txt = typedText('codeledger scan', 0, 1.0, lt);
              return (
                <div style={{
                  fontFamily: BRAND.fontMono, fontSize: 72, color: BRAND.termInk,
                }}>
                  <span style={{ color: BRAND.copper, fontWeight: 600 }}>$ </span>
                  {txt}
                  <span style={{
                    display: 'inline-block', width: 18, height: 60,
                    background: BRAND.termInk, marginLeft: 8,
                    transform: 'translateY(8px)',
                    opacity: Math.floor(lt * 2) % 2 === 0 ? 1 : 0.15,
                  }} />
                </div>
              );
            })}
          </Sprite>
          <Sprite start={start + 1.8} end={end}>
            <div style={{
              fontFamily: BRAND.fontMono, fontSize: 16,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'rgba(246,239,225,0.5)',
              fontWeight: 600, marginTop: 18,
            }}>CodeLedger Academy · contextecf.com</div>
          </Sprite>
        </div>

        {/* Final fade */}
        <Sprite start={end - 0.8} end={end} keepMounted>
          {(({ progress }) => (
            <div style={{
              position: 'absolute', inset: 0,
              background: '#000', opacity: progress, pointerEvents: 'none',
            }} />
          ))}
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

function App() {
  return (
    <Stage width={1920} height={1080} duration={60}
      background="#0a0d18" fps={60} loop={false} autoplay={true}
      persistKey="cl-academy-f01">
      <S1 start={0} />
      <S2 start={3} />
      <S3 start={13} />
      <S4 start={25} />
      <S5 start={40} />
      <S6 start={54} />
    </Stage>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
