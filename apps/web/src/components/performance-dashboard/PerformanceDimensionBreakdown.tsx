import React from 'react';
import { SlidersHorizontal, ArrowRight, TrendingUp } from 'lucide-react';

interface DimensionItem {
  id: string;
  name: string;
  trend: string;
  statusBadge: string;
  statusColor: string;
  statusBg: string;
  score: number;
  description: string;
  benchmarkText: string;
  linkText: string;
}

export const PerformanceDimensionBreakdown: React.FC = () => {
  const dimensions: DimensionItem[] = [
    {
      id: 'dim1',
      name: '1. Technical Accuracy & Architectural Depth',
      trend: '+4.4% Trend',
      statusBadge: 'Strong',
      statusColor: '#818cf8',
      statusBg: 'rgba(99, 102, 241, 0.15)',
      score: 85,
      description: 'Rigorous mastery of OS-level scheduling, memory constraints, and asyncpg event loops.',
      benchmarkText: 'Benchmark target: 80+ • Top 12th percentile',
      linkText: 'View Technical Analytics',
    },
    {
      id: 'dim2',
      name: '2. System Architecture & Trade-off Articulation',
      trend: '+6.0% Trend',
      statusBadge: 'Strong',
      statusColor: '#818cf8',
      statusBg: 'rgba(99, 102, 241, 0.15)',
      score: 83,
      description: 'Defends cost-to-latency compromises; correctly introduces circuit breakers and bulkheads under load.',
      benchmarkText: 'Benchmark target: 80+ • Top 14th percentile',
      linkText: 'View Architecture Deep Dive',
    },
    {
      id: 'dim3',
      name: '3. Problem Decomposition & Edge Case Resilience',
      trend: '+1.7% Trend',
      statusBadge: 'Developing Focus',
      statusColor: '#fbbf24',
      statusBg: 'rgba(245, 158, 11, 0.15)',
      score: 76,
      description: 'Occasional omission of mathematical failure cascades in async token-bucket depletion scenarios.',
      benchmarkText: 'Benchmark target: 80+ • Drill priority #1',
      linkText: 'Review Decomposition Rubric',
    },
    {
      id: 'dim4',
      name: '4. Executive Articulation, Structure & Cadence',
      trend: '+3.2% Trend',
      statusBadge: 'Solid',
      statusColor: '#38bdf8',
      statusBg: 'rgba(56, 189, 248, 0.12)',
      score: 82,
      description: 'Structured reasoning using bottom-line-first pyramid principle; natural vocal pauses without filler.',
      benchmarkText: 'Benchmark target: 80+ • Pace: 138 WPM',
      linkText: 'View Speech Analytics',
    },
    {
      id: 'dim5',
      name: '5. Observable Presentation & Framing Integrity',
      trend: 'Stable',
      statusBadge: 'Calibrated',
      statusColor: '#34d399',
      statusBg: 'rgba(16, 185, 129, 0.12)',
      score: 81,
      description: 'Optimal camera eye-line consistency (96%). Balanced three-point light simulation; upright posture.',
      benchmarkText: 'Framing: 97% within bounds • Zero inference of emotion',
      linkText: 'View Framing Analytics',
    },
  ];

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
      {/* Title Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
            Deterministic Dimension Breakdown
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
            Aggregated across all verified answers against Staff L6 calibration vectors.
          </p>
        </div>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          <SlidersHorizontal size={16} />
        </button>
      </div>

      {/* 5 Dimension Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {dimensions.map((dim) => (
          <div
            key={dim.id}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
                  {dim.name}
                </span>
                <span
                  style={{
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    color: '#34d399',
                    background: 'rgba(16, 185, 129, 0.12)',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <TrendingUp size={10} /> {dim.trend}
                </span>
                <span
                  style={{
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    color: dim.statusColor,
                    background: dim.statusBg,
                    padding: '2px 8px',
                    borderRadius: '100px',
                  }}
                >
                  {dim.statusBadge}
                </span>
              </div>

              {/* Score */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
                  {dim.score}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                  / 100
                </span>
              </div>
            </div>

            {/* Description */}
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              {dim.description}
            </div>

            {/* Footer Benchmarks + Links */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                fontSize: '0.72rem',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <span style={{ color: '#64748b' }}>{dim.benchmarkText}</span>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#818cf8',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: 0,
                }}
              >
                <span>{dim.linkText}</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
