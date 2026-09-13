import React, { useState } from 'react';
import { IntroRoomSimulatorBar, IntroRoomState } from '../components/intro-room/IntroRoomSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { IntroRoomHeader } from '../components/intro-room/IntroRoomHeader';
import { IntroRoomWelcomeCard } from '../components/intro-room/IntroRoomWelcomeCard';
import { IntroRoomSessionFlowCard } from '../components/intro-room/IntroRoomSessionFlowCard';
import { IntroRoomResponseModeSelector, IntroResponseMode } from '../components/intro-room/IntroRoomResponseModeSelector';
import { IntroRoomChecklistCard } from '../components/intro-room/IntroRoomChecklistCard';
import { IntroRoomFeedPreviewCard } from '../components/intro-room/IntroRoomFeedPreviewCard';
import { IntroRoomTelemetryCard } from '../components/intro-room/IntroRoomTelemetryCard';
import { IntroRoomPracticeGuidelinesCard } from '../components/intro-room/IntroRoomPracticeGuidelinesCard';
import { IntroRoomBiometricPolicyCard } from '../components/intro-room/IntroRoomBiometricPolicyCard';
import { IntroRoomModals } from '../components/intro-room/IntroRoomModals';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { ArrowLeft, ArrowRight, Settings2 } from 'lucide-react';

interface IntroRoomPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToDiagnosticIntake?: () => void;
  onNavigateToDeviceReadiness?: () => void;
  onNavigateToPipelineDiagnostic?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const IntroRoomPage: React.FC<IntroRoomPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToCvAnalysis: _onNavigateToCvAnalysis,
  onNavigateToCvBuilder: _onNavigateToCvBuilder,
  onNavigateToDiagnosticIntake: _onNavigateToDiagnosticIntake,
  onNavigateToDeviceReadiness,
  onNavigateToPipelineDiagnostic,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState, setSimulatorState] = useState<IntroRoomState>('ready');
  const [activeNav, setActiveNav] = useState<NavItemKey>('assessment');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [responseMode, setResponseMode] = useState<IntroResponseMode>('camera_voice');
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);

  const handleSimulatorStateChange = (state: IntroRoomState) => {
    setSimulatorState(state);
    if (state === 'audio_only') {
      setResponseMode('voice_only');
    } else if (state === 'ready') {
      setResponseMode('camera_voice');
    }
  };

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) {
      onNavigateToDashboard();
    } else if (key === 'profile' && onNavigateToProfile) {
      onNavigateToProfile();
    } else if (key === 'cv' && onNavigateToCv) {
      onNavigateToCv();
    } else if (key === 'library' && onNavigateToSimulations) {
      onNavigateToSimulations();
    } else if (key === 'improvement' && onNavigateToAi) {
      onNavigateToAi();
    }
  };

  const handleStartInterviewClick = () => {
    setSimulatorState('start_dialog');
  };

  const handleConfirmStartSession = () => {
    setSimulatorState('preparing_session');
    setTimeout(() => {
      setSimulatorState('ready');
      if (onNavigateToPipelineDiagnostic) {
        onNavigateToPipelineDiagnostic();
      } else {
        setSimulationModalOpen(true);
      }
    }, 1200);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Interactive Prototype Simulator Bar */}
      <IntroRoomSimulatorBar
        currentState={simulatorState}
        onStateChange={handleSimulatorStateChange}
      />

      {/* Main Workspace Frame */}
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 39px)' }}>
        {/* 2. Left Navigation Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={840}
          totalCredits={1000}
        />

        {/* 3. Main Body Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          {/* Top Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Page Inner Container */}
          <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 28px 40px 28px' }}>
            {/* Header with Title & Stat Chips */}
            <IntroRoomHeader
              onNavigateToAssessment={onNavigateToDeviceReadiness}
            />

            {/* 2-Column Responsive Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 1fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <IntroRoomWelcomeCard />
                <IntroRoomSessionFlowCard />
                <IntroRoomResponseModeSelector
                  selectedMode={responseMode}
                  onSelectMode={(mode) => {
                    setResponseMode(mode);
                    if (mode === 'voice_only' || mode === 'text_response') {
                      setSimulatorState('audio_only');
                    } else {
                      setSimulatorState('ready');
                    }
                  }}
                />
                <IntroRoomChecklistCard />
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <IntroRoomFeedPreviewCard
                  isCameraOn={responseMode === 'camera_voice' && simulatorState !== 'audio_only'}
                />
                <IntroRoomTelemetryCard
                  onNavigateToDeviceCheck={onNavigateToDeviceReadiness}
                />
                <IntroRoomPracticeGuidelinesCard />
                <IntroRoomBiometricPolicyCard />
              </div>
            </div>

            {/* Bottom Sticky Action Bar */}
            <div
              style={{
                marginTop: '32px',
                padding: '16px 22px',
                backgroundColor: 'rgba(14, 18, 28, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSimulatorState('exit_prompt')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    color: '#cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>Save &amp; Exit to Dashboard</span>
                </button>

                <button
                  onClick={onNavigateToDeviceReadiness}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    color: '#94a3b8',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Settings2 size={14} />
                  <span>Modify Device Settings</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.74rem', color: '#34d399', fontWeight: 600 }}>
                    Hardware &amp; Rubrics Ready
                  </div>
                  <div style={{ fontSize: '0.66rem', color: '#64748b' }}>
                    All 7 setup criteria satisfied
                  </div>
                </div>

                <button
                  onClick={handleStartInterviewClick}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 26px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <span>Start Introduction Interview</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>

      {/* Simulator Modal States */}
      <IntroRoomModals
        state={simulatorState}
        onClose={() => setSimulatorState('ready')}
        onStartSession={handleConfirmStartSession}
        onConfirmExit={() => {
          setSimulatorState('ready');
          if (onNavigateToDashboard) onNavigateToDashboard();
        }}
      />

      {/* Live Simulation Practice Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole="Staff Backend Architect"
        />
      )}
    </div>
  );
};

export default IntroRoomPage;
