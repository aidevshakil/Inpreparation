import React from 'react';
import { ChevronRight, Download, ArrowRight, Database, Cpu, CheckCircle2 } from 'lucide-react';

interface ProfileAnalysisHeaderProps {
  onNavigateToAssessment?: () => void;
  onDownloadPdf?: () => void;
  onStartRecommendedInterviews?: () => void;
}

export const ProfileAnalysisHeader: React.FC<ProfileAnalysisHeaderProps> = ({
  onNavigateToAssessment,
  onDownloadPdf,
  onStartRecommendedInterviews,
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* 1. Breadcrumb & Stage Pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#94a3b8' }}>
          <span>Workspace</span>
          <ChevronRight size={12} style={{ color: '#475569' }} />
          <span style={{ color: '#cbd5e1', cursor: 'pointer' }} onClick={onNavigateToAssessment}>
            Career Assessment
          </span>
          <ChevronRight size={12} style={{ color: '#475569' }} />
          <span style={{ color: '#818cf8', fontWeight: 600 }}>AI Profile Analysis (Web #24)</span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            fontSize: '0.72rem',
            color: '#a5b4fc',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#818cf8',
              boxShadow: '0 0 6px #818cf8',
            }}
          />
          <span>Deterministic Vector Synthesis Active</span>
        </div>
      </div>

      {/* 2. Hero Title & Top Action Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '18px',
          marginBottom: '20px',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <h1
              style={{
                fontSize: '2.1rem',
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Your AI Profile Analysis
            </h1>

            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                border: '1px solid rgba(16, 185, 129, 0.35)',
              }}
            >
              Verified Dossier
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
            Synthesized foundational profile and competency radar generated from your uploaded CV, profile data, and 8-question diagnostic response.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={onDownloadPdf}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Download size={14} />
            <span>Download Dossier PDF</span>
          </button>

          <button
            onClick={onStartRecommendedInterviews}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
              transition: 'all 0.18s ease',
            }}
          >
            <span>Start Recommended Interviews (4 Tailored)</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* 3. 3 Metric Badges */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(14, 18, 28, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '12px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Database size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              DATA SOURCES
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
              3 Ingested (CV, Profile, Intro Video Q1-8)
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(14, 18, 28, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '12px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Cpu size={16} style={{ color: '#c084fc', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              RADAR TAXONOMY
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
              Staff Systems &amp; Architecture Framework
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(14, 18, 28, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '12px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <CheckCircle2 size={16} style={{ color: '#34d399', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              CONFIDENCE SCORE
            </div>
            <div style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 600 }}>
              High (94.6% Source Consistency &amp; Alignment)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
