import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonTableSection: React.FC = () => {
  const comparisons = [
    {
      feature: 'Real-time Conversational Voice (<300ms Latency)',
      inprep: true,
      generic: false,
      human: true,
      notes: 'Natural back-and-forth speech cadence with zero typing lag'
    },
    {
      feature: 'Computer Vision Body Language & Eye Contact Tracking',
      inprep: true,
      generic: false,
      human: 'Subjective',
      notes: 'Precise gaze calibration, nervousness detection, posture analysis'
    },
    {
      feature: 'Dynamic Contextual Follow-up Questions',
      inprep: true,
      generic: 'Limited',
      human: true,
      notes: 'AI probes deeper into architectural trade-offs when answers are vague'
    },
    {
      feature: 'Instant Multi-Dimensional Diagnostic Scorecard',
      inprep: true,
      generic: false,
      human: 'Delayed (24h+)',
      notes: 'Sub-second breakdown with STAR analysis, WPM pacing, and model answers'
    },
    {
      feature: 'Custom Job Description & Resume Calibration',
      inprep: true,
      generic: true,
      human: false,
      notes: 'Target specific company requirements and role seniority levels'
    },
    {
      feature: '24/7 Unlimited Practice On-Demand',
      inprep: true,
      generic: true,
      human: false,
      notes: 'Practice at midnight before your big interview with zero scheduling'
    },
    {
      feature: 'Average Cost per Full Mock Session',
      inprep: '$0 – $1.50 / session',
      generic: 'Text Only',
      human: '$150 – $250 / hour',
      isCost: true
    }
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span className="badge-pill badge-purple" style={{ marginBottom: '14px' }}>
            WHY WE ARE DIFFERENT
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            Architected Differently From Generic Chatbots
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7 }}>
            Built from the ground up for authentic interview pressure, conversational voice synthesis, and multi-modal assessment.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div style={{
          background: '#0d121c',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          overflowX: 'auto',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ background: '#131927', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <th style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '14px', fontWeight: 600, width: '40%' }}>
                  Features & Capabilities
                </th>
                <th style={{
                  padding: '20px 24px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 800,
                  background: 'rgba(99, 102, 241, 0.15)',
                  borderLeft: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRight: '1px solid rgba(99, 102, 241, 0.3)',
                  width: '25%'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} color="#818cf8" />
                    <span>InPrep AI</span>
                  </div>
                </th>
                <th style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '14px', fontWeight: 600, width: '18%' }}>
                  Generic ChatGPT
                </th>
                <th style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '14px', fontWeight: 600, width: '17%' }}>
                  Human Mocks
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)'
                  }}
                >
                  <td style={{ padding: '18px 24px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>
                      {row.feature}
                    </div>
                    {row.notes && (
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                        {row.notes}
                      </div>
                    )}
                  </td>

                  {/* InPrep Column (Highlighted) */}
                  <td style={{
                    padding: '18px 24px',
                    background: 'rgba(99, 102, 241, 0.06)',
                    borderLeft: '1px solid rgba(99, 102, 241, 0.2)',
                    borderRight: '1px solid rgba(99, 102, 241, 0.2)'
                  }}>
                    {typeof row.inprep === 'boolean' ? (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: 700, fontSize: '13px' }}>
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={14} color="#10b981" />
                        </div>
                        <span>Included</span>
                      </div>
                    ) : (
                      <span style={{ fontSize: '14px', fontWeight: 800, color: '#67e8f9' }}>{row.inprep}</span>
                    )}
                  </td>

                  {/* Generic Chatbot Column */}
                  <td style={{ padding: '18px 24px' }}>
                    {typeof row.generic === 'boolean' ? (
                      row.generic ? (
                        <Check size={18} color="#94a3b8" />
                      ) : (
                        <X size={18} color="#64748b" />
                      )
                    ) : (
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>{row.generic}</span>
                    )}
                  </td>

                  {/* Human Mocks Column */}
                  <td style={{ padding: '18px 24px' }}>
                    {typeof row.human === 'boolean' ? (
                      row.human ? (
                        <Check size={18} color="#94a3b8" />
                      ) : (
                        <X size={18} color="#64748b" />
                      )
                    ) : (
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>{row.human}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
