import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoVideoModal } from '../components/DemoVideoModal';
import { useAuth } from '../context/AuthContext';
import { InterviewLibraryHero } from '../components/interview-library/InterviewLibraryHero';
import { PopularInterviewPaths } from '../components/interview-library/PopularInterviewPaths';
import { TargetRoleCatalog } from '../components/interview-library/TargetRoleCatalog';
import { TechStackMatrix } from '../components/interview-library/TechStackMatrix';
import { SeniorityLevelTracks } from '../components/interview-library/SeniorityLevelTracks';
import { ChallengeCalibration } from '../components/interview-library/ChallengeCalibration';
import { AiTrackCalibrator } from '../components/interview-library/AiTrackCalibrator';
import { SampleTrackBlueprint } from '../components/interview-library/SampleTrackBlueprint';
import { PlatformStandards } from '../components/interview-library/PlatformStandards';
import { TransparencyBanner } from '../components/interview-library/TransparencyBanner';
import { InterviewLibraryFaq } from '../components/interview-library/InterviewLibraryFaq';
import { InterviewLibraryCta } from '../components/interview-library/InterviewLibraryCta';

interface SimulationsPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAi?: () => void;
}

export const SimulationsPage: React.FC<SimulationsPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const { isAuthenticated } = useAuth();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleDomain, setSelectedRoleDomain] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRoleDomain('All');
    setSelectedLevel('All');
    setSelectedDifficulty('All');
    setSelectedFormat('All');
  };

  const handleStartPractice = (_roleName?: string) => {
    if (isAuthenticated) {
      window.location.hash = 'dashboard';
    } else {
      window.location.hash = 'signup';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#07090e', color: '#f8fafc' }}>
      {/* Navbar */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="simulations"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'pricing' && onNavigateToPricing) onNavigateToPricing();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            PART 1: INTERVIEW LIBRARY HERO & SEARCH CONSOLE
        ======================================================== */}
        <InterviewLibraryHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectPopularTag={(tag) => setSearchQuery(tag)}
          selectedRoleDomain={selectedRoleDomain}
          onSelectRoleDomain={setSelectedRoleDomain}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          selectedDifficulty={selectedDifficulty}
          onSelectDifficulty={setSelectedDifficulty}
          selectedFormat={selectedFormat}
          onSelectFormat={setSelectedFormat}
          onResetFilters={clearFilters}
          onExploreInterviews={() => {
            const el = document.getElementById('featured-paths-section') || document.getElementById('all-roles-catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onGetRecommendations={() => handleStartPractice()}
        />

        {/* ========================================================
            PART 2: POPULAR INTERVIEW PATHS (6 FEATURED CARDS)
        ======================================================== */}
        <PopularInterviewPaths
          onSelectTrack={(track) => handleStartPractice(track)}
        />

        {/* ========================================================
            PART 3: FIND YOUR TARGET ROLE (18 TARGET ROLES CATALOG)
        ======================================================== */}
        <TargetRoleCatalog
          searchQuery={searchQuery}
          selectedRoleDomain={selectedRoleDomain}
          selectedLevel={selectedLevel}
          selectedDifficulty={selectedDifficulty}
          onSelectRole={(role) => handleStartPractice(role)}
        />

        {/* ========================================================
            PART 4A: PRACTICE BY TECHNOLOGY (TECH MATRIX)
        ======================================================== */}
        <TechStackMatrix
          onSelectTechnology={(tech) => {
            setSearchQuery(tech);
            const el = document.getElementById('all-roles-catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* ========================================================
            PART 4B: SENIORITY ALIGNMENT (PRACTICE AT THE RIGHT LEVEL)
        ======================================================== */}
        <SeniorityLevelTracks
          onSelectLevel={(level) => handleStartPractice(level)}
        />

        {/* ========================================================
            PART 5A: CHOOSE YOUR CHALLENGE (CHALLENGE CALIBRATION)
        ======================================================== */}
        <ChallengeCalibration
          onSelectDifficulty={(diff) => {
            setSelectedDifficulty(diff);
            const el = document.getElementById('all-roles-catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* ========================================================
            PART 5B: INTELLIGENT TRACK MATCHING (AI TRACK CALIBRATOR)
        ======================================================== */}
        <AiTrackCalibrator
          onStartPractice={(role) => handleStartPractice(role)}
          onBuildProfile={() => handleStartPractice()}
        />

        {/* ========================================================
            PART 6A: SAMPLE TRACK BLUEPRINT (PYTHON BACKEND DEVELOPER)
        ======================================================== */}
        <SampleTrackBlueprint
          onStartPractice={(role) => handleStartPractice(role)}
          onViewCurriculum={() => {
            const el = document.getElementById('all-roles-catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* ========================================================
            PART 6B: PLATFORM STANDARDS (WHAT EVERY INTERVIEW INCLUDES)
        ======================================================== */}
        <PlatformStandards />

        {/* ========================================================
            PART 7A: TRANSPARENCY & OBSERVABLE SIGNALS STANDARD
        ======================================================== */}
        <TransparencyBanner
          onReadStandard={() => {
            const el = document.getElementById('all-roles-catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* ========================================================
            PART 7B: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
        ======================================================== */}
        <InterviewLibraryFaq />

        {/* ========================================================
            PART 8: FIND YOUR NEXT INTERVIEW CHALLENGE (BOTTOM CTA)
        ======================================================== */}
        <InterviewLibraryCta
          onStartPracticing={() => handleStartPractice()}
          onBrowseRoles={() => {
            const el = document.getElementById('all-roles-catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      <Footer />

      {/* Demo Video Modal */}
      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onStartPractice={() => handleStartPractice()}
      />
    </div>
  );
};
