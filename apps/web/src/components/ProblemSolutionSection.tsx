import React from 'react';
import { Terminal, MessageSquare, Mic, Video } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  const rubrics = [
    {
      icon: <Terminal size={18} color="#cbd5e1" />,
      badge: 'Target 85+',
      badgeBg: 'rgba(255, 255, 255, 0.05)',
      badgeColor: '#94a3b8',
      title: 'Technical Accuracy',
      desc: 'Can you articulate algorithms, boundary constraints, and architectural trade-offs correctly without hesitation?',
      score: '86 / 100',
      pct: 86,
      barColor: '#a78bfa'
    },
    {
      icon: <MessageSquare size={18} color="#cbd5e1" />,
      badge: 'Target 80+',
      badgeBg: 'rgba(255, 255, 255, 0.05)',
      badgeColor: '#94a3b8',
      title: 'Communication',
      desc: 'Do you structure your rationale logically using STAR frameworks, crisp problem scopes, and causality?',
      score: '84 / 100',
      pct: 84,
      barColor: '#c084fc'
    },
    {
      icon: <Mic size={18} color="#38bdf8" />,
      badge: '120–160 WPM',
      badgeBg: 'rgba(6, 182, 212, 0.12)',
      badgeColor: '#38bdf8',
      title: 'Speech & Delivery',
      desc: 'Is your delivery cadence within the optimal 120–160 WPM bracket without sudden filler word clusters?',
      score: '81 / 100',
      pct: 81,
      barColor: '#38bdf8'
    },
    {
      icon: <Video size={18} color="#34d399" />,
      badge: 'Objective CV',
      badgeBg: 'rgba(16, 185, 129, 0.12)',
      badgeColor: '#34d399',
      title: 'Presentation',
      desc: 'Is your framing, lighting gradient, and webcam posture calibrated for virtual high-stakes conversations?',
      score: '85 / 100',
      pct: 85,
      barColor: '#34d399'
    }
  ];

  return (
    <section id="features" style={{ padding: '60px 0 90px', position: 'relative' }}>
      <div className="container">
        {/* Left-Aligned Header */}
        <div style={{ maxWidth: '760px', marginBottom: '44px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '12px'
          }}>
            THE COMPLETE INTERVIEW MODEL
          </span>

          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '18px'
          }}>
            Interviews Are More Than Just Knowing the Answer.
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#94a3b8',
            lineHeight: 1.65,
            maxWidth: '680px',
            margin: 0
          }}>
            Technical depth is only half the equation. Senior and staff interviewers evaluate how clearly you frame trade-offs, structure reasoning, and maintain confident executive presence under cognitive load.
          </p>
        </div>

        {/* 4 Rubric Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {rubrics.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(15, 21, 35, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '18px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.25s ease'
              }}
              className="glow-card-hover"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: item.badgeColor,
                    background: item.badgeBg,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '28px'
                }}>
                  {item.desc}
                </p>
              </div>

              {/* Bottom Benchmark & Progress Bar */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '11px',
                  marginBottom: '8px'
                }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Benchmark Level</span>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>{item.score}</span>
                </div>

                <div style={{
                  width: '100%',
                  height: '5px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${item.pct}%`,
                    height: '100%',
                    background: item.barColor,
                    borderRadius: '9999px',
                    boxShadow: `0 0 10px ${item.barColor}50`
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
