import React from 'react';
import { Shield } from 'lucide-react';

export const InterviewHistoryPolicyBanner: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '32px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', flex: 1, minWidth: '280px' }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '8px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginTop: '2px',
          }}
        >
          <Shield size={16} color="#38bdf8" />
        </div>
        <div>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
            Private Candidate Archival & Deterministic Rubric Policy
          </h4>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            All 8 mock interview recordings, audio spectrograms, and evaluation logs are stored inside your private hardware-backed client partition under AES-256 zero-knowledge encryption. Inprep AI does not use your simulation audio to train foundation models. Scores reflect strictly deterministic engineering rubrics for self-guided preparation and do not constitute formal employer hiring decisions.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '6px 12px',
          borderRadius: '8px',
          fontSize: '0.72rem',
          color: '#cbd5e1',
          flexShrink: 0,
        }}
      >
        <span style={{ color: '#64748b' }}>Automated purge cycle:</span>
        <strong style={{ color: '#f8fafc' }}>30 Days Active Vault</strong>
      </div>
    </div>
  );
};
