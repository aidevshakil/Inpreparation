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
  MoreVertical,
  Zap,
  SlidersHorizontal,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  LucideIcon,
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
  | 'skill-analytics'
  | 'communication-analytics'
  | 'speech-analytics'
  | 'presentation-analytics'
  | 'question-performance'
  | 'improvement'
  | 'notifications'
  | 'settings'
  | 'help'
  | 'categories'
  | 'search';

import { useAuth } from '../../context/AuthContext';

interface DashboardSidebarProps {
  activeItem: NavItemKey;
  onSelectItem: (item: NavItemKey) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  creditsRemaining?: number;
  totalCredits?: number;
}

export interface NavSubItem {
  key: NavItemKey;
  label: string;
}

export interface NavItem {
  key: NavItemKey;
  label: string;
  icon: LucideIcon;
  badge?: string;
  badgeColor?: string;
  subItems?: NavSubItem[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeItem = 'dashboard',
  onSelectItem,
  collapsed = false,
  onToggleCollapse,
  creditsRemaining: propCreditsRemaining,
  totalCredits: propTotalCredits,
}) => {
  const { user } = useAuth();
  const creditsRemaining = user?.creditsRemaining !== undefined ? user.creditsRemaining : (propCreditsRemaining !== undefined ? propCreditsRemaining : 100);
  const totalCredits = user?.totalCredits !== undefined ? user.totalCredits : (propTotalCredits !== undefined ? propTotalCredits : 100);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };
  const navGroups: NavGroup[] = [
    {
      title: 'DIAGNOSTIC CORE',
      items: [
        { key: 'dashboard' as NavItemKey, label: 'Dashboard', icon: LayoutDashboard },
        { key: 'profile' as NavItemKey, label: 'My Profile', icon: User },
        { key: 'cv' as NavItemKey, label: 'My CV', icon: FileText, badge: 'Parsed', badgeColor: '#10b981' },
        { key: 'assessment' as NavItemKey, label: 'Career Assessment', icon: Compass, badge: '#24 Completed', badgeColor: '#38bdf8' },
      ],
    },
    {
      title: 'INTERVIEW STUDIO',
      items: [
        { key: 'recommended' as NavItemKey, label: 'Recommended Interviews', icon: Sparkles, badge: '4 New', badgeColor: '#6366f1' },
        { key: 'library' as NavItemKey, label: 'Interview Library', icon: BookOpen },
        { key: 'categories' as NavItemKey, label: 'Interview Categories', icon: Target },
        { key: 'search' as NavItemKey, label: 'Search & Filter', icon: SlidersHorizontal },
      ],
    },
    {
      title: 'PERFORMANCE & GROWTH',
      items: [
        { key: 'history' as NavItemKey, label: 'Practice History', icon: History },
        {
          key: 'performance' as NavItemKey,
          label: 'Performance',
          icon: TrendingUp,
          subItems: [
            { key: 'performance' as NavItemKey, label: 'Performance #34' },
            { key: 'performance' as NavItemKey, label: 'Score Analytics #36' },
            { key: 'skill-analytics' as NavItemKey, label: 'Skill Analytics #37' },
            { key: 'communication-analytics' as NavItemKey, label: 'Communication #38' },
            { key: 'speech-analytics' as NavItemKey, label: 'Speech Analytics #39' },
            { key: 'presentation-analytics' as NavItemKey, label: 'Presentation #40' },
            { key: 'question-performance' as NavItemKey, label: 'Question Review #41' },
            { key: 'improvement' as NavItemKey, label: 'AI Plan #42' },
          ],
        },
      ],
    },
  ];

  const systemItems = [
    { key: 'notifications' as NavItemKey, label: 'Notifications', icon: Bell, hasDot: true },
    { key: 'settings' as NavItemKey, label: 'Settings', icon: Settings },
    { key: 'help' as NavItemKey, label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <aside
      style={{
        width: collapsed ? '76px' : '256px',
        minWidth: collapsed ? '76px' : '256px',
        backgroundColor: 'var(--bg-surface)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        position: 'sticky',
        top: 0,
        zIndex: 45,
        transition: 'width 0.25s ease, min-width 0.25s ease, background-color 0.25s ease',
        userSelect: 'none',
      }}
    >
      {/* Top Header / Logo */}
      <div>
        <div
          style={{
            height: '64px',
            padding: collapsed ? '0' : '0 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            position: 'relative',
          }}
        >
          {collapsed ? (
            <>
              <div
                onClick={() => onSelectItem('dashboard')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  width: '100%',
                }}
                title="Inprep AI - Candidate Studio"
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(124, 58, 237, 0.45)',
                    flexShrink: 0,
                    transition: 'transform 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <Zap size={19} color="#ffffff" fill="#ffffff" />
                </div>
              </div>

              {/* Floating Expand Toggle */}
              {onToggleCollapse && (
                <button
                  onClick={onToggleCollapse}
                  style={{
                    position: 'absolute',
                    right: '-11px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 50,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                    transition: 'all 0.15s ease',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                  title="Expand Sidebar"
                  aria-label="Expand Sidebar"
                >
                  <ChevronsRight size={13} />
                </button>
              )}
            </>
          ) : (
            <>
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

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.96rem', letterSpacing: '-0.3px' }}>
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
                      color: 'var(--text-muted)',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Candidate Studio
                  </span>
                </div>
              </div>

              {onToggleCollapse && (
                <button
                  onClick={onToggleCollapse}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    borderRadius: '6px',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-main)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                  title="Collapse Sidebar"
                  aria-label="Collapse Sidebar"
                >
                  <ChevronsLeft size={16} />
                </button>
              )}
            </>
          )}
        </div>

        {/* Navigation Groups */}
        <div style={{ padding: '14px 10px 6px 10px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
          {navGroups.map((group, groupIdx) => (
            <div key={groupIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {!collapsed && (
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', paddingLeft: '12px', marginBottom: '2px', textTransform: 'uppercase' }}>
                  {group.title}
                </div>
              )}
              {group.items.map((item) => {
                const Icon = item.icon;
                const isGroupActive = activeItem === item.key || 
                  (item.subItems && (activeItem === 'performance' || activeItem === 'skill-analytics' || activeItem === 'communication-analytics' || activeItem === 'speech-analytics' || activeItem === 'presentation-analytics' || activeItem === 'question-performance' || activeItem === 'improvement'));
                const hasSub = !!item.subItems && !collapsed;
                const isSubExpanded = hasSub && (activeItem === 'performance' || activeItem === 'skill-analytics' || activeItem === 'communication-analytics' || activeItem === 'speech-analytics' || activeItem === 'presentation-analytics' || activeItem === 'question-performance' || activeItem === 'improvement');

                return (
                  <div key={item.key} style={{ display: 'flex', flexDirection: 'column' }}>
                    <button
                      onClick={() => onSelectItem(item.key)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: collapsed ? '9px 0' : '9px 12px',
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        backgroundColor: (activeItem === item.key && !item.subItems) ? 'rgba(99, 102, 241, 0.16)' : 'transparent',
                        color: isGroupActive ? '#ffffff' : '#94a3b8',
                        border: 'none',
                        borderRadius: '9px',
                        fontSize: '0.82rem',
                        fontWeight: isGroupActive ? 600 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        position: 'relative',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => {
                        if (activeItem !== item.key) {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                          e.currentTarget.style.color = '#f1f5f9';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeItem !== item.key) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = isGroupActive ? '#ffffff' : '#94a3b8';
                        }
                      }}
                      title={collapsed ? item.label : undefined}
                    >
                      {activeItem === item.key && !item.subItems && (
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
                          color: isGroupActive ? '#818cf8' : '#64748b',
                          flexShrink: 0,
                        }}
                      />
                      {!collapsed && (
                        <>
                          <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.label}
                          </span>
                          {hasSub && (
                            <ChevronDown
                              size={13}
                              style={{
                                color: '#64748b',
                                transform: isSubExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                                transition: 'transform 0.15s ease',
                              }}
                            />
                          )}
                          {item.badge && (
                            <span
                              style={{
                                fontSize: '0.62rem',
                                fontWeight: 600,
                                padding: '2px 6px',
                                borderRadius: '9999px',
                                backgroundColor: item.badgeColor ? `${item.badgeColor}25` : 'rgba(99, 102, 241, 0.22)',
                                color: item.badgeColor || '#a5b4fc',
                                border: `1px solid ${item.badgeColor ? `${item.badgeColor}40` : 'rgba(99, 102, 241, 0.3)'}`,
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </button>

                    {/* Submenu for Performance */}
                    {isSubExpanded && item.subItems && (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px',
                          paddingLeft: '24px',
                          marginTop: '2px',
                          marginBottom: '4px',
                        }}
                      >
                        {item.subItems.map((sub, sIdx) => {
                          const isSubActive =
                            (sub.key === 'improvement' && (activeItem === 'improvement' || activeItem === ('ai-plan' as any))) ||
                            (sub.key === 'question-performance' && activeItem === 'question-performance') ||
                            (sub.key === 'presentation-analytics' && activeItem === 'presentation-analytics') ||
                            (sub.key === 'speech-analytics' && activeItem === 'speech-analytics') ||
                            (sub.key === 'communication-analytics' && activeItem === 'communication-analytics') ||
                            (sub.key === 'skill-analytics' && activeItem === 'skill-analytics') ||
                            (sub.key === 'performance' && activeItem === 'performance' && sub.label.includes('34'));

                          return (
                            <button
                              key={sIdx}
                              onClick={() => onSelectItem(sub.key)}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '6px 12px',
                                background: isSubActive ? 'linear-gradient(135deg, #4f46e5, #6366f1)' : 'transparent',
                                color: isSubActive ? '#ffffff' : '#94a3b8',
                                border: 'none',
                                borderRadius: '7px',
                                fontSize: '0.74rem',
                                fontWeight: isSubActive ? 700 : 500,
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                boxShadow: isSubActive ? '0 2px 8px rgba(79, 70, 229, 0.35)' : 'none',
                              }}
                              onMouseEnter={(e) => {
                                if (!isSubActive) {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                                  e.currentTarget.style.color = '#f1f5f9';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isSubActive) {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = '#94a3b8';
                                }
                              }}
                            >
                              {sub.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            margin: '8px 14px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
          }}
        />

        {/* SYSTEM Navigation Links */}
        <div style={{ padding: '0 10px 10px 10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {!collapsed && (
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', paddingLeft: '12px', marginBottom: '2px', marginTop: '4px', textTransform: 'uppercase' }}>
              SYSTEM
            </div>
          )}
          {systemItems.map((item) => {
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
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={13} color="#06b6d4" />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 500 }}>AI Practice Credits</span>
              </div>
              <span style={{ fontSize: '0.74rem', color: '#0284c7', fontWeight: 700 }}>
                {totalCredits > 0 ? Math.round((creditsRemaining / totalCredits) * 100) : 100}%
              </span>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '5px',
                backgroundColor: 'var(--border-subtle)',
                borderRadius: '9999px',
                overflow: 'hidden',
                marginBottom: '6px',
              }}
            >
              <div
                style={{
                  width: `${totalCredits > 0 ? Math.min(100, Math.max(0, Math.round((creditsRemaining / totalCredits) * 100))) : 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                  borderRadius: '9999px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Balance</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{creditsRemaining} / {totalCredits} cr</span>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px',
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-subtle)',
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
          onClick={() => onSelectItem('profile')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: collapsed ? '8px 0' : '8px 10px',
            justifyContent: collapsed ? 'center' : 'space-between',
            backgroundColor: 'var(--bg-main)',
            borderRadius: '10px',
            border: '1px solid var(--border-subtle)',
            cursor: 'pointer',
            transition: 'all 0.18s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
            e.currentTarget.style.borderColor = 'var(--border-accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-main)';
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
          }}
          title={collapsed ? `${user.name || 'Candidate'} - View Profile` : 'Click to view profile'}
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
            {getInitials(user.name || 'Candidate')}
          </div>

          {!collapsed && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    color: 'var(--text-main)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {user.name || 'Candidate User'}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {user.targetRole && user.targetRole !== 'Select Target Role' && user.targetRole !== 'Full Stack Software Engineer'
                    ? user.targetRole
                    : 'Target Role Not Set'}
                </span>
              </div>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '2px',
                }}
                title="View Profile"
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
