import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { TargetRoleCatalog } from '../components/interview-library/TargetRoleCatalog';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';
import { Search, Filter, ChevronDown, CheckCircle2, Bookmark, BarChart2 } from 'lucide-react';

interface SimulationsPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToProfileAnalysis?: () => void;
  onNavigateToRecommendedInterviews?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToSimulationDetails?: () => void;
  onNavigateToAi?: () => void;
}

export const SimulationsPage: React.FC<SimulationsPageProps> = ({
  onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToProfileAnalysis,
  onNavigateToRecommendedInterviews,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToSimulationDetails,
  onNavigateToAi,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('library');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [activeSimulationRole, setActiveSimulationRole] = useState('Staff Backend & Systems Architect');

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'assessment' && onNavigateToProfileAnalysis) onNavigateToProfileAnalysis();
    else if (key === 'recommended' && onNavigateToRecommendedInterviews) onNavigateToRecommendedInterviews();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
  };

  const handleStartSimulationTrack = (role: string) => {
    if (onNavigateToSimulationDetails) {
      onNavigateToSimulationDetails();
    } else {
      setActiveSimulationRole(role);
      setSimulationModalOpen(true);
    }
  };

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
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToDashboard={onNavigateToDashboard}
            onNavigateToProfile={onNavigateToProfile}
            onNavigateToCv={onNavigateToCv}
            onNavigateToSimulations={() => {}}
            onNavigateToHome={onNavigateToHome}
          />

          <div style={{ padding: '0 28px 40px 28px', maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
            {/* Breadcrumb Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Workspace</span>
                <span>›</span>
                <span style={{ color: '#f8fafc' }}>Interview Library</span>
                <span>›</span>
                <span>Catalog (Web #27)</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '12px', background: 'rgba(255, 255, 255, 0.05)', padding: '2px 8px', borderRadius: '100px', fontSize: '0.7rem' }}>
                  <Bookmark size={12} color="#a5b4fc" /> Library Favorites
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#94a3b8' }}>
                  <Search size={14} /> Quick Search <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem' }}>⌘K</span>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Interview Library</h1>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.15)', padding: '4px 8px', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.3)', letterSpacing: '0.5px' }}>
                    PROTOTYPE TEST: CANDIDATE INTERFACE V2 • ADAPTIVE QUESTIONING
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '800px', lineHeight: 1.6 }}>
                  Explore 144+ new practice sessions designed to help you prepare for your next opportunity. Every session contains exactly 5 adaptive questions evaluated against deterministic industry rubrics.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => onNavigateToCategories?.()} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#f8fafc', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <Filter size={16} /> Explore All Categories
                </button>
                <button onClick={() => onNavigateToRecommendedInterviews?.()} style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', color: '#ffffff', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  View Recommended (4 Tailored) &rarr;
                </button>
              </div>
            </div>

            {/* Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
              {[
                { label: 'Available Sessions', value: '48+ Practice Sessions', icon: <BarChart2 size={16} color="#818cf8" />, desc: 'Across 4 core disciplines & architecture archetypes' },
                { label: 'Career Categories', value: '16 Specialized Tracks', icon: <Filter size={16} color="#c084fc" />, desc: 'From Distributed Systems to API/LLM latency tiers' },
                { label: 'Career Sessions', value: '3 Bookmarked', icon: <Bookmark size={16} color="#38bdf8" />, desc: 'Quick access to targeted simulations ready to resume' },
                { label: 'Session Practice', value: '4 Completed', icon: <CheckCircle2 size={16} color="#10b981" />, desc: 'Average evaluation score tracks for L5 alignment' },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{stat.label}</span>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4 }}>{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Filter Bar Mockup */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '16px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <Search size={16} color="#64748b" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="text" placeholder="Search interviews by role, skill, technology or topic..." style={{ width: '100%', background: '#05070e', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '12px 16px 12px 42px', borderRadius: '8px', color: '#f8fafc', fontSize: '0.9rem' }} />
                </div>
                <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  Showing All 144+ Simulations <span style={{ textDecoration: 'underline' }}>Reset</span>
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {['Role Track', 'Discipline Category', 'Difficulty', 'Experience Seniority', 'Interview Type', 'Practice Duration', 'Question Focus', 'Sort By'].map((label, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>{label}</span>
                    <div style={{ background: '#05070e', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '10px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                      <span>All {label.split(' ')[0]}s</span>
                      <ChevronDown size={14} color="#64748b" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Categories */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Explore Popular Categories</h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                  { name: 'All', count: 144, active: true },
                  { name: 'Python & Backend', count: 12 },
                  { name: 'Distributed Systems', count: 14 },
                  { name: 'Applied AI & ML', count: 6 },
                  { name: 'Full Stack Systems', count: 8 },
                  { name: 'Database & SQL Internals', count: 7 },
                ].map((cat, i) => (
                  <button key={i} style={{ background: cat.active ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)', border: `1px solid ${cat.active ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`, color: cat.active ? '#a5b4fc' : '#cbd5e1', padding: '8px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    {cat.name} <span style={{ color: cat.active ? '#818cf8' : '#64748b', fontSize: '0.7rem' }}>({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Practice Session */}
            <div style={{ background: 'linear-gradient(to right, #0f172a, #090d18)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '32px', display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', fontSize: '0.7rem', padding: '4px 8px', borderRadius: '4px', fontWeight: 700 }}>FEATURED PRACTICE SESSION 4</span>
                  <span style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1', fontSize: '0.7rem', padding: '4px 8px', borderRadius: '4px', fontWeight: 700 }}>L5 / Senior Staff Target</span>
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>Full Stack Systems & Cloud Architecture Simulation</h2>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '24px', lineHeight: 1.6 }}>
                  Practice articulating end-to-end technical trade-offs across React frontend state mutations, high-concurrency Node/Go API gateway pipelines, PostgreSQL schema partitioning, and cloud...
                </p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                  <button onClick={() => handleStartSimulationTrack('Full Stack Architecture')} style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    Start Practice (5 Questions) &rarr;
                  </button>
                  <button style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#f8fafc', padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    View Rubric & Details
                  </button>
                </div>
              </div>
              <div style={{ flex: 1, height: '240px', background: 'rgba(0, 0, 0, 0.2)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Architecture Graphic</div>
              </div>
            </div>

            {/* All Interview Sessions */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>All Interview Sessions</h2>
              </div>
              <TargetRoleCatalog
                searchQuery={''}
                selectedRoleDomain={'All'}
                selectedLevel={'All'}
                selectedDifficulty={'All'}
                onSelectRole={handleStartSimulationTrack}
              />
            </div>

            {/* Bookmarked Sessions & CTA */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px' }}>Your Bookmarked Sessions <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, marginLeft: '8px' }}>3 saved</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                {[
                  { title: 'Staff Backend Architecture', sub: 'Concurrency internals & Redis partition scale.' },
                  { title: 'Distributed Storage Engines', sub: 'LSM-tree vs B-tree & Write-Ahead Logging.' },
                  { title: 'Executive Tech Leadership', sub: 'Cross-org engineering velocity & roadmap.' }
                ].map((b, i) => (
                  <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '20px' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>{b.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '16px' }}>{b.sub}</div>
                    <button style={{ background: 'transparent', border: 'none', color: '#a5b4fc', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: 0 }}>
                      Start Saved Practice
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'rgba(99, 102, 241, 0.06)', border: '1px solid rgba(99, 102, 241, 0.15)', borderRadius: '16px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>Looking for a More Tailored Practice Plan?</h3>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>Inprep AI synthesizes your CV, career targets, and context flags to create a personalized 4-track simulation roster...</p>
              </div>
              <button onClick={() => onNavigateToRecommendedInterviews?.()} style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.4)', color: '#a5b4fc', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                View Recommended Interviews (Web #25) &rarr;
              </button>
            </div>

          </div>
          <DashboardFooter />
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

export default SimulationsPage;
