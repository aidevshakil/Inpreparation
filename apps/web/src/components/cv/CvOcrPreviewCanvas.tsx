import React, { useState } from 'react';
import { ZoomIn, Maximize2, ExternalLink, MapPin, Mail, Phone, Globe, GraduationCap, Code2, FileText } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface CvOcrPreviewCanvasProps {
  candidateName?: string;
  candidateRole?: string;
  candidateLocation?: string;
  candidateEmail?: string;
  candidatePhone?: string;
  candidateSkills?: string[];
  summary?: string;
  workExperience?: any[];
  projects?: any[];
  education?: string[];
  rawTextPreview?: string;
  onExpandDossier?: () => void;
}

export const CvOcrPreviewCanvas: React.FC<CvOcrPreviewCanvasProps> = ({
  candidateName,
  candidateRole,
  candidateLocation,
  candidateEmail,
  candidatePhone,
  candidateSkills,
  summary,
  workExperience,
  projects,
  education,
  rawTextPreview,
  onExpandDossier,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const { isDarkMode } = useTheme();

  // Helper to safely render unknown AI payload types
  const safeRender = (val: any): React.ReactNode => {
    if (val === null || val === undefined) return '';
    if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') return val;
    if (Array.isArray(val)) return val.map(safeRender).join(', ');
    if (typeof val === 'object') {
      // If it's a known schema object that slipped in, try to format it nicely
      if (val.degree || val.institution) return `${val.degree || ''} ${val.institution ? `at ${val.institution}` : ''}`;
      if (val.title || val.company) return `${val.title || ''} ${val.company ? `at ${val.company}` : ''}`;
      return JSON.stringify(val);
    }
    return String(val);
  };

  // Theme-aware color tokens
  const canvasBg = isDarkMode ? '#090d16' : '#ffffff';
  const nameColor = isDarkMode ? '#ffffff' : '#0f172a';
  const roleColor = isDarkMode ? '#818cf8' : '#4f46e5';
  const metaTextColor = isDarkMode ? '#94a3b8' : '#475569';
  const metaIconColor = isDarkMode ? '#818cf8' : '#6366f1';
  const sectionTitleColor = isDarkMode ? '#a5b4fc' : '#4338ca';
  const bodyTextColor = isDarkMode ? '#cbd5e1' : '#334155';
  const headingBoldColor = isDarkMode ? '#ffffff' : '#0f172a';
  const dividerColor = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0';

  // Skill chip tokens
  const chipBg = isDarkMode ? 'rgba(99, 102, 241, 0.14)' : '#f1f5f9';
  const chipBorder = isDarkMode ? 'rgba(99, 102, 241, 0.3)' : '#cbd5e1';
  const chipColor = isDarkMode ? '#e0e7ff' : '#1e293b';

  // Project card tokens
  const cardBg = isDarkMode ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc';
  const cardBorder = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0';
  const cardDescColor = isDarkMode ? '#94a3b8' : '#475569';
  const projTagBg = isDarkMode ? 'rgba(99, 102, 241, 0.15)' : '#eef2ff';
  const projTagColor = isDarkMode ? '#c7d2fe' : '#4338ca';

  // OCR stream box tokens
  const ocrBoxBg = isDarkMode ? 'rgba(0, 0, 0, 0.45)' : '#f8fafc';
  const ocrBoxBorder = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0';
  const ocrBoxText = isDarkMode ? '#94a3b8' : '#475569';

  const skillsList = candidateSkills && candidateSkills.length > 0
    ? candidateSkills
    : [
        'Generative AI', 'LLMs', 'OpenAI', 'Gemini', 'LangChain', 'LangGraph',
        'PyTorch', 'Computer Vision', 'OpenCV', 'FastAPI', 'Docker', 'Kubernetes', 'RAG'
      ];

  const defaultExperiences = [
    {
      title: 'AI Developer',
      company: 'Spiral Lab',
      location: 'Pakistan | Remote',
      duration: 'June 2026 — Present',
      bullets: [
        'Developed an AI-powered Supermarket Promo Generator for retail marketing automation using Gemini models and product embeddings.',
        'Built SliceUP AI financial assistant and ADS-AI marketing automation platform with Docker and Kubernetes.',
      ],
    },
    {
      title: 'AI Engineer',
      company: 'Betopia Group',
      location: 'Dhaka, Bangladesh',
      duration: 'January 2025 — June 2026',
      bullets: [
        'Designed and developed InPrep AI mock interview platform using Computer Vision, LLMs, OpenCV, and FastAPI.',
        'Developed Hair Shade Recommendation Pipeline and HarmoniAI Multi-Agent Platform.',
      ],
    },
  ];

  const expsToRender = Array.isArray(workExperience) && workExperience.length > 0
    ? workExperience
    : defaultExperiences;

  const defaultProjects = [
    {
      title: 'BusTicketBD – AI Bus Ticket Assistant',
      metrics: 'RAG Conversational Workflow',
      description: 'Built a chat-driven bus ticket assistant for Bangladesh with intent extraction, embeddings, vector search, and LangGraph.',
      skills: ['FastAPI', 'LangGraph', 'Pinecone', 'OpenAI', 'MongoDB', 'Streamlit'],
    },
    {
      title: 'InPrep AI – Mock Interview Platform',
      metrics: 'Multimodal AI Diagnostics',
      description: 'Platform integrating Computer Vision, LLMs, TensorFlow, OpenCV, FastAPI, and PostgreSQL for interview feedback.',
      skills: ['Computer Vision', 'LLMs', 'TensorFlow', 'OpenCV', 'FastAPI', 'PostgreSQL'],
    },
    {
      title: 'Brain Tumor Segmentation using MRI',
      metrics: 'Medical Deep Learning',
      description: 'Medical image segmentation solution for detecting and segmenting brain tumors from MRI scans.',
      skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Medical AI'],
    },
    {
      title: 'HarmoniAI Multi-Agent Platform',
      metrics: 'GenAI Orchestration',
      description: 'Multi-agent system integrating LLMs, image generation, voice synthesis, and automated workflows.',
      skills: ['LangGraph', 'Multi-Agent', 'Python', 'LLMs', 'Voice AI'],
    },
  ];

  const projsToRender = Array.isArray(projects) && projects.length > 0
    ? projects
    : defaultProjects;

  const defaultEducation = [
    'B.Sc. in Computer Science & Engineering — Gopalganj Science and Technology University (GSTU) (2019 – 2022)',
    'Higher Secondary Certificate (HSC) — Birshreshtha Munshi Abdur Rouf Public College (2018)',
  ];

  const eduToRender = Array.isArray(education) && education.length > 0
    ? education
    : defaultEducation;

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: isDarkMode ? '0 4px 24px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
        marginBottom: '20px',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      {/* Top Window Bar */}
      <div
        style={{
          padding: '10px 16px',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: `1px solid ${dividerColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Mac-style 3 dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600, marginLeft: '8px' }}>
            OCR Vector Preview Canvas (A4 Structured View)
          </span>
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
              padding: '2px',
              borderRadius: '6px',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0'}`,
            }}
          >
            <button
              onClick={() => setCurrentPage(1)}
              style={{
                padding: '3px 10px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.72rem',
                fontWeight: currentPage === 1 ? 700 : 500,
                backgroundColor: currentPage === 1 ? (isDarkMode ? 'rgba(99, 102, 241, 0.25)' : '#ffffff') : 'transparent',
                color: currentPage === 1 ? 'var(--primary-color)' : 'var(--text-muted)',
                boxShadow: currentPage === 1 && !isDarkMode ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              Page 1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              style={{
                padding: '3px 10px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.72rem',
                fontWeight: currentPage === 2 ? 700 : 500,
                backgroundColor: currentPage === 2 ? (isDarkMode ? 'rgba(99, 102, 241, 0.25)' : '#ffffff') : 'transparent',
                color: currentPage === 2 ? 'var(--primary-color)' : 'var(--text-muted)',
                boxShadow: currentPage === 2 && !isDarkMode ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              Page 2
            </button>
          </div>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              borderRadius: '4px',
            }}
            title="Toggle Zoom"
          >
            <ZoomIn size={14} />
          </button>

          <button
            onClick={() => setCurrentPage(currentPage === 1 ? 2 : 1)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              borderRadius: '4px',
            }}
            title="Switch Page"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </div>

      {/* Structured Resume Canvas Content */}
      <div
        style={{
          padding: '28px 32px',
          backgroundColor: canvasBg,
          fontSize: isZoomed ? '0.88rem' : '0.8rem',
          lineHeight: 1.55,
          color: bodyTextColor,
          transition: 'all 0.2s ease',
          minHeight: '440px',
        }}
      >
        {currentPage === 1 ? (
          <>
            {/* Resume Header */}
            <div style={{ borderBottom: `1px solid ${dividerColor}`, paddingBottom: '16px', marginBottom: '16px' }}>
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: nameColor,
                  margin: '0 0 4px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {candidateName || 'Shakil Ahamed'}
              </h2>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: roleColor, marginBottom: '8px' }}>
                {candidateRole || 'Full-Stack AI Developer'}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', fontSize: '0.74rem', color: metaTextColor }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} color={metaIconColor} /> {candidateLocation || 'Dhaka, Bangladesh'}
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Mail size={12} color={metaIconColor} /> {candidateEmail || 'aidevshakilinfo@gmail.com'}
                </span>
                {candidatePhone && (
                  <>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Phone size={12} color={metaIconColor} /> {candidatePhone}
                    </span>
                  </>
                )}
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Globe size={12} color={metaIconColor} /> inprep.ai/dossier
                </span>
              </div>
            </div>

            {/* Section 1: Executive Summary */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.8px', color: sectionTitleColor, textTransform: 'uppercase', marginBottom: '6px' }}>
                Executive Summary
              </div>
              <p style={{ fontSize: '0.78rem', color: bodyTextColor, lineHeight: 1.6, margin: 0 }}>
                {summary || (
                  'Full-Stack AI Developer with 1.5+ years of professional AI/ML experience building and deploying end-to-end AI-powered applications and intelligent software systems. Experienced in Generative AI, LLMs, RAG, AI agents, multi-agent systems, Computer Vision, and Machine Learning using Python, FastAPI, LangChain, LangGraph, vector databases, Docker, and Kubernetes.'
                )}
              </p>
            </div>

            {/* Section 2: Technical Competencies */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.8px', color: sectionTitleColor, textTransform: 'uppercase', marginBottom: '8px' }}>
                Technical Competencies
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {skillsList.map((sk) => (
                  <span
                    key={sk}
                    style={{
                      padding: '4px 10px',
                      backgroundColor: chipBg,
                      border: `1px solid ${chipBorder}`,
                      borderRadius: '6px',
                      fontSize: '0.74rem',
                      color: chipColor,
                      fontWeight: 600,
                    }}
                  >
                    {safeRender(sk)}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 3: Professional Experience */}
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.8px', color: sectionTitleColor, textTransform: 'uppercase', marginBottom: '10px' }}>
                Professional Experience
              </div>

              {expsToRender.map((exp: any, idx: number) => (
                <div key={idx} style={{ marginBottom: idx < expsToRender.length - 1 ? '14px' : '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
                    <strong style={{ fontSize: '0.84rem', color: headingBoldColor }}>{safeRender(exp?.title || 'AI Developer')}</strong>
                    <span style={{ fontSize: '0.72rem', color: metaTextColor }}>
                      {safeRender(exp?.duration || 'Recent')} • {safeRender(exp?.company || 'Company')} {exp?.location ? `(${safeRender(exp.location)})` : ''}
                    </span>
                  </div>
                  {Array.isArray(exp?.bullets) && exp.bullets.length > 0 && (
                    <ul style={{ margin: '6px 0 0 16px', padding: 0, fontSize: '0.76rem', color: bodyTextColor, lineHeight: 1.55 }}>
                      {exp.bullets.map((b: any, bIdx: number) => (
                        <li key={bIdx} style={{ marginBottom: '2px' }}>{safeRender(b)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Page 2: Projects, Education & OCR Preview */}
            <div style={{ borderBottom: `1px solid ${dividerColor}`, paddingBottom: '14px', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: headingBoldColor, margin: '0 0 4px 0' }}>
                Engineering Projects &amp; Credentials (Page 2)
              </h3>
              <span style={{ fontSize: '0.74rem', color: metaTextColor }}>
                Extracted portfolio artifacts, verified degrees, and live document OCR stream
              </span>
            </div>

            {/* Projects */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.8px', color: sectionTitleColor, textTransform: 'uppercase', marginBottom: '10px' }}>
                <Code2 size={14} />
                <span>Featured Engineering Projects</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                {projsToRender.map((proj: any, pIdx: number) => {
                  const pSkills = Array.isArray(proj?.skills) ? proj.skills : Array.isArray(proj?.stack) ? proj.stack : [];
                  return (
                    <div
                      key={pIdx}
                      style={{
                        padding: '12px 14px',
                        backgroundColor: cardBg,
                        border: `1px solid ${cardBorder}`,
                        borderRadius: '10px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ fontSize: '0.82rem', color: headingBoldColor }}>{safeRender(proj?.title || 'Production Project')}</strong>
                        {proj?.metrics && (
                          <span style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 600 }}>{safeRender(proj.metrics)}</span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.74rem', color: cardDescColor, margin: '0 0 8px 0', lineHeight: 1.45 }}>
                        {safeRender(proj?.description)}
                      </p>
                      {pSkills.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          {pSkills.map((s: any, sIdx: number) => (
                            <span
                              key={sIdx}
                              style={{
                                fontSize: '0.66rem',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                backgroundColor: projTagBg,
                                color: projTagColor,
                                fontWeight: 600,
                              }}
                            >
                              {safeRender(s)}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.8px', color: sectionTitleColor, textTransform: 'uppercase', marginBottom: '8px' }}>
                <GraduationCap size={14} />
                <span>Education &amp; Academic Background</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.76rem', color: bodyTextColor, lineHeight: 1.6 }}>
                {eduToRender.map((edu: any, eIdx: number) => (
                  <li key={eIdx}>{safeRender(edu)}</li>
                ))}
              </ul>
            </div>

            {/* Raw Text OCR Stream */}
            {rawTextPreview && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.8px', color: sectionTitleColor, textTransform: 'uppercase', marginBottom: '6px' }}>
                  <FileText size={14} />
                  <span>Verified Document OCR Stream</span>
                </div>
                <div
                  style={{
                    padding: '12px 14px',
                    backgroundColor: ocrBoxBg,
                    border: `1px solid ${ocrBoxBorder}`,
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '0.72rem',
                    color: ocrBoxText,
                    whiteSpace: 'pre-wrap',
                    maxHeight: '140px',
                    overflowY: 'auto',
                    lineHeight: 1.5,
                  }}
                >
                  {rawTextPreview}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Canvas Metadata Bar */}
      <div
        style={{
          padding: '12px 20px',
          backgroundColor: 'var(--bg-surface)',
          borderTop: `1px solid ${dividerColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.74rem',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span style={{ color: 'var(--text-secondary)' }}>
          Extracted <strong style={{ color: '#059669' }}>{skillsList.length} distinct technical attributes</strong> • Last synchronized with Mock Calibrator
        </span>

        <button
          onClick={onExpandDossier}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--primary-color)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: 0,
          }}
        >
          <span>Expand Full Interactive Dossier</span>
          <ExternalLink size={13} />
        </button>
      </div>
    </div>
  );
};

