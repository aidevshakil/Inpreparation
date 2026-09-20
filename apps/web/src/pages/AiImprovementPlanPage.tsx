import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { AiImprovementPlanHeader } from '../components/ai-improvement-plan/AiImprovementPlanHeader';
import { AiPlanOverviewCard } from '../components/ai-improvement-plan/AiPlanOverviewCard';
import { PriorityPracticeVectors } from '../components/ai-improvement-plan/PriorityPracticeVectors';
import { DayScheduleAndProgression } from '../components/ai-improvement-plan/DayScheduleAndProgression';
import { MultiDimensionalPracticeModules } from '../components/ai-improvement-plan/MultiDimensionalPracticeModules';
import { AuditableDataSourcesFooter } from '../components/ai-improvement-plan/AuditableDataSourcesFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import {
  ROLE_DATA_CATALOG,
  loadAiPlanState,
  saveAiPlanState,
  exportDossierDownload,
  PracticeVector,
} from '../services/aiPlanStore';
import { getActiveImprovementPlan, updatePlanRoleInDb } from '../services/api';
import { useAuth } from '../context/AuthContext';

interface AiImprovementPlanPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToPerformance?: () => void;
  onNavigateToSkillAnalytics?: () => void;
  onNavigateToCommunicationAnalytics?: () => void;
  onNavigateToSpeechAnalytics?: () => void;
  onNavigateToPresentationAnalytics?: () => void;
  onNavigateToQuestionPerformance?: () => void;
  onNavigateToTargetedPlan?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToHistory?: () => void;
}

export const AiImprovementPlanPage: React.FC<AiImprovementPlanPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToPerformance,
  onNavigateToSkillAnalytics,
  onNavigateToCommunicationAnalytics,
  onNavigateToSpeechAnalytics,
  onNavigateToPresentationAnalytics,
  onNavigateToQuestionPerformance,
  onNavigateToTargetedPlan,
  onNavigateToAssessment,
  onNavigateToHistory,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('improvement');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Dynamic Plan State
  const [planState, setPlanState] = useState(() => loadAiPlanState());
  const [dbPlanId, setDbPlanId] = useState<string | null>(null);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [drillRole, setDrillRole] = useState('Staff L6 Remediation: Distributed Consensus & Clock Skew Under GC Pauses');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    saveAiPlanState(planState);
  }, [planState]);

  // Load Real Data from PostgreSQL Database
  useEffect(() => {
    let isMounted = true;
    getActiveImprovementPlan(user?.id).then((dbPlan) => {
      if (dbPlan && isMounted) {
        setDbPlanId(dbPlan.id);
        if (dbPlan.targetRole && ROLE_DATA_CATALOG[dbPlan.targetRole]) {
          setPlanState((prev) => ({ ...prev, selectedRole: dbPlan.targetRole }));
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [user?.id]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const roleData =
    ROLE_DATA_CATALOG[planState.selectedRole] ||
    ROLE_DATA_CATALOG['Staff Backend & Distributed Systems Architecture'];

  const activeDay =
    roleData.days.find((d) => d.dayNumber === planState.selectedDayNumber) ||
    roleData.days[4] ||
    roleData.days[0];

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'performance' && onNavigateToPerformance) onNavigateToPerformance();
    else if (key === 'skill-analytics' && onNavigateToSkillAnalytics) onNavigateToSkillAnalytics();
    else if (key === 'communication-analytics' && onNavigateToCommunicationAnalytics) onNavigateToCommunicationAnalytics();
    else if (key === 'speech-analytics' && onNavigateToSpeechAnalytics) onNavigateToSpeechAnalytics();
    else if (key === 'presentation-analytics' && onNavigateToPresentationAnalytics) onNavigateToPresentationAnalytics();
    else if (key === 'question-performance' && onNavigateToQuestionPerformance) onNavigateToQuestionPerformance();
    else if (key === 'improvement') setActiveNav('improvement');
    else if (key === 'history' && onNavigateToHistory) onNavigateToHistory();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  const handleStartPractice = (practiceTitle?: string) => {
    setDrillRole(
      practiceTitle || `${activeDay.label}: ${activeDay.title} (${activeDay.simulationId})`
    );
    setSimulationModalOpen(true);
  };

  const handleLaunchVector = (vec: PracticeVector) => {
    setDrillRole(`${vec.tag}: ${vec.title} (${vec.recommendedDuration})`);
    setSimulationModalOpen(true);
  };

  const handleLaunchDrill = (drillPromptOrTitle: string) => {
    setDrillRole(drillPromptOrTitle);
    setSimulationModalOpen(true);
  };

  const handleRoleSelect = (role: string) => {
    setPlanState((prev) => ({ ...prev, selectedRole: role }));
    if (dbPlanId) {
      updatePlanRoleInDb(dbPlanId, role);
    }
    showToast(`Calibrating improvement trajectory for ${role}...`);
  };

  const handleDaysSelect = (days: number) => {
    setPlanState((prev) => ({ ...prev, daysHorizon: days as 7 | 14 | 30 }));
    showToast(`Switched plan horizon to ${days} Days`);
  };

  const handleDaySelect = (dayNumber: number) => {
    setPlanState((prev) => ({ ...prev, selectedDayNumber: dayNumber }));
    showToast(`Day ${dayNumber} focus loaded: ${roleData.days.find((d) => d.dayNumber === dayNumber)?.title || ''}`);
  };

  const handleFacetChange = (facet: 'technical' | 'communication' | 'speech') => {
    setPlanState((prev) => ({ ...prev, activeFacet: facet }));
  };

  const handleRefreshPlan = () => {
    setPlanState((prev) => ({
      ...prev,
      lastUpdated: 'Updated just now',
      drillsCompleted: prev.drillsCompleted + 1,
      totalPracticeMinutes: prev.totalPracticeMinutes + 15,
    }));
    showToast('AI Remediation Plan refreshed dynamically against latest session telemetry.');
  };

  const handleExportDossier = () => {
    exportDossierDownload(planState, roleData);
    showToast('Exporting AI Improvement Plan Dossier (JSON downloaded)...');
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
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '24px',
            zIndex: 150,
            backgroundColor: '#2e1065',
            border: '1px solid #a855f7',
            borderRadius: '12px',
            padding: '14px 20px',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            fontSize: '0.82rem',
            fontWeight: 600,
          }}
        >
          <span>{toastMessage}</span>
        </div>
      )}

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
            {/* Header with Breadcrumbs, Protocol Banner, Role Selector & Quick Actions */}
            <AiImprovementPlanHeader
              selectedRole={planState.selectedRole}
              activeDays={planState.daysHorizon}
              onRefreshPlan={handleRefreshPlan}
              onExportDossier={handleExportDossier}
              onMockInterview={() => handleStartPractice('Full Staff L6 Simulation: Distributed Systems Capstone')}
              onRoleSelect={handleRoleSelect}
              onSelectDaysFilter={handleDaysSelect}
            />

            {/* Active Targeted Remediation Plan & Calibrated Profile Matrix */}
            <AiPlanOverviewCard
              roleData={roleData}
              daysHorizon={planState.daysHorizon}
              drillsCompleted={planState.drillsCompleted}
              practiceMinutes={planState.totalPracticeMinutes}
              lastUpdated={planState.lastUpdated}
              onEditGoals={onNavigateToTargetedPlan || (() => showToast('Opening Target Goals (#43)...'))}
            />

            {/* Priority Practice Vectors (Dynamic by Role) */}
            <PriorityPracticeVectors
              vectors={roleData.vectors}
              onLaunchVector={handleLaunchVector}
              onPracticeVector01={() => handleLaunchVector(roleData.vectors[0])}
              onPracticeVector02={() => handleLaunchVector(roleData.vectors[1])}
              onCalibrateFraming={() => handleLaunchVector(roleData.vectors[2])}
            />

            {/* Scheduled Active & Adaptive 7-Day Progression */}
            <DayScheduleAndProgression
              days={roleData.days}
              activeDay={activeDay}
              onSelectDay={handleDaySelect}
              onStartPractice={handleStartPractice}
              onViewBriefing={() => showToast(`Opening Session Briefing for ${activeDay.label} (#42P)...`)}
            />

            {/* Multi-Dimensional Practice Modules */}
            <MultiDimensionalPracticeModules
              modules={roleData.modules}
              activeFacet={planState.activeFacet}
              onFacetChange={handleFacetChange}
              onLaunchDrill={handleLaunchDrill}
            />

            {/* Auditable Data Sources (Traceable Diagnostic Network) */}
            <AuditableDataSourcesFooter
              onNavigateQuestionPerformance={onNavigateToQuestionPerformance}
              onNavigatePresentation={onNavigateToPresentationAnalytics}
              onNavigateSpeech={onNavigateToSpeechAnalytics}
              onNavigateCommunication={onNavigateToCommunicationAnalytics}
              onNavigateSkill={onNavigateToSkillAnalytics}
              onNavigateScore={onNavigateToPerformance}
              onNavigateHistory={onNavigateToHistory}
            />
          </div>
        </div>
      </div>

      {/* Live Simulation Modal for Drill Execution */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={drillRole}
        />
      )}
    </div>
  );
};

export default AiImprovementPlanPage;
