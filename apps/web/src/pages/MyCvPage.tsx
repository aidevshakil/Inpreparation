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

import { uploadResumeProfile } from '../services/api';

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
  const { user, updateUser } = useAuth();
  const hasCv = Boolean(user.cvFileName);

  const [simulatorState, setSimulatorState] = useState<CvSimulatorState>(hasCv ? 'default' : 'empty');
  const [activeNav, setActiveNav] = useState<NavItemKey>('cv');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [replaceModalOpen, setReplaceModalOpen] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [uploadPercent, setUploadPercent] = useState(65);

  // Sync state if user.cvFileName updates
  useEffect(() => {
    if (!hasCv && simulatorState !== 'uploading' && simulatorState !== 'dragging') {
      setSimulatorState('empty');
    } else if (hasCv && simulatorState === 'empty') {
      setSimulatorState('default');
    }
  }, [hasCv]);

  // Handle actual file upload and persistence
  const handleFileUpload = async (file: File) => {
    setSimulatorState('uploading');
    setUploadPercent(30);

    try {
      const uploadTimer = setInterval(() => {
        setUploadPercent((prev) => (prev < 85 ? prev + 15 : prev));
      }, 200);

      // Save to backend database and trigger AI CV Analysis
      const res = await uploadResumeProfile({
        userId: user.id,
        fileName: file.name,
        fileSize: file.size,
        targetRole: user.targetRole || 'Software Engineer',
        skills: user.cvSkills && user.cvSkills.length > 0 ? user.cvSkills : ['TypeScript', 'React', 'Node.js'],
        experienceYears: Number(user.yearsOfExperience) || 3,
        parsedSummary: `Parsed CV for ${user.name || 'Candidate'}.`,
      });

      clearInterval(uploadTimer);
      setUploadPercent(100);

      // Update user in AuthContext / localStorage
      updateUser({
        cvFileName: file.name,
        cvAtsScore: res?.analysis?.overallStrengthScore || 88,
        cvSkills: res?.analysis?.skillsTaxonomy?.flatMap((c: any) => c.skills) || (user.cvSkills && user.cvSkills.length > 0 ? user.cvSkills : ['TypeScript', 'React', 'Node.js', 'System Architecture']),
      });

      setSimulatorState('default');

      // Seamlessly navigate to AI CV Analysis screen so user sees instant analysis
      setTimeout(() => {
        if (onNavigateToCvAnalysis) {
          onNavigateToCvAnalysis();
        }
      }, 600);
    } catch (err) {
      console.warn('Resume upload encountered error, falling back locally:', err);
      updateUser({
        cvFileName: file.name,
        cvAtsScore: 85,
      });
      setSimulatorState('default');
      if (onNavigateToCvAnalysis) {
        onNavigateToCvAnalysis();
      }
    }
  };

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
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column' }}>
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
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, backgroundColor: 'var(--bg-main)' }}>
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
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span
                    style={{
                      padding: '3px 10px',
                      backgroundColor: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      borderRadius: '9999px',
                      color: 'var(--primary-color)',
                      fontWeight: 600,
                    }}
                  >
                    CANDIDATE DOSSIER
                  </span>
                  <span style={{ color: 'var(--border-accent)' }}>•</span>
                  <span style={{ color: 'var(--text-secondary)' }}>CV MANAGEMENT &amp; VECTORIZATION</span>
                </div>

                <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                  My CV
                </h1>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
                  Manage your uploaded resume, view skill graph extractions, and configure telemetry synchronization for live mock simulations.
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
            {hasCv && simulatorState !== 'empty' ? (
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
                  uploadPercent={uploadPercent}
                  hasError={simulatorState === 'error'}
                  onFileSelect={handleFileUpload}
                />
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: 'rgba(14, 18, 28, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  marginBottom: '28px',
                  textAlign: 'center',
                }}
              >
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    No CV Uploaded Yet
                  </h2>
                  <p style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '24px', lineHeight: 1.6 }}>
                    Upload your resume (PDF or DOCX) to extract competencies, generate calibrated 5-question mock simulations, and unlock your ATS strength diagnostic.
                  </p>

                  <CvUploadDropzoneCard
                    isDragging={simulatorState === 'dragging'}
                    isUploading={simulatorState === 'uploading'}
                    uploadPercent={uploadPercent}
                    hasError={simulatorState === 'error'}
                    onFileSelect={handleFileUpload}
                  />
                </div>
              </div>
            )}

            {/* Main Content & Sticky Sidebar Grid - ONLY shown when user has actually uploaded a CV */}
            {hasCv && simulatorState !== 'empty' && (
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
                    candidateName={user.name}
                    candidateRole={user.targetRole || 'Software Engineer'}
                    candidateEmail={user.email}
                    candidateSkills={user.cvSkills}
                    onExpandDossier={() => {
                      if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                      else alert('Expanding full interactive candidate dossier...');
                    }}
                  />

                  <CvVersionHistoryTable
                    versions={[
                      {
                        id: 'v1',
                        fileName: user.cvFileName || 'Active_Resume.pdf',
                        uploadDate: 'Today',
                        size: 'Active',
                        status: 'vectorized',
                        statusLabel: 'Active Master',
                      },
                    ]}
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
        onConfirmReplace={(file: File) => {
          setReplaceModalOpen(false);
          handleFileUpload(file);
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
