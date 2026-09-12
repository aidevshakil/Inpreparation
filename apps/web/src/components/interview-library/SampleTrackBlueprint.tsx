import React from 'react';
import { PlayCircle, Video, BarChart3 } from 'lucide-react';

interface SampleTrackBlueprintProps {
  onStartPractice?: (role: string) => void;
  onViewCurriculum?: () => void;
}

export const SampleTrackBlueprint: React.FC<SampleTrackBlueprintProps> = ({
  onStartPractice,
  onViewCurriculum
}) => {
  const topics = [
    'Python OOP & Metaclasses',
    'FastAPI / Django',
    'REST & Idempotency',
    'PostgreSQL Indexing',
    'JWT Auth & RBAC',
    'Asyncio & Thread Pooling',
    'Edge-Case Recovery'
  ];

  const weights = [
    { label: 'Technical Correctness', pct: '40%', width: 40, color: 'linear-gradient(90deg, #38bdf8, #818cf8)' },
    { label: 'Communication & Structure', pct: '25%', width: 25, color: 'linear-gradient(90deg, #818cf8, #a855f7)' },
    { label: 'Speech Cadence & Pace', pct: '20%', width: 20, color: 'linear-gradient(90deg, #a855f7, #c084fc)' },
    { label: 'Observable Presentation', pct: '15%', width: 15, color: 'linear-gradient(90deg, #818cf8, #38bdf8)' }
  ];

  return (
    <section style={{ padding: '30px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{
          background: '#090d16',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '36px 40px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            
            {/* Left Column: Blueprint Overview & Topics */}
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                fontSize: '11px',
                fontWeight: 700,
                color: '#a5b4fc',
                marginBottom: '16px'
              }}>
                <PlayCircle size={13} />
                <span>Sample Track Blueprint</span>
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                Python Backend Developer
              </h2>

              {/* Subtitle */}
              <p style={{
                fontSize: '14.5px',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '26px'
              }}>
                Evaluates asynchronous programming, API architecture, transaction durability, and architectural defense under probing questioning.
              </p>

              {/* 4 Stat Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '12px',
                marginBottom: '26px'
              }}>
                <div style={{
                  background: '#101524',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '12px 14px'
                }}>
                  <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 600, marginBottom: '4px' }}>
                    Difficulty
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                    Intermediate
                  </div>
                </div>

                <div style={{
                  background: '#101524',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '12px 14px'
                }}>
                  <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 600, marginBottom: '4px' }}>
                    Experience
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                    1 – 3 Years
                  </div>
                </div>

                <div style={{
                  background: '#101524',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '12px 14px'
                }}>
                  <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 600, marginBottom: '4px' }}>
                    Question Set
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#818cf8' }}>
                    Exactly 5
                  </div>
                </div>

                <div style={{
                  background: '#101524',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '12px 14px'
                }}>
                  <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 600, marginBottom: '4px' }}>
                    Est. Pacing
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                    ~15 Mins
                  </div>
                </div>
              </div>

              {/* Calibrated Topics */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '12px'
                }}>
                  CALIBRATED TOPICS IN THIS ROUND:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {topics.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: '#121726',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        color: '#cbd5e1',
                        fontWeight: 500
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <button
                  onClick={() => onStartPractice && onStartPractice('Python Backend Developer')}
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '100px',
                    padding: '13px 24px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.92';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Video size={16} />
                  <span>Start Practice Round (5 Qs)</span>
                </button>

                <button
                  onClick={() => onViewCurriculum && onViewCurriculum()}
                  style={{
                    background: '#121726',
                    color: '#cbd5e1',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '100px',
                    padding: '13px 22px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1a2238';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#121726';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  View Full Curriculum Details
                </button>
              </div>
            </div>

            {/* Right Column: Multimodal Evaluation Weight */}
            <div style={{
              background: '#0d121f',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '18px',
              padding: '24px 26px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '20px'
              }}>
                <BarChart3 size={16} color="#818cf8" />
                <span>Multimodal Evaluation Weight</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '22px' }}>
                {weights.map((w, idx) => (
                  <div key={idx}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '12px',
                      marginBottom: '6px'
                    }}>
                      <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{w.label}</span>
                      <span style={{ color: '#94a3b8', fontWeight: 700, fontFamily: 'monospace' }}>{w.pct}</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '5px',
                      background: 'rgba(255, 255, 255, 0.07)',
                      borderRadius: '100px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${w.width}%`,
                        height: '100%',
                        background: w.color,
                        borderRadius: '100px'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <p style={{
                fontSize: '11.5px',
                color: '#64748b',
                lineHeight: 1.55,
                margin: 0
              }}>
                Scores are aggregated across video, voice pitch variance, and architectural correctness.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
