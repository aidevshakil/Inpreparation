import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { PipelineScenario } from './PipelineDiagnosticSimulatorBar';

interface PipelineQuestionMatrixCardProps {
  scenario: PipelineScenario;
}

export const PipelineQuestionMatrixCard: React.FC<PipelineQuestionMatrixCardProps> = ({
  scenario,
}) => {
  const isAudioWarning = scenario === 'audio_warning';

  const questions = [
    {
      num: 'Q1',
      title: 'Python Asyncio & GIL Starvation',
      sub: 'Defense of event-loop isolation, CPU-bound subinterpreters, and worker delegation.',
      dur: '01:52 duration',
      type: 'Audio + Framing + Code',
    },
    {
      num: 'Q2',
      title: 'Database Connection Pooling & Spike Contention',
      sub: 'Analysis of asyncpg max_size saturation, connection lease timeouts, and pool leakage.',
      dur: '02:15 duration',
      type: 'Spoken Audio',
    },
    {
      num: 'Q3',
      title: 'Distributed Microservices & Circuit Breakers',
      sub: 'Half-open state transitions, fallback caching mechanisms, and cascading failure isolation.',
      dur: '02:05 duration',
      type: 'Spoken Audio',
    },
    {
      num: 'Q4',
      title: 'Backpressure & Idempotent Retry Policies',
      sub: 'Jittered exponential backoff, sliding window throttling, and idempotency key constraints.',
      dur: '01:58 duration',
      type: 'Spoken Audio + Scratchpad',
      hasAudioWarning: isAudioWarning,
    },
    {
      num: 'Q5',
      title: 'System Trade-Offs & Cost-to-SLA Matrix',
      sub: 'Balancing p99 latency SLA targets vs compute infrastructure budget envelopes.',
      dur: '02:30 duration',
      type: 'Spoken Audio',
    },
  ];

  return (
    <div>
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          margin: '0 0 4px 0',
          color: '#f8fafc',
          letterSpacing: '-0.2px',
        }}
      >
        5-Question Ingestion Matrix
      </h3>
      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 14px 0' }}>
        All candidate inputs captured and validated against session payload schema.
      </p>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(56, 189, 248, 0.1)',
          color: '#38bdf8',
          padding: '4px 12px',
          borderRadius: '100px',
          fontSize: '0.72rem',
          fontWeight: 700,
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#38bdf8',
          }}
        />
        5 of 5 Payloads Synced
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {questions.map((item) => (
          <div
            key={item.num}
            style={{
              background: item.hasAudioWarning
                ? 'rgba(245, 158, 11, 0.04)'
                : 'rgba(255, 255, 255, 0.02)',
              border: item.hasAudioWarning
                ? '1px solid rgba(245, 158, 11, 0.35)'
                : '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              transition: 'border-color 0.2s ease',
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '8px',
                background: item.hasAudioWarning
                  ? 'rgba(245, 158, 11, 0.12)'
                  : 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: item.hasAudioWarning ? '#fbbf24' : '#f8fafc',
                flexShrink: 0,
              }}
            >
              {item.num}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <span>{item.title}</span>
                {item.hasAudioWarning && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#fbbf24',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 600,
                    }}
                  >
                    <AlertTriangle size={11} /> Acoustic Recovered (0% Loss)
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: 1.5 }}>
                {item.sub}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontSize: '0.74rem',
                  color: '#94a3b8',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {item.dur}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{item.type}</div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  color: '#38bdf8',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={15} /> Submitted
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
