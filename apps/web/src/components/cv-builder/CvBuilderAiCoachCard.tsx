import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export const CvBuilderAiCoachCard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '20px',
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
          marginBottom: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} style={{ color: '#818cf8' }} />
          <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            Inprep AI Coach Diagnostics
          </h4>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          4 Insights
        </span>
      </div>

      {/* Insights List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        {/* Insight 1 */}
        <div
          style={{
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '10px',
            padding: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <CheckCircle2 size={13} style={{ color: '#10b981' }} />
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#34d399' }}>
              Add Quantifiable Metrics
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            Metrics like QPS, revenue impact, or latency reduction provide strong signals for evaluator systems.
          </p>
        </div>

        {/* Insight 2 */}
        <div
          style={{
            backgroundColor: 'rgba(245, 158, 11, 0.05)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '10px',
            padding: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <AlertCircle size={13} style={{ color: '#f59e0b' }} />
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#fbbf24' }}>
              Highlight Architecture Depth
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
            Ensure your project descriptions mention specific distributed system patterns and the trade-offs you considered.
          </p>
        </div>
      </div>

      {/* Privacy Guarantee Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.68rem',
          color: '#64748b',
          paddingTop: '10px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <ShieldCheck size={14} style={{ color: '#818cf8', flexShrink: 0 }} />
        <span>Your CV data is private and encrypted. Never shared with third-party models.</span>
      </div>
    </div>
  );
};
