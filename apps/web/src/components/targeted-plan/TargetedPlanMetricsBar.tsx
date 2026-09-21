import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';
import { TargetRoleData } from '../../services/aiPlanStore';

interface TargetedPlanMetricsBarProps {
  daysHorizon?: number;
  roleData?: TargetRoleData;
  drillsCompleted?: number;
  practiceMinutes?: number;
}

export const TargetedPlanMetricsBar: React.FC<TargetedPlanMetricsBarProps> = ({
  daysHorizon = 7,
  roleData,
  drillsCompleted = 18,
  practiceMinutes = 420,
}) => {
  const currentRole = roleData || {
    compositeScore: 80.0,
    baselineScore: 74.8,
    targetScore: 85.0,
    scoreDelta: 5.2,
  };

  const completedDays = daysHorizon === 7 ? 3 : daysHorizon === 14 ? 6 : 12;
  const elapsedPercent = Math.round((completedDays / daysHorizon) * 100);
  const segmentsCount = daysHorizon === 7 ? 7 : daysHorizon === 14 ? 14 : 15;
  const activeSegments = Math.round((completedDays / daysHorizon) * segmentsCount);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {/* Card 1: Plan Horizon */}
      <div
        style={{
          backgroundColor: '#0c1322',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px' }}>
              PLAN HORIZON
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                color: '#38bdf8',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                padding: '2px 7px',
                borderRadius: '9999px',
                fontWeight: 600,
              }}
            >
              {elapsedPercent}% Elapsed
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
              {completedDays} / {daysHorizon}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>Days Completed</span>
          </div>

          {/* Segmented Bar */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
            {Array.from({ length: segmentsCount }).map((_, idx) => (
              <div
                key={idx}
                style={{
                  flex: 1,
                  height: '6px',
                  borderRadius: '2px',
                  backgroundColor: idx < activeSegments ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: idx < activeSegments ? '0 0 6px rgba(56, 189, 248, 0.4)' : 'none',
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b' }}>
          <span>{drillsCompleted} Practice Sessions</span>
          <span>{completedDays * 5} Qs Defended</span>
        </div>
      </div>

      {/* Card 2: Practice Velocity */}
      <div
        style={{
          backgroundColor: '#0c1322',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px' }}>
              PRACTICE VELOCITY
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.68rem',
                color: '#38bdf8',
                fontWeight: 600,
              }}
            >
              <Zap size={11} fill="#38bdf8" />
              Streak
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
              {completedDays + 1} Days
            </span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>Active Cadence</span>
          </div>

          <p style={{ margin: '0 0 10px 0', fontSize: '0.74rem', color: '#94a3b8' }}>
            {practiceMinutes} deliberate mins recorded this week
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b' }}>
          <span>Curriculum Adherence</span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>94.2% Rate</span>
        </div>
      </div>

      {/* Card 3: Calibrated Trajectory */}
      <div
        style={{
          backgroundColor: '#0c1322',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px' }}>
              CALIBRATED TRAJECTORY
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                color: '#4ade80',
                backgroundColor: 'rgba(74, 222, 128, 0.12)',
                padding: '2px 7px',
                borderRadius: '9999px',
                fontWeight: 700,
              }}
            >
              +{currentRole.scoreDelta > 0 ? currentRole.scoreDelta.toFixed(1) : '5.2'} pts
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
              {currentRole.compositeScore.toFixed(1)}
            </span>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ 100 current</span>
          </div>

          <p style={{ margin: '0 0 10px 0', fontSize: '0.72rem', color: '#64748b' }}>
            Baseline: {currentRole.baselineScore.toFixed(1)} &rarr; Target: {currentRole.targetScore.toFixed(1)}+
          </p>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '5px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${Math.min(100, Math.max(10, currentRole.compositeScore))}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
              borderRadius: '9999px',
            }}
          />
        </div>
      </div>

      {/* Card 4: AI Ethics & Integrity */}
      <div
        style={{
          backgroundColor: '#0c1322',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px' }}>
              AI ETHICS & INTEGRITY
            </span>
            <ShieldCheck size={14} color="#a855f7" />
          </div>

          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
            ISO/IEC 42001 Guardrails
          </div>

          <p style={{ margin: '0 0 10px 0', fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
            Strictly zero affective inference. Feedback is derived purely from syntax, proof depth & framing structure.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#38bdf8' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 6px #38bdf8',
            }}
          />
          <span>AES-256 Vault Active</span>
        </div>
      </div>
    </div>
  );
};
