import React from 'react';
import { Sparkles, Play, Shield, ArrowRight, Video, CheckCircle2, AlertTriangle } from 'lucide-react';

interface PerformanceRightSidebarProps {
  onNavigateToResult?: () => void;
  onNavigateToAi?: () => void;
  onStartSimulation?: () => void;
}

export const PerformanceRightSidebar: React.FC<PerformanceRightSidebarProps> = ({
  onNavigateToResult,
  onNavigateToAi,
  onStartSimulation,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '24px' }}>
      {/* 1. LATEST SESSION DEBRIEF */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.5px' }}>
              ● LATEST SESSION DEBRIEF • #SIM-PY-8821
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: '4px 0 2px 0' }}>
              Python Async and Concurrency
            </h4>
            <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
              Completed Oct 24 • Staff L6+
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#c7d2fe', lineHeight: 1 }}>
              82
            </div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>/ 100</div>
          </div>
        </div>

        {/* Top Demonstrated Strength */}
        <div
          style={{
            background: 'rgba(56, 189, 248, 0.05)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '10px',
            padding: '12px 14px',
            marginBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#38bdf8', marginBottom: '4px' }}>
            <CheckCircle2 size={13} /> Top Demonstrated Strength
          </div>
          <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            ProcessPoolExecutor for offloading and CPU-bound GIL isolation models ended with exact syntax and memory profiling logic.
          </p>
        </div>

        {/* Key Growth Vector */}
        <div
          style={{
            background: 'rgba(245, 158, 11, 0.05)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '10px',
            padding: '12px 14px',
            marginBottom: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#fbbf24', marginBottom: '4px' }}>
            <AlertTriangle size={13} /> Key Growth Vector
          </div>
          <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            Token-bucket drop formulas under sudden traffic spikes. Provide explicit mathematical bounds.
          </p>
        </div>

        <button
          onClick={onNavigateToResult}
          style={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f8fafc',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
        >
          <span>Review Full Simulation Debrief</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* 2. AI Performance Synthesis */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.14) 0%, rgba(12, 15, 23, 0.95) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(79, 70, 229, 0.15)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: 'rgba(99, 102, 241, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#c7d2fe',
            }}
          >
            <Sparkles size={16} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              AI Performance Synthesis
            </h4>
            <div style={{ fontSize: '0.7rem', color: '#a5b4fc' }}>
              Computed from 30 defended answers
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.55, margin: '0 0 18px 0' }}>
          Across your last 6 technical simulations, your mastery of synchronous vs asynchronous event-loop isolation is fully proven. Your highest ROI deliberate practice priority is formalizing mathematical bounding for jittered backpressure and distributed retry storms.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={onNavigateToAi}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              border: 'none',
              color: '#ffffff',
              padding: '11px 16px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
            }}
          >
            <Sparkles size={14} />
            <span>Generate AI Improvement Plan</span>
          </button>

          <button
            onClick={onStartSimulation}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0',
              padding: '9px 16px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            <Play size={13} color="#38bdf8" />
            <span>Start Targeted Practice Simulation</span>
          </button>
        </div>
      </div>

      {/* 3. Speech & Video Telemetry */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Video size={16} color="#38bdf8" />
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Speech & Video Telemetry
            </h4>
          </div>
          <span style={{ fontSize: '0.66rem', color: '#94a3b8' }}>Acoustic & Optics</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700 }}>SPEAKING CADENCE</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '2px 0' }}>138 WPM</div>
            <div style={{ fontSize: '0.64rem', color: '#38bdf8', fontWeight: 600 }}>Optimal (130-150)</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700 }}>PAUSE DENSITY</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '2px 0' }}>1.4s avg</div>
            <div style={{ fontSize: '0.64rem', color: '#94a3b8' }}>Natural Composure</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700 }}>FILLER WORD RATIO</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399', margin: '2px 0' }}>1.1%</div>
            <div style={{ fontSize: '0.64rem', color: '#94a3b8' }}>Exceptional</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700 }}>FRAMING STABILITY</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '2px 0' }}>97%</div>
            <div style={{ fontSize: '0.64rem', color: '#38bdf8' }}>Centered Eye-line</div>
          </div>
        </div>

        <p style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: 1.45, margin: '0 0 12px 0' }}>
          Telemetry captures only optical framing centering and acoustic speech clarity. Strict zero-inference policy: no sentiment, emotion, or personality profiling.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem' }}>
          <button style={{ background: 'none', border: 'none', color: '#818cf8', fontWeight: 600, cursor: 'pointer', padding: 0 }}>
            Speech Analytics →
          </button>
          <button style={{ background: 'none', border: 'none', color: '#818cf8', fontWeight: 600, cursor: 'pointer', padding: 0 }}>
            Presentation Analytics →
          </button>
        </div>
      </div>

      {/* 4. CANDIDATE VAULT SECURITY */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}
      >
        <Shield size={16} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px', letterSpacing: '0.4px' }}>
            CANDIDATE VAULT SECURITY
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
            Upload Coverage: 6 verified simulations • 30 redeemed questions • AES-256 vault encryption • Assessment Tel • 30-day purge cycle active.
          </p>
        </div>
      </div>
    </div>
  );
};
