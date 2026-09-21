import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoVideoModal } from '../components/DemoVideoModal';
import { useAuth } from '../context/AuthContext';

// Modular Step & Section Widgets
import { HowItWorksHero } from '../components/how-it-works/HowItWorksHero';
import { PreparationJourneyOverview } from '../components/how-it-works/PreparationJourneyOverview';
import { ProfilePathwayStep } from '../components/how-it-works/ProfilePathwayStep';
import { ExperienceUnderstandingStep } from '../components/how-it-works/ExperienceUnderstandingStep';
import { FitDiscoveryStep } from '../components/how-it-works/FitDiscoveryStep';
import { InterviewTracksStep } from '../components/how-it-works/InterviewTracksStep';
import { MockStudioStep } from '../components/how-it-works/MockStudioStep';
import { SensoryAnalysisStep } from '../components/how-it-works/SensoryAnalysisStep';
import { SystemTelemetrySection } from '../components/how-it-works/SystemTelemetrySection';
import { DiagnosticPerformanceStep } from '../components/how-it-works/DiagnosticPerformanceStep';
import { FeedbackProgressStep } from '../components/how-it-works/FeedbackProgressStep';
import { TrackingVaultSection } from '../components/how-it-works/TrackingVaultSection';
import { MethodologySection } from '../components/how-it-works/MethodologySection';
import { TrustGovernanceSection } from '../components/how-it-works/TrustGovernanceSection';
import { HowItWorksBottomCta } from '../components/how-it-works/HowItWorksBottomCta';

interface HowItWorksPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAi?: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const { isAuthenticated } = useAuth();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Profile Calibration State
  const [activePathway, setActivePathway] = useState<'upload' | 'role'>('upload');
  const [selectedLevel, setSelectedLevel] = useState('Senior Staff');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>('resume_senior_backend.pdf');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
      }, 1200);
    }
  };

  const handleStartPractice = (_role?: string) => {
    if (isAuthenticated) {
      window.location.hash = 'dashboard';
    } else {
      window.location.hash = 'signup';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)', color: 'var(--text-main)' }}>
      {/* Navbar */}
      <Navbar
        onStartPractice={() => handleStartPractice()}
        onNavigateToAi={onNavigateToAi}
        currentPage="how-it-works"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'simulations' && onNavigateToSimulations) onNavigateToSimulations();
          if (page === 'pricing' && onNavigateToPricing) onNavigateToPricing();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <HowItWorksHero
          onStartPractice={() => handleStartPractice()}
          onExploreInterviews={onNavigateToSimulations || (() => handleStartPractice())}
        />

        {/* Structured End-to-End Preparation Journey Overview (Part 2) */}
        <PreparationJourneyOverview />

        {/* STEP 01: Profile Pathways */}
        <ProfilePathwayStep
          activePathway={activePathway}
          setActivePathway={setActivePathway}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          isUploading={isUploading}
          uploadedFileName={uploadedFileName}
          onFileUpload={handleFileUpload}
        />

        {/* STEP 02: Let AI Understand Your Experience */}
        <ExperienceUnderstandingStep />

        {/* STEP 03: Discover Where You Fit Best */}
        <FitDiscoveryStep />

        {/* STEP 04: Get Interviews Built Around You */}
        <InterviewTracksStep
          onStartPractice={(role) => handleStartPractice(role)}
        />

        {/* STEP 05: Enter a Realistic AI Interview */}
        <MockStudioStep
          onStartPractice={() => handleStartPractice()}
        />

        {/* STEP 06: Your Interview Is Analyzed From Multiple Angles */}
        <SensoryAnalysisStep />

        {/* SYSTEM TELEMETRY: One Interview. Multiple Intelligence Layers */}
        <SystemTelemetrySection />

        {/* STEP 07: See Exactly How You Performed */}
        <DiagnosticPerformanceStep />

        {/* STEP 08: Turn Feedback Into Progress */}
        <FeedbackProgressStep />

        {/* TRACKING VAULT: Your Longitudinal Interview History */}
        <TrackingVaultSection
          onNavigateToSimulations={onNavigateToSimulations}
          onStartPractice={(role) => handleStartPractice(role)}
        />

        {/* THE METHODOLOGY: Why This Workflow Works */}
        <MethodologySection />

        {/* TRUST & GOVERNANCE: Privacy & Responsible AI Commitments */}
        <TrustGovernanceSection />

        {/* BOTTOM CTA: Your Next Interview Can Be Better Than Your Last One */}
        <HowItWorksBottomCta
          onStartPractice={() => handleStartPractice()}
          onNavigateToSimulations={onNavigateToSimulations}
        />
      </main>

      <Footer
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'simulations' && onNavigateToSimulations) onNavigateToSimulations();
          if (page === 'pricing' && onNavigateToPricing) onNavigateToPricing();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      {/* Demo Video Modal */}
      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onStartPractice={() => handleStartPractice()}
      />
    </div>
  );
};
