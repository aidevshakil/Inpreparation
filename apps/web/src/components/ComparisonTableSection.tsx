import React from 'react';
import { Eye, CameraOff, Ban, Lock } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  inprep: string;
  generic: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: 'Evaluation Format',
    inprep: 'Multimodal (Video, Audio, Tech, Delivery)',
    generic: 'Text prompt only'
  },
  {
    dimension: 'Interview Length',
    inprep: 'Strict 5-Question Calibrated Rounds (~15m)',
    generic: 'Endless open-ended chatting'
  },
  {
    dimension: 'Computer Vision Diagnostics',
    inprep: 'Objective Framing & Setup Telemetry',
    generic: 'None'
  },
  {
    dimension: 'Ethical Standards',
    inprep: 'Explicit No-Personality/Emotion Guarantee',
    generic: 'Unregulated emotion inference'
  },
  {
    dimension: 'Feedback Depth',
    inprep: 'Actionable 5-part comparative model answers',
    generic: 'Generic "Great job!" responses'
  }
];

const ETHICAL_PILLARS = [
  {
    icon: Eye,
    iconColor: '#38bdf8',
    title: 'Transparent Analysis',
    desc: 'Every metric is accompanied by exact timestamps and rationale.'
  },
  {
    icon: CameraOff,
    iconColor: '#a855f7',
    title: 'Observable Only',
    desc: 'Camera metrics evaluate physical setup factors, never facial expressions.'
  },
  {
    icon: Ban,
    iconColor: '#38bdf8',
    title: 'No Profiling',
    desc: 'Strict prohibition on psychological, emotional, or honesty conjecture.'
  },
  {
    icon: Lock,
    iconColor: '#34d399',
    title: 'Candidate Privacy',
    desc: 'Zero candidate video is ever used to train public foundational models.'
  }
];

export const ComparisonTableSection: React.FC = () => {
  return (
    <section style={{ padding: '70px 0 80px', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '12px'
          }}>
            WHY INPREP AI
          </span>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.025em',
            lineHeight: 1.18,
            marginBottom: '16px'
          }}>
            Architected Differently From Generic<br />Chatbots
          </h2>

          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            General AI models give passive text compliments. Inprep AI deploys rigorous multimodal rubrics calibrated directly to engineering leadership hiring bars.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '24px 32px',
          backdropFilter: 'blur(16px)',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '32px',
          overflowX: 'auto'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <th style={{
                  padding: '16px 20px 18px 8px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  width: '32%'
                }}>
                  DIMENSION
                </th>
                <th style={{
                  padding: '16px 20px 18px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--primary-color)',
                  width: '38%'
                }}>
                  INPREP AI STUDIO
                </th>
                <th style={{
                  padding: '16px 20px 18px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  width: '30%'
                }}>
                  GENERIC CHATBOTS / MOCK TOOLS
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: idx === COMPARISON_ROWS.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-card-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <td style={{
                    padding: '20px 20px 20px 8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-main)'
                  }}>
                    {row.dimension}
                  </td>
                  <td style={{
                    padding: '20px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)'
                  }}>
                    {row.inprep}
                  </td>
                  <td style={{
                    padding: '20px',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'var(--text-muted)'
                  }}>
                    {row.generic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Bottom Ethical / Privacy Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {ETHICAL_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '24px 22px',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  marginBottom: '14px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                  <Icon size={20} color={pillar.iconColor} strokeWidth={2} />
                </div>

                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em'
                }}>
                  {pillar.title}
                </h3>

                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.55
                }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
