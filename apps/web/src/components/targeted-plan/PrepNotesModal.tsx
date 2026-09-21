import React from 'react';
import { X, BookOpen, CheckCircle, Code, Shield } from 'lucide-react';
import { DayPlanDetail } from '../../services/aiPlanStore';

interface PrepNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayDetail: DayPlanDetail;
}

export const PrepNotesModal: React.FC<PrepNotesModalProps> = ({
  isOpen,
  onClose,
  dayDetail,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
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
          maxHeight: '85vh',
          backgroundColor: '#0c1322',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '16px',
          padding: '24px 28px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          gap: '18px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <BookOpen size={18} color="#818cf8" />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase' }}>
                ARCHITECTURE PREP DOSSIER (#29)
              </span>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
              {dayDetail.label}: {dayDetail.title}
            </h3>
            <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>
              {dayDetail.subtitle} • {dayDetail.simulationId}
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Behavioral Directives */}
        <div
          style={{
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '10px',
            padding: '14px 16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, color: '#a5b4fc', marginBottom: '8px' }}>
            <Shield size={14} />
            <span>Strict Behavioral Invariants for this Session:</span>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            {dayDetail.directives.map((dir, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>
                {dir}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Prep Notes */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
            <Code size={14} color="#38bdf8" />
            <span>Core Architecture &amp; System Concepts to Cite:</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {dayDetail.prepNotes.map((note, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  fontSize: '0.72rem',
                  color: '#94a3b8',
                  lineHeight: 1.45,
                }}
              >
                <CheckCircle size={13} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#cbd5e1' }}>{note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Performance Rubric Objectives */}
        <div>
          <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
            Evaluation Rubric Benchmarks:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {dayDetail.objectives.map((obj) => (
              <div
                key={obj.number}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f8fafc' }}>
                    {obj.number}. {obj.title}
                  </span>
                  <span style={{ fontSize: '0.66rem', fontWeight: 700, color: obj.metricColor }}>
                    {obj.metric}
                  </span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  {obj.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '8px' }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 20px',
              backgroundColor: '#6366f1',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Ready for Practice
          </button>
        </div>
      </div>
    </div>
  );
};
