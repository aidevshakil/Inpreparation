import React, { useState, useEffect } from 'react';
import type { CvSimulatorState } from '../components/cv/CvPrototypeSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { CvActiveMasterCard } from '../components/cv/CvActiveMasterCard';
import { CvUploadDropzoneCard } from '../components/cv/CvUploadDropzoneCard';
import { CvOcrPreviewCanvas } from '../components/cv/CvOcrPreviewCanvas';
import { CvVersionHistoryTable } from '../components/cv/CvVersionHistoryTable';
import { CvStrengthCalibratorCard } from '../components/cv/CvStrengthCalibratorCard';
import { CvExecutiveAiSynthesisCard } from '../components/cv/CvExecutiveAiSynthesisCard';
import { CvCalibratedMockPipelineCard } from '../components/cv/CvCalibratedMockPipelineCard';
import { CvEncryptedVaultCard } from '../components/cv/CvEncryptedVaultCard';
import { CvReplaceModal } from '../components/cv/CvReplaceModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { FileEdit, UploadCloud, Cpu, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface MyCvPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToUploadCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const MyCvPage: React.FC<MyCvPageProps> = ({
  onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToUploadCv,
  onNavigateToCvAnalysis,
  onNavigateToCvBuilder,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const { user } = useAuth();
  const hasCv = Boolean(user.cvFileName);

  const [simulatorState, setSimulatorState] = useState<CvSimulatorState>(hasCv ? 'default' : 'empty');
  const [activeNav, setActiveNav] = useState<NavItemKey>('cv');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [replaceModalOpen, setReplaceModalOpen] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);

  // Sync state if user object updates
  useEffect(() => {
    if (!hasCv && simulatorState !== 'uploading' && simulatorState !== 'dragging') {
      setSimulatorState('empty');
    } else if (hasCv && simulatorState === 'empty') {
      setSimulatorState('default');
    }
  }, [hasCv, simulatorState]);

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) {
      onNavigateToDashboard();
    } else if (key === 'profile' && onNavigateToProfile) {
      onNavigateToProfile();
    } else if (key === 'library' && onNavigateToSimulations) {
      onNavigateToSimulations();
    } else if (key === 'assessment') {
      setSimulationModalOpen(true);
    } else if (key === 'improvement' && onNavigateToAi) {
      onNavigateToAi();
    } else if (key === 'cv' && onNavigateToHome) {
      // already on cv
    }
  };

  const isModalOpen = replaceModalOpen || simulatorState === 'replace_dialog';

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
          creditsRemaining={user.creditsRemaining}
          totalCredits={user.totalCredits}
        />

        {/* Right Content Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, backgroundColor: '#090c15' }}>
          {/* 3. Studio Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToDashboard={onNavigateToDashboard}
            onNavigateToProfile={onNavigateToProfile}
            onNavigateToSimulations={onNavigateToSimulations}
            onNavigateToHome={onNavigateToHome}
          />

          {/* 4. Main Body Content */}
          <main
            style={{
              flex: 1,
              padding: '0 28px 40px 28px',
              maxWidth: '1380px',
              width: '100%',
              margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Header / Breadcrumb & Actions Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                padding: '24px 0 16px 0',
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '8px' }}>
                  <span
                    style={{
                      padding: '3px 10px',
                      backgroundColor: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      borderRadius: '9999px',
                      color: '#a5b4fc',
                      fontWeight: 600,
                    }}
                  >
                    CANDIDATE DOSSIER
                  </span>
                  <span style={{ color: '#475569' }}>•</span>
                  <span style={{ color: '#cbd5e1' }}>CV MANAGEMENT &amp; VECTORIZATION</span>
                </div>

                <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                  My CV
                </h1>

                <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0, maxWidth: '680px', lineHeight: 1.5 }}>
                  Upload and manage your CV to help Inprep AI extract competencies, map high-dimensional experience vectors, and auto-calibrate your 5-question mock simulations.
                </p>
              </div>

              {/* Top Right Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', alignSelf: 'center' }}>
                <button
                  onClick={() => {
                    if (onNavigateToCvBuilder) onNavigateToCvBuilder();
                    else alert('Opening manual CV builder...');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: '#cbd5e1',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  <FileEdit size={15} />
                  <span>Build CV Manually</span>
                </button>

                <button
                  onClick={() => {
                    if (onNavigateToUploadCv) {
                      onNavigateToUploadCv();
                    } else {
                      setReplaceModalOpen(true);
                    }
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 22px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <UploadCloud size={16} />
                  <span>Upload New CV</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Vector Extraction Banner */}
            {simulatorState === 'pipeline' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  backgroundColor: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  borderRadius: '14px',
                  marginBottom: '20px',
                  color: '#e0e7ff',
                  fontSize: '0.82rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cpu size={18} color="#818cf8" />
                  <span>
                    <strong>Embedding Pipeline Active:</strong> Computing dense vectors across 28 technical skills and aligning with Staff Backend rubrics.
                  </span>
                </div>
                <span style={{ fontSize: '0.74rem', color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={13} /> Synchronized
                </span>
              </div>
            )}

            {/* Top Row: Active Master CV Overview & Upload Dropzone */}
            {simulatorState !== 'empty' ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(340px, 1.4fr) minmax(300px, 1fr)',
                  gap: '20px',
                  marginBottom: '24px',
                }}
                className="cv-top-grid"
              >
                <CvActiveMasterCard
                  fileName={user.cvFileName || "Active_Resume.pdf"}
                  fileSize="-"
                  uploadDate="Uploaded recently"
                  vectorizedTime="Vectorized"
                  onFullPreview={() => {
                    if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                    else alert('Opening full screen preview...');
                  }}
                  onSkillMatrix={() => {
                    if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                    else alert('Displaying Skill Matrix breakdown...');
                  }}
                  onReplaceCv={() => setReplaceModalOpen(true)}
                  onDownload={() => alert('Downloading resume PDF...')}
                  onShare={() => alert('Share link copied to clipboard!')}
                />

                <CvUploadDropzoneCard
                  isDragging={simulatorState === 'dragging'}
                  isUploading={simulatorState === 'uploading'}
                  uploadPercent={68}
                  hasError={simulatorState === 'error'}
                  onFileSelect={() => {
                    setSimulatorState('uploading');
                    setTimeout(() => {
                      setSimulatorState('default');
                      if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                    }, 1200);
                  }}
                />
              </div>
            ) : (
              <div style={{ marginBottom: '24px' }}>
                <CvUploadDropzoneCard
                  isDragging={false}
                  isUploading={false}
                  onFileSelect={() => setSimulatorState('default')}
                />
              </div>
            )}

            {/* Main Content & Sticky Sidebar Grid */}
            {simulatorState !== 'empty' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(340px, 2fr) minmax(300px, 1fr)',
                  gap: '24px',
                  alignItems: 'start',
                }}
                className="cv-body-grid"
              >
                {/* Left Column: OCR Preview Canvas & Version History Table */}
                <div>
                  <CvOcrPreviewCanvas
                    onExpandDossier={() => {
                      if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                      else alert('Expanding full interactive candidate dossier...');
                    }}
                  />

                  <CvVersionHistoryTable
                    onRollback={(vId) => alert(`Rolling back active master to version ${vId}...`)}
                    onDownloadVersion={(vId) => alert(`Downloading archived copy ${vId}...`)}
                  />
                </div>

                {/* Right Column: Sticky Sidebar Diagnostics & Calibrator */}
                <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <CvStrengthCalibratorCard
                    score={user.cvAtsScore || 0}
                    onViewDeepBreakdown={() => {
                      if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                      else alert('Opening deep diagnostic breakdown...');
                    }}
                  />

                  <CvExecutiveAiSynthesisCard
                    onEnhanceWithAi={() => {
                      if (onNavigateToAi) onNavigateToAi();
                    }}
                  />

                  <CvCalibratedMockPipelineCard
                    onStartCalibratedMock={() => setSimulationModalOpen(true)}
                  />

                  <CvEncryptedVaultCard
                    onManageSecurity={() => alert('Opening Vault security & encryption settings...')}
                  />
                </div>
              </div>
            )}

            {/* Footer */}
            <DashboardFooter />
          </main>
        </div>
      </div>

      {/* Replace CV Modal Dialog */}
      <CvReplaceModal
        isOpen={isModalOpen}
        onClose={() => {
          setReplaceModalOpen(false);
          if (simulatorState === 'replace_dialog') setSimulatorState('default');
        }}
        onConfirmReplace={() => {
          setReplaceModalOpen(false);
          setSimulatorState('uploading');
          setTimeout(() => setSimulatorState('default'), 1200);
        }}
      />

      {/* Live Simulation Practice Modal */}
      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={user.targetRole || "Software Engineer"}
        />
      )}
    </div>
  );
};

export default MyCvPage;
