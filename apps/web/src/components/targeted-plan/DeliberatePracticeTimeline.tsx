import React from 'react';
import { Calendar, CheckCircle2, Lock, TrendingUp } from 'lucide-react';
import { DayPlanDetail } from '../../services/aiPlanStore';

interface DeliberatePracticeTimelineProps {
  days?: DayPlanDetail[];
  activeDayNumber?: number;
  onSelectDay?: (dayNumber: number) => void;
  onStartActiveDay?: () => void;
}

export const DeliberatePracticeTimeline: React.FC<DeliberatePracticeTimelineProps> = ({
  days,
  activeDayNumber = 4,
  onSelectDay,
  onStartActiveDay,
}) => {
  const displayDays = days && days.length > 0 ? days : [
    {
      dayNumber: 1,
      label: 'DAY 01',
      title: 'Asyncio Loop & GIL Contention',
      subtitle: 'Python Concurrency',
      date: 'Oct 21',
      score: '86/100',
      status: 'completed' as const,
      simulationId: 'SIM-PY-9101',
      simulationFocus: 'Concurrency',
      estimatedMinutes: '35m',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 2,
      label: 'DAY 02',
      title: 'Communication & BLUF Framing',
      subtitle: 'Answer Structure',
      date: 'Oct 22',
      score: '82/100',
      status: 'completed' as const,
      simulationId: 'SIM-PY-9102',
      simulationFocus: 'BLUF Framing',
      estimatedMinutes: '40m',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 3,
      label: 'DAY 03',
      title: 'Distributed Lock & Fencing...',
      subtitle: 'Consensus & Leases',
      date: 'Oct 23',
      score: '84/100',
      status: 'completed' as const,
      simulationId: 'SIM-PY-9103',
      simulationFocus: 'Distributed Mutex',
      estimatedMinutes: '35m',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 4,
      label: 'DAY 04',
      title: 'Technical Answer...',
      subtitle: 'Simulation #9204',
      date: 'Oct 24',
      status: 'active' as const,
      simulationId: 'SIM-PY-9204',
      simulationFocus: 'Staff Defense',
      estimatedMinutes: '45m',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 5,
      label: 'DAY 05',
      title: 'SQL Execution & PgBouncer...',
      subtitle: 'Storage Engines',
      date: 'Oct 25',
      score: 'Est. 30m',
      status: 'locked' as const,
      simulationId: 'SIM-PY-9205',
      simulationFocus: 'Storage & Pools',
      estimatedMinutes: '30m',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 6,
      label: 'DAY 06',
      title: 'Staff L6 Capstone Mock',
      subtitle: 'Multimodal Sim',
      date: 'Oct 26',
      score: 'Est. 45m',
      status: 'locked' as const,
      simulationId: 'SIM-PY-9206',
      simulationFocus: 'Full Capstone',
      estimatedMinutes: '45m',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
    {
      dayNumber: 7,
      label: 'DAY 07',
      title: 'Cycle Audit & Synthesis',
      subtitle: 'Vs Baseline #34',
      date: 'Oct 27',
      score: 'Evaluation',
      status: 'evaluation' as const,
      simulationId: 'SIM-PY-9207',
      simulationFocus: 'Audit',
      estimatedMinutes: '50m',
      directives: [],
      objectives: [],
      prepNotes: [],
    },
  ];

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Header & Legend */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={16} color="#818cf8" />
          <h3 style={{ margin: 0, fontSize: '0.96rem', fontWeight: 700, color: '#ffffff' }}>
            Deliberate Practice Schedule (Days 1–7)
          </h3>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.72rem', color: '#94a3b8' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
            <span>Completed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#818cf8' }} />
            <span>Active Selected</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#475569' }} />
            <span>Upcoming / Locked</span>
          </div>
        </div>
      </div>

      {/* Horizontal 7-Day Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px',
        }}
      >
        {displayDays.map((item) => {
          const isSelected = item.dayNumber === activeDayNumber;
          const isCompleted = item.status === 'completed';
          const isLocked = item.status === 'locked';
          const isEval = item.status === 'evaluation';

          return (
            <div
              key={item.dayNumber}
              onClick={() => {
                if (onSelectDay) onSelectDay(item.dayNumber);
              }}
              style={{
                backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.16)' : '#0c1322',
                border: isSelected
                  ? '1px solid #818cf8'
                  : isCompleted
                  ? '1px solid rgba(56, 189, 248, 0.25)'
                  : '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '12px',
                padding: '14px 12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '140px',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                position: 'relative',
                boxShadow: isSelected ? '0 0 20px rgba(99, 102, 241, 0.25)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              }}
              onMouseLeave={(e) => {
                if (!isSelected)
                  e.currentTarget.style.borderColor = isCompleted
                    ? 'rgba(56, 189, 248, 0.25)'
                    : 'rgba(255, 255, 255, 0.07)';
              }}
            >
              <div>
                {/* Top Row: Label & Status Icon/Badge */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: isSelected ? '#c7d2fe' : '#64748b',
                      letterSpacing: '0.4px',
                    }}
                  >
                    {item.label}
                  </span>

                  {isCompleted && <CheckCircle2 size={13} color="#38bdf8" />}
                  {isSelected && (
                    <span
                      style={{
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        backgroundColor: '#6366f1',
                        padding: '1px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      SELECTED
                    </span>
                  )}
                  {isLocked && !isSelected && <Lock size={12} color="#475569" />}
                  {isEval && !isSelected && <TrendingUp size={12} color="#818cf8" />}
                </div>

                {/* Day Title */}
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    lineHeight: 1.25,
                    marginBottom: '4px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  title={item.title}
                >
                  {item.title}
                </div>

                {/* Subtitle */}
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: '#64748b',
                    lineHeight: 1.2,
                    marginBottom: '12px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.subtitle}
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div>
                {isSelected ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onStartActiveDay) onStartActiveDay();
                    }}
                    style={{
                      width: '100%',
                      padding: '5px 8px',
                      backgroundColor: '#6366f1',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Start Practice</span>
                    <span>&rarr;</span>
                  </button>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.68rem',
                      color: '#64748b',
                    }}
                  >
                    <span>{item.date?.split('•')[0] || `Oct ${20 + item.dayNumber}`}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: isCompleted ? '#38bdf8' : '#94a3b8',
                      }}
                    >
                      {item.score || 'Scheduled'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
