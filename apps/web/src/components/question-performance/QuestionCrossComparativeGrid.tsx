import React from 'react';

interface QuestionRow {
  id: string;
  prompt: string;
  topicVector: string;
  duration: string;
  technical: number;
  problemSolving: number;
  relevance: number;
  communication: number;
  signals: number;
  composite: number;
  isActive?: boolean;
}

interface QuestionCrossComparativeGridProps {
  selectedQuestionId: string;
  onSelectQuestion: (questionId: string) => void;
}

export const QuestionCrossComparativeGrid: React.FC<QuestionCrossComparativeGridProps> = ({
  selectedQuestionId,
  onSelectQuestion,
}) => {
  const rows: QuestionRow[] = [
    {
      id: 'Q1',
      prompt: 'Asyncio Event Loop Starvation...',
      topicVector: 'Async I/O Architecture',
      duration: '2m 14s',
      technical: 92,
      problemSolving: 88,
      relevance: 90,
      communication: 84,
      signals: 86,
      composite: 88,
    },
    {
      id: 'Q2',
      prompt: 'Mitigating GIL Contention...',
      topicVector: 'OS Concurrency & IPC',
      duration: '1m 45s',
      technical: 88,
      problemSolving: 85,
      relevance: 89,
      communication: 82,
      signals: 86,
      composite: 86,
    },
    {
      id: 'Q3',
      prompt: 'Distributed Lock Lease Expiry...',
      topicVector: 'Consensus & Locks',
      duration: '2m 01s',
      technical: 84,
      problemSolving: 80,
      relevance: 86,
      communication: 81,
      signals: 80,
      composite: 82,
    },
    {
      id: 'Q4',
      prompt: 'Token-Bucket Rate Limiter Backpressure',
      topicVector: 'Distributed Rate Limiting',
      duration: '1m 52s',
      technical: 76,
      problemSolving: 64,
      relevance: 72,
      communication: 70,
      signals: 82,
      composite: 69,
      isActive: true,
    },
    {
      id: 'Q5',
      prompt: 'Postgres Connection Pool Starvation...',
      topicVector: 'Relational Persistence',
      duration: '2m 20s',
      technical: 87,
      problemSolving: 84,
      relevance: 85,
      communication: 83,
      signals: 84,
      composite: 85,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#0d1322',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '22px 24px',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            5-Question Cross-Comparative Telemetry Grid
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '3px 0 0 0' }}>
            Deterministic score metrics across all evaluated dimensions for Interview #SIM-PY-8821
          </p>
        </div>

        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
          Sort by: <strong style={{ color: '#e2e8f0' }}>Standard Flow Order</strong>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            minWidth: '820px',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Q# / Prompt
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Topic Vector
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Duration
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Technical
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Problem Solving
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Relevance
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Communication
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                O. Signals
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>
                Composite
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const isSelected = selectedQuestionId === r.id;
              const isRemediation = r.composite < 80;

              return (
                <tr
                  key={r.id}
                  onClick={() => onSelectQuestion(r.id)}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                    backgroundColor: isSelected
                      ? 'rgba(99, 102, 241, 0.12)'
                      : 'transparent',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {/* Q# / Prompt */}
                  <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          padding: '2px 6px',
                          borderRadius: '4px',
                          backgroundColor: isSelected ? '#4f46e5' : 'rgba(255, 255, 255, 0.06)',
                          color: isSelected ? '#ffffff' : '#a5b4fc',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                        }}
                      >
                        {r.id}
                      </span>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#f1f5f9' }}>
                        {r.prompt}
                      </span>
                    </div>
                  </td>

                  {/* Topic Vector */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.72rem', color: '#94a3b8' }}>
                    {r.topicVector}
                  </td>

                  {/* Duration */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.72rem', color: '#cbd5e1' }}>
                    {r.duration}
                  </td>

                  {/* Technical */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.74rem', color: '#cbd5e1' }}>
                    {r.technical}/100
                  </td>

                  {/* Problem Solving */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.74rem' }}>
                    <span style={{ color: r.problemSolving < 70 ? '#f87171' : '#cbd5e1', fontWeight: r.problemSolving < 70 ? 700 : 500 }}>
                      {r.problemSolving}/100
                    </span>
                  </td>

                  {/* Relevance */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.74rem', color: '#cbd5e1' }}>
                    {r.relevance}/100
                  </td>

                  {/* Communication */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.74rem', color: '#cbd5e1' }}>
                    {r.communication}/100
                  </td>

                  {/* O. Signals */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.74rem', color: '#cbd5e1' }}>
                    {r.signals}/100
                  </td>

                  {/* Composite Score */}
                  <td style={{ padding: '12px', verticalAlign: 'middle', textAlign: 'right' }}>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        backgroundColor: isRemediation ? 'rgba(239, 68, 68, 0.15)' : 'rgba(56, 189, 248, 0.12)',
                        border: `1px solid ${isRemediation ? 'rgba(239, 68, 68, 0.35)' : 'rgba(56, 189, 248, 0.25)'}`,
                        color: isRemediation ? '#f87171' : '#38bdf8',
                      }}
                    >
                      {r.composite} / 100
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
