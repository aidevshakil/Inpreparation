import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';

interface CvEncryptedVaultCardProps {
  onManageSecurity?: () => void;
}

export const CvEncryptedVaultCard: React.FC<CvEncryptedVaultCardProps> = ({
  onManageSecurity,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(99, 102, 241, 0.18)',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <div
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '7px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#818cf8',
          }}
        >
          <Lock size={14} />
        </div>
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
          256-Bit Encrypted Vault
        </span>
      </div>

      <p style={{ fontSize: '0.71rem', color: '#94a3b8', lineHeight: 1.45, margin: '0 0 10px 0' }}>
        Your career documents are encrypted at rest with AES-256 and used purely to parameterize simulation prompts. Never indexed publicly or transmitted without consent.
      </p>

      <button
        onClick={onManageSecurity}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#818cf8',
          fontSize: '0.72rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: 0,
        }}
      >
        <span>Manage Security &amp; Vector Retention</span>
        <ArrowRight size={12} />
      </button>
    </div>
  );
};
