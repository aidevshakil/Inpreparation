import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroResultPossibleTracksCardProps {
  onSelectTrack?: (trackName: string) => void;
  targetRole?: string;
}

export const IntroResultPossibleTracksCard: React.FC<IntroResultPossibleTracksCardProps> = ({
  onSelectTrack,
  targetRole = 'General Assessment',
}) => {
  const tracks = [
    {
      id: 'target-role-track',
      tag: 'High Match • Recommended',
      isRecommended: true,
      promptsCount: '6 Adaptive Prompts',
      title: targetRole,
      description: `Targeted practice for ${targetRole} level expectations.`,
    },
    {
      id: 'distributed-systems',
      tag: 'Technical Deep Dive',
      isRecommended: false,
      promptsCount: '5 Prompts',
      title: 'Distributed Systems & High-Throughput',
      description: 'Kafka partition failover, event sourcing, idempotency, and database sharding trade-offs.',
    },
    {
      id: 'leadership-reviews',
      tag: 'Behavioral & Systems',
      isRecommended: false,
      promptsCount: '5 Prompts',
      title: 'Engineering Leadership & Tech Reviews',
      description: 'Evaluating engineering trade-offs with product teams and unblocking architectural deadlocks.',
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
          marginBottom: '6px',
        }}
      >
        <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Possible Practice Tracks
        </h4>

        <span style={{ fontSize: '0.68rem', color: '#64748b' }}>4 Tailored</span>
      </div>

      <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
        Adaptive interview tracks matched to your background:
      </p>

      {/* 3 Track Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tracks.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundColor: t.isRecommended ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.02)',
              border: t.isRecommended ? '1px solid rgba(129, 140, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.64rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: t.isRecommended ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  color: t.isRecommended ? '#c084fc' : '#94a3b8',
                  border: t.isRecommended ? '1px solid rgba(129, 140, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {t.tag}
              </span>

              <span style={{ fontSize: '0.66rem', color: '#64748b' }}>
                {t.promptsCount}
              </span>
            </div>

            <h5 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
              {t.title}
            </h5>

            <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4, margin: '0 0 12px 0' }}>
              {t.description}
            </p>

            <button
              onClick={() => onSelectTrack && onSelectTrack(t.title)}
              style={{
                width: '100%',
                padding: '7px 12px',
                backgroundColor: t.isRecommended ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
                border: t.isRecommended ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                boxShadow: t.isRecommended ? '0 2px 10px rgba(79, 70, 229, 0.3)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span>Explore Track</span>
              <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
