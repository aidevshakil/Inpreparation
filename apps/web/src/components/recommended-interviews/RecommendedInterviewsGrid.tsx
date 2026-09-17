import React, { useState } from 'react';
import { ArrowRight, Bookmark, ChevronDown, ChevronUp, Sparkles, Inbox } from 'lucide-react';
import { RecommendedInterviewsState } from './RecommendedInterviewsSimulatorBar';

interface RecommendedInterviewsGridProps {
  state: RecommendedInterviewsState;
  searchQuery: string;
  selectedRole: string;
  selectedDifficulty: string;
  onSelectTrack: (trackName: string) => void;
  onViewRubric: (trackName: string) => void;
  onResetFilters: () => void;
  recommendationsList?: any[];
}

export const RecommendedInterviewsGrid: React.FC<RecommendedInterviewsGridProps> = ({
  state,
  searchQuery,
  selectedRole,
  selectedDifficulty,
  onSelectTrack,
  onViewRubric,
  onResetFilters,
  recommendationsList,
}) => {
  const [savedTracks, setSavedTracks] = useState<string[]>(['staff-leadership']);
  const [expandedReason, setExpandedReason] = useState<{ [key: string]: boolean }>({});

  const toggleSave = (id: string) => {
    setSavedTracks((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const toggleReason = (id: string) => {
    setExpandedReason((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allRecommendations = [
    {
      id: 'high-throughput-streaming',
      roleKey: 'distributed',
      difficultyKey: 'advanced',
      category: 'Distributed Infrastructure',
      matchScore: '92% Match',
      matchBg: 'rgba(56, 189, 248, 0.15)',
      matchColor: '#38bdf8',
      matchBorder: 'rgba(56, 189, 248, 0.3)',
      title: 'High-Throughput Streaming & Event-Driven Systems',
      description:
        'Deep dive into Kafka partition rebalancing, idempotent consumers, transactional outbox patterns, and sub-10ms tail latency.',
      questions: '6 Questions',
      duration: '15–18 Mins',
      difficulty: 'Advanced',
      mode: 'Camera + Voice',
      skills: ['Apache Kafka', 'Event Sourcing', 'Outbox Pattern', 'Go Runtime', 'Tail Latency'],
      whyText:
        'Your profile highlights high-volume financial transaction routing. This drill tests Kafka consumer rebalancing edge-cases and distributed lag recovery without artificial complexity.',
    },
    {
      id: 'staff-leadership',
      roleKey: 'leadership',
      difficultyKey: 'advanced',
      category: 'Staff Technical IC & Governance',
      matchScore: '89% Match',
      matchBg: 'rgba(168, 85, 247, 0.15)',
      matchColor: '#c084fc',
      matchBorder: 'rgba(168, 85, 247, 0.3)',
      title: 'Engineering Leadership & Architectural Reviews',
      description:
        'STAR behavioral defense of cross-org technical decisions, unblocking engineering deadlocks, and mentoring senior engineers.',
      questions: '5 Questions',
      duration: '12–15 Mins',
      difficulty: 'Advanced',
      mode: 'Voice / Video',
      skills: ['STAR Method', 'Architectural Governance', 'Conflict Resolution', 'RFC Authoring'],
      whyText:
        'Assesses executive communication and architectural trade-off persuasion, matching your target trajectory for Staff L6+ engineering influence.',
    },
    {
      id: 'database-internals',
      roleKey: 'staff-backend',
      difficultyKey: 'advanced',
      category: 'Backend Storage',
      matchScore: '86% Match',
      matchBg: 'rgba(56, 189, 248, 0.15)',
      matchColor: '#38bdf8',
      matchBorder: 'rgba(56, 189, 248, 0.3)',
      title: 'Database Internals, Concurrency & Storage Engines',
      description:
        'Evaluate PostgreSQL MVCC, distributed locking mechanisms (Redis Redlock), query optimizer edge-cases, and isolation levels.',
      questions: '5 Questions',
      duration: '12–15 Mins',
      difficulty: 'Int.-Adv.',
      mode: 'Spoken Audio',
      skills: ['PostgreSQL', 'MVCC', 'Redis Redlock', 'Distributed Locking', 'Query Tuning'],
      whyText:
        'Directly tests locking hot-spots and database concurrency mitigation cited in your FinScale Labs production experience.',
    },
    {
      id: 'cloud-resilience',
      roleKey: 'distributed',
      difficultyKey: 'intermediate',
      category: 'Cloud & Reliability',
      matchScore: '84% Match',
      matchBg: 'rgba(56, 189, 248, 0.15)',
      matchColor: '#38bdf8',
      matchBorder: 'rgba(56, 189, 248, 0.3)',
      title: 'Cloud Infrastructure Resilience & Kubernetes Observability',
      description:
        'Handle chaos engineering scenarios, Kubernetes pod disruption budgets, ingress routing failover, and SLO/SLA error budgets.',
      questions: '5 Questions',
      duration: '15 Mins',
      difficulty: 'Intermediate',
      mode: 'Camera + Voice',
      skills: ['Kubernetes (CKA)', 'AWS RDS', 'DynamoDB', 'Chaos Eng', 'Prometheus'],
      whyText:
        'Validates your CKA certification and multi-datacenter cloud reliability strategies for high-availability systems.',
    },
  ];

  const effectiveRecommendations = recommendationsList && recommendationsList.length > 0 ? recommendationsList : allRecommendations;

  // Simulator State 2: Loading / Skeletons
  if (state === 'loading_skeletons') {
    return (
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Tailored Recommendations
          </h3>
          <span style={{ fontSize: '0.74rem', color: '#818cf8' }}>Synthesizing Rubric Skeletons...</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              style={{
                backgroundColor: 'rgba(14, 18, 28, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '20px',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ width: '40%', height: '16px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.06)' }} />
              <div style={{ width: '80%', height: '22px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
              <div style={{ width: '100%', height: '40px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.04)' }} />
              <div style={{ width: '60%', height: '16px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.04)', marginTop: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Filter items
  let filtered = effectiveRecommendations;

  if (state === 'filtered_backend_ai') {
    filtered = effectiveRecommendations.slice(0, 2);
  } else if (state === 'no_recs_state') {
    filtered = [];
  } else {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.skills.some((s: string) => s.toLowerCase().includes(q))
      );
    }
    if (selectedRole !== 'all') {
      filtered = filtered.filter((r) => r.roleKey === selectedRole);
    }
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter((r) => r.difficultyKey === selectedDifficulty);
    }
  }

  // Simulator State 4: No Recs State
  if (filtered.length === 0) {
    return (
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          borderRadius: '16px',
          padding: '40px 20px',
          textAlign: 'center',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#818cf8',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '14px',
          }}
        >
          <Inbox size={24} />
        </div>

        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0' }}>
          No Matching Interview Recommendations Found
        </h4>

        <p style={{ fontSize: '0.78rem', color: '#94a3b8', maxWidth: '420px', margin: '0 auto 18px auto', lineHeight: 1.5 }}>
          Try clearing your active filters or adjusting search parameters to see all 4 tailored recommendations for your Staff Systems baseline.
        </p>

        <button
          onClick={onResetFilters}
          style={{
            padding: '9px 20px',
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Tailored Recommendations
          </h3>

          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.35)',
            }}
          >
            {filtered.length} Available
          </span>
        </div>

        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
          Sorted by Rubric Affinity
        </span>
      </div>

      {/* 2x2 Grid of Tailored Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
        }}
      >
        {filtered.map((item) => {
          const isSaved = savedTracks.includes(item.id);
          const isExpanded = !!expandedReason[item.id];

          return (
            <div
              key={item.id}
              style={{
                backgroundColor: 'rgba(14, 18, 28, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div>
                {/* Top Category & Match Score */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span
                    style={{
                      fontSize: '0.64rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      backgroundColor: item.matchBg,
                      color: item.matchColor,
                      border: `1px solid ${item.matchBorder}`,
                    }}
                  >
                    {item.category} • {item.matchScore}
                  </span>

                  <button
                    onClick={() => toggleSave(item.id)}
                    title={isSaved ? 'Saved' : 'Save'}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: isSaved ? '#c084fc' : '#64748b',
                      cursor: 'pointer',
                      padding: '2px',
                    }}
                  >
                    <Bookmark size={15} fill={isSaved ? '#c084fc' : 'none'} />
                  </button>
                </div>

                {/* Title & Description */}
                <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: '0 0 12px 0' }}>
                  {item.description}
                </p>

                {/* Metadata Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.68rem',
                    color: '#cbd5e1',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{item.questions}</span>
                  <span style={{ color: '#475569' }}>•</span>
                  <span>{item.duration}</span>
                  <span style={{ color: '#475569' }}>•</span>
                  <span style={{ color: '#c084fc', fontWeight: 600 }}>{item.difficulty}</span>
                  <span style={{ color: '#475569' }}>•</span>
                  <span style={{ color: '#38bdf8' }}>{item.mode}</span>
                </div>

                {/* Skills Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                  {item.skills.map((skill: string) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.64rem',
                        color: '#94a3b8',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Accordion "Why this recommendation?" */}
                <div style={{ marginBottom: '16px' }}>
                  <button
                    onClick={() => toggleReason(item.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#818cf8',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Sparkles size={11} />
                    <span>Why this recommendation?</span>
                    {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>

                  {isExpanded && (
                    <div
                      style={{
                        marginTop: '8px',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(99, 102, 241, 0.06)',
                        border: '1px solid rgba(99, 102, 241, 0.18)',
                        fontSize: '0.7rem',
                        color: '#cbd5e1',
                        lineHeight: 1.45,
                      }}
                    >
                      {item.whyText}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <button
                  onClick={() => onViewRubric(item.title)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    fontSize: '0.74rem',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  View Rubric
                </button>

                <button
                  onClick={() => onSelectTrack(item.title)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '7px 14px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(124, 58, 237, 0.3)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>Start Practice</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
