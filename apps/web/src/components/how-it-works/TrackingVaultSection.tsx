import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TrackingVaultSectionProps {
  onNavigateToSimulations?: () => void;
  onStartPractice: (role?: string) => void;
}

export const TrackingVaultSection: React.FC<TrackingVaultSectionProps> = ({
  onNavigateToSimulations,
  onStartPractice
}) => {
  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#818cf8',
              marginBottom: '8px'
            }}>
              TRACKING VAULT
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 34px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Your Longitudinal Interview History
            </h2>
          </div>

          <div
            onClick={() => onNavigateToSimulations && onNavigateToSimulations()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#38bdf8',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s ease'
            }}
          >
            <span>View Complete Archive</span>
            <ArrowRight size={15} />
          </div>
        </div>

        {/* Table Container Card */}
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '24px 30px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          overflowX: 'auto'
        }}>
          <div style={{ minWidth: '760px' }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2.5fr 1.3fr 1fr 1.3fr 1.4fr',
              gap: '16px',
              alignItems: 'center',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '11px',
              fontWeight: 700,
              color: '#64748b',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}>
              <div>INTERVIEW MODULE</div>
              <div>DATE</div>
              <div>COMPOSITE</div>
              <div>STATUS</div>
              <div style={{ textAlign: 'right' }}>ACTION</div>
            </div>

            {/* Table Rows */}
            {[
              {
                title: 'AI / ML Engineer Track',
                sub: '5 Questions • 15 Minutes',
                date: 'Today, 14:20',
                score: '82',
                status: 'Passed Standard',
                statusType: 'passed'
              },
              {
                title: 'Python Backend Developer',
                sub: '5 Questions • 14 Minutes',
                date: '3 Days Ago',
                score: '79',
                status: 'Iterating',
                statusType: 'iterating'
              },
              {
                title: 'Data Platform Engineer',
                sub: '5 Questions • 17 Minutes',
                date: 'Last Week',
                score: '76',
                status: 'Baseline',
                statusType: 'baseline'
              }
            ].map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5fr 1.3fr 1fr 1.3fr 1.4fr',
                  gap: '16px',
                  alignItems: 'center',
                  padding: '22px 0',
                  borderBottom: idx < 2 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none'
                }}
              >
                {/* Module Column */}
                <div>
                  <div style={{ fontSize: '15.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    {row.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    {row.sub}
                  </div>
                </div>

                {/* Date Column */}
                <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>
                  {row.date}
                </div>

                {/* Composite Score Column */}
                <div>
                  <span style={{
                    fontSize: '17px',
                    fontWeight: 800,
                    color: row.statusType === 'passed' ? '#818cf8' : '#cbd5e1'
                  }}>
                    {row.score}
                  </span>
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
                    /100
                  </span>
                </div>

                {/* Status Badge Column */}
                <div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: row.statusType === 'passed' ? '#38bdf8' : '#94a3b8',
                    background: row.statusType === 'passed' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                    border: row.statusType === 'passed' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    display: 'inline-block'
                  }}>
                    {row.status}
                  </span>
                </div>

                {/* Action Column */}
                <div style={{ textAlign: 'right' }}>
                  <button
                    onClick={() => onStartPractice(row.title)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '8px 18px',
                      color: '#cbd5e1',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#cbd5e1';
                    }}
                  >
                    Review Diagnostic
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
