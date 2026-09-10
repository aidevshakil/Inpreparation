import React from 'react';

export const Header: React.FC = () => {
  return (
    <header
      style={{
        height: '64px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        backgroundColor: '#090d16',
      }}
    >
      <div style={{ fontSize: '14px', color: '#94a3b8' }}>
        Status: <span style={{ color: '#4ade80', fontWeight: 600 }}>● AI Cluster Healthy</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Admin: root@domain.local</span>
        <div
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '13px',
          }}
        >
          AD
        </div>
      </div>
    </header>
  );
};
