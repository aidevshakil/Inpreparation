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

interface DayScheduleAndProgressionProps {
  onStartDay5?: () => void;
  onViewBriefing?: () => void;
}

export const DayScheduleAndProgression: React.FC<DayScheduleAndProgressionProps> = ({
  onStartDay5,
  onViewBriefing,
}) => {
  const days = [
    {
      day: 'Day 1',
      title: 'Asyncio Event Loop & GIL Contention',
      date: 'Oct 21 • 5 Questions Defended',
      status: 'complete',
      score: '88 / 100',
    },
    {
      day: 'Day 2',
      title: 'Communication Structure & BLUF Framing',
      date: 'Oct 22 • 4 Diagnostic Scenarios',
      status: 'complete',
      score: '82 / 100',
    },
    {
      day: 'Day 3',
      title: 'Distributed Lock Expiry & Fencing Tokens',
      date: 'Oct 23 • Redlock & ZooKeeper Deep Dive',
      status: 'complete',
      score: '84 / 100',
    },
    {
      day: 'Day 4',
      title: 'Rate Limiter Backpressure Defense',
      date: 'Oct 24 • Flagged Vector Triggered #41',
      status: 'remediation',
      score: '69 / 100',
    },
    {
      day: 'Day 5',
      title: 'Distributed Consensus & Clock Drift (Today)',
      date: '5 System Invariant Defense Scenarios Scheduled',
      status: 'in-progress',
      badge: 'IN PROGRESS',
    },
    {
      day: 'Day 6',
      title: 'PostgreSQL Connection Pool & PgBouncer Starvation',
      date: 'Scheduled for Friday',
      status: 'locked',
    },
    {
      day: 'Day 7',
      title: 'Comprehensive Staff L6 Capstone Mock',
      date: 'Strict 5-Prompt Defense Simulation',
      status: 'locked',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
        gap: '20px',
        marginBottom: '24px',
        alignItems: 'stretch',
      }}
    >
      {/* Left Card: Scheduled Today */}
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
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.95) 100%)',
        }}
      >
        <div>
          {/* Top badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 9px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                fontSize: '0.68rem',
                fontWeight: 700,
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
              <span>SCHEDULED TODAY</span>
            </span>

            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Day 5 of 7 • Thursday</span>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '6px 0 0 0', lineHeight: 1.35 }}>
            Distributed Consensus &amp; Clock Skew Under GC Pauses
          </h3>

          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '6px 0 0 0', lineHeight: 1.45 }}>
            <strong style={{ color: '#cbd5e1' }}>Focus:</strong> 1 Standard 5-Question Interview Simulation (Strict 3-Prompt Defense) + 1 Micro-Drill.
          </p>

          {/* Strict Behavioral Directives */}
          <div style={{ marginTop: '16px' }}>
            <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: '10px' }}>
              STRICT BEHAVIORAL DIRECTIVES:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                {
                  num: '1',
                  text: 'State atomic invariants upfront using BLUF framing within the first 25 seconds.',
                },
                {
                  num: '2',
                  text: 'Explicitly defend clock drift reconciliation trade-offs under high-throughput partition.',
                },
                {
                  num: '3',
                  text: 'Maintain eye-line stability and optical center cone framing >90% throughout.',
                },
              ].map((item) => (
                <div key={item.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.74rem' }}>
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(99, 102, 241, 0.2)',
                      color: '#a5b4fc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    {item.num}
                  </span>
                  <span style={{ color: '#cbd5e1', lineHeight: 1.45 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button & Briefing Link */}
        <div>
          <button
            onClick={onStartDay5}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '11px 16px',
              background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
              border: 'none',
              borderRadius: '9px',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
              transition: 'all 0.15s ease',
            }}
          >
            <Play size={14} fill="#ffffff" />
            <span>Start Day 5 Practice (5 Questions)</span>
          </button>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button
              onClick={onViewBriefing}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                fontSize: '0.7rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>View Detailed Session Briefing (#42P)</span>
              <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Card: Adaptive 7-Day Progression */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '22px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '14px',
          background: 'linear-gradient(180deg, rgba(20, 26, 46, 0.7) 0%, rgba(13, 19, 34, 0.95) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={16} style={{ color: '#c084fc' }} />
            <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Adaptive 7-Day Progression
            </h3>
          </div>
          <span style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>
            L6 Competency Curve
          </span>
        </div>

        {/* 7 Days List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {days.map((item, idx) => {
            const isCompleted = item.status === 'complete';
            const isRemediation = item.status === 'remediation';
            const isInProgress = item.status === 'in-progress';
            const isLocked = item.status === 'locked';

            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  backgroundColor: isInProgress
                    ? 'rgba(99, 102, 241, 0.12)'
                    : 'rgba(255, 255, 255, 0.02)',
                  border: isInProgress
                    ? '1px solid rgba(99, 102, 241, 0.35)'
                    : '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* Status icon circle */}
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: isCompleted
                        ? 'rgba(16, 185, 129, 0.15)'
                        : isRemediation
                        ? 'rgba(239, 68, 68, 0.15)'
                        : isInProgress
                        ? 'rgba(99, 102, 241, 0.2)'
                        : 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isCompleted && <Check size={12} style={{ color: '#34d399' }} />}
                    {isRemediation && <AlertTriangle size={12} style={{ color: '#f87171' }} />}
                    {isInProgress && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#818cf8' }} />}
                    {isLocked && <Lock size={11} style={{ color: '#475569' }} />}
                  </div>

                  <div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 700, color: isLocked ? '#64748b' : '#f1f5f9' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#64748b', marginTop: '1px' }}>
                      {item.date}
                    </div>
                  </div>
                </div>

                {/* Score or In Progress badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {item.score && (
                    <span
                      style={{
                        padding: '2px 7px',
                        borderRadius: '5px',
                        backgroundColor: isRemediation ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isRemediation ? 'rgba(239, 68, 68, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                        color: isRemediation ? '#f87171' : '#cbd5e1',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                      }}
                    >
                      {item.score}
                    </span>
                  )}

                  {isInProgress && (
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        backgroundColor: '#4f46e5',
                        color: '#ffffff',
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        letterSpacing: '0.4px',
                      }}
                    >
                      IN PROGRESS
                    </span>
                  )}

                  {!isLocked && <ChevronRight size={13} style={{ color: '#64748b' }} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
