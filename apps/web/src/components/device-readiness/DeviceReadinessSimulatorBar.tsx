import React from 'react';

export type DeviceReadinessState =
  | 'ready'
  | 'running_checks'
  | 'mic_blocked'
  | 'camera_off'
  | 'poor_lighting'
  | 'exit_dialog';

interface DeviceReadinessSimulatorBarProps {
  currentState: DeviceReadinessState;
  onStateChange: (state: DeviceReadinessState) => void;
}

export const DeviceReadinessSimulatorBar: React.FC<DeviceReadinessSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: DeviceReadinessState; label: string; color?: string }[] = [
    { id: 'ready', label: '1. Ready (5 of 6 Complete)' },
    { id: 'running_checks', label: '2. Running All Checks', color: '#818cf8' },
    { id: 'mic_blocked', label: '3. Mic Permission Blocked', color: '#f87171' },
    { id: 'camera_off', label: '4. Camera Off / Audio Only' },
    { id: 'poor_lighting', label: '5. Poor Lighting Warning', color: '#fbbf24' },
    { id: 'exit_dialog', label: '6. Exit Confirmation Dialog' },
  ];

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#090d16',
        borderBottom: '1px solid rgba(99, 102, 241, 0.25)',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.78rem',
        color: '#94a3b8',
        zIndex: 50,
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#38bdf8',
            boxShadow: '0 0 10px #38bdf8',
          }}
        />
        <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>
          SIMULATOR STATE
        </strong>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {states.map((state) => {
          const isActive = currentState === state.id;
          return (
            <button
              key={state.id}
              onClick={() => onStateChange(state.id)}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: isActive ? 600 : 400,
                backgroundColor: isActive ? '#4f46e5' : 'rgba(255, 255, 255, 0.05)',
                color: isActive ? '#ffffff' : state.color || '#94a3b8',
                border: isActive
                  ? '1px solid rgba(129, 140, 248, 0.6)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                boxShadow: isActive ? '0 0 12px rgba(79, 70, 229, 0.4)' : 'none',
              }}
            >
              {state.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
