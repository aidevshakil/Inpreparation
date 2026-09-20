import React from 'react';
import { Server, Award, GitBranch, Brain, Compass, Bookmark, ArrowRight } from 'lucide-react';

interface RecommendedInterviewsExploreDomainsProps {
  onBrowseLibrary?: () => void;
  onViewSaved?: () => void;
  onSelectDomain?: (domain: string) => void;
  targetRole?: string;
  savedCount?: number;
}

export const RecommendedInterviewsExploreDomains: React.FC<RecommendedInterviewsExploreDomainsProps> = ({
  onBrowseLibrary,
  onViewSaved,
  onSelectDomain,
  targetRole = 'Target Role',
  savedCount = 0,
}) => {
  const domains = [
    {
      id: 'distributed-infra',
      title: 'Distributed Systems & Cloud Infra',
      count: '14 Interviews',
      icon: <Server size={18} style={{ color: '#38bdf8' }} />,
      description: 'Consensus, partitioning, scale, and high-availability.',
    },
    {
      id: 'staff-leadership',
      title: 'Staff & Principal IC Leadership',
      count: '8 Interviews',
      icon: <Award size={18} style={{ color: '#c084fc' }} />,
      description: 'Design reviews, conflict resolution, executive RFCs.',
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Streaming',
      count: '12 Interviews',
      icon: <GitBranch size={18} style={{ color: '#818cf8' }} />,
      description: 'Kafka pipelines, schema evolution, and lakehouses.',
    },
    {
      id: 'applied-ai',
      title: 'Applied AI & ML Systems',
      count: '9 Interviews',
      icon: <Brain size={18} style={{ color: '#34d399' }} />,
      description: 'LLM latency, vector indexing, and pipeline eval.',
    },
  ];

  return (
    <div style={{ marginBottom: '28px' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
            Explore by Career Direction
          </h3>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            — Curated tracks aligned with your trajectory
          </span>
        </div>

        <button
          onClick={onBrowseLibrary}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--primary-color)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>Explore All 8 Domains</span>
          <ArrowRight size={12} />
        </button>
      </div>

      {/* 4 Domain Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        {domains.map((d) => (
          <div
            key={d.id}
            onClick={() => onSelectDomain && onSelectDomain(d.title)}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {d.icon}
              </div>

              <span
                style={{
                  fontSize: '0.62rem',
                  color: 'var(--text-secondary)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {d.count}
              </span>
            </div>

            <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 4px 0' }}>
              {d.title}
            </h4>

            <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
              {d.description}
            </p>
          </div>
        ))}
      </div>

      {/* Explore Beyond & Saved Box Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
          gap: '14px',
        }}
      >
        {/* Explore Beyond */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                color: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Compass size={18} />
            </div>

            <div>
              <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 2px 0' }}>
                Want to explore beyond customized recommendations?
              </h4>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0 }}>
                Access all 48+ simulation tracks spanning 12 specialized disciplines.
              </p>
            </div>
          </div>

          <button
            onClick={onBrowseLibrary}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--primary-color)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.76rem',
              fontWeight: 600,
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)'
            }}
          >
            Browse Library (48+)
          </button>
        </div>

        {/* Saved Simulation */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Bookmark size={16} style={{ color: '#c084fc' }} fill="#c084fc" />
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {savedCount} Saved Simulation{savedCount !== 1 ? 's' : ''}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                {targetRole}
              </div>
            </div>
          </div>

          <button
            onClick={onViewSaved}
            style={{
              padding: '6px 14px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: 'var(--text-main)',
              fontSize: '0.74rem',
              cursor: 'pointer',
            }}
          >
            View Saved
          </button>
        </div>
      </div>
    </div>
  );
};
