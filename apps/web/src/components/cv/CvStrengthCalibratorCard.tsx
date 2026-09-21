import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MetricItem {
  id: string;
  name: string;
  percent: number;
  levelLabel: string;
  feedback: string;
  barColor: string;
}

interface CvStrengthCalibratorCardProps {
  score?: number;
  technicalCoverage?: Record<string, number>;
  targetRole?: string;
  onViewDeepBreakdown?: () => void;
}

export const CvStrengthCalibratorCard: React.FC<CvStrengthCalibratorCardProps> = ({
  score = 91,
  technicalCoverage,
  targetRole = 'Fullstack Flutter Developer',
  onViewDeepBreakdown,
}) => {
  const colors = ['#10b981', '#38bdf8', '#a855f7', '#06b6d4', '#f59e0b'];
  
  const isObj = technicalCoverage && typeof technicalCoverage === 'object' && !Array.isArray(technicalCoverage);
  const isArr = Array.isArray(technicalCoverage);

  const metrics: MetricItem[] = isObj && Object.keys(technicalCoverage).length > 0
    ? Object.entries(technicalCoverage).slice(0, 4).map(([name, pct], i) => ({
        id: `cov-${i}`,
        name,
        percent: typeof pct === 'number' ? pct : 85,
        levelLabel: (typeof pct === 'number' && pct >= 90) ? 'Exceptional' : (typeof pct === 'number' && pct >= 85) ? 'High Fit' : 'Advanced',
        feedback: (typeof pct === 'number' && pct >= 90)
          ? `Exceptional mastery in ${name} directly fulfilling ${targetRole} rubrics.`
          : `Strong verified competencies in ${name} aligned with target trajectory.`,
        barColor: colors[i % colors.length],
      }))
    : isArr && technicalCoverage.length > 0
    ? technicalCoverage.slice(0, 4).map((item: any, i: number) => ({
        id: `cov-${i}`,
        name: item?.category || item?.name || `Competency Area ${i + 1}`,
        percent: typeof item?.score === 'number' ? item.score : typeof item?.percent === 'number' ? item.percent : 85,
        levelLabel: 'High Fit',
        feedback: `Competency aligned with ${targetRole}.`,
        barColor: colors[i % colors.length],
      }))
    : [
        {
          id: 'skills',
          name: 'Skills & Competency Coverage',
          percent: score >= 90 ? 94 : score,
          levelLabel: 'Exceptional',
          feedback: `Strong competencies aligned with ${targetRole} detected.`,
          barColor: '#10b981',
        },
        {
          id: 'exp',
          name: 'Role & Experience Relevance',
          percent: score >= 90 ? 92 : score - 2,
          levelLabel: 'High Fit',
          feedback: `Verified career progression matching target ${targetRole} requirements.`,
          barColor: '#38bdf8',
        },
        {
          id: 'arch',
          name: 'Architecture & State Management',
          percent: score >= 90 ? 88 : score - 5,
          levelLabel: 'Advanced',
          feedback: 'Clear demonstration of maintainable patterns, clean architecture, and modularity.',
          barColor: '#a855f7',
        },
        {
          id: 'metrics',
          name: 'Structure & Production Impact',
          percent: score >= 90 ? 85 : score - 8,
          levelLabel: 'Strong',
          feedback: 'Effective technical achievements and quantifiable delivery milestones.',
          barColor: '#06b6d4',
        },
      ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '16px',
      }}
    >
      {/* Header with Circular Score */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div>
          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.8px',
              color: 'var(--primary-color)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '2px',
            }}
          >
            Telemetry Scorecard
          </span>
          <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            CV Strength Calibrator
          </h3>
        </div>

        {/* Circular Score Badge */}
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
          }}
        >
          <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
            {score}
          </span>
          <span style={{ fontSize: '0.58rem', color: '#e0e7ff', fontWeight: 500 }}>/100</span>
        </div>
      </div>

      {/* 4 Metric Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        {metrics.map((m) => (
          <div key={m.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-main)' }}>
                {m.name}
              </span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: m.barColor }}>
                {m.percent}% • {m.levelLabel}
              </span>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '5px',
                backgroundColor: 'var(--border-subtle)',
                borderRadius: '9999px',
                overflow: 'hidden',
                marginBottom: '4px',
              }}
            >
              <div
                style={{
                  width: `${m.percent}%`,
                  height: '100%',
                  backgroundColor: m.barColor,
                  borderRadius: '9999px',
                }}
              />
            </div>

            <p style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.35 }}>
              {m.feedback}
            </p>
          </div>
        ))}
      </div>

      {/* Button: View Deep Diagnostic Breakdown */}
      <button
        onClick={onViewDeepBreakdown}
        style={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '9px',
          color: 'var(--text-main)',
          fontSize: '0.75rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
          e.currentTarget.style.color = 'var(--primary-color)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
          e.currentTarget.style.color = 'var(--text-main)';
        }}
      >
        <span>View Deep Diagnostic Breakdown</span>
        <ChevronRight size={13} />
      </button>
    </div>
  );
};
