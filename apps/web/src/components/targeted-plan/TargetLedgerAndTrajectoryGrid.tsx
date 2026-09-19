import React from 'react';
import {
  CheckSquare,
  TrendingUp,
  Clock,
  Info,
} from 'lucide-react';
import { CustomTargetsConfig, TargetRoleData } from '../../services/aiPlanStore';

interface TargetLedgerAndTrajectoryGridProps {
  customTargets?: CustomTargetsConfig;
  roleData?: TargetRoleData;
  onCustomizeTargets?: () => void;
}

export const TargetLedgerAndTrajectoryGrid: React.FC<TargetLedgerAndTrajectoryGridProps> = ({
  customTargets,
  roleData,
  onCustomizeTargets,
}) => {
  const targets = customTargets || {
    targetComposite: 80.0,
    dailyAlertTime: '09:00 AM (UTC+6)',
    alertActive: true,
    standardSessionsTarget: 4,
    technicalDrillsTarget: 16,
    communicationDrillsTarget: 2,
    speechDrillsTarget: 2,
    opticalDrillsTarget: 2,
  };

  const currentRole = roleData || {
    compositeScore: 80.0,
    baselineScore: 74.8,
    scoreDelta: 5.2,
  };

  const ledgerItems = [
    {
      label: 'Standard 5-Question Interview Sessions',
      value: `3 / ${targets.standardSessionsTarget} (${Math.round((3 / targets.standardSessionsTarget) * 100)}%)`,
      percent: Math.min(100, Math.round((3 / targets.standardSessionsTarget) * 100)),
    },
    {
      label: 'Targeted Technical Systems Micro-Drills',
      value: `12 / ${targets.technicalDrillsTarget} (${Math.round((12 / targets.technicalDrillsTarget) * 100)}%)`,
      percent: Math.min(100, Math.round((12 / targets.technicalDrillsTarget) * 100)),
    },
    {
      label: 'Communication BLUF & Minto Framing Drills',
      value: `2 / ${targets.communicationDrillsTarget} (100% Completed)`,
      percent: 100,
    },
    {
      label: 'Speech Cadence & Filler Token Calibration',
      value: `1 / ${targets.speechDrillsTarget} (${Math.round((1 / targets.speechDrillsTarget) * 100)}%)`,
      percent: Math.min(100, Math.round((1 / targets.speechDrillsTarget) * 100)),
    },
    {
      label: 'Optical Camera Framing & Cone Consistency',
      value: `2 / ${targets.opticalDrillsTarget} (100% Completed)`,
      percent: 100,
    },
  ];

  const trajectoryRows = [
    {
      rubric: 'Overall Composite Score',
      baseline: currentRole.baselineScore.toFixed(1),
      current: currentRole.compositeScore.toFixed(1),
      delta: `+${currentRole.scoreDelta > 0 ? currentRole.scoreDelta.toFixed(1) : '5.2'} pts`,
      isBadge: false,
    },
    {
      rubric: 'Technical Depth & Accuracy',
      baseline: (currentRole.baselineScore + 1.2).toFixed(1),
      current: (currentRole.compositeScore + 2.4).toFixed(1),
      delta: '+6.4 pts',
      isBadge: false,
    },
    {
      rubric: 'Response Completeness',
      baseline: (currentRole.baselineScore - 6.3).toFixed(1),
      current: (currentRole.compositeScore - 3.6).toFixed(1),
      delta: '+7.9 pts',
      isBadge: false,
    },
    {
      rubric: 'BLUF Framing Structure',
      baseline: (currentRole.baselineScore - 0.8).toFixed(1),
      current: (currentRole.compositeScore + 2.0).toFixed(1),
      delta: '+8.0 pts',
      isBadge: false,
    },
    {
      rubric: 'Speech Pacing Stability',
      baseline: '132 WPM',
      current: '138 WPM',
      delta: 'Optimal Band',
      isBadge: true,
    },
    {
      rubric: 'Optical Centering & Gaze',
      baseline: '86%',
      current: '92%',
      delta: '+6.0%',
      isBadge: false,
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {/* Left Card: Cycle Target Ledger */}
      <div
        style={{
          backgroundColor: '#0c1322',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckSquare size={16} color="#818cf8" />
              <h3 style={{ margin: 0, fontSize: '0.96rem', fontWeight: 700, color: '#f8fafc' }}>
                Cycle Target Ledger
              </h3>
            </div>
            <button
              onClick={onCustomizeTargets}
              style={{
                background: 'none',
                border: 'none',
                color: '#818cf8',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
              }}
            >
              Customize Targets
            </button>
          </div>

          {/* Progress Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {ledgerItems.map((item, idx) => (
              <div key={idx}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.74rem',
                    marginBottom: '6px',
                  }}
                >
                  <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>{item.value}</span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${item.percent}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
                      borderRadius: '9999px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Alert Banner */}
        <div
          style={{
            marginTop: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '10px',
            padding: '10px 14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={14} color="#818cf8" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#f8fafc' }}>
                Scheduled Practice Alert
              </span>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                Daily at {targets.dailyAlertTime}
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: '0.68rem',
              color: targets.alertActive ? '#a5b4fc' : '#64748b',
              backgroundColor: targets.alertActive ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              border: targets.alertActive ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2px 8px',
              borderRadius: '9999px',
              fontWeight: 600,
            }}
          >
            {targets.alertActive ? 'Active' : 'Muted'}
          </span>
        </div>
      </div>

      {/* Right Card: Measured Improvement Trajectory */}
      <div
        style={{
          backgroundColor: '#0c1322',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={16} color="#4ade80" />
              <h3 style={{ margin: 0, fontSize: '0.96rem', fontWeight: 700, color: '#f8fafc' }}>
                Measured Improvement Trajectory
              </h3>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Pre-Plan vs Recorded Current</span>
          </div>

          {/* Table */}
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.74rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <th style={{ textAlign: 'left', padding: '6px 8px', color: '#64748b', fontWeight: 600 }}>
                    EVALUATION RUBRIC
                  </th>
                  <th style={{ textAlign: 'center', padding: '6px 8px', color: '#64748b', fontWeight: 600 }}>
                    DAY 0 BASELINE
                  </th>
                  <th style={{ textAlign: 'center', padding: '6px 8px', color: '#64748b', fontWeight: 600 }}>
                    CURRENT RECORDED
                  </th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', color: '#64748b', fontWeight: 600 }}>
                    CYCLE DELTA
                  </th>
                </tr>
              </thead>
              <tbody>
                {trajectoryRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    style={{
                      borderBottom:
                        rIdx === trajectoryRows.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.03)',
                    }}
                  >
                    <td style={{ padding: '8px 8px', color: '#cbd5e1', fontWeight: 500 }}>{row.rubric}</td>
                    <td style={{ textAlign: 'center', padding: '8px 8px', color: '#94a3b8' }}>{row.baseline}</td>
                    <td style={{ textAlign: 'center', padding: '8px 8px', color: '#f8fafc', fontWeight: 700 }}>
                      {row.current}
                    </td>
                    <td style={{ textAlign: 'right', padding: '8px 8px' }}>
                      {row.isBadge ? (
                        <span
                          style={{
                            fontSize: '0.68rem',
                            color: '#38bdf8',
                            backgroundColor: 'rgba(56, 189, 248, 0.12)',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontWeight: 700,
                          }}
                        >
                          {row.delta}
                        </span>
                      ) : (
                        <span style={{ color: '#4ade80', fontWeight: 700 }}>{row.delta}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Note */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            fontSize: '0.68rem',
            color: '#64748b',
            lineHeight: 1.4,
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        >
          <Info size={12} style={{ flexShrink: 0, marginTop: '2px', color: '#64748b' }} />
          <span>
            Metrics represent direct evaluation deltas from comparable 5-question interview sessions. Demonstrates
            self-guided deliberate practice; does not guarantee employment outcomes.
          </span>
        </div>
      </div>
    </div>
  );
};
