import React from 'react';
import { Bot } from 'lucide-react';

interface DiagnosticAiCoachCalloutProps {
  message?: string;
  statusText?: string;
}

export const DiagnosticAiCoachCallout: React.FC<DiagnosticAiCoachCalloutProps> = ({
  message = "I'll ask a few targeted questions about your engineering background and target aspirations. There are no right or wrong answers here — speak or write naturally so we calibrate accurate mock interviewer difficulty.",
  statusText = 'Ready for your answer',
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        borderRadius: '16px',
        padding: '16px 20px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Glowing AI Avatar Orb */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 0 16px rgba(124, 58, 237, 0.5)',
          flexShrink: 0,
        }}
      >
        <Bot size={22} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
              Inprep AI Coach
            </span>
            <span style={{ color: '#475569' }}>•</span>
            <span style={{ fontSize: '0.74rem', color: '#818cf8', fontWeight: 500 }}>
              Adaptive Guidance
            </span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', color: '#38bdf8', fontWeight: 600 }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
                boxShadow: '0 0 6px #38bdf8',
              }}
            />
            <span>{statusText}</span>
          </div>
        </div>

        <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
          &quot;{message}&quot;
        </p>
      </div>
    </div>
  );
};
