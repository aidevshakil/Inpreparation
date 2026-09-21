import React from 'react';
import { ArrowRight, Check, Clock } from 'lucide-react';

interface HowItWorksBottomCtaProps {
  onStartPractice: () => void;
  onNavigateToSimulations?: () => void;
}

export const HowItWorksBottomCta: React.FC<HowItWorksBottomCtaProps> = ({
  onStartPractice,
  onNavigateToSimulations
}) => {
  return (
    <section style={{ padding: '60px 0 100px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '64px 32px',
          textAlign: 'center',
          maxWidth: '1040px',
          margin: '0 auto',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background gradient glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '20%',
            right: '20%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
            {/* Badge: BEGIN TODAY */}
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#c084fc',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              padding: '5px 14px',
              borderRadius: '20px',
              marginBottom: '22px'
            }}>
              BEGIN TODAY
            </span>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(30px, 4.2vw, 44px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.25,
              marginBottom: '18px'
            }}>
              Your Next Interview Can Be Better<br />Than Your Last One.
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 36px'
            }}>
              Build your profile, practice realistic 5-question interviews, understand your performance, and improve with precision multimodal AI feedback.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '28px'
            }}>
              <button
                onClick={onStartPractice}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#6366f1',
                  border: 'none',
                  borderRadius: '28px',
                  padding: '14px 28px',
                  color: '#ffffff',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4f46e5';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#6366f1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigateToSimulations && onNavigateToSimulations()}
                style={{
                  background: '#151a28',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '28px',
                  padding: '14px 28px',
                  color: '#cbd5e1',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1e2638';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#151a28';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                Explore Interview Library
              </button>
            </div>

            {/* Footer Checklist */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              fontSize: '12.5px',
              color: '#94a3b8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} color="#38bdf8" />
                <span>No credit card required</span>
              </div>
              <span style={{ color: '#475569' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color="#818cf8" />
                <span>Exactly 5 questions per practice interview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

