import React, { useState } from 'react';
import { Edit2, Check, Sparkles } from 'lucide-react';

interface AiAnalysisProfessionalSummaryCardProps {
  isEditMode?: boolean;
  initialSummary?: string;
  onSaveSummary?: (newSummary: string) => void;
}

export const AiAnalysisProfessionalSummaryCard: React.FC<AiAnalysisProfessionalSummaryCardProps> = ({
  isEditMode = false,
  initialSummary,
  onSaveSummary,
}) => {
  const [editing, setEditing] = useState(isEditMode);
  const [summary, setSummary] = useState(
    initialSummary ||
    'Staff-aspiring Software Engineer with 3.5+ years of production experience building high-throughput microservices using Python, FastAPI, and Go, combined with native mobile client experience in Flutter and Dart. Proven track record eliminating P99 tail latencies by 34% through distributed event backbones (Apache Kafka) and partitioned database clusters (PostgreSQL & Redis).'
  );

  React.useEffect(() => {
    if (initialSummary) {
      setSummary(initialSummary);
    }
  }, [initialSummary]);

  const handleSave = () => {
    setEditing(false);
    if (onSaveSummary) {
      onSaveSummary(summary);
    }
  };

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
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            Professional Summary
          </h3>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              color: 'var(--primary-color)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
            }}
          >
            Extracted &amp; Synthesized
          </span>
        </div>

        <button
          onClick={() => {
            if (editing) {
              handleSave();
            } else {
              setEditing(true);
            }
          }}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--primary-color)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {editing ? (
            <>
              <Check size={13} />
              <span>Save</span>
            </>
          ) : (
            <>
              <Edit2 size={13} />
              <span>Edit</span>
            </>
          )}
        </button>
      </div>

      {/* Body Content */}
      {editing ? (
        <textarea
          rows={4}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--primary-color)',
            borderRadius: '10px',
            color: 'var(--text-main)',
            fontSize: '0.84rem',
            lineHeight: 1.6,
            outline: 'none',
            fontFamily: 'inherit',
            marginBottom: '12px',
          }}
        />
      ) : (
        <p
          style={{
            fontSize: '0.84rem',
            color: 'var(--text-main)',
            lineHeight: 1.65,
            margin: '0 0 14px 0',
            fontStyle: 'italic',
            backgroundColor: 'var(--bg-surface)',
            padding: '14px 16px',
            borderRadius: '10px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          &quot;{summary}&quot;
        </p>
      )}

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          paddingTop: '10px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span>Parsed directly; no personal resume adjustments required.</span>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            color: '#059669',
            fontWeight: 600,
          }}
        >
          <Sparkles size={11} />
          <span>Confidence: 96%</span>
        </div>
      </div>
    </div>
  );
};
