import React, { useState } from 'react';
import type { DiagnosticState } from '../components/diagnostic-intake/DiagnosticSimulatorBar';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DiagnosticHeader } from '../components/diagnostic-intake/DiagnosticHeader';
import { DiagnosticProgressTracker } from '../components/diagnostic-intake/DiagnosticProgressTracker';
import { DiagnosticAiCoachCallout } from '../components/diagnostic-intake/DiagnosticAiCoachCallout';
import { DiagnosticQuestionCard } from '../components/diagnostic-intake/DiagnosticQuestionCard';
import { DiagnosticResponseInput, ResponseMode } from '../components/diagnostic-intake/DiagnosticResponseInput';
import { DiagnosticBottomNavigation } from '../components/diagnostic-intake/DiagnosticBottomNavigation';
import { DiagnosticActiveDossierCard } from '../components/diagnostic-intake/DiagnosticActiveDossierCard';
import { DiagnosticInsightCard } from '../components/diagnostic-intake/DiagnosticInsightCard';
import { DiagnosticResponsibleAiCard } from '../components/diagnostic-intake/DiagnosticResponsibleAiCard';
import { DiagnosticNextStepsCard } from '../components/diagnostic-intake/DiagnosticNextStepsCard';
import { DiagnosticExitModal } from '../components/diagnostic-intake/DiagnosticExitModal';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { useAuth } from '../context/AuthContext';

interface DiagnosticIntakePageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const DiagnosticIntakePage: React.FC<DiagnosticIntakePageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToCvAnalysis,
  onNavigateToCvBuilder: _onNavigateToCvBuilder,
  onNavigateToSimulations,
  onNavigateToAi,
}) => {
  const [simulatorState] = useState<DiagnosticState>('text_mode');
  const [activeNav, setActiveNav] = useState<NavItemKey>('assessment');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [responseMode, setResponseMode] = useState<ResponseMode>('text');
  const [isRecording, setIsRecording] = useState(false);
  const { user } = useAuth();
  
  const [narrativeText, setNarrativeText] = useState("");

  const questions = [
    {
      step: 1,
      category: 'CATEGORY: BACKGROUND & TRAJECTORY',
      promptId: 'Prompt ID: #DIAG-01-BK',
      question:
        'Tell us a little about yourself, your professional background, and what you are currently working toward.',
      guidance:
        'Try to answer naturally. You can touch on your current role, primary architectural stacks, recent high-impact initiatives, and the specific positions you want to prepare for next.',
      promptingHint:
        'Mention your current seniority (e.g., Senior Backend / Distributed Systems), core languages (Python/Go), notable projects (scaling microservices), and what kind of interview drill you want to conquer.',
    },
    {
      step: 2,
      category: 'CATEGORY: ARCHITECTURAL COMPLEXITY',
      promptId: 'Prompt ID: #DIAG-02-ARCH',
      question:
        'What is the most complex distributed system failure you diagnosed in production and how did you resolve it?',
      guidance:
        'Focus on the root-cause triage method, trade-offs between availability and consistency, and long-term prevention mechanisms.',
      promptingHint:
        'Highlight network partitions, database deadlock resolution, message queue backpressure, or circuit breaking strategies.',
    },
    {
      step: 3,
      category: 'CATEGORY: LEADERSHIP & CROSS-FUNCTIONAL IMPACT',
      promptId: 'Prompt ID: #DIAG-03-LEAD',
      question:
        'Describe a time when you influenced an architectural decision across multiple teams despite differing opinions.',
      guidance:
        'Highlight stakeholder alignment, consensus building, trade-off documentation (ADRs), and measurable velocity gains.',
      promptingHint:
        'Structure your answer using STAR: Situation, Task, Action, and Quantifiable Results.',
    },
  ];

  const currentQ = questions[currentStep - 1] || questions[0];

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

  const handleNextStep = () => {
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (onNavigateToSimulations) onNavigateToSimulations();
      else alert('Diagnostic calibration complete! Launching practice simulation...');
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
            <DiagnosticHeader
              onNavigateToAssessment={onNavigateToSimulations}
            />

            {/* Diagnostic Step Progress Tracker */}
            <DiagnosticProgressTracker
              currentStep={currentStep}
              totalSteps={8}
              onSelectStep={(step) => setCurrentStep(step)}
            />

            {/* 2-Column Grid: Question & Response (Left) vs. Context & Insights (Right) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 1fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Adaptive Guidance, Question Prompt, and Input */}
              <div>
                <DiagnosticAiCoachCallout
                  message="I'll ask a few targeted questions about your engineering background and target aspirations. There are no right or wrong answers here — speak or write naturally so we calibrate accurate mock interviewer difficulty."
                  statusText={isRecording ? 'Listening in Real-Time' : 'Ready for your answer'}
                />

                <DiagnosticQuestionCard
                  category={currentQ.category}
                  promptId={currentQ.promptId}
                  question={currentQ.question}
                  guidance={currentQ.guidance}
                  promptingHint={currentQ.promptingHint}
                />

                <DiagnosticResponseInput
                  mode={responseMode}
                  onModeChange={(m) => setResponseMode(m)}
                  textValue={narrativeText}
                  onTextChange={(val) => setNarrativeText(val)}
                  onClearText={() => setNarrativeText('')}
                  onSaveDraft={() => alert('Diagnostic response draft auto-saved to Vault!')}
                  onAddPromptChip={(chip) => setNarrativeText((prev) => prev + chip)}
                  isRecording={isRecording}
                  onToggleRecording={() => setIsRecording(!isRecording)}
                  hasPermissionError={simulatorState === 'perm_fallback'}
                />

                {/* Bottom Navigation */}
                <DiagnosticBottomNavigation
                  currentStep={currentStep}
                  totalSteps={8}
                  onPrevious={handlePrevStep}
                  onSaveAndExit={() => setExitModalOpen(true)}
                  onNext={handleNextStep}
                />
              </div>

              {/* Right Column: Active Dossier & Interviewer Insights */}
              <div>
                <DiagnosticActiveDossierCard
                  fileName={user?.cvFileName || "No CV Uploaded"}
                  targetRole={user?.targetRole && user.targetRole !== 'Select Target Role' ? user.targetRole : "General Assessment"}
                  experienceLevel={user?.yearsOfExperience ? `${user.yearsOfExperience} years` : "Not Specified"}
                  cvScore={user?.cvFileName ? 75 : 0}
                  coreStack={[]}
                  onEditDossier={onNavigateToCvAnalysis || onNavigateToCv}
                />

                <DiagnosticInsightCard
                  title='Focus on the "Why", Not Just the "What"'
                  insightBody="In senior engineering interviews, interviewers listen for your architectural rationale, not just an encyclopedic recitation of tools. When describing your trajectory, explain why you selected specific architectures for critical workloads."
                  calibratedFor={user?.targetRole && user.targetRole !== 'Select Target Role' ? user.targetRole : "General Level"}
                />

                <DiagnosticResponsibleAiCard />

                <DiagnosticNextStepsCard />
              </div>
            </div>
          </div>

          {/* Footer */}
          <DashboardFooter />
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      <DiagnosticExitModal
        isOpen={exitModalOpen}
        onClose={() => setExitModalOpen(false)}
        onSaveAndExit={() => {
          setExitModalOpen(false);
          if (onNavigateToDashboard) onNavigateToDashboard();
        }}
      />
    </div>
  );
};

export default DiagnosticIntakePage;
