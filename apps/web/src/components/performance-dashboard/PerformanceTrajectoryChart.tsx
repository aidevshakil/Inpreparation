import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';

interface PointData {
  date: string;
  score: number;
  simId: string;
  note: string;
  cx: number;
  cy: number;
}

export const PerformanceTrajectoryChart: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'overall' | 'depth' | 'architecture'>('overall');
  const [selectedPointIndex, setSelectedPointIndex] = useState<number>(5); // Default to Oct 27 (Peak)

  // Chart coordinates (Width 680, Height 220, Y-range: 60 to 100)
  // minVal = 60, maxVal = 100
  // y = height - ((score - 60) / 40) * (height - 60) - 30
  const points: PointData[] = [
    { date: 'Oct 10', score: 70, simId: 'SIM-PY-4102', note: 'Initial baseline assessment: Solid syntax, needed asyncpg connection bounds.', cx: 50, cy: 155 },
    { date: 'Oct 14', score: 75, simId: 'SIM-DB-9310', note: 'Postgres Connection Starvation: Good isolation models, pool leaks mitigated.', cx: 160, cy: 130 },
    { date: 'Oct 18', score: 78, simId: 'SIM-RT-4412', note: 'High-Throughput FastAPI: Demonstrated non-blocking worker pools.', cx: 270, cy: 115 },
    { date: 'Oct 21', score: 79, simId: 'SIM-MS-7920', note: 'Distributed Microservices: Structured circuit breaker half-open transitions.', cx: 380, cy: 110 },
    { date: 'Oct 24', score: 82, simId: 'SIM-PY-8821', note: 'Python Backend Concurrency: Defended 5/5 adaptive questions against Staff L6.', cx: 490, cy: 95 },
    { date: 'Oct 27', score: 88, simId: 'SIM-PY-8821', note: 'Simulation #SIM-PY-8821: Score 88/100 (+6 vs prior). Exemplar Python concurrency defense.', cx: 600, cy: 65 },
  ];

  const currentPoint = points[selectedPointIndex] || points[points.length - 1];

  // SVG path for line
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`).join(' ');
  const areaPath = `${linePath} L 600 200 L 50 200 Z`;

  // Baseline Y for score 80 (80 is halfway between 60 and 100)
  const baselineY = 105;

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
      {/* Header */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8' }} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Performance Trajectory & Score Progression
            </h3>
          </div>
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
            Evaluated against deterministic Staff L6 rubric. Baseline bar stream established at 80/100
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {(['overall', 'depth', 'architecture'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: isActive ? '#4f46e5' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'all 0.15s ease',
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', fontSize: '0.72rem' }}>
        <div style={{ color: '#64748b' }}>Score Range: 60 - 100</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}>
            <span style={{ width: 12, height: 2, background: '#818cf8', display: 'inline-block' }} />
            <span>Evaluated Performance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8' }}>
            <span style={{ width: 12, height: 2, borderTop: '2px dashed #64748b', display: 'inline-block' }} />
            <span>Staff L6 Benchmark (80)</span>
          </div>
        </div>
      </div>

      {/* Interactive SVG Chart */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <svg
          viewBox="0 0 680 230"
          style={{ width: '100%', height: 'auto', minWidth: '550px', overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="trajectoryAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.35)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.0)" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="40" y1="65" x2="640" y2="65" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          <line x1="40" y1="105" x2="640" y2="105" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          <line x1="40" y1="155" x2="640" y2="155" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          <line x1="40" y1="200" x2="640" y2="200" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />

          {/* Baseline (80 Staff Benchmark) */}
          <line
            x1="40"
            y1={baselineY}
            x2="640"
            y2={baselineY}
            stroke="#6366f1"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <text x="45" y={baselineY - 6} fill="#a5b4fc" fontSize="10" fontWeight="600">
            L6 Staff →
          </text>

          {/* Area Fill */}
          <path d={areaPath} fill="url(#trajectoryAreaGrad)" />

          {/* Line Path */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {points.map((p, idx) => {
            const isSelected = selectedPointIndex === idx;
            return (
              <g
                key={p.date}
                onClick={() => setSelectedPointIndex(idx)}
                style={{ cursor: 'pointer' }}
              >
                {/* Outer halo when selected */}
                {isSelected && (
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r="12"
                    fill="rgba(99, 102, 241, 0.3)"
                    stroke="rgba(165, 180, 252, 0.8)"
                    strokeWidth="1.5"
                  />
                )}
                {/* Dot */}
                <circle
                  cx={p.cx}
                  cy={p.cy}
                  r="5"
                  fill="#ffffff"
                  stroke="#4f46e5"
                  strokeWidth="2.5"
                />
                {/* Score label above dot */}
                <text
                  x={p.cx}
                  y={p.cy - 10}
                  textAnchor="middle"
                  fill={isSelected ? '#ffffff' : '#cbd5e1'}
                  fontSize="11"
                  fontWeight={isSelected ? '800' : '600'}
                >
                  {p.score}
                </text>
                {/* X-axis date label */}
                <text
                  x={p.cx}
                  y="218"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="10"
                  fontWeight="500"
                >
                  {p.date}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom Inspection Banner */}
      <div
        style={{
          marginTop: '16px',
          padding: '12px 16px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#cbd5e1' }}>
          <Sparkles size={14} color="#a5b4fc" style={{ flexShrink: 0 }} />
          <span>{currentPoint.note}</span>
        </div>
        <div style={{ fontSize: '0.7rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Info size={12} /> Click points to inspect
        </div>
      </div>
    </div>
  );
};
