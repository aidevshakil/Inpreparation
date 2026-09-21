import React from 'react';
import { Edit3, ArrowRight } from 'lucide-react';

interface CvUploadManualBuilderCardProps {
  onBuildManually?: () => void;
}

export const CvUploadManualBuilderCard: React.FC<CvUploadManualBuilderCardProps> = ({
  onBuildManually,
}) => {
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
              backgroundColor: 'rgba(6, 182, 212, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#06b6d4',
            }}
          >
            <Edit3 size={16} />
          </div>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Don&apos;t have a CV ready?
          </h3>
        </div>

        <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 18px 0' }}>
          Build your professional credentials directly through our interactive step-by-step editor without needing an external document file.
        </p>
      </div>

      {/* Button: Build CV Manually */}
      <button
        onClick={onBuildManually}
        style={{
          width: '100%',
          padding: '10px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          color: '#cbd5e1',
          fontSize: '0.78rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.color = '#cbd5e1';
        }}
      >
        <span>Build CV Manually</span>
        <ArrowRight size={13} />
      </button>
    </div>
  );
};
