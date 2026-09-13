import React from 'react';
import { Target, Activity, Zap } from 'lucide-react';

export const DiagnosticNextStepsCard: React.FC = () => {
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
      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 14px 0' }}>
        What Happens Next?
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Item 1 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#818cf8',
              flexShrink: 0,
            }}
          >
            <Target size={13} />
          </div>
          <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Competency Radar:</strong> Maps your 8 core technical &amp; behavioral attributes.
          </p>
        </div>

        {/* Item 2 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
              flexShrink: 0,
            }}
          >
            <Activity size={13} />
          </div>
          <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Diagnostic Calibration:</strong> Sound &amp; response latency verification.
          </p>
        </div>

        {/* Item 3 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399',
              flexShrink: 0,
            }}
          >
            <Zap size={13} />
          </div>
          <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Targeted Mock Drills:</strong> 5 highly tailored practice interviews ready for launch.
          </p>
        </div>
      </div>
    </div>
  );
};
