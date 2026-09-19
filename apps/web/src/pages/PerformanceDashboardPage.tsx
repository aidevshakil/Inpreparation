import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { PerformanceFilterBar } from '../components/performance-dashboard/PerformanceFilterBar';
import { PerformanceKpiCards } from '../components/performance-dashboard/PerformanceKpiCards';
import { PerformanceTrendVelocityCard } from '../components/performance-dashboard/PerformanceTrendVelocityCard';
import { PerformanceHistogramRubrics } from '../components/performance-dashboard/PerformanceHistogramRubrics';
import { PerformanceCategoryTierCards } from '../components/performance-dashboard/PerformanceCategoryTierCards';
import { PerformanceActionShowcaseCards } from '../components/performance-dashboard/PerformanceActionShowcaseCards';
import { PerformanceScoreLedgerTable } from '../components/performance-dashboard/PerformanceScoreLedgerTable';
import { PerformanceGovernanceBanner } from '../components/performance-dashboard/PerformanceGovernanceBanner';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';

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
      {/* Top Navbar */}
      <DashboardNavbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 65px)', overflow: 'hidden' }}>
        {/* Left Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={user?.creditsRemaining ?? 840}
          totalCredits={user?.totalCredits ?? 1000}
        />

        {/* Main Content Body */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              padding: '24px 32px 64px 32px',
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Top Workspace Indicator with purple glowing tab & switcher */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: '#64748b' }}>
                <span>Candidate Studio</span>
                <span>›</span>
                <span>Preparation</span>
                <span>›</span>
                <span
                  style={{
                    color: '#c084fc',
                    fontWeight: 600,
                    borderBottom: '2px solid #a855f7',
                    paddingBottom: '2px',
                  }}
                >
                  Active Module
                </span>
              </div>

              {onNavigateToSkillAnalytics && (
                <button
                  onClick={onNavigateToSkillAnalytics}
                  style={{
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    color: '#a5b4fc',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
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
            <PerformanceKpiCards />

            {/* 3. Score Trend & Velocity with SVG Line Chart and Window Telemetry */}
            <PerformanceTrendVelocityCard />

            {/* 4. Score Distribution Histogram & 5 Core Evaluation Rubrics */}
            <PerformanceHistogramRubrics
              onDrillVector={() => setSimulationModalOpen(true)}
            />

            {/* 5. Scores by Category Track & Scores by Difficulty Tier */}
            <PerformanceCategoryTierCards />

            {/* 6. Where to Focus Next & Personal Best Showcase */}
            <PerformanceActionShowcaseCards
              onLaunchSimulation={() => setSimulationModalOpen(true)}
              onGenerateImprovementPlan={onNavigateToAi}
              onViewBestDossier={() => onNavigateToResult && onNavigateToResult('SIM-ARC-9014')}
            />

            {/* 7. Evaluated Sessions Score Ledger */}
            <PerformanceScoreLedgerTable
              onViewDossier={(id) => onNavigateToResult && onNavigateToResult(id)}
            />

            {/* 8. Transparent Scoring Governance & Responsible AI */}
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
