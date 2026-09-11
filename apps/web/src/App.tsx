import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SimulationsPage } from './pages/SimulationsPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { AiChatPage } from './pages/AiChatPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about' | 'chat'>('home');

  return (
    <main>
      {currentPage === 'home' && (
        <HomePage
          onNavigateToAi={() => setCurrentPage('chat')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToFaq={() => setCurrentPage('faq')}
          onNavigateToAbout={() => setCurrentPage('about')}
        />
      )}

      {currentPage === 'features' && (
        <FeaturesPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToFaq={() => setCurrentPage('faq')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'how-it-works' && (
        <HowItWorksPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToFaq={() => setCurrentPage('faq')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'simulations' && (
        <SimulationsPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToFaq={() => setCurrentPage('faq')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'pricing' && (
        <PricingPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToFaq={() => setCurrentPage('faq')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'faq' && (
        <FaqPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToAbout={() => setCurrentPage('about')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'about' && (
        <AboutPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToFaq={() => setCurrentPage('faq')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'chat' && (
        <AiChatPage onBack={() => setCurrentPage('home')} />
      )}
    </main>
  );
}

export default App;
