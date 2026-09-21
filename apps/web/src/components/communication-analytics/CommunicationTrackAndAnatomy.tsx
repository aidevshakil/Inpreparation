import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

export const CommunicationTrackAndAnatomy: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px',
        marginBottom: '24px',
      }}
    >
      {/* Left: Communication by Track & Difficulty */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ marginBottom: '18px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Communication by Track & Difficulty
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '2px 0 0 0' }}>
            Calibrated evaluation against track-specific seniority standards
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Track 1 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  Backend & Concurrency
                </span>
                <span style={{ fontSize: '0.64rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.05)', padding: '1px 6px', borderRadius: '4px', marginLeft: '8px' }}>
                  Staff L6+
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>83.6</span>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}> Avg</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
              <span style={{ color: '#64748b' }}>3 Sessions • 15 Defended Answers</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#64748b' }}>Best: 87.0</span>
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>Top Score Clarity</span>
              </div>
            </div>
          </div>

          {/* Track 2 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  Distributed Systems
                </span>
                <span style={{ fontSize: '0.64rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.05)', padding: '1px 6px', borderRadius: '4px', marginLeft: '8px' }}>
                  Staff L6+
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>81.2</span>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}> Avg</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
              <span style={{ color: '#64748b' }}>2 Sessions • 10 Defended Answers</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#64748b' }}>Best: 84.0</span>
                <span style={{ color: '#818cf8', fontWeight: 600 }}>Consistent BLUF Framing</span>
              </div>
            </div>
          </div>

          {/* Track 3 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  Database & Storage
                </span>
                <span style={{ fontSize: '0.64rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.05)', padding: '1px 6px', borderRadius: '4px', marginLeft: '8px' }}>
                  Senior L5
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f87171' }}>77.0</span>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}> Avg</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
              <span style={{ color: '#64748b' }}>1 Session • 5 Defended Answers</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#64748b' }}>Best: 77.0</span>
                <span style={{ color: '#f87171', fontWeight: 600 }}>Shortage Trade-off Gaps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Answer Structural Anatomy */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Answer Structural Anatomy
          </h3>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#c084fc', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '2px 8px', borderRadius: '100px' }}>
            Minto Pyramid Model
          </span>
        </div>
        <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
          Pyramid Principle & Executive Deductive Compliance
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Step 1 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '10px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
                1. Direct Conclusion / Bottom Line
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#38bdf8' }}>88%</span>
                <Check size={13} color="#38bdf8" />
              </div>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
              States conclusion in first 15 seconds
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '10px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
                2. Architectural Rationale / "Why"
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#38bdf8' }}>85%</span>
                <Check size={13} color="#38bdf8" />
              </div>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
              Core engineering justifications & design constraints
            </div>
          </div>

          {/* Step 3 (Focus Area) */}
          <div style={{ background: 'rgba(239, 68, 68, 0.03)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '10px', padding: '10px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f87171' }}>
                  3. Quantitative Trade-off Evidence
                </span>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#f87171', background: 'rgba(239, 68, 68, 0.15)', padding: '1px 5px', borderRadius: '4px' }}>
                  FOCUS AREA
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f87171' }}>72%</span>
                <AlertCircle size={13} color="#f87171" />
              </div>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>
              Latency, concurrency, and memory boundaries vs alternative architectures
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ background: 'rgba(255, 255, 255, 0.015)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '10px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
                4. Summary / Actionable Synthesis
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#cbd5e1' }}>79%</span>
                <Check size={13} color="#94a3b8" />
              </div>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
              Crisp recapping statement leading to next steps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
