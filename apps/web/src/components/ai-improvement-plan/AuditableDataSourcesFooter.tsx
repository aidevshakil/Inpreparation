import React from 'react';
import { Database, ShieldCheck } from 'lucide-react';

interface AuditableDataSourcesFooterProps {
  onNavigateQuestionPerformance?: () => void;
  onNavigatePresentation?: () => void;
  onNavigateSpeech?: () => void;
  onNavigateCommunication?: () => void;
  onNavigateSkill?: () => void;
  onNavigateScore?: () => void;
  onNavigateHistory?: () => void;
}

export const AuditableDataSourcesFooter: React.FC<AuditableDataSourcesFooterProps> = ({
  onNavigateQuestionPerformance,
  onNavigatePresentation,
  onNavigateSpeech,
  onNavigateCommunication,
  onNavigateSkill,
  onNavigateScore,
  onNavigateHistory,
}) => {
  const sources = [
    {
      label: 'Question Performance #41 (Score: 69)',
      dotColor: '#ef4444',
      onClick: onNavigateQuestionPerformance,
    },
    {
      label: 'Presentation Analytics #40 (84% Align)',
      dotColor: '#38bdf8',
      onClick: onNavigatePresentation,
    },
    {
      label: 'Speech Analytics #39 (Cadence: 142 wpm)',
      dotColor: '#818cf8',
      onClick: onNavigateSpeech,
    },
    {
      label: 'Communication Analytics #38 (76.4/100)',
      dotColor: '#c084fc',
      onClick: onNavigateCommunication,
    },
    {
      label: 'Skill Analytics #37 (14 Vectors)',
      dotColor: '#34d399',
      onClick: onNavigateSkill,
    },
    {
      label: 'Score Analytics #36 (74.8 Baseline)',
      dotColor: '#818cf8',
      onClick: onNavigateScore,
    },
    {
      label: 'Session History (6 Mock Cycles)',
      dotColor: '#94a3b8',
      onClick: onNavigateHistory,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#090d18',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Database size={15} style={{ color: '#818cf8' }} />
          <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f1f5f9', margin: 0 }}>
            Auditable Data Sources (Traceable Diagnostic Network)
          </h4>
        </div>
        <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
          Click source badge to review raw evidentiary telemetry
        </span>
      </div>

      {/* Badges List */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {sources.map((item, idx) => (
          <button
            key={idx}
            onClick={item.onClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '7px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = '#cbd5e1';
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.dotColor }} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Policy Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.68rem',
          color: '#64748b',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={13} style={{ color: '#818cf8' }} />
          <span>Self-guided algorithmic coaching certified under ISO/IEC 42001 standards. Zero subjective human bias.</span>
        </div>
        <span>AES-256 Encrypted Vault • Auto-purged every 30 days</span>
      </div>
    </div>
  );
};
