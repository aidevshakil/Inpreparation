import React from 'react';
import { ArrowRight, Video } from 'lucide-react';
import { PracticeVector } from '../../services/aiPlanStore';

interface PriorityPracticeVectorsProps {
  vectors?: PracticeVector[];
  onLaunchVector?: (vector: PracticeVector) => void;
  onPracticeVector01?: () => void;
  onPracticeVector02?: () => void;
  onCalibrateFraming?: () => void;
}

export const PriorityPracticeVectors: React.FC<PriorityPracticeVectorsProps> = ({
  vectors,
  onLaunchVector,
  onPracticeVector01,
  onPracticeVector02,
  onCalibrateFraming,
}) => {
  const displayVectors: PracticeVector[] = vectors && vectors.length > 0 ? vectors : [
    {
      id: 'v1',
      tag: 'VECTOR 01 • URGENT',
      badgeType: 'urgent',
      score: '69.0 / 100',
      scoreNumber: 69.0,
      title: 'Distributed Backpressure & Token-Bucket Clock Drift',
      observedIn: 'Observed in #SIM-PY-8821 Q4 (Question Performance #41)',
      observation:
        'Candidate omitted full-jitter exponential backoff in Redis Lua script and failed clock drift reconciliation under burst ingress across multiple availability zones.',
      recommendedDuration: '15 Mins (#42S)',
      drillCode: '#42S',
      buttonLabel: 'Practice Vector 01',
    },
    {
      id: 'v2',
      tag: 'VECTOR 02 • STRUCTURAL',
      badgeType: 'structural',
      score: '76.4 / 100',
      scoreNumber: 76.4,
      title: 'Exhaustive Completeness & Failure Trade-off Proofs',
      observedIn: 'Observed in Communication Analytics #38',
      observation:
        'Candidate truncated distributed failure modes when concluding under 90 seconds. Minto Pyramid adherence dropped to 72% on quantitative trade-off evidence.',
      recommendedDuration: '20 Mins (#38)',
      drillCode: '#38',
      buttonLabel: 'Practice Vector 02',
    },
    {
      id: 'v3',
      tag: 'VECTOR 03 • ACOUSTIC/OPTIC',
      badgeType: 'acoustic',
      score: '84% Alignment',
      scoreNumber: 84.0,
      title: 'Optical Framing Consistency During Whiteboard Articulation',
      observedIn: 'Observed in Presentation Analytics #40',
      observation:
        'Candidate tilted 6.2° horizontally and shifted out of the primary center cone during Question 4 diagram explanation, lowering visual authority metrics.',
      recommendedDuration: '5 Mins (#40)',
      drillCode: '#40',
      buttonLabel: 'Calibrate Framing',
    },
  ];

  const handleButtonClick = (idx: number, vec: PracticeVector) => {
    if (onLaunchVector) {
      onLaunchVector(vec);
      return;
    }
    if (idx === 0 && onPracticeVector01) onPracticeVector01();
    else if (idx === 1 && onPracticeVector02) onPracticeVector02();
    else if (idx === 2 && onCalibrateFraming) onCalibrateFraming();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Priority Practice Vectors
          </h3>
          <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
            Direct Empirical Extraction
          </span>
        </div>

        <span style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 600 }}>
          Ranked by score degradation severity
        </span>
      </div>

      {/* 3 Vector Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
        }}
      >
        {displayVectors.map((vec, idx) => {
          const isUrgent = vec.badgeType === 'urgent';
          const isStructural = vec.badgeType === 'structural';

          const badgeBg = isUrgent
            ? 'rgba(239, 68, 68, 0.12)'
            : isStructural
            ? 'rgba(168, 85, 247, 0.12)'
            : 'rgba(56, 189, 248, 0.12)';
          const badgeColor = isUrgent ? '#f87171' : isStructural ? '#c084fc' : '#38bdf8';
          const badgeBorder = isUrgent
            ? 'rgba(239, 68, 68, 0.25)'
            : isStructural
            ? 'rgba(168, 85, 247, 0.25)'
            : 'rgba(56, 189, 248, 0.25)';

          return (
            <div
              key={vec.id || idx}
              style={{
                backgroundColor: '#0d1322',
                borderRadius: '12px',
                border: isUrgent ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '18px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                transition: 'border-color 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isUrgent ? '#ef4444' : 'rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isUrgent
                  ? 'rgba(239, 68, 68, 0.2)'
                  : 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div>
                {/* Card Top Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.66rem', fontWeight: 700, color: badgeColor, letterSpacing: '0.4px' }}>
                    {vec.tag}
                  </span>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      backgroundColor: badgeBg,
                      color: badgeColor,
                      border: `1px solid ${badgeBorder}`,
                      fontSize: '0.68rem',
                      fontWeight: 700,
                    }}
                  >
                    {vec.score}
                  </span>
                </div>

                {/* Title */}
                <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                  {vec.title}
                </h4>

                {/* Subtitle / Observed In */}
                <div style={{ fontSize: '0.68rem', color: '#818cf8', fontWeight: 600, marginBottom: '10px' }}>
                  {vec.observedIn}
                </div>

                {/* Observation Body */}
                <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                  {vec.observation}
                </p>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '0.72rem',
                }}
              >
                <span style={{ color: '#64748b' }}>
                  Recommended Drill: <strong style={{ color: '#cbd5e1' }}>{vec.recommendedDuration}</strong>
                </span>

                <button
                  onClick={() => handleButtonClick(idx, vec)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 12px',
                    borderRadius: '7px',
                    backgroundColor: isUrgent ? '#4f46e5' : 'rgba(255, 255, 255, 0.05)',
                    border: isUrgent ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isUrgent ? '#4338ca' : 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isUrgent ? '#4f46e5' : 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  {vec.buttonLabel.includes('Framing') && <Video size={12} style={{ marginRight: '2px' }} />}
                  <span>{vec.buttonLabel}</span>
                  {!vec.buttonLabel.includes('Framing') && <ArrowRight size={12} />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
