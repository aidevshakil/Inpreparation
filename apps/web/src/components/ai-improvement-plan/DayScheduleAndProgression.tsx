import React from 'react';
import {
  Play,
  TrendingUp,
  Check,
  AlertTriangle,
  Lock,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { DayPlanDetail } from '../../services/aiPlanStore';

interface DayScheduleAndProgressionProps {
  days?: DayPlanDetail[];
  activeDay?: DayPlanDetail;
  onSelectDay?: (dayNumber: number) => void;
  onStartPractice?: (title: string) => void;
  onViewBriefing?: (dayNumber: number) => void;
}

export const DayScheduleAndProgression: React.FC<DayScheduleAndProgressionProps> = ({
  days,
  activeDay,
  onSelectDay,
  onStartPractice,
  onViewBriefing,
}) => {
  const currentDay: DayPlanDetail = activeDay || {
    dayNumber: 5,
    label: 'DAY 05',
    date: 'Oct 25 • Est. 30m',
    title: 'Distributed Consensus & Clock Drift Under GC Pauses',
    subtitle: 'Consensus & Clock Drift',
    status: 'active',
    simulationId: 'SIM-PY-9205',
    simulationFocus: 'Focus: 1 Standard 5-Question Interview Simulation (Strict 3-Prompt Defense) + 1 Micro-Drill.',
    estimatedMinutes: '30 Mins',
    directives: [
      'State atomic invariants upfront using BLUF framing within the first 25 seconds.',
      'Explicitly defend clock drift reconciliation trade-offs under high-throughput partition.',
      'Maintain eye-line stability and optical center cone framing >90% throughout.',
    ],
    objectives: [],
    prepNotes: [],
  };

  const displayDays = days && days.length > 0 ? days : [
    {
      dayNumber: 1,
      label: 'Day 1',
      title: 'Asyncio Event Loop & GIL Contention',
      date: 'Oct 21 • 5 Questions Defended',
      status: 'completed' as const,
      score: '86 / 100',
      subtitle: '',
      simulationId: '',
      simulationFocus: '',
      estimatedMinutes: '',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 2,
      label: 'Day 2',
      title: 'Communication Structure & BLUF Framing',
      date: 'Oct 22 • 4 Diagnostic Scenarios',
      status: 'completed' as const,
      score: '82 / 100',
      subtitle: '',
      simulationId: '',
      simulationFocus: '',
      estimatedMinutes: '',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 3,
      label: 'Day 3',
      title: 'Distributed Lock Expiry & Fencing Tokens',
      date: 'Oct 23 • Redlock & ZooKeeper Deep Dive',
      status: 'completed' as const,
      score: '84 / 100',
      subtitle: '',
      simulationId: '',
      simulationFocus: '',
      estimatedMinutes: '',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 4,
      label: 'Day 4',
      title: 'Rate Limiter Backpressure Defense',
      date: 'Oct 24 • Flagged Vector Triggered #41',
      status: 'active' as const,
      score: '69 / 100',
      subtitle: '',
      simulationId: '',
      simulationFocus: '',
      estimatedMinutes: '',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 5,
      label: 'Day 5',
      title: 'Distributed Consensus & Clock Drift (Today)',
      date: '5 System Invariant Defense Scenarios Scheduled',
      status: 'active' as const,
      subtitle: '',
      simulationId: '',
      simulationFocus: '',
      estimatedMinutes: '',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 6,
      label: 'Day 6',
      title: 'PostgreSQL Connection Pool & PgBouncer Starvation',
      date: 'Scheduled for Friday',
      status: 'locked' as const,
      subtitle: '',
      simulationId: '',
      simulationFocus: '',
      estimatedMinutes: '',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 7,
      label: 'Day 7',
      title: 'Comprehensive Staff L6 Capstone Mock',
      date: 'Strict 5-Prompt Defense Simulation',
      status: 'locked' as const,
      subtitle: '',
      simulationId: '',
      simulationFocus: '',
      estimatedMinutes: '',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(340px, 1fr)',
        gap: '20px',
        marginBottom: '24px',
        alignItems: 'stretch',
      }}
    >
      {/* Left Card: Scheduled Focus */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          padding: '22px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '16px',
          background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.4) 0%, rgba(13, 19, 34, 0.95) 100%)',
          position: 'relative',
        }}
      >
        <div>
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '2px 8px',
                borderRadius: '5px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '0.4px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
              SCHEDULED ACTIVE
            </span>

            <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              {currentDay.label} of 7 • Practice Focus
            </span>
          </div>

          {/* Title */}
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0', lineHeight: 1.3 }}>
            {currentDay.title}
          </h3>

          {/* Subtitle description */}
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
            {currentDay.simulationFocus || 'Focus: 1 Standard 5-Question Interview Simulation (Strict 3-Prompt Defense) + 1 Micro-Drill.'}
          </p>

          {/* Strict Behavioral Directives */}
          <div>
            <div
              style={{
                fontSize: '0.66rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              STRICT BEHAVIORAL DIRECTIVES:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(currentDay.directives.length > 0 ? currentDay.directives : [
                'State atomic invariants upfront using BLUF framing within the first 25 seconds.',
                'Explicitly defend clock drift reconciliation trade-offs under high-throughput partition.',
                'Maintain eye-line stability and optical center cone framing >90% throughout.',
              ]).map((dir, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.73rem' }}>
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(99, 102, 241, 0.2)',
                      color: '#a5b4fc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.64rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span style={{ color: '#cbd5e1', lineHeight: 1.4 }}>{dir}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '10px' }}>
          <button
            onClick={() => {
              if (onStartPractice) {
                onStartPractice(`${currentDay.label}: ${currentDay.title}`);
              }
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '11px 16px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              border: 'none',
              borderRadius: '9px',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
              transition: 'all 0.15s ease',
            }}
          >
            <Play size={14} fill="#ffffff" />
            <span>Start {currentDay.label} Practice (5 Questions)</span>
          </button>

          <button
            onClick={() => {
              if (onViewBriefing) onViewBriefing(currentDay.dayNumber);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#818cf8',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              padding: '4px 0',
            }}
          >
            <span>View Detailed Session Briefing ({currentDay.simulationId || '#42P'})</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Right Card: Adaptive 7-Day Progression */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={16} color="#818cf8" />
              <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Adaptive 7-Day Progression
              </h3>
            </div>

            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>L6 Competency Curve</span>
          </div>

          {/* Days List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {displayDays.map((d) => {
              const isSelected = d.dayNumber === currentDay.dayNumber;
              const isComplete = d.dayNumber < 4;
              const isDay4Remediation = d.dayNumber === 4;
              const isInProgress = d.dayNumber === 5;
              const isLocked = d.dayNumber > 5;

              return (
                <div
                  key={d.dayNumber}
                  onClick={() => {
                    if (onSelectDay) onSelectDay(d.dayNumber);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: isSelected
                      ? 'rgba(99, 102, 241, 0.18)'
                      : 'rgba(255, 255, 255, 0.02)',
                    border: isSelected
                      ? '1px solid rgba(99, 102, 241, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    {/* Status Icon */}
                    {isComplete && (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(20, 184, 166, 0.2)',
                          color: '#14b8a6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}

                    {isDay4Remediation && (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(239, 68, 68, 0.2)',
                          color: '#ef4444',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <AlertTriangle size={12} />
                      </div>
                    )}

                    {isInProgress && (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(99, 102, 241, 0.25)',
                          color: '#818cf8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        5
                      </div>
                    )}

                    {isLocked && (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          color: '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Lock size={11} />
                      </div>
                    )}

                    {/* Text Title & Subtitle */}
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: isSelected ? 700 : 600,
                          color: isSelected ? '#ffffff' : '#e2e8f0',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {d.label || `Day ${d.dayNumber}`}: {d.title}
                      </span>
                      <span style={{ fontSize: '0.65rem', color: '#64748b' }}>
                        {d.date || `Oct ${20 + d.dayNumber}`}
                      </span>
                    </div>
                  </div>

                  {/* Right Badge or Chevron */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, marginLeft: '8px' }}>
                    {d.score && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: isDay4Remediation ? '#f87171' : '#38bdf8',
                        }}
                      >
                        {d.score}
                      </span>
                    )}

                    {isInProgress && !d.score && (
                      <span
                        style={{
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: '4px',
                          backgroundColor: '#6366f1',
                          color: '#ffffff',
                        }}
                      >
                        IN PROGRESS
                      </span>
                    )}

                    <ChevronRight size={13} color="#64748b" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
