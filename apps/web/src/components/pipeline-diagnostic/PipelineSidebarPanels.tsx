import React, { useState, useEffect } from 'react';
import { Lock, Eye, Terminal, Shield, RefreshCw } from 'lucide-react';
import { PipelineScenario } from './PipelineDiagnosticSimulatorBar';

interface PipelineSidebarPanelsProps {
  scenario: PipelineScenario;
  onNavigateToDashboard?: () => void;
}

export const PipelineSidebarPanels: React.FC<PipelineSidebarPanelsProps> = ({
  scenario,
  onNavigateToDashboard,
}) => {
  const [fastestModeNotice, setFastestModeNotice] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '→ [00:17:04] INGESTION_COMPLETE: 5 streams manifest accepted',
    '→ [00:17:07] ACOUSTIC_VAD: speech_density=84.2%, pause_avg=0.48',
    '→ [00:17:11] FRAMING_OK: eye_line_ratio=0.82, gamma=stable',
  ]);

  // Dynamic live log stream
  useEffect(() => {
    if (scenario === 'result_ready') {
      setLogs([
        '→ [00:17:04] INGESTION_COMPLETE: 5 streams manifest accepted',
        '→ [00:17:07] ACOUSTIC_VAD: speech_density=84.2%, pause_avg=0.48',
        '→ [00:17:11] FRAMING_OK: eye_line_ratio=0.82, gamma=stable',
        '→ [00:17:15] RUBRIC_EVAL: comparing AST trade-offs for Q1 async loop... COMPLETE',
        '→ [00:17:28] SYNTHESIS_FINALIZED: cryptographic hash 0x7fa9 verified',
      ]);
      return;
    }

    const timer = setInterval(() => {
      setLogs((prev) => {
        if (prev.length >= 6) return prev;
        const additions = [
          '→ [00:17:15] RUBRIC_EVAL: comparing AST trade-offs for Q1 async loop...',
          '→ [00:17:19] CONCURRENCY_BENCH: GIL bypass ProcessPool validated',
        ];
        const nextLog = additions[prev.length - 3];
        return nextLog ? [...prev, nextLog] : prev;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [scenario]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '70px' }}>
      {/* 1. Safe Background Ingestion */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '8px',
              background: 'rgba(168, 85, 247, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Lock size={17} color="#c084fc" />
          </div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
              Safe Background Ingestion
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              You may safely navigate away anytime
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: '0 0 18px 0', lineHeight: 1.55 }}>
          All 5 answers are locked in your private vault. We will send an instant alert or update your Progress Dashboard when computation completes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={onNavigateToDashboard}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#f8fafc',
              padding: '11px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'background 0.15s ease',
            }}
          >
            <Terminal size={14} color="#818cf8" />
            <span>Continue to Dashboard (Run in Background)</span>
          </button>

          <button
            onClick={() => setFastestModeNotice(!fastestModeNotice)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '7px',
              fontSize: '0.74rem',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <Eye size={13} color="#a5b4fc" /> Keep Window Open (Fastest Delivery)
          </button>

          {fastestModeNotice && (
            <div
              style={{
                fontSize: '0.68rem',
                color: '#38bdf8',
                textAlign: 'center',
                background: 'rgba(56, 189, 248, 0.08)',
                padding: '6px',
                borderRadius: '6px',
              }}
            >
              Active foreground session priority enabled (+25% faster rubric assembly).
            </div>
          )}
        </div>
      </div>

      {/* 2. System Health & Node Sync */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '18px',
          }}
        >
          <h3 style={{ fontSize: '0.88rem', fontWeight: 700, margin: 0, color: '#f8fafc' }}>
            System Health & Node Sync
          </h3>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(16, 185, 129, 0.12)',
              color: '#34d399',
              padding: '3px 9px',
              borderRadius: '100px',
              fontSize: '0.66rem',
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 6px #10b981',
              }}
            />
            Operational
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.64rem', color: '#94a3b8', fontWeight: 700, marginBottom: '6px' }}>
              INGESTION LATENCY
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '3px' }}>
              24 ms
            </div>
            <div style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: 600 }}>
              Zero dropped frames
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.64rem', color: '#94a3b8', fontWeight: 700, marginBottom: '6px' }}>
              SECURITY PROTOCOL
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', marginBottom: '3px' }}>
              AES-256
            </div>
            <div style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Encrypted at rest</div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.64rem', color: '#94a3b8', fontWeight: 700, marginBottom: '6px' }}>
              EVALUATION NODE
            </div>
            <div
              style={{
                fontSize: '0.86rem',
                fontWeight: 700,
                color: '#f8fafc',
                marginBottom: '3px',
                fontFamily: 'monospace',
              }}
            >
              us-east-va-0...
            </div>
            <div style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Isolated sandbox</div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.64rem', color: '#94a3b8', fontWeight: 700, marginBottom: '6px' }}>
              BUFFER STATE
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '3px' }}>
              100% Synced
            </div>
            <div style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: 600 }}>
              #6aa913cb98 verified
            </div>
          </div>
        </div>
      </div>

      {/* 3. Live Rubric Evaluation Stream */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '14px',
          }}
        >
          <h3
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#f8fafc',
            }}
          >
            <Terminal size={14} color="#a5b4fc" /> Live Rubric Evaluation Stream
          </h3>
          <span
            style={{
              fontSize: '0.62rem',
              color: scenario === 'result_ready' ? '#34d399' : '#38bdf8',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            STATUS: {scenario === 'result_ready' ? 'COMPLETE' : 'LIVE'}
          </span>
        </div>

        <div
          style={{
            background: '#0a0d14',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            fontSize: '0.7rem',
            color: '#94a3b8',
            lineHeight: 1.5,
          }}
        >
          {logs.map((line, idx) => (
            <div key={idx} style={{ color: line.includes('INGESTION') ? '#38bdf8' : '#cbd5e1' }}>
              {line}
            </div>
          ))}

          {scenario !== 'result_ready' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#c084fc',
                fontSize: '0.7rem',
              }}
            >
              <RefreshCw size={10} style={{ animation: 'spin 2s linear infinite' }} />
              Comparing AST concurrency primitives for Q1...
            </div>
          )}
        </div>
      </div>

      {/* 4. Responsible AI Governance */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '24px',
        }}
      >
        <h3
          style={{
            fontSize: '0.88rem',
            fontWeight: 700,
            margin: '0 0 10px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#f8fafc',
          }}
        >
          <Shield size={16} color="#a5b4fc" /> Responsible AI Governance
        </h3>
        <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: '0 0 16px 0', lineHeight: 1.55 }}>
          Inprep AI models evaluate purely against objective engineering rubric and observable communication telemetry. We strictly forbid psychological inference, emotion analysis, or automated hiring pass/fail decisions.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <Lock size={13} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Self-delete protocol available upon dossier completion
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <Terminal size={13} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Deterministic grading aligned with Staff+ industry data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
