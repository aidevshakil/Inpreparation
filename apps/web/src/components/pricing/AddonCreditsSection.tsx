import React from 'react';
import { RotateCcw } from 'lucide-react';

interface AddonCreditsSectionProps {
  onBuyCredits?: (amount: number, price: number) => void;
}

export const AddonCreditsSection: React.FC<AddonCreditsSectionProps> = ({
  onBuyCredits
}) => {
  const creditPacks = [
    {
      credits: 1000,
      price: 10,
      title: '1,000 Credits',
      desc: 'Sufficient for ~10 complete 5–question mock interviews with full multimodal evaluation.',
      isPopular: false,
      btnText: 'Buy 1,000 Credits'
    },
    {
      credits: 2500,
      price: 20,
      title: '2,500 Credits',
      desc: 'Best for 2–3 weeks of continuous sprint prep before final on–site executive rounds.',
      isPopular: true,
      btnText: 'Buy 2,500 Credits'
    },
    {
      credits: 5000,
      price: 35,
      title: '5,000 Credits',
      desc: 'Maximum volume economy. Excellent for extensive portfolio and case study practice.',
      isPopular: false,
      btnText: 'Buy 5,000 Credits'
    }
  ];

  return (
    <section style={{ padding: '20px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Container Box */}
        <div style={{
          background: '#090d16',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#38bdf8',
              marginBottom: '8px'
            }}>
              EXTRA FLEXIBILITY
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 36px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '10px'
            }}>
              Need More AI Credits?
            </h2>
            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              lineHeight: 1.6,
              margin: 0
            }}>
              Continue practicing without changing your subscription plan by purchasing additional standalone usage credits.
            </p>
          </div>

          {/* 3 Credit Packs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'stretch',
            marginBottom: '32px'
          }}>
            {creditPacks.map((pack, idx) => (
              <div
                key={idx}
                style={{
                  background: pack.isPopular ? 'linear-gradient(180deg, #10162a 0%, #0c101d 100%)' : '#0e1320',
                  border: pack.isPopular ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: pack.isPopular ? '0 10px 30px rgba(99, 102, 241, 0.15)' : 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  if (!pack.isPopular) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!pack.isPopular) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                {/* Popular Badge */}
                {pack.isPopular && (
                  <div style={{
                    position: 'absolute',
                    top: '-11px',
                    right: '24px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    letterSpacing: '0.04em',
                    boxShadow: '0 2px 10px rgba(99, 102, 241, 0.4)'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Credits & Price Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      {pack.title}
                    </h3>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: pack.isPopular ? '#a5b4fc' : '#ffffff' }}>
                      ${pack.price}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '13px',
                    color: '#94a3b8',
                    lineHeight: 1.55,
                    marginBottom: '26px'
                  }}>
                    {pack.desc}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => onBuyCredits && onBuyCredits(pack.credits, pack.price)}
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    borderRadius: '100px',
                    border: pack.isPopular ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    background: pack.isPopular
                      ? 'linear-gradient(135deg, #a5b4fc 0%, #c084fc 100%)'
                      : '#131828',
                    color: pack.isPopular ? '#0f172a' : '#cbd5e1',
                    fontSize: '13.5px',
                    fontWeight: pack.isPopular ? 700 : 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: pack.isPopular ? '0 4px 16px rgba(165, 180, 252, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (pack.isPopular) {
                      e.currentTarget.style.opacity = '0.92';
                    } else {
                      e.currentTarget.style.background = '#1a2238';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pack.isPopular) {
                      e.currentTarget.style.opacity = '1';
                    } else {
                      e.currentTarget.style.background = '#131828';
                      e.currentTarget.style.color = '#cbd5e1';
                    }
                  }}
                >
                  {pack.btnText}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Rollover Note */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12.5px',
            color: '#94a3b8'
          }}>
            <RotateCcw size={14} color="#38bdf8" />
            <span>Credits roll over month–to–month while your subscription remains active. Non–expiring during membership.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
