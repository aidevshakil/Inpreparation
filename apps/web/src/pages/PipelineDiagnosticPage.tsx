import React, { useState, useEffect } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  Radio,
} from 'lucide-react';
import {
  PipelineDiagnosticSimulatorBar,
  PipelineScenario,
} from '../components/pipeline-diagnostic/PipelineDiagnosticSimulatorBar';
import { PipelineSynthesisStagesCard } from '../components/pipeline-diagnostic/PipelineSynthesisStagesCard';
import { PipelineQuestionMatrixCard } from '../components/pipeline-diagnostic/PipelineQuestionMatrixCard';
import { PipelineSidebarPanels } from '../components/pipeline-diagnostic/PipelineSidebarPanels';
import { PipelineOfflineRetryModal } from '../components/pipeline-diagnostic/PipelineOfflineRetryModal';

interface PipelineDiagnosticPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToIntroResult?: () => void;
}

export const PipelineDiagnosticPage: React.FC<PipelineDiagnosticPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToSearch,
  onNavigateToAi,
  onNavigateToCategories,
  onNavigateToIntroResult,
}) => {
  const [activeNav, setActiveNav] = useState<NavItemKey>('cv');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<PipelineScenario>('active_processing');
  const [remainingSeconds, setRemainingSeconds] = useState(64); // 01:04s matching screenshot
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);

  // Handle sidebar navigation
  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
  };

  // Switch stakeholder scenarios
  const handleScenarioChange = (scenario: PipelineScenario) => {
    setCurrentScenario(scenario);
    if (scenario === 'offline_retry') {
      setIsOfflineModalOpen(true);
    } else {
      setIsOfflineModalOpen(false);
    }
  };

  // Countdown timer for active processing
  useEffect(() => {
    if (currentScenario !== 'active_processing') return;

    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          setCurrentScenario('result_ready');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentScenario]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `0${mins}:${secs < 10 ? '0' : ''}${secs}s`;
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

      {/* Simulator Control Bar */}
      <PipelineDiagnosticSimulatorBar
        currentScenario={currentScenario}
        onSelectScenario={handleScenarioChange}
      />

      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 105px)', overflow: 'hidden' }}>
        {/* Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
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
              padding: '0',
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ padding: '28px 32px 48px 32px' }}>
              {/* Breadcrumb */}
              <div
                style={{
                  fontSize: '0.76rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{ cursor: 'pointer', transition: 'color 0.15s ease' }}
                  onClick={onNavigateToSimulations}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Interview Library
                </span>
                <span>/</span>
                <span style={{ color: '#cbd5e1' }}>Interview #SIM-PY-8821</span>
                <span>/</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>
                  AI Processing & Rubric Synthesis (Web #32)
                </span>
              </div>

              {/* Track Context Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  color: '#cbd5e1',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#38bdf8',
                    boxShadow: '0 0 6px #38bdf8',
                  }}
                />
                <span>
                  Track: Python Backend Concurrency & High Throughput (Track #SIM-PY-8821) • Staff IC-6+ Benchmark
                </span>
              </div>

              {/* Scenario Banners */}
              {currentScenario === 'background_mode' && (
                <div
                  style={{
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.35)',
                    borderRadius: '12px',
                    padding: '14px 20px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Radio size={18} color="#818cf8" style={{ animation: 'pulse 1.5s infinite' }} />
                    <div style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                      <strong>Background Safe Mode Active:</strong> Session #SIM-PY-8821 encrypted vault is registered for background processing on node <code style={{ color: '#a5b4fc' }}>us-east-va-0</code>. You can safely navigate away.
                    </div>
                  </div>
                  <button
                    onClick={onNavigateToDashboard}
                    style={{
                      background: 'rgba(99, 102, 241, 0.25)',
                      border: '1px solid rgba(99, 102, 241, 0.5)',
                      color: '#c7d2fe',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              )}

              {currentScenario === 'audio_warning' && (
                <div
                  style={{
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    borderRadius: '12px',
                    padding: '14px 20px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <AlertTriangle size={18} color="#fbbf24" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.8rem', color: '#fef3c7', lineHeight: 1.5 }}>
                    <strong>Partial Audio Warning:</strong> In Question 4, transient mic gain fluctuation was detected. Secondary deterministic acoustic reconstructor and phoneme aligner engaged with <strong>zero data loss</strong>.
                  </div>
                </div>
              )}

              {/* Header Box */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ maxWidth: '680px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      color: '#38bdf8',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      marginBottom: '14px',
                      letterSpacing: '0.4px',
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>DEFENDED 5/5 QUESTIONS • Cryptographic Session Lock RIVAL17-P9A</span>
                  </div>

                  <h1
                    style={{
                      fontSize: '2.3rem',
                      fontWeight: 800,
                      margin: '0 0 12px 0',
                      letterSpacing: '-0.5px',
                      lineHeight: 1.2,
                    }}
                  >
                    Your Interview Is Complete
                  </h1>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#94a3b8',
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    You successfully defended all 5 adaptive questions. Our deterministic evaluation engine is currently analyzing your technical reasoning, architectural trade-offs, and observable presentation telemetry.
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      background:
                        currentScenario === 'result_ready'
                          ? 'rgba(16, 185, 129, 0.12)'
                          : 'rgba(168, 85, 247, 0.12)',
                      border:
                        currentScenario === 'result_ready'
                          ? '1px solid rgba(16, 185, 129, 0.35)'
                          : '1px solid rgba(168, 85, 247, 0.35)',
                      color: currentScenario === 'result_ready' ? '#34d399' : '#e9d5ff',
                      padding: '7px 16px',
                      borderRadius: '100px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: currentScenario === 'result_ready' ? '#10b981' : '#a855f7',
                        boxShadow:
                          currentScenario === 'result_ready'
                            ? '0 0 8px #10b981'
                            : '0 0 8px #a855f7',
                      }}
                    />
                    <span>
                      {currentScenario === 'result_ready'
                        ? 'Stage 7 of 7: All Deterministic Rubrics Synthesized'
                        : 'Stage 5 of 7 Active: Evaluating Technical Rubric'}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Clock size={13} color="#94a3b8" />
                    <span>
                      {currentScenario === 'result_ready'
                        ? 'Synthesis complete in 00:48s'
                        : 'Estimated synthesis time remaining:'}
                    </span>
                    {currentScenario !== 'result_ready' && (
                      <span
                        style={{
                          fontWeight: 700,
                          color: '#f8fafc',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {formatTimer(remainingSeconds)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Grid: Left Column + Right Column */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) 340px',
                  gap: '32px',
                  alignItems: 'flex-start',
                }}
              >
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <PipelineSynthesisStagesCard
                    scenario={currentScenario}
                    onViewResult={onNavigateToIntroResult}
                  />

                  <PipelineQuestionMatrixCard scenario={currentScenario} />
                </div>

                {/* Right Column */}
                <PipelineSidebarPanels
                  scenario={currentScenario}
                  onNavigateToDashboard={onNavigateToDashboard}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario 5: Offline / Retry Modal */}
      <PipelineOfflineRetryModal
        isOpen={isOfflineModalOpen}
        onClose={() => {
          setIsOfflineModalOpen(false);
          setCurrentScenario('active_processing');
        }}
        onRetry={() => {
          setIsOfflineModalOpen(false);
          setCurrentScenario('active_processing');
        }}
      />
    </div>
  );
};

export default PipelineDiagnosticPage;
