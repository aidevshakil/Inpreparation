import React, { useState } from 'react';
import { ZoomIn, Maximize2, ExternalLink, MapPin, Mail, Phone, Globe } from 'lucide-react';

interface CvOcrPreviewCanvasProps {
  onExpandDossier?: () => void;
}

export const CvOcrPreviewCanvas: React.FC<CvOcrPreviewCanvasProps> = ({
  onExpandDossier,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        marginBottom: '20px',
      }}
    >
      {/* Top Window Bar */}
      <div
        style={{
          padding: '10px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
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
          <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600, marginLeft: '8px' }}>
            OCR Vector Preview Canvas (A4 Structured View)
          </span>
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
            Page {currentPage} of 2
          </span>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
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
              color: '#94a3b8',
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
            Shakil Ahamed
          </h2>
          <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#818cf8', marginBottom: '8px' }}>
            Senior Backend • Distributed Systems • Concurrency Specialist
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', fontSize: '0.72rem', color: '#94a3b8' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={11} color="#64748b" /> San Francisco, CA (Open to Remote)
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={11} color="#64748b" /> shakil.ahamed@example.com
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Phone size={11} color="#64748b" /> +1 (555) 349-8201
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Globe size={11} color="#64748b" /> github.com/shakilahamed
            </span>
          </div>
        </div>

        {/* Section 1: Executive Summary */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '6px' }}>
            Executive Summary
          </div>
          <p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
            Staff-aspiring backend engineer with 3.5+ years of production experience scaling high-throughput Python/FastAPI microservices, distributed event backbones (Apache Kafka), and low-latency storage engines. Proven track record eliminating P99 tail latencies by 34% and migrating monolithic systems to event-driven architectures sustaining 12,000+ QPS with high fault-tolerance.
          </p>
        </div>

        {/* Section 2: Technical Competencies */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.8px', color: '#a5b4fc', textTransform: 'uppercase', marginBottom: '8px' }}>
            Technical Competencies
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px', fontSize: '0.74rem' }}>
            <div>
              <strong style={{ color: '#f8fafc' }}>Languages:</strong>{' '}
              <span style={{ color: '#94a3b8' }}>Python 3.12, Go (Golang), Dart, SQL, Bash</span>
            </div>
            <div>
              <strong style={{ color: '#f8fafc' }}>Frameworks &amp; Protocols:</strong>{' '}
              <span style={{ color: '#94a3b8' }}>FastAPI, Asyncio, gRPC, REST, Celery, Flutter</span>
            </div>
            <div>
              <strong style={{ color: '#f8fafc' }}>Data, Cache &amp; Messaging:</strong>{' '}
              <span style={{ color: '#94a3b8' }}>PostgreSQL (Partitioning), Redis, Kafka, Elasticsearch</span>
            </div>
            <div>
              <strong style={{ color: '#f8fafc' }}>Cloud, Infra &amp; Observability:</strong>{' '}
              <span style={{ color: '#94a3b8' }}>Docker, Kubernetes (EKS), AWS (ECS, S3, RDS), Prometheus</span>
            </div>
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
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span style={{ color: '#64748b' }}>
          Extracted <strong style={{ color: '#34d399' }}>28 distinct technical attributes</strong> • Last synchronized with Mock Calibrator
        </span>

        <button
          onClick={onExpandDossier}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
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
