import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { TargetRoleCatalog } from '../components/interview-library/TargetRoleCatalog';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { Search, Filter, CheckCircle2, Bookmark, BarChart2, Layers, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getUserSimulationHistory, getUserSavedTracks } from '../services/api';

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
  const [activeSimulationRole, setActiveSimulationRole] = useState('Full Stack Developer');
  
  // Real user data state
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [averageScore, setAverageScore] = useState<number>(0);
  const [savedTracks, setSavedTracks] = useState<any[]>([]);
  const [_isLoadingUserData, setIsLoadingUserData] = useState<boolean>(true);

  // Filter & Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    let isMounted = true;
    async function loadUserData() {
      if (!user?.id) {
        setIsLoadingUserData(false);
        return;
      }
      try {
        setIsLoadingUserData(true);
        const [historyRes, savedRes] = await Promise.all([
          getUserSimulationHistory(user.id),
          getUserSavedTracks(user.id),
        ]);
        if (isMounted) {
          if (historyRes) {
            setCompletedCount(historyRes.totalSessions || 0);
            setAverageScore(historyRes.averageOverall || 0);
          }
          if (savedRes && Array.isArray(savedRes.saved)) {
            setSavedTracks(savedRes.saved);
          }
        }
      } catch (err) {
        console.warn('Error loading user simulation history:', err);
      } finally {
        if (isMounted) setIsLoadingUserData(false);
      }
    }

    loadUserData();
    return () => {
      isMounted = false;
    };
  }, [user?.id]);

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

  const categoryCounts = [
    { name: 'All', count: 18 },
    { name: 'Engineering', count: 8 },
    { name: 'Data & AI', count: 6 },
    { name: 'Cloud & DevOps', count: 2 },
    { name: 'Architecture', count: 2 },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', transition: 'background-color 0.25s ease, color 0.25s ease' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--border-subtle)', marginBottom: '32px' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Workspace</span>
                <span>›</span>
                <span style={{ color: '#f8fafc' }}>Interview Library</span>
                <span>›</span>
                <span>Curated Catalog</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '12px', background: 'rgba(255, 255, 255, 0.05)', padding: '2px 8px', borderRadius: '100px', fontSize: '0.7rem' }}>
                  <Bookmark size={12} color="#a5b4fc" /> {savedTracks.length} Saved
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#94a3b8' }}>
                  <Search size={14} /> Quick Search <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem' }}>⌘K</span>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Interview Library</h1>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '4px 10px', borderRadius: '100px', border: '1px solid rgba(56, 189, 248, 0.3)', letterSpacing: '0.5px' }}>
                    ADAPTIVE QUESTIONING CATALOG
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '800px', lineHeight: 1.6 }}>
                  Explore 18 curated practice tracks designed to help you prepare for technical interviews. Every session contains 5 adaptive questions evaluated against deterministic industry rubrics.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => onNavigateToCategories?.()} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <Filter size={16} /> Explore All Categories
                </button>
                <button onClick={() => onNavigateToRecommendedInterviews?.()} style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', color: '#ffffff', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)' }}>
                  View Recommended Interviews &rarr;
                </button>
              </div>
            </div>

            {/* Metric Cards - Connected to Real Data */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              {[
                { 
                  label: 'Available Tracks', 
                  value: '18 Practice Tracks', 
                  icon: <BarChart2 size={16} color="var(--primary-color)" />, 
                  desc: 'Across 4 specialized domains and architecture tracks' 
                },
                { 
                  label: 'Career Disciplines', 
                  value: '4 Specialized Domains', 
                  icon: <Layers size={16} color="#a855f7" />, 
                  desc: 'Engineering, Architecture, Data & AI, and Cloud' 
                },
                { 
                  label: 'Your Saved Sessions', 
                  value: `${savedTracks.length} Bookmarked`, 
                  icon: <Bookmark size={16} color="#0284c7" />, 
                  desc: savedTracks.length === 0 ? 'No tracks bookmarked yet' : 'Targeted simulations ready to resume' 
                },
                { 
                  label: 'Completed Practice', 
                  value: `${completedCount} Completed`, 
                  icon: <CheckCircle2 size={16} color="#10b981" />, 
                  desc: completedCount === 0 
                    ? 'No practice sessions taken yet' 
                    : `Average score: ${averageScore}% across completed sessions` 
                },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{stat.label}</span>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Filter Bar */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px', marginBottom: '40px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search interviews by role, skill, technology or topic..." 
                    style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '12px 16px 12px 42px', borderRadius: '8px', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none' }} 
                  />
                </div>
                {(searchQuery || selectedCategory !== 'All') && (
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    style={{ background: 'transparent', border: 'none', color: '#38bdf8', fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', padding: '6px 12px' }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Popular Categories */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>Explore Categories</h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {categoryCounts.map((cat, i) => {
                  const isActive = selectedCategory === cat.name;
                  return (
                    <button 
                      key={i} 
                      onClick={() => setSelectedCategory(cat.name)}
                      style={{ 
                        background: isActive ? 'rgba(99, 102, 241, 0.12)' : 'var(--bg-card)', 
                        border: `1px solid ${isActive ? 'var(--primary-color)' : 'var(--border-subtle)'}`, 
                        color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)', 
                        padding: '8px 16px', 
                        borderRadius: '100px', 
                        fontSize: '0.8rem', 
                        fontWeight: 600, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      {cat.name} <span style={{ color: isActive ? 'var(--primary-color)' : 'var(--text-muted)', fontSize: '0.7rem' }}>({cat.count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Practice Session */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '32px', display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ background: 'rgba(99, 102, 241, 0.12)', color: 'var(--primary-color)', fontSize: '0.7rem', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, border: '1px solid rgba(99, 102, 241, 0.25)' }}>CURATED PRACTICE TRACK</span>
                  <span style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)', fontSize: '0.7rem', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, border: '1px solid var(--border-subtle)' }}>Senior / Lead Target</span>
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2, color: 'var(--text-main)' }}>Full Stack Systems & Cloud Architecture Simulation</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
                  Practice articulating end-to-end technical trade-offs across React frontend state mutations, high-concurrency Node/Go API gateway pipelines, PostgreSQL schema partitioning, and cloud infrastructure.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button onClick={() => handleStartSimulationTrack('Full Stack Developer')} style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)' }}>
                    Start Practice Session &rarr;
                  </button>
                  <button onClick={() => onNavigateToCategories?.()} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', color: 'var(--text-main)', padding: '12px 24px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    Browse All Tracks
                  </button>
                </div>
              </div>
            </div>

            {/* All Interview Sessions */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>All Interview Sessions</h2>
              </div>
              <TargetRoleCatalog
                searchQuery={searchQuery}
                selectedRoleDomain={selectedCategory}
                selectedLevel={'All'}
                selectedDifficulty={'All'}
                onSelectRole={handleStartSimulationTrack}
              />
            </div>

            {/* Bookmarked Sessions - Live Empty State or Real Saved Tracks */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
                Your Bookmarked Sessions 
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, marginLeft: '8px' }}>
                  {savedTracks.length} saved
                </span>
              </h2>

              {savedTracks.length === 0 ? (
                <div style={{ 
                  background: 'var(--bg-card)', 
                  border: '1px dashed var(--border-subtle)', 
                  borderRadius: '12px', 
                  padding: '36px 20px', 
                  textAlign: 'center', 
                  marginBottom: '32px',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%', 
                    background: 'var(--bg-surface)', 
                    border: '1px solid var(--border-subtle)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 14px auto' 
                  }}>
                    <Bookmark size={22} color="var(--text-muted)" />
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                    No Saved Practice Sessions
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 16px auto', lineHeight: 1.5 }}>
                    You have not saved any interview tracks yet. Explore the tracks above and save your target roles for quick access.
                  </div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                  {savedTracks.map((track, i) => (
                    <div key={track.id || i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                        {track.trackTitle || track.roleTitle || 'Practice Session'}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        {track.domain || 'Engineering Track'}
                      </div>
                      <button 
                        onClick={() => handleStartSimulationTrack(track.trackTitle || 'Full Stack Developer')}
                        style={{ background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: 0 }}
                      >
                        Start Saved Practice &rarr;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Tailored Practice Banner */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>Looking for a More Tailored Practice Plan?</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Inprep AI synthesizes your CV, career targets, and diagnostic assessment to recommend personalized interview tracks tailored directly to your profile.
                </p>
              </div>
              <button onClick={() => onNavigateToRecommendedInterviews?.()} style={{ background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.3)', color: 'var(--primary-color)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                <span>View Tailored Recommendations</span>
                <ArrowRight size={14} />
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
