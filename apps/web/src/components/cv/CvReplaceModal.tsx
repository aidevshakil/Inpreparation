import React from 'react';
import { X, UploadCloud } from 'lucide-react';

interface CvReplaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReplace: (file: File) => void;
}

export const CvReplaceModal: React.FC<CvReplaceModalProps> = ({
  isOpen,
  onClose,
  onConfirmReplace,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
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
          backgroundColor: '#0e121c',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          borderRadius: '20px',
          padding: '26px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'transparent',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
          Replace Master CV
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
          Uploading a new resume will automatically archive your current active master (<strong style={{ color: '#ffffff' }}>Shakil_Ahamed_Resume_2026.pdf</strong>) and re-extract your high-dimensional skill vectors.
        </p>

        {/* Dropzone */}
        <div
          style={{
            border: '2px dashed rgba(99, 102, 241, 0.4)',
            borderRadius: '14px',
            padding: '24px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          <UploadCloud size={32} color="#818cf8" style={{ marginBottom: '10px' }} />
          <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
            Choose updated resume file
          </div>
          <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
            Supported formats: PDF, DOCX (Max 15MB)
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            onClick={onClose}
            style={{
              padding: '9px 16px',
              borderRadius: '9px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>

          <button
            onClick={() => {
              const dummyFile = new File([''], 'Shakil_Ahamed_Resume_v3.0.pdf', { type: 'application/pdf' });
              onConfirmReplace(dummyFile);
            }}
            style={{
              padding: '9px 20px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              color: '#ffffff',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
            }}
          >
            Confirm &amp; Vectorize
          </button>
        </div>
      </div>
    </div>
  );
};
