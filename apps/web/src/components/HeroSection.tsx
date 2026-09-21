import React from 'react';
import { ArrowRight, Play, Check, Radio, Clock, UserCheck, TrendingUp, Mic } from 'lucide-react';

interface HeroSectionProps {
  onStartPractice: (role?: string) => void;
  onOpenDemo: () => void;
  onNavigateToFeatures?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPractice,
  onOpenDemo,
  onNavigateToFeatures
}) => {
  const featurePillars = [
    {
      icon: <Radio size={20} color="#818cf8" />,
      bg: 'rgba(129, 140, 248, 0.1)',
      title: 'Multimodal AI Engine',
      subtitle: 'Tech, voice, syntax & visual signals',
    },
    {
      icon: <Clock size={20} color="#6366f1" />,
      bg: 'rgba(99, 102, 241, 0.1)',
      title: 'Strict 5-Question Rounds',
      subtitle: 'Calibrated for 15-minute mastery',
    },
    {
      icon: <UserCheck size={20} color="#38bdf8" />,
      bg: 'rgba(56, 189, 248, 0.1)',
      title: 'CV & Role Tailored',
      subtitle: 'Dynamic seniority adaptation',
    },
    {
      icon: <TrendingUp size={20} color="#10b981" />,
      bg: 'rgba(16, 185, 129, 0.1)',
      title: 'Longitudinal Tracking',
      subtitle: 'Measured readiness trajectory',
    }
  ];

  return (
    <section id="hero" style={{ padding: '100px 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="flex-col gap-6">
            <div className="badge" style={{ alignSelf: 'flex-start', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '6px 14px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>AI-POWERED INTERVIEW PREPARATION</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(42px, 5.5vw, 68px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}>
              Practice Interviews.<br />
              <span style={{ 
                background: 'linear-gradient(90deg, #93c5fd 0%, #38bdf8 100%)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                Get Real Feedback.
              </span><br />
              Improve Faster.
            </h1>

            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '540px', lineHeight: 1.6 }}>
              Practice realistic interviews with AI and receive actionable feedback on your technical answers, communication, speech, and on-camera presentation.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={() => onStartPractice()}
                className="btn"
                style={{ 
                  padding: '16px 32px', 
                  fontSize: '16px',
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onNavigateToFeatures ? onNavigateToFeatures : onOpenDemo}
                className="btn"
                style={{ 
                  padding: '16px 32px', 
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Play size={18} />
                <span>See How It Works</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4" style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              <span className="flex items-center gap-2">
                <Check size={14} color="#38bdf8" /> No credit card required
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span className="flex items-center gap-2">
                <Check size={14} color="#38bdf8" /> Exactly 5 questions per session
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span className="flex items-center gap-2">
                <Check size={14} color="#38bdf8" /> Real-time AI coaching
              </span>
            </div>
          </div>

          {/* Right Column: Clean Mockup */}
          <div className="card" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}>
            {/* Window Header */}
            <div className="flex items-center justify-between" style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Inprep Live Diagnostic Room • ID-8492
                </span>
              </div>
              <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
                Active 5-Question Run
              </div>
            </div>

            <div className="flex-col gap-6" style={{ padding: '24px' }}>
              <div className="flex items-center justify-between" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
                <span>QUESTION 2 OF 5 • TECHNICAL CORE</span>
                <span>Time in Prompt: 01:14</span>
              </div>

              <div style={{ fontSize: '18px', fontWeight: 600, lineHeight: 1.5, color: 'var(--text-main)' }}>
                “Explain the difference between synchronous and asynchronous programming in Python, highlighting event loops and I/O bound tasks.”
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* AI Interviewer Video */}
                <div style={{ height: '220px', backgroundColor: 'var(--bg-surface)', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid var(--border-subtle)' }}>
                  <img src="/assets/ai_interviewer.jpg" alt="AI Interviewer" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  
                  {/* Top overlay */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '12px', fontWeight: 600, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    AI Interviewer • Dr. Sarah Vance
                  </div>
                  <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '4px', borderRadius: '4px' }}>
                    <Mic size={14} color="#fff" />
                  </div>

                  {/* Bottom overlay */}
                  <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="flex items-end gap-1" style={{ height: '20px' }}>
                      <div style={{ width: '3px', height: '12px', backgroundColor: '#38bdf8', borderRadius: '2px' }} />
                      <div style={{ width: '3px', height: '20px', backgroundColor: '#38bdf8', borderRadius: '2px' }} />
                      <div style={{ width: '3px', height: '16px', backgroundColor: '#38bdf8', borderRadius: '2px' }} />
                      <div style={{ width: '3px', height: '10px', backgroundColor: '#38bdf8', borderRadius: '2px' }} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>Listening to explanation</span>
                  </div>
                </div>

                {/* Candidate Video */}
                <div style={{ height: '220px', backgroundColor: 'var(--bg-surface)', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid var(--border-subtle)' }}>
                  <img src="/assets/candidate.jpg" alt="Candidate" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  
                  {/* AI Scanning bounding box visual */}
                  <div style={{ position: 'absolute', top: '20%', left: '20%', right: '20%', bottom: '20%', border: '1px dashed rgba(56, 189, 248, 0.4)', borderRadius: '8px' }} />

                  {/* Top overlay */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '12px', fontWeight: 600, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    Candidate Preview<br/>(You)
                  </div>
                  <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '4px 8px', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: '#4ade80', fontWeight: 600 }}>Camera</span>
                    <span style={{ fontSize: '11px', color: '#4ade80', fontWeight: 700 }}>1080p</span>
                  </div>

                  {/* Bottom overlay */}
                  <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '11px', fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px' }}>
                      <span style={{ color: '#fff' }}>Lighting: </span>
                      <span style={{ color: '#38bdf8' }}>Optimal</span>
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px' }}>
                      <span style={{ color: '#fff' }}>Eye-level: </span>
                      <span style={{ color: '#4ade80' }}>Calibrated</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Telemetry Footer */}
              <div className="flex-col gap-3" style={{ padding: '16px', backgroundColor: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div className="flex items-center gap-3">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f87171', boxShadow: '0 0 8px #f87171' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>Live Speech Telemetry</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', backgroundColor: 'var(--border-subtle)', padding: '2px 6px', borderRadius: '4px' }}>REC 01:14</span>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#a855f7', padding: '4px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 600 }}>
                    142 WPM • Steady Cadence
                  </div>
                  <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', padding: '4px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 600 }}>
                    Fillers: 0 in current 30s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Horizontal Feature Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {featurePillars.map((pillar, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: '16px', 
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: pillar.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {pillar.icon}
              </div>

              <div className="flex-col gap-1">
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>{pillar.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{pillar.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
