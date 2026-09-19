import React from 'react';
import { Compass, ArrowUpRight, TrendingUp } from 'lucide-react';

interface AiPlanOverviewCardProps {
  onEditGoals?: () => void;
}

export const AiPlanOverviewCard: React.FC<AiPlanOverviewCardProps> = ({ onEditGoals }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.85fr) minmax(320px, 1.15fr)',
        gap: '20px',
        marginBottom: '24px',
        alignItems: 'stretch',
      }}
    >
      {/* Left Card: Active 7-Day Targeted Remediation Plan */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '22px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '18px',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.35) 0%, rgba(13, 19, 34, 0.95) 100%)',
        }}
      >
        <div>
          {/* Header Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span
              style={{
                padding: '2px 8px',
                borderRadius: '5px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                color: '#a5b4fc',
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '0.4px',
              }}
            >
              CYCLE #4 CALIBRATION
            </span>
            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Updated 2h ago</span>
          </div>

          {/* Title and Active Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Active 7-Day Targeted Remediation Plan
            </h2>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 9px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(124, 58, 237, 0.18)',
                border: '1px solid rgba(124, 58, 237, 0.4)',
                color: '#c084fc',
                fontSize: '0.68rem',
                fontWeight: 700,
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#c084fc' }} />
              <span>Active • 4 of 7 Days Complete (57%)</span>
            </span>
          </div>

          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '8px 0 0 0', lineHeight: 1.45 }}>
            Synthesized from 6 completed interviews, 30 defended prompts, and 14 technical skill vectors against the <strong style={{ color: '#cbd5e1' }}>Staff L6+ Engineering Bar</strong> (Target: 80.0 Composite).
          </p>
        </div>

        {/* 3 Metric Blocks */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            padding: '14px 16px',
            backgroundColor: '#090d18',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Days Done */}
          <div>
            <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Days Done
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginTop: '3px' }}>
              4 / 7
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
              3 remaining
            </div>
          </div>

          {/* Drills Finished */}
          <div>
            <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Drills Finished
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8', marginTop: '3px' }}>
              18 Drills
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
              420 total mins
            </div>
          </div>

          {/* Score Delta */}
          <div>
            <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Score Delta
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399' }}>
                +5.2
              </span>
              <TrendingUp size={14} style={{ color: '#34d399' }} />
            </div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1', marginTop: '2px' }}>
              74.8 → 80.0 target
            </div>
          </div>
        </div>

        {/* Remediation Velocity Progress Bar */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', marginBottom: '6px' }}>
            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Remediation Velocity</span>
            <span style={{ color: '#38bdf8', fontWeight: 700 }}>57.1% Track Adherence</span>
          </div>
          <div
            style={{
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '57.1%',
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
                borderRadius: '9999px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Card: Calibrated Profile Matrix */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '22px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '16px',
          background: 'linear-gradient(180deg, rgba(20, 26, 46, 0.7) 0%, rgba(13, 19, 34, 0.95) 100%)',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={16} style={{ color: '#c084fc' }} />
              <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Calibrated Profile Matrix
              </h3>
            </div>
            <button
              onClick={onEditGoals}
              style={{
                background: 'none',
                border: 'none',
                color: '#c084fc',
                fontSize: '0.7rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                cursor: 'pointer',
              }}
            >
              <span>Edit Target Goals (#43)</span>
              <ArrowUpRight size={12} />
            </button>
          </div>

          {/* Matrix Key-Values */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', paddingBottom: '8px' }}>
              <span style={{ color: '#64748b' }}>Target Role</span>
              <span style={{ color: '#f1f5f9', fontWeight: 700 }}>Staff Backend &amp; Distributed Systems</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', paddingBottom: '8px' }}>
              <span style={{ color: '#64748b' }}>Primary Focus</span>
              <span style={{ color: '#fbbf24', fontWeight: 700 }}>Sub-80 Boundary &amp; Concurrency</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', paddingBottom: '8px' }}>
              <span style={{ color: '#64748b' }}>Experience Level</span>
              <span style={{ color: '#f1f5f9', fontWeight: 600 }}>Senior (L5 transitioning to L6 Staff)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', paddingBottom: '4px' }}>
              <span style={{ color: '#64748b' }}>Key Stack</span>
              <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Python, Raft, Rate Limiting, PgBouncer</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '10px 14px',
            backgroundColor: '#090d18',
            borderRadius: '9px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
            Benchmark Gap: <strong style={{ color: '#f87171' }}>-5.2 pts</strong>
          </div>
          <span
            style={{
              padding: '3px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38bdf8',
              fontSize: '0.66rem',
              fontWeight: 700,
            }}
          >
            92nd Percentile Trajectory
          </span>
        </div>
      </div>
    </div>
  );
};
