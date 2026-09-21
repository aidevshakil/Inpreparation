import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export const PipelinePrivacyCard: React.FC = () => {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <ShieldCheck size={16} style={{ color: '#818cf8' }} />
        <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          AI Transparency &amp; Privacy
        </h4>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 14px 0' }}>
        Your responses remain 100% private. Raw sessions are encrypted with AES-256 and never shared with employers or used to train public models.
      </p>

      <a
        href="#compliance"
        onClick={(e) => {
          e.preventDefault();
          alert('Opening AI Vault & Compliance whitepaper...');
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          color: '#818cf8',
          fontSize: '0.72rem',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        <span>Learn About AI Vault &amp; Compliance</span>
        <ExternalLink size={12} />
      </a>
    </div>
  );
};
