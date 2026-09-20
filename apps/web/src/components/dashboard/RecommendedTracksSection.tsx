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
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
              Recommended For You
            </h2>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(99, 102, 241, 0.18)',
                color: '#818cf8',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              AI Matched
            </span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>
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
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.25s ease',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--primary-color)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
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
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-surface)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {track.questionsCount} Questions
                </span>
              </div>

              {/* Title & Level */}
              <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                {track.title}
              </h3>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '14px' }}>
                {track.levelDesc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.68rem',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--bg-surface)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-subtle)',
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
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{track.trackCategory}</span>

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
                      : '1px solid var(--border-subtle)',
                  backgroundColor:
                    track.actionVariant === 'primary'
                      ? 'var(--primary-color)'
                      : 'var(--bg-surface)',
                  color: track.actionVariant === 'primary' ? '#ffffff' : 'var(--text-main)',
                  boxShadow:
                    track.actionVariant === 'primary'
                      ? '0 2px 10px rgba(79, 70, 229, 0.35)'
                      : 'none',
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
