import React, { useState } from 'react';
import { Sparkles, Zap, CheckCircle2, ArrowDown, Cpu, FolderGit2, ShieldCheck } from 'lucide-react';

interface AiTrackCalibratorProps {
  onStartPractice?: (role: string) => void;
  onBuildProfile?: () => void;
}

export const AiTrackCalibrator: React.FC<AiTrackCalibratorProps> = ({
  onStartPractice,
  onBuildProfile
}) => {
  const [selectedMatch, setSelectedMatch] = useState('Python Backend Developer');

  const matchResults = [
    {
      role: 'Python Backend Developer',
      percent: 98,
      recommended: true,
      color: 'linear-gradient(90deg, #818cf8, #a855f7)'
    },
    {
      role: 'FastAPI Developer',
      percent: 95,
      recommended: false,
      color: 'linear-gradient(90deg, #38bdf8, #818cf8)'
    },
    {
      role: 'Data Engineer (Analytics)',
      percent: 91,
      recommended: false,
      color: 'linear-gradient(90deg, #64748b, #94a3b8)'
    }
  ];

  // Animated wave heights
  const waveBars = [
    { height: 16, color: '#818cf8' },
    { height: 28, color: '#a855f7' },
    { height: 12, color: '#38bdf8' },
    { height: 24, color: '#818cf8' },
    { height: 32, color: '#a855f7' },
    { height: 18, color: '#38bdf8' },
    { height: 22, color: '#818cf8' },
    { height: 26, color: '#c084fc' },
    { height: 14, color: '#818cf8' },
    { height: 28, color: '#38bdf8' }
  ];

  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Explanatory & Live Match */}
          <div>
            {/* Tag Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '100px',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              fontSize: '11px',
              fontWeight: 700,
              color: '#a5b4fc',
              marginBottom: '16px'
            }}>
              <Sparkles size={12} />
              <span>Intelligent Track Matching</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(30px, 3.6vw, 42px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '18px'
            }}>
              Not Sure Where to Start?<br />
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Let AI Calibrate Your Track.
              </span>
            </h2>

            {/* Paragraph */}
            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              lineHeight: 1.65,
              marginBottom: '28px'
            }}>
              Upload your resume or enter your target competencies. Our matching model parses past tech stacks, career velocity, and targeted job listings to map the optimal high-probability practice sequence.
            </p>

            {/* Live Profile Match Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '18px',
              padding: '22px 24px',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '28px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px',
                fontSize: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7', boxShadow: '0 0 8px rgba(2, 132, 199, 0.5)' }} />
                  <span>Live Profile Match Result</span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '11px', fontWeight: 600 }}>
                  Profile: <span style={{ color: 'var(--text-main)' }}>Mid Backend</span>
                </div>
              </div>

              {/* Progress bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {matchResults.map((res, rIdx) => (
                  <div
                    key={rIdx}
                    onClick={() => setSelectedMatch(res.role)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '11.5px',
                      marginBottom: '6px'
                    }}>
                      <span style={{ color: selectedMatch === res.role ? '#ffffff' : '#94a3b8', fontWeight: 600 }}>
                        {res.role}
                      </span>
                      <span style={{ color: res.recommended ? '#a5b4fc' : '#64748b', fontWeight: 700 }}>
                        {res.percent}% Match {res.recommended && '(Highly Recommended)'}
                      </span>
                    </div>
                    {/* Track */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '100px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${res.percent}%`,
                        height: '100%',
                        background: res.color,
                        borderRadius: '100px',
                        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button
                onClick={() => onStartPractice && onStartPractice(selectedMatch)}
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
                <span>Get My Recommendations</span>
                <Zap size={14} />
              </button>

              <button
                onClick={() => onBuildProfile && onBuildProfile()}
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
                Build My Profile
              </button>
            </div>
          </div>

          {/* Right Column: Telemetry / AI Pipeline Flow HUD */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '28px',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            
            {/* Step 1: Candidate Ingestion Node */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FolderGit2 size={18} color="var(--primary-color)" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px' }}>
                    Candidate Ingestion Node
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>
                    Skills: Python, FastAPI, SQL, PostgreSQL, Docker (1–3 Yrs)
                  </div>
                </div>
              </div>
              <CheckCircle2 size={16} color="#0284c7" />
            </div>

            {/* Down Arrow connector */}
            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-muted)', margin: '-4px 0' }}>
              <ArrowDown size={18} />
            </div>

            {/* Step 2: AI Neural Calibrator Node */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Cpu size={16} color="#c084fc" />
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    AI Neural Calibrator
                  </div>
                </div>
                <div style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  fontFamily: 'monospace'
                }}>
                  LATENCY: <span style={{ color: '#0284c7' }}>148ms</span>
                </div>
              </div>

              <p style={{
                fontSize: '12px',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                margin: '0 0 16px 0'
              }}>
                Cross-referencing 2026 hiring benchmarks, role seniority matrices, and difficulty vectors.
              </p>

              {/* Audio / Neural Frequency Equalizer Bars */}
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '56px',
                border: '1px solid var(--border-subtle)'
              }}>
                {waveBars.map((bar, bIdx) => (
                  <div
                    key={bIdx}
                    style={{
                      width: '4px',
                      height: `${bar.height}px`,
                      background: bar.color,
                      borderRadius: '4px',
                      boxShadow: `0 0 8px ${bar.color}70`,
                      transition: 'height 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Down Arrow connector */}
            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-muted)', margin: '-4px 0' }}>
              <ArrowDown size={18} />
            </div>

            {/* Step 3: Recommended Output Track */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(2, 132, 199, 0.15)',
                  border: '1px solid rgba(2, 132, 199, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShieldCheck size={20} color="#0284c7" />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Recommended Output Track
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)' }}>
                    Python Backend Specialist
                  </div>
                </div>
              </div>

              <button
                onClick={() => onStartPractice && onStartPractice('Python Backend Specialist')}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '7px 14px',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                Sign Up to Practice
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
