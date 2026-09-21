import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, Download } from 'lucide-react';
import { PersonalInfoData } from './CvBuilderPersonalInfoSection';
import { ExperienceItem } from './CvBuilderExperienceSection';
import { EducationItem } from './CvBuilderEducationSection';
import { SkillCategoryGroup } from './CvBuilderSkillsSection';
import { ProjectItem } from './CvBuilderProjectsSection';
import { CertItem } from './CvBuilderCertsSection';

export type CvTemplateType = 'modern' | 'professional' | 'minimal';

interface CvBuilderA4PreviewSheetProps {
  personalInfo: PersonalInfoData;
  summary: string;
  experiences: ExperienceItem[];
  educations: EducationItem[];
  skillGroups: SkillCategoryGroup[];
  projects: ProjectItem[];
  certs: CertItem[];
  activeTemplate?: CvTemplateType;
  onSelectTemplate?: (template: CvTemplateType) => void;
  onDownloadPdf?: () => void;
  onExpandFullscreen?: () => void;
}

export const CvBuilderA4PreviewSheet: React.FC<CvBuilderA4PreviewSheetProps> = ({
  personalInfo,
  summary,
  experiences,
  educations,
  skillGroups,
  projects,
  activeTemplate = 'modern',
  onSelectTemplate,
  onDownloadPdf,
  onExpandFullscreen,
}) => {
  const [zoom, setZoom] = useState(100);

  const templates: { id: CvTemplateType; label: string }[] = [
    { id: 'modern', label: 'Modern' },
    { id: 'professional', label: 'Professional' },
    { id: 'minimal', label: 'Minimal' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '18px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Top Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {/* Template Selector Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-card)',
            padding: '3px',
            borderRadius: '8px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {templates.map((tpl) => {
            const isSelected = activeTemplate === tpl.id;
            return (
              <button
                key={tpl.id}
                onClick={() => onSelectTemplate && onSelectTemplate(tpl.id)}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected ? 'var(--primary-color)' : 'transparent',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {tpl.label}
              </button>
            );
          })}
        </div>

        {/* Zoom & Action Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={() => setZoom(Math.max(70, zoom - 10))}
            style={{
              padding: '4px 8px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              fontSize: '0.72rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Zoom out"
          >
            <ZoomOut size={12} />
          </button>

          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', minWidth: '32px', textAlign: 'center' }}>
            {zoom}%
          </span>

          <button
            onClick={() => setZoom(Math.min(130, zoom + 10))}
            style={{
              padding: '4px 8px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              fontSize: '0.72rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Zoom in"
          >
            <ZoomIn size={12} />
          </button>

          <button
            onClick={onExpandFullscreen}
            style={{
              padding: '4px 8px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              fontSize: '0.72rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Fullscreen"
          >
            <Maximize2 size={12} />
          </button>

          <button
            onClick={onDownloadPdf}
            style={{
              padding: '4px 8px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              fontSize: '0.72rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Download PDF"
          >
            <Download size={12} />
          </button>
        </div>
      </div>

      {/* Sync and Compliance Status Badges */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px',
          fontSize: '0.72rem',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#34d399',
              boxShadow: '0 0 8px #34d399',
            }}
          />
          <span>Live Synchronized Engine</span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: 'var(--color-success, #10b981)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            fontWeight: 700,
          }}
        >
          <span>ATS Compliance Score: 95/100</span>
        </div>
      </div>

      {/* A4 Paper Canvas */}
      <div
        style={{
          overflow: 'auto',
          maxHeight: '680px',
          backgroundColor: 'var(--bg-main)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '520px',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-main)',
            padding: '24px 28px',
            borderRadius: '4px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: `${0.68 * (zoom / 100)}rem`,
            lineHeight: 1.45,
            transition: 'all 0.2s ease',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: activeTemplate === 'minimal' ? 'left' : 'center', marginBottom: '16px' }}>
            <h2
              style={{
                fontSize: `${1.3 * (zoom / 100)}rem`,
                fontWeight: 800,
                color: 'var(--text-main)',
                margin: '0 0 2px 0',
                letterSpacing: '-0.02em',
              }}
            >
              {personalInfo.fullName || '[Full Name]'}
            </h2>
            <div
              style={{
                fontSize: `${0.78 * (zoom / 100)}rem`,
                fontWeight: 700,
                color: activeTemplate === 'professional' ? '#1e40af' : '#4f46e5',
                marginBottom: '6px',
              }}
            >
              {personalInfo.professionalTitle || '[Target Role / Title]'}
            </div>
            <div
              style={{
                fontSize: `${0.64 * (zoom / 100)}rem`,
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: activeTemplate === 'minimal' ? 'flex-start' : 'center',
                flexWrap: 'wrap',
                gap: '4px',
              }}
            >
              <span>{personalInfo.location || '[Location]'}</span>
              <span>•</span>
              <span>{personalInfo.phone || '[Phone]'}</span>
              <span>•</span>
              <span style={{ color: '#2563eb' }}>{personalInfo.email || '[Email Address]'}</span>
              <span>•</span>
              <span style={{ color: '#2563eb' }}>{personalInfo.linkedin || '[LinkedIn Profile]'}</span>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '10px 0' }} />

          {/* Professional Summary */}
          {summary && (
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: `${0.68 * (zoom / 100)}rem`,
                  fontWeight: 800,
                  letterSpacing: '0.6px',
                  color: activeTemplate === 'professional' ? '#1e40af' : '#4f46e5',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                PROFESSIONAL SUMMARY
              </div>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.45 }}>{summary}</p>
            </div>
          )}

          {/* Work Experience */}
          {experiences.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: `${0.68 * (zoom / 100)}rem`,
                  fontWeight: 800,
                  letterSpacing: '0.6px',
                  color: activeTemplate === 'professional' ? '#1e40af' : '#4f46e5',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                WORK EXPERIENCE
              </div>

              {experiences.map((exp) => (
                <div key={exp.id} style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-main)' }}>
                    <span>
                      {exp.roleTitle} — <span style={{ color: '#475569' }}>{exp.company}</span>
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: `${0.62 * (zoom / 100)}rem` }}>{exp.timeline}</span>
                  </div>
                  <div style={{ fontSize: `${0.62 * (zoom / 100)}rem`, color: 'var(--text-muted)', marginBottom: '3px' }}>
                    {exp.location}
                  </div>
                  <div style={{ color: '#334155', paddingLeft: '12px', whiteSpace: 'pre-line' }}>
                    {exp.bulletsText}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technical Skills */}
          {skillGroups.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: `${0.68 * (zoom / 100)}rem`,
                  fontWeight: 800,
                  letterSpacing: '0.6px',
                  color: activeTemplate === 'professional' ? '#1e40af' : '#4f46e5',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                TECHNICAL SKILLS
              </div>
              {skillGroups.map((group) => (
                <div key={group.category} style={{ color: '#334155', marginBottom: '2px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>{group.category}:</strong> {group.skills.join(', ')}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {educations.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: `${0.68 * (zoom / 100)}rem`,
                  fontWeight: 800,
                  letterSpacing: '0.6px',
                  color: activeTemplate === 'professional' ? '#1e40af' : '#4f46e5',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                EDUCATION
              </div>
              {educations.map((edu) => (
                <div key={edu.id} style={{ marginBottom: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-main)' }}>
                    <span>{edu.degree}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: `${0.62 * (zoom / 100)}rem` }}>{edu.yearHonors}</span>
                  </div>
                  <div style={{ color: '#475569' }}>{edu.institution}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Projects */}
          {projects.length > 0 && (
            <div>
              <div
                style={{
                  fontSize: `${0.68 * (zoom / 100)}rem`,
                  fontWeight: 800,
                  letterSpacing: '0.6px',
                  color: activeTemplate === 'professional' ? '#1e40af' : '#4f46e5',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                KEY PROJECTS
              </div>
              {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: '4px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>
                    {proj.name} <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>({proj.badge})</span>:
                    <span style={{ fontWeight: 400, color: '#334155', marginLeft: '4px' }}>{proj.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
