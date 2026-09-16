import React from 'react';
import { X, AlertCircle, RefreshCw, LogOut, Terminal, MessageSquareQuote } from 'lucide-react';
import { PipelineDiagnosticState } from './PipelineDiagnosticSimulatorBar';

interface PipelineDiagnosticModalsProps {
  state: PipelineDiagnosticState;
  onCloseSimulatorModal: () => void;
  onRetryPipeline: () => void;
  onConfirmLeave: () => void;
  showLogModal: boolean;
  onCloseLogModal: () => void;
  showTranscriptModal: boolean;
  onCloseTranscriptModal: () => void;
  diagnosticData?: any;
  targetRole?: string;
}

export const PipelineDiagnosticModals: React.FC<PipelineDiagnosticModalsProps> = ({
  state,
  onCloseSimulatorModal,
  onRetryPipeline,
  onConfirmLeave,
  showLogModal,
  onCloseLogModal,
  showTranscriptModal,
  onCloseTranscriptModal,
  diagnosticData,
  targetRole = 'General Assessment',
}) => {
  // Modal 1: Failure Dialog (Simulator State 6)
  if (state === 'failure_dialog') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '480px',
            backgroundColor: '#0c101c',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  color: '#f87171',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AlertCircle size={20} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                Synthesis Handshake Timeout
              </h3>
            </div>

            <button onClick={onCloseSimulatorModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
            The AI neural synthesis gateway experienced a momentary stream desync during Step 3. All recorded speech and transcript checkpoints are safely encrypted and preserved.
          </p>

          <div
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.72rem',
              color: '#94a3b8',
              fontFamily: 'monospace',
              marginBottom: '20px',
            }}
          >
            ERR_SOCKET_ACK_TIMEOUT: Stage 3 (Neural Vectorizer payload checksum verified).
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              onClick={onCloseSimulatorModal}
              style={{
                padding: '9px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              Dismiss
            </button>

            <button
              onClick={onRetryPipeline}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 18px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
              }}
            >
              <RefreshCw size={13} />
              <span>Resume Synthesis</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Modal 2: Leave Modal (Simulator State 7)
  if (state === 'leave_modal') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '480px',
            backgroundColor: '#0c101c',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(99, 102, 241, 0.2)',
                  color: '#818cf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LogOut size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                Return to Dashboard?
              </h3>
            </div>

            <button onClick={onCloseSimulatorModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
            Your career response analysis will continue executing seamlessly on our cloud AI workers. You will receive an in-app notification when your radar is ready.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              onClick={onCloseSimulatorModal}
              style={{
                padding: '9px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              Stay on Page
            </button>

            <button
              onClick={onConfirmLeave}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 18px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>Confirm &amp; Go to Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Modal 3: View Diagnostic Log
  if (showLogModal) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '640px',
            backgroundColor: '#0b0f19',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={18} style={{ color: '#818cf8' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                Live Synthesis Engine Diagnostics Log
              </h3>
            </div>
            <button onClick={onCloseLogModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <div
            style={{
              backgroundColor: '#04060c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '14px',
              fontFamily: 'monospace',
              fontSize: '0.72rem',
              color: '#a5b4fc',
              maxHeight: '300px',
              overflowY: 'auto',
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div>[14:32:08.112] [INGEST] WebRTC audio/video streams captured.</div>
            <div>[14:32:09.430] [CRYPTO] Payload SHA-256 verified.</div>
            <div>[14:32:11.890] [ASR] Whisper-v3 prosody tokenizer active.</div>
            <div>[14:32:15.220] [LLM] Extracting competencies & architecture keywords...</div>
            <div style={{ color: '#34d399' }}>[14:32:18.050] [EMBED] Vector embedding alignment computed.</div>
            <div style={{ color: '#38bdf8' }}>[14:32:20.100] [RADAR] Synthesizing Seniority Anchor: {targetRole}.</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <button
              onClick={onCloseLogModal}
              style={{
                padding: '8px 18px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.78rem',
                cursor: 'pointer',
              }}
            >
              Close Log
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Modal 4: Full Transcript Preview Modal
  if (showTranscriptModal) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '680px',
            backgroundColor: '#0b0f19',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquareQuote size={18} style={{ color: '#38bdf8' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                Ingested Full Transcript Preview (8 Questions)
              </h3>
            </div>
            <button onClick={onCloseTranscriptModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <div
            style={{
              backgroundColor: '#04060c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '16px',
              fontSize: '0.78rem',
              color: '#cbd5e1',
              maxHeight: '340px',
              overflowY: 'auto',
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {diagnosticData?.responses && diagnosticData.responses.length > 0 ? (
              diagnosticData.responses.map((resp: any, idx: number) => (
                <div key={idx}>
                  <strong style={{ color: '#818cf8' }}>Q{idx + 1}. {resp.questionText || 'Response'}:</strong>
                  <p style={{ margin: '4px 0 0 0', color: '#94a3b8' }}>
                    &ldquo;{resp.transcript || resp.responseText || 'No transcription recorded.'}&rdquo;
                  </p>
                </div>
              ))
            ) : (
              <div>
                <p style={{ margin: 0, color: '#94a3b8' }}>
                  No transcript data recorded for this session yet.
                </p>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <button
              onClick={onCloseTranscriptModal}
              style={{
                padding: '8px 18px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.78rem',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
