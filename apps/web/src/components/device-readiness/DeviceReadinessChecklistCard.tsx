import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  isPassed: boolean;
}

interface DeviceReadinessChecklistCardProps {
  onRetestItem?: (id: string) => void;
}

export const DeviceReadinessChecklistCard: React.FC<DeviceReadinessChecklistCardProps> = ({
  onRetestItem,
}) => {
  const items: ChecklistItem[] = [
    {
      id: 'browser',
      title: 'Browser Engine',
      detail: 'Chrome 124 • WebRTC 1.0 & AudioContext',
      isPassed: true,
    },
    {
      id: 'camera_perm',
      title: 'Camera Permissions',
      detail: 'Allowed • 1920x1080 @ 30fps capture',
      isPassed: true,
    },
    {
      id: 'framing',
      title: 'Framing & Alignment',
      detail: 'Eye-level silhouette aligned with center grid',
      isPassed: true,
    },
    {
      id: 'mic_perm',
      title: 'Microphone Permission',
      detail: 'Allowed • 48kHz audio sampling active',
      isPassed: true,
    },
    {
      id: 'speaker',
      title: 'Speaker Output',
      detail: 'Playback confirmed • Volume 75%',
      isPassed: true,
    },
    {
      id: 'network',
      title: 'Network & WebRTC Socket',
      detail: 'Ping: 28ms • Jitter: 2ms • Loss: 0%',
      isPassed: true,
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
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={16} style={{ color: '#38bdf8' }} />
          <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Readiness Checklist
          </h4>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}
        >
          6 / 6 Passed
        </span>
      </div>

      {/* Checklist List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              paddingBottom: '10px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={15} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  {item.detail}
                </div>
              </div>
            </div>

            <button
              onClick={() => onRetestItem && onRetestItem(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#818cf8',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Retest
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
