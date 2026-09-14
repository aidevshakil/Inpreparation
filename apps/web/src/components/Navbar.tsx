import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Menu, X, LayoutDashboard, User, LogOut, FileText, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onStartPractice: (role?: string) => void;
  onNavigateToAi?: () => void;
  currentPage?: 'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about' | 'chat' | 'login' | 'signup' | 'dashboard' | 'profile' | 'cv';
  onNavigate?: (page: 'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about' | 'chat' | 'login' | 'signup' | 'dashboard' | 'profile' | 'cv') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartPractice: _onStartPractice,
  currentPage = 'home',
  onNavigate
}) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    if (profileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const navLinks = [
    { label: 'Features', page: 'features' as const, href: '#features' },
    { label: 'How It Works', page: 'how-it-works' as const, href: '#how-it-works' },
    { label: 'Interview Library', page: 'simulations' as const, href: '#simulations' },
    { label: 'Pricing', page: 'pricing' as const, href: '#pricing' },
    { label: 'FAQ', page: 'faq' as const, href: '#faq' },
  ];

  const handleNavigatePage = (page: 'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about' | 'chat' | 'login' | 'signup' | 'dashboard' | 'profile' | 'cv') => {
    setProfileDropdownOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setProfileDropdownOpen(false);
    logout();
    handleNavigatePage('home');
  };

  const handleLinkClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    handleNavigatePage(link.page);
  };

  const userInitials = user?.name
    ? user.name.split(' ').map((n) => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase()
    : 'SA';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(8, 12, 20, 0.92)' : 'rgba(8, 12, 20, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Brand Logo: Clean purple rounded badge + Inprep AI */}
        <div
          onClick={() => handleNavigatePage('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '11px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(99, 102, 241, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Sparkles size={20} color="#ffffff" />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
            Inprep <span style={{ color: '#818cf8' }}>AI</span>
          </span>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link, e)}
              style={{
                color: currentPage === link.page ? '#818cf8' : '#94a3b8',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = currentPage === link.page ? '#818cf8' : '#94a3b8')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions: Conditional on Authentication Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {!isAuthenticated ? (
            <>
              {/* Log In Button */}
              <button
                onClick={() => handleNavigatePage('login')}
                className="nav-login-btn"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#cbd5e1',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '8px 14px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                Log In
              </button>

              {/* Get Started Button */}
              <button
                onClick={() => handleNavigatePage('signup')}
                className="nav-cta-btn"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  padding: '10px 22px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 18px rgba(99, 102, 241, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(99, 102, 241, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(99, 102, 241, 0.4)';
                }}
              >
                <span>Get Started</span>
              </button>
            </>
          ) : (
            <>
              {/* Authenticated User: Dashboard shortcut */}
              <button
                onClick={() => handleNavigatePage('dashboard')}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  borderRadius: '100px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                <LayoutDashboard size={14} color="#818cf8" />
                <span>Dashboard</span>
              </button>

              {/* User profile dropdown button container */}
              <div style={{ position: 'relative' }} ref={dropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen((prev) => !prev)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '4px 10px 4px 4px',
                    backgroundColor: profileDropdownOpen
                      ? 'rgba(99, 102, 241, 0.15)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: profileDropdownOpen
                      ? '1px solid rgba(99, 102, 241, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  title={`Logged in as ${user?.name || 'Candidate'}`}
                  aria-expanded={profileDropdownOpen}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 700,
                      boxShadow: '0 2px 10px rgba(124, 58, 237, 0.35)',
                    }}
                  >
                    {userInitials}
                  </div>
                  <ChevronDown
                    size={14}
                    style={{
                      color: profileDropdownOpen ? '#818cf8' : '#94a3b8',
                      transform: profileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 10px)',
                      right: 0,
                      width: '260px',
                      backgroundColor: '#0c101a',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '16px',
                      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                      padding: '10px',
                      zIndex: 200,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      backdropFilter: 'blur(24px)',
                    }}
                  >
                    {/* Header Info */}
                    <div
                      style={{
                        padding: '8px 10px 10px 10px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                        marginBottom: '4px',
                      }}
                    >
                      <div style={{ color: '#f8fafc', fontSize: '0.86rem', fontWeight: 600 }}>
                        {user.name || 'Candidate'}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.72rem' }}>
                        {user.email || 'candidate@inprep.ai'}
                      </div>
                    </div>

                    <button
                      onClick={() => handleNavigatePage('profile')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '9px 12px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '10px',
                        color: '#cbd5e1',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#cbd5e1';
                      }}
                    >
                      <User size={16} color="#818cf8" />
                      <span>My Profile</span>
                    </button>

                    <button
                      onClick={() => handleNavigatePage('cv')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '9px 12px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '10px',
                        color: '#cbd5e1',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#cbd5e1';
                      }}
                    >
                      <FileText size={16} color="#38bdf8" />
                      <span>My CV</span>
                    </button>

                    <button
                      onClick={() => handleNavigatePage('dashboard')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '9px 12px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '10px',
                        color: '#cbd5e1',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#cbd5e1';
                      }}
                    >
                      <LayoutDashboard size={16} color="#a855f7" />
                      <span>Candidate Dashboard</span>
                    </button>

                    <div
                      style={{
                        margin: '4px 0',
                        height: '1px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      }}
                    />

                    <button
                      onClick={handleLogout}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '9px 12px',
                        backgroundColor: 'rgba(239, 68, 68, 0.06)',
                        border: '1px solid rgba(239, 68, 68, 0.18)',
                        borderRadius: '10px',
                        color: '#f87171',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.16)';
                        e.currentTarget.style.color = '#fca5a5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.06)';
                        e.currentTarget.style.color = '#f87171';
                      }}
                    >
                      <LogOut size={16} color="#f87171" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
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
          background: 'rgba(8, 12, 20, 0.98)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
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
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavigatePage('login'); }}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Log In
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavigatePage('signup'); }}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Get Started
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavigatePage('dashboard'); }}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavigatePage('profile'); }}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  My Profile
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); logout(); handleNavigatePage('home'); }}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <LogOut size={16} />
                  Log Out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

