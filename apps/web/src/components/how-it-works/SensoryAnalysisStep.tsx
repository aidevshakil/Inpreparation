import React from 'react';
import { Code2, MessageSquare, Volume2, Eye, ShieldCheck } from 'lucide-react';

export const SensoryAnalysisStep: React.FC = () => {
  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Step Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: '10px'
          }}>
            STEP 06
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            6. Your Interview Is Analyzed From Multiple Angles
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6
          }}>
            Executive hiring committees evaluate far more than verbatim recall. Inprep processes your session across 4 distinct sensory dimensions in real-time.
          </p>
        </div>

        {/* 4 Dimension Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}>
          {/* Card 1: Technical Evaluation */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Code2 size={19} color="#818cf8" />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#818cf8', letterSpacing: '-0.02em' }}>
                  86<span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>/100</span>
                </div>
              </div>

              <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Technical Evaluation
              </h3>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '22px' }}>
                Algorithmic correctness, edge cases, system trade-offs, and fallback engineering.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Problem Solving</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>90%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Edge Case Coverage</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>82%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Architectural Rationale</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>86%</span>
                </div>
              </div>
            </div>

            <div style={{
              fontSize: '11.5px',
              color: '#818cf8',
              fontWeight: 600,
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Sub-score: Exceeds Staff Bar
            </div>
          </div>

          {/* Card 2: Communication Quality */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MessageSquare size={19} color="#38bdf8" />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#38bdf8', letterSpacing: '-0.02em' }}>
                  84<span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>/100</span>
                </div>
              </div>

              <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Communication Quality
              </h3>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '22px' }}>
                Answer structure (STAR/PREP), conciseness, executive summarization, and tone control.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Clarity & Structure</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>88%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Conciseness</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>79%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Executive Polish</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>85%</span>
                </div>
              </div>
            </div>

            <div style={{
              fontSize: '11.5px',
              color: '#38bdf8',
              fontWeight: 600,
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Sub-score: Crisp Delivery
            </div>
          </div>

          {/* Card 3: Speech Intelligence */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Volume2 size={19} color="#c084fc" />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#c084fc', letterSpacing: '-0.02em' }}>
                  81<span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>/100</span>
                </div>
              </div>

              <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Speech Intelligence
              </h3>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '22px' }}>
                Pacing analysis, filler word frequency, micro-pauses, and acoustic resonance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Speaking Rate</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>142 WPM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Filler Count</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>11 (Low)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Pause Cadence</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>Natural</span>
                </div>
              </div>
            </div>

            <div style={{
              fontSize: '11.5px',
              color: '#a5b4fc',
              fontWeight: 600,
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Sub-score: Steady Cadence
            </div>
          </div>

          {/* Card 4: Computer Vision */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Eye size={19} color="#818cf8" />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                  85<span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>/100</span>
                </div>
              </div>

              <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Computer Vision
              </h3>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '22px' }}>
                Eye level alignment, framing stability, lighting uniformity, and posture stability.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Face Visibility</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>96%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Eye Contact</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>88%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px' }}>
                  <span style={{ color: '#94a3b8' }}>Framing Quality</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>94%</span>
                </div>
              </div>
            </div>

            <div style={{
              fontSize: '11.5px',
              color: '#94a3b8',
              fontWeight: 600,
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Sub-score: Confident Setup
            </div>
          </div>
        </div>

        {/* Observable Signals Banner */}
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '280px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={22} color="#818cf8" />
            </div>
            <div>
              <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Observable Signals, Not Psychological Profiling
              </h4>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                Presentation analysis focuses solely on observable camera setup and acoustic signals (lighting, camera distance, clear articulation, and eye level). It strictly does not attempt to evaluate personality, inner emotion, innate intelligence, mental health, or truthfulness.
              </p>
            </div>
          </div>

          <div style={{
            background: '#111a2c',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '11.5px',
            fontWeight: 600,
            color: '#38bdf8',
            whiteSpace: 'nowrap'
          }}>
            Ethical AI Compliant
          </div>
        </div>

      </div>
    </section>
  );
};

