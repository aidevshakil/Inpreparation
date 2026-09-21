import React from 'react';
import { Download } from 'lucide-react';

interface SkillAnalyticsHeaderProps {
  activeMode: 'analysis' | 'rubric';
  onModeChange: (mode: 'analysis' | 'rubric') => void;
  onExportSynthesis?: () => void;
}

export const SkillAnalyticsHeader: React.FC<SkillAnalyticsHeaderProps> = ({
  activeMode,
  onModeChange,
  onExportSynthesis,
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Breadcrumb with Web #37 badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.74rem', color: '#64748b' }}>
        <span>Candidate Studio</span>
        <span>›</span>
        <span>Preparation</span>
        <span>›</span>
        <span>Performance</span>
        <span>›</span>
        <span style={{ color: '#f8fafc', fontWeight: 600 }}>Skill Analytics</span>
        <span
          style={{
            fontSize: '0.64rem',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: '#a5b4fc',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            padding: '1px 6px',
            borderRadius: '4px',
            marginLeft: '4px',
          }}
        >
          WEB #37
        </span>
      </div>

      {/* Main title row + Top Action Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} />
            <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
              CALIBRATED TELEMETRY ENGINE
            </span>
          </div>

          <h1
            style={{
              fontSize: '2.1rem',
              fontWeight: 800,
              color: '#f8fafc',
              margin: '0 0 8px 0',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}
          >
            Skill Analytics
          </h1>

          <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
            Understand your interview performance across evaluated technical competencies, inspect question-level evidence, and target deliberate practice routines for Staff & Principal benchmarks.
          </p>
        </div>

        {/* Right buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Analysis / Rubric Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '3px',
            }}
          >
            <button
              onClick={() => onModeChange('analysis')}
              style={{
                background: activeMode === 'analysis' ? '#4f46e5' : 'transparent',
                color: activeMode === 'analysis' ? '#ffffff' : '#94a3b8',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '0.74rem',
                fontWeight: activeMode === 'analysis' ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              Analysis Mode
            </button>
            <button
              onClick={() => onModeChange('rubric')}
              style={{
                background: activeMode === 'rubric' ? '#4f46e5' : 'transparent',
                color: activeMode === 'rubric' ? '#ffffff' : '#94a3b8',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '0.74rem',
                fontWeight: activeMode === 'rubric' ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              Rubric Mapping
            </button>
          </div>

          {/* Export Synthesis Button */}
          <button
            onClick={onExportSynthesis}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              padding: '7px 14px',
              borderRadius: '8px',
              fontSize: '0.76rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
          >
            <Download size={13} />
            <span>Export Synthesis</span>
          </button>
        </div>
      </div>
    </div>
  );
};
