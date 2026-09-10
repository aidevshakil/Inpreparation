import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Mic, Volume2, Eye, Activity, UserCheck } from 'lucide-react';

interface HeroSectionProps {
  onStartPractice: (role?: string) => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartPractice, onOpenDemo }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeMetric, setActiveMetric] = useState<'confidence' | 'tone' | 'clarity'>('confidence');

  const toggleSampleVoice = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const text = "Hello! I'm Dr. Sarah Lin. Could you explain how React's virtual DOM diffing algorithm optimizes rendering performance under heavy state updates?";
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

  return (
    <section id="hero" style={{ position: 'relative', paddingTop: '48px', paddingBottom: '80px', overflow: 'hidden' }}>
      {/* Background Glowing Ambient Orbs */}
      <div className="bg-ambient-glow" style={{ top: '-10%', left: '15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)' }} />
      <div className="bg-ambient-glow" style={{ top: '20%', right: '5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          minHeight: '620px'
        }}>
          {/* Left Column: Headline & Call To Actions */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '20px' }}>
              <span className="badge-pill badge-purple">
                <Sparkles size={14} color="#c084fc" />
                THE NEXT GENERATION INTERVIEW PREPARATION
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px'
            }}>
              Practice Interviews.<br />
              <span className="gradient-highlight-text" style={{ textShadow: '0 0 40px rgba(168, 85, 247, 0.4)' }}>
                Get Real Feedback.
              </span><br />
              Improve Faster.
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '560px'
            }}>
              Simulate real-world job interviews with ultra-realistic AI interviewers.
              Receive instant, deep qualitative & quantitative feedback on your answers, body language, tone, and pacing.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '44px'
            }}>
              <button
                onClick={() => onStartPractice()}
                className="btn-primary"
                style={{ fontSize: '16px', padding: '15px 32px' }}
              >
                <span>Start Free Practice</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenDemo}
                className="btn-secondary"
                style={{ fontSize: '15px', padding: '15px 28px' }}
              >
                <Play size={16} fill="#e2e8f0" />
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Social Proof & Value Props */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px 20px',
              maxWidth: '520px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '13px', fontWeight: 500 }}>
                <ShieldCheck size={18} color="#10b981" />
                <span>Enterprise Grade Privacy</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '13px', fontWeight: 500 }}>
                <Zap size={18} color="#f59e0b" />
                <span>Instant Detailed Reports</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '13px', fontWeight: 500 }}>
                <Layers size={18} color="#6366f1" />
                <span>500+ Custom Role Scenarios</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '13px', fontWeight: 500 }}>
                <Mic size={18} color="#06b6d4" />
                <span>Real-time AI Voice & Video</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Simulation Preview Window */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              background: '#0e131f',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(124, 58, 237, 0.25)',
              overflow: 'hidden',
              backdropFilter: 'blur(20px)',
              position: 'relative'
            }}>
              {/* Window Header */}
              <div style={{
                background: 'rgba(19, 24, 38, 0.95)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontSize: '12px', color: '#94a3b8', marginLeft: '10px', fontWeight: 600 }}>
                    Senior Frontend Engineer Interview — Live Simulation
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#ef4444',
                    background: 'rgba(239, 68, 68, 0.15)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444', animation: 'pulseGlow 1.5s infinite' }} />
                    REC 00:04:18
                  </span>
                </div>
              </div>

              {/* Main Video Feeds (AI Interviewer & Candidate) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                padding: '16px',
                background: '#090d16'
              }}>
                {/* Left Stream: AI Interviewer */}
                <div style={{
                  position: 'relative',
                  height: '210px',
                  borderRadius: '16px',
                  background: 'linear-gradient(180deg, #182033 0%, #0d121e 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Avatar graphic */}
                  <div style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 25px rgba(99, 102, 241, 0.6)',
                    marginBottom: '10px',
                    position: 'relative'
                  }}>
                    <UserCheck size={36} color="#ffffff" />
                    {isPlayingAudio && (
                      <div style={{
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        border: '2px solid #38bdf8',
                        animation: 'pulseGlow 1.2s infinite'
                      }} />
                    )}
                  </div>

                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                    Dr. Sarah Lin
                  </span>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                    Principal Architect AI Interviewer
                  </span>

                  {/* Audio Wave Visualizer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    marginTop: '12px',
                    height: '20px'
                  }}>
                    {[8, 16, 24, 12, 28, 18, 10, 22, 14, 6].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          width: '3px',
                          height: isPlayingAudio ? `${h}px` : '4px',
                          background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)',
                          borderRadius: '2px',
                          transition: 'height 0.2s ease'
                        }}
                      />
                    ))}
                  </div>

                  {/* Top Left Role Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#67e8f9',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Activity size={10} /> AI HOST
                  </div>

                  {/* Play Voice Button */}
                  <button
                    onClick={toggleSampleVoice}
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: isPlayingAudio ? 'rgba(239, 68, 68, 0.8)' : 'rgba(99, 102, 241, 0.8)',
                      border: 'none',
                      color: '#fff',
                      borderRadius: '8px',
                      padding: '4px 8px',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    title="Hear AI Question Voice"
                  >
                    <Volume2 size={12} />
                    {isPlayingAudio ? 'Mute' : 'Hear Audio'}
                  </button>
                </div>

                {/* Right Stream: Candidate Feed with Tracking HUD */}
                <div style={{
                  position: 'relative',
                  height: '210px',
                  borderRadius: '16px',
                  background: 'linear-gradient(180deg, #1a2233 0%, #0d121c 100%)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Candidate Face Silhouette with bounding box */}
                  <div style={{
                    width: '84px',
                    height: '96px',
                    borderRadius: '16px',
                    border: '1px dashed #06b6d4',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    background: 'rgba(6, 182, 212, 0.05)'
                  }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155', marginBottom: '6px' }} />
                    <div style={{ width: '56px', height: '24px', borderRadius: '12px 12px 4px 4px', background: '#334155' }} />

                    {/* Facial feature tracker dots */}
                    <div style={{ position: 'absolute', top: '24px', left: '26px', width: '4px', height: '4px', borderRadius: '50%', background: '#10b981' }} />
                    <div style={{ position: 'absolute', top: '24px', right: '26px', width: '4px', height: '4px', borderRadius: '50%', background: '#10b981' }} />
                    <div style={{ position: 'absolute', top: '38px', width: '10px', height: '2px', background: '#10b981' }} />
                  </div>

                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', marginTop: '10px' }}>
                    Alex Chen (You)
                  </span>
                  <span style={{ fontSize: '11px', color: '#6ee7b7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Eye size={12} /> Eye Contact: 96% Aligned
                  </span>

                  {/* Top Left Live Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#6ee7b7'
                  }}>
                    CAMERA ACTIVE
                  </div>

                  {/* Live HUD telemetry metric */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    right: '10px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#94a3b8'
                  }}>
                    <span>Cadence: <b style={{ color: '#f8fafc' }}>142 WPM</b></span>
                    <span>Fillers: <b style={{ color: '#10b981' }}>0 detected</b></span>
                  </div>
                </div>
              </div>

              {/* Live Question Dialogue Subtitle */}
              <div style={{
                padding: '16px 20px',
                background: '#131929',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    background: 'rgba(99, 102, 241, 0.2)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#818cf8',
                    whiteSpace: 'nowrap'
                  }}>
                    QUESTION #2
                  </div>
                  <p style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: 1.5 }}>
                    "Could you explain how React's virtual DOM diffing algorithm optimizes rendering performance under heavy state updates?"
                  </p>
                </div>
              </div>

              {/* Bottom Real-Time Telemetry Bar */}
              <div style={{
                padding: '14px 20px',
                background: '#0b0f19',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div
                    onClick={() => setActiveMetric('confidence')}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', opacity: activeMetric === 'confidence' ? 1 : 0.6 }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>Confidence:</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#10b981' }}>89% (High)</span>
                  </div>

                  <div
                    onClick={() => setActiveMetric('tone')}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', opacity: activeMetric === 'tone' ? 1 : 0.6 }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1' }} />
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>Tone:</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#a5b4fc' }}>Articulate</span>
                  </div>

                  <div
                    onClick={() => setActiveMetric('clarity')}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', opacity: activeMetric === 'clarity' ? 1 : 0.6 }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4' }} />
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>Clarity:</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#67e8f9' }}>94%</span>
                  </div>
                </div>

                <button
                  onClick={() => onStartPractice('Senior Frontend Engineer')}
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Try Answering This</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
