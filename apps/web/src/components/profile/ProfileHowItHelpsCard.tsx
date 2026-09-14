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
    { num: '4', label: 'Calibrated Interview Drills' },
  ];

  return (
    <div className="flex-col" style={{ gap: '14px' }}>
      {/* How It Helps Flow */}
      <div className="card">
        <div className="flex items-center gap-2" style={{ marginBottom: '14px' }}>
          <Sparkles size={15} style={{ color: 'var(--primary-color)' }} />
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            How Your Profile Helps
          </span>
        </div>

        <div className="flex-col" style={{ gap: '8px', marginBottom: '14px' }}>
          {steps.map((step) => (
            <div key={step.num} className="flex items-center gap-3">
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '11px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {step.num}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
          Your profile information helps us recommend simulations that match your career goals. We never make automated hiring decisions or psychological inferences.
        </p>
      </div>

      {/* Responsible AI & Privacy Box */}
      <div className="card" style={{ padding: '16px' }}>
        <div className="flex items-center gap-2" style={{ marginBottom: '6px' }}>
          <ShieldCheck size={16} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>
            Responsible AI &amp; Privacy
          </span>
        </div>

        <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.45, margin: '0 0 10px 0' }}>
          Your profile data is strictly utilized for mock simulation calibration and telemetry feedback.
        </p>

        <button
          onClick={onManagePrivacy}
          style={{ background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: 0 }}
        >
          <span>Manage Privacy &amp; Data</span>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};
