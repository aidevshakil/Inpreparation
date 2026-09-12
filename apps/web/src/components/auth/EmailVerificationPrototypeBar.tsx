import React from 'react';

export type EmailVerificationStateMode =
  | 'default'
  | 'resending'
  | 'resent-banner'
  | 'cooldown'
  | 'verified-success'
  | 'link-expired'
  | 'rate-limit'
  | 'network-error';

interface EmailVerificationPrototypeBarProps {
  currentMode: EmailVerificationStateMode;
  onSelectMode: (mode: EmailVerificationStateMode) => void;
}

const MODES: { key: EmailVerificationStateMode; label: string }[] = [
  { key: 'default', label: 'Default (Sent)' },
  { key: 'resending', label: 'Resending...' },
  { key: 'resent-banner', label: 'Resent Banner' },
  { key: 'cooldown', label: 'Cooldown (28s)' },
  { key: 'verified-success', label: 'Verified Success' },
  { key: 'link-expired', label: 'Link Expired' },
  { key: 'rate-limit', label: 'Rate Limit' },
  { key: 'network-error', label: 'Network Error' }
];

export const EmailVerificationPrototypeBar: React.FC<EmailVerificationPrototypeBarProps> = ({
  currentMode,
  onSelectMode
}) => {
  return (
    <aside
      aria-label="Simulation state switcher"
      style={{
        background: '#04060a',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        overflowX: 'auto',
        fontSize: '12px',
        color: '#94a3b8',
        zIndex: 100,
        position: 'sticky',
        top: 0
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981',
            display: 'inline-block'
          }}
        />
        <strong style={{ color: '#e2e8f0' }}>Prototype State Simulator:</strong>
        <span style={{ color: '#64748b' }}>
          Preview email verification, resend countdown, verified &amp; link expiration states
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}>
        {MODES.map((item) => {
          const isActive = currentMode === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onSelectMode(item.key)}
              style={{
                padding: '5px 12px',
                borderRadius: '6px',
                fontSize: '11.5px',
                fontWeight: 600,
                border: isActive
                  ? '1px solid #6366f1'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: isActive
                  ? '#4f46e5'
                  : 'rgba(255, 255, 255, 0.04)',
                color: isActive ? '#ffffff' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#e2e8f0';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.color = '#94a3b8';
                }
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
