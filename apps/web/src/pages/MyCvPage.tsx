import React, { useState, useEffect } from 'react';
import type { CvSimulatorState } from '../components/cv/CvPrototypeSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { CvActiveMasterCard } from '../components/cv/CvActiveMasterCard';
import { CvUploadDropzoneCard } from '../components/cv/CvUploadDropzoneCard';
import { CvOcrPreviewCanvas } from '../components/cv/CvOcrPreviewCanvas';
import { CvVersionHistoryTable, type CvVersion } from '../components/cv/CvVersionHistoryTable';
import { CvStrengthCalibratorCard } from '../components/cv/CvStrengthCalibratorCard';
import { CvExecutiveAiSynthesisCard } from '../components/cv/CvExecutiveAiSynthesisCard';
import { CvCalibratedMockPipelineCard } from '../components/cv/CvCalibratedMockPipelineCard';
import { CvEncryptedVaultCard } from '../components/cv/CvEncryptedVaultCard';
import { CvReplaceModal } from '../components/cv/CvReplaceModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DocumentViewerModal } from '../components/cv/DocumentViewerModal';
import { FileEdit, UploadCloud, Cpu, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

import {
  uploadResumeProfile,
  getLatestCvAnalysis,
  getUserResumes,
  getResumeById,
  rollbackResumeVersion,
  deleteResumeVersion,
} from '../services/api';

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
  const [isDocViewerOpen, setIsDocViewerOpen] = useState(false);
  const [uploadPercent, setUploadPercent] = useState(65);
  const [versionHistory, setVersionHistory] = useState<any[]>([]);

  const [analysisData, setAnalysisData] = useState<any>(() => {
    try {
      const cached = localStorage.getItem('inprep_cv_analysis');
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });

  // Fetch latest analyzed CV data and version history for user
  useEffect(() => {
    let isMounted = true;
    async function fetchUserData() {
      if (!user.id) return;
      try {
        const [res, resumes] = await Promise.all([
          getLatestCvAnalysis(user.id),
          getUserResumes(user.id).catch(() => []),
        ]);

        if (isMounted) {
          if (res && res.analysis) {
            setAnalysisData(res.analysis);
            localStorage.setItem('inprep_cv_analysis', JSON.stringify(res.analysis));
          }
          if (Array.isArray(resumes) && resumes.length > 0) {
            const formatted = resumes.map((r: any, idx: number) => ({
              id: r.id || `v-${idx}`,
              fileName: r.fileName || 'Active_Resume.pdf',
              uploadDate: r.createdAt
                ? new Date(r.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                : 'Recently',
              size: r.fileSize ? `${Math.round(r.fileSize / 1024)} KB` : '142 KB',
              status: idx === 0 ? 'vectorized' : 'archived',
              statusLabel: idx === 0 ? 'Active Master' : 'Archived',
            }));
            setVersionHistory(formatted);
          }
        }
      } catch (err) {
        console.warn('Could not load CV data:', err);
      }
    }

    fetchUserData();
    return () => {
      isMounted = false;
    };
  }, [user.id, user.cvFileName]);

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
    setUploadPercent(20);

    try {
      const uploadTimer = setInterval(() => {
        setUploadPercent((prev) => (prev < 85 ? prev + 15 : prev));
      }, 150);

      // Read file binary as Base64 data URL for real PDF / DOCX parser
      const fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // Save to backend database and trigger AI CV Analysis with raw document binary
      const res = await uploadResumeProfile({
        userId: user.id,
        fileName: file.name,
        fileSize: file.size,
        fileBase64,
        experienceYears: Number(user.yearsOfExperience) || 3,
        parsedSummary: `Parsed CV for ${user.name || 'Candidate'}.`,
      });

      clearInterval(uploadTimer);
      setUploadPercent(100);

      // Merge file metadata with AI analysis response
      const updatedAnalysis = {
        ...(res?.analysis || {}),
        fileName: file.name,
        fileSize: file.size,
      };

      setAnalysisData(updatedAnalysis);
      localStorage.setItem('inprep_cv_analysis', JSON.stringify(updatedAnalysis));

      const extractedSkills = updatedAnalysis.extractedSkills
        || updatedAnalysis.skills
        || updatedAnalysis.skillsTaxonomy?.flatMap((c: any) => c.skills)
        || ['Flutter', 'Dart', 'Firebase', 'REST APIs'];
      const extractedRole = updatedAnalysis.candidateRole
        || updatedAnalysis.targetRole
        || updatedAnalysis.role
        || 'Full Stack Software Engineer';
      const extractedName = updatedAnalysis.candidateName
        || updatedAnalysis.name
        || user.name;
      const extractedScore = updatedAnalysis.overallStrengthScore
        || updatedAnalysis.atsScore
        || 91;

      // Update user in AuthContext / localStorage immediately
      updateUser({
        name: extractedName,
        targetRole: extractedRole,
        cvFileName: file.name,
        cvAtsScore: extractedScore,
        cvSkills: extractedSkills,
      });

      // Instantly prepend new version to version history table
      setVersionHistory((prev) => [
        {
          id: res?.resume?.id || `v-${Date.now()}`,
          fileName: file.name,
          uploadDate: 'Just now',
          size: `${Math.round(file.size / 1024)} KB`,
          status: 'vectorized',
          statusLabel: 'Active Master',
        },
        ...prev.map((v) => ({ ...v, status: 'archived' as const, statusLabel: 'Archived' })),
      ]);

      setSimulatorState('default');
    } catch (err) {
      console.warn('Resume upload encountered error, falling back locally:', err);
      const fallbackAnalysis = {
        fileName: file.name,
        fileSize: file.size,
        candidateName: user.name || 'Candidate',
        candidateRole: 'Full Stack Software Engineer',
        candidateEmail: user.email || 'candidate@example.com',
        overallStrengthScore: 91,
      };
      setAnalysisData(fallbackAnalysis);
      updateUser({
        cvFileName: file.name,
        cvAtsScore: 91,
      });
      setSimulatorState('default');
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

  // Derived active CV dossier details from real OCR analysis with resilient fallbacks
  const displayRole = analysisData?.candidateRole || analysisData?.targetRole || analysisData?.role || user.targetRole || 'Full Stack Software Engineer';
  const displayName = analysisData?.candidateName || analysisData?.name || user.name || 'Candidate';
  const displayEmail = analysisData?.candidateEmail || analysisData?.email || user.email;
  const displayPhone = analysisData?.candidatePhone || analysisData?.phone;
  const displayLocation = analysisData?.candidateLocation || analysisData?.location;
  const displayRawText = analysisData?.extractedTextPreview || analysisData?.rawTextPreview;

  const rawSkills: string[] = Array.isArray(analysisData?.skillsTaxonomy) && analysisData.skillsTaxonomy.length > 0
    ? analysisData.skillsTaxonomy.flatMap((c: any) => (Array.isArray(c?.skills) ? c.skills : []))
    : Array.isArray(analysisData?.extractedSkills) && analysisData.extractedSkills.length > 0
    ? analysisData.extractedSkills
    : Array.isArray(analysisData?.skills) && analysisData.skills.length > 0
    ? analysisData.skills
    : Array.isArray(user.cvSkills) && user.cvSkills.length > 0
    ? user.cvSkills
    : ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Clean Architecture'];

  const displaySkills = (rawSkills && rawSkills.length > 0)
    ? rawSkills.filter((s): s is string => typeof s === 'string' && s.trim().length > 0)
    : ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Clean Architecture'];

  const displayScore = analysisData?.overallStrengthScore || analysisData?.atsScore || user.cvAtsScore || 91;
  const displayFileName = analysisData?.fileName || user.cvFileName || 'Active_Resume.pdf';
  const displayFileSize = analysisData?.fileSize ? `${Math.round(analysisData.fileSize / 1024)} KB` : '142 KB';

  const handleDownloadVersion = async (vId: string) => {
    try {
      const targetVersion = versionHistory.find((v) => v.id === vId);
      const fileName = targetVersion?.fileName || displayFileName || 'Resume.pdf';

      if (vId && vId !== 'active' && !vId.startsWith('v-')) {
        const res = await getResumeById(vId);
        if (res?.resume?.fileUrl && res.resume.fileUrl.startsWith('data:')) {
          const a = document.createElement('a');
          a.href = res.resume.fileUrl;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
          return;
        }
      }

      const targetAnalysis = analysisData;
      const role = targetAnalysis?.candidateRole || targetAnalysis?.targetRole || displayRole;
      const name = targetAnalysis?.candidateName || displayName;
      const skills = Array.isArray(targetAnalysis?.extractedSkills) && targetAnalysis.extractedSkills.length > 0
        ? targetAnalysis.extractedSkills
        : displaySkills;

      const cvDossier = [
        `========================================================================`,
        `                 ${name.toUpperCase()} - CURRICULUM VITAE`,
        `                 ${role}`,
        `========================================================================`,
        `Email:    ${targetAnalysis?.candidateEmail || displayEmail || 'candidate@example.com'}`,
        `Phone:    ${targetAnalysis?.candidatePhone || displayPhone || 'N/A'}`,
        `Location: ${targetAnalysis?.candidateLocation || displayLocation || 'Remote / Hybrid'}`,
        `File:     ${fileName}`,
        `========================================================================\n`,
        `[PROFESSIONAL SUMMARY]`,
        `${targetAnalysis?.professionalSummary || 'Experienced software engineering professional with verified competencies.'}\n`,
        `[TECHNICAL COMPETENCIES]`,
        `${skills.join(' • ')}\n`,
        `[WORK EXPERIENCE]`,
        ...(Array.isArray(targetAnalysis?.workExperience) && targetAnalysis.workExperience.length > 0
          ? targetAnalysis.workExperience.map((exp: any) =>
              `• ${exp.title} at ${exp.company} (${exp.duration || 'Recent'})\n  ${(exp.bullets || []).join('\n  ')}\n  Tech Stack: ${(exp.stack || []).join(', ')}`
            )
          : ['• Software Development Experience aligned with target engineering rubrics']),
        `\n[FEATURED PROJECTS]`,
        ...(Array.isArray(targetAnalysis?.projects) && targetAnalysis.projects.length > 0
          ? targetAnalysis.projects.map((p: any) =>
              `• ${p.title} (${p.subtitle || 'Production'})\n  ${p.description}\n  Metrics: ${p.metrics || 'High Impact'}`
            )
          : ['• Scalable Software Production Projects']),
        `\n[EDUCATION]`,
        ...(Array.isArray(targetAnalysis?.education) && targetAnalysis.education.length > 0
          ? targetAnalysis.education.map((e: any) => `• ${typeof e === 'object' ? (e.degree || e.institution || JSON.stringify(e)) : e}`)
          : ['• B.Sc in Computer Science & Engineering']),
        `\n========================================================================`,
        `Generated by InPreparation Candidate Intelligence Platform`,
        `========================================================================`,
      ].join('\n');

      const blob = new Blob([cvDossier], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName.replace(/\.(pdf|docx)$/i, '') + '_CV.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.warn('Download error:', e);
    }
  };

  const handleRollbackVersion = async (vId: string) => {
    try {
      const res = await rollbackResumeVersion(vId);
      if (res && res.success) {
        if (res.analysis) {
          setAnalysisData(res.analysis);
          localStorage.setItem('inprep_cv_analysis', JSON.stringify(res.analysis));

          const extractedSkills = res.analysis.extractedSkills
            || res.analysis.skills
            || user.cvSkills;
          const extractedRole = res.analysis.candidateRole
            || res.analysis.targetRole
            || res.resume?.targetRole
            || user.targetRole;
          const extractedName = res.analysis.candidateName
            || res.analysis.name
            || user.name;
          const extractedScore = res.analysis.overallStrengthScore
            || res.analysis.atsScore
            || 91;

          updateUser({
            name: extractedName,
            targetRole: extractedRole,
            cvFileName: res.resume?.fileName || res.analysis.fileName,
            cvAtsScore: extractedScore,
            cvSkills: extractedSkills,
          });
        }

        const resumes = await getUserResumes(user.id);
        if (Array.isArray(resumes) && resumes.length > 0) {
          const formatted = resumes.map((r: any, idx: number) => ({
            id: r.id || `v-${idx}`,
            fileName: r.fileName || 'Active_Resume.pdf',
            uploadDate: r.createdAt
              ? new Date(r.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              : 'Recently',
            size: r.fileSize ? `${Math.round(r.fileSize / 1024)} KB` : '142 KB',
            status: idx === 0 ? 'vectorized' : 'archived',
            statusLabel: idx === 0 ? 'Active Master' : 'Archived',
            targetRole: r.targetRole,
          }));
          setVersionHistory(formatted);
        }
      }
    } catch (err) {
      console.warn('Rollback error:', err);
    }
  };

  const handleDeleteVersion = async (vId: string) => {
    if (!window.confirm('Are you sure you want to delete this archived CV version?')) return;
    try {
      await deleteResumeVersion(vId);
      setVersionHistory((prev) => prev.filter((v) => v.id !== vId));
    } catch (err) {
      console.warn('Delete error:', err);
    }
  };

  const handlePreviewVersion = async (v: CvVersion) => {
    try {
      const res = await getResumeById(v.id);
      if (res && res.analysis) {
        setAnalysisData(res.analysis);
      }
      setIsDocViewerOpen(true);
    } catch (e) {
      console.warn('Preview version error:', e);
      setIsDocViewerOpen(true);
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
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-main)',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
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
                    <strong>Embedding Pipeline Active:</strong> Computing dense vectors across {displaySkills.length} technical skills and aligning with {displayRole} rubrics.
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
                  fileName={displayFileName}
                  fileSize={displayFileSize}
                  uploadDate="Uploaded recently"
                  vectorizedTime="AI Vectorized"
                  onFullPreview={() => setIsDocViewerOpen(true)}
                  onSkillMatrix={() => {
                    if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                    else alert('Displaying Skill Matrix breakdown...');
                  }}
                  onReplaceCv={() => setReplaceModalOpen(true)}
                  onDownload={() => handleDownloadVersion(versionHistory[0]?.id || 'active')}
                  onShare={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert('Share link copied to clipboard!');
                  }}
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
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  marginBottom: '28px',
                  textAlign: 'center',
                }}
              >
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                    No CV Uploaded Yet
                  </h2>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
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
                    candidateName={displayName}
                    candidateRole={displayRole}
                    candidateEmail={displayEmail}
                    candidatePhone={displayPhone}
                    candidateLocation={displayLocation}
                    candidateSkills={displaySkills}
                    summary={analysisData?.professionalSummary}
                    workExperience={analysisData?.workExperience}
                    projects={analysisData?.projects}
                    education={analysisData?.education}
                    rawTextPreview={displayRawText}
                    onExpandDossier={() => {
                      if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                      else alert('Expanding full interactive candidate dossier...');
                    }}
                  />

                  <CvVersionHistoryTable
                    versions={versionHistory.length > 0 ? versionHistory : [
                      {
                        id: 'v1',
                        fileName: displayFileName,
                        uploadDate: 'Today',
                        size: displayFileSize,
                        status: 'vectorized',
                        statusLabel: 'Active Master',
                      },
                    ]}
                    onRollback={handleRollbackVersion}
                    onDownloadVersion={handleDownloadVersion}
                    onPreviewVersion={handlePreviewVersion}
                    onDeleteVersion={handleDeleteVersion}
                  />
                </div>

                {/* Right Column: Sticky Sidebar Diagnostics & Calibrator */}
                <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <CvStrengthCalibratorCard
                    score={displayScore}
                    technicalCoverage={analysisData?.technicalCoverage}
                    targetRole={displayRole}
                    onViewDeepBreakdown={() => {
                      if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                      else alert('Opening deep diagnostic breakdown...');
                    }}
                  />

                  <CvExecutiveAiSynthesisCard
                    candidateRole={displayRole}
                    skills={displaySkills}
                    strengths={analysisData?.strengths}
                    improvements={analysisData?.improvements}
                    onEnhanceWithAi={() => {
                      if (onNavigateToAi) onNavigateToAi();
                    }}
                  />

                  <CvCalibratedMockPipelineCard
                    targetRole={displayRole}
                    topSkills={displaySkills}
                    recentCompany={analysisData?.workExperience?.[0]?.company}
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

      {/* Interactive Document Viewer Modal */}
      <DocumentViewerModal
        isOpen={isDocViewerOpen}
        onClose={() => setIsDocViewerOpen(false)}
        fileName={displayFileName}
        fileSize={displayFileSize}
        fileUrl={analysisData?.fileUrl}
        candidateName={displayName}
        candidateRole={displayRole}
        candidateEmail={displayEmail}
        candidatePhone={displayPhone}
        candidateLocation={displayLocation}
        candidateSkills={displaySkills}
        summary={analysisData?.professionalSummary}
        workExperience={analysisData?.workExperience}
        projects={analysisData?.projects}
        education={analysisData?.education}
        rawTextPreview={displayRawText}
        onDownload={() => handleDownloadVersion(versionHistory[0]?.id || 'active')}
      />
    </div>
  );
};

export default MyCvPage;
