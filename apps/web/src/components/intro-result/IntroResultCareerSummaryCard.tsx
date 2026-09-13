import React, { useState } from 'react';
import { Edit2, Copy, RotateCcw, Check, Info } from 'lucide-react';

interface IntroResultCareerSummaryCardProps {
  onEdit?: () => void;
}

export const IntroResultCareerSummaryCard: React.FC<IntroResultCareerSummaryCardProps> = ({
  onEdit,
}) => {
  const [copied, setCopied] = useState(false);

  const summaryText = `Shakil is an accomplished Senior Backend and Distributed Systems Engineer with 6+ years of production experience architecting high-throughput financial pipelines and resilient event-driven systems. He has demonstrated consistent technical ownership across Kafka streaming clusters, PostgreSQL concurrency mitigation, and microservice decoupling at FinScale Labs and Nexura Tech.\n\nHis stated trajectory centers on Staff Backend Engineer and Distributed Systems Architect roles. Key career objectives include strengthening executive-level architectural trade-off articulation under CAP constraints, presenting multi-datacenter disaster recovery strategies, and leading cross-functional engineering reviews at scale.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Your AI-Synthesized Career Summary
          </h3>
          <span
            style={{
              fontSize: '0.64rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.18)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.35)',
            }}
          >
            AI-Generated
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={onEdit}
            title="Edit Summary"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Edit2 size={13} />
          </button>

          <button
            onClick={handleCopy}
            title="Copy to Clipboard"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: copied ? '#34d399' : '#cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
          </button>

          <button
            onClick={() => alert('Refreshing AI Career Summary synthesis with latest transcript embeddings...')}
            title="Regenerate Summary"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Paragraphs */}
      <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '16px' }}>
        <p style={{ margin: '0 0 12px 0' }}>
          Shakil is an accomplished Senior Backend and Distributed Systems Engineer with 6+ years of production experience architecting high-throughput financial pipelines and resilient event-driven systems. He has demonstrated consistent technical ownership across Kafka streaming clusters, PostgreSQL concurrency mitigation, and microservice decoupling at FinScale Labs and Nexura Tech.
        </p>

        <p style={{ margin: 0 }}>
          His stated trajectory centers on Staff Backend Engineer and Distributed Systems Architect roles. Key career objectives include strengthening executive-level architectural trade-off articulation under CAP constraints, presenting multi-datacenter disaster recovery strategies, and leading cross-functional engineering reviews at scale.
        </p>
      </div>

      {/* Notice Banner */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
        }}
      >
        <Info size={14} style={{ color: '#818cf8', flexShrink: 0, marginTop: '2px' }} />
        <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
          Review this summary and correct anything that does not accurately represent your background. All changes instantly update your diagnostic baseline.
        </p>
      </div>
    </div>
  );
};
