import React from 'react';
import { Server } from 'lucide-react';

export type PipelineScenario =
  | 'active_processing'
  | 'result_ready'
  | 'background_mode'
  | 'audio_warning'
  | 'offline_retry';

export type PipelineDiagnosticState = PipelineScenario | string;

interface PipelineDiagnosticSimulatorBarProps {
  currentScenario: PipelineScenario;
  onSelectScenario: (scenario: PipelineScenario) => void;
}

export const PipelineDiagnosticSimulatorBar: React.FC<PipelineDiagnosticSimulatorBarProps> = ({
  currentScenario,
  onSelectScenario,
}) => {
  const scenarios: { id: PipelineScenario; label: string }[] = [
    { id: 'active_processing', label: '1. Active Processing (Stage 5/7)' },
    { id: 'result_ready', label: '2. Ingestion Complete | Result Ready' },
    { id: 'background_mode', label: '3. Background Safe Mode' },
    { id: 'audio_warning', label: '4. Partial Audio Warning' },
    { id: 'offline_retry', label: '5. Offline / Retry Modal' },
  ];

  return (
    <div
      style={{
        padding: '10px 24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        overflowX: 'auto',
        background: '#0a0d14',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(8px)',
      }}
    >
      <span
        style={{
          fontSize: '0.68rem',
          color: '#64748b',
          fontWeight: 700,
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          whiteSpace: 'nowrap',
        }}
      >
        <Server size={12} color="#818cf8" /> STAKEHOLDER TEST BED:
      </span>
      <span style={{ fontSize: '0.7rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>
        Scenario State Simulator
      </span>
      <div
        style={{
          width: 1,
          height: 16,
          background: 'rgba(255, 255, 255, 0.12)',
          margin: '0 6px',
          flexShrink: 0,
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}>
        {scenarios.map((s) => {
          const isActive = currentScenario === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelectScenario(s.id)}
              style={{
                background: isActive ? 'rgba(99, 102, 241, 0.25)' : 'transparent',
                color: isActive ? '#c7d2fe' : '#94a3b8',
                border: isActive
                  ? '1px solid rgba(129, 140, 248, 0.55)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                padding: '4px 12px',
                borderRadius: '100px',
                fontSize: '0.72rem',
                fontWeight: isActive ? 600 : 500,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 0 10px rgba(99, 102, 241, 0.3)' : 'none',
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
