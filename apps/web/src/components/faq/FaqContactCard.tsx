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
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '32px 36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Left info */}
          <div style={{ maxWidth: '620px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '100px',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--primary-color)',
              marginBottom: '12px'
            }}>
              <Headphones size={13} />
              <span>Direct Support Channel</span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              Still Can’t Find Your Answer?
            </h3>

            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Our engineering and interview coaching teams are standing by. We respond to candidate technical tickets and rubric queries within 4 hours.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            <a
              href="mailto:support@inprep.ai"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
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
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.35)';
              }}
            >
              <span>Contact Support</span>
            </a>

            <a
              href="https://discord.gg/inprep"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--bg-surface)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-subtle)',
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
                e.currentTarget.style.background = 'var(--bg-card-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-surface)';
              }}
            >
              <MessageSquare size={15} color="var(--text-secondary)" />
              <span>Candidate Discord</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
