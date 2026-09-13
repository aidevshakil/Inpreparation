import React, { useState } from 'react';
import type { PipelineDiagnosticState } from '../components/pipeline-diagnostic/PipelineDiagnosticSimulatorBar';
import { PipelineDiagnosticTopNav } from '../components/pipeline-diagnostic/PipelineDiagnosticTopNav';
import { PipelineDiagnosticHeader } from '../components/pipeline-diagnostic/PipelineDiagnosticHeader';
import { PipelineHeroSynthesisCard } from '../components/pipeline-diagnostic/PipelineHeroSynthesisCard';
import { PipelineTelemetryStagesCard } from '../components/pipeline-diagnostic/PipelineTelemetryStagesCard';
import { PipelineQuotePreviewCard } from '../components/pipeline-diagnostic/PipelineQuotePreviewCard';
import { PipelineSessionSummaryCard } from '../components/pipeline-diagnostic/PipelineSessionSummaryCard';
import { PipelineWhatHappensNextCard } from '../components/pipeline-diagnostic/PipelineWhatHappensNextCard';
import { PipelinePrivacyCard } from '../components/pipeline-diagnostic/PipelinePrivacyCard';
import { PipelineDiagnosticModals } from '../components/pipeline-diagnostic/PipelineDiagnosticModals';
import { DashboardFooter } from '../components/dashboard/DashboardFooter';
import { RefreshCw, Terminal, ArrowRight } from 'lucide-react';

interface PipelineDiagnosticPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToCvAnalysis?: () => void;
  onNavigateToCvBuilder?: () => void;
  onNavigateToDiagnosticIntake?: () => void;
  onNavigateToDeviceReadiness?: () => void;
  onNavigateToIntroRoom?: () => void;
  onNavigateToIntroResult?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const PipelineDiagnosticPage: React.FC<PipelineDiagnosticPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile: _onNavigateToProfile,
  onNavigateToCv: _onNavigateToCv,
  onNavigateToCvAnalysis: _onNavigateToCvAnalysis,
  onNavigateToCvBuilder: _onNavigateToCvBuilder,
  onNavigateToDiagnosticIntake: _onNavigateToDiagnosticIntake,
  onNavigateToDeviceReadiness: _onNavigateToDeviceReadiness,
  onNavigateToIntroRoom,
  onNavigateToIntroResult,
  onNavigateToSimulations,
  onNavigateToAi: _onNavigateToAi,
}) => {
  const [simulatorState, setSimulatorState] = useState<PipelineDiagnosticState>('step_3_active');
  const [showLogModal, setShowLogModal] = useState(false);
  const [showTranscriptModal, setShowTranscriptModal] = useState(false);

  const getBottomActionText = () => {
    switch (simulatorState) {
      case 'initializing':
        return 'Initializing Ingestion... (Step 1 of 5)';
      case 'step_3_active':
        return 'Synthesizing... (Step 3 of 5)';
      case 'step_5_finishing':
        return 'Finishing Recommendations... (Step 5 of 5)';
      case 'completed':
        return 'View Personalized Career Radar & Roadmap';
      case 'partial_fallback':
        return 'Retrying Telemetry Sync...';
      case 'failure_dialog':
        return 'Synthesis Halted (Retry Available)';
      default:
        return 'Synthesizing... (Step 3 of 5)';
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* 2. Top Header Navigation Bar */}
      <PipelineDiagnosticTopNav
        onNavigateToWorkspace={onNavigateToDashboard}
        onNavigateToAssessment={onNavigateToIntroRoom}
      />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
        <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '28px 28px 40px 28px' }}>
          {/* Header with Title & 5 Parameter Chips */}
          <PipelineDiagnosticHeader state={simulatorState} />

          {/* 2-Column Responsive Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 1fr)',
              gap: '24px',
              alignItems: 'start',
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <PipelineHeroSynthesisCard state={simulatorState} />
              <PipelineTelemetryStagesCard state={simulatorState} />
              <PipelineQuotePreviewCard
                onOpenTranscript={() => setShowTranscriptModal(true)}
              />
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <PipelineSessionSummaryCard />
              <PipelineWhatHappensNextCard />
              <PipelinePrivacyCard />
            </div>
          </div>

          {/* Bottom Sticky Action Bar */}
          <div
            style={{
              marginTop: '32px',
              padding: '16px 24px',
              backgroundColor: 'rgba(14, 18, 28, 0.92)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Left Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSimulatorState('leave_modal')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  color: '#cbd5e1',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>Return to Dashboard (Runs in Background)</span>
              </button>

              <button
                onClick={() => setShowLogModal(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <Terminal size={14} style={{ color: '#818cf8' }} />
                <span>View Diagnostic Log</span>
              </button>
            </div>

            {/* Right Primary Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={() => {
                  if (simulatorState === 'completed') {
                    if (onNavigateToIntroResult) {
                      onNavigateToIntroResult();
                    } else if (onNavigateToSimulations) {
                      onNavigateToSimulations();
                    }
                  } else {
                    setSimulatorState('completed');
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 26px',
                  background:
                    simulatorState === 'completed'
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow:
                    simulatorState === 'completed'
                      ? '0 4px 18px rgba(16, 185, 129, 0.45)'
                      : '0 4px 18px rgba(124, 58, 237, 0.45)',
                  transition: 'all 0.18s ease',
                }}
              >
                {simulatorState !== 'completed' && (
                  <RefreshCw size={14} style={{ animation: 'spin 2.5s linear infinite' }} />
                )}
                <span>{getBottomActionText()}</span>
                {simulatorState === 'completed' && <ArrowRight size={15} />}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <DashboardFooter />
      </div>

      {/* Modals Container */}
      <PipelineDiagnosticModals
        state={simulatorState}
        onCloseSimulatorModal={() => setSimulatorState('step_3_active')}
        onRetryPipeline={() => setSimulatorState('step_3_active')}
        onConfirmLeave={() => {
          setSimulatorState('step_3_active');
          if (onNavigateToDashboard) onNavigateToDashboard();
        }}
        showLogModal={showLogModal}
        onCloseLogModal={() => setShowLogModal(false)}
        showTranscriptModal={showTranscriptModal}
        onCloseTranscriptModal={() => setShowTranscriptModal(false)}
      />
    </div>
  );
};

export default PipelineDiagnosticPage;
