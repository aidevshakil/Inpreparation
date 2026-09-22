import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ComparePlansMatrix: React.FC = () => {
  const sections = [
    {
      category: 'PROFILE & ONBOARDING',
      rows: [
        {
          feature: 'Professional Candidate Profile',
          free: true,
          pro: true,
          premium: true
        },
        {
          feature: 'Manual Profile Builder',
          free: true,
          pro: true,
          premium: true
        },
        {
          feature: 'CV & Resume Parsing Upload',
          free: '1 Resume',
          pro: 'Up to 5 Versions',
          proHighlight: true,
          premium: 'Unlimited'
        }
      ]
    },
    {
      category: 'AI CAREER INTELLIGENCE',
      rows: [
        {
          feature: 'Automated CV Skill Gap Analysis',
          free: 'Basic Summary',
          pro: 'Granular Matrix',
          proHighlight: true,
          premium: 'Executive Deep–Dive'
        },
        {
          feature: '5–Minute Career Calibration Assessment',
          free: 'Single Baseline',
          pro: 'Periodic Calibration',
          premium: 'Continuous Dynamic'
        },
        {
          feature: 'Target Role Match Index',
          free: false,
          pro: true,
          premium: true
        }
      ]
    },
    {
      category: 'SIMULATION & PRACTICE',
      rows: [
        {
          feature: 'Interview Track Library',
          free: 'Foundational (5 Tracks)',
          pro: 'Full Access (100+ Tracks)',
          proHighlight: true,
          premium: 'All Tracks + Custom Track Builder'
        },
        {
          feature: 'Adaptive Difficulty Tiers',
          free: 'Entry Only',
          pro: 'Mid, Senior, Staff',
          premium: 'Senior, Principal, VP/Exec'
        },
        {
          feature: 'Dynamic Interview Retakes',
          free: 'Limited',
          pro: 'Standard Retakes',
          premium: 'Unlimited Adaptive Retakes'
        }
      ]
    },
    {
      category: 'AI EVALUATION & DIAGNOSTICS',
      rows: [
        {
          feature: 'Technical Accuracy Breakdown',
          free: 'Pass / Fail',
          pro: 'Rubric & Code Syntax',
          proHighlight: true,
          premium: 'Architecture Trade–off Analysis'
        },
        {
          feature: 'STAR Framework Scoring',
          free: false,
          pro: true,
          premium: true
        },
        {
          feature: 'Speech & Vocal Cadence (WPM, Fillers)',
          free: false,
          pro: true,
          premium: true
        },
        {
          feature: 'Presentation Signals (Framing, Lighting)',
          free: false,
          pro: true,
          premium: true
        }
      ]
    },
    {
      category: 'IMPROVEMENT & COACHING',
      rows: [
        {
          feature: 'AI Suggested Answer Blueprints',
          free: false,
          pro: true,
          premium: true
        },
        {
          feature: 'Personalized Actionable Next Drills',
          free: false,
          pro: true,
          premium: true
        },
        {
          feature: 'Historical Telemetry Retention',
          free: '7 Days',
          pro: '12 Months',
          proHighlight: true,
          premium: 'Unlimited Lifelong'
        }
      ]
    },
    {
      category: 'MONTHLY USAGE & INFRASTRUCTURE',
      rows: [
        {
          feature: 'Monthly Included AI Credits',
          free: '100 credits',
          pro: '1,000 credits',
          proHighlight: true,
          premium: '3,000 credits'
        },
        {
          feature: 'Option to Buy Credit Add–On Packs',
          free: true,
          pro: true,
          premium: true
        },
        {
          feature: 'Inference Queue Priority',
          free: 'Standard',
          pro: 'Priority Queue',
          premium: 'Dedicated GPU Cluster',
          premiumCyan: true
        },
        {
          feature: 'Support SLA',
          free: 'Community / Docs',
          pro: 'Standard Email',
          premium: 'Priority 1:1 Executive Support',
          premiumCyan: true
        }
      ]
    }
  ];

  const renderCell = (val: string | boolean, isProColumn = false, isProHighlight = false, isCyan = false) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <Check
            size={16}
            color={isProColumn ? 'var(--primary-color)' : '#0284c7'}
            style={{ margin: '0 auto', display: 'block' }}
          />
        );
      }
      return (
        <Minus
          size={14}
          color="var(--text-muted)"
          style={{ margin: '0 auto', display: 'block' }}
        />
      );
    }
    return (
      <span style={{
        fontSize: '13px',
        color: isCyan ? '#0284c7' : isProHighlight ? 'var(--primary-color)' : isProColumn ? 'var(--text-main)' : 'var(--text-secondary)',
        fontWeight: isCyan || isProHighlight ? 700 : isProColumn ? 600 : 400
      }}>
        {val}
      </span>
    );
  };

  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0284c7',
            marginBottom: '10px'
          }}>
            GRANULAR MATRIX
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            Compare Plans
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            margin: 0
          }}>
            Review every capability across our profile, practice, diagnostic, and support vectors.
          </p>
        </div>

        {/* Matrix Table Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '780px'
            }}>
              <thead>
                <tr style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
                  <th style={{ padding: '22px 28px', fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', width: '40%' }}>
                    Feature Category
                  </th>
                  <th style={{ padding: '22px 20px', fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center', width: '20%' }}>
                    Free
                  </th>
                  <th style={{
                    padding: '22px 20px',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--primary-color)',
                    textAlign: 'center',
                    background: 'rgba(99, 102, 241, 0.08)',
                    borderLeft: '1px solid var(--border-subtle)',
                    borderRight: '1px solid var(--border-subtle)',
                    width: '20%'
                  }}>
                    Pro Plan
                  </th>
                  <th style={{ padding: '22px 20px', fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center', width: '20%' }}>
                    Premium
                  </th>
                </tr>
              </thead>

              <tbody>
                {sections.map((sec, sIdx) => (
                  <React.Fragment key={sIdx}>
                    {/* Category Title Row */}
                    <tr style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
                      <td
                        colSpan={4}
                        style={{
                          padding: '12px 28px',
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#0284c7',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {sec.category}
                      </td>
                    </tr>

                    {/* Feature Rows */}
                    {sec.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        style={{
                          borderBottom: '1px solid var(--border-subtle)',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--bg-card-hover)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <td style={{ padding: '16px 28px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: 500 }}>
                          {row.feature}
                        </td>
                        <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                          {renderCell(row.free)}
                        </td>
                        <td style={{
                          padding: '16px 20px',
                          textAlign: 'center',
                          background: 'rgba(99, 102, 241, 0.04)',
                          borderLeft: '1px solid var(--border-subtle)',
                          borderRight: '1px solid var(--border-subtle)'
                        }}>
                          {renderCell(row.pro, true, (row as any).proHighlight)}
                        </td>
                        <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                          {renderCell(row.premium, false, false, (row as any).premiumCyan)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
