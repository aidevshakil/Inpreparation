import React from 'react';
import { FileText, Compass, Network, UserCheck, TrendingUp, ArrowUp } from 'lucide-react';

interface JourneySectionProps {
  onStartPractice: (role?: string) => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onStartPractice }) => {
  const steps = [
    {
      num: '01',
      numColor: '#818cf8',
      icon: <FileText size={18} color="#64748b" />,
      title: 'Build Your Profile',
      desc: 'Upload your CV or connect LinkedIn. Inprep AI extracts your true seniority, architectural footprint, and primary frameworks.',
      tag: 'CV Extraction: 100% Parsed',
      tagColor: '#64748b',
    },
    {
      num: '02',
      numColor: '#a5b4fc',
      icon: <Compass size={18} color="#64748b" />,
      title: 'AI Career Assessment',
      desc: 'Complete a rapid 3–minute diagnostic assessing target role requirements, industry benchmarks, and compensation tier targets.',
      tag: 'Benchmark: Staff / L6',
      tagColor: '#64748b',
    },
    {
      num: '03',
      numColor: '#38bdf8',
      icon: <Network size={18} color="#64748b" />,
      title: 'Curated Interviews',
      desc: 'Receive matched simulations based precisely on your target company archetype (e.g. Big Tech, High–Growth Series B, FinTech).',
      tag: 'Match Score: 98.4%',
      tagColor: '#38bdf8',
    },
    {
      num: '04',
      numColor: '#34d399',
      icon: <UserCheck size={18} color="#64748b" />,
      title: 'Practice With AI',
      desc: 'Speak naturally to an expressive conversational AI interviewer across exactly five progressive, calibrated scenario questions.',
      tag: '5 Questions • 15 Mins',
      tagColor: '#34d399',
    },
    {
      num: '05',
      numColor: '#cbd5e1',
      icon: <TrendingUp size={18} color="#64748b" />,
      title: 'Deep Multimodal Feedback',
      desc: 'Instant analytical breakdown: Code syntax logic, pacing cadences, verbal ticks, and objective webcam alignment scores.',
      tag: 'Rubrics: 4 Vector Deep Scan',
      tagColor: '#64748b',
    },
    {
      num: '06',
      numColor: '#cbd5e1',
      icon: <ArrowUp size={18} color="#64748b" />,
      title: 'Targeted Re-Practice',
      desc: 'Iterate directly on your #1 improvement lever using contextual AI Suggested Answers modeled on executive clarity.',
      tag: 'Delta Tracking: Enabled',
      tagColor: '#64748b',
    }
  ];

  return (
    <section id="how-it-works" style={{ padding: '80px 0 100px', position: 'relative' }}>
      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 52px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '14px'
          }}>
            FRICTIONLESS WORKFLOW
          </span>

          <h2 style={{
            fontSize: 'clamp(30px, 4.2vw, 46px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '16px'
          }}>
            One Platform. Your Complete Interview Practice Journey.
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            From CV parse to high-fidelity practice round in under 3 minutes.
          </p>
        </div>

        {/* 6 Cards 3x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {steps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => onStartPractice()}
              style={{
                background: 'rgba(15, 21, 35, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '18px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '230px',
                backdropFilter: 'blur(12px)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              className="glow-card-hover"
            >
              <div>
                {/* Top Row: Large Step Number & Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px'
                }}>
                  <span style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: s.numColor,
                    lineHeight: 1
                  }}>
                    {s.num}
                  </span>

                  <div style={{
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {s.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                  letterSpacing: '-0.015em'
                }}>
                  {s.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '28px'
                }}>
                  {s.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: s.tagColor,
                letterSpacing: '0.02em'
              }}>
                {s.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
