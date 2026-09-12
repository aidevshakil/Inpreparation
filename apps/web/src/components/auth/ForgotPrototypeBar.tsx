import React from 'react';

export type ForgotStateMode =
  | 'default'
  | 'empty-error'
  | 'invalid-format'
  | 'sending'
  | 'sent-success'
  | 'cooldown'
  | 'rate-limit'
  | 'network-error';

interface ForgotPrototypeBarProps {
  currentMode: ForgotStateMode;
  onSelectMode: (mode: ForgotStateMode) => void;
}

export const ForgotPrototypeBar: React.FC<ForgotPrototypeBarProps> = ({
  currentMode,
  onSelectMode
}) => {
  const modes: { id: ForgotStateMode; label: string }[] = [
    { id: 'default', label: 'Default' },
    { id: 'empty-error', label: 'Empty Error' },
    { id: 'invalid-format', label: 'Invalid Format' },
    { id: 'sending', label: 'Sending...' },
    { id: 'sent-success', label: 'Email Sent (Success)' },
    { id: 'cooldown', label: 'Cooldown (28s)' },
    { id: 'rate-limit', label: 'Rate Limit Error' },
    { id: 'network-error', label: 'Network Error' }
  ];

  return (
    <div style={{
      background: '#04060b',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '8px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      fontSize: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: '#10b981',
          display: 'inline-block',
          boxShadow: '0 0 8px #10b981'
        }} />
        <span style={{ color: '#ffffff', fontWeight: 700 }}>Prototype State Simulator:</span>
        <span style={{ color: '#64748b' }}>Preview email recovery validation, anti-enumeration security & resend states</span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {modes.map((m) => {
          const isActive = currentMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onSelectMode(m.id)}
              style={{
                background: isActive ? '#6366f1' : 'rgba(255, 255, 255, 0.04)',
                border: isActive ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                color: isActive ? '#ffffff' : '#94a3b8',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '11.5px',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.color = '#94a3b8';
                }
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
