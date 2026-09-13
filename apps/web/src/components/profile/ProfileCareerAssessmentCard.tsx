import React from 'react';
import { Target, Play } from 'lucide-react';

interface ProfileCareerAssessmentCardProps {
  onStartAssessment?: () => void;
}

export const ProfileCareerAssessmentCard: React.FC<ProfileCareerAssessmentCardProps> = ({
  onStartAssessment,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        marginBottom: '16px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={15} style={{ color: '#fbbf24' }} />
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.8px',
              color: '#fbbf24',
              textTransform: 'uppercase',
            }}
          >
            Career Assessment
          </span>
        </div>

        <span
          style={{
            fontSize: '0.66rem',
            fontWeight: 600,
            padding: '2px 7px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            color: '#fbbf24',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          Not Started
        </span>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, marginBottom: '14px' }}>
        Complete a 5-minute diagnostic voice mock to establish your real-time baseline accuracy, speaking pacing, and technical depth.
      </p>

      {/* Action Button */}
      <button
        onClick={onStartAssessment}
        style={{
          width: '100%',
          padding: '8px 14px',
          background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '9px',
          fontSize: '0.78rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          boxShadow: '0 2px 10px rgba(99, 102, 241, 0.35)',
          transition: 'all 0.18s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        <Play size={13} fill="#ffffff" />
        <span>Start Assessment</span>
      </button>
    </div>
  );
};
