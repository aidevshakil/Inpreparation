import React from 'react';

interface AuthFooterProps {
  onNavigateFeatures?: () => void;
  onNavigateCategories?: () => void;
  onNavigatePricing?: () => void;
  onNavigateFaq?: () => void;
  onNavigateContact?: () => void;
  gatewayLabel?: string;
  screenLabel?: string;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({
  onNavigateFeatures,
  onNavigateCategories,
  onNavigatePricing,
  onNavigateFaq,
  onNavigateContact,
  gatewayLabel = 'Inprep AI Authentication Gateway',
  screenLabel = 'Screen #09 (Web)'
}) => {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '28px 24px 24px',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Top Info Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '18px'
        }}>
          {/* Left Gateway tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--primary-color)',
              display: 'inline-block'
            }} />
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{gatewayLabel}</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ color: 'var(--text-muted)' }}>{screenLabel}</span>
          </div>

          {/* Right Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '12.5px' }}>
            <button onClick={onNavigateFeatures} style={linkStyle}>Features</button>
            <button onClick={onNavigateCategories} style={linkStyle}>Categories</button>
            <button onClick={onNavigatePricing} style={linkStyle}>Pricing</button>
            <button onClick={onNavigateFaq} style={linkStyle}>FAQ</button>
            <button onClick={onNavigateContact} style={linkStyle}>Contact</button>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Responsible AI</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          fontSize: '11.5px',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Inprep AI. All rights reserved. Built for technical interview excellence.
          </div>

          <div style={{ color: 'var(--text-muted)' }}>
            Observable Signals Only • Zero Psychological Profiling
          </div>
        </div>

      </div>
    </footer>
  );
};

const linkStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: 'var(--text-secondary)',
  cursor: 'pointer',
  padding: 0,
  fontSize: '12.5px',
  transition: 'color 0.15s ease'
};
