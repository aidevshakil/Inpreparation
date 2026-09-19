import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { PracticeModuleDrill } from '../../services/aiPlanStore';

interface MultiDimensionalPracticeModulesProps {
  modules?: {
    technical: PracticeModuleDrill[];
    communication: PracticeModuleDrill[];
    speech: PracticeModuleDrill[];
  };
  activeFacet?: 'technical' | 'communication' | 'speech';
  onFacetChange?: (facet: 'technical' | 'communication' | 'speech') => void;
  onLaunchDrill?: (drillTitle: string) => void;
}

export const MultiDimensionalPracticeModules: React.FC<MultiDimensionalPracticeModulesProps> = ({
  modules,
  activeFacet: controlledFacet,
  onFacetChange,
  onLaunchDrill,
}) => {
  const [internalFacet, setInternalFacet] = useState<'technical' | 'communication' | 'speech'>('technical');
  const activeFacet = controlledFacet !== undefined ? controlledFacet : internalFacet;

  const handleFacetClick = (facet: 'technical' | 'communication' | 'speech') => {
    setInternalFacet(facet);
    if (onFacetChange) onFacetChange(facet);
  };

  const defaultModules: Record<'technical' | 'communication' | 'speech', PracticeModuleDrill[]> = {
    technical: [
      {
        id: '1',
        code: 'DRILL #TC-12',
        score: '69/100',
        title: 'Redis Lua Script Atomic Boundary',
        description:
          'Practice writing and explaining single-threaded EVAL scripts with deterministic key-hashing logic.',
        tag: '12 Mins • Code + Oral',
        duration: '12 Mins',
        rolePrompt: 'Technical Drill: Single-Threaded Redis Lua Script Atomicity & Sharded Key Hashes',
      },
      {
        id: '2',
        code: 'DRILL #TC-18',
        score: '76/100',
        title: 'PgBouncer Pool Saturation Profiling',
        description:
          'Simulates synchronous database contention and requires proposing session-level connection pooling.',
        tag: '15 Mins • Architecture',
        duration: '15 Mins',
        rolePrompt: 'Architecture Drill: PostgreSQL Connection Saturation & PgBouncer Session Pooling',
      },
      {
        id: '3',
        code: 'DRILL #TC-24',
        score: '84/100',
        title: 'Raft Quorum Heartbeats & Split-Brain',
        description:
          'Verbal defense of leader leases and epoch counter enforcement under network partition.',
        tag: '10 Mins • Verbal Defense',
        duration: '10 Mins',
        rolePrompt: 'Verbal Defense Drill: Raft Quorum Heartbeats, Split-Brain & Leader Leases',
      },
    ],
    communication: [
      {
        id: '4',
        code: 'DRILL #CM-08',
        score: '72/100',
        title: 'BLUF 20-Second Atomic Invariant Lead',
        description:
          'Enforces stating the top-line distributed invariant within the opening 20 seconds before elaborating.',
        tag: '8 Mins • Verbal Framing',
        duration: '8 Mins',
        rolePrompt: 'Communication Drill: BLUF Bottom-Line-Up-Front 20-Second Architecture Opening',
      },
      {
        id: '5',
        code: 'DRILL #CM-14',
        score: '78/100',
        title: 'Minto Pyramid Trade-off Hierarchy',
        description:
          'Structure 3-pillar engineering decisions using quantitative latency, throughput, and memory bounds.',
        tag: '12 Mins • Structural Defense',
        duration: '12 Mins',
        rolePrompt: 'Structure Drill: Minto Pyramid 3-Pillar Quantitative Trade-off Defense',
      },
      {
        id: '6',
        code: 'DRILL #CM-21',
        score: '85/100',
        title: 'Executive Summary Closing Synthesis',
        description:
          'Deliver a crisp 30-second final wrap-up synthesizing constraints, telemetry guards, and next steps.',
        tag: '6 Mins • Executive Delivery',
        duration: '6 Mins',
        rolePrompt: 'Closing Synthesis Drill: 30-Second Executive Summary & Boundary Safeguards',
      },
    ],
    speech: [
      {
        id: '7',
        code: 'DRILL #SP-04',
        score: '74/100',
        title: 'Filler Token Suppression (Um / Like)',
        description:
          'Eliminate cognitive hesitation tokens during complex architecture calculations and diagramming pauses.',
        tag: '10 Mins • Acoustic Filter',
        duration: '10 Mins',
        rolePrompt: 'Speech Calibration: Filler Token Elimination During Whiteboard Architecture',
      },
      {
        id: '8',
        code: 'DRILL #SP-11',
        score: '81/100',
        title: 'Cadence Control (135–148 WPM Band)',
        description:
          'Train vocal pacing to prevent rushed delivery during intense technical edge-case cross-examination.',
        tag: '14 Mins • Pacing Trainer',
        duration: '14 Mins',
        rolePrompt: 'Cadence Calibration: 140 WPM Stable Pacing Under Technical Pressure',
      },
      {
        id: '9',
        code: 'DRILL #SP-19',
        score: '88/100',
        title: 'Resonant Authority & Pitch Inflection',
        description:
          'Maintain commanding vocal inflection and steady breath support throughout multi-minute system proofs.',
        tag: '8 Mins • Vocal Dynamics',
        duration: '8 Mins',
        rolePrompt: 'Vocal Presence Drill: Resonance & Pitch Inflection for Staff Engineers',
      },
    ],
  };

  const activeDrills = modules ? modules[activeFacet] : defaultModules[activeFacet];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Section Header & Tabs */}
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
            <Layers size={16} color="#818cf8" />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Multi-Dimensional Practice Modules
            </h3>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
            Select a competency facet to view targeted micro-drills and diagnostic evidence.
          </p>
        </div>

        {/* Facet Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            padding: '3px',
            borderRadius: '9px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <button
            onClick={() => handleFacetClick('technical')}
            style={{
              padding: '6px 12px',
              borderRadius: '7px',
              border: 'none',
              backgroundColor: activeFacet === 'technical' ? '#6366f1' : 'transparent',
              color: activeFacet === 'technical' ? '#ffffff' : '#94a3b8',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            Technical Competency (#37)
          </button>

          <button
            onClick={() => handleFacetClick('communication')}
            style={{
              padding: '6px 12px',
              borderRadius: '7px',
              border: 'none',
              backgroundColor: activeFacet === 'communication' ? '#6366f1' : 'transparent',
              color: activeFacet === 'communication' ? '#ffffff' : '#94a3b8',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            Communication &amp; Structure (#38)
          </button>

          <button
            onClick={() => handleFacetClick('speech')}
            style={{
              padding: '6px 12px',
              borderRadius: '7px',
              border: 'none',
              backgroundColor: activeFacet === 'speech' ? '#6366f1' : 'transparent',
              color: activeFacet === 'speech' ? '#ffffff' : '#94a3b8',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            Speech &amp; Cadence (#39)
          </button>
        </div>
      </div>

      {/* Drills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
        }}
      >
        {activeDrills.map((drill) => (
          <div
            key={drill.id || drill.code}
            style={{
              backgroundColor: '#0d1322',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '14px',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div>
              {/* Card Header: Tag & Score */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#818cf8', letterSpacing: '0.4px' }}>
                  {drill.code}
                </span>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#38bdf8' }}>
                  Score: {drill.score}
                </span>
              </div>

              {/* Title */}
              <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                {drill.title}
              </h4>

              {/* Description */}
              <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                {drill.description}
              </p>
            </div>

            {/* Footer */}
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
              <span style={{ color: '#64748b' }}>{drill.tag}</span>

              <button
                onClick={() => {
                  if (onLaunchDrill) {
                    onLaunchDrill(drill.rolePrompt || drill.title);
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: '#c7d2fe',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6366f1';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
                  e.currentTarget.style.color = '#c7d2fe';
                }}
              >
                <span>Launch</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
