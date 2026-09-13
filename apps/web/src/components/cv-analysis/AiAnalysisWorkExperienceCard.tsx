import React from 'react';
import { Plus, CheckCircle2, AlertCircle, TrendingUp, Layers, ExternalLink } from 'lucide-react';

interface WorkExperienceEntry {
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
  onAddRole?: () => void;
  onEditExperience?: (index: number) => void;
}

export const AiAnalysisWorkExperienceCard: React.FC<AiAnalysisWorkExperienceCardProps> = ({
  onAddRole,
  onEditExperience,
}) => {
  const experiences: WorkExperienceEntry[] = [
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
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#818cf8' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
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
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            color: '#cbd5e1',
            fontSize: '0.74rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Plus size={12} />
          <span>Add Missing Role</span>
        </button>
      </div>

      <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 18px 0' }}>
        Chronological career data extracted from bullet points and tech stacks.
      </p>

      {/* Experience Entries */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px 18px',
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>{exp.title}</span>
                  {exp.badge && (
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        padding: '1px 7px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        color: '#34d399',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  <span>{exp.company}</span>
                  <span style={{ margin: '0 6px', color: '#475569' }}>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', color: '#cbd5e1', fontWeight: 500 }}>{exp.duration}</span>
                <span style={{ fontSize: '0.7rem', color: '#64748b' }}>({exp.tenureScore})</span>
                <button
                  onClick={() => onEditExperience && onEditExperience(idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#64748b',
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
                <li key={bIdx} style={{ fontSize: '0.77rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Stack chips & metrics link */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 600 }}>Detected Stack:</span>
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.68rem',
                      padding: '2px 7px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#94a3b8',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#34d399' }}>
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
          backgroundColor: 'rgba(99, 102, 241, 0.04)',
          border: '1px solid rgba(99, 102, 241, 0.15)',
          borderRadius: '12px',
          padding: '14px 16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <Layers size={13} style={{ color: '#818cf8' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a5b4fc', letterSpacing: '0.6px' }}>
            AI SYNTHESIS &amp; OBSERVATIONS
          </span>
          <span style={{ fontSize: '0.68rem', color: '#64748b', marginLeft: 'auto' }}>
            Discovered directly from factual resume text
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {/* Verified Strengths */}
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.06)',
              border: '1px solid rgba(16, 185, 129, 0.22)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <CheckCircle2 size={13} style={{ color: '#10b981' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399' }}>Verified Strengths</span>
            </div>
            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              Solid progression from mobile UI engineer into distributed backend architecture. Explicit throughput numbers (12k QPS) present.
            </p>
          </div>

          {/* Polish Opportunity */}
          <div
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.06)',
              border: '1px solid rgba(245, 158, 11, 0.22)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <AlertCircle size={13} style={{ color: '#f59e0b' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24' }}>Polish Opportunity</span>
            </div>
            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              Measure more cost/impact: give actual dollar savings or head reduction percentages to match Staff-role expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
