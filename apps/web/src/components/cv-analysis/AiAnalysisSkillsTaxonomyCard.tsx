import React from 'react';
import { Plus } from 'lucide-react';

export interface SkillCategory {
  title: string;
  skills: string[];
}

interface AiAnalysisSkillsTaxonomyCardProps {
  initialCategories?: SkillCategory[];
  onAddSkill?: () => void;
  onMarkInaccuracies?: () => void;
}

export const AiAnalysisSkillsTaxonomyCard: React.FC<AiAnalysisSkillsTaxonomyCardProps> = ({
  initialCategories,
  onAddSkill,
  onMarkInaccuracies,
}) => {
  const categories: SkillCategory[] = (initialCategories && initialCategories.length > 0)
    ? initialCategories
    : [
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
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
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
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Plus size={12} />
          <span>Add Skill</span>
        </button>
      </div>

      <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', margin: '0 0 18px 0' }}>
        Organized into technical pillars. All detected from resume text, not self-reported claims.
      </p>

      {/* 4 Skill Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '18px' }}>
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.8px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
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
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.76rem',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    boxShadow: 'var(--shadow-sm)'
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
          color: 'var(--text-muted)',
          paddingTop: '10px',
          borderTop: '1px solid var(--border-subtle)',
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
