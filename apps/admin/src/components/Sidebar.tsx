import React from 'react';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onSelectTab }) => {
  const menuItems = [
    { id: 'dashboard', label: '📊 Overview' },
    { id: 'ai-analytics', label: '🤖 AI Model Stats' },
    { id: 'users', label: '👥 User Directory' },
    { id: 'settings', label: '⚙️ System Settings' },
  ];

  return (
    <aside
      style={{
        width: '260px',
        backgroundColor: '#0f172a',
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
      }}
    >
      <div style={{ padding: '0 12px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#38bdf8' }}>Control Panel</h2>
        <span style={{ fontSize: '12px', color: '#64748b' }}>Enterprise Suite</span>
      </div>

      <nav style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: '8px',
                border: 'none',
                background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                color: isActive ? '#38bdf8' : '#94a3b8',
                fontWeight: isActive ? 600 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
