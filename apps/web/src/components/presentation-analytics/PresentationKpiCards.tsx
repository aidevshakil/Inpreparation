import React from 'react';
import {
  TrendingUp,
  Maximize2,
  Scan,
  Crosshair,
  UserCheck,
  Smile,
} from 'lucide-react';

export const PresentationKpiCards: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '14px',
        marginBottom: '24px',
      }}
    >
      {/* 1. PRESENTATION EVALUATION */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.12) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Presentation Evaluation
          </span>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Maximize2 size={13} style={{ color: '#c084fc' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              82
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>/ 100</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.72rem', color: '#34d399', fontWeight: 700 }}>
              <TrendingUp size={12} />
              +3.8 pts vs baseline
            </span>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>4 sessions</span>
          </div>
        </div>
      </div>

      {/* 2. FACE VISIBILITY */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Face Visibility
          </span>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Smile size={13} style={{ color: '#38bdf8' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              94.8
            </span>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#38bdf8' }}>%</span>
          </div>

          <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px' }}>
            22m 14s of 23m 20s media
          </div>
        </div>
      </div>

      {/* 3. FRAMING CENTERING */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Framing Centering
          </span>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              backgroundColor: 'rgba(129, 140, 248, 0.12)',
              border: '1px solid rgba(129, 140, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Scan size={13} style={{ color: '#818cf8' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              92.0
            </span>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#818cf8' }}>%</span>
          </div>

          <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px' }}>
            Chest-up centered within frame
          </div>
        </div>
      </div>

      {/* 4. CAMERA ALIGNMENT */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Camera Alignment
          </span>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Crosshair size={13} style={{ color: '#34d399' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              88.4
            </span>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#34d399' }}>%</span>
          </div>

          <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px' }}>
            Aligned within &lt;5° optical cone
          </div>
        </div>
      </div>

      {/* 5. POSTURE STABILITY */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Posture Stability
          </span>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              backgroundColor: 'rgba(192, 132, 252, 0.12)',
              border: '1px solid rgba(192, 132, 252, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <UserCheck size={13} style={{ color: '#c084fc' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              91.2
            </span>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#c084fc' }}>%</span>
          </div>

          <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px' }}>
            Stable upper quadrant bounds
          </div>
        </div>
      </div>
    </div>
  );
};
