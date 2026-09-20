import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface SkillItem {
  id: string;
  title: string;
  subtext: string;
  percentage: number;
  badgeLabel: string;
  badgeColor: string;
  badgeBg: string;
}

interface PerformanceSkillMatrixProps {
  sessions?: any[];
  skills?: SkillItem[];
}

export const PerformanceSkillMatrix: React.FC<PerformanceSkillMatrixProps> = ({
  sessions,
  skills: propSkills,
}) => {
  const defaultSkills: SkillItem[] = [
    {
      id: 's1',
      title: 'Python Concurrency & Asyncio',
      subtext: '5 Questions Defended • L6+ Staff',
      percentage: 88,
      badgeLabel: 'Exemplar',
      badgeColor: '#c084fc',
      badgeBg: 'rgba(168, 85, 247, 0.15)',
    },
    {
      id: 's2',
      title: 'Distributed Systems & Circuit Breakers',
      subtext: '5 Questions Defended • Microservices',
      percentage: 84,
      badgeLabel: 'Strong',
      badgeColor: '#818cf8',
      badgeBg: 'rgba(99, 102, 241, 0.15)',
    },
    {
      id: 's3',
      title: 'PostgreSQL Saturation & asyncpg Pooling',
      subtext: '6 Questions Defended • Storage',
      percentage: 82,
      badgeLabel: 'Strong',
      badgeColor: '#818cf8',
      badgeBg: 'rgba(99, 102, 241, 0.15)',
    },
    {
      id: 's4',
      title: 'Backpressure & Token-Bucket Formulas',
      subtext: '5 Questions Defended • Traffic Shaping',
      percentage: 74,
      badgeLabel: 'Drill Priority',
      badgeColor: '#fbbf24',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
    },
    {
      id: 's5',
      title: 'Cost-to-SLA Infrastructure Trade-offs & Cloud Topology',
      subtext: '6 Questions Defended • Financial Engineering & Resilience',
      percentage: 79,
      badgeLabel: 'Developing',
      badgeColor: '#38bdf8',
      badgeBg: 'rgba(56, 189, 248, 0.12)',
    },
  ];

  const skills: SkillItem[] = (propSkills && propSkills.length > 0)
    ? propSkills
    : (sessions && sessions.length > 0)
    ? sessions.slice(0, 5).map((s, idx) => {
        const score = s.technicalScore || s.overallScore || 85;
        const isExemplar = score >= 88;
        const isStrong = score >= 80;
        return {
          id: `skill-${idx}`,
          title: s.roleTrack || 'Engineering Core',
          subtext: `${s.answers?.length || 5} Questions Defended • ${s.seniorityLevel || 'Senior L5'}`,
          percentage: score,
          badgeLabel: isExemplar ? 'Exemplar' : isStrong ? 'Strong' : 'Developing',
          badgeColor: isExemplar ? '#c084fc' : isStrong ? '#818cf8' : '#38bdf8',
          badgeBg: isExemplar ? 'rgba(168, 85, 247, 0.15)' : 'rgba(99, 102, 241, 0.15)',
        };
      })
    : defaultSkills;

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
            Skill Competency Matrix (30 Defended Questions)
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
            Deterministic evaluations across recurring technical modules.
          </p>
        </div>

        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.74rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span>View Full Skill Roster</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* Grid of Skills (2 Columns) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '12px',
        }}
      >
        {skills.map((s) => (
          <div
            key={s.id}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px 18px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  marginBottom: '4px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {s.title}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{s.subtext}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>
                {s.percentage}%
              </span>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  color: s.badgeColor,
                  background: s.badgeBg,
                  padding: '3px 8px',
                  borderRadius: '100px',
                }}
              >
                {s.badgeLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
