import React from 'react';
import { Rocket } from 'lucide-react';

interface PricingCtaBannerProps {
  onStartPracticingFree: () => void;
  onExploreFeatures: () => void;
}

export const PricingCtaBanner: React.FC<PricingCtaBannerProps> = ({
  onStartPracticingFree,
  onExploreFeatures
}) => {
  return (
    <section style={{ padding: '40px 0 90px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.12) 0%, #090d16 70%, #070a12 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '60px 32px 50px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.7), 0 0 40px rgba(99, 102, 241, 0.08)'
        }}>
          
          {/* Subtle Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
            {/* Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '100px',
              background: 'rgba(129, 140, 248, 0.12)',
              border: '1px solid rgba(129, 140, 248, 0.25)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#c7d2fe',
              marginBottom: '20px'
            }}>
              <Rocket size={13} color="#a5b4fc" />
              <span>IMMEDIATE ACCELERATION</span>
            </div>

            {/* Main Heading */}
            <h2 style={{
              fontSize: 'clamp(30px, 4.5vw, 44px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}>
              Start Preparing for Your Next Interview Today
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}>
              Build your profile, practice realistic interviews, and turn AI feedback into measurable improvement.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '20px'
            }}>
              <button
                onClick={onStartPracticingFree}
                style={{
                  background: 'linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #6366f1 100%)',
                  color: '#07090e',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '13px 30px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(129, 140, 248, 0.4), 0 0 15px rgba(165, 180, 252, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(129, 140, 248, 0.5), 0 0 20px rgba(165, 180, 252, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(129, 140, 248, 0.4), 0 0 15px rgba(165, 180, 252, 0.3)';
                }}
              >
                <span>Get Started Now</span>
              </button>

              <button
                onClick={onExploreFeatures}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#e2e8f0',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px',
                  padding: '13px 26px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <span>Explore Features</span>
              </button>
            </div>

            {/* Micro Caption */}
            <div style={{
              fontSize: '12px',
              color: '#64748b',
              fontWeight: 500
            }}>
              Create your account, calibrate your baseline, and unlock Pro interview simulations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
