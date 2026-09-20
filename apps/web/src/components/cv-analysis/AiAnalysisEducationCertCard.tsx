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
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '18px',
          padding: '20px',
          boxShadow: 'var(--shadow-sm)',
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
                color: 'var(--text-muted)',
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
              color: 'var(--primary-color)',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Edit
          </button>
        </div>

        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
          B.Sc. in Computer Science &amp; Engineering
        </div>
        <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
          North South University (NSU)
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          2017 — 2021 • Graduated with Honors
        </div>
      </div>

      {/* Certifications Box */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '18px',
          padding: '20px',
          boxShadow: 'var(--shadow-sm)',
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
                color: 'var(--text-muted)',
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
              color: 'var(--primary-color)',
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

        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
          AWS Certified Developer — Associate
        </div>
        <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
          Amazon Web Services • Issued Dec 2023
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.72rem',
            color: '#059669',
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
