import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { PerformanceFilterBar } from '../components/performance-dashboard/PerformanceFilterBar';
import { PerformanceKpiCards } from '../components/performance-dashboard/PerformanceKpiCards';
import { PerformanceTrendVelocityCard } from '../components/performance-dashboard/PerformanceTrendVelocityCard';
import { PerformanceHistogramRubrics } from '../components/performance-dashboard/PerformanceHistogramRubrics';
import { PerformanceCategoryTierCards } from '../components/performance-dashboard/PerformanceCategoryTierCards';
import { PerformanceActionShowcaseCards } from '../components/performance-dashboard/PerformanceActionShowcaseCards';
import { PerformanceScoreLedgerTable } from '../components/performance-dashboard/PerformanceScoreLedgerTable';
import { PerformanceSkillMatrix } from '../components/performance-dashboard/PerformanceSkillMatrix';
import { PerformanceGovernanceBanner } from '../components/performance-dashboard/PerformanceGovernanceBanner';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';
import { getRecentSimulations, getUserSimulationHistory } from '../services/api';

interface PerformanceDashboardPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToResult?: (sessionId?: string) => void;
  onNavigateToHistory?: () => void;
  onNavigateToSkillAnalytics?: () => void;
}

export const PerformanceDashboardPage: React.FC<PerformanceDashboardPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToResult,
  onNavigateToHistory,
  onNavigateToSkillAnalytics,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('performance');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [sessions, setSessions] = useState<any[]>([]);
  const [_loadingSessions, setLoadingSessions] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadSessions() {
      setLoadingSessions(true);
      try {
        if (user?.id) {
          const userHist = await getUserSimulationHistory(user.id);
          if (isMounted && userHist?.history && userHist.history.length > 0) {
            setSessions(userHist.history);
            return;
          }
        }
        const recent = await getRecentSimulations(20);
        if (isMounted && Array.isArray(recent) && recent.length > 0) {
          setSessions(recent);
        }
      } catch (err) {
        console.warn('Could not load simulation sessions:', err);
      } finally {
        if (isMounted) setLoadingSessions(false);
      }
    }
    loadSessions();
    return () => {
      isMounted = false;
    };
  }, [user?.id]);

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'history' && onNavigateToHistory) onNavigateToHistory();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#07090e',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
        {/* Left Navigation Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={user?.creditsRemaining || 100}
          totalCredits={user?.totalCredits || 100}
        />

        {/* Main Workspace Frame */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          {/* Top Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToProfile={onNavigateToProfile}
          />

          {/* Performance Dashboard Inner Container */}
          <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 28px 40px 28px' }}>
            {/* Header Title & Subtitle */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '24px',
                paddingTop: '20px',
              }}
            >
              <div>
                <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                  Candidate Performance &amp; Evaluation Ledger
                </h1>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: 0 }}>
                  Deterministic longitudinal scoring across technical architecture, STAR methodology, and biometric pacing vectors.
                </p>
              </div>

              {onNavigateToSkillAnalytics && (
                <button
                  onClick={onNavigateToSkillAnalytics}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    color: '#a5b4fc',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <span>Skill Analytics (Web #37)</span>
                  <span>→</span>
                </button>
              )}
            </div>

            {/* 1. Time Range & Filter Bar */}
            <PerformanceFilterBar />

            {/* 2. Top 4 KPI Metrics */}
            <PerformanceKpiCards sessions={sessions} />

            {/* 3. Score Trend & Velocity with SVG Line Chart and Window Telemetry */}
            <PerformanceTrendVelocityCard />

            {/* 4. Score Distribution Histogram & 5 Core Evaluation Rubrics */}
            <PerformanceHistogramRubrics
              onDrillVector={() => setSimulationModalOpen(true)}
            />

            {/* 5. Competency Matrix & Category Tiers */}
            <PerformanceSkillMatrix sessions={sessions} />

            {/* 6. Scores by Category Track & Scores by Difficulty Tier */}
            <PerformanceCategoryTierCards />

            {/* 7. Where to Focus Next & Personal Best Showcase */}
            <PerformanceActionShowcaseCards
              onLaunchSimulation={() => setSimulationModalOpen(true)}
              onGenerateImprovementPlan={onNavigateToAi}
              onViewBestDossier={() => onNavigateToResult && onNavigateToResult('SIM-ARC-9014')}
            />

            {/* 8. Evaluated Sessions Score Ledger */}
            <PerformanceScoreLedgerTable
              sessions={sessions}
              onViewDossier={(id) => onNavigateToResult && onNavigateToResult(id)}
            />

            {/* 9. Transparent Scoring Governance & Responsible AI */}
            <PerformanceGovernanceBanner />
          </div>
        </div>
      </div>

      {/* Live Simulation Practice Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole="Distributed Throttling & Circuit Breakers"
        />
      )}
    </div>
  );
};

export default PerformanceDashboardPage;
