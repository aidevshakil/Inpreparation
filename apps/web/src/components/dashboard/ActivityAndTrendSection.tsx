import React, { useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';

export const ActivityAndTrendSection: React.FC = () => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const weeklyData = [
    { day: 'Mon', questions: 3, height: 45 },
    { day: 'Tue', questions: 5, height: 65 },
    { day: 'Wed', questions: 2, height: 35 },
    { day: 'Thu', questions: 8, height: 95, isPeak: true },
    { day: 'Fri', questions: 5, height: 70 },
    { day: 'Sat', questions: 2, height: 30 },
    { day: 'Sun', questions: 0, height: 8 },
  ];

  // Curve data points for Readiness Progress Trend: 5 simulations
  const trendPoints = [
    { attempt: 1, score: 48, label: 'Attempt 1', date: 'Aug 28' },
    { attempt: 2, score: 55, label: 'Attempt 2', date: 'Sep 01' },
    { attempt: 3, score: 64, label: 'Attempt 3', date: 'Sep 05' },
    { attempt: 4, score: 75, label: 'Attempt 4', date: 'Sep 08' },
    { attempt: 5, score: 82, label: 'Attempt 5', date: 'Sep 10' },
  ];

  const svgWidth = 460;
  const svgHeight = 130;
  const paddingX = 30;
  const paddingY = 20;

  // Map scores (40 to 90) to SVG coordinates
  const minScore = 40;
  const maxScore = 90;
  const pointsString = trendPoints
    .map((pt, idx) => {
      const x = paddingX + (idx / (trendPoints.length - 1)) * (svgWidth - 2 * paddingX);
      const y = svgHeight - paddingY - ((pt.score - minScore) / (maxScore - minScore)) * (svgHeight - 2 * paddingY);
      return `${x},${y}`;
    })
    .join(' ');

  // Area path below the line for glowing gradient fill
  const areaPath = `M ${paddingX},${svgHeight - paddingY} L ${pointsString.split(' ').join(' L ')} L ${svgWidth - paddingX},${svgHeight - paddingY} Z`;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '18px',
        marginBottom: '24px',
      }}
    >
      {/* Left Card: Practice Activity */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Practice Activity
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 9px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                color: '#cbd5e1',
                fontSize: '0.72rem',
                cursor: 'pointer',
              }}
            >
              <span>This Week</span>
              <ChevronDown size={12} />
            </div>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
            Weekly question volume &amp; consistency
          </p>

          {/* Bar Chart Container */}
          <div
            style={{
              height: '110px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '0 10px 4px 10px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '16px',
            }}
          >
            {weeklyData.map((item, index) => {
              const isHovered = hoveredBar === index;
              return (
                <div
                  key={item.day}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    height: '100%',
                    justifyContent: 'flex-end',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '32px',
                      height: `${item.height}%`,
                      borderRadius: '6px 6px 2px 2px',
                      background:
                        item.isPeak || isHovered
                          ? 'linear-gradient(180deg, #818cf8 0%, #4f46e5 100%)'
                          : 'rgba(99, 102, 241, 0.28)',
                      boxShadow:
                        item.isPeak || isHovered
                          ? '0 0 14px rgba(99, 102, 241, 0.5)'
                          : 'none',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    {isHovered && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-26px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: '#1e1b4b',
                          border: '1px solid rgba(129, 140, 248, 0.4)',
                          borderRadius: '4px',
                          padding: '1px 5px',
                          fontSize: '0.64rem',
                          color: '#e0e7ff',
                          whiteSpace: 'nowrap',
                          zIndex: 10,
                        }}
                      >
                        {item.questions} Qs
                      </div>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: item.isPeak || isHovered ? '#e2e8f0' : '#64748b',
                      fontWeight: item.isPeak || isHovered ? 600 : 400,
                    }}
                  >
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Metrics Summary Counters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            textAlign: 'center',
          }}
        >
          <div style={{ padding: '8px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>5</div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px', marginTop: '4px' }}>
              INTERVIEWS
            </div>
          </div>

          <div style={{ padding: '8px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>25</div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px', marginTop: '4px' }}>
              QUESTIONS
            </div>
          </div>

          <div style={{ padding: '8px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>3.8h</div>
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px', marginTop: '4px' }}>
              TOTAL PRACTICE
            </div>
          </div>
        </div>
      </div>

      {/* Right Card: Readiness Progress Trend */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Readiness Progress Trend
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.72rem',
                color: '#a5b4fc',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6366f1' }} />
              <span>Score Curve</span>
            </div>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 12px 0' }}>
            Historical performance across 5 consecutive simulations
          </p>

          {/* SVG Score Line Chart */}
          <div style={{ width: '100%', height: '120px', position: 'relative' }}>
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1={paddingX} y1={paddingY} x2={svgWidth - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
              <line x1={paddingX} y1={svgHeight / 2} x2={svgWidth - paddingX} y2={svgHeight / 2} stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
              <line x1={paddingX} y1={svgHeight - paddingY} x2={svgWidth - paddingX} y2={svgHeight - paddingY} stroke="rgba(255,255,255,0.08)" />

              {/* Area Fill */}
              <path d={areaPath} fill="url(#areaGradient)" />

              {/* Curve Line */}
              <polyline
                fill="none"
                stroke="#818cf8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={pointsString}
                style={{ filter: 'drop-shadow(0 0 8px rgba(129, 140, 248, 0.6))' }}
              />

              {/* Data Nodes */}
              {trendPoints.map((pt, idx) => {
                const x = paddingX + (idx / (trendPoints.length - 1)) * (svgWidth - 2 * paddingX);
                const y = svgHeight - paddingY - ((pt.score - minScore) / (maxScore - minScore)) * (svgHeight - 2 * paddingY);
                const isLast = idx === trendPoints.length - 1;

                return (
                  <g key={pt.attempt}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isLast ? 6 : 4}
                      fill={isLast ? '#ffffff' : '#4f46e5'}
                      stroke={isLast ? '#6366f1' : '#818cf8'}
                      strokeWidth={isLast ? 3 : 2}
                      style={{ filter: isLast ? 'drop-shadow(0 0 10px #818cf8)' : 'none' }}
                    />
                    {isLast && (
                      <text
                        x={x}
                        y={y - 12}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="11"
                        fontWeight="700"
                      >
                        {pt.score}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Footer Summary */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.74rem',
          }}
        >
          <div style={{ color: '#94a3b8' }}>
            First Interview: <strong style={{ color: '#cbd5e1' }}>48</strong> • Recent Attempt:{' '}
            <strong style={{ color: '#ffffff' }}>82</strong>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              fontWeight: 600,
              fontSize: '0.72rem',
            }}
          >
            <ArrowUp size={12} strokeWidth={2.5} />
            <span>+34 pts total improvement over 14 days</span>
          </div>
        </div>
      </div>
    </div>
  );
};
