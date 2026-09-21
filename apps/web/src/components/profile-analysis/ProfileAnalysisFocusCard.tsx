import React from 'react';
import { Target, ArrowRight } from 'lucide-react';

interface ProfileAnalysisFocusCardProps {
  onStartDrill?: (topic: string) => void;
  dossierData?: any;
}

export const ProfileAnalysisFocusCard: React.FC<ProfileAnalysisFocusCardProps> = ({
  onStartDrill,
  dossierData,
}) => {
  const focusAreas = dossierData?.growthAreas || [];


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
          marginBottom: '6px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={18} style={{ color: '#818cf8' }} />
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Suggested Development &amp; Practice Focus
          </h3>
        </div>

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
          3 High-Yield Topics
        </span>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
        Targeted practice areas recommended to optimize your Staff Systems interview performance:
      </p>

      {/* 3 Focus Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {focusAreas.length > 0 ? focusAreas.map((area: any, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  {idx + 1}. {area.title || `Focus Area ${idx + 1}`}
                </span>

                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    backgroundColor: area.priorityBg || 'rgba(168, 85, 247, 0.15)',
                    color: area.priorityColor || '#c084fc',
                    border: `1px solid ${area.priorityBorder || 'rgba(168, 85, 247, 0.3)'}`,
                  }}
                >
                  {area.priority || 'Priority: Medium'}
                </span>
              </div>

              <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                {area.description || area}
              </p>
            </div>

            <button
              onClick={() => onStartDrill && onStartDrill(area.title || area)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '8px 14px',
                backgroundColor: idx === 0 ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
                border: idx === 0 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: idx === 0 ? '0 2px 10px rgba(79, 70, 229, 0.3)' : 'none',
                flexShrink: 0,
              }}
            >
              <span>{area.buttonText || 'Select Practice'}</span>
              <ArrowRight size={12} />
            </button>
          </div>
        )) : (
          <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Awaiting suggested practices synthesis...</div>
        )}
      </div>
    </div>
  );
};
