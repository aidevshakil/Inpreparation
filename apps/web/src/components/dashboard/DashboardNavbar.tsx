import React from 'react';
import { Search, Bell, Moon, Link2, ChevronDown, Menu } from 'lucide-react';

interface DashboardNavbarProps {
  onToggleSidebar?: () => void;
  onSearch?: (query: string) => void;
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  onToggleSidebar,
}) => {
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
            placeholder="Search interview, skills, rubrics, or role archetypes..."
            style={{
              width: '100%',
              height: '38px',
              padding: '0 52px 0 40px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.82rem',
              outline: 'none',
              transition: 'border-color 0.2s, background-color 0.2s',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
            }}
          />
          <kbd
            style={{
              position: 'absolute',
              right: '10px',
              padding: '2px 6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '5px',
              color: '#94a3b8',
              fontSize: '0.7rem',
              fontFamily: 'inherit',
              pointerEvents: 'none',
            }}
          >
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* AI Engine Status Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            padding: '5px 12px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            color: '#34d399',
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
          <span>AI Engine Online</span>
        </div>

        {/* Quick Action Icons */}
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
          title="Toggle Theme"
        >
          <Moon size={16} />
        </button>

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
          title="Telemetry Connection"
        >
          <Link2 size={16} />
        </button>

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
            SA
          </div>
          <span style={{ fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 500 }}>
            Shakil Ahamed
          </span>
          <ChevronDown size={14} style={{ color: '#64748b' }} />
        </div>
      </div>
    </header>
  );
};
