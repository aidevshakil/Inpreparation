import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';

export const InterviewResultFeedbackColumns: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
        gap: '20px',
        marginBottom: '28px',
      }}
    >
      {/* 1. What You Did Well */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '16px',
          padding: '22px 24px',
          background: 'linear-gradient(180deg, rgba(6, 78, 59, 0.12) 0%, rgba(12, 15, 23, 0.95) 100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Box Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              backgroundColor: 'rgba(16, 185, 129, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399',
            }}
          >
            <CheckCircle2 size={16} />
          </div>
          <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            What You Did Well
          </h4>
        </div>

        {/* List of items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Item 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                ProcessPoolExecutor for Offloading
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                Q1
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Identified CPU-bound Argon2 hashing to eliminate GIL blocking on event loops.
            </p>
          </div>

          {/* Item 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                Asyncpg Pool Sizing Boundaries
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                Q2
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Outlined connection starvation thresholds with explicit min/max pool sizing over master/replica
              PostgreSQL clusters.
            </p>
          </div>

          {/* Item 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                Half-Open State Isolation
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                Q3
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Structured state transition logic for circuit breakers with fallback Redis caching tiers to avoid
              cascading downtimes.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Where You Can Improve */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          borderRadius: '16px',
          padding: '22px 24px',
          background: 'linear-gradient(180deg, rgba(88, 28, 135, 0.12) 0%, rgba(12, 15, 23, 0.95) 100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Box Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              backgroundColor: 'rgba(168, 85, 247, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#c084fc',
            }}
          >
            <Target size={16} />
          </div>
          <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Where You Can Improve
          </h4>
        </div>

        {/* List of items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Item 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                Mathematical Backpressure Formulas
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  backgroundColor: 'rgba(251, 191, 36, 0.12)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                Q4
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Deepen mathematical bounds. State concrete token bucket drop rates and jittered exponential
              backoff rather than generic assumptions.
            </p>
          </div>

          {/* Item 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                p99/SLA Degradation Caveat
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  backgroundColor: 'rgba(251, 191, 36, 0.12)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                Q5
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Quantify latency/degradation tolerances when mentioning NVMe read-overheads vs serializable
              database isolation locks.
            </p>
          </div>

          {/* Item 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                Cadence Pacing on Trade-Offs
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#c084fc',
                  backgroundColor: 'rgba(192, 132, 252, 0.12)',
                  border: '1px solid rgba(192, 132, 252, 0.3)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                Telemetry
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Briefly accelerated speaking rate past 160 WPM during Q4 analysis; practice pausing 1.5s prior to
              introducing trade-off frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
