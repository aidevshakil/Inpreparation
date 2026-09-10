import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  badge,
  children,
  style,
  ...props
}) => {
  return (
    <div
      style={{
        background: '#1e293b',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
        color: '#f8fafc',
        ...style,
      }}
      {...props}
    >
      {(title || badge) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            {title && <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>{title}</h3>}
            {subtitle && <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '14px' }}>{subtitle}</p>}
          </div>
          {badge && (
            <span
              style={{
                fontSize: '12px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: 'rgba(99, 102, 241, 0.15)',
                color: '#818cf8',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
};
