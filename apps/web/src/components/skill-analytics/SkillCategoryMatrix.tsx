import React from 'react';
import { Code2, Network, Database, Radio } from 'lucide-react';

export const SkillCategoryMatrix: React.FC = () => {
  const categories = [
    {
      id: 'programming',
      title: 'Programming Systems',
      subtitle: 'Python, Goroutines, C++ IPC',
      icon: Code2,
      iconColor: '#38bdf8',
      iconBg: 'rgba(56, 189, 248, 0.12)',
      score: '87.2',
      badge: '92nd Percentile',
      badgeColor: '#38bdf8',
      defendedText: '14 Defended Answers',
      progressPercent: 87.2,
      barColor: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    },
    {
      id: 'distributed',
      title: 'Distributed Architecture',
      subtitle: 'Consensus, Circuit Breakers, MQ',
      icon: Network,
      iconColor: '#818cf8',
      iconBg: 'rgba(129, 140, 248, 0.12)',
      score: '82.8',
      badge: '84th Percentile',
      badgeColor: '#a5b4fc',
      defendedText: '9 Defended Answers',
      progressPercent: 82.8,
      barColor: 'linear-gradient(90deg, #6366f1, #a855f7)',
    },
    {
      id: 'database',
      title: 'Database & Storage',
      subtitle: 'Postgres Pools, WAL, Redis',
      icon: Database,
      iconColor: '#a855f7',
      iconBg: 'rgba(168, 85, 247, 0.12)',
      score: '83.5',
      badge: '86th Percentile',
      badgeColor: '#38bdf8',
      defendedText: '7 Defended Answers',
      progressPercent: 83.5,
      barColor: 'linear-gradient(90deg, #38bdf8, #6366f1)',
    },
    {
      id: 'reliability',
      title: 'Reliability & Telemetry',
      subtitle: 'Token Buckets, SLA, Ingress',
      icon: Radio,
      iconColor: '#fbbf24',
      iconBg: 'rgba(245, 158, 11, 0.12)',
      score: '75.2',
      badge: 'Needs Deliberate Practice',
      badgeColor: '#fbbf24',
      defendedText: '5 Defended Answers',
      progressPercent: 75.2,
      barColor: 'linear-gradient(90deg, #ef4444, #f59e0b)',
    },
  ];

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div style={{ marginBottom: '18px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Category Competency Matrix
        </h3>
        <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '2px 0 0 0' }}>
          Aggregated across all technical domains
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              style={{
                background: 'rgba(255, 255, 255, 0.015)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '8px',
                        background: cat.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} color={cat.iconColor} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                        {cat.title}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                        {cat.subtitle}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>
                    {cat.score}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', marginBottom: '6px' }}>
                  <span style={{ color: '#64748b' }}>{cat.defendedText}</span>
                  <span style={{ fontWeight: 700, color: cat.badgeColor }}>
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Mini progress bar */}
              <div style={{ width: '100%', height: '3px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '100px', overflow: 'hidden', marginTop: '6px' }}>
                <div
                  style={{
                    width: `${cat.progressPercent}%`,
                    height: '100%',
                    background: cat.barColor,
                    borderRadius: '100px',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
