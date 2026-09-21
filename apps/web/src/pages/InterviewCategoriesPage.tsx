import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { InterviewLibraryHero } from '../components/interview-library/InterviewLibraryHero';
import { TargetRoleCatalog } from '../components/interview-library/TargetRoleCatalog';
import { RecommendedInterviewsExploreDomains } from '../components/recommended-interviews/RecommendedInterviewsExploreDomains';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';
import { getRecommendedInterviews } from '../services/api';

interface InterviewCategoriesPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToDiagnosticIntake?: () => void;
  onNavigateToDeviceReadiness?: () => void;
  onNavigateToIntroRoom?: () => void;
  onNavigateToPipelineDiagnostic?: () => void;
  onNavigateToIntroResult?: () => void;
  onNavigateToProfileAnalysis?: () => void;
  onNavigateToRecommendedInterviews?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const InterviewCategoriesPage: React.FC<InterviewCategoriesPageProps> = ({
  onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToProfileAnalysis,
  onNavigateToRecommendedInterviews,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('categories');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleDomain, setSelectedRoleDomain] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');

  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [activeSimulationRole, setActiveSimulationRole] = useState('Staff Backend & Systems Architect');
  
  const [_savedCount, setSavedCount] = useState(1);
  const [recommendationsData, setRecommendationsData] = useState<any>(null);

  useEffect(() => {
    getRecommendedInterviews(user.id).then((res) => {
      if (res) {
        if (res.savedCount !== undefined) setSavedCount(res.savedCount);
        if (res.recommendations) setRecommendationsData(res);
      }
    }).catch((e) => console.warn('Fetch recommendations error:', e));
  }, [user.id]);

  const displayRole = user?.targetRole || 'Target Role';

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'assessment' && onNavigateToProfileAnalysis) onNavigateToProfileAnalysis();
    else if (key === 'recommended' && onNavigateToRecommendedInterviews) onNavigateToRecommendedInterviews();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories') {
      // already on categories
    }
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
  };

  const handleStartSimulationTrack = (trackName: string) => {
    setActiveSimulationRole(trackName);
    setSimulationModalOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRoleDomain('All');
    setSelectedLevel('All');
    setSelectedDifficulty('All');
    setSelectedFormat('All');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden', backgroundColor: 'var(--bg-main)' }}>
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToDashboard={onNavigateToDashboard}
            onNavigateToProfile={onNavigateToProfile}
            onNavigateToCv={onNavigateToCv}
            onNavigateToSimulations={onNavigateToSimulations}
            onNavigateToHome={onNavigateToHome}
          />

          <div style={{ width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            <InterviewLibraryHero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSelectPopularTag={(tag) => setSearchQuery(tag)}
              selectedRoleDomain={selectedRoleDomain}
              onSelectRoleDomain={setSelectedRoleDomain}
              selectedLevel={selectedLevel}
              onSelectLevel={setSelectedLevel}
              selectedDifficulty={selectedDifficulty}
              onSelectDifficulty={setSelectedDifficulty}
              selectedFormat={selectedFormat}
              onSelectFormat={setSelectedFormat}
              onResetFilters={clearFilters}
              onExploreInterviews={() => {
                const el = document.getElementById('all-roles-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onGetRecommendations={() => onNavigateToRecommendedInterviews?.()}
              primaryCtaText="Update Career Goals"
              secondaryCtaText="View Recommended Interviews (4 Tailored)"
            />

            <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 28px 40px 28px' }}>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>Start With Your Career Goals</h2>
                  <span style={{ fontSize: '0.7rem', color: 'var(--primary-color)', background: 'rgba(99, 102, 241, 0.1)', padding: '2px 8px', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                    For You: {displayRole}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Based on your AI Profile Analysis and Spoken Intake, these disciplines are calibrated to your {displayRole} trajectory.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {recommendationsData?.featuredSkills?.slice(0, 4).map((skill: string, i: number) => (
                    <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>{skill}</h3>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Relevant to high-concurrency target role. Practice {skill.toLowerCase()} architecture.</p>
                      <button onClick={() => handleStartSimulationTrack(skill)} style={{ marginTop: '12px', background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: 0 }}>
                        5 Questions Each &rarr;
                      </button>
                    </div>
                  )) || (
                    <>
                      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Distributed Systems & Storage Engines</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Direct match to verified Kafka & Raft consensus experience.</p>
                        <button onClick={() => handleStartSimulationTrack('Distributed Systems')} style={{ marginTop: '12px', background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: 0 }}>5 Questions Each &rarr;</button>
                      </div>
                      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Backend & Microservices Architecture</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Relevant to high-concurrency target role. Practice gRPC...</p>
                        <button onClick={() => handleStartSimulationTrack('Backend Architecture')} style={{ marginTop: '12px', background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: 0 }}>5 Questions Each &rarr;</button>
                      </div>
                      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Engineering Leadership & RFCs</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Aligns with L6+ cross-org governance goal.</p>
                        <button onClick={() => handleStartSimulationTrack('Engineering Leadership')} style={{ marginTop: '12px', background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: 0 }}>5 Questions Each &rarr;</button>
                      </div>
                      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>Applied AI & ML Systems</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Recommended adjacent discipline for inference...</p>
                        <button onClick={() => handleStartSimulationTrack('Applied AI')} style={{ marginTop: '12px', background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: 0 }}>5 Questions Each &rarr;</button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div id="all-roles-catalog" style={{ marginBottom: '32px' }}>
                <TargetRoleCatalog
                  searchQuery={searchQuery}
                  selectedRoleDomain={selectedRoleDomain}
                  selectedLevel={selectedLevel}
                  selectedDifficulty={selectedDifficulty}
                  onSelectRole={handleStartSimulationTrack}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>Recently Viewed</h3>
                <RecommendedInterviewsExploreDomains
                  onBrowseLibrary={() => {}}
                  onViewSaved={() => handleStartSimulationTrack(displayRole)}
                  onSelectDomain={(domain) => handleStartSimulationTrack(domain)}
                  targetRole={displayRole}
                  savedCount={_savedCount}
                />
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary-color)', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  AI Guidance • Diagnostic Advisory
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>Not sure where to begin your preparation?</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.5, margin: 0 }}>
                  Take the automated diagnostic assessment or review your AI Profile Analysis to let Inprep AI calibrate your exact weakness surface and curate high-impact simulations for your upcoming interviews.
                </p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button onClick={() => onNavigateToRecommendedInterviews?.()} style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                    View Recommended Interviews
                  </button>
                  <button onClick={() => onNavigateToProfileAnalysis?.()} style={{ background: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '10px 20px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>
                    Review AI Profile Analysis
                  </button>
                </div>
              </div>
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

export default InterviewCategoriesPage;
