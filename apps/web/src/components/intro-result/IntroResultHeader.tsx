import React from 'react';
import { ChevronRight, CheckCircle2, RotateCcw, ArrowRight, Video } from 'lucide-react';

interface IntroResultHeaderProps {
  onNavigateToAssessment?: () => void;
  onRetakeIntroduction?: () => void;
  onViewTailoredDrills?: () => void;
}

export const IntroResultHeader: React.FC<IntroResultHeaderProps> = ({
  onNavigateToAssessment,
  onRetakeIntroduction,
  onViewTailoredDrills,
}) => {
  const steps = [
    { number: 1, label: 'Profile & CV', status: 'completed' },
    { number: 2, label: 'Device Check', status: 'completed' },
    { number: 3, label: 'Intake Prompts', status: 'completed' },
    { number: 4, label: 'Career Synthesis', status: 'active' },
    { number: 5, label: 'Recommended Drills', status: 'upcoming' },
  ];

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
          <span style={{ color: '#818cf8', fontWeight: 600 }}>Introduction Result (Web #23)</span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.28)',
            fontSize: '0.72rem',
            color: '#34d399',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 6px #10b981',
            }}
          />
          <span>Diagnostic Ingestion Complete</span>
        </div>
      </div>

      {/* 2. Career Assessment Milestones Stepper Box */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '14px',
          padding: '14px 18px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
            fontSize: '0.68rem',
            fontWeight: 700,
          }}
        >
          <span style={{ color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            CAREER ASSESSMENT MILESTONES
          </span>
          <span style={{ color: '#a5b4fc' }}>Step 4 of 5 Finalized</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
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
                  padding: '6px 10px',
                  borderRadius: '8px',
                  backgroundColor: isActive
                    ? 'rgba(99, 102, 241, 0.16)'
                    : isCompleted
                    ? 'rgba(255, 255, 255, 0.03)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid rgba(129, 140, 248, 0.5)'
                    : isCompleted
                    ? '1px solid rgba(255, 255, 255, 0.06)'
                    : '1px solid rgba(255, 255, 255, 0.03)',
                  fontSize: '0.72rem',
                  color: isActive ? '#c084fc' : isCompleted ? '#cbd5e1' : '#64748b',
                  fontWeight: isActive ? 700 : isCompleted ? 600 : 400,
                }}
              >
                {isCompleted || isActive ? (
                  <CheckCircle2 size={13} style={{ color: isActive ? '#a855f7' : '#10b981', flexShrink: 0 }} />
                ) : (
                  <span
                    style={{
                      width: '13px',
                      height: '13px',
                      borderRadius: '50%',
                      border: '1px solid #475569',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6rem',
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

      {/* 3. Title & Actions Header Row */}
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
          <h1
            style={{
              fontSize: '2.1rem',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 8px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Your Career Introduction Is Complete
          </h1>
          <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
            Here&apos;s a structured summary of what you shared and how Inprep AI personalizes your preparation journey.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={onRetakeIntroduction}
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
            <RotateCcw size={14} />
            <span>Retake Introduction</span>
          </button>

          <button
            onClick={onViewTailoredDrills}
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
            <span>View Tailored Drills</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* 4. 5 Metric Parameter Chips */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px',
          backgroundColor: 'rgba(14, 18, 28, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '14px',
          padding: '12px 18px',
        }}
      >
        <div>
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            STATUS
          </div>
          <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={13} />
            <span>Completed ✓</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            SESSION
          </div>
          <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>
            Career Introduction
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            QUESTIONS
          </div>
          <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>
            8 of 8 Completed
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            MODE
          </div>
          <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Video size={13} />
            <span>Camera + Voice</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            COMPLETED
          </div>
          <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600 }}>
            Today, 14:38 UTC
          </div>
        </div>
      </div>
    </div>
  );
};
