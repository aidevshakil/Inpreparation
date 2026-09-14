import React, { useState, useEffect } from 'react';
import type { RecommendedInterviewsState } from '../components/recommended-interviews/RecommendedInterviewsSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { RecommendedInterviewsHeader } from '../components/recommended-interviews/RecommendedInterviewsHeader';
import { RecommendedInterviewsBasisBanner } from '../components/recommended-interviews/RecommendedInterviewsBasisBanner';
import { RecommendedInterviewsFeaturedHeroCard } from '../components/recommended-interviews/RecommendedInterviewsFeaturedHeroCard';
import { RecommendedInterviewsFilterBar } from '../components/recommended-interviews/RecommendedInterviewsFilterBar';
import { RecommendedInterviewsGrid } from '../components/recommended-interviews/RecommendedInterviewsGrid';
import { RecommendedInterviewsExploreDomains } from '../components/recommended-interviews/RecommendedInterviewsExploreDomains';
import { RecommendedInterviewsComplianceBanner } from '../components/recommended-interviews/RecommendedInterviewsComplianceBanner';
import { RecommendedInterviewsRubricModal } from '../components/recommended-interviews/RecommendedInterviewsRubricModal';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { useAuth } from '../context/AuthContext';
import { getRecommendedInterviews } from '../services/api';

interface RecommendedInterviewsPageProps {
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
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const RecommendedInterviewsPage: React.FC<RecommendedInterviewsPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToCvAnalysis: _onNavigateToCvAnalysis,
  onNavigateToCvBuilder: _onNavigateToCvBuilder,
  onNavigateToDiagnosticIntake: _onNavigateToDiagnosticIntake,
  onNavigateToDeviceReadiness: _onNavigateToDeviceReadiness,
  onNavigateToIntroRoom: _onNavigateToIntroRoom,
  onNavigateToPipelineDiagnostic: _onNavigateToPipelineDiagnostic,
  onNavigateToIntroResult: _onNavigateToIntroResult,
  onNavigateToProfileAnalysis,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const { user } = useAuth();
  const [simulatorState, setSimulatorState] = useState<RecommendedInterviewsState>('default_tailored');
  const [activeNav, setActiveNav] = useState<NavItemKey>('library');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [rubricModalOpen, setRubricModalOpen] = useState(false);
  const [rubricTrackName, setRubricTrackName] = useState('Staff Backend & Distributed Systems Architecture');
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [activeSimulationRole, setActiveSimulationRole] = useState('Staff Backend & Systems Architect');
  const [_savedCount, setSavedCount] = useState(1);

  useEffect(() => {
    getRecommendedInterviews(user.id).then((res) => {
      if (res && res.savedCount !== undefined) {
        setSavedCount(res.savedCount);
      }
    }).catch((e) => console.warn('Fetch recommendations error:', e));
  }, [user.id]);

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) {
      onNavigateToDashboard();
    } else if (key === 'profile' && onNavigateToProfile) {
      onNavigateToProfile();
    } else if (key === 'cv' && onNavigateToCv) {
      onNavigateToCv();
    } else if (key === 'assessment' && onNavigateToProfileAnalysis) {
      onNavigateToProfileAnalysis();
    } else if (key === 'library' && onNavigateToSimulations) {
      onNavigateToSimulations();
    } else if (key === 'improvement' && onNavigateToAi) {
      onNavigateToAi();
    }
  };

  const handleStartSimulationTrack = (trackName: string) => {
    setActiveSimulationRole(trackName);
    setSimulationModalOpen(true);
  };

  const handleOpenRubric = (trackName: string) => {
    setRubricTrackName(trackName);
    setRubricModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRole('all');
    setSelectedDifficulty('all');
    if (simulatorState !== 'default_tailored') {
      setSimulatorState('default_tailored');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* Main Workspace Frame */}
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
        {/* 2. Left Navigation Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={840}
          totalCredits={1000}
        />

        {/* 3. Main Body Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          {/* Top Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToDashboard={onNavigateToDashboard}
            onNavigateToProfile={onNavigateToProfile}
            onNavigateToCv={onNavigateToCv}
            onNavigateToSimulations={onNavigateToSimulations}
            onNavigateToHome={_onNavigateToHome}
          />

          {/* Page Inner Container */}
          <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 28px 40px 28px' }}>
            {/* Header with Milestones Stepper, Title, Badges */}
            <RecommendedInterviewsHeader
              onNavigateToAssessment={onNavigateToProfileAnalysis}
              onUpdatePreferences={onNavigateToProfile}
              onBrowseFullLibrary={onNavigateToSimulations}
            />

            {/* Recommendations Basis Banner */}
            <RecommendedInterviewsBasisBanner
              onAdjustParameters={onNavigateToProfile}
            />

            {/* Featured Hero Simulation Card */}
            <RecommendedInterviewsFeaturedHeroCard
              onStartSimulation={() => handleStartSimulationTrack('Staff Backend & Distributed Systems Architecture')}
              onViewRubric={() => handleOpenRubric('Staff Backend & Distributed Systems Architecture')}
            />

            {/* Filter Bar */}
            <RecommendedInterviewsFilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              onResetFilters={handleResetFilters}
            />

            {/* Tailored Recommendations 4-Card Grid */}
            <RecommendedInterviewsGrid
              state={simulatorState}
              searchQuery={searchQuery}
              selectedRole={selectedRole}
              selectedDifficulty={selectedDifficulty}
              onSelectTrack={handleStartSimulationTrack}
              onViewRubric={handleOpenRubric}
              onResetFilters={handleResetFilters}
            />

            {/* Explore by Career Direction Category Cards & Saved Box */}
            <RecommendedInterviewsExploreDomains
              onBrowseLibrary={onNavigateToSimulations}
              onViewSaved={() => handleStartSimulationTrack('Staff Backend & Systems Architect')}
              onSelectDomain={(domain) => handleStartSimulationTrack(domain)}
            />

            {/* Compliance & Privacy Banner */}
            <RecommendedInterviewsComplianceBanner
              onUpdateProfile={onNavigateToProfile}
              onReviewAnalysis={onNavigateToProfileAnalysis}
            />
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>

      {/* Rubric Breakdown Modal */}
      <RecommendedInterviewsRubricModal
        isOpen={rubricModalOpen || simulatorState === 'view_rubric_modal'}
        onClose={() => {
          setRubricModalOpen(false);
          if (simulatorState === 'view_rubric_modal') setSimulatorState('default_tailored');
        }}
        trackName={rubricTrackName}
        onStartSimulation={() => {
          setRubricModalOpen(false);
          handleStartSimulationTrack(rubricTrackName);
        }}
      />

      {/* Live Simulation Practice Modal */}
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

export default RecommendedInterviewsPage;
