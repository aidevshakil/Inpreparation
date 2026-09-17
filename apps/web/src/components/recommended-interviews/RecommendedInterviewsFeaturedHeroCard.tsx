import React, { useState } from 'react';
import { ArrowRight, Bookmark, Sparkles, FileText, CheckCircle2, Shield, Activity } from 'lucide-react';

interface RecommendedInterviewsFeaturedHeroCardProps {
  onStartSimulation?: (track: string) => void;
  onViewRubric?: (track: string) => void;
  targetRole?: string;
  recommendationsData?: any;
}

export const RecommendedInterviewsFeaturedHeroCard: React.FC<RecommendedInterviewsFeaturedHeroCardProps> = ({
  onStartSimulation,
  onViewRubric,
  targetRole = 'Staff Backend Architect',
  recommendationsData,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const skills = recommendationsData?.featuredSkills || [
    'Go Runtime',
    'Apache Kafka',
    'Distributed Consensus',
    'CAP Theorem',
    'PostgreSQL Partitioning',
    'Raft / Paxos',
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(129, 140, 248, 0.4)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '28px',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15)',
      }}
    >
      {/* Top Header Tags */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 800,
              letterSpacing: '0.6px',
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.25)',
              color: '#c084fc',
              border: '1px solid rgba(129, 140, 248, 0.45)',
              textTransform: 'uppercase',
            }}
          >
            FEATURED RECOMMENDATION
          </span>

          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 700,
              padding: '3px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
            }}
          >
            96% High Match • Best Starting Point
          </span>
        </div>

        <span style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'monospace' }}>
          ID: SIM-ARCH-16
        </span>
      </div>

      {/* 2-Column Split: Content (Left) & Orb Visualization (Right) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 1fr)',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        {/* Left Info Column */}
        <div>
          <div style={{ fontSize: '0.66rem', color: '#818cf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
            STAFF IC / SENIOR SYSTEMS ARCHITECT
          </div>

          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>
            {targetRole}
          </h2>

          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.55, margin: '0 0 16px 0' }}>
            {recommendationsData?.featuredDescription || 'Practice articulating complex high-concurrency trade-offs, Raft consensus split-brain mitigation, multi-datacenter data consistency, and cross-functional leadership under ambiguous operational constraints.'}
          </p>

          {/* Parameter Grid Matrix */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '12px',
              marginBottom: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', textTransform: 'uppercase' }}>Question Count</div>
              <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 700 }}>6 Questions</div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', textTransform: 'uppercase' }}>Difficulty</div>
              <div style={{ fontSize: '0.78rem', color: '#c084fc', fontWeight: 700 }}>Advanced (L6+)</div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', textTransform: 'uppercase' }}>Est. Duration</div>
              <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 700 }}>18-20 Mins</div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', textTransform: 'uppercase' }}>Response Mode</div>
              <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700 }}>Camera + Voice</div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', textTransform: 'uppercase' }}>Camera</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Optional (Framing)</div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', textTransform: 'uppercase' }}>Microphone</div>
              <div style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 700 }}>Required (Speech)</div>
            </div>
          </div>

          {/* Skills Evaluated */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
              SKILLS EVALUATED
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {skills.map((s: string) => (
                <span
                  key={s}
                  style={{
                    fontSize: '0.68rem',
                    color: '#cbd5e1',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Why Recommended Callout */}
          <div
            style={{
              backgroundColor: 'rgba(99, 102, 241, 0.06)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '10px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} style={{ color: '#818cf8', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              <strong style={{ color: '#a5b4fc' }}>Why this is recommended for you:</strong> Your verified CV lists 6+ years designing 120k/sec pipelines at FinScale Labs, and your spoken intake highlighted consensus trade-offs. This simulation tests staff-level depth without trick questions.
            </p>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onStartSimulation && onStartSimulation(targetRole)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 24px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
                transition: 'all 0.18s ease',
              }}
            >
              <span>Start Simulation (6 Questions)</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => onViewRubric && onViewRubric(targetRole)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '11px 18px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                color: '#cbd5e1',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <FileText size={13} />
              <span>View Full Rubric Details</span>
            </button>

            <button
              onClick={() => setIsSaved(!isSaved)}
              title={isSaved ? 'Saved to Bookmarks' : 'Save Track'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: isSaved ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: isSaved ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                color: isSaved ? '#c084fc' : '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Bookmark size={15} fill={isSaved ? '#c084fc' : 'none'} />
            </button>
          </div>
        </div>

        {/* Right Live Synthesis Orb Visual */}
        <div
          style={{
            backgroundColor: '#040711',
            borderRadius: '16px',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '260px',
            overflow: 'hidden',
          }}
        >
          {/* Header row in visual */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '14px',
              right: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.62rem',
              color: '#64748b',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#38bdf8' }}>
              <Activity size={11} />
              <span>LIVE SYNTHESIS</span>
            </span>
            <span style={{ color: '#34d399', fontWeight: 600 }}>READY</span>
          </div>

          {/* Central Animated Orb Graphic */}
          <div
            style={{
              position: 'relative',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '20px 0 16px 0',
            }}
          >
            {/* Outer Ring */}
            <div
              style={{
                position: 'absolute',
                width: '118px',
                height: '118px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(129, 140, 248, 0.4)',
                animation: 'spin 14s linear infinite',
              }}
            />

            {/* Inner Ring */}
            <div
              style={{
                position: 'absolute',
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                border: '1.5px solid rgba(168, 85, 247, 0.45)',
                animation: 'spin 9s linear infinite reverse',
              }}
            />

            {/* Glowing Core */}
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 0 24px rgba(168, 85, 247, 0.7)',
              }}
            >
              <Sparkles size={24} />
            </div>
          </div>

          {/* Concurrency Metric Card */}
          <div
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '8px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '85%',
              marginBottom: '12px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.58rem', color: '#64748b', textTransform: 'uppercase' }}>Concurrency Target</div>
              <div style={{ fontSize: '0.74rem', color: '#f8fafc', fontWeight: 700 }}>250k QPS / SEC</div>
            </div>

            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: '#34d399',
              }}
            >
              CALIBRATED
            </span>
          </div>

          {/* Bottom Protocol Status */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.64rem',
              color: '#94a3b8',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={10} style={{ color: '#38bdf8' }} />
              <span>Audio Streaming Active</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Shield size={10} style={{ color: '#10b981' }} />
              <span>Deterministic Rubric</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
