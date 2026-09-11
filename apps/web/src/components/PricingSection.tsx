import React from 'react';
import { Check, Minus } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" style={{ padding: '70px 0 90px', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '12px'
          }}>
            TRANSPARENT INVESTMENT
          </span>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            lineHeight: 1.18,
            marginBottom: '16px'
          }}>
            Predictable Pricing for Fast<br />Readiness
          </h2>

          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.65,
            maxWidth: '640px',
            margin: '0 auto'
          }}>
            Start practicing immediately without a credit card. Upgrade when you need continuous simulation reps.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {/* Plan 1: Free Practice */}
          <div style={{
            background: 'rgba(15, 21, 35, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '20px',
            padding: '36px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginBottom: '16px'
              }}>
                FREE PRACTICE
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                <span style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  $0
                </span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  / forever
                </span>
              </div>

              <p style={{
                fontSize: '13px',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '28px',
                minHeight: '42px'
              }}>
                Ideal for assessing your current interview posture and trying the 5–question multimodal format.
              </p>

              {/* Feature List */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>1 Full 5–Question Interview / mo</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Technical & Communication Score</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Computer Vision Setup Audit</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#475569' }}>
                  <Minus size={16} color="#475569" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span>Historical Delta Tracking</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan('Free Practice')}
              style={{
                width: '100%',
                padding: '13px 20px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Start Free
            </button>
          </div>

          {/* Plan 2: Pro Engineer (Highlighted / Most Popular) */}
          <div style={{
            background: 'rgba(18, 24, 40, 0.85)',
            border: '1px solid rgba(129, 140, 248, 0.35)',
            borderRadius: '20px',
            padding: '36px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(99, 102, 241, 0.15)'
          }}>
            {/* Centered Top Badge */}
            <div style={{
              position: 'absolute',
              top: '-13px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: '9999px',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
            }}>
              MOST POPULAR
            </div>

            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#818cf8',
                marginBottom: '16px'
              }}>
                PRO ENGINEER
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                <span style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  $19
                </span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  / month
                </span>
              </div>

              <p style={{
                fontSize: '13px',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '28px',
                minHeight: '42px'
              }}>
                For active job seekers targeting mid, senior, or staff roles in the next 30–60 days.
              </p>

              {/* Feature List */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#f8fafc', fontWeight: 600 }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Unlimited 5–Question Interviews</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Automated CV Parsing & Role Matching</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>AI Suggested Answer Formulations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Longitudinal Progress & Delta History</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan('Pro Engineer')}
              style={{
                width: '100%',
                padding: '13px 20px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                border: 'none',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(124, 58, 237, 0.45)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(124, 58, 237, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 58, 237, 0.45)';
              }}
            >
              Get Started Pro
            </button>
          </div>

          {/* Plan 3: Career Accelerator */}
          <div style={{
            background: 'rgba(15, 21, 35, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '20px',
            padding: '36px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginBottom: '16px'
              }}>
                CAREER ACCELERATOR
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                <span style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  $39
                </span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  / month
                </span>
              </div>

              <p style={{
                fontSize: '13px',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '28px',
                minHeight: '42px'
              }}>
                Executive, Engineering Management, and Staff+ rubrics with full video recording playback.
              </p>

              {/* Feature List */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Everything in Pro</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Staff & Executive Interview Rubrics</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Video Playback & Timestamped Annotations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Check size={16} color="#34d399" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>Priority Support & Custom Scenario Generator</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan('Career Accelerator')}
              style={{
                width: '100%',
                padding: '13px 20px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Choose Career
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
