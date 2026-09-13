import React from 'react';

export type DiagnosticState =
  | 'text_mode'
  | 'voice_ready'
  | 'voice_recording'
  | 'camera_mode'
  | 'perm_fallback'
  | 'exit_modal';

interface DiagnosticSimulatorBarProps {
  currentState: DiagnosticState;
  onStateChange: (state: DiagnosticState) => void;
}

export const DiagnosticSimulatorBar: React.FC<DiagnosticSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: DiagnosticState; label: string; color?: string }[] = [
    { id: 'text_mode', label: '1. Text Mode' },
    { id: 'voice_ready', label: '2. Voice Ready' },
    { id: 'voice_recording', label: '3. Voice Recording', color: '#f87171' },
    { id: 'camera_mode', label: '4. Camera Mode' },
    { id: 'perm_fallback', label: '5. Perm Fallback', color: '#fbbf24' },
    { id: 'exit_modal', label: '6. Exit Modal' },
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
            backgroundColor: '#6366f1',
            boxShadow: '0 0 10px #6366f1',
          }}
        />
        <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>
          PROTOTYPE SIMULATOR:
        </strong>
        <span style={{ color: '#94a3b8' }}>Screen #19: Career Diagnostic Intake</span>
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
