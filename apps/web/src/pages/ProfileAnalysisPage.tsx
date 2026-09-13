import React, { useState } from 'react';
import type { ProfileAnalysisState } from '../components/profile-analysis/ProfileAnalysisSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { ProfileAnalysisHeader } from '../components/profile-analysis/ProfileAnalysisHeader';
import { ProfileAnalysisGlanceCard } from '../components/profile-analysis/ProfileAnalysisGlanceCard';
import { ProfileAnalysisTransparencyCard } from '../components/profile-analysis/ProfileAnalysisTransparencyCard';
import { ProfileAnalysisIdentityCard } from '../components/profile-analysis/ProfileAnalysisIdentityCard';
import { ProfileAnalysisSkillsCard } from '../components/profile-analysis/ProfileAnalysisSkillsCard';
import { ProfileAnalysisBackgroundCard } from '../components/profile-analysis/ProfileAnalysisBackgroundCard';
import { ProfileAnalysisStrengthsCard } from '../components/profile-analysis/ProfileAnalysisStrengthsCard';
import { ProfileAnalysisFocusCard } from '../components/profile-analysis/ProfileAnalysisFocusCard';
import { ProfileAnalysisReadinessCard } from '../components/profile-analysis/ProfileAnalysisReadinessCard';
import { ProfileAnalysisCareerDirectionsCard } from '../components/profile-analysis/ProfileAnalysisCareerDirectionsCard';
import { ProfileAnalysisSidebarCards } from '../components/profile-analysis/ProfileAnalysisSidebarCards';
import { ProfileAnalysisModals } from '../components/profile-analysis/ProfileAnalysisModals';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { Download, FileText, Grid, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getProfileAnalysisDossier } from '../services/api';

interface ProfileAnalysisPageProps {
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
  onNavigateToIntroResult?: () => void;
  onNavigateToRecommendedInterviews?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const ProfileAnalysisPage: React.FC<ProfileAnalysisPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToCvAnalysis: _onNavigateToCvAnalysis,
  onNavigateToCvBuilder: _onNavigateToCvBuilder,
  onNavigateToDiagnosticIntake: _onNavigateToDiagnosticIntake,
  onNavigateToDeviceReadiness: _onNavigateToDeviceReadiness,
  onNavigateToIntroRoom: _onNavigateToIntroRoom,
  onNavigateToPipelineDiagnostic: _onNavigateToPipelineDiagnostic,
  onNavigateToIntroResult,
  onNavigateToRecommendedInterviews,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const { user } = useAuth();
  const [simulatorState, setSimulatorState] = useState<ProfileAnalysisState>('default_profile');
  const [activeNav, setActiveNav] = useState<NavItemKey>('assessment');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRadarModal, setShowRadarModal] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [selectedRoleForSimulation, setSelectedRoleForSimulation] = useState('Staff Backend & Systems Architect');
  const [_dossierData, setDossierData] = useState<any>(null);

  React.useEffect(() => {
    getProfileAnalysisDossier(user.id).then((res) => {
      if (res && res.dossier) {
        setDossierData(res.dossier);
      }
    }).catch((e) => console.warn('Fetch profile analysis dossier error:', e));
  }, [user.id]);

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

  const handleExploreTrack = (trackName: string) => {
    setSelectedRoleForSimulation(trackName);
    setSimulationModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* Main Workspace Frame */}
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
            {/* Header with Title, 3 Metric Badges, Action Buttons */}
            <ProfileAnalysisHeader
              onNavigateToAssessment={onNavigateToIntroResult}
              onDownloadPdf={() => alert('Exporting full AI Profile Analysis Dossier to PDF...')}
              onStartRecommendedInterviews={() => {
                if (onNavigateToRecommendedInterviews) {
                  onNavigateToRecommendedInterviews();
                } else if (onNavigateToSimulations) {
                  onNavigateToSimulations();
                } else {
                  setSimulationModalOpen(true);
                }
              }}
            />

            {/* Career Profile at a Glance + Competency Radar */}
            <ProfileAnalysisGlanceCard
              onEditParameters={() => setShowEditModal(true)}
              onOpenRadarFocus={() => setShowRadarModal(true)}
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
                <ProfileAnalysisTransparencyCard
                  onViewCv={onNavigateToCv}
                  onEditProfile={onNavigateToProfile}
                  onReviewResponses={onNavigateToIntroResult}
                />
                <ProfileAnalysisIdentityCard
                  onEdit={() => setShowEditModal(true)}
                  onViewCitations={() => setSimulatorState('full_synthesis_drawer')}
                />
                <ProfileAnalysisSkillsCard
                  initialFilter={simulatorState === 'skills_filter_active' ? 'architecture' : 'all'}
                />
                <ProfileAnalysisBackgroundCard />
                <ProfileAnalysisStrengthsCard />
                <ProfileAnalysisFocusCard
                  onStartDrill={handleExploreTrack}
                />
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProfileAnalysisReadinessCard
                  onCompleteProfile={() => setShowEditModal(true)}
                />
                <ProfileAnalysisCareerDirectionsCard
                  onSelectTrack={handleExploreTrack}
                />
                <ProfileAnalysisSidebarCards />
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
                  onClick={() => alert('Printing AI Profile Dossier...')}
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
                  <Download size={14} />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onNavigateToIntroResult}
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
                  <FileText size={14} style={{ color: '#818cf8' }} />
                  <span>Review All Sources &amp; Audio Prompts</span>
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
                  <span>Browse All 48+ Drill Categories</span>
                </button>

                <button
                  onClick={() => {
                    if (onNavigateToRecommendedInterviews) {
                      onNavigateToRecommendedInterviews();
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
                  <span>Start Recommended Interviews (4 Tailored)</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>

      {/* Simulator Modals & Full Drawer */}
      <ProfileAnalysisModals
        state={simulatorState}
        onCloseSimulatorModal={() => setSimulatorState('default_profile')}
        showEditModal={showEditModal}
        onCloseEditModal={() => setShowEditModal(false)}
        showRadarModal={showRadarModal}
        onCloseRadarModal={() => setShowRadarModal(false)}
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

export default ProfileAnalysisPage;
