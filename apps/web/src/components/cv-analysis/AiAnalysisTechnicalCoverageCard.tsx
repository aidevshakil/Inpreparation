import React from 'react';

export interface CoverageDomain {
  domain: string;
  percentage: number;
  colorGrad: string;
}

interface AiAnalysisTechnicalCoverageCardProps {
  coverageMap?: Record<string, number>;
}

export const AiAnalysisTechnicalCoverageCard: React.FC<AiAnalysisTechnicalCoverageCardProps> = ({
  coverageMap,
}) => {
  const gradients = [
    'linear-gradient(90deg, #6366f1, #818cf8)',
    'linear-gradient(90deg, #38bdf8, #60a5fa)',
    'linear-gradient(90deg, #818cf8, #c084fc)',
    'linear-gradient(90deg, #34d399, #10b981)',
    'linear-gradient(90deg, #f59e0b, #fbbf24)',
  ];

  const domains: CoverageDomain[] = coverageMap && Object.keys(coverageMap).length > 0
    ? Object.entries(coverageMap).map(([domain, percentage], idx) => ({
        domain,
        percentage,
        colorGrad: gradients[idx % gradients.length],
      }))
    : [
    {
      domain: 'Backend Distributed Architecture',
      percentage: 92,
      colorGrad: 'linear-gradient(90deg, #6366f1, #818cf8)',
    },
    {
      domain: 'Database Systems & Caching',
      percentage: 84,
      colorGrad: 'linear-gradient(90deg, #38bdf8, #60a5fa)',
    },
    {
      domain: 'Mobile Engineering (Flutter/Dart)',
      percentage: 74,
      colorGrad: 'linear-gradient(90deg, #818cf8, #c084fc)',
    },
    {
      domain: 'Cloud Orchestration & DevOps',
      percentage: 68,
      colorGrad: 'linear-gradient(90deg, #34d399, #10b981)',
    },
    {
      domain: 'Applied AI & Machine Learning Tools',
      percentage: 55,
      colorGrad: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '6px',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
            }}
          />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Technical Coverage Distribution
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            color: '#64748b',
            padding: '2px 6px',
          }}
        >
          Confidence Density
        </span>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
        Reflects detected keywords in your CV and tested personal proficiency.
      </p>

      {/* Progress Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {domains.map((d, idx) => (
          <div key={idx}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.74rem',
                marginBottom: '5px',
              }}
            >
              <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{d.domain}</span>
              <span style={{ color: '#e2e8f0', fontWeight: 700 }}>{d.percentage}%</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '7px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${d.percentage}%`,
                  height: '100%',
                  background: d.colorGrad,
                  borderRadius: '9999px',
                  transition: 'width 0.6s ease',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
