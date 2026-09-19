import React from 'react';

interface QuestionResponseItem {
  sessionId: string;
  questionNumber: string;
  questionTitle: string;
  questionSubtext: string;
  commScore: number;
  relevance: number;
  completeness: number;
  statusText: string;
  statusType: 'validated' | 'drill' | 'developing';
}

export const CommunicationQuestionResponsesTable: React.FC = () => {
  const items: QuestionResponseItem[] = [
    {
      sessionId: '#SIM-PY-8821',
      questionNumber: 'Question 2/5',
      questionTitle: 'Mitigating GIL contention with multiprocessing',
      questionSubtext: 'Python Concurrency & Memory Model',
      commScore: 86.0,
      relevance: 90,
      completeness: 82,
      statusText: 'Validated',
      statusType: 'validated',
    },
    {
      sessionId: '#SIM-PY-8821',
      questionNumber: 'Question 4/5',
      questionTitle: 'Token-bucket vs leaky-bucket backpressure',
      questionSubtext: 'Rate Limiting Algorithms',
      commScore: 78.0,
      relevance: 84,
      completeness: 72,
      statusText: 'Needs Drill',
      statusType: 'drill',
    },
    {
      sessionId: '#SIM-SYS-7940',
      questionNumber: 'Question 1/5',
      questionTitle: 'Consensus leader election split-brain resolu...',
      questionSubtext: 'Raft & Paxos Fault Tolerance',
      commScore: 83.0,
      relevance: 88,
      completeness: 78,
      statusText: 'Validated',
      statusType: 'validated',
    },
    {
      sessionId: '#SIM-SYS-7940',
      questionNumber: 'Question 3/5',
      questionTitle: 'Distributed lock lease expiry under GC pauses',
      questionSubtext: 'Fencing Tokens & Redlock Trade-offs',
      commScore: 82.5,
      relevance: 85,
      completeness: 80,
      statusText: 'Validated',
      statusType: 'validated',
    },
    {
      sessionId: '#SIM-DB-9310',
      questionNumber: 'Question 5/5',
      questionTitle: 'Postgres connection starvation under sp...',
      questionSubtext: 'PgBouncer Transaction Queuing',
      commScore: 79.5,
      relevance: 82,
      completeness: 74,
      statusText: 'Developing',
      statusType: 'developing',
    },
  ];

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Recent Evaluated Question Responses
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', color: '#64748b' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} />
          <span>Benchmark Rubric Grading: L6 Baseline (80.0)</span>
        </div>
      </div>
      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 18px 0' }}>
        Standard 5-question interview session ledger with atomic communication diagnostics.
      </p>

      {/* Table container */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '720px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SESSION ID & QUESTION</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>QUESTION DEFENDED</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>COMM SCORE</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>RELEVANCE</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>COMPLETENESS</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.015)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Session ID & Question */}
                <td style={{ padding: '12px' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'monospace', fontWeight: 700, color: '#a5b4fc' }}>
                    {row.sessionId}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                    {row.questionNumber}
                  </div>
                </td>

                {/* Question Defended */}
                <td style={{ padding: '12px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>
                    {row.questionTitle}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                    {row.questionSubtext}
                  </div>
                </td>

                {/* Comm Score */}
                <td style={{ padding: '12px', fontSize: '0.84rem', fontWeight: 800, color: '#f8fafc' }}>
                  {row.commScore.toFixed(1)}
                </td>

                {/* Relevance */}
                <td style={{ padding: '12px', fontSize: '0.76rem', fontWeight: 600, color: '#38bdf8' }}>
                  {row.relevance}
                </td>

                {/* Completeness */}
                <td style={{ padding: '12px', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1' }}>
                  {row.completeness}
                </td>

                {/* Status */}
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  {row.statusType === 'validated' ? (
                    <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '3px 8px', borderRadius: '4px' }}>
                      Validated
                    </span>
                  ) : row.statusType === 'drill' ? (
                    <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#f87171', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)', padding: '3px 8px', borderRadius: '4px' }}>
                      Needs Drill
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.64rem', fontWeight: 600, color: '#94a3b8', background: 'rgba(255, 255, 255, 0.05)', padding: '3px 8px', borderRadius: '4px' }}>
                      Developing
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
