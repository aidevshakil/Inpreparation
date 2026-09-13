import React from 'react';

export const IntroResultPreparationFocusCard: React.FC = () => {
  const topics = [
    {
      number: 1,
      title: 'Distributed System Trade-Off Articulation',
      description:
        'Practice explicitly framing CAP theorem choices and data consistency constraints under strict latency SLAs during architecture rounds.',
    },
    {
      number: 2,
      title: 'Cross-Functional Leadership & Mentorship (STAR)',
      description:
        'Format past conflict resolution and architecture review stories into structured Staff behavioral frameworks.',
    },
    {
      number: 3,
      title: 'Failure Modes & Disaster Recovery Deep Dives',
      description:
        'Prepare detailed explanations for Kafka broker partition rebalancing and active-active database failover mechanisms.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
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
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Suggested Preparation Focus Areas
        </h3>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          3 High-Leverage Topics
        </span>
      </div>

      {/* 3 Numbered Focus Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {topics.map((t) => (
          <div
            key={t.number}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                color: '#a5b4fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.76rem',
                fontWeight: 800,
                flexShrink: 0,
                marginTop: '1px',
              }}
            >
              {t.number}
            </div>

            <div>
              <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 3px 0' }}>
                {t.title}
              </h4>
              <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
