import React from 'react';
import { Compass, ExternalLink, CheckCircle2 } from 'lucide-react';

interface IntroRoomTelemetryCardProps {
  trackName?: string;
  onNavigateToDeviceCheck?: () => void;
}

export const IntroRoomTelemetryCard: React.FC<IntroRoomTelemetryCardProps> = ({
  trackName = 'General Assessment',
  onNavigateToDeviceCheck,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px',
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
          marginBottom: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Compass size={16} style={{ color: '#818cf8' }} />
          <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            HARDWARE &amp; SESSION TELEMETRY
          </h4>
        </div>

        <button
          onClick={onNavigateToDeviceCheck}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.7rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px',
          }}
        >
          <span>Device Check #20</span>
          <ExternalLink size={11} />
        </button>
      </div>

      {/* Telemetry Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
          <span style={{ color: '#94a3b8' }}>Target Track:</span>
          <span style={{ color: '#f8fafc', fontWeight: 700 }}>{trackName}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
          <span style={{ color: '#94a3b8' }}>Camera Feed:</span>
          <span style={{ color: '#34d399', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={11} />
            <span>FaceTime HD 1080p (Ready)</span>
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
          <span style={{ color: '#94a3b8' }}>Audio Input:</span>
          <span style={{ color: '#34d399', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={11} />
            <span>CoreAudio 48kHz (Ready)</span>
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
          <span style={{ color: '#94a3b8' }}>Audio Playback:</span>
          <span style={{ color: '#34d399', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={11} />
            <span>Stereo Chime Verified</span>
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
          <span style={{ color: '#94a3b8' }}>WebRTC Socket:</span>
          <span style={{ color: '#34d399', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={11} />
            <span>28ms Latency • 0% Jitter</span>
          </span>
        </div>
      </div>
    </div>
  );
};
