import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProfileAnalysisCareerDirectionsCardProps {
  onSelectTrack?: (trackName: string) => void;
  targetRole?: string;
}

export const ProfileAnalysisCareerDirectionsCard: React.FC<ProfileAnalysisCareerDirectionsCardProps> = ({
  onSelectTrack,
  targetRole = 'Target Role',
}) => {
  const tracks = [
    {
      id: 'target-role-track',
      title: targetRole,
      match: '94% Match • Recommended',
      isRecommended: true,
      description: `Targeted practice for ${targetRole} level expectations and system design.`,
      drillsCount: '6 Drills',
    },
    {
      id: 'distributed-systems',
      title: 'High-Throughput Distributed Systems',
      match: '88% Match',
      isRecommended: false,
      description: 'Kafka streaming, database sharding, and latency optimization.',
      drillsCount: '5 Drills',
    },
    {
      id: 'tech-lead',
      title: 'Tech Lead / Engineering Leadership',
      match: '84% Match',
      isRecommended: false,
      description: 'Cross-functional technical governance, engineering RFCs, and mentoring.',
      drillsCount: '5 Drills',
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
          Possible Career Directions
        </h4>

        <span style={{ fontSize: '0.68rem', color: '#64748b' }}>4 Tracks</span>
      </div>

      <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
        Calibrated career paths aligned with your background:
      </p>

      {/* 3 Track Tiles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tracks.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundColor: t.isRecommended ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.02)',
              border: t.isRecommended ? '1px solid rgba(129, 140, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <h5 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                {t.title}
              </h5>

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
                {t.match}
              </span>
            </div>

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
              <span>Explore Track ({t.drillsCount})</span>
              <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
