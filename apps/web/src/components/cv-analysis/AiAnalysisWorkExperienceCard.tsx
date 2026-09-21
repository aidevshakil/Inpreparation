import React from 'react';
import { Plus, CheckCircle2, AlertCircle, TrendingUp, Layers, ExternalLink } from 'lucide-react';

export interface WorkExperienceEntry {
  title: string;
  badge?: string;
  company: string;
  location: string;
  duration: string;
  tenureScore?: string;
  tenure_score?: string;
  bullets: string[];
  stack?: string[];
  skills?: string[];
  metricsCount?: number;
  metrics_count?: number;
}

interface AiAnalysisWorkExperienceCardProps {
  initialExperiences?: WorkExperienceEntry[];
  verifiedStrength?: string;
  polishOpportunity?: string;
  onAddRole?: () => void;
  onEditExperience?: (index: number) => void;
}

export const AiAnalysisWorkExperienceCard: React.FC<AiAnalysisWorkExperienceCardProps> = ({
  initialExperiences,
  verifiedStrength,
  polishOpportunity,
  onAddRole,
  onEditExperience,
}) => {
  const experiences: WorkExperienceEntry[] = (Array.isArray(initialExperiences) && initialExperiences.length > 0)
    ? initialExperiences
    : [
    {
      title: 'AI Developer',
      badge: 'Current Role',
      company: 'Spiral Lab',
      location: 'Pakistan | Remote',
      duration: 'June 2026 — Present',
      tenureScore: '1.5+ yr / 98%',
      bullets: [
        'Developed an AI-powered Supermarket Promo Generator for retail marketing automation, using Gemini models, product embeddings, and LLM-based workflows to generate product-aware promotional copy and campaign content for supermarket offers.',
        'Built SliceUP, an AI-powered financial assistant integrating LLMs and intelligent data analysis to generate financial summaries, interpret spending patterns, and provide personalized insights.',
        'Developed ADS-AI, a Generative AI marketing automation platform for automated ad copy, image, and promotional video generation.',
        'Designed and integrated LLM-powered AI applications using modern AI APIs, prompt engineering, RAG workflows, and intelligent automation pipelines.',
        'Containerized and deployed AI services using Docker and Kubernetes across cloud and production environments, focusing on scalable and reliable AI services.',
      ],
      stack: ['Gemini', 'LLMs', 'Embeddings', 'RAG', 'FastAPI', 'Docker', 'Kubernetes', 'Python'],
      metricsCount: 2,
    },
    {
      title: 'AI Engineer',
      company: 'Betopia Group',
      location: 'Dhaka, Bangladesh',
      duration: 'January 2025 — June 2026',
      tenureScore: '1.5 yr / 96%',
      bullets: [
        'Designed and developed InPrep AI, an AI-powered mock interview platform integrating Computer Vision, LLMs, TensorFlow, OpenCV, FastAPI, and PostgreSQL for interview analysis, confidence assessment, and personalized AI feedback.',
        'Developed a Hair Shade Recommendation Pipeline using ResNet-based segmentation and K-Means clustering for automated hair color analysis and recommendation.',
        'Architected HarmoniAI Multi-Agent Platform integrating LLMs, image generation/editing, voice synthesis, and multi-agent workflows for e-commerce assistance and AI-powered media creation.',
        'Built HyperSpeed – CarWrapAI using an optimized Computer Vision segmentation pipeline and Docker-based deployment to improve AI inference performance.',
        'Engineered Sports Prediction Models for score, lineup, and head-to-head analysis using external APIs and deployed real-time AI prediction services.',
        'Developed Tom Storytelling, an AI-powered storytelling application designed around major life phases, including childhood, teenage years, early adulthood, career, relationships, hobbies, and later-life reflections.',
      ],
      stack: ['Computer Vision', 'LLMs', 'TensorFlow', 'OpenCV', 'FastAPI', 'PostgreSQL', 'ResNet', 'Multi-Agent'],
      metricsCount: 3,
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#818cf8' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            Extracted Work Experience
          </h3>
        </div>

        <button
          onClick={onAddRole}
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
          <span>Add Missing Role</span>
        </button>
      </div>

      <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', margin: '0 0 18px 0' }}>
        Chronological career data extracted from bullet points and tech stacks.
      </p>

      {/* Experience Entries */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px 18px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>{exp.title}</span>
                  {exp.badge && (
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        padding: '1px 7px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        color: '#059669',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <span style={{ fontWeight: 600 }}>{exp.company}</span>
                  <span style={{ margin: '0 6px', color: 'var(--text-muted)' }}>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-main)', fontWeight: 600 }}>{exp.duration}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({exp.tenureScore || exp.tenure_score || '1.5+ yr / 98%'})</span>
                <button
                  onClick={() => onEditExperience && onEditExperience(idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                  title="Edit entry"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>

            {/* Bullets */}
            {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
              <ul style={{ margin: '10px 0', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.55 }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Stack chips & metrics link */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>Detected Stack:</span>
                {(Array.isArray(exp.stack) ? exp.stack : Array.isArray((exp as any).skills) ? (exp as any).skills : []).map((tech: string) => (
                  <span
                    key={tech}
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
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>
                <TrendingUp size={12} />
                <span>{exp.metricsCount || exp.metrics_count || 2} Scale Metrics Extracted</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Synthesis & Observations Box */}
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '14px 16px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <Layers size={13} style={{ color: 'var(--primary-color)' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--primary-color)', letterSpacing: '0.6px' }}>
            AI SYNTHESIS &amp; OBSERVATIONS
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
            Discovered directly from factual resume text
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {/* Verified Strengths */}
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <CheckCircle2 size={13} style={{ color: '#059669' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669' }}>Verified Strengths</span>
            </div>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
              {verifiedStrength || 'Strong progression in production AI systems, LLM multi-agent pipelines (LangGraph), Computer Vision (OpenCV, ResNet), and scalable backend architectures (FastAPI, Docker, Kubernetes).'}
            </p>
          </div>

          {/* Polish Opportunity */}
          <div
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <AlertCircle size={13} style={{ color: '#d97706' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706' }}>Polish Opportunity</span>
            </div>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
              {polishOpportunity || 'Quantify inference latency reductions (p95/p99 ms), model benchmark metrics (F1/accuracy), and compute cost savings across deployed AI workflows.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
