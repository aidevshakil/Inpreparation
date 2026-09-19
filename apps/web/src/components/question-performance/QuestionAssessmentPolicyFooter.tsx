import React, { useState } from 'react';
import { ShieldCheck, Trash2, Clock, X, Lock } from 'lucide-react';

interface QuestionAssessmentPolicyFooterProps {
  onPurgeTelemetry?: () => void;
}

export const QuestionAssessmentPolicyFooter: React.FC<QuestionAssessmentPolicyFooterProps> = ({
  onPurgeTelemetry,
}) => {
  const [policyModalOpen, setPolicyModalOpen] = useState(false);

  return (
    <>
      <div
        style={{
          padding: '16px 20px',
          borderRadius: '12px',
          backgroundColor: '#090d18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', maxWidth: '840px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
            }}
          >
            <ShieldCheck size={18} style={{ color: '#818cf8' }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f1f5f9' }}>
                Inprep AI Deterministic Assessment Policy
              </span>
              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  fontSize: '0.64rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  letterSpacing: '0.4px',
                }}
              >
                ISO/IEC 42001
              </span>
            </div>

            <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '4px 0 0 0', lineHeight: 1.45 }}>
              Strictly non-affective. Evaluation restricted to articulated engineering trade-offs, syntactical code rigor, and observable audio/video telemetry fidelity.
            </p>
          </div>
        </div>

        {/* Right Links & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setPolicyModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontSize: '0.72rem',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
            }}
          >
            <Clock size={12} style={{ color: '#64748b' }} />
            <span>Ephemeral Telemetry: 30-Day Auto Purge</span>
          </button>

          <button
            onClick={onPurgeTelemetry}
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '7px',
              color: '#f87171',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            }}
          >
            <Trash2 size={12} />
            <span>Purge Telemetry Now</span>
          </button>
        </div>
      </div>

      {/* Policy Modal */}
      {policyModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setPolicyModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              width: '100%',
              maxWidth: '540px',
              padding: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={18} style={{ color: '#818cf8' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  ISO/IEC 42001 Assessment Governance
                </h3>
              </div>
              <button
                onClick={() => setPolicyModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              Inprep AI strictly adheres to the ISO/IEC 42001 Artificial Intelligence Management System framework:
              <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '8px' }}>
                <li>Zero psychometric or affective inference (no tone/emotion classification)</li>
                <li>Auditable rubric scoring tied directly to verifiable transcript evidence</li>
                <li>Strict candidate ownership with immediate zero-trace purge capabilities</li>
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                onClick={() => setPolicyModalOpen(false)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#4f46e5',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
