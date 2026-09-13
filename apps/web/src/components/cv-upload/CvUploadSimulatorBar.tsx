import React from 'react';

export type CvUploadState =
  | 'default'
  | 'dragging'
  | 'file_selected'
  | 'uploading'
  | 'processing'
  | 'ready'
  | 'format_error'
  | 'pipeline_failure';

interface CvUploadSimulatorBarProps {
  currentState: CvUploadState;
  onStateChange: (state: CvUploadState) => void;
}

export const CvUploadSimulatorBar: React.FC<CvUploadSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: CvUploadState; label: string; color?: string }[] = [
    { id: 'default', label: '1. Default (Empty)' },
    { id: 'dragging', label: '2. Dragging Over' },
    { id: 'file_selected', label: '3. File Selected' },
    { id: 'uploading', label: '4. Uploading (68%)' },
    { id: 'processing', label: '5. AI Processing' },
    { id: 'ready', label: '6. Analysis Ready', color: '#34d399' },
    { id: 'format_error', label: '7. Format Error', color: '#fbbf24' },
    { id: 'pipeline_failure', label: '8. Pipeline Failure', color: '#fb7185' },
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
          Interactive Prototype Simulator
        </strong>
        <span style={{ color: '#64748b' }}>|</span>
        <span style={{ color: '#94a3b8' }}>Test all CV upload &amp; AI pipeline states:</span>
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
