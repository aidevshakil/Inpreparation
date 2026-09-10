import React, { useState } from 'react';
import { Target, MessageSquare, Video, Cpu } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: 0,
      icon: <Target size={22} color="#818cf8" />,
      title: 'Structured Frameworks',
      badge: 'STAR / PREP Method',
      percentage: 88,
      accentColor: '#818cf8',
      description: 'Scored on context setting, concrete action clarity, and quantifiable results rather than rambling stories.',
      benchmarks: ['Clear Situation framing', 'Specific Task ownership', 'Detailed Action execution', 'Measurable Result takeaways']
    },
    {
      id: 1,
      icon: <MessageSquare size={22} color="#06b6d4" />,
      title: 'Communication & Pacing',
      badge: 'Cadence & Flow',
      percentage: 92,
      accentColor: '#06b6d4',
      description: 'Monitors optimal speaking rate (130-150 WPM), pauses for emphasis, and eliminates filler words (um, like, basically).',
      benchmarks: ['Zero filler words (<1%)', '135 WPM optimal pacing', 'Concise 90s response targets', 'Clear vocal inflection']
    },
    {
      id: 2,
      icon: <Video size={22} color="#a855f7" />,
      title: 'Body Language & Tone',
      badge: 'Presence & Gaze',
      percentage: 78,
      accentColor: '#a855f7',
      description: 'Tracks eye contact alignment to the lens, stable upright posture, natural smiling, and calm composure under tough questions.',
      benchmarks: ['94%+ Camera eye contact', 'Calm posture & gestures', 'Vocal pitch stability', 'Authentic executive presence']
    },
    {
      id: 3,
      icon: <Cpu size={22} color="#10b981" />,
      title: 'Technical Depth & Logic',
      badge: 'Trade-off Analysis',
      percentage: 95,
      accentColor: '#10b981',
      description: 'Evaluates correctness of algorithmic complexity, architectural boundary decisions, and thorough edge case coverage.',
      benchmarks: ['System bottlenecks identified', 'Big-O space/time trade-offs', 'Resilience & failover strategies', 'Clean conceptual hierarchy']
    }
  ];

  return (
    <section id="pillars" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
            WHY TRADITIONAL PREPARATION FAILS
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            Interviews Are More Than Just Knowing the Answer.
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7 }}>
            Technical knowledge is only 40% of the evaluation rubric. Hiring managers equally judge communication structure,
            confidence under ambiguity, pacing, and how effectively you articulate complex engineering trade-offs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px'
        }}>
          {pillars.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPillar(item.id)}
              className="glass-card"
              style={{
                cursor: 'pointer',
                borderColor: selectedPillar === item.id ? item.accentColor : 'rgba(255, 255, 255, 0.08)',
                boxShadow: selectedPillar === item.id ? `0 0 30px ${item.accentColor}25` : 'none',
                background: selectedPillar === item.id ? '#151b2a' : '#0f1422',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px 24px'
              }}
            >
              <div>
                {/* Card Top */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${item.accentColor}15`,
                    border: `1px solid ${item.accentColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: item.accentColor,
                    background: `${item.accentColor}12`,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: `1px solid ${item.accentColor}25`
                  }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                  {item.description}
                </p>

                {/* Sub benchmarks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {item.benchmarks.map((bm, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#cbd5e1' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: item.accentColor }} />
                      <span>{bm}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Weight Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Rubric Weighting</span>
                  <span style={{ color: item.accentColor, fontWeight: 700 }}>{item.percentage}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${item.percentage}%`,
                    height: '100%',
                    background: item.accentColor,
                    borderRadius: '3px',
                    transition: 'width 0.8s ease'
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
