import React from 'react';
import { Lock, AudioWaveform, SlidersHorizontal, Trash2 } from 'lucide-react';

export const TrustGovernanceSection: React.FC = () => {
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
            color: 'var(--primary-color)',
            marginBottom: '10px'
          }}>
            TRUST & GOVERNANCE
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            Privacy & Responsible AI Commitments
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Executive coaching demands complete discretion. Your likeness, voice data, and answers remain confidential and protected.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {/* Card 1: Data Transparency */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <Lock size={26} color="#818cf8" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Data Transparency
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Full visibility into which audio and video metrics are processed. No secret telemetry or unauthorized training use.
            </p>
          </div>

          {/* Card 2: Observable Signals Only */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <AudioWaveform size={26} color="#0284c7" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Observable Signals Only
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Only camera illumination, framing distance, audio levels, and words spoken are analyzed for executive polish.
            </p>
          </div>

          {/* Card 3: Zero Personality Profiling */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <SlidersHorizontal size={26} color="var(--primary-color)" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Zero Personality Profiling
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              We strictly do not score psychological state, neurological traits, honesty meters, or internal emotions.
            </p>
          </div>

          {/* Card 4: Candidate Data Ownership */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <Trash2 size={26} color="#ef4444" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Candidate Data Ownership
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Delete your recorded sessions, CV parsed graphs, and performance metrics instantly with a single vault command.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

