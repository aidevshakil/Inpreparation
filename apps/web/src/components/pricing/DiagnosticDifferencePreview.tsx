import React from 'react';
import { Lock, CheckCircle2, Mic, Sparkles, ArrowRight } from 'lucide-react';

export const DiagnosticDifferencePreview: React.FC = () => {
  return (
    <section style={{ padding: '30px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* ========================================================
            HEADER: SEE THE DIFFERENCE
        ======================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            marginBottom: '10px'
          }}>
            CLEAR DIAGNOSTIC DEPTH
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            See the Difference
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            Experience the step–change from generalized scoring to deep, multi–vector diagnostic intelligence.
          </p>
        </div>

        {/* ========================================================
            2 COMPARATIVE CARDS GRID
        ======================================================== */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
          marginBottom: '40px'
        }}>
          
          {/* Left: Free Baseline Card */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  TIER: FREE BASELINE
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>
                  Standard
                </span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '22px' }}>
                High–Level Feedback
              </h3>

              {/* Score Box */}
              <div style={{
                background: '#0f1422',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#161c2e',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#ffffff'
                  }}>
                    74
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                      Overall Session Score
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                      Evaluated via basic automated parser
                    </div>
                  </div>
                </div>

                <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>
                  Fair Fit
                </span>
              </div>

              {/* Strengths */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  STRENGTHS
                </div>
                <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                  Clear attempt to cover system components and mentioned database sharding.
                </p>
              </div>

              {/* Area to Improve */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  GENERAL AREA TO IMPROVE
                </div>
                <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                  Provide more concrete examples when answering trade–off questions.
                </p>
              </div>
            </div>

            {/* Locked Telemetry Footer Pill */}
            <div style={{
              background: '#111524',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '12px',
              color: '#64748b',
              fontWeight: 500
            }}>
              <Lock size={13} color="#64748b" />
              <span>Deep multimodal telemetry locked in Free tier</span>
            </div>
          </div>

          {/* Right: Pro Multi-Vector Card */}
          <div style={{
            background: 'radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.12), transparent 70%), #0c101d',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 50px rgba(99, 102, 241, 0.15)'
          }}>
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  TIER: PRO MULTI–VECTOR
                </span>
                <span style={{
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: '#a5b4fc',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '3px 9px',
                  borderRadius: '6px',
                  letterSpacing: '0.05em'
                }}>
                  ACTIVE HUD
                </span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
                Multimodal Diagnostic Suite
              </h3>

              {/* 4 Metric Gauges Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                marginBottom: '18px'
              }}>
                <div style={{ background: '#121728', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>TECHNICAL</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>86%</div>
                </div>
                <div style={{ background: '#121728', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>COMM</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>84%</div>
                </div>
                <div style={{ background: '#121728', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>SPEECH</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#a5b4fc' }}>81%</div>
                </div>
                <div style={{ background: '#121728', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>FRAMING</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#c084fc' }}>85%</div>
                </div>
              </div>

              {/* Vocal Telemetry Row */}
              <div style={{
                background: '#121728',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '10px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a5b4fc', fontWeight: 600 }}>
                  <Mic size={14} color="#818cf8" />
                  <span>Vocal Telemetry:</span>
                </div>
                <div style={{ color: '#94a3b8' }}>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>142 WPM (Optimal)</span>
                  <span style={{ margin: '0 6px', color: '#475569' }}>•</span>
                  <span>2 filler words detected</span>
                </div>
              </div>

              {/* Suggested Answer Structure (STAR) */}
              <div style={{
                background: '#121728',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '12px',
                padding: '14px 16px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: '#38bdf8' }}>
                    <Sparkles size={12} />
                    <span>SUGGESTED ANSWER STRUCTURE (STAR)</span>
                  </div>
                  <span style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 600 }}>
                    Architecture Q2
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
                  "Lead with synchronous vs async trade–offs first, quantify the message throughput constraint (10k ops/sec), then justify Kafka partitions."
                </p>
              </div>

              {/* Curated Next Practice */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px',
                marginBottom: '20px'
              }}>
                <span style={{ color: '#94a3b8' }}>Curated Next Practice:</span>
                <span style={{
                  background: '#1a2238',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: '#818cf8'
                }}>
                  Distributed Cache Drill
                </span>
              </div>
            </div>

            {/* Bottom Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#38bdf8', fontWeight: 500 }}>
              <CheckCircle2 size={15} color="#38bdf8" />
              <span>Complete longitudinal performance trajectory unlocked</span>
            </div>
          </div>

        </div>

        {/* ========================================================
            4-STEP FLOW RIBBON: Practice -> Analyze -> Understand -> Improve
        ======================================================== */}
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {[
            { step: '1', label: 'Practice', color: '#6366f1' },
            { step: '2', label: 'Analyze', color: '#3b82f6' },
            { step: '3', label: 'Understand', color: '#8b5cf6' },
            { step: '4', label: 'Improve', color: '#4f46e5' }
          ].map((item, sIdx, arr) => (
            <React.Fragment key={sIdx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: item.color,
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 2px 8px ${item.color}60`
                }}>
                  {item.step}
                </div>
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#f8fafc' }}>
                  {item.label}
                </span>
              </div>
              {sIdx < arr.length - 1 && (
                <ArrowRight size={16} color="#475569" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
