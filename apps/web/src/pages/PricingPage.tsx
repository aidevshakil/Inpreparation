import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoVideoModal } from '../components/DemoVideoModal';
import { useAuth } from '../context/AuthContext';
import { PricingHeroTierCards } from '../components/pricing/PricingHeroTierCards';
import { PracticeEstimator } from '../components/pricing/PracticeEstimator';
import { DiagnosticDifferencePreview } from '../components/pricing/DiagnosticDifferencePreview';
import { CreditEconomicsSection } from '../components/pricing/CreditEconomicsSection';
import { AddonCreditsSection } from '../components/pricing/AddonCreditsSection';
import { ComparePlansMatrix } from '../components/pricing/ComparePlansMatrix';
import { MultimodalPillarsSection } from '../components/pricing/MultimodalPillarsSection';
import { EthicalArchitectureAndTrust } from '../components/pricing/EthicalArchitectureAndTrust';
import { PricingFaqSection } from '../components/pricing/PricingFaqSection';
import { PricingCtaBanner } from '../components/pricing/PricingCtaBanner';

interface PricingPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAi?: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const { isAuthenticated } = useAuth();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleStartPractice = (_roleName?: string) => {
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
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="pricing"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'simulations') onNavigateToSimulations();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            PART 1: HERO & 3 PRICING TIER CARDS (FREE, PRO, PREMIUM)
        ======================================================== */}
        <PricingHeroTierCards
          onSelectPlan={(planName) => handleStartPractice(planName)}
        />

        {/* ========================================================
            PART 2: PRACTICE ESTIMATOR (HOW MUCH PRACTICE DO YOU NEED?)
        ======================================================== */}
        <PracticeEstimator
          onSelectPlan={(planName) => handleStartPractice(planName)}
        />

        {/* ========================================================
            PART 3A: CLEAR DIAGNOSTIC DEPTH (SEE THE DIFFERENCE)
        ======================================================== */}
        <DiagnosticDifferencePreview />

        {/* ========================================================
            PART 3B: CREDIT ECONOMICS (HOW AI CREDITS WORK)
        ======================================================== */}
        <CreditEconomicsSection />

        {/* ========================================================
            PART 4: NEED MORE AI CREDITS? (ADD-ON PACKS)
        ======================================================== */}
        <AddonCreditsSection
          onBuyCredits={() => handleStartPractice()}
        />

        {/* ========================================================
            PART 5 & 6: GRANULAR MATRIX (COMPARE PLANS)
        ======================================================== */}
        <ComparePlansMatrix />

        {/* ========================================================
            PART 7A: MULTIMODAL PILLARS (MORE THAN JUST AN INTERVIEW SCORE)
        ======================================================== */}
        <MultimodalPillarsSection />

        {/* ========================================================
            PART 7B: ETHICAL AI ARCHITECTURE & TRUST BADGES
        ======================================================== */}
        <EthicalArchitectureAndTrust />

        {/* ========================================================
            PART 8: FAQ ACCORDION SECTION
        ======================================================== */}
        <PricingFaqSection />

        {/* ========================================================
            PART 9: BOTTOM CTA BANNER (IMMEDIATE ACCELERATION)
        ======================================================== */}
        <PricingCtaBanner
          onStartPracticingFree={() => handleStartPractice()}
          onExploreFeatures={onNavigateToFeatures}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'simulations') onNavigateToSimulations();
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
