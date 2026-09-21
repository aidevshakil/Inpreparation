import React, { useState } from 'react';
import { Terminal, Network, Database, Cpu, Globe, Layers, Play, AlertTriangle, ChevronRight } from 'lucide-react';

export interface CompetencyItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  badgeType: 'default' | 'remediation' | 'active';
  evaluatedText: string;
  score: number;
  deltaText: string;
  deltaColor: string;
  barColor: string;
  actionType: 'drill' | 'remediate' | 'select';
  isSelected?: boolean;
}

interface SkillCoreCompetencyListProps {
  selectedId: string;
  onSelectCompetency: (id: string) => void;
  onLaunchDrill?: (competency: string) => void;
}

export const SkillCoreCompetencyList: React.FC<SkillCoreCompetencyListProps> = ({
  selectedId,
  onSelectCompetency,
  onLaunchDrill,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'focus' | 'exemplars'>('all');

  const competencies: CompetencyItem[] = [
    {
      id: 'python-asyncio',
      title: 'Python Concurrency & Asyncio',
      category: 'programming',
      badge: 'Programming',
      badgeType: 'default',
      evaluatedText: '12 Questions Evaluated • 6 Sessions • +5.4 pts trajectory',
      score: 88.0,
      deltaText: '+5.4 pts',
      deltaColor: '#34d399',
      barColor: 'linear-gradient(90deg, #38bdf8, #818cf8)',
      actionType: 'drill',
    },
    {
      id: 'dist-sys-arch',
      title: 'Distributed Systems Architecture',
      category: 'architecture',
      badge: 'Architecture',
      badgeType: 'default',
      evaluatedText: '8 Questions Evaluated • 4 Sessions • Consistent high score',
      score: 84.5,
      deltaText: '+4.2 pts',
      deltaColor: '#34d399',
      barColor: 'linear-gradient(90deg, #6366f1, #a855f7)',
      actionType: 'drill',
    },
    {
      id: 'pg-starvation',
      title: 'PostgreSQL Starvation & Connection Pooling',
      category: 'storage',
      badge: 'Storage',
      badgeType: 'default',
      evaluatedText: '6 Questions Evaluated • 3 Sessions • Stable trajectory',
      score: 82.0,
      deltaText: '+2.0 pts',
      deltaColor: '#38bdf8',
      barColor: 'linear-gradient(90deg, #818cf8, #a855f7)',
      actionType: 'drill',
    },
    {
      id: 'sys-design-cb',
      title: 'System Design & Circuit Breakers',
      category: 'architecture',
      badge: 'Architecture',
      badgeType: 'default',
      evaluatedText: '5 Questions Evaluated • 3 Sessions • +3.8 pts trajectory',
      score: 81.0,
      deltaText: '+3.8 pts',
      deltaColor: '#38bdf8',
      barColor: 'linear-gradient(90deg, #38bdf8, #6366f1)',
      actionType: 'drill',
    },
    {
      id: 'api-gateways',
      title: 'API Gateways & Rate Limiting',
      category: 'reliability',
      badge: 'Remediation Area',
      badgeType: 'remediation',
      evaluatedText: '5 Questions Evaluated • 3 Sessions • Boundary gaps',
      score: 76.5,
      deltaText: 'Needs Drill',
      deltaColor: '#f87171',
      barColor: 'linear-gradient(90deg, #f59e0b, #ef4444)',
      actionType: 'remediate',
    },
    {
      id: 'dist-backpressure',
      title: 'Distributed Backpressure & Throttling',
      category: 'reliability',
      badge: 'Active Dossier',
      badgeType: 'active',
      evaluatedText: '4 Questions Evaluated • 2 Sessions • Primary focus',
      score: 74.0,
      deltaText: 'Immediate Target',
      deltaColor: '#fbbf24',
      barColor: 'linear-gradient(90deg, #ef4444, #f97316)',
      actionType: 'select',
      isSelected: true,
    },
  ];

  const filtered = competencies.filter((c) => {
    if (activeFilter === 'focus') return c.score < 80;
    if (activeFilter === 'exemplars') return c.score >= 85;
    return true;
  });

  const getIcon = (id: string) => {
    switch (id) {
      case 'python-asyncio':
        return <Terminal size={15} color="#38bdf8" />;
      case 'dist-sys-arch':
        return <Network size={15} color="#818cf8" />;
      case 'pg-starvation':
        return <Database size={15} color="#a855f7" />;
      case 'sys-design-cb':
        return <Cpu size={15} color="#38bdf8" />;
      case 'api-gateways':
        return <Globe size={15} color="#f87171" />;
      default:
        return <Layers size={15} color="#c084fc" />;
    }
  };

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
      {/* Header + Filter Pills */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Core Competency Performance
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '2px 0 0 0' }}>
            Ranked deterministic scores across high-weight interview vectors.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '3px',
            gap: '2px',
          }}
        >
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              background: activeFilter === 'all' ? '#4f46e5' : 'transparent',
              color: activeFilter === 'all' ? '#ffffff' : '#94a3b8',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '0.7rem',
              fontWeight: activeFilter === 'all' ? 700 : 500,
              cursor: 'pointer',
            }}
          >
            All Competencies
          </button>
          <button
            onClick={() => setActiveFilter('focus')}
            style={{
              background: activeFilter === 'focus' ? '#4f46e5' : 'transparent',
              color: activeFilter === 'focus' ? '#ffffff' : '#94a3b8',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '0.7rem',
              fontWeight: activeFilter === 'focus' ? 700 : 500,
              cursor: 'pointer',
            }}
          >
            Focus (Sub-80)
          </button>
          <button
            onClick={() => setActiveFilter('exemplars')}
            style={{
              background: activeFilter === 'exemplars' ? '#4f46e5' : 'transparent',
              color: activeFilter === 'exemplars' ? '#ffffff' : '#94a3b8',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '0.7rem',
              fontWeight: activeFilter === 'exemplars' ? 700 : 500,
              cursor: 'pointer',
            }}
          >
            Exemplars (85+)
          </button>
        </div>
      </div>

      {/* Competencies List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filtered.map((item) => {
          const isSelected = selectedId === item.id || (!selectedId && item.id === 'dist-backpressure');

          return (
            <div
              key={item.id}
              onClick={() => onSelectCompetency(item.id)}
              style={{
                background: isSelected ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.015)',
                border: isSelected
                  ? '1px solid rgba(129, 140, 248, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '14px 16px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                {/* Left: Icon + Title + Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(item.id)}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                        {item.title}
                      </span>
                      {item.badgeType === 'remediation' ? (
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#f87171', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1px 6px', borderRadius: '4px' }}>
                          {item.badge}
                        </span>
                      ) : item.badgeType === 'active' ? (
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#c084fc', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '1px 6px', borderRadius: '4px' }}>
                          {item.badge}
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#94a3b8', background: 'rgba(255, 255, 255, 0.05)', padding: '1px 6px', borderRadius: '4px' }}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px' }}>
                      {item.evaluatedText}
                    </div>
                  </div>
                </div>

                {/* Right: Score + Delta + Action Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>
                      {item.score.toFixed(1)}<span style={{ fontSize: '0.68rem', color: '#64748b' }}>/100</span>
                    </div>
                    <div style={{ fontSize: '0.64rem', fontWeight: 700, color: item.deltaColor }}>
                      {item.deltaText}
                    </div>
                  </div>

                  {item.actionType === 'remediate' ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onLaunchDrill) onLaunchDrill(item.title);
                      }}
                      style={{
                        background: 'rgba(239, 68, 68, 0.15)',
                        color: '#f87171',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <AlertTriangle size={11} /> Remediate
                    </button>
                  ) : item.actionType === 'select' ? (
                    <div style={{ color: '#c084fc', padding: '4px' }}>
                      <ChevronRight size={16} />
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onLaunchDrill) onLaunchDrill(item.title);
                      }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Play size={10} fill="#cbd5e1" /> Drill
                    </button>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ width: '100%', height: '3px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '100px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${item.score}%`,
                    height: '100%',
                    background: item.barColor,
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
