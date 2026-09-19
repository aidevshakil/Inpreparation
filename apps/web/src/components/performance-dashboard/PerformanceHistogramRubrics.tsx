import React from 'react';
import { Target, Info } from 'lucide-react';

interface PerformanceHistogramRubricsProps {
  onDrillVector?: () => void;
}

export const PerformanceHistogramRubrics: React.FC<PerformanceHistogramRubricsProps> = ({
  onDrillVector,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '24px',
        marginBottom: '24px',
      }}
    >
      {/* Left: Score Distribution Histogram */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              Score Distribution Histogram
            </h3>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', background: 'rgba(255, 255, 255, 0.04)', padding: '2px 8px', borderRadius: '6px' }}>
              Median: 81.0
            </span>
          </div>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
            Session frequency grouped into standard quartile competencies.
          </p>

          {/* Histogram Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* 90 - 100 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>
                <span>90 – 100 (Distinguished)</span>
                <span style={{ color: '#64748b' }}>0 sessions (0%)</span>
              </div>
              <div style={{ height: '22px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', overflow: 'hidden' }} />
            </div>

            {/* 75 - 89 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#cbd5e1', marginBottom: '4px' }}>
                <span style={{ fontWeight: 600 }}>75 – 89 (Staff Exemplar / Solid)</span>
                <span style={{ fontWeight: 600, color: '#a5b4fc' }}>4 sessions (67%)</span>
              </div>
              <div style={{ height: '22px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', position: 'relative', overflow: 'hidden' }}>
                <div
                  style={{
                    width: '67%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #4f46e5, #6366f1)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '8px',
                  }}
                >
                  <span style={{ fontSize: '0.64rem', fontWeight: 800, color: '#ffffff', background: 'rgba(0, 0, 0, 0.25)', padding: '1px 6px', borderRadius: '4px' }}>
                    Mode
                  </span>
                </div>
              </div>
            </div>

            {/* 60 - 74 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#cbd5e1', marginBottom: '4px' }}>
                <span>60 – 74 (Senior / Baseline)</span>
                <span style={{ color: '#94a3b8' }}>2 sessions (33%)</span>
              </div>
              <div style={{ height: '22px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '33%', height: '100%', background: 'linear-gradient(90deg, #9333ea, #a855f7)', borderRadius: '6px' }} />
              </div>
            </div>

            {/* 40 - 59 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>
                <span>40 – 59 (Developing)</span>
                <span style={{ color: '#64748b' }}>0 sessions (0%)</span>
              </div>
              <div style={{ height: '22px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', overflow: 'hidden' }} />
            </div>

            {/* 0 - 39 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '4px' }}>
                <span>0 – 39 (Inconclusive)</span>
                <span style={{ color: '#64748b' }}>0 sessions (0%)</span>
              </div>
              <div style={{ height: '22px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', overflow: 'hidden' }} />
            </div>
          </div>
        </div>

        {/* Note */}
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: '#64748b' }}>
          <Info size={13} color="#6366f1" style={{ flexShrink: 0 }} />
          <span>Statistical kurtosis confirms positive skewness toward staff architecture benchmarks.</span>
        </div>
      </div>

      {/* Right: 5 Core Evaluation Rubrics */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              5 Core Evaluation Rubrics
            </h3>
            <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '2px 8px', borderRadius: '100px' }}>
              Deterministic Rubrics
            </span>
          </div>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 18px 0' }}>
            Calibrated Staff L6 Distributed Systems weighting matrix.
          </p>

          {/* 5 Rubrics list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* 1. Technical Depth */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
                  1. Technical Depth & Precision <span style={{ color: '#64748b', fontWeight: 500 }}>(30% Wt)</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc' }}>85.2</span>
                <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', padding: '2px 6px', borderRadius: '4px' }}>STRONG</span>
              </div>
            </div>

            {/* 2. System Architecture */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
                  2. System Architecture & Trade-offs <span style={{ color: '#64748b', fontWeight: 500 }}>(25% Wt)</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc' }}>83.0</span>
                <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', padding: '2px 6px', borderRadius: '4px' }}>STRONG</span>
              </div>
            </div>

            {/* 3. Problem Decomposition (HIGHLIGHTED WITH DRILL VECTOR) */}
            <div
              style={{
                background: 'rgba(245, 158, 11, 0.04)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '10px',
                padding: '10px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#fbbf24' }}>
                  3. Problem Decomposition & Edge Handling <span style={{ color: '#94a3b8', fontWeight: 500 }}>(20% Wt)</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#fbbf24' }}>76.5</span>
                <button
                  onClick={onDrillVector}
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '3px 8px',
                    fontSize: '0.64rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Target size={11} /> DRILL VECTOR
                </button>
              </div>
            </div>

            {/* 4. Executive Articulation */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
                  4. Executive Articulation & Cadence <span style={{ color: '#64748b', fontWeight: 500 }}>(15% Wt)</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc' }}>81.8</span>
                <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#818cf8', background: 'rgba(99, 102, 241, 0.12)', padding: '2px 6px', borderRadius: '4px' }}>SOLID</span>
              </div>
            </div>

            {/* 5. Observable Presentation Framing */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
                  5. Observable Presentation Framing <span style={{ color: '#64748b', fontWeight: 500 }}>(10% Wt)</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc' }}>80.4</span>
                <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#a5b4fc', background: 'rgba(255, 255, 255, 0.06)', padding: '2px 6px', borderRadius: '4px' }}>CALIBRATED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div style={{ marginTop: '20px', fontSize: '0.7rem', color: '#64748b' }}>
          Dimensional weights match candidate format to FAANG/Tier-1 Software Architect specification guidelines.
        </div>
      </div>
    </div>
  );
};
