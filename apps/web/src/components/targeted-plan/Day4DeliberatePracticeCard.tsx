import React from 'react';
import {
  Clock,
  Search,
  BookOpen,
  Play,
  CheckCircle2,
  Sliders,
  Shield,
  Eye,
} from 'lucide-react';
import { DayPlanDetail } from '../../services/aiPlanStore';

interface Day4DeliberatePracticeCardProps {
  dayDetail?: DayPlanDetail;
  onLaunchSimulation?: (title: string) => void;
  onInspectFlaggedQ4?: () => void;
  onViewPrepNotes?: () => void;
}

export const Day4DeliberatePracticeCard: React.FC<Day4DeliberatePracticeCardProps> = ({
  dayDetail,
  onLaunchSimulation,
  onInspectFlaggedQ4,
  onViewPrepNotes,
}) => {
  const currentDay = dayDetail || {
    dayNumber: 4,
    label: 'DAY 04',
    title: 'Technical Answer Completeness & Boundary Trade-off Proofs',
    subtitle: 'Staff Backend & Concurrency Defense Simulation',
    simulationId: 'SIM-PY-9204',
    simulationFocus: 'Staff Backend & Concurrency Defense Simulation',
    estimatedMinutes: '35–45 minutes total',
    objectives: [
      {
        number: '01',
        title: 'BLUF Framing',
        metric: '< 25s Window',
        metricColor: '#38bdf8',
        description:
          'Lead immediately with the core distributed invariant (e.g., CAS atomicity or quorum write guarantees) before dissecting architecture.',
      },
      {
        number: '02',
        title: 'Concrete Trade-offs',
        metric: 'Numbers > Adjectives',
        metricColor: '#a855f7',
        description:
          'Quantify Redis memory overhead vs local in-process cache hit ratios under thundering herds. Do not use generic words like "fast" or "heavy".',
      },
      {
        number: '03',
        title: 'Boundary Defense',
        metric: 'P99.9 Edge Cases',
        metricColor: '#f43f5e',
        description:
          'Explicitly detail NTP clock skew reconciliation and fencing token validation during network partition split-brain scenarios.',
      },
      {
        number: '04',
        title: 'Optical Framing',
        metric: '> 90% Gaze Lock',
        metricColor: '#38bdf8',
        description:
          'Maintain chest-up framing cone and direct lens gaze while organizing spontaneous architecture calculations on your scratchpad.',
      },
    ],
  };

  const getIconForIndex = (idx: number) => {
    if (idx === 0) return <CheckCircle2 size={13} color="#38bdf8" />;
    if (idx === 1) return <Sliders size={13} color="#a855f7" />;
    if (idx === 2) return <Shield size={13} color="#f43f5e" />;
    return <Eye size={13} color="#38bdf8" />;
  };

  return (
    <div
      style={{
        backgroundColor: '#0c1322',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        borderRadius: '14px',
        padding: '22px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div>
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              color: '#c7d2fe',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.4px',
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
            {currentDay.label} • DELIBERATE PRACTICE
          </span>

          <span
            style={{
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontSize: '0.72rem',
              fontWeight: 500,
            }}
          >
            5 Questions + 1 Micro-Drill
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontSize: '0.72rem',
              fontWeight: 500,
            }}
          >
            <Clock size={11} />
            Est. {currentDay.estimatedMinutes}
          </span>
        </div>

        {/* Title & Simulation Identifier */}
        <h2
          style={{
            margin: '0 0 6px 0',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          {currentDay.title}
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#818cf8', marginBottom: '18px' }}>
          <span>Simulation #{currentDay.simulationId}</span>
          <span>•</span>
          <span style={{ color: '#94a3b8' }}>{currentDay.simulationFocus}</span>
        </div>

        {/* Section Heading */}
        <div
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          TODAY'S CORE PERFORMANCE OBJECTIVES (CALIBRATED AGAINST L6 BENCHMARKS):
        </div>

        {/* 2x2 Objective Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '12px',
            marginBottom: '22px',
          }}
        >
          {currentDay.objectives.map((obj, idx) => (
            <div
              key={obj.number}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {getIconForIndex(idx)}
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#f8fafc' }}>
                    {obj.number}. {obj.title}
                  </span>
                </div>
                <span style={{ fontSize: '0.68rem', color: obj.metricColor, fontWeight: 600 }}>
                  {obj.metric}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.45 }}>
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={onInspectFlaggedQ4}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Search size={12} />
            <span>Inspect Flagged Q4 (#41)</span>
          </button>

          <button
            onClick={onViewPrepNotes}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <BookOpen size={12} />
            <span>Prep Notes (#29)</span>
          </button>
        </div>

        <button
          onClick={() => {
            if (onLaunchSimulation) {
              onLaunchSimulation(`${currentDay.label}: ${currentDay.title} (${currentDay.simulationId})`);
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 18px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            border: 'none',
            borderRadius: '9px',
            color: '#ffffff',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
          }}
        >
          <Play size={13} fill="#ffffff" />
          <span>Launch {currentDay.label} Simulation (5 Qs)</span>
        </button>
      </div>
    </div>
  );
};
