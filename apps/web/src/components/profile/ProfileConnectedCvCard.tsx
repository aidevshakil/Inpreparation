import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

interface ProfileConnectedCvCardProps {
  fileName?: string;
  fileSize?: string;
  parsedDate?: string;
  onViewCv?: () => void;
  onUpdateCv?: () => void;
}

export const ProfileConnectedCvCard: React.FC<ProfileConnectedCvCardProps> = ({
  fileName = 'Shakil_Ahamed_Resume.pdf',
  fileSize = '142 KB',
  parsedDate = 'Parsed 3 days ago',
  onViewCv,
  onUpdateCv,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        marginBottom: '16px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={15} style={{ color: '#34d399' }} />
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.8px',
              color: '#34d399',
              textTransform: 'uppercase',
            }}
          >
            Connected CV
          </span>
        </div>

        <span
          style={{
            fontSize: '0.66rem',
            fontWeight: 600,
            padding: '2px 7px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}
        >
          Active
        </span>
      </div>

      {/* File Tile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 12px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '10px',
          marginBottom: '12px',
        }}
      >
        <div
          style={{
            padding: '4px 6px',
            borderRadius: '6px',
            backgroundColor: 'rgba(244, 63, 94, 0.18)',
            color: '#fb7185',
            fontSize: '0.68rem',
            fontWeight: 800,
            letterSpacing: '0.5px',
          }}
        >
          PDF
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#f8fafc',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {fileName}
            </span>
            <CheckCircle2 size={12} color="#10b981" />
          </div>
          <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
            {parsedDate} • {fileSize}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <button
          onClick={onViewCv}
          style={{
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#cbd5e1',
            fontSize: '0.74rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
        >
          View CV
        </button>

        <button
          onClick={onUpdateCv}
          style={{
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#cbd5e1',
            fontSize: '0.74rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
        >
          Update CV
        </button>
      </div>
    </div>
  );
};
