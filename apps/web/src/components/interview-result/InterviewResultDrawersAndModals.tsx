import React, { useState } from 'react';
import {
  X,
  Activity,
  Sliders,
  CheckCircle2,
  Copy,
  Shield,
  Volume2,
  Video,
} from 'lucide-react';

interface InterviewResultDrawersAndModalsProps {
  showTelemetryDrawer: boolean;
  onCloseTelemetryDrawer: () => void;
  showCalibrationModal: boolean;
  onCloseCalibrationModal: () => void;
  showShareCertificateModal: boolean;
  onCloseShareCertificateModal: () => void;
}

export const InterviewResultDrawersAndModals: React.FC<InterviewResultDrawersAndModalsProps> = ({
  showTelemetryDrawer,
  onCloseTelemetryDrawer,
  showCalibrationModal,
  onCloseCalibrationModal,
  showShareCertificateModal,
  onCloseShareCertificateModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [calibrationFeedbackSaved, setCalibrationFeedbackSaved] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://inprep.ai/verify/SIM-PY-5321-FF');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      {/* 1. Speech & Presentation Telemetry Drawer */}
      {showTelemetryDrawer && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={onCloseTelemetryDrawer}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              height: '100%',
              backgroundColor: '#0c0f17',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '28px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Activity size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                    Multimodal Telemetry Inspector
                  </h3>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    Session #SIM-PY-5321 • High-Fidelity Capture
                  </span>
                </div>
              </div>
              <button
                onClick={onCloseTelemetryDrawer}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Acoustic Waveform Visualization Mock */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Volume2 size={14} style={{ color: '#38bdf8' }} /> Pitch & Cadence Waveform
                </span>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>48kHz Full Spectrum</span>
              </div>

              {/* Pseudo waveform bars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '60px', padding: '0 4px' }}>
                {[30, 45, 70, 90, 60, 40, 85, 100, 75, 50, 30, 65, 80, 95, 85, 60, 40, 20, 50, 75, 90, 85, 60, 35, 65, 80, 45, 90, 70, 40, 60, 80, 95, 65, 30].map(
                  (val, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        height: `${val}%`,
                        backgroundColor: val > 80 ? '#38bdf8' : val > 50 ? '#818cf8' : '#4f46e5',
                        borderRadius: '2px',
                        opacity: 0.85,
                      }}
                    />
                  )
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#64748b' }}>
                <span>00:00 (Q1)</span>
                <span>05:15 (Q3)</span>
                <span>10:37 (End)</span>
              </div>
            </div>

            {/* Speaking Rate Metrics Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
                Acoustic & Lexical Indicators
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Pitch Stability (Jitter)</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34d399', marginTop: '2px' }}>0.48%</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Exemplar L6: &lt; 0.8%</div>
                </div>

                <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Vocal Articulation Shimmer</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', marginTop: '2px' }}>2.1 dB</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Optimal Broadcast Grade</div>
                </div>

                <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Disfluency Count</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginTop: '2px' }}>4 total</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Across 1,480 spoken words</div>
                </div>

                <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Confidence Index</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#c084fc', marginTop: '2px' }}>94.6%</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Deterministic prosody model</div>
                </div>
              </div>
            </div>

            {/* Vision & Posture Telemetry */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Video size={14} style={{ color: '#818cf8' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
                  Webcam Presentation Telemetry
                </span>
              </div>
              <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Candidate maintained steady 62% upper-third eye centering. Gaze deviation occurred only when
                referencing code snippets on Q1 and architectural state charts on Q4.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Factor Calibration Feedback Modal */}
      {showCalibrationModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={onCloseCalibrationModal}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: '#0c0f17',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(99, 102, 241, 0.18)',
                    color: '#a5b4fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Sliders size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                    Factor Calibration Feedback
                  </h3>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    Adjust model calibration sensitivity & rubric weights
                  </span>
                </div>
              </div>
              <button
                onClick={onCloseCalibrationModal}
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
              Antigravity rubric scoring adheres to Staff L6 engineering anchors. If you believe specific
              algorithmic backpressure explanations deserved higher weighting, provide feedback below to refine future
              deterministic evaluations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>
                Your Feedback or Calibration Request:
              </label>
              <textarea
                defaultValue="I covered the token-bucket mathematics verbally during Q4 trade-off synthesis; requesting re-verification of the audio transcript around timestamp 01:20."
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#f8fafc',
                  fontSize: '0.8rem',
                  fontFamily: 'inherit',
                  resize: 'none',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={onCloseCalibrationModal}
                style={{
                  padding: '9px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setCalibrationFeedbackSaved(true);
                  setTimeout(() => {
                    setCalibrationFeedbackSaved(false);
                    onCloseCalibrationModal();
                  }, 1200);
                }}
                style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#6366f1',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {calibrationFeedbackSaved ? 'Feedback Submitted!' : 'Submit Calibration Request'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Export SLA Share Certificate Modal */}
      {showShareCertificateModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={onCloseShareCertificateModal}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '580px',
              backgroundColor: '#0c0f17',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              borderRadius: '20px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(12, 15, 23, 0.98) 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={18} style={{ color: '#38bdf8' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                  Cryptographic Debrief Certificate
                </h3>
              </div>
              <button
                onClick={onCloseShareCertificateModal}
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Preview Card */}
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#a5b4fc', fontWeight: 700, letterSpacing: '0.5px' }}>
                  INPREP AI CALIBRATION SYSTEM
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    color: '#34d399',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: 600,
                  }}
                >
                  Verified Authentic
                </span>
              </div>

              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
                  Candidate: Shakil Ahmed
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>
                  Track: Python Backend Concurrency & Distributed Systems (Staff L6)
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Benchmark Score</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8' }}>82 / 100</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Evaluation Date</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Oct 24, 2024</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Signed Hash</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#a5b4fc' }}>#SIM-PY-5321-FF</div>
                </div>
              </div>
            </div>

            {/* Share link input */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                readOnly
                value="https://inprep.ai/verify/SIM-PY-5321-FF"
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  fontSize: '0.82rem',
                  fontFamily: 'monospace',
                  outline: 'none',
                }}
              />
              <button
                onClick={handleCopyLink}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: copiedLink ? '#10b981' : '#6366f1',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {copiedLink ? <CheckCircle2 size={15} /> : <Copy size={15} />}
                <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
