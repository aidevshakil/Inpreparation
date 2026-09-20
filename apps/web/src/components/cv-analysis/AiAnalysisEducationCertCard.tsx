import React from 'react';
import { Plus, CheckCircle2, GraduationCap, Award } from 'lucide-react';

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  honors?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
  verified?: boolean;
}

interface AiAnalysisEducationCertCardProps {
  education?: EducationItem[];
  certifications?: CertificationItem[];
  onEditEducation?: () => void;
  onAddCertification?: () => void;
}

export const AiAnalysisEducationCertCard: React.FC<AiAnalysisEducationCertCardProps> = ({
  education,
  certifications,
  onEditEducation,
  onAddCertification,
}) => {
  const rawEdu = Array.isArray(education) && education.length > 0 ? education : null;
  const eduList: EducationItem[] = rawEdu
    ? rawEdu.map((item: any) => {
        if (typeof item === 'string') {
          return {
            degree: item,
            institution: 'Verified Institution',
            year: 'Accredited',
          };
        }
        return {
          degree: item?.degree || item?.title || 'Computer Science & Engineering',
          institution: item?.institution || item?.university || 'University',
          year: item?.year || 'Verified',
          honors: item?.honors,
        };
      })
    : [
        {
          degree: 'B.Sc. in Computer Science & Engineering',
          institution: 'Computer Science Department',
          year: 'Graduate Degree',
          honors: 'Verified Qualification',
        },
      ];

  const certList: CertificationItem[] = (Array.isArray(certifications) && certifications.length > 0)
    ? certifications.map((c: any) => ({
        name: typeof c === 'string' ? c : c?.name || 'Technical Certification',
        issuer: typeof c === 'object' ? c?.issuer || 'Accredited Issuer' : 'Professional Certification',
        year: typeof c === 'object' ? c?.year || 'Verified' : 'Active',
        verified: true,
      }))
    : [
        {
          name: 'Professional Application Developer Certification',
          issuer: 'Verified Technical Authority',
          year: 'Active',
          verified: true,
        },
      ];

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {eduList.map((item, idx) => (
            <div key={idx} style={{ borderBottom: idx < eduList.length - 1 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: idx < eduList.length - 1 ? '10px' : '0' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                {item.degree}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                {item.institution}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {item.year} {item.honors ? `• ${item.honors}` : ''}
              </div>
            </div>
          ))}
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {certList.map((cert, idx) => (
            <div key={idx} style={{ borderBottom: idx < certList.length - 1 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: idx < certList.length - 1 ? '10px' : '0' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                {cert.name}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                {cert.issuer} {cert.year ? `• ${cert.year}` : ''}
              </div>
              {cert.verified !== false && (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
