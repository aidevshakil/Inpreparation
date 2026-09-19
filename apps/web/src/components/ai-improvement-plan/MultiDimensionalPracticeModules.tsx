import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';

interface PracticeDrill {
  id: string;
  tag: string;
  score: string;
  title: string;
  description: string;
  duration: string;
}

interface MultiDimensionalPracticeModulesProps {
  onLaunchDrill?: (drillTitle: string) => void;
  onFacetSelect?: (facet: string) => void;
}

export const MultiDimensionalPracticeModules: React.FC<MultiDimensionalPracticeModulesProps> = ({
  onLaunchDrill,
  onFacetSelect,
}) => {
  const [activeFacet, setActiveFacet] = useState<'technical' | 'communication' | 'speech'>('technical');

  const drills: Record<'technical' | 'communication' | 'speech', PracticeDrill[]> = {
    technical: [
      {
        id: '1',
        tag: 'DRILL #TC-12',
        score: '69/100',
        title: 'Redis Lua Script Atomic Boundary',
        description:
          'Practice writing and explaining single-threaded EVAL scripts with deterministic key-hashing logic.',
        duration: '12 Mins • Code + Oral',
      },
      {
        id: '2',
        tag: 'DRILL #TC-18',
        score: '76/100',
        title: 'PgBouncer Pool Saturation Profiling',
        description:
          'Simulate asynchronous database contention and requires proposing session-level connection pooling.',
        duration: '15 Mins • Architecture',
      },
      {
        id: '3',
        tag: 'DRILL #TC-24',
        score: '84/100',
        title: 'Raft Quorum Heartbeats & Split-Brain',
        description:
          'Verbal defense of leader leases and epoch counter enforcement under network partition.',
        duration: '10 Mins • Verbal Defense',
      },
    ],
    communication: [
      {
        id: '4',
        tag: 'DRILL #CM-08',
        score: '72/100',
        title: 'Minto Pyramid BLUF Executive Synthesis',
        description:
          'Lead answers with immediate governing answers before substantiating technical rationales.',
        duration: '10 Mins • Verbal Structuring',
      },
      {
        id: '5',
        tag: 'DRILL #CM-14',
        score: '76/100',
        title: 'Quantitative Failure Trade-off Proofs',
        description:
          'Articulate latency vs consistency degradation models under SLA degradation scenarios.',
        duration: '15 Mins • Trade-off Modeling',
      },
      {
        id: '6',
        tag: 'DRILL #CM-21',
        score: '82/100',
        title: 'Topical Relevance & Non-Tangential Anchoring',
        description:
          'Maintain concise boundary answers to deep architectural follow-up prompts.',
        duration: '12 Mins • Prompt Focus',
      },
    ],
    speech: [
      {
        id: '7',
        tag: 'DRILL #SP-05',
        score: '74/100',
        title: 'Pacing Cadence Calibration (130-160 WPM)',
        description:
          'Stabilize speaking rate during complex memory model and concurrency explanations.',
        duration: '8 Mins • Audio Cadence',
      },
      {
        id: '8',
        tag: 'DRILL #SP-11',
        score: '80/100',
        title: 'Syntactical Pause Structuring',
        description:
          'Convert filler tokens into structured deliberate cognitive pauses before architecture defense.',
        duration: '10 Mins • Pause Control',
      },
      {
        id: '9',
        tag: 'DRILL #SP-19',
        score: '86/100',
        title: 'Articulation Velocity Under High Load Prompts',
        description:
          'Ensure crisp word boundary articulation during rapid technical dispute defense.',
        duration: '12 Mins • Acoustic Precision',
      },
    ],
  };

  const facets = [
    { key: 'technical' as const, label: 'Technical Competency (#37)' },
    { key: 'communication' as const, label: 'Communication & Structure (#38)' },
    { key: 'speech' as const, label: 'Speech & Cadence (#39)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Header & Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={16} style={{ color: '#818cf8' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Multi-Dimensional Practice Modules
            </h3>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
            Select a competency facet to view targeted micro-drills and diagnostic evidence.
          </p>
        </div>

        {/* Facet Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#090d18',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3px',
            gap: '2px',
          }}
        >
          {facets.map((f) => {
            const isSelected = activeFacet === f.key;
            return (
              <button
                key={f.key}
                onClick={() => {
                  setActiveFacet(f.key);
                  onFacetSelect?.(f.key);
                }}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: isSelected ? '#4f46e5' : 'transparent',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  fontSize: '0.72rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3 Drill Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {drills[activeFacet].map((drill) => (
          <div
            key={drill.id}
            style={{
              backgroundColor: '#0d1322',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '14px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#818cf8', letterSpacing: '0.5px' }}>
                  {drill.tag}
                </span>
                <span
                  style={{
                    padding: '2px 7px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#cbd5e1',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                  }}
                >
                  Score: {drill.score}
                </span>
              </div>

              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0 0' }}>
                {drill.title}
              </h4>

              <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '6px 0 0 0', lineHeight: 1.45 }}>
                {drill.description}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
                {drill.duration}
              </span>

              <button
                onClick={() => onLaunchDrill?.(drill.title)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: '#a5b4fc',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.25)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
                  e.currentTarget.style.color = '#a5b4fc';
                }}
              >
                <span>Launch</span>
                <ArrowRight size={11} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
