import React from 'react';
import { GitBranch, ArrowDown, Play } from 'lucide-react';

interface CvCalibratedMockPipelineCardProps {
  onStartCalibratedMock?: () => void;
}

export const CvCalibratedMockPipelineCard: React.FC<CvCalibratedMockPipelineCardProps> = ({
  onStartCalibratedMock,
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <GitBranch size={16} style={{ color: '#818cf8' }} />
        <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Calibrated Mock Pipeline
        </h3>
      </div>

      <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 14px 0', lineHeight: 1.4 }}>
        How your resume vector directly shapes real-time mock interviews right now:
      </p>

      {/* Step 1 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 12px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '10px',
        }}
      >
        <span
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: '#818cf8',
            fontSize: '0.7rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          1
        </span>
        <div style={{ fontSize: '0.74rem' }}>
          <div style={{ color: '#64748b', fontSize: '0.66rem' }}>Detected Tech Anchor:</div>
          <div style={{ color: '#f1f5f9', fontWeight: 600 }}>FastAPI, Kafka, PostgreSQL, 12k QPS</div>
        </div>
      </div>

      {/* Arrow Down */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
        <ArrowDown size={14} style={{ color: '#475569' }} />
      </div>

      {/* Step 2 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 12px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '10px',
        }}
      >
        <span
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            color: '#c084fc',
            fontSize: '0.7rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          2
        </span>
        <div style={{ fontSize: '0.74rem' }}>
          <div style={{ color: '#64748b', fontSize: '0.66rem' }}>Vector Weight Profile:</div>
          <div style={{ color: '#f1f5f9', fontWeight: 600 }}>High Concurrency • Staff Backend Track</div>
        </div>
      </div>

      {/* Arrow Down */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
        <ArrowDown size={14} style={{ color: '#475569' }} />
      </div>

      {/* Step 3: Action Tile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          padding: '10px 12px',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '10px',
        }}
      >
        <div style={{ fontSize: '0.74rem' }}>
          <div style={{ color: '#34d399', fontWeight: 700 }}>Python Backend Developer (Senior)</div>
          <div style={{ color: '#94a3b8', fontSize: '0.68rem' }}>5 Questions • Tailored to FinScale stack</div>
        </div>

        <button
          onClick={onStartCalibratedMock}
          style={{
            padding: '5px 12px',
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          <Play size={11} fill="#ffffff" />
          <span>Start</span>
        </button>
      </div>
    </div>
  );
};
