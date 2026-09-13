import React from 'react';

export type IntroRoomState =
  | 'ready'
  | 'start_dialog'
  | 'preparing_session'
  | 'audio_only'
  | 'reconnect_fallback'
  | 'exit_prompt';

interface IntroRoomSimulatorBarProps {
  currentState: IntroRoomState;
  onStateChange: (state: IntroRoomState) => void;
}

export const IntroRoomSimulatorBar: React.FC<IntroRoomSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: IntroRoomState; label: string; color?: string }[] = [
    { id: 'ready', label: '1. Ready to Start' },
    { id: 'start_dialog', label: '2. Start Dialog', color: '#818cf8' },
    { id: 'preparing_session', label: '3. Preparing Session', color: '#c084fc' },
    { id: 'audio_only', label: '4. Audio-Only Mode' },
    { id: 'reconnect_fallback', label: '5. Reconnect Fallback', color: '#fbbf24' },
    { id: 'exit_prompt', label: '6. Exit Prompt', color: '#f87171' },
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
            backgroundColor: '#10b981',
            boxShadow: '0 0 10px #10b981',
          }}
        />
        <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>
          PROTOTYPE SIMULATOR:
        </strong>
        <span style={{ color: '#94a3b8' }}>Web Screen #21 (Intro Room • Preparation Phase)</span>
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
