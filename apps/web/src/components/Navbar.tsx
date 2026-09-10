import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Bot, ArrowRight, Video, Layers, Home } from 'lucide-react';

interface NavbarProps {
  onStartPractice: (role?: string) => void;
  onNavigateToAi?: () => void;
  currentPage?: 'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about' | 'chat';
  onNavigate?: (page: 'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about' | 'chat') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartPractice,
  onNavigateToAi,
  currentPage = 'home',
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', page: 'home' as const, href: '#hero' },
    { label: 'How It Works', page: 'how-it-works' as const, href: '#how-it-works' },
    { label: 'Features', page: 'features' as const, href: '#features' },
    { label: 'Role Tracks', page: 'simulations' as const, href: '#simulations' },
    { label: 'Pricing', page: 'pricing' as const, href: '#pricing' },
    { label: 'About & Mission', page: 'about' as const, href: '#about' },
    { label: 'FAQ', page: 'faq' as const, href: '#faq' },
  ];

  const handleLinkClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    if (link.page === 'features' && onNavigate) {
      e.preventDefault();
      onNavigate('features');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.page === 'how-it-works' && onNavigate) {
      e.preventDefault();
      onNavigate('how-it-works');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.page === 'simulations' && onNavigate) {
      e.preventDefault();
      onNavigate('simulations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.page === 'pricing' && onNavigate) {
      e.preventDefault();
      onNavigate('pricing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.page === 'about' && onNavigate) {
      e.preventDefault();
      onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.page === 'faq' && onNavigate) {
      e.preventDefault();
      onNavigate('faq');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.page === 'home' && currentPage !== 'home' && onNavigate) {
      if (link.label === 'Overview') {
        e.preventDefault();
        onNavigate('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigate('home');
      }
    }
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: 500,
        textAlign: 'center',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        letterSpacing: '0.01em',
        position: 'relative',
        zIndex: 101
      }}>
        <span style={{
          background: 'rgba(255, 255, 255, 0.22)',
          padding: '2px 8px',
          borderRadius: '9999px',
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase'
        }}>
          ✨ New
        </span>
        <span>
          Real-time System Design & Behavioral AI Voice Interviewers are now live!
        </span>
        <button
          onClick={() => onStartPractice('System Design')}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#fff',
            borderRadius: '12px',
            padding: '2px 10px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            marginLeft: '6px'
          }}
        >
          Try Now →
        </button>
      </div>

      {/* Main Glassmorphic Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(7, 9, 14, 0.88)' : 'rgba(7, 9, 14, 0.65)',
          backdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px'
        }}>
          {/* Brand Logo */}
          <div
            onClick={() => onNavigate && onNavigate('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none' }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(124, 58, 237, 0.5)'
            }}>
              <Sparkles size={20} color="#ffffff" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '19px', fontWeight: 800, letterSpacing: '-0.02em', color: '#f8fafc' }}>
                InPrep<span style={{ color: '#818cf8' }}>AI</span>
              </span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#06b6d4', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '-3px' }}>
                Interview Mastery
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = (link.page === 'features' && currentPage === 'features') ||
                               (link.label === 'Overview' && currentPage === 'home');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link, e)}
                  style={{
                    color: isActive ? '#f8fafc' : '#94a3b8',
                    fontSize: '14px',
                    fontWeight: isActive ? 700 : 500,
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#f8fafc' : '#94a3b8')}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #818cf8 0%, #06b6d4 100%)',
                      borderRadius: '1px'
                    }} />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {onNavigate && currentPage !== 'features' && (
              <button
                onClick={() => onNavigate('features')}
                className="btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                title="View Full Platform Features"
              >
                <Layers size={15} color="#06b6d4" />
                <span>Deep Dive</span>
              </button>
            )}

            {onNavigate && currentPage === 'features' && (
              <button
                onClick={() => onNavigate('home')}
                className="btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                title="Return to Home Overview"
              >
                <Home size={15} color="#818cf8" />
                <span>Home</span>
              </button>
            )}

            {onNavigateToAi && (
              <button
                onClick={onNavigateToAi}
                className="btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                title="Open Assistant Chat"
              >
                <Bot size={15} color="#818cf8" />
                <span>AI Chat</span>
              </button>
            )}

            <button
              onClick={() => onStartPractice()}
              className="btn-primary btn-sm"
              style={{ padding: '9px 18px', fontSize: '14px' }}
            >
              <Video size={15} />
              <span>Launch Simulator</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: 'rgba(10, 14, 23, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(link, e);
                }}
                style={{
                  color: '#cbd5e1',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              <button
                onClick={() => { setMobileMenuOpen(false); onStartPractice(); }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Video size={16} />
                Start Free Practice
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global CSS for desktop media query */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
