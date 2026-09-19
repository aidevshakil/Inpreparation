import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { SkillAnalyticsHeader } from '../components/skill-analytics/SkillAnalyticsHeader';
import { SkillAnalyticsFilterBar } from '../components/skill-analytics/SkillAnalyticsFilterBar';
import { SkillAnalyticsKpiCards } from '../components/skill-analytics/SkillAnalyticsKpiCards';
import { SkillCoreCompetencyList } from '../components/skill-analytics/SkillCoreCompetencyList';
import { SkillCategoryMatrix } from '../components/skill-analytics/SkillCategoryMatrix';
import { SkillEvaluatedLedgerTable } from '../components/skill-analytics/SkillEvaluatedLedgerTable';
import { SkillDossierSidebar } from '../components/skill-analytics/SkillDossierSidebar';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';

interface SkillAnalyticsPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToPerformance?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToResult?: (sessionId?: string) => void;
  onNavigateToHistory?: () => void;
}

export const SkillAnalyticsPage: React.FC<SkillAnalyticsPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToPerformance,
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToResult,
  onNavigateToHistory,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('performance');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMode, setActiveMode] = useState<'analysis' | 'rubric'>('analysis');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompetencyId, setSelectedCompetencyId] = useState<string>('dist-backpressure');
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [drillTarget, setDrillTarget] = useState('Distributed Backpressure & Throttling');
  const [exportNotice, setExportNotice] = useState(false);

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'performance' && onNavigateToPerformance) onNavigateToPerformance();
    else if (key === 'history' && onNavigateToHistory) onNavigateToHistory();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  const handleLaunchDrill = (competencyTitle: string) => {
    setDrillTarget(competencyTitle);
    setSimulationModalOpen(true);
  };

  const handleExportSynthesis = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 3000);
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
      {/* Toast Notification */}
      {exportNotice && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '24px',
            zIndex: 150,
            backgroundColor: '#1e1b4b',
            border: '1px solid #6366f1',
            borderRadius: '12px',
            padding: '14px 20px',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            fontSize: '0.82rem',
            fontWeight: 600,
          }}
        >
          <span>Compiling Skill Analytics Telemetry Synthesis...</span>
        </div>
      )}

      {/* Top Navbar */}
      <DashboardNavbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 65px)', overflow: 'hidden' }}>
        {/* Sidebar */}
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
            {/* Header with breadcrumb, title & actions */}
            <SkillAnalyticsHeader
              activeMode={activeMode}
              onModeChange={setActiveMode}
              onExportSynthesis={handleExportSynthesis}
            />

            {/* Filter Bar: Window, Category dropdown, Target dropdown, Search, Refresh */}
            <SkillAnalyticsFilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onRefresh={() => setSearchQuery('')}
            />

            {/* Top 4 KPI Metrics */}
            <SkillAnalyticsKpiCards />

            {/* 2-Column Responsive Layout: Left 65% + Right 35% */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.85fr) minmax(320px, 1.05fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column */}
              <div>
                {/* 1. Core Competency Performance */}
                <SkillCoreCompetencyList
                  selectedId={selectedCompetencyId}
                  onSelectCompetency={setSelectedCompetencyId}
                  onLaunchDrill={handleLaunchDrill}
                />

                {/* 2. Category Competency Matrix */}
                <SkillCategoryMatrix />

                {/* 3. Evaluated Skills Ledger */}
                <SkillEvaluatedLedgerTable
                  onInspectDossier={() => onNavigateToResult && onNavigateToResult('SIM-PY-8821')}
                />
              </div>

              {/* Right Column: Selected Dossier Sidebar */}
              <div>
                <SkillDossierSidebar
                  onGeneratePlan={onNavigateToAi}
                  onLaunchMicroDrill={() => handleLaunchDrill('Distributed Backpressure & Throttling (Micro-Drill)')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Drill Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={drillTarget}
        />
      )}
    </div>
  );
};

export default SkillAnalyticsPage;
