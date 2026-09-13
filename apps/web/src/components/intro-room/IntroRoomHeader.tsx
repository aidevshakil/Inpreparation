import React from 'react';
import { Clock, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

interface IntroRoomHeaderProps {
  onNavigateToAssessment?: () => void;
}

export const IntroRoomHeader: React.FC<IntroRoomHeaderProps> = ({
  onNavigateToAssessment,
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Breadcrumb & Stage Pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#94a3b8' }}>
          <span>Workspace</span>
          <ChevronRight size={12} style={{ color: '#475569' }} />
          <span style={{ color: '#cbd5e1', cursor: 'pointer' }} onClick={onNavigateToAssessment}>
            Career Assessment
          </span>
          <ChevronRight size={12} style={{ color: '#475569' }} />
          <span style={{ color: '#818cf8', fontWeight: 600 }}>Intro Room (Web #21)</span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            fontSize: '0.72rem',
            color: '#34d399',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 6px #10b981',
            }}
          />
          <span>Diagnostic Stage: Introductory Calibration</span>
        </div>
      </div>

      {/* Main Row: Title & Subtitle (Left) + 3 Stat Tiles (Right) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
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
              FINAL DIAGNOSTIC GATEWAY
            </span>
            <span style={{ color: '#475569' }}>•</span>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Milestone #21 / Step 4 of 4
            </span>
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
            You&apos;re Almost Ready
          </h1>

          <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
            Take a moment to review your interview parameters, hardware checks, and practice guidelines before stepping into the AI calibration room.
          </p>
        </div>

        {/* 3 Stat Tiles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Clock size={16} style={{ color: '#818cf8', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                ESTIMATED TIME
              </div>
              <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 700 }}>5–8 Minutes</div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Layers size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                FORMAT
              </div>
              <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 700 }}>6–8 Adaptive Prompts</div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                READINESS STATUS
              </div>
              <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 700 }}>All Systems Calibrated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
