import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RecommendedTrack {
  id: string;
  matchScore: number;
  badgeColor: string;
  questionsCount: number;
  title: string;
  levelDesc: string;
  tags: string[];
  trackCategory: string;
  actionText: string;
  actionVariant: 'primary' | 'secondary';
}

interface RecommendedTracksSectionProps {
  onSelectTrack?: (trackId: string) => void;
  onExploreLibrary?: () => void;
}

export const RecommendedTracksSection: React.FC<RecommendedTracksSectionProps> = ({
  onSelectTrack,
  onExploreLibrary,
}) => {
  const tracks: RecommendedTrack[] = [
    {
      id: 'python-backend',
      matchScore: 98,
      badgeColor: '#10b981',
      questionsCount: 5,
      title: 'Python Backend Developer',
      levelDesc: 'Intermediate to Senior Level • Focus on REST, concurrency, and DB optimization.',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs'],
      trackCategory: 'Technical + System',
      actionText: 'Practice Now',
      actionVariant: 'primary',
    },
    {
      id: 'ml-engineer',
      matchScore: 93,
      badgeColor: '#38bdf8',
      questionsCount: 5,
      title: 'Machine Learning Engineer',
      levelDesc: 'Intermediate Level • Model deployment, feature pipelines, and inference scaling.',
      tags: ['Python', 'PyTorch', 'Docker', 'MLOps'],
      trackCategory: 'Technical + Architecture',
      actionText: 'View Interview',
      actionVariant: 'secondary',
    },
    {
      id: 'flutter-mobile',
      matchScore: 87,
      badgeColor: '#a855f7',
      questionsCount: 5,
      title: 'Flutter & Mobile Systems',
      levelDesc: 'Intermediate Level • State architecture (Bloc/Provider), offline sync & UI.',
      tags: ['Flutter', 'Dart', 'Firebase', 'State Mgmt'],
      trackCategory: 'Engineering + Product',
      actionText: 'Practice Now',
      actionVariant: 'primary',
    },
  ];

  return (
    <section style={{ marginBottom: '24px' }}>
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Recommended For You
            </h2>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(99, 102, 241, 0.18)',
                color: '#a5b4fc',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              AI Matched
            </span>
          </div>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
            Based on your parsed CV, verified backend skills, and previous 5-question performance.
          </p>
        </div>

        <button
          onClick={onExploreLibrary}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 0',
          }}
        >
          <span>Explore All In Library</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* 3-Card Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '16px',
        }}
      >
        {tracks.map((track) => (
          <div
            key={track.id}
            style={{
              backgroundColor: 'rgba(14, 18, 28, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '16px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            }}
          >
            <div>
              {/* Match Badge & Question Count */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 9px',
                    borderRadius: '9999px',
                    backgroundColor: `${track.badgeColor}18`,
                    color: track.badgeColor,
                    border: `1px solid ${track.badgeColor}35`,
                  }}
                >
                  {track.matchScore}% Match
                </span>

                <span
                  style={{
                    fontSize: '0.7rem',
                    color: '#94a3b8',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {track.questionsCount} Questions
                </span>
              </div>

              {/* Title & Level */}
              <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
                {track.title}
              </h3>
              <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.4, marginBottom: '14px' }}>
                {track.levelDesc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.68rem',
                      color: '#cbd5e1',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer and CTA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{track.trackCategory}</span>

              <button
                onClick={() => onSelectTrack && onSelectTrack(track.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border:
                    track.actionVariant === 'primary'
                      ? 'none'
                      : '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor:
                    track.actionVariant === 'primary'
                      ? '#4f46e5'
                      : 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  boxShadow:
                    track.actionVariant === 'primary'
                      ? '0 2px 10px rgba(79, 70, 229, 0.35)'
                      : 'none',
                  transition: 'all 0.18s ease',
                }}
              >
                {track.actionText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
