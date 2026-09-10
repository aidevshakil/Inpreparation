import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      badge: 'Free Forever',
      price: '$0',
      period: 'no credit card needed',
      desc: 'Perfect for exploring the platform and testing your baseline skills.',
      features: [
        '2 Full AI Interview Simulations / month',
        'Standard Question Bank (100+ questions)',
        'Basic Performance Diagnostic Scorecard',
        'Text & Speech Typing Mode',
        'Community Discord Access'
      ],
      cta: 'Start Free',
      isPopular: false,
      buttonStyle: 'btn-secondary'
    },
    {
      name: 'Pro Candidate',
      badge: 'Most Popular',
      price: isAnnual ? '$15' : '$19',
      period: isAnnual ? 'per month, billed annually' : 'per month, billed monthly',
      desc: 'Everything you need to accelerate preparation and land competitive offers.',
      features: [
        'Unlimited AI Mock Interviews',
        'Full Computer Vision & Eye Contact Analysis',
        'Real-time Voice Engine (<300ms latency)',
        'Upload Custom Job Descriptions & Resumes',
        'AI-Optimized Model Answers (STAR Method)',
        'Targeted Weakness Improvement Drills',
        'Downloadable Full Diagnostic PDF Scorecards'
      ],
      cta: 'Upgrade to Pro',
      isPopular: true,
      buttonStyle: 'btn-primary'
    },
    {
      name: 'Career Fast-Track',
      badge: 'Maximum Edge',
      price: isAnnual ? '$39' : '$49',
      period: isAnnual ? 'per month, billed annually' : 'per month, billed monthly',
      desc: 'Designed for senior, staff, and executive candidates seeking top offers.',
      features: [
        'Everything in Pro Candidate tier',
        'Priority GPU Compute (Zero queue latency)',
        'FAANG Company-Specific Question Rubrics',
        'Salary Negotiation AI Simulator',
        'Executive System Design Whiteboard Practice',
        '1-on-1 Human Expert Rubric Audit (Quarterly)',
        'Dedicated Career Success Concierge'
      ],
      cta: 'Get Fast-Track',
      isPopular: false,
      buttonStyle: 'btn-secondary'
    }
  ];

  return (
    <section id="pricing" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
            TRANSPARENT PRICING
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            Predictable Pricing for Fast Readiness
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
            Invest in your career confidence for less than the cost of a single dinner. Cancel anytime with 1-click.
          </p>

          {/* Billing Interval Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '6px 10px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                background: !isAnnual ? '#6366f1' : 'transparent',
                color: !isAnnual ? '#fff' : '#94a3b8',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              style={{
                background: isAnnual ? '#6366f1' : 'transparent',
                color: isAnnual ? '#fff' : '#94a3b8',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
            >
              <span>Annual</span>
              <span style={{
                background: '#10b981',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '9999px'
              }}>
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          alignItems: 'stretch'
        }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px 28px',
                background: plan.isPopular
                  ? 'linear-gradient(180deg, #171d30 0%, #0e121e 100%)'
                  : '#0e121c',
                border: plan.isPopular
                  ? '2px solid #818cf8'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: plan.isPopular
                  ? '0 20px 50px -10px rgba(124, 58, 237, 0.35)'
                  : 'none',
                transform: plan.isPopular ? 'scale(1.03)' : 'none',
                position: 'relative'
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '4px 16px',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 12px rgba(124, 58, 237, 0.5)'
                }}>
                  ✦ MOST POPULAR CHOICE
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>
                    {plan.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.12)', padding: '4px 8px', borderRadius: '6px' }}>
                    {plan.badge}
                  </span>
                </div>

                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '24px' }}>
                  {plan.desc}
                </p>

                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '44px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.03em' }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: '14px', color: '#94a3b8' }}>/ month</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    {plan.period}
                  </div>
                </div>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                      <Check size={16} color={plan.isPopular ? '#818cf8' : '#10b981'} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={plan.buttonStyle}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
