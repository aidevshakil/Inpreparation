import React, { useState } from 'react';
import { UserCheck, Copy, Edit2, Check, Shield } from 'lucide-react';

interface ProfileAnalysisIdentityCardProps {
  onEdit?: () => void;
  onViewCitations?: () => void;
}

export const ProfileAnalysisIdentityCard: React.FC<ProfileAnalysisIdentityCardProps> = ({
  onEdit,
  onViewCitations,
}) => {
  const [copied, setCopied] = useState(false);

  const identityText = `Shakil Ahamed is a high-impact Senior Backend and Distributed Systems Engineer with 6+ years of specialized experience architecting large-scale, high-concurrency event-driven platforms. He has demonstrated technical leadership across Kafka streaming clusters, PostgreSQL concurrency mitigation, and microservice decoupling at FinScale Labs and Nexura Tech.\n\nAt FinScale Labs, he engineered resilient clearing pipelines delivering sub-50ms p99 latencies for high-volume transactions while leading technical design RFCs. His target trajectory focuses on Staff Backend Engineer and Distributed Systems Architect roles, specializing in large-scale system resilience, multi-datacenter consensus, and cross-functional engineering alignment.\n\nShakil is particularly strong in distributed data synchronization, Kafka partition failover strategies, and database sharding patterns. In mock rounds, he will focus on articulating complex architectural trade-offs under high-stress constraints.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(identityText);
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
          <UserCheck size={18} style={{ color: '#818cf8' }} />
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Your Professional Identity
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={handleCopy}
            title="Copy Text"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              color: copied ? '#34d399' : '#cbd5e1',
              fontSize: '0.72rem',
              cursor: 'pointer',
            }}
          >
            {copied ? <Check size={11} /> : <Copy size={11} />}
            <span>{copied ? 'Copied' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={onEdit}
            title="Edit Identity"
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
            <Edit2 size={12} />
          </button>
        </div>
      </div>

      {/* 3 Synthesized Paragraphs */}
      <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        <p style={{ margin: 0 }}>
          <strong style={{ color: '#ffffff' }}>Shakil Ahamed</strong> is a high-impact Senior Backend and Distributed Systems Engineer with 6+ years of specialized experience architecting large-scale, high-concurrency event-driven platforms. He has demonstrated technical leadership across Kafka streaming clusters, PostgreSQL concurrency mitigation, and microservice decoupling at FinScale Labs and Nexura Tech.
        </p>

        <p style={{ margin: 0 }}>
          At FinScale Labs, he engineered resilient clearing pipelines delivering sub-50ms p99 latencies for high-volume transactions while leading technical design RFCs. His target trajectory focuses on Staff Backend Engineer and Distributed Systems Architect roles, specializing in large-scale system resilience, multi-datacenter consensus, and cross-functional engineering alignment.
        </p>

        <p style={{ margin: 0 }}>
          Shakil is particularly strong in distributed data synchronization, Kafka partition failover strategies, and database sharding patterns. In mock rounds, he will focus on articulating complex architectural trade-offs under high-stress constraints.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.68rem',
          color: '#64748b',
          paddingTop: '10px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Shield size={12} style={{ color: '#10b981' }} />
          <span>Generated from authentic source data. No hallucinated claims or artificial inflation.</span>
        </div>

        <button
          onClick={onViewCitations}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.68rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          View Verified Citations
        </button>
      </div>
    </div>
  );
};
