import React, { useRef } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  Info,
  Lock,
  Loader2,
  AlertCircle,
  FileText,
  X,
  ArrowRight,
  Cpu,
  RefreshCw,
} from 'lucide-react';
import { CvUploadState } from './CvUploadSimulatorBar';

interface CvUploadHeroDropzoneProps {
  state: CvUploadState;
  onSelectFile: (file: File) => void;
  onStartUpload: () => void;
  onReset: () => void;
  onViewAnalysis: () => void;
}

export const CvUploadHeroDropzone: React.FC<CvUploadHeroDropzoneProps> = ({
  state,
  onSelectFile,
  onStartUpload,
  onReset,
  onViewAnalysis,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onSelectFile(e.target.files[0]);
    }
  };

  const isDragging = state === 'dragging';

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '36px 32px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />

      {/* Inner Dashed Drop Container */}
      <div
        style={{
          border: isDragging
            ? '2px dashed #818cf8'
            : state === 'format_error'
            ? '2px dashed #f59e0b'
            : state === 'pipeline_failure'
            ? '2px dashed #f43f5e'
            : '2px dashed rgba(99, 102, 241, 0.35)',
          borderRadius: '18px',
          padding: '44px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: isDragging
            ? 'rgba(99, 102, 241, 0.08)'
            : 'rgba(255, 255, 255, 0.01)',
          transition: 'all 0.25s ease',
          minHeight: '260px',
        }}
      >
        {/* State 1 & 2: Default Empty & Dragging */}
        {(state === 'default' || state === 'dragging') && (
          <>
            {/* Upload Icon Badge */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8',
                marginBottom: '20px',
                boxShadow: isDragging ? '0 0 24px rgba(99, 102, 241, 0.6)' : 'none',
                transform: isDragging ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.2s ease',
              }}
            >
              <UploadCloud size={30} />
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              {isDragging ? 'Release file to start upload' : 'Drop your CV here'}
            </h2>

            <p style={{ fontSize: '0.86rem', color: '#94a3b8', maxWidth: '520px', lineHeight: 1.5, marginBottom: '24px' }}>
              Drag and drop your resume file here, or browse directly from your computer to initiate semantic analysis.
            </p>

            {/* Actions: Browse Files + Or Drag & Drop */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 24px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '11px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <UploadCloud size={16} />
                <span>Browse Files</span>
              </button>

              <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.8px' }}>
                OR DRAG &amp; DROP
              </span>
            </div>
          </>
        )}

        {/* State 3: File Selected */}
        {state === 'file_selected' && (
          <div style={{ width: '100%', maxWidth: '480px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                marginBottom: '20px',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(244, 63, 94, 0.18)',
                  color: '#fb7185',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  flexShrink: 0,
                }}
              >
                <FileText size={18} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Shakil_Ahamed_Resume_2026.pdf
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>
                  142 KB • Ready to vectorize
                </div>
              </div>

              <button
                onClick={onReset}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '4px',
                }}
                title="Remove selection"
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={onReset}
                style={{
                  padding: '10px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: '#cbd5e1',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>

              <button
                onClick={onStartUpload}
                style={{
                  padding: '10px 24px',
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
                }}
              >
                Upload &amp; Vectorize
              </button>
            </div>
          </div>
        )}

        {/* State 4: Uploading (68%) */}
        {state === 'uploading' && (
          <div style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8',
                marginBottom: '16px',
              }}
            >
              <Loader2 size={24} className="spin-animate" />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              Uploading Resume (68%)
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
              Transferring encrypted file to isolated sandbox container...
            </p>

            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                overflow: 'hidden',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  width: '68%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                  borderRadius: '9999px',
                }}
              />
            </div>
          </div>
        )}

        {/* State 5: AI Processing */}
        {state === 'processing' && (
          <div style={{ width: '100%', maxWidth: '460px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c084fc',
                marginBottom: '16px',
              }}
            >
              <Cpu size={26} className="spin-animate" />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              AI Semantic Vectorization Pipeline
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
              Parsing 28 competency dimensions and mapping against Staff-level rubrics...
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#a5b4fc',
                fontSize: '0.74rem',
                fontWeight: 600,
              }}
            >
              <span>Embedding Vector Model v4.1 Active</span>
            </div>
          </div>
        )}

        {/* State 6: Analysis Ready */}
        {state === 'ready' && (
          <div style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34d399',
                marginBottom: '16px',
              }}
            >
              <CheckCircle2 size={28} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Analysis &amp; Vectorization Ready!
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
              Successfully extracted 28 technical attributes with 84/100 CV Strength Score.
            </p>

            <button
              onClick={onViewAnalysis}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 24px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '11px',
                fontSize: '0.86rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(16, 185, 129, 0.45)',
              }}
            >
              <span>View CV Strength Matrix</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* State 7: Format Error */}
        {state === 'format_error' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fbbf24',
                marginBottom: '14px',
              }}
            >
              <AlertCircle size={26} />
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fbbf24', marginBottom: '6px' }}>
              Unsupported File Format
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', maxWidth: '420px', lineHeight: 1.5, marginBottom: '18px' }}>
              Only PDF, DOC, or DOCX documents up to 15 MB are supported. Scanned images without text layers cannot be parsed.
            </p>

            <button
              onClick={() => fileInputRef.current?.click()}
              style={{
                padding: '9px 18px',
                backgroundColor: 'rgba(245, 158, 11, 0.18)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                borderRadius: '10px',
                color: '#fef3c7',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Select Another File
            </button>
          </div>
        )}

        {/* State 8: Pipeline Failure */}
        {state === 'pipeline_failure' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(244, 63, 94, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fb7185',
                marginBottom: '14px',
              }}
            >
              <AlertCircle size={26} />
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fb7185', marginBottom: '6px' }}>
              Embedding Vector Pipeline Failure
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', maxWidth: '420px', lineHeight: 1.5, marginBottom: '18px' }}>
              The parsing backend timed out while processing tokens. Please check your network connection and retry.
            </p>

            <button
              onClick={onStartUpload}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 20px',
                backgroundColor: '#f43f5e',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <RefreshCw size={14} />
              <span>Retry Ingestion</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Specs Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '20px',
          fontSize: '0.74rem',
          color: '#94a3b8',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <CheckCircle2 size={13} color="#10b981" />
          <span>Supported formats: <strong style={{ color: '#f8fafc' }}>PDF, DOC, DOCX</strong></span>
        </div>

        <span style={{ color: '#334155' }}>•</span>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <Info size={13} color="#818cf8" />
          <span>Recommended limit: <strong style={{ color: '#f8fafc' }}>Up to 15 MB</strong></span>
        </div>

        <span style={{ color: '#334155' }}>•</span>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <Lock size={13} color="#34d399" />
          <span>Privacy: <strong style={{ color: '#34d399' }}>Encrypted at rest</strong></span>
        </div>
      </div>
    </div>
  );
};
