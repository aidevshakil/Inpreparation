import React, { useState } from 'react';

interface TrendPoint {
  date: string;
  score: number;
  cx: number;
  cy: number;
}

export const CommunicationTrendCard: React.FC = () => {
  const [selectedPointIndex, setSelectedPointIndex] = useState<number>(5); // Oct 27 default

  // Coordinates mapping (Viewbox 600 x 200, Y: 70 -> y=170, 80 -> y=105, 90 -> y=40)
  // formula: y = 170 - ((score - 70) / 20) * 130
  const points: TrendPoint[] = [
    { date: 'Oct 10', score: 76, cx: 50, cy: 131 },
    { date: 'Oct 14', score: 78, cx: 150, cy: 118 },
    { date: 'Oct 18', score: 81, cx: 250, cy: 98 },
    { date: 'Oct 21', score: 80, cx: 350, cy: 105 },
    { date: 'Oct 24', score: 82, cx: 450, cy: 92 },
    { date: 'Oct 27', score: 86, cx: 550, cy: 66 },
  ];

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`).join(' ');
  const areaPath = `${linePath} L 550 185 L 50 185 Z`;
  const baselineY = 105; // 80 target

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header + Legend */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '20px',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Communication Score Trend & Cadence
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '2px 0 0 0' }}>
            Progress across latest 6 calibrated interview simulations.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: '0.72rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}>
            <span style={{ width: 14, height: 2, background: '#38bdf8', display: 'inline-block' }} />
            <span>Score Cadence</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
            <span style={{ width: 14, height: 2, borderTop: '2px dashed #64748b', display: 'inline-block' }} />
            <span>Staff Target (80.0)</span>
          </div>
        </div>
      </div>

      {/* SVG Chart */}
      <div style={{ width: '100%', overflowX: 'auto', marginBottom: '20px' }}>
        <svg viewBox="0 0 600 200" style={{ width: '100%', height: 'auto', minWidth: '460px', overflow: 'visible' }}>
          <defs>
            <linearGradient id="commTrendGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.25)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0.0)" />
            </linearGradient>
            <linearGradient id="commLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="60%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="40" y1="50" x2="580" y2="50" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
          <line x1="40" y1={baselineY} x2="580" y2={baselineY} stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="160" x2="580" y2="160" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />

          {/* Area */}
          <path d={areaPath} fill="url(#commTrendGrad)" />

          {/* Line */}
          <path d={linePath} fill="none" stroke="url(#commLineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Data Points */}
          {points.map((p, idx) => {
            const isSelected = selectedPointIndex === idx;
            return (
              <g key={p.date} onClick={() => setSelectedPointIndex(idx)} style={{ cursor: 'pointer' }}>
                {isSelected && (
                  <circle cx={p.cx} cy={p.cy} r="10" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="1.5" />
                )}
                <circle cx={p.cx} cy={p.cy} r="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
                <text
                  x={p.cx}
                  y={p.cy - 10}
                  textAnchor="middle"
                  fill={isSelected ? '#ffffff' : '#cbd5e1'}
                  fontSize="10"
                  fontWeight={isSelected ? '800' : '600'}
                >
                  {p.score}
                </text>
                <text x={p.cx} y="185" textAnchor="middle" fill="#64748b" fontSize="9.5" fontWeight="500">
                  {p.date}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 3 Bottom Metrics Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div>
          <div style={{ fontSize: '0.68rem', color: '#64748b', marginBottom: '2px' }}>
            Recent 3-Session Avg
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>83.3</span>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>/ 100</span>
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#38bdf8', marginTop: '2px' }}>
            Consistent upward climb
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.68rem', color: '#64748b', marginBottom: '2px' }}>
            Trajectory Velocity
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8' }}>
            +5.8 pts
          </div>
          <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
            Across 18 calendar days
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.68rem', color: '#64748b', marginBottom: '2px' }}>
            Answer Structure Adherence
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#a5b4fc' }}>
            82% BLUF
          </div>
          <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
            Bottom-Line Up Front standard
          </div>
        </div>
      </div>
    </div>
  );
};
