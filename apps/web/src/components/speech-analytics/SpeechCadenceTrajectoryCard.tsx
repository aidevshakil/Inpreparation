import React, { useState } from 'react';

export const SpeechCadenceTrajectoryCard: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Chart coordinates mapping (Width: 680, Height: 240)
  // WPM Range: 110 to 170
  // Optimal band: 130 to 160
  // Y = 200 - ((wpm - 110) / (170 - 110)) * 160
  // When wpm = 110 -> Y = 200
  // When wpm = 130 -> Y = 146.67
  // When wpm = 160 -> Y = 66.67
  // When wpm = 170 -> Y = 40
  const bandTopY = 66; // 160 WPM
  const bandBottomY = 146; // 130 WPM

  const coords = [
    { x: 70, y: 141, wpm: 132, name: 'SIM-8821' },
    { x: 215, y: 125, wpm: 138, name: 'SIM-8821' },
    { x: 360, y: 109, wpm: 144, name: 'SIM-7940' },
    { x: 505, y: 130, wpm: 136, name: 'SIM-7940' },
    { x: 650, y: 98, wpm: 148, name: 'SIM-6510 Latest' },
  ];

  // Smooth cubic spline path
  const splinePath = 'M 70 141 C 142 141, 142 125, 215 125 C 287 125, 287 109, 360 109 C 432 109, 432 130, 505 130 C 577 130, 577 98, 650 98';
  const splineArea = `${splinePath} L 650 200 L 70 200 Z`;

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
        gap: '20px',
      }}
    >
      {/* Header & Legend */}
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
          <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Speaking Rate Cadence &amp; Trajectory
          </h2>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
            Cadence &amp; pause measured across all speaking sessions calibrated in voice-enabled interview sessions
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.72rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '16px',
                height: '3px',
                backgroundColor: '#38bdf8',
                borderRadius: '2px',
              }}
            />
            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Actual WPM</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '16px',
                height: '0',
                borderTop: '2px dashed rgba(99, 102, 241, 0.7)',
              }}
            />
            <span style={{ color: '#94a3b8' }}>Optimal Band (130-160)</span>
          </div>
        </div>
      </div>

      {/* SVG Trajectory Chart */}
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
          viewBox="0 0 720 220"
          style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
        >
          <defs>
            {/* Shaded Optimal Band Pattern / Gradient */}
            <linearGradient id="optimalBandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.12)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.06)" />
            </linearGradient>

            {/* Line Glow Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Area Fill Gradient */}
            <linearGradient id="curveAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.2)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0.0)" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="40" y1="200" x2="680" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="40" y1="146" x2="680" y2="146" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="40" y1="66" x2="680" y2="66" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          {/* Optimal Target Band Rect */}
          <rect
            x="40"
            y={bandTopY}
            width="640"
            height={bandBottomY - bandTopY}
            fill="url(#optimalBandGrad)"
            rx="4"
          />

          {/* Optimal Band Border Dotted Lines */}
          <line
            x1="40"
            y1={bandTopY}
            x2="680"
            y2={bandTopY}
            stroke="rgba(56, 189, 248, 0.35)"
            strokeDasharray="4 4"
            strokeWidth="1.2"
          />
          <line
            x1="40"
            y1={bandBottomY}
            x2="680"
            y2={bandBottomY}
            stroke="rgba(56, 189, 248, 0.35)"
            strokeDasharray="4 4"
            strokeWidth="1.2"
          />

          {/* Band Threshold Text Labels */}
          <text
            x="48"
            y={bandTopY - 6}
            fill="#38bdf8"
            fontSize="10"
            fontWeight="700"
            opacity="0.85"
          >
            160 WPM Upper Threshold
          </text>
          <text
            x="48"
            y={bandBottomY + 14}
            fill="#818cf8"
            fontSize="10"
            fontWeight="700"
            opacity="0.85"
          >
            130 WPM Target Floor
          </text>

          {/* Spline Area Fill */}
          <path d={splineArea} fill="url(#curveAreaGrad)" opacity="0.4" />

          {/* Spline Stroke Line */}
          <path
            d={splinePath}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Data Points */}
          {coords.map((c, i) => {
            const isHovered = hoveredPoint === i;
            return (
              <g
                key={i}
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Outer halo */}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isHovered ? 8 : 6}
                  fill="rgba(56, 189, 248, 0.25)"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
                {/* Inner white dot */}
                <circle cx={c.x} cy={c.y} r={isHovered ? 4 : 3} fill="#ffffff" />

                {/* Point WPM Label */}
                <text
                  x={c.x}
                  y={c.y - 12}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="800"
                >
                  {c.wpm} WPM
                </text>

                {/* X Axis Session Label */}
                <text
                  x={c.x}
                  y={216}
                  textAnchor="middle"
                  fill={c.name.includes('Latest') ? '#38bdf8' : '#64748b'}
                  fontSize="9.5"
                  fontWeight={c.name.includes('Latest') ? '700' : '500'}
                >
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 3 Bottom Summary KPI Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
        }}
      >
        <div
          style={{
            padding: '12px 14px',
            backgroundColor: '#090e1a',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Recent 3-Session Avg</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '3px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>138 WPM</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 600, marginTop: '2px' }}>
            Well-centered in Staff target
          </div>
        </div>

        <div
          style={{
            padding: '12px 14px',
            backgroundColor: '#090e1a',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Duration Stability Index</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '3px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>89%</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
            Low variance (±12s dev)
          </div>
        </div>

        <div
          style={{
            padding: '12px 14px',
            backgroundColor: '#090e1a',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Pacing Cadence Score</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '3px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>84</span>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>/ 100</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 600, marginTop: '2px' }}>
            Strong cognitive control
          </div>
        </div>
      </div>

      {/* Speaking Rate Distribution Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#cbd5e1' }}>
            Speaking Rate Distribution (25 Spoken Answers)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#38bdf8' }}>
            72% within 130-160 WPM sweet spot
          </span>
        </div>

        {/* Multi-segment distribution progress bar */}
        <div
          style={{
            height: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '9999px',
            overflow: 'hidden',
            display: 'flex',
            gap: '2px',
          }}
        >
          {/* < 110 WPM (0%) */}
          <div style={{ width: '2%', backgroundColor: '#1e293b' }} title="< 110 WPM (0%)" />
          {/* 110 - 129 WPM (12%) */}
          <div style={{ width: '12%', backgroundColor: '#334155' }} title="110 - 129 WPM (12%)" />
          {/* 130 - 160 WPM (72%) */}
          <div
            style={{
              width: '72%',
              background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)',
            }}
            title="130 - 160 WPM (72%)"
          />
          {/* 161 - 180 WPM (16%) */}
          <div style={{ width: '14%', backgroundColor: '#475569' }} title="161 - 180 WPM (16%)" />
          {/* 190+ WPM (0%) */}
          <div style={{ width: '2%', backgroundColor: '#1e293b' }} title="190+ WPM (0%)" />
        </div>

        {/* Labels below distribution bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.66rem',
            color: '#64748b',
            marginTop: '2px',
          }}
        >
          <span>&lt; 110 WPM (0%)</span>
          <span>110 - 129 WPM (12%)</span>
          <span style={{ color: '#38bdf8', fontWeight: 700 }}>130 - 160 WPM (72%)</span>
          <span>161 - 180 WPM (16%)</span>
          <span>190+ WPM (0%)</span>
        </div>
      </div>
    </div>
  );
};
