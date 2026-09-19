import React, { useState } from 'react';
import { ShieldCheck, Trash2, Lock, ExternalLink, X } from 'lucide-react';

interface SpeechPolicyFooterProps {
  onPurgeBuffers?: () => void;
}

export const SpeechPolicyFooter: React.FC<SpeechPolicyFooterProps> = ({ onPurgeBuffers }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

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
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
            }}
          >
            <ShieldCheck size={18} style={{ color: '#38bdf8' }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f1f5f9' }}>
                Acoustic Telemetry Boundary &amp; Responsible AI Policy
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
                ZERO AFFECTIVE INFERENCE
              </span>
            </div>

            <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '4px 0 0 0', lineHeight: 1.45 }}>
              Speech analytics is strictly measured empirical, observable physical speech characteristics (speaking rate in WPM, pause lengths, filler token counts, answer duration). InprepAI does NOT classify tone of voice as confidence, nervousness, any emotion, or psychological intent. 48kHz audio streams are encrypted via AES-256 and auto-purged on a rolling 30-day schedule or via instant candidate wipe.
            </p>
          </div>
        </div>

        {/* Right Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={() => setPrivacyModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#38bdf8',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 6px',
            }}
          >
            <span>Privacy Log</span>
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
            <span>Purge Audio Buffers</span>
          </button>
        </div>
      </div>

      {/* Privacy Log Modal */}
      {privacyModalOpen && (
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
          onClick={() => setPrivacyModalOpen(false)}
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
                <Lock size={18} style={{ color: '#38bdf8' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Acoustic Privacy Audit Log
                </h3>
              </div>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              All 48kHz audio recordings undergo cryptographic zero-knowledge parsing. Features extracted are strictly limited to temporal signals:
              <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '8px' }}>
                <li>Phonetic tokens per minute (Speaking Rate)</li>
                <li>Silence segmentation duration (Pauses)</li>
                <li>Linguistic disfluency markers (Fillers)</li>
              </ul>
              Raw PCM audio buffers are retained for a maximum of 30 days and purged permanently with cryptographically secure overwrites upon candidate request.
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                onClick={() => setPrivacyModalOpen(false)}
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
