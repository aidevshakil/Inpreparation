import React, { useState } from 'react';
import { Rocket } from 'lucide-react';

interface ChartPoint {
  date: string;
  score: number;
  simId: string;
  cx: number;
  cy: number;
  breakdown: {
    tech: number;
    arch: number;
    decomp: number;
    code: number;
    pres: number;
  };
}

export const PerformanceTrendVelocityCard: React.FC = () => {
  const [selectedPointIndex, setSelectedPointIndex] = useState<number>(4); // Default to Oct 24 #SIM-PY-8821

  // Chart coordinates mapping (Width 600, Height 210)
  // Y range: 70 at y=170, 80 at y=105, 90 at y=40
  // formula: y = 170 - ((score - 70) / 20) * 130
  const points: ChartPoint[] = [
    { date: 'Oct 12', score: 72, simId: 'SIM-ALU-4102', cx: 50, cy: 157, breakdown: { tech: 74, arch: 72, decomp: 70, code: 73, pres: 71 } },
    { date: 'Oct 15', score: 76, simId: 'SIM-DB-9310', cx: 150, cy: 131, breakdown: { tech: 78, arch: 77, decomp: 74, code: 76, pres: 75 } },
    { date: 'Oct 18', score: 78, simId: 'SIM-API-4412', cx: 250, cy: 118, breakdown: { tech: 80, arch: 79, decomp: 75, code: 79, pres: 77 } },
    { date: 'Oct 21', score: 80, simId: 'SIM-SYS-7940', cx: 350, cy: 105, breakdown: { tech: 82, arch: 81, decomp: 76, code: 81, pres: 80 } },
    { date: 'Oct 24', score: 82, simId: 'SIM-PY-8821', cx: 450, cy: 92, breakdown: { tech: 86, arch: 84, decomp: 78, code: 82, pres: 80 } },
    { date: 'Oct 27', score: 88, simId: 'SIM-ARC-9014', cx: 550, cy: 53, breakdown: { tech: 90, arch: 88, decomp: 84, code: 89, pres: 89 } },
  ];

  const currentPoint = points[selectedPointIndex];

  // SVG paths
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`).join(' ');
  const areaPath = `${linePath} L 550 190 L 50 190 Z`;
  const baselineY = 105; // 80 Staff target

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
      {/* Top Header */}
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
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              Score Trend & Velocity
            </h3>
            <span style={{ fontSize: '0.72rem', color: '#c084fc', cursor: 'pointer', fontWeight: 600 }}>
              Staff L6+ Like Batteries
            </span>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: 0 }}>
            Progressive scores 6 fully defended 5-quest. on simulations against Staff Engineering standards.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: '0.72rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}>
            <span style={{ width: 14, height: 2, background: '#38bdf8', display: 'inline-block' }} />
            <span>Evaluated Score</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
            <span style={{ width: 14, height: 2, borderTop: '2px dashed #64748b', display: 'inline-block' }} />
            <span>Staff Target (80.0)</span>
          </div>
        </div>
      </div>

      {/* Grid: Left Chart + Right Window Telemetry */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2.4fr) minmax(260px, 1fr)',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        {/* Left SVG Chart Box */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '12px',
            padding: '16px 20px',
            position: 'relative',
          }}
        >
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <svg viewBox="0 0 600 210" style={{ width: '100%', height: 'auto', minWidth: '480px', overflow: 'visible' }}>
              <defs>
                <linearGradient id="scoreVelocityAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(56, 189, 248, 0.28)" />
                  <stop offset="100%" stopColor="rgba(56, 189, 248, 0.0)" />
                </linearGradient>
                <linearGradient id="scoreVelocityLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>

              {/* Y Axis Grid lines & labels */}
              {/* 90 */}
              <text x="15" y="44" fill="#64748b" fontSize="10" fontWeight="600">90</text>
              <line x1="40" y1="40" x2="580" y2="40" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />

              {/* 80 Staff Benchmark */}
              <text x="15" y="109" fill="#64748b" fontSize="10" fontWeight="600">80</text>
              <line x1="40" y1={baselineY} x2="580" y2={baselineY} stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />

              {/* 70 */}
              <text x="15" y="174" fill="#64748b" fontSize="10" fontWeight="600">70</text>
              <line x1="40" y1="170" x2="580" y2="170" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />

              {/* Area */}
              <path d={areaPath} fill="url(#scoreVelocityAreaGrad)" />

              {/* Line */}
              <path
                d={linePath}
                fill="none"
                stroke="url(#scoreVelocityLineGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Floating Pill on Oct 27 (Current Velocity: +8.3 pts) */}
              <g transform="translate(480, 22)">
                <rect width="98" height="20" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
                <text x="49" y="14" textAnchor="middle" fill="#38bdf8" fontSize="8.5" fontWeight="700">
                  Current Velocity: +8.3 pts
                </text>
              </g>

              {/* Data points */}
              {points.map((p, idx) => {
                const isSelected = selectedPointIndex === idx;
                return (
                  <g
                    key={p.date}
                    onClick={() => setSelectedPointIndex(idx)}
                    style={{ cursor: 'pointer' }}
                  >
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
                    <text x={p.cx} y="196" textAnchor="middle" fill="#64748b" fontSize="9.5" fontWeight="500">
                      {p.date}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Snapshot embedded bottom bar */}
          <div
            style={{
              marginTop: '12px',
              padding: '10px 14px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.72rem',
              color: '#cbd5e1',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} />
              <strong style={{ color: '#f8fafc' }}>Active Snapshot:</strong>
              <span>{currentPoint.date} • #{currentPoint.simId}</span>
              <span style={{ color: '#64748b' }}>|</span>
              <strong style={{ color: '#38bdf8' }}>Overall: {currentPoint.score}/100</strong>
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.68rem', letterSpacing: '0.2px' }}>
              Tech: <strong style={{ color: '#cbd5e1' }}>{currentPoint.breakdown.tech}</strong> | Arch: <strong style={{ color: '#cbd5e1' }}>{currentPoint.breakdown.arch}</strong> | Decomp: <strong style={{ color: '#cbd5e1' }}>{currentPoint.breakdown.decomp}</strong> | Code: <strong style={{ color: '#cbd5e1' }}>{currentPoint.breakdown.code}</strong> | Presntg: <strong style={{ color: '#cbd5e1' }}>{currentPoint.breakdown.pres}</strong>
            </div>
          </div>
        </div>

        {/* Right: WINDOW TELEMETRY Box */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            WINDOW TELEMETRY
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '10px' }}>
            <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Recent 3 Avg</span>
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>83.3</span>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}> / 100</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '10px' }}>
            <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Prior Baseline</span>
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#94a3b8' }}>76.0</span>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}> / 100</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', marginBottom: '6px' }}>
              VELOCITY DELTA
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: 28, height: 28, borderRadius: '6px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Rocket size={14} color="#38bdf8" />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8' }}>
                +8.3 pts
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Surpassed the calibrated Staff L6 benchmark on Oct 21 simulation and consolidated with +6 pts on concurrency defense.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
