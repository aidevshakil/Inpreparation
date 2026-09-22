import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoVideoModal } from '../components/DemoVideoModal';
import { useAuth } from '../context/AuthContext';
import { FAQ_CATEGORIES } from '../components/faq/faqData';
import { FaqHeroSearch } from '../components/faq/FaqHeroSearch';
import { FaqSidebar } from '../components/faq/FaqSidebar';
import { FaqCategoryList } from '../components/faq/FaqCategoryList';
import { FaqContactCard } from '../components/faq/FaqContactCard';
import { FaqBottomCta } from '../components/faq/FaqBottomCta';

interface FaqPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToAi?: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToAbout,
  onNavigateToAi
}) => {
  const { isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState('getting-started');
  const [openQuestionIds, setOpenQuestionIds] = useState<string[]>([
    'gs-1',
    'cv-1',
    'vc-1'
  ]);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleStartPractice = (_roleName?: string) => {
    if (isAuthenticated) {
      window.location.hash = 'dashboard';
    } else {
      window.location.hash = 'signup';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleQuestion = (questionId: string) => {
    setOpenQuestionIds((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalAnswersCount = FAQ_CATEGORIES.reduce((acc, cat) => acc + cat.count, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)', color: 'var(--text-main)' }}>
      
      {/* Global Navbar */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="faq"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'simulations') onNavigateToSimulations();
          if (page === 'pricing') onNavigateToPricing();
        }}
      />

      <main style={{ flex: 1 }}>
        
        {/* ========================================================
            PART 1: HERO & SMART SEARCH SECTION
        ======================================================== */}
        <FaqHeroSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onStartPracticing={() => handleStartPractice()}
          onExploreHowItWorks={onNavigateToHowItWorks}
          onSelectSuggestedQuery={(query) => {
            setSearchQuery(query);
            // Also open all questions matching this query
            const matchingIds: string[] = [];
            FAQ_CATEGORIES.forEach(cat => {
              cat.questions.forEach(q => {
                if (q.question.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes(q.question.toLowerCase())) {
                  matchingIds.push(q.id);
                }
              });
            });
            if (matchingIds.length > 0) {
              setOpenQuestionIds(prev => Array.from(new Set([...prev, ...matchingIds])));
            }
          }}
        />

        {/* ========================================================
            MAIN FAQ DIRECTORY: SIDEBAR + CATEGORY ACCORDIONS
        ======================================================== */}
        <section style={{ padding: '20px 0 60px', position: 'relative' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '40px',
              alignItems: 'flex-start',
              position: 'relative'
            }}>
              
              {/* Left Sticky Sidebar Directory */}
              <div style={{ flexShrink: 0, width: '280px' }}>
                <FaqSidebar
                  categories={FAQ_CATEGORIES}
                  activeCategoryId={activeCategoryId}
                  onSelectCategory={handleSelectCategory}
                  totalAnswersCount={totalAnswersCount}
                />
              </div>

              {/* Right Main Accordions Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <FaqCategoryList
                  categories={FAQ_CATEGORIES}
                  openQuestionIds={openQuestionIds}
                  onToggleQuestion={handleToggleQuestion}
                  searchQuery={searchQuery}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            "STILL CAN'T FIND YOUR ANSWER?" CONTACT CARD
        ======================================================== */}
        <FaqContactCard
          onScheduleDemo={() => setIsDemoOpen(true)}
        />

        {/* ========================================================
            BOTTOM PRACTICE ACCELERATION CTA
        ======================================================== */}
        <FaqBottomCta
          onStartPracticingFree={() => handleStartPractice()}
          onExploreLibrary={onNavigateToSimulations}
        />

      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'simulations') onNavigateToSimulations();
          if (page === 'pricing') onNavigateToPricing();
          if (page === 'about' && onNavigateToAbout) onNavigateToAbout();
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
