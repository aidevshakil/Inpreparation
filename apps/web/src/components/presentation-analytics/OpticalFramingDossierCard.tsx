import React from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Camera,
  CheckSquare,
} from 'lucide-react';

interface OpticalFramingDossierCardProps {
  onLaunchFramingCheck?: () => void;
  onGenerateChecklist?: () => void;
}

export const OpticalFramingDossierCard: React.FC<OpticalFramingDossierCardProps> = ({
  onLaunchFramingCheck,
  onGenerateChecklist,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#0d1322',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '22px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        background: 'linear-gradient(180deg, rgba(20, 26, 46, 0.7) 0%, rgba(13, 19, 34, 0.95) 100%)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Camera size={16} style={{ color: '#c084fc' }} />
          <h2 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            OPTICAL FRAMING DOSSIER
          </h2>
        </div>
        <span
          style={{
            padding: '3px 8px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#cbd5e1',
            fontSize: '0.68rem',
            fontWeight: 700,
          }}
        >
          Session: SIM-PY-8821
        </span>
      </div>

      {/* Visual Framing Box / Camera Wireframe */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '140px',
          backgroundColor: '#070b14',
          borderRadius: '10px',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Corner Bracket Guides */}
        <div style={{ position: 'absolute', top: 10, left: 14, width: 14, height: 14, borderTop: '2px solid #818cf8', borderLeft: '2px solid #818cf8' }} />
        <div style={{ position: 'absolute', top: 10, right: 14, width: 14, height: 14, borderTop: '2px solid #818cf8', borderRight: '2px solid #818cf8' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 14, width: 14, height: 14, borderBottom: '2px solid #818cf8', borderLeft: '2px solid #818cf8' }} />
        <div style={{ position: 'absolute', bottom: 10, right: 14, width: 14, height: 14, borderBottom: '2px solid #818cf8', borderRight: '2px solid #818cf8' }} />

        {/* 91.2% Centered Top Pill */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(124, 58, 237, 0.6)',
            border: '1px solid rgba(168, 85, 247, 0.8)',
            color: '#ffffff',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.4px',
          }}
        >
          91.2% Centered
        </div>

        {/* Head and Shoulders Wireframe Silhouette */}
        <svg viewBox="0 0 100 80" style={{ width: '80px', height: '64px' }}>
          {/* Head circle */}
          <circle cx="50" cy="28" r="16" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Eye level line */}
          <line x1="38" y1="28" x2="62" y2="28" stroke="#38bdf8" strokeWidth="1" />
          {/* Shoulders arc */}
          <path d="M 20 70 C 24 50, 76 50, 80 70" fill="none" stroke="#818cf8" strokeWidth="1.5" />
        </svg>

        {/* Eye level indicator bottom tag */}
        <div
          style={{
            fontSize: '0.64rem',
            color: '#38bdf8',
            fontWeight: 700,
            letterSpacing: '0.4px',
            marginTop: '2px',
          }}
        >
          E: 2.1°C (OPTIMAL)
        </div>
      </div>

      {/* Observation text */}
      <div style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
        Camera maintained consistent eye-level alignment across the defended session. Face visibility remained stable with slight tip-of-head cropping during technical architectural deferrals.
      </div>

      {/* Key Strengths Verified */}
      <div>
        <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
          Key Strengths Verified
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '10px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <CheckCircle2 size={15} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
          <span style={{ fontSize: '0.72rem', color: '#f1f5f9', lineHeight: 1.4 }}>
            Consistent Eye-Level Placement (88.4% alignment) + Clean Front-Facing Luminance (Lux Index: 88).
          </span>
        </div>
      </div>

      {/* Priority Practice Vector */}
      <div>
        <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
          Priority Practice Vector
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '10px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
          }}
        >
          <AlertTriangle size={15} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
          <span style={{ fontSize: '0.72rem', color: '#fde68a', lineHeight: 1.4 }}>
            Minor leftward lateral drift during Q4 extended whiteboard breakdown; recommend centering laptop stand.
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
        <button
          onClick={onLaunchFramingCheck}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 16px',
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            border: 'none',
            borderRadius: '9px',
            color: '#ffffff',
            fontSize: '0.76rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)',
            transition: 'all 0.15s ease',
          }}
        >
          <Camera size={14} />
          <span>Launch 5-Min Camera Framing Check</span>
          <span
            style={{
              padding: '1px 5px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              fontSize: '0.64rem',
            }}
          >
            #40
          </span>
        </button>

        <button
          onClick={onGenerateChecklist}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '9px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9px',
            color: '#e2e8f0',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <CheckSquare size={13} style={{ color: '#94a3b8' }} />
          <span>Generate Presentation Checklist (#40)</span>
        </button>
      </div>
    </div>
  );
};
