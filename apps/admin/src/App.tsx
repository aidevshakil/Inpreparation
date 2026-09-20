import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardPage } from './pages/DashboardPage';
import { AiAnalyticsPage } from './pages/AiAnalyticsPage';
import { UsersPage } from './pages/UsersPage';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentTab} />;
      case 'ai-analytics':
        return <AiAnalyticsPage />;
      case 'users':
        return <UsersPage />;
      default:
        return <DashboardPage onNavigate={setCurrentTab} />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar currentTab={currentTab} onSelectTab={setCurrentTab} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ padding: '32px', flex: 1 }}>{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
