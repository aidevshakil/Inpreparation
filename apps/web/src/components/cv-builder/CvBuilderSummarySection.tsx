import React from 'react';
import { FileText, Sparkles, ShieldCheck, Zap, Scissors, Code2 } from 'lucide-react';

interface CvBuilderSummarySectionProps {
  summary: string;
  onChange: (value: string) => void;
  onImproveWithAi?: () => void;
  onApplyPreset?: (presetType: string) => void;
}

export const CvBuilderSummarySection: React.FC<CvBuilderSummarySectionProps> = ({
  summary,
  onChange,
  onImproveWithAi,
  onApplyPreset,
}) => {
  return (
    <div
      id="section-summary"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
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
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
            }}
          >
            <FileText size={14} />
          </span>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            2. Professional Summary
          </h3>
        </div>

        <button
          onClick={onImproveWithAi}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            padding: '6px 13px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(79, 70, 229, 0.25))',
            border: '1px solid var(--border-subtle)',
            color: 'var(--primary-color)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.18s ease',
          }}
        >
          <Sparkles size={13} style={{ color: 'var(--primary-color)' }} />
          <span>Improve with AI</span>
        </button>
      </div>

      {/* Summary Textarea */}
      <textarea
        rows={5}
        value={summary}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a concise overview of your technical background, domain specialization, and scale accomplishments..."
        style={{
          width: '100%',
          padding: '12px 14px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '10px',
          color: 'var(--text-main)',
          fontSize: '0.82rem',
          lineHeight: 1.6,
          outline: 'none',
          fontFamily: 'inherit',
          boxSizing: 'border-box',
          marginBottom: '12px',
          resize: 'vertical',
        }}
      />

      {/* Quick Action Chips */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Actions:</span>

        <button
          onClick={() => onApplyPreset && onApplyPreset('concise')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            fontSize: '0.72rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Scissors size={11} />
          <span>Make More Concise</span>
        </button>

        <button
          onClick={() => onApplyPreset && onApplyPreset('technical')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            fontSize: '0.72rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Code2 size={11} style={{ color: 'var(--text-secondary)' }} />
          <span>Highly Technical Focus</span>
        </button>

        <button
          onClick={() => onApplyPreset && onApplyPreset('quantify')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            borderRadius: '6px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            fontSize: '0.72rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Zap size={11} style={{ color: '#d97706' }} />
          <span>Quantify Impact</span>
        </button>
      </div>

      {/* Responsible AI Guarantee Box */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '10px 14px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '10px',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <ShieldCheck size={16} style={{ color: 'var(--color-success, #059669)', flexShrink: 0, marginTop: '2px' }} />
        <p style={{ fontSize: '0.71rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
          <strong style={{ color: 'var(--text-secondary)' }}>Responsible AI Guarantee:</strong> AI enhancements rephrase syntax and elevate clarity based solely on facts you share. Inprep AI never introduces synthetic metrics or false credentials.
        </p>
      </div>
    </div>
  );
};
