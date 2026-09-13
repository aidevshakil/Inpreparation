import React from 'react';
import { Plus, CheckCircle2, GraduationCap, Award } from 'lucide-react';

interface AiAnalysisEducationCertCardProps {
  onEditEducation?: () => void;
  onAddCertification?: () => void;
}

export const AiAnalysisEducationCertCard: React.FC<AiAnalysisEducationCertCardProps> = ({
  onEditEducation,
  onAddCertification,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '20px',
      }}
    >
      {/* Education Box */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={16} style={{ color: '#818cf8' }} />
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              EDUCATION
            </span>
          </div>

          <button
            onClick={onEditEducation}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#818cf8',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Edit
          </button>
        </div>

        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
          B.Sc. in Computer Science &amp; Engineering
        </div>
        <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginBottom: '4px' }}>
          North South University (NSU)
        </div>
        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
          2017 — 2021 • Graduated with Honors
        </div>
      </div>

      {/* Certifications Box */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} style={{ color: '#38bdf8' }} />
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              CERTIFICATIONS
            </span>
          </div>

          <button
            onClick={onAddCertification}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#818cf8',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            <Plus size={11} />
            <span>Add</span>
          </button>
        </div>

        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
          AWS Certified Developer — Associate
        </div>
        <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginBottom: '6px' }}>
          Amazon Web Services • Issued Dec 2023
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.72rem',
            color: '#34d399',
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={12} />
          <span>Credential ID: Verified ✓</span>
        </div>
      </div>
    </div>
  );
};
