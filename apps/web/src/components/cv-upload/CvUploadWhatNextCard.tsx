import React from 'react';
import { Zap, ArrowDown } from 'lucide-react';

export const CvUploadWhatNextCard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
            }}
          >
            <Zap size={16} />
          </div>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            What happens next?
          </h3>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '0 0 18px 0' }}>
          Inprep AI extracts your technical toolsets, seniority benchmarks, and system scale metrics. You will review this synthesized profile before any 5-question interview session begins.
        </p>
      </div>

      {/* 3-Step Flowchart */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          padding: '12px 14px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6366f1' }} />
          <span>CV Content Ingestion</span>
        </div>

        <div style={{ paddingLeft: '2px' }}>
          <ArrowDown size={11} color="#475569" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a855f7' }} />
          <span>Vectorized Competencies</span>
        </div>

        <div style={{ paddingLeft: '2px' }}>
          <ArrowDown size={11} color="#475569" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: 'var(--color-success, #059669)', fontWeight: 600 }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 6px #10b981' }} />
          <span>5-Q Calibrated Mock Drill</span>
        </div>
      </div>
    </div>
  );
};
