import React from 'react';

export const IntroResultPotentialStrengthsCard: React.FC = () => {
  const strengths = [
    {
      title: 'Quantifiable Distributed Impact',
      citation: '[CV + Q1]',
      description: 'Demonstrated experience reducing tail latencies by 35% on critical settlement flows.',
    },
    {
      title: 'Event-Driven Architecture',
      citation: '[Q1: Deep Dive]',
      description: 'Strong intuition regarding partition offsets, idempotency keys, and outbox patterns.',
    },
    {
      title: 'Clear Decision Rationale',
      citation: '[Q4: Trade-offs]',
      description: 'Articulated concrete trade-offs between asynchronous queues vs synchronous gRPC calls.',
    },
    {
      title: 'Staff-Level Trajectory',
      citation: '[Career Goals]',
      description: 'Proactively seeking system design rigor and multi-team technical alignment challenges.',
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
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Potential Strengths in Your Provided Profile
        </h3>

        <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
          Confidence: Direct
        </span>
      </div>

      {/* 2x2 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
          marginBottom: '14px',
        }}
      >
        {strengths.map((s, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>
                {s.title}
              </div>
              <span style={{ fontSize: '0.64rem', color: '#818cf8', fontFamily: 'monospace' }}>
                {s.citation}
              </span>
            </div>

            <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.68rem', color: '#64748b', margin: 0 }}>
        * Strengths are derived strictly from your stated technical facts and spoken examples, not personality or intelligence metrics.
      </p>
    </div>
  );
};
