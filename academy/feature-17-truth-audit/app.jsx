// Feature 17 — Truth Audit
function App() {
  return (
    <Stage width={1920} height={1080} duration={65} background="#0a0d18" fps={60} loop={false} autoplay={true} persistKey="cl-academy-f17">
      <TitleScene start={0} num="17" title="Truth Audit" sub="$ codeledger truth-audit" />

      <AcademyScene start={3} dur={10} num="17">
        <Eyebrow text="Procurement is asking" top={150} />
        <Sprite start={3.2} end={13}>
          <div style={{ position: 'absolute', top: 230, left: 120, right: 120 }}>
            <div style={{ padding: '24px 32px', background: '#fff', borderRadius: 8, marginBottom: 22, color: '#1f2328', fontFamily: BRAND.fontSerif }}>
              <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#6b7280', marginBottom: 12 }}>FROM: procurement@enterprise.com</div>
              <div style={{ fontSize: 22, fontStyle: 'italic' }}>"Please provide evidence of your AI-assisted code review process."</div>
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(248,113,113,0.06)', border: '1px solid #f87171', borderRadius: 8, fontFamily: BRAND.fontSerif, fontStyle: 'italic', fontSize: 22, color: BRAND.paper, lineHeight: 1.4 }}>
              "We have CI. We have code review.<br/><span style={{ color: '#f87171', fontStyle: 'normal', fontWeight: 700 }}>But we can't share source code.</span>"
            </div>
          </div>
        </Sprite>
        <Sprite start={10.5} end={12.8}>
          <BottomCaption text="Compliance needs proof. Source is sensitive." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={13} dur={14} num="17">
        <Sprite start={13.2} end={27}>
          <Terminal x={120} y={140} width={1680} height={820} title="codeledger" cwd="~/payments-api"
            lines={[
              { at: 0, type: 'cmd', text: 'codeledger truth-audit', typeFor: 1.0 },
              { at: 1.4, type: 'dim', text: '', gap: 10 },
              { at: 1.6, type: 'ok',  text: 'Local report: .codeledger/truth-audit/report_2026_05_12.json', size: 20 },
              { at: 2.6, type: 'dim', text: '', gap: 14 },
              { at: 2.8, type: 'banner', text: 'Certificate (external-safe):', size: 22, bold: true },
              { at: 3.6, type: 'out', text: '  cis score: 82', size: 22 },
              { at: 4.1, type: 'ok',  text: '  confidence: high', size: 22 },
              { at: 4.6, type: 'ok',  text: '  evidence coverage: 91%', size: 22 },
              { at: 5.1, type: 'out', text: '  provisional: false', size: 22 },
              { at: 5.8, type: 'dim', text: '  certificate excludes source, paths, symbols', size: 18, gap: 14 },
              { at: 7.0, type: 'cmd', text: 'codeledger proof-pack', typeFor: 1.0 },
              { at: 8.6, type: 'ok',  text: 'Includes: manifests · verification reports · receipts · certificate', size: 20 },
            ]}
          />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={27} dur={15} num="17">
        <Eyebrow text="Inside · outside · the boundary" top={150} />
        <div style={{ position: 'absolute', top: 240, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 540 }}>
          <Sprite start={27.4} end={42}>
            <div style={{ position: 'relative', width: 740, height: 540 }}>
              <div style={{
                position: 'absolute', inset: 0,
                border: '2px dashed #f87171', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center', padding: 60 }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#f87171', fontWeight: 700, marginBottom: 18 }}>INTERNAL (local report)</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.paper, lineHeight: 2 }}>
                    <div>source file paths</div>
                    <div>symbols</div>
                    <div>raw evidence labels</div>
                  </div>
                </div>
              </div>
              <div style={{
                position: 'absolute', top: 90, left: 90, right: 90, bottom: 90,
                background: 'rgba(74,222,128,0.08)', border: '2px solid #4ade80', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center', padding: 40 }}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: '#4ade80', fontWeight: 700, marginBottom: 16 }}>EXTERNAL-SAFE</div>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 16, color: BRAND.paper, lineHeight: 2 }}>
                    <div>cis score</div>
                    <div>confidence</div>
                    <div>evidence coverage</div>
                    <div>hashes</div>
                  </div>
                </div>
              </div>
            </div>
          </Sprite>
        </div>
        <Sprite start={39} end={41.8}>
          <BottomCaption text="Source code never leaves. The certificate does." />
        </Sprite>
      </AcademyScene>

      <AcademyScene start={42} dur={13} num="17">
        <Eyebrow text="External certificate · ready to share" top={150} />
        <Sprite start={42.4} end={55}>
          <Card x={460} y={260} width={1000} height={480} accent="#4ade80" paper="#0e1424" style={{ color: BRAND.paper }}>
            <div style={{ fontFamily: BRAND.fontMono, fontSize: 13, letterSpacing: '0.22em', color: '#4ade80', marginBottom: 16, fontWeight: 700 }}>CERTIFICATE · external-safe</div>
            <div style={{ fontFamily: BRAND.fontSans, fontSize: 36, fontWeight: 800, color: BRAND.paper, letterSpacing: '-0.02em', marginBottom: 36 }}>Engineering Posture Report</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}>
              {[
                ['CIS Score', '82', '#4ade80'],
                ['Confidence', 'HIGH', '#4ade80'],
                ['Evidence Cov.', '91%', '#4ade80'],
              ].map(([k, v, c], i) => (
                <div key={i}>
                  <div style={{ fontFamily: BRAND.fontMono, fontSize: 12, letterSpacing: '0.22em', color: BRAND.termDim, marginBottom: 8 }}>{k}</div>
                  <div style={{ fontFamily: BRAND.fontSans, fontSize: 56, fontWeight: 800, color: c, lineHeight: 1, letterSpacing: '-0.03em' }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: '12px 22px', background: 'rgba(74,222,128,0.06)', borderRadius: 4, fontFamily: BRAND.fontMono, fontSize: 14, color: BRAND.termDim }}>
              excluded: source code · file paths · symbols · secrets
            </div>
          </Card>
        </Sprite>
        <Sprite start={52} end={54.8}>
          <BottomCaption text="Auditability and privacy. Not a tradeoff." />
        </Sprite>
      </AcademyScene>

      <EndScene start={55} cmd='codeledger truth-audit' />
    </Stage>
  );
}
mountApp(App);
