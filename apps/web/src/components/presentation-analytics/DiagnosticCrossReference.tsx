import React from 'react';
import { MessageSquare, Mic, Video, ArrowRight, Layers } from 'lucide-react';

interface DiagnosticCrossReferenceProps {
  onNavigateCommunication?: () => void;
  onNavigateSpeech?: () => void;
}

export const DiagnosticCrossReference: React.FC<DiagnosticCrossReferenceProps> = ({
  onNavigateCommunication,
  onNavigateSpeech,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={16} style={{ color: '#c084fc' }} />
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            DIAGNOSTIC SIGNAL CROSS-REFERENCE
          </h3>
        </div>

        <span
          style={{
            padding: '3px 8px',
            borderRadius: '6px',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            color: '#c084fc',
            fontSize: '0.68rem',
            fontWeight: 700,
          }}
        >
          Multi-Modal Telemetry Triangulation
        </span>
      </div>

      {/* 3 Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {/* 1. Communication Analytics */}
        <div
          onClick={onNavigateCommunication}
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0d1322';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={16} style={{ color: '#818cf8' }} />
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f1f5f9' }}>
                  Communication Analytics
                </span>
              </div>
              <span
                style={{
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  color: '#a5b4fc',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                }}
              >
                #38
              </span>
            </div>

            <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '8px 0 0 0', lineHeight: 1.45 }}>
              Clarity, relevance, answer completeness, deductive structuring.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              color: '#818cf8',
              fontWeight: 700,
            }}
          >
            <span>View Communication Analytics #38</span>
            <ArrowRight size={13} />
          </div>
        </div>

        {/* 2. Speech Analytics */}
        <div
          onClick={onNavigateSpeech}
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0d1322';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mic size={16} style={{ color: '#38bdf8' }} />
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f1f5f9' }}>
                  Speech Analytics
                </span>
              </div>
              <span
                style={{
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                }}
              >
                #39
              </span>
            </div>

            <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '8px 0 0 0', lineHeight: 1.45 }}>
              Speaking rate: 138 WPM, pause intervals (1.6s), filler density (1.2%).
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              color: '#38bdf8',
              fontWeight: 700,
            }}
          >
            <span>View Speech Analytics #39</span>
            <ArrowRight size={13} />
          </div>
        </div>

        {/* 3. Presentation Analytics (Current) */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
            background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.08) 0%, rgba(13, 19, 34, 0.95) 100%)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Video size={16} style={{ color: '#c084fc' }} />
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f1f5f9' }}>
                  Presentation Analytics
                </span>
              </div>
              <span
                style={{
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(168, 85, 247, 0.25)',
                  color: '#e9d5ff',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                }}
              >
                CURRENT #40
              </span>
            </div>

            <p style={{ fontSize: '0.72rem', color: '#cbd5e1', margin: '8px 0 0 0', lineHeight: 1.45 }}>
              Observable camera signals, framing centering, environmental lux, posture stability.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.7rem',
              color: '#34d399',
              fontWeight: 600,
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span>Active Telemetry Active (AES-256)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
