import React from 'react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      value: '10K+',
      label: 'Practice Sessions',
      desc: 'Simulated under authentic high-pressure interview dynamics',
      valueColor: 'var(--text-main)',
      labelColor: 'var(--text-secondary)'
    },
    {
      value: '50K+',
      label: 'Questions Answered',
      desc: 'Strictly five-question calibrated rounds for peak retention',
      valueColor: 'var(--text-main)',
      labelColor: 'var(--primary-color)'
    },
    {
      value: '4.8 / 5',
      label: 'Candidate Rating',
      desc: 'Across L5/L6 software engineers & engineering leaders',
      valueColor: 'var(--text-main)',
      labelColor: 'var(--color-info)'
    },
    {
      value: '100+',
      label: 'Curated Tech Roles',
      desc: 'Full-stack, Systems, ML, SRE, Product, and Leadership',
      valueColor: 'var(--color-success)',
      labelColor: 'var(--color-success)'
    }
  ];

  return (
    <section style={{
      padding: '40px 0 80px',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '44px'
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '12px'
          }}>
            BATTLE-TESTED RESULTS
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 3.8vw, 40px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.025em',
            lineHeight: 1.2
          }}>
            Built for Modern Interview Preparation
          </h2>
        </div>

        {/* 4 Stat Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                padding: '36px 24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease',
                backdropFilter: 'blur(12px)'
              }}
              className="glow-card-hover"
            >
              <div style={{
                fontSize: '44px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: stat.valueColor,
                lineHeight: 1.1,
                marginBottom: '8px'
              }}>
                {stat.value}
              </div>

              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: stat.labelColor,
                marginBottom: '8px'
              }}>
                {stat.label}
              </div>

              <div style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                maxWidth: '220px'
              }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
