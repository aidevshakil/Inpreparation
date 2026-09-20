import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import type { ProfileSimulatorState } from '../components/profile/ProfileSimulatorBar';
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
import { getCandidateProfile, saveCandidateProfile, getLatestCvAnalysis } from '../services/api';
import { ProfilePrivacyModal, PrivacySettings } from '../components/profile/ProfilePrivacyModal';

const MAX_AVATAR_BYTES = 2 * 1024 * 1024; // 2 MB

interface MyProfilePageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const MyProfilePage: React.FC<MyProfilePageProps> = ({
  onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState, setSimulatorState] = useState<ProfileSimulatorState>('default');
  const [activeNav, setActiveNav] = useState<NavItemKey>('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useAuth();
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('en-US');

  const [currentRole, setCurrentRole] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [seniority, setSeniority] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('0');
  const [currentIndustry, setCurrentIndustry] = useState('');
  const [targetIndustry, setTargetIndustry] = useState('');

  const [skills, setSkills] = useState<string[]>([]);

  const [skillDepths, setSkillDepths] = useState<SkillDepthItem[]>([]);

  const [jobTypes, setJobTypes] = useState<JobType[]>([]);
  const [workModalities, setWorkModalities] = useState<WorkModality[]>([]);
  const [interviewFocusAreas, setInterviewFocusAreas] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<SimulationDifficulty>('intermediate');
  const [careerGoal, setCareerGoal] = useState('');

  const userId = user?.id || '';

  const [connectedCv, setConnectedCv] = useState<{ fileName: string; fileSize: string; parsedDate: string }>({
    fileName: '',
    fileSize: '',
    parsedDate: '',
  });

  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    allowSessionRecording: true,
    allowAnonymizedTelemetry: true,
    allowAiTrainingUsage: false,
  });

  const fetchProfile = useCallback(async () => {
    if (!userId) return;
    const data = await getCandidateProfile(userId);
    if (!data) {
      // no profile yet — leave fields blank, prefill from auth user
      if (user?.name) setFullName(user.name);
      return;
    }

    if (data.user?.name) setFullName(data.user.name);
    else if (user?.name) setFullName(user.name);

    if (data.user?.avatarUrl) setAvatarUrl(data.user.avatarUrl);
    else if (user?.avatarUrl) setAvatarUrl(user.avatarUrl);

    setIsEmailVerified(Boolean(data.user?.isEmailVerified ?? user?.isEmailVerified));

    if (typeof data.allowSessionRecording === 'boolean' ||
        typeof data.allowAnonymizedTelemetry === 'boolean' ||
        typeof data.allowAiTrainingUsage === 'boolean') {
      setPrivacySettings({
        allowSessionRecording: data.allowSessionRecording ?? true,
        allowAnonymizedTelemetry: data.allowAnonymizedTelemetry ?? true,
        allowAiTrainingUsage: data.allowAiTrainingUsage ?? false,
      });
    }

    if (data.phone) setPhone(data.phone);
    if (data.location) setLocation(data.location);
    if (data.language) setLanguage(data.language);
    if (data.currentRole) setCurrentRole(data.currentRole);
    if (data.targetRole) setTargetRole(data.targetRole);
    if (data.seniority) setSeniority(data.seniority);
    if (data.yearsOfExperience != null) setYearsOfExperience(String(data.yearsOfExperience));
    if (data.currentIndustry) setCurrentIndustry(data.currentIndustry);
    if (data.targetIndustry) setTargetIndustry(data.targetIndustry);
    if (data.skills?.length > 0) setSkills(data.skills);
    if (data.skillDepths?.length > 0) setSkillDepths(data.skillDepths);
    if (data.jobTypes?.length > 0) setJobTypes(data.jobTypes);
    if (data.workModalities?.length > 0) setWorkModalities(data.workModalities);
    if (data.interviewFocusAreas?.length > 0) setInterviewFocusAreas(data.interviewFocusAreas);
    if (data.difficulty) setDifficulty(data.difficulty as SimulationDifficulty);
    if (data.careerGoal) setCareerGoal(data.careerGoal);
  }, [userId, user?.name]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    getLatestCvAnalysis(userId).then((res: any) => {
      if (cancelled) return;
      const analysis = res?.analysis;
      if (!analysis) return;
      const sizeKb = analysis.fileSize ? Math.round(analysis.fileSize / 1024) : 0;
      setConnectedCv({
        fileName: analysis.fileName || '',
        fileSize: sizeKb ? `${sizeKb} KB` : '',
        parsedDate: analysis.createdAt
          ? new Date(analysis.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : '',
      });
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  // Real completion % based on populated fields (12 tracked fields)
  const completionPercent = React.useMemo(() => {
    const fields: Array<boolean> = [
      Boolean(fullName),
      Boolean(phone),
      Boolean(location),
      Boolean(currentRole),
      Boolean(targetRole),
      Boolean(seniority),
      Boolean(yearsOfExperience && yearsOfExperience !== '0'),
      Boolean(currentIndustry),
      Boolean(targetIndustry),
      skills.length > 0,
      jobTypes.length > 0,
      Boolean(careerGoal),
    ];
    const filled = fields.filter(Boolean).length;
    return Math.round((filled / fields.length) * 100);
  }, [fullName, phone, location, currentRole, targetRole, seniority, yearsOfExperience, currentIndustry, targetIndustry, skills, jobTypes, careerGoal]);

  const nextMissingField = React.useMemo(() => {
    if (!fullName) return 'Add Full Name';
    if (!phone) return 'Add Phone Number';
    if (!location) return 'Add Location';
    if (!currentRole) return 'Add Current Role';
    if (!targetRole) return 'Add Target Role';
    if (!seniority) return 'Set Seniority';
    if (!currentIndustry) return 'Add Current Industry';
    if (skills.length === 0) return 'Add Technical Skills';
    if (jobTypes.length === 0) return 'Pick Job Types';
    if (!careerGoal) return 'Write Career Goal';
    return 'Profile Complete';
  }, [fullName, phone, location, currentRole, targetRole, seniority, currentIndustry, skills, jobTypes, careerGoal]);

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

  const buildProfilePayload = (overrides: Record<string, any> = {}) => ({
    name: fullName,
    avatarUrl,
    phone,
    location,
    language,
    currentRole,
    targetRole,
    seniority,
    yearsOfExperience,
    currentIndustry,
    targetIndustry,
    skills,
    skillDepths,
    jobTypes,
    workModalities,
    interviewFocusAreas,
    difficulty,
    careerGoal,
    ...privacySettings,
    ...overrides,
  });

  const handleSave = async () => {
    if (!userId) {
      setSimulatorState('api_error');
      return;
    }
    setSimulatorState('saving');
    try {
      await saveCandidateProfile(userId, buildProfilePayload());
      setSimulatorState('saved');
      setIsEditing(false);
      setTimeout(() => setSimulatorState('default'), 3000);
    } catch (err) {
      console.error('Failed to save profile', err);
      setSimulatorState('api_error');
    }
  };

  const openFilePicker = () => {
    setAvatarError(null);
    fileInputRef.current?.click();
  };

  const handleAvatarFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-selecting the same file
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setAvatarError('Please choose an image file (JPG, PNG, or WebP).');
      return;
    }
    if (file.size > MAX_AVATAR_BYTES) {
      setAvatarError('Image is larger than 2 MB. Please choose a smaller file.');
      return;
    }
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Could not read file'));
      reader.readAsDataURL(file);
    });

    setAvatarUrl(dataUrl);
    if (!userId) return;
    try {
      await saveCandidateProfile(userId, buildProfilePayload({ avatarUrl: dataUrl }));
    } catch (err: any) {
      setAvatarError(err?.message || 'Failed to save photo');
    }
  };

  const handleRemoveAvatar = async () => {
    setAvatarError(null);
    setAvatarUrl('');
    if (!userId) return;
    try {
      await saveCandidateProfile(userId, buildProfilePayload({ avatarUrl: '' }));
    } catch (err: any) {
      setAvatarError(err?.message || 'Failed to remove photo');
    }
  };

  const handleSavePrivacy = async (newSettings: PrivacySettings) => {
    if (!userId) throw new Error('Not signed in');
    setPrivacySettings(newSettings);
    await saveCandidateProfile(userId, buildProfilePayload({ ...newSettings }));
  };

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) {
      onNavigateToDashboard();
    } else if (key === 'cv' && onNavigateToCv) {
      onNavigateToCv();
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
          creditsRemaining={user?.creditsRemaining ?? 840}
          totalCredits={user?.totalCredits ?? 1000}
        />

        {/* Right Content Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, backgroundColor: 'var(--bg-main)' }}>
          {/* 3. Studio Navbar */}
          <DashboardNavbar
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            onNavigateToDashboard={onNavigateToDashboard}
            onNavigateToCv={onNavigateToCv}
            onNavigateToSimulations={onNavigateToSimulations}
            onNavigateToHome={onNavigateToHome}
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
                  <span style={{ color: 'var(--text-secondary)' }}>Settings &amp; Personalization</span>
                </div>

                <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                  My Profile
                </h1>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
                  Keep your career information up-to-date so Inprep AI can accurately calibrate mock interviews, question difficulty, and rubric rubrics.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 self-center">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn btn-primary"
                    style={{ padding: '10px 22px', fontSize: '14px' }}
                  >
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setSimulatorState('default');
                        fetchProfile(); // Revert any unsaved changes
                      }}
                      className="btn btn-outline"
                      style={{ padding: '10px 18px', fontSize: '14px' }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="btn btn-primary"
                      style={{ padding: '10px 22px', fontSize: '14px' }}
                    >
                      {isSaving ? (
                        <>
                          <Loader2 size={16} className="spin-animate" />
                          <span>Saving Changes...</span>
                        </>
                      ) : (
                        <>
                          <Save size={16} />
                          <span>Save Changes</span>
                        </>
                      )}
                    </button>
                  </>
                )}
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

            {/* Hidden file input driving photo upload */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleAvatarFileChange}
              style={{ display: 'none' }}
            />

            {avatarError && (
              <div
                style={{
                  padding: '10px 14px',
                  background: 'rgba(244, 63, 94, 0.1)',
                  border: '1px solid rgba(244, 63, 94, 0.25)',
                  borderRadius: '10px',
                  color: '#fb7185',
                  fontSize: '0.78rem',
                  marginBottom: '12px',
                }}
              >
                {avatarError}
              </div>
            )}

            {/* Profile Hero Overview Card */}
            <ProfileHeroCard
              name={fullName || user?.name || 'New User'}
              email={user?.email || ''}
              currentRole={currentRole || 'No Role Set'}
              targetRole={targetRole || 'No Target Role'}
              experience={`${seniority ? seniority.charAt(0).toUpperCase() + seniority.slice(1) : 'Unknown'} (${yearsOfExperience || 0} yrs exp)`}
              completionPercent={completionPercent}
              remainingItem={nextMissingField}
              avatarUrl={avatarUrl || null}
              isEmailVerified={isEmailVerified}
              plan={user?.plan || 'free'}
              onUploadPhoto={openFilePicker}
              onReplacePhoto={openFilePicker}
              onRemovePhoto={handleRemoveAvatar}
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
              <div className="flex-col gap-6">
                <ProfileBasicInfoSection
                  isEditing={isEditing}
                  fullName={fullName}
                  email={user?.email || ''}
                  isEmailVerified={isEmailVerified}
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
                  isEditing={isEditing}
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
                  isEditing={isEditing}
                  skills={skills}
                  onAddSkill={handleAddSkill}
                  onRemoveSkill={handleRemoveSkill}
                  skillDepths={skillDepths}
                  onChangeSkillDepth={handleChangeSkillDepth}
                />

                <ProfileCareerPreferencesSection
                  isEditing={isEditing}
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
                  percentage={completionPercent}
                  onCompleteMissing={() => setAssessmentModalOpen(true)}
                />

                <ProfileConnectedCvCard
                  fileName={connectedCv.fileName}
                  fileSize={connectedCv.fileSize}
                  parsedDate={connectedCv.parsedDate}
                  onViewCv={onNavigateToCv ?? (() => {})}
                  onUpdateCv={onNavigateToCv ?? (() => {})}
                />

                <ProfileCareerAssessmentCard
                  onStartAssessment={() => setAssessmentModalOpen(true)}
                />

                <ProfileHowItHelpsCard
                  onManagePrivacy={() => setPrivacyModalOpen(true)}
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

      <ProfilePrivacyModal
        isOpen={privacyModalOpen}
        initialSettings={privacySettings}
        onClose={() => setPrivacyModalOpen(false)}
        onSave={handleSavePrivacy}
      />
    </div>
  );
};

export default MyProfilePage;
