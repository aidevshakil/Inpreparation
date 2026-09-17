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
    score: 86,
    ratingLabel: 'Strong',
    ratingColor: '#38bdf8',
    progressGradient: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    description:
      'Accurate internal usage of asyncio, bypass interpreters concurrency race conditions and executed solid calculations.',
  },
  {
    id: 'sys_arch',
    name: 'System Architecture & Trade-Offs',
    weight: 25,
    score: 84,
    ratingLabel: 'Strong',
    ratingColor: '#38bdf8',
    progressGradient: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    description:
      'Addressed connection pool starvation mitigations, virtual thread scaling variations, and caveats in SLA boundaries.',
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
      'Race conditions isolated; edge handling during retry throttling and hashing required more explicit mathematical constraints.',
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
      'Pyramid principle applied effectively; lead with high-impact conclusions before elaborating on mechanics.',
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
      'Stable 1080p webcam framing, eye-line ratio 0.62. Non-verbal centering signals strong presence and structured expressive pacing.',
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
          Deterministic evaluation aligned to Staff L6 calibrated engineering interview rubric weights.{' '}
          <span style={{ color: '#c7d2fe', fontWeight: 600 }}>Overall: 82.2% Weighted</span>
        </p>
      </div>

      {/* 5 Rubric Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {RUBRIC_ITEMS.map((item) => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Row Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 600, color: '#f8fafc' }}>{item.name}</span>
                <span style={{ color: '#64748b', fontSize: '0.75rem' }}>({item.weight}% Weight)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#f8fafc' }}>{item.score} / 100</span>
                <span style={{ color: '#64748b' }}>•</span>
                <span style={{ color: item.ratingColor, fontWeight: 700 }}>{item.ratingLabel}</span>
              </div>
            </div>

            {/* Custom Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '9999px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: `${item.score}%`,
                  height: '100%',
                  background: item.progressGradient,
                  borderRadius: '9999px',
                  boxShadow: `0 0 10px ${item.ratingColor}40`,
                  transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </div>

            {/* Descriptive Rationale */}
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
