import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Layers, 
  Lock, 
  FileText, 
  Brain, 
  Gauge, 
  Video, 
  BarChart3, 
  TrendingUp 
} from 'lucide-react';

interface HowItWorksHeroProps {
  onStartPractice: () => void;
  onExploreInterviews?: () => void;
}

export const HowItWorksHero: React.FC<HowItWorksHeroProps> = ({
  onStartPractice,
  onExploreInterviews
}) => {
  const pipelineSteps = [
    {
      icon: FileText,
      iconColor: '#38bdf8',
      iconBg: 'rgba(56, 189, 248, 0.15)',
      title: 'CV Ingestion',
      subtitle: 'PDF / DOCX Parsing'
    },
    {
      icon: Brain,
      iconColor: '#c084fc',
      iconBg: 'rgba(192, 132, 252, 0.15)',
      title: 'AI Profile',
      subtitle: 'Skill Graph Extraction'
    },
    {
      icon: Gauge,
      iconColor: '#2dd4bf',
      iconBg: 'rgba(45, 212, 191, 0.15)',
      title: 'Assessment',
      subtitle: 'Seniority Calibration'
    },
    {
      icon: Video,
      iconColor: '#818cf8',
      iconBg: 'rgba(129, 140, 248, 0.15)',
      title: '5-Question Mock',
      subtitle: 'Live Conversational AI'
    },
    {
      icon: BarChart3,
      iconColor: '#e879f9',
      iconBg: 'rgba(232, 121, 249, 0.15)',
      title: 'Multimodal',
      subtitle: '4 Acoustic & Visual Streams'
    },
    {
      icon: TrendingUp,
      iconColor: '#38bdf8',
      iconBg: 'rgba(56, 189, 248, 0.15)',
      title: 'Targeted Plan',
      subtitle: 'Iterative Improvement'
    }
  ];

  const trustBadges = [
    { icon: CheckCircle2, text: 'AI-Powered Evaluation' },
    { icon: Sliders, text: 'Personalized Practice' },
    { icon: Layers, text: 'Multimodal Feedback' },
    { icon: Lock, text: 'Privacy-Focused' }
  ];

  return (
    <section style={{ padding: '60px 0 40px', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '-10%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '700px', 
          height: '450px', 
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.18) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1080px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Top Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px' }}>
          <Sparkles size={13} color="#94a3b8" />
          <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', color: '#94a3b8', textTransform: 'uppercase' }}>
            HOW IT WORKS
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(32px, 4.5vw, 52px)',
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-0.025em',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          From Your CV to Interview Ready —{' '}
          <span style={{
            background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Step by Step
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(15px, 1.8vw, 17px)',
          color: '#94a3b8',
          lineHeight: 1.6,
          maxWidth: '780px',
          margin: '0 auto 32px'
        }}>
          Inprep AI turns your background, skills, and target roles into precision interview simulations with intelligent multimodal feedback on your technical accuracy, communication, voice cadence, and visual composure.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '32px' }}>
          <button
            onClick={onStartPractice}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '9999px',
              background: '#6366f1',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.background = '#4f46e5'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#6366f1'; }}
          >
            <span>Start Practicing Free</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onExploreInterviews || onStartPractice}
            style={{
              padding: '12px 26px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#cbd5e1',
              fontSize: '15px',
              fontWeight: 500,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = '#cbd5e1'; }}
          >
            Explore Interviews
          </button>
        </div>

        {/* Trust Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px 24px',
          marginBottom: '52px',
          color: '#94a3b8',
          fontSize: '13px',
          fontWeight: 500
        }}>
          {trustBadges.map((badge, idx) => (
            <React.Fragment key={idx}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <badge.icon size={15} color="#818cf8" />
                <span>{badge.text}</span>
              </div>
              {idx < trustBadges.length - 1 && (
                <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '10px' }}>•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Live Architecture Pipeline Card */}
        <div style={{
          background: '#0a0e17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '24px 28px',
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
          textAlign: 'left'
        }}>
          {/* Header Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            paddingBottom: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#94a3b8', textTransform: 'uppercase' }}>
                LIVE ARCHITECTURE PIPELINE
              </span>
            </div>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              Zero Latency Feedback Loop
            </span>
          </div>

          {/* 6 Step Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
            gap: '12px'
          }}>
            {pipelineSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: '#0f1422',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '14px',
                    padding: '16px 12px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: step.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}>
                    <StepIcon size={20} color={step.iconColor} />
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.3 }}>
                    {step.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

