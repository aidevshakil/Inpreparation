import React from 'react';
import { Bot, User, Mic } from 'lucide-react';

export const FitDiscoveryStep: React.FC = () => {
  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Step Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--primary-color)',
            marginBottom: '10px'
          }}>
            STEP 03
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            3. Discover Where You Fit Best
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Before entering full mock interviews, an optional adaptive diagnostic assessment verifies your conceptual limits, eliminating misaligned practice sessions.
          </p>
        </div>

        {/* Main Assessment Room Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '28px',
          maxWidth: '1080px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Top Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fb7185', boxShadow: '0 0 10px #fb7185' }} />
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)' }}>
                Initial Alignment Assessment Room
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Session: Arch-Eval-09
              </span>
              <span style={{
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#a5b4fc',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '3px 10px',
                borderRadius: '6px'
              }}>
                Question 3 of 5
              </span>
            </div>
          </div>

          {/* 2 HUD Feeds Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            marginBottom: '24px'
          }}>
            {/* Left HUD: AI Evaluator */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                {/* HUD Top Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#a5b4fc',
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    padding: '3px 10px',
                    borderRadius: '6px'
                  }}>
                    Inprep AI Evaluator
                  </span>

                  {/* Waveform graphic */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '14px' }}>
                    {[8, 14, 10, 16, 6].map((h, idx) => (
                      <div key={idx} style={{ width: '2px', height: `${h}px`, background: '#818cf8', borderRadius: '1px' }} />
                    ))}
                  </div>
                </div>

                {/* Center Bot Graphic */}
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '2px solid #818cf8',
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px'
                  }}>
                    <Bot size={28} color="#c084fc" />
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    Evaluating Architectural Trade-Offs
                  </div>
                </div>
              </div>

              {/* Active Prompt Box */}
              <div style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '14px 16px',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  ACTIVE ASSESSMENT PROMPT:
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.5, fontWeight: 500 }}>
                  "Tell me about your architectural trade-offs when designing multi-region distributed cache invalidation."
                </div>
              </div>
            </div>

            {/* Right HUD: Candidate Feed */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                {/* HUD Top Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#38bdf8',
                    background: 'rgba(6, 182, 212, 0.12)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    padding: '3px 10px',
                    borderRadius: '6px'
                  }}>
                    Candidate Feed (Webcam Active)
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
                    <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>1080p 60fps</span>
                  </div>
                </div>

                {/* Center User Avatar */}
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px'
                  }}>
                    <User size={28} color="var(--text-muted)" />
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    Framing & Audio Level: Optimal
                  </div>
                </div>
              </div>

              {/* Live Speech Telemetry Box */}
              <div style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mic size={15} color="#38bdf8" />
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    Speaking: <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>138 WPM</span>
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '16px' }}>
                  {[6, 14, 20, 12, 18, 8].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: '3px',
                        height: `${h}px`,
                        background: '#38bdf8',
                        borderRadius: '2px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '12.5px'
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>
              Establishes target role benchmarks without high-stakes pressure.
            </span>
            <span style={{ color: '#a5b4fc', fontWeight: 600 }}>
              Strictly 5 Diagnostic Questions
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
