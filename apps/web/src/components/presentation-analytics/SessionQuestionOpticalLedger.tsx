import React, { useState } from 'react';
import { Filter, ExternalLink, X, Video, ShieldCheck, Check } from 'lucide-react';

interface OpticalQuestionItem {
  id: string;
  prompt: string;
  duration: string;
  faceVisibility: number;
  framing: string;
  alignment: number;
  postureStability: string;
  isStable: boolean;
  status: string;
  detailedAuditNotes: string;
}

export const SessionQuestionOpticalLedger: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<OpticalQuestionItem | null>(null);

  const questions: OpticalQuestionItem[] = [
    {
      id: 'Q1',
      prompt: 'Asynchronous event loop starvation & thread pool sizing',
      duration: '1m 24s',
      faceVisibility: 95,
      framing: 'Centered',
      alignment: 90,
      postureStability: 'Stable',
      isStable: true,
      status: 'Calibrated',
      detailedAuditNotes:
        'Full face mesh maintained across all 2,520 video frames. Camera placed precisely at eye-level with 0% lateral neck deviation.',
    },
    {
      id: 'Q2',
      prompt: 'Mitigating GIL contention with multiprocessing',
      duration: '1m 35s',
      faceVisibility: 95,
      framing: 'Centered',
      alignment: 89,
      postureStability: 'Stable',
      isStable: true,
      status: 'Calibrated',
      detailedAuditNotes:
        'Stable chest-up framing. Zero hand occlusions detected while explaining shared memory array IPC constructs.',
    },
    {
      id: 'Q3',
      prompt: 'Distributed lock lease expiry under GC pauses',
      duration: '1m 38s',
      faceVisibility: 94,
      framing: 'Good',
      alignment: 87,
      postureStability: '1 Shift',
      isStable: false,
      status: 'Calibrated',
      detailedAuditNotes:
        'Single torso re-centering at timestamp 0:48. Optical bounding box remained within acceptable tolerance margins.',
    },
    {
      id: 'Q4',
      prompt: 'Token-bucket rate limiter backpressure',
      duration: '1m 52s',
      faceVisibility: 93,
      framing: 'Minor Shift',
      alignment: 84,
      postureStability: '2 Shifts',
      isStable: false,
      status: 'Calibrated',
      detailedAuditNotes:
        'Slight leftward drift during extended whiteboard formula citation. Candidate shifted posture twice; recovery completed within 4 seconds.',
    },
    {
      id: 'Q5',
      prompt: 'PostgreSQL connection pool exhaustion isolation',
      duration: '1m 18s',
      faceVisibility: 97,
      framing: 'Centered',
      alignment: 92,
      postureStability: 'Stable',
      isStable: true,
      status: 'Calibrated',
      detailedAuditNotes:
        'Highest optical alignment of the session at 92%. Uniform front-facing illumination with zero specular screen glare.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#0d1322',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '22px 24px',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Session Question-Level Optical Ledger
            </h3>
            <span
              style={{
                padding: '2px 7px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#cbd5e1',
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '0.4px',
              }}
            >
              SIM-PY-8821 LC 5-QUESTION AUDIT
            </span>
          </div>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
            Auditing Session #SIM-PY-8821 — Python Backend Concurrency &amp; Async Architectures
          </p>
        </div>

        {/* Filter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 10px',
            borderRadius: '7px',
            backgroundColor: '#090d18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.72rem',
            color: '#cbd5e1',
          }}
        >
          <Filter size={12} style={{ color: '#818cf8' }} />
          <span>Filtering: Alignment (&gt;85%)</span>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            minWidth: '820px',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Defended Question Prompt
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Duration
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Face Visibility
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Framing
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Alignment
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Posture Stability
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                Status
              </th>
              <th style={{ padding: '10px 12px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>
                Audit
              </th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr
                key={q.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Prompt */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#c084fc' }}>
                      {q.id}
                    </span>
                    <span style={{ fontSize: '0.76rem', fontWeight: 600, color: '#f1f5f9' }}>
                      {q.prompt}
                    </span>
                  </div>
                </td>

                {/* Duration */}
                <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.74rem', color: '#94a3b8' }}>
                  {q.duration}
                </td>

                {/* Face Visibility */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#38bdf8' }}>
                      {q.faceVisibility}%
                    </span>
                    <div
                      style={{
                        width: '40px',
                        height: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${q.faceVisibility}%`,
                          height: '100%',
                          backgroundColor: '#38bdf8',
                        }}
                      />
                    </div>
                  </div>
                </td>

                {/* Framing */}
                <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.74rem', color: '#cbd5e1' }}>
                  {q.framing}
                </td>

                {/* Alignment */}
                <td style={{ padding: '12px', verticalAlign: 'middle', fontSize: '0.76rem', fontWeight: 700, color: '#34d399' }}>
                  {q.alignment}%
                </td>

                {/* Posture Stability */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: q.isStable ? '#34d399' : '#fbbf24',
                    }}
                  >
                    {q.isStable && <Check size={12} />}
                    {q.postureStability}
                  </span>
                </td>

                {/* Status */}
                <td style={{ padding: '12px', verticalAlign: 'middle' }}>
                  <span
                    style={{
                      padding: '2px 7px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      color: '#34d399',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                    }}
                  >
                    {q.status}
                  </span>
                </td>

                {/* Audit Link */}
                <td style={{ padding: '12px', verticalAlign: 'middle', textAlign: 'right' }}>
                  <button
                    onClick={() => setSelectedItem(q)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 9px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      color: '#c084fc',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
                      e.currentTarget.style.color = '#c084fc';
                    }}
                  >
                    <span>Dossier #33</span>
                    <ExternalLink size={10} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Drawer */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              width: '100%',
              maxWidth: '560px',
              padding: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#c084fc' }}>
                  {selectedItem.id} • Optical Quality Audit
                </span>
                <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0 0' }}>
                  {selectedItem.prompt}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                style={{ backgroundColor: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <div style={{ padding: '8px', backgroundColor: '#090d18', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Face Visibility</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>
                  {selectedItem.faceVisibility}%
                </div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#090d18', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Framing</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>
                  {selectedItem.framing}
                </div>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#090d18', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Alignment</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#34d399', marginTop: '2px' }}>
                  {selectedItem.alignment}%
                </div>
              </div>
            </div>

            {/* Observation */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
                <Video size={13} style={{ color: '#c084fc' }} />
                <span>Optical Diagnostic Verification</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                {selectedItem.detailedAuditNotes}
              </div>
            </div>

            {/* Disclaimer reassurance */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '8px',
                fontSize: '0.68rem',
                color: '#34d399',
              }}
            >
              <ShieldCheck size={14} />
              <span>Zero facial biometric templates stored; verifiable client-side extraction.</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#7c3aed',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Close Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
