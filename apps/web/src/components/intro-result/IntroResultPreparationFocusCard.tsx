import React from 'react';

interface IntroResultPreparationFocusCardProps {
  diagnosticData?: any;
}

export const IntroResultPreparationFocusCard: React.FC<IntroResultPreparationFocusCardProps> = ({ diagnosticData }) => {
  const focusAreas = diagnosticData?.growthAreas || [];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
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
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Suggested Preparation Focus Areas
        </h3>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          3 High-Leverage Topics
        </span>
      </div>

      {/* 3 Numbered Focus Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {focusAreas.length > 0 ? focusAreas.map((area: any, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                color: '#a5b4fc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.76rem',
                fontWeight: 800,
                flexShrink: 0,
                marginTop: '1px',
              }}
            >
              {idx + 1}
            </div>

            <div>
              <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 3px 0' }}>
                {area.title || `Focus Area ${idx + 1}`}
              </h4>
              <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                {area.description || area}
              </p>
            </div>
          </div>
        )) : (
          <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
            No preparation focus areas identified yet.
          </div>
        )}
      </div>
    </div>
  );
};
