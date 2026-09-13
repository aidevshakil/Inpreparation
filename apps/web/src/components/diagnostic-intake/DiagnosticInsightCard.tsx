import React from 'react';
import { Sparkles, Target } from 'lucide-react';

interface DiagnosticInsightCardProps {
  title?: string;
  insightBody?: string;
  calibratedFor?: string;
}

export const DiagnosticInsightCard: React.FC<DiagnosticInsightCardProps> = ({
  title = 'Focus on the "Why", Not Just the "What"',
  insightBody = 'In Staff-level engineering interviews, interviewers listen for your architectural rationale, not just an encyclopedic recitation of tools. When describing your trajectory, explain why you selected event-driven architectures over RPCs for critical workloads.',
  calibratedFor = 'Staff Level (L6+)',
}) => {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <Sparkles size={16} style={{ color: '#c084fc' }} />
        <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Interviewer Insight
        </h4>
      </div>

      <h5 style={{ fontSize: '0.84rem', fontWeight: 700, color: '#e2e8f0', margin: '0 0 8px 0' }}>
        {title}
      </h5>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 14px 0' }}>
        &quot;{insightBody}&quot;
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.7rem',
          color: '#818cf8',
          paddingTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Target size={12} />
        <span>Calibrated for: <strong style={{ color: '#ffffff' }}>{calibratedFor}</strong></span>
      </div>
    </div>
  );
};
