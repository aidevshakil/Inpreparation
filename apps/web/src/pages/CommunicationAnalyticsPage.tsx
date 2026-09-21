import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { CommunicationAnalyticsHeader } from '../components/communication-analytics/CommunicationAnalyticsHeader';
import { CommunicationKpiCards } from '../components/communication-analytics/CommunicationKpiCards';
import { CommunicationTrendCard } from '../components/communication-analytics/CommunicationTrendCard';
import { CommunicationDimensionsCard } from '../components/communication-analytics/CommunicationDimensionsCard';
import { CommunicationTrackAndAnatomy } from '../components/communication-analytics/CommunicationTrackAndAnatomy';
import { CommunicationQuestionResponsesTable } from '../components/communication-analytics/CommunicationQuestionResponsesTable';
import { CommunicationSynthesisSidebar } from '../components/communication-analytics/CommunicationSynthesisSidebar';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { useAuth } from '../context/AuthContext';

interface CommunicationAnalyticsPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToPerformance?: () => void;
  onNavigateToSkillAnalytics?: () => void;
  onNavigateToSpeechAnalytics?: () => void;
  onNavigateToPresentationAnalytics?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToResult?: (sessionId?: string) => void;
  onNavigateToHistory?: () => void;
}

export const CommunicationAnalyticsPage: React.FC<CommunicationAnalyticsPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToPerformance,
  onNavigateToSkillAnalytics,
  onNavigateToSpeechAnalytics,
  onNavigateToPresentationAnalytics,
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToHistory,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('communication-analytics');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [drillRole, setDrillRole] = useState('Communication Practice • Executive BLUF Framing');
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
    else if (key === 'skill-analytics' && onNavigateToSkillAnalytics) onNavigateToSkillAnalytics();
    else if (key === 'speech-analytics' && onNavigateToSpeechAnalytics) onNavigateToSpeechAnalytics();
    else if (key === 'presentation-analytics' && onNavigateToPresentationAnalytics) onNavigateToPresentationAnalytics();
    else if (key === 'history' && onNavigateToHistory) onNavigateToHistory();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  const handleExportPdf = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 3000);
  };

  const handlePracticeCommunication = () => {
    setDrillRole('Communication Practice • Executive BLUF Framing');
    setSimulationModalOpen(true);
  };

  const handleLaunchFramingDrill = () => {
    setDrillRole('10-Min Response Framing Drill (Minto Pyramid Principle)');
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
          <span>Exporting Communication Analytics Dossier (PDF)...</span>
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
            {/* Header with breadcrumbs & controls */}
            <CommunicationAnalyticsHeader
              onExportPdf={handleExportPdf}
              onPracticeCommunication={handlePracticeCommunication}
            />

            {/* Top 4 KPI Metrics */}
            <CommunicationKpiCards />

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
                {/* 1. Score Trend & Cadence */}
                <CommunicationTrendCard />

                {/* 2. Evaluated Communication Dimensions */}
                <CommunicationDimensionsCard />

                {/* 3. Communication by Track & Difficulty + Answer Structural Anatomy */}
                <CommunicationTrackAndAnatomy />

                {/* 4. Recent Evaluated Question Responses */}
                <CommunicationQuestionResponsesTable />
              </div>

              {/* Right Column: AI Synthesis & Action Dossier Sidebar */}
              <div>
                <CommunicationSynthesisSidebar
                  onGeneratePlan={onNavigateToAi}
                  onLaunchFramingDrill={handleLaunchFramingDrill}
                  onNavigateSpeech={onNavigateToSpeechAnalytics}
                  onNavigatePresentation={onNavigateToPresentationAnalytics}
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
          initialRole={drillRole}
        />
      )}
    </div>
  );
};

export default CommunicationAnalyticsPage;
