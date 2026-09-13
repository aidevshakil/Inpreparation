import React from 'react';
import { FileText } from 'lucide-react';

interface DiagnosticActiveDossierCardProps {
  fileName?: string;
  targetRole?: string;
  experienceLevel?: string;
  cvScore?: number;
  coreStack?: string[];
  onEditDossier?: () => void;
}

export const DiagnosticActiveDossierCard: React.FC<DiagnosticActiveDossierCardProps> = ({
  fileName = 'Shakil_CV_2026.pdf',
  targetRole = 'Staff Backend / Distributed Systems Architect',
  experienceLevel = 'Senior (6+ yrs)',
  cvScore = 84,
  coreStack = ['Python', 'Go', 'FastAPI', 'Kafka', 'PostgreSQL', 'Redis'],
  onEditDossier,
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={16} style={{ color: '#818cf8' }} />
          <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Active Dossier
          </h4>
        </div>

        <button
          onClick={onEditDossier}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Edit Dossier
        </button>
      </div>

      {/* File & Target Role */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '2px' }}>
          Connected File: <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{fileName}</span>
        </div>
        <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', marginTop: '6px' }}>
          {targetRole}
        </div>
      </div>

      {/* Experience baseline & score */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
          Experience Baseline: <strong style={{ color: '#f8fafc' }}>{experienceLevel}</strong>
        </span>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.18)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          CV Score: {cvScore}/100
        </span>
      </div>

      {/* Detected Core Stack */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 600, marginBottom: '6px' }}>
          Detected Core Stack:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {coreStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.7rem',
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p style={{ fontSize: '0.72rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
        Inprep AI uses this background data to formulate dynamic follow-up technical questions during calibration.
      </p>
    </div>
  );
};
