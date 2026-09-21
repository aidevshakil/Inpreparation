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
          background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99, 102, 241, 0.15), transparent 70%), var(--bg-card)',
          border: '1px solid var(--border-subtle)',
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
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
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
                color: 'var(--text-main)'
              }}>
                READY TO TEST YOUR READINESS?
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '20px'
            }}>
              Your Next Interview Can Be Better Than Your<br />Last One.
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
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
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  borderRadius: '9999px',
                  padding: '14px 26px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-surface)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <span>Explore Interview Library</span>
              </a>
            </div>

            {/* Micro Details */}
            <div style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
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
