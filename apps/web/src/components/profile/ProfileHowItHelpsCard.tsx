import React from 'react';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProfileHowItHelpsCardProps {
  onManagePrivacy?: () => void;
}

export const ProfileHowItHelpsCard: React.FC<ProfileHowItHelpsCardProps> = ({
  onManagePrivacy,
}) => {
  const steps = [
    { num: '1', label: 'Your Profile Data' },
    { num: '2', label: 'Skills & Target Roles' },
    { num: '3', label: 'Career Preferences' },
    { num: '4', label: 'Calibrated 5-Q Interview Drills' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* How It Helps Flow */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '18px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Sparkles size={15} style={{ color: '#818cf8' }} />
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.8px',
              color: '#818cf8',
              textTransform: 'uppercase',
            }}
          >
            How Your Profile Helps
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          {steps.map((step) => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(99, 102, 241, 0.18)',
                  color: '#818cf8',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {step.num}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#e2e8f0', fontWeight: 500 }}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.71rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
          Your profile information helps us recommend simulations that match your career goals. We never make automated hiring decisions or psychological inferences.
        </p>
      </div>

      {/* Responsible AI & Privacy Box */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(99, 102, 241, 0.18)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <ShieldCheck size={16} color="#818cf8" />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
            Responsible AI &amp; Privacy
          </span>
        </div>

        <p style={{ fontSize: '0.71rem', color: '#94a3b8', lineHeight: 1.45, margin: '0 0 10px 0' }}>
          Your profile data is strictly utilized for mock simulation calibration and telemetry feedback.
        </p>

        <button
          onClick={onManagePrivacy}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: 0,
          }}
        >
          <span>Manage Privacy &amp; Data</span>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};
