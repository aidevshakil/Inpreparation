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
  onViewDeepBreakdown?: () => void;
}

export const CvStrengthCalibratorCard: React.FC<CvStrengthCalibratorCardProps> = ({
  score = 84,
  onViewDeepBreakdown,
}) => {
  const metrics: MetricItem[] = [
    {
      id: 'skills',
      name: 'Skills Coverage',
      percent: 93,
      levelLabel: 'Exceptional',
      feedback: 'Strong backend, concurrency, and async pipeline tags detected.',
      barColor: '#10b981',
    },
    {
      id: 'exp',
      name: 'Experience Relevance',
      percent: 92,
      levelLabel: 'High Fit',
      feedback: 'High correlation with target Senior Backend and Distributed tracks.',
      barColor: '#38bdf8',
    },
    {
      id: 'arch',
      name: 'Project Architecture Depth',
      percent: 86,
      levelLabel: 'Advanced',
      feedback: 'Clear demonstration of data partitioning, caching, and throughput trade-offs.',
      barColor: '#a855f7',
    },
    {
      id: 'metrics',
      name: 'Structure & Quantifiable Metrics',
      percent: 81,
      levelLabel: 'Adequate',
      feedback: 'Good STAR format usage; opportunity to append business ROI numbers.',
      barColor: '#06b6d4',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
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
              color: '#818cf8',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '2px',
            }}
          >
            Telemetry Scorecard
          </span>
          <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            CV Strength Calibrator
          </h3>
        </div>

        {/* Circular Score Badge */}
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '2px solid #6366f1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 14px rgba(99, 102, 241, 0.4)',
          }}
        >
          <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
            {score}
          </span>
          <span style={{ fontSize: '0.58rem', color: '#94a3b8' }}>/100</span>
        </div>
      </div>

      {/* 4 Metric Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        {metrics.map((m) => (
          <div key={m.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#e2e8f0' }}>
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
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
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

            <p style={{ fontSize: '0.68rem', color: '#94a3b8', margin: 0, lineHeight: 1.35 }}>
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
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.09)',
          borderRadius: '9px',
          color: '#cbd5e1',
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
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
          e.currentTarget.style.color = '#cbd5e1';
        }}
      >
        <span>View Deep Diagnostic Breakdown</span>
        <ChevronRight size={13} />
      </button>
    </div>
  );
};
