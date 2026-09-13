import React from 'react';
import { FolderGit2, Plus, Edit2, Trash2 } from 'lucide-react';

export interface ProjectItem {
  id: string;
  name: string;
  badge: string;
  year: string;
  description: string;
}

interface CvBuilderProjectsSectionProps {
  projects: ProjectItem[];
  onAddProject: () => void;
  onEditProject?: (id: string) => void;
  onDeleteProject?: (id: string) => void;
}

export const CvBuilderProjectsSection: React.FC<CvBuilderProjectsSectionProps> = ({
  projects,
  onAddProject,
  onEditProject,
  onDeleteProject,
}) => {
  return (
    <div
      id="section-projects"
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
              color: '#818cf8',
            }}
          >
            <FolderGit2 size={14} />
          </span>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            6. Key Projects
          </h3>
        </div>

        <button
          onClick={onAddProject}
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
          <span>Add Project</span>
        </button>
      </div>

      {/* Projects List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {projects.map((proj) => (
          <div
            key={proj.id}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                  {proj.name}
                </h4>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                  • {proj.badge} • {proj.year}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  onClick={() => onEditProject && onEditProject(proj.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#818cf8',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                  title="Edit Project"
                >
                  <Edit2 size={13} />
                </button>
                {onDeleteProject && (
                  <button
                    onClick={() => onDeleteProject(proj.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#f87171',
                      cursor: 'pointer',
                      padding: '2px',
                    }}
                    title="Delete Project"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </div>

            <p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
