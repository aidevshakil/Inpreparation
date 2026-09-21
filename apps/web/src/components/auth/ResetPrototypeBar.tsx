import React from 'react';

export type ResetStateMode =
  | 'default'
  | 'weak-password'
  | 'mismatch'
  | 'updating'
  | 'reset-success'
  | 'token-expired'
  | 'network-error';

interface ResetPrototypeBarProps {
  currentMode: ResetStateMode;
  onSelectMode: (mode: ResetStateMode) => void;
}

const MODES: { key: ResetStateMode; label: string }[] = [
  { key: 'default', label: 'Default' },
  { key: 'weak-password', label: 'Weak Password' },
  { key: 'mismatch', label: 'Mismatch Error' },
  { key: 'updating', label: 'Updating...' },
  { key: 'reset-success', label: 'Reset Success' },
  { key: 'token-expired', label: 'Token Expired' },
  { key: 'network-error', label: 'Network Error' }
];

export const ResetPrototypeBar: React.FC<ResetPrototypeBarProps> = ({
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
            background: '#6366f1',
            boxShadow: '0 0 8px #6366f1',
            display: 'inline-block'
          }}
        />
        <strong style={{ color: '#e2e8f0' }}>Prototype State Simulator:</strong>
        <span style={{ color: '#64748b' }}>
          Preview credential reset, password strength criteria, token validation &amp; success states
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
