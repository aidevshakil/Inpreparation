import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const ModelAnswerSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const recommendedText = `1. High-Level Definition: "Synchronous execution is blocking; asynchronous execution yields control while awaiting high-latency operations."
2. Mechanism: "Python achieves this via the single-threaded asyncio event loop, registering coroutines rather than spinning OS-level threads."
3. Workload Distinction: "Asyncio is ideal for I/O-bound workloads (HTTP, database calls), whereas CPU-bound operations require multiprocessing to bypass Python's GIL."
4. Production Example: "In our microservice, switching from synchronous requests to httpx with asyncio cut p99 latency from 420ms to 65ms."`;

  const handleCopy = () => {
    navigator.clipboard.writeText(recommendedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="model-answers" style={{ padding: '80px 0 100px', position: 'relative' }}>
      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 52px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#818cf8',
            display: 'block',
            marginBottom: '14px'
          }}>
            COMPARATIVE LEARNING
          </span>

          <h2 style={{
            fontSize: 'clamp(30px, 4.2vw, 46px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '16px'
          }}>
            Don’t Just See the Score. Learn How to Improve.
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Inprep AI restructures your actual recorded answer into an executive-ready, 5-part architecture framework.
          </p>
        </div>

        {/* 2 Comparison Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {/* Left Card: Your Transcribed Answer */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.25s ease'
          }} className="glow-card-hover">
            <div>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  padding: '4px 12px',
                  borderRadius: '9999px'
                }}>
                  Your Transcribed Answer
                </span>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#f87171'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f87171' }} />
                  3 Filler Clusters Detected
                </span>
              </div>

              {/* Transcribed text in quotes */}
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: '28px'
              }}>
                “Uh, so synchronous is basically when one task blocks the thread until it finishes. Like, if you do a database query, nothing else runs. But asynchronous... in Python you use asyncio, which runs on an event loop and frees up the single thread to handle other I/O operations while waiting.”
              </p>
            </div>

            {/* Critique Details Box */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '14px 16px',
              fontSize: '12px',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div>• Cadence: <strong style={{ color: 'var(--text-main)' }}>118 WPM</strong> (Slight hesitation at start)</div>
              <div>• Missing: <strong style={{ color: '#f87171' }}>Explicit mention of CPU vs I/O bound bottlenecks</strong></div>
            </div>
          </div>

          {/* Right Card: AI Recommended Structure */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--primary-color)',
            borderRadius: '20px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.25s ease'
          }} className="glow-card-hover">
            <div>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#a5b4fc',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '9999px'
                }}>
                  AI Recommended Structure
                </span>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#34d399'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px #34d399' }} />
                  Executive Clarity Score: 98
                </span>
              </div>

              {/* 4-Part Structured Explanation */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '24px'
              }}>
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>1. High–Level Definition:</strong> “Synchronous execution is blocking; asynchronous execution yields control while awaiting high–latency operations.”
                </div>

                <div>
                  <strong style={{ color: 'var(--text-main)' }}>2. Mechanism:</strong> “Python achieves this via the single–threaded asyncio event loop, registering coroutines rather than spinning OS–level threads.”
                </div>

                <div>
                  <strong style={{ color: 'var(--text-main)' }}>3. Workload Distinction:</strong> “Asyncio is ideal for I/O–bound workloads (HTTP, database calls), whereas CPU–bound operations require multiprocessing to bypass Python’s GIL.”
                </div>

                <div>
                  <strong style={{ color: 'var(--text-main)' }}>4. Production Example:</strong> “In our microservice, switching from synchronous requests to httpx with asyncio cut p99 latency from 420ms to 65ms.”
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '12px'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>
                Framework: <span style={{ color: 'var(--text-secondary)' }}>Concept → Mechanism → Workload → Concrete Result</span>
              </span>

              <button
                onClick={handleCopy}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: copied ? '#34d399' : '#a5b4fc',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  transition: 'color 0.2s ease'
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'Copied!' : 'Copy Structure'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
