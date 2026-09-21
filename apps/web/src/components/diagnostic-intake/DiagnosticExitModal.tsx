import React from 'react';
import { X, Save, LogOut } from 'lucide-react';

interface DiagnosticExitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveAndExit: () => void;
}

export const DiagnosticExitModal: React.FC<DiagnosticExitModalProps> = ({
  isOpen,
  onClose,
  onSaveAndExit,
}) => {
  if (!isOpen) return null;

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
          padding: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8',
              }}
            >
              <Save size={16} />
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Save Progress &amp; Exit?
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={16} />
          </button>
        </div>

        <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 20px 0' }}>
          Your responses for Step 1 have been auto-saved to your secure vault. You can resume diagnostic intake whenever you&apos;re ready.
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
            Resume Intake
          </button>

          <button
            onClick={onSaveAndExit}
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
            <span>Save &amp; Exit to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};
