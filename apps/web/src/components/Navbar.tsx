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
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.2s ease',
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: '70px' }}>
        {/* Brand Logo */}
        <div
          onClick={() => handleNavigatePage('home')}
          className="flex items-center gap-2"
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Sparkles size={18} color="var(--bg-main)" />
          </div>
          <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>
            Inprep <span style={{ color: 'var(--text-secondary)' }}>AI</span>
          </span>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="desktop-nav flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link, e)}
              style={{
                color: currentPage === link.page ? 'var(--text-main)' : 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <div className="desktop-nav flex items-center gap-4">
              <button
                onClick={() => handleNavigatePage('login')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
              >
                Log In
              </button>
              <button
                onClick={() => handleNavigatePage('signup')}
                className="btn btn-primary btn-sm"
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavigatePage('dashboard')}
                className="btn btn-secondary btn-sm desktop-nav flex items-center gap-2"
              >
                <LayoutDashboard size={14} />
                <span>Dashboard</span>
              </button>

              <div style={{ position: 'relative' }} ref={dropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2"
                  style={{
                    padding: '4px 8px 4px 4px',
                    backgroundColor: profileDropdownOpen ? 'var(--bg-card)' : 'transparent',
                    border: '1px solid',
                    borderColor: profileDropdownOpen ? 'var(--border-accent)' : 'transparent',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  aria-expanded={profileDropdownOpen}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}
                  >
                    {userInitials}
                  </div>
                  <ChevronDown
                    size={14}
                    style={{
                      color: 'var(--text-secondary)',
                      transform: profileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>

                {profileDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      right: 0,
                      width: '220px',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-lg)',
                      padding: '8px',
                      zIndex: 200,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div style={{ padding: '8px', borderBottom: '1px solid var(--border-subtle)', marginBottom: '4px' }}>
                      <div style={{ color: 'var(--text-main)', fontSize: '13px', fontWeight: 600 }}>
                        {user.name || 'Candidate'}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>
                        {user.email || 'candidate@inprep.ai'}
                      </div>
                    </div>

                    <button
                      onClick={() => handleNavigatePage('profile')}
                      className="btn btn-outline flex items-center justify-start gap-2 w-full"
                      style={{ border: 'none', padding: '8px', fontSize: '13px' }}
                    >
                      <User size={14} /> My Profile
                    </button>
                    <button
                      onClick={() => handleNavigatePage('cv')}
                      className="btn btn-outline flex items-center justify-start gap-2 w-full"
                      style={{ border: 'none', padding: '8px', fontSize: '13px' }}
                    >
                      <FileText size={14} /> My CV
                    </button>
                    <button
                      onClick={() => handleNavigatePage('dashboard')}
                      className="btn btn-outline flex items-center justify-start gap-2 w-full"
                      style={{ border: 'none', padding: '8px', fontSize: '13px' }}
                    >
                      <LayoutDashboard size={14} /> Dashboard
                    </button>

                    <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '4px 0' }} />

                    <button
                      onClick={handleLogout}
                      className="btn btn-outline flex items-center justify-start gap-2 w-full"
                      style={{ border: 'none', padding: '8px', fontSize: '13px', color: 'var(--color-error)' }}
                    >
                      <LogOut size={14} /> Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle btn btn-outline btn-sm"
            style={{ display: 'none', padding: '6px' }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
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
                color: 'var(--text-main)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '8px 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex-col gap-2 mt-2">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavigatePage('login'); }}
                  className="btn btn-secondary w-full"
                >
                  Log In
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavigatePage('signup'); }}
                  className="btn btn-primary w-full"
                >
                  Get Started
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleNavigatePage('dashboard'); }}
                  className="btn btn-secondary w-full"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); logout(); handleNavigatePage('home'); }}
                  className="btn btn-outline w-full"
                  style={{ color: 'var(--color-error)' }}
                >
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
