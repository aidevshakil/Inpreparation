import React from 'react';
import {
  Activity,
  MessageSquare,
  ShieldCheck,
  Mic,
  Video,
  ShieldAlert
} from 'lucide-react';

export const EmailVerificationJourneyPreview: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Verify Account',
      subtitle: 'Identity Check',
      isActive: true
    },
    {
      num: '02',
      title: 'Build Profile',
      subtitle: 'Roles & Tiers',
      isActive: false
    },
    {
      num: '03',
      title: 'CV Analysis',
      subtitle: 'Skill Vectors',
      isActive: false
    },
    {
      num: '04',
      title: 'Assessment',
      subtitle: 'Baseline Prep',
      isActive: false
    },
    {
      num: '05',
      title: '5-Q Practice',
      subtitle: 'Realistic Mock',
      isActive: false
    },
    {
      num: '06',
      title: 'AI Feedback',
      subtitle: 'STAR Scoring',
      isActive: false
    },
    {
      num: '07',
      title: 'Improvement',
      subtitle: 'Target Drills',
      isActive: false
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      
      {/* Top Section Header */}
      <div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px',
          borderRadius: '9999px',
          background: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          fontSize: '11px',
          fontWeight: 700,
          color: '#818cf8',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '14px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8' }} />
          <span>CANDIDATE ACCELERATION JOURNEY</span>
        </div>

        <h2 style={{
          fontSize: '36px',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          margin: '0 0 14px 0'
        }}>
          Start Your Interview Preparation Journey.
        </h2>

        <p style={{
          fontSize: '14px',
          color: '#94a3b8',
          lineHeight: 1.6,
          margin: 0
        }}>
          Once your account is verified, Inprep AI activates your candidate sandbox: build your professional profile, uncover hidden competency vectors, practice role-calibrated 5-question simulations, and refine every response with multimodal diagnostics.
        </p>
      </div>

      {/* The Candidate Journey Flow Card */}
      <div style={{
        background: 'rgba(12, 17, 29, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Card Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#a5b4fc',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            <Activity size={15} color="#818cf8" />
            <span>THE CANDIDATE JOURNEY FLOW</span>
          </div>

          <div style={{
            padding: '3px 10px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '11px',
            color: '#94a3b8',
            background: 'rgba(255, 255, 255, 0.03)'
          }}>
            7 Progressive Milestones
          </div>
        </div>

        {/* 7 Progressive Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(72px, 1fr))',
          gap: '8px'
        }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: step.isActive ? 'rgba(79, 70, 229, 0.18)' : 'rgba(255, 255, 255, 0.02)',
                border: step.isActive ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '10px',
                padding: '10px 8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                position: 'relative'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  color: step.isActive ? '#a5b4fc' : '#64748b'
                }}>
                  {step.num}
                </span>
                {step.isActive && (
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#818cf8',
                    boxShadow: '0 0 6px #818cf8'
                  }} />
                )}
              </div>

              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                color: step.isActive ? '#ffffff' : '#cbd5e1',
                lineHeight: 1.25
              }}>
                {step.title}
              </div>

              <div style={{
                fontSize: '9.5px',
                color: step.isActive ? '#a5b4fc' : '#64748b',
                lineHeight: 1.2
              }}>
                {step.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2x2 Multimodal Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '14px'
      }}>
        
        {/* Card 1: Role-Specific Simulation */}
        <div style={{
          background: 'rgba(12, 17, 29, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#818cf8'
            }}>
              <MessageSquare size={16} />
            </div>
            <h3 style={{
              fontSize: '13.5px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0
            }}>
              Role-Specific Simulation
            </h3>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#94a3b8',
            lineHeight: 1.5,
            margin: 0
          }}>
            Practice 5 realistic questions calibrated dynamically to your target seniority tier, from foundational engineering to Staff &amp; Principal roles.
          </p>
        </div>

        {/* Card 2: Technical Deep-Dive Rubrics */}
        <div style={{
          background: 'rgba(12, 17, 29, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399'
            }}>
              <ShieldCheck size={16} />
            </div>
            <h3 style={{
              fontSize: '13.5px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0
            }}>
              Technical Deep-Dive Rubrics
            </h3>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#94a3b8',
            lineHeight: 1.5,
            margin: 0
          }}>
            Transparent assessment measuring factual correctness, edge-case consideration, system trade-offs, and logical architectural reasoning.
          </p>
        </div>

        {/* Card 3: Speech Cadence & Delivery */}
        <div style={{
          background: 'rgba(12, 17, 29, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fbbf24'
            }}>
              <Mic size={16} />
            </div>
            <h3 style={{
              fontSize: '13.5px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0
            }}>
              Speech Cadence &amp; Delivery
            </h3>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#94a3b8',
            lineHeight: 1.5,
            margin: 0
          }}>
            Actionable acoustic signals analyzing speaking pace (130–150 WPM benchmark), filler word frequency, and conversational prosody.
          </p>
        </div>

        {/* Card 4: Observable Video Hygiene */}
        <div style={{
          background: 'rgba(12, 17, 29, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(20, 184, 166, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2dd4bf'
            }}>
              <Video size={16} />
            </div>
            <h3 style={{
              fontSize: '13.5px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0
            }}>
              Observable Video Hygiene
            </h3>
          </div>
          <p style={{
            fontSize: '12px',
            color: '#94a3b8',
            lineHeight: 1.5,
            margin: 0
          }}>
            Camera-framing ergonomics, ambient lighting balance, posture stability, and eye-level alignment diagnostics for professional remote interviews.
          </p>
        </div>

      </div>

      {/* Responsible AI & Multimodal Transparency Card */}
      <div style={{
        background: 'rgba(12, 17, 29, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '14px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px'
      }}>
        <ShieldAlert size={20} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0
          }}>
            Responsible AI &amp; Multimodal Transparency
          </h4>
          <p style={{
            fontSize: '12px',
            color: '#94a3b8',
            lineHeight: 1.55,
            margin: 0
          }}>
            AI feedback focuses strictly on observable technical responses, acoustic speech pacing, and camera framing hygiene. Inprep AI strictly disclaims psychological inference, emotion detection, honesty claims, or automated hiring decisions.
          </p>
        </div>
      </div>

    </div>
  );
};
