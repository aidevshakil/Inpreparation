import React from 'react';
import { RefreshCw, Mic, CheckCircle2 } from 'lucide-react';

interface DeviceReadinessBannerCardProps {
  score?: number;
  verifiedCount?: number;
  totalCount?: number;
  onRunDiagnostics?: () => void;
  onSwitchAudioOnly?: () => void;
  isRunning?: boolean;
}

export const DeviceReadinessBannerCard: React.FC<DeviceReadinessBannerCardProps> = ({
  score = 83,
  verifiedCount = 5,
  totalCount = 6,
  onRunDiagnostics,
  onSwitchAudioOnly,
  isRunning = false,
}) => {
  const circleRadius = 28;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const verifiedChips = [
    { label: 'Camera: Ready', status: 'verified' },
    { label: 'Mic: Calibrated', status: 'verified' },
    { label: 'Audio Out: Tested', status: 'verified' },
    { label: 'Browser: Supported', status: 'verified' },
    { label: 'Network: 28ms', status: 'verified' },
    { label: 'Lighting: Good', status: 'verified' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px 24px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {/* Left: Radial Gauge + Title + Verified Chips */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: '320px', flexWrap: 'wrap' }}>
        {/* Gauge */}
        <div style={{ position: 'relative', width: '70px', height: '70px', flexShrink: 0 }}>
          <svg width="70" height="70" viewBox="0 0 70 70" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="35"
              cy="35"
              r={circleRadius}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="35"
              cy="35"
              r={circleRadius}
              stroke="url(#readinessGradient)"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
            />
            <defs>
              <linearGradient id="readinessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.95rem',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            {score}%
          </div>
        </div>

        {/* Text and Chips */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Device Readiness: Almost Ready
            </h3>
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}
            >
              {verifiedCount} of {totalCount} Verified
            </span>
          </div>

          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 10px 0', lineHeight: 1.45 }}>
            All baseline media streams are established. You can run diagnostics anytime or advance when ready.
          </p>

          {/* Chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {verifiedChips.map((chip) => (
              <span
                key={chip.label}
                style={{
                  fontSize: '0.68rem',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  color: '#7dd3fc',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={11} style={{ color: '#38bdf8' }} />
                <span>{chip.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={onRunDiagnostics}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 18px',
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
            transition: 'all 0.18s ease',
          }}
        >
          <RefreshCw size={13} style={{ animation: isRunning ? 'spin 1.2s linear infinite' : 'none' }} />
          <span>Run All Diagnostics</span>
        </button>

        <button
          onClick={onSwitchAudioOnly}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            color: '#cbd5e1',
            fontSize: '0.8rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Mic size={13} />
          <span>Audio-Only Mode</span>
        </button>
      </div>
    </div>
  );
};
