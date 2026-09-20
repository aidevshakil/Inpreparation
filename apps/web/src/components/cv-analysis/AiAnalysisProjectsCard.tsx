import React from 'react';
import { Plus } from 'lucide-react';

export interface ProjectEntry {
  title: string;
  badge?: string;
  badgeColor?: string;
  subtitle: string;
  description: string;
  skills: string[];
}

interface AiAnalysisProjectsCardProps {
  initialProjects?: ProjectEntry[];
  onAddProject?: () => void;
}

export const AiAnalysisProjectsCard: React.FC<AiAnalysisProjectsCardProps> = ({
  initialProjects,
  onAddProject,
}) => {
  const projects: ProjectEntry[] = (Array.isArray(initialProjects) && initialProjects.length > 0)
    ? initialProjects
    : [
    {
      title: 'Distributed Transaction Saga Engine',
      badge: 'L6-ready',
      badgeColor: '#818cf8',
      subtitle: 'Open Source | Jan 2024',
      description:
        'High-reliability saga coordinator built with Go and Kafka for compensation-driven multi-phase distributed rollbacks across heterogeneous stateful databases.',
      skills: ['Go', 'Distributed Transactions', 'Kafka'],
    },
    {
      title: 'Acoustic Voice Prosody Analyzer',
      badge: 'AI / Audio',
      badgeColor: '#c084fc',
      subtitle: 'Academic / Research',
      description:
        'Real-time microphone stream parsing detecting speaking cadence, conversational pauses, and filler word frequency using Python and Librosa acoustic models.',
      skills: ['Python', 'Acoustic AI & Audio', 'PyTorch / Real-time DSP'],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#a855f7',
            }}
          />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            Key Projects Extracted
          </h3>
        </div>

        <button
          onClick={onAddProject}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '5px 12px',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Plus size={12} />
          <span>Add Project</span>
        </button>
      </div>

      {/* Projects List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Top row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '6px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {project.title}
                </span>
                {project.badge && (
                  <span
                    style={{
                      fontSize: '0.66rem',
                      fontWeight: 600,
                      padding: '1px 7px',
                      borderRadius: '9999px',
                      backgroundColor: `${project.badgeColor}1a`,
                      color: project.badgeColor,
                      border: `1px solid ${project.badgeColor}40`,
                    }}
                  >
                    {project.badge}
                  </span>
                )}
              </div>

              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{project.subtitle}</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
              {project.description}
            </p>

            {/* Extracted Skills */}
            {Array.isArray(project.skills || (project as any).stack) && (project.skills || (project as any).stack).length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Extracted Skills:
                </span>
                {(Array.isArray(project.skills) ? project.skills : (project as any).stack || []).map((skill: string) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.68rem',
                      padding: '2px 8px',
                      borderRadius: '5px',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
