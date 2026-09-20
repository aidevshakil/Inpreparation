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
        backgroundColor: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)',
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
            backgroundColor: 'var(--primary-color)',
            boxShadow: '0 0 10px var(--primary-color)',
          }}
        />
        <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>
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
                backgroundColor: isActive ? 'var(--primary-color)' : 'var(--bg-surface)',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                border: isActive
                  ? '1px solid var(--primary-color)'
                  : '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                boxShadow: isActive ? '0 0 12px rgba(99, 102, 241, 0.35)' : 'none',
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
