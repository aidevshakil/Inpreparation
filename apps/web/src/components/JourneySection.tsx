import React from 'react';
import { Briefcase, UserCheck, Mic, HelpCircle, FileText, TrendingUp, ArrowRight } from 'lucide-react';

interface JourneySectionProps {
  onStartPractice: (role?: string) => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onStartPractice }) => {
  const steps = [
    {
      num: '01',
      icon: <Briefcase size={22} color="#818cf8" />,
      title: 'Select Role & Level',
      tag: '500+ Curated Tracks',
      desc: 'Pick your exact role (Frontend, Backend, System Design, PM, Data Science) or paste any custom job description to calibrate questions.',
      action: 'Frontend, Backend, AI & more'
    },
    {
      num: '02',
      icon: <UserCheck size={22} color="#06b6d4" />,
      title: 'AI Interviewer Persona',
      tag: 'Adaptive Personalities',
      desc: 'Choose your interviewer style: Encouraging Mentor, Rigorous Bar Raiser, Fast-Paced Recruiter, or Skeptical Technical Lead.',
      action: 'Customizable tone & strictness'
    },
    {
      num: '03',
      icon: <Mic size={22} color="#a855f7" />,
      title: 'Live Dynamic Simulation',
      tag: 'Conversational Voice AI',
      desc: 'Engage in natural back-and-forth speech. The AI listens, pauses realistically, and asks contextual follow-up questions to probe deeper.',
      action: '<300ms ultra-low latency'
    },
    {
      num: '04',
      icon: <HelpCircle size={22} color="#f59e0b" />,
      title: 'Real-Time Hints & Guidance',
      tag: 'Practice Mode Support',
      desc: 'Stuck on an algorithm or architecture boundary? Request a progressive hint or clarify requirements without hurting your score.',
      action: 'Safe sandbox environment'
    },
    {
      num: '05',
      icon: <FileText size={22} color="#10b981" />,
      title: 'Instant Multi-Dimensional Report',
      tag: 'Deep Qualitative Scorecard',
      desc: 'Receive comprehensive evaluation with timestamped audio transcriptions, STAR method breakdowns, and body language heatmaps.',
      action: 'Downloadable PDF & metrics'
    },
    {
      num: '06',
      icon: <TrendingUp size={22} color="#ec4899" />,
      title: 'Tailored Action Plan',
      tag: 'Targeted Drill Library',
      desc: 'Get exact model answers with highlighted power verbs, follow-up drills, and tailored practice routines to eliminate weak spots.',
      action: 'Proven 3.2x offer accelerator'
    }
  ];

  return (
    <section id="journey" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span className="badge-pill badge-purple" style={{ marginBottom: '14px' }}>
            THE INTERVIEW PRACTICE LIFECYCLE
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            One Platform. Your Complete Interview Practice Journey.
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7 }}>
            From role customization to ultra-realistic video simulation and instant diagnostic scoring,
            master every interview phase with structured, deliberate practice.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px 26px',
                background: 'linear-gradient(180deg, #121827 0%, #0c101b 100%)',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Number & Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: '#334155',
                    letterSpacing: '-0.03em',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    {s.num}
                  </span>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {s.icon}
                  </div>
                </div>

                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#a5b4fc',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}>
                  {s.tag}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '12px' }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                  {s.desc}
                </p>
              </div>

              {/* Bottom tag indicator */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#64748b'
              }}>
                <span>{s.action}</span>
                <button
                  onClick={() => onStartPractice()}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#818cf8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  <span>Try step</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
