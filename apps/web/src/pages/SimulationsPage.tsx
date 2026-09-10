import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Search,
  Code,
  Server,
  Layout,
  Smartphone,
  Terminal,
  Cpu,
  Database,
  Layers,
  Award,
  ChevronDown,
  CheckCircle2,
  Zap,
  Mic,
  Eye,
  FileText
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';

interface SimulationsPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAi?: () => void;
}

export const SimulationsPage: React.FC<SimulationsPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('All');
  const [selectedCompanyFilter, setSelectedCompanyFilter] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 1. Featured Paths (6 Top Cards)
  const popularPaths = [
    {
      id: 'swe',
      title: 'Software Engineering',
      desc: 'Algorithms, data structures, code quality, clean architecture, and modular scalability.',
      tags: ['Algorithms', 'System Patterns', 'Clean Code'],
      icon: <Code size={22} color="#818cf8" />,
      questions: '150+ Questions'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      desc: 'High-throughput microservices, DB indexing, cache strategies, and REST/gRPC API contracts.',
      tags: ['PostgreSQL', 'Redis', 'Kafka', 'Microservices'],
      icon: <Server size={22} color="#06b6d4" />,
      questions: '180+ Questions'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      desc: 'React 19, Next.js, Core Web Vitals, state management, client performance, and CSS mastery.',
      tags: ['React 19', 'Next.js', 'State Flow', 'Web Vitals'],
      icon: <Layout size={22} color="#a855f7" />,
      questions: '140+ Questions'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      desc: 'Cross-platform Flutter, React Native, iOS Swift, and Android Kotlin native performance.',
      tags: ['Flutter', 'Dart', 'SwiftUI', 'Kotlin'],
      icon: <Smartphone size={22} color="#f59e0b" />,
      questions: '110+ Questions'
    },
    {
      id: 'devops',
      title: 'DevOps & Infrastructure',
      desc: 'Kubernetes orchestration, Terraform IaC, CI/CD pipelines, AWS IAM, and zero-downtime deployments.',
      tags: ['Kubernetes', 'Terraform', 'AWS', 'Docker'],
      icon: <Terminal size={22} color="#38bdf8" />,
      questions: '125+ Questions'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      desc: 'Large Language Models (LLMs), RAG pipelines, PyTorch architecture, fine-tuning, and model latency.',
      tags: ['PyTorch', 'Vector DBs', 'LLMs', 'Evals'],
      icon: <Cpu size={22} color="#ec4899" />,
      questions: '130+ Questions'
    }
  ];

  // 2. Comprehensive 18 Role Cards Catalog
  const allRoles = [
    {
      id: 'python-dev',
      title: 'Python Developer',
      category: 'Backend',
      level: 'Senior • L5 Tier',
      company: 'Enterprise SaaS',
      icon: <Server size={20} color="#818cf8" />,
      questions: '120 Questions',
      tags: ['Python 3.12', 'FastAPI', 'Asyncio', 'Django', 'PyTest']
    },
    {
      id: 'flutter-dev',
      title: 'Flutter Developer',
      category: 'Mobile',
      level: 'Mid/Senior • L4/L5',
      company: 'Fast-Growing Startup',
      icon: <Smartphone size={20} color="#06b6d4" />,
      questions: '95 Questions',
      tags: ['Dart', 'BLoC', 'Riverpod', 'Clean Architecture', 'Offline Sync']
    },
    {
      id: 'react-dev',
      title: 'React Developer',
      category: 'Frontend',
      level: 'Senior • L5 Tier',
      company: 'FAANG / Top Tech',
      icon: <Layout size={20} color="#a855f7" />,
      questions: '140 Questions',
      tags: ['React 19', 'Next.js', 'Server Components', 'Zustand', 'Performance']
    },
    {
      id: 'nodejs-dev',
      title: 'Node.js Developer',
      category: 'Backend',
      level: 'Senior • L5 Tier',
      company: 'Enterprise SaaS',
      icon: <Server size={20} color="#10b981" />,
      questions: '130 Questions',
      tags: ['Express', 'NestJS', 'Event Loop', 'Redis', 'WebSockets']
    },
    {
      id: 'django-dev',
      title: 'Django Developer',
      category: 'Backend',
      level: 'Mid-Level • L4',
      company: 'Enterprise SaaS',
      icon: <Server size={20} color="#f59e0b" />,
      questions: '85 Questions',
      tags: ['ORM Optimization', 'Celery', 'PostgreSQL', 'DRF', 'Caching']
    },
    {
      id: 'swift-dev',
      title: 'Swift / iOS Developer',
      category: 'Mobile',
      level: 'Senior • L5 Tier',
      company: 'FAANG / Top Tech',
      icon: <Smartphone size={20} color="#38bdf8" />,
      questions: '105 Questions',
      tags: ['SwiftUI', 'Combine', 'Memory Leaks', 'UIKit', 'Concurrency']
    },
    {
      id: 'fullstack-dev',
      title: 'Full Stack Developer',
      category: 'Engineering',
      level: 'Staff • L6 Tier',
      company: 'FAANG / Top Tech',
      icon: <Code size={20} color="#ec4899" />,
      questions: '160 Questions',
      tags: ['React + Node/Go', 'Full Lifecycle', 'Docker', 'DB Sharding']
    },
    {
      id: 'devops-eng',
      title: 'DevOps & SRE Engineer',
      category: 'Cloud & DevOps',
      level: 'Senior • L5 Tier',
      company: 'FAANG / Top Tech',
      icon: <Terminal size={20} color="#67e8f9" />,
      questions: '125 Questions',
      tags: ['Kubernetes', 'Terraform', 'AWS', 'Prometheus', 'CI/CD']
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      category: 'AI & Data',
      level: 'Senior • L5 Tier',
      company: 'Enterprise SaaS',
      icon: <Database size={20} color="#fbbf24" />,
      questions: '115 Questions',
      tags: ['Statistical Modeling', 'Pandas', 'Scikit-Learn', 'SQL', 'A/B Testing']
    },
    {
      id: 'ml-engineer',
      title: 'Machine Learning Engineer',
      category: 'AI & Data',
      level: 'Lead • Staff L6',
      company: 'FAANG / Top Tech',
      icon: <Cpu size={20} color="#c084fc" />,
      questions: '135 Questions',
      tags: ['PyTorch', 'Transformers', 'Triton', 'MLOps', 'Vector DBs']
    },
    {
      id: 'ai-engineer',
      title: 'AI / LLM Engineer',
      category: 'AI & Data',
      level: 'Senior • L5 Tier',
      company: 'Fast-Growing Startup',
      icon: <Sparkles size={20} color="#818cf8" />,
      questions: '145 Questions',
      tags: ['LLMs', 'LangChain', 'RAG Pipelines', 'Fine-Tuning', 'Evals']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Engineer',
      category: 'AI & Data',
      level: 'Senior • L5 Tier',
      company: 'Enterprise SaaS',
      icon: <Eye size={20} color="#06b6d4" />,
      questions: '90 Questions',
      tags: ['OpenCV', 'YOLO', 'CNNs', 'Video Stream Processing', 'PyTorch']
    },
    {
      id: 'nlp-engineer',
      title: 'NLP Engineer',
      category: 'AI & Data',
      level: 'Senior • L5 Tier',
      company: 'FAANG / Top Tech',
      icon: <Mic size={20} color="#a855f7" />,
      questions: '100 Questions',
      tags: ['BERT', 'Tokenizers', 'Embeddings', 'NER', 'Vector Indexing']
    },
    {
      id: 'big-data',
      title: 'Big Data Engineer',
      category: 'Cloud & DevOps',
      level: 'Senior • L5 Tier',
      company: 'Enterprise SaaS',
      icon: <Database size={20} color="#f59e0b" />,
      questions: '110 Questions',
      tags: ['Apache Spark', 'Kafka', 'Snowflake', 'Lakehouse', 'Airflow']
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      category: 'Architecture',
      level: 'Principal • L7 Tier',
      company: 'FAANG / Top Tech',
      icon: <Server size={20} color="#10b981" />,
      questions: '150 Questions',
      tags: ['Multi-Cloud', 'AWS Well-Architected', 'Serverless', 'Cost Ops']
    },
    {
      id: 'qa-engineer',
      title: 'QA Automation Engineer',
      category: 'Engineering',
      level: 'Mid/Senior • L4/L5',
      company: 'Enterprise SaaS',
      icon: <CheckCircle2 size={20} color="#38bdf8" />,
      questions: '85 Questions',
      tags: ['Playwright', 'Cypress', 'Selenium', 'Load Testing', 'CI Matrix']
    },
    {
      id: 'security-engineer',
      title: 'Security & AppSec Engineer',
      category: 'Architecture',
      level: 'Senior • L5 Tier',
      company: 'FAANG / Top Tech',
      icon: <Terminal size={20} color="#ec4899" />,
      questions: '105 Questions',
      tags: ['Threat Modeling', 'OWASP Top 10', 'Pen Testing', 'Zero Trust']
    },
    {
      id: 'distributed-architect',
      title: 'Distributed Systems Architect',
      category: 'Architecture',
      level: 'Principal • L7 Tier',
      company: 'FAANG / Top Tech',
      icon: <Layers size={20} color="#c084fc" />,
      questions: '175 Questions',
      tags: ['CAP Theorem', 'Raft/Paxos', 'Partitioning', 'Event Sourcing']
    }
  ];

  // Filtering Logic
  const filteredRoles = allRoles.filter((role) => {
    const matchesSearch =
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || role.category === selectedCategory;

    const matchesLevel =
      selectedLevelFilter === 'All' || role.level.includes(selectedLevelFilter);

    const matchesCompany =
      selectedCompanyFilter === 'All' || role.company.includes(selectedCompanyFilter);

    return matchesSearch && matchesCategory && matchesLevel && matchesCompany;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevelFilter('All');
    setSelectedCompanyFilter('All');
  };

  const handleStartPractice = (roleName?: string) => {
    if (roleName) setSelectedRole(roleName);
    setIsSimulatorOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#07090e', color: '#f8fafc' }}>
      {/* Navbar */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="simulations"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'pricing' && onNavigateToPricing) onNavigateToPricing();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            HERO SECTION: Practice the Interview That Matches Your Career
        ======================================================== */}
        <section style={{ padding: '60px 0 50px', position: 'relative', overflow: 'hidden' }}>
          <div className="bg-ambient-glow" style={{ top: '-15%', left: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)' }} />
          <div className="bg-ambient-glow" style={{ top: '30%', right: '15%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-purple">
                <Sparkles size={14} color="#c084fc" />
                500+ ROLE TRACKS & INTERVIEW SIMULATIONS
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '900px',
              margin: '0 auto 20px'
            }}>
              Practice the Interview That{' '}
              <span className="gradient-highlight-text" style={{ textShadow: '0 0 40px rgba(124, 58, 237, 0.4)' }}>
                Matches Your Career
              </span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 36px'
            }}>
              Explore 500+ interview simulations across modern engineering disciplines, data & AI tracks,
              product leadership, and enterprise distributed systems architectures.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '36px'
            }}>
              <button
                onClick={() => handleStartPractice()}
                className="btn-primary"
                style={{ fontSize: '16px', padding: '15px 34px' }}
              >
                <span>Explore Simulations</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('calibrate-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
                style={{ fontSize: '15px', padding: '15px 28px' }}
              >
                <span>Get Personalized Recommendations</span>
              </button>
            </div>

            {/* Badges Row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '13px',
              fontWeight: 500
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#818cf8" /> 500+ Curated Role Packs
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={16} color="#06b6d4" /> Real-World FAANG Rubrics
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={16} color="#10b981" /> Adaptive Contextual Probing
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="#f59e0b" /> Multi-modal Diagnostic Scorecards
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            GLOBAL SEARCH & FILTER CONTROLS BAR
        ======================================================== */}
        <section style={{ padding: '20px 0 40px', position: 'relative', zIndex: 10 }}>
          <div className="container">
            <div style={{
              background: '#0d121c',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
            }}>
              {/* Search Input */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '12px 18px',
                marginBottom: '18px'
              }}>
                <Search size={20} color="#818cf8" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search roles, technologies, architectures (e.g. React, Distributed Systems, Python, PyTorch, Kafka)..."
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '15px',
                    width: '100%',
                    fontFamily: 'inherit'
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '13px' }}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Filter Dropdowns Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                alignItems: 'center'
              }}>
                {/* Category Dropdown */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#131828',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  >
                    <option value="All">All Categories</option>
                    <option value="Frontend">Frontend Development</option>
                    <option value="Backend">Backend Development</option>
                    <option value="AI & Data">AI, Machine Learning & Data</option>
                    <option value="Mobile">Mobile (iOS / Flutter)</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Architecture">Distributed Architecture</option>
                  </select>
                </div>

                {/* Level Dropdown */}
                <div>
                  <select
                    value={selectedLevelFilter}
                    onChange={(e) => setSelectedLevelFilter(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#131828',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  >
                    <option value="All">All Seniority Levels</option>
                    <option value="Mid">Mid-Level (L4)</option>
                    <option value="Senior">Senior Tier (L5)</option>
                    <option value="Staff">Staff / Principal (L6+)</option>
                  </select>
                </div>

                {/* Company Type Dropdown */}
                <div>
                  <select
                    value={selectedCompanyFilter}
                    onChange={(e) => setSelectedCompanyFilter(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#131828',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  >
                    <option value="All">All Company Types</option>
                    <option value="FAANG">FAANG & Tier-1 Tech</option>
                    <option value="Enterprise SaaS">Enterprise SaaS</option>
                    <option value="Startup">Series A/B Startup</option>
                  </select>
                </div>

                {/* Results & Clear button */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#67e8f9', fontWeight: 700 }}>
                    Showing {filteredRoles.length} Roles
                  </span>
                  {(searchQuery || selectedCategory !== 'All' || selectedLevelFilter !== 'All' || selectedCompanyFilter !== 'All') && (
                    <button
                      onClick={clearFilters}
                      style={{
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: '#fca5a5',
                        borderRadius: '6px',
                        padding: '6px 12px',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            POPULAR INTERVIEW PATHS (6 FEATURED CARDS)
        ======================================================== */}
        <section style={{ padding: '50px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                FEATURED DOMAINS
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                Popular Interview Paths
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8' }}>
                Our most frequently practiced tracks with standardized hiring benchmarks.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {popularPaths.map((path) => (
                <div
                  key={path.id}
                  onClick={() => handleStartPractice(path.title)}
                  className="glass-card"
                  style={{
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(180deg, #111728 0%, #0c101c 100%)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {path.icon}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#67e8f9', background: 'rgba(6, 182, 212, 0.1)', padding: '3px 8px', borderRadius: '6px' }}>
                        {path.questions}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                      {path.title}
                    </h3>

                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                      {path.desc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {path.tags.map((tag, tIdx) => (
                        <span key={tIdx} style={{ background: 'rgba(255, 255, 255, 0.04)', fontSize: '11px', color: '#cbd5e1', padding: '3px 8px', borderRadius: '4px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      color: '#818cf8',
                      fontWeight: 700
                    }}>
                      <span>Launch Practice Track</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            FIND YOUR TARGET ROLE (18+ ROLES CATALOG GRID)
        ======================================================== */}
        <section style={{ padding: '60px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121f 100%)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
              <div>
                <span className="badge-pill badge-purple" style={{ marginBottom: '8px' }}>
                  ROLE CATALOG
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginTop: '6px' }}>
                  Find Your Target Role ({filteredRoles.length} Tracks)
                </h2>
              </div>
              <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                Calibrated on real-world hiring assessments & FAANG rubrics
              </span>
            </div>

            {/* 18 Roles Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {filteredRoles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => handleStartPractice(role.title)}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#0e131f',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {role.icon}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.12)', padding: '3px 8px', borderRadius: '6px' }}>
                        {role.questions}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>
                      {role.title}
                    </h3>

                    <div style={{ fontSize: '12px', color: '#67e8f9', fontWeight: 600, marginBottom: '14px' }}>
                      {role.level} • <span style={{ color: '#94a3b8' }}>{role.company}</span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                      {role.tags.map((tag, tIdx) => (
                        <span key={tIdx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '11px', color: '#cbd5e1', padding: '2px 6px', borderRadius: '4px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#818cf8',
                    fontWeight: 700
                  }}>
                    <span>Explore Track</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            PRACTICE BY TECHNOLOGY (TECH MATRICES)
        ======================================================== */}
        <section style={{ padding: '60px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                TECHNOLOGY DRILLS
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                Practice by Technology
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8' }}>
                Drill down into language internals, framework lifecycles, database performance, and distributed systems.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}>
              {[
                { title: 'Languages', items: ['Python', 'TypeScript', 'Go', 'Java', 'Rust', 'Swift', 'Kotlin', 'C++'] },
                { title: 'Web & Frameworks', items: ['React 19', 'Next.js', 'FastAPI', 'Node.js', 'Django', 'NestJS', 'Spring Boot'] },
                { title: 'Cloud & DB', items: ['AWS', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'MongoDB'] },
                { title: 'AI & Data', items: ['PyTorch', 'Vector DBs', 'LangChain', 'HuggingFace', 'Spark', 'Snowflake'] }
              ].map((techGroup, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '24px', background: '#0e131f' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', marginBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '8px' }}>
                    {techGroup.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {techGroup.items.map((it, iIdx) => (
                      <span
                        key={iIdx}
                        onClick={() => {
                          setSearchQuery(it);
                          window.scrollTo({ top: 350, behavior: 'smooth' });
                        }}
                        style={{
                          background: 'rgba(99, 102, 241, 0.1)',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                          color: '#a5b4fc',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            NOT SURE WHERE TO START? (CALIBRATE SECTION)
        ======================================================== */}
        <section id="calibrate-section" style={{ padding: '60px 0', background: 'linear-gradient(180deg, #07090e 0%, #0e1424 100%)' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #12192b 0%, #0b0f19 100%)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              borderRadius: '28px',
              padding: '40px',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center'
              }}>
                <div>
                  <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                    AI TRACK CALIBRATOR
                  </span>
                  <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginBottom: '12px' }}>
                    Not Sure Where to Start? Let AI Calibrate Your Track.
                  </h2>
                  <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                    Answer 3 quick questions about your current experience level and target company tier to get custom recommended question sets.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>Custom question strictness from L4 to L7 Principal</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>FAANG, FinTech & Enterprise rubrics matched instantly</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartPractice('Senior Frontend Engineer')}
                    className="btn-primary"
                    style={{ padding: '14px 28px' }}
                  >
                    <span>Calibrate & Start Simulation</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Match Preview Card */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  borderRadius: '18px',
                  padding: '24px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '3px 8px', borderRadius: '4px' }}>
                      ✦ 96% MATCH CONFIDENCE
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>Auto-Calibrated</span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>
                    Senior Fullstack Systems Lead
                  </h3>
                  <div style={{ fontSize: '12px', color: '#67e8f9', marginBottom: '16px' }}>
                    Recommended: 4 Rounds • React, Next.js, Distributed DBs, STAR
                  </div>

                  <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', marginBottom: '16px' }}>
                    <div style={{ width: '96%', height: '100%', background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)', borderRadius: '3px' }} />
                  </div>

                  <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5 }}>
                    "Focuses on high-concurrency state rendering, WebSocket connection management, and STAR method crisis resolution."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FAQ ACCORDION SECTION
        ======================================================== */}
        <section style={{ padding: '60px 0', position: 'relative' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc' }}>
                Questions About Simulation Tracks
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  q: 'How are the 500+ interview questions calibrated?',
                  a: 'Our questions are curated by reviewing over 3,000+ real interview debriefs and rubrics from top tech firms like Google, Meta, Amazon, and Stripe across multiple seniority tiers.'
                },
                {
                  q: 'Can I upload my own custom job description?',
                  a: 'Yes! In our practice studio, you can paste any custom job description to have the AI dynamically generate role-specific questions tailored to that exact listing.'
                },
                {
                  q: 'Do the simulations support live coding and whiteboard design?',
                  a: 'Yes, our interactive simulation studio includes integrated architecture canvases and code evaluation sandboxes for real-time technical problem solving.'
                },
                {
                  q: 'How realistic is the AI interviewer audio and follow-up probing?',
                  a: 'We use ultra-low latency (<300ms) bidirectional conversational speech models that listen, pause naturally, and ask contextual follow-up questions when answers are incomplete or lack trade-off depth.'
                }
              ].map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="glass-card" style={{ padding: '0', background: '#0e131f' }}>
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '18px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'transparent',
                        border: 'none',
                        color: '#f8fafc',
                        fontSize: '15px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#818cf8' }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 18px', fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '12px' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            BOTTOM CTA BANNER
        ======================================================== */}
        <section style={{ padding: '60px 0 100px', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #082f49 100%)',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              borderRadius: '32px',
              padding: '60px 32px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(124, 58, 237, 0.3)'
            }}>
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
                <span className="badge-pill badge-purple" style={{ marginBottom: '16px' }}>
                  <Sparkles size={13} color="#c084fc" />
                  START YOUR PREPARATION JOURNEY
                </span>

                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}>
                  Find Your Next Interview Challenge
                </h2>

                <p style={{
                  fontSize: '17px',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  marginBottom: '36px'
                }}>
                  Join thousands of candidates who transformed their interview readiness with InPrep AI.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                  <button
                    onClick={() => handleStartPractice()}
                    className="btn-primary"
                    style={{ fontSize: '16px', padding: '15px 34px' }}
                  >
                    <span>Start Free Practice Now</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={onNavigateToHome}
                    className="btn-secondary"
                    style={{ fontSize: '15px', padding: '15px 28px' }}
                  >
                    <span>Explore Pricing</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Live Simulation Modal */}
      <LiveSimulationModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        initialRole={selectedRole}
      />

      {/* Demo Video Modal */}
      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onStartPractice={() => handleStartPractice()}
      />
    </div>
  );
};
