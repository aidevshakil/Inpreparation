import React, { useState } from 'react';
import { Cpu, RefreshCw, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { PipelineDiagnosticState } from './PipelineDiagnosticSimulatorBar';

interface PipelineHeroSynthesisCardProps {
  state: PipelineDiagnosticState;
  diagnosticData?: any;
}

export const PipelineHeroSynthesisCard: React.FC<PipelineHeroSynthesisCardProps> = ({
  state,
  diagnosticData,
}) => {
  const [notifyEnabled, setNotifyEnabled] = useState(true);

  const getSynthesisPercentage = () => {
    switch (state) {
      case 'initializing':
        return 18;
      case 'step_3_active':
        return 64;
      case 'step_5_finishing':
        return 94;
      case 'completed':
        return 100;
      case 'partial_fallback':
        return 64;
      case 'failure_dialog':
        return 48;
      default:
        return 64;
    }
  };

  const getSubTitleText = () => {
    switch (state) {
      case 'initializing':
        return 'Step 1 of 5: Collecting & Validating Responses';
      case 'step_3_active':
        return 'Step 3 of 5: Organizing Career Information & Competencies';
      case 'step_5_finishing':
        return 'Step 5 of 5: Synthesizing Personalized Systems Roadmap';
      case 'completed':
        return 'Analysis Complete: Profile & Radar Benchmarked';
      case 'partial_fallback':
        return 'Step 3 of 5: Retrying telemetry sync handshake';
      default:
        return 'Step 3 of 5: Organizing Career Information & Competencies';
    }
  };

  const getPillLabelText = () => {
    switch (state) {
      case 'initializing':
        return 'Verifying multimodal audio/video packets & sha256 checksums...';
      case 'step_3_active':
        return 'Synthesizing Neural Career Embeddings & Seniority Anchors...';
      case 'step_5_finishing':
        return 'Calibrating Staff Systems Architecture Rubrics & Drills...';
      case 'completed':
        return 'All 5 Pipeline Telemetry Stages Fully Synthesized!';
      default:
        return 'Synthesizing Neural Career Embeddings & Seniority Anchors...';
    }
  };

  const percentage = getSynthesisPercentage();

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
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 14px rgba(124, 58, 237, 0.4)',
              flexShrink: 0,
            }}
          >
            <Cpu size={20} />
          </div>

          <div>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 2px 0' }}>
              Preparing Your Career Profile
            </h3>
            <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0 }}>
              {getSubTitleText()}
            </p>
          </div>
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: percentage === 100 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(99, 102, 241, 0.2)',
            color: percentage === 100 ? '#34d399' : '#a5b4fc',
            border: percentage === 100 ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(99, 102, 241, 0.4)',
            boxShadow: '0 0 12px rgba(99, 102, 241, 0.2)',
          }}
        >
          {percentage}% Synthesized
        </span>
      </div>

      {/* Center Animated Orbital Canvas Box */}
      <div
        style={{
          width: '100%',
          height: '190px',
          backgroundColor: '#040711',
          borderRadius: '14px',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '16px',
        }}
      >
        {/* Glowing Radial Backdrop */}
        <div
          style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(124, 58, 237, 0.06) 50%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Orbit Rings */}
        <div
          style={{
            position: 'relative',
            width: '86px',
            height: '86px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '14px',
          }}
        >
          {/* Outer Dashed Orbit */}
          <div
            style={{
              position: 'absolute',
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              border: '1.5px dashed rgba(129, 140, 248, 0.4)',
              animation: 'spin 12s linear infinite',
            }}
          />

          {/* Inner Glowing Orbit */}
          <div
            style={{
              position: 'absolute',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '1px solid rgba(168, 85, 247, 0.5)',
              animation: 'spin 8s linear infinite reverse',
            }}
          />

          {/* Center Orb */}
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
              zIndex: 2,
            }}
          >
            {percentage === 100 ? (
              <CheckCircle2 size={22} />
            ) : (
              <RefreshCw size={20} style={{ animation: 'spin 3s linear infinite' }} />
            )}
          </div>
        </div>

        {/* Floating Capsule with Text */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 14px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            fontSize: '0.72rem',
            color: '#cbd5e1',
            backdropFilter: 'blur(8px)',
            zIndex: 2,
          }}
        >
          <Sparkles size={11} style={{ color: '#c084fc' }} />
          <span>{getPillLabelText()}</span>
        </div>
      </div>

      {/* Background Sync Notice */}
      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>🔒</span>
        <span>Please keep this page open while we finalize your responses. Safe background sync is active.</span>
      </p>

      {/* Notification Toggle Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Mail size={15} style={{ color: '#818cf8' }} />
          <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: 500 }}>
            Notify me via in-app alert &amp; email when analysis completes
          </span>
        </div>

        <button
          onClick={() => setNotifyEnabled(!notifyEnabled)}
          style={{
            width: '38px',
            height: '20px',
            borderRadius: '9999px',
            backgroundColor: notifyEnabled ? '#4f46e5' : 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            padding: '2px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background-color 0.2s ease',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              transform: notifyEnabled ? 'translateX(18px)' : 'translateX(0)',
              transition: 'transform 0.2s ease',
            }}
          />
        </button>
      </div>
    </div>
  );
};
