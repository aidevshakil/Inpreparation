import React from 'react';

export type CvBuilderState =
  | 'default'
  | 'ai_modal'
  | 'template_pro'
  | 'template_min'
  | 'journal'
  | 'offline'
  | 'valid';

interface CvBuilderSimulatorBarProps {
  currentState: CvBuilderState;
  onStateChange: (state: CvBuilderState) => void;
}

export const CvBuilderSimulatorBar: React.FC<CvBuilderSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: CvBuilderState; label: string; color?: string }[] = [
    { id: 'default', label: '1. Default Builder' },
    { id: 'ai_modal', label: '2. AI Suggestion Modal' },
    { id: 'template_pro', label: '3. Template: Professional' },
    { id: 'template_min', label: '4. Template: Minimal' },
    { id: 'journal', label: '5. Journal Changes Active' },
    { id: 'offline', label: '6. Autosave / Offline Demo' },
    { id: 'valid', label: '7. Validation Triggered & Valid', color: '#34d399' },
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
            backgroundColor: '#6366f1',
            boxShadow: '0 0 10px #6366f1',
          }}
        />
        <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>
          INTERACTIVE PROTOTYPE DEMO SIMULATOR:
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
                backgroundColor: isActive ? '#4f46e5' : 'var(--border-subtle)',
                color: isActive ? '#ffffff' : state.color || '#94a3b8',
                border: isActive
                  ? '1px solid rgba(129, 140, 248, 0.6)'
                  : '1px solid var(--border-subtle)',
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
