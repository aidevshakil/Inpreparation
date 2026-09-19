import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Play,
  Pause,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Mic,
  Video,
  MessageSquare,
  Layers,
} from 'lucide-react';

interface QuestionDossierInspectViewProps {
  onPrevQuestion?: () => void;
  onNextQuestion?: () => void;
  onDrillSimilar?: () => void;
  onGeneratePlan?: () => void;
  onNavigateSpeech?: () => void;
  onNavigatePresentation?: () => void;
  onNavigateCommunication?: () => void;
}

export const QuestionDossierInspectView: React.FC<QuestionDossierInspectViewProps> = ({
  onPrevQuestion,
  onNextQuestion,
  onDrillSimilar,
  onGeneratePlan,
  onNavigateSpeech,
  onNavigatePresentation,
  onNavigateCommunication,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(
      `"I would place a Redis cluster backed by a Lua script to atomically decrement token counts. In the event of Redis CPU saturation, clients should fall back to local in-memory leaky-bucket queues. However, during severe burst ingress, dropping excess requests with HTTP 429 and Retry-After headers is essential to shield the application pods. We would then just retry after a couple seconds once things settle down..."`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        gap: '20px',
      }}
    >
      {/* Dossier Top Navigation Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '3px 10px',
              borderRadius: '6px',
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.4px',
            }}
          >
            QUESTION 04 OF 05
          </span>

          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Token-Bucket Rate Limiter Backpressure
          </h2>

          <span
            style={{
              padding: '3px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontSize: '0.7rem',
              fontWeight: 600,
            }}
          >
            Topic: Distributed Systems &amp; Concurrency
          </span>
        </div>

        {/* Prev / Next Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onPrevQuestion}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '7px',
              backgroundColor: '#090d18',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={13} />
            <span>Prev (Q3)</span>
          </button>

          <button
            onClick={onNextQuestion}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '7px',
              backgroundColor: '#090d18',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span>Next (Q5)</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* 2-Column Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.85fr) minmax(320px, 1.15fr)',
          gap: '24px',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Prompt, Audio, Highlights, Strengths, Remediation, Multimodal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Defended Prompt */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '16px 18px',
            }}
          >
            <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              DEFENDED PROMPT
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f1f5f9', lineHeight: 1.5 }}>
              &ldquo;Under a sudden 10x burst of traffic across a distributed API cluster, how would you design a token-bucket rate limiter to prevent upstream Redis saturation while guaranteeing predictable client backpressure?&rdquo;
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '8px' }}>
              Spoken Duration: <strong style={{ color: '#cbd5e1' }}>1m 52s</strong> • Staff L6 Scope • Prompt Completed
            </div>
          </div>

          {/* Candidate Spoken Response & Transcript Excerpt */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f8fafc' }}>
                Candidate Spoken Response &amp; Transcript Excerpt
              </div>

              <button
                onClick={handleCopy}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: copied ? '#34d399' : '#cbd5e1',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Copy size={11} />
                <span>{copied ? 'Copied!' : 'Copy Full Transcript'}</span>
              </button>
            </div>

            {/* Audio Waveform Player Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '9px',
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#4f46e5',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
              </button>

              <span style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 600, minWidth: '60px' }}>
                0:38 / 1:52
              </span>

              {/* Waveform visual bars */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '3px', height: '24px' }}>
                {[14, 22, 10, 26, 32, 18, 28, 36, 20, 14, 24, 30, 16, 22, 10, 18, 28, 34, 18, 12, 26, 32, 14, 20, 28, 16, 12, 22, 30, 24, 16, 28, 20, 14, 10].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h * 0.6}px`,
                      backgroundColor: i < 12 ? '#38bdf8' : 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '2px',
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  color: '#38bdf8',
                  fontSize: '0.64rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                <Volume2 size={11} />
                <span>48kHz Whisper-v3 Master Track</span>
              </div>
            </div>

            {/* Transcript with highlighting */}
            <div
              style={{
                fontSize: '0.78rem',
                color: '#e2e8f0',
                lineHeight: 1.6,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: '12px 14px',
                borderRadius: '8px',
                borderLeft: '3px solid #818cf8',
              }}
            >
              &ldquo;I would place a{' '}
              <span style={{ color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.12)', padding: '1px 4px', borderRadius: '4px', fontWeight: 600 }}>
                Redis cluster backed by a Lua script
              </span>{' '}
              to atomically decrement token counts. In the event of Redis CPU saturation, clients should fall back to{' '}
              <span style={{ color: '#818cf8', backgroundColor: 'rgba(129, 140, 248, 0.12)', padding: '1px 4px', borderRadius: '4px', fontWeight: 600 }}>
                local in-memory leaky-bucket queues
              </span>
              . However, during severe burst ingress, dropping excess requests with{' '}
              <span style={{ color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.12)', padding: '1px 4px', borderRadius: '4px', fontWeight: 600 }}>
                HTTP 429 and Retry-After headers
              </span>{' '}
              is essential to shield the application pods.{' '}
              <span style={{ color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.14)', padding: '1px 4px', borderRadius: '4px', fontWeight: 600 }}>
                We would then just retry after a couple seconds once things settle down...
              </span>
              &rdquo;
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.68rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
                <span style={{ color: '#cbd5e1' }}>Strong Architectural Choice</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#818cf8' }} />
                <span style={{ color: '#cbd5e1' }}>Client Contract Strategy</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ color: '#fde68a' }}>Ambiguous / Missing Edge Specification</span>
              </div>
            </div>
          </div>

          {/* Strengths and Remediation 2-Column */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {/* Demonstrated Strengths */}
            <div
              style={{
                backgroundColor: '#090d18',
                borderRadius: '12px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: '#34d399' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#34d399' }}>
                  Demonstrated Strengths
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                  <span style={{ color: '#34d399', fontWeight: 700 }}>✓</span>
                  <span>Correctly selected Redis Lua scripting for atomic decrements, avoiding concurrent race conditions.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                  <span style={{ color: '#34d399', fontWeight: 700 }}>✓</span>
                  <span>Implemented client-side backoff with explicit HTTP 429 and Retry-After headers.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                  <span style={{ color: '#34d399', fontWeight: 700 }}>✓</span>
                  <span>Appropriately flagged upstream cluster saturation risks and memory exhaustion.</span>
                </div>
              </div>
            </div>

            {/* Answer Quality Remediation */}
            <div
              style={{
                backgroundColor: '#090d18',
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={16} style={{ color: '#f59e0b' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#fbbf24' }}>
                  Answer Quality Remediation
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.72rem', color: '#fde68a', lineHeight: 1.4 }}>
                  <span style={{ color: '#f59e0b', fontWeight: 700 }}>!</span>
                  <span>Omitted full-jitter exponential backoff formula, leaving system vulnerable to thundering herd storms.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.72rem', color: '#fde68a', lineHeight: 1.4 }}>
                  <span style={{ color: '#f59e0b', fontWeight: 700 }}>!</span>
                  <span>Did not specify token refill interval reconciliation under distributed clock drift / skew across nodes.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.72rem', color: '#fde68a', lineHeight: 1.4 }}>
                  <span style={{ color: '#f59e0b', fontWeight: 700 }}>!</span>
                  <span>Trade-off between Redis network bandwidth vs in-memory RAM cost on local worker pods was not quantified.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Multimodal Telemetry Triangulation (Q4 Window) */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={15} style={{ color: '#c084fc' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ffffff' }}>
                  Multimodal Telemetry Triangulation (Q4 Window)
                </span>
              </div>
              <span style={{ fontSize: '0.66rem', color: '#94a3b8' }}>
                Synchronous Window: 00:00 - 01:52
              </span>
            </div>

            {/* 3 Telemetry Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {/* Speech Telemetry #39 */}
              <div
                onClick={onNavigateSpeech}
                style={{
                  backgroundColor: '#0d1322',
                  borderRadius: '9px',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', fontWeight: 700, color: '#38bdf8' }}>
                    <Mic size={12} />
                    <span>SPEECH TELEMETRY</span>
                  </div>
                  <span style={{ fontSize: '0.64rem', color: '#38bdf8', fontWeight: 700 }}>#39</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>136 WPM</div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  • 5 Pauses (avg 1.8s duration)<br />
                  • 3 Filler tokens (&ldquo;um&rdquo;, &ldquo;like&rdquo;)<br />
                  • Articulation clarity: 88%
                </div>
                <div style={{ fontSize: '0.64rem', color: '#34d399', fontWeight: 600, marginTop: '2px' }}>
                  Normal conversational tempo
                </div>
              </div>

              {/* Presentation Telemetry #40 */}
              <div
                onClick={onNavigatePresentation}
                style={{
                  backgroundColor: '#0d1322',
                  borderRadius: '9px',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', fontWeight: 700, color: '#c084fc' }}>
                    <Video size={12} />
                    <span>PRESENTATION TELEMETRY</span>
                  </div>
                  <span style={{ fontSize: '0.64rem', color: '#c084fc', fontWeight: 700 }}>#40</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>92% Face Line</div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  • Camera alignment: 84%<br />
                  • 2 Posture micro-shifts<br />
                  • Whiteboard framing: stable
                </div>
                <div style={{ fontSize: '0.64rem', color: '#34d399', fontWeight: 600, marginTop: '2px' }}>
                  Zero obstructive occlusions
                </div>
              </div>

              {/* Communication Telemetry #38 */}
              <div
                onClick={onNavigateCommunication}
                style={{
                  backgroundColor: '#0d1322',
                  borderRadius: '9px',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', fontWeight: 700, color: '#818cf8' }}>
                    <MessageSquare size={12} />
                    <span>COMMUNICATION TELEMETRY</span>
                  </div>
                  <span style={{ fontSize: '0.64rem', color: '#818cf8', fontWeight: 700 }}>#38</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>76% Completeness</div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  • Relevance: 84%<br />
                  • Completeness: 72% (Lagging)<br />
                  • Minto structure adherence: 68%
                </div>
                <div style={{ fontSize: '0.64rem', color: '#f59e0b', fontWeight: 600, marginTop: '2px' }}>
                  Incomplete edge-case proof
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Weighted Rubric Breakdown, Exemplar Architecture, Recommended Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Weighted Rubric Breakdown */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    DETERMINISTIC EVALUATION
                  </div>
                  <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: '2px 0 0 0' }}>
                    Weighted Rubric Breakdown
                  </h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f87171' }}>
                    69.0
                  </div>
                  <div style={{ fontSize: '0.64rem', color: '#64748b' }}>/ 100 PTS</div>
                </div>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '4px' }}>
                Benchmarked: INPREP-L6-04 Staff L6 System Design Benchmark v2.4
              </div>
            </div>

            {/* 5 Rubric Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Technical Accuracy */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Technical Accuracy (25% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>76 / 100 (19.0 pts)</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: '76%', height: '100%', backgroundColor: '#818cf8' }} />
                </div>
              </div>

              {/* Problem Solving & Edge Cases */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Problem Solving &amp; Edge Cases (20% wt)</span>
                  <span style={{ color: '#f87171', fontWeight: 700 }}>64 / 100 (12.8 pts)</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: '64%', height: '100%', backgroundColor: '#ef4444' }} />
                </div>
                <div style={{ fontSize: '0.64rem', color: '#f87171', marginTop: '2px' }}>
                  Sub-threshold: failed to handle NTP clock drift edge
                </div>
              </div>

              {/* Relevance & Completeness */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Relevance &amp; Completeness (20% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>72 / 100 (14.4 pts)</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: '72%', height: '100%', backgroundColor: '#818cf8' }} />
                </div>
              </div>

              {/* Communication Clarity */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Communication Clarity (15% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>70 / 100 (10.5 pts)</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: '70%', height: '100%', backgroundColor: '#38bdf8' }} />
                </div>
              </div>

              {/* Observable Presentation Signals */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Observable Presentation Signals (10% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>82 / 100 (8.2 pts)</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: '82%', height: '100%', backgroundColor: '#34d399' }} />
                </div>
              </div>
            </div>

            {/* Evaluated Skill Vectors */}
            <div>
              <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
                EVALUATED SKILL VECTORS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Distributed Systems', 'Rate Limiting', 'Redis Lua', 'Concurrency Control', 'Microservices'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '2px 8px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      color: '#a5b4fc',
                      fontSize: '0.66rem',
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Exemplar Staff L6 Response Architecture */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} style={{ color: '#38bdf8' }} />
                <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Exemplar Staff L6 Response Architecture
                </h4>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '3px' }}>
                Minto Pyramid structure recommended by vetted L6 interview panel:
              </div>
            </div>

            {/* 5 Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                {
                  step: '1',
                  title: 'Bottom-Line Up Front (BLUF):',
                  desc: 'Propose tiered hybrid limiter (Redis cluster primary + local fallback).',
                },
                {
                  step: '2',
                  title: 'Atomic State Invariants:',
                  desc: 'Single-roundtrip Lua script ensuring atomic decrement & expiry renewal.',
                },
                {
                  step: '3',
                  title: 'Clock Skew & Drift Invariance:',
                  desc: 'Use monotonic Redis server time ("TIME" command) rather than host client clocks.',
                },
                {
                  step: '4',
                  title: 'Quantitative Trade-Off Metric:',
                  desc: 'Compare Redis network IOPS load vs 4MB in-process LRU cache consumption.',
                },
                {
                  step: '5',
                  title: 'Backpressure Contract:',
                  desc: 'HTTP 429 with Decorrelated Jitter formula (sleep = min(cap, random_between(base, sleep * 3))).',
                },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.72rem' }}>
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(99, 102, 241, 0.2)',
                      color: '#a5b4fc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.66rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    {item.step}
                  </span>
                  <div style={{ lineHeight: 1.45 }}>
                    <strong style={{ color: '#f1f5f9' }}>{item.title}</strong>{' '}
                    <span style={{ color: '#94a3b8' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={onDrillSimilar}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 16px',
                background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                border: 'none',
                borderRadius: '9px',
                color: '#ffffff',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.15s ease',
              }}
            >
              <span>Drill Similar Question: Token-Bucket Clock Skew (#42S)</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={onGeneratePlan}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '9px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '9px',
                color: '#e2e8f0',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Sparkles size={13} style={{ color: '#818cf8' }} />
              <span>Generate AI Improvement Plan for Decomposition (#42)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
