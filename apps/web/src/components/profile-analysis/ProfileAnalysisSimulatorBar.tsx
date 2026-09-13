import React from 'react';

export type ProfileAnalysisState =
  | 'default_profile'
  | 'edit_summary_modal'
  | 'radar_focus_view'
  | 'skills_filter_active'
  | 'empty_state_alert'
  | 'full_synthesis_drawer';

interface ProfileAnalysisSimulatorBarProps {
  currentState: ProfileAnalysisState;
  onStateChange: (state: ProfileAnalysisState) => void;
}

export const ProfileAnalysisSimulatorBar: React.FC<ProfileAnalysisSimulatorBarProps> = ({
  currentState,
  onStateChange,
}) => {
  const states: { id: ProfileAnalysisState; label: string; color?: string }[] = [
    { id: 'default_profile', label: '1. Default AI Profile' },
    { id: 'edit_summary_modal', label: '2. Edit Summary Modal', color: '#818cf8' },
    { id: 'radar_focus_view', label: '3. Radar Focus View', color: '#c084fc' },
    { id: 'skills_filter_active', label: '4. Skills Filter Active', color: '#38bdf8' },
    { id: 'empty_state_alert', label: '5. Empty State Alert', color: '#fbbf24' },
    { id: 'full_synthesis_drawer', label: '6. Full Synthesis Drawer', color: '#34d399' },
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
        <span style={{ color: '#94a3b8' }}>Web #24: AI Profile Analysis</span>
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
