import React, { useRef } from 'react';
import { UploadCloud, Loader2, AlertCircle } from 'lucide-react';

interface CvUploadDropzoneCardProps {
  isDragging?: boolean;
  isUploading?: boolean;
  uploadPercent?: number;
  hasError?: boolean;
  onFileSelect?: (file: File) => void;
  onBrowseClick?: () => void;
}

export const CvUploadDropzoneCard: React.FC<CvUploadDropzoneCardProps> = ({
  isDragging = false,
  isUploading = false,
  uploadPercent = 68,
  hasError = false,
  onFileSelect,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && onFileSelect) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: hasError
          ? '1px solid rgba(244, 63, 94, 0.55)'
          : isDragging
          ? '2px dashed var(--primary-color)'
          : '1px dashed rgba(99, 102, 241, 0.4)',
        borderRadius: '18px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        position: 'relative',
        minHeight: '160px',
      }}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />

      {isUploading ? (
        <div style={{ width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
              marginBottom: '12px',
            }}
          >
            <Loader2 size={20} className="spin-animate" />
          </div>

          <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
            Uploading &amp; Vectorizing ({uploadPercent}%)
          </span>

          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'var(--border-subtle)',
              borderRadius: '9999px',
              overflow: 'hidden',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: `${uploadPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                borderRadius: '9999px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            Extracting skills, computing embedding vectors &amp; calibrating rubrics...
          </span>
        </div>
      ) : hasError ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(244, 63, 94, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fb7185',
              marginBottom: '10px',
            }}
          >
            <AlertCircle size={22} />
          </div>

          <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#e11d48', marginBottom: '4px' }}>
            Upload Failed or File Corrupted
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
            Please select a valid PDF, DOC, or DOCX document under 15 MB. Click to retry.
          </span>
        </div>
      ) : (
        <>
          {/* Cloud Upload Icon */}
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: isDragging ? 'rgba(99, 102, 241, 0.25)' : 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
              marginBottom: '10px',
              transition: 'all 0.2s',
            }}
          >
            <UploadCloud size={22} />
          </div>

          <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
            Drag &amp; drop updated resume
          </div>

          <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            or <span style={{ color: 'var(--primary-color)', textDecoration: 'underline', fontWeight: 600 }}>Browse Files</span> from device
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.68rem',
              color: 'var(--text-secondary)',
              marginBottom: '8px',
            }}
          >
            <span style={{ padding: '2px 6px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px', fontWeight: 500 }}>PDF</span>
            <span style={{ padding: '2px 6px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px', fontWeight: 500 }}>DOC</span>
            <span style={{ padding: '2px 6px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px', fontWeight: 500 }}>DOCX</span>
            <span style={{ color: 'var(--text-muted)' }}>• Max 15 MB</span>
          </div>

          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0, maxWidth: '340px', lineHeight: 1.35 }}>
            Takes &lt;15 seconds to parse skills, calibrate rubrics, and dynamically update recommended mocks.
          </p>
        </>
      )}
    </div>
  );
};
