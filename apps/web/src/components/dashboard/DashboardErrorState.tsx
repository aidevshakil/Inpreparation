import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface DashboardErrorStateProps {
  onRetry: () => void;
}

export const DashboardErrorState: React.FC<DashboardErrorStateProps> = ({ onRetry }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(244, 63, 94, 0.08)',
        border: '1px solid rgba(244, 63, 94, 0.25)',
        borderRadius: '20px',
        padding: '36px 24px',
        textAlign: 'center',
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'rgba(244, 63, 94, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fb7185',
          marginBottom: '16px',
        }}
      >
        <AlertTriangle size={28} />
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
        Telemetry Synchronization Interrupted
      </h3>
      <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '460px', lineHeight: 1.5, marginBottom: '20px' }}>
        Unable to reach the live scoring backend cluster. Local sandbox diagnostics are safely cached.
      </p>

      <button
        onClick={onRetry}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          backgroundColor: '#f43f5e',
          color: '#ffffff',
          border: 'none',
          borderRadius: '10px',
          fontSize: '0.84rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        <RotateCcw size={15} />
        <span>Retry Connection</span>
      </button>
    </div>
  );
};
