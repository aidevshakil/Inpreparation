import React from 'react';
import { Eye, Sliders, RefreshCw, Download, Share2, FileText, CheckCircle2 } from 'lucide-react';

interface CvActiveMasterCardProps {
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
  vectorizedTime?: string;
  onFullPreview?: () => void;
  onSkillMatrix?: () => void;
  onReplaceCv?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
}

export const CvActiveMasterCard: React.FC<CvActiveMasterCardProps> = ({
  fileName = 'Shakil_Ahamed_Resume_2026.pdf',
  fileSize = '142 KB',
  uploadDate = 'Uploaded Sep 10, 2026',
  vectorizedTime = 'Vectorized 2h ago',
  onFullPreview,
  onSkillMatrix,
  onReplaceCv,
  onDownload,
  onShare,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Top File Information */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {/* PDF File Icon */}
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            backgroundColor: 'rgba(244, 63, 94, 0.15)',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fb7185',
            fontWeight: 800,
            fontSize: '0.72rem',
            flexShrink: 0,
          }}
        >
          <FileText size={18} />
          <span style={{ fontSize: '0.62rem', marginTop: '1px' }}>PDF</span>
        </div>

        {/* Name and Badges */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
            <h3
              style={{
                fontSize: '1.02rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                margin: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {fileName}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(2, 132, 199, 0.12)',
                  color: '#0284c7',
                  border: '1px solid rgba(2, 132, 199, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
                <span>Active Master</span>
              </span>

              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(5, 150, 105, 0.12)',
                  color: '#059669',
                  border: '1px solid rgba(5, 150, 105, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <CheckCircle2 size={11} color="#059669" />
                <span>AI Analysis Complete</span>
              </span>
            </div>
          </div>

          <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', margin: 0 }}>
            PDF Document • {fileSize} • {uploadDate} • <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>{vectorizedTime}</span>
          </p>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={onFullPreview}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.76rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
          >
            <Eye size={13} />
            <span>Full Preview</span>
          </button>

          <button
            onClick={onSkillMatrix}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.76rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
          >
            <Sliders size={13} />
            <span>Skill Matrix</span>
          </button>

          <button
            onClick={onReplaceCv}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: 'var(--primary-color)',
              fontSize: '0.76rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.22)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.12)')}
          >
            <RefreshCw size={13} />
            <span>Replace CV</span>
          </button>
        </div>

        {/* Download & Share */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={onDownload}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Download PDF"
          >
            <Download size={14} />
          </button>

          <button
            onClick={onShare}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title="Share Document"
          >
            <Share2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
