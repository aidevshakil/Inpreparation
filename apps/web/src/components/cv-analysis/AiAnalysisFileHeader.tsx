import React from 'react';
import { Download, RefreshCw, ArrowRight, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface AiAnalysisFileHeaderProps {
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
  parsedTime?: string;
  onNavigateToCv?: () => void;
  onDownloadDossier?: () => void;
  onReanalyzeCv?: () => void;
  onContinueToAssessment?: () => void;
  onViewDocument?: () => void;
  onReplaceCv?: () => void;
}

export const AiAnalysisFileHeader: React.FC<AiAnalysisFileHeaderProps> = ({
  fileName = 'Shakil_Ahamed_Resume_2026.pdf',
  fileSize = '142 KB',
  uploadDate = 'Sep 10, 2026',
  parsedTime = '4 minutes ago',
  onNavigateToCv,
  onDownloadDossier,
  onReanalyzeCv,
  onContinueToAssessment,
  onViewDocument,
  onReplaceCv,
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Top Header Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '24px 0 16px 0',
        }}
      >
        <div>
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '8px' }}>
            <span>Workspace</span>
            <span style={{ margin: '0 6px', color: '#475569' }}>/</span>
            <span style={{ color: '#cbd5e1', cursor: 'pointer' }} onClick={onNavigateToCv}>My CV</span>
            <span style={{ margin: '0 6px', color: '#475569' }}>/</span>
            <span style={{ color: '#818cf8', fontWeight: 600 }}>AI CV Analysis</span>
          </div>

          {/* Badges & Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(99, 102, 241, 0.18)',
                color: '#a5b4fc',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              Step 2 of 4 • Dossier Synthesis
            </span>

            <span
              style={{
                fontSize: '0.7rem',
                color: '#64748b',
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              Vector L1: Semantic Match v4.3
            </span>
          </div>

          <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
            AI CV Analysis
          </h1>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '680px', lineHeight: 1.5 }}>
            Here&apos;s what Inprep AI extracted and learned from your CV. Review the extracted competencies, adjust discrepancies, and verify your baseline profile.
          </p>
        </div>

        {/* Top Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', alignSelf: 'center' }}>
          <button
            onClick={onDownloadDossier}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 15px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Download size={14} />
            <span>Download Dossier</span>
          </button>

          <button
            onClick={onReanalyzeCv}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 15px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <RefreshCw size={14} />
            <span>Re-analyze CV</span>
          </button>

          <button
            onClick={onContinueToAssessment}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
              transition: 'all 0.18s ease',
            }}
          >
            <span>Continue to Career Assessment</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Active File Summary Bar Card */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '320px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'rgba(244, 63, 94, 0.15)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              color: '#fb7185',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            <FileText size={16} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {fileName}
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#059669',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <CheckCircle2 size={11} color="#059669" />
                <span>Analysis Complete</span>
              </span>
            </div>

            <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0 }}>
              Uploaded: {uploadDate} • Format: PDF (Selectable OCR Text) • Size: {fileSize} • Parsed {parsedTime}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onViewDocument}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Eye size={13} />
            <span>View Document</span>
          </button>

          <button
            onClick={onReplaceCv}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <RefreshCw size={13} />
            <span>Replace CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
