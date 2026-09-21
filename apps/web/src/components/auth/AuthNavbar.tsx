import React from 'react';
import { Mic, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
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
            <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Inprep <span style={{ color: 'var(--primary-color)' }}>AI</span>
            </div>
            <div style={{ fontSize: '9.5px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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

        {/* Right CTA & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '7px',
              borderRadius: '50%',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            {ctaPrompt}
          </span>
          <button
            onClick={onNavigateCta || onNavigateSignUp || onNavigateHome}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-card-hover)';
              e.currentTarget.style.borderColor = 'var(--border-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-surface)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
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
  color: 'var(--text-secondary)',
  fontSize: '13.5px',
  fontWeight: 500,
  cursor: 'pointer',
  padding: '6px 0',
  transition: 'color 0.15s ease'
};
