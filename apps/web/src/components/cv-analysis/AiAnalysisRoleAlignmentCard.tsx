import React from 'react';

export interface CareerPath {
  title: string;
  matchScore: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
  description: string;
  actionLink?: string;
}

interface AiAnalysisRoleAlignmentCardProps {
  initialPaths?: CareerPath[];
  onSelectRole?: (roleTitle: string) => void;
}

export const AiAnalysisRoleAlignmentCard: React.FC<AiAnalysisRoleAlignmentCardProps> = ({
  initialPaths,
  onSelectRole,
}) => {
  const paths: CareerPath[] = (initialPaths && initialPaths.length > 0) ? initialPaths : [
    {
      title: 'Senior Python Backend Engineer',
      matchScore: '98% High Alignment',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeColor: '#34d399',
      badgeBorder: 'rgba(16, 185, 129, 0.3)',
      description:
        'Strong match: Extensive FastAPI, Apache Kafka streaming, PostgreSQL partitioning, and 12k+ QPS scale over 3.5+ years.',
      actionLink: 'Auto-calibrating 1-Question Onboarding >',
    },
    {
      title: 'Distributed Systems Architect',
      matchScore: '91% Good Alignment',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      badgeColor: '#38bdf8',
      badgeBorder: 'rgba(56, 189, 248, 0.3)',
      description:
        'Good match: Go & distributed saga action handling/Saga pattern & multi-region AWS high availability experience.',
    },
    {
      title: 'Senior Mobile (Flutter) Lead',
      matchScore: '84% Moderate Alignment',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeColor: '#fbbf24',
      badgeBorder: 'rgba(245, 158, 11, 0.3)',
      description:
        'Prior mobile prowess with clean state transition, though more work is needed towards backend microservices.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
          }}
        />
        <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
          Role Alignment &amp; Suggested Paths
        </h3>
      </div>

      <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', margin: '0 0 16px 0' }}>
        Potential career trajectories suggested by detected CV experience vectors.
      </p>

      {/* Path List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {paths.map((path, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '14px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '6px',
              }}
            >
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {path.title}
              </span>

              <span
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: path.badgeBg,
                  color: path.badgeColor,
                  border: `1px solid ${path.badgeBorder}`,
                }}
              >
                {path.matchScore}
              </span>
            </div>

            <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: '0 0 8px 0' }}>
              {path.description}
            </p>

            {path.actionLink && (
              <button
                onClick={() => onSelectRole && onSelectRole(path.title)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--primary-color)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <span>{path.actionLink}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
