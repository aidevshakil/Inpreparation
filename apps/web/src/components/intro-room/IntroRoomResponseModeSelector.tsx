import React from 'react';
import { Video, Mic, MessageSquare, Check, ShieldCheck } from 'lucide-react';

export type IntroResponseMode = 'camera_voice' | 'voice_only' | 'text_response';

interface IntroRoomResponseModeSelectorProps {
  selectedMode: IntroResponseMode;
  onSelectMode: (mode: IntroResponseMode) => void;
}

export const IntroRoomResponseModeSelector: React.FC<IntroRoomResponseModeSelectorProps> = ({
  selectedMode,
  onSelectMode,
}) => {
  const modes = [
    {
      id: 'camera_voice' as IntroResponseMode,
      icon: <Video size={18} />,
      title: 'Camera + Voice',
      description: 'Realistic simulation with optional presentation & framing feedback.',
      tag: 'Recommended for Practice',
      isRecommended: true,
    },
    {
      id: 'voice_only' as IntroResponseMode,
      icon: <Mic size={18} />,
      title: 'Voice Only',
      description: 'Spoken answers analyzed for technical depth, prosody, and clarity.',
      tag: 'Camera Off',
      isRecommended: false,
    },
    {
      id: 'text_response' as IntroResponseMode,
      icon: <MessageSquare size={18} />,
      title: 'Text Response',
      description: 'Type answers directly without audio or video capture.',
      tag: 'Quiet Environment',
      isRecommended: false,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '4px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8',
            }}
          />
          <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            YOUR SELECTED RESPONSE MODE
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.18)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.35)',
          }}
        >
          Active: {selectedMode === 'camera_voice' ? 'Camera + Voice' : selectedMode === 'voice_only' ? 'Voice Only' : 'Text Response'}
        </span>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
        Switch dynamically anytime based on your environment.
      </p>

      {/* 3 Selectable Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        {modes.map((m) => {
          const isSelected = selectedMode === m.id;
          return (
            <div
              key={m.id}
              onClick={() => onSelectMode(m.id)}
              style={{
                backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                border: isSelected ? '1px solid rgba(129, 140, 248, 0.6)' : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                position: 'relative',
                boxShadow: isSelected ? '0 0 20px rgba(99, 102, 241, 0.2)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div
                  style={{
                    color: isSelected ? '#a5b4fc' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {m.icon}
                </div>

                {isSelected && (
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: '#6366f1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <Check size={11} />
                  </div>
                )}
              </div>

              <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
                {m.title}
              </h4>

              <p style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45, margin: '0 0 10px 0' }}>
                {m.description}
              </p>

              <span
                style={{
                  fontSize: '0.64rem',
                  color: isSelected ? '#a5b4fc' : '#64748b',
                  fontWeight: 600,
                }}
              >
                {m.tag}
              </span>
            </div>
          );
        })}
      </div>

      {/* Responsible Camera Telemetry Banner */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <ShieldCheck size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
        <p style={{ fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
          <strong style={{ color: '#cbd5e1' }}>Responsible Camera Telemetry:</strong> Video signals evaluate strictly observable technical criteria (lighting balance, eye-level framing, head-and-shoulder alignment). Inprep AI never infers emotional state, personality, or psychological traits.
        </p>
      </div>
    </div>
  );
};
