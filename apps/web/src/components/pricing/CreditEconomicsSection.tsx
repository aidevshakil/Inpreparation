import React from 'react';
import { CreditCard, FileText, Radio, BarChart3, Lightbulb, Info } from 'lucide-react';

export const CreditEconomicsSection: React.FC = () => {
  const creditActions = [
    {
      icon: <FileText size={18} color="#818cf8" />,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      title: 'CV Analysis',
      desc: 'Uses credits when the AI model deep–parses, scores, and indexes your resume experiences against role benchmarks.',
      usage: '~20–40 credits / parse'
    },
    {
      icon: <Radio size={18} color="#38bdf8" />,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      title: 'Career Assessment',
      desc: 'AI processes your 5–minute calibration responses to map baseline competencies and readiness tiers.',
      usage: '~50 credits / session'
    },
    {
      icon: <BarChart3 size={18} color="#c084fc" />,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      title: 'Interview Evaluation',
      desc: 'Simultaneous processing of technical syntax, communication structure, vocal telemetry, and camera framing signals.',
      usage: '~75–100 credits / 5 questions'
    },
    {
      icon: <Lightbulb size={18} color="#f59e0b" />,
      iconBg: 'rgba(245, 158, 11, 0.15)',
      title: 'AI Coaching',
      desc: 'On–demand model inference generating custom STAR response blueprints, rebuttal simulations, and customized drills.',
      usage: '~15–25 credits / blueprint'
    }
  ];

  return (
    <section style={{ padding: '30px 0 70px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '100px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--primary-color)',
            marginBottom: '14px'
          }}>
            <CreditCard size={13} />
            <span>CREDIT ECONOMICS</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            How AI Credits Work
          </h2>

          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '740px',
            margin: 0
          }}>
            Some AI–powered actions use credits based on the amount of processing required. Your available credits are always transparent and visible in your account dashboard.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '24px'
        }}>
          {creditActions.map((act, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: act.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {act.icon}
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {act.title}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {act.desc}
                </p>
              </div>

              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'monospace' }}>
                {act.usage}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Information Callout Banner */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '14px',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <Info size={16} color="var(--primary-color)" style={{ flexShrink: 0 }} />
            <span>
              Your remaining credits are always visible in your account dashboard and refresh automatically on each renewal cycle.
            </span>
          </div>

          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#0284c7',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            ZERO OVERAGES GUARANTEED
          </div>
        </div>

      </div>
    </section>
  );
};
