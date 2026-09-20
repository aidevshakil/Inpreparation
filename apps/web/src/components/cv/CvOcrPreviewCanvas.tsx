import React, { useState } from 'react';
import { ZoomIn, Maximize2, ExternalLink, MapPin, Mail, Globe } from 'lucide-react';

interface CvOcrPreviewCanvasProps {
  candidateName?: string;
  candidateRole?: string;
  candidateLocation?: string;
  candidateEmail?: string;
  candidateSkills?: string[];
  onExpandDossier?: () => void;
}

export const CvOcrPreviewCanvas: React.FC<CvOcrPreviewCanvasProps> = ({
  candidateName,
  candidateRole,
  candidateLocation,
  candidateEmail,
  candidateSkills,
  onExpandDossier,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

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
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Page {currentPage} of 2
          </span>

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
            title="Maximize View"
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
        }}
      >
        {/* Resume Header */}
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '14px', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
            {candidateName || 'Candidate Dossier'}
          </h2>
          <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#818cf8', marginBottom: '8px' }}>
            {candidateRole || 'Software Engineering Professional'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', fontSize: '0.72rem', color: '#94a3b8' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={11} color="#64748b" /> {candidateLocation || 'Open to Remote'}
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={11} color="#64748b" /> {candidateEmail || 'candidate@example.com'}
            </span>
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
            {candidateRole ? `${candidateRole} with verified competencies.` : 'Software engineer with verified competencies and specialized interview readiness.'} Profile extracted and calibrated across technical rubrics.
          </p>
        </div>

        {/* Section 2: Technical Competencies */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '8px' }}>
            Technical Competencies
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {(candidateSkills && candidateSkills.length > 0 ? candidateSkills : ['TypeScript', 'React', 'Node.js', 'System Architecture']).map((sk) => (
              <span
                key={sk}
                style={{
                  padding: '4px 10px',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
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
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '8px' }}>
            Professional Experience
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <strong style={{ fontSize: '0.82rem', color: '#ffffff' }}>Senior Backend Engineer</strong>
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Jan 2023 – Present • FinScale Labs (San Francisco, CA)</span>
            </div>
            <ul style={{ margin: '6px 0 0 16px', padding: 0, fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>
              <li>
                Architected real-time settlement microservices using FastAPI and Kafka, handling 12,000+ QPS with sub-15ms P99 latency.
              </li>
              <li>
                Implemented automated dead-letter queues and PostgreSQL connection pooling that reduced server timeout incidents by 94%.
              </li>
            </ul>
          </div>
        </div>
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
          Extracted <strong style={{ color: '#059669' }}>28 distinct technical attributes</strong> • Last synchronized with Mock Calibrator
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
