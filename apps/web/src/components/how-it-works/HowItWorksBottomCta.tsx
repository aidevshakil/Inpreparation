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
    <section style={{ padding: '60px 0 120px', position: 'relative' }}>
      <div className="container">
        <div style={{
          background: '#0d111c',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '28px',
          padding: '64px 32px',
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background glow */}
          <div style={{
            position: 'absolute',
            top: '-40%',
            left: '20%',
            right: '20%',
            height: '80%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
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
              color: '#a5b4fc',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              padding: '5px 14px',
              borderRadius: '20px',
              marginBottom: '20px'
            }}>
              BEGIN TODAY
            </span>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(30px, 4.5vw, 46px)',
              fontWeight: 800,
              color: '#f8fafc',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}>
              Your Next Interview Can Be Better Than Your Last One.
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

            {/* Buttons */}
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
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 28px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigateToSimulations && onNavigateToSimulations()}
                style={{
                  background: '#181e2e',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '14px 28px',
                  color: '#cbd5e1',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Explore Interview Library
              </button>
            </div>

            {/* Footer notes */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              fontSize: '12px',
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
