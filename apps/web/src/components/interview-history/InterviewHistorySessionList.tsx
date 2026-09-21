import React from 'react';
import { CheckCircle2, Clock, RefreshCw } from 'lucide-react';

export interface HistorySessionItem {
  id: string;
  codeBadge: string;
  title: string;
  subtext: string;
  date: string;
  duration: string;
  progressText: string;
  progressPercent: number;
  statusType: 'defended' | 'in_progress' | 'synthesizing';
  score?: number;
  scoreStatusText?: string;
  scoreStatusColor?: string;
  isPending?: boolean;
}

interface InterviewHistorySessionListProps {
  sessions: HistorySessionItem[];
  selectedSessionId: string | null;
  onSelectSession: (id: string) => void;
  loading?: boolean;
}

export const InterviewHistorySessionList: React.FC<InterviewHistorySessionListProps> = ({
  sessions,
  selectedSessionId,
  onSelectSession,
  loading = false,
}) => {
  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#64748b', fontSize: '0.82rem' }}>
        Loading simulation history...
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <div
        style={{
          padding: '48px 32px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px dashed rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          color: '#94a3b8',
        }}
      >
        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
          No simulation sessions yet
        </div>
        <div style={{ fontSize: '0.78rem', lineHeight: 1.5 }}>
          Complete a mock interview to see your defended sessions here.
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Column Headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 2.2fr) minmax(130px, 1.2fr) minmax(130px, 1fr) minmax(110px, 1fr)',
          gap: '12px',
          padding: '4px 16px',
          fontSize: '0.66rem',
          fontWeight: 700,
          color: '#64748b',
          letterSpacing: '0.6px',
          textTransform: 'uppercase',
        }}
      >
        <span>SESSION / TRACK</span>
        <span>DATE & CADENCE</span>
        <span>5-Q PROGRESS</span>
        <span>DETERMINISTIC SCORE</span>
      </div>

      {/* Rows */}
      {sessions.map((s) => {
        const isSelected = selectedSessionId === s.id;

        return (
          <div
            key={s.id}
            onClick={() => onSelectSession(s.id)}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(240px, 2.2fr) minmax(130px, 1.2fr) minmax(130px, 1fr) minmax(110px, 1fr)',
              gap: '12px',
              alignItems: 'center',
              padding: '16px',
              borderRadius: '12px',
              background: isSelected ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.02)',
              border: isSelected
                ? '1px solid rgba(129, 140, 248, 0.45)'
                : '1px solid rgba(255, 255, 255, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: isSelected ? '0 4px 18px rgba(99, 102, 241, 0.2)' : 'none',
            }}
          >
            {/* Col 1: Track & Title */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', minWidth: 0 }}>
              <div
                style={{
                  width: '4px',
                  height: '36px',
                  borderRadius: '100px',
                  background: isSelected ? '#818cf8' : s.isPending ? '#c084fc' : 'rgba(255, 255, 255, 0.1)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#f8fafc' }}>
                    {s.title}
                  </span>
                  <span
                    style={{
                      fontSize: '0.64rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      color: '#a5b4fc',
                      background: 'rgba(99, 102, 241, 0.12)',
                      padding: '1px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    {s.codeBadge}
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {s.subtext}
                </div>
              </div>
            </div>

            {/* Col 2: Date & Cadence */}
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '2px' }}>
                {s.date}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={11} /> {s.duration}
              </div>
            </div>

            {/* Col 3: 5-Q Progress */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#cbd5e1', marginBottom: '6px' }}>
                {s.statusType === 'defended' && <CheckCircle2 size={13} color="#38bdf8" />}
                {s.statusType === 'in_progress' && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c084fc' }} />}
                {s.statusType === 'synthesizing' && <RefreshCw size={12} color="#c084fc" style={{ animation: 'spin 2s linear infinite' }} />}
                <span style={{ fontWeight: 600 }}>{s.progressText}</span>
              </div>
              <div style={{ width: '90px', height: '4px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '100px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${s.progressPercent}%`,
                    height: '100%',
                    background: s.statusType === 'defended' ? '#38bdf8' : '#a855f7',
                    borderRadius: '100px',
                  }}
                />
              </div>
            </div>

            {/* Col 4: Score */}
            <div>
              {s.score ? (
                <div>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc' }}>
                    {s.score}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}> / 100</span>
                  <span style={{ margin: '0 4px', color: '#64748b' }}>•</span>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: s.scoreStatusColor }}>
                    {s.scoreStatusText}
                  </span>
                </div>
              ) : (
                <div style={{ fontSize: '0.72rem', color: s.scoreStatusColor, fontStyle: 'italic' }}>
                  {s.scoreStatusText}
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Bottom footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '12px',
          padding: '12px 6px',
          fontSize: '0.74rem',
          color: '#64748b',
        }}
      >
        <span>
          Showing {sessions.length} archived interview session{sessions.length === 1 ? '' : 's'}
        </span>
      </div>
    </div>
  );
};
