import React from 'react';

export const IntroRoomSessionFlowCard: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Answer 6–8 Targeted Questions',
      description:
        'Share insights into your current architecture stack, projects, and target role level (Staff / Senior Backend).',
    },
    {
      number: 2,
      title: 'Use Selected Response Mode',
      description:
        'Deliver answers via live video feed, microphone-only voice capture, or structured text responses.',
    },
    {
      number: 3,
      title: 'Review Your Spoken Responses',
      description:
        'Automated high-fidelity speech-to-text lets you preview, re-record, or polish your answer before proceeding.',
    },
    {
      number: 4,
      title: 'Synthesize Personalized Roadmap',
      description:
        'Generates your customized AI Competency Radar, strengths profile, and tailored mock interview recommendations.',
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
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#818cf8',
              boxShadow: '0 0 8px #818cf8',
            }}
          />
          <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            WHAT TO EXPECT IN THIS SESSION
          </h3>
        </div>

        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Structured Flow</span>
      </div>

      {/* 2x2 Grid of Step Boxes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '12px',
        }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                color: '#a5b4fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.76rem',
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {step.number}
            </div>

            <div>
              <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
