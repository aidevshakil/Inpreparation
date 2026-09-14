import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Bell,
  Moon,
  Link2,
  ChevronDown,
  Menu,
  User,
  LogOut,
  FileText,
  LayoutDashboard,
  Sparkles,
  Zap,
  Globe,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface DashboardNavbarProps {
  onToggleSidebar?: () => void;
  onSearch?: (query: string) => void;
  onNavigateToProfile?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToHome?: () => void;
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  onToggleSidebar,
  onNavigateToProfile,
  onNavigateToDashboard,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToHome,
}) => {
  const { user, logout } = useAuth();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProfileDropdownOpen(false);
      }
    };
    if (profileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [profileDropdownOpen]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const handleNavigate = (page: string) => {
    setProfileDropdownOpen(false);
    if (page === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (page === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (page === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (page === 'simulations' && onNavigateToSimulations) onNavigateToSimulations();
    else if (page === 'home' && onNavigateToHome) onNavigateToHome();

    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setProfileDropdownOpen(false);
    logout();
    if (onNavigateToHome) {
      onNavigateToHome();
    }
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        height: '64px',
        backgroundColor: 'rgba(10, 14, 23, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        position: 'sticky',
        top: '39px',
        zIndex: 40,
      }}
    >
      {/* Left / Search Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, maxWidth: '640px' }}>
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '6px',
            }}
            aria-label="Toggle Navigation"
            className="mobile-sidebar-toggle"
          >
            <Menu size={20} />
          </button>
        )}

        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '14px',
              color: '#64748b',
              pointerEvents: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Search interviews, rubrics, metrics, or type 'help'..."
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '9px 14px 9px 38px',
              color: '#f8fafc',
              fontSize: '0.82rem',
              outline: 'none',
              transition: 'all 0.18s ease',
            }}
          />
        </div>
      </div>

      {/* Right / Quick Actions & User */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Workspace Link */}
        <div
          onClick={() => handleNavigate('dashboard')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            fontSize: '0.74rem',
            color: '#94a3b8',
            cursor: 'pointer',
            transition: 'all 0.18s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
            e.currentTarget.style.color = '#f8fafc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.color = '#94a3b8';
          }}
          title="Go to Candidate Dashboard"
        >
          <Link2 size={13} style={{ color: '#818cf8' }} />
          <span>Candidate Workspace</span>
        </div>

        {/* Theme mode icon */}
        <button
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '9px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
            transition: 'all 0.18s ease',
          }}
          title="Dark Mode Active"
        >
          <Moon size={16} />
        </button>

        {/* Notification Bell */}
        <button
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '9px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.18s ease',
          }}
          title="Notifications"
        >
          <Bell size={16} />
          <span
            style={{
              position: 'absolute',
              top: '7px',
              right: '7px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#a855f7',
            }}
          />
        </button>

        {/* User profile dropdown chip container */}
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button
            onClick={() => setProfileDropdownOpen((prev) => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px 4px 5px',
              backgroundColor: profileDropdownOpen
                ? 'rgba(99, 102, 241, 0.15)'
                : 'rgba(255, 255, 255, 0.04)',
              border: profileDropdownOpen
                ? '1px solid rgba(99, 102, 241, 0.4)'
                : '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              cursor: 'pointer',
              marginLeft: '4px',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              if (!profileDropdownOpen) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
              }
            }}
            onMouseLeave={(e) => {
              if (!profileDropdownOpen) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }
            }}
            aria-expanded={profileDropdownOpen}
            aria-haspopup="true"
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 700,
                boxShadow: '0 2px 8px rgba(124, 58, 237, 0.3)',
              }}
            >
              {getInitials(user.name || 'Candidate')}
            </div>
            <span style={{ fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 500 }}>
              {user.name || 'Candidate User'}
            </span>
            <ChevronDown
              size={14}
              style={{
                color: profileDropdownOpen ? '#818cf8' : '#64748b',
                transform: profileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease, color 0.2s ease',
              }}
            />
          </button>

          {/* Profile Dropdown Menu */}
          {profileDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '280px',
                backgroundColor: '#0c101a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                padding: '12px',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                backdropFilter: 'blur(24px)',
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  padding: '10px 12px 12px 12px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                  marginBottom: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      boxShadow: '0 2px 10px rgba(124, 58, 237, 0.4)',
                      flexShrink: 0,
                    }}
                  >
                    {getInitials(user.name || 'Candidate')}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        color: '#f8fafc',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {user.name || 'Candidate User'}
                    </div>
                    <div
                      style={{
                        color: '#94a3b8',
                        fontSize: '0.72rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {user.email || 'candidate@inprep.ai'}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span
                    style={{
                      color: '#818cf8',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '140px',
                    }}
                  >
                    {user.targetRole || 'Candidate Pro'}
                  </span>
                  <span
                    style={{
                      color: '#34d399',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px',
                    }}
                  >
                    <Zap size={11} fill="#34d399" color="#34d399" />
                    {user.creditsRemaining} cr
                  </span>
                </div>
              </div>

              {/* Menu Items */}
              <button
                onClick={() => handleNavigate('profile')}
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>My Profile</span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Account & career targets</span>
                </div>
              </button>

              <button
                onClick={() => handleNavigate('cv')}
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>My CV / Resume</span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>ATS score & skill graph</span>
                </div>
              </button>

              <button
                onClick={() => handleNavigate('dashboard')}
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Candidate Dashboard</span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Readiness & practice cockpit</span>
                </div>
              </button>

              <button
                onClick={() => handleNavigate('simulations')}
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
                <Sparkles size={16} color="#f59e0b" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Interview Library</span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Simulations & rubrics</span>
                </div>
              </button>

              <button
                onClick={() => handleNavigate('home')}
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
                <Globe size={16} color="#64748b" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Public Landing</span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Overview & features</span>
                </div>
              </button>

              {/* Divider */}
              <div
                style={{
                  margin: '6px 4px',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                }}
              />

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
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
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.35)';
                  e.currentTarget.style.color = '#fca5a5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.18)';
                  e.currentTarget.style.color = '#f87171';
                }}
              >
                <LogOut size={16} color="#f87171" />
                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

