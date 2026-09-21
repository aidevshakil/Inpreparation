import React from 'react';
import { ChevronRight, CheckCircle2, Sliders, Grid, ExternalLink } from 'lucide-react';

interface RecommendedInterviewsHeaderProps {
  onNavigateToAssessment?: () => void;
  onUpdatePreferences?: () => void;
  onBrowseFullLibrary?: () => void;
}

export const RecommendedInterviewsHeader: React.FC<RecommendedInterviewsHeaderProps> = ({
  onNavigateToAssessment,
  onUpdatePreferences,
  onBrowseFullLibrary,
}) => {
  const steps = [
    { number: 1, label: 'Profile & CV', status: 'completed' },
    { number: 2, label: 'Device Check', status: 'completed' },
    { number: 3, label: 'Intake Prompts', status: 'completed' },
    { number: 4, label: 'Profile Analysis', status: 'completed' },
    { number: 5, label: 'Recommended Interviews', status: 'active' },
  ];

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* 1. Breadcrumbs & Stage Pill */}
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
          <span style={{ color: '#818cf8', fontWeight: 600 }}>Recommended Interviews (Web #25)</span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.28)',
            fontSize: '0.72rem',
            color: '#38bdf8',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 6px #38bdf8',
            }}
          />
          <span>Tailored Match Synthesis</span>
        </div>
      </div>

      {/* 2. 5-Step Milestone Stepper */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '14px',
          padding: '14px 18px',
          marginBottom: '22px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '8px',
          }}
        >
          {steps.map((step) => {
            const isCompleted = step.status === 'completed';
            const isActive = step.status === 'active';

            return (
              <div
                key={step.number}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  backgroundColor: isActive
                    ? 'rgba(99, 102, 241, 0.2)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: isActive
                    ? '1px solid rgba(129, 140, 248, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.72rem',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  fontWeight: isActive ? 700 : 500,
                  boxShadow: isActive ? '0 0 14px rgba(99, 102, 241, 0.2)' : 'none',
                }}
              >
                {isCompleted ? (
                  <CheckCircle2 size={13} style={{ color: '#10b981', flexShrink: 0 }} />
                ) : (
                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#6366f1',
                      color: '#ffffff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </span>
                )}
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {step.number}. {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Hero Title & Actions Row */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <h1
            style={{
              fontSize: '2.1rem',
              fontWeight: 800,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Recommended Interviews
          </h1>

          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '3px 12px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
              color: '#c084fc',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              boxShadow: '0 0 12px rgba(168, 85, 247, 0.2)',
            }}
          >
            Personalized for You (4 Tailored)
          </span>
        </div>

        <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: '0 0 18px 0', maxWidth: '880px', lineHeight: 1.5 }}>
          Practice with interview simulations dynamically curated from your CV ingestion, stated L6+ career goals, and spoken intake responses. Calibrated to measure real-world trade-off reasoning without trick questions.
        </p>

        {/* Meta & Secondary Actions Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.74rem',
            color: '#64748b',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ color: '#cbd5e1' }}>
              Sources Synthesized: <strong style={{ color: '#f8fafc' }}>CV (Spiral Lab / Betopia Group), Profile, Spoken Audio Intake (8/8)</strong>
            </span>
            <span>•</span>
            <span>Personalization Freshness: Just now • Synced to AES-256 Vault</span>
            <span>•</span>
            <a
              href="#how-recs-work"
              onClick={(e) => {
                e.preventDefault();
                alert('Inprep AI uses deterministic vector distance matching between candidate skill profiles and interview track rubrics.');
              }}
              style={{ color: '#818cf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px', fontWeight: 600 }}
            >
              <span>How recommendations work</span>
              <ExternalLink size={10} />
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onUpdatePreferences}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Sliders size={12} />
              <span>Update Preferences</span>
            </button>

            <button
              onClick={onBrowseFullLibrary}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Grid size={12} />
              <span>Browse Full Library (48+)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
