import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

interface InterviewLibraryCtaProps {
  onStartPracticing?: () => void;
  onBrowseRoles?: () => void;
}

export const InterviewLibraryCta: React.FC<InterviewLibraryCtaProps> = ({
  onStartPracticing,
  onBrowseRoles
}) => {
  return (
    <section style={{ padding: '20px 0 90px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          background: 'radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.18), transparent 70%), #0c101d',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '64px 32px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
        }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            
            {/* Rocket Icon in Glowing Disc */}
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 0 24px rgba(99, 102, 241, 0.25)'
            }}>
              <Rocket size={22} color="#a5b4fc" />
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}>
              Find Your Next Interview Challenge
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: '#94a3b8',
              lineHeight: 1.65,
              marginBottom: '32px'
            }}>
              Select your discipline, start an authentic 5–question AI simulation, and receive multimodal feedback in under 15 minutes.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
              <button
                onClick={() => onStartPracticing && onStartPracticing()}
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '14px 28px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.92';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Sign Up to Start Practice</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onBrowseRoles && onBrowseRoles()}
                style={{
                  background: '#121726',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px',
                  padding: '14px 26px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1a2238';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#121726';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                Browse All Roles
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
