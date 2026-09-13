import React from 'react';

export const DashboardSkeletonState: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px 0' }}>
      {/* Top Banner Skeleton */}
      <div
        style={{
          height: '80px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          animation: 'pulse 1.8s infinite ease-in-out',
        }}
      />

      {/* Main Readiness + Metrics Grid Skeleton */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.8fr',
          gap: '18px',
        }}
      >
        <div
          style={{
            height: '240px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                height: '112px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            />
          ))}
        </div>
      </div>

      {/* 2-Column Cards Skeleton */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '18px',
        }}
      >
        <div
          style={{
            height: '180px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        />
        <div
          style={{
            height: '180px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        />
      </div>
    </div>
  );
};
