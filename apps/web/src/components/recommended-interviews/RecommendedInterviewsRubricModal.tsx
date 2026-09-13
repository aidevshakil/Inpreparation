import React from 'react';
import { X, FileText, ArrowRight } from 'lucide-react';

interface RecommendedInterviewsRubricModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackName: string;
  onStartSimulation: () => void;
}

export const RecommendedInterviewsRubricModal: React.FC<RecommendedInterviewsRubricModalProps> = ({
  isOpen,
  onClose,
  trackName,
  onStartSimulation,
}) => {
  if (!isOpen) return null;

  const criteria = [
    {
      title: 'Distributed Systems Rigor',
      weight: '35%',
      description: 'Partitioning, consensus protocols, replication lag, and concurrency bottlenecks.',
    },
    {
      title: 'Architectural Trade-Off Defense',
      weight: '30%',
      description: 'Articulation of CAP constraints, cost-vs-latency trade-offs, and SLA guarantees.',
    },
    {
      title: 'Engineering Leadership & STAR',
      weight: '20%',
      description: 'Cross-team RFC governance, mentoring, and technical conflict resolution.',
    },
    {
      title: 'Communication & Whiteboard Clarity',
      weight: '15%',
      description: 'Structured explanations, pacing, and concise terminology.',
    },
  ];

  const questions = [
    { num: 1, title: 'High-Throughput Ingestion Architecture (120k+ QPS)' },
    { num: 2, title: 'Raft / Consensus Leader Election & Split-Brain Mitigation' },
    { num: 3, title: 'Multi-Region Active-Active Database Replication' },
    { num: 4, title: 'Concurrency Mitigation & Distributed Lock Avoidance' },
    { num: 5, title: 'Microservices Decoupling & Protobuf Schema Evolution' },
    { num: 6, title: 'Staff-Level Executive Whiteboard Defense (STAR Framework)' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          backgroundColor: '#0c101c',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '20px',
          padding: '26px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                color: '#818cf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FileText size={18} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                {trackName || 'Staff Backend & Distributed Systems Architecture'}
              </h3>
              <span style={{ fontSize: '0.72rem', color: '#a5b4fc', fontWeight: 600 }}>
                Rubric &amp; Evaluation Blueprint (Staff L6+ Standard)
              </span>
            </div>
          </div>

          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Evaluation Dimensions */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            EVALUATION DIMENSIONS &amp; WEIGHTS
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {criteria.map((c) => (
              <div
                key={c.title}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px',
                  padding: '12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>{c.title}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8' }}>{c.weight}</span>
                </div>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Question Sequence */}
        <div style={{ marginBottom: '22px' }}>
          <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            6 ADAPTIVE QUESTIONS SEQUENCE
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {questions.map((q) => (
              <div
                key={q.num}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  fontSize: '0.74rem',
                  color: '#cbd5e1',
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    color: '#c084fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {q.num}
                </span>
                <span>{q.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', marginTop: 'auto' }}>
          <button
            onClick={onClose}
            style={{
              padding: '9px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#cbd5e1',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Close Rubric
          </button>

          <button
            onClick={() => {
              onClose();
              onStartSimulation();
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 20px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
            }}
          >
            <span>Start Practice Simulation</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
