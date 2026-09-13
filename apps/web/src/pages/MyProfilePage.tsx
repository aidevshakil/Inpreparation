import React, { useState } from 'react';
import { ProfileSimulatorBar, ProfileSimulatorState } from '../components/profile/ProfileSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { ProfileHeroCard } from '../components/profile/ProfileHeroCard';
import { ProfileBasicInfoSection } from '../components/profile/ProfileBasicInfoSection';
import { ProfileProfessionalInfoSection } from '../components/profile/ProfileProfessionalInfoSection';
import { ProfileTechnicalSkillsSection, SkillDepthItem, SkillLevel } from '../components/profile/ProfileTechnicalSkillsSection';
import { ProfileCareerPreferencesSection, JobType, WorkModality, SimulationDifficulty } from '../components/profile/ProfileCareerPreferencesSection';
import { ProfileCompletionSidebarCard } from '../components/profile/ProfileCompletionSidebarCard';
import { ProfileConnectedCvCard } from '../components/profile/ProfileConnectedCvCard';
import { ProfileCareerAssessmentCard } from '../components/profile/ProfileCareerAssessmentCard';
import { ProfileHowItHelpsCard } from '../components/profile/ProfileHowItHelpsCard';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { Check, AlertTriangle, Loader2, Save } from 'lucide-react';

interface MyProfilePageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const MyProfilePage: React.FC<MyProfilePageProps> = ({
  onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState, setSimulatorState] = useState<ProfileSimulatorState>('default');
  const [activeNav, setActiveNav] = useState<NavItemKey>('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('Shakil Ahamed');
  const [email] = useState('shakil.ahamed@example.com');
  const [phone, setPhone] = useState('+1 (555) 349-8201');
  const [location, setLocation] = useState('San Francisco, CA, United States');
  const [language, setLanguage] = useState('en-US');

  const [currentRole, setCurrentRole] = useState('Flutter Developer');
  const [targetRole, setTargetRole] = useState('Backend Developer (Python / Go)');
  const [seniority, setSeniority] = useState('mid');
  const [yearsOfExperience, setYearsOfExperience] = useState('3.5');
  const [currentIndustry, setCurrentIndustry] = useState('fintech');
  const [targetIndustry, setTargetIndustry] = useState('high-scale-saas');

  const [skills, setSkills] = useState<string[]>([
    'Python',
    'Flutter',
    'Dart',
    'FastAPI',
    'PostgreSQL',
    'Machine Learning',
    'Docker',
  ]);

  const [skillDepths, setSkillDepths] = useState<SkillDepthItem[]>([
    { id: 'python', name: 'Python (Backend & Concurrency)', level: 'advanced', dotColor: '#818cf8' },
    { id: 'flutter', name: 'Flutter & Dart (Mobile Arch)', level: 'advanced', dotColor: '#38bdf8' },
    { id: 'postgres', name: 'PostgreSQL & Query Optimization', level: 'intermediate', dotColor: '#34d399' },
  ]);

  const [jobTypes, setJobTypes] = useState<JobType[]>(['full-time']);
  const [workModalities, setWorkModalities] = useState<WorkModality[]>(['remote', 'hybrid']);
  const [interviewFocusAreas, setInterviewFocusAreas] = useState<string[]>([
    'tech_depth',
    'sys_design',
    'prob_solving',
    'role_spec',
  ]);
  const [difficulty, setDifficulty] = useState<SimulationDifficulty>('advanced');
  const [careerGoal, setCareerGoal] = useState(
    'Transitioning from Flutter mobile development to high-scale Python/FastAPI distributed systems. Want to master concurrency, event-driven queue architectures (RabbitMQ/Kafka), and communicate architectural trade-offs concisely without rambling.'
  );

  const handleAddSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSimulatorState('unsaved');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
    setSimulatorState('unsaved');
  };

  const handleChangeSkillDepth = (id: string, level: SkillLevel) => {
    setSkillDepths(skillDepths.map((s) => (s.id === id ? { ...s, level } : s)));
    setSimulatorState('unsaved');
  };

  const handleToggleJobType = (type: JobType) => {
    if (jobTypes.includes(type)) {
      if (jobTypes.length > 1) setJobTypes(jobTypes.filter((t) => t !== type));
    } else {
      setJobTypes([...jobTypes, type]);
    }
    setSimulatorState('unsaved');
  };

  const handleToggleWorkModality = (modality: WorkModality) => {
    if (workModalities.includes(modality)) {
      if (workModalities.length > 1) setWorkModalities(workModalities.filter((m) => m !== modality));
    } else {
      setWorkModalities([...workModalities, modality]);
    }
    setSimulatorState('unsaved');
  };

  const handleToggleFocusArea = (area: string) => {
    if (interviewFocusAreas.includes(area)) {
      setInterviewFocusAreas(interviewFocusAreas.filter((a) => a !== area));
    } else {
      setInterviewFocusAreas([...interviewFocusAreas, area]);
    }
    setSimulatorState('unsaved');
  };

  const handleSave = () => {
    setSimulatorState('saving');
    setTimeout(() => {
      setSimulatorState('saved');
    }, 1000);
  };

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) {
      onNavigateToDashboard();
    } else if (key === 'library' && onNavigateToSimulations) {
      onNavigateToSimulations();
    } else if (key === 'assessment') {
      setAssessmentModalOpen(true);
    } else if (key === 'improvement' && onNavigateToAi) {
      onNavigateToAi();
    } else if (key === 'profile' && onNavigateToHome) {
      // already on profile
    }
  };

  const isSaving = simulatorState === 'saving';
  const isUnsaved = simulatorState === 'unsaved';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Interactive Prototype Simulator Bar */}
      <ProfileSimulatorBar
        currentState={simulatorState}
        onStateChange={(state) => setSimulatorState(state)}
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

        {/* Right Content Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, backgroundColor: '#090c15' }}>
          {/* 3. Studio Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* 4. Main Body */}
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
                  <span style={{ color: '#cbd5e1' }}>Settings &amp; Personalization</span>
                </div>

                <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                  My Profile
                </h1>

                <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
                  Keep your career information up-to-date so Inprep AI can accurately calibrate mock interviews, question difficulty, and rubric rubrics.
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', alignSelf: 'center' }}>
                <button
                  onClick={() => setSimulatorState('default')}
                  style={{
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
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 22px',
                    background: isUnsaved || isSaving
                      ? 'linear-gradient(135deg, #7c3aed, #4f46e5)'
                      : 'rgba(99, 102, 241, 0.25)',
                    color: '#ffffff',
                    border: isUnsaved || isSaving ? 'none' : '1px solid rgba(99, 102, 241, 0.35)',
                    borderRadius: '10px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: isSaving ? 'not-allowed' : 'pointer',
                    boxShadow: isUnsaved ? '0 4px 18px rgba(124, 58, 237, 0.45)' : 'none',
                    transition: 'all 0.18s ease',
                  }}
                >
                  {isSaving ? (
                    <>
                      <Loader2 size={15} className="spin-animate" />
                      <span>Saving Changes...</span>
                    </>
                  ) : (
                    <>
                      <Save size={15} />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Simulated Alerts & Banners */}
            {simulatorState === 'saved' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  color: '#34d399',
                  fontSize: '0.82rem',
                }}
              >
                <Check size={16} strokeWidth={3} />
                <span>Profile changes successfully synchronized to Inprep AI calibration engine.</span>
              </div>
            )}

            {simulatorState === 'api_error' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  border: '1px solid rgba(244, 63, 94, 0.35)',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  color: '#fb7185',
                  fontSize: '0.82rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertTriangle size={16} />
                  <span>Failed to persist profile updates to database. Please check connection and retry.</span>
                </div>
                <button
                  onClick={handleSave}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Retry
                </button>
              </div>
            )}

            {/* Profile Hero Overview Card */}
            <ProfileHeroCard
              name={fullName}
              email={email}
              currentRole={currentRole}
              targetRole={targetRole}
              experience={`${seniority === 'senior' ? 'Senior' : 'Intermediate'} (${yearsOfExperience} yrs exp)`}
              completionPercent={85}
              remainingItem="Career Assessment"
              onUploadPhoto={() => alert('Photo upload dialog...')}
              onReplacePhoto={() => alert('Replace photo...')}
              onRemovePhoto={() => alert('Photo removed.')}
            />

            {/* Main Form and Sticky Sidebar Two-Column Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(340px, 2.1fr) minmax(280px, 0.9fr)',
                gap: '24px',
                alignItems: 'start',
              }}
              className="profile-content-grid"
            >
              {/* Left Column: 4 Form Steps */}
              <div>
                <ProfileBasicInfoSection
                  fullName={fullName}
                  email={email}
                  phone={phone}
                  location={location}
                  language={language}
                  onChangeFullName={(val) => {
                    setFullName(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangePhone={(val) => {
                    setPhone(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangeLocation={(val) => {
                    setLocation(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangeLanguage={(val) => {
                    setLanguage(val);
                    setSimulatorState('unsaved');
                  }}
                  showValidationError={simulatorState === 'validation_error'}
                />

                <ProfileProfessionalInfoSection
                  currentRole={currentRole}
                  targetRole={targetRole}
                  seniority={seniority}
                  yearsOfExperience={yearsOfExperience}
                  currentIndustry={currentIndustry}
                  targetIndustry={targetIndustry}
                  onChangeCurrentRole={(val) => {
                    setCurrentRole(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangeTargetRole={(val) => {
                    setTargetRole(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangeSeniority={(val) => {
                    setSeniority(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangeYearsOfExperience={(val) => {
                    setYearsOfExperience(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangeCurrentIndustry={(val) => {
                    setCurrentIndustry(val);
                    setSimulatorState('unsaved');
                  }}
                  onChangeTargetIndustry={(val) => {
                    setTargetIndustry(val);
                    setSimulatorState('unsaved');
                  }}
                  showValidationError={simulatorState === 'validation_error'}
                />

                <ProfileTechnicalSkillsSection
                  skills={skills}
                  onAddSkill={handleAddSkill}
                  onRemoveSkill={handleRemoveSkill}
                  skillDepths={skillDepths}
                  onChangeSkillDepth={handleChangeSkillDepth}
                />

                <ProfileCareerPreferencesSection
                  jobTypes={jobTypes}
                  onToggleJobType={handleToggleJobType}
                  workModalities={workModalities}
                  onToggleWorkModality={handleToggleWorkModality}
                  interviewFocusAreas={interviewFocusAreas}
                  onToggleFocusArea={handleToggleFocusArea}
                  difficulty={difficulty}
                  onChangeDifficulty={(diff) => {
                    setDifficulty(diff);
                    setSimulatorState('unsaved');
                  }}
                  careerGoal={careerGoal}
                  onChangeCareerGoal={(goal) => {
                    setCareerGoal(goal);
                    setSimulatorState('unsaved');
                  }}
                />
              </div>

              {/* Right Column: Sticky Sidebar Cards */}
              <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <ProfileCompletionSidebarCard
                  percentage={85}
                  onCompleteMissing={() => setAssessmentModalOpen(true)}
                />

                <ProfileConnectedCvCard
                  fileName="Shakil_Ahamed_Resume.pdf"
                  fileSize="142 KB"
                  parsedDate="Parsed 3 days ago"
                  onViewCv={() => alert('Opening CV preview viewer...')}
                  onUpdateCv={() => alert('Opening CV upload modal...')}
                />

                <ProfileCareerAssessmentCard
                  onStartAssessment={() => setAssessmentModalOpen(true)}
                />

                <ProfileHowItHelpsCard
                  onManagePrivacy={() => alert('Privacy & telemetry settings modal...')}
                />
              </div>
            </div>

            {/* Footer */}
            <DashboardFooter />
          </main>
        </div>
      </div>

      {/* Career Assessment / Live Simulation Modal */}
      {assessmentModalOpen && (
        <LiveSimulationModal
          isOpen={assessmentModalOpen}
          onClose={() => setAssessmentModalOpen(false)}
          initialRole="System Concurrency & Architecture"
        />
      )}
    </div>
  );
};

export default MyProfilePage;
