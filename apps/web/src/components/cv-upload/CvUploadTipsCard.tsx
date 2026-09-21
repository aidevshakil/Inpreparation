import React from 'react';
import { Shield, Check } from 'lucide-react';

export const CvUploadTipsCard: React.FC = () => {
  const tips = [
    {
      title: 'Use an Updated CV:',
      desc: 'Include recent microservices or system scale milestones.',
    },
    {
      title: 'Keep Text Selectable:',
      desc: 'Avoid image-only scans or rasterized PDFs.',
    },
    {
      title: 'Standard Sections:',
      desc: 'Use clear headers (Experience, Tech Stack, Education).',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#818cf8',
            }}
          >
            <Shield size={16} />
          </div>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            For Better Results
          </h3>
        </div>

        {/* Tips list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {tips.map((tip, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '0.76rem', lineHeight: 1.45 }}>
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <Check size={9} strokeWidth={3} />
              </div>
              <p style={{ margin: 0, color: '#94a3b8' }}>
                <strong style={{ color: '#e2e8f0' }}>{tip.title}</strong> {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
