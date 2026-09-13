import React from 'react';
import { Play, UploadCloud, Compass, Sparkles } from 'lucide-react';

interface DashboardEmptyStateProps {
  onStartInterview: () => void;
  onUploadCV: () => void;
  onTakeBaseline: () => void;
}

export const DashboardEmptyState: React.FC<DashboardEmptyStateProps> = ({
  onStartInterview,
  onUploadCV,
  onTakeBaseline,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px dashed rgba(99, 102, 241, 0.35)',
        borderRadius: '20px',
        padding: '48px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'rgba(99, 102, 241, 0.15)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#818cf8',
          marginBottom: '20px',
        }}
      >
        <Sparkles size={30} />
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
        Welcome to your Candidate Studio!
      </h2>
      <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '520px', lineHeight: 1.5, marginBottom: '28px' }}>
        You haven&apos;t taken your first 5-question mock simulation yet. Upload your CV or take the baseline calibration drill to unlock your tailored Readiness Metrics.
      </p>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={onStartInterview}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '0.88rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(124, 58, 237, 0.45)',
          }}
        >
          <Play size={16} fill="#ffffff" />
          <span>Launch First 5-Q Mock</span>
        </button>

        <button
          onClick={onUploadCV}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#cbd5e1',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '12px',
            fontSize: '0.88rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <UploadCloud size={16} />
          <span>Upload &amp; Parse CV</span>
        </button>

        <button
          onClick={onTakeBaseline}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#cbd5e1',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '12px',
            fontSize: '0.88rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Compass size={16} />
          <span>Diagnostic Baseline</span>
        </button>
      </div>
    </div>
  );
};
