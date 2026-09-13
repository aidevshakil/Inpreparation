import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const IntroRoomChecklistCard: React.FC = () => {
  const initialItems = [
    {
      id: 'mode',
      text: 'I have reviewed and confirmed my selected response mode (Camera + Voice).',
      checked: true,
    },
    {
      id: 'mic',
      text: 'My microphone input is tested and calibrated to conversation level (~18 dBFS).',
      checked: true,
    },
    {
      id: 'camera',
      text: 'My camera is positioned at eye-level with clear ambient frontal lighting.',
      checked: true,
    },
    {
      id: 'room',
      text: 'I am located in a quiet room free of disruptive background audio.',
      checked: true,
    },
    {
      id: 'nature',
      text: 'I understand this is a diagnostic coaching assessment, not an official hiring pass/fail exam.',
      checked: true,
    },
    {
      id: 'transcription',
      text: 'I understand my spoken responses will be transcribed to calibrate mock interview scenarios.',
      checked: true,
    },
    {
      id: 'pause',
      text: 'I know I can pause, restart question answers, or exit with saved progress anytime.',
      checked: true,
    },
  ];

  const [items, setItems] = useState(initialItems);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const confirmedCount = items.filter((i) => i.checked).length;

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
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
          <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            BEFORE YOU BEGIN CHECKLIST
          </h3>
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
          {confirmedCount} of {items.length} Confirmed
        </span>
      </div>

      {/* 7 Checkboxes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: item.checked ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '5px',
                backgroundColor: item.checked ? '#4f46e5' : 'rgba(255, 255, 255, 0.08)',
                border: item.checked ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              {item.checked && <Check size={12} strokeWidth={3} />}
            </div>

            <span style={{ fontSize: '0.76rem', color: item.checked ? '#cbd5e1' : '#64748b', lineHeight: 1.45 }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
