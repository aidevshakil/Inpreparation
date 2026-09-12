import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

interface TransparencyBannerProps {
  onReadStandard?: () => void;
}

export const TransparencyBanner: React.FC<TransparencyBannerProps> = ({
  onReadStandard
}) => {
  return (
    <section style={{ padding: '0 0 50px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{
          background: '#090d16',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          {/* Left Icon & Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '280px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Shield size={20} color="#38bdf8" />
            </div>

            <div style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.55 }}>
              <span style={{ fontWeight: 700, color: '#ffffff', marginRight: '6px' }}>
                Presentation Feedback Uses Observable Signals
              </span>
              Inprep AI analyzes observable camera and speech signals (face visibility, lighting balance, eye-level framing, and pacing cadence). <span style={{ color: '#cbd5e1', fontWeight: 600 }}>We strictly do not assess personality, emotion, intelligence, honesty, attractiveness, or psychological traits.</span>
            </div>
          </div>

          {/* Right Action Link */}
          <button
            onClick={() => onReadStandard && onReadStandard()}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#38bdf8',
              fontSize: '13px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              padding: '6px 10px',
              borderRadius: '8px',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#7dd3fc';
              e.currentTarget.style.background = 'rgba(56, 189, 248, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#38bdf8';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <span>Read Transparency Standard</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
