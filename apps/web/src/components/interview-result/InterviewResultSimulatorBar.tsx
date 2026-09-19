import React from 'react';
import { Sliders, FileText, Share2, Activity, LucideIcon, AlertTriangle } from 'lucide-react';

export type SimulationDebriefState =
  | 'full_dossier'
  | 'questions_expanded'
  | 'telemetry_drawer'
  | 'audio_fallback'
  | 'share_certificate';

interface InterviewResultSimulatorBarProps {
  activeState: SimulationDebriefState;
  onSelectState: (state: SimulationDebriefState) => void;
}

export const InterviewResultSimulatorBar: React.FC<InterviewResultSimulatorBarProps> = ({
  activeState,
  onSelectState,
}) => {
  const states: { id: SimulationDebriefState; label: string; icon: LucideIcon }[] = [
    { id: 'full_dossier', label: '1. Full Debrief Dossier (Complete) • 82/100', icon: FileText },
    { id: 'questions_expanded', label: '2. Question Detail Expanded (Q1 Staff-L6 Deep Dive)', icon: Sliders },
    { id: 'telemetry_drawer', label: '3. Speech & Presentation Telemetry Drawer', icon: Activity },
    { id: 'audio_fallback', label: '4. Partial Audio Evaluation Fallback (Question 4 Degraded)', icon: AlertTriangle },
    { id: 'share_certificate', label: '5. Export & Share Certificate Modal', icon: Share2 },
  ];

  return (
    <div
      style={{
        backgroundColor: '#0c0f17',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        borderRadius: '12px',
        padding: '10px 16px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: '#a5b4fc',
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: '6px',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            letterSpacing: '0.5px',
          }}
        >
          STAKEHOLDER TEST BED
        </span>
        <span style={{ color: '#94a3b8', fontSize: '0.72rem', fontWeight: 600 }}>
          — Scenario State Simulator
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {states.map((s) => {
          const isActive = activeState === s.id;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => onSelectState(s.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.73rem',
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive ? '#4f46e5' : 'rgba(255, 255, 255, 0.03)',
                color: isActive ? '#ffffff' : '#94a3b8',
                border: isActive
                  ? '1px solid rgba(165, 180, 252, 0.6)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isActive ? '0 0 14px rgba(99, 102, 241, 0.45)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#f8fafc';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.color = '#94a3b8';
                }
              }}
            >
              <Icon size={12} />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
