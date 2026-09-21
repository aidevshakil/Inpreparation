import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface StepItem {
  id: string;
  number: number;
  label: string;
  status: string;
  isComplete: boolean;
}

interface CvBuilderStepProgressProps {
  activeSection?: string;
  onSelectSection?: (sectionId: string) => void;
  personalComplete?: boolean;
  summaryComplete?: boolean;
  experienceCount?: number;
  educationCount?: number;
  skillCount?: number;
  projectCount?: number;
  certCount?: number;
}

export const CvBuilderStepProgress: React.FC<CvBuilderStepProgressProps> = ({
  activeSection = 'personal',
  onSelectSection,
  personalComplete = false,
  summaryComplete = false,
  experienceCount = 0,
  educationCount = 0,
  skillCount = 0,
  projectCount = 0,
  certCount = 0,
}) => {
  const totalSteps = 7;
  let completedCount = 0;
  if (personalComplete) completedCount++;
  if (summaryComplete) completedCount++;
  if (experienceCount > 0) completedCount++;
  if (educationCount > 0) completedCount++;
  if (skillCount > 0) completedCount++;
  if (projectCount > 0) completedCount++;
  if (certCount > 0) completedCount++;

  const percentage = Math.round((completedCount / totalSteps) * 100);

  const steps: StepItem[] = [
    { id: 'personal', number: 1, label: 'Personal', status: personalComplete ? 'Completed' : 'Pending', isComplete: personalComplete },
    { id: 'summary', number: 2, label: 'Summary', status: summaryComplete ? 'Completed' : 'Pending', isComplete: summaryComplete },
    { id: 'experience', number: 3, label: 'Experience', status: `${experienceCount} entr${experienceCount === 1 ? 'y' : 'ies'}`, isComplete: experienceCount > 0 },
    { id: 'education', number: 4, label: 'Education', status: `${educationCount} entr${educationCount === 1 ? 'y' : 'ies'}`, isComplete: educationCount > 0 },
    { id: 'skills', number: 5, label: 'Skills', status: `${skillCount} tag${skillCount === 1 ? '' : 's'}`, isComplete: skillCount > 0 },
    { id: 'projects', number: 6, label: 'Projects', status: `${projectCount} entr${projectCount === 1 ? 'y' : 'ies'}`, isComplete: projectCount > 0 },
    { id: 'certs', number: 7, label: 'Certs', status: `${certCount} entr${certCount === 1 ? 'y' : 'ies'}`, isComplete: certCount > 0 },
    { id: 'additional', number: 8, label: 'Additional', status: 'Optional', isComplete: false },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '16px',
        padding: '16px 20px',
        marginBottom: '24px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Step 3 of 4: In-depth Profile Registration
          </span>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.3)',
            }}
          >
            {percentage}% Readiness Calibration
          </span>
        </div>

        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          Completion measures calibration coverage, not hiring probability or employability.
        </span>
      </div>

      {/* Main Overall Progress Bar */}
      <div
        style={{
          width: '100%',
          height: '4px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '9999px',
          overflow: 'hidden',
          marginBottom: '14px',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
            borderRadius: '9999px',
          }}
        />
      </div>

      {/* 8 Step Chips */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '8px',
        }}
      >
        {steps.map((step) => {
          const isActive = activeSection === step.id;
          return (
            <button
              key={step.id}
              onClick={() => onSelectSection && onSelectSection(step.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 10px',
                borderRadius: '8px',
                backgroundColor: isActive
                  ? 'rgba(99, 102, 241, 0.15)'
                  : 'var(--bg-card)',
                border: isActive
                  ? '1px solid rgba(99, 102, 241, 0.3)'
                  : '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease',
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: step.isComplete ? '#10b981' : 'var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  color: step.isComplete ? '#ffffff' : 'var(--text-muted)',
                  flexShrink: 0,
                }}
              >
                {step.isComplete ? <CheckCircle2 size={12} /> : step.number}
              </div>

              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--primary-color)' : 'var(--text-main)',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  {step.number}. {step.label}
                </div>
                <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>{step.status}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
