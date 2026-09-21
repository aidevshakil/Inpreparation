import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AiAnalysisNextStepBarProps {
  onBackToCv?: () => void;
  onStartAssessment?: () => void;
}

export const AiAnalysisNextStepBar: React.FC<AiAnalysisNextStepBarProps> = ({
  onBackToCv,
  onStartAssessment,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '18px',
        padding: '20px 24px',
        marginBottom: '24px',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      {/* Left side: Milestone icon & description */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '280px', flex: 1 }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a5b4fc',
            fontSize: '1.1rem',
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          4
        </div>

        <div>
          <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 4px 0' }}>
            Next Step: 5-Minute AI Career Assessment
          </h4>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>
            Confirm your speaking baseline, camera presence, and technical depth with your introductory conversational AI interviewer.
          </p>
        </div>
      </div>

      {/* Right side: Action buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <button
          onClick={onBackToCv}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 18px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            color: 'var(--text-main)',
            fontSize: '0.82rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <span>Back to My CV</span>
        </button>

        <button
          onClick={onStartAssessment}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '11px 22px',
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
          <span>Start Assessment</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};
