import React, { useState, useEffect } from 'react';
import { X, Sparkles, Zap, ArrowRight, Play, Pause, UserCheck, Terminal, Cpu, Award } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartPractice: () => void;
}

export const DemoVideoModal: React.FC<DemoVideoModalProps> = ({ isOpen, onClose, onStartPractice }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demoChapters = [
    {
      id: 'persona',
      title: '1. Persona & Track Calibration',
      subtitle: 'Target Seniority, Role, and Company-Specific Rubrics',
      desc: 'Customize interview strictness, whether you want an encouraging mentor or a rigorous bar raiser calibrated against Google L5 or Meta E6 expectations.',
      badgeColor: '#818cf8',
      icon: <Terminal size={20} color="#818cf8" />
    },
    {
      id: 'video-voice',
      title: '2. Low-Latency Voice & Vision Stream',
      subtitle: 'Real-Time Conversational AI with <300ms Audio Latency',
      desc: 'Natural conversational cadence with real-time computer vision tracking your eye gaze, postural calm, vocal pitch modulation, and filler words.',
      badgeColor: '#06b6d4',
      icon: <UserCheck size={20} color="#06b6d4" />
    },
    {
      id: 'adaptive',
      title: '3. Adaptive Contextual Probing',
      subtitle: 'AI Dynamically Challenges Ambiguous Assumptions',
      desc: 'The interviewer does not read static questions. It analyzes your explanations on the fly and asks pointed follow-ups about scale limits and failure modes.',
      badgeColor: '#a855f7',
      icon: <Cpu size={20} color="#a855f7" />
    },
    {
      id: 'scorecard',
      title: '4. Instant Multi-Dimensional Scorecard',
      subtitle: 'STAR Method Breakdown & Actionable Model Answers',
      desc: 'Sub-second diagnostics comparing your answer directly with an optimized response, highlighting power verbs, STAR framing, and exact next steps.',
      badgeColor: '#10b981',
      icon: <Award size={20} color="#10b981" />
    }
  ];

  // Auto-play through chapters
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoChapters.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, demoChapters.length]);

  if (!isOpen) return null;

  const current = demoChapters[activeStep];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0d121c',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '880px',
          overflow: 'hidden',
          boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.95), 0 0 60px rgba(124, 58, 237, 0.35)',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '18px 24px',
          background: 'rgba(19, 26, 44, 0.95)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={18} color="#ffffff" />
            </div>
            <div>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc' }}>
                InPrep AI Simulation Walkthrough
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block' }}>
                Step {activeStep + 1} of 4 • Interactive Feature Preview
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? 'Pause Autoplay' : 'Play Tour'}</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Simulation Visual Showcase Canvas */}
        <div style={{
          position: 'relative',
          height: '360px',
          background: 'radial-gradient(circle at center, #172236 0%, #090e18 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          overflow: 'hidden'
        }}>
          {/* Visual Simulation Display per Step */}
          {activeStep === 0 && (
            <div style={{
              background: '#111728',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '540px',
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#818cf8' }}>Track: Distributed Systems</span>
                <span style={{ fontSize: '11px', background: 'rgba(99, 102, 241, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#a5b4fc' }}>Google L5 / Meta E5</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '8px', textAlign: 'center', border: '1px solid #6366f1' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Persona</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Bar Raiser</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Strictness</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>High (L6)</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Mode</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#10b981' }}>Live Video</div>
                </div>
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5 }}>
                ✓ Target question sets automatically adjusted to distributed locks, consistency models, and multi-region failover.
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div style={{
              background: '#0e1524',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              borderRadius: '16px',
              padding: '20px',
              maxWidth: '540px',
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              <div style={{ background: '#161f33', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#6366f1', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <UserCheck size={20} color="#fff" />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Dr. Sarah Lin</div>
                <div style={{ fontSize: '10px', color: '#67e8f9' }}>Speaking • 18ms Latency</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '8px' }}>
                  {[12, 20, 8, 24, 16, 10, 22].map((h, i) => (
                    <div key={i} style={{ width: '3px', height: `${h}px`, background: '#06b6d4', borderRadius: '1px' }} />
                  ))}
                </div>
              </div>

              <div style={{ background: '#161f33', borderRadius: '12px', padding: '14px', textAlign: 'center', border: '1px dashed #10b981' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Candidate Vision HUD</div>
                <div style={{ fontSize: '10px', color: '#10b981' }}>● Camera Gaze: 96% Aligned</div>
                <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '6px' }}>Cadence: <b style={{ color: '#fff' }}>140 WPM</b></div>
                <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>Fillers: <b style={{ color: '#10b981' }}>0 Detected</b></div>
                <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>Posture: <b style={{ color: '#fff' }}>Steady / Upright</b></div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div style={{
              background: '#111728',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              borderRadius: '16px',
              padding: '20px',
              maxWidth: '540px',
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', borderLeft: '3px solid #6366f1', padding: '8px 12px', borderRadius: '4px', fontSize: '12px', color: '#cbd5e1' }}>
                <b style={{ color: '#818cf8' }}>Candidate:</b> "We can cache customer profiles in Redis to keep read latency sub-10ms."
              </div>
              <div style={{ background: 'rgba(168, 85, 247, 0.15)', borderLeft: '3px solid #c084fc', padding: '8px 12px', borderRadius: '4px', fontSize: '12px', color: '#e2e8f0' }}>
                <b style={{ color: '#c084fc' }}>AI Probing Follow-Up:</b> "Good baseline. What cache invalidation pattern will you use during write spikes, and how will you protect against thundering herds?"
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'right' }}>
                ✦ AI dynamically identifies missing failure mode edge cases
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div style={{
              background: '#111827',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '16px',
              padding: '20px',
              maxWidth: '540px',
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: '18px',
              alignItems: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  border: '3px solid #10b981',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                }}>
                  <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff' }}>92%</span>
                  <span style={{ fontSize: '8px', color: '#6ee7b7', textTransform: 'uppercase' }}>Overall</span>
                </div>
                <div style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, marginTop: '6px' }}>Top 5% Tier</div>
              </div>

              <div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Technical Reasoning</span>
                  <b style={{ color: '#10b981' }}>95%</b>
                </div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>STAR Communication</span>
                  <b style={{ color: '#818cf8' }}>88%</b>
                </div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Body Language & Tone</span>
                  <b style={{ color: '#06b6d4' }}>94%</b>
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '8px' }}>
                  ✓ Includes timestamped audio rewrites with highlighted power verbs.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chapter Details & Progress Tabs */}
        <div style={{
          padding: '24px',
          background: '#0d121c',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Chapter Description Box */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{
                background: `${current.badgeColor}20`,
                color: current.badgeColor,
                padding: '3px 10px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Zap size={12} /> {current.title}
              </span>
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>
              {current.subtitle}
            </h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              {current.desc}
            </p>
          </div>

          {/* Chapter Selector Timeline Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            marginBottom: '20px'
          }}>
            {demoChapters.map((chap, i) => (
              <button
                key={chap.id}
                onClick={() => {
                  setActiveStep(i);
                  setIsPlaying(false);
                }}
                style={{
                  padding: '10px 8px',
                  background: activeStep === i ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: activeStep === i ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, color: activeStep === i ? '#ffffff' : '#94a3b8' }}>
                  {chap.title}
                </div>
              </button>
            ))}
          </div>

          {/* Modal Bottom CTA */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <span style={{ fontSize: '13px', color: '#94a3b8' }}>
              Ready to test this with your own webcam and voice?
            </span>

            <button
              onClick={() => {
                onClose();
                onStartPractice();
              }}
              className="btn btn-primary"
              style={{ padding: '10px 22px', fontSize: '14px' }}
            >
              <span>Launch Live Simulator Now</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
