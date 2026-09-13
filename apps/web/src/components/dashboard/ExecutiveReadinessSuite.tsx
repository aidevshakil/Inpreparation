import React from 'react';
import { ArrowUpRight, ArrowUp, Zap, MessageSquare, Mic, Video, ChevronRight } from 'lucide-react';

interface MetricItem {
  id: string;
  title: string;
  score: number;
  maxScore?: number;
  delta?: string;
  deltaType?: 'positive' | 'neutral' | 'stable';
  rubric: string;
  gradient: string;
  icon: React.ElementType;
  extraLabel?: string;
}

interface ExecutiveReadinessSuiteProps {
  readinessScore?: number;
  firstAttemptScore?: number;
  targetBenchmark?: number;
  benchmarkLevel?: string;
  targetRoleLevel?: string;
  percentileRank?: number;
  onViewPerformance?: () => void;
}

export const ExecutiveReadinessSuite: React.FC<ExecutiveReadinessSuiteProps> = ({
  readinessScore = 82,
  firstAttemptScore = 71,
  targetBenchmark = 85,
  benchmarkLevel = 'BENCHMARK: L6',
  targetRoleLevel = 'Staff Level',
  percentileRank = 12,
  onViewPerformance,
}) => {
  const deltaPts = readinessScore - firstAttemptScore;

  const metrics: MetricItem[] = [
    {
      id: 'tech_acc',
      title: 'Technical Accuracy',
      score: 86,
      delta: '+8%',
      deltaType: 'positive',
      rubric: 'Rubric: Factual depth, complexity, architectural trade-offs.',
      gradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
      icon: Zap,
    },
    {
      id: 'comm_struct',
      title: 'Communication & Structure',
      score: 81,
      delta: '+5%',
      deltaType: 'positive',
      rubric: 'Rubric: STAR methodology adherence, concise summaries.',
      gradient: 'linear-gradient(90deg, #06b6d4, #38bdf8)',
      icon: MessageSquare,
    },
    {
      id: 'speech_cad',
      title: 'Speech Cadence',
      score: 84,
      extraLabel: '(142 WPM)',
      delta: 'Stable',
      deltaType: 'stable',
      rubric: 'Acoustic pacing, low filler words (1.2/min), clear vocal pitch.',
      gradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
      icon: Mic,
    },
    {
      id: 'pres_frame',
      title: 'Presentation & Framing',
      score: 85,
      delta: '+4%',
      deltaType: 'positive',
      rubric: 'Visual hygiene: Eye-level alignment, optimal 500 lux lighting.',
      gradient: 'linear-gradient(90deg, #10b981, #34d399)',
      icon: Video,
    },
  ];

  // Radial Gauge SVG Calculations
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (readinessScore / 100) * circumference;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(360px, 1.85fr)',
        gap: '18px',
        marginBottom: '24px',
      }}
      className="executive-metrics-grid"
    >
      {/* Main Readiness Gauge Card */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
        }}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.8px',
                color: '#818cf8',
                textTransform: 'uppercase',
              }}
            >
              Executive Metric
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
              }}
            >
              {benchmarkLevel}
            </span>
          </div>

          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Interview Readiness
          </h2>
        </div>

        {/* Radial Gauge and Score Details */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            margin: '18px 0',
            flexWrap: 'wrap',
          }}
        >
          {/* Radial Ring */}
          <div style={{ position: 'relative', width: '132px', height: '132px', flexShrink: 0 }}>
            <svg width="132" height="132" viewBox="0 0 132 132" style={{ transform: 'rotate(-90deg)' }}>
              {/* Background Track */}
              <circle
                cx="66"
                cy="66"
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="10"
              />
              {/* Target Benchmark indicator arc */}
              <circle
                cx="66"
                cy="66"
                r={radius}
                fill="none"
                stroke="rgba(99, 102, 241, 0.25)"
                strokeWidth="10"
                strokeDasharray={`${(targetBenchmark / 100) * circumference} ${circumference}`}
              />
              {/* Current Progress Arc */}
              <circle
                cx="66"
                cy="66"
                r={radius}
                fill="none"
                stroke="url(#readinessGradient)"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  transition: 'stroke-dashoffset 1s ease-out',
                  filter: 'drop-shadow(0 0 6px rgba(129, 140, 248, 0.5))',
                }}
              />
              <defs>
                <linearGradient id="readinessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Score Text in Center */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                {readinessScore}
              </span>
              <span style={{ fontSize: '0.66rem', color: '#94a3b8', marginTop: '2px' }}>
                out of 100
              </span>
            </div>
          </div>

          {/* Right Highlights & Delta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, minWidth: '150px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 9px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontSize: '0.73rem',
                fontWeight: 600,
                alignSelf: 'flex-start',
              }}
            >
              <ArrowUp size={13} strokeWidth={2.5} />
              <span>+{deltaPts} pts since first attempt</span>
            </div>

            <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              You are in <strong style={{ color: '#ffffff' }}>top {percentileRank}%</strong> for Backend Concurrency. Keep practicing to improve edge-case articulation.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#94a3b8' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6366f1' }} />
              <span>
                Target Benchmark: <strong style={{ color: '#e2e8f0' }}>{targetBenchmark} ({targetRoleLevel})</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div
          style={{
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
          }}
        >
          <span style={{ color: '#64748b' }}>Calculated from 5 recent simulated questions</span>
          <button
            onClick={onViewPerformance}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#818cf8',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px',
              padding: 0,
            }}
          >
            <span>View Performance</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Right 4-Grid Metric Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '14px',
        }}
        className="kpi-sub-grid"
      >
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              style={{
                backgroundColor: 'rgba(14, 18, 28, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '16px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.18s ease, border-color 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Header Title & Delta Badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a5b4fc',
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.3 }}>
                    {metric.title}
                  </span>
                </div>

                {metric.delta && (
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '2px 7px',
                      borderRadius: '9999px',
                      backgroundColor:
                        metric.deltaType === 'positive'
                          ? 'rgba(16, 185, 129, 0.14)'
                          : 'rgba(255, 255, 255, 0.06)',
                      color: metric.deltaType === 'positive' ? '#34d399' : '#94a3b8',
                      border:
                        metric.deltaType === 'positive'
                          ? '1px solid rgba(16, 185, 129, 0.25)'
                          : '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '2px',
                    }}
                  >
                    {metric.deltaType === 'positive' && <ArrowUpRight size={11} />}
                    {metric.delta}
                  </span>
                )}
              </div>

              {/* Score Number */}
              <div style={{ margin: '12px 0 6px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                    {metric.score}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    / 100 {metric.extraLabel && <span style={{ color: '#94a3b8' }}>{metric.extraLabel}</span>}
                  </span>
                </div>
              </div>

              {/* Rubric Description */}
              <p style={{ fontSize: '0.71rem', color: '#94a3b8', lineHeight: 1.38, marginBottom: '10px', minHeight: '28px' }}>
                {metric.rubric}
              </p>

              {/* Mini Progress Bar */}
              <div
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${metric.score}%`,
                    height: '100%',
                    background: metric.gradient,
                    borderRadius: '9999px',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
