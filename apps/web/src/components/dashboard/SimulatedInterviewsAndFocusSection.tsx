import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface SimulatedInterview {
  id: string;
  trackName: string;
  indicatorColor: string;
  seniority: string;
  score?: number;
  isProcessing?: boolean;
  format: string;
  date: string;
  actionText: string;
  actionType: 'feedback' | 'stream';
}

interface FocusArea {
  id: string;
  title: string;
  badge: string;
  badgeType: 'warning' | 'success' | 'info';
  quote: string;
}

interface SimulatedInterviewsAndFocusSectionProps {
  onViewAllHistory?: () => void;
  onViewFeedback?: (id: string) => void;
  onInspectStream?: (id: string) => void;
  onConfigureDrills?: () => void;
}

export const SimulatedInterviewsAndFocusSection: React.FC<SimulatedInterviewsAndFocusSectionProps> = ({
  onViewAllHistory,
  onViewFeedback,
  onInspectStream,
  onConfigureDrills,
}) => {
  const interviews: SimulatedInterview[] = [
    {
      id: 'sess-1',
      trackName: 'Python Backend Developer',
      indicatorColor: '#10b981',
      seniority: 'Senior',
      score: 82,
      format: '5 Questions',
      date: 'Sep 10',
      actionText: 'View Feedback',
      actionType: 'feedback',
    },
    {
      id: 'sess-2',
      trackName: 'Flutter & Dart Systems',
      indicatorColor: '#38bdf8',
      seniority: 'Intermediate',
      score: 76,
      format: '5 Questions',
      date: 'Sep 07',
      actionText: 'View Feedback',
      actionType: 'feedback',
    },
    {
      id: 'sess-3',
      trackName: 'ML Ops & Model Deployment',
      indicatorColor: '#f59e0b',
      seniority: 'Advanced',
      isProcessing: true,
      format: '5 Questions',
      date: 'Sep 05',
      actionText: 'Inspect Stream',
      actionType: 'stream',
    },
  ];

  const focusAreas: FocusArea[] = [
    {
      id: 'focus-1',
      title: 'Problem Solving Decomposition',
      badge: 'Needs Work',
      badgeType: 'warning',
      quote: 'Practice speaking your solution step-by-step before giving the final answer code.',
    },
    {
      id: 'focus-2',
      title: 'Speaking Pace & Cadence',
      badge: 'Optimal',
      badgeType: 'success',
      quote: 'Maintained 142 WPM benchmark throughout Question 2 and Question 4.',
    },
    {
      id: 'focus-3',
      title: 'Camera Attention/Hygiene',
      badge: 'Observed',
      badgeType: 'info',
      quote: 'Slight gaze drift towards secondary monitor during algorithm explanations.',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(360px, 1.85fr) minmax(320px, 1.15fr)',
        gap: '18px',
        marginBottom: '24px',
      }}
      className="simulated-focus-grid"
    >
      {/* Left Card: Recent Simulated Interviews */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Recent Simulated Interviews
            </h3>

            <button
              onClick={onViewAllHistory}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#818cf8',
                fontSize: '0.76rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              View All History
            </button>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
            Select 5-question brief history and re-mark simulation
          </p>

          {/* Table Container */}
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                    INTERVIEW TRACK
                  </th>
                  <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                    SENIORITY
                  </th>
                  <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                    SCORE
                  </th>
                  <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                    FORMAT
                  </th>
                  <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                    DATE
                  </th>
                  <th style={{ textAlign: 'right', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {interviews.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {/* Track */}
                    <td style={{ padding: '12px 10px', color: '#f1f5f9', fontWeight: 600 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            backgroundColor: item.indicatorColor,
                            boxShadow: `0 0 6px ${item.indicatorColor}`,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ whiteSpace: 'nowrap' }}>{item.trackName}</span>
                      </div>
                    </td>

                    {/* Seniority */}
                    <td style={{ padding: '12px 10px', color: '#94a3b8' }}>
                      {item.seniority}
                    </td>

                    {/* Score / Processing */}
                    <td style={{ padding: '12px 10px' }}>
                      {item.isProcessing ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(245, 158, 11, 0.15)',
                            border: '1px solid rgba(245, 158, 11, 0.3)',
                            color: '#fbbf24',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                          }}
                        >
                          <Loader2 size={11} className="spin-animate" />
                          <span>Processing...</span>
                        </span>
                      ) : (
                        <span
                          style={{
                            padding: '3px 8px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(99, 102, 241, 0.15)',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            color: '#a5b4fc',
                            fontSize: '0.74rem',
                            fontWeight: 700,
                          }}
                        >
                          {item.score} <span style={{ color: '#64748b', fontWeight: 400 }}>/ 100</span>
                        </span>
                      )}
                    </td>

                    {/* Format */}
                    <td style={{ padding: '12px 10px', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                      {item.format}
                    </td>

                    {/* Date */}
                    <td style={{ padding: '12px 10px', color: '#64748b', whiteSpace: 'nowrap' }}>
                      {item.date}
                    </td>

                    {/* Action */}
                    <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                      {item.actionType === 'stream' ? (
                        <button
                          onClick={() => onInspectStream && onInspectStream(item.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#f59e0b',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.actionText}
                        </button>
                      ) : (
                        <button
                          onClick={() => onViewFeedback && onViewFeedback(item.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#818cf8',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.actionText}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div
          style={{
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.71rem',
            color: '#64748b',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span>Standard Rule: Inprep AI guarantees exactly 5 targeted questions per mock simulation.</span>
          <span style={{ color: '#94a3b8' }}>Showing 3 of 14 sessions</span>
        </div>
      </div>

      {/* Right Card: Your Focus Areas */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Your Focus Areas
            </h3>

            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                color: '#fbbf24',
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              Actionable
            </span>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 14px 0' }}>
            Top 3 areas identified from your latest multimodal diagnostics:
          </p>

          {/* 3 Focus Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {focusAreas.map((item) => {
              const badgeColors = {
                warning: { bg: 'rgba(244, 63, 94, 0.15)', text: '#fb7185', border: 'rgba(244, 63, 94, 0.3)' },
                success: { bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399', border: 'rgba(16, 185, 129, 0.3)' },
                info: { bg: 'rgba(6, 182, 212, 0.15)', text: '#38bdf8', border: 'rgba(6, 182, 212, 0.3)' },
              }[item.badgeType];

              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '12px',
                    padding: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f1f5f9' }}>
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        padding: '2px 7px',
                        borderRadius: '9999px',
                        backgroundColor: badgeColors.bg,
                        color: badgeColors.text,
                        border: `1px solid ${badgeColors.border}`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0, lineHeight: 1.45, fontStyle: 'italic' }}>
                    &quot;{item.quote}&quot;
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', marginTop: '12px' }}>
          <button
            onClick={onConfigureDrills}
            style={{
              width: '100%',
              padding: '9px 14px',
              backgroundColor: 'rgba(99, 102, 241, 0.14)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '9px',
              color: '#c7d2fe',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.25)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.14)';
              e.currentTarget.style.color = '#c7d2fe';
            }}
          >
            <span>Configure Practice Drills</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
