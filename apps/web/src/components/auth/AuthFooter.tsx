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
      background: '#04060b',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
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
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          marginBottom: '18px'
        }}>
          {/* Left Gateway tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#818cf8',
              display: 'inline-block'
            }} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{gatewayLabel}</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#64748b' }}>{screenLabel}</span>
          </div>

          {/* Right Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '12.5px' }}>
            <button onClick={onNavigateFeatures} style={linkStyle}>Features</button>
            <button onClick={onNavigateCategories} style={linkStyle}>Categories</button>
            <button onClick={onNavigatePricing} style={linkStyle}>Pricing</button>
            <button onClick={onNavigateFaq} style={linkStyle}>FAQ</button>
            <button onClick={onNavigateContact} style={linkStyle}>Contact</button>
            <a href="#" style={{ color: '#8896ab', textDecoration: 'none' }}>Responsible AI</a>
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
          color: '#64748b'
        }}>
          <div>
            © 2026 Inprep AI. All rights reserved. Built for technical interview excellence.
          </div>

          <div style={{ color: '#8896ab' }}>
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
  color: '#8896ab',
  cursor: 'pointer',
  padding: 0,
  fontSize: '12.5px',
  transition: 'color 0.15s ease'
};
