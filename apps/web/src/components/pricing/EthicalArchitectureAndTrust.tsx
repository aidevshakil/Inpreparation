import React from 'react';
import {
  ShieldCheck,
  Lock,
  XCircle,
  Repeat,
  Receipt,
  TrendingUp,
  Shield,
  Ban
} from 'lucide-react';

export const EthicalArchitectureAndTrust: React.FC = () => {
  const trustBadges = [
    {
      icon: <XCircle size={18} color="#818cf8" />,
      title: 'Cancel Anytime',
      subtitle: '1–click in account'
    },
    {
      icon: <Repeat size={18} color="#38bdf8" />,
      title: 'Seamless Switch',
      subtitle: 'Prorated instantly'
    },
    {
      icon: <Receipt size={18} color="#c084fc" />,
      title: 'Full Invoicing',
      subtitle: 'Download anytime'
    },
    {
      icon: <TrendingUp size={18} color="#10b981" />,
      title: 'Live Credits HUD',
      subtitle: 'Zero surprise bills'
    },
    {
      icon: <Shield size={18} color="#38bdf8" />,
      title: '256–Bit SSL',
      subtitle: 'Tier–1 banking grade'
    },
    {
      icon: <Ban size={18} color="#f43f5e" />,
      title: 'No Hidden Fees',
      subtitle: 'Exact price you see'
    }
  ];

  return (
    <section style={{ padding: '20px 0 60px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* ========================================================
            ETHICAL AI ARCHITECTURE CARD
        ======================================================== */}
        <div style={{
          background: '#090d16',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '36px 40px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}>
            
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#38bdf8',
                marginBottom: '16px'
              }}>
                <ShieldCheck size={13} />
                <span>ETHICAL AI ARCHITECTURE</span>
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                Responsible Presentation Analysis
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '22px'
              }}>
                Our presentation analysis uses lightweight computer vision solely for objective ergonomic coaching: verifying face visibility, head orientation toward the display, head-and-shoulders framing, and ambient lighting quality.
              </p>

              {/* Explicit Guardrails Note */}
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#f59e0b',
                  marginBottom: '6px'
                }}>
                  WHAT WE EXPLICITLY DO NOT DO:
                </div>
                <p style={{
                  fontSize: '13px',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Inprep AI does not attempt to evaluate emotional authenticity, personality archetypes, psychological traits, honesty, or attractiveness. Our vision diagnostics exist entirely to help candidates look sharp and professional on standard remote video calls.
                </p>
              </div>
            </div>

            {/* Right Card: Zero Biometric Storage */}
            <div style={{
              background: '#0e1320',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '18px',
              padding: '28px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '14px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Lock size={16} color="#38bdf8" />
                </div>
                <span>Zero Biometric Storage</span>
              </div>

              <p style={{
                fontSize: '13px',
                color: '#94a3b8',
                lineHeight: 1.6,
                margin: 0
              }}>
                Video frames are processed ephemeral–only in local memory buffers. No biometric facial models are recorded or stored on disk.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================
            6 TRUST & ASSURANCE BADGES
        ======================================================== */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '14px'
        }}>
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '14px',
                padding: '18px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>{badge.icon}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  {badge.title}
                </div>
                <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
