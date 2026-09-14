import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Bell,
  Moon,
  Sun,
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
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProfileDropdownOpen(false);
        setNotificationsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
    <header className="flex items-center justify-between gap-4" style={{
      height: '64px',
      padding: '0 24px',
      backgroundColor: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 40,
    }}>
      {/* Left / Search Section */}
      <div className="flex items-center gap-4 flex-1" style={{ maxWidth: '640px' }}>
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="mobile-sidebar-toggle"
            style={{ display: 'none', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
            aria-label="Toggle Navigation"
          >
            <Menu size={20} />
          </button>
        )}

        <div style={{ position: 'relative', display: 'block', width: '100%' }}>
          <Search size={16} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '12px', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          <input
            type="text"
            className="input"
            placeholder="Search interviews, rubrics, metrics, or type 'help'..."
            style={{ paddingLeft: '36px', height: '36px', width: '100%' }}
          />
        </div>
      </div>

      {/* Right / Quick Actions & User */}
      <div className="flex items-center gap-2">
        {/* Workspace Link */}
        <button onClick={() => { alert('You are already in the Candidate Workspace!'); }} className="btn btn-outline" style={{ height: '36px', padding: '0 12px', fontSize: '13px', border: 'none' }}>
          <Link2 size={14} style={{ color: 'var(--primary-color)' }} />
          <span>Candidate Workspace</span>
        </button>

        {/* Theme mode icon */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="btn btn-outline" 
          style={{ width: '36px', height: '36px', padding: 0, border: 'none' }} 
          title="Toggle Theme"
        >
          {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {/* Notification Bell */}
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="btn btn-outline relative" 
            style={{ width: '36px', height: '36px', padding: 0, border: 'none', backgroundColor: notificationsOpen ? 'var(--bg-surface)' : 'transparent' }} 
            title="Notifications"
          >
            <Bell size={16} />
            <span style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-error)' }} />
          </button>

          {/* Notifications Dropdown Menu */}
          {notificationsOpen && (
            <div className="card flex-col gap-1" style={{
              position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: '280px',
              padding: '16px', zIndex: 100, backgroundColor: 'var(--bg-card)',
            }}>
              <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Notifications</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'center', padding: '16px 0', color: 'var(--text-muted)' }}>
                <Bell size={24} style={{ opacity: 0.5 }} />
                <span style={{ fontSize: '13px' }}>No new notifications</span>
              </div>
            </div>
          )}
        </div>

        {/* User profile dropdown chip container */}
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button
            onClick={() => {
              setProfileDropdownOpen((prev) => !prev);
              setNotificationsOpen(false);
            }}
            className="btn btn-outline flex items-center gap-2"
            style={{ padding: '4px 10px 4px 4px', borderRadius: '9999px', height: '36px', marginLeft: '4px', border: 'none', backgroundColor: profileDropdownOpen ? 'var(--bg-surface)' : 'transparent' }}
            aria-expanded={profileDropdownOpen}
            aria-haspopup="true"
          >
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              backgroundColor: 'var(--primary-color)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#ffffff', fontSize: '12px', fontWeight: 600,
            }}>
              {getInitials(user.name || 'Candidate')}
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>
              {user.name || 'Candidate User'}
            </span>
            <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
          </button>

          {/* Profile Dropdown Menu */}
          {profileDropdownOpen && (
            <div className="card flex-col gap-1" style={{
              position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: '280px',
              padding: '12px', zIndex: 100, backgroundColor: 'var(--bg-card)',
            }}>
              {/* Header Info */}
              <div className="flex-col gap-2" style={{ padding: '4px 8px 12px 8px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div className="flex items-center gap-3">
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#ffffff', fontSize: '14px', fontWeight: 600,
                  }}>
                    {getInitials(user.name || 'Candidate')}
                  </div>
                  <div className="flex-col" style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {user.name || 'Candidate User'}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {user.email || 'candidate@inprep.ai'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between" style={{ padding: '6px 10px', backgroundColor: 'var(--bg-surface)', borderRadius: '6px' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>
                    {user.targetRole || 'Candidate Pro'}
                  </span>
                  <span className="flex items-center gap-1" style={{ color: 'var(--color-success)', fontSize: '12px', fontWeight: 600 }}>
                    <Zap size={12} fill="currentColor" />
                    {user.creditsRemaining} cr
                  </span>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-col gap-1 mt-2">
                {[
                  { id: 'profile', icon: User, color: 'var(--primary-color)', title: 'My Profile', desc: 'Account & career targets' },
                  { id: 'cv', icon: FileText, color: 'var(--color-info)', title: 'My CV / Resume', desc: 'ATS score & skill graph' },
                  { id: 'dashboard', icon: LayoutDashboard, color: 'var(--color-warning)', title: 'Candidate Dashboard', desc: 'Readiness & practice cockpit' },
                  { id: 'simulations', icon: Sparkles, color: 'var(--color-success)', title: 'Interview Library', desc: 'Simulations & rubrics' },
                  { id: 'home', icon: Globe, color: 'var(--text-muted)', title: 'Public Landing', desc: 'Overview & features' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
                      backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', width: '100%'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-surface)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <item.icon size={16} color={item.color} />
                    <div className="flex-col">
                      <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-main)' }}>{item.title}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{item.desc}</span>
                    </div>
                  </button>
                ))}

                <div style={{ margin: '4px 0', height: '1px', backgroundColor: 'var(--border-subtle)' }} />

                <button
                  onClick={handleLogout}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
                    backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', width: '100%'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <LogOut size={16} color="var(--color-error)" />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-error)' }}>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
