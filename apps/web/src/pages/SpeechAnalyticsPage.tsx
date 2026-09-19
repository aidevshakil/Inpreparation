import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { SpeechAnalyticsHeader } from '../components/speech-analytics/SpeechAnalyticsHeader';
import { SpeechAnalyticsKpiCards } from '../components/speech-analytics/SpeechAnalyticsKpiCards';
import { SpeechCadenceTrajectoryCard } from '../components/speech-analytics/SpeechCadenceTrajectoryCard';
import { SpeechDossierSidebar } from '../components/speech-analytics/SpeechDossierSidebar';
import { SpeechDeepDiveCards } from '../components/speech-analytics/SpeechDeepDiveCards';
import { SpeechSegmentedTelemetry } from '../components/speech-analytics/SpeechSegmentedTelemetry';
import { SpeechQuestionLedgerTable } from '../components/speech-analytics/SpeechQuestionLedgerTable';
import { SpeechPolicyFooter } from '../components/speech-analytics/SpeechPolicyFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';

interface SpeechAnalyticsPageProps {
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
  onNavigateToPresentationAnalytics?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToResult?: (sessionId?: string) => void;
  onNavigateToHistory?: () => void;
}

export const SpeechAnalyticsPage: React.FC<SpeechAnalyticsPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToPerformance,
  onNavigateToSkillAnalytics,
  onNavigateToCommunicationAnalytics,
  onNavigateToPresentationAnalytics,
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToHistory,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('speech-analytics');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [drillRole, setDrillRole] = useState('Speech Cadence Practice • Technical Concurrency Pacing');
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
    else if (key === 'speech-analytics') setActiveNav('speech-analytics');
    else if (key === 'history' && onNavigateToHistory) onNavigateToHistory();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  const handleExportLog = () => {
    showToast('Exporting 48kHz Acoustic Telemetry CSV and Session Metadata...');
  };

  const handlePurgeBuffers = () => {
    showToast('Acoustic Audio Buffers permanently purged with zero-knowledge wipe.');
  };

  const handlePracticeCadence = () => {
    setDrillRole('Speech Cadence Practice • Technical Concurrency Pacing');
    setSimulationModalOpen(true);
  };

  const handleLaunchTargetRangeDrill = () => {
    setDrillRole('10-Min Target Range Drill (130-160 WPM Calibration)');
    setSimulationModalOpen(true);
  };

  const handleTabSelect = (tabKey: string) => {
    if (tabKey === 'dashboard') onNavigateToDashboard?.();
    else if (tabKey === 'performance' || tabKey === 'score' || tabKey === 'overall') onNavigateToPerformance?.();
    else if (tabKey === 'skill') onNavigateToSkillAnalytics?.();
    else if (tabKey === 'communication') onNavigateToCommunicationAnalytics?.();
    else if (tabKey === 'presentation') onNavigateToPresentationAnalytics?.();
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
            {/* Header with breadcrumbs, sub-navigation tabs & controls */}
            <SpeechAnalyticsHeader
              onExportLog={handleExportLog}
              onPracticeCadence={handlePracticeCadence}
              onTabSelect={handleTabSelect}
            />

            {/* Top 4 KPI Metrics */}
            <SpeechAnalyticsKpiCards />

            {/* 2-Column Responsive Layout: Speaking Rate Trajectory (65%) + AI Speech Dossier (35%) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.85fr) minmax(320px, 1.05fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Speaking Rate Cadence & Trajectory */}
              <div>
                <SpeechCadenceTrajectoryCard />
              </div>

              {/* Right Column: AI Speech Dossier Sidebar */}
              <div>
                <SpeechDossierSidebar
                  onGenerateDrill={handlePracticeCadence}
                  onLaunchTargetRangeDrill={handleLaunchTargetRangeDrill}
                  onNavigateToPresentation={onNavigateToPresentationAnalytics}
                />
              </div>
            </div>

            {/* 3 Columns: Pause Analysis, Filler Words, Lexical Idioms */}
            <SpeechDeepDiveCards />

            {/* Segmented Speech Telemetry */}
            <SpeechSegmentedTelemetry />

            {/* Recent Spoken Question Telemetry Ledger */}
            <SpeechQuestionLedgerTable />

            {/* Acoustic Telemetry Boundary & Responsible AI Policy */}
            <SpeechPolicyFooter onPurgeBuffers={handlePurgeBuffers} />
          </div>
        </div>
      </div>

      {/* Practice Drill Modal */}
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

export default SpeechAnalyticsPage;
