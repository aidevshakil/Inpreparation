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
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366f1' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Professional Summary
          </h3>
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
            color: '#818cf8',
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
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            borderRadius: '10px',
            color: '#f8fafc',
            fontSize: '0.82rem',
            lineHeight: 1.55,
            outline: 'none',
            fontFamily: 'inherit',
            marginBottom: '12px',
          }}
        />
      ) : (
        <p
          style={{
            fontSize: '0.82rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            margin: '0 0 14px 0',
            fontStyle: 'italic',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            padding: '12px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
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
          color: '#64748b',
          paddingTop: '10px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
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
            color: '#34d399',
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
