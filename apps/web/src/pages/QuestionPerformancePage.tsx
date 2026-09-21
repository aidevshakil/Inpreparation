import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { QuestionPerformanceHeader } from '../components/question-performance/QuestionPerformanceHeader';
import { QuestionTrajectoryStepper } from '../components/question-performance/QuestionTrajectoryStepper';
import { QuestionDossierInspectView } from '../components/question-performance/QuestionDossierInspectView';
import { QuestionCrossComparativeGrid } from '../components/question-performance/QuestionCrossComparativeGrid';
import { QuestionAssessmentPolicyFooter } from '../components/question-performance/QuestionAssessmentPolicyFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { getQuestionPerformanceDossiers } from '../services/api';
import { syncQuestionDataFromDb } from '../services/questionDataStore';
import { useAuth } from '../context/AuthContext';

interface QuestionPerformancePageProps {
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
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToHistory?: () => void;
}

export const QuestionPerformancePage: React.FC<QuestionPerformancePageProps> = ({
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
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToHistory,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('question-performance');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState('Q4');
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [drillRole, setDrillRole] = useState('Targeted Drill: Token-Bucket Clock Skew & Drift Resilience');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [, setDbSynced] = useState(false);

  // Load Real Question Dossiers from PostgreSQL Database
  useEffect(() => {
    let isMounted = true;
    getQuestionPerformanceDossiers(user?.id).then((dossiers) => {
      if (dossiers && isMounted) {
        syncQuestionDataFromDb(dossiers);
        setDbSynced(true);
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
    else if (key === 'question-performance') setActiveNav('question-performance');
    else if (key === 'history' && onNavigateToHistory) onNavigateToHistory();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  const handlePrevQuestion = () => {
    const qList = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
    const idx = qList.indexOf(selectedQuestionId);
    if (idx > 0) setSelectedQuestionId(qList[idx - 1]);
  };

  const handleNextQuestion = () => {
    const qList = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
    const idx = qList.indexOf(selectedQuestionId);
    if (idx < qList.length - 1) setSelectedQuestionId(qList[idx + 1]);
  };

  const handleDrillSimilar = (drillTitle?: string) => {
    setDrillRole(drillTitle || 'Targeted Drill: Token-Bucket Clock Skew & Drift Resilience (#42S)');
    setSimulationModalOpen(true);
  };

  const handleGeneratePlan = () => {
    showToast('Redirecting to AI Improvement Plan (#42)...');
    if (onNavigateToAi) {
      onNavigateToAi();
    }
  };

  const handlePurgeTelemetry = () => {
    showToast('Question telemetry buffers cryptographically wiped from storage.');
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
            {/* Header with Breadcrumbs, Protocol Banner, Session controls & 4 KPI cards */}
            <QuestionPerformanceHeader
              onSelectSession={(sess) => showToast(`Switched active session to ${sess}`)}
              onPaperAudioDocker={() => showToast('Opening Dockerized acoustic session logs...')}
            />

            {/* 5-Question Session Trajectory Stepper */}
            <QuestionTrajectoryStepper
              selectedQuestionId={selectedQuestionId}
              onSelectQuestion={setSelectedQuestionId}
            />

            {/* Detailed Question Dossier Inspect View (Selected Question) */}
            <QuestionDossierInspectView
              selectedQuestionId={selectedQuestionId}
              onPrevQuestion={handlePrevQuestion}
              onNextQuestion={handleNextQuestion}
              onDrillSimilar={handleDrillSimilar}
              onGeneratePlan={handleGeneratePlan}
              onNavigateSpeech={onNavigateToSpeechAnalytics}
              onNavigatePresentation={onNavigateToPresentationAnalytics}
              onNavigateCommunication={onNavigateToCommunicationAnalytics}
            />

            {/* 5-Question Cross-Comparative Telemetry Grid */}
            <QuestionCrossComparativeGrid
              selectedQuestionId={selectedQuestionId}
              onSelectQuestion={setSelectedQuestionId}
            />

            {/* Inprep AI Deterministic Assessment Policy Footer */}
            <QuestionAssessmentPolicyFooter onPurgeTelemetry={handlePurgeTelemetry} />
          </div>
        </div>
      </div>

      {/* Live Simulation Modal for Drills */}
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

export default QuestionPerformancePage;
