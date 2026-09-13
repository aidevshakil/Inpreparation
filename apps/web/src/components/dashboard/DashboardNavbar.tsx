import React from 'react';
import { Search, Bell, Moon, Link2, ChevronDown, Menu } from 'lucide-react';

interface DashboardNavbarProps {
  onToggleSidebar?: () => void;
  onSearch?: (query: string) => void;
}

import { useAuth } from '../../context/AuthContext';

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  onToggleSidebar,
}) => {
  const { user } = useAuth();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
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
          }}
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

        {/* User profile dropdown chip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px 4px 5px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
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
            }}
          >
            {getInitials(user.name || 'Candidate')}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 500 }}>
            {user.name || 'Candidate User'}
          </span>
          <ChevronDown size={14} style={{ color: '#64748b' }} />
        </div>
      </div>
    </header>
  );
};
