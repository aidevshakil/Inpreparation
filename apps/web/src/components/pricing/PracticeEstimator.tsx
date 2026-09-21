import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface PracticeEstimatorProps {
  onSelectPlan?: (planName: string) => void;
}

export const PracticeEstimator: React.FC<PracticeEstimatorProps> = ({
  onSelectPlan
}) => {
  const [selectedCadence, setSelectedCadence] = useState<string>('2 sessions/wk');

  const cadenceOptions: Record<string, {
    tierName: string;
    tierPrice: string;
    badge: string;
    desc: string;
    creditsUsed: string;
    progressPct: number;
    bufferStatus: string;
    btnText: string;
  }> = {
    '1 session/wk': {
      tierName: 'Starter Plan',
      tierPrice: '$0 / month',
      badge: 'BEST FIT FOR STARTER',
      desc: 'Ideal for baseline assessment and exploring curated role questions before high-stakes loops.',
      creditsUsed: '~50 / 50 credits',
      progressPct: 100,
      bufferStatus: 'Essential Headroom',
      btnText: 'Get Started'
    },
    '2 sessions/wk': {
      tierName: 'Pro Plan',
      tierPrice: '$19 / month',
      badge: 'BEST FIT FOR PRO',
      desc: 'Ideal for candidates actively preparing with 2 comprehensive sessions weekly. Includes technical feedback, presentation analysis, and AI suggested answers.',
      creditsUsed: '~800 / 1,000 credits',
      progressPct: 80,
      bufferStatus: 'Sufficient Headroom',
      btnText: 'Get Started with Pro'
    },
    '3 sessions/wk': {
      tierName: 'Pro Plan',
      tierPrice: '$19 / month',
      badge: 'BEST FIT FOR PRO',
      desc: 'High-frequency training for candidates preparing for upcoming technical loops within 2 to 4 weeks.',
      creditsUsed: '~950 / 1,000 credits',
      progressPct: 95,
      bufferStatus: 'Optimal Capacity',
      btnText: 'Get Started with Pro'
    },
    '5+ sessions/wk': {
      tierName: 'Premium',
      tierPrice: '$39 / month',
      badge: 'BEST FIT FOR INTENSIVE',
      desc: 'Maximum practice velocity for high-capacity daily mock sprints across multiple target companies and architectures.',
      creditsUsed: '~2,400 / 3,000 credits',
      progressPct: 80,
      bufferStatus: 'Generous Headroom',
      btnText: 'Get Started with Premium'
    }
  };

  const current = cadenceOptions[selectedCadence] || cadenceOptions['2 sessions/wk'];

  return (
    <section style={{ padding: '20px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Container Box */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            
            {/* Left Column: Cadence Selector */}
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'rgba(2, 132, 199, 0.12)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#0284c7',
                marginBottom: '16px'
              }}>
                <SlidersHorizontal size={13} />
                <span>PRACTICE ESTIMATOR</span>
              </div>

              {/* Heading */}
              <h2 style={{
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 700,
                color: 'var(--text-main)',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                How Much Practice Do You Need?
              </h2>

              {/* Subtitle */}
              <p style={{
                fontSize: '14.5px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px'
              }}>
                Select your interview timeline and target intensity. We will match you with the precise credit allocation and recommended tier.
              </p>

              {/* Cadence Chips Group */}
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '12px'
                }}>
                  TARGET WEEKLY CADENCE
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['1 session/wk', '2 sessions/wk', '3 sessions/wk', '5+ sessions/wk'].map((cadence) => {
                    const isSelected = selectedCadence === cadence;
                    return (
                      <button
                        key={cadence}
                        onClick={() => setSelectedCadence(cadence)}
                        style={{
                          background: isSelected ? 'var(--primary-color)' : 'var(--bg-surface)',
                          color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                          border: isSelected ? 'none' : '1px solid var(--border-subtle)',
                          borderRadius: '10px',
                          padding: '10px 18px',
                          fontSize: '13px',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          boxShadow: isSelected ? '0 4px 14px rgba(99, 102, 241, 0.35)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.background = 'var(--bg-card-hover)';
                            e.currentTarget.style.color = 'var(--text-main)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.background = 'var(--bg-surface)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                          }
                        }}
                      >
                        {cadence}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Suggested Tier Card */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '32px 28px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                {/* Card Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    SUGGESTED TIER
                  </span>
                  <span style={{
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--primary-color)',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.05em'
                  }}>
                    {current.badge}
                  </span>
                </div>

                {/* Plan Title & Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                    {current.tierName}
                  </h3>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--primary-color)' }}>
                    {current.tierPrice}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                  marginBottom: '26px'
                }}>
                  {current.desc}
                </p>

                {/* Recommended Credits Meter */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Recommended AI Credits</span>
                    <span style={{ color: 'var(--text-main)', fontWeight: 700, fontFamily: 'monospace' }}>{current.creditsUsed}</span>
                  </div>

                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: 'var(--border-subtle)',
                    borderRadius: '100px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${current.progressPct}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                      borderRadius: '100px',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>

                {/* Buffer Row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  marginBottom: '28px'
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>Buffer for CV Analysis & Coaching</span>
                  <span style={{ color: '#0284c7', fontWeight: 600 }}>{current.bufferStatus}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onSelectPlan && onSelectPlan(current.tierName)}
                style={{
                  width: '100%',
                  padding: '13px 20px',
                  borderRadius: '100px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 18px rgba(99, 102, 241, 0.35)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.92';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {current.btnText}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
