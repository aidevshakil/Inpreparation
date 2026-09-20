import React, { useState, useEffect } from 'react';
import type { AiAnalysisState } from '../components/cv-analysis/AiAnalysisSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { AiAnalysisFileHeader } from '../components/cv-analysis/AiAnalysisFileHeader';
import { AiAnalysisProfessionalSummaryCard } from '../components/cv-analysis/AiAnalysisProfessionalSummaryCard';
import { AiAnalysisSkillsTaxonomyCard } from '../components/cv-analysis/AiAnalysisSkillsTaxonomyCard';
import { AiAnalysisWorkExperienceCard } from '../components/cv-analysis/AiAnalysisWorkExperienceCard';
import { AiAnalysisProjectsCard } from '../components/cv-analysis/AiAnalysisProjectsCard';
import { AiAnalysisEducationCertCard } from '../components/cv-analysis/AiAnalysisEducationCertCard';
import { AiAnalysisCvStrengthScoreCard } from '../components/cv-analysis/AiAnalysisCvStrengthScoreCard';
import { AiAnalysisTechnicalCoverageCard } from '../components/cv-analysis/AiAnalysisTechnicalCoverageCard';
import { AiAnalysisRoleAlignmentCard } from '../components/cv-analysis/AiAnalysisRoleAlignmentCard';
import { AiAnalysisFeedbackCard } from '../components/cv-analysis/AiAnalysisFeedbackCard';
import { AiAnalysisPrivacyCard } from '../components/cv-analysis/AiAnalysisPrivacyCard';
import { AiAnalysisNextStepBar } from '../components/cv-analysis/AiAnalysisNextStepBar';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { AlertTriangle, RefreshCw, Loader2, FileWarning, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getLatestCvAnalysis, triggerCvAnalysis } from '../services/api';

interface AiCvAnalysisPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToUploadCv?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const AiCvAnalysisPage: React.FC<AiCvAnalysisPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToUploadCv,
  onNavigateToCvBuilder,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState, setSimulatorState] = useState<AiAnalysisState>('complete');
  const [activeNav, setActiveNav] = useState<NavItemKey>('cv');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);
  const { user } = useAuth();

  // Load latest AI Analysis for current user or file
  useEffect(() => {
    let isMounted = true;
    async function loadAnalysis() {
      if (!user.cvFileName) return;
      setIsLoadingAnalysis(true);
      try {
        const res = await getLatestCvAnalysis(user.id || 'demo-user-1');
        if (isMounted && res && res.analysis) {
          setAnalysisData(res.analysis);
        } else if (isMounted) {
          // Trigger on-the-fly synthesis
          const triggered = await triggerCvAnalysis({
            userId: user.id,
            fileName: user.cvFileName || 'Uploaded_CV.pdf',
            targetRole: user.targetRole || 'Full Stack Software Engineer',
            skills: user.cvSkills && user.cvSkills.length > 0 ? user.cvSkills : ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
            experienceYears: Number(user.yearsOfExperience) || 3,
          });
          if (isMounted && triggered && triggered.analysis) {
            setAnalysisData(triggered.analysis);
          }
        }
      } catch (err) {
        console.warn('Could not load CV analysis, using fallback:', err);
      } finally {
        if (isMounted) setIsLoadingAnalysis(false);
      }
    }

    loadAnalysis();
    return () => {
      isMounted = false;
    };
  }, [user.cvFileName, user.id, user.targetRole, user.yearsOfExperience]);

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
            {!user.cvFileName ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '100px 20px',
                  textAlign: 'center',
                  minHeight: '60vh',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: '#818cf8',
                  }}
                >
                  <FileText size={40} />
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginBottom: '12px' }}>
                  No CV Uploaded Yet
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: '400px', marginBottom: '30px', lineHeight: 1.6 }}>
                  Upload a CV or build one manually to unlock your personalized AI Analysis, strength scoring, and skill taxonomy.
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button
                    onClick={onNavigateToUploadCv}
                    style={{
                      padding: '10px 24px',
                      backgroundColor: '#4f46e5',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Upload CV
                  </button>
                  <button
                    onClick={onNavigateToCvBuilder}
                    style={{
                      padding: '10px 24px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#cbd5e1',
                      borderRadius: '8px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Build CV Manually
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Header & Breadcrumb & Action Pill */}
                <AiAnalysisFileHeader
                  fileName={user.cvFileName || "Shakil_Ahamed_Resume_2026.pdf"}
                  fileSize="142 KB"
                  uploadDate="Just now"
                  parsedTime="Seconds ago"
                  onNavigateToCv={onNavigateToCv}
                  onDownloadDossier={() => alert('Downloading Dossier PDF...')}
                  onReanalyzeCv={async () => {
                    setSimulatorState('processing');
                    try {
                      const res = await triggerCvAnalysis({
                        userId: user.id,
                        fileName: user.cvFileName || 'Uploaded_CV.pdf',
                        targetRole: user.targetRole || 'Full Stack Software Engineer',
                        skills: user.cvSkills && user.cvSkills.length > 0 ? user.cvSkills : ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
                        experienceYears: Number(user.yearsOfExperience) || 3,
                      });
                      if (res && res.analysis) {
                        setAnalysisData(res.analysis);
                      }
                    } catch (e) {
                      console.warn('Re-analysis error:', e);
                    } finally {
                      setSimulatorState('complete');
                    }
                  }}
                  onContinueToAssessment={() => {
                    if (onNavigateToSimulations) onNavigateToSimulations();
                    else alert('Launching 5-Minute AI Career Assessment simulation...');
                  }}
                  onViewDocument={() => alert('Opening PDF original preview modal...')}
                  onReplaceCv={onNavigateToUploadCv}
                />

                {/* Simulated State Conditional Views */}
                {(simulatorState === 'processing' || isLoadingAnalysis) && (
                  <div
                    style={{
                      backgroundColor: 'rgba(14, 18, 28, 0.9)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '18px',
                      padding: '60px 20px',
                      textAlign: 'center',
                      marginBottom: '30px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(99, 102, 241, 0.15)', marginBottom: '16px' }}>
                      <Loader2 size={32} style={{ color: '#818cf8', animation: 'spin 1.5s linear infinite' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                      Vectorizing &amp; Synthesizing CV Dossier...
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#94a3b8', maxWidth: '480px', margin: '0 auto 20px auto', lineHeight: 1.5 }}>
                      Extracting technical taxonomy, cross-checking scale metrics, and calibrating difficulty vectors against Senior / Staff engineering benchmarks.
                    </p>
                    <button
                      onClick={() => setSimulatorState('complete')}
                      style={{
                        padding: '8px 18px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#cbd5e1',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                      }}
                    >
                      Skip to Completed View
                    </button>
                  </div>
                )}

                {simulatorState === 'failure' && (
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.06)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '18px',
                      padding: '40px 24px',
                      textAlign: 'center',
                      marginBottom: '30px',
                    }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '54px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.15)', marginBottom: '16px' }}>
                      <AlertTriangle size={28} style={{ color: '#f87171' }} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fca5a5', margin: '0 0 8px 0' }}>
                      Pipeline Synthesis Failure
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#cbd5e1', maxWidth: '520px', margin: '0 auto 20px auto', lineHeight: 1.5 }}>
                      The PDF parser encountered an unexpected OCR formatting artifact in table segmentation. You can retry synthesis or upload an uncompressed PDF.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                      <button
                        onClick={() => setSimulatorState('processing')}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 18px',
                          backgroundColor: '#ef4444',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        <RefreshCw size={13} />
                        <span>Retry Synthesis</span>
                      </button>
                      <button
                        onClick={onNavigateToUploadCv}
                        style={{
                          padding: '8px 18px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#cbd5e1',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                        }}
                      >
                        Re-upload PDF
                      </button>
                    </div>
                  </div>
                )}

                {simulatorState === 'partial' && (
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.08)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: '14px',
                      padding: '14px 18px',
                      marginBottom: '22px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <FileWarning size={20} style={{ color: '#fbbf24', flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fef3c7' }}>
                        Sparse CV Document Notice:
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#fde68a', marginLeft: '6px' }}>
                        Some quantifiable metrics (e.g. cost savings or QPS throughput) were missing. We enriched your profile with industry baselines.
                      </span>
                    </div>
                  </div>
                )}

                {/* 2-Column Grid Layout */}
                {(simulatorState === 'complete' || simulatorState === 'edit_mode' || simulatorState === 'partial') && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
                      gap: '24px',
                      alignItems: 'start',
                    }}
                  >
                    {/* Left Column (Dossier & Extraction Details) */}
                    <div>
                      <AiAnalysisProfessionalSummaryCard
                        isEditMode={simulatorState === 'edit_mode'}
                        initialSummary={analysisData?.professionalSummary}
                        onSaveSummary={(newSummary) => {
                          setAnalysisData((prev: any) => ({ ...prev, professionalSummary: newSummary }));
                        }}
                      />
                      <AiAnalysisSkillsTaxonomyCard
                        initialCategories={analysisData?.skillsTaxonomy}
                        onAddSkill={() => alert('Open Add Skill Modal')}
                        onMarkInaccuracies={() => alert('Feedback modal: report CV taxonomy discrepancy')}
                      />
                      <AiAnalysisWorkExperienceCard
                        initialExperiences={analysisData?.workExperience}
                        onAddRole={() => alert('Open Add Role Modal')}
                        onEditExperience={(idx) => alert(`Editing experience entry #${idx + 1}`)}
                      />
                      <AiAnalysisProjectsCard
                        initialProjects={analysisData?.projects}
                        onAddProject={() => alert('Open Add Project Modal')}
                      />
                      <AiAnalysisEducationCertCard
                        onEditEducation={() => alert('Editing Education')}
                        onAddCertification={() => alert('Adding Certification')}
                      />
                    </div>

                    {/* Right Column (Strength Scoring & Role Alignment) */}
                    <div>
                      <AiAnalysisCvStrengthScoreCard
                        overallScore={analysisData?.overallStrengthScore}
                      />
                      <AiAnalysisTechnicalCoverageCard
                        coverageMap={analysisData?.technicalCoverage}
                      />
                      <AiAnalysisRoleAlignmentCard
                        initialPaths={analysisData?.roleAlignments}
                        onSelectRole={(role) => alert(`Calibrating simulation profile for: ${role}`)}
                      />
                      <AiAnalysisFeedbackCard
                        improvements={analysisData?.improvements}
                        onEnhanceInEditor={onNavigateToCvBuilder || onNavigateToCv}
                      />
                      <AiAnalysisPrivacyCard onManagePrivacy={() => alert('Opening Privacy Settings Modal')} />
                    </div>
                  </div>
                )}

                {/* Milestone 4: Next Step Bar */}
                <AiAnalysisNextStepBar
                  onBackToCv={onNavigateToCv}
                  onStartAssessment={() => {
                    if (onNavigateToSimulations) onNavigateToSimulations();
                    else alert('Launching 5-Minute AI Career Assessment...');
                  }}
                />
              </>
            )}
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};
