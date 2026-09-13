import React from 'react';
import { Clock } from 'lucide-react';

interface ChallengeCalibrationProps {
  onSelectDifficulty?: (diff: string) => void;
}

export const ChallengeCalibration: React.FC<ChallengeCalibrationProps> = ({
  onSelectDifficulty
}) => {
  const challenges = [
    {
      level: 'Easy',
      dots: 1,
      totalDots: 3,
      desc: 'Focused on fundamentals, terminology clarity, and building conversational confidence. Standard pacing without edge constraints.',
      time: 'Exactly 5 Questions (~12 mins)',
      dotColor: '#38bdf8'
    },
    {
      level: 'Intermediate',
      dots: 2,
      totalDots: 3,
      desc: 'Realistic commercial interview simulation. Prompts include failure handling, concurrency bottlenecks, and framework nuances.',
      time: 'Exactly 5 Questions (~15 mins)',
      dotColor: '#818cf8'
    },
    {
      level: 'Advanced',
      dots: 3,
      totalDots: 3,
      desc: 'High-pressure scenarios with degraded system conditions, scale constraints, distributed consensus, and rapid follow-ups.',
      time: 'Exactly 5 Questions (~20 mins)',
      dotColor: '#38bdf8'
    }
  ];

  return (
    <section style={{ padding: '20px 0 50px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          background: '#090d16',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '40px 36px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#38bdf8',
              marginBottom: '8px'
            }}>
              CHALLENGE CALIBRATION
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 34px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}>
              Choose Your Challenge
            </h2>
            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              margin: 0
            }}>
              Toggle between calibrated difficulty baselines. Every interview preserves a strict 5–question format.
            </p>
          </div>

          {/* 3 Difficulty Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {challenges.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSelectDifficulty && onSelectDifficulty(item.level)}
                style={{
                  background: '#0f1422',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = '#13192c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#0f1422';
                }}
              >
                <div>
                  {/* Top: Title & Indicator Dots */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      {item.level}
                    </h3>
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                      {[...Array(item.totalDots)].map((_, dIdx) => (
                        <span
                          key={dIdx}
                          style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: dIdx < item.dots ? item.dotColor : 'rgba(255, 255, 255, 0.15)',
                            boxShadow: dIdx < item.dots ? `0 0 8px ${item.dotColor}80` : 'none'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '13px',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0'
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Footer / Time */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#38bdf8'
                }}>
                  <Clock size={13} />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
