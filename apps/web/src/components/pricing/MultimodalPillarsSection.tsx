import React from 'react';
import { Cpu, MessageSquare, Mic, Video } from 'lucide-react';

export const MultimodalPillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '1',
      title: '1. Technical',
      icon: <Cpu size={18} color="#a5b4fc" />,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      desc: 'Evaluates correctness, conceptual depth, algorithmic nuance, and architectural trade–offs without generic keyword matching.',
      tags: ['Accuracy', 'Relevance', 'System Depth']
    },
    {
      num: '2',
      title: '2. Communication',
      icon: <MessageSquare size={18} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      desc: 'Measures logical progression, conciseness, structured STAR framework adherence, and stakeholder empathy.',
      tags: ['Clarity', 'STAR Framework', 'Brevity']
    },
    {
      num: '3',
      title: '3. Speech',
      icon: <Mic size={18} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      desc: 'Monitors vocal pacing in real–time, detecting nervous pauses, verbal ticks, filler frequency, and cadence balance.',
      tags: ['Pace (WPM)', 'Filler Count', 'Pause Rhythm']
    },
    {
      num: '4',
      title: '4. Presentation',
      icon: <Video size={18} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      desc: 'Ensures optimal on–camera presence with posture cues, face boundary alignment, camera angle, and ambient lighting check.',
      tags: ['Framing', 'Lighting', 'Orientation']
    }
  ];

  return (
    <section style={{ padding: '30px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0284c7',
            marginBottom: '10px'
          }}>
            BEYOND ORDINARY TESTING
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            More Than Just an Interview Score
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            margin: 0
          }}>
            Inprep AI evaluates every dimension of an executive or technical interview with surgical precision.
          </p>
        </div>

        {/* 4 Modality Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {pillars.map((pil, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: pil.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {pil.icon}
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {pil.title}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {pil.desc}
                </p>
              </div>

              {/* Tag Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {pil.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '11px',
                      color: 'var(--text-secondary)',
                      fontWeight: 500
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
