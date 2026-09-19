import React, { useState } from 'react';
import { ShieldCheck, Trash2, ExternalLink, X, Lock } from 'lucide-react';

interface PresentationPolicyFooterProps {
  onPurgeBuffers?: () => void;
}

export const PresentationPolicyFooter: React.FC<PresentationPolicyFooterProps> = ({ onPurgeBuffers }) => {
  const [architectureModalOpen, setArchitectureModalOpen] = useState(false);

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
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', maxWidth: '820px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
            }}
          >
            <ShieldCheck size={18} style={{ color: '#c084fc' }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f1f5f9' }}>
                Zero-Knowledge AES-256 Client Stream Storage
              </span>
              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.64rem',
                  fontWeight: 700,
                  color: '#94a3b8',
                  letterSpacing: '0.4px',
                }}
              >
                30-Day Zero-Trace Purge
              </span>
            </div>

            <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '4px 0 0 0', lineHeight: 1.45 }}>
              Optical verification: Video streams undergo client-side metric derivation. No facial recognition, biometric identity scanning, or psychological profiling is ever executed.
            </p>
          </div>
        </div>

        {/* Right Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={() => setArchitectureModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#c084fc',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 6px',
            }}
          >
            <span>Privacy Architecture Log</span>
            <ExternalLink size={11} />
          </button>

          <button
            onClick={onPurgeBuffers}
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
            <span>Purge Video Buffers</span>
          </button>
        </div>
      </div>

      {/* Privacy Architecture Modal */}
      {architectureModalOpen && (
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
          onClick={() => setArchitectureModalOpen(false)}
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
                <Lock size={18} style={{ color: '#c084fc' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Optical Architecture Privacy Audit
                </h3>
              </div>
              <button
                onClick={() => setArchitectureModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              Video feeds captured during technical practice are piped directly into in-browser client WebAssembly pipelines. The following guarantees are mathematically enforced:
              <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '8px' }}>
                <li>Raw pixel arrays never persist on external inference servers</li>
                <li>Framing and alignment compute bounding boxes without facial feature matching</li>
                <li>Lighting metrics evaluate spatial histogram luminance exclusively</li>
              </ul>
              All temporary optical frames are wiped from local memory upon interview session termination.
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                onClick={() => setArchitectureModalOpen(false)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#7c3aed',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Close Audit Log
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
