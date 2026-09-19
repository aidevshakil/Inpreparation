import React from 'react';
import { WifiOff, RefreshCw, ShieldCheck, X } from 'lucide-react';

interface PipelineOfflineRetryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export const PipelineOfflineRetryModal: React.FC<PipelineOfflineRetryModalProps> = ({
  isOpen,
  onClose,
  onRetry,
}) => {
  const [retrying, setRetrying] = React.useState(false);

  if (!isOpen) return null;

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      onRetry();
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 7, 12, 0.82)',
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
          background: '#0c101a',
          border: '1px solid rgba(239, 68, 68, 0.35)',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(239, 68, 68, 0.15)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '10px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WifiOff size={22} color="#f87171" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 3px 0', color: '#f8fafc' }}>
              Connection Interruption Detected
            </h3>
            <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 600 }}>
              Live Telemetry Socket Disconnected
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.6, margin: '0 0 20px 0' }}>
          Your active connection to evaluation worker node <code style={{ color: '#a5b4fc' }}>us-east-va-0</code> timed out.
          Your local submission payload is <strong>100% intact and encrypted (AES-256)</strong> in browser IndexedDB cache. No data was lost.
        </p>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '14px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <ShieldCheck size={20} color="#34d399" />
          <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
            Vault Session ID: <strong style={{ color: '#f8fafc' }}>#SIM-PY-8821-P9A</strong> (5/5 responses locked)
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 16px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#cbd5e1',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Stay in Cached Buffer Mode
          </button>

          <button
            onClick={handleRetry}
            disabled={retrying}
            style={{
              padding: '10px 18px',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: retrying ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
            }}
          >
            <RefreshCw size={14} style={{ animation: retrying ? 'spin 1s linear infinite' : 'none' }} />
            {retrying ? 'Reconnecting Socket...' : 'Retry Ingestion Sync Now'}
          </button>
        </div>
      </div>
    </div>
  );
};
