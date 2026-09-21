import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, EyeOff, ArrowRight } from 'lucide-react';

export const DeviceVaultGuaranteesCard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <ShieldCheck size={16} style={{ color: '#10b981' }} />
        <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Responsible AI &amp; Vault Guarantees
        </h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        {/* Point 1 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <Lock size={14} style={{ color: '#818cf8', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Zero unprompted recording:</strong> Sensors are activated strictly when you start a question response.
          </p>
        </div>

        {/* Point 2 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <CheckCircle2 size={14} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Non-evaluative device check:</strong> Hardware telemetry is used solely for WebRTC connection fidelity.
          </p>
        </div>

        {/* Point 3 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <EyeOff size={14} style={{ color: '#34d399', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Zero biometric grading:</strong> Inprep AI never grades facial symmetry, involuntary expressions, or emotional affect.
          </p>
        </div>
      </div>

      {/* Link */}
      <a
        href="#privacy"
        onClick={(e) => {
          e.preventDefault();
          alert('Opening Data & Sensor Transparency Framework...');
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.72rem',
          color: '#818cf8',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        <span>Read our Data &amp; Sensor Transparency Framework</span>
        <ArrowRight size={12} />
      </a>
    </div>
  );
};
