import React, { useState } from 'react';
import { Terminal, Server, Cpu, Sparkles, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

interface TrackSimulationsProps {
  onStartPractice: (role: string) => void;
}

export const TrackSimulationsSection: React.FC<TrackSimulationsProps> = ({ onStartPractice }) => {
  const tracks = [
    {
      id: 'ai-engineer',
      name: 'AI & Machine Learning Engineer',
      level: 'Senior • L5/L6 Tier',
      icon: <Cpu size={20} color="#818cf8" />,
      tag: 'LLMs, RAG, PyTorch, Triton',
      overallScore: 91,
      percentile: 'Top 5% Candidate',
      skills: [
        { name: 'Model Architecture & Loss Trade-offs', score: 94 },
        { name: 'Vector DB & RAG Pipeline Optimization', score: 90 },
        { name: 'Inference Latency & Quantization', score: 88 },
        { name: 'Evaluation Benchmarking & Evals', score: 92 }
      ],
      strengths: [
        'Precise explanation of KV-caching and PagedAttention mechanisms.',
        'Structured STAR breakdown when handling GPU memory bottlenecks.'
      ],
      improvements: [
        'Elaborate more on distributed fine-tuning (LoRA vs QLoRA trade-offs).',
        'Reduce filler pause at the beginning of system scale estimations.'
      ]
    },
    {
      id: 'frontend-lead',
      name: 'Senior Fullstack / Frontend Lead',
      level: 'Lead • Staff Engineer',
      icon: <Terminal size={20} color="#06b6d4" />,
      tag: 'React, Next.js, Web Vitals, Node.js',
      overallScore: 88,
      percentile: 'Top 8% Candidate',
      skills: [
        { name: 'System Architecture & State Flow', score: 92 },
        { name: 'Core Web Vitals & Rendering Performance', score: 86 },
        { name: 'Behavioral Team Leadership (STAR)', score: 89 },
        { name: 'TypeScript & Code Modularity', score: 84 }
      ],
      strengths: [
        'Clear trade-off analysis between Server Components (RSC) and client hydration.',
        'High composure and structured communication during complex state refactoring questions.'
      ],
      improvements: [
        'Trim answer length by 20% on initial conceptual definitions.',
        'Incorporate specific business revenue impacts when citing performance wins.'
      ]
    },
    {
      id: 'system-architect',
      name: 'Staff Distributed Systems Architect',
      level: 'Principal • L6/L7 Tier',
      icon: <Server size={20} color="#a855f7" />,
      tag: 'Microservices, Kafka, Paxos, Multi-Region',
      overallScore: 94,
      percentile: 'Top 3% Candidate',
      skills: [
        { name: 'High-Throughput Partitioning & Sharding', score: 96 },
        { name: 'Consensus & Distributed Consistency', score: 92 },
        { name: 'Disaster Recovery & Chaos Engineering', score: 95 },
        { name: 'Cross-Functional Executive Persuasion', score: 93 }
      ],
      strengths: [
        'Mastery of CAP theorem nuances and asynchronous event-driven architectures.',
        'Quantified network throughput bottlenecks accurately in milliseconds.'
      ],
      improvements: [
        'Explicitly state cost estimation models earlier in the design phase.'
      ]
    },
    {
      id: 'product-manager',
      name: 'Product Manager — Growth & AI Platform',
      level: 'Senior PM • Strategy',
      icon: <Sparkles size={20} color="#f59e0b" />,
      tag: 'Product Sense, North Star Metrics, GTM',
      overallScore: 86,
      percentile: 'Top 10% Candidate',
      skills: [
        { name: 'North Star Metric Definition & Funnels', score: 89 },
        { name: 'Customer Empathy & Problem Validation', score: 87 },
        { name: 'Cross-Functional Engineering Alignment', score: 84 },
        { name: 'A/B Experimentation Frameworks', score: 85 }
      ],
      strengths: [
        'Strong CIRCLES framework application with concise persona segmentation.',
        'Data-driven trade-off prioritization between retention vs acquisition.'
      ],
      improvements: [
        'Clarify monetization risks earlier when answering open-ended vision questions.'
      ]
    }
  ];

  const [activeTrackIndex, setActiveTrackIndex] = useState(1);
  const activeTrack = tracks[activeTrackIndex];

  return (
    <section id="simulations" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span className="badge-pill badge-emerald" style={{ marginBottom: '14px' }}>
            TRACK-SPECIFIC MASTERY
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            Targeted Simulations Tailored to Your Dream Track
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7 }}>
            Calibrated on actual interview rubrics from Google, Meta, Amazon, Netflix, and top-tier tech firms.
          </p>
        </div>

        {/* Track Grid: Selector List on Left & Scorecard Preview on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Left Column: Track Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {tracks.map((track, idx) => {
              const isSelected = activeTrackIndex === idx;
              return (
                <div
                  key={track.id}
                  onClick={() => setActiveTrackIndex(idx)}
                  className="glass-card"
                  style={{
                    cursor: 'pointer',
                    padding: '20px 24px',
                    borderColor: isSelected ? '#6366f1' : 'rgba(255, 255, 255, 0.07)',
                    background: isSelected ? 'linear-gradient(90deg, #182033 0%, #121828 100%)' : '#0e121c',
                    boxShadow: isSelected ? '0 0 25px rgba(99, 102, 241, 0.25)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {track.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc' }}>
                        {track.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                        {track.level} • <span style={{ color: '#67e8f9' }}>{track.tag}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: isSelected ? '#a5b4fc' : '#64748b'
                  }}>
                    {track.overallScore}%
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Scorecard Panel */}
          <div style={{
            background: 'linear-gradient(180deg, #131929 0%, #0c101a 100%)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 40px rgba(99, 102, 241, 0.15)',
            position: 'relative'
          }}>
            {/* Header with Circle Score */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  SIMULATION EVALUATION SCORECARD
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>
                  {activeTrack.name}
                </div>
                <div style={{ fontSize: '13px', color: '#10b981', fontWeight: 600, marginTop: '2px' }}>
                  ✦ {activeTrack.percentile}
                </div>
              </div>

              {/* Circular Gauge */}
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #1e293b 60%, #6366f1 100%)',
                border: '3px solid #6366f1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
              }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{activeTrack.overallScore}%</span>
                <span style={{ fontSize: '9px', color: '#a5b4fc', textTransform: 'uppercase', fontWeight: 700, marginTop: '2px' }}>Score</span>
              </div>
            </div>

            {/* Skill Breakdown Bars */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#cbd5e1', marginBottom: '14px' }}>
                Core Competency Breakdown
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeTrack.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                      <span style={{ color: '#94a3b8' }}>{skill.name}</span>
                      <span style={{ color: '#f8fafc', fontWeight: 700 }}>{skill.score}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${skill.score}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Improvement Points */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '28px'
            }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#10b981', marginBottom: '8px' }}>
                  <CheckCircle2 size={14} /> Strengths Identified
                </div>
                {activeTrack.strengths.map((str, idx) => (
                  <div key={idx} style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '6px' }}>
                    • {str}
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#f59e0b', marginBottom: '8px' }}>
                  <AlertTriangle size={14} /> Improvement Areas
                </div>
                {activeTrack.improvements.map((imp, idx) => (
                  <div key={idx} style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '6px' }}>
                    • {imp}
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Track Button */}
            <button
              onClick={() => onStartPractice(activeTrack.name)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
            >
              <span>Practice {activeTrack.name} Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
