import React from 'react';
import { Video } from 'lucide-react';
import { PipelineDiagnosticState } from './PipelineDiagnosticSimulatorBar';

interface PipelineDiagnosticHeaderProps {
  state: PipelineDiagnosticState;
}

export const PipelineDiagnosticHeader: React.FC<PipelineDiagnosticHeaderProps> = ({
  state,
}) => {
  const getPipelineStatusText = () => {
    switch (state) {
      case 'initializing':
        return 'Initializing Pipeline (Step 1/5)';
      case 'step_3_active':
        return 'Processing (Step 3/5)';
      case 'step_5_finishing':
        return 'Synthesizing Roadmap (Step 5/5)';
      case 'completed':
        return 'Analysis Complete (5/5)';
      case 'partial_fallback':
        return 'Degraded Sync (Retrying)';
      case 'failure_dialog':
        return 'Pipeline Halted';
      case 'leave_modal':
        return 'Processing (Background Sync)';
      default:
        return 'Processing (Step 3/5)';
    }
  };

  const getStatusColor = () => {
    switch (state) {
      case 'completed':
        return '#34d399';
      case 'partial_fallback':
        return '#fbbf24';
      case 'failure_dialog':
        return '#f87171';
      default:
        return '#818cf8';
    }
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <h1
        style={{
          fontSize: '2.1rem',
          fontWeight: 800,
          color: '#ffffff',
          margin: '0 0 8px 0',
          letterSpacing: '-0.02em',
        }}
      >
        Analyzing Your Responses
      </h1>

      <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: '0 0 20px 0', maxWidth: '850px', lineHeight: 1.5 }}>
        We&apos;re organizing your answers to create a personalized career profile, tailor mock interview difficulty, and map your baseline competency roadmap.
      </p>

      {/* 5 Metric Parameter Chips Horizontal Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          backgroundColor: 'rgba(14, 18, 28, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '14px',
          padding: '12px 18px',
        }}
      >
        {/* Chip 1 */}
        <div>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            SESSION
          </div>
          <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>
            Career Introduction
          </div>
        </div>

        {/* Chip 2 */}
        <div>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            RESPONSE MODE
          </div>
          <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Video size={13} />
            <span>Camera + Voice</span>
          </div>
        </div>

        {/* Chip 3 */}
        <div>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            QUESTIONS ANSWERED
          </div>
          <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>
            8 of 8 Completed
          </div>
        </div>

        {/* Chip 4 */}
        <div>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            PIPELINE STATUS
          </div>
          <div style={{ fontSize: '0.82rem', color: getStatusColor(), fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: getStatusColor(),
                boxShadow: `0 0 6px ${getStatusColor()}`,
              }}
            />
            <span>{getPipelineStatusText()}</span>
          </div>
        </div>

        {/* Chip 5 */}
        <div>
          <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            STARTED
          </div>
          <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600 }}>
            14:32:08 UTC
          </div>
        </div>
      </div>
    </div>
  );
};
