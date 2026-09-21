import React from 'react';

interface DiagnosticProgressTrackerProps {
  currentStep: number;
  totalSteps?: number;
  onSelectStep?: (step: number) => void;
}

export const DiagnosticProgressTracker: React.FC<DiagnosticProgressTrackerProps> = ({
  currentStep = 1,
  totalSteps = 8,
  onSelectStep,
}) => {
  const percentComplete = (currentStep / totalSteps) * 100;

  const phases = [
    { step: 1, label: '1. Background' },
    { step: 2, label: '2. Tech Stack' },
    { step: 3, label: '3. Exp Depth' },
    { step: 4, label: '4. Goals' },
    { step: 5, label: '5. Practice' },
    { step: 6, label: '6. Calibration' },
    { step: 7, label: '7. Review' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '18px 22px',
        marginBottom: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a5b4fc',
              fontSize: '0.85rem',
              fontWeight: 800,
            }}
          >
            {currentStep}
          </div>

          <div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#f8fafc' }}>
              Diagnostic Intake: Step {currentStep} of {totalSteps}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Phase: Candidate Background &amp; Professional Trajectory
            </div>
          </div>
        </div>

        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#818cf8' }}>
          {percentComplete.toFixed(1)}% Complete
        </div>
      </div>

      {/* Progress Track */}
      <div
        style={{
          width: '100%',
          height: '5px',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '9999px',
          overflow: 'hidden',
          marginBottom: '14px',
        }}
      >
        <div
          style={{
            width: `${percentComplete}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
            borderRadius: '9999px',
            transition: 'width 0.4s ease',
          }}
        />
      </div>

      {/* 7 Phase Sub-tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          paddingTop: '10px',
          overflowX: 'auto',
          gap: '12px',
        }}
      >
        {phases.map((phase) => {
          const isActive = currentStep === phase.step;
          return (
            <button
              key={phase.step}
              onClick={() => onSelectStep && onSelectStep(phase.step)}
              style={{
                background: 'transparent',
                border: 'none',
                color: isActive ? '#a5b4fc' : '#64748b',
                fontSize: '0.74rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                padding: '4px 0',
                position: 'relative',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{phase.label}</span>
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#818cf8',
                    borderRadius: '2px',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
