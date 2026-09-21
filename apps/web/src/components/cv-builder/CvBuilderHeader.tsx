import React from 'react';
import { UploadCloud, Save, Eye, ArrowRight, Sparkles } from 'lucide-react';

interface CvBuilderHeaderProps {
  onNavigateToCv?: () => void;
  onImportResume?: () => void;
  onSaveDraft?: () => void;
  onPreviewA4?: () => void;
  onContinueToAssessment?: () => void;
  isAutosaving?: boolean;
}

export const CvBuilderHeader: React.FC<CvBuilderHeaderProps> = ({
  onNavigateToCv,
  onImportResume,
  onSaveDraft,
  onPreviewA4,
  onContinueToAssessment,
  isAutosaving = false,
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
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            <span>Workspace</span>
            <span style={{ margin: '0 6px', color: '#475569' }}>/</span>
            <span style={{ color: '#cbd5e1', cursor: 'pointer' }} onClick={onNavigateToCv}>
              My CV
            </span>
            <span style={{ margin: '0 6px', color: '#475569' }}>/</span>
            <span style={{ color: '#818cf8', fontWeight: 600 }}>Manual CV Builder</span>
          </div>

          {/* Title & Status Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              Build Your CV
            </h1>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '9999px',
                backgroundColor: isAutosaving ? 'rgba(99, 102, 241, 0.2)' : 'rgba(16, 185, 129, 0.15)',
                color: isAutosaving ? '#a5b4fc' : '#34d399',
                border: isAutosaving ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(16, 185, 129, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: isAutosaving ? '#818cf8' : '#10b981',
                }}
              />
              {isAutosaving ? 'Autosaving...' : 'Saved Just Now'}
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '680px', lineHeight: 1.5 }}>
            Craft your career narrative from scratch or customize logic requirements. Inprep AI standardizes layout, optimizes ATS keywords, and polishes wording without inventing qualifications.
          </p>
        </div>

        {/* Top Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', alignSelf: 'center' }}>
          <button
            onClick={onImportResume}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 15px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <UploadCloud size={14} />
            <span>Import PDF / DOCX</span>
          </button>

          <button
            onClick={onSaveDraft}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 15px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Save size={14} />
            <span>Save Draft</span>
          </button>

          <button
            onClick={onPreviewA4}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 15px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Eye size={14} />
            <span>Preview A4</span>
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
            <span>Save &amp; Continue to Assessment</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Callout Blue Import Notice */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '12px 18px',
          backgroundColor: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          borderRadius: '14px',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
              flexShrink: 0,
            }}
          >
            <Sparkles size={14} />
          </div>
          <span>
            <strong>Already have an updated resume?</strong> Import it to pre-fill all sections automatically. Fast retention &amp; 100% verified.
          </span>
        </div>

        <button
          onClick={onImportResume}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--primary-color)',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '0.8rem',
            padding: 0,
            textDecoration: 'underline',
          }}
        >
          Import existing resume
        </button>
      </div>
    </div>
  );
};
