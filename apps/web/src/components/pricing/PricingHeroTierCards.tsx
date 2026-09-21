import React, { useState } from 'react';
import { Sparkles, Shield, Eye, ArrowUpRight, Check, Zap, Cloud } from 'lucide-react';

interface PricingHeroTierCardsProps {
  onSelectPlan: (planName: string, billingCycle: 'monthly' | 'yearly') => void;
}

export const PricingHeroTierCards: React.FC<PricingHeroTierCardsProps> = ({
  onSelectPlan
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Starter Profile',
      badge: 'FREE ACCOUNT',
      badgeBg: 'var(--border-subtle)',
      badgeColor: 'var(--text-secondary)',
      desc: 'Build your profile & explore question library',
      priceMonthly: 0,
      priceYearly: 0,
      priceSubtext: 'Free account forever. Practice requires Pro.',
      priceSubtextColor: 'var(--text-muted)',
      featuresHeader: 'INCLUDED IN STARTER',
      features: [
        { text: 'Create professional profile & CV builder', isZap: false, isCloud: false },
        { text: 'Upload CV with basic keyword extraction', isZap: false, isCloud: false },
        { text: 'Introductory diagnostic & fit calibration', isZap: false, isCloud: false },
        { text: 'Explore curated questions across 50+ roles', isZap: false, isCloud: false },
        { text: 'Full AI Interview Simulations (Locked - Pro)', isZap: false, isCloud: false },
        { text: 'Diagnostic analytics & progress radar', isZap: false, isCloud: false },
        { text: '50 AI exploration credits', isZap: true, isCloud: false }
      ],
      btnText: 'Create Free Account',
      isPopular: false
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      badge: 'RECOMMENDED',
      badgeBg: 'rgba(99, 102, 241, 0.15)',
      badgeColor: 'var(--primary-color)',
      desc: 'For serious interview preparation & real acceleration',
      priceMonthly: 19,
      priceYearly: 15,
      priceSubtext: billingCycle === 'monthly' ? 'Billed monthly. Cancel anytime.' : 'Billed annually ($180/yr). Cancel anytime.',
      priceSubtextColor: 'var(--primary-color)',
      featuresHeader: 'EVERYTHING IN FREE, PLUS:',
      features: [
        { text: 'Full interview library access (100+ tracks)', isZap: false, isCloud: false },
        { text: 'Detailed technical accuracy evaluation', isZap: false, isCloud: false },
        { text: 'Communication & STAR framework diagnostic', isZap: false, isCloud: false },
        { text: 'Vocal speech telemetry (WPM, pause, filler words)', isZap: false, isCloud: false },
        { text: 'Presentation signals analysis via video (framing & light)', isZap: false, isCloud: false },
        { text: 'AI-generated tailored response blueprints', isZap: false, isCloud: false },
        { text: 'Personalized action plan & historical trends', isZap: false, isCloud: false },
        { text: '1,000 AI usage credits / month', isZap: true, isCloud: false },
        { text: 'Priority AI processing cluster', isZap: false, isCloud: true }
      ],
      btnText: 'Start Pro Plan',
      isPopular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      badge: 'INTENSIVE',
      badgeBg: 'rgba(2, 132, 199, 0.12)',
      badgeColor: '#0284c7',
      desc: 'For high-capacity practice and rapid career transitions',
      priceMonthly: 39,
      priceYearly: 31,
      priceSubtext: billingCycle === 'monthly' ? 'Billed monthly. Cancel anytime.' : 'Billed annually ($372/yr). Cancel anytime.',
      priceSubtextColor: '#0284c7',
      featuresHeader: 'EVERYTHING IN PRO, PLUS:',
      features: [
        { text: '3,000 AI usage credits / month', isZap: true, isCloud: false },
        { text: 'Advanced deep-dive interview diagnosis', isZap: false, isCloud: false },
        { text: 'Executive role & system architect specialty tracks', isZap: false, isCloud: false },
        { text: 'Unlimited retakes & unlimited prompt variations', isZap: false, isCloud: false },
        { text: 'Long-term historical telemetry & longitudinal graphs', isZap: false, isCloud: false },
        { text: 'Fast-track GPU queue with near-zero latency', isZap: false, isCloud: false },
        { text: 'Dedicated human-backed technical & coaching support', isZap: false, isCloud: false }
      ],
      btnText: 'Get Premium',
      isPopular: false
    }
  ];

  return (
    <section style={{ padding: '40px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* ========================================================
            HERO HEADER
        ======================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
          
          {/* Top Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '100px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--primary-color)',
            marginBottom: '20px'
          }}>
            <Sparkles size={13} color="var(--primary-color)" />
            <span>SIMPLE, FLEXIBLE PRICING</span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '16px'
          }}>
            Practice More. Improve Faster.<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--primary-color) 0%, #8b5cf6 50%, #0284c7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Choose the Plan That Fits You.
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '15.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 24px'
          }}>
            Start for free and upgrade when you need more interview practice, deeper AI analysis, and advanced preparation features.
          </p>

          {/* 3 Value Points Ribbon */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '12.5px',
            color: 'var(--text-secondary)',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={14} color="#0284c7" />
              <span>No complicated setup</span>
            </div>
            <span style={{ color: 'var(--border-accent)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye size={14} color="#0284c7" />
              <span>Transparent usage</span>
            </div>
            <span style={{ color: 'var(--border-accent)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowUpRight size={14} color="#0284c7" />
              <span>Upgrade when you're ready</span>
            </div>
          </div>

          {/* Monthly / Yearly Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '100px',
            padding: '4px',
            gap: '4px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                background: billingCycle === 'monthly' ? 'var(--primary-color)' : 'transparent',
                color: billingCycle === 'monthly' ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                borderRadius: '100px',
                padding: '8px 22px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: billingCycle === 'monthly' ? '0 2px 10px rgba(99, 102, 241, 0.4)' : 'none'
              }}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                background: billingCycle === 'yearly' ? 'var(--primary-color)' : 'transparent',
                color: billingCycle === 'yearly' ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                borderRadius: '100px',
                padding: '8px 18px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: billingCycle === 'yearly' ? '0 2px 10px rgba(99, 102, 241, 0.4)' : 'none'
              }}
            >
              <span>Yearly</span>
              <span style={{
                background: billingCycle === 'yearly' ? '#ffffff' : 'rgba(2, 132, 199, 0.15)',
                color: billingCycle === 'yearly' ? 'var(--primary-color)' : '#0284c7',
                fontSize: '10px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '100px',
                letterSpacing: '0.04em'
              }}>
                SAVE 20%
              </span>
            </button>
          </div>

        </div>

        {/* ========================================================
            3 PRICING CARDS GRID
        ======================================================== */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
          marginBottom: '32px'
        }}>
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
            return (
              <div
                key={plan.id}
                style={{
                  background: 'var(--bg-card)',
                  border: plan.isPopular
                    ? '2px solid var(--primary-color)'
                    : '1px solid var(--border-subtle)',
                  borderRadius: '24px',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: plan.isPopular
                    ? '0 12px 30px rgba(99, 102, 241, 0.25)'
                    : 'var(--shadow-md)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  if (!plan.isPopular) e.currentTarget.style.borderColor = 'var(--border-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!plan.isPopular) e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '4px 14px',
                    borderRadius: '100px',
                    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    letterSpacing: '0.04em'
                  }}>
                    <Sparkles size={11} />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                      {plan.name}
                    </h3>
                    <span style={{
                      background: plan.badgeBg,
                      color: plan.badgeColor,
                      fontSize: '10.5px',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '6px',
                      letterSpacing: '0.05em'
                    }}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 24px 0', minHeight: '38px', lineHeight: 1.5 }}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '42px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.03em' }}>
                      ${price}
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      / month
                    </span>
                  </div>

                  {/* Price Subtext */}
                  <div style={{ fontSize: '12px', color: plan.priceSubtextColor, marginBottom: '28px', minHeight: '18px' }}>
                    {plan.priceSubtext}
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '24px' }} />

                  {/* Features Header */}
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '16px'
                  }}>
                    {plan.featuresHeader}
                  </div>

                  {/* Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {feat.isZap ? (
                          <Zap size={14} color="#0284c7" style={{ marginTop: '3px', flexShrink: 0 }} />
                        ) : feat.isCloud ? (
                          <Cloud size={14} color="#0284c7" style={{ marginTop: '3px', flexShrink: 0 }} />
                        ) : (
                          <Check size={14} color={plan.isPopular ? 'var(--primary-color)' : '#0284c7'} style={{ marginTop: '3px', flexShrink: 0 }} />
                        )}
                        <span style={{ color: feat.isCloud ? '#0284c7' : 'var(--text-secondary)' }}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.name, billingCycle)}
                  style={{
                    width: '100%',
                    padding: '13px 20px',
                    borderRadius: '100px',
                    border: plan.isPopular ? 'none' : '1px solid var(--border-subtle)',
                    background: plan.isPopular
                      ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
                      : 'var(--bg-surface)',
                    color: plan.isPopular ? '#ffffff' : 'var(--text-main)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: plan.isPopular ? '0 4px 18px rgba(99, 102, 241, 0.4)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (plan.isPopular) {
                      e.currentTarget.style.opacity = '0.92';
                    } else {
                      e.currentTarget.style.background = 'var(--bg-card-hover)';
                      e.currentTarget.style.borderColor = 'var(--border-accent)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.isPopular) {
                      e.currentTarget.style.opacity = '1';
                    } else {
                      e.currentTarget.style.background = 'var(--bg-surface)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }
                  }}
                >
                  {plan.btnText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--text-muted)'
        }}>
          Prices displayed are configurable sample tiers. Applicable taxes and local billing terms calculated at checkout.
        </div>

      </div>
    </section>
  );
};
