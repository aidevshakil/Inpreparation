import React from 'react';
import { Compass, ArrowUpRight, TrendingUp } from 'lucide-react';
import { TargetRoleData } from '../../services/aiPlanStore';

interface AiPlanOverviewCardProps {
  roleData?: TargetRoleData;
  daysHorizon?: number;
  drillsCompleted?: number;
  practiceMinutes?: number;
  lastUpdated?: string;
  onEditGoals?: () => void;
}

export const AiPlanOverviewCard: React.FC<AiPlanOverviewCardProps> = ({
  roleData,
  daysHorizon = 7,
  drillsCompleted = 18,
  practiceMinutes = 420,
  lastUpdated = 'Updated 2h ago',
  onEditGoals,
}) => {
  const currentRole = roleData || {
    roleName: 'Staff Backend & Distributed Systems',
    compositeScore: 80.0,
    targetScore: 85.0,
    baselineScore: 74.8,
    scoreDelta: 5.2,
    primaryFocus: 'Sub-80 Boundary & Concurrency',
    experienceLevel: 'Senior (L5 transitioning to L6 Staff)',
    keyStack: 'Python, Raft, Rate Limiting, PgBouncer',
  };

  const completedDays = daysHorizon === 7 ? 4 : daysHorizon === 14 ? 8 : 16;
  const remainingDays = daysHorizon - completedDays;
  const percentComplete = Math.round((completedDays / daysHorizon) * 100);

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
      {/* Left Card: Active Targeted Remediation Plan */}
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
            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{lastUpdated}</span>
          </div>

          {/* Title and Active Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Active {daysHorizon}-Day Targeted Remediation Plan
            </h2>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 9px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(129, 140, 248, 0.15)',
                color: '#c7d2fe',
                fontSize: '0.7rem',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#818cf8',
                }}
              />
              Active • {completedDays} of {daysHorizon} Days Complete ({percentComplete}%)
            </span>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '0.78rem',
              color: '#94a3b8',
              margin: '8px 0 0 0',
              lineHeight: 1.45,
            }}
          >
            Synthesized from 6 completed interviews, 30 defended prompts, and 14 technical skill vectors against the{' '}
            <strong style={{ color: '#cbd5e1' }}>Staff L6+ Engineering Bar</strong> (Target:{' '}
            {currentRole.targetScore.toFixed(1)} Composite).
          </p>
        </div>

        {/* 3 Metrics in Horizontal Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            borderRadius: '10px',
            padding: '14px 16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Metric 1 */}
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, marginBottom: '2px' }}>
              Days Done
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
              {completedDays} / {daysHorizon}
            </div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
              {remainingDays} remaining
            </div>
          </div>

          {/* Metric 2 */}
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, marginBottom: '2px' }}>
              Drills Finished
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8', lineHeight: 1.2 }}>
              {drillsCompleted} Drills
            </div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
              {practiceMinutes} total mins
            </div>
          </div>

          {/* Metric 3 */}
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, marginBottom: '2px' }}>
              Score Delta
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#4ade80', lineHeight: 1.2 }}>
                +{currentRole.scoreDelta.toFixed(1)}
              </span>
              <TrendingUp size={14} color="#4ade80" />
            </div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
              {currentRole.baselineScore.toFixed(1)} &rarr; {currentRole.targetScore.toFixed(1)} target
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.68rem',
              color: '#94a3b8',
              marginBottom: '6px',
            }}
          >
            <span>Remediation Velocity</span>
            <span style={{ fontWeight: 600, color: '#cbd5e1' }}>{percentComplete}.1% Track Adherence</span>
          </div>

          <div
            style={{
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.07)',
              borderRadius: '9999px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${percentComplete}%`,
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
          padding: '22px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={16} color="#818cf8" />
              <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Calibrated Profile Matrix
              </h3>
            </div>

            <button
              onClick={onEditGoals}
              style={{
                background: 'none',
                border: 'none',
                color: '#818cf8',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                padding: 0,
              }}
            >
              <span>Edit Target Goals (#43)</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Matrix Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Row 1: Target Role */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                fontSize: '0.74rem',
              }}
            >
              <span style={{ color: '#64748b' }}>Target Role</span>
              <span style={{ color: '#f8fafc', fontWeight: 600, maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentRole.roleName.split('&')[0]}
              </span>
            </div>

            {/* Row 2: Primary Focus */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                fontSize: '0.74rem',
              }}
            >
              <span style={{ color: '#64748b' }}>Primary Focus</span>
              <span
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  color: '#f87171',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              >
                {currentRole.primaryFocus}
              </span>
            </div>

            {/* Row 3: Experience Level */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                fontSize: '0.74rem',
              }}
            >
              <span style={{ color: '#64748b' }}>Experience Level</span>
              <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{currentRole.experienceLevel.split('(')[0]}</span>
            </div>

            {/* Row 4: Key Stack */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                fontSize: '0.74rem',
              }}
            >
              <span style={{ color: '#64748b' }}>Key Stack</span>
              <span style={{ color: '#94a3b8', fontSize: '0.7rem' }}>{currentRole.keyStack}</span>
            </div>
          </div>
        </div>

        {/* Footer Benchmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.74rem',
          }}
        >
          <div style={{ color: '#94a3b8' }}>
            Benchmark Gap: <strong style={{ color: '#f87171' }}>-{currentRole.scoreDelta.toFixed(1)} pts</strong>
          </div>

          <span
            style={{
              padding: '3px 9px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              fontSize: '0.68rem',
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
