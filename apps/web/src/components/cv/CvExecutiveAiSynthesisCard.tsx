import React from 'react';
import { Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

interface CvExecutiveAiSynthesisCardProps {
  onEnhanceWithAi?: () => void;
}

export const CvExecutiveAiSynthesisCard: React.FC<CvExecutiveAiSynthesisCardProps> = ({
  onEnhanceWithAi,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        marginBottom: '16px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <Sparkles size={16} style={{ color: '#c084fc' }} />
        <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Executive AI Synthesis
        </h3>
      </div>

      {/* Section 1: Key Competitive Strengths */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', fontWeight: 700, color: '#34d399', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: '6px' }}>
          <CheckCircle2 size={12} />
          <span>Key Competitive Strengths</span>
        </div>

        <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <li>
            Comprehensive real-time queue expertise (Kafka, Celery) and PostgreSQL optimization are immediately noticeable by tier-1 evaluators.
          </li>
          <li>
            Cohesive progression from client-side mobile Flutter architecture to large-scale distributed backend systems.
          </li>
        </ul>
      </div>

      {/* Section 2: Targeted Polish Opportunities */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', fontWeight: 700, color: '#fbbf24', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: '6px' }}>
          <TrendingUp size={12} />
          <span>Targeted Polish Opportunities</span>
        </div>

        <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <li>
            <strong style={{ color: '#f1f5f9' }}>Quantify business impact:</strong> Add dollar-value savings or latency figures to your Mobile/Fintech tenure to amplify executive presence.
          </li>
          <li>
            <strong style={{ color: '#f1f5f9' }}>Resilience patterns:</strong> Explicitly mention Circuit Breakers, Bulkheads, or Dead-Letter Queues in your FinScale experience.
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={onEnhanceWithAi}
        style={{
          width: '100%',
          padding: '8px 14px',
          backgroundColor: 'rgba(168, 85, 247, 0.15)',
          border: '1px solid rgba(168, 85, 247, 0.35)',
          borderRadius: '9px',
          color: '#d8b4fe',
          fontSize: '0.76rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.18s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.28)';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.15)';
          e.currentTarget.style.color = '#d8b4fe';
        }}
      >
        <Sparkles size={13} />
        <span>Enhance CV with AI Coach</span>
      </button>
    </div>
  );
};
