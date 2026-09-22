import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FaqBottomCtaProps {
  onStartPracticingFree: () => void;
  onExploreLibrary: () => void;
}

export const FaqBottomCta: React.FC<FaqBottomCtaProps> = ({
  onStartPracticingFree,
  onExploreLibrary
}) => {
  return (
    <section style={{ padding: '30px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '56px 32px 46px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          
          {/* Top Logo Icon */}
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 6px 20px rgba(99, 102, 241, 0.45)'
          }}>
            <Sparkles size={22} color="#ffffff" />
          </div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
            {/* Main Heading */}
            <h2 style={{
              fontSize: 'clamp(28px, 4.5vw, 42px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '14px'
            }}>
              Ready to Practice Your Next Interview?
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}>
              Stop wondering how you performed. Practice under realistic pressure, receive structured multimodal feedback, and improve with every single attempt.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '18px'
            }}>
              <button
                onClick={onStartPracticingFree}
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '13px 30px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
                }}
              >
                <span>Start Preparing</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onExploreLibrary}
                style={{
                  background: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '100px',
                  padding: '13px 26px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-surface)';
                }}
              >
                <span>Explore Simulations</span>
              </button>
            </div>

            {/* Micro Caption */}
            <div style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              fontWeight: 500
            }}>
              Calibrate your career baseline and practice with AI.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
