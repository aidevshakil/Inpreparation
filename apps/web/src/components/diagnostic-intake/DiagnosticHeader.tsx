import React from 'react';
import { Clock, HelpCircle, Mic, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

interface DiagnosticHeaderProps {
  onNavigateToAssessment?: () => void;
}

export const DiagnosticHeader: React.FC<DiagnosticHeaderProps> = ({
  onNavigateToAssessment,
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Breadcrumb */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          color: '#94a3b8',
          marginBottom: '16px',
          flexWrap: 'wrap',
        }}
      >
        <span>Workspace</span>
        <ChevronRight size={12} style={{ color: '#475569' }} />
        <span
          style={{ color: '#cbd5e1', cursor: 'pointer' }}
          onClick={onNavigateToAssessment}
        >
          Career Assessment
        </span>
        <ChevronRight size={12} style={{ color: '#475569' }} />
        <span>Introduction Intake</span>
        <ChevronRight size={12} style={{ color: '#475569' }} />
        <span style={{ color: '#818cf8', fontWeight: 600 }}>
          Diagnostic Intake • Question 1 of 8
        </span>
      </div>

      {/* Badges & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.8px',
            padding: '3px 10px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.18)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            textTransform: 'uppercase',
          }}
        >
          BASELINE INTAKE
        </span>
        <span style={{ color: '#475569' }}>•</span>
        <span style={{ fontSize: '0.74rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <ShieldCheck size={13} style={{ color: '#10b981' }} />
          <span>Confidential &amp; Secure</span>
        </span>
      </div>

      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#ffffff',
          margin: '0 0 8px 0',
          letterSpacing: '-0.02em',
        }}
      >
        Let&apos;s Get to Know Your Career Goals
      </h1>

      <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: '0 0 16px 0', maxWidth: '820px', lineHeight: 1.5 }}>
        Answer a few targeted questions so Inprep AI can personalize your interview preparation experience, tailor question rubrics, and calibrate realistic mock scenarios.
      </p>

      {/* Metadata Pill Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          padding: '10px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
          fontSize: '0.74rem',
          color: '#cbd5e1',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={13} style={{ color: '#818cf8' }} />
          <span>5–8 minutes total</span>
        </div>

        <span style={{ color: '#334155' }}>|</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HelpCircle size={13} style={{ color: '#38bdf8' }} />
          <span>8 diagnostic questions</span>
        </div>

        <span style={{ color: '#334155' }}>|</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Mic size={13} style={{ color: '#c084fc' }} />
          <span>Text, Voice, or Video</span>
        </div>

        <span style={{ color: '#334155' }}>|</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={13} style={{ color: '#34d399' }} />
          <span style={{ color: '#34d399', fontWeight: 600 }}>Saved just now</span>
        </div>

        <span style={{ color: '#334155' }}>|</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <ShieldCheck size={13} />
          <span>Non-evaluative • Only used for AI prompt tuning</span>
        </div>
      </div>
    </div>
  );
};
