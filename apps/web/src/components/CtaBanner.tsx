import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Users } from 'lucide-react';

interface CtaBannerProps {
  onStartPractice: () => void;
  onOpenEnterprise: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartPractice, onOpenEnterprise }) => {
  return (
    <section style={{ padding: '80px 0 100px', position: 'relative' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #082f49 100%)',
          border: '1px solid rgba(124, 58, 237, 0.4)',
          borderRadius: '32px',
          padding: '64px 32px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(124, 58, 237, 0.3)'
        }}>
          {/* Ambient Glows */}
          <div className="bg-ambient-glow" style={{ top: '-30%', left: '30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)' }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            <span className="badge-pill badge-purple" style={{ marginBottom: '18px' }}>
              <Sparkles size={13} color="#c084fc" />
              ACCELERATE YOUR CAREER TRAJECTORY
            </span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px'
            }}>
              Your Next Interview Can Be Better Than Your Last One.
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '38px'
            }}>
              Join 10,000+ candidates who conquered anxiety, polished their communication, and landed dream offers at top global tech companies.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '28px'
            }}>
              <button
                onClick={onStartPractice}
                className="btn-primary"
                style={{ fontSize: '16px', padding: '16px 36px' }}
              >
                <span>Start Practice for Free</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenEnterprise}
                className="btn-secondary"
                style={{ fontSize: '16px', padding: '16px 32px' }}
              >
                <span>Schedule Demo</span>
              </button>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              color: '#94a3b8',
              fontSize: '13px',
              flexWrap: 'wrap'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#10b981" /> No credit card required
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Users size={16} color="#38bdf8" /> Instant access in your browser
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
