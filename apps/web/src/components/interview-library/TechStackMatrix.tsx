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
            color: '#38bdf8',
            marginBottom: '8px'
          }}>
            TECHNICAL STACKS
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 3.2vw, 34px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '6px'
          }}>
            Practice by Technology
          </h2>
          <p style={{
            fontSize: '14.5px',
            color: '#94a3b8',
            margin: 0
          }}>
            Filter interviews targeting your explicit technical competencies.
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
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                {cat.icon}
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((item, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => onSelectTechnology(item)}
                    style={{
                      background: '#121726',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '7px 12px',
                      fontSize: '12.5px',
                      color: '#cbd5e1',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#121726';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#cbd5e1';
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
