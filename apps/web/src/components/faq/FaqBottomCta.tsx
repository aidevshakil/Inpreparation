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
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.16) 0%, #090d16 70%, #060910 100%)',
          border: '1px solid rgba(124, 58, 237, 0.35)',
          borderRadius: '24px',
          padding: '56px 32px 46px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 50px rgba(124, 58, 237, 0.15)'
        }}>
          
          {/* Top Logo Icon */}
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 6px 20px rgba(124, 58, 237, 0.45)'
          }}>
            <Sparkles size={22} color="#ffffff" />
          </div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
            {/* Main Heading */}
            <h2 style={{
              fontSize: 'clamp(28px, 4.5vw, 42px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '14px'
            }}>
              Ready to Practice Your Next Interview?
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: '#94a3b8',
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
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
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
                  boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(124, 58, 237, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.4)';
                }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onExploreLibrary}
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
                <span>Explore Interview Library</span>
              </button>
            </div>

            {/* Micro Caption */}
            <div style={{
              fontSize: '12px',
              color: '#64748b',
              fontWeight: 500
            }}>
              Start free. No credit card required • Exactly 5 questions per practice interview.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
