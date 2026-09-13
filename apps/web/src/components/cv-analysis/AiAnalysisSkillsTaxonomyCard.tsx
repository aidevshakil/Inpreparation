import React from 'react';
import { Plus } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface AiAnalysisSkillsTaxonomyCardProps {
  onAddSkill?: () => void;
  onMarkInaccuracies?: () => void;
}

export const AiAnalysisSkillsTaxonomyCard: React.FC<AiAnalysisSkillsTaxonomyCardProps> = ({
  onAddSkill,
  onMarkInaccuracies,
}) => {
  const categories: SkillCategory[] = [
    {
      title: 'LANGUAGES & SCRIPTING',
      skills: ['Python 3.12', 'Go (Golang)', 'Dart', 'SQL (PostgreSQL dialects)', 'Bash / Shell'],
    },
    {
      title: 'FRAMEWORKS & PROTOCOLS',
      skills: ['FastAPI (Asyncio)', 'gRPC & Protocol', 'RESTful Microservices', 'Flutter SDK', 'Celery / Distributed Tasks'],
    },
    {
      title: 'DATA STORAGE & STREAMING',
      skills: ['Apache Kafka', 'PostgreSQL (Partitioning & Policies)', 'Redis Caching & Pub/Sub', 'Elasticsearch'],
    },
    {
      title: 'INFRASTRUCTURE & DEVOPS',
      skills: ['Docker Containers', 'Kubernetes (EKS/Basics)', 'AWS (ECS, S3, RDS)', 'Prometheus & Grafana'],
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Skills Detected (Taxonomy Matrix)
          </h3>
        </div>

        <button
          onClick={onAddSkill}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '5px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            color: '#cbd5e1',
            fontSize: '0.74rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Plus size={12} />
          <span>Add Skill</span>
        </button>
      </div>

      <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 18px 0' }}>
        Organized into technical pillars. All detected from resume text, not self-reported claims.
      </p>

      {/* 4 Skill Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '18px' }}>
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.8px', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
              {cat.title}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 11px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    fontSize: '0.76rem',
                    color: '#e2e8f0',
                    fontWeight: 500,
                  }}
                >
                  <span>{skill}</span>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      boxShadow: '0 0 5px #10b981',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.71rem',
          color: '#64748b',
          paddingTop: '10px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span>Green indicators represent skills with deep contextual evidence in experience bullet points.</span>
        <button
          onClick={onMarkInaccuracies}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            fontSize: '0.71rem',
          }}
        >
          Mark Inaccuracies
        </button>
      </div>
    </div>
  );
};
