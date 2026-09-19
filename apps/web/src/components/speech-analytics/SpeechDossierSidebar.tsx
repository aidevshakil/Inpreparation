import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Mic,
  Video,
} from 'lucide-react';

interface SpeechDossierSidebarProps {
  onGenerateDrill?: () => void;
  onLaunchTargetRangeDrill?: () => void;
  onNavigateToPresentation?: () => void;
}

export const SpeechDossierSidebar: React.FC<SpeechDossierSidebarProps> = ({
  onGenerateDrill,
  onLaunchTargetRangeDrill,
  onNavigateToPresentation,
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
        gap: '20px',
        background: 'linear-gradient(180deg, rgba(20, 26, 46, 0.7) 0%, rgba(13, 19, 34, 0.95) 100%)',
      }}
    >
      {/* Dossier Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} style={{ color: '#818cf8' }} />
          <h2 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            AI Speech Dossier
          </h2>
        </div>
        <span
          style={{
            padding: '3px 8px',
            borderRadius: '6px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
            fontSize: '0.68rem',
            fontWeight: 700,
          }}
        >
          Calibrated
        </span>
      </div>

      {/* Acoustic Observation */}
      <div>
        <div
          style={{
            fontSize: '0.66rem',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          Acoustic Observation
        </div>
        <div
          style={{
            padding: '14px 16px',
            borderRadius: '10px',
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.78rem',
            color: '#cbd5e1',
            lineHeight: 1.5,
            fontStyle: 'italic',
            borderLeft: '3px solid #818cf8',
          }}
        >
          &ldquo;Pacing is highly controlled within optimal technical articulation bounds (130–150 WPM). Pause distribution dictates deliberate architectural formulation before executing concurrency explanations.&rdquo;
        </div>
      </div>

      {/* Key Speech Strengths */}
      <div>
        <div
          style={{
            fontSize: '0.66rem',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          Key Speech Strengths
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Strength 1 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <CheckCircle2 size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f1f5f9' }}>
                Steady Articulation Velocity
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.4 }}>
                Minimal cadence spikes under high pressure concurrency trade-offs.
              </div>
            </div>
          </div>

          {/* Strength 2 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <CheckCircle2 size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f1f5f9' }}>
                Low Filler Density (1.2%)
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.4 }}>
                Significantly superior to standard engineering cohort baseline (2.8%).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Growth Vector */}
      <div>
        <div
          style={{
            fontSize: '0.66rem',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          Priority Growth Vector
        </div>
        <div
          style={{
            padding: '12px 14px',
            borderRadius: '10px',
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
          }}
        >
          <AlertTriangle size={16} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#fbbf24' }}>
              Extended Duration in System Design
            </div>
            <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '3px', lineHeight: 1.4 }}>
              Distributed consensus answer averaged 2m 15s. Compress foundational overview by 20–30s to preserve interview runway.
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
        <button
          onClick={onGenerateDrill}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 16px',
            background: 'linear-gradient(135deg, #6366f1, #818cf8)',
            border: 'none',
            borderRadius: '9px',
            color: '#ffffff',
            fontSize: '0.76rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
            transition: 'all 0.15s ease',
          }}
        >
          <span>Generate Speech Cadence Drill</span>
          <ArrowRight size={14} />
        </button>

        <button
          onClick={onLaunchTargetRangeDrill}
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
          <Clock size={13} style={{ color: '#94a3b8' }} />
          <span>Launch 10-Min Target Range Drill</span>
        </button>
      </div>

      {/* Complementary Telemetry Cross-links */}
      <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
          Complementary Telemetry
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: '7px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.72rem',
              color: '#cbd5e1',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mic size={13} style={{ color: '#38bdf8' }} />
              <span>Speech Analytics</span>
            </div>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>WEB #39</span>
          </div>

          <div
            onClick={onNavigateToPresentation}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: '7px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.72rem',
              color: '#cbd5e1',
              cursor: 'pointer',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Video size={13} style={{ color: '#c084fc' }} />
              <span>Presentation Analytics</span>
            </div>
            <span style={{ color: '#a855f7', fontWeight: 600 }}>Web #40 →</span>
          </div>
        </div>
      </div>
    </div>
  );
};
