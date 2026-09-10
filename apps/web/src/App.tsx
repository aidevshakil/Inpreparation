import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SimulationsPage } from './pages/SimulationsPage';
import { AiChatPage } from './pages/AiChatPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'features' | 'how-it-works' | 'simulations' | 'chat'>('home');

  return (
    <main>
      {currentPage === 'home' && (
        <HomePage
          onNavigateToAi={() => setCurrentPage('chat')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
        />
      )}

      {currentPage === 'features' && (
        <FeaturesPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'how-it-works' && (
        <HowItWorksPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToSimulations={() => setCurrentPage('simulations')}
          onNavigateToAi={() => setCurrentPage('chat')}
        />
      )}

      {currentPage === 'simulations' && (
        <SimulationsPage
          onNavigateToHome={() => setCurrentPage('home')}
          onNavigateToFeatures={() => setCurrentPage('features')}
          onNavigateToHowItWorks={() => setCurrentPage('how-it-works')}
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
