import React from 'react';
import { Lock, ExternalLink } from 'lucide-react';

interface CvUploadPrivacyBannerProps {
  onOpenPrivacySettings?: () => void;
}

export const CvUploadPrivacyBanner: React.FC<CvUploadPrivacyBannerProps> = ({
  onOpenPrivacySettings,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(99, 102, 241, 0.22)',
        borderRadius: '16px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        marginBottom: '28px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '320px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#818cf8',
            flexShrink: 0,
          }}
        >
          <Lock size={16} />
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#f8fafc' }}>
              Your CV Contains Personal Career Information
            </span>
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 600,
                padding: '2px 7px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              Zero Recruiter Leakage
            </span>
          </div>

          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
            Uploaded resumes are encrypted and solely used to calibrate realistic synthetic mock interview questions. AI-generated insights are advisory suggestions. Review extracted information before mock generation.
          </p>
        </div>
      </div>

      <button
        onClick={onOpenPrivacySettings}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#818cf8',
          fontSize: '0.78rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          padding: '4px 0',
          whiteSpace: 'nowrap',
        }}
      >
        <span>Privacy &amp; Data Settings</span>
        <ExternalLink size={13} />
      </button>
    </div>
  );
};
