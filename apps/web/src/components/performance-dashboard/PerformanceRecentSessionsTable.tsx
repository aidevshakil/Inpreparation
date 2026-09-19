import React from 'react';
import { Lock, ChevronRight } from 'lucide-react';

interface SessionRow {
  id: string;
  track: string;
  subtrack: string;
  date: string;
  questions: string;
  score: number;
  isLatest?: boolean;
}

interface PerformanceRecentSessionsTableProps {
  onNavigateToResult?: (sessionId?: string) => void;
}

export const PerformanceRecentSessionsTable: React.FC<PerformanceRecentSessionsTableProps> = ({
  onNavigateToResult,
}) => {
  const sessions: SessionRow[] = [
    {
      id: 'SIM-PY-8821',
      track: 'Python Async and Concurrency',
      subtrack: 'Staff L6+ Calibration',
      date: 'Oct 24, 2024',
      questions: '5/5 Qs',
      score: 82,
      isLatest: true,
    },
    {
      id: 'SIM-MS-7920',
      track: 'Distributed Microservices & Bulkheads',
      subtrack: 'High Availability',
      date: 'Oct 21, 2024',
      questions: '5/5 Qs',
      score: 82,
    },
    {
      id: 'SIM-RT-4412',
      track: 'High-Throughput FastAPI & MVCC',
      subtrack: 'Asynchronous Routers',
      date: 'Oct 18, 2024',
      questions: '5/5 Qs',
      score: 78,
    },
    {
      id: 'SIM-DB-9310',
      track: 'Postgres Connection Starvation & Pooling',
      subtrack: 'Database Tier Isolation',
      date: 'Oct 15, 2024',
      questions: '5/5 Qs',
      score: 79,
    },
  ];

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
            Recent Practice Sessions (5/5 Qs Evaluated)
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
            Detailed execution reports and audio archives.
          </p>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.7rem',
            color: '#64748b',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '3px 10px',
            borderRadius: '100px',
          }}
        >
          <Lock size={12} color="#818cf8" /> AES-256 Encrypted
        </div>
      </div>

      {/* Table */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                SESSION ID
              </th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                TRACK / MODULE
              </th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                DATE
              </th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                QUESTIONS
              </th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                SCORE
              </th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px', textAlign: 'right' }}>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((row) => (
              <tr
                key={row.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <td style={{ padding: '14px', fontSize: '0.78rem', fontFamily: 'monospace', fontWeight: 700, color: '#a5b4fc' }}>
                  {row.id}
                </td>
                <td style={{ padding: '14px' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#f8fafc', marginBottom: '2px' }}>
                    {row.track}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                    {row.subtrack}
                  </div>
                </td>
                <td style={{ padding: '14px', fontSize: '0.76rem', color: '#94a3b8' }}>
                  {row.date}
                </td>
                <td style={{ padding: '14px', fontSize: '0.76rem', color: '#94a3b8' }}>
                  {row.questions}
                </td>
                <td style={{ padding: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: row.score >= 80 ? '#c7d2fe' : '#cbd5e1',
                      background: row.score >= 80 ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      border: row.score >= 80 ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '3px 9px',
                      borderRadius: '100px',
                    }}
                  >
                    {row.score} / 100
                  </span>
                </td>
                <td style={{ padding: '14px', textAlign: 'right' }}>
                  <button
                    onClick={() => onNavigateToResult && onNavigateToResult(row.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#818cf8',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>View Result</span>
                    <ChevronRight size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
