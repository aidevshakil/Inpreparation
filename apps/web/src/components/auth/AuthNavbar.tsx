import React from 'react';
import { Mic } from 'lucide-react';

interface AuthNavbarProps {
  onNavigateHome: () => void;
  onNavigateFeatures: () => void;
  onNavigateHowItWorks: () => void;
  onNavigateSimulations: () => void;
  onNavigateCategories: () => void;
  onNavigatePricing: () => void;
  onNavigateFaq: () => void;
  onNavigateSignUp?: () => void;
  ctaPrompt?: string;
  ctaLabel?: string;
  ctaIcon?: React.ReactNode;
  onNavigateCta?: () => void;
}

export const AuthNavbar: React.FC<AuthNavbarProps> = ({
  onNavigateHome,
  onNavigateFeatures,
  onNavigateHowItWorks,
  onNavigateSimulations,
  onNavigateCategories,
  onNavigatePricing,
  onNavigateFaq,
  onNavigateSignUp,
  ctaPrompt = 'Need an account?',
  ctaLabel = 'Sign Up Free',
  ctaIcon,
  onNavigateCta
}) => {
  return (
    <header style={{
      background: 'rgba(7, 9, 14, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '16px 24px',
      position: 'relative',
      zIndex: 50
    }}>
      <div className="container" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Brand Logo */}
        <div
          onClick={onNavigateHome}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)'
          }}>
            <Mic size={18} color="#ffffff" />
          </div>

          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Inprep <span style={{ color: '#818cf8' }}>AI</span>
            </div>
            <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CANDIDATE STUDIO
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <button onClick={onNavigateFeatures} style={navLinkStyle}>Features</button>
          <button onClick={onNavigateHowItWorks} style={navLinkStyle}>How It Works</button>
          <button onClick={onNavigateSimulations} style={navLinkStyle}>Interview Library</button>
          <button onClick={onNavigateCategories} style={navLinkStyle}>Categories</button>
          <button onClick={onNavigatePricing} style={navLinkStyle}>Pricing</button>
          <button onClick={onNavigateFaq} style={navLinkStyle}>FAQ</button>
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>
            {ctaPrompt}
          </span>
          <button
            onClick={onNavigateCta || onNavigateSignUp || onNavigateHome}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#ffffff',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            {ctaIcon}
            {ctaLabel}
          </button>
        </div>
      </div>
    </header>
  );
};

const navLinkStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#94a3b8',
  fontSize: '13.5px',
  fontWeight: 500,
  cursor: 'pointer',
  padding: '6px 0',
  transition: 'color 0.15s ease'
};
