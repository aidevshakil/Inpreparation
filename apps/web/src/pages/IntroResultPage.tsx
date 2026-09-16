import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import type { IntroResultState } from '../components/intro-result/IntroResultSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { IntroResultHeader } from '../components/intro-result/IntroResultHeader';
import { IntroResultDossierBanner } from '../components/intro-result/IntroResultDossierBanner';
import { IntroResultCareerSummaryCard } from '../components/intro-result/IntroResultCareerSummaryCard';
import { IntroResultWhatYouSharedCard } from '../components/intro-result/IntroResultWhatYouSharedCard';
import { IntroResultPotentialStrengthsCard } from '../components/intro-result/IntroResultPotentialStrengthsCard';
import { IntroResultPreparationFocusCard } from '../components/intro-result/IntroResultPreparationFocusCard';
import { IntroResultSubmittedResponsesCard } from '../components/intro-result/IntroResultSubmittedResponsesCard';
import { IntroResultProfileReadinessCard } from '../components/intro-result/IntroResultProfileReadinessCard';
import { IntroResultPossibleTracksCard } from '../components/intro-result/IntroResultPossibleTracksCard';
import { IntroResultTransparencyCards } from '../components/intro-result/IntroResultTransparencyCards';
import { IntroResultModals } from '../components/intro-result/IntroResultModals';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { RotateCcw, ListFilter, ArrowRight, Grid } from 'lucide-react';

interface IntroResultPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToDiagnosticIntake?: () => void;
  onNavigateToDeviceReadiness?: () => void;
  onNavigateToIntroRoom?: () => void;
  onNavigateToPipelineDiagnostic?: () => void;
  onNavigateToProfileAnalysis?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const IntroResultPage: React.FC<IntroResultPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToCvAnalysis: _onNavigateToCvAnalysis,
  onNavigateToCvBuilder: _onNavigateToCvBuilder,
  onNavigateToDiagnosticIntake: _onNavigateToDiagnosticIntake,
  onNavigateToDeviceReadiness: _onNavigateToDeviceReadiness,
  onNavigateToIntroRoom,
  onNavigateToPipelineDiagnostic: _onNavigateToPipelineDiagnostic,
  onNavigateToProfileAnalysis,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState, setSimulatorState] = useState<IntroResultState>('default_completed');
  const [activeNav, setActiveNav] = useState<NavItemKey>('assessment');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);

  const { user } = useAuth();
  const [diagnosticData, setDiagnosticData] = useState<any>(null);
  const displayRole = user?.targetRole && user.targetRole !== 'Select Target Role' ? user.targetRole : "General Assessment";
  const [selectedRoleForSimulation, setSelectedRoleForSimulation] = useState(displayRole);

  useEffect(() => {
    if (user?.id) {
      fetch(`http://localhost:5000/api/diagnostics/latest?userId=${user.id}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.diagnostic) {
            setDiagnosticData(data.diagnostic);
          }
        })
        .catch(err => console.warn('Fetch diagnostic error:', err));
    }
  }, [user?.id]);

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

  const handleRetakeConfirm = () => {
    setSimulatorState('default_completed');
    if (onNavigateToIntroRoom) {
      onNavigateToIntroRoom();
    }
  };

  const handleExploreTrack = (trackName: string) => {
    setSelectedRoleForSimulation(trackName);
    setSimulationModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* Main Workspace Layout */}
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
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
            {/* Header with Milestones Stepper, Title, Actions, 5 Parameter Chips */}
            <IntroResultHeader
              onNavigateToAssessment={onNavigateToIntroRoom}
              onRetakeIntroduction={() => setSimulatorState('retake_confirm')}
              onViewTailoredDrills={() => {
                if (onNavigateToProfileAnalysis) {
                  onNavigateToProfileAnalysis();
                } else if (onNavigateToSimulations) {
                  onNavigateToSimulations();
                } else {
                  setSimulationModalOpen(true);
                }
              }}
            />

            {/* Error Loading State Banner if in simulator state 4 */}
            {simulatorState === 'error_loading' && (
              <div
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#f87171', fontWeight: 700, margin: '0 0 2px 0' }}>
                    Error Reloading Ingested Audio Transcripts
                  </h4>
                  <p style={{ fontSize: '0.76rem', color: '#fca5a5', margin: 0 }}>
                    Failed to fetch the synchronized prosody waveform cache. Showing cached profile synthesis.
                  </p>
                </div>
                <button
                  onClick={() => setSimulatorState('default_completed')}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ef4444',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Retry Fetch
                </button>
              </div>
            )}

            {/* Synthesis Dossier Banner ("Your Career Direction at a Glance") */}
            <IntroResultDossierBanner
              onEditProfile={() => setShowEditModal(true)}
              onDownloadPdf={() => alert('Exporting synthesized Career Assessment Dossier to PDF...')}
              targetRole={displayRole}
              diagnosticData={diagnosticData}
            />

            {/* 2-Column Responsive Layout */}
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
                <IntroResultCareerSummaryCard
                  onEdit={() => setShowEditModal(true)}
                  targetRole={displayRole}
                  diagnosticData={diagnosticData}
                />
                <IntroResultWhatYouSharedCard diagnosticData={diagnosticData} targetRole={displayRole} />
                <IntroResultPotentialStrengthsCard diagnosticData={diagnosticData} />
                <IntroResultPreparationFocusCard diagnosticData={diagnosticData} />
                <IntroResultSubmittedResponsesCard
                  onOpenDrawer={() => setShowDrawer(true)}
                  diagnosticData={diagnosticData}
                />
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <IntroResultProfileReadinessCard
                  onCompleteProfile={() => setShowEditModal(true)}
                />
                <IntroResultPossibleTracksCard
                  onSelectTrack={handleExploreTrack}
                  targetRole={displayRole}
                />
                <IntroResultTransparencyCards />
              </div>
            </div>

            {/* Bottom Sticky Action Bar */}
            <div
              style={{
                marginTop: '32px',
                padding: '16px 24px',
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
              {/* Left Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSimulatorState('retake_confirm')}
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
                  <RotateCcw size={14} />
                  <span>Retake Introduction Interview</span>
                </button>

                <button
                  onClick={() => setShowDrawer(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <ListFilter size={14} style={{ color: '#818cf8' }} />
                  <span>Review Full Responses (8)</span>
                </button>
              </div>

              {/* Right Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={onNavigateToSimulations}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    color: '#cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Grid size={14} />
                  <span>Browse All 48+ Categories</span>
                </button>

                <button
                  onClick={() => {
                    if (onNavigateToProfileAnalysis) {
                      onNavigateToProfileAnalysis();
                    } else if (onNavigateToSimulations) {
                      onNavigateToSimulations();
                    } else {
                      setSimulationModalOpen(true);
                    }
                  }}
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
                  <span>View Recommended Interviews (4 Tailored)</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>

      {/* Simulator Modals & Responses Drawer */}
      <IntroResultModals
        state={simulatorState}
        onCloseSimulatorModal={() => setSimulatorState('default_completed')}
        onConfirmRetake={handleRetakeConfirm}
        showResponsesDrawer={showDrawer}
        onCloseResponsesDrawer={() => setShowDrawer(false)}
        showEditProfileModal={showEditModal}
        onCloseEditProfileModal={() => setShowEditModal(false)}
        diagnosticData={diagnosticData}
      />

      {/* Live Simulation Practice Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={selectedRoleForSimulation}
        />
      )}
    </div>
  );
};

export default IntroResultPage;
