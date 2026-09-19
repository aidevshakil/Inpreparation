import React from 'react';
import { Terminal, Network, Database, Award, Shield, CircleDot } from 'lucide-react';

export const PerformanceCategoryTierCards: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '24px',
        marginBottom: '24px',
      }}
    >
      {/* Left: Scores by Category Track */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Scores by Category Track
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
            3 Domains Explored
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Track 1: Backend & Concurrency */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Terminal size={16} color="#38bdf8" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  Backend & Concurrency
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  3 sessions • 15 questions defended
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>83.3</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Average</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#38bdf8' }}>88.0</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Best</div>
              </div>
            </div>
          </div>

          {/* Track 2: Distributed Systems */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(129, 140, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Network size={16} color="#818cf8" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  Distributed Systems
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  2 sessions • 10 questions defended
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>81.0</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Average</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#818cf8' }}>82.0</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Best</div>
              </div>
            </div>
          </div>

          {/* Track 3: Database Storage & Pooling */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Database size={16} color="#fbbf24" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  Database Storage & Pooling
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  1 session • 5 questions defended
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>76.0</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Average</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fbbf24' }}>76.0</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Best</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Scores by Difficulty Tier */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Scores by Difficulty Tier
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
            L6 Seniority Spectrum
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Tier 1: Staff L6+ */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={16} color="#c084fc" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Staff L6+ (Advanced) <span style={{ color: '#fbbf24' }}>★</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  4 sessions • Primary evaluation target
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>82.5</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Avg Score</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#38bdf8' }}>88.0</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Peak</div>
              </div>
            </div>
          </div>

          {/* Tier 2: Senior L5 */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={16} color="#38bdf8" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                  Senior L5 (Intermediate)
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  2 sessions • Initial calibration
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>76.5</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Avg Score</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#818cf8' }}>78.0</div>
                <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Peak</div>
              </div>
            </div>
          </div>

          {/* Tier 3: Junior L4 */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleDot size={16} color="#64748b" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#94a3b8' }}>
                  Junior L4 (Foundational)
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                  0 sessions • Out of profile scope
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', background: 'rgba(255, 255, 255, 0.04)', padding: '4px 10px', borderRadius: '6px' }}>
                UNATTEMPTED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
