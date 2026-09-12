import React from 'react';
import { Fingerprint, Scan, Cpu, RefreshCw } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: '10px'
          }}>
            THE METHODOLOGY
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#f8fafc',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            Why This Workflow Works
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6
          }}>
            Built on learning science and executive recruiting calibration, not generic chat prompts.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {/* Card 1: 1. Personalized */}
          <div style={{
            background: '#0d111c',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '26px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}>
            <div>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Fingerprint size={22} color="#818cf8" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                1. Personalized
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                Rooted in your verifiable resume context, preventing irrelevant trivia and targeting your exact seniority tier.
              </p>
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#818cf8',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Contextually Calibrated
            </div>
          </div>

          {/* Card 2: 2. Multimodal */}
          <div style={{
            background: '#0d111c',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '26px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}>
            <div>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Scan size={22} color="#38bdf8" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                2. Multimodal
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                Evaluates spoken audio cadence, body posture, framing stability, and architectural rigor in parallel.
              </p>
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#38bdf8',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Complete Sensory Assessment
            </div>
          </div>

          {/* Card 3: 3. Actionable */}
          <div style={{
            background: '#0d111c',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '26px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}>
            <div>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.12)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Cpu size={22} color="#c084fc" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                3. Actionable
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                Delivers concrete staff-level answers and prioritized drills instead of vague "sound more confident" generalities.
              </p>
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#c084fc',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Measurable Correction
            </div>
          </div>

          {/* Card 4: 4. Continuous */}
          <div style={{
            background: '#0d111c',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '26px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}>
            <div>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <RefreshCw size={22} color="#f8fafc" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                4. Continuous
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                Every 5-question mock writes to your historical readiness graph, verifying compound score velocity before real rounds.
              </p>
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#cbd5e1',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              Compounding Preparedness
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
