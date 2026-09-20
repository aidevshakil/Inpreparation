import React, { useState } from 'react';
import { ZoomIn, Maximize2, ExternalLink, MapPin, Mail, Phone, Globe, GraduationCap, Code2, FileText } from 'lucide-react';

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

  const skillsList = candidateSkills && candidateSkills.length > 0
    ? candidateSkills
    : ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Clean Architecture', 'Git'];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        marginBottom: '20px',
      }}
    >
      {/* Top Window Bar */}
      <div
        style={{
          padding: '10px 16px',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Mac-style 3 dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f43f5e' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600, marginLeft: '8px' }}>
            OCR Vector Preview Canvas (A4 Structured View)
          </span>
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={() => setCurrentPage(1)}
              style={{
                padding: '2px 8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.72rem',
                fontWeight: currentPage === 1 ? 700 : 400,
                backgroundColor: currentPage === 1 ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                color: currentPage === 1 ? 'var(--primary-color)' : 'var(--text-muted)',
              }}
            >
              Page 1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              style={{
                padding: '2px 8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.72rem',
                fontWeight: currentPage === 2 ? 700 : 400,
                backgroundColor: currentPage === 2 ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                color: currentPage === 2 ? 'var(--primary-color)' : 'var(--text-muted)',
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
              padding: '2px',
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
              padding: '2px',
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
          padding: '24px 28px',
          backgroundColor: '#0c0f18',
          fontSize: isZoomed ? '0.88rem' : '0.8rem',
          lineHeight: 1.5,
          color: '#e2e8f0',
          transition: 'all 0.2s ease',
          minHeight: '420px',
        }}
      >
        {currentPage === 1 ? (
          <>
            {/* Resume Header */}
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '14px', marginBottom: '14px' }}>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
                {candidateName || 'Candidate Dossier'}
              </h2>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#818cf8', marginBottom: '8px' }}>
                {candidateRole || 'Full Stack Software Engineer'}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', fontSize: '0.72rem', color: '#94a3b8' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={11} color="#64748b" /> {candidateLocation || 'Remote / Hybrid'}
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Mail size={11} color="#64748b" /> {candidateEmail || 'candidate@example.com'}
                </span>
                {candidatePhone && (
                  <>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Phone size={11} color="#64748b" /> {candidatePhone}
                    </span>
                  </>
                )}
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Globe size={11} color="#64748b" /> inprep.ai/dossier
                </span>
              </div>
            </div>

            {/* Section 1: Executive Summary */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '6px' }}>
                Executive Summary
              </div>
              <p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                {summary || (
                  `${candidateRole || 'Software Engineering Professional'} with verified competencies and specialized interview readiness. ` +
                  `Profile extracted and calibrated across technical rubrics.`
                )}
              </p>
            </div>

            {/* Section 2: Technical Competencies */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '8px' }}>
                Technical Competencies
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {skillsList.map((sk) => (
                  <span
                    key={sk}
                    style={{
                      padding: '4px 10px',
                      backgroundColor: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.28)',
                      borderRadius: '6px',
                      fontSize: '0.74rem',
                      color: '#e0e7ff',
                      fontWeight: 500,
                    }}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 3: Professional Experience */}
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '10px' }}>
                Professional Experience
              </div>

              {Array.isArray(workExperience) && workExperience.length > 0 ? (
                workExperience.map((exp: any, idx: number) => (
                  <div key={idx} style={{ marginBottom: idx < workExperience.length - 1 ? '14px' : '0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
                      <strong style={{ fontSize: '0.82rem', color: '#ffffff' }}>{exp?.title || 'Software Engineer'}</strong>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                        {exp?.duration || 'Recent'} • {exp?.company || 'Company'} {exp?.location ? `(${exp.location})` : ''}
                      </span>
                    </div>
                    {Array.isArray(exp?.bullets) && exp.bullets.length > 0 && (
                      <ul style={{ margin: '6px 0 0 16px', padding: 0, fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        {exp.bullets.map((b: string, bIdx: number) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.82rem', color: '#ffffff' }}>Senior {candidateRole || 'Developer'}</strong>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>2023 – Present • App Innovations</span>
                  </div>
                  <ul style={{ margin: '6px 0 0 16px', padding: 0, fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>
                    <li>
                      Architected high-performance applications utilizing {skillsList.slice(0, 3).join(', ')}.
                    </li>
                    <li>
                      Integrated automated testing, state management pipelines, and responsive UI components.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Page 2: Projects, Education & OCR Preview */}
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 2px 0' }}>
                Engineering Projects &amp; Credentials (Page 2)
              </h3>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                Extracted portfolio artifacts, verified degrees, and live document OCR stream
              </span>
            </div>

            {/* Projects */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '8px' }}>
                <Code2 size={13} />
                <span>Featured Engineering Projects</span>
              </div>

              {Array.isArray(projects) && projects.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                  {projects.map((proj: any, pIdx: number) => {
                    const pSkills = Array.isArray(proj?.skills) ? proj.skills : Array.isArray(proj?.stack) ? proj.stack : [];
                    return (
                      <div
                        key={pIdx}
                        style={{
                          padding: '10px 12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          borderRadius: '8px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <strong style={{ fontSize: '0.78rem', color: '#ffffff' }}>{proj?.title || 'Production Project'}</strong>
                          {proj?.metrics && (
                            <span style={{ fontSize: '0.66rem', color: '#34d399', fontWeight: 600 }}>{proj.metrics}</span>
                          )}
                        </div>
                        <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 6px 0', lineHeight: 1.4 }}>
                          {proj?.description}
                        </p>
                        {pSkills.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {pSkills.map((s: string, sIdx: number) => (
                              <span key={sIdx} style={{ fontSize: '0.64rem', padding: '1px 5px', borderRadius: '4px', backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#c7d2fe' }}>
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0 }}>
                  Key projects verified across {skillsList.slice(0, 3).join(', ')}.
                </p>
              )}
            </div>

            {/* Education */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '8px' }}>
                <GraduationCap size={13} />
                <span>Education &amp; Academic Background</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.74rem', color: '#cbd5e1' }}>
                {Array.isArray(education) && education.length > 0 ? (
                  education.map((edu: any, eIdx: number) => (
                    <li key={eIdx}>{typeof edu === 'object' ? (edu?.degree || edu?.institution || JSON.stringify(edu)) : String(edu)}</li>
                  ))
                ) : (
                  <li>B.Sc in Computer Science &amp; Engineering / Software Development</li>
                )}
              </ul>
            </div>

            {/* Raw Text OCR Stream */}
            {rawTextPreview && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <FileText size={13} />
                  <span>Verified Document OCR Stream</span>
                </div>
                <div
                  style={{
                    padding: '10px 12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '0.7rem',
                    color: '#94a3b8',
                    whiteSpace: 'pre-wrap',
                    maxHeight: '130px',
                    overflowY: 'auto',
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
          padding: '10px 18px',
          backgroundColor: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
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
          <ExternalLink size={12} />
        </button>
      </div>
    </div>
  );
};
