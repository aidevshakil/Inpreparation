import React, { useState } from 'react';
import { ArrowRight, Clock, Volume2, X } from 'lucide-react';

interface QuestionLedgerItem {
  id: string;
  questionNumber: string;
  prompt: string;
  domain: string;
  duration: string;
  paceWpm: number;
  pauseCount: string;
  fillers: string;
  fillersHighlight?: boolean;
  evaluation: string;
  evalColor: string;
  audioTranscript?: string;
  detailedNotes?: string;
}

export const SpeechQuestionLedgerTable: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionLedgerItem | null>(null);

  const items: QuestionLedgerItem[] = [
    {
      id: 'SIM-PY-8821',
      questionNumber: 'Q1',
      prompt: 'Mitigating GIL contention with C-extensions',
      domain: 'Python Concurrency & Memory Model',
      duration: '1m 24s',
      paceWpm: 138,
      pauseCount: '3 pauses (1.4s avg)',
      fillers: '1 ("uh")',
      evaluation: 'Optimal Cadence',
      evalColor: '#10b981',
      audioTranscript:
        'When dealing with the Global Interpreter Lock under CPU-bound loads, dropping the GIL using Py_BEGIN_ALLOW_THREADS in C-extension bindings enables true POSIX thread parallelism...',
      detailedNotes:
        'Pacing was exceptionally stable at 138 WPM with 3 strategic syntactical pauses before detailing memory sharing trade-offs.',
    },
    {
      id: 'SIM-PY-8821',
      questionNumber: 'Q2',
      prompt: 'Token-bucket rate limiter backpressure',
      domain: 'Rate Limiting Algorithms',
      duration: '1m 52s',
      paceWpm: 131,
      pauseCount: '5 pauses (1.8s avg)',
      fillers: '3 ("um", "like")',
      evaluation: 'Needs Drill',
      evalColor: '#f59e0b',
      audioTranscript:
        'So with the token-bucket algorithm, um, tokens regenerate at a fixed rate, and if the client exceeds capacity, like, 429 Too Many Requests is returned with a Retry-After header...',
      detailedNotes:
        'Slight speech deceleration during redis atomic script explanation. Recommend practicing concise mathematical token regeneration phrasing.',
    },
    {
      id: 'SIM-SYS-7940',
      questionNumber: 'Q1',
      prompt: 'Raft consensus leader election split-brain',
      domain: 'Raft & Paxos Fault Tolerance',
      duration: '2m 04s',
      paceWpm: 132,
      pauseCount: '6 pauses (2.1s avg)',
      fillers: '2 ("basically")',
      evaluation: 'High Structure',
      evalColor: '#38bdf8',
      audioTranscript:
        'In Raft, randomized election timeouts prevent split-vote deadlocks. When network partitions occur, basically only the majority quorum partition can commit log entries...',
      detailedNotes:
        'Answer exceeded 2m target by 4s due to extensive quorum scenario enumeration. Cadence maintained at 132 WPM.',
    },
    {
      id: 'SIM-SYS-7940',
      questionNumber: 'Q2',
      prompt: 'Distributed lock lease expiry under GC pauses',
      domain: 'Fencing Tokens & Redlock Traps',
      duration: '1m 38s',
      paceWpm: 138,
      pauseCount: '4 pauses (1.5s avg)',
      fillers: '1 ("um")',
      evaluation: 'Optimal Cadence',
      evalColor: '#10b981',
      audioTranscript:
        'A stop-the-world GC pause can invalidate lease validity before database writes occur. By propagating monotonic fencing tokens to storage, stale lock holders are rejected safely...',
      detailedNotes:
        'Superb articulation velocity. Martin Kleppmann Redlock critique cited clearly with minimal hesitation pauses.',
    },
    {
      id: 'SIM-DB-6510',
      questionNumber: 'Q1',
      prompt: 'PostgreSQL connection pool exhaustion isolation',
      domain: 'PgBouncer Transaction Queuing',
      duration: '1m 18s',
      paceWpm: 146,
      pauseCount: '2 pauses (1.1s avg)',
      fillers: '0 Fillers',
      fillersHighlight: true,
      evaluation: 'Crisp Execution',
      evalColor: '#818cf8',
      audioTranscript:
        'By deploying PgBouncer in transaction pooling mode, backend server processes decouple from client socket counts, preventing memory overhead and context switching degradation under burst spikes...',
      detailedNotes:
        'Cleanest acoustic recording in session ledger: 0 filler tokens detected across 190 spoken words.',
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
            Recent Spoken Question Telemetry Ledger
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '3px 0 0 0' }}>
            Granular acoustic metrics captured per defended prompt across voice simulation sessions
          </p>
        </div>

        <span
          style={{
            padding: '4px 10px',
            borderRadius: '6px',
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: '#38bdf8',
            fontSize: '0.7rem',
            fontWeight: 600,
          }}
        >
          Benchmark Rate: 130–160 WPM (Baseline: 88.4)
        </span>
      </div>

      {/* Table Container */}
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
                Session ID &amp; Question
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Technical Prompt / Domain / Tag
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Duration
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Pace (WPM)
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Pause Count
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Fillers
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Evaluation
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>
                Dossier
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Session ID & Question */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#38bdf8' }}>
                      {item.id}
                    </span>
                    <span
                      style={{
                        padding: '1px 5px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        color: '#94a3b8',
                        fontSize: '0.66rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.questionNumber}
                    </span>
                  </div>
                </td>

                {/* Technical Prompt / Domain */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f1f5f9' }}>
                    {item.prompt}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
                    {item.domain}
                  </div>
                </td>

                {/* Duration */}
                <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.76rem', color: '#cbd5e1' }}>
                  {item.duration}
                </td>

                {/* Pace (WPM) */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#38bdf8' }}>
                      {item.paceWpm}
                    </span>
                    <span style={{ fontSize: '0.66rem', color: '#64748b' }}>WPM</span>
                  </div>
                </td>

                {/* Pause Count */}
                <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.72rem', color: '#94a3b8' }}>
                  {item.pauseCount}
                </td>

                {/* Fillers */}
                <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.72rem' }}>
                  <span
                    style={{
                      color: item.fillersHighlight ? '#38bdf8' : '#cbd5e1',
                      fontWeight: item.fillersHighlight ? 700 : 500,
                    }}
                  >
                    {item.fillers}
                  </span>
                </td>

                {/* Evaluation Badge */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      backgroundColor: `${item.evalColor}18`,
                      border: `1px solid ${item.evalColor}40`,
                      color: item.evalColor,
                    }}
                  >
                    {item.evaluation}
                  </span>
                </td>

                {/* Dossier Button */}
                <td style={{ padding: '12px', verticalAlign: 'middle', textAlign: 'right' }}>
                  <button
                    onClick={() => setSelectedQuestion(item)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      color: '#a5b4fc',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                      e.currentTarget.style.color = '#a5b4fc';
                    }}
                  >
                    <span>View #39</span>
                    <ArrowRight size={11} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Drawer for Question Detail */}
      {selectedQuestion && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedQuestion(null)}
        >
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              width: '100%',
              maxWidth: '600px',
              padding: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#38bdf8' }}>
                    {selectedQuestion.id} • {selectedQuestion.questionNumber}
                  </span>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '6px',
                      backgroundColor: `${selectedQuestion.evalColor}18`,
                      border: `1px solid ${selectedQuestion.evalColor}40`,
                      color: selectedQuestion.evalColor,
                      fontSize: '0.68rem',
                      fontWeight: 700,
                    }}
                  >
                    {selectedQuestion.evaluation}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0 0' }}>
                  {selectedQuestion.prompt}
                </h3>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
                  {selectedQuestion.domain}
                </div>
              </div>

              <button
                onClick={() => setSelectedQuestion(null)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Metric chips */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <div style={{ padding: '8px', backgroundColor: '#090d18', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Duration</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                  {selectedQuestion.duration}
                </div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#090d18', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Cadence</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>
                  {selectedQuestion.paceWpm} WPM
                </div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#090d18', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Pauses</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#a5b4fc', marginTop: '2px' }}>
                  {selectedQuestion.pauseCount.split(' ')[0]}
                </div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#090d18', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Fillers</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#34d399', marginTop: '2px' }}>
                  {selectedQuestion.fillers}
                </div>
              </div>
            </div>

            {/* Spoken Transcript Excerpt */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                <Volume2 size={13} style={{ color: '#818cf8' }} />
                <span>48kHz Calibrated Audio Excerpt</span>
              </div>
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#090d18',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.74rem',
                  color: '#94a3b8',
                  lineHeight: 1.5,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{selectedQuestion.audioTranscript}&rdquo;
              </div>
            </div>

            {/* Diagnostic Observation */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                <Clock size={13} style={{ color: '#38bdf8' }} />
                <span>Acoustic Diagnostic Assessment</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                {selectedQuestion.detailedNotes}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '6px' }}>
              <button
                onClick={() => setSelectedQuestion(null)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#4f46e5',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
