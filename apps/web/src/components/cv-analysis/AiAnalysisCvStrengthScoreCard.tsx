import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface MetricItem {
  label: string;
  value: number;
}

interface AiAnalysisCvStrengthScoreCardProps {
  overallScore?: number;
  metrics?: MetricItem[];
}

export const AiAnalysisCvStrengthScoreCard: React.FC<AiAnalysisCvStrengthScoreCardProps> = ({
  overallScore,
  metrics: customMetrics,
}) => {
  const score = overallScore || 84;
  const metrics: MetricItem[] = (customMetrics && customMetrics.length > 0) ? customMetrics : [
    { label: 'Skills Coverage', value: Math.min(100, Math.round(score * 1.04)) },
    { label: 'Experience Relevance', value: Math.min(100, Math.round(score * 1.02)) },
    { label: 'Project Architecture Depth', value: score },
    { label: 'Structure & Quantifiable STAR Metrics', value: Math.max(70, Math.round(score * 0.96)) },
  ];

  const circleRadius = 38;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

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
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '16px',
          gap: '10px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
            CV Strength Score
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0 }}>
            Synthesized calibration for Senior/Staff roles.
          </p>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            padding: '3px 8px',
            borderRadius: '6px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          Senior / Staff Target 85+
        </span>
      </div>

      {/* Circle Gauge & Overview */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          marginBottom: '20px',
          padding: '12px 14px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Radial SVG */}
        <div style={{ position: 'relative', width: '92px', height: '92px', flexShrink: 0 }}>
          <svg width="92" height="92" viewBox="0 0 92 92" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="46"
              cy="46"
              r={circleRadius}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="7"
              fill="transparent"
            />
            <circle
              cx="46"
              cy="46"
              r={circleRadius}
              stroke="url(#scoreGradient)"
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Centered Number */}
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
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
              {score}
            </span>
            <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 600 }}>/ 100</span>
          </div>
        </div>

        {/* Text next to gauge */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: '#34d399',
              marginBottom: '4px',
            }}
          >
            <CheckCircle2 size={13} />
            <span>Strong Senior Foundation</span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
            Your CV provides an exceptional foundation for role-tailored 1-question mock simulations with high technical factual specificity. Not employment-guarantee ranking predictor.
          </p>
        </div>
      </div>

      {/* 4 Metric Progress Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {metrics.map((metric, idx) => (
          <div key={idx}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.74rem',
                marginBottom: '4px',
              }}
            >
              <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{metric.label}</span>
              <span style={{ color: '#818cf8', fontWeight: 700 }}>{metric.value}%</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${metric.value}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
                  borderRadius: '9999px',
                  transition: 'width 0.6s ease',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
