import React from 'react';

export type CvSimulatorState =
  | 'default'
  | 'dragging'
  | 'uploading'
  | 'pipeline'
  | 'replace_dialog'
  | 'empty'
  | 'error';

interface CvPrototypeSimulatorBarProps {
  currentState: CvSimulatorState;
  onStateChange: (state: CvSimulatorState) => void;
}

export const CvPrototypeSimulatorBar: React.FC<CvPrototypeSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: CvSimulatorState; label: string }[] = [
    { id: 'default', label: 'Default (Active)' },
    { id: 'dragging', label: 'Dragging State' },
    { id: 'uploading', label: 'Uploading (68%)' },
    { id: 'pipeline', label: 'AI Pipeline' },
    { id: 'replace_dialog', label: 'Replace Dialog' },
    { id: 'empty', label: 'Empty State' },
    { id: 'error', label: 'Upload Error' },
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
          PROTOTYPE STATE SWITCHER:
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
                color: isActive ? '#ffffff' : '#94a3b8',
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
