import React, { useState } from 'react';
import { Check, Circle, X, CheckCircle2 } from 'lucide-react';

interface ProfileCompletionCardProps {
  percent?: number;
  hasBasicInfo?: boolean;
  hasSkills?: boolean;
  hasCv?: boolean;
  hasAssessment?: boolean;
  hasPreferences?: boolean;
  onCompleteProfile?: () => void;
}

export const ProfileCompletionCard: React.FC<ProfileCompletionCardProps> = ({
  percent,
  hasBasicInfo = true,
  hasSkills = false,
  hasCv = false,
  hasAssessment = false,
  hasPreferences = false,
  onCompleteProfile,
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  let foundCurrent = false;
  const rawSteps = [
    { label: 'Basic Info', completed: hasBasicInfo },
    { label: 'Skill & Tech', completed: hasSkills },
    { label: 'CV Uploaded', completed: hasCv },
    { label: 'Career assessment', completed: hasAssessment },
    { label: 'Company preference', completed: hasPreferences },
  ];

  const steps = rawSteps.map((s) => {
    const isCurrent = !s.completed && !foundCurrent;
    if (isCurrent) foundCurrent = true;
    return { ...s, current: isCurrent };
  });

  const completedCount = steps.filter((s) => s.completed).length;
  const displayPercent = percent !== undefined ? percent : Math.round((completedCount / steps.length) * 100);
  const is100Percent = displayPercent >= 100;

  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 20, 32, 0.75)',
        border: '1px solid rgba(99, 102, 241, 0.22)',
        borderRadius: '16px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        position: 'relative',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        marginBottom: '24px',
      }}
    >
      {/* Left icon and text content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '320px' }}>
        {/* Progress Circular Icon */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(99, 102, 241, 0.14)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
          }}
        >
          {is100Percent ? (
            <CheckCircle2 size={22} color="#10b981" />
          ) : (
            <div style={{ position: 'relative', width: '28px', height: '28px' }}>
              <svg width="28" height="28" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="3.5"
                  strokeDasharray={`${displayPercent}, 100`}
                />
              </svg>
            </div>
          )}
        </div>

        {/* Text and steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              {is100Percent ? 'Profile Fully Calibrated' : 'Complete Your Profile'}
            </h3>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: is100Percent ? 'rgba(16, 185, 129, 0.18)' : 'rgba(99, 102, 241, 0.2)',
                color: is100Percent ? '#34d399' : '#a5b4fc',
                border: is100Percent ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              {displayPercent}% Complete
            </span>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
            {is100Percent
              ? 'Role-calibrated benchmarks and personalized company simulations are actively live.'
              : 'Unlock role-calibrated benchmarks and personalized company simulations.'}
          </p>

          {/* Checklist Milestone Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginTop: '4px' }}>
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.74rem',
                  color: step.completed ? '#34d399' : step.current ? '#fbbf24' : '#64748b',
                  fontWeight: step.completed || step.current ? 500 : 400,
                }}
              >
                {step.completed ? (
                  <Check size={12} strokeWidth={3} color="#10b981" />
                ) : step.current ? (
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: '2px solid #f59e0b',
                      display: 'inline-block',
                    }}
                  />
                ) : (
                  <Circle size={8} color="#64748b" />
                )}
                <span>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action and Dismiss */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {!is100Percent && (
          <button
            onClick={onCompleteProfile}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.18s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4338ca')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4f46e5')}
          >
            Complete Profile
          </button>
        )}

        <button
          onClick={() => setDismissed(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '6px',
          }}
          title="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
