import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export const PresentationTrajectoryCard: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // 4 calibrated sessions:
  // SIM-8821: 76
  // SIM-7940: 79
  // SIM-7940: 84
  // SIM-6510 (Latest): 85
  // Chart bounds: Width: 680, Height: 230
  // Score range: 65 to 95
  // Baseline line: 80.0 -> Y: 200 - ((80 - 65) / 30) * 160 = 200 - 80 = 120
  // Y = 200 - ((score - 65) / 30) * 160
  // Score 76 -> Y = 200 - (11/30)*160 = 141.3
  // Score 79 -> Y = 200 - (14/30)*160 = 125.3
  // Score 84 -> Y = 200 - (19/30)*160 = 98.7
  // Score 85 -> Y = 200 - (20/30)*160 = 93.3

  const coords = [
    { x: 90, y: 141, score: 76, label: 'SIM-8821' },
    { x: 260, y: 125, score: 79, label: 'SIM-7940' },
    { x: 430, y: 99, score: 84, label: 'SIM-7940' },
    { x: 600, y: 93, score: 85, label: 'SIM-6510 (Latest)', isLatest: true },
  ];

  const splinePath = 'M 90 141 C 175 141, 175 125, 260 125 C 345 125, 345 99, 430 99 C 515 99, 515 93, 600 93';
  const splineArea = `${splinePath} L 600 200 L 90 200 Z`;

  return (
    <div
      style={{
        backgroundColor: '#0d1322',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '22px 24px',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Presentation Trajectory &amp; Technical Trend
            </h2>
            <span
              style={{
                padding: '2px 7px',
                borderRadius: '5px',
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                color: '#c084fc',
                fontSize: '0.66rem',
                fontWeight: 700,
              }}
            >
              4 dots
            </span>
          </div>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
            Optical score progression calibrated against Staff engineering baseline (80.0)
          </p>
        </div>

        {/* 3 Summary Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <div
            style={{
              padding: '4px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.7rem',
              color: '#cbd5e1',
            }}
          >
            <span style={{ color: '#64748b' }}>Overall 3-Sess Avg: </span>
            <strong style={{ color: '#38bdf8' }}>83.4</strong>
          </div>

          <div
            style={{
              padding: '4px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.7rem',
              color: '#cbd5e1',
            }}
          >
            <span style={{ color: '#64748b' }}>Alignment: </span>
            <strong style={{ color: '#34d399' }}>91%</strong>
          </div>

          <div
            style={{
              padding: '4px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.7rem',
              color: '#cbd5e1',
            }}
          >
            <span style={{ color: '#64748b' }}>Framing Index: </span>
            <strong style={{ color: '#c084fc' }}>88/100</strong>
          </div>
        </div>
      </div>

      {/* SVG Chart Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#090d18',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '16px 12px 10px 12px',
          boxSizing: 'border-box',
        }}
      >
        <svg
          viewBox="0 0 700 220"
          style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="presentationAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.28)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.0)" />
            </linearGradient>

            <filter id="presentationGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid lines */}
          <line x1="50" y1="200" x2="650" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="50" y1="120" x2="650" y2="120" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="50" y1="40" x2="650" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          {/* Target Baseline Dotted Line at 80.0 */}
          <line
            x1="50"
            y1="120"
            x2="650"
            y2="120"
            stroke="rgba(56, 189, 248, 0.4)"
            strokeDasharray="4 4"
            strokeWidth="1.4"
          />
          <text
            x="642"
            y="114"
            textAnchor="end"
            fill="#38bdf8"
            fontSize="10"
            fontWeight="700"
            opacity="0.85"
          >
            Target Staff Baseline 80.0
          </text>

          {/* Area under curve */}
          <path d={splineArea} fill="url(#presentationAreaGrad)" />

          {/* Stroke path */}
          <path
            d={splinePath}
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            filter="url(#presentationGlow)"
          />

          {/* Points */}
          {coords.map((c, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <g
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Outer halo */}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isHovered ? 8 : 6}
                  fill="rgba(168, 85, 247, 0.3)"
                  stroke="#c084fc"
                  strokeWidth="2"
                />
                {/* Inner dot */}
                <circle cx={c.x} cy={c.y} r={isHovered ? 4 : 3} fill="#ffffff" />

                {/* Score label above dot */}
                <text
                  x={c.x}
                  y={c.y - 12}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="800"
                >
                  {c.score}{c.isLatest ? ' ★' : ''}
                </text>

                {/* X-axis Session label */}
                <text
                  x={c.x}
                  y={216}
                  textAnchor="middle"
                  fill={c.isLatest ? '#c084fc' : '#64748b'}
                  fontSize="9.5"
                  fontWeight={c.isLatest ? '700' : '500'}
                >
                  {c.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Trajectory Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={14} style={{ color: '#34d399' }} />
          <span style={{ fontSize: '0.74rem', color: '#34d399', fontWeight: 700 }}>
            Steady +9.0 pt gain across 4 camera sessions
          </span>
        </div>

        <span style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.4px' }}>
          ALL OPTICAL CALIBRATED AGAINST INPREP TECHNICAL VIDEO v2.4
        </span>
      </div>
    </div>
  );
};
