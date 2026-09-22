import React from 'react';
import {
  Globe,
  BarChart3,
  Layers,
  Cloud,
  Layout,
  Smartphone,
  Users
} from 'lucide-react';

interface DomainTrack {
  id: string;
  title: string;
  count: string;
  skills: string;
  iconType: 'brackets' | 'globe' | 'chart' | 'layers' | 'cloud' | 'layout' | 'mobile' | 'users';
  accentColor: string;
}

const DOMAIN_TRACKS: DomainTrack[] = [
  {
    id: 'swe',
    title: 'Software Engineering',
    count: '24 tracks',
    skills: 'Python, Go, Java, C++, Rust',
    iconType: 'brackets',
    accentColor: '#818cf8'
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Engineering',
    count: '18 tracks',
    skills: 'LLMs, PyTorch, Fine-Tuning, RAG',
    iconType: 'globe',
    accentColor: '#a855f7'
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    count: '15 tracks',
    skills: 'SQL, Spark, A/B Testing, Modeling',
    iconType: 'chart',
    accentColor: '#38bdf8'
  },
  {
    id: 'system-design',
    title: 'System Design & Arch',
    count: '19 tracks',
    skills: 'Scalability, Caching, CAP, Consensus',
    iconType: 'layers',
    accentColor: '#34d399'
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    count: '12 tracks',
    skills: 'K8s, Terraform, AWS, CI/CD',
    iconType: 'cloud',
    accentColor: '#60a5fa'
  },
  {
    id: 'frontend',
    title: 'Frontend & Web',
    count: '14 tracks',
    skills: 'React, Next.js, Vue, Web Performance',
    iconType: 'layout',
    accentColor: '#c084fc'
  },
  {
    id: 'mobile',
    title: 'Mobile Engineering',
    count: '10 tracks',
    skills: 'Flutter, React Native, Swift, Kotlin',
    iconType: 'mobile',
    accentColor: '#2dd4bf'
  },
  {
    id: 'leadership',
    title: 'Product & Leadership',
    count: '16 tracks',
    skills: 'EM, Technical PM, Staff Behavioral',
    iconType: 'users',
    accentColor: '#4ade80'
  }
];

interface DomainCoverageSectionProps {
  onSelectTrack?: (trackName: string) => void;
}

export const DomainCoverageSection: React.FC<DomainCoverageSectionProps> = ({ onSelectTrack }) => {
  const renderIcon = (type: DomainTrack['iconType'], color: string) => {
    switch (type) {
      case 'brackets':
        return (
          <span style={{
            fontFamily: 'monospace',
            fontWeight: 800,
            fontSize: '18px',
            color: color,
            letterSpacing: '-1px',
            lineHeight: 1
          }}>
            {'{ }'}
          </span>
        );
      case 'globe':
        return <Globe size={20} color={color} strokeWidth={2} />;
      case 'chart':
        return <BarChart3 size={20} color={color} strokeWidth={2} />;
      case 'layers':
        return <Layers size={20} color={color} strokeWidth={2} />;
      case 'cloud':
        return <Cloud size={20} color={color} strokeWidth={2} />;
      case 'layout':
        return <Layout size={20} color={color} strokeWidth={2} />;
      case 'mobile':
        return <Smartphone size={20} color={color} strokeWidth={2} />;
      case 'users':
        return <Users size={20} color={color} strokeWidth={2} />;
      default:
        return null;
    }
  };

  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            display: 'block',
            marginBottom: '12px'
          }}>
            DOMAIN COVERAGE
          </span>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.025em',
            lineHeight: 1.2
          }}>
            Explore 100+ Interview Simulation Tracks
          </h2>
        </div>

        {/* 4x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {DOMAIN_TRACKS.map((track) => (
            <div
              key={track.id}
              onClick={() => onSelectTrack?.(track.title)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '24px 22px',
                backdropFilter: 'blur(12px)',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Card Top Row: Icon + Track Count */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                  {renderIcon(track.iconType, track.accentColor)}
                </div>

                <span style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}>
                  {track.count}
                </span>
              </div>

              {/* Title & Skills */}
              <div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em'
                }}>
                  {track.title}
                </h3>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.5
                }}>
                  {track.skills}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
