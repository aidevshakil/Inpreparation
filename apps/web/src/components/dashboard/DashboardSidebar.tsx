import React from 'react';
import {
  LayoutDashboard,
  User,
  FileText,
  Compass,
  BookOpen,
  Sparkles,
  History,
  TrendingUp,
  Target,
  Bell,
  Settings,
  HelpCircle,
  ChevronsLeft,
  MoreVertical,
  Zap,
} from 'lucide-react';

export type NavItemKey =
  | 'dashboard'
  | 'profile'
  | 'cv'
  | 'assessment'
  | 'library'
  | 'recommended'
  | 'history'
  | 'performance'
  | 'improvement'
  | 'notifications'
  | 'settings'
  | 'help';

interface DashboardSidebarProps {
  activeItem: NavItemKey;
  onSelectItem: (item: NavItemKey) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  creditsRemaining?: number;
  totalCredits?: number;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeItem = 'dashboard',
  onSelectItem,
  collapsed = false,
  onToggleCollapse,
  creditsRemaining = 78,
  totalCredits = 100,
}) => {
  const primaryNavItems = [
    { key: 'dashboard' as NavItemKey, label: 'Dashboard', icon: LayoutDashboard },
    { key: 'profile' as NavItemKey, label: 'My Profile', icon: User },
    { key: 'cv' as NavItemKey, label: 'My CV', icon: FileText, badge: 'Parsed', badgeColor: '#10b981' },
    { key: 'assessment' as NavItemKey, label: 'Career Assessment', icon: Compass },
    { key: 'library' as NavItemKey, label: 'Interview Library', icon: BookOpen },
    { key: 'recommended' as NavItemKey, label: 'Recommended', icon: Sparkles, badge: '4', badgeColor: '#6366f1' },
    { key: 'history' as NavItemKey, label: 'Interview History', icon: History },
    { key: 'performance' as NavItemKey, label: 'Performance', icon: TrendingUp },
    { key: 'improvement' as NavItemKey, label: 'Improvement Plan', icon: Target },
  ];

  const secondaryNavItems = [
    { key: 'notifications' as NavItemKey, label: 'Notifications', icon: Bell, hasDot: true },
    { key: 'settings' as NavItemKey, label: 'Settings', icon: Settings },
    { key: 'help' as NavItemKey, label: 'Help & Support', icon: HelpCircle },
  ];

  const creditsPercent = Math.min(100, Math.max(0, (creditsRemaining / totalCredits) * 100));

  return (
    <aside
      style={{
        width: collapsed ? '76px' : '256px',
        minWidth: collapsed ? '76px' : '256px',
        backgroundColor: '#080c14',
        borderRight: '1px solid rgba(255, 255, 255, 0.07)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        position: 'sticky',
        top: 0,
        zIndex: 45,
        transition: 'width 0.25s ease, min-width 0.25s ease',
        userSelect: 'none',
      }}
    >
      {/* Top Header / Logo */}
      <div>
        <div
          style={{
            height: '64px',
            padding: '0 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            onClick={() => onSelectItem('dashboard')}
          >
            {/* Logo Mark */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '9px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(124, 58, 237, 0.45)',
                flexShrink: 0,
              }}
            >
              <Zap size={18} color="#ffffff" fill="#ffffff" />
            </div>

            {!collapsed && (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.96rem', letterSpacing: '-0.3px' }}>
                    Inprep
                  </span>
                  <span
                    style={{
                      backgroundColor: '#6366f1',
                      color: '#ffffff',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '4px',
                      lineHeight: '1.2',
                    }}
                  >
                    AI
                  </span>
                </div>
                <span
                  style={{
                    color: '#64748b',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Candidate Studio
                </span>
              </div>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              borderRadius: '6px',
            }}
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            <ChevronsLeft
              size={16}
              style={{
                transform: collapsed ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>
        </div>

        {/* Primary Navigation Links */}
        <div style={{ padding: '14px 10px 6px 10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onSelectItem(item.key)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: collapsed ? '9px 0' : '9px 12px',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  backgroundColor: isActive ? 'rgba(99, 102, 241, 0.16)' : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '9px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.color = '#f1f5f9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#94a3b8';
                  }
                }}
                title={collapsed ? item.label : undefined}
              >
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '18%',
                      bottom: '18%',
                      width: '3px',
                      backgroundColor: '#6366f1',
                      borderRadius: '0 4px 4px 0',
                    }}
                  />
                )}
                <Icon
                  size={17}
                  style={{
                    color: isActive ? '#818cf8' : '#64748b',
                    flexShrink: 0,
                  }}
                />
                {!collapsed && (
                  <>
                    <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        style={{
                          fontSize: '0.66rem',
                          fontWeight: 600,
                          padding: '2px 7px',
                          borderRadius: '9999px',
                          backgroundColor:
                            item.badge === 'Parsed'
                              ? 'rgba(16, 185, 129, 0.18)'
                              : 'rgba(99, 102, 241, 0.22)',
                          color: item.badgeColor,
                          border: `1px solid ${item.badge === 'Parsed' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            margin: '8px 14px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
          }}
        />

        {/* Secondary Navigation Links */}
        <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {secondaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onSelectItem(item.key)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: collapsed ? '9px 0' : '9px 12px',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  backgroundColor: isActive ? 'rgba(99, 102, 241, 0.16)' : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '9px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.color = '#f1f5f9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#94a3b8';
                  }
                }}
                title={collapsed ? item.label : undefined}
              >
                <Icon
                  size={17}
                  style={{
                    color: isActive ? '#818cf8' : '#64748b',
                    flexShrink: 0,
                  }}
                />
                {!collapsed && (
                  <>
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.hasDot && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#a855f7',
                        }}
                      />
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: AI Credits & User Tile */}
      <div style={{ padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* AI Credits Widget */}
        {!collapsed ? (
          <div
            style={{
              padding: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 500 }}>AI Credits</span>
              <span style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 700 }}>
                {creditsRemaining} <span style={{ color: '#64748b', fontWeight: 400 }}>/ {totalCredits}</span>
              </span>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                overflow: 'hidden',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  width: `${creditsPercent}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                  borderRadius: '9999px',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
              <span style={{ color: '#64748b' }}>Refills in 12 days</span>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#a855f7',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Get More
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '10px',
            }}
            title={`AI Credits: ${creditsRemaining}/${totalCredits}`}
          >
            <Zap size={16} color="#a855f7" />
            <span style={{ fontSize: '0.65rem', color: '#a855f7', fontWeight: 700, marginTop: '2px' }}>
              {creditsRemaining}
            </span>
          </div>
        )}

        {/* User Card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: collapsed ? '8px 0' : '8px 10px',
            justifyContent: collapsed ? 'center' : 'space-between',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            SA
          </div>

          {!collapsed && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    color: '#f8fafc',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Shakil Ahamed
                </span>
                <span style={{ color: '#64748b', fontSize: '0.68rem' }}>Candidate Pro</span>
              </div>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '2px',
                }}
              >
                <MoreVertical size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
