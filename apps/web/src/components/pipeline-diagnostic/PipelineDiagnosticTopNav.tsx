import React from 'react';
import { ChevronRight, Cpu, Lock, Shield, Bell } from 'lucide-react';

interface PipelineDiagnosticTopNavProps {
  onNavigateToWorkspace?: () => void;
  onNavigateToAssessment?: () => void;
}

export const PipelineDiagnosticTopNav: React.FC<PipelineDiagnosticTopNavProps> = ({
  onNavigateToWorkspace,
  onNavigateToAssessment,
}) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        backgroundColor: 'rgba(7, 9, 14, 0.6)',
        backdropFilter: 'blur(12px)',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      {/* Left: Breadcrumbs + Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#94a3b8' }}>
          <span style={{ cursor: 'pointer' }} onClick={onNavigateToWorkspace}>Workspace</span>
          <ChevronRight size={13} style={{ color: '#475569' }} />
          <span style={{ cursor: 'pointer' }} onClick={onNavigateToAssessment}>Career Assessment</span>
          <ChevronRight size={13} style={{ color: '#475569' }} />
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>Processing (Web #22)</span>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '3px 9px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            border: '1px solid rgba(56, 189, 248, 0.28)',
          }}
        >
          Diagnostic Ingestion
        </span>
      </div>

      {/* Right: Engine Status Badges + User Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {/* Engine Security & Protocol Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '0.72rem',
            color: '#94a3b8',
            padding: '4px 12px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '9999px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Cpu size={12} style={{ color: '#818cf8' }} />
            <span>Live AI Synthesis Engine v4.2</span>
          </div>
          <span style={{ color: '#334155' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Lock size={12} style={{ color: '#38bdf8' }} />
            <span style={{ color: '#38bdf8' }}>Secure TLS 1.3 Socket Connected</span>
          </div>
          <span style={{ color: '#334155' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Shield size={12} style={{ color: '#94a3b8' }} />
            <span>Non-Evaluative Diagnostic Workspace</span>
          </div>
        </div>

        {/* User Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px 4px 6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#6366f1',
                color: '#ffffff',
                fontSize: '0.68rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              SA
            </div>
            <span style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>Shakil Ahamed</span>
            <span
              style={{
                fontSize: '0.64rem',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                color: '#c084fc',
                border: '1px solid rgba(168, 85, 247, 0.4)',
              }}
            >
              Candidate Pro
            </span>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '3px', marginLeft: '4px' }}>
              <span style={{ color: '#eab308' }}>⚡</span> 840/1,000 pts
            </span>
          </div>

          <button
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <Bell size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
