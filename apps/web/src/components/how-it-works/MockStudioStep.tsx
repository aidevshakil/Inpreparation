import React from 'react';
import { Clock, Radio } from 'lucide-react';

interface MockStudioStepProps {
  onStartPractice: () => void;
}

export const MockStudioStep: React.FC<MockStudioStepProps> = ({
  onStartPractice
}) => {
  const ribbonSteps = [
    { title: '1. Question', sub: 'AI Voice Query', active: false },
    { title: '2. Prepare', sub: '30s Thinking', active: false },
    { title: '3. Record', sub: 'Answer Live', active: true },
    { title: '4. Review', sub: 'Transcript Scan', active: false },
    { title: '5. Submit', sub: 'Process Audio', active: false },
    { title: '6. Next Q', sub: 'To Question 3', active: false }
  ];

  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Step Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: '10px'
          }}>
            STEP 05
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            5. Enter a Realistic AI Interview
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6
          }}>
            Each interview is strictly calibrated to exactly 5 high-impact questions. No exhausting open-ended slogs; only precise, realistic evaluation designed for rapid iteration.
          </p>
        </div>

        {/* 6-Step Flow Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
          gap: '10px',
          maxWidth: '960px',
          margin: '0 auto 36px'
        }}>
          {ribbonSteps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: step.active ? 'rgba(56, 189, 248, 0.08)' : '#0a0e18',
                border: step.active ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '12px 10px',
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: step.active ? '#38bdf8' : '#ffffff',
                marginBottom: '4px'
              }}>
                {step.title}
              </div>
              <div style={{
                fontSize: '11px',
                color: step.active ? '#94a3b8' : '#64748b'
              }}>
                {step.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Live Mock Interview Studio Card */}
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '28px',
          maxWidth: '1080px',
          margin: '0 auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Studio Top Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#a5b4fc',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '3px 10px',
                borderRadius: '6px'
              }}>
                Live Mock Interview
              </span>
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#f8fafc' }}>
                AI/ML Engineer Assessment
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '12px', fontWeight: 600 }}>
                <Clock size={14} />
                <span>02:14 / 03:00 Max</span>
              </div>
              <span style={{
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#a5b4fc',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                padding: '3px 10px',
                borderRadius: '6px'
              }}>
                Question 2 of 5
              </span>
            </div>
          </div>

          {/* 2-Column Live Studio Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {/* Left Box: Interviewer Question & Acoustic Telemetry */}
            <div style={{
              background: '#060911',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>
                    Interviewer: Synthetic Persona (Staff Lead)
                  </span>
                  <Radio size={16} color="#818cf8" />
                </div>

                <div style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.5,
                  marginBottom: '28px'
                }}>
                  "How would you prevent cascading failures when a downstream database cluster experiences unmitigated replication lag during high write spikes?"
                </div>

                {/* Live Acoustic Telemetry Box */}
                <div style={{
                  background: '#0e1322',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>
                      Live Acoustic Telemetry
                    </span>
                    <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600 }}>
                      Active Stream
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', height: '36px' }}>
                    {[10, 20, 14, 28, 18, 32, 24, 30, 16, 24, 12].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          width: '4px',
                          height: `${h}px`,
                          background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)',
                          borderRadius: '2px'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '11.5px',
                color: '#64748b',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.04)'
              }}>
                <span>Speaking cadence calibrated to 140 WPM target</span>
                <span style={{ color: '#38bdf8', fontWeight: 500 }}>Audio fidelity: 48kHz</span>
              </div>
            </div>

            {/* Right Box: Video Feed HUD & Controls */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              {/* Webcam Feed Frame */}
              <div style={{
                background: '#060911',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '14px 16px'
              }}>
                {/* Simulated Camera Lighting Ambient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(30, 41, 59, 0.95) 0%, rgba(6, 9, 17, 0.98) 100%)',
                  zIndex: 0
                }} />

                {/* HUD Top Bar */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                    <span style={{ fontSize: '11px', color: '#cbd5e1', fontWeight: 600 }}>
                      Candidate Feed
                    </span>
                  </div>
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Session Time: 14:28</span>
                </div>

                {/* Center HUD Graphic Overlay */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', margin: '20px 0 10px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    border: '2px solid rgba(56, 189, 248, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.25)',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '26px' }}>👩‍💼</span>
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    fontSize: '10.5px',
                    color: '#93c5fd',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <span>Face Focused</span> • <span>Audio Active</span>
                  </div>
                </div>

                {/* HUD Bottom Line */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: '#64748b' }}>
                    Confidence: 95% • Engagement: High
                  </span>
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#06111f',
                    background: '#06b6d4',
                    padding: '3px 10px',
                    borderRadius: '4px'
                  }}>
                    Posture: Centered
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={onStartPractice}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Submit Answer & Proceed
              </button>

              <button
                type="button"
                onClick={onStartPractice}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#141a29',
                  color: '#cbd5e1',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#1b2336'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#141a29'; e.currentTarget.style.color = '#cbd5e1'; }}
              >
                Review Transcript & Retake (1 Left)
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

