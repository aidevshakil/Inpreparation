import React from 'react';
import { GraduationCap, Plus, Edit2, Trash2 } from 'lucide-react';

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  yearHonors: string;
  coursework: string;
}

interface CvBuilderEducationSectionProps {
  educations: EducationItem[];
  onAddDegree: () => void;
  onEditDegree?: (id: string) => void;
  onDeleteDegree?: (id: string) => void;
}

export const CvBuilderEducationSection: React.FC<CvBuilderEducationSectionProps> = ({
  educations,
  onAddDegree,
  onEditDegree,
  onDeleteDegree,
}) => {
  return (
    <div
      id="section-education"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
            }}
          >
            <GraduationCap size={14} />
          </span>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            4. Education
          </h3>
        </div>

        <button
          onClick={onAddDegree}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: 'var(--primary-color)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Plus size={13} />
          <span>Add Degree</span>
        </button>
      </div>

      {/* Degrees List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {educations.map((edu) => (
          <div
            key={edu.id}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '4px',
              }}
            >
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 4px 0' }}>
                  {edu.degree}
                </h4>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <span>{edu.institution}</span>
                  <span style={{ margin: '0 6px', color: '#475569' }}>•</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{edu.yearHonors}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => onEditDegree && onEditDegree(edu.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--primary-color)',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                  title="Edit Degree"
                >
                  <Edit2 size={13} />
                </button>
                {onDeleteDegree && (
                  <button
                    onClick={() => onDeleteDegree(edu.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#f87171',
                      cursor: 'pointer',
                      padding: '2px',
                    }}
                    title="Delete Degree"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </div>

            {edu.coursework && (
              <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: '8px 0 0 0' }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Coursework:</strong> {edu.coursework}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
