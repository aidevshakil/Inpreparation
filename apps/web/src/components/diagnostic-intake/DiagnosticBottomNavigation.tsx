import React from 'react';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';

interface DiagnosticBottomNavigationProps {
  currentStep: number;
  totalSteps?: number;
  onPrevious?: () => void;
  onSaveAndExit?: () => void;
  onNext?: () => void;
  autoSavedText?: string;
}

export const DiagnosticBottomNavigation: React.FC<DiagnosticBottomNavigationProps> = ({
  currentStep,
  totalSteps = 8,
  onPrevious,
  onSaveAndExit,
  onNext,
  autoSavedText = 'Auto-saved 14s ago',
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px 0',
      }}
    >
      {/* Left Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          onClick={onPrevious}
          disabled={isFirstStep}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 18px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '10px',
            color: isFirstStep ? '#475569' : '#cbd5e1',
            fontSize: '0.82rem',
            fontWeight: 500,
            cursor: isFirstStep ? 'not-allowed' : 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <ArrowLeft size={14} />
          <span>Previous</span>
        </button>

        <button
          onClick={onSaveAndExit}
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
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <Save size={14} />
          <span>Save &amp; Exit</span>
        </button>
      </div>

      {/* Center Auto-save notification */}
      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
        {autoSavedText}
      </div>

      {/* Right Continue button */}
      <button
        onClick={onNext}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '11px 24px',
          background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '10px',
          fontSize: '0.84rem',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
          transition: 'all 0.18s ease',
        }}
      >
        <span>{isLastStep ? 'Complete Diagnostic Calibration' : `Continue to Question ${currentStep + 1}`}</span>
        <ArrowRight size={15} />
      </button>
    </div>
  );
};
