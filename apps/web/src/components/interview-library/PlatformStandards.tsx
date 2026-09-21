import React from 'react';
import { Video, Activity, Sliders, Hash } from 'lucide-react';

export const PlatformStandards: React.FC = () => {
  const standards = [
    {
      icon: <Hash size={18} color="#a5b4fc" />,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      title: '5 Focused Questions',
      desc: 'Every session is calibrated to precisely 5 questions. Eliminates cognitive fatigue while testing technical depth and composure.'
    },
    {
      icon: <Video size={18} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      title: 'Realistic Simulation',
      desc: 'Speak directly into a live interactive video and audio environment that models real executive and technical interview panels.'
    },
    {
      icon: <Activity size={18} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      title: 'Multimodal Diagnostics',
      desc: 'Immediate real-time analysis combining technical correctness, verbal conciseness, pacing cadence, and framing.'
    },
    {
      icon: <Sliders size={18} color="#a5b4fc" />,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      title: 'Actionable Rubrics',
      desc: 'Receive 5–part answer blueprints and actionable revision suggestions after every round to elevate subsequent performances.'
    }
  ];

  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0284c7',
            marginBottom: '10px'
          }}>
            PLATFORM STANDARDS
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            What Every Interview Includes
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Consistent quality, standardized scoring, and low friction across every domain.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {standards.map((std, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: std.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {std.icon}
              </div>

              <h3 style={{
                fontSize: '17px',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '10px'
              }}>
                {std.title}
              </h3>

              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}>
                {std.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
