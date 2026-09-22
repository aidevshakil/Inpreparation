import React from 'react';
import { Code2, MessageSquare, Mic, Scan, Shield } from 'lucide-react';

export const AiAnalysisMatrix: React.FC = () => {
  const dimensions = [
    {
      id: 'technical',
      icon: <Code2 size={18} color="#a5b4fc" />,
      title: '1. Technical Evaluation',
      desc: 'Goes beyond surface keywords. Evaluates architectural trade-offs, failover considerations, Big-O bounds, and system robustness in response to real-world edge cases.',
      metrics: [
        { label: 'Algorithmic Complexity & Correctness', value: '92% Precision', color: 'var(--text-main)' },
        { label: 'Trade-Off Articulation', value: '86% Benchmark', color: 'var(--text-main)' }
      ]
    },
    {
      id: 'communication',
      icon: <MessageSquare size={18} color="#c084fc" />,
      title: '2. Communication Analysis',
      desc: 'Audits your response hierarchy. Measures conciseness, structured progression (Situation → Metric → Outcome), and whether your answer directly addresses the interviewer\'s constraint.',
      metrics: [
        { label: 'Structured Causal Progression', value: 'High (STAR)', color: 'var(--text-main)' },
        { label: 'Direct Question Relevance', value: '94% Aligned', color: 'var(--text-main)' }
      ]
    },
    {
      id: 'speech',
      icon: <Mic size={18} color="#38bdf8" />,
      title: '3. Speech & Acoustic Analysis',
      desc: 'Tracks pitch stability, syllable rhythm, prolonged silence spikes (>2.5s), and filler word frequency (e.g. \'like\', \'basically\', \'um\') with timestamp markers.',
      metrics: [
        { label: 'Pacing Stability', value: '138 WPM (Optimal)', color: '#38bdf8' },
        { label: 'Filler Density', value: '1.2% (Low Cluster)', color: '#38bdf8' }
      ]
    },
    {
      id: 'presentation',
      icon: <Scan size={18} color="#34d399" />,
      title: '4. Presentation via Computer Vision',
      desc: 'Analyzes strictly physical setup variables: head centering, camera distance, ambient illumination uniformity, and posture drift during technical explanations.',
      metrics: [
        { label: 'Camera Framing & Distance', value: '96% Centered', color: '#34d399' },
        { label: 'Lighting Differential', value: 'Balanced Contrast', color: '#34d399' }
      ]
    }
  ];

  return (
    <section id="analysis" style={{ padding: '70px 0 80px', position: 'relative' }}>
      <div className="container">
        {/* Left-Aligned Header */}
        <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            display: 'block',
            marginBottom: '12px'
          }}>
            RIGOROUS MULTIMODAL DIAGNOSTICS
          </span>

          <h2 style={{
            fontSize: 'clamp(30px, 4.4vw, 46px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '16px'
          }}>
            AI Evaluates More Than Your Answers
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: 0
          }}>
            Our four-pillar multimodal diagnostic engine scans every vector of your performance with millisecond precision.
          </p>
        </div>

        {/* 2x2 Grid of Large Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '20px',
          marginBottom: '36px'
        }}>
          {dimensions.map((dim) => (
            <div
              key={dim.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.25s ease'
              }}
              className="glow-card-hover"
            >
              <div>
                {/* Icon box */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}>
                  {dim.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '12px',
                  letterSpacing: '-0.015em'
                }}>
                  {dim.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '26px'
                }}>
                  {dim.desc}
                </p>
              </div>

              {/* Metrics Rows */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                {dim.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '13px'
                    }}
                  >
                    <span style={{ color: 'var(--text-secondary)' }}>{m.label}</span>
                    <span style={{ color: m.color, fontWeight: 700 }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Responsible AI Transparency Notice Banner */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'center',
          backdropFilter: 'blur(16px)'
        }}>
          {/* Left: Webcam Calibration View */}
          <div style={{
            position: 'relative',
            height: '210px',
            borderRadius: '14px',
            overflow: 'hidden',
            background: 'var(--bg-surface)',
            border: '1px solid rgba(6, 182, 212, 0.3)'
          }}>
            <img
              src="/candidate_alex.jpg"
              alt="Candidate Calibration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.9)'
              }}
            />

            {/* Facial bounding box overlay */}
            <div style={{
              position: 'absolute',
              top: '25%',
              left: '38%',
              width: '24%',
              height: '38%',
              border: '2px solid #34d399',
              borderRadius: '8px',
              boxShadow: '0 0 12px rgba(52, 211, 153, 0.4)'
            }} />

            {/* Top-Left Tag */}
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: 'rgba(9, 13, 22, 0.85)',
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '10px',
              fontWeight: 700,
              color: '#38bdf8'
            }}>
              Face Centered: 96%
            </div>

            {/* Bottom-Left & Bottom-Right Tags */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              background: 'rgba(9, 13, 22, 0.85)',
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '10px',
              color: '#34d399',
              fontWeight: 600
            }}>
              Lighting Contrast: Optimal
            </div>

            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              background: 'rgba(9, 13, 22, 0.85)',
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '10px',
              color: '#cbd5e1',
              fontWeight: 600
            }}>
              Angle: Eye-Level
            </div>
          </div>

          {/* Right: Transparency Copy */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#a5b4fc',
              marginBottom: '10px'
            }}>
              <Shield size={14} color="#818cf8" />
              <span>RESPONSIBLE AI TRANSPARENCY NOTICE</span>
            </div>

            <h3 style={{
              fontSize: '22px',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.02em',
              marginBottom: '10px',
              lineHeight: 1.25
            }}>
              Objective Presentation Analysis. Nothing Else.
            </h3>

            <p style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '18px'
            }}>
              Our presentation diagnostic focuses strictly on objective, observable setup metrics (webcam positioning, eye level, illumination balance, and video framing).
            </p>

            {/* Ethical Guarantee Callout */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              padding: '12px 14px',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              lineHeight: 1.55
            }}>
              <strong style={{ color: 'var(--text-main)' }}>• Ethical AI Guarantee:</strong> Inprep AI does <span style={{ textDecoration: 'underline' }}>not</span> infer, evaluate, or score candidate personality, emotion, intelligence, honesty, psychological traits, or mental state.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
