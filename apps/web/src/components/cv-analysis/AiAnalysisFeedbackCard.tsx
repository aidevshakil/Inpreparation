import React from 'react';
import { CheckCircle2, Plus } from 'lucide-react';

interface AiAnalysisFeedbackCardProps {
  onEnhanceInEditor?: () => void;
}

export const AiAnalysisFeedbackCard: React.FC<AiAnalysisFeedbackCardProps> = ({
  onEnhanceInEditor,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* What Your CV Does Well */}
      <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 14px 0' }}>
        What Your CV Does Well
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Quantitative Performance Indicators:</strong> Clear stories (tail latency reduction (-34%) and transactions peaks (12,000+ QPS)).
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Consistent Stack Taxonomy:</strong> Modern standard frameworks matching industry parity.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: '#f8fafc' }}>Architectural Trade-Off Evidence:</strong> Explains architecture decisions (Postgres partitioning and Redis caching).
          </p>
        </div>
      </div>

      {/* How You Can Improve Your CV */}
      <div
        style={{
          fontSize: '0.7rem',
          fontWeight: 800,
          color: '#fbbf24',
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        HOW YOU CAN IMPROVE YOUR CV
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
        <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45 }}>
          <strong style={{ color: '#f8fafc' }}>1. Add Resilience Patterns:</strong> Explicit mention circuit breakers, bulkheads, or retry budgets.
        </div>
        <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45 }}>
          <strong style={{ color: '#f8fafc' }}>2. Highlight Business Impact:</strong> Quantify cost savings or developer velocity improvements.
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onEnhanceInEditor}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          color: '#ffffff',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.18s ease',
        }}
      >
        <span>Enhance CV in Manual Editor</span>
        <Plus size={14} />
      </button>
    </div>
  );
};
