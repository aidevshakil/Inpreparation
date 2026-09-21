import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onStartPractice: () => void;
  onOpenEnterprise?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartPractice }) => {
  return (
    <section style={{ padding: '80px 0 100px', position: 'relative' }}>
      <div className="container">
        <div style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99, 102, 241, 0.25), transparent 70%), linear-gradient(180deg, rgba(15, 21, 35, 0.7) 0%, rgba(10, 14, 24, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '28px',
          padding: '72px 32px 64px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.9), 0 0 60px rgba(99, 102, 241, 0.15)'
        }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
            {/* Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(30, 27, 75, 0.8)',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              borderRadius: '9999px',
              padding: '6px 16px',
              marginBottom: '26px'
            }}>
              <span style={{ color: '#818cf8', fontWeight: 900, fontSize: '11px' }}>▌</span>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#c7d2fe'
              }}>
                READY TO TEST YOUR READINESS?
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '20px'
            }}>
              Your Next Interview Can Be Better Than Your<br />Last One.
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: '#94a3b8',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 36px'
            }}>
              Join over 10,000 engineers and leaders who use Inprep AI to hone their communication, master technical depth, and enter interviews with unshakeable confidence.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '26px'
            }}>
              <button
                onClick={onStartPractice}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '14px 28px',
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
                <span>Start Practicing Free</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#simulations"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  borderRadius: '9999px',
                  padding: '14px 26px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
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
                <span>Explore Interview Library</span>
              </a>
            </div>

            {/* Micro Details */}
            <div style={{
              fontSize: '12px',
              color: '#64748b',
              letterSpacing: '0.01em'
            }}>
              No credit card required • 1 full session included free • Instant setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
