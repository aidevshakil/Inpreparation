import React from 'react';
import { Lightbulb } from 'lucide-react';

interface DiagnosticQuestionCardProps {
  category?: string;
  promptId?: string;
  question?: string;
  guidance?: string;
  promptingHint?: string;
}

export const DiagnosticQuestionCard: React.FC<DiagnosticQuestionCardProps> = ({
  category = 'CATEGORY: BACKGROUND & TRAJECTORY',
  promptId = 'Prompt ID: #DIAG-01-BK',
  question = 'Tell us a little about yourself, your professional background, and what you are currently working toward.',
  guidance = 'Try to answer naturally. You can touch on your current role, primary architectural stacks, recent high-impact initiatives, and the specific positions you want to prepare for next.',
  promptingHint = 'Mention your current seniority (e.g., Senior Backend / Distributed Systems), core languages (Python/Go), notable projects (scaling microservices), and what kind of interview drill you want to conquer.',
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left Accent Bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(180deg, #6366f1, #38bdf8)',
        }}
      />

      {/* Top Meta Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.8px',
            color: '#a5b4fc',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            padding: '2px 8px',
            borderRadius: '6px',
            textTransform: 'uppercase',
          }}
        >
          {category}
        </span>

        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{promptId}</span>
      </div>

      {/* Main Question Title */}
      <h2
        style={{
          fontSize: '1.28rem',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.4,
          margin: '0 0 10px 0',
          letterSpacing: '-0.01em',
        }}
      >
        {question}
      </h2>

      {/* Guidance */}
      <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.55, margin: '0 0 16px 0' }}>
        {guidance}
      </p>

      {/* Prompting Hint Box */}
      {promptingHint && (
        <div
          style={{
            backgroundColor: 'rgba(245, 158, 11, 0.06)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
          }}
        >
          <Lightbulb size={16} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#fbbf24' }}>Prompting hint:</strong> {promptingHint}
          </p>
        </div>
      )}
    </div>
  );
};
