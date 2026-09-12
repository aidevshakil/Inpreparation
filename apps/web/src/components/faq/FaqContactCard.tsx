import React from 'react';
import { Headphones, MessageSquare } from 'lucide-react';

interface FaqContactCardProps {
  onContactSupport?: () => void;
  onJoinDiscord?: () => void;
  onScheduleDemo?: () => void;
}

export const FaqContactCard: React.FC<FaqContactCardProps> = () => {
  return (
    <section style={{ padding: '30px 0 20px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0d1220 0%, #080c16 100%)',
          border: '1px solid rgba(124, 58, 237, 0.25)',
          borderRadius: '20px',
          padding: '32px 36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Left info */}
          <div style={{ maxWidth: '620px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '100px',
              background: 'rgba(124, 58, 237, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              fontSize: '11px',
              fontWeight: 700,
              color: '#c084fc',
              marginBottom: '12px'
            }}>
              <Headphones size={13} />
              <span>Direct Support Channel</span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              Still Can’t Find Your Answer?
            </h3>

            <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Our engineering and interview coaching teams are standing by. We respond to candidate technical tickets and rubric queries within 4 hours.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            <a
              href="mailto:support@inprep.ai"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '100px',
                padding: '12px 24px',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(124, 58, 237, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.35)';
              }}
            >
              <span>Contact Support</span>
            </a>

            <a
              href="https://discord.gg/inprep"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '100px',
                padding: '12px 22px',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <MessageSquare size={15} color="#cbd5e1" />
              <span>Candidate Discord</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
