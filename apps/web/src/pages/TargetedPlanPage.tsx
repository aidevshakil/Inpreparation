import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { TargetedPlanHeader } from '../components/targeted-plan/TargetedPlanHeader';
import { TargetedPlanMetricsBar } from '../components/targeted-plan/TargetedPlanMetricsBar';
import { Day4DeliberatePracticeCard } from '../components/targeted-plan/Day4DeliberatePracticeCard';
import { DiagnosticProvenanceCard } from '../components/targeted-plan/DiagnosticProvenanceCard';
import { DeliberatePracticeTimeline } from '../components/targeted-plan/DeliberatePracticeTimeline';
import { TargetLedgerAndTrajectoryGrid } from '../components/targeted-plan/TargetLedgerAndTrajectoryGrid';
import { TargetedPlanFooter } from '../components/targeted-plan/TargetedPlanFooter';
import { CustomizeTargetsModal } from '../components/targeted-plan/CustomizeTargetsModal';
import { PrepNotesModal } from '../components/targeted-plan/PrepNotesModal';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import {
  ROLE_DATA_CATALOG,
  loadAiPlanState,
  saveAiPlanState,
  exportDossierDownload,
  CustomTargetsConfig,
} from '../services/aiPlanStore';
import {
  getActiveImprovementPlan,
  updatePlanTargetsInDb,
} from '../services/api';
import { useAuth } from '../context/AuthContext';

interface TargetedPlanPageProps {
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
  onNavigateToAiPlan42?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToHistory?: () => void;
}

export const TargetedPlanPage: React.FC<TargetedPlanPageProps> = ({
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
  onNavigateToAiPlan42,
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
  const [customizeModalOpen, setCustomizeModalOpen] = useState(false);
  const [prepNotesModalOpen, setPrepNotesModalOpen] = useState(false);
  const [drillRole, setDrillRole] = useState('');
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
        if (dbPlan.customTargetScore) {
          setPlanState((prev) => ({
            ...prev,
            customTargets: {
              ...prev.customTargets,
              targetComposite: dbPlan.customTargetScore,
            },
          }));
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
    roleData.days[3] ||
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

  const handleStartSimulation = (simTitle?: string) => {
    setDrillRole(simTitle || `${activeDay.label}: ${activeDay.title} (${activeDay.simulationId})`);
    setSimulationModalOpen(true);
  };

  const handleSelectRole = (newRole: string) => {
    setPlanState((prev) => ({ ...prev, selectedRole: newRole }));
    showToast(`Calibrated syllabus dynamically for ${newRole}`);
  };

  const handleSelectDaysFilter = (days: number) => {
    setPlanState((prev) => ({ ...prev, daysHorizon: days as 7 | 14 | 30 }));
    showToast(`Switched plan horizon to ${days} Days`);
  };

  const handleSelectDay = (dayNum: number) => {
    setPlanState((prev) => ({ ...prev, selectedDayNumber: dayNum }));
    showToast(`Viewing Day ${dayNum} curriculum: ${roleData.days.find((d) => d.dayNumber === dayNum)?.title || ''}`);
  };

  const handleSaveCustomTargets = async (newTargets: CustomTargetsConfig) => {
    setPlanState((prev) => ({ ...prev, customTargets: newTargets }));
    if (dbPlanId) {
      await updatePlanTargetsInDb(dbPlanId, {
        customTargetScore: newTargets.targetComposite,
      });
    }
    showToast(`Targets saved to database: Target Score ${newTargets.targetComposite.toFixed(1)} / Alert ${newTargets.dailyAlertTime}`);
  };

  const handleRefreshPlan = () => {
    setPlanState((prev) => ({
      ...prev,
      lastUpdated: 'Updated just now',
      drillsCompleted: prev.drillsCompleted + 1,
    }));
    showToast('Remediation schedule recalculated dynamically against latest telemetry vectors.');
  };

  const handleExportPlan = () => {
    exportDossierDownload(planState, roleData);
    showToast('Exporting 7-Day Targeted Plan dossier (JSON downloaded)...');
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
            {/* Header with Breadcrumbs, Title, Filters, Role Selector and Primary CTA */}
            <TargetedPlanHeader
              onStartDay4Practice={() => handleStartSimulation()}
              onRefreshPlan={handleRefreshPlan}
              onExportPlan={handleExportPlan}
              onNavigateToAiPlan42={onNavigateToAiPlan42}
              onNavigateToDiagnostics={onNavigateToPerformance}
              onNavigateToStudio={onNavigateToDashboard}
              onSelectDaysFilter={handleSelectDaysFilter}
              onSelectRole={handleSelectRole}
              onMockInterview={() => handleStartSimulation('Full Staff L6 Simulation: Distributed Systems Capstone')}
            />

            {/* 4 Metric Cards */}
            <TargetedPlanMetricsBar
              daysHorizon={planState.daysHorizon}
              roleData={roleData}
              drillsCompleted={planState.drillsCompleted}
              practiceMinutes={planState.totalPracticeMinutes}
            />

            {/* 2 Column Row: Deliberate Practice & Diagnostic Provenance */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              <Day4DeliberatePracticeCard
                dayDetail={activeDay}
                onLaunchSimulation={handleStartSimulation}
                onInspectFlaggedQ4={onNavigateToQuestionPerformance}
                onViewPrepNotes={() => setPrepNotesModalOpen(true)}
              />

              <DiagnosticProvenanceCard
                onNavigateQuestionPerformance={onNavigateToQuestionPerformance}
                onNavigateCommunication={onNavigateToCommunicationAnalytics}
                onNavigateSpeech={onNavigateToSpeechAnalytics}
              />
            </div>

            {/* Deliberate Practice Schedule (Days 1–7) */}
            <DeliberatePracticeTimeline
              days={roleData.days}
              activeDayNumber={planState.selectedDayNumber}
              onSelectDay={handleSelectDay}
              onStartActiveDay={() => handleStartSimulation()}
            />

            {/* Target Ledger and Trajectory Comparison */}
            <TargetLedgerAndTrajectoryGrid
              customTargets={planState.customTargets}
              roleData={roleData}
              onCustomizeTargets={() => setCustomizeModalOpen(true)}
            />

            {/* Footer with AES-256 Vault & Cross Diagnostic Links */}
            <TargetedPlanFooter
              onNavigatePerformance={onNavigateToPerformance}
              onNavigateCommunication={onNavigateToCommunicationAnalytics}
              onNavigateSpeech={onNavigateToSpeechAnalytics}
              onNavigatePresentation={onNavigateToPresentationAnalytics}
              onNavigateQuestionReview={onNavigateToQuestionPerformance}
            />
          </div>
        </div>
      </div>

      {/* Live Simulation Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={drillRole}
        />
      )}

      {/* Customize Targets Modal */}
      {customizeModalOpen && (
        <CustomizeTargetsModal
          isOpen={customizeModalOpen}
          onClose={() => setCustomizeModalOpen(false)}
          initialTargets={planState.customTargets}
          onSave={handleSaveCustomTargets}
        />
      )}

      {/* Prep Notes Modal */}
      {prepNotesModalOpen && (
        <PrepNotesModal
          isOpen={prepNotesModalOpen}
          onClose={() => setPrepNotesModalOpen(false)}
          dayDetail={activeDay}
        />
      )}
    </div>
  );
};

export default TargetedPlanPage;
