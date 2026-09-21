import React from 'react';
import { Cpu, ShieldCheck, ExternalLink } from 'lucide-react';

export const IntroResultTransparencyCards: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. How These Results Were Created */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Cpu size={16} style={{ color: '#818cf8' }} />
          <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            How These Results Were Created
          </h4>
        </div>

        <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
          Generated using our deterministic pipeline: ingested CV data combined with oral response transcripts. Zero emotion, sentiment, or psychological inference is used. Insights represent technical readiness indicators.
        </p>
      </div>

      {/* 2. Your Privacy & Responsible AI Guarantee */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <ShieldCheck size={16} style={{ color: '#10b981' }} />
          <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Your Privacy &amp; Responsible AI Guarantee
          </h4>
        </div>

        <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 12px 0' }}>
          All audio and video streams are vaulted with AES-256 encryption. We never share raw interview recordings with prospective employers or external LLM pools.
        </p>

        <a
          href="#dataprotection"
          onClick={(e) => {
            e.preventDefault();
            alert('Opening Inprep AI Data Protection & Vault Standards whitepaper...');
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
          <span>Read Inprep AI Data Protection Standards</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};
