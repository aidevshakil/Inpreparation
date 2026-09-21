import React from 'react';
import { CheckCircle2, RefreshCw, CornerDownRight, Server, Shield, Lock, Info } from 'lucide-react';
import { PipelineScenario } from './PipelineDiagnosticSimulatorBar';

interface PipelineSynthesisStagesCardProps {
  scenario: PipelineScenario;
  onViewResult?: () => void;
}

export const PipelineSynthesisStagesCard: React.FC<PipelineSynthesisStagesCardProps> = ({
  scenario,
  onViewResult,
}) => {
  const isComplete = scenario === 'result_ready';
  const progressPercent = isComplete ? 100 : 71;

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: isComplete
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '10px',
              background: isComplete
                ? 'rgba(16, 185, 129, 0.12)'
                : 'rgba(99, 102, 241, 0.12)',
              border: isComplete
                ? '1px solid rgba(16, 185, 129, 0.25)'
                : '1px solid rgba(99, 102, 241, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Server size={22} color={isComplete ? '#34d399' : '#a5b4fc'} />
          </div>
          <div>
            <h2
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                margin: '0 0 3px 0',
                color: '#f8fafc',
                letterSpacing: '-0.2px',
              }}
            >
              Deterministic Synthesis Pipeline
            </h2>
            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Seven distinct deterministic validation engines running concurrently
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontSize: '0.66rem',
              color: '#94a3b8',
              fontWeight: 700,
              letterSpacing: '0.6px',
              marginBottom: '3px',
            }}
          >
            OVERALL PROGRESS
          </div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: isComplete ? '#34d399' : '#f8fafc',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: '100%',
          height: '7px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '100px',
          marginBottom: '28px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progressPercent}%`,
            height: '100%',
            background: isComplete
              ? 'linear-gradient(90deg, #10b981, #059669)'
              : 'linear-gradient(90deg, #4f46e5, #a855f7)',
            borderRadius: '100px',
            transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: isComplete
              ? '0 0 14px rgba(16, 185, 129, 0.5)'
              : '0 0 14px rgba(99, 102, 241, 0.5)',
          }}
        />
      </div>

      {/* Result Ready Banner if complete */}
      {isComplete && (
        <div
          style={{
            marginBottom: '20px',
            padding: '16px 20px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '3px',
              }}
            >
              <CheckCircle2 size={16} /> Synthesis Complete • Dossier Verified
            </div>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
              All 5 defensive answers evaluated against Staff L6+ deterministic benchmarks.
            </div>
          </div>
          {onViewResult && (
            <button
              onClick={onViewResult}
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#ffffff',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
                transition: 'transform 0.15s ease',
              }}
            >
              View Interview Result & Dossier →
            </button>
          )}
        </div>
      )}

      {/* Stages List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Stage 1 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                  Stage 1: Responses Collected
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    fontWeight: 700,
                  }}
                >
                  Complete
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '460px' }}>
                All 5 audio/video payloads and candidate scratchpad logs vaulted and encrypted with AES-256 vault keys.
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
            1.2s • Vault Synced
          </span>
        </div>

        {/* Stage 2 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                  Stage 2: Media & Payload Preparation
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    fontWeight: 700,
                  }}
                >
                  Complete
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '460px' }}>
                Multi-track 1080p video streams, 48kHz audio streams, and local speech buffers parsed without packet loss.
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
            0.8s • 0 Pkts Lost
          </span>
        </div>

        {/* Stage 3 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                  Stage 3: Speech & Acoustic Telemetry
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    fontWeight: 700,
                  }}
                >
                  Complete
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '460px', marginBottom: '6px' }}>
                Measuring acoustic cadence: 138 WPM, filler token frequency (1.2%), pause boundaries, and articulation latency.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', color: '#64748b' }}>
                <Info size={13} color="#94a3b8" /> Measurable communication telemetry only; not personality or emotional inference.
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
            1.5s • Cadence 138 WPM
          </span>
        </div>

        {/* Stage 4 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                  Stage 4: Observable Framing & Presentation Signals
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    fontWeight: 700,
                  }}
                >
                  Complete
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '460px', marginBottom: '6px' }}>
                Verified eye-line headroom, webcam framing stability, and low-light gamma balance.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', color: '#64748b' }}>
                <Shield size={13} color="#94a3b8" /> Zero biometric or psychometric profiling.
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
            1.1s • Framing Stable
          </span>
        </div>

        {/* Stage 5 */}
        {isComplete ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.04)',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={20} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                    Stage 5: Technical Answer & Architectural Defense
                  </span>
                  <span
                    style={{
                      fontSize: '0.64rem',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      fontWeight: 700,
                    }}
                  >
                    Complete
                  </span>
                </div>
                <div style={{ fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '460px' }}>
                  Evaluated against Staff/Lead deterministic benchmarks: Python 3.12 Async event-loops, GIL bypass via ProcessPoolExecutor, asyncpg pool saturation, and backpressure bulkheads.
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
              2.4s • Staff L6+ Match
            </span>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              padding: '18px',
              background: 'rgba(168, 85, 247, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.08)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <RefreshCw
                  size={20}
                  color="#c084fc"
                  style={{
                    marginTop: '2px',
                    animation: 'spin 3s linear infinite',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>
                      Stage 5: Technical Answer & Architectural Defense
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.68rem', color: '#cbd5e1', fontWeight: 600 }}>
                      62% EVALUATED
                    </span>
                    <span
                      style={{
                        fontSize: '0.64rem',
                        background: '#a855f7',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '100px',
                        fontWeight: 700,
                        letterSpacing: '0.4px',
                      }}
                    >
                      PROCESSING
                    </span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.5, maxWidth: '470px' }}>
                    Evaluating against Staff/Lead deterministic benchmarks: Python 3.12 Async event-loops, GIL bypass via ProcessPoolExecutor, asyncpg pool saturation, and backpressure bulkheads.
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                borderRadius: '8px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  color: '#c7d2fe',
                }}
              >
                <CornerDownRight size={14} color="#818cf8" />
                Comparing Candidate response Q1 against Staff L6 concurrency...
              </div>
              <div
                style={{
                  width: '80px',
                  height: '4px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '65%',
                    height: '100%',
                    background: '#a855f7',
                    animation: 'pulse 1.5s ease-in-out infinite',
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Stage 6 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '16px',
            opacity: isComplete ? 1 : 0.55,
            background: isComplete ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
            borderRadius: '12px',
            border: isComplete ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            {isComplete ? (
              <CheckCircle2 size={20} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
            ) : (
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  border: '2px solid #64748b',
                  marginTop: '3px',
                  flexShrink: 0,
                }}
              />
            )}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: isComplete ? '#f8fafc' : '#94a3b8',
                  }}
                >
                  Stage 6: Personalized Feedback Synthesis
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    background: isComplete ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: isComplete ? '#34d399' : '#64748b',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    fontWeight: 700,
                  }}
                >
                  {isComplete ? 'Complete' : 'Queued'}
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.5, maxWidth: '460px' }}>
                Preparing constructive trade-off breakdowns, exemplar model architectures, and follow-up drill paths.
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
            {isComplete ? '1.1s • Rubric Compiled' : 'Pending Stage 5'}
          </span>
        </div>

        {/* Stage 7 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '16px',
            opacity: isComplete ? 1 : 0.45,
            background: isComplete ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
            borderRadius: '12px',
            border: isComplete ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            {isComplete ? (
              <CheckCircle2 size={20} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
            ) : (
              <Lock size={18} color="#64748b" style={{ marginTop: '3px', flexShrink: 0 }} />
            )}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: isComplete ? '#f8fafc' : '#94a3b8',
                  }}
                >
                  Stage 7: Finalizing Result Dashboard
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    background: isComplete ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: isComplete ? '#34d399' : '#64748b',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    fontWeight: 700,
                  }}
                >
                  {isComplete ? 'Complete' : 'Queued'}
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.5, maxWidth: '460px' }}>
                Compiling dossier of defense and generating cryptographic verification hash.
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
            {isComplete ? '0.6s • Hash Verified' : 'Pending Synthesis'}
          </span>
        </div>
      </div>
    </div>
  );
};
