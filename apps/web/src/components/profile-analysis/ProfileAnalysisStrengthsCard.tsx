import React from 'react';
import { Sparkles } from 'lucide-react';

export const ProfileAnalysisStrengthsCard: React.FC = () => {
  const strengths = [
    {
      title: 'Quantifiable Distributed Impact',
      citation: '[CV + Q1]',
      badgeColor: '#38bdf8',
      description: 'Demonstrated production experience reducing p99 tail latencies by 35% on critical settlement pipelines.',
    },
    {
      title: 'Event-Driven Rigor',
      citation: '[Q1: Deep Dive]',
      badgeColor: '#c084fc',
      description: 'Clear intuition regarding partition offsets, idempotency keys, and transactional outbox patterns.',
    },
    {
      title: 'Decisive Architecture Trade-offs',
      citation: '[Q4: Trade-offs]',
      badgeColor: '#818cf8',
      description: 'Articulated clear trade-offs between asynchronous event streaming vs synchronous gRPC calls under strict SLA.',
    },
    {
      title: 'Staff-Level Architectural Vision',
      citation: '[Career Goals]',
      badgeColor: '#34d399',
      description: 'Proactively preparing for multi-region active-active database failover and cross-team RFC governance.',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <Sparkles size={18} style={{ color: '#c084fc' }} />
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Evidence-Based Potential Strengths
        </h3>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
        Key technical signals extracted directly from your spoken explanations and CV metrics:
      </p>

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
              <span style={{ fontSize: '0.64rem', color: s.badgeColor, fontFamily: 'monospace', fontWeight: 600 }}>
                {s.citation}
              </span>
            </div>

            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.68rem', color: '#64748b', margin: 0 }}>
        * Insights are strictly fact-based. No psychological profiling or personality inference.
      </p>
    </div>
  );
};
