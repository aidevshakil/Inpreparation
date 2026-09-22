import React, { useState } from 'react';
import { CheckCircle2, Pin, ArrowRight } from 'lucide-react';

interface TrackSimulationsProps {
  onStartPractice: (role?: string) => void;
}

export const TrackSimulationsSection: React.FC<TrackSimulationsProps> = ({ onStartPractice }) => {
  const tracks = [
    {
      id: 'ai-ml',
      role: 'AI / Machine Learning Engineer',
      badge: 'Strong Match',
      badgeColor: '#a5b4fc',
      badgeBg: 'rgba(99, 102, 241, 0.15)',
      meta: '5 Questions • Intermediate / Senior • ~15 mins',
      lastScore: '82 / 100',
      reportId: 'Session #492 Diagnostic Report',
      overallScore: 82,
      progressText: 'Strong Progress (+7 pts)',
      progressDesc: 'Candidate demonstrated commanding architectural knowledge. Minor pacing optimization advised during complex sub-system trade-offs.',
      competencies: [
        { label: 'Technical', val: '86%', pct: 86, color: '#a78bfa' },
        { label: 'Communication', val: '84%', pct: 84, color: '#c084fc' },
        { label: 'Speech Pacing', val: '81%', pct: 81, color: '#38bdf8' },
        { label: 'Presentation (CV)', val: '85%', pct: 85, color: '#34d399' }
      ],
      strengthTitle: 'Top Strength: Technical Precision',
      strengthText: 'Correctly differentiated async event loops from multi-threading with zero conceptual gaps.',
      focusTitle: 'Key Focus Lever: Step-by-Step Framing',
      focusText: 'Anchor high-level constraints before diving directly into micro-benchmarks or code examples.'
    },
    {
      id: 'python-backend',
      role: 'Senior Python Backend Developer',
      badge: 'Great Match',
      badgeColor: '#38bdf8',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      meta: '5 Questions • Intermediate • ~14 mins',
      lastScore: '79 / 100',
      reportId: 'Session #488 Diagnostic Report',
      overallScore: 79,
      progressText: 'Steady Momentum (+4 pts)',
      progressDesc: 'Strong ORM query optimization insights and API contracts. Recommended deeper rationale on message queue consumer idempotency.',
      competencies: [
        { label: 'Technical', val: '83%', pct: 83, color: '#a78bfa' },
        { label: 'Communication', val: '80%', pct: 80, color: '#c084fc' },
        { label: 'Speech Pacing', val: '85%', pct: 85, color: '#38bdf8' },
        { label: 'Presentation (CV)', val: '88%', pct: 88, color: '#34d399' }
      ],
      strengthTitle: 'Top Strength: REST API & DB Indexing',
      strengthText: 'Clear analysis of indexing composite keys for high write throughput.',
      focusTitle: 'Key Focus Lever: Idempotency Guarantees',
      focusText: 'Explain retry strategies and deduplication keys before concluding distributed worker design.'
    },
    {
      id: 'systems-architect',
      role: 'Distributed Systems Architect',
      badge: 'Good Match',
      badgeColor: '#34d399',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      meta: '5 Questions • Advanced / Staff • ~17 mins',
      lastScore: '75 / 100',
      reportId: 'Session #476 Diagnostic Report',
      overallScore: 75,
      progressText: 'Staff-Calibrated (+6 pts)',
      progressDesc: 'Solid grasp of consensus algorithms and replication lag. Recommend earlier clarification of SLA requirements and p99 budgets.',
      competencies: [
        { label: 'Technical', val: '88%', pct: 88, color: '#a78bfa' },
        { label: 'Communication', val: '76%', pct: 76, color: '#c084fc' },
        { label: 'Speech Pacing', val: '78%', pct: 78, color: '#38bdf8' },
        { label: 'Presentation (CV)', val: '82%', pct: 82, color: '#34d399' }
      ],
      strengthTitle: 'Top Strength: Partition Tolerance & Quorum',
      strengthText: 'Accurately articulated Raft consensus leader election and split-brain safeguards.',
      focusTitle: 'Key Focus Lever: Quantitative Capacity Planning',
      focusText: 'Calculate storage growth and network ingress estimates within the first 3 minutes.'
    }
  ];

  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const active = tracks[selectedTrackIndex];

  return (
    <section id="simulations" style={{ padding: '80px 0 100px', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Left Column: Heading & 3 Stacked Track Cards */}
          <div>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#818cf8',
              display: 'block',
              marginBottom: '12px'
            }}>
              SMART PERSONALIZATION
            </span>

            <h2 style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.03em',
              lineHeight: 1.18,
              marginBottom: '14px'
            }}>
              Targeted Simulations Matched to Your Exact Stack
            </h2>

            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '520px'
            }}>
              Inprep AI calibrates question difficulty and technical domain directly to your seniority level and preferred architecture.
            </p>

            {/* 3 Interactive Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {tracks.map((t, idx) => {
                const isSelected = selectedTrackIndex === idx;
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTrackIndex(idx)}
                    style={{
                      background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                      border: isSelected ? '1px solid var(--primary-color)' : '1px solid var(--border-subtle)',
                      borderRadius: '16px',
                      padding: '20px 22px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 8px 30px rgba(99, 102, 241, 0.2)' : 'none'
                    }}
                    className="glow-card-hover"
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px'
                    }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                        {t.role}
                      </h4>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: t.badgeColor,
                        background: t.badgeBg,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        border: `1px solid ${t.badgeColor}30`
                      }}>
                        {t.badge}
                      </span>
                    </div>

                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                      {t.meta}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      paddingTop: '10px',
                      borderTop: '1px solid var(--border-subtle)'
                    }}>
                      <span style={{ color: 'var(--text-muted)' }}>
                        Last Session Score: <strong style={{ color: 'var(--text-main)' }}>{t.lastScore}</strong>
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartPractice(t.role);
                        }}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#38bdf8',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Launch Session ▷</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Scorecard Diagnostic Report */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            position: 'relative'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginBottom: '4px'
                }}>
                  EVALUATION SCORECARD
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  {active.reportId}
                </h3>
              </div>

              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#34d399',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '3px 10px',
                borderRadius: '9999px'
              }}>
                Completed
              </span>
            </div>

            {/* Score circle gauge + Summary */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '26px'
            }}>
              {/* Circular gauge */}
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                border: '3px solid #6366f1',
                background: 'var(--bg-surface)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.35)'
              }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                  {active.overallScore}
                </span>
                <span style={{ fontSize: '9px', color: 'var(--primary-color)', textTransform: 'uppercase', fontWeight: 700, marginTop: '2px' }}>
                  / 100
                </span>
              </div>

              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#34d399', marginBottom: '4px' }}>
                  {active.progressText}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {active.progressDesc}
                </div>
              </div>
            </div>

            {/* 4 Competency Bars (2x2 Grid) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px 24px',
              marginBottom: '26px'
            }}>
              {active.competencies.map((c, cIdx) => (
                <div key={cIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{c.label}</span>
                    <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{c.val}</span>
                  </div>
                  <div style={{ width: '100%', height: '5px', background: 'var(--border-subtle)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${c.pct}%`,
                      height: '100%',
                      background: c.color,
                      borderRadius: '9999px',
                      boxShadow: `0 0 8px ${c.color}60`
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Structured Feedback Boxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Top Strength */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '12px',
                padding: '12px 14px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#34d399', marginBottom: '4px' }}>
                  <CheckCircle2 size={13} color="#34d399" />
                  <span>{active.strengthTitle}</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {active.strengthText}
                </div>
              </div>

              {/* Key Focus Lever */}
              <div style={{
                background: 'rgba(168, 85, 247, 0.06)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '12px',
                padding: '12px 14px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#c084fc', marginBottom: '4px' }}>
                  <Pin size={13} color="#c084fc" />
                  <span>{active.focusTitle}</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {active.focusText}
                </div>
              </div>
            </div>

            <button
              onClick={() => onStartPractice(active.role)}
              style={{
                width: '100%',
                marginTop: '20px',
                padding: '12px',
                background: 'var(--primary-color)',
                color: 'var(--bg-main)',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Sign Up to Practice {active.role}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
