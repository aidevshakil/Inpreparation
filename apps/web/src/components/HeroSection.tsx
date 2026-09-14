import React from 'react';
import { ArrowRight, Play, Check, Radio, Clock, UserCheck, TrendingUp } from 'lucide-react';

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
      icon: <Radio size={18} />,
      title: 'Multimodal AI Engine',
      subtitle: 'Tech, voice, syntax & visual signals',
    },
    {
      icon: <Clock size={18} />,
      title: 'Strict 5-Question Rounds',
      subtitle: 'Calibrated for 15-minute mastery',
    },
    {
      icon: <UserCheck size={18} />,
      title: 'CV & Role Tailored',
      subtitle: 'Dynamic seniority adaptation',
    },
    {
      icon: <TrendingUp size={18} />,
      title: 'Longitudinal Tracking',
      subtitle: 'Measured readiness trajectory',
    }
  ];

  return (
    <section id="hero" style={{ padding: '80px 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="flex-col gap-6">
            <div className="badge" style={{ alignSelf: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }} />
              AI-POWERED INTERVIEW PREPARATION
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 5.2vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
            }}>
              Practice Interviews.<br />
              <span style={{ color: 'var(--text-secondary)' }}>
                Get Real Feedback.
              </span><br />
              Improve Faster.
            </h1>

            <p style={{ fontSize: '18px', maxWidth: '540px' }}>
              Practice realistic interviews with AI and receive actionable feedback on your technical answers, communication, speech, and on-camera presentation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onStartPractice()}
                className="btn btn-primary"
                style={{ padding: '14px 30px', fontSize: '16px' }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onNavigateToFeatures ? onNavigateToFeatures : onOpenDemo}
                className="btn btn-outline"
                style={{ padding: '14px 26px', fontSize: '16px' }}
              >
                <Play size={16} />
                <span>Explore Features</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-muted" style={{ fontSize: '14px' }}>
              <span className="flex items-center gap-2">
                <Check size={16} /> No credit card required
              </span>
              <span>•</span>
              <span>Exactly 5 questions per session</span>
              <span>•</span>
              <span>Real-time AI coaching</span>
            </div>
          </div>

          {/* Right Column: Clean Mockup */}
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            {/* Window Header */}
            <div className="flex items-center justify-between" style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}>
              <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--border-focus)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--border-focus)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--border-focus)' }} />
              </div>
              <div className="badge" style={{ backgroundColor: 'transparent' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-success)' }} />
                Active Diagnostic
              </div>
            </div>

            <div className="flex-col gap-6" style={{ padding: '24px' }}>
              <div className="flex items-center justify-between" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                <span>QUESTION 2 OF 5</span>
                <span>01:14</span>
              </div>

              <div style={{ fontSize: '18px', fontWeight: 600, lineHeight: 1.5 }}>
                “Explain the difference between synchronous and asynchronous programming in Python, highlighting event loops and I/O bound tasks.”
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ height: '200px', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  [AI Interviewer Video Feed]
                </div>
                <div style={{ height: '200px', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  [Candidate Video Feed]
                </div>
              </div>
              
              <div className="flex items-center justify-between" style={{ padding: '16px', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Live Telemetry</span>
                  <div className="badge">142 WPM</div>
                  <div className="badge">0 Fillers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Horizontal Feature Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {featurePillars.map((pillar, idx) => (
            <div key={idx} className="card flex items-start gap-4">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {pillar.icon}
              </div>

              <div className="flex-col gap-1">
                <div style={{ fontSize: '16px', fontWeight: 600 }}>{pillar.title}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{pillar.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
