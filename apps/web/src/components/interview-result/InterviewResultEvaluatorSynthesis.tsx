import React from 'react';
import { Sparkles, CheckCircle2, Clock, TrendingUp, Info } from 'lucide-react';

interface InterviewResultEvaluatorSynthesisProps {
  score?: number;
  totalQuestions?: number;
  defendedQuestions?: number;
  totalDuration?: string;
  trajectoryDelta?: string;
}

export const InterviewResultEvaluatorSynthesis: React.FC<InterviewResultEvaluatorSynthesisProps> = ({
  score = 82,
  totalQuestions = 5,
  defendedQuestions = 5,
  totalDuration = '10:37',
  trajectoryDelta = '+18 Pts',
}) => {
  // Circular gauge calculations for score 82/100
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * score) / 100;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(240px, 320px) minmax(0, 1fr)',
        gap: '20px',
        marginBottom: '28px',
        alignItems: 'stretch',
      }}
    >
      {/* 1. Score Circular Donut Card */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '28px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(12, 15, 23, 0.95) 100%)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Radial SVG Gauge */}
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
          <svg width="150" height="150" viewBox="0 0 150 150" style={{ transform: 'rotate(-90deg)' }}>
            <defs>
              <linearGradient id="scoreGaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
            {/* Background Track */}
            <circle
              cx="75"
              cy="75"
              r={radius}
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="11"
              fill="transparent"
            />
            {/* Value Track */}
            <circle
              cx="75"
              cy="75"
              r={radius}
              stroke="url(#scoreGaugeGradient)"
              strokeWidth="11"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))',
              }}
            />
          </svg>

          {/* Center Score Text */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#f8fafc',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              {score}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, marginTop: '2px' }}>
              / 100
            </span>
          </div>
        </div>

        {/* Badges below score */}
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.16)',
              color: '#c7d2fe',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.2px',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8' }} />
            Strong Practice Performance
          </span>

          <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 500 }}>
            Staff L6 Calibrated
          </span>
        </div>
      </div>

      {/* 2. Executive Evaluator Synthesis Card */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(12, 15, 23, 0.95) 100%)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div>
          {/* Section Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                backgroundColor: 'rgba(168, 85, 247, 0.16)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c084fc',
              }}
            >
              <Sparkles size={15} />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Executive Evaluator Synthesis
            </h3>
          </div>

          {/* Narrative synthesis paragraph */}
          <p
            style={{
              fontSize: '0.88rem',
              color: '#cbd5e1',
              lineHeight: 1.65,
              margin: '0 0 14px 0',
            }}
          >
            Demonstrated exemplary mastery of Python Asyncio internals, GIL avoidance mechanisms, and asyncpg
            connection pooling. Key growth vector: articulate jittered exponential backpressure algorithms with concrete
            mathematical boundaries before verbal synthesis.
          </p>

          {/* Calibrated disclaimer note */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              fontSize: '0.72rem',
              color: '#64748b',
              lineHeight: 1.5,
              padding: '10px 14px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
            }}
          >
            <Info size={14} style={{ flexShrink: 0, marginTop: '2px', color: '#94a3b8' }} />
            <span>
              Inprep network deterministic performance against Staff L6 benchmark across top 100 enterprise stacks.
              This practice assessment is for learning and improvement, not a hiring decision or employment guarantee.
            </span>
          </div>
        </div>

        {/* Bottom 3 Quick Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8',
              }}
            >
              <CheckCircle2 size={16} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.1 }}>
                {defendedQuestions} / {totalQuestions}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
                Questions Defended
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(168, 85, 247, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c084fc',
              }}
            >
              <Clock size={16} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.1 }}>
                {totalDuration}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
                Total Response Time
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34d399',
              }}
            >
              <TrendingUp size={16} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#34d399', lineHeight: 1.1 }}>
                {trajectoryDelta}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
                Trajectory Delta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
