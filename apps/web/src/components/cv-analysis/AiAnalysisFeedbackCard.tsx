import React from 'react';
import { CheckCircle2, Plus } from 'lucide-react';

interface AiAnalysisFeedbackCardProps {
  improvements?: string[];
  onEnhanceInEditor?: () => void;
}

export const AiAnalysisFeedbackCard: React.FC<AiAnalysisFeedbackCardProps> = ({
  improvements,
  onEnhanceInEditor,
}) => {
  const dynamicImprovements = Array.isArray(improvements) && improvements.length > 0 ? improvements : [
    'Add Resilience Patterns: Explicit mention circuit breakers, bulkheads, or retry budgets.',
    'Highlight Business Impact: Quantify cost savings or developer velocity improvements.',
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
      {/* What Your CV Does Well */}
      <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 14px 0' }}>
        What Your CV Does Well
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <CheckCircle2 size={15} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: 'var(--text-main)' }}>Quantitative Performance Indicators:</strong> Clear stories (tail latency reduction (-34%) and transactions peaks (12,000+ QPS)).
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <CheckCircle2 size={15} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: 'var(--text-main)' }}>Consistent Stack Taxonomy:</strong> Modern standard frameworks matching industry parity.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <CheckCircle2 size={15} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
            <strong style={{ color: 'var(--text-main)' }}>Architectural Trade-Off Evidence:</strong> Explains architecture decisions (Postgres partitioning and Redis caching).
          </p>
        </div>
      </div>

      {/* How You Can Improve Your CV */}
      <div
        style={{
          fontSize: '0.7rem',
          fontWeight: 800,
          color: '#d97706',
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        HOW YOU CAN IMPROVE YOUR CV
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
        {dynamicImprovements.map((imp, idx) => (
          <div key={idx} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            <strong style={{ color: 'var(--text-main)' }}>{idx + 1}. </strong>{imp}
          </div>
        ))}
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
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
          color: 'var(--text-main)',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.18s ease',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <span>Enhance CV in Manual Editor</span>
        <Plus size={14} />
      </button>
    </div>
  );
};
