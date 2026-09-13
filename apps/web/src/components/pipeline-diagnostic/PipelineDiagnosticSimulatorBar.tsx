import React from 'react';

export type PipelineDiagnosticState =
  | 'step_3_active'
  | 'initializing'
  | 'step_5_finishing'
  | 'completed'
  | 'partial_fallback'
  | 'failure_dialog'
  | 'leave_modal';

interface PipelineDiagnosticSimulatorBarProps {
  currentState: PipelineDiagnosticState;
  onStateChange: (state: PipelineDiagnosticState) => void;
}

export const PipelineDiagnosticSimulatorBar: React.FC<PipelineDiagnosticSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: PipelineDiagnosticState; label: string; color?: string }[] = [
    { id: 'step_3_active', label: '1. Step 3/5 Active' },
    { id: 'initializing', label: '2. Initializing', color: '#818cf8' },
    { id: 'step_5_finishing', label: '3. Step 5/5 Finishing', color: '#c084fc' },
    { id: 'completed', label: '4. Completed State', color: '#34d399' },
    { id: 'partial_fallback', label: '5. Partial Fallback', color: '#fbbf24' },
    { id: 'failure_dialog', label: '6. Failure Dialog', color: '#f87171' },
    { id: 'leave_modal', label: '7. Leave Modal', color: '#94a3b8' },
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
        <span style={{ color: '#94a3b8' }}>Web #22: Pipeline Diagnostic</span>
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
