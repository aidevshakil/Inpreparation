import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { InterviewHistoryKpiCards } from '../components/interview-history/InterviewHistoryKpiCards';
import { InterviewHistoryFilterBar } from '../components/interview-history/InterviewHistoryFilterBar';
import { InterviewHistorySessionList } from '../components/interview-history/InterviewHistorySessionList';
import { InterviewHistoryDossierDrawer } from '../components/interview-history/InterviewHistoryDossierDrawer';
import { InterviewHistoryPolicyBanner } from '../components/interview-history/InterviewHistoryPolicyBanner';
import { useAuth } from '../context/AuthContext';

interface InterviewHistoryPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToPerformance?: () => void;
  onNavigateToResult?: (sessionId?: string) => void;
}

export const InterviewHistoryPage: React.FC<InterviewHistoryPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToPerformance,
  onNavigateToResult,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('history');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState<string>('SIM-PY-8821');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'performance' && onNavigateToPerformance) onNavigateToPerformance();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#07090e',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Navbar */}
      <DashboardNavbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 65px)', overflow: 'hidden' }}>
        {/* Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={user?.creditsRemaining ?? 840}
          totalCredits={user?.totalCredits ?? 1000}
        />

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              padding: '28px 32px 64px 32px',
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Top Workspace Indicator */}
            <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '16px' }}>
              Candidate Studio / Preparation / Active Module
            </div>

            {/* Top 4 KPI Metrics */}
            <InterviewHistoryKpiCards />

            {/* Filters & Search Bar */}
            <InterviewHistoryFilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
              totalCount={8}
              filteredCount={6}
            />

            {/* 2-Column Main Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.9fr) minmax(320px, 1.1fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Sessions List */}
              <InterviewHistorySessionList
                selectedSessionId={selectedSessionId}
                onSelectSession={setSelectedSessionId}
              />

              {/* Right Column: Cryptographic Dossier Drawer */}
              <InterviewHistoryDossierDrawer
                onOpenDebrief={() => onNavigateToResult && onNavigateToResult(selectedSessionId)}
              />
            </div>

            {/* Bottom Archival Policy Banner */}
            <InterviewHistoryPolicyBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewHistoryPage;
