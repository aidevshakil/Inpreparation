import React from 'react';
import { Fingerprint, Scan, Bot, RefreshCw } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            marginBottom: '10px'
          }}>
            THE METHODOLOGY
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            Why This Workflow Works
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Built on learning science and executive recruiting calibration, not generic chat prompts.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {/* Card 1: 1. Personalized */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div>
              <div style={{ marginBottom: '20px' }}>
                <Fingerprint size={28} color="var(--primary-color)" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                1. Personalized
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                Rooted in your verifiable resume context, preventing irrelevant trivia and targeting your exact seniority tier.
              </p>
            </div>
            <div style={{
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#38bdf8',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              Contextually Calibrated
            </div>
          </div>

          {/* Card 2: 2. Multimodal */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div>
              <div style={{ marginBottom: '20px' }}>
                <Scan size={28} color="#0284c7" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                2. Multimodal
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                Evaluates spoken audio cadence, body posture, framing stability, and architectural rigor in parallel.
              </p>
            </div>
            <div style={{
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#0284c7',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              Complete Sensory Assessment
            </div>
          </div>

          {/* Card 3: 3. Actionable */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div>
              <div style={{ marginBottom: '20px' }}>
                <Bot size={28} color="#9333ea" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                3. Actionable
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                Delivers concrete staff-level answers and prioritized drills instead of vague "sound more confident" generalities.
              </p>
            </div>
            <div style={{
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#9333ea',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              Measurable Correction
            </div>
          </div>

          {/* Card 4: 4. Continuous */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div>
              <div style={{ marginBottom: '20px' }}>
                <RefreshCw size={28} color="#059669" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                4. Continuous
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                Every 5-question mock writes to your historical readiness graph, verifying compound score velocity before real rounds.
              </p>
            </div>
            <div style={{
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#059669',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              Compounding Preparedness
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

