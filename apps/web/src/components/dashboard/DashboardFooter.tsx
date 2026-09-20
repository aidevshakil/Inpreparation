import React from 'react';

export const DashboardFooter: React.FC = () => {
  return (
    <footer
      style={{
        padding: '20px 0 28px 0',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px',
        fontSize: '0.72rem',
        color: 'var(--text-muted)',
      }}
    >
      {/* Left items */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Inprep AI</span>
        <span style={{ color: 'var(--border-accent)' }}>•</span>
        <span>Web Stream v4.1 (Candidate Dashboard)</span>
        <span style={{ color: 'var(--border-accent)' }}>•</span>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#10b981' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          <span>256-Bit Encrypted Sandbox</span>
        </div>
      </div>

      {/* Right items */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <a href="#privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s' }}>
          Privacy Policy
        </a>
        <a href="#terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s' }}>
          Terms of Service
        </a>
        <a href="#responsible-ai" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s' }}>
          Responsible AI Framework
        </a>
        <span style={{ color: 'var(--text-muted)' }}>© 2026 Inprep AI</span>
      </div>
    </footer>
  );
};
