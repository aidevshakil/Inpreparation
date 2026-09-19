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
  selectedSessionId: string;
  onSelectSession: (id: string) => void;
}

export const InterviewHistorySessionList: React.FC<InterviewHistorySessionListProps> = ({
  selectedSessionId,
  onSelectSession,
}) => {
  const sessions: HistorySessionItem[] = [
    {
      id: 'SIM-PY-8821',
      codeBadge: '#SIM-PY-8821',
      title: 'Python Backend Concurrency',
      subtext: 'Staff L6+ Standard • Rubric v4.2 Deterministic',
      date: 'Oct 24, 2024',
      duration: '10m 37s total',
      progressText: '5/5 Defended',
      progressPercent: 100,
      statusType: 'defended',
      score: 82,
      scoreStatusText: 'STRONG',
      scoreStatusColor: '#38bdf8',
    },
    {
      id: 'SIM-SYS-7940',
      codeBadge: '#SIM-SYS-7940',
      title: 'Distributed Microservices & Circuit Breakers',
      subtext: 'Staff L6+ Standard • Fault Domain Recovery',
      date: 'Oct 21, 2024',
      duration: '12m 44s total',
      progressText: '5/5 Defended',
      progressPercent: 100,
      statusType: 'defended',
      score: 80,
      scoreStatusText: 'SOLID',
      scoreStatusColor: '#818cf8',
    },
    {
      id: 'SIM-API-4412',
      codeBadge: '#SIM-API-4412',
      title: 'High-Throughput FastAPI & Async Architecture',
      subtext: 'Senior L5+ Standard • Event-Loop Latency',
      date: 'Oct 18, 2024',
      duration: '9m 15s total',
      progressText: '5/5 Defended',
      progressPercent: 100,
      statusType: 'defended',
      score: 78,
      scoreStatusText: 'DEVELOPING',
      scoreStatusColor: '#fbbf24',
    },
    {
      id: 'SIM-DB-9310',
      codeBadge: '#SIM-DB-9310',
      title: 'Postgres Connection Starvation & Pool Contention',
      subtext: 'Senior L5+ Standard • Lock Inversion Analysis',
      date: 'Oct 15, 2024',
      duration: '11m 02s total',
      progressText: '5/5 Defended',
      progressPercent: 100,
      statusType: 'defended',
      score: 75,
      scoreStatusText: 'DEVELOPING',
      scoreStatusColor: '#fbbf24',
    },
    {
      id: 'SIM-ARC-9012',
      codeBadge: '#SIM-ARC-9012',
      title: 'Cloud Infrastructure & Cost-to-SLA Trade-offs',
      subtext: 'Principal L7 Candidate • Session Paused at Q4',
      date: 'Today • 11:14 UTC',
      duration: '6m 20s elapsed',
      progressText: '3/5 In Progress',
      progressPercent: 60,
      statusType: 'in_progress',
      isPending: true,
      scoreStatusText: 'Score Pending (Incomplete)',
      scoreStatusColor: '#64748b',
    },
    {
      id: 'SIM-K8S-4321',
      codeBadge: '#SIM-K8S-4321',
      title: 'Kubernetes Ingress & Backpressure Flow Control',
      subtext: 'Staff L6+ Standard • Cryptographic Verification in flight',
      date: 'Just now • 14:02 UTC',
      duration: '11m 45s recorded',
      progressText: '5/5 Synthesizing',
      progressPercent: 82,
      statusType: 'synthesizing',
      isPending: true,
      scoreStatusText: 'Evaluating Rubric (82%)...',
      scoreStatusColor: '#c084fc',
    },
  ];

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

      {/* Bottom Pagination */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '12px',
          padding: '12px 6px',
          fontSize: '0.74rem',
          color: '#64748b',
        }}
      >
        <span>Showing 1-6 of 8 archived interview sessions</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px 8px' }}>
            « Previous
          </button>
          <button style={{ background: '#4f46e5', border: 'none', color: '#ffffff', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', cursor: 'pointer' }}>
            1
          </button>
          <button style={{ background: 'none', border: 'none', color: '#94a3b8', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer' }}>
            2
          </button>
          <button style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '4px 8px' }}>
            Next »
          </button>
        </div>
      </div>
    </div>
  );
};
