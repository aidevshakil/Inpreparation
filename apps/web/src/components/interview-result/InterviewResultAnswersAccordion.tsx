import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ThumbsUp } from 'lucide-react';

interface QuestionAnswerItem {
  id: string;
  qNumber: string;
  title: string;
  score: number;
  scoreBadge?: string;
  scoreColor?: string;
  scoreBg?: string;
  duration: string;
  mediaType: string;
  subtext: string;
  candidateQuote: string;
  exemplarAnchor: string;
  highlightFeedback: string;
  exemplarAlignment: number;
}

const QUESTIONS_DATA: QuestionAnswerItem[] = [
  {
    id: 'q1',
    qNumber: 'Q1',
    title: 'Python Asyncio & GIL Starvation',
    score: 89,
    scoreBadge: '89 / 100',
    duration: '01:42 • Audio + Code',
    mediaType: 'audio_code',
    subtext: 'Event-loop isolation, CPU-bound subinterpreters, and worker delegation',
    candidateQuote:
      '"When running asynchronous crypto hashing heads on a generic endpoint, we cannot rely on run_in_executor with ThreadPool because the GIL will still starve the event loop. Instead, we offload to a ProcessPoolExecutor with shared memory buffer to prevent context-switch starvation during..."',
    exemplarAnchor:
      'Emphasizes architectural boundaries: Python 3.12 per-interpreter GIL vs multiprocessing IPC overhead, socket handoff via uvloop, and graceful pool backpressure.',
    highlightFeedback: 'Immediate technical precision on process pool & GIL implications.',
    exemplarAlignment: 94,
  },
  {
    id: 'q2',
    qNumber: 'Q2',
    title: 'Database Connection Pooling & Spike Contention',
    score: 84,
    scoreBadge: '84 / 100',
    duration: '02:15 • Audio',
    mediaType: 'audio',
    subtext: 'asyncpg max_size saturation, connection lease timeouts, pool leakage',
    candidateQuote:
      '"For high-volume ingestion, allocating 20 to 50 connections via asyncpg with connection recycling avoids memory exhaustion while supporting up to 50k requests per minute without connection timeouts."',
    exemplarAnchor:
      'Recommends pooling parameters tied directly to p99 memory budgets, connection pooling over PgBouncer transaction-mode, and read-replica offloading.',
    highlightFeedback: 'Clear understanding of PostgreSQL connection saturation boundaries.',
    exemplarAlignment: 88,
  },
  {
    id: 'q3',
    qNumber: 'Q3',
    title: 'Distributed Microservices & Circuit Breakers',
    score: 86,
    scoreBadge: '86 / 100',
    duration: '02:05 • Audio',
    mediaType: 'audio',
    subtext: 'Half-open state transitions, fallback caching mechanisms, and cascading failure isolation',
    candidateQuote:
      '"We implement a circuit breaker with 5 consecutive error triggers transitioning to half-open, routing read fallbacks to a local Redis cluster until upstream healthy pings succeed."',
    exemplarAnchor:
      'Validates failure domain isolation, bulkhead patterns, and backoff retry caps to prevent cascading degradation.',
    highlightFeedback: 'Sound circuit breaker state machine structure with fallback caches.',
    exemplarAlignment: 86,
  },
  {
    id: 'q4',
    qNumber: 'Q4',
    title: 'Backpressure & Idempotent Retry Policies',
    score: 74,
    scoreBadge: '74 / 100 • Needs Drill',
    scoreColor: '#fbbf24',
    scoreBg: 'rgba(245, 158, 11, 0.12)',
    duration: '01:58 • Audio + Notes',
    mediaType: 'audio_notes',
    subtext: 'Jittered exponential backoff, sliding window throttling, and idempotency-key constraints',
    candidateQuote:
      '"When downstreams push back with HTTP 429s, we trigger exponential backoff retries with client-side redis caches to hold idempotency tokens for 24 hours."',
    exemplarAnchor:
      'Requires explicit token bucket or leaky bucket mathematical rates, full-jitter randomness formula `sleep = min(cap, base * 2^attempt) * random()`, and idempotency persistence validation.',
    highlightFeedback: 'Addressed retry basics, but lacked formal token-bucket mathematical bounds. Prioritize micro-drill.',
    exemplarAlignment: 72,
  },
  {
    id: 'q5',
    qNumber: 'Q5',
    title: 'System Trade-Offs & Cost-to-SLA Matrix',
    score: 81,
    scoreBadge: '81 / 100',
    duration: '02:30 • Audio',
    mediaType: 'audio',
    subtext: 'Balancing p99 latency SLA targets vs compute infrastructure budget envelopes',
    candidateQuote:
      '"Balancing strict 99.99% availability against cloud hosting budgets requires tiering workloads into latency-critical gRPC paths vs asynchronous queue processing for non-urgent tasks."',
    exemplarAnchor:
      'Demonstrates multi-region active-active vs active-passive infrastructure economics and SLA penalty risk calculations.',
    highlightFeedback: 'Strong business acumen paired with technical capacity planning.',
    exemplarAlignment: 81,
  },
];

interface InterviewResultAnswersAccordionProps {
  forceExpandedIds?: string[];
}

export const InterviewResultAnswersAccordion: React.FC<InterviewResultAnswersAccordionProps> = ({
  forceExpandedIds,
}) => {
  // Default expanded is Q1 as shown in screenshot
  const [expandedIds, setExpandedIds] = useState<string[]>(['q1']);

  const activeExpanded = forceExpandedIds !== undefined ? forceExpandedIds : expandedIds;

  const toggleExpand = (id: string) => {
    if (activeExpanded.includes(id)) {
      setExpandedIds(activeExpanded.filter((item) => item !== id));
    } else {
      setExpandedIds([...activeExpanded, id]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
      {/* Header section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Review Your 5 Answers
          </h3>
          <span
            style={{
              fontSize: '0.7rem',
              color: '#38bdf8',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              padding: '2px 10px',
              borderRadius: '9999px',
              fontWeight: 700,
            }}
          >
            5 of 5 Defended
          </span>
        </div>
        <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
          Click any question tile to examine evidence-based transcripts, exemplar benchmark answers, and audio tone benchmarks.
        </p>
      </div>

      {/* Accordion list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {QUESTIONS_DATA.map((q) => {
          const isExpanded = activeExpanded.includes(q.id);
          const isNeedsDrill = q.scoreBadge?.includes('Needs Drill');

          return (
            <div
              key={q.id}
              style={{
                backgroundColor: '#0c0f17',
                border: isNeedsDrill
                  ? '1px solid rgba(245, 158, 11, 0.35)'
                  : isExpanded
                  ? '1px solid rgba(99, 102, 241, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                boxShadow: isExpanded
                  ? '0 8px 24px rgba(0, 0, 0, 0.4)'
                  : '0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Question Header Bar */}
              <div
                onClick={() => toggleExpand(q.id)}
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: isNeedsDrill ? '#fbbf24' : '#cbd5e1',
                      flexShrink: 0,
                    }}
                  >
                    {q.qNumber}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>
                        {q.title}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: q.scoreColor || '#38bdf8',
                          backgroundColor: q.scoreBg || 'rgba(56, 189, 248, 0.12)',
                          padding: '2px 8px',
                          borderRadius: '6px',
                        }}
                      >
                        {q.scoreBadge || `${q.score} / 100`}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                      {q.subtext}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0, marginLeft: '12px' }}>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontVariantNumeric: 'tabular-nums' }}>
                    {q.duration}
                  </span>
                  <div style={{ color: '#64748b' }}>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>

              {/* Expanded Content Drawer */}
              {isExpanded && (
                <div
                  style={{
                    padding: '0 20px 20px 20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '16px',
                      marginTop: '16px',
                    }}
                  >
                    {/* Left Column: Candidate Transcript Quote */}
                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '10px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.64rem',
                          fontWeight: 700,
                          color: '#64748b',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                        }}
                      >
                        YOUR ANSWER TRANSCRIPT QUOTE
                      </div>
                      <p
                        style={{
                          fontSize: '0.78rem',
                          color: '#cbd5e1',
                          fontStyle: 'italic',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {q.candidateQuote}
                      </p>
                    </div>

                    {/* Right Column: Exemplar Benchmark Anchor */}
                    <div
                      style={{
                        backgroundColor: 'rgba(99, 102, 241, 0.04)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        borderRadius: '10px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.64rem',
                          fontWeight: 700,
                          color: '#a5b4fc',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                        }}
                      >
                        STAFF L6+ EXEMPLAR ANCHOR
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                        {q.exemplarAnchor}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Highlight Feedback */}
                  <div
                    style={{
                      marginTop: '14px',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(56, 189, 248, 0.05)',
                      border: '1px solid rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ThumbsUp size={14} style={{ color: '#38bdf8' }} />
                      <span style={{ fontSize: '0.76rem', color: '#f8fafc', fontWeight: 600 }}>
                        What Went Well:
                      </span>
                      <span style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                        {q.highlightFeedback}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 700 }}>
                      Exemplar Alignment: {q.exemplarAlignment}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
