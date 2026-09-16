import React from 'react';
import { Sparkles, TrendingUp, Code2, Target, Mic, Award, Edit3 } from 'lucide-react';

interface RecommendedInterviewsBasisBannerProps {
  onAdjustParameters?: () => void;
  targetRole?: string;
}

export const RecommendedInterviewsBasisBanner: React.FC<RecommendedInterviewsBasisBannerProps> = ({
  onAdjustParameters,
  targetRole = 'Staff Backend Architect',
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '18px 22px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} style={{ color: '#818cf8' }} />
          <h3 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            YOUR RECOMMENDATIONS ARE BASED ON
          </h3>
        </div>

        <button
          onClick={onAdjustParameters}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>Adjust Calibration Parameters</span>
          <Edit3 size={11} />
        </button>
      </div>

      {/* 5 Parameter Chips Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px',
          marginBottom: '12px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <TrendingUp size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              ANALYSIS MODEL
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
              Staff Systems Trajectory
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Code2 size={16} style={{ color: '#c084fc', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              CV &amp; STACK
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
              Go, Kafka, Raft, PostgreSQL
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Target size={16} style={{ color: '#818cf8', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              CAREER TARGET
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
              {targetRole}
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Mic size={16} style={{ color: '#10b981', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              INTAKE SPEECH
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
              8 Prompts + ~14m Ingested
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Award size={16} style={{ color: '#fbbf24', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              SENIORITY TIER
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
              Senior 6+ Yrs Infra
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.68rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
        Recommendations adapt in real-time as you add skills or retake assessments. Transparent deterministic rubric matching; not an evaluation of personality or hiring guarantee.
      </p>
    </div>
  );
};
