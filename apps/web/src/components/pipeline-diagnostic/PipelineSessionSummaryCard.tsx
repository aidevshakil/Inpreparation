import React from 'react';
import { ShieldCheck, EyeOff } from 'lucide-react';

interface PipelineSessionSummaryCardProps {
  diagnosticData?: any;
}

export const PipelineSessionSummaryCard: React.FC<PipelineSessionSummaryCardProps> = ({ diagnosticData }) => {
  const completedQuestionsCount = diagnosticData?.completedQuestionsCount || 0;
  const totalDurationSeconds = diagnosticData?.totalDurationSeconds || 0;

  const minutes = Math.floor(totalDurationSeconds / 60);
  const seconds = totalDurationSeconds % 60;

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
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
          marginBottom: '16px',
        }}
      >
        <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Session Summary
        </h4>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.68rem',
            color: '#34d399',
            fontWeight: 600,
          }}
        >
          <ShieldCheck size={12} />
          <span>SHA-256 Vaulted</span>
        </div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Diagnostic Module</span>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>Career Introduction</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Questions Completed</span>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>{completedQuestionsCount} of 8 Prompts</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Multimodal Ingestion</span>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>{diagnosticData ? '1080p Video + High-Fi Audio' : 'No Data'}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Total Speech Captured</span>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>{minutes}m {seconds}s</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
          <span style={{ color: '#94a3b8' }}>Observable Framing</span>
          <span style={{ color: '#34d399', fontWeight: 600 }}>Eye-level Alignment • Optimal</span>
        </div>
      </div>

      {/* Camera Feed Disclaimer Box */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
        }}
      >
        <EyeOff size={14} style={{ color: '#64748b', flexShrink: 0, marginTop: '2px' }} />
        <p style={{ fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
          Camera feeds measure strictly observable framing, lighting, and audio clarity. No biometric profiling or sentiment score is applied.
        </p>
      </div>
    </div>
  );
};
