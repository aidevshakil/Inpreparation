import React from 'react';

interface RubricItem {
  id: string;
  name: string;
  weight: number;
  score: number;
  ratingLabel: string;
  ratingColor: string;
  progressGradient: string;
  description: string;
}

const RUBRIC_ITEMS: RubricItem[] = [
  {
    id: 'tech_depth',
    name: 'Technical Depth & Precision',
    weight: 25,
    score: 85,
    ratingLabel: 'Strong',
    ratingColor: '#38bdf8',
    progressGradient: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    description:
      'Accurate event-loop internals, subinterpreters concurrency, zero syntax or architectural hallucinations.',
  },
  {
    id: 'sys_arch',
    name: 'System Architecture & Trade-Offs',
    weight: 25,
    score: 86,
    ratingLabel: 'Strong',
    ratingColor: '#38bdf8',
    progressGradient: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    description:
      'Addressed connection pool saturation ceilings, circuit breaker degradation, and fallback failure boundaries.',
  },
  {
    id: 'prob_decomp',
    name: 'Problem Decomposition & Edge Handling',
    weight: 20,
    score: 78,
    ratingLabel: 'Developing',
    ratingColor: '#fbbf24',
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    description:
      'Race conditions isolated; edge handling during retry throttling ceiling required more explicit mathematical constraints.',
  },
  {
    id: 'exec_art',
    name: 'Executive Articulation & Framing',
    weight: 15,
    score: 82,
    ratingLabel: 'Solid',
    ratingColor: '#818cf8',
    progressGradient: 'linear-gradient(90deg, #6366f1, #a855f7)',
    description:
      'Pyramid principle applied effectively; lead with high-impact conclusions before elaborating on mechanisms.',
  },
  {
    id: 'pres_framing',
    name: 'Observable Presentation Framing',
    weight: 15,
    score: 80,
    ratingLabel: 'Optimal',
    ratingColor: '#34d399',
    progressGradient: 'linear-gradient(90deg, #10b981, #06b6d4)',
    description:
      'Stable 1080p webcam framing, eye-line ratio 0.82. None: Zero psychometric profiling; raw presentation posture framing.',
  },
];

export const InterviewResultRubricBreakdown: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#0c0f17',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '24px 28px',
        marginBottom: '24px',
        background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.7) 0%, rgba(12, 15, 23, 0.95) 100%)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Title & Overall Weight Summary */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0' }}>
          Performance Rubric Breakdown
        </h3>
        <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
          Deterministic evaluation against 5 Staff L6 calibrated engineering competence weights.{' '}
          <span style={{ color: '#c7d2fe', fontWeight: 600 }}>Overall: 82.2% Weighted</span>
        </p>
      </div>

      {/* 5 Rubric Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {RUBRIC_ITEMS.map((item) => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Row Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
                  {item.name}
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    color: '#94a3b8',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {item.weight}% weight
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f8fafc' }}>
                  {item.score} / 100
                </span>
                <span style={{ color: '#64748b', fontSize: '0.8rem' }}>•</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: item.ratingColor }}>
                  {item.ratingLabel}
                </span>
              </div>
            </div>

            {/* Progress Track */}
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '9999px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${item.score}%`,
                  height: '100%',
                  background: item.progressGradient,
                  borderRadius: '9999px',
                  transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: `0 0 10px ${item.ratingColor}40`,
                }}
              />
            </div>

            {/* Rubric Description */}
            <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '2px 0 0 0', lineHeight: 1.5 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
