import React from 'react';
import { Compass, Mic } from 'lucide-react';

interface DeviceSessionConfigCardProps {
  trackName?: string;
  simulationLength?: string;
  feedbackChannels?: string;
  onSwitchAudioOnly?: () => void;
}

export const DeviceSessionConfigCard: React.FC<DeviceSessionConfigCardProps> = ({
  trackName = 'Staff Backend Architect',
  simulationLength = '5 Diagnostic Adaptive Prompts',
  feedbackChannels = 'Speech Prosody + Systems Depth',
  onSwitchAudioOnly,
}) => {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <Compass size={16} style={{ color: '#818cf8' }} />
        <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Session Configuration
        </h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Track Selected:</span>
          <span style={{ color: '#f8fafc', fontWeight: 700 }}>{trackName}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Simulation:</span>
          <span style={{ color: '#cbd5e1' }}>{simulationLength}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Feedback Channels:</span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{feedbackChannels}</span>
        </div>
      </div>

      {/* Fallback Switcher Link */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.72rem',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <button
          onClick={onSwitchAudioOnly}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <Mic size={12} />
          <span>Switch to Audio-Only Mode</span>
        </button>

        <span style={{ color: '#64748b' }}>Fallback: Text Entry Available</span>
      </div>
    </div>
  );
};
