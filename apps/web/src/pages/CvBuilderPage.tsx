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

  // Form State
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({
    fullName: 'Shakil Ahamed',
    professionalTitle: 'Senior Backend Engineer & Distributed Systems',
    email: 'shakil.ahamed@example.com',
    phone: '+1 (555) 349-8201',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/shakilahamed',
    github: 'github.com/shakilahamed',
    portfolio: 'shakil.dev',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  });

  const [summary, setSummary] = useState(
    'High-throughput Distributed Systems Engineer with 6+ years designing fault-tolerant backend infrastructures. Specialised in asynchronous event streaming (Kafka/Go), zero-downtime database partitioning (PostgreSQL/Redis), and cloud systems scaling (15,000+ QPS).'
  );

  const [experiences, setExperiences] = useState<ExperienceItem[]>([
    {
      id: 'exp-1',
      roleTitle: 'Senior Backend Engineer',
      company: 'FinScale Labs',
      location: 'San Francisco, CA (Remote)',
      timeline: '2023 - Present',
      bulletsText:
        '• Architected distributed transaction saga coordination engine supporting 12,000+ QPS across 4 regions.\n• Reduced P99 tail latency by 34% by redesigning cache eviction policies on partitioned PostgreSQL and Redis.\n• Mentored team of 6 engineers on event-driven streaming best practices and Go.',
    },
    {
      id: 'exp-2',
      roleTitle: 'Software Engineer',
      company: 'Nomura Tech Solutions',
      location: 'Austin, TX (Remote)',
      timeline: '2021 - 2023',
      bulletsText:
        '• Built microservices ingestion pipeline handling 10M daily records using Python/FastAPI and Celery workers.\n• Implemented PostgreSQL horizontal database sharding, saving $45K annually on compute resources.',
    },
  ]);

  const [educations, setEducations] = useState<EducationItem[]>([
    {
      id: 'edu-1',
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'North South University',
      yearHonors: 'Graduated 2021 • Major Cum Laude (GPA 3.84/4.0)',
      coursework: 'Distributed Systems, Advanced Algorithms, Relational Databases, Cryptographic Protocols',
    },
  ]);

  const [skillGroups, setSkillGroups] = useState<SkillCategoryGroup[]>([
    {
      category: 'Languages',
      skills: ['Python 3.12', 'Go (Golang)', 'SQL', 'Dart'],
    },
    {
      category: 'Frameworks & Protocols',
      skills: ['FastAPI', 'Apache Kafka', 'gRPC / Protobufs', 'PostgreSQL & Redis'],
    },
  ]);

  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      id: 'proj-1',
      name: 'Distributed Transaction Scribe Engine',
      badge: 'Open Source',
      year: '2024',
      description:
        'Lightweight Distributed consensus ledger with Raft consensus. Demonstrates sub-millisecond multi-region replication and failure injection resiliency.',
    },
    {
      id: 'proj-2',
      name: 'Acoustic Prosody Analyzer',
      badge: 'Research Tool',
      year: '2023',
      description:
        'Real-time pitch tracking and speech cadence evaluator developed with Python, Librosa and WebSockets streaming.',
    },
  ]);

  const [certs, setCerts] = useState<CertItem[]>([
    {
      id: 'cert-1',
      title: 'AWS Certified Developer – Associate',
      issuerDate: 'Amazon Web Services • Issued Nov 2023 (Credential ID: Verified ✓)',
      isVerified: true,
    },
  ]);

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
      roleTitle: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Remote',
      timeline: '2024 - Present',
      bulletsText: '• Designed and implemented performant backend APIs.\n• Collaborated with cross-functional teams to deliver scalable solutions.',
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
      degree: 'M.Sc. in Distributed Systems',
      institution: 'Stanford Online',
      yearHonors: '2024 • Honors',
      coursework: 'Consensus Protocols, Cloud Architecture',
    };
    setEducations((prev) => [...prev, newDegree]);
  };

  const handleAddProject = () => {
    const newProject: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: 'High-Concurrency In-Memory Queue',
      badge: 'Open Source',
      year: '2024',
      description: 'Zero-allocation ring buffer message queue built in Go with lock-free atomic pointers.',
    };
    setProjects((prev) => [...prev, newProject]);
  };

  const handleAddCredential = () => {
    const newCert: CertItem = {
      id: `cert-${Date.now()}`,
      title: 'Certified Kubernetes Administrator (CKA)',
      issuerDate: 'Linux Foundation • Issued Jan 2024',
      isVerified: true,
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
            {/* Header & Breadcrumb & Action Pill */}
            <CvBuilderHeader
              onNavigateToCv={onNavigateToCv}
              onImportResume={onNavigateToUploadCv}
              onSaveDraft={() => alert('Draft saved to Encrypted Vault!')}
              onPreviewA4={() => alert('Opening Fullscreen A4 Preview...')}
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
                  onExpandFullscreen={() => alert('Entering fullscreen preview modal...')}
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
    </div>
  );
};

export default CvBuilderPage;
