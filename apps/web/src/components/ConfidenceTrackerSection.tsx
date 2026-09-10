import React, { useState } from 'react';

export const ConfidenceTrackerSection: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const sessions = [
    { session: 'Round 1', score: 58, focus: 'Initial Assessment Baseline' },
    { session: 'Round 2', score: 66, focus: 'Filler Word Reduction' },
    { session: 'Round 3', score: 72, focus: 'STAR Structure Drills' },
    { session: 'Round 4', score: 78, focus: 'Edge-Case Architecture' },
    { session: 'Round 5', score: 84, focus: 'Tone & Pacing Mastery' },
    { session: 'Round 6', score: 89, focus: 'Stress & Curveball Drills' },
    { session: 'Round 7', score: 92, focus: 'Executive Presence Polish' },
    { session: 'Round 8', score: 96, focus: 'Offer-Ready Simulation' }
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #111726 0%, #0c0f18 100%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '24px',
          padding: '48px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
        }}>
          {/* Left Column: Metrics & Heading */}
          <div>
            <span className="badge-pill badge-emerald" style={{ marginBottom: '16px' }}>
              MEASURABLE RETENTION & PROGRESS
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              Track Measurable Confidence Across Rounds
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '32px' }}>
              Candidates who complete 5+ AI interview simulations show a 38% reduction in speech anxiety and a 3.2x higher offer acceptance rate.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#10b981', letterSpacing: '-0.02em' }}>
                  +38%
                </div>
                <div style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginTop: '2px' }}>
                  Average Score Increase
                </div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Over 6 practice rounds</div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#818cf8', letterSpacing: '-0.02em' }}>
                  3.2x
                </div>
                <div style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginTop: '2px' }}>
                  Higher Offer Rate
                </div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>At Tier-1 tech companies</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Progress Curve Chart */}
          <div style={{
            background: '#090d15',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '18px',
            padding: '24px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                Candidate Growth Trajectory
              </span>
              <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '3px 8px', borderRadius: '6px' }}>
                ● +38 pts Growth
              </span>
            </div>

            {/* SVG Line Chart */}
            <div style={{ width: '100%', height: '180px', position: 'relative' }}>
              <svg viewBox="0 0 500 160" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                {/* Area under curve */}
                <path
                  d="M 20 120 Q 150 95, 250 65 T 480 20 L 480 150 L 20 150 Z"
                  fill="url(#chartGradient)"
                />

                {/* Main Curve Line */}
                <path
                  d="M 20 120 Q 150 95, 250 65 T 480 20"
                  fill="none"
                  stroke="url(#chartLineGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>

                {/* Interactive Points */}
                {sessions.map((pt, idx) => {
                  const x = 20 + (idx * (460 / 7));
                  // calculate y roughly corresponding to curve
                  const y = 140 - ((pt.score - 50) * 2.3);
                  return (
                    <g key={idx} onMouseEnter={() => setHoveredPoint(idx)} onMouseLeave={() => setHoveredPoint(null)} style={{ cursor: 'pointer' }}>
                      <circle
                        cx={x}
                        cy={y}
                        r={hoveredPoint === idx ? 7 : 4.5}
                        fill="#fff"
                        stroke="#6366f1"
                        strokeWidth="3"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Hover details / active session info */}
            <div style={{
              marginTop: '16px',
              padding: '10px 14px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '12px'
            }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Selected Milestone: </span>
                <span style={{ color: '#f8fafc', fontWeight: 700 }}>
                  {hoveredPoint !== null ? sessions[hoveredPoint].session : 'Round 8 (Final)'}
                </span>
                <span style={{ color: '#64748b', marginLeft: '6px' }}>
                  ({hoveredPoint !== null ? sessions[hoveredPoint].focus : 'Offer-Ready Simulation'})
                </span>
              </div>
              <div style={{ color: '#67e8f9', fontWeight: 800 }}>
                {hoveredPoint !== null ? `${sessions[hoveredPoint].score}% Score` : '96% Score'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
