import React from 'react';
import { PenTool } from 'lucide-react';

interface ProfileAnalysisReadinessCardProps {
  onCompleteProfile?: () => void;
}

export const ProfileAnalysisReadinessCard: React.FC<ProfileAnalysisReadinessCardProps> = ({
  onCompleteProfile,
}) => {
  const readinessItems = [
    { label: 'Basic Info & Verification', percentage: 100, color: '#10b981' },
    { label: 'CV & Resume Ingestion', percentage: 100, color: '#10b981' },
    { label: 'Career Goals & Seniority', percentage: 100, color: '#10b981' },
    { label: 'Technical Stack Granularity', percentage: 85, color: '#38bdf8' },
    { label: 'Interview Preferences Setup', percentage: 75, color: '#818cf8' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '6px',
        }}
      >
        <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Profile Readiness
        </h4>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.4)',
          }}
        >
          78% Ready
        </span>
      </div>

      <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
        Diagnostic parameters completeness across baseline inputs:
      </p>

      {/* Progress Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        {readinessItems.map((item) => (
          <div key={item.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '4px' }}>
              <span style={{ color: '#cbd5e1' }}>{item.label}</span>
              <span style={{ color: item.color, fontWeight: 700 }}>{item.percentage}%</span>
            </div>

            <div
              style={{
                width: '100%',
                height: '5px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${item.percentage}%`,
                  height: '100%',
                  backgroundColor: item.color,
                  borderRadius: '9999px',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.66rem', color: '#64748b', margin: '0 0 16px 0', lineHeight: 1.4 }}>
        * Measures completeness of diagnostic parameters, not hiring potential or score.
      </p>

      {/* Action Button */}
      <button
        onClick={onCompleteProfile}
        style={{
          width: '100%',
          padding: '9px 14px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '10px',
          color: '#cbd5e1',
          fontSize: '0.76rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.15s ease',
        }}
      >
        <PenTool size={13} style={{ color: '#818cf8' }} />
        <span>Complete Remaining Details (22%)</span>
      </button>
    </div>
  );
};
