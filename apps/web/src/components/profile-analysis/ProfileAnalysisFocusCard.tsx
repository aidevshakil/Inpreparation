import React from 'react';
import { Target, ArrowRight } from 'lucide-react';

interface ProfileAnalysisFocusCardProps {
  onStartDrill?: (topic: string) => void;
}

export const ProfileAnalysisFocusCard: React.FC<ProfileAnalysisFocusCardProps> = ({
  onStartDrill,
}) => {
  const focusAreas = [
    {
      id: 1,
      number: '1',
      title: 'High-Concurrency CAP Trade-Off Articulation',
      priority: 'High Priority',
      priorityColor: '#f87171',
      priorityBg: 'rgba(239, 68, 68, 0.15)',
      priorityBorder: 'rgba(239, 68, 68, 0.3)',
      description:
        'Practice structured articulation of CAP theorem consistency models and latency trade-offs during live architectural whiteboard rounds.',
      buttonText: 'Start Drill Practice',
    },
    {
      id: 2,
      number: '2',
      title: 'Multi-Datacenter Disaster Recovery & Failover Strategies',
      priority: 'Priority: High',
      priorityColor: '#fbbf24',
      priorityBg: 'rgba(251, 191, 36, 0.15)',
      priorityBorder: 'rgba(251, 191, 36, 0.3)',
      description:
        'Deep dive into Kafka broker partition rebalancing, split-brain mitigation, and active-active database failover protocols.',
      buttonText: 'Select Practice',
    },
    {
      id: 3,
      number: '3',
      title: 'Cross-Functional Engineering Governance (STAR Framework)',
      priority: 'Priority: Medium',
      priorityColor: '#c084fc',
      priorityBg: 'rgba(168, 85, 247, 0.15)',
      priorityBorder: 'rgba(168, 85, 247, 0.3)',
      description:
        'Structure stories detailing technical trade-offs, conflict resolution with product managers, and junior mentorship.',
      buttonText: 'Select Practice',
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
          marginBottom: '6px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={18} style={{ color: '#818cf8' }} />
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Suggested Development &amp; Practice Focus
          </h3>
        </div>

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
          3 High-Yield Topics
        </span>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
        Targeted practice areas recommended to optimize your Staff Systems interview performance:
      </p>

      {/* 3 Focus Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {focusAreas.map((area) => (
          <div
            key={area.id}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  {area.number}. {area.title}
                </span>

                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    backgroundColor: area.priorityBg,
                    color: area.priorityColor,
                    border: `1px solid ${area.priorityBorder}`,
                  }}
                >
                  {area.priority}
                </span>
              </div>

              <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                {area.description}
              </p>
            </div>

            <button
              onClick={() => onStartDrill && onStartDrill(area.title)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '8px 14px',
                backgroundColor: area.id === 1 ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
                border: area.id === 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: area.id === 1 ? '0 2px 10px rgba(79, 70, 229, 0.3)' : 'none',
                flexShrink: 0,
              }}
            >
              <span>{area.buttonText}</span>
              <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
