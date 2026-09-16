import React, { useState, useEffect } from 'react';
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
import { getDiagnosticResult, getUserSimulationHistory, getProfileAnalysisDossier } from '../services/api';

interface CandidateDashboardPageProps {
  onNavigateToHome?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToPricing?: () => void;
}

export const CandidateDashboardPage: React.FC<CandidateDashboardPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToAi,
}) => {
  const { user } = useAuth();
  const [dashboardState, setDashboardState] = useState<DashboardState>('skeleton');
  const [activeNav, setActiveNav] = useState<NavItemKey>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(user.targetRole || 'Senior Backend Engineer');

  // API Data State
  const [readinessScore, setReadinessScore] = useState<number>(0);
  const [benchmarkLevel, setBenchmarkLevel] = useState<string>('N/A');

  useEffect(() => {
    let isMounted = true;
    
    async function fetchDashboardData() {
      if (!user?.id) return;
      
      try {
        setDashboardState('skeleton');
        
        // Fetch all dashboard widgets in parallel
        const [simHistory, diagResult, profileAnalysis] = await Promise.all([
          getUserSimulationHistory(user.id),
          getDiagnosticResult(user.id),
          getProfileAnalysisDossier(user.id)
        ]);
        
        if (!isMounted) return;

        // Process Diagnostic Result for Readiness Suite
        if (diagResult && diagResult.result && diagResult.result.overallScore) {
          setReadinessScore(diagResult.result.overallScore);
          setBenchmarkLevel(diagResult.result.calibratedSeniority || 'L5');
        } else {
          setReadinessScore(0);
          setBenchmarkLevel('Needs Assessment');
        }

        // Determine Dashboard State based on history
        if (simHistory && simHistory.totalSessions > 0) {
          setDashboardState('completed');
        } else {
          setDashboardState('empty');
        }

      } catch (error) {
        console.error('Failed to load dashboard data:', error);
        if (isMounted) setDashboardState('error');
      }
    }

    fetchDashboardData();

    return () => {
      isMounted = false;
    };
  }, [user?.id]);

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
    } else if (key === 'categories' && onNavigateToCategories) {
      onNavigateToCategories();
    } else if (key === 'assessment') {
      handleStartInterview('System Concurrency & Architecture');
    }
  };

  return (
    <div className="flex-col h-full" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
      {/* Main Workspace Frame */}
      <div className="flex w-full" style={{ flex: 1, minHeight: '100vh' }}>
        {/* 2. Left Navigation Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={user.creditsRemaining}
          totalCredits={user.totalCredits}
        />

        {/* Right Content Column */}
        <div className="flex-col" style={{ flex: 1, minWidth: 0, backgroundColor: 'var(--bg-surface)' }}>
          {/* 3. Studio Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToProfile={onNavigateToProfile}
            onNavigateToCv={onNavigateToCv}
            onNavigateToSimulations={onNavigateToSimulations}
            onNavigateToHome={_onNavigateToHome}
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
              <DashboardErrorState onRetry={() => setDashboardState('skeleton')} />
            )}

            {dashboardState === 'processing' && (
              <>
                <CockpitHeroBanner
                  userName={user.name}
                  targetRole={selectedRole}
                  onStartInterview={() => handleStartInterview()}
                  onViewRecommendations={() => {}}
                />
                <DashboardProcessingState />
                <ExecutiveReadinessSuite
                  readinessScore={readinessScore}
                  firstAttemptScore={0}
                  targetBenchmark={85}
                  benchmarkLevel={benchmarkLevel}
                  targetRoleLevel={user.targetRole}
                  percentileRank={0}
                  onViewPerformance={() => {}}
                />
                <ActivityAndTrendSection />
                <DashboardFooter />
              </>
            )}

            {dashboardState === 'empty' && (
              <>
                <CockpitHeroBanner
                  userName={user.name}
                  targetRole={user.targetRole || "Target Role Needed"}
                  focusArea="initial baseline calibration & CV sync"
                  onStartInterview={() => handleStartInterview()}
                  onViewRecommendations={() => {}}
                />
                <DashboardEmptyState
                  onStartInterview={() => handleStartInterview()}
                  onUploadCV={() => { if (onNavigateToCv) onNavigateToCv(); }}
                  onTakeBaseline={() => handleStartInterview('Full-Stack Calibration Baseline')}
                />
                <RecommendedTracksSection
                  onSelectTrack={(trackId) => handleStartInterview(trackId)}
                  onExploreLibrary={onNavigateToSimulations}
                />
                <QuickNavAndAlgorithmSection
                  onStartInterview={() => handleStartInterview()}
                  onBrowseLibrary={onNavigateToSimulations}
                  onUploadCV={() => { if (onNavigateToCv) onNavigateToCv(); }}
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
                  readinessScore={readinessScore}
                  firstAttemptScore={0}
                  targetBenchmark={85}
                  benchmarkLevel={benchmarkLevel}
                  targetRoleLevel={user.targetRole}
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
                  onUploadCV={() => { if (onNavigateToCv) onNavigateToCv(); }}
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
