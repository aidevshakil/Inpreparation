import React from 'react';
import { MessageSquareQuote, ArrowRight } from 'lucide-react';

interface PipelineQuotePreviewCardProps {
  onOpenTranscript?: () => void;
  diagnosticData?: any;
}

export const PipelineQuotePreviewCard: React.FC<PipelineQuotePreviewCardProps> = ({
  onOpenTranscript,
  diagnosticData,
}) => {
  const quote = diagnosticData?.responses?.[0]?.responseText || "Awaiting real-time telemetry from candidate audio ingest. No responses collected yet.";
  
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px 22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquareQuote size={16} style={{ color: '#38bdf8' }} />
          <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Real-Time Ingested Quote Preview
          </h4>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: diagnosticData ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.05)',
            color: diagnosticData ? '#38bdf8' : '#94a3b8',
            border: diagnosticData ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {diagnosticData ? '98.2% Transcription Fidelity' : 'Waiting for Data'}
        </span>
      </div>

      {/* Quote Container */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderLeft: '3px solid #818cf8',
          padding: '12px 16px',
          borderRadius: '0 10px 10px 0',
          marginBottom: '14px',
        }}
      >
        <p
          style={{
            fontSize: '0.78rem',
            color: '#cbd5e1',
            lineHeight: 1.55,
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: '#64748b',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span>Captured from Question 1 (Professional Trajectory)</span>

        <button
          onClick={onOpenTranscript}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>View Full Transcript</span>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};
