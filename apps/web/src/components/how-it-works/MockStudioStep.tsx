import React from 'react';
import { Clock, Volume2 } from 'lucide-react';

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
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            5. Enter a Realistic AI Interview
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Each interview is strictly calibrated to exactly 5 high-impact questions. No exhausting open-ended slogs; only precise, realistic evaluation designed for rapid iteration.
          </p>
        </div>

        {/* 6-Step Flow Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '10px',
          maxWidth: '960px',
          margin: '0 auto 36px'
        }}>
          {ribbonSteps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: step.active ? 'rgba(56, 189, 248, 0.12)' : 'var(--bg-card)',
                border: step.active ? '1px solid rgba(56, 189, 248, 0.5)' : '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '14px 10px',
                textAlign: 'center',
                boxShadow: step.active ? '0 0 16px rgba(56, 189, 248, 0.15)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: step.active ? '#0284c7' : 'var(--text-main)',
                marginBottom: '4px'
              }}>
                {step.title}
              </div>
              <div style={{
                fontSize: '11px',
                color: step.active ? '#0284c7' : 'var(--text-secondary)'
              }}>
                {step.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Live Mock Interview Studio Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '28px 30px',
          maxWidth: '1080px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Studio Top Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                fontSize: '11.5px',
                fontWeight: 700,
                color: '#c084fc',
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                padding: '4px 12px',
                borderRadius: '6px'
              }}>
                Live Mock Interview
              </span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>
                AI/ML Engineer Assessment
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '13px', fontWeight: 600 }}>
                <Clock size={15} />
                <span>02:14 / 03:00 Max</span>
              </div>
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '4px 12px',
                borderRadius: '6px'
              }}>
                Question 2 of 5
              </span>
            </div>
          </div>

          {/* 2-Column Live Studio Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.15fr',
            gap: '24px',
            alignItems: 'stretch'
          }}>
            {/* Left Box: Interviewer Question & Acoustic Telemetry */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    Interviewer: Synthetic Persona (Staff Lead)
                  </span>
                  <Volume2 size={18} color="#818cf8" />
                </div>

                <div style={{
                  fontSize: '16.5px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  lineHeight: 1.55,
                  marginBottom: '28px'
                }}>
                  "How would you prevent cascading failures when a downstream database cluster experiences unmitigated replication lag during high write spikes?"
                </div>

                {/* Live Acoustic Telemetry Box */}
                <div style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '18px 20px',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      Live Acoustic Telemetry
                    </span>
                    <span style={{ fontSize: '11.5px', color: '#38bdf8', fontWeight: 600 }}>
                      Active Stream
                    </span>
                  </div>

                  {/* Waveform Bars */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', height: '40px' }}>
                    {[12, 22, 16, 32, 20, 36, 28, 34, 18, 26, 14].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          width: '4px',
                          height: `${h}px`,
                          background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)',
                          borderRadius: '2px',
                          transition: 'height 0.2s ease'
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
                borderTop: '1px solid var(--border-subtle)'
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
              {/* Webcam Feed Frame with AR Overlays */}
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '270px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)'
              }}>
                {/* Background Video Image */}
                <img
                  src="/candidate_feed.jpg"
                  alt="Candidate Feed"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                  }}
                  onError={(e) => {
                    // Fallback to stylized container if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Ambient Dark Gradient Layer for HUD legibility */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(6, 9, 17, 0.8) 0%, rgba(6, 9, 17, 0.2) 40%, rgba(6, 9, 17, 0.2) 60%, rgba(6, 9, 17, 0.9) 100%)',
                  zIndex: 1
                }} />

                {/* HUD Top Bar */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 14px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#ef4444',
                      boxShadow: '0 0 8px #ef4444'
                    }} />
                    <span style={{ fontSize: '10.5px', color: 'var(--text-main)', fontWeight: 700, letterSpacing: '0.04em' }}>
                      • LIVE | INPREP AI - MOCK INTERVIEW
                    </span>
                  </div>
                  <span style={{ fontSize: '10.5px', color: 'var(--text-secondary)' }}>
                    Candidate View: Sarah J. <span style={{ color: '#64748b', marginLeft: '6px' }}>Session Time: 14:28</span>
                  </span>
                </div>

                {/* Floating Candidate Feed Title */}
                <div style={{ position: 'relative', zIndex: 2, padding: '0 14px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    Candidate Feed
                  </span>
                </div>

                {/* Mid AR Annotations */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 16px',
                  pointerEvents: 'none'
                }}>
                  {/* Left AR Tag */}
                  <div style={{
                    background: 'rgba(6, 9, 17, 0.75)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    fontSize: '9.5px',
                    color: '#38bdf8',
                    backdropFilter: 'blur(4px)'
                  }}>
                    Gaze: Focused<br />
                    <span style={{ color: 'var(--text-secondary)' }}>Confidence: 98%</span>
                  </div>

                  {/* Right AR Tag */}
                  <div style={{
                    background: 'rgba(6, 9, 17, 0.75)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    fontSize: '9.5px',
                    color: '#38bdf8',
                    backdropFilter: 'blur(4px)',
                    textAlign: 'right'
                  }}>
                    Audio: Active<br />
                    <span style={{ color: 'var(--text-secondary)' }}>Confidence: High</span>
                  </div>
                </div>

                {/* HUD Bottom Line */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 14px'
                }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    Confidence: 92% • Engagement: High
                  </span>
                  <span style={{
                    fontSize: '11px',
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
                  borderRadius: '24px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(99, 102, 241, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
                }}
              >
                Submit Answer & Proceed
              </button>

              <button
                type="button"
                onClick={onStartPractice}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '24px',
                  border: '1px solid var(--border-accent)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-surface)';
                }}
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


