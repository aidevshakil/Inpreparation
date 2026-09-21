import React from 'react';
import { Briefcase, Plus, Sparkles, Copy, Trash2, GripVertical } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  roleTitle: string;
  company: string;
  location: string;
  timeline: string;
  bulletsText: string;
}

interface CvBuilderExperienceSectionProps {
  experiences: ExperienceItem[];
  onAddExperience: () => void;
  onUpdateExperience: (id: string, field: keyof ExperienceItem, value: string) => void;
  onDeleteExperience: (id: string) => void;
  onPolishBullets?: (id: string) => void;
}

export const CvBuilderExperienceSection: React.FC<CvBuilderExperienceSectionProps> = ({
  experiences,
  onAddExperience,
  onUpdateExperience,
  onDeleteExperience,
  onPolishBullets,
}) => {
  return (
    <div
      id="section-experience"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
          flexWrap: 'wrap',
          gap: '8px',
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
              color: '#818cf8',
            }}
          >
            <Briefcase size={14} />
          </span>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            3. Professional Experience
          </h3>
        </div>

        <button
          onClick={onAddExperience}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: '#a5b4fc',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Plus size={13} />
          <span>Add Experience</span>
        </button>
      </div>

      {/* Experience List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px',
            }}
          >
            {/* Top Bar of Entry */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GripVertical size={14} style={{ color: '#64748b', cursor: 'grab' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {exp.roleTitle || `Role #${idx + 1}`}
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  • {exp.company || 'Company'} ({exp.location || 'Location'})
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(99, 102, 241, 0.15)',
                    color: '#a5b4fc',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                  }}
                >
                  {exp.timeline}
                </span>

                <button
                  onClick={() => onPolishBullets && onPolishBullets(exp.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#818cf8',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                  title="Duplicate Entry"
                >
                  <Copy size={13} />
                </button>

                <button
                  onClick={() => onDeleteExperience(exp.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#f87171',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                  title="Delete Entry"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            {/* Form Fields for Entry */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Role Title
                </label>
                <input
                  type="text"
                  value={exp.roleTitle}
                  onChange={(e) => onUpdateExperience(exp.id, 'roleTitle', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '7px 10px',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: 'var(--text-main)',
                    fontSize: '0.78rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Company
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => onUpdateExperience(exp.id, 'company', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '7px 10px',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: 'var(--text-main)',
                    fontSize: '0.78rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Timeline
                </label>
                <input
                  type="text"
                  value={exp.timeline}
                  onChange={(e) => onUpdateExperience(exp.id, 'timeline', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '7px 10px',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: 'var(--text-main)',
                    fontSize: '0.78rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Impact & Key Deliverables */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                }}
              >
                <label style={{ fontSize: '0.68rem', fontWeight: 600, color: '#cbd5e1' }}>
                  Impact &amp; Key Deliverables (Bullet Points)
                </label>
                <button
                  onClick={() => onPolishBullets && onPolishBullets(exp.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#818cf8',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    padding: 0,
                  }}
                >
                  <Sparkles size={11} />
                  <span>Polish Bullet Points</span>
                </button>
              </div>

              <textarea
                rows={4}
                value={exp.bulletsText}
                onChange={(e) => onUpdateExperience(exp.id, 'bulletsText', e.target.value)}
                placeholder="• List your quantifiable engineering achievements..."
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  fontSize: '0.78rem',
                  lineHeight: 1.5,
                  outline: 'none',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
