import React, { useState } from 'react';
import { X, Check, Wand2 } from 'lucide-react';

interface CvBuilderAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalText: string;
  onApply: (enhancedText: string) => void;
}

export const CvBuilderAiModal: React.FC<CvBuilderAiModalProps> = ({
  isOpen,
  onClose,
  originalText,
  onApply,
}) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const variations = [
    {
      title: 'High-Scale & Quantifiable (Staff Benchmark)',
      text: '• Architected distributed transaction saga coordination engine supporting 12,000+ peak QPS across 4 AWS multi-AZ regions.\n• Reduced P99 tail latency by 34% through partitioned PostgreSQL indexing and Redis write-through caching policies.\n• Led architecture team of 6 engineers on event-driven streaming best practices and Go microservices.',
      metrics: ['+34% Latency Reduction', '12,000+ QPS Scale', '6 Engineers Mentored'],
    },
    {
      title: 'Action & Ownership Driven (Principal Focus)',
      text: '• Spearheaded end-to-end overhaul of distributed billing saga coordinator, processing 12k+ transactions/sec with zero rollback faults.\n• Optimized database write bottlenecks with partitioned PostgreSQL schemas and Redis caching, cutting P99 latency by 34%.\n• Standardized distributed systems engineering rubrics across 6 core backend engineers.',
      metrics: ['Zero Fault Tolerance', '-34% P99 Latency', 'Engineering Rubrics'],
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
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
          backgroundColor: '#0c101c',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-color)',
              }}
            >
              <Wand2 size={16} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                Inprep AI Bullet Polisher
              </h3>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                Refining for technical depth and quantifiable STAR metric resonance.
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Original Snippet */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
            Original Text
          </div>
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '0.76rem',
              color: 'var(--text-secondary)',
              whiteSpace: 'pre-line',
            }}
          >
            {originalText}
          </div>
        </div>

        {/* AI Variations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase' }}>
            AI Enhanced Variations
          </div>

          {variations.map((v, idx) => {
            const isSelected = selectedOption === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedOption(idx)}
                style={{
                  backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.1)' : 'var(--bg-card)',
                  border: isSelected ? '1px solid rgba(129, 140, 248, 0.6)' : '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: isSelected ? '5px solid #6366f1' : '2px solid #64748b',
                        backgroundColor: 'var(--bg-surface)',
                      }}
                    />
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {v.title}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    {v.metrics.map((m) => (
                      <span
                        key={m}
                        style={{
                          fontSize: '0.64rem',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(16, 185, 129, 0.15)',
                          color: '#34d399',
                          fontWeight: 600,
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, whiteSpace: 'pre-line', paddingLeft: '26px' }}>
                  {v.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            onClick={onClose}
            style={{
              padding: '9px 16px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onApply(variations[selectedOption].text);
              onClose();
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
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
            }}
          >
            <Check size={14} />
            <span>Apply Enhanced Bullets</span>
          </button>
        </div>
      </div>
    </div>
  );
};
