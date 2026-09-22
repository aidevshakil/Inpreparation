import React from 'react';
import { Shield, Sparkles, TrendingUp } from 'lucide-react';

export const AuthReadinessPreview: React.FC = () => {
  const vectors = [
    { label: 'Technical Accuracy', score: 86, color: '#818cf8' },
    { label: 'Communication & Structure', score: 81, color: '#38bdf8' },
    { label: 'Speech Cadence (142 WPM)', score: 84, color: '#fbbf24' },
    { label: 'Presentation & Framing', score: 85, color: '#34d399' }
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
          marginBottom: '16px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', display: 'inline-block' }} />
          <span>MULTIMODAL INTERVIEW COACHING</span>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '12px'
        }}>
          Practice Smarter. Improve Faster.
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '14.5px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          margin: 0
        }}>
          Use AI-powered interview practice, multimodal feedback, and personalized improvement plans to build real interview confidence.
        </p>
      </div>

      {/* Main Interactive HUD Card */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '24px',
        padding: '28px 26px',
        boxShadow: 'var(--shadow-md)'
      }}>
        
        {/* Simulation Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--border-subtle)',
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
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                Full Stack Engineering Simulation
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                5–Question Calibrated Session • Recent Result
              </div>
            </div>
          </div>

          <span style={{
            fontSize: '10px',
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: '6px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em'
          }}>
            DEMO UI
          </span>
        </div>

        {/* 2 Big Metric Scores */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          marginBottom: '22px'
        }}>
          {/* Overall Score */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '16px 18px'
          }}>
            <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Overall Session Score
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                82
              </span>
              <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/ 100</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: '#10b981', fontWeight: 600 }}>
              <TrendingUp size={13} />
              <span>+14 pts over last attempt</span>
            </div>
          </div>

          {/* Readiness Calibration */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '16px 18px'
          }}>
            <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Readiness Calibration
            </div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-color)', letterSpacing: '-0.02em', marginBottom: '4px', marginTop: '4px' }}>
              Staff Tier
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
              Top 12% in System Concurrency
            </div>
          </div>
        </div>

        {/* Multimodal Evaluation Vectors */}
        <div style={{ marginBottom: '22px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '14px'
          }}>
            <span>MULTIMODAL EVALUATION VECTORS</span>
            <span style={{ color: 'var(--primary-color)' }}>4 DIMENSIONS</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {vectors.map((vec, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: vec.color, display: 'inline-block' }} />
                    <span>{vec.label}</span>
                  </div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 700 }}>
                    {vec.score} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>/ 100</span>
                  </div>
                </div>

                {/* Progress Track */}
                <div style={{
                  height: '6px',
                  borderRadius: '100px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
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

        {/* Recommended Next Drill Box */}
        <div style={{
          background: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '12px',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '26px',
            height: '26px',
            borderRadius: '6px',
            background: 'rgba(99, 102, 241, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Sparkles size={14} color="#818cf8" />
          </div>

          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            <strong style={{ color: 'var(--text-main)' }}>Recommended Next Drill:</strong> "Quantify trade-offs when transitioning from async Celery tasks to event-driven Kafka workers."
          </p>
        </div>

      </div>

      {/* Responsible AI Transparency Box */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
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
          background: 'rgba(56, 189, 248, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Shield size={16} color="#38bdf8" />
        </div>

        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
            Responsible AI & Multimodal Transparency
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
            Feedback is derived solely from observable technical responses, acoustic speech pacing, and camera framing hygiene. Inprep AI strictly disclaims psychological inference, emotion detection, honesty claims, or automated hiring decisions.
          </p>
        </div>
      </div>

    </div>
  );
};
