import React, { useState } from 'react';
import { Play, Pause, Volume2, CheckCircle2, ExternalLink } from 'lucide-react';

interface IntroResultSubmittedResponsesCardProps {
  onOpenDrawer?: () => void;
  diagnosticData?: any;
}

export const IntroResultSubmittedResponsesCard: React.FC<IntroResultSubmittedResponsesCardProps> = ({
  onOpenDrawer,
  diagnosticData,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8',
            }}
          />
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Review Your Submitted Responses
          </h3>
        </div>

        <button
          onClick={onOpenDrawer}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>Open Responses Drawer (8/8)</span>
          <ExternalLink size={12} />
        </button>
      </div>

      {/* Embedded Player Card */}
      <div
        style={{
          backgroundColor: '#040711',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          borderRadius: '14px',
          padding: '16px',
        }}
      >
        {/* Prompt Title & Time */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
            flexWrap: 'wrap',
            gap: '6px',
          }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>
            Prompt 1: Professional Trajectory &amp; Technical Ownership
          </span>
          <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
            1m 48s • 1080p
          </span>
        </div>

        {/* Audio Player Scrubber Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '10px',
            padding: '8px 12px',
            marginBottom: '12px',
          }}
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#4f46e5',
              border: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} style={{ marginLeft: '2px' }} />}
          </button>

          {/* Progress Line */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: isPlaying ? '65%' : '38%',
                  height: '100%',
                  backgroundColor: '#818cf8',
                  borderRadius: '9999px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'monospace' }}>
              {isPlaying ? '1:10 / 1:48' : '0:42 / 1:48'}
            </span>
          </div>

          <Volume2 size={14} style={{ color: '#64748b', flexShrink: 0 }} />
        </div>

        {/* Spoken Quote Snippet */}
        <p
          style={{
            fontSize: '0.76rem',
            color: '#cbd5e1',
            lineHeight: 1.5,
            fontStyle: 'italic',
            margin: '0 0 12px 0',
            borderLeft: '2px solid #818cf8',
            paddingLeft: '10px',
          }}
        >
          &ldquo;{diagnosticData?.responses?.[0]?.transcript || diagnosticData?.responses?.[0]?.responseText || 'No transcription recorded for this session.'}&rdquo;
        </p>

        {/* Footer Meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.68rem',
            color: '#64748b',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#34d399' }}>
            <CheckCircle2 size={12} />
            <span>Optimal eye-level framing, head &amp; shoulders centered, clear lighting.</span>
          </div>

          <span
            style={{
              padding: '2px 6px',
              borderRadius: '4px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              fontWeight: 700,
            }}
          >
            Fidelity: 98.2%
          </span>
        </div>
      </div>
    </div>
  );
};
