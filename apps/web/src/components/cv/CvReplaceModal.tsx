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
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

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
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '26px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
          position: 'relative',
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
          Replace Master CV
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
          Uploading a new resume will replace your current active master and re-extract your high-dimensional skill vectors.
        </p>

        {/* Dropzone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: '2px dashed rgba(99, 102, 241, 0.4)',
            borderRadius: '14px',
            padding: '24px',
            textAlign: 'center',
            backgroundColor: 'var(--bg-surface)',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          <UploadCloud size={32} color="var(--primary-color)" style={{ marginBottom: '10px' }} />
          <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
            {selectedFile ? selectedFile.name : 'Choose updated resume file'}
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
            {selectedFile ? `${Math.round(selectedFile.size / 1024)} KB` : 'Supported formats: PDF, DOCX (Max 15MB)'}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            onClick={onClose}
            style={{
              padding: '9px 16px',
              borderRadius: '9px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>

          <button
            disabled={!selectedFile}
            onClick={() => {
              if (selectedFile) {
                onConfirmReplace(selectedFile);
              }
            }}
            style={{
              padding: '9px 20px',
              borderRadius: '9px',
              background: selectedFile ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'var(--bg-surface)',
              color: selectedFile ? '#ffffff' : 'var(--text-muted)',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: selectedFile ? 'pointer' : 'not-allowed',
              boxShadow: selectedFile ? '0 4px 16px rgba(124, 58, 237, 0.4)' : 'none',
            }}
          >
            Confirm &amp; Vectorize
          </button>
        </div>
      </div>
    </div>
  );
};
