import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { Search, X, SlidersHorizontal, Lock, Check, ChevronDown, Bell, HelpCircle, CheckCircle2, Bookmark, Sparkles, LayoutGrid, List, Compass } from 'lucide-react';

interface SearchFilterPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToProfileAnalysis?: () => void;
  onNavigateToRecommendedInterviews?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToSimulationDetails?: () => void;
  onNavigateToAi?: () => void;
}

export const SearchFilterPage: React.FC<SearchFilterPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToProfileAnalysis,
  onNavigateToRecommendedInterviews,
  onNavigateToCategories,
  onNavigateToSimulations,
  onNavigateToSimulationDetails,
  onNavigateToAi,
}) => {
  const [activeNav, setActiveNav] = useState<NavItemKey>('search');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('Python');
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [activeSimulationRole, setActiveSimulationRole] = useState('');

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'assessment' && onNavigateToProfileAnalysis) onNavigateToProfileAnalysis();
    else if (key === 'recommended' && onNavigateToRecommendedInterviews) onNavigateToRecommendedInterviews();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
  };

  const handleStartPractice = (role: string) => {
    if (onNavigateToSimulationDetails) {
      onNavigateToSimulationDetails();
    } else {
      setActiveSimulationRole(role);
      setSimulationModalOpen(true);
    }
  };

  const roles = [
    { label: 'Backend Developer', count: 18, checked: true },
    { label: 'Python Developer', count: 14, checked: false },
    { label: 'Full Stack Developer', count: 12, checked: false },
    { label: 'AI / ML Engineer', count: 9, checked: false },
    { label: 'Data Engineer', count: 11, checked: false },
    { label: 'Distributed Systems Architect', count: 8, checked: false },
    { label: 'DevOps & Cloud Engineer', count: 7, checked: false },
    { label: 'Mobile / Flutter Developer', count: 4, checked: false },
  ];

  const skills = [
    { label: 'Python 3.12 Internals', count: 18, checked: true },
    { label: 'FastAPI & Asyncio', count: 11, checked: true },
    { label: 'PostgreSQL & MVCC', count: 8, checked: true },
    { label: 'Redis & Caching Tier', count: 4, checked: false },
    { label: 'Docker & Kubernetes', count: 5, checked: false },
    { label: 'Kafka Stream Processing', count: 7, checked: false },
  ];

  const levels = [
    { label: 'Beginner (Foundation L1)', count: 4, checked: false },
    { label: 'Intermediate (Mid/Senior)', count: 18, checked: true },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          
          {/* Main Layout Area */}
          <div style={{ padding: '0', maxWidth: '1600px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            
            {/* Top header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ cursor: 'pointer' }} onClick={() => onNavigateToSimulations?.()}>Interview Library</span>
                <span>›</span>
                <span style={{ color: '#f8fafc' }}>Search & Filter</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', padding: '6px 16px', borderRadius: '8px', fontSize: '0.8rem', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Search size={14} /> Search questions, roles, rubrics... <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', marginLeft: '24px' }}>⌘K</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <Bell size={18} color="#94a3b8" />
                  <span style={{ position: 'absolute', top: -2, right: -2, width: 6, height: 6, background: '#a855f7', borderRadius: '50%' }} />
                </div>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 600 }}>
                  SA
                </div>
              </div>
            </div>

            {/* Banner Tags */}
            <div style={{ padding: '12px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', gap: '12px', overflowX: 'auto' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px', alignSelf: 'center', marginRight: '8px' }}>INTERACTIVE STATES:</span>
              {[
                { label: '1. Query: \'Python\' (Default)', active: true },
                { label: '2. Distributed & Staff' },
                { label: '3. List View Mode' },
                { label: '4. Zero Results Found' },
              ].map((b, i) => (
                <div key={i} style={{ background: b.active ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)', color: b.active ? '#a5b4fc' : '#94a3b8', border: `1px solid ${b.active ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`, padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {b.label}
                </div>
              ))}
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={12} /> Deterministic 5-Q Rule Active
              </div>
            </div>

            <div style={{ display: 'flex', flex: 1 }}>
              
              {/* Left Sidebar (Filters) */}
              <div style={{ width: '280px', borderRight: '1px solid rgba(255, 255, 255, 0.05)', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SlidersHorizontal size={18} color="#f8fafc" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>Refine Results</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: '#334155', color: '#f8fafc', fontSize: '0.65rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>4 Active</div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', cursor: 'pointer' }}>Reset</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '8px', padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <CheckCircle2 size={12} color="#a5b4fc" />
                    <span style={{ fontSize: '0.65rem', color: '#a5b4fc', fontWeight: 700, letterSpacing: '0.5px' }}>PLATFORM BENCHMARK STANDARD</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                    <strong>Question Count: Exactly 5 Questions (Platform Rule)</strong> <Lock size={10} style={{ display: 'inline' }} /><br />
                    All Inprep AI practice sessions deploy standard 5-prompt adaptive loops for calibrated rubric scoring.
                  </p>
                </div>

                {/* Filter Groups */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>Target Career Role</span>
                    <ChevronDown size={14} color="#64748b" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {roles.map((r, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: 16, height: 16, borderRadius: 4, background: r.checked ? '#6366f1' : 'transparent', border: `1px solid ${r.checked ? '#6366f1' : '#334155'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {r.checked && <Check size={12} color="white" />}
                          </div>
                          <span style={{ fontSize: '0.8rem', color: r.checked ? '#f8fafc' : '#94a3b8' }}>{r.label}</span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{r.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ height: 1, background: 'rgba(255, 255, 255, 0.05)' }} />

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>Technical Skills</span>
                    <ChevronDown size={14} color="#64748b" />
                  </div>
                  <div style={{ position: 'relative', marginBottom: '12px' }}>
                    <Search size={14} color="#64748b" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                    <input type="text" placeholder="Filter skills..." style={{ width: '100%', background: '#05070e', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '6px', padding: '8px 10px 8px 30px', fontSize: '0.8rem', color: '#f8fafc' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {skills.map((s, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: 16, height: 16, borderRadius: 4, background: s.checked ? '#6366f1' : 'transparent', border: `1px solid ${s.checked ? '#6366f1' : '#334155'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {s.checked && <Check size={12} color="white" />}
                          </div>
                          <span style={{ fontSize: '0.8rem', color: s.checked ? '#f8fafc' : '#94a3b8' }}>{s.label}</span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ height: 1, background: 'rgba(255, 255, 255, 0.05)' }} />

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>Difficulty Level</span>
                    <ChevronDown size={14} color="#64748b" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {levels.map((l, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: 16, height: 16, borderRadius: 4, background: l.checked ? '#6366f1' : 'transparent', border: `1px solid ${l.checked ? '#6366f1' : '#334155'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {l.checked && <Check size={12} color="white" />}
                          </div>
                          <span style={{ fontSize: '0.8rem', color: l.checked ? '#f8fafc' : '#94a3b8' }}>{l.label}</span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{l.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                  <button style={{ background: '#a5b4fc', color: '#312e81', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                    Apply Refined Filters
                  </button>
                  <button style={{ background: 'transparent', color: '#cbd5e1', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Bookmark size={14} /> Save This Search Criteria
                  </button>
                </div>

              </div>

              {/* Main Content Area */}
              <div style={{ flex: 1, padding: '32px 40px', overflowY: 'auto' }}>
                
                {/* Hero / Header */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.65rem', background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', padding: '4px 8px', borderRadius: '100px', fontWeight: 700, letterSpacing: '0.5px' }}>SMART INTERVIEW SEARCH • ADAPTIVE FACETS</span>
                    <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>• Deterministic Evaluation Rubrics</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 12px 0' }}>Find Your Next Practice Interview</h1>
                      <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, maxWidth: '700px', lineHeight: 1.5 }}>
                        Search and refine interview practice sessions based on your target role, stack, and seniority. Every session features exactly 5 adaptive questions evaluated against industry rubrics.
                      </p>
                    </div>
                    <button onClick={() => onNavigateToSimulations?.()} style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '10px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <Compass size={16} /> Browse Interview Library &rarr;
                    </button>
                  </div>
                </div>

                {/* Big Search Input */}
                <div style={{ background: '#0a0d14', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Search size={20} color="#94a3b8" style={{ marginLeft: '8px' }} />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search roles, skills, or topics..." 
                    style={{ flex: 1, background: 'transparent', border: 'none', color: '#f8fafc', fontSize: '1rem', outline: 'none' }} 
                  />
                  {searchQuery && <X size={16} color="#64748b" style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')} />}
                  <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Press <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>⌘K</span> or /
                  </div>
                  <button style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>
                    Search
                  </button>
                </div>

                {/* Recents */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>RECENT:</span>
                  {['Python interview', 'Flutter state management', 'SQL questions', 'AI/ML Latency', 'STAR Behavioral'].map((r, i) => (
                    <div key={i} style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {r} <X size={10} color="#64748b" style={{ cursor: 'pointer' }} />
                    </div>
                  ))}
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8', textDecoration: 'underline', cursor: 'pointer', marginLeft: 'auto' }}>Clear All History</span>
                </div>

                {/* Active Filters Bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Showing 18 Interviews matching 'Python'</h3>
                  <div style={{ width: 1, height: 16, background: 'rgba(255, 255, 255, 0.1)' }} />
                  {['Role: Backend Developer', 'Difficulty: Intermediate', 'Format: Exactly 5 Questions (Locked 🔒)', 'Duration: 10-20 Mins'].map((f, i) => (
                    <div key={i} style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {f} <X size={10} color="#818cf8" style={{ cursor: 'pointer' }} />
                    </div>
                  ))}
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', cursor: 'pointer' }}>Reset All Filters</span>
                    <button style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      <Bookmark size={12} /> Save Filter Preset
                    </button>
                  </div>
                </div>

                {/* Results Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    18 Matching Practice Sessions
                    <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.05)', color: '#94a3b8', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>5-Question Units</span>
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      Sort by: Most Relevant <ChevronDown size={14} color="#64748b" />
                    </div>
                    <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', overflow: 'hidden' }}>
                      <button style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', padding: '6px 8px', color: '#f8fafc', cursor: 'pointer' }}><LayoutGrid size={16} /></button>
                      <button style={{ background: 'transparent', border: 'none', padding: '6px 8px', color: '#64748b', cursor: 'pointer' }}><List size={16} /></button>
                    </div>
                  </div>
                </div>

                {/* Results Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                  {[
                    { tag: 'Backend Architecture', title: 'Python Backend Concurrency & High-Throughput APIs', time: '10-15 Mins', skills: ['Python', 'Asyncio', 'FastAPI', 'PostgreSQL'], eval: 'Voice Evaluation' },
                    { tag: 'Distributed Systems', title: 'Python & Distributed Microservices Resilience', time: '12-15 Mins', skills: ['Python', 'gRPC', 'RabbitMQ', 'Redis'], eval: 'Audio + Code' },
                    { tag: 'Applied AI / ML', title: 'Applied AI & Python LLM Pipeline Engineering', time: '15-20 Mins', skills: ['Python', 'Vector DBs', 'RAG', 'LLM Latency'], eval: 'Voice Evaluation' },
                    { tag: 'Database & Storage', title: 'SQL, PostgreSQL & Python Data Layer Optimization', time: '10-15 Mins', skills: ['Python', 'SQLAlchemy', 'PostgreSQL', 'Indexing'], eval: 'Technical Defense' },
                    { tag: 'Software Security', title: 'Python REST API Security & Auth Mechanisms', time: '10-15 Mins', skills: ['Python', 'OAuth2', 'FastAPI', 'Security'], eval: 'Technical Defense' },
                    { tag: 'STAR Behavioral', title: 'Behavioral Leadership: Python Stack Migration', time: '10-15 Mins', skills: ['STAR Method', 'Python Migration', 'Cross-Org'], eval: 'STAR Rubric' },
                  ].map((card, i) => (
                    <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1', padding: '4px 8px', borderRadius: '100px', fontWeight: 600 }}>{card.tag}</span>
                        <Bookmark size={16} color="#64748b" style={{ cursor: 'pointer' }} />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 12px 0', lineHeight: 1.4 }}>
                        {card.title.split('Python').map((part, j, arr) => 
                          <React.Fragment key={j}>
                            {part}
                            {j < arr.length - 1 && <span style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '0 4px', borderRadius: '4px' }}>Python</span>}
                          </React.Fragment>
                        )}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '8px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Lock size={12} /> Exactly 5 Questions</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>⏱ {card.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#38bdf8', marginBottom: '16px' }}>
                        <Sparkles size={12} /> {card.eval}
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.5, flex: 1 }}>
                        Practice {i === 0 ? 'Python 3.12 internals, Asyncio event loops, FastAPI microservices...' : 'gRPC endpoints, circuit breakers, idempotency keys...'}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                        {card.skills.map((s, j) => (
                          <span key={j} style={{ fontSize: '0.7rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.04)', padding: '2px 8px', borderRadius: '4px' }}>{s}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', cursor: 'pointer' }}>View Rubric Details</span>
                        <button onClick={() => handleStartPractice(card.title)} style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                          Start Practice (5 Qs) &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Showing <strong>1-6</strong> of <strong>18</strong> practice interviews</span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button style={{ background: 'rgba(255, 255, 255, 0.05)', border: 'none', color: '#94a3b8', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>&lsaquo; Prev</button>
                    <button style={{ background: '#a5b4fc', border: 'none', color: '#312e81', padding: '6px 12px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>1</button>
                    <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>2</button>
                    <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>3</button>
                    <button style={{ background: 'rgba(255, 255, 255, 0.05)', border: 'none', color: '#94a3b8', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Next &rsaquo;</button>
                  </div>
                </div>

                {/* Saved Search Queries */}
                <div style={{ marginBottom: '40px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Bookmark size={18} color="#a5b4fc" /> Saved Search Queries
                    </h2>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>2 presets stored</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>Python Backend Practice</h3>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Saved 2d ago</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 16px 0' }}>Keyword: Python • Role: Backend • Difficulty: Intermediate</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><Search size={12} /> Run Search</span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b', cursor: 'pointer' }}>Delete</span>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>Distributed Consensus Staff</h3>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Saved 1w ago</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 16px 0' }}>Keyword: Raft • Role: Architect • Level: Staff L6+</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}><Search size={12} /> Run Search</span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b', cursor: 'pointer' }}>Delete</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: 48, height: 48, background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={24} color="#a5b4fc" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 4px 0' }}>Need Help Choosing a Practice Session?</h3>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, maxWidth: '500px', lineHeight: 1.5 }}>
                        Inprep AI synthesizes your CV, career targets, and diagnostic intake to curate a personalized 4-track simulation roadmap calibrated for deterministic hiring standards.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>AI Profile Analysis (Web #24)</span>
                    <button onClick={() => onNavigateToRecommendedInterviews?.()} style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.4)', color: '#a5b4fc', padding: '10px 20px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      View Recommended &rarr;
                    </button>
                  </div>
                </div>

                {/* Footer Guarantee */}
                <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px' }}>
                  <HelpCircle size={20} color="#64748b" />
                  <div>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', margin: '0 0 4px 0' }}>RESPONSIBLE PRACTICE GUARANTEE</h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                      Inprep AI simulations are strictly deterministic practice resources based on transparent industry evaluation rubrics. The platform never conducts biometric emotion classification, involuntary personality scoring, or automated hiring pass/fail profiling.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={activeSimulationRole}
        />
      )}
    </div>
  );
};

export default SearchFilterPage;
