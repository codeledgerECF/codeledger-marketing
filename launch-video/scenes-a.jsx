// Scenes 1–4 of the CodeLedger launch video.
// Each scene receives `start` (absolute timeline seconds). Internally it wraps
// content in <Sprite> blocks with absolute start/end relative to the timeline,
// so beats can be authored against the same clock.

// ════════════════════════════════════════════════════════════════════════════
// SCENE 1 — THE WEIGHT OF IT (0:00 – 0:28)
// ════════════════════════════════════════════════════════════════════════════
function Scene1({ start = 0 }) {
  const end = start + 28;
  // Background: floating PR file list + token counter, low opacity
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background={BRAND.navyDeep} dark>
        {/* Atmosphere — soft moving glow */}
        <Drift amount={20} dur={18}>
          <div style={{
            position: 'absolute',
            top: '15%', left: '60%', width: 700, height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184,122,107,0.18) 0%, transparent 60%)',
            filter: 'blur(20px)',
          }} />
        </Drift>
        <Drift amount={30} dur={22}>
          <div style={{
            position: 'absolute',
            top: '40%', left: '10%', width: 500, height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(11,110,79,0.10) 0%, transparent 60%)',
            filter: 'blur(20px)',
          }} />
        </Drift>

        {/* Background PR/diff list — ghostly */}
        <Sprite start={start + 1} end={start + 18}>
          <div style={{
            position: 'absolute', top: 140, left: 80,
            width: 880,
            fontFamily: BRAND.fontMono, fontSize: 18,
            color: 'rgba(216,224,238,0.35)',
            lineHeight: 1.85,
          }}>
            <div style={{ color: 'rgba(216,224,238,0.55)', marginBottom: 14, letterSpacing: '0.12em', fontSize: 13, textTransform: 'uppercase' }}>PR #4421 · refactor auth flow · +428 −309</div>
            {[
              ['M', 'src/auth/login.ts', '+12 −4'],
              ['M', 'src/payments/handlers/checkout.ts', '+44 −22'],
              ['M', 'src/shared/utils/string-helpers.ts', '+8 −0'],
              ['M', 'src/api/middleware/cors.ts', '+18 −12'],
              ['M', 'src/payments/handlers/refund.ts', '+62 −38'],
              ['M', 'src/shared/core/middleware.ts', '+24 −8'],
              ['M', 'src/billing/invoice-formatter.ts', '+90 −44'],
              ['M', 'src/auth/token-refresh.ts', '+18 −2'],
              ['M', 'src/shared/core/db-pool.ts', '+12 −6'],
              ['M', 'src/feature-flags/index.ts', '+38 −18'],
            ].map(([mod, path, delta], i) => (
              <div key={i} style={{ display: 'flex', gap: 18, opacity: i > 4 ? 0.4 : 1 }}>
                <span style={{ color: BRAND.termWarn, width: 18 }}>{mod}</span>
                <span style={{ flex: 1 }}>{path}</span>
                <span style={{ color: 'rgba(216,224,238,0.4)' }}>{delta}</span>
              </div>
            ))}
          </div>
        </Sprite>

        {/* Token counter — appears mid-scene, ticks chaotically */}
        <Sprite start={start + 13} end={start + 22}>
          <div style={{
            position: 'absolute', top: 200, right: 100,
            background: 'rgba(10,15,28,0.7)',
            border: '1px solid rgba(184,122,107,0.3)',
            padding: '24px 32px',
            fontFamily: BRAND.fontMono,
            color: BRAND.termInk,
          }}>
            <div style={{ color: BRAND.copper, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12 }}>Session tokens</div>
            <Sprite start={start + 13} end={start + 16}>
              <div style={{ fontSize: 56, fontWeight: 700, color: BRAND.termWarn }}>
                <Ticker from={48000} to={112000} dur={2.2} />
              </div>
              <div style={{ fontSize: 14, color: BRAND.termDim, marginTop: 4 }}>request 1 · auth refactor</div>
            </Sprite>
            <Sprite start={start + 16} end={start + 19}>
              <div style={{ fontSize: 56, fontWeight: 700, color: BRAND.termWarn }}>
                <Ticker from={112000} to={98000} dur={2.0} />
              </div>
              <div style={{ fontSize: 14, color: BRAND.termDim, marginTop: 4 }}>request 2 · retry</div>
            </Sprite>
            <Sprite start={start + 19} end={start + 22}>
              <div style={{ fontSize: 56, fontWeight: 700, color: BRAND.termErr }}>
                <Ticker from={98000} to={134000} dur={2.0} />
              </div>
              <div style={{ fontSize: 14, color: BRAND.termDim, marginTop: 4 }}>request 3 · still wrong</div>
            </Sprite>
          </div>
        </Sprite>

        {/* Narration beats */}
        <Sprite start={start + 0.3} end={start + 4.8}>
          <NarrationBlock lines={[
            { text: 'You believed the promise.', size: 44, accent: true },
            { text: 'You rolled out the AI coding agents.', size: 36 },
            { text: 'Claude Code. Cursor. Codex.', size: 36 },
          ]} />
        </Sprite>

        <Sprite start={start + 5.0} end={start + 7.5}>
          <NarrationBlock lines={[
            { text: 'And for a while, it felt like the future.', size: 44 },
          ]} />
        </Sprite>

        <Sprite start={start + 7.7} end={start + 12.2}>
          <NarrationBlock lines={[
            { text: 'Then the PRs started coming back wrong.', size: 44, accent: true },
            { text: 'Files touched that shouldn\u2019t have been.', size: 32 },
          ]} />
        </Sprite>

        <Sprite start={start + 12.4} end={start + 15.8}>
          <NarrationBlock lines={[
            { text: 'Shared helpers bypassed.', size: 36 },
            { text: 'Things rebuilt that already existed.', size: 36 },
          ]} />
        </Sprite>

        <Sprite start={start + 16.0} end={start + 19.8}>
          <NarrationBlock lines={[
            { text: 'And the bill kept growing.', size: 36 },
            { text: 'Not because your agents were slow \u2014 because they were guessing.', size: 28 },
          ]} />
        </Sprite>

        <Sprite start={start + 20.0} end={start + 23.2}>
          <NarrationBlock lines={[
            { text: 'Loading every file they could find,', size: 32 },
            { text: 'hoping the right ones were in there somewhere.', size: 32 },
          ]} />
        </Sprite>

        <Sprite start={start + 23.4} end={start + 28.0}>
          <NarrationBlock lines={[
            { text: 'You\u2019re not anti-AI.', size: 40, accent: true },
            { text: 'You just want to know if AI is making things better.', size: 32 },
            { text: 'And right now, you have no way to prove it.', size: 32 },
          ]} />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SCENE 2 — THE SHIFT (0:28 – 0:42)
// ════════════════════════════════════════════════════════════════════════════
function Scene2({ start = 28 }) {
  const end = start + 14;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background="#05070d" dark>
        {/* Pre-text — quiet beat */}
        <Sprite start={start + 0.1} end={start + 1.5}>
          <div style={{
            position: 'absolute', left: 120, top: 480,
            fontFamily: BRAND.fontMono,
            color: BRAND.termDim, fontSize: 24,
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <span style={{ color: BRAND.copper, fontWeight: 600 }}>$</span>
            <span style={{
              display: 'inline-block', width: 14, height: 28,
              background: BRAND.termInk,
              animation: 'blink 1s steps(2) infinite',
              opacity: 0.7,
            }} />
          </div>
        </Sprite>

        {/* Terminal — command types out, scan begins */}
        <Sprite start={start + 1.5} end={end}>
          <Terminal
            x={120} y={140} width={1680} height={800}
            title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0.0, type: 'cmd', text: 'codeledger init', typeFor: 0.9 },
              { at: 1.2, type: 'dim', text: '> scanning repository...', gap: 14 },
              { at: 2.0, type: 'out', text: '\u2713 indexed 2,847 files in 1.8s', size: 20 },
              { at: 2.5, type: 'out', text: '\u2713 dependency graph: 18,402 edges', size: 20 },
              { at: 3.0, type: 'out', text: '\u2713 ownership map: 14 teams', size: 20 },
              { at: 3.6, type: 'dim', text: '', gap: 14 },
              { at: 3.6, type: 'banner', text: 'Context bundle ready', size: 26, bold: true, gap: 18 },
            ]}
          />
        </Sprite>

        {/* Ranked file scan list inside terminal area */}
        <Sprite start={start + 7.0} end={end}>
          <FileScanList
            x={170} y={510}
            start={0} perItem={0.05}
            files={[
              { score: '0.94', path: 'src/payments/handlers/checkout.ts' },
              { score: '0.91', path: 'src/payments/handlers/refund.ts' },
              { score: '0.88', path: 'src/payments/types.ts' },
              { score: '0.85', path: 'src/shared/rate-limit-helper.ts' },
              { score: '0.82', path: 'src/auth/token-refresh.ts' },
              { score: '0.79', path: 'src/api/middleware/cors.ts' },
              { score: '0.76', path: 'src/payments/db/transactions.ts' },
              { score: '0.71', path: 'src/billing/invoice-formatter.ts' },
              { score: '0.68', path: 'src/payments/tests/checkout.test.ts' },
              { score: '\u2026', path: '\u2026 12 more', dim: true },
            ]}
          />
        </Sprite>

        {/* Summary banner */}
        <Sprite start={start + 9.0} end={end}>
          <div style={{
            position: 'absolute', left: 170, top: 820,
            background: 'rgba(11,110,79,0.18)',
            border: `1px solid ${BRAND.green}`,
            padding: '14px 22px',
            fontFamily: BRAND.fontMono,
            color: BRAND.termGo,
            fontSize: 22, fontWeight: 600,
            letterSpacing: '0.04em',
          }}>
            Context ready: <span style={{ color: BRAND.paper }}>22 files</span> / <span style={{ color: BRAND.paper }}>6,800 tokens</span> / confidence: <span style={{ color: BRAND.paper, fontWeight: 700 }}>HIGH</span>
          </div>
        </Sprite>

        {/* Narration */}
        <Sprite start={start + 10.4} end={end - 0.4}>
          <NarrationBlock
            style={{ bottom: 80 }}
            lines={[
              { text: 'The right files.  Not a guess.', size: 36, accent: true },
              { text: 'A deterministic score. Math in the source.', size: 28 },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SCENE 3 — THE DISCOVERY GATE (0:42 – 1:02)
// ════════════════════════════════════════════════════════════════════════════
function Scene3({ start = 42 }) {
  const end = start + 20;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background={BRAND.paper}>
        <CornerMark sub="Discovery Gate" />

        {/* Developer prompt */}
        <Sprite start={start + 0.2} end={start + 7.5}>
          <div style={{
            position: 'absolute', left: 120, top: 200,
            width: 880,
            background: '#fff',
            border: `1px solid ${BRAND.rule}`,
            borderRadius: 4,
            padding: 28,
            fontFamily: BRAND.fontSans,
            boxShadow: '0 12px 30px rgba(28,34,48,0.08)',
          }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, color: BRAND.inkSoft, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Developer · prompt
            </div>
            <div style={{
              fontFamily: BRAND.fontSerif, fontSize: 30, lineHeight: 1.4,
              color: BRAND.ink, fontStyle: 'italic',
            }}>
              "Add a rate-limiting layer for the payments API."
            </div>
          </div>
        </Sprite>

        {/* Discovery card — slides in from below */}
        <Sprite start={start + 2.4} end={start + 12.0}>
          <Card x={120} y={460} width={1680} height={420} accent={BRAND.copper}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <div style={{
                width: 14, height: 14, background: BRAND.copper, transform: 'rotate(45deg)',
              }} />
              <div style={{
                fontFamily: BRAND.fontMono, fontSize: 13,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: BRAND.copper, fontWeight: 600,
              }}>CodeLedger Discovery</div>
              <div style={{
                fontFamily: BRAND.fontMono, fontSize: 12,
                color: BRAND.inkSoft, letterSpacing: '0.16em',
              }}>2,847 FILES SCANNED · 142ms</div>
              <div style={{ flex: 1 }} />
              <StatusPill label="GO" color={BRAND.green} bg={BRAND.greenSoft} size={16} />
            </div>

            <div style={{
              fontFamily: BRAND.fontSans, fontSize: 38, fontWeight: 800,
              color: BRAND.navy, letterSpacing: '-0.018em', lineHeight: 1.1,
              marginBottom: 22, textWrap: 'balance',
            }}>
              <code style={{
                fontFamily: BRAND.fontMono, fontSize: 32,
                background: BRAND.copperSoft, padding: '4px 10px',
                color: BRAND.brick, fontWeight: 700,
              }}>rate-limit-helper.ts</code>
              <span style={{ marginLeft: 14 }}>already handles this.</span>
            </div>

            <div style={{
              fontFamily: BRAND.fontSerif, fontSize: 24, color: BRAND.inkSoft,
              fontStyle: 'italic', marginBottom: 28,
            }}>
              Used by 7 callers · last updated 11 days ago · 96% test coverage
            </div>

            <div style={{
              fontFamily: BRAND.fontSans, fontSize: 26, fontWeight: 700,
              color: BRAND.green, letterSpacing: '-0.01em',
            }}>
              Verdict: extend the existing system.
            </div>
          </Card>
        </Sprite>

        {/* Narration — the question */}
        <Sprite start={start + 12.3} end={start + 16.5}>
          <HeroCaption
            eyebrow="The question every agent fails to ask"
            title={<>does this <em style={{ color: BRAND.copper, fontStyle: 'normal' }}>already</em> exist?</>}
            color={BRAND.navy}
          />
        </Sprite>

        <Sprite start={start + 16.7} end={end - 0.2}>
          <NarrationBlock
            style={{ bottom: 220 }}
            color={BRAND.ink}
            lines={[
              { text: 'CodeLedger asks it every time.', size: 44, accent: true, weight: 600 },
              { text: 'Before the first line of code. Before the first token burned.', size: 28 },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SCENE 4 — ACTIVE CODING (1:02 – 1:22)
// ════════════════════════════════════════════════════════════════════════════
function Scene4({ start = 62 }) {
  const end = start + 20;
  return (
    <Sprite start={start} end={end}>
      <SceneFrame background={BRAND.navyDeep} dark>
        <CornerMark light sub="Active Coding · pre-write hook" />

        {/* IDE mock — file tree + editor */}
        <Sprite start={start + 0.3} end={end}>
          <div style={{
            position: 'absolute', top: 150, left: 100,
            width: 1720, height: 780,
            background: '#0e1424',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10,
            display: 'flex',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
          }}>
            {/* File tree */}
            <div style={{
              width: 280, background: '#0a1020',
              borderRight: '1px solid rgba(255,255,255,0.05)',
              padding: '20px 16px',
              fontFamily: BRAND.fontMono, fontSize: 14,
              color: BRAND.termDim,
              lineHeight: 2,
            }}>
              <div style={{ color: BRAND.termAcc, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>payments-api</div>
              <div>▾ src</div>
              <div style={{ paddingLeft: 16 }}>▾ payments</div>
              <div style={{ paddingLeft: 32 }}>▾ handlers</div>
              <div style={{ paddingLeft: 48, color: BRAND.copper }}>● checkout.ts</div>
              <div style={{ paddingLeft: 48 }}>refund.ts</div>
              <div style={{ paddingLeft: 48 }}>webhook.ts</div>
              <div style={{ paddingLeft: 32 }}>▸ db</div>
              <div style={{ paddingLeft: 16 }}>▾ shared</div>
              <div style={{ paddingLeft: 32, color: BRAND.termWarn }}>▸ core</div>
              <div style={{ paddingLeft: 32 }}>rate-limit-helper.ts</div>
            </div>

            {/* Editor */}
            <div style={{ flex: 1, padding: '24px 28px', fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.termInk, position: 'relative' }}>
              <div style={{ fontSize: 12, color: BRAND.termDim, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 18 }}>checkout.ts · agent writing</div>
              {[
                ['1', 'import { rateLimitHelper } from \'@/shared/rate-limit-helper\';'],
                ['2', 'import { db } from \'@/payments/db\';'],
                ['3', ''],
                ['4', 'export async function checkout(req: CheckoutRequest) {'],
                ['5', '  const limited = await rateLimitHelper.check(req.userId);'],
                ['6', '  if (limited) throw new RateLimitError();'],
                ['7', ''],
                ['8', '  const tx = await db.transaction(async (trx) => {'],
                ['9', '    const order = await createOrder(trx, req);'],
                ['10', '    await processPayment(trx, order);'],
                ['11', '    return order;'],
                ['12', '  });'],
                ['13', ''],
                ['14', '  return { ok: true, order: tx.id };'],
                ['15', '}'],
              ].map(([n, line], i) => (
                <div key={i} style={{ display: 'flex', lineHeight: 1.85 }}>
                  <span style={{ width: 36, color: BRAND.termDim, textAlign: 'right', marginRight: 18 }}>{n}</span>
                  <span style={{ color: line.includes('import') ? '#c89bff' : line.includes('export') || line.includes('async') ? '#7cd3ff' : line.match(/['"`].*['"`]/) ? BRAND.termAcc : BRAND.termInk }}>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </Sprite>

        {/* Warning card — appears at 6s, blocks the write */}
        <Sprite start={start + 6.2} end={start + 14.5}>
          <Card x={400} y={340} width={1120} height={420}
            accent={BRAND.copper} paper={BRAND.paper}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 16,
                background: BRAND.copper,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: BRAND.paper, fontWeight: 800, fontFamily: BRAND.fontMono, fontSize: 18,
              }}>!</div>
              <div style={{
                fontFamily: BRAND.fontMono, fontSize: 13,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: BRAND.copper, fontWeight: 600,
              }}>CodeLedger Pre-Write Hook</div>
              <div style={{ flex: 1 }} />
              <StatusPill label="BLOCKED" color={BRAND.brick} bg="#f6e1dc" size={16} />
            </div>

            <div style={{
              fontFamily: BRAND.fontSans, fontSize: 34, fontWeight: 800,
              color: BRAND.navy, letterSpacing: '-0.018em', lineHeight: 1.15,
              marginBottom: 24, textWrap: 'balance',
            }}>
              Write outside approved insertion point detected.
            </div>

            <div style={{ fontFamily: BRAND.fontMono, fontSize: 18, lineHeight: 2, color: BRAND.ink }}>
              <div><span style={{ color: BRAND.inkSoft, width: 110, display: 'inline-block' }}>Expected:</span><span style={{ color: BRAND.green, fontWeight: 600 }}>src/payments/handlers/</span></div>
              <div><span style={{ color: BRAND.inkSoft, width: 110, display: 'inline-block' }}>Actual target:</span><span style={{ color: BRAND.brick, fontWeight: 600 }}>src/shared/core/middleware.ts</span></div>
            </div>

            <div style={{
              fontFamily: BRAND.fontSerif, fontStyle: 'italic',
              fontSize: 22, color: BRAND.inkSoft, marginTop: 22,
              borderTop: `1px solid ${BRAND.rule}`, paddingTop: 18,
            }}>
              Shared infrastructure changes require explicit owner approval.
            </div>
          </Card>
        </Sprite>

        {/* Narration */}
        <Sprite start={start + 14.7} end={end - 0.2}>
          <NarrationBlock
            style={{ bottom: 100 }}
            color={BRAND.paper}
            lines={[
              { text: 'The hook fires before the edit lands.', size: 40, accent: true },
              { text: 'Not after the review. Not after the merge.  Before.', size: 28 },
            ]}
            align="center"
          />
        </Sprite>
      </SceneFrame>
    </Sprite>
  );
}

Object.assign(window, { Scene1, Scene2, Scene3, Scene4 });
