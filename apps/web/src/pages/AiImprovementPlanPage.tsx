import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { AiImprovementPlanHeader } from '../components/ai-improvement-plan/AiImprovementPlanHeader';
import { AiPlanOverviewCard } from '../components/ai-improvement-plan/AiPlanOverviewCard';
import { PriorityPracticeVectors } from '../components/ai-improvement-plan/PriorityPracticeVectors';
import { DayScheduleAndProgression } from '../components/ai-improvement-plan/DayScheduleAndProgression';
import { MultiDimensionalPracticeModules } from '../components/ai-improvement-plan/MultiDimensionalPracticeModules';
import { AuditableDataSourcesFooter } from '../components/ai-improvement-plan/AuditableDataSourcesFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
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
  onNavigateToAssessment,
  onNavigateToHistory,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('improvement');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [drillRole, setDrillRole] = useState('Staff L6 Remediation: Distributed Consensus & Clock Skew Under GC Pauses');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

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

  const handleStartDay5 = () => {
    setDrillRole('Day 5 Practice: Distributed Consensus & Clock Skew Under GC Pauses (5 Questions)');
    setSimulationModalOpen(true);
  };

  const handleLaunchPracticeVector01 = () => {
    setDrillRole('Vector 01 Drill: Distributed Backpressure & Token-Bucket Clock Drift (15 Mins)');
    setSimulationModalOpen(true);
  };

  const handleLaunchPracticeVector02 = () => {
    setDrillRole('Vector 02 Drill: Exhaustive Completeness & Failure Trade-off Proofs (20 Mins)');
    setSimulationModalOpen(true);
  };

  const handleCalibrateFraming = () => {
    setDrillRole('Vector 03 Drill: Camera Optical Framing Consistency & Whiteboard Alignment');
    setSimulationModalOpen(true);
  };

  const handleLaunchDrill = (drillTitle: string) => {
    setDrillRole(`Targeted Drill: ${drillTitle}`);
    setSimulationModalOpen(true);
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
              onRefreshPlan={() => showToast('AI Remediation Plan refreshed against latest session telemetry.')}
              onExportDossier={() => showToast('Exporting AI Improvement Plan Dossier (PDF & JSON)...')}
              onMockInterview={() => {
                setDrillRole('Full Staff L6 Simulation: Distributed Systems Capstone');
                setSimulationModalOpen(true);
              }}
              onRoleSelect={(role) => showToast(`Calibrating improvement trajectory for ${role}...`)}
            />

            {/* Active 7-Day Remediation Plan & Calibrated Profile Matrix */}
            <AiPlanOverviewCard
              onEditGoals={() => showToast('Opening Target Goals (#43) Configuration Matrix...')}
            />

            {/* Priority Practice Vectors (3 Cards) */}
            <PriorityPracticeVectors
              onPracticeVector01={handleLaunchPracticeVector01}
              onPracticeVector02={handleLaunchPracticeVector02}
              onCalibrateFraming={handleCalibrateFraming}
            />

            {/* Scheduled Today & Adaptive 7-Day Progression */}
            <DayScheduleAndProgression
              onStartDay5={handleStartDay5}
              onViewBriefing={() => showToast('Opening Day 5 Session Briefing Dossier (#42P)...')}
            />

            {/* Multi-Dimensional Practice Modules */}
            <MultiDimensionalPracticeModules
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
