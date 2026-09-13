import React, { useState } from 'react';
import { DeviceReadinessSimulatorBar, DeviceReadinessState } from '../components/device-readiness/DeviceReadinessSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DeviceReadinessHeader } from '../components/device-readiness/DeviceReadinessHeader';
import { DeviceReadinessBannerCard } from '../components/device-readiness/DeviceReadinessBannerCard';
import { DeviceCameraPreviewCard } from '../components/device-readiness/DeviceCameraPreviewCard';
import { DeviceMicrophoneCard } from '../components/device-readiness/DeviceMicrophoneCard';
import { DeviceSpeakerCard } from '../components/device-readiness/DeviceSpeakerCard';
import { DeviceReadinessChecklistCard } from '../components/device-readiness/DeviceReadinessChecklistCard';
import { DeviceSessionConfigCard } from '../components/device-readiness/DeviceSessionConfigCard';
import { DeviceVaultGuaranteesCard } from '../components/device-readiness/DeviceVaultGuaranteesCard';
import { DeviceTroubleshootingFaqCard } from '../components/device-readiness/DeviceTroubleshootingFaqCard';
import { DeviceExitDialogModal } from '../components/device-readiness/DeviceExitDialogModal';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';

interface DeviceReadinessPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToDiagnosticIntake?: () => void;
  onNavigateToDeviceReadiness?: () => void;
  onNavigateToIntroRoom?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const DeviceReadinessPage: React.FC<DeviceReadinessPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToCvAnalysis: _onNavigateToCvAnalysis,
  onNavigateToCvBuilder: _onNavigateToCvBuilder,
  onNavigateToDiagnosticIntake,
  onNavigateToIntroRoom,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState, setSimulatorState] = useState<DeviceReadinessState>('ready');
  const [activeNav, setActiveNav] = useState<NavItemKey>('assessment');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [isDiagnosticsRunning, setIsDiagnosticsRunning] = useState(false);

  const handleSimulatorStateChange = (state: DeviceReadinessState) => {
    setSimulatorState(state);
    if (state === 'camera_off') {
      setIsCameraOn(false);
      setExitModalOpen(false);
    } else if (state === 'ready') {
      setIsCameraOn(true);
      setExitModalOpen(false);
    } else if (state === 'exit_dialog') {
      setExitModalOpen(true);
    } else if (state === 'running_checks') {
      setIsDiagnosticsRunning(true);
      setTimeout(() => setIsDiagnosticsRunning(false), 2000);
      setExitModalOpen(false);
    } else {
      setExitModalOpen(false);
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

  const handleRunAllDiagnostics = () => {
    setIsDiagnosticsRunning(true);
    setTimeout(() => {
      setIsDiagnosticsRunning(false);
      alert('All hardware, camera, microphone, and WebRTC checks passed!');
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Interactive Prototype Simulator Bar */}
      <DeviceReadinessSimulatorBar
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
          creditsRemaining={78}
          totalCredits={100}
        />

        {/* 3. Main Body Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          {/* Top Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Page Inner Container */}
          <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 28px 40px 28px' }}>
            {/* Header with Badges & Metadata */}
            <DeviceReadinessHeader interviewRole="Staff Systems Architect" />

            {/* Readiness Summary Banner Card */}
            <DeviceReadinessBannerCard
              score={simulatorState === 'mic_blocked' ? 68 : 83}
              verifiedCount={simulatorState === 'mic_blocked' ? 4 : 5}
              totalCount={6}
              onRunDiagnostics={handleRunAllDiagnostics}
              onSwitchAudioOnly={() => setIsCameraOn(false)}
              isRunning={isDiagnosticsRunning}
            />

            {/* 2-Column Grid: Hardware Viewports (Left) vs. Checklist & Config (Right) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 1fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Camera, Microphone, Speaker */}
              <div>
                <DeviceCameraPreviewCard
                  isCameraOn={isCameraOn}
                  onToggleCamera={() => setIsCameraOn(!isCameraOn)}
                  isPoorLighting={simulatorState === 'poor_lighting'}
                />

                <DeviceMicrophoneCard
                  isMicBlocked={simulatorState === 'mic_blocked'}
                  onTestMicSample={() => alert('Sampling audio input for 3 seconds...')}
                  onPlaybackSample={() => alert('Playing back sampled microphone audio...')}
                />

                <DeviceSpeakerCard
                  onPlayTestChime={() => alert('Playing high-fidelity audio tone...')}
                />
              </div>

              {/* Right Column: Checklist, Config, Guarantees, FAQs */}
              <div>
                <DeviceReadinessChecklistCard
                  onRetestItem={(id) => alert(`Retesting diagnostic item: ${id}...`)}
                />

                <DeviceSessionConfigCard
                  trackName="Staff Backend Architect"
                  simulationLength="5 Diagnostic Adaptive Prompts"
                  feedbackChannels="Speech Prosody + Systems Depth"
                  onSwitchAudioOnly={() => setIsCameraOn(false)}
                />

                <DeviceVaultGuaranteesCard />

                <DeviceTroubleshootingFaqCard />
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                marginTop: '10px',
              }}
            >
              <button
                onClick={onNavigateToDiagnosticIntake}
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
                }}
              >
                <ArrowLeft size={14} />
                <span>Back to Diagnostic Intake (#19)</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setExitModalOpen(true)}
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
                  }}
                >
                  <Save size={14} />
                  <span>Save Setup &amp; Exit</span>
                </button>

                <button
                  onClick={() => {
                    if (onNavigateToIntroRoom) {
                      onNavigateToIntroRoom();
                    } else {
                      setSimulationModalOpen(true);
                    }
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 24px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <span>Enter Interview Room (Web #21)</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      <DeviceExitDialogModal
        isOpen={exitModalOpen}
        onClose={() => setExitModalOpen(false)}
        onConfirmExit={() => {
          setExitModalOpen(false);
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

export default DeviceReadinessPage;
