import React, { useState } from 'react';
import { Smile, Activity, Cpu, Award, CheckCircle2 } from 'lucide-react';

export const AiAnalysisMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const dimensions = [
    {
      id: 0,
      icon: <Smile size={22} color="#c084fc" />,
      title: '1. Behavioral & Emotion Analysis',
      desc: 'Real-time computer vision analyzes eye contact consistency, genuine smile indicators, stress-induced micro-expressions, and composure when faced with unexpected curveball questions.',
      score: '91%',
      status: 'High Emotional Intelligence',
      metrics: [
        { label: 'Eye Contact Steadiness', val: '94%' },
        { label: 'Stress Recovery Latency', val: '1.8s' },
        { label: 'Positive Affect Score', val: '88%' }
      ]
    },
    {
      id: 1,
      icon: <Activity size={22} color="#38bdf8" />,
      title: '2. Conversation Flow & Pacing',
      desc: 'Deep audio NLP breaks down your speech into words-per-minute tempo, syllable clarity, pause distribution, and flags distracting verbal crutches like "um", "ah", "basically", and "like".',
      score: '96%',
      status: 'Optimal 140 WPM Cadence',
      metrics: [
        { label: 'Filler Word Density', val: '< 0.8%' },
        { label: 'Natural Pause Duration', val: '1.2s avg' },
        { label: 'Articulation Clarity', val: '98%' }
      ]
    },
    {
      id: 2,
      icon: <Cpu size={22} color="#34d399" />,
      title: '3. Technical Accuracy & Logic',
      desc: 'Evaluates your technical precision, code architecture structure, space-time complexity analysis, and whether you proactively explore scale bottlenecks, failure modes, and database trade-offs.',
      score: '89%',
      status: 'Solid Senior Tier Logic',
      metrics: [
        { label: 'Architectural Trade-offs', val: '92%' },
        { label: 'Edge Case Exploration', val: '86%' },
        { label: 'Algorithmic Big-O Rigor', val: '90%' }
      ]
    },
    {
      id: 3,
      icon: <Award size={22} color="#fbbf24" />,
      title: '4. Executive Presence & Impact Matrix',
      desc: 'Assesses answer conciseness, leadership vocabulary, quantification of business ROI, and adherence to structured communication frameworks like STAR, PREP, and Pyramid Principle.',
      score: '93%',
      status: 'Top 5% Candidate',
      metrics: [
        { label: 'STAR Structure Precision', val: '95%' },
        { label: 'Quantified Impact Metrics', val: '91%' },
        { label: 'Conciseness & Brevity', val: '93%' }
      ]
    }
  ];

  return (
    <section id="analysis" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
            DEEP AI MULTI-MODAL ANALYSIS
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            AI Evaluates More Than Your Answers
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7 }}>
            Practice in front of our camera and voice engine to receive precise metrics across every dimension that interviewers evaluate.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {dimensions.map((dim) => (
            <div
              key={dim.id}
              onClick={() => setActiveTab(dim.id)}
              className="glass-card"
              style={{
                cursor: 'pointer',
                border: activeTab === dim.id ? '1px solid rgba(99, 102, 241, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: activeTab === dim.id ? '#141a29' : '#0e121c',
                boxShadow: activeTab === dim.id ? '0 0 25px rgba(99, 102, 241, 0.2)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {dim.icon}
                  </div>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc' }}>
                    {dim.score}
                  </span>
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                  {dim.title}
                </h3>

                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                  {dim.desc}
                </p>
              </div>

              {/* Metric rows */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {dim.metrics.map((m, mIdx) => (
                  <div key={mIdx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: '#94a3b8' }}>{m.label}</span>
                    <span style={{ color: '#67e8f9', fontWeight: 700 }}>{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Analysis Showcase Bar */}
        <div style={{
          background: 'linear-gradient(90deg, #101522 0%, #171e30 100%)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          borderRadius: '16px',
          padding: '24px 30px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#818cf8'
            }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc' }}>
                Objective Interview Analysis Multiplier
              </div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                Replaces subjective human guesswork with standardized, industry-benchmarked hiring rubrics.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '12px', color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.1)', padding: '6px 12px', borderRadius: '8px' }}>
              ✓ Full Video + Audio Telemetry Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
