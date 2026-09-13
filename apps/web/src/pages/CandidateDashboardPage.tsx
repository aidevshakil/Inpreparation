import React, { useState } from 'react';
import type { DashboardState } from '../components/dashboard/PrototypeSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { CockpitHeroBanner } from '../components/dashboard/CockpitHeroBanner';
import { ProfileCompletionCard } from '../components/dashboard/ProfileCompletionCard';
import { ExecutiveReadinessSuite } from '../components/dashboard/ExecutiveReadinessSuite';
import { PracticeAndCoachSection } from '../components/dashboard/PracticeAndCoachSection';
import { RecommendedTracksSection } from '../components/dashboard/RecommendedTracksSection';
import { ActivityAndTrendSection } from '../components/dashboard/ActivityAndTrendSection';
import { SimulatedInterviewsAndFocusSection } from '../components/dashboard/SimulatedInterviewsAndFocusSection';
import { QuickNavAndAlgorithmSection } from '../components/dashboard/QuickNavAndAlgorithmSection';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { DashboardEmptyState } from '../components/dashboard/DashboardEmptyState';
import { DashboardProcessingState } from '../components/dashboard/DashboardProcessingState';
import { DashboardSkeletonState } from '../components/dashboard/DashboardSkeletonState';
import { DashboardErrorState } from '../components/dashboard/DashboardErrorState';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';

interface CandidateDashboardPageProps {
  onNavigateToHome?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToPricing?: () => void;
}

export const CandidateDashboardPage: React.FC<CandidateDashboardPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const { user } = useAuth();
  const [dashboardState, setDashboardState] = useState<DashboardState>('default');
  const [activeNav, setActiveNav] = useState<NavItemKey>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(user.targetRole || 'Senior Backend Engineer');

  const hasBasicInfo = Boolean(user.name && user.email);
  const hasSkills = Boolean(user.cvSkills && user.cvSkills.length > 0);
  const hasCv = Boolean(user.cvFileName);
  const hasAssessment = Boolean(user.targetRole && user.targetRole !== 'Select Target Role');
  const hasPreferences = false;

  const handleStartInterview = (role?: string) => {
    if (role) setSelectedRole(role);
    setSimulationModalOpen(true);
  };

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'profile' && onNavigateToProfile) {
      onNavigateToProfile();
    } else if (key === 'cv' && onNavigateToCv) {
      onNavigateToCv();
    } else if (key === 'library' && onNavigateToSimulations) {
      onNavigateToSimulations();
    } else if (key === 'assessment') {
      handleStartInterview('System Concurrency & Architecture');
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
          creditsRemaining={dashboardState === 'empty' ? 100 : 78}
          totalCredits={100}
        />

        {/* Right Content Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, backgroundColor: '#090c15' }}>
          {/* 3. Studio Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* 4. Dashboard Inner Body */}
          <main
            style={{
              flex: 1,
              padding: '0 28px 40px 28px',
              maxWidth: '1380px',
              width: '100%',
              margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Dynamic Rendering Based on Prototype Simulator State */}

            {dashboardState === 'skeleton' && <DashboardSkeletonState />}

            {dashboardState === 'error' && (
              <DashboardErrorState onRetry={() => setDashboardState('default')} />
            )}

            {dashboardState === 'processing' && (
              <>
                <CockpitHeroBanner
                  userName="Shakil"
                  targetRole={selectedRole}
                  onStartInterview={() => handleStartInterview()}
                  onViewRecommendations={() => {}}
                />
                <DashboardProcessingState />
                <ExecutiveReadinessSuite
                  readinessScore={82}
                  onViewPerformance={() => {}}
                />
                <ActivityAndTrendSection />
                <DashboardFooter />
              </>
            )}

            {dashboardState === 'empty' && (
              <>
                <CockpitHeroBanner
                  userName="Shakil"
                  targetRole="Senior Backend Engineer"
                  focusArea="initial baseline calibration & CV sync"
                  onStartInterview={() => handleStartInterview()}
                  onViewRecommendations={() => {}}
                />
                <DashboardEmptyState
                  onStartInterview={() => handleStartInterview()}
                  onUploadCV={() => alert('Opening CV Upload Modal...')}
                  onTakeBaseline={() => handleStartInterview('Full-Stack Calibration Baseline')}
                />
                <RecommendedTracksSection
                  onSelectTrack={(trackId) => handleStartInterview(trackId)}
                  onExploreLibrary={onNavigateToSimulations}
                />
                <QuickNavAndAlgorithmSection
                  onStartInterview={() => handleStartInterview()}
                  onBrowseLibrary={onNavigateToSimulations}
                  onUploadCV={() => alert('Opening CV Upload Modal...')}
                  onCareerBaseline={() => handleStartInterview('Career Baseline Test')}
                  onImprovementPlan={() => {}}
                  onManageCredits={() => {}}
                />
                <DashboardFooter />
              </>
            )}

            {(dashboardState === 'default' || dashboardState === 'completed') && (
              <>
                {/* Candidate Cockpit Hero */}
                <CockpitHeroBanner
                  userName={user.name || 'Candidate'}
                  targetRole={user.targetRole || 'Software Engineer'}
                  focusArea="system concurrency & distributed state"
                  onStartInterview={() => handleStartInterview(user.targetRole || 'Backend Developer')}
                  onViewRecommendations={() => {
                    const el = document.getElementById('recommended-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />

                {/* Profile Completion Milestone Card */}
                <ProfileCompletionCard
                  percent={dashboardState === 'completed' ? 100 : undefined}
                  hasBasicInfo={hasBasicInfo}
                  hasSkills={hasSkills}
                  hasCv={hasCv}
                  hasAssessment={hasAssessment}
                  hasPreferences={hasPreferences}
                  onCompleteProfile={() => handleStartInterview('Career Assessment Diagnostic')}
                />

                {/* Executive Readiness Metrics Suite */}
                <ExecutiveReadinessSuite
                  readinessScore={dashboardState === 'completed' ? 91 : 82}
                  firstAttemptScore={71}
                  targetBenchmark={85}
                  benchmarkLevel="BENCHMARK: L6"
                  targetRoleLevel="Staff Level"
                  percentileRank={12}
                  onViewPerformance={() => {}}
                />

                {/* Continue Practice & AI Coach Insight */}
                <PracticeAndCoachSection
                  onContinuePractice={() => handleStartInterview('Python Backend Developer - Q4')}
                  onRestartPractice={() => handleStartInterview('Python Backend Developer - Q1')}
                  onViewImprovementPlan={() => {}}
                />

                {/* Recommended Tracks Section */}
                <div id="recommended-section">
                  <RecommendedTracksSection
                    onSelectTrack={(trackId) => handleStartInterview(trackId)}
                    onExploreLibrary={onNavigateToSimulations}
                  />
                </div>

                {/* Practice Activity & Score Curve Trend */}
                <ActivityAndTrendSection />

                {/* Simulated Interviews & Multimodal Focus Areas */}
                <SimulatedInterviewsAndFocusSection
                  onViewAllHistory={() => {}}
                  onViewFeedback={(id) => alert(`Opening diagnostic scorecard for session ${id}...`)}
                  onInspectStream={() => setDashboardState('processing')}
                  onConfigureDrills={() => handleStartInterview()}
                />

                {/* Quick Navigation Tiles & Recommendations Algorithm */}
                <QuickNavAndAlgorithmSection
                  onStartInterview={() => handleStartInterview()}
                  onBrowseLibrary={onNavigateToSimulations}
                  onUploadCV={() => alert('Opening CV Upload & Skill Graph Sync...')}
                  onCareerBaseline={() => handleStartInterview('Career Baseline Test')}
                  onImprovementPlan={() => {
                    if (onNavigateToAi) onNavigateToAi();
                  }}
                  onManageCredits={() => {}}
                />

                {/* Footer */}
                <DashboardFooter />
              </>
            )}
          </main>
        </div>
      </div>

      {/* Live Simulation Practice Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={selectedRole}
        />
      )}
    </div>
  );
};

export default CandidateDashboardPage;
