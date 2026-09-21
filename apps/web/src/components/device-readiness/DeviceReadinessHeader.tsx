import React from 'react';
import { Clock, Video, Mic, Network, ShieldCheck } from 'lucide-react';

interface DeviceReadinessHeaderProps {
  interviewRole?: string;
}

export const DeviceReadinessHeader: React.FC<DeviceReadinessHeaderProps> = ({
  interviewRole = 'Staff Systems Architect',
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Top Milestone Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.8px',
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.18)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              textTransform: 'uppercase',
            }}
          >
            HARDWARE &amp; SENSORS TELEMETRY • NON-EVALUATIVE DIAGNOSTIC
          </span>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
            Milestone #20 / Step 3 of 4
          </span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            fontSize: '0.72rem',
            color: '#38bdf8',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 6px #38bdf8',
            }}
          />
          <span>Interview Mode: {interviewRole}</span>
        </div>
      </div>

      <h1
        style={{
          fontSize: '2.1rem',
          fontWeight: 800,
          color: '#ffffff',
          margin: '0 0 8px 0',
          letterSpacing: '-0.02em',
        }}
      >
        Let&apos;s Get Your Device Ready
      </h1>

      <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: '0 0 20px 0', maxWidth: '820px', lineHeight: 1.5 }}>
        Check your camera, microphone, audio playback, and network connection before stepping into your interview session.
      </p>

      {/* 5-Card Metadata Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '12px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Clock size={16} style={{ color: '#818cf8', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>Duration</div>
            <div style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 600 }}>1–2 min calibration</div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Video size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>Camera Feed</div>
            <div style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 600 }}>Optional presentation</div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Mic size={16} style={{ color: '#c084fc', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>Audio Input</div>
            <div style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 600 }}>Active mic required</div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Network size={16} style={{ color: '#34d399', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>WebRTC Stack</div>
            <div style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 600 }}>Audio API verified</div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <ShieldCheck size={16} style={{ color: '#fbbf24', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>Privacy Sandbox</div>
            <div style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 600 }}>Zero unprompted record</div>
          </div>
        </div>
      </div>
    </div>
  );
};
