import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { StatsBanner } from '../components/StatsBanner';
import { ProblemSolutionSection } from '../components/ProblemSolutionSection';
import { JourneySection } from '../components/JourneySection';
import { AiAnalysisMatrix } from '../components/AiAnalysisMatrix';
import { TrackSimulationsSection } from '../components/TrackSimulationsSection';
import { ModelAnswerSection } from '../components/ModelAnswerSection';
import { ConfidenceTrackerSection } from '../components/ConfidenceTrackerSection';
import { DomainCoverageSection } from '../components/DomainCoverageSection';
import { ComparisonTableSection } from '../components/ComparisonTableSection';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';
import { ScheduleDemoModal } from '../components/ScheduleDemoModal';

interface HomePageProps {
  onNavigateToAi?: () => void;
  onNavigateToFeatures?: () => void;
  onNavigateToHowItWorks?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAbout?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToAi,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToAbout
}) => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartPractice = (role?: string) => {
    if (role) {
      setSelectedRole(role);
    }
    setIsSimulatorOpen(true);
  };

  const handleSelectPlan = (_planName: string) => {
    if (onNavigateToPricing) {
      onNavigateToPricing();
    } else {
      handleStartPractice();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Navigation */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="home"
        onNavigate={(page) => {
          if (page === 'features' && onNavigateToFeatures) onNavigateToFeatures();
          if (page === 'how-it-works' && onNavigateToHowItWorks) onNavigateToHowItWorks();
          if (page === 'simulations' && onNavigateToSimulations) onNavigateToSimulations();
          if (page === 'pricing' && onNavigateToPricing) onNavigateToPricing();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
          if (page === 'about' && onNavigateToAbout) onNavigateToAbout();
        }}
      />

      {/* Main Landing Page Content */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section with Live Mockup */}
        <HeroSection
          onStartPractice={handleStartPractice}
          onOpenDemo={() => setIsDemoOpen(true)}
          onNavigateToFeatures={onNavigateToFeatures}
        />

        {/* 2. Stats and Metrics Counter */}
        <StatsBanner />

        {/* 3. Problem / Solution Pillars (id="features") */}
        <ProblemSolutionSection />

        {/* 4. Complete Practice Journey (id="how-it-works") */}
        <JourneySection
          onStartPractice={handleStartPractice}
        />

        {/* 5. Deep Multi-Modal AI Evaluation Matrix */}
        <AiAnalysisMatrix />

        {/* 6. Targeted Track Simulations (id="simulations") */}
        <TrackSimulationsSection
          onStartPractice={handleStartPractice}
        />

        {/* 7. Side-by-Side Model Answers vs Transcribed Feedback */}
        <ModelAnswerSection />

        {/* 8. Confidence Tracker & Growth Trajectory Chart */}
        <ConfidenceTrackerSection />

        {/* 9. Domain Coverage: Explore 100+ Interview Simulation Tracks */}
        <DomainCoverageSection onSelectTrack={handleStartPractice} />

        {/* 10. Comparison with Generic Chatbots and Traditional Mocks */}
        <ComparisonTableSection />

        {/* 10. Predictable Transparent Pricing Plans (id="pricing") */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 11. Frequently Asked Questions (id="faq") */}
        <FaqSection />

        {/* 12. High-Impact Bottom CTA Banner */}
        <CtaBanner
          onStartPractice={() => handleStartPractice()}
          onOpenEnterprise={() => setIsEnterpriseOpen(true)}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Live AI Interview Simulator Modal (Fully Functional) */}
      <LiveSimulationModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        initialRole={selectedRole}
      />

      {/* 2-Min Product Demo Modal */}
      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onStartPractice={() => handleStartPractice()}
      />

      {/* Enterprise / Schedule Demo Lead Modal */}
      <ScheduleDemoModal
        isOpen={isEnterpriseOpen}
        onClose={() => setIsEnterpriseOpen(false)}
      />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(124, 58, 237, 0.45)',
            zIndex: 90,
            transition: 'all 0.25s ease'
          }}
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};
