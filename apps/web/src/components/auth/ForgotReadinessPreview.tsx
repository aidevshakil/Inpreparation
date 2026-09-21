import React from 'react';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export const ForgotReadinessPreview: React.FC = () => {
  const vectors = [
    { label: 'Technical Evaluation', sub: 'Accuracy & Depth', score: 86, color: '#818cf8' },
    { label: 'Communication & Structure', sub: 'STAR Method', score: 81, color: '#38bdf8' },
    { label: 'Speech Cadence & Prosody', sub: '142 WPM', score: 84, color: '#fbbf24' },
    { label: 'Presentation & Framing', sub: 'Eye-Level Optics', score: 85, color: '#34d399' }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '580px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Header */}
      <div>
        {/* Pill Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '5px 14px',
          borderRadius: '100px',
          background: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          fontSize: '11px',
          fontWeight: 700,
          color: '#818cf8',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '14px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', display: 'inline-block' }} />
          <span>CONTINUOUS CAREER READINESS</span>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '12px'
        }}>
          Your Interview Journey Is Waiting For You.
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '14px',
          color: '#94a3b8',
          lineHeight: 1.6,
          margin: 0
        }}>
          Recover access quickly to continue calibrated mock practice, review your multi-vector telemetry, and build authentic interview confidence.
        </p>
      </div>

      {/* Main Interactive Readiness HUD Card */}
      <div style={{
        background: '#090d16',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '28px 26px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
      }}>
        
        {/* Simulation Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 800,
              color: '#ffffff'
            }}>
              AI
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                CANDIDATE READINESS CALIBRATION
              </div>
              <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                Synthetic Mock Telemetry • Last Session Benchmarks
              </div>
            </div>
          </div>

          <span style={{
            fontSize: '10px',
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: '6px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#94a3b8',
            letterSpacing: '0.06em'
          }}>
            DEMO UI
          </span>
        </div>

        {/* 2 Metric Scores */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          marginBottom: '22px'
        }}>
          {/* Interview Readiness */}
          <div style={{
            background: '#0e1320',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '14px',
            padding: '16px 18px'
          }}>
            <div style={{ fontSize: '11.5px', color: '#8896ab', marginBottom: '6px' }}>
              Interview Readiness
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                82
              </span>
              <span style={{ fontSize: '14px', color: '#64748b' }}>/ 100</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: '#10b981', fontWeight: 600 }}>
              <TrendingUp size={13} />
              <span>+14 pts over last attempt</span>
            </div>
          </div>

          {/* Target Role Tier */}
          <div style={{
            background: '#0e1320',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '14px',
            padding: '16px 18px'
          }}>
            <div style={{ fontSize: '11.5px', color: '#8896ab', marginBottom: '6px' }}>
              Target Role Tier
            </div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#818cf8', letterSpacing: '-0.02em', marginBottom: '4px', marginTop: '4px' }}>
              Staff Tier
            </div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>
              Top 12% in System Concurrency
            </div>
          </div>
        </div>

        {/* Multimodal Feedback Vectors */}
        <div style={{ marginBottom: '22px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#64748b',
            marginBottom: '14px'
          }}>
            <span>MULTIMODAL FEEDBACK VECTORS</span>
            <span style={{ color: '#818cf8' }}>4 DIMENSIONS</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {vectors.map((vec, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: vec.color, display: 'inline-block' }} />
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>{vec.label}</span>
                    <span style={{ color: '#64748b', fontSize: '11.5px' }}>• {vec.sub}</span>
                  </div>
                  <div style={{ color: '#ffffff', fontWeight: 700 }}>
                    {vec.score} <span style={{ color: '#64748b', fontWeight: 400 }}>/ 100</span>
                  </div>
                </div>

                {/* Progress Track */}
                <div style={{
                  height: '6px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${vec.score}%`,
                    height: '100%',
                    borderRadius: '100px',
                    background: vec.color,
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Growth Loop Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11.5px',
          color: '#64748b',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '14px'
        }}>
          <span>Continuous Growth Loop:</span>
          <span style={{ color: '#cbd5e1', fontWeight: 600 }}>
            Practice <span style={{ color: '#818cf8' }}>→</span> Feedback <span style={{ color: '#818cf8' }}>→</span> Improvement
          </span>
        </div>

      </div>

      {/* Responsible AI & Ethical Safeguards Card */}
      <div style={{
        background: '#090d16',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '18px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'rgba(99, 102, 241, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <ShieldCheck size={16} color="#818cf8" />
        </div>

        <div>
          <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
            Responsible AI & Ethical Safeguards:
          </div>
          <p style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
            AI feedback is derived exclusively from observable technical responses, speech acoustics, and camera framing hygiene. Inprep AI strictly disclaims psychological inference, emotion detection, honesty claims, or automated hiring decisions.
          </p>
        </div>
      </div>

    </div>
  );
};
