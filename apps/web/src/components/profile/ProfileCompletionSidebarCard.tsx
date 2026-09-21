import React from 'react';
import { Check, Circle, ArrowRight } from 'lucide-react';

interface CompletionItem {
  id: string;
  label: string;
  score: string;
  completed: boolean;
}

interface ProfileCompletionSidebarCardProps {
  percentage?: number;
  hasBasicInfo?: boolean;
  hasProfInfo?: boolean;
  hasSkills?: boolean;
  hasCv?: boolean;
  hasAssessment?: boolean;
  onCompleteMissing?: () => void;
}

export const ProfileCompletionSidebarCard: React.FC<ProfileCompletionSidebarCardProps> = ({
  percentage,
  hasBasicInfo = true,
  hasProfInfo = true,
  hasSkills = false,
  hasCv = false,
  hasAssessment = false,
  onCompleteMissing,
}) => {
  const items: CompletionItem[] = [
    { id: 'basic', label: 'Basic Information', score: hasBasicInfo ? '100%' : 'Incomplete', completed: hasBasicInfo },
    { id: 'prof', label: 'Professional Info', score: hasProfInfo ? '100%' : 'Incomplete', completed: hasProfInfo },
    { id: 'skills', label: 'Technical Skills', score: hasSkills ? '100%' : 'Pending', completed: hasSkills },
    { id: 'cv', label: 'CV Uploaded', score: hasCv ? '100%' : 'Pending', completed: hasCv },
    { id: 'assessment', label: 'AI Assessment', score: hasAssessment ? '100%' : 'Pending', completed: hasAssessment },
  ];

  const completedCount = items.filter((it) => it.completed).length;
  const displayPercentage = percentage !== undefined ? percentage : Math.round((completedCount / items.length) * 100);

  return (
    <div className="card" style={{ marginBottom: '16px' }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '14px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Profile Completion
        </span>
        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-color)' }}>
          {displayPercentage}% Complete
        </span>
      </div>

      {/* Checklist items */}
      <div className="flex-col" style={{ gap: '10px', marginBottom: '16px' }}>
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between" style={{ fontSize: '12px' }}>
            <div className="flex items-center" style={{ gap: '8px' }}>
              {item.completed ? (
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-success)' }}>
                  <Check size={10} strokeWidth={3} />
                </div>
              ) : (
                <Circle size={12} color="var(--color-warning)" />
              )}
              <span style={{ color: item.completed ? 'var(--text-main)' : 'var(--text-secondary)' }}>
                {item.label}
              </span>
            </div>

            <span style={{ fontSize: '11px', fontWeight: 600, color: item.completed ? 'var(--color-success)' : 'var(--color-warning)' }}>
              {item.score}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={onCompleteMissing}
        className="btn btn-outline"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <span>Complete Missing Items</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
};
