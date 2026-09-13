import React, { useState } from 'react';
import { Edit3, Info, Maximize2 } from 'lucide-react';

interface ProfileAnalysisGlanceCardProps {
  onEditParameters?: () => void;
  onOpenRadarFocus?: () => void;
}

export const ProfileAnalysisGlanceCard: React.FC<ProfileAnalysisGlanceCardProps> = ({
  onEditParameters,
  onOpenRadarFocus,
}) => {
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);

  const radarData = [
    { label: 'Dist. Consensus', value: 88 },
    { label: 'High-Throughput IO', value: 92 },
    { label: 'CAP Trade-Offs', value: 82 },
    { label: 'System Resilience', value: 85 },
    { label: 'Staff Mentorship', value: 76 },
    { label: 'Architecture Reviews', value: 90 },
  ];

  // Radar geometry calculations
  const size = 260;
  const center = size / 2;
  const radius = 95;
  const totalAxes = radarData.length;

  const getCoordinates = (index: number, val: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (val / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const polygonPoints = radarData
    .map((d, i) => {
      const { x, y } = getCoordinates(i, d.value);
      return `${x},${y}`;
    })
    .join(' ');

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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        {/* Left Sub-Panel */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              Your Career Profile at a Glance
            </h2>

            <button
              onClick={onEditParameters}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 10px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                color: '#cbd5e1',
                fontSize: '0.72rem',
                cursor: 'pointer',
              }}
            >
              <Edit3 size={11} />
              <span>Edit Profile Parameters</span>
            </button>
          </div>

          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
            Synthesized baseline across 6 years experience, target architecture domains, and technical leadership dimensions.
          </p>

          {/* 4 Metric Boxes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginBottom: '14px',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                padding: '12px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                CURRENT ROLE
              </div>
              <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 700 }}>
                Senior Backend &amp; Distributed Systems
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(129, 140, 248, 0.45)',
                borderRadius: '10px',
                padding: '12px',
                boxShadow: '0 0 14px rgba(99, 102, 241, 0.15)',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#a5b4fc', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                TARGET ROLE
              </div>
              <div style={{ fontSize: '0.82rem', color: '#ffffff', fontWeight: 800 }}>
                Staff Backend &amp; Systems Architect (L6+)
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                padding: '12px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                EXPERIENCE BAND
              </div>
              <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 700 }}>
                6+ Years • Tier-1 FinTech &amp; Cloud Infra
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                padding: '12px',
              }}
            >
              <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                CORE ARCHITECTURAL FOCUS
              </div>
              <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 700 }}>
                High-Throughput Distributed &amp; Consensus
              </div>
            </div>
          </div>

          {/* Bottom Primary Calibration Level Callout */}
          <div
            style={{
              backgroundColor: 'rgba(99, 102, 241, 0.06)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '10px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}
          >
            <Info size={14} style={{ color: '#818cf8', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              <strong style={{ color: '#c084fc' }}>PRIMARY CALIBRATION LEVEL: Staff (L6)</strong> • Calibrates mock drills around large-scale data distribution, CAP trade-off articulation, and cross-team architectural reviews.
            </p>
          </div>
        </div>

        {/* Right Sub-Panel: 6-Axis Competency Radar Chart */}
        <div
          style={{
            backgroundColor: '#040711',
            borderRadius: '14px',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Top-right Expand Button */}
          <button
            onClick={onOpenRadarFocus}
            title="Expand Radar Chart"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <Maximize2 size={14} />
          </button>

          <svg width={size} height={size} style={{ overflow: 'visible' }}>
            <defs>
              <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
              </radialGradient>
            </defs>

            {/* Grid Rings (25%, 50%, 75%, 100%) */}
            {[0.25, 0.5, 0.75, 1.0].map((level) => {
              const points = radarData
                .map((_, i) => {
                  const { x, y } = getCoordinates(i, level * 100);
                  return `${x},${y}`;
                })
                .join(' ');
              return (
                <polygon
                  key={level}
                  points={points}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                  strokeDasharray={level === 1.0 ? 'none' : '2,2'}
                />
              );
            })}

            {/* Axis Lines */}
            {radarData.map((_, i) => {
              const { x, y } = getCoordinates(i, 100);
              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Data Polygon Fill */}
            <polygon
              points={polygonPoints}
              fill="url(#radarGlow)"
              stroke="#818cf8"
              strokeWidth="2"
            />

            {/* Vertex Dots & Tooltips */}
            {radarData.map((d, i) => {
              const { x, y } = getCoordinates(i, d.value);
              const isHovered = hoveredAxis === i;

              return (
                <g
                  key={i}
                  onMouseEnter={() => setHoveredAxis(i)}
                  onMouseLeave={() => setHoveredAxis(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 5 : 3.5}
                    fill={isHovered ? '#34d399' : '#c084fc'}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}

            {/* Axis Text Labels */}
            {radarData.map((d, i) => {
              const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
              const textR = radius + 18;
              const tx = center + textR * Math.cos(angle);
              const ty = center + textR * Math.sin(angle);

              return (
                <text
                  key={i}
                  x={tx}
                  y={ty}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8.5"
                  fontWeight={hoveredAxis === i ? '700' : '600'}
                  fill={hoveredAxis === i ? '#38bdf8' : '#cbd5e1'}
                >
                  {d.label} ({d.value}%)
                </text>
              );
            })}
          </svg>

          <div style={{ fontSize: '0.66rem', color: '#64748b', marginTop: '6px' }}>
            6-Vector Baseline Calibration Radar
          </div>
        </div>
      </div>
    </div>
  );
};
