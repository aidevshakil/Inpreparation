import React from 'react';
import { Target, Play } from 'lucide-react';

interface ProfileCareerAssessmentCardProps {
  onStartAssessment?: () => void;
}

export const ProfileCareerAssessmentCard: React.FC<ProfileCareerAssessmentCardProps> = ({
  onStartAssessment,
}) => {
  return (
    <div className="card" style={{ marginBottom: '16px' }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '10px' }}>
        <div className="flex items-center gap-2">
          <Target size={15} style={{ color: 'var(--color-warning)' }} />
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', color: 'var(--color-warning)', textTransform: 'uppercase' }}>
            Career Assessment
          </span>
        </div>

        <span className="badge" style={{ backgroundColor: 'transparent', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
          Not Started
        </span>
      </div>

      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '14px' }}>
        Complete a 5-minute diagnostic voice mock to establish your real-time baseline accuracy, speaking pacing, and technical depth.
      </p>

      {/* Action Button */}
      <button onClick={onStartAssessment} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        <Play size={13} fill="currentColor" />
        <span>Start Assessment</span>
      </button>
    </div>
  );
};
