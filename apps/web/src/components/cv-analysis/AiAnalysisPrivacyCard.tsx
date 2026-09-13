import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AiAnalysisPrivacyCardProps {
  onManagePrivacy?: () => void;
}

export const AiAnalysisPrivacyCard: React.FC<AiAnalysisPrivacyCardProps> = ({
  onManagePrivacy,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '18px 20px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <ShieldCheck size={16} style={{ color: '#818cf8' }} />
        <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          About Inprep AI CV Intelligence
        </h4>
      </div>

      <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.48, margin: '0 0 12px 0' }}>
        AI CV analysis summarizes content extracted from your document strictly to tailor personalized mock interview scenarios. Inprep AI does not submit to recruiters without your consent, evaluate personal traits, or replace manual candidate verification.
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '0.7rem',
          color: '#64748b',
          paddingTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <span>User data always falls under strict client protections.</span>
        <button
          onClick={onManagePrivacy}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            fontSize: '0.7rem',
          }}
        >
          Manage Privacy Settings
        </button>
      </div>
    </div>
  );
};
