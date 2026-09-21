import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ConfidenceTrackerSection: React.FC = () => {
  const points = [
    { label: 'Round 1 (68)', score: 68, x: 20, y: 110 },
    { label: 'Round 2 (72)', score: 72, x: 130, y: 95 },
    { label: 'Round 3 (76)', score: 76, x: 240, y: 78 },
    { label: 'Round 4 (79)', score: 79, x: 350, y: 65 },
    { label: 'Round 5 (82)', score: 82, x: 460, y: 48 }
  ];

  // SVG dimensions: viewBox 0 0 480 140
  const pathD = "M 20 110 C 80 102, 110 97, 130 95 C 190 88, 220 80, 240 78 C 300 72, 330 67, 350 65 C 410 57, 440 50, 460 48";
  const areaD = `${pathD} L 460 135 L 20 135 Z`;

  return (
    <section style={{ padding: '60px 0 70px', position: 'relative' }}>
      <div className="container">
        {/* Main Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '44px',
          alignItems: 'center',
          backdropFilter: 'blur(16px)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Left Column: Compound Growth Copy & Stats */}
          <div>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#34d399',
              display: 'block',
              marginBottom: '12px'
            }}>
              COMPOUND GROWTH
            </span>

            <h2 style={{
              fontSize: 'clamp(28px, 3.8vw, 40px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '14px'
            }}>
              Track Measurable Confidence Across Rounds
            </h2>

            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '480px'
            }}>
              Candidates who complete 4 or more 5–question sessions experience an average +14 point readiness boost and a 42% reduction in filler word density.
            </p>

            {/* Score Baseline vs Current Gain Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                  68
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Baseline (Round 1)
                </div>
              </div>

              <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                <ArrowRight size={20} />
              </div>

              <div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                  82
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Current (Round 5)
                </div>
              </div>

              <span style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#34d399',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '4px 12px',
                borderRadius: '9999px',
                marginLeft: '8px'
              }}>
                +14 pts Gain
              </span>
            </div>
          </div>

          {/* Right Column: Readiness Score Trajectory Chart */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '18px',
            padding: '24px',
            position: 'relative'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11px',
              marginBottom: '20px'
            }}>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                Readiness Score Trajectory (Last 5 Sessions)
              </span>
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>
                Target: 85 (Staff Benchmark)
              </span>
            </div>

            {/* SVG Line Chart */}
            <div style={{ width: '100%', height: '140px', position: 'relative' }}>
              <svg viewBox="0 0 480 140" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="scoreAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Target benchmark horizontal dashed line at y=40 */}
                <line x1="10" y1="36" x2="470" y2="36" stroke="rgba(56, 189, 248, 0.25)" strokeDasharray="3 3" />

                {/* Area Gradient Fill */}
                <path d={areaD} fill="url(#scoreAreaGradient)" />

                {/* Line Path */}
                <path d={pathD} fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />

                {/* Data Points */}
                {points.slice(0, 4).map((p, idx) => (
                  <circle
                    key={idx}
                    cx={p.x}
                    cy={p.y}
                    r="4"
                    fill="#a5b4fc"
                    stroke="var(--bg-surface)"
                    strokeWidth="2"
                  />
                ))}

                {/* Final Active Glowing Data Point */}
                <circle
                  cx={points[4].x}
                  cy={points[4].y}
                  r="7"
                  fill="var(--text-main)"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.8))' }}
                />
              </svg>
            </div>

            {/* X-Axis Labels */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginTop: '12px',
              paddingTop: '10px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              {points.map((p, idx) => {
                const isLast = idx === points.length - 1;
                return (
                  <span
                    key={idx}
                    style={{
                      color: isLast ? '#38bdf8' : 'var(--text-muted)',
                      fontWeight: isLast ? 700 : 500
                    }}
                  >
                    {p.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
