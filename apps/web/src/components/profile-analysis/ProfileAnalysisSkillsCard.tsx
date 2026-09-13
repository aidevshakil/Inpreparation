import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ProfileAnalysisSkillsCardProps {
  initialFilter?: string;
}

export const ProfileAnalysisSkillsCard: React.FC<ProfileAnalysisSkillsCardProps> = ({
  initialFilter = 'all',
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'languages' | 'data' | 'architecture' | 'cloud'>(
    initialFilter as any
  );

  const skillGroups = [
    {
      category: 'languages',
      title: 'CORE LANGUAGES & RUNTIMES',
      skills: [
        { name: 'Go (Golang)', tag: 'Primary', isTarget: true },
        { name: 'Python', tag: 'Secondary', isTarget: false },
        { name: 'TypeScript / Node.js', tag: 'Familiar', isTarget: false },
      ],
    },
    {
      category: 'data',
      title: 'DATA INFRASTRUCTURE & STREAMING',
      skills: [
        { name: 'Apache Kafka', tag: 'Expertise', isTarget: true },
        { name: 'PostgreSQL', tag: 'Expertise', isTarget: true },
        { name: 'Redis', tag: 'Proficient', isTarget: false },
        { name: 'DynamoDB', tag: 'Proficient', isTarget: false },
        { name: 'RabbitMQ', tag: 'Proficient', isTarget: false },
      ],
    },
    {
      category: 'architecture',
      title: 'ARCHITECTURE & DISTRIBUTED SYSTEMS',
      skills: [
        { name: 'Distributed Consensus', tag: 'Raft/Paxos', isTarget: true },
        { name: 'Microservices Architecture', tag: 'High-Scale', isTarget: true },
        { name: 'Event-Driven Architecture', tag: 'Outbox / Sagas', isTarget: true },
        { name: 'CAP Trade-Off Defense', tag: 'Verified', isTarget: true },
      ],
    },
    {
      category: 'cloud',
      title: 'CLOUD & DEVOPS INFRASTRUCTURE',
      skills: [
        { name: 'Kubernetes & Docker', tag: 'CI/CD Deploy', isTarget: false },
        { name: 'AWS (EC2, S3, RDS)', tag: 'Production', isTarget: false },
        { name: 'Terraform', tag: 'IaC Infra', isTarget: false },
      ],
    },
  ];

  const filteredGroups = activeFilter === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeFilter);

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '6px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={18} style={{ color: '#38bdf8' }} />
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Skills Identified from Your Information
          </h3>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.7rem',
              fontWeight: activeFilter === 'all' ? 700 : 400,
              backgroundColor: activeFilter === 'all' ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
              color: activeFilter === 'all' ? '#ffffff' : '#94a3b8',
              border: activeFilter === 'all' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
              cursor: 'pointer',
            }}
          >
            All Skills
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === 'all' ? 'architecture' : 'all')}
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.7rem',
              backgroundColor: activeFilter !== 'all' ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
              color: activeFilter !== 'all' ? '#ffffff' : '#94a3b8',
              border: activeFilter !== 'all' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
              cursor: 'pointer',
            }}
          >
            {activeFilter !== 'all' ? `Category: ${activeFilter}` : 'Filter by Category'}
          </button>
        </div>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 18px 0', lineHeight: 1.45 }}>
        Categorized competencies verified through CV parsing and spoken video transcripts:
      </p>

      {/* Skill Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {filteredGroups.map((group) => (
          <div key={group.title}>
            <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '8px' }}>
              {group.title}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    backgroundColor: skill.isTarget ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: skill.isTarget ? '1px solid rgba(129, 140, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.74rem',
                    color: '#f8fafc',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{skill.name}</span>
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '4px',
                      backgroundColor: skill.isTarget ? 'rgba(168, 85, 247, 0.25)' : 'rgba(16, 185, 129, 0.15)',
                      color: skill.isTarget ? '#c084fc' : '#34d399',
                    }}
                  >
                    {skill.tag}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontSize: '0.68rem',
          color: '#64748b',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          <span>Green Tag = Verified in CV &amp; Spoken Prompts</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#a855f7' }} />
          <span>Purple Tag = Target Calibration Skill</span>
        </div>
      </div>
    </div>
  );
};
