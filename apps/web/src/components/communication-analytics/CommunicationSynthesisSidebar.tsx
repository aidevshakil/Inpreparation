import React from 'react';
import { Sparkles, Check, AlertTriangle, ArrowRight, Clock, Mic, Video, Shield, Lock } from 'lucide-react';

interface CommunicationSynthesisSidebarProps {
  onGeneratePlan?: () => void;
  onLaunchFramingDrill?: () => void;
  onNavigateSpeech?: () => void;
  onNavigatePresentation?: () => void;
}

export const CommunicationSynthesisSidebar: React.FC<CommunicationSynthesisSidebarProps> = ({
  onGeneratePlan,
  onLaunchFramingDrill,
  onNavigateSpeech,
  onNavigatePresentation,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. AI Synthesis & Action Dossier */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <div style={{ width: 26, height: 26, borderRadius: '6px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={13} color="#c084fc" />
          </div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            AI Synthesis & Action Dossier
          </h3>
        </div>

        {/* Identified Pattern */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
            IDENTIFIED PATTERN
          </div>
          <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
            "Responses demonstrate rapid direct answering with exceptional core thesis articulation. 82% of technical explanations follow structured deductive reasoning."
          </p>
        </div>

        {/* Key Strengths */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            KEY STRENGTHS
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={11} color="#38bdf8" />
              </div>
              <div style={{ fontSize: '0.73rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                <strong style={{ color: '#f8fafc' }}>Direct Answering:</strong> Immediately states architectural bottlenecks before elaborating on context.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                <Check size={11} color="#38bdf8" />
              </div>
              <div style={{ fontSize: '0.73rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                <strong style={{ color: '#f8fafc' }}>Terminology Precision:</strong> Decisive language usage; defends memory primitives crisply.
              </div>
            </div>
          </div>
        </div>

        {/* Priority Growth Vector */}
        <div
          style={{
            background: 'rgba(239, 68, 68, 0.04)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: '10px',
            padding: '12px 14px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontWeight: 700, color: '#f87171', marginBottom: '4px' }}>
            <AlertTriangle size={12} />
            <span>PRIORITY GROWTH VECTOR</span>
          </div>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
            Boundary Condition Completeness
          </div>
          <p style={{ fontSize: '0.71rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            Tends to truncate edge-case trade-offs when concluding answers under 90 seconds.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={onGeneratePlan}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '11px 14px',
              fontSize: '0.78rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
            }}
          >
            <span>Generate Structured Practice Plan (Screen #42)</span>
            <ArrowRight size={13} />
          </button>

          <button
            onClick={onLaunchFramingDrill}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.03)',
              color: '#cbd5e1',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '10px',
              fontSize: '0.74rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <Clock size={12} color="#fbbf24" />
            <span>Launch 10-Min Response Framing Drill</span>
          </button>
        </div>
      </div>

      {/* 2. COMPLEMENTARY TELEMETRY */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
        }}
      >
        <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
          COMPLEMENTARY TELEMETRY
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Speech Analytics */}
          <div
            onClick={onNavigateSpeech}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '10px',
              padding: '12px 14px',
              cursor: 'pointer',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mic size={15} color="#38bdf8" />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
                  Speech Analytics
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                  138 WPM • 1.1% Fillers • 1.4s Pauses
                </div>
              </div>
            </div>
            <ArrowRight size={14} color="#64748b" />
          </div>

          {/* Presentation Analytics */}
          <div
            onClick={onNavigatePresentation}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '10px',
              padding: '12px 14px',
              cursor: 'pointer',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Video size={15} color="#c084fc" />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
                  Presentation Analytics
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                  97% Framing Centering • Stable Lighting
                </div>
              </div>
            </div>
            <ArrowRight size={14} color="#64748b" />
          </div>
        </div>
      </div>

      {/* 3. Responsible AI Governance & Acoustic Boundary Policy */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.015)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '12px',
          padding: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', fontWeight: 700, color: '#a5b4fc', marginBottom: '6px' }}>
          <Shield size={12} />
          <span>Responsible AI Governance & Acoustic Boundary Policy</span>
        </div>
        <p style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.45, margin: '0 0 10px 0' }}>
          Zero affective inference. Laptop & mic strictly evaluate performance plausibility, omissions, trade-offs, and evidence.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.66rem', color: '#64748b' }}>
          <Lock size={11} color="#38bdf8" />
          <span style={{ color: '#cbd5e1', fontWeight: 600 }}>AES-256 Client-Side Encrypted</span>
          <span>•</span>
          <span>78-Day Auto Purge</span>
        </div>
      </div>
    </div>
  );
};
