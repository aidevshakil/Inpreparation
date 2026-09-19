import React from 'react';
import { Lock } from 'lucide-react';

interface TargetedPlanFooterProps {
  onNavigatePerformance?: () => void;
  onNavigateCommunication?: () => void;
  onNavigateSpeech?: () => void;
  onNavigatePresentation?: () => void;
  onNavigateQuestionReview?: () => void;
}

export const TargetedPlanFooter: React.FC<TargetedPlanFooterProps> = ({
  onNavigatePerformance,
  onNavigateCommunication,
  onNavigateSpeech,
  onNavigatePresentation,
  onNavigateQuestionReview,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px 20px',
        backgroundColor: '#0c1322',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '12px',
        fontSize: '0.72rem',
        color: '#64748b',
      }}
    >
      {/* Left Disclaimer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Lock size={13} color="#818cf8" />
        <span>
          AES-256 Vault: All audio and video diagnostics are client-encrypted and auto-purged after 30 days.
        </span>
      </div>

      {/* Right Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <button
          onClick={onNavigatePerformance}
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.72rem',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          Performance #34
        </button>
        <span>•</span>
        <button
          onClick={onNavigateCommunication}
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.72rem',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          Communication #38
        </button>
        <span>•</span>
        <button
          onClick={onNavigateSpeech}
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.72rem',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          Speech #39
        </button>
        <span>•</span>
        <button
          onClick={onNavigatePresentation}
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.72rem',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          Presentation #40
        </button>
        <span>•</span>
        <button
          onClick={onNavigateQuestionReview}
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.72rem',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          Question Review #41
        </button>
      </div>
    </div>
  );
};
