// Scenes 5–8 of the CodeLedger launch video.

// ════════════════════════════════════════════════════════════════════════════
// SCENE 5 — THE PR (1:22 – 1:40)
// ════════════════════════════════════════════════════════════════════════════
function Scene5({ start = 82 }) {
  const end = start + 18;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#f3f3f5">
        {/* GitHub-style PR chrome */}
        <Sprite start={start + 0.1} end={end}>
          <div style={{
            position: 'absolute', top: 80, left: 100, right: 100,
            background: '#fff',
            border: '1px solid #d0d7de',
            borderRadius: 8,
            padding: '20px 28px',
            fontFamily: '-apple-system, "Segoe UI", system-ui, sans-serif',
            color: '#1f2328',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'nowrap' }}>
              <span style={{ background: '#1f883d', color: '#fff', padding: '4px 12px', borderRadius: 20, fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0, whiteSpace: 'nowrap' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.75 4.75a.75.75 0 0 0-1.5 0v3.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-1.75v-2.75z"/></svg>
                Open
              </span>
              <span style={{ fontSize: 26, fontWeight: 400, color: '#1f2328', whiteSpace: 'nowrap' }}>
                Add rate limiting to checkout flow
                <span style={{ color: '#59636e', fontWeight: 300, marginLeft: 8 }}>#4421</span>
              </span>
            </div>
            <div style={{ fontSize: 14, color: '#59636e' }}>
              <b style={{ color: '#1f2328' }}>nina-kim</b> wants to merge 1 commit into <code style={{ background: '#eaeef2', padding: '2px 6px', borderRadius: 4 }}>main</code> from <code style={{ background: '#eaeef2', padding: '2px 6px', borderRadius: 4 }}>nina/rate-limit</code>
            </div>
          </div>
        </Sprite>

        {/* CodeLedger PR comment — main feature */}
        <Sprite start={start + 1.4} end={end}>
          <div style={{
            position: 'absolute', top: 240, left: 220, right: 220,
            background: '#fff',
            border: '1px solid #d0d7de',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
            fontFamily: '-apple-system, "Segoe UI", system-ui, sans-serif',
          }}>
            {/* Comment header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 22px',
              background: '#f6f8fa', borderBottom: '1px solid #d0d7de',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 18,
                background: BRAND.navy,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 12, height: 12, background: BRAND.copper, transform: 'rotate(45deg)' }} />
              </div>
              <div style={{ fontSize: 15, color: '#1f2328' }}>
                <b>codeledger-bot</b> commented just now
              </div>
              <span style={{
                marginLeft: 8, background: '#dafbe1', color: '#1f883d',
                padding: '2px 8px', borderRadius: 12, fontSize: 12, fontWeight: 600,
                border: '1px solid rgba(31,136,61,0.3)',
              }}>BOT</span>
            </div>

            {/* Comment body */}
            <div style={{ padding: '24px 28px' }}>
              <div style={{
                fontFamily: BRAND.fontSans, fontWeight: 800,
                fontSize: 28, color: BRAND.navy, letterSpacing: '-0.012em',
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
                whiteSpace: 'nowrap',
              }}>
                <span style={{ fontSize: 28 }}>🛡️</span>
                <span style={{ whiteSpace: 'nowrap' }}>CodeLedger Review</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: 12, columnGap: 24, fontFamily: BRAND.fontMono, fontSize: 18, marginBottom: 24 }}>
                <div style={{ color: '#59636e' }}>Risk:</div>
                <div><StatusPill label="Medium" color={BRAND.ochre} bg="#fbedd6" size={13} /></div>
                <div style={{ color: '#59636e' }}>Drift:</div>
                <div><StatusPill label="None" color={BRAND.green} bg={BRAND.greenSoft} size={13} /></div>
                <div style={{ color: '#59636e' }}>Evidence Gaps:</div>
                <div><StatusPill label="Detected" color={BRAND.brick} bg="#f6e1dc" size={13} /></div>
                <div style={{ color: '#59636e' }}>Reviewer time saved:</div>
                <div><StatusPill label="~42 min" color={BRAND.green} bg={BRAND.greenSoft} size={13} /></div>
              </div>

              <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#59636e', marginBottom: 14 }}>
                Suggested focus
              </div>
              <ul style={{ fontFamily: BRAND.fontSerif, fontSize: 22, lineHeight: 1.5, color: '#1f2328', paddingLeft: 24, marginBottom: 8 }}>
                <li style={{ marginBottom: 10 }}>
                  No test coverage for the failure branch in <code style={{ background: '#fff8c5', padding: '2px 6px', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 19 }}>token-refresh.ts</code>
                </li>
                <li>
                  Auth middleware change touches <b>3 shared services</b> — owner review recommended
                </li>
              </ul>
            </div>
          </div>
        </Sprite>

        {/* Narration — three signals + reviewer time saved */}
        <Sprite start={start + 11.2} end={start + 14.6}>
          <NarrationBlock
            style={{ bottom: 60 }}
            color={BRAND.ink}
            lines={[
              { text: 'Four signals. Every pull request. Every time.', size: 40, accent: true },
              { text: 'Risk. Drift. Evidence gaps. Reviewer time saved.', size: 28 },
            ]}
            align="center"
          />
        </Sprite>

        <Sprite start={start + 14.8} end={end - 0.2}>
          <NarrationBlock
            style={{ bottom: 60 }}
            color={BRAND.ink}
            lines={[
              { text: 'The signal is where engineers already look.', size: 36, accent: true },
              { text: 'No new portal. No new meeting. No new tool to learn.', size: 26 },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SCENE 6 — THE MERGE (1:40 – 1:52)
// ════════════════════════════════════════════════════════════════════════════
function Scene6({ start = 100 }) {
  const end = start + 12;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background={BRAND.paper}>
        <CornerMark sub="Session Summary" />

        {/* Big summary card centered */}
        <Sprite start={start + 0.3} end={end}>
          <Card x={260} y={210} width={1400} height={720} accent={BRAND.green} paper="#fff" style={{ padding: '48px 64px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28,
            }}>
              <StatusPill label="Merged" color={BRAND.green} bg={BRAND.greenSoft} size={14} />
              <div style={{
                fontFamily: BRAND.fontMono, fontSize: 13,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: BRAND.green, fontWeight: 600,
              }}>Session Complete · #4421</div>
              <div style={{ flex: 1 }} />
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: BRAND.inkSoft, letterSpacing: '0.16em' }}>14m 22s · 6 commits</div>
            </div>

            <div style={{
              fontFamily: BRAND.fontSans, fontSize: 44, fontWeight: 800,
              color: BRAND.navy, letterSpacing: '-0.022em',
              marginBottom: 36, lineHeight: 1.05,
            }}>
              Session Summary
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 64px' }}>
              {[
                { label: 'Bundle recall', val: 84, suffix: '%', color: BRAND.green, dur: 1.4, delay: 1.0 },
                { label: 'Precision',     val: 91, suffix: '%', color: BRAND.green, dur: 1.4, delay: 1.6 },
                { label: 'Token savings', val: 94000, suffix: ' tokens', color: BRAND.copper, dur: 1.8, delay: 2.2, fmt: (v) => '~' + Math.round(v).toLocaleString() },
                { label: 'Estimated $',   val: 1.14, suffix: ' this session', color: BRAND.ochre, dur: 1.4, delay: 2.8, fmt: (v) => '$' + v.toFixed(2) },
              ].map((m, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: BRAND.fontMono, fontSize: 13,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: BRAND.inkSoft, marginBottom: 10,
                  }}>{m.label}</div>
                  <div style={{
                    fontFamily: BRAND.fontSans, fontSize: 58, fontWeight: 800,
                    color: m.color, letterSpacing: '-0.025em', lineHeight: 1,
                    display: 'flex', alignItems: 'baseline', gap: 4,
                  }}>
                    <Sprite start={start + m.delay} end={end} keepMounted>
                      <Ticker
                        from={0} to={m.val}
                        start={0} dur={m.dur}
                        fmt={m.fmt || ((v) => Math.round(v).toString())}
                      />
                    </Sprite>
                    <span style={{ fontSize: 22, fontWeight: 500, color: BRAND.inkSoft, marginLeft: 6 }}>{m.suffix}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* v0.10.19 — Outcome Confidence strip */}
            <Sprite start={start + 3.4} end={end} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt / 0.6, 0, 1);
                return (
                  <div style={{
                    marginTop: 36, padding: '20px 28px',
                    background: 'rgba(11,110,79,0.08)',
                    borderLeft: `4px solid ${BRAND.green}`,
                    opacity: op, transform: `translateY(${(1-op)*8}px)`,
                    fontFamily: BRAND.fontMono, fontSize: 18,
                    color: BRAND.ink,
                    display: 'flex', alignItems: 'baseline', gap: 22, flexWrap: 'wrap',
                  }}>
                    <span style={{ color: BRAND.green, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 13 }}>Outcome confidence</span>
                    <span style={{ fontSize: 24, fontWeight: 700, color: BRAND.navy }}>87% recall</span>
                    <span style={{ color: BRAND.inkSoft }}>signal stability: 3 activations · avg ISC 0.82</span>
                  </div>
                );
              })}
            </Sprite>
          </Card>
        </Sprite>

        {/* Narration */}
        <Sprite start={start + 6.4} end={end - 0.2}>
          <NarrationBlock
            style={{ bottom: 60 }}
            color={BRAND.ink}
            lines={[
              { text: 'A number you can point to.', size: 40, accent: true },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SCENE 7 — THE DASHBOARD (1:52 – 2:22)
// ════════════════════════════════════════════════════════════════════════════
function Scene7({ start = 112 }) {
  const end = start + 30;

  // 8-week recall trend points (rising)
  const trend = [62, 65, 64, 70, 73, 76, 78, 80];

  return (
    <Sprite start={start} end={end}>
      <SceneFrame background={BRAND.paper}>
        <CornerMark sub="Engineering Intelligence Dashboard" />

        {/* Top eyebrow */}
        <Sprite start={start + 0.2} end={end}>
          <div style={{
            position: 'absolute', top: 168, left: 80,
            fontFamily: BRAND.fontMono, fontSize: 14,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: BRAND.copper, fontWeight: 600,
          }}>Engineering Intelligence Dashboard · Week of May 11</div>
          <div style={{
            position: 'absolute', top: 200, left: 80,
            fontFamily: BRAND.fontSans, fontSize: 58, fontWeight: 800,
            color: BRAND.navy, letterSpacing: '-0.025em',
            lineHeight: 1.05,
          }}>What AI has actually saved.</div>
        </Sprite>

        {/* Recall trend chart */}
        <Sprite start={start + 1.0} end={end}>
          <div style={{
            position: 'absolute', top: 320, left: 80,
            width: 1080, height: 320,
            background: '#fff',
            border: `1px solid ${BRAND.rule}`,
            borderRadius: 6,
            padding: '26px 32px',
            boxShadow: '0 12px 30px rgba(28,34,48,0.05)',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              marginBottom: 14,
            }}>
              <div>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: BRAND.inkSoft, marginBottom: 6 }}>Bundle Recall — 8-Week Trend</div>
                <div style={{ fontFamily: BRAND.fontSans, fontSize: 28, fontWeight: 700, color: BRAND.navy }}>62% → <span style={{ color: BRAND.green }}>80%</span></div>
              </div>
              <StatusPill label="↑ 18 pts" color={BRAND.green} bg={BRAND.greenSoft} size={12} />
            </div>

            {/* SVG line chart */}
            <svg viewBox="0 0 1020 200" style={{ width: '100%', height: 200 }}>
              {/* Grid lines */}
              {[0, 50, 100, 150].map(y => (
                <line key={y} x1={40} x2={1020} y1={y + 10} y2={y + 10} stroke={BRAND.rule} strokeWidth={1} strokeDasharray="2 4" />
              ))}
              {/* Y axis labels */}
              {[[0, '90%'], [50, '75%'], [100, '60%'], [150, '45%']].map(([y, label]) => (
                <text key={y} x={6} y={y + 14} fontSize={11} fill={BRAND.inkSoft} fontFamily={BRAND.fontMono}>{label}</text>
              ))}
              {/* Path — render with progress */}
              <Sprite start={start + 1.4} end={end} keepMounted>
                {(({ localTime: lt }) => {
                  const prog = clamp(lt / 1.6, 0, 1);
                  const pts = trend.map((v, i) => {
                    const x = 50 + (i / (trend.length - 1)) * 950;
                    const y = 160 - ((v - 45) / 45) * 150;
                    return [x, y];
                  });
                  const drawn = Math.ceil(pts.length * prog);
                  const visible = pts.slice(0, drawn);
                  if (visible.length < 2) return null;
                  const d = 'M' + visible.map(p => p.join(',')).join(' L');
                  const area = d + ` L${visible[visible.length-1][0]},170 L${visible[0][0]},170 Z`;
                  return (
                    <>
                      <path d={area} fill="rgba(11,110,79,0.10)" />
                      <path d={d} stroke={BRAND.green} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      {visible.map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r={5} fill={BRAND.paper} stroke={BRAND.green} strokeWidth={2.5} />
                      ))}
                    </>
                  );
                })}
              </Sprite>
            </svg>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: BRAND.fontMono, fontSize: 11, color: BRAND.inkSoft,
              marginTop: 6, paddingLeft: 40,
            }}>
              {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'].map(w => <span key={w}>{w}</span>)}
            </div>
          </div>
        </Sprite>

        {/* Agent scorecard */}
        <Sprite start={start + 4.0} end={end}>
          <div style={{
            position: 'absolute', top: 320, left: 1200,
            width: 640, height: 320,
            background: '#fff',
            border: `1px solid ${BRAND.rule}`,
            borderRadius: 6,
            padding: '26px 30px',
            boxShadow: '0 12px 30px rgba(28,34,48,0.05)',
          }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: BRAND.inkSoft, marginBottom: 18 }}>Agent Scorecard</div>
            {[
              { name: 'Claude Code',  pass: 91, destab: 'Low',    color: BRAND.green, delay: 4.4 },
              { name: 'Cursor',       pass: 84, destab: 'Medium', color: BRAND.ochre, delay: 4.9 },
              { name: 'Codex',        pass: 77, destab: 'Medium', color: BRAND.ochre, delay: 5.4 },
            ].map((a, i) => (
              <Sprite key={i} start={start + a.delay} end={end} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt / 0.4, 0, 1);
                  return (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      padding: '14px 0',
                      borderBottom: i < 2 ? `1px solid ${BRAND.rule}` : 'none',
                      opacity: op, transform: `translateY(${(1-op)*8}px)`,
                    }}>
                      <div style={{ width: 160, fontFamily: BRAND.fontSans, fontWeight: 700, fontSize: 20, color: BRAND.ink }}>{a.name}</div>
                      <div style={{ width: 140, fontFamily: BRAND.fontMono, fontSize: 20, fontWeight: 700, color: BRAND.navy }}>{a.pass}%<span style={{ fontSize: 12, color: BRAND.inkSoft, fontWeight: 500, marginLeft: 6 }}>first-pass</span></div>
                      <StatusPill label={a.destab} color={a.color} bg={a.color === BRAND.green ? BRAND.greenSoft : '#fbedd6'} size={11} />
                    </div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </Sprite>

        {/* Hours saved + Rework Rate strip */}
        <Sprite start={start + 6.0} end={end}>
          <div style={{
            position: 'absolute', top: 680, left: 80,
            width: 1760, height: 200,
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            gap: 24,
          }}>
            {[
              { label: 'Hours Saved · This Sprint', val: 18.4, color: BRAND.green, fmt: v => v.toFixed(1) + 'h', delay: 6.4 },
              { label: 'Rework Rate · vs. pre-adoption', val: -13, color: BRAND.green, fmt: v => Math.round(v) + '%', delay: 6.9, prefix: '↓ ' },
              { label: 'Tokens Saved · This Sprint', val: 2400000, color: BRAND.copper, fmt: v => (v/1e6).toFixed(1) + 'M', delay: 7.4 },
            ].map((m, i) => (
              <div key={i} style={{
                background: '#fff',
                border: `1px solid ${BRAND.rule}`,
                borderTop: `4px solid ${m.color}`,
                borderRadius: 6,
                padding: '26px 30px',
              }}>
                <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: BRAND.inkSoft, marginBottom: 10 }}>{m.label}</div>
                <div style={{
                  fontFamily: BRAND.fontSans, fontSize: 64, fontWeight: 800,
                  color: m.color, letterSpacing: '-0.028em', lineHeight: 1,
                }}>
                  {m.prefix || ''}
                  <Sprite start={start + m.delay} end={end} keepMounted>
                    <Ticker from={0} to={Math.abs(m.val)} start={0} dur={1.6} fmt={m.fmt} />
                  </Sprite>
                </div>
              </div>
            ))}
          </div>
        </Sprite>

        {/* Narration progressing through the scene */}
        <Sprite start={start + 12.5} end={start + 16.0}>
          {(({ localTime: lt, duration: d }) => {
            const op = clamp(Math.min(lt / 0.5, (d - lt) / 0.5), 0, 1);
            return (
              <div style={{
                position: 'absolute', inset: 0,
                background: `rgba(246,239,225,${0.92 * op})`,
                backdropFilter: 'blur(2px)',
                pointerEvents: 'none',
              }} />
            );
          })}
          <HeroCaption
            eyebrow="It is not a usage chart."
            title={<>It is <em style={{ color: BRAND.copper, fontStyle: 'normal' }}>evidence</em>.</>}
            color={BRAND.navy}
          />
        </Sprite>

        <Sprite start={start + 16.4} end={start + 21.0}>
          <NarrationBlock
            style={{ bottom: 60 }}
            color={BRAND.ink}
            lines={[
              { text: 'Which agents are producing stable code.', size: 32 },
              { text: 'Where architectural drift is growing.', size: 32 },
            ]}
            align="center"
          />
        </Sprite>

        <Sprite start={start + 21.2} end={start + 25.4}>
          <NarrationBlock
            style={{ bottom: 60 }}
            color={BRAND.ink}
            lines={[
              { text: 'Your board asks: is AI making us better?', size: 36 },
              { text: 'Now you have an answer.', size: 32, accent: true },
            ]}
            align="center"
          />
        </Sprite>

        <Sprite start={start + 25.6} end={end - 0.2}>
          <NarrationBlock
            style={{ bottom: 60 }}
            color={BRAND.ink}
            lines={[
              { text: 'Not a feeling.  A proof.', size: 44, accent: true, weight: 700 },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SCENE 8 — THE CLOSE (2:22 – 2:45)
// ════════════════════════════════════════════════════════════════════════════
function Scene8({ start = 142 }) {
  const end = start + 23;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background={BRAND.navyDeep} dark>
        {/* Beat 1: principles list */}
        <Sprite start={start + 0.2} end={start + 8.5}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 18,
          }}>
            {[
              { text: 'No cloud account.',           delay: 0.0 },
              { text: 'No training pipeline.',       delay: 0.7 },
              { text: 'No LLM in the scoring path.', delay: 1.4 },
              { text: 'Nothing leaves your machine \u2014 unless you choose.', delay: 2.6, accent: true },
            ].map((row, i) => (
              <Sprite key={i} start={start + 0.2 + row.delay} end={start + 8.5} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt / 0.6, 0, 1);
                  return (
                    <div style={{
                      fontFamily: BRAND.fontSans,
                      fontWeight: row.accent ? 800 : 600,
                      fontSize: row.accent ? 56 : 42,
                      color: row.accent ? BRAND.copper : BRAND.paper,
                      letterSpacing: '-0.022em',
                      opacity: op, transform: `translateY(${(1-op)*8}px)`,
                      textWrap: 'balance',
                    }}>
                      {row.text}
                    </div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </Sprite>

        {/* Beat 2: short truth triple */}
        <Sprite start={start + 9.0} end={start + 13.0}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 24,
          }}>
            {[
              'The math is in the source.',
              'The tests run.',
              'The memory compounds.',
            ].map((t, i) => (
              <Sprite key={i} start={start + 9.0 + i * 0.5} end={start + 13.0} keepMounted>
                {(({ localTime: lt }) => {
                  const op = clamp(lt / 0.5, 0, 1);
                  return (
                    <div style={{
                      fontFamily: BRAND.fontSerif, fontStyle: 'italic',
                      fontSize: 38, color: BRAND.paper,
                      letterSpacing: '0.003em',
                      opacity: op, transform: `translateY(${(1-op)*10}px)`,
                    }}>{t}</div>
                  );
                })}
              </Sprite>
            ))}
          </div>
        </Sprite>

        {/* Beat 3: logo reveal + tagline */}
        <Sprite start={start + 13.5} end={start + 20.0}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 22,
              marginBottom: 30,
            }}>
              <div style={{
                width: 42, height: 42, background: BRAND.copper,
                transform: 'rotate(45deg)',
              }} />
              <div style={{
                fontFamily: BRAND.fontSans, fontWeight: 800,
                fontSize: 64, color: BRAND.paper,
                letterSpacing: '-0.025em',
              }}>Context<span style={{ color: BRAND.copper }}>ECF</span> · CodeLedger</div>
            </div>
            <div style={{
              fontFamily: BRAND.fontMono, fontSize: 16,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'rgba(246,239,225,0.55)', marginBottom: 40,
            }}>v0.10.19</div>
            <Sprite start={start + 15.0} end={start + 20.0} keepMounted>
              {(({ localTime: lt }) => {
                const op = clamp(lt / 0.6, 0, 1);
                return (
                  <div style={{
                    fontFamily: BRAND.fontSans, fontWeight: 900,
                    fontSize: 72, color: BRAND.copper,
                    letterSpacing: '-0.025em',
                    opacity: op, transform: `translateY(${(1-op)*10}px)`,
                    textAlign: 'center',
                  }}>
                    The right context.<br/>Every time.
                  </div>
                );
              })}
            </Sprite>
          </div>
        </Sprite>

        {/* Beat 4: codeledger init typed in */}
        <Sprite start={start + 20.2} end={end}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: BRAND.fontMono, fontSize: 56,
            color: BRAND.termInk,
          }}>
            <Sprite start={start + 20.2} end={end} keepMounted>
              {(({ localTime: lt }) => {
                const txt = typedText('codeledger init', 0, 1.2, lt);
                return (
                  <span>
                    <span style={{ color: BRAND.copper, fontWeight: 600 }}>$ </span>
                    {txt}
                    <span style={{
                      display: 'inline-block', width: 18, height: 50,
                      background: BRAND.termInk, marginLeft: 8,
                      transform: 'translateY(8px)',
                      opacity: Math.floor(lt * 2) % 2 === 0 ? 1 : 0.15,
                    }} />
                  </span>
                );
              })}
            </Sprite>
          </div>
        </Sprite>

        {/* Final fade-to-black overlay */}
        <Sprite start={end - 1.0} end={end} keepMounted>
          {(({ progress }) => (
            <div style={{
              position: 'absolute', inset: 0,
              background: '#000',
              opacity: progress,
              pointerEvents: 'none',
            }} />
          ))}
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

Object.assign(window, { Scene5, Scene6, Scene7, Scene8 });
