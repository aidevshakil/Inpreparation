import React from 'react';
import {
  TrendingUp,
  MessageSquare,
  Gauge,
  Award,
  Video,
  Shield
} from 'lucide-react';

export const SignupJourneyPreview: React.FC = () => {
  const stages = [
    { num: '01', title: 'Create Profile', desc: 'Role, level & goals' },
    { num: '02', title: 'CV Analysis', desc: 'Semantic extraction' },
    { num: '03', title: 'Assessment', desc: 'Tailored curation' },
    { num: '04', title: '5–Q Practice', desc: 'Realistic simulation' },
    { num: '05', title: 'AI Feedback', desc: 'Multimodal metrics' },
    { num: '06', title: 'Improvement', desc: 'Actionable drills' }
  ];

  const pillars = [
    {
      icon: <MessageSquare size={17} color="#a5b4fc" />,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      title: 'AI Interview Practice',
      desc: 'Practice realistic interview questions calibrated to specific engineering & management tiers.'
    },
    {
      icon: <Gauge size={17} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      title: 'Technical Evaluation',
      desc: 'Understand the accuracy, relevance, completeness, and architectural trade-off reasoning of your answers.'
    },
    {
      icon: <Award size={17} color="#fbbf24" />,
      iconBg: 'rgba(245, 158, 11, 0.15)',
      title: 'Speech Intelligence',
      desc: 'Analyze measurable speaking characteristics such as pace (WPM), hesitation pauses, filler words, and vocal fluency.'
    },
    {
      icon: <Video size={17} color="#34d399" />,
      iconBg: 'rgba(16, 185, 129, 0.15)',
      title: 'Computer Vision',
      desc: 'Diagnose observable framing signals like face visibility, camera attention, head alignment, and lighting balance.'
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      
      {/* Top Header */}
      <div>
        {/* Pill Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '5px 14px',
          borderRadius: '100px',
          background: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          fontSize: '11px',
          fontWeight: 700,
          color: '#818cf8',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '14px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', display: 'inline-block' }} />
          <span>END-TO-END CAREER ACCELERATION</span>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '10px'
        }}>
          Your Interview Practice Starts Here.
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '14px',
          color: '#94a3b8',
          lineHeight: 1.6,
          margin: 0
        }}>
          Build your profile, discover relevant interviews, practice with AI, and understand exactly where you can improve with multimodal diagnostics.
        </p>
      </div>

      {/* The Candidate Journey Flow Box */}
      <div style={{
        background: '#090d16',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        padding: '24px 22px',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', fontWeight: 800, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <TrendingUp size={14} color="#818cf8" />
            <span>THE CANDIDATE JOURNEY FLOW</span>
          </div>

          <span style={{
            fontSize: '10.5px',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '100px',
            background: 'rgba(124, 58, 237, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            color: '#c084fc',
            letterSpacing: '0.04em'
          }}>
            6 Progressive Stages
          </span>
        </div>

        {/* 6 Stages Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px'
        }}>
          {stages.map((stg, idx) => (
            <div
              key={idx}
              style={{
                background: '#0e1320',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '12px 14px',
                position: 'relative',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(129, 140, 248, 0.3)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Dot indicator */}
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#6366f1',
                boxShadow: '0 0 6px #6366f1'
              }} />

              <div style={{ fontSize: '11px', fontWeight: 800, color: '#818cf8', marginBottom: '4px' }}>
                {stg.num}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                {stg.title}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>
                {stg.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Core Pillars (2x2 Grid) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px'
      }}>
        {pillars.map((pil, idx) => (
          <div
            key={idx}
            style={{
              background: '#090d16',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '18px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: pil.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px'
              }}>
                {pil.icon}
              </div>

              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                {pil.title}
              </div>

              <p style={{ fontSize: '11.5px', color: '#8896ab', lineHeight: 1.55, margin: 0 }}>
                {pil.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsible AI Transparency Notice */}
      <div style={{
        background: '#090d16',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '16px 18px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <div style={{
          width: '30px',
          height: '30px',
          borderRadius: '8px',
          background: 'rgba(56, 189, 248, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Shield size={15} color="#38bdf8" />
        </div>

        <div>
          <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
            Responsible AI & Multimodal Transparency
          </div>
          <p style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
            AI feedback focuses solely on observable technical responses, acoustic speech pacing, and camera framing hygiene. Inprep AI strictly disclaims psychological inference, emotion detection, honesty claims, or automated hiring decisions.
          </p>
        </div>
      </div>

    </div>
  );
};
