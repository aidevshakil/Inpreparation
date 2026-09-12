import React from 'react';
import { ArrowRight, Code2, Server, Layout, Smartphone, Database, Cpu, Terminal, Shield, Layers, Zap, Eye, Binary, Cloud } from 'lucide-react';

interface TargetRoleCatalogProps {
  searchQuery?: string;
  selectedRoleDomain?: string;
  selectedLevel?: string;
  selectedDifficulty?: string;
  onSelectRole: (roleTitle: string) => void;
}

export const TargetRoleCatalog: React.FC<TargetRoleCatalogProps> = ({
  searchQuery = '',
  selectedRoleDomain = 'All',
  selectedLevel = 'All',
  onSelectRole
}) => {
  const roles = [
    // Row 1
    {
      id: 'python-dev',
      title: 'Python Developer',
      badge: 'Python',
      badgeType: 'purple',
      category: 'Backend',
      level: 'Intermediate',
      domain: 'Engineering',
      subCategory: 'High Demand',
      subColor: '#38bdf8',
      meta: 'Intermediate • 5 Calibrated Questions • 24 Practice Sets',
      desc: 'OOP principles, asyncio event loops, concurrency bottlenecks, and PostgreSQL data persistence.',
      icon: <Code2 size={13} color="#c084fc" />
    },
    {
      id: 'flutter-dev',
      title: 'Flutter Developer',
      badge: 'Flutter & Dart',
      badgeType: 'cyan',
      category: 'Mobile',
      level: 'Intermediate',
      domain: 'Engineering',
      subCategory: 'Cross-Platform',
      subColor: '#94a3b8',
      meta: 'Intermediate • 5 Calibrated Questions • 18 Practice Sets',
      desc: 'State management (Bloc/Riverpod), rendering pipeline, custom painters, and platform channels.',
      icon: <Smartphone size={13} color="#38bdf8" />
    },
    {
      id: 'react-dev',
      title: 'React Developer',
      badge: 'React',
      badgeType: 'purple',
      category: 'Frontend',
      level: 'Mid',
      domain: 'Engineering',
      subCategory: 'Tier-1 Priority',
      subColor: '#94a3b8',
      meta: 'Mid Level • 5 Calibrated Questions • 32 Practice Sets',
      desc: 'Hook internals, React Server Components (RSC), hydration pitfalls, and memory profiling.',
      icon: <Layout size={13} color="#c084fc" />
    },

    // Row 2
    {
      id: 'nodejs-dev',
      title: 'Node.js Developer',
      badge: 'Node.js',
      badgeType: 'purple',
      category: 'Backend',
      level: 'Intermediate',
      domain: 'Engineering',
      subCategory: 'Scalable I/O',
      subColor: '#94a3b8',
      meta: 'Intermediate • 5 Calibrated Questions • 20 Practice Sets',
      desc: 'Libuv event loop phase orchestration, stream pipelines, clustering, and thread pool scaling.',
      icon: <Server size={13} color="#c084fc" />
    },
    {
      id: 'django-dev',
      title: 'Django Developer',
      badge: 'Django',
      badgeType: 'slate',
      category: 'Backend',
      level: 'Intermediate',
      domain: 'Engineering',
      subCategory: 'Full Framework',
      subColor: '#94a3b8',
      meta: 'Intermediate • 5 Calibrated Questions • 14 Practice Sets',
      desc: 'Django ORM N+1 resolution, custom middleware chains, migration locks, and DRF serializers.',
      icon: <Database size={13} color="#cbd5e1" />
    },
    {
      id: 'fastapi-dev',
      title: 'FastAPI Developer',
      badge: 'FastAPI',
      badgeType: 'cyan',
      category: 'Backend',
      level: 'Advanced',
      domain: 'Engineering',
      subCategory: 'Async Microservices',
      subColor: '#38bdf8',
      meta: 'Advanced • 5 Calibrated Questions • 16 Practice Sets',
      desc: 'Pydantic v2 validation, ASGI server configurations, async database pooling, and OAuth2 security.',
      icon: <Zap size={13} color="#38bdf8" />
    },

    // Row 3
    {
      id: 'fullstack-dev',
      title: 'Full Stack Developer',
      badge: 'Full Stack',
      badgeType: 'purple',
      category: 'Engineering',
      level: 'Senior',
      domain: 'Engineering',
      subCategory: 'End-to-End',
      subColor: '#94a3b8',
      meta: 'Senior • 5 Calibrated Questions • 28 Practice Sets',
      desc: 'Full-cycle system telemetry, shared domain types across stacks, and micro-frontend federation.',
      icon: <Layers size={13} color="#c084fc" />
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      badge: 'SQL & BI',
      badgeType: 'cyan',
      category: 'Data & AI',
      level: 'Entry',
      domain: 'Data & AI',
      subCategory: 'Analytics',
      subColor: '#94a3b8',
      meta: 'Entry Level • 5 Calibrated Questions • 22 Practice Sets',
      desc: 'Complex aggregation queries, CTEs, cohort retention modeling, and executive KPI narratives.',
      icon: <Database size={13} color="#38bdf8" />
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      badge: 'Statistics & ML',
      badgeType: 'purple',
      category: 'Data & AI',
      level: 'Advanced',
      domain: 'Data & AI',
      subCategory: 'Modeling',
      subColor: '#94a3b8',
      meta: 'Advanced • 5 Calibrated Questions • 19 Practice Sets',
      desc: 'Hypothesis testing validation, feature collinearity, Bayesian inference, and uplift modeling.',
      icon: <Binary size={13} color="#c084fc" />
    },

    // Row 4
    {
      id: 'ml-engineer',
      title: 'Machine Learning Engineer',
      badge: 'PyTorch & LLMs',
      badgeType: 'purple',
      category: 'Data & AI',
      level: 'Senior',
      domain: 'Data & AI',
      subCategory: 'High Demand',
      subColor: '#38bdf8',
      meta: 'Senior • 5 Calibrated Questions • 26 Practice Sets',
      desc: 'Distributed training (DDP/FSDP), quantization (AWQ/GGUF), pipeline drift, and inference serving.',
      icon: <Cpu size={13} color="#c084fc" />
    },
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      badge: 'RAG & Agentic Systems',
      badgeType: 'cyan',
      category: 'Data & AI',
      level: 'Advanced',
      domain: 'Data & AI',
      subCategory: 'Cutting Edge',
      subColor: '#94a3b8',
      meta: 'Advanced • 5 Calibrated Questions • 21 Practice Sets',
      desc: 'Hybrid vector search, reranking algorithms, autonomous task loop validation, and hallucination bounds.',
      icon: <Zap size={13} color="#38bdf8" />
    },
    {
      id: 'cv-engineer',
      title: 'Computer Vision Engineer',
      badge: 'Vision AI',
      badgeType: 'purple',
      category: 'Data & AI',
      level: 'Advanced',
      domain: 'Data & AI',
      subCategory: 'Edge Models',
      subColor: '#94a3b8',
      meta: 'Advanced • 5 Calibrated Questions • 15 Practice Sets',
      desc: 'Object tracking across frame degradation, TensorRT conversion, spatial convolution optimization.',
      icon: <Eye size={13} color="#c084fc" />
    },

    // Row 5
    {
      id: 'nlp-engineer',
      title: 'NLP Engineer',
      badge: 'Transformers',
      badgeType: 'purple',
      category: 'Data & AI',
      level: 'Senior',
      domain: 'Data & AI',
      subCategory: 'NLP Core',
      subColor: '#94a3b8',
      meta: 'Senior • 5 Calibrated Questions • 17 Practice Sets',
      desc: 'Tokenization boundary strategies, self-attention complexity, sequence classification benchmarks.',
      icon: <Cpu size={13} color="#c084fc" />
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      badge: 'CI/CD & K8s',
      badgeType: 'cyan',
      category: 'Cloud & DevOps',
      level: 'Senior',
      domain: 'Engineering',
      subCategory: 'Platform',
      subColor: '#94a3b8',
      meta: 'Senior • 5 Calibrated Questions • 25 Practice Sets',
      desc: 'Kubernetes ingress routing, immutable infrastructure rollback policies, and zero-downtime releases.',
      icon: <Terminal size={13} color="#38bdf8" />
    },
    {
      id: 'cloud-engineer',
      title: 'Cloud Engineer',
      badge: 'AWS / GCP',
      badgeType: 'slate',
      category: 'Cloud & DevOps',
      level: 'Mid',
      domain: 'Engineering',
      subCategory: 'Cloud Native',
      subColor: '#94a3b8',
      meta: 'Mid Level • 5 Calibrated Questions • 18 Practice Sets',
      desc: 'VPC topology, IAM least-privilege boundary configurations, and multi-region disaster recovery.',
      icon: <Cloud size={13} color="#cbd5e1" />
    },

    // Row 6
    {
      id: 'qa-engineer',
      title: 'QA Engineer',
      badge: 'QA Automation',
      badgeType: 'purple',
      category: 'Engineering',
      level: 'Intermediate',
      domain: 'Engineering',
      subCategory: 'Testing',
      subColor: '#94a3b8',
      meta: 'Intermediate • 5 Calibrated Questions • 16 Practice Sets',
      desc: 'End-to-end synthetic testing, API mock contract suites, regression matrix orchestration.',
      icon: <Shield size={13} color="#c084fc" />
    },
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      badge: 'Core CS',
      badgeType: 'slate',
      category: 'Engineering',
      level: 'Generalist',
      domain: 'Engineering',
      subCategory: 'Comprehensive',
      subColor: '#94a3b8',
      meta: 'Generalist • 5 Calibrated Questions • 40 Practice Sets',
      desc: 'Foundational big-O analysis, sorting trade-offs, graph traversals, and unit-test validation.',
      icon: <Code2 size={13} color="#cbd5e1" />
    },
    {
      id: 'distributed-architect',
      title: 'Distributed Systems Architect',
      badge: 'Distributed Architecture',
      badgeType: 'cyan',
      category: 'Architecture',
      level: 'Staff',
      domain: 'Engineering',
      subCategory: 'Staff / Principal',
      subColor: '#94a3b8',
      meta: 'Staff Level • 5 Calibrated Questions • 12 Practice Sets',
      desc: 'CAP theorem realignments, Raft consensus protocols, split-brain resolution, and backpressure design.',
      icon: <Layers size={13} color="#38bdf8" />
    }
  ];

  // Filtering Logic
  const filteredRoles = roles.filter((role) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      role.title.toLowerCase().includes(q) ||
      role.badge.toLowerCase().includes(q) ||
      role.desc.toLowerCase().includes(q);

    const matchesDomain =
      selectedRoleDomain === 'All' ||
      role.domain === selectedRoleDomain ||
      role.category === selectedRoleDomain;

    const matchesLevel =
      selectedLevel === 'All' ||
      role.level.toLowerCase().includes(selectedLevel.toLowerCase());

    return matchesSearch && matchesDomain && matchesLevel;
  });

  return (
    <section id="all-roles-catalog" style={{ padding: '30px 0 70px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Row */}
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
              TARGET ROLES
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 34px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '6px'
            }}>
              Find Your Target Role
            </h2>
            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              margin: 0
            }}>
              Direct calibration matching active engineering requisitions across global tech hubs.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '12.5px',
            color: '#94a3b8',
            fontWeight: 500
          }}>
            Showing <strong style={{ color: '#ffffff' }}>{filteredRoles.length}</strong> Curated Engineering Roles
          </div>
        </div>

        {/* 18 Target Roles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              onClick={() => onSelectRole(role.title)}
              style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
              }}
            >
              <div>
                {/* Top Badges Row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: role.badgeType === 'cyan' ? 'rgba(56, 189, 248, 0.12)' : role.badgeType === 'purple' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: role.badgeType === 'cyan' ? '1px solid rgba(56, 189, 248, 0.3)' : role.badgeType === 'purple' ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '3px 9px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: role.badgeType === 'cyan' ? '#38bdf8' : role.badgeType === 'purple' ? '#c084fc' : '#cbd5e1'
                  }}>
                    {role.icon}
                    <span>{role.badge}</span>
                  </div>

                  <span style={{ fontSize: '11.5px', fontWeight: 600, color: role.subColor }}>
                    {role.subCategory}
                  </span>
                </div>

                {/* Role Title */}
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {role.title}
                </h3>

                {/* Meta Line */}
                <div style={{ fontSize: '11.5px', color: '#64748b', marginBottom: '14px' }}>
                  {role.meta}
                </div>

                {/* Description */}
                <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.55, marginBottom: '22px' }}>
                  {role.desc}
                </p>
              </div>

              {/* Action Link */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#38bdf8',
                fontSize: '12.5px',
                fontWeight: 600
              }}>
                <span>Explore Track</span>
                <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
