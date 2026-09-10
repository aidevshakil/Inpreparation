import React, { useState } from 'react';
import { Volume2, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';

export const ModelAnswerSection: React.FC = () => {
  const [isPlayingModelAudio, setIsPlayingModelAudio] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const samples = [
    {
      question: "Tell me about a time you resolved a major system outage under high pressure.",
      category: "Behavioral & Crisis Management (STAR)",
      userScore: '64 / 100',
      modelScore: '98 / 100',
      userAnswer: [
        { text: "So, ", isWeak: true, label: "Filler start" },
        { text: "basically our production payment service went down on Black Friday. " },
        { text: "I guess everyone panicked, ", isWeak: true, label: "Uncertain tone" },
        { text: "and I started looking at logs. It took like three hours, but we found a Redis deadlock and restarted it. After that, things were fine." }
      ],
      userCritique: [
        'Lacked structured STAR framing.',
        'Did not quantify blast radius or financial impact.',
        'No mention of post-mortem, automated runbooks, or preventive safeguards.'
      ],
      modelAnswer: [
        { text: "Situation: ", isStrong: true, label: "Clear Context" },
        { text: "During Black Friday peak traffic, our checkout transaction service suffered a critical Redis cluster deadlock causing a 40% checkout drop. " },
        { text: "Task: ", isStrong: true, label: "Direct Ownership" },
        { text: "As incident commander, I had to triage the root bottleneck and restore 99.99% availability within 15 minutes. " },
        { text: "Action: ", isStrong: true, label: "Decisive Strategy" },
        { text: "I isolated the non-idempotent lock cycle, initiated automated read-replica traffic diversion, and applied hotfix patch #408. " },
        { text: "Result: ", isStrong: true, label: "Quantified Impact" },
        { text: "Zero payment loss, full recovery in 11 minutes, and I subsequently implemented distributed distributed leasing to eliminate recurrence." }
      ]
    },
    {
      question: "How do you handle disagreement with a Staff Engineer on database choice?",
      category: "Technical Leadership & Conflict Resolution",
      userScore: '70 / 100',
      modelScore: '96 / 100',
      userAnswer: [
        { text: "Well, ", isWeak: true, label: "Filler" },
        { text: "I usually try to explain why PostgreSQL is better than MongoDB. If they don't agree, I talk to my manager to decide." }
      ],
      userCritique: [
        'Escalated to management immediately without data.',
        'Did not evaluate workload characteristics or read/write ratios.'
      ],
      modelAnswer: [
        { text: "Framework: ", isStrong: true, label: "Data-Driven Approach" },
        { text: "I decouple technical debates from personal opinions by anchoring on concrete workload requirements: schema elasticity, write throughput (p99 latency), and ACID guarantees. I set up a timeboxed benchmark spike comparing both engines under 10k RPS load to make an objective, consensus-driven decision." }
      ]
    }
  ];

  const currentSample = samples[activeQuestionIndex];

  const playVoice = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isPlayingModelAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingModelAudio(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsPlayingModelAudio(false);
        utterance.onerror = () => setIsPlayingModelAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingModelAudio(true);
      }
    }
  };

  return (
    <section id="model-answers" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span className="badge-pill badge-purple" style={{ marginBottom: '14px' }}>
            ACTIONABLE FEEDBACK ENGINE
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            Don't Just See the Score. Learn How to Improve.
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7 }}>
            Side-by-side comparative breakdowns show your transcribed answer vs an AI-optimized model response.
          </p>
        </div>

        {/* Question Switcher Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '24px',
          background: 'rgba(19, 24, 38, 0.6)',
          padding: '12px 20px',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase' }}>
              {currentSample.category}
            </span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>
              "{currentSample.question}"
            </span>
          </div>

          <button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex === 0 ? 1 : 0)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <RefreshCw size={12} />
            <span>Switch Sample Question</span>
          </button>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {/* Left Column: Original Candidate Answer */}
          <div style={{
            background: 'linear-gradient(180deg, #161a26 0%, #0d1017 100%)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '20px',
            padding: '28px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#fca5a5' }}>
                  Your Answer (Transcribed)
                </span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '3px 8px', borderRadius: '6px' }}>
                Score: {currentSample.userScore}
              </span>
            </div>

            <div style={{
              fontSize: '14px',
              color: '#cbd5e1',
              lineHeight: 1.8,
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '18px',
              borderRadius: '12px',
              marginBottom: '20px'
            }}>
              {currentSample.userAnswer.map((chunk, idx) => (
                <span
                  key={idx}
                  style={chunk.isWeak ? {
                    background: 'rgba(239, 68, 68, 0.25)',
                    color: '#fca5a5',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    borderBottom: '2px dashed #ef4444',
                    marginRight: '2px'
                  } : {}}
                  title={chunk.label || ''}
                >
                  {chunk.text}
                </span>
              ))}
            </div>

            {/* Critique checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase' }}>
                Key Flaws Identified:
              </span>
              {currentSample.userCritique.map((critique, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#94a3b8' }}>
                  <AlertCircle size={14} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{critique}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: AI Model Answer */}
          <div style={{
            background: 'linear-gradient(180deg, #111e2e 0%, #0c1420 100%)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 0 35px rgba(16, 185, 129, 0.12)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="#10b981" />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#6ee7b7' }}>
                  AI Optimized Model Answer (STAR)
                </span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.12)', padding: '3px 8px', borderRadius: '6px' }}>
                Score: {currentSample.modelScore}
              </span>
            </div>

            <div style={{
              fontSize: '14px',
              color: '#e2e8f0',
              lineHeight: 1.8,
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '18px',
              borderRadius: '12px',
              marginBottom: '20px'
            }}>
              {currentSample.modelAnswer.map((chunk, idx) => (
                <span
                  key={idx}
                  style={chunk.isStrong ? {
                    color: '#6ee7b7',
                    fontWeight: 700,
                    marginRight: '4px'
                  } : {}}
                >
                  {chunk.text}
                </span>
              ))}
            </div>

            {/* Listen to Voice and Drill Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <button
                onClick={() => playVoice(currentSample.modelAnswer.map(m => m.text).join(' '))}
                style={{
                  background: isPlayingModelAudio ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: isPlayingModelAudio ? '#fca5a5' : '#6ee7b7',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Volume2 size={14} />
                <span>{isPlayingModelAudio ? 'Stop Voice' : 'Listen to Model Delivery'}</span>
              </button>

              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 600 }}>
                ✦ 100% STAR Adherence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
