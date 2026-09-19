import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import {
  InterviewResultSimulatorBar,
  SimulationDebriefState,
} from '../components/interview-result/InterviewResultSimulatorBar';
import { InterviewResultHeaderCard } from '../components/interview-result/InterviewResultHeaderCard';
import { InterviewResultEvaluatorSynthesis } from '../components/interview-result/InterviewResultEvaluatorSynthesis';
import { InterviewResultRubricBreakdown } from '../components/interview-result/InterviewResultRubricBreakdown';
import { InterviewResultFeedbackColumns } from '../components/interview-result/InterviewResultFeedbackColumns';
import { InterviewResultAnswersAccordion } from '../components/interview-result/InterviewResultAnswersAccordion';
import { InterviewResultSidebarTelemetry } from '../components/interview-result/InterviewResultSidebarTelemetry';
import { InterviewResultDrawersAndModals } from '../components/interview-result/InterviewResultDrawersAndModals';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface InterviewResultPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
}

export const InterviewResultPage: React.FC<InterviewResultPageProps> = ({
  onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToAi,
  onNavigateToAssessment,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('performance');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulatorState, setSimulatorState] = useState<SimulationDebriefState>('full_dossier');

  // Modals and drawers state
  const [showTelemetryDrawer, setShowTelemetryDrawer] = useState(false);
  const [showCalibrationModal, setShowCalibrationModal] = useState(false);
  const [showShareCertificateModal, setShowShareCertificateModal] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [selectedPracticeRole, setSelectedPracticeRole] = useState('Python Backend Concurrency');
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  const handleSimulatorStateChange = (state: SimulationDebriefState) => {
    setSimulatorState(state);
    if (state === 'telemetry_drawer') {
      setShowTelemetryDrawer(true);
    } else if (state === 'share_certificate') {
      setShowShareCertificateModal(true);
    }
  };

  const handleDownloadPdf = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  const handleStartDrill = (drillName: string) => {
    setSelectedPracticeRole(drillName);
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
      {/* Download Alert Toast */}
      {downloadNotice && (
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
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.82rem',
            fontWeight: 600,
          }}
        >
          <span>Generating verified high-resolution debrief PDF dossier...</span>
        </div>
      )}

      {/* Main Workspace Layout */}
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
        {/* Left Navigation Sidebar (activeItem = 'performance' matching the mockup) */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={user?.creditsRemaining ?? 840}
          totalCredits={user?.totalCredits ?? 1000}
        />

        {/* Right Body Column */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            overflowX: 'hidden',
            backgroundColor: 'var(--bg-surface, #090c13)',
          }}
        >
          {/* Top Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToProfile={onNavigateToProfile}
            onNavigateToCv={onNavigateToCv}
            onNavigateToSimulations={onNavigateToSimulations}
            onNavigateToHome={onNavigateToHome}
          />

          {/* Page Inner Container */}
          <main
            style={{
              flex: 1,
              padding: '20px 32px 48px 32px',
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Top Stakeholder Test Rig Simulator Bar */}
            <InterviewResultSimulatorBar
              activeState={simulatorState}
              onSelectState={handleSimulatorStateChange}
            />

            {/* Breadcrumbs, Track Badge, and Hero Header Card */}
            <InterviewResultHeaderCard
              onNavigateToDashboard={onNavigateToDashboard}
              onNavigateToHistory={onNavigateToSimulations}
              onDownloadPdf={handleDownloadPdf}
              onShareLink={() => setShowShareCertificateModal(true)}
              onExportJson={() => {
                const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({
                  simulationId: 'SIM-PY-5321',
                  score: 82,
                  benchmark: 'Staff L6',
                  date: 'Oct 24, 2024'
                }, null, 2));
                const downloadAnchor = document.createElement('a');
                downloadAnchor.setAttribute('href', dataStr);
                downloadAnchor.setAttribute('download', 'SIM-PY-5321-rubric.json');
                document.body.appendChild(downloadAnchor);
                downloadAnchor.click();
                downloadAnchor.remove();
              }}
            />

            {/* Score Radial Donut + Executive Evaluator Synthesis Row */}
            <InterviewResultEvaluatorSynthesis
              score={82}
              totalQuestions={5}
              defendedQuestions={5}
              totalDuration="10:37"
              trajectoryDelta="+18 Pts"
            />

            {/* Fallback Banner for Scenario 4 */}
            {simulatorState === 'audio_fallback' && (
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '12px',
                  padding: '14px 20px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <AlertTriangle size={18} color="#fbbf24" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.8rem', color: '#fef3c7', lineHeight: 1.5 }}>
                  <strong>Partial Audio Evaluation Fallback Active:</strong> Question 4 microphone stream experienced transient gain reduction. Secondary deterministic acoustic recovery and phoneme alignment were utilized with <strong>zero score distortion</strong>.
                </div>
              </div>
            )}

            {/* 2-Column Responsive Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.7fr) minmax(320px, 1fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column (Rubric, Feedback, 5 Answers Accordion) */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* 1. Performance Rubric Breakdown */}
                <InterviewResultRubricBreakdown />

                {/* 2. Side-by-side What You Did Well & Where You Can Improve */}
                <InterviewResultFeedbackColumns />

                {/* 3. Review Your 5 Answers Accordion */}
                <InterviewResultAnswersAccordion
                  forceExpandedIds={
                    simulatorState === 'questions_expanded'
                      ? ['q1']
                      : simulatorState === 'audio_fallback'
                      ? ['q4']
                      : ['q1']
                  }
                />
              </div>

              {/* Right Column (Actions, Speech Telemetry, Camera, Next Steps, Governance) */}
              <div>
                <InterviewResultSidebarTelemetry
                  onGeneratePlan={() => {
                    if (onNavigateToAi) onNavigateToAi();
                    else alert('Redirecting to AI Improvement Plan Studio for L6 Backpressure...');
                  }}
                  onStartNextPractice={() => handleStartDrill('Exercise #29: High-Throughput Token Bucket')}
                  onBackToDashboard={onNavigateToDashboard}
                  onOpenTelemetryDrawer={() => setShowTelemetryDrawer(true)}
                  onSelectDrill={handleStartDrill}
                />
              </div>
            </div>

            {/* Footer */}
            <DashboardFooter />
          </main>
        </div>
      </div>

      {/* Drawers and Modals */}
      <InterviewResultDrawersAndModals
        showTelemetryDrawer={showTelemetryDrawer}
        onCloseTelemetryDrawer={() => setShowTelemetryDrawer(false)}
        showCalibrationModal={showCalibrationModal}
        onCloseCalibrationModal={() => setShowCalibrationModal(false)}
        showShareCertificateModal={showShareCertificateModal}
        onCloseShareCertificateModal={() => setShowShareCertificateModal(false)}
      />

      {/* Live Simulation Practice Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={selectedPracticeRole}
        />
      )}
    </div>
  );
};

export default InterviewResultPage;
