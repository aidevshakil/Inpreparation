import React from 'react';
import { AlertTriangle, Quote, ArrowRight, Zap, ShieldCheck, Info } from 'lucide-react';

interface SkillDossierSidebarProps {
  onGeneratePlan?: () => void;
  onLaunchMicroDrill?: () => void;
}

export const SkillDossierSidebar: React.FC<SkillDossierSidebarProps> = ({
  onGeneratePlan,
  onLaunchMicroDrill,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. Selected Dossier Card */}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span
            style={{
              fontSize: '0.64rem',
              fontWeight: 800,
              color: '#f87171',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              padding: '2px 8px',
              borderRadius: '100px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <AlertTriangle size={10} /> FOCUS VECTOR
          </span>
          <span style={{ fontSize: '0.66rem', color: '#64748b' }}>
            Selected Dossier
          </span>
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 2px 0' }}>
          Distributed Backpressure & Throttling
        </h3>
        <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '16px' }}>
          Reliability • Microservices • Queue Mechanics
        </div>

        {/* Aggregate Score with gap pill */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.66rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, marginBottom: '2px' }}>
            Aggregate Score
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
              74.0
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>/ 100</span>
            <span
              style={{
                fontSize: '0.64rem',
                fontWeight: 700,
                color: '#f87171',
                background: 'rgba(239, 68, 68, 0.12)',
                padding: '2px 8px',
                borderRadius: '100px',
                marginLeft: '4px',
              }}
            >
              6 pts under 80 Threshold
            </span>
          </div>
        </div>

        {/* Mini Trajectory SVG Line */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.015)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '10px',
            padding: '12px 14px',
            marginBottom: '20px',
          }}
        >
          <svg viewBox="0 0 280 60" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
            <line x1="30" y1="45" x2="250" y2="45" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            <path d="M 40 45 L 140 35 L 240 25" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
            <circle cx="40" cy="45" r="4" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
            <circle cx="140" cy="35" r="4" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
            <circle cx="240" cy="25" r="5" fill="#ffffff" stroke="#ef4444" strokeWidth="2.5" />
            <text x="40" y="58" textAnchor="middle" fill="#64748b" fontSize="7.5">#SIM-ALU-4102 (70)</text>
            <text x="140" y="48" textAnchor="middle" fill="#64748b" fontSize="7.5">#SIM-DB-9310 (72)</text>
            <text x="240" y="16" textAnchor="middle" fill="#f87171" fontSize="8" fontWeight="700">#SIM-PY-8821 (74)</text>
          </svg>
        </div>

        {/* Question-Level Evidence Excerpt */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '14px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontWeight: 700, color: '#38bdf8', marginBottom: '8px' }}>
            <Quote size={12} />
            <span>Question-Level Evidence Excerpt</span>
          </div>

          <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginBottom: '4px' }}>
            Session #SIM-PY-8821 • Q4:
          </div>

          <blockquote
            style={{
              margin: '0 0 10px 0',
              paddingLeft: '10px',
              borderLeft: '2px solid rgba(56, 189, 248, 0.4)',
              fontSize: '0.72rem',
              color: '#e2e8f0',
              fontStyle: 'italic',
              lineHeight: 1.45,
            }}
          >
            "Defended token-bucket drop formulas under sudden spike traffic, emphasizing leaky bucket dampening for burst ingress..."
          </blockquote>

          <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', marginBottom: '3px' }}>
            EVALUATOR OBSERVATION:
          </div>
          <p style={{ fontSize: '0.71rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            Clear conceptual understanding of exponential backoff, but missed concrete jittered mathematical boundaries during burst ingress under cascading failures.
          </p>
        </div>

        {/* Sub-Metric Dimensional Analysis */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
            SUB-METRIC DIMENSIONAL ANALYSIS
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Metric 1 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#cbd5e1', marginBottom: '3px' }}>
                <span>Technical Precision</span>
                <span style={{ fontWeight: 700 }}>78 / 100</span>
              </div>
              <div style={{ height: '3px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ width: '78%', height: '100%', background: '#6366f1', borderRadius: '100px' }} />
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#cbd5e1', marginBottom: '3px' }}>
                <span>Architectural Trade-offs</span>
                <span style={{ fontWeight: 700 }}>75 / 100</span>
              </div>
              <div style={{ height: '3px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ width: '75%', height: '100%', background: '#6366f1', borderRadius: '100px' }} />
              </div>
            </div>

            {/* Metric 3 (Lagging) */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', marginBottom: '3px' }}>
                <span style={{ color: '#f87171', fontWeight: 600 }}>Problem Decomposition</span>
                <span style={{ color: '#f87171', fontWeight: 700 }}>72 / 100 (Lagging)</span>
              </div>
              <div style={{ height: '3px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: '#ef4444', borderRadius: '100px' }} />
              </div>
            </div>

            {/* Metric 4 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#cbd5e1', marginBottom: '3px' }}>
                <span>Executive Articulation</span>
                <span style={{ fontWeight: 700 }}>80 / 100</span>
              </div>
              <div style={{ height: '3px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ width: '80%', height: '100%', background: '#38bdf8', borderRadius: '100px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={onGeneratePlan}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '11px',
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
            <span>Generate AI Remediation Plan</span>
            <ArrowRight size={13} />
          </button>

          <button
            onClick={onLaunchMicroDrill}
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
            <Zap size={12} color="#fbbf24" />
            <span>Launch 10-Min Micro Drill (Screen #25)</span>
          </button>
        </div>
      </div>

      {/* 2. Recorded Exemplars */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Recorded Exemplars
          </h4>
          <ShieldCheck size={14} color="#38bdf8" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '10px 12px' }}>
            <span style={{ fontSize: '0.74rem', color: '#cbd5e1' }}>GIL Bypass Architecture</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38bdf8' }}>89.4</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '10px 12px' }}>
            <span style={{ fontSize: '0.74rem', color: '#cbd5e1' }}>Python Asyncio Event Loops</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#818cf8' }}>88.0</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '8px', padding: '10px 12px' }}>
            <span style={{ fontSize: '0.74rem', color: '#cbd5e1' }}>Asyncpg Pool Starvation Tuning</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#34d399' }}>86.5</span>
          </div>
        </div>
      </div>

      {/* 3. Calibrated Rubric Governance */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.015)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '12px',
          padding: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
          <Info size={12} color="#6366f1" />
          <span>CALIBRATED RUBRIC GOVERNANCE</span>
        </div>
        <p style={{ fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
          Skill scores reflect deterministic evaluations generated by multi-turn AI interviews according to Senior & Staff engineering rubric criteria. They do not constitute formal psychometric or permanent employment qualification assessments.
        </p>
      </div>
    </div>
  );
};
