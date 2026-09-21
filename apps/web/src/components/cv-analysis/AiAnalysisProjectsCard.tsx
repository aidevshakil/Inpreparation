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
      title: 'BusTicketBD – AI Bus Ticket Assistant',
      badge: 'Featured',
      badgeColor: '#818cf8',
      subtitle: 'FastAPI • LangGraph • Pinecone | 2025',
      description:
        'Built a chat-driven bus ticket assistant for Bangladesh using FastAPI, Streamlit, MongoDB, Pinecone, OpenAI, and LangGraph. Implemented intent extraction, embeddings, vector search, RAG-based responses, and stateful multi-step conversational workflows for intelligent ticket assistance.',
      skills: ['FastAPI', 'LangGraph', 'Pinecone', 'OpenAI', 'MongoDB', 'Streamlit', 'Python'],
    },
    {
      title: 'InPrep AI – Mock Interview Platform',
      badge: 'Core System',
      badgeColor: '#10b981',
      subtitle: 'Betopia Group | 2025 — 2026',
      description:
        'AI-powered mock interview platform integrating Computer Vision, LLMs, TensorFlow, OpenCV, FastAPI, and PostgreSQL for interview analysis, confidence assessment, and personalized AI feedback.',
      skills: ['Computer Vision', 'LLMs', 'TensorFlow', 'OpenCV', 'FastAPI', 'PostgreSQL'],
    },
    {
      title: 'Brain Tumor Segmentation using MRI',
      badge: 'Deep Learning',
      badgeColor: '#a855f7',
      subtitle: 'Medical Imaging CV | 2024',
      description:
        'Developed a deep learning-based medical image segmentation solution for detecting and segmenting brain tumors from MRI scans using computer vision techniques.',
      skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Medical Imaging', 'Deep Learning'],
    },
    {
      title: 'HarmoniAI Multi-Agent Platform',
      badge: 'Multi-Agent',
      badgeColor: '#f59e0b',
      subtitle: 'GenAI Orchestration | 2025',
      description:
        'Architected multi-agent platform integrating LLMs, image generation/editing, voice synthesis, and multi-agent workflows for e-commerce assistance and AI-powered media creation.',
      skills: ['LangGraph', 'Multi-Agent', 'Python', 'LLMs', 'Voice AI'],
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
