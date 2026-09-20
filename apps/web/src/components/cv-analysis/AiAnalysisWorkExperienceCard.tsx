import React from 'react';
import { Plus, CheckCircle2, AlertCircle, TrendingUp, Layers, ExternalLink } from 'lucide-react';

export interface WorkExperienceEntry {
  title: string;
  badge?: string;
  company: string;
  location: string;
  duration: string;
  tenureScore: string;
  bullets: string[];
  stack: string[];
  metricsCount: number;
}

interface AiAnalysisWorkExperienceCardProps {
  initialExperiences?: WorkExperienceEntry[];
  onAddRole?: () => void;
  onEditExperience?: (index: number) => void;
}

export const AiAnalysisWorkExperienceCard: React.FC<AiAnalysisWorkExperienceCardProps> = ({
  initialExperiences,
  onAddRole,
  onEditExperience,
}) => {
  const experiences: WorkExperienceEntry[] = (initialExperiences && initialExperiences.length > 0)
    ? initialExperiences
    : [
    {
      title: 'Senior Backend Engineer',
      badge: 'Current Role',
      company: 'FinScale Labs',
      location: 'San Francisco, CA (Remote)',
      duration: 'Jan 2023 — Present',
      tenureScore: '1.1 yr / 98%',
      bullets: [
        'Architected and delivered real-time microservices using FastAPI and Kafka, scaling from 2,000 QPS to 12,000+ QPS under peak transactional load.',
        'Migrated monolithic billing data structures into partitioned PostgreSQL and Redis write-through caching, reducing P99 query latency by 34%.',
        'Maintained 99.98% service uptime across 4 AWS multi-AZ regions with automated dead-letter queue re-drive handlers.',
      ],
      stack: ['Python', 'FastAPI', 'Apache Kafka', 'PostgreSQL'],
      metricsCount: 2,
    },
    {
      title: 'Software Engineer (Mobile & Backend)',
      company: 'Prime Tech Solutions',
      location: 'Dhaka, Bangladesh',
      duration: 'Jan 2021 — Dec 2022',
      tenureScore: '1.11 yr / 95%',
      bullets: [
        'Built responsive cross-platform client for fintech mobile wallet using Flutter (BLoC pattern), serving 150k active monthly users.',
        'Implemented secure biometric authentication & SQLite offline state synchronization engine.',
        'Created intermediate REST endpoints in Python/Django for KYC verification and push notification delivery.',
      ],
      stack: ['Flutter', 'Dart', 'Django', 'SQLite'],
      metricsCount: 1,
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#818cf8' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            Extracted Work Experience
          </h3>
        </div>

        <button
          onClick={onAddRole}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '5px 12px',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Plus size={12} />
          <span>Add Missing Role</span>
        </button>
      </div>

      <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', margin: '0 0 18px 0' }}>
        Chronological career data extracted from bullet points and tech stacks.
      </p>

      {/* Experience Entries */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px 18px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>{exp.title}</span>
                  {exp.badge && (
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        padding: '1px 7px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        color: '#059669',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <span style={{ fontWeight: 600 }}>{exp.company}</span>
                  <span style={{ margin: '0 6px', color: 'var(--text-muted)' }}>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-main)', fontWeight: 600 }}>{exp.duration}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({exp.tenureScore})</span>
                <button
                  onClick={() => onEditExperience && onEditExperience(idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                  title="Edit entry"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>

            {/* Bullets */}
            <ul style={{ margin: '10px 0', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.55 }}>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Stack chips & metrics link */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>Detected Stack:</span>
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.68rem',
                      padding: '2px 8px',
                      borderRadius: '5px',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>
                <TrendingUp size={12} />
                <span>{exp.metricsCount} Scale Metrics Extracted</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Synthesis & Observations Box */}
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '14px 16px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <Layers size={13} style={{ color: 'var(--primary-color)' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary-color)', letterSpacing: '0.6px' }}>
            AI SYNTHESIS &amp; OBSERVATIONS
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
            Discovered directly from factual resume text
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {/* Verified Strengths */}
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <CheckCircle2 size={13} style={{ color: '#059669' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669' }}>Verified Strengths</span>
            </div>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
              Solid progression from mobile UI engineer into distributed backend architecture. Explicit throughput numbers (12k QPS) present.
            </p>
          </div>

          {/* Polish Opportunity */}
          <div
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <AlertCircle size={13} style={{ color: '#d97706' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706' }}>Polish Opportunity</span>
            </div>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
              Measure more cost/impact: give actual dollar savings or head reduction percentages to match Staff-role expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
