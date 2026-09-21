import React from 'react';
import { Target, Play, ArrowRight, ExternalLink, Check } from 'lucide-react';

interface PerformanceActionShowcaseCardsProps {
  onLaunchSimulation?: () => void;
  onGenerateImprovementPlan?: () => void;
  onViewBestDossier?: () => void;
}

export const PerformanceActionShowcaseCards: React.FC<PerformanceActionShowcaseCardsProps> = ({
  onLaunchSimulation,
  onGenerateImprovementPlan,
  onViewBestDossier,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '24px',
        marginBottom: '24px',
      }}
    >
      {/* Left: Where to Focus Next */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={14} color="#38bdf8" />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                Where to Focus Next
              </h3>
            </div>
            <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '2px 8px', borderRadius: '100px' }}>
              Top Priority
            </span>
          </div>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
            Data-backed synthetic remediation vectors
          </p>

          {/* Focused remediation box */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#818cf8' }}>
                Problem Decomposition & Edge Handling (76.5 / 100)
              </div>
              <span style={{ fontSize: '0.7rem', color: '#f87171', fontWeight: 600 }}>
                -4.5 pts from target
              </span>
            </div>
            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 12px 0' }}>
              Recent response on asynchronous backpressure showed opportunities to formalize mathematical token-bucket drop bounds. Recommended micro-drill: <strong style={{ color: '#ffffff' }}>Distributed Throttling & Circuit Breakers (10 min)</strong>.
            </p>

            {/* Tag chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Token Bucket Bounds', 'Head-of-line Blocking', 'Sliding Windows'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.66rem',
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* Link to Improvement Plan */}
          <div
            onClick={onGenerateImprovementPlan}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              fontWeight: 600,
              color: '#a5b4fc',
              cursor: 'pointer',
              marginBottom: '14px',
              transition: 'color 0.15s ease',
            }}
          >
            <span>Generate AI Improvement Plan (Screen #42)</span>
            <ArrowRight size={13} />
          </div>

          {/* Launch Targeted Simulation Button */}
          <button
            onClick={onLaunchSimulation}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '11px 16px',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
            }}
          >
            <Play size={13} fill="#ffffff" />
            <span>Launch Targeted Simulation</span>
          </button>
        </div>
      </div>

      {/* Right: Personal Best Showcase */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2rem' }}>🎖</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                Personal Best Showcase
              </h3>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '2px 8px', borderRadius: '100px' }}>
              88.0 / 100
            </span>
          </div>

          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', marginTop: '12px', marginBottom: '2px' }}>
            #SIM-ARC-9014 • Python Backend Concurrency
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '18px' }}>
            Defended on Oct 27, 2024 • Staff L6+ Calibrated
          </div>

          {/* Validated Architectural Highlights */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
              VALIDATED ARCHITECTURAL HIGHLIGHTS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={11} color="#38bdf8" />
                </div>
                <span style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                  Rigorous bypass of Python GIL via multiprocessing memory arenas.
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Check size={11} color="#38bdf8" />
                </div>
                <span style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                  Flawless explanation of starvation prevention under 50k RPS.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info & view full dossier button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>
            Deterministic Dossier #9014
          </span>
          <button
            onClick={onViewBestDossier}
            style={{
              background: 'none',
              border: 'none',
              color: '#38bdf8',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: 0,
            }}
          >
            <span>View Full Dossier (Screen #33)</span>
            <ExternalLink size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
