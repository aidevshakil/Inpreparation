import React from 'react';
import { ArrowRight, Video } from 'lucide-react';

interface PriorityPracticeVectorsProps {
  onPracticeVector01?: () => void;
  onPracticeVector02?: () => void;
  onCalibrateFraming?: () => void;
}

export const PriorityPracticeVectors: React.FC<PriorityPracticeVectorsProps> = ({
  onPracticeVector01,
  onPracticeVector02,
  onCalibrateFraming,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Priority Practice Vectors
          </h3>
          <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
            Direct Empirical Extraction
          </span>
        </div>

        <span style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 600 }}>
          Ranked by score degradation severity
        </span>
      </div>

      {/* 3 Vector Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}
      >
        {/* Vector 01 */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
            background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.06) 0%, rgba(13, 19, 34, 0.95) 100%)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  color: '#f87171',
                  letterSpacing: '0.5px',
                }}
              >
                VECTOR 01 • URGENT
              </span>
              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#f87171',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                }}
              >
                69.0 / 100
              </span>
            </div>

            <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.35 }}>
              Distributed Backpressure &amp; Token-Bucket Clock Drift
            </h4>

            <div style={{ fontSize: '0.68rem', color: '#c084fc', marginTop: '4px', fontWeight: 600 }}>
              Observed in #SIM-PY-8821 Q4 (Question Performance #41)
            </div>

            <p style={{ fontSize: '0.72rem', color: '#cbd5e1', margin: '8px 0 0 0', lineHeight: 1.45 }}>
              Candidate omitted full-jitter exponential backoff in Redis Lua script and failed clock drift reconciliation under burst ingress across multiple availability zones.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginBottom: '8px' }}>
              Recommended Drill: <strong style={{ color: '#ffffff' }}>15 Mins (#42S)</strong>
            </div>

            <button
              onClick={onPracticeVector01}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '9px 14px',
                background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.74rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
              }}
            >
              <span>Practice Vector 01</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Vector 02 */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
            background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.06) 0%, rgba(13, 19, 34, 0.95) 100%)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  color: '#c084fc',
                  letterSpacing: '0.5px',
                }}
              >
                VECTOR 02 • STRUCTURAL
              </span>
              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                  color: '#c084fc',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                }}
              >
                76.4 / 100
              </span>
            </div>

            <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.35 }}>
              Exhaustive Completeness &amp; Failure Trade-off Proofs
            </h4>

            <div style={{ fontSize: '0.68rem', color: '#818cf8', marginTop: '4px', fontWeight: 600 }}>
              Observed in Communication Analytics #38
            </div>

            <p style={{ fontSize: '0.72rem', color: '#cbd5e1', margin: '8px 0 0 0', lineHeight: 1.45 }}>
              Candidate truncated distributed failure modes when concluding under 90 seconds. Minto Pyramid adherence dropped to 72% on quantitative trade-off evidence.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginBottom: '8px' }}>
              Recommended Drill: <strong style={{ color: '#ffffff' }}>20 Mins (#38)</strong>
            </div>

            <button
              onClick={onPracticeVector02}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '9px 14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#e2e8f0',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>Practice Vector 02</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Vector 03 */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
            background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.06) 0%, rgba(13, 19, 34, 0.95) 100%)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  letterSpacing: '0.5px',
                }}
              >
                VECTOR 03 • ACOUSTIC/OPTIC
              </span>
              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: '#38bdf8',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                }}
              >
                84% Alignment
              </span>
            </div>

            <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.35 }}>
              Optical Framing Consistency During Whiteboard Articulation
            </h4>

            <div style={{ fontSize: '0.68rem', color: '#38bdf8', marginTop: '4px', fontWeight: 600 }}>
              Observed in Presentation Analytics #40
            </div>

            <p style={{ fontSize: '0.72rem', color: '#cbd5e1', margin: '8px 0 0 0', lineHeight: 1.45 }}>
              Candidate tilted 6.2° horizontally and shifted out of the primary center cone during Question 4 diagram explanation, lowering visual authority metrics.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginBottom: '8px' }}>
              Recommended Drill: <strong style={{ color: '#ffffff' }}>5 Mins (#40)</strong>
            </div>

            <button
              onClick={onCalibrateFraming}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '9px 14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#e2e8f0',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Video size={13} style={{ color: '#38bdf8' }} />
              <span>Calibrate Framing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
