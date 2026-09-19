import React from 'react';
import { Layers, RefreshCw } from 'lucide-react';

interface DiagnosticProvenanceCardProps {
  onNavigateQuestionPerformance?: () => void;
  onNavigateCommunication?: () => void;
  onNavigateSpeech?: () => void;
}

export const DiagnosticProvenanceCard: React.FC<DiagnosticProvenanceCardProps> = ({
  onNavigateQuestionPerformance,
  onNavigateCommunication,
  onNavigateSpeech,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#0c1322',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '14px',
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={15} color="#a855f7" />
            <h3 style={{ margin: 0, fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc' }}>
              Diagnostic Provenance
            </h3>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#94a3b8', cursor: 'pointer' }}>Why Day 4?</span>
        </div>

        <p style={{ margin: '0 0 14px 0', fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.45 }}>
          This deliberate focus module was synthesized dynamically from telemetry discrepancies isolated during recent
          defensive trials:
        </p>

        {/* 3 Telemetry Provenance Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
          {/* Provenance 1: Question Performance #41 */}
          <div
            onClick={onNavigateQuestionPerformance}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '10px 12px',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#f8fafc' }}>
                Question Performance #41
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: '#f43f5e',
                  fontWeight: 700,
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                68.0 / 100
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.69rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Session #SIM-PY-8821(Q4): Premature termination of DistributedMutex lease expiration proof before addressing
              NTP drift.
            </p>
          </div>

          {/* Provenance 2: Communication #38 */}
          <div
            onClick={onNavigateCommunication}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '10px 12px',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#f8fafc' }}>Communication #38</span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: '#c084fc',
                  fontWeight: 700,
                  backgroundColor: 'rgba(192, 132, 252, 0.12)',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                76.4 completeness
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.69rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Minto Pyramid framework fidelity dropped to 72% when concluding answers in under 90 seconds without summary recap.
            </p>
          </div>

          {/* Provenance 3: Speech Analytics #39 */}
          <div
            onClick={onNavigateSpeech}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              padding: '10px 12px',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#f8fafc' }}>Speech Analytics #39</span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: '#38bdf8',
                  fontWeight: 700,
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                138 WPM
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.69rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Pacing was measured in the optimal range, but 3 hesitation tokens appeared during boundary proof elaboration.
            </p>
          </div>
        </div>

        {/* Evaluated Competencies */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '0.68rem', color: '#64748b', marginBottom: '6px', fontWeight: 600 }}>
            Evaluated Competencies:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['Distributed Systems', 'Rate Limiting', 'Redis Lua Scripting', 'Fencing Tokens'].map((comp) => (
              <span
                key={comp}
                style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.68rem',
                  color: '#94a3b8',
                }}
              >
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.68rem',
          color: '#64748b',
          paddingTop: '10px',
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        <RefreshCw size={11} color="#64748b" />
        <span>Recalibrated automatically post Session #PY-8821</span>
      </div>
    </div>
  );
};
