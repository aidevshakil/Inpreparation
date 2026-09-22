import React from 'react';
import { Code, Layers, Database, Cloud } from 'lucide-react';

interface TechStackMatrixProps {
  onSelectTechnology: (tech: string) => void;
}

export const TechStackMatrix: React.FC<TechStackMatrixProps> = ({
  onSelectTechnology
}) => {
  const stackCategories = [
    {
      title: 'Languages',
      icon: <Code size={18} color="#818cf8" />,
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Dart', 'Go', 'Rust']
    },
    {
      title: 'Frameworks',
      icon: <Layers size={18} color="#c084fc" />,
      items: ['Flutter', 'React', 'Next.js', 'Django', 'FastAPI', 'Node.js', 'Spring Boot']
    },
    {
      title: 'Data & AI',
      icon: <Database size={18} color="#38bdf8" />,
      items: ['SQL', 'TensorFlow', 'PyTorch', 'OpenCV', 'LangChain', 'NLP']
    },
    {
      title: 'Cloud & Infra',
      icon: <Cloud size={18} color="#38bdf8" />,
      items: ['Docker', 'AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform']
    }
  ];

  return (
    <section style={{ padding: '40px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0284c7',
            marginBottom: '8px'
          }}>
            TECHNICAL STACKS
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 3.2vw, 34px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '6px'
          }}>
            Practice by Technology
          </h2>
          <p style={{
            fontSize: '14.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            margin: 0
          }}>
            Filter targeted interview sessions and algorithmic problems by tech stack.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                {cat.icon}
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((item, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => onSelectTechnology(item)}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      padding: '7px 12px',
                      fontSize: '12.5px',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.12)';
                      e.currentTarget.style.borderColor = 'var(--primary-color)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-surface)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
