import React from 'react';

interface DimensionItem {
  number: number;
  title: string;
  subtext: string;
  score: number;
  badge: string;
  badgeType: 'exemplar' | 'strong' | 'solid' | 'developing' | 'practice';
  barColor: string;
}

export const CommunicationDimensionsCard: React.FC = () => {
  const dimensions: DimensionItem[] = [
    {
      number: 1,
      title: 'Topical Relevance & Prompt Alignment',
      subtext: 'Direct response to core question, zero tangential drift on executive-level framing.',
      score: 86.2,
      badge: 'Exemplar',
      badgeType: 'exemplar',
      barColor: 'linear-gradient(90deg, #818cf8, #c084fc)',
    },
    {
      number: 2,
      title: 'Answer Clarity & Conceptual Framing',
      subtext: 'Lucid articulation of interface definitions without reliance on vague acronyms.',
      score: 84.6,
      badge: 'Strong',
      badgeType: 'strong',
      barColor: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    },
    {
      number: 3,
      title: 'Logical Structuring (Situation + Decision + Trade-off)',
      subtext: 'Deductive progression: framing premise, validating trade-offs, concluding with metrics.',
      score: 81.5,
      badge: 'Solid',
      badgeType: 'solid',
      barColor: 'linear-gradient(90deg, #4f46e5, #6366f1)',
    },
    {
      number: 4,
      title: 'Response Conciseness & Information Density',
      subtext: 'Minor verbosity in secondary explanations; 11% words over the recommended.',
      score: 79.0,
      badge: 'Developing',
      badgeType: 'developing',
      barColor: 'linear-gradient(90deg, #64748b, #94a3b8)',
    },
    {
      number: 5,
      title: 'Exhaustive Completeness & Boundary Coverage',
      subtext: 'Frequently omits requisite fallback modes and realistic failure retry backoffs.',
      score: 76.4,
      badge: 'Needs Deliberate Practice',
      badgeType: 'practice',
      barColor: 'linear-gradient(90deg, #ef4444, #f97316)',
    },
  ];

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Evaluated Communication Dimensions
        </h3>
        <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px' }}>
          5 RUBRIC POINTS
        </span>
      </div>
      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
        Detailed breakdown of objective verbal structuring rubrics.
      </p>

      {/* Dimensions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {dimensions.map((dim) => {
          return (
            <div
              key={dim.number}
              style={{
                background: 'rgba(255, 255, 255, 0.015)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: dim.badgeType === 'practice' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                      color: dim.badgeType === 'practice' ? '#f87171' : '#a5b4fc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                    }}
                  >
                    {dim.number}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                    {dim.title}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>
                    {dim.score.toFixed(1)}
                  </span>
                  {dim.badgeType === 'exemplar' ? (
                    <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#c084fc', background: 'rgba(168, 85, 247, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                      {dim.badge}
                    </span>
                  ) : dim.badgeType === 'strong' ? (
                    <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                      {dim.badge}
                    </span>
                  ) : dim.badgeType === 'solid' ? (
                    <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#818cf8', background: 'rgba(99, 102, 241, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                      {dim.badge}
                    </span>
                  ) : dim.badgeType === 'developing' ? (
                    <span style={{ fontSize: '0.64rem', fontWeight: 600, color: '#94a3b8', background: 'rgba(255, 255, 255, 0.06)', padding: '2px 8px', borderRadius: '4px' }}>
                      {dim.badge}
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#f87171', background: 'rgba(239, 68, 68, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                      {dim.badge}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '8px', paddingLeft: '28px' }}>
                {dim.subtext}
              </div>

              {/* Progress bar */}
              <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '100px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${dim.score}%`,
                    height: '100%',
                    background: dim.barColor,
                    borderRadius: '100px',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
