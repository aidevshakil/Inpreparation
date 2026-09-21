import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { PresentationAnalyticsHeader } from '../components/presentation-analytics/PresentationAnalyticsHeader';
import { PresentationKpiCards } from '../components/presentation-analytics/PresentationKpiCards';
import { PresentationTrajectoryCard } from '../components/presentation-analytics/PresentationTrajectoryCard';
import { OpticalFramingDossierCard } from '../components/presentation-analytics/OpticalFramingDossierCard';
import { ObservableSignalsGrid } from '../components/presentation-analytics/ObservableSignalsGrid';
import { DiagnosticCrossReference } from '../components/presentation-analytics/DiagnosticCrossReference';
import { SessionQuestionOpticalLedger } from '../components/presentation-analytics/SessionQuestionOpticalLedger';
import { StudioRecommendationsCards } from '../components/presentation-analytics/StudioRecommendationsCards';
import { PresentationPolicyFooter } from '../components/presentation-analytics/PresentationPolicyFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';

interface PresentationAnalyticsPageProps {
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
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToHistory?: () => void;
}

export const PresentationAnalyticsPage: React.FC<PresentationAnalyticsPageProps> = ({
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
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToHistory,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('presentation-analytics');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [drillRole, setDrillRole] = useState('5-Min Optical Framing & Posture Calibration Drill');
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
    else if (key === 'presentation-analytics') setActiveNav('presentation-analytics');
    else if (key === 'history' && onNavigateToHistory) onNavigateToHistory();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  const handleExportDiagnostics = () => {
    showToast('Exporting Optical Diagnostics Audit Package (CSV & Frame JSON)...');
  };

  const handleCalibrateCamera = () => {
    setDrillRole('Camera Setup & Physical Studio Calibration');
    setSimulationModalOpen(true);
  };

  const handleLaunchFramingCheck = () => {
    setDrillRole('5-Min Optical Framing & Posture Calibration Drill');
    setSimulationModalOpen(true);
  };

  const handleGenerateChecklist = () => {
    showToast('Presentation Checklist generated: Stand elevated 2.5", key light aligned at 5500K.');
  };

  const handlePurgeBuffers = () => {
    showToast('Optical video frame buffers permanently purged from client memory.');
  };

  const handleTabSelect = (tabKey: string) => {
    if (tabKey === 'dashboard') onNavigateToDashboard?.();
    else if (tabKey === 'performance' || tabKey === 'score' || tabKey === 'question') onNavigateToPerformance?.();
    else if (tabKey === 'skill') onNavigateToSkillAnalytics?.();
    else if (tabKey === 'communication') onNavigateToCommunicationAnalytics?.();
    else if (tabKey === 'speech') onNavigateToSpeechAnalytics?.();
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
            {/* Header with breadcrumbs, sub-navigation tabs & controls */}
            <PresentationAnalyticsHeader
              onExportDiagnostics={handleExportDiagnostics}
              onCalibrateCamera={handleCalibrateCamera}
              onTabSelect={handleTabSelect}
            />

            {/* Top 5 KPI Metrics */}
            <PresentationKpiCards />

            {/* 2-Column Responsive Layout: Presentation Trajectory (65%) + Optical Framing Dossier (35%) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.85fr) minmax(320px, 1.05fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Trajectory & Trend */}
              <div>
                <PresentationTrajectoryCard />
              </div>

              {/* Right Column: Optical Framing Dossier */}
              <div>
                <OpticalFramingDossierCard
                  onLaunchFramingCheck={handleLaunchFramingCheck}
                  onGenerateChecklist={handleGenerateChecklist}
                />
              </div>
            </div>

            {/* Observable Presentation Signal Breakdown (4 Cards) */}
            <ObservableSignalsGrid />

            {/* Diagnostic Signal Cross-Reference */}
            <DiagnosticCrossReference
              onNavigateCommunication={onNavigateToCommunicationAnalytics}
              onNavigateSpeech={onNavigateToSpeechAnalytics}
            />

            {/* Session Question-Level Optical Ledger Table */}
            <SessionQuestionOpticalLedger />

            {/* Physical Studio Recommendations */}
            <StudioRecommendationsCards />

            {/* Policy & Privacy Footer */}
            <PresentationPolicyFooter onPurgeBuffers={handlePurgeBuffers} />
          </div>
        </div>
      </div>

      {/* Camera / Framing Simulation Modal */}
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

export default PresentationAnalyticsPage;
