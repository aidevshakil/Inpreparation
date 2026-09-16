import React, { useState } from 'react';
import type { CvBuilderState } from '../components/cv-builder/CvBuilderSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { CvBuilderHeader } from '../components/cv-builder/CvBuilderHeader';
import { CvBuilderStepProgress } from '../components/cv-builder/CvBuilderStepProgress';
import { CvBuilderPersonalInfoSection, PersonalInfoData } from '../components/cv-builder/CvBuilderPersonalInfoSection';
import { CvBuilderSummarySection } from '../components/cv-builder/CvBuilderSummarySection';
import { CvBuilderExperienceSection, ExperienceItem } from '../components/cv-builder/CvBuilderExperienceSection';
import { CvBuilderEducationSection, EducationItem } from '../components/cv-builder/CvBuilderEducationSection';
import { CvBuilderSkillsSection, SkillCategoryGroup } from '../components/cv-builder/CvBuilderSkillsSection';
import { CvBuilderProjectsSection, ProjectItem } from '../components/cv-builder/CvBuilderProjectsSection';
import { CvBuilderCertsSection, CertItem } from '../components/cv-builder/CvBuilderCertsSection';
import { CvBuilderA4PreviewSheet, CvTemplateType } from '../components/cv-builder/CvBuilderA4PreviewSheet';
import { CvBuilderAiCoachCard } from '../components/cv-builder/CvBuilderAiCoachCard';
import { CvBuilderAiModal } from '../components/cv-builder/CvBuilderAiModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { useAuth } from '../context/AuthContext';

interface CvBuilderPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToUploadCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const CvBuilderPage: React.FC<CvBuilderPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToCvAnalysis,
  onNavigateToUploadCv,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState] = useState<CvBuilderState>('default');
  const [activeNav, setActiveNav] = useState<NavItemKey>('cv');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [editingExperienceId, setEditingExperienceId] = useState<string | null>(null);
  const [isFullscreenPreview, setIsFullscreenPreview] = useState(false);
  
  const { user } = useAuth();

  // Form State
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({
    fullName: user.name || '',
    professionalTitle: '',
    email: user.email || '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
    avatarUrl: user.avatarUrl || '',
  });

  const [summary, setSummary] = useState('');

  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  const [educations, setEducations] = useState<EducationItem[]>([]);

  const [skillGroups, setSkillGroups] = useState<SkillCategoryGroup[]>([
    {
      category: 'Languages',
      skills: [],
    }
  ]);

  const [projects, setProjects] = useState<ProjectItem[]>([]);

  const [certs, setCerts] = useState<CertItem[]>([]);

  const [activeTemplate, setActiveTemplate] = useState<CvTemplateType>('modern');

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

  const handlePersonalInfoChange = (field: keyof PersonalInfoData, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddExperience = () => {
    const newId = `exp-${Date.now()}`;
    const newEntry: ExperienceItem = {
      id: newId,
      roleTitle: '',
      company: '',
      location: '',
      timeline: '',
      bulletsText: '',
    };
    setExperiences((prev) => [...prev, newEntry]);
  };

  const handleUpdateExperience = (id: string, field: keyof ExperienceItem, value: string) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  const handlePolishBullets = (expId: string) => {
    setEditingExperienceId(expId);
    setAiModalOpen(true);
  };

  const handleAddSkill = (skill: string) => {
    setSkillGroups((prev) => {
      const copy = [...prev];
      if (copy.length > 0) {
        copy[0] = { ...copy[0], skills: [...copy[0].skills, skill] };
      }
      return copy;
    });
  };

  const handleRemoveSkill = (categoryIndex: number, skillIndex: number) => {
    setSkillGroups((prev) => {
      const copy = [...prev];
      copy[categoryIndex] = {
        ...copy[categoryIndex],
        skills: copy[categoryIndex].skills.filter((_, idx) => idx !== skillIndex),
      };
      return copy;
    });
  };

  const handleAddDegree = () => {
    const newDegree: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: '',
      institution: '',
      yearHonors: '',
      coursework: '',
    };
    setEducations((prev) => [...prev, newDegree]);
  };

  const handleAddProject = () => {
    const newProject: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: '',
      badge: '',
      year: '',
      description: '',
    };
    setProjects((prev) => [...prev, newProject]);
  };

  const handleAddCredential = () => {
    const newCert: CertItem = {
      id: `cert-${Date.now()}`,
      title: '',
      issuerDate: '',
      isVerified: false,
    };
    setCerts((prev) => [...prev, newCert]);
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
          creditsRemaining={user.creditsRemaining}
          totalCredits={user.totalCredits}
        />

        {/* 3. Main Body Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          {/* Top Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Page Inner Container */}
          <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 28px 40px 28px' }}>
            {/* Header & Breadcrumb & Action Pill */}
            <CvBuilderHeader
              onNavigateToCv={onNavigateToCv}
              onImportResume={onNavigateToUploadCv}
              onSaveDraft={() => alert('Draft saved to Encrypted Vault!')}
              onPreviewA4={() => setIsFullscreenPreview(true)}
              onContinueToAssessment={() => {
                if (onNavigateToCvAnalysis) onNavigateToCvAnalysis();
                else if (onNavigateToSimulations) onNavigateToSimulations();
                else alert('Continuing to AI Assessment...');
              }}
              isAutosaving={simulatorState === 'offline'}
            />

            {/* Step Progress Milestone Bar */}
            <CvBuilderStepProgress
              activeSection="personal"
              onSelectSection={(secId) => {
                const el = document.getElementById(`section-${secId}`);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              personalComplete={Boolean(personalInfo.fullName && personalInfo.email)}
              summaryComplete={Boolean(summary.trim().length > 0)}
              experienceCount={experiences.length}
              educationCount={educations.length}
              skillCount={skillGroups.reduce((acc, group) => acc + group.skills.length, 0)}
              projectCount={projects.length}
              certCount={certs.length}
            />

            {/* 2-Column Grid: Form Sections (Left) vs. Sticky Live A4 Preview (Right) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1.05fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Form Sections */}
              <div>
                <CvBuilderPersonalInfoSection
                  data={personalInfo}
                  onChange={handlePersonalInfoChange}
                />

                <CvBuilderSummarySection
                  summary={summary}
                  onChange={(val) => setSummary(val)}
                  onImproveWithAi={() => {
                    setEditingExperienceId(null);
                    setAiModalOpen(true);
                  }}
                  onApplyPreset={(type) => {
                    if (type === 'concise') {
                      setSummary(
                        'Staff-level Backend Engineer with 6+ years building high-throughput microservices using Python, FastAPI, and Go. Proven track record eliminating P99 tail latency by 34% via Kafka event streams and partitioned PostgreSQL.'
                      );
                    } else if (type === 'technical') {
                      setSummary(
                        'Distributed Systems Engineer specializing in Raft consensus coordinators, lock-free concurrency, partitioned PostgreSQL clustering, and Kafka streaming pipelines sustaining 15,000+ transactional QPS.'
                      );
                    } else if (type === 'quantify') {
                      setSummary(
                        'Senior Backend Engineer who scaled microservice infrastructure from 2k to 15k QPS, reduced P99 query latency by 34%, and maintained 99.98% multi-region uptime across 4 AWS clusters.'
                      );
                    }
                  }}
                />

                <CvBuilderExperienceSection
                  experiences={experiences}
                  onAddExperience={handleAddExperience}
                  onUpdateExperience={handleUpdateExperience}
                  onDeleteExperience={handleDeleteExperience}
                  onPolishBullets={handlePolishBullets}
                />

                <CvBuilderEducationSection
                  educations={educations}
                  onAddDegree={handleAddDegree}
                  onEditDegree={() => alert('Editing degree...')}
                  onDeleteDegree={(id) => setEducations((prev) => prev.filter((e) => e.id !== id))}
                />

                <CvBuilderSkillsSection
                  skillGroups={skillGroups}
                  onAddSkill={handleAddSkill}
                  onRemoveSkill={handleRemoveSkill}
                />

                <CvBuilderProjectsSection
                  projects={projects}
                  onAddProject={handleAddProject}
                  onEditProject={() => alert('Editing project...')}
                  onDeleteProject={(id) => setProjects((prev) => prev.filter((p) => p.id !== id))}
                />

                <CvBuilderCertsSection
                  certs={certs}
                  onAddCredential={handleAddCredential}
                  onDeleteCredential={(id) => setCerts((prev) => prev.filter((c) => c.id !== id))}
                />
              </div>

              {/* Right Column: Sticky Live A4 Preview & Coach Diagnostics */}
              <div style={{ position: 'sticky', top: '110px' }}>
                <CvBuilderA4PreviewSheet
                  personalInfo={personalInfo}
                  summary={summary}
                  experiences={experiences}
                  educations={educations}
                  skillGroups={skillGroups}
                  projects={projects}
                  certs={certs}
                  activeTemplate={activeTemplate}
                  onSelectTemplate={(tpl) => setActiveTemplate(tpl)}
                  onDownloadPdf={() => alert('Downloading calibrated PDF...')}
                  onExpandFullscreen={() => setIsFullscreenPreview(true)}
                />

                <CvBuilderAiCoachCard />
              </div>
            </div>
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>

      {/* AI Bullet Polisher Modal */}
      <CvBuilderAiModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        originalText={
          editingExperienceId
            ? experiences.find((e) => e.id === editingExperienceId)?.bulletsText || ''
            : summary
        }
        onApply={(enhanced) => {
          if (editingExperienceId) {
            handleUpdateExperience(editingExperienceId, 'bulletsText', enhanced);
          } else {
            setSummary(enhanced);
          }
        }}
      />

      {/* Fullscreen A4 Preview Modal */}
      {isFullscreenPreview && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(3, 7, 18, 0.95)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              padding: '24px',
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'sticky',
              top: 0,
              zIndex: 10000,
            }}
          >
            <button
              onClick={() => setIsFullscreenPreview(false)}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                padding: '8px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Close Preview
            </button>
          </div>
          
          <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', paddingBottom: '60px' }}>
            <CvBuilderA4PreviewSheet
              personalInfo={personalInfo}
              summary={summary}
              experiences={experiences}
              educations={educations}
              skillGroups={skillGroups}
              projects={projects}
              certs={certs}
              activeTemplate={activeTemplate}
              onSelectTemplate={(tpl) => setActiveTemplate(tpl)}
              onDownloadPdf={() => alert('Downloading calibrated PDF...')}
              onExpandFullscreen={() => setIsFullscreenPreview(false)} // Toggle off if clicked inside
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CvBuilderPage;
