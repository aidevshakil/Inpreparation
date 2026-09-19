import React from 'react';
import { Shield } from 'lucide-react';

export const PerformanceGovernanceBanner: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '32px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
      }}
    >
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '6px',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Shield size={14} color="#a5b4fc" />
        </div>
        <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Transparent Scoring Governance & Responsible AI
        </h4>
      </div>

      {/* 3 Pillars Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {/* Pillar 1 */}
        <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>
            Deterministic Rubrics
          </div>
          <p style={{ fontSize: '0.73rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            Evaluated on empirical grounded rubrics from standard engineering bodies. Scoring does not fluctuate or drift dynamically.
          </p>
        </div>

        {/* Pillar 2 */}
        <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>
            Zero Affective Inference
          </div>
          <p style={{ fontSize: '0.73rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            Inprep AI strictly evaluates technical plausibility, reasoning, and evidence. We forbid psychological, emotion, or facial affect recognition.
          </p>
        </div>

        {/* Pillar 3 */}
        <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>
            Confidential Sandboxing
          </div>
          <p style={{ fontSize: '0.73rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            Audio and transcript are encrypted via AES-256 in Shakil Ahamed's private tenant. Data is never used to train foundation models.
          </p>
        </div>
      </div>

      {/* Footnote */}
      <div style={{ fontSize: '0.68rem', color: '#64748b', textAlign: 'center' }}>
        Scores reflect practice performance against benchmarked technical criteria and do not constitute hiring credits/final employment certifications.
      </div>
    </div>
  );
};
