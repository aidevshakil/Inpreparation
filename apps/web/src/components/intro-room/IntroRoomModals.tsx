import React from 'react';
import { X, Play, Loader2, RefreshCw, Save, LogOut, CheckCircle2 } from 'lucide-react';
import { IntroRoomState } from './IntroRoomSimulatorBar';

interface IntroRoomModalsProps {
  state: IntroRoomState;
  onClose: () => void;
  onStartSession: () => void;
  onConfirmExit: () => void;
}

export const IntroRoomModals: React.FC<IntroRoomModalsProps> = ({
  state,
  onClose,
  onStartSession,
  onConfirmExit,
}) => {
  if (state === 'ready' || state === 'audio_only') return null;

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
          maxWidth: '520px',
          backgroundColor: '#0c101c',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          borderRadius: '20px',
          padding: '26px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* State 2: Start Dialog */}
        {state === 'start_dialog' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8',
                  }}
                >
                  <Play size={18} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                  Ready to Launch Career Introduction?
                </h3>
              </div>

              <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              Your audio, video, and response mode are calibrated. The session consists of 6–8 targeted questions to customize your Staff Systems interview drills.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: '#34d399' }}>
                <CheckCircle2 size={13} />
                <span>Camera + Voice Mode active with real-time transcription</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: '#34d399' }}>
                <CheckCircle2 size={13} />
                <span>WebRTC stream encrypted with 256-bit TLS</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={onClose}
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
                Review Setup
              </button>

              <button
                onClick={onStartSession}
                style={{
                  padding: '9px 20px',
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
                }}
              >
                Start Interview Now
              </button>
            </div>
          </div>
        )}

        {/* State 3: Preparing Session */}
        {state === 'preparing_session' && (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                marginBottom: '16px',
              }}
            >
              <Loader2 size={32} style={{ color: '#818cf8', animation: 'spin 1.2s linear infinite' }} />
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
              Initializing AI Calibration Room...
            </h3>

            <p style={{ fontSize: '0.82rem', color: '#94a3b8', maxWidth: '380px', margin: '0 auto 20px auto', lineHeight: 1.5 }}>
              Connecting WebRTC media channels, loading Staff Systems interview rubrics, and syncing candidate dossier.
            </p>

            <button
              onClick={onStartSession}
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
              Skip to Simulation Room
            </button>
          </div>
        )}

        {/* State 5: Reconnect Fallback */}
        {state === 'reconnect_fallback' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fca5a5', margin: 0 }}>
                WebRTC Socket Disconnected
              </h3>
              <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              The high-frequency WebRTC socket encountered packet latency fluctuations. Re-establishing connection with backup streaming gateway.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={onClose}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={13} />
                <span>Reconnect Socket</span>
              </button>
            </div>
          </div>
        )}

        {/* State 6: Exit Prompt */}
        {state === 'exit_prompt' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Save size={18} style={{ color: '#818cf8' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                  Save Setup &amp; Exit?
                </h3>
              </div>

              <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 20px 0' }}>
              Your device readiness and response mode configurations have been saved. You can return to launch your intro interview anytime.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={onClose}
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
                Stay Here
              </button>

              <button
                onClick={onConfirmExit}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <LogOut size={13} />
                <span>Exit to Dashboard</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
