import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Quote, RotateCcw } from 'lucide-react';

interface PracticeAndCoachSectionProps {
  onContinuePractice?: () => void;
  onRestartPractice?: () => void;
  onViewImprovementPlan?: () => void;
}

export const PracticeAndCoachSection: React.FC<PracticeAndCoachSectionProps> = ({
  onContinuePractice,
  onRestartPractice,
  onViewImprovementPlan,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '18px',
        marginBottom: '24px',
      }}
    >
      {/* Left Card: Continue Your Practice */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#f59e0b',
                  boxShadow: '0 0 10px #f59e0b',
                }}
              />
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  color: '#fbbf24',
                  textTransform: 'uppercase',
                }}
              >
                Continue Your Practice
              </span>
            </div>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Last practiced: 45m ago</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Python Backend Developer
            </h3>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                whiteSpace: 'nowrap',
              }}
            >
              3 of 5 Completed
            </span>
          </div>

          <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '4px 0 14px 0' }}>
            Senior Level • Concurrency, Celery workers & async SQLAlchemy
          </p>

          {/* Active Question Box */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '12px',
              padding: '12px 14px',
              marginBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 500 }}>
                Question 4: <strong style={{ color: '#ffffff' }}>&quot;Designing a fault-tolerant job queue with Redis &amp; Kafka&quot;</strong>
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#818cf8', marginLeft: '8px' }}>
                60%
              </span>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                  borderRadius: '9999px',
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer info and Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#34d399' }}>
            <CheckCircle size={13} color="#10b981" />
            <span>Recorded answers safely synced in sandbox</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onRestartPractice}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                fontSize: '0.75rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <RotateCcw size={12} />
              <span>Restart</span>
            </button>

            <button
              onClick={onContinuePractice}
              style={{
                padding: '7px 16px',
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.35)',
              }}
            >
              <span>Continue Interview</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Card: AI Coach Insight */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '7px',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c084fc',
                }}
              >
                <Sparkles size={14} />
              </div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                AI Coach Insight
              </h3>
            </div>

            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#d8b4fe',
              }}
            >
              Personalized
            </span>
          </div>

          {/* Quote Box */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px',
              position: 'relative',
              marginBottom: '14px',
            }}
          >
            <Quote
              size={20}
              style={{
                color: 'rgba(168, 85, 247, 0.35)',
                position: 'absolute',
                top: '12px',
                left: '12px',
              }}
            />
            <p
              style={{
                fontSize: '0.84rem',
                color: '#e2e8f0',
                lineHeight: 1.55,
                fontStyle: 'italic',
                paddingLeft: '22px',
                margin: 0,
              }}
            >
              &quot;Your technical answers are thoroughly sound on core complexity, but your explanations can be more structured. Focus on explaining the high-level trade-offs before jumping straight into code implementation.&quot;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.72rem',
          }}
        >
          <span style={{ color: '#64748b' }}>Generated from Q3 analysis</span>
          <button
            onClick={onViewImprovementPlan}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#a855f7',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: 0,
            }}
          >
            <span>View Improvement Plan</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
