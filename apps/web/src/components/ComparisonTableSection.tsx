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
            color: '#ffffff',
            letterSpacing: '-0.025em',
            lineHeight: 1.18,
            marginBottom: '16px'
          }}>
            Architected Differently From Generic<br />Chatbots
          </h2>

          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.65,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            General AI models give passive text compliments. Inprep AI deploys rigorous multimodal rubrics calibrated directly to engineering leadership hiring bars.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div style={{
          background: 'rgba(15, 21, 35, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '20px',
          padding: '24px 32px',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
          marginBottom: '32px',
          overflowX: 'auto'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <th style={{
                  padding: '16px 20px 18px 8px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#64748b',
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
                  color: '#818cf8',
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
                  color: '#64748b',
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
                    borderBottom: idx === COMPARISON_ROWS.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.04)',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <td style={{
                    padding: '20px 20px 20px 8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    {row.dimension}
                  </td>
                  <td style={{
                    padding: '20px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#e2e8f0'
                  }}>
                    {row.inprep}
                  </td>
                  <td style={{
                    padding: '20px',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#64748b'
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
                  background: 'rgba(15, 21, 35, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '24px 22px',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
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
                  color: '#ffffff',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em'
                }}>
                  {pillar.title}
                </h3>

                <p style={{
                  fontSize: '12px',
                  color: '#64748b',
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
