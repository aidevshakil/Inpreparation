import React, { useState } from 'react';
import { ArrowRight, Play, Volume2, Check, Radio, Clock, UserCheck, TrendingUp } from 'lucide-react';

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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSampleVoice = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const text = "Explain the difference between synchronous and asynchronous programming in Python, highlighting event loops and I/O bound tasks.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.05;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    } else {
      setIsPlayingAudio(!isPlayingAudio);
    }
  };

  const featurePillars = [
    {
      icon: <Radio size={18} color="#818cf8" />,
      title: 'Multimodal AI Engine',
      subtitle: 'Tech, voice, syntax & visual signals',
    },
    {
      icon: <Clock size={18} color="#a5b4fc" />,
      title: 'Strict 5-Question Rounds',
      subtitle: 'Calibrated for 15-minute mastery',
    },
    {
      icon: <UserCheck size={18} color="#38bdf8" />,
      title: 'CV & Role Tailored',
      subtitle: 'Dynamic seniority adaptation',
    },
    {
      icon: <TrendingUp size={18} color="#34d399" />,
      title: 'Longitudinal Tracking',
      subtitle: 'Measured readiness trajectory',
    }
  ];

  return (
    <section id="hero" style={{ position: 'relative', paddingTop: '52px', paddingBottom: '70px', overflow: 'hidden' }}>
      {/* Ambient background soft glow */}
      <div className="bg-ambient-glow" style={{ top: '-15%', left: '10%', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, transparent 70%)' }} />
      <div className="bg-ambient-glow" style={{ top: '20%', right: '2%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, transparent 70%)' }} />

      <div className="container">
        {/* Main 2-Column Hero Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '56px'
        }}>
          {/* Left Column: Headline, Copy & CTAs */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Pill Tag */}
            <div style={{ marginBottom: '22px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#cbd5e1'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60a5fa', boxShadow: '0 0 8px #60a5fa' }} />
                AI-POWERED INTERVIEW PREPARATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(40px, 5.2vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              marginBottom: '22px',
              color: '#ffffff'
            }}>
              Practice Interviews.<br />
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 55%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Get Real Feedback.
              </span><br />
              Improve Faster.
            </h1>

            {/* Subparagraph */}
            <p style={{
              fontSize: '17px',
              color: '#94a3b8',
              lineHeight: 1.65,
              marginBottom: '34px',
              maxWidth: '540px'
            }}>
              Practice realistic interviews with AI and receive actionable feedback on your technical answers, communication, speech, and on-camera presentation.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '32px'
            }}>
              <button
                onClick={() => onStartPractice()}
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                  color: '#ffffff',
                  padding: '14px 30px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.45)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 28px rgba(99, 102, 241, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.45)';
                }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onNavigateToFeatures ? onNavigateToFeatures : onOpenDemo}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: '#e2e8f0',
                  padding: '14px 26px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Play size={10} fill="#e2e8f0" style={{ marginLeft: '1px' }} />
                </div>
                <span>Explore Features</span>
              </button>
            </div>

            {/* Trust Points */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              fontSize: '13px',
              color: '#94a3b8'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="#60a5fa" /> No credit card required
              </span>
              <span>•</span>
              <span>Exactly 5 questions per session</span>
              <span>•</span>
              <span>Real-time AI coaching</span>
            </div>
          </div>

          {/* Right Column: Inprep Live Diagnostic Room Card */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              background: 'linear-gradient(180deg, #111624 0%, #0c101a 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.85), 0 0 50px rgba(99, 102, 241, 0.2)',
              overflow: 'hidden',
              backdropFilter: 'blur(24px)',
              position: 'relative'
            }}>
              {/* Window Header */}
              <div style={{
                background: 'rgba(17, 23, 38, 0.85)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#34d399' }} />
                  <span style={{ fontSize: '12px', color: '#94a3b8', marginLeft: '8px', fontWeight: 500 }}>
                    Inprep Live Diagnostic Room • ID-8492
                  </span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#67e8f9',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '9999px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 6px #06b6d4' }} />
                  Active 5-Question Run
                </div>
              </div>

              {/* Main Content Area */}
              <div style={{ padding: '20px' }}>
                {/* Question Info Bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#818cf8',
                  marginBottom: '10px'
                }}>
                  <span>QUESTION 2 OF 5 • TECHNICAL CORE</span>
                  <span style={{ color: '#94a3b8', fontWeight: 500, letterSpacing: 'normal', textTransform: 'none' }}>
                    Time in Prompt: 01:14
                  </span>
                </div>

                {/* Prompt Text */}
                <div style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#f8fafc',
                  lineHeight: 1.5,
                  marginBottom: '18px'
                }}>
                  “Explain the difference between synchronous and asynchronous programming in Python, highlighting event loops and I/O bound tasks.”
                </div>

                {/* Dual Video Feeds */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                  marginBottom: '18px'
                }}>
                  {/* Left Stream: AI Interviewer Dr. Sarah Vance */}
                  <div style={{
                    position: 'relative',
                    height: '210px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: '#0a0e18'
                  }}>
                    <img
                      src="/interviewer_sarah.jpg"
                      alt="AI Interviewer Dr. Sarah Vance"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />

                    {/* Top Header Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      right: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(9, 13, 22, 0.75)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      color: '#f8fafc',
                      fontWeight: 600
                    }}>
                      <span>AI Interviewer • Dr. Sarah Vance</span>
                      <button
                        onClick={toggleSampleVoice}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: isPlayingAudio ? '#60a5fa' : '#94a3b8',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0'
                        }}
                        title="Play / Pause Voice"
                      >
                        <Volume2 size={13} />
                      </button>
                    </div>

                    {/* Bottom Status Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      right: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(9, 13, 22, 0.82)',
                      backdropFilter: 'blur(8px)',
                      padding: '5px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      color: '#cbd5e1'
                    }}>
                      {/* Audio waveform bars */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '14px' }}>
                        {[8, 14, 20, 10, 16, 8].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              width: '2.5px',
                              height: isPlayingAudio ? `${h}px` : '5px',
                              background: '#38bdf8',
                              borderRadius: '1px',
                              transition: 'height 0.2s ease'
                            }}
                          />
                        ))}
                      </div>
                      <span style={{ fontWeight: 500 }}>Listening to explanation</span>
                    </div>
                  </div>

                  {/* Right Stream: Candidate Preview (You) */}
                  <div style={{
                    position: 'relative',
                    height: '210px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(6, 182, 212, 0.35)',
                    background: '#0a0e18'
                  }}>
                    <img
                      src="/candidate_alex.jpg"
                      alt="Candidate Preview"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />

                    {/* Top Header Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      right: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(9, 13, 22, 0.75)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      color: '#f8fafc',
                      fontWeight: 600
                    }}>
                      <span>Candidate Preview (You)</span>
                      <span style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        color: '#10b981',
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        padding: '1px 6px',
                        borderRadius: '4px'
                      }}>
                        Camera 1080p
                      </span>
                    </div>

                    {/* Bottom Status Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      right: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(9, 13, 22, 0.82)',
                      backdropFilter: 'blur(8px)',
                      padding: '5px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      color: '#cbd5e1'
                    }}>
                      <span>Lighting: <strong style={{ color: '#67e8f9' }}>Optimal</strong></span>
                      <span>Eye-level: <strong style={{ color: '#10b981' }}>Calibrated</strong></span>
                    </div>
                  </div>
                </div>

                {/* Bottom Speech Telemetry Bar */}
                <div style={{
                  background: 'rgba(9, 13, 22, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'pulseGlow 1.5s infinite' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#f8fafc' }}>Live Speech Telemetry</span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#cbd5e1',
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      REC 01:14
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#a5b4fc',
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      padding: '3px 10px',
                      borderRadius: '9999px'
                    }}>
                      142 WPM • Steady Cadence
                    </span>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#34d399',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '3px 10px',
                      borderRadius: '9999px'
                    }}>
                      Fillers: 0 in current 30s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Horizontal Feature Pillars (Exactly as in Mockup) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}>
          {featurePillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(15, 21, 34, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'all 0.2s ease'
              }}
              className="glow-card-hover"
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {pillar.icon}
              </div>

              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                  {pillar.title}
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  {pillar.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
