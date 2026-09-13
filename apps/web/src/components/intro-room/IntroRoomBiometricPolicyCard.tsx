import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const IntroRoomBiometricPolicyCard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <ShieldCheck size={16} style={{ color: '#10b981' }} />
        <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Zero Biometric or Emotion Grading Policy
        </h4>
      </div>

      <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.48, margin: '0 0 12px 0' }}>
        Inprep AI complies with strict responsible AI guidelines. Your camera preview is processed locally for hardware readiness. No emotion classifiers, face scoring, or lie detection algorithms are used.
      </p>

      {/* Footer Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.68rem',
          color: '#64748b',
          paddingTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <a
          href="#privacy"
          onClick={(e) => {
            e.preventDefault();
            alert('Opening Privacy & Vault Policy...');
          }}
          style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 600 }}
        >
          Privacy &amp; Vault Policy
        </a>

        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Lock size={10} />
          <span>256-Bit TLS 1.3 Transport</span>
        </span>
      </div>
    </div>
  );
};
