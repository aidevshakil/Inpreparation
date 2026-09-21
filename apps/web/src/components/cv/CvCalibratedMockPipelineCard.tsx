import React from 'react';
import { GitBranch, ArrowDown, Play } from 'lucide-react';

interface CvCalibratedMockPipelineCardProps {
  onStartCalibratedMock?: () => void;
  targetRole?: string;
  topSkills?: string[];
  recentCompany?: string;
}

export const CvCalibratedMockPipelineCard: React.FC<CvCalibratedMockPipelineCardProps> = ({
  onStartCalibratedMock,
  targetRole = 'Fullstack Flutter Developer',
  topSkills = [],
  recentCompany,
}) => {
  const techAnchor = topSkills.length > 0
    ? topSkills.slice(0, 4).join(', ')
    : 'Flutter, Dart, Firebase, REST APIs';

  const trackProfile = `${targetRole.split(' ')[0] || 'Mobile'} Engineering • Production Track`;
  const contextNote = recentCompany ? `Tailored to ${recentCompany} & production stack` : `Tailored to ${targetRole} stack`;

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '16px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <GitBranch size={16} style={{ color: 'var(--primary-color)' }} />
        <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
          Calibrated Mock Pipeline
        </h3>
      </div>

      <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '0 0 14px 0', lineHeight: 1.4 }}>
        How your resume vector directly shapes real-time mock interviews right now:
      </p>

      {/* Step 1 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 12px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
        }}
      >
        <span
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: 'var(--primary-color)',
            fontSize: '0.7rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          1
        </span>
        <div style={{ fontSize: '0.74rem' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.66rem' }}>Detected Tech Anchor:</div>
          <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>{techAnchor}</div>
        </div>
      </div>

      {/* Arrow Down */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
        <ArrowDown size={14} style={{ color: 'var(--text-muted)' }} />
      </div>

      {/* Step 2 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 12px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
        }}
      >
        <span
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            color: '#a855f7',
            fontSize: '0.7rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          2
        </span>
        <div style={{ fontSize: '0.74rem' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.66rem' }}>Vector Weight Profile:</div>
          <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>{trackProfile}</div>
        </div>
      </div>

      {/* Arrow Down */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
        <ArrowDown size={14} style={{ color: 'var(--text-muted)' }} />
      </div>

      {/* Step 3: Action Tile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          padding: '10px 12px',
          backgroundColor: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '10px',
        }}
      >
        <div style={{ fontSize: '0.74rem' }}>
          <div style={{ color: '#059669', fontWeight: 700 }}>{targetRole}</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>5 Questions • {contextNote}</div>
        </div>

        <button
          onClick={onStartCalibratedMock}
          style={{
            padding: '5px 12px',
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          <Play size={11} fill="#ffffff" />
          <span>Start</span>
        </button>
      </div>
    </div>
  );
};
