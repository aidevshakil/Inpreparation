import React from 'react';
import { ArrowRight, Code, Server, Layout, Smartphone, TrendingUp, Cpu } from 'lucide-react';

interface PopularInterviewPathsProps {
  onSelectTrack: (trackName: string) => void;
}

export const PopularInterviewPaths: React.FC<PopularInterviewPathsProps> = ({
  onSelectTrack
}) => {
  const paths = [
    {
      title: 'Software Engineering',
      desc: 'Practice core software engineering principles, algorithm trade-offs, architecture, and technical decision-making under time constraints.',
      tags: ['Coding', 'Problem Solving', 'System Design'],
      sets: '40 Practice Sets',
      icon: <Code size={20} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      iconBorder: 'rgba(168, 85, 247, 0.3)',
      linkColor: '#a5b4fc'
    },
    {
      title: 'Backend Development',
      desc: 'Master API design, ACID transactions, data consistency, caching strategies, rate limiting, and fault-tolerant microservices.',
      tags: ['REST & gRPC', 'PostgreSQL', 'Architecture'],
      sets: '54 Practice Sets',
      icon: <Server size={20} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      iconBorder: 'rgba(168, 85, 247, 0.3)',
      linkColor: '#a5b4fc'
    },
    {
      title: 'Frontend Development',
      desc: 'Demonstrate mastery over DOM rendering lifecycles, CSS architecture, state machines, network performance, and accessibility patterns.',
      tags: ['React & Next.js', 'Performance', 'Web APIs'],
      sets: '38 Practice Sets',
      icon: <Layout size={20} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      iconBorder: 'rgba(56, 189, 248, 0.3)',
      linkColor: '#38bdf8'
    },
    {
      title: 'Mobile Development',
      desc: 'Prepare for native and multi-platform mobile engineering: memory allocation, offline-first persistence, thread management, and UI rendering.',
      tags: ['Flutter', 'iOS / Swift', 'Android / Kotlin'],
      sets: '28 Practice Sets',
      icon: <Smartphone size={20} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      iconBorder: 'rgba(168, 85, 247, 0.3)',
      linkColor: '#a5b4fc'
    },
    {
      title: 'Data & Analytics',
      desc: 'Tackle analytical case studies, warehouse partitioning, complex window functions, A/B test methodologies, and stakeholder narrative delivery.',
      tags: ['Advanced SQL', 'Python / Pandas', 'Experimentation'],
      sets: '32 Practice Sets',
      icon: <TrendingUp size={20} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      iconBorder: 'rgba(168, 85, 247, 0.3)',
      linkColor: '#a5b4fc'
    },
    {
      title: 'AI & Machine Learning',
      desc: 'Master model fine-tuning, retrieval-augmented generation (RAG), vector embeddings, evaluation metrics, and GPU production deployment.',
      tags: ['PyTorch & Transformers', 'LLMOps', 'Vector Search'],
      sets: '44 Practice Sets',
      icon: <Cpu size={20} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      iconBorder: 'rgba(56, 189, 248, 0.3)',
      linkColor: '#38bdf8'
    }
  ];

  return (
    <section id="featured-paths-section" style={{ padding: '40px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#38bdf8',
              marginBottom: '8px'
            }}>
              FEATURED PATHS
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 34px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '6px'
            }}>
              Popular Interview Paths
            </h2>
            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              margin: 0
            }}>
              Start with the foundational career disciplines candidates practice most often.
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#94a3b8'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8'
            }} />
            <span>Calibrated against 2026 FAANG & Tier-1 hiring rubrics</span>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {paths.map((card, idx) => (
            <div
              key={idx}
              onClick={() => onSelectTrack(card.title)}
              style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '28px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
              }}
            >
              <div>
                {/* Icon Box */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: card.iconBg,
                  border: `1px solid ${card.iconBorder}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '22px'
                }}>
                  {card.desc}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '26px'
                }}>
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        padding: '3px 10px',
                        fontSize: '11.5px',
                        color: '#cbd5e1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: card.linkColor,
                fontSize: '13px',
                fontWeight: 600
              }}>
                <span>Explore {card.sets}</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
