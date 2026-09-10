import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AiChatPage } from './pages/AiChatPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'chat'>('home');

  return (
    <main>
      {currentPage === 'home' ? (
        <HomePage onNavigateToAi={() => setCurrentPage('chat')} />
      ) : (
        <AiChatPage onBack={() => setCurrentPage('home')} />
      )}
    </main>
  );
}

export default App;
