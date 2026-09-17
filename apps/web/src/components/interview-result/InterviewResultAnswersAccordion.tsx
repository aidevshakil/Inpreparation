import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ThumbsUp, Volume2, Video } from 'lucide-react';

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
    duration: '01:42 • Audio + Code',
    mediaType: 'audio_code',
    subtext: 'Event loop non-blocking offloading, process pool vs thread pool trade-offs',
    candidateQuote:
      '"When running asynchronous crypto hashing routines inside an event loop, we cannot rely on run_in_executor with ThreadPool because the GIL will still starve concurrent requests. Instead, we offload to a ProcessPoolExecutor with shared memory buffers to maintain sub-4ms event loop latency."',
    exemplarAnchor:
      'Emphasizes architectural boundaries: Python 3.12 per-interpreter GIL vs multiprocessing/IPC overhead, socket handoff via uvloop, and graceful loop backpressure.',
    highlightFeedback: 'Impeccable technical precision on process pool GIL implications.',
    exemplarAlignment: 94,
  },
  {
    id: 'q2',
    qNumber: 'Q2',
    title: 'Database Connection Pooling & Space Contention',
    score: 84,
    duration: '02:14 • Audio',
    mediaType: 'audio',
    subtext: 'asyncpg max_size saturation, connection leak prevention, read replica leverage',
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
    score: 81,
    duration: '02:06 • Audio',
    mediaType: 'audio',
    subtext: 'Half-open state transition, fallback caching mechanisms, and cascading protection',
    candidateQuote:
      '"We implement a circuit breaker with 5 consecutive error triggers transitioning to half-open, routing read fallbacks to a local Redis cluster until upstream healthy pings succeed."',
    exemplarAnchor:
      'Validates failure domain isolation, bulkhead patterns, and backoff retry caps to prevent thundering herd during recovery.',
    highlightFeedback: 'Sound circuit breaker state machine structure with fallback caches.',
    exemplarAlignment: 82,
  },
  {
    id: 'q4',
    qNumber: 'Q4',
    title: 'Backpressure & Idempotent Retry Policies',
    score: 74,
    scoreBadge: '74 / 100 • Needs Drill',
    scoreColor: '#f87171',
    scoreBg: 'rgba(239, 68, 68, 0.12)',
    duration: '01:55 • Video',
    mediaType: 'video',
    subtext: 'Jittered exponential backoff, sliding window throttling, and idempotency-key constraints',
    candidateQuote:
      '"When downstreams push back with HTTP 429s, we trigger exponential backoff retries with client-side redis caches to hold idempotency tokens for 24 hours."',
    exemplarAnchor:
      'Requires explicit token bucket or leaky bucket mathematical rates, full-jitter randomness formula `sleep = min(cap, base * 2^attempt) * random()`, and idempotency persistence validation.',
    highlightFeedback:
      'Addressed retry basics, but lacked formal token-bucket mathematical bounds. Prioritize micro-drill.',
    exemplarAlignment: 72,
  },
  {
    id: 'q5',
    qNumber: 'Q5',
    title: 'System Trade-Offs & Cost-to-SLA Matrix',
    score: 86,
    duration: '02:40 • Audio',
    mediaType: 'audio',
    subtext: 'Balancing p99 latency SLAs against computed infrastructure budget envelopes',
    candidateQuote:
      '"Balancing strict 99.99% availability against cloud hosting budgets requires tiering workloads into latency-critical gRPC paths vs asynchronous queue processing for non-urgent tasks."',
    exemplarAnchor:
      'Demonstrates multi-region active-active vs active-passive infrastructure economics and SLA penalty risk calculations.',
    highlightFeedback: 'Strong business acumen paired with technical capacity planning.',
    exemplarAlignment: 90,
  },
];

interface InterviewResultAnswersAccordionProps {
  forceExpandedIds?: string[];
}

export const InterviewResultAnswersAccordion: React.FC<InterviewResultAnswersAccordionProps> = ({
  forceExpandedIds,
}) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(['q1']);

  const isExpanded = (id: string) => {
    if (forceExpandedIds) return forceExpandedIds.includes(id);
    return expandedIds.includes(id);
  };

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
            Review Your 5 Answers
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
            Click any question to examine evidence transcript, exemplar bench anchor, and acoustic telemetry.
          </p>
        </div>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: 'rgba(99, 102, 241, 0.16)',
            color: '#c7d2fe',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            padding: '4px 10px',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 700,
          }}
        >
          5 of 5 Defended
        </span>
      </div>

      {/* Accordion Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {QUESTIONS_DATA.map((q) => {
          const expanded = isExpanded(q.id);
          return (
            <div
              key={q.id}
              style={{
                backgroundColor: '#0c0f17',
                border: expanded
                  ? '1px solid rgba(99, 102, 241, 0.35)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Question Clickable Header Bar */}
              <button
                onClick={() => toggleExpand(q.id)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  backgroundColor: expanded ? 'rgba(99, 102, 241, 0.06)' : 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '14px',
                }}
              >
                {/* Left side: Q number & Title & subtext */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cbd5e1',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {q.qNumber}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f8fafc' }}>
                        {q.title}
                      </span>
                    </div>
                    {!expanded && (
                      <span
                        style={{
                          fontSize: '0.74rem',
                          color: '#64748b',
                          marginTop: '2px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {q.subtext}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right side: Score badge, Duration, Chevron */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                  {/* Score Pill */}
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: q.scoreColor || '#f8fafc',
                      backgroundColor: q.scoreBg || 'rgba(255, 255, 255, 0.05)',
                      border: q.scoreColor ? `1px solid ${q.scoreColor}40` : '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '3px 9px',
                      borderRadius: '6px',
                    }}
                  >
                    {q.scoreBadge || `${q.score} / 100`}
                  </span>

                  {/* Duration & Media */}
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#94a3b8',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {q.mediaType === 'video' ? <Video size={12} /> : <Volume2 size={12} />}
                    {q.duration}
                  </span>

                  <div style={{ color: '#64748b' }}>
                    {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </button>

              {/* Expanded Detail Body */}
              {expanded && (
                <div
                  style={{
                    padding: '0 20px 20px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  {/* 2-column transcript & exemplar box */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '14px',
                    }}
                  >
                    {/* Candidate transcript */}
                    <div
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '10px',
                        padding: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.64rem',
                          fontWeight: 700,
                          color: '#64748b',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        YOUR ANSWER TRANSCRIPT QUOTE
                      </span>
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: '#cbd5e1',
                          lineHeight: 1.6,
                          fontStyle: 'italic',
                          margin: 0,
                        }}
                      >
                        {q.candidateQuote}
                      </p>
                    </div>

                    {/* Staff L6+ Exemplar Anchor */}
                    <div
                      style={{
                        backgroundColor: 'rgba(99, 102, 241, 0.05)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        borderRadius: '10px',
                        padding: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.64rem',
                          fontWeight: 700,
                          color: '#a5b4fc',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        STAFF L6+ EXEMPLAR ANCHOR
                      </span>
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: '#e2e8f0',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {q.exemplarAnchor}
                      </p>
                    </div>
                  </div>

                  {/* What Went Well & Exemplar Alignment Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ThumbsUp size={14} style={{ color: '#34d399' }} />
                      <span style={{ fontSize: '0.78rem', color: '#e2e8f0' }}>
                        <strong style={{ color: '#f8fafc' }}>What Went Well:</strong> {q.highlightFeedback}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Exemplar Alignment:</span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8' }}>
                        {q.exemplarAlignment}%
                      </span>
                    </div>
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
