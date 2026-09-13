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
    { id: 'prof', label: 'Professional Information', score: hasProfInfo ? '100%' : 'Incomplete', completed: hasProfInfo },
    { id: 'skills', label: 'Technical Skills', score: hasSkills ? '100%' : 'Pending', completed: hasSkills },
    { id: 'cv', label: 'CV Uploaded & Parsed', score: hasCv ? '100%' : 'Pending', completed: hasCv },
    { id: 'assessment', label: 'AI Career Assessment', score: hasAssessment ? '100%' : 'Pending', completed: hasAssessment },
  ];

  const completedCount = items.filter((it) => it.completed).length;
  const displayPercentage = percentage !== undefined ? percentage : Math.round((completedCount / items.length) * 100);

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        marginBottom: '16px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.8px',
            color: '#818cf8',
            textTransform: 'uppercase',
          }}
        >
          Profile Completion
        </span>
        <span
          style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: '#a5b4fc',
          }}
        >
          {displayPercentage}% Complete
        </span>
      </div>

      {/* Checklist items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '16px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.completed ? (
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                  }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
              ) : (
                <Circle size={12} color="#f59e0b" />
              )}
              <span style={{ color: item.completed ? '#e2e8f0' : '#fbbf24' }}>
                {item.label}
              </span>
            </div>

            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: item.completed ? '#10b981' : '#f59e0b',
              }}
            >
              {item.score}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={onCompleteMissing}
        style={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: 'rgba(99, 102, 241, 0.14)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '9px',
          color: '#c7d2fe',
          fontSize: '0.76rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.18s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.25)';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.14)';
          e.currentTarget.style.color = '#c7d2fe';
        }}
      >
        <span>Complete Missing Items</span>
        <ArrowRight size={13} />
      </button>
    </div>
  );
};
