import React from 'react';
import { Flag, GraduationCap, Briefcase, Award, Check } from 'lucide-react';

interface SeniorityLevelTracksProps {
  onSelectLevel: (level: string) => void;
}

export const SeniorityLevelTracks: React.FC<SeniorityLevelTracksProps> = ({
  onSelectLevel
}) => {
  const levels = [
    {
      exp: '0 - 1 YEARS',
      title: 'Beginner',
      desc: 'Build your fundamentals. Master core syntax, simple algorithmic problem solving, and confidence under evaluation.',
      features: ['Core concepts', 'Basic data structures', 'Clean syntax'],
      btnText: 'Explore Beginner',
      icon: <Flag size={20} color="#a5b4fc" />,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      isHighlight: false
    },
    {
      exp: '1 - 2 YEARS',
      title: 'Entry Level',
      desc: 'Prepare for your first professional role. Communicate portfolio project decisions, API integrations, and teamwork experiences.',
      features: ['Practical fundamentals', 'Project explanations', 'Verbal clarity'],
      btnText: 'Explore Entry-Level',
      icon: <GraduationCap size={20} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      isHighlight: false
    },
    {
      exp: '2 - 5 YEARS',
      title: 'Mid Level',
      desc: 'Go deeper into production realities. Articulate trade-offs, debugging edge cases, system performance, and refactoring.',
      features: ['Architecture trade-offs', 'Production debugging', 'Technical diplomacy'],
      btnText: 'Explore Mid-Level',
      icon: <Briefcase size={20} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.2)',
      isHighlight: true
    },
    {
      exp: '5+ YEARS',
      title: 'Senior & Staff',
      desc: 'Command high-impact technical discussions. Tackle distributed architecture, executive cross-functional alignment, and team mentorship.',
      features: ['System architecture', 'Staff scenarios', 'Complex trade-offs'],
      btnText: 'Explore Senior',
      icon: <Award size={20} color="#a5b4fc" />,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      isHighlight: false
    }
  ];

  return (
    <section style={{ padding: '40px 0 70px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            marginBottom: '10px'
          }}>
            SENIORITY ALIGNMENT
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            Practice at the Right Level
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6
          }}>
            Rubrics and inquiry depth match the exact expectations of hiring committees.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {levels.map((lvl, idx) => (
            <div
              key={idx}
              style={{
                background: '#0a0e18',
                border: lvl.isHighlight ? '1px solid rgba(99, 102, 241, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '30px 24px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: lvl.isHighlight ? '0 20px 50px rgba(99, 102, 241, 0.18)' : '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                if (!lvl.isHighlight) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                if (!lvl.isHighlight) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              {/* Highlight Badge */}
              {lvl.isHighlight && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#6366f1',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 12px',
                  borderRadius: '100px',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
                  letterSpacing: '0.02em'
                }}>
                  Most Active
                </div>
              )}

              <div>
                {/* Icon */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: lvl.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {lvl.icon}
                </div>

                {/* Experience Range */}
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#64748b',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}>
                  {lvl.exp}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  {lvl.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}>
                  {lvl.desc}
                </p>

                {/* Features Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {lvl.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#cbd5e1' }}>
                      <Check size={14} color="#38bdf8" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectLevel(lvl.title)}
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '24px',
                  border: lvl.isHighlight ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: lvl.isHighlight ? 'linear-gradient(135deg, #818cf8 0%, #a855f7 100%)' : '#151a28',
                  color: lvl.isHighlight ? '#ffffff' : '#cbd5e1',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: lvl.isHighlight ? '0 4px 15px rgba(129, 140, 248, 0.35)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (lvl.isHighlight) {
                    e.currentTarget.style.opacity = '0.92';
                  } else {
                    e.currentTarget.style.background = '#1e2638';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (lvl.isHighlight) {
                    e.currentTarget.style.opacity = '1';
                  } else {
                    e.currentTarget.style.background = '#151a28';
                    e.currentTarget.style.color = '#cbd5e1';
                  }
                }}
              >
                {lvl.btnText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
