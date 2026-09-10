import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { StatsBanner } from '../components/StatsBanner';
import { ProblemSolutionSection } from '../components/ProblemSolutionSection';
import { JourneySection } from '../components/JourneySection';
import { AiAnalysisMatrix } from '../components/AiAnalysisMatrix';
import { TrackSimulationsSection } from '../components/TrackSimulationsSection';
import { ModelAnswerSection } from '../components/ModelAnswerSection';
import { ConfidenceTrackerSection } from '../components/ConfidenceTrackerSection';
import { ComparisonTableSection } from '../components/ComparisonTableSection';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';

interface HomePageProps {
  onNavigateToAi?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToAi }) => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleStartPractice = (role?: string) => {
    if (role) {
      setSelectedRole(role);
    }
    setIsSimulatorOpen(true);
  };

  const handleSelectPlan = (_planName: string) => {
    handleStartPractice();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Navigation */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
      />

      {/* Main Landing Page Content */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section with Live Mockup */}
        <HeroSection
          onStartPractice={handleStartPractice}
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        {/* 2. Stats and Metrics Counter */}
        <StatsBanner />

        {/* 3. Problem / Solution Pillars (4 Rubric Dimensions) */}
        <ProblemSolutionSection />

        {/* 4. Complete Practice Journey (01 to 06 Steps) */}
        <JourneySection
          onStartPractice={handleStartPractice}
        />

        {/* 5. Deep Multi-Modal AI Evaluation Matrix */}
        <AiAnalysisMatrix />

        {/* 6. Targeted Track Simulations & Interactive Scorecards */}
        <TrackSimulationsSection
          onStartPractice={handleStartPractice}
        />

        {/* 7. Side-by-Side Model Answers vs Transcribed Feedback */}
        <ModelAnswerSection />

        {/* 8. Confidence Tracker & Growth Trajectory Chart */}
        <ConfidenceTrackerSection />

        {/* 9. Comparison with Generic Chatbots and Traditional Mocks */}
        <ComparisonTableSection />

        {/* 10. Predictable Transparent Pricing Plans */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 11. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 12. High-Impact Bottom CTA Banner */}
        <CtaBanner
          onStartPractice={() => handleStartPractice()}
          onOpenEnterprise={() => alert("Thank you! Our enterprise solutions team will reach out promptly.")}
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
    </div>
  );
};
