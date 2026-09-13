import React from 'react';

export const PipelineWhatHappensNextCard: React.FC = () => {
  const nextMilestones = [
    {
      number: 1,
      title: 'Synthesized Career Profile',
      description: 'Structured dossier with verified technical competencies.',
    },
    {
      number: 2,
      title: 'Personalized Mock Drills',
      description: 'Tailored drill pathways targeted for Staff/Principal scale.',
    },
    {
      number: 3,
      title: 'Competency Radar Benchmark',
      description: 'Baseline 8-vector systems engineering taxonomy map.',
    },
    {
      number: 4,
      title: 'Interactive Practice Hub',
      description: 'Access realistic adaptive mock rounds with on-demand AI coaches.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 6px 0' }}>
        What Happens Next
      </h4>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
        Upon completion, the engine unlocks 4 actionable diagnostic milestones:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {nextMilestones.map((m) => (
          <div key={m.number} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '6px',
                backgroundColor: 'rgba(99, 102, 241, 0.18)',
                color: '#a5b4fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.72rem',
                fontWeight: 700,
                flexShrink: 0,
                marginTop: '1px',
              }}
            >
              {m.number}
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                {m.title}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
                {m.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
