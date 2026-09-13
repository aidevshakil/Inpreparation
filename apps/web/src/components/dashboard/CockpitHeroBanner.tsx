import React from 'react';
import { Play, Sparkles } from 'lucide-react';

interface CockpitHeroBannerProps {
  userName?: string;
  targetRole?: string;
  focusArea?: string;
  onStartInterview?: () => void;
  onViewRecommendations?: () => void;
}

export const CockpitHeroBanner: React.FC<CockpitHeroBannerProps> = ({
  userName = 'Shakil',
  targetRole = 'Senior Backend Engineer',
  focusArea = 'system concurrency & distributed state',
  onStartInterview,
  onViewRecommendations,
}) => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '24px 0 16px 0',
      }}
    >
      <div style={{ maxWidth: '720px' }}>
        {/* Breadcrumb Tags */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.75rem',
            color: '#94a3b8',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              padding: '3px 10px',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: '9999px',
              color: '#a5b4fc',
              fontWeight: 600,
              letterSpacing: '0.2px',
            }}
          >
            Candidate Cockpit
          </span>
          <span style={{ color: '#475569' }}>•</span>
          <span style={{ color: '#cbd5e1', fontWeight: 500 }}>
            Target Role: <strong style={{ color: '#f8fafc' }}>{targetRole}</strong>
          </span>
        </div>

        {/* Welcome Headline */}
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '10px',
          }}
        >
          Welcome back, {userName} 👋
        </h1>

        {/* Dynamic Context / Calibrated Drill Description */}
        <p
          style={{
            fontSize: '0.92rem',
            color: '#94a3b8',
            lineHeight: 1.55,
            maxWidth: '660px',
          }}
        >
          Ready to improve your interview performance today? Your next calibrated drill focuses on{' '}
          <strong style={{ color: '#c7d2fe', fontWeight: 600 }}>{focusArea}</strong>.
        </p>
      </div>

      {/* Hero Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', alignSelf: 'center' }}>
        <button
          onClick={onStartInterview}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            padding: '11px 22px',
            background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '0.86rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(124, 58, 237, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 26px rgba(124, 58, 237, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.45)';
          }}
        >
          <Play size={16} fill="#ffffff" />
          <span>Start an Interview</span>
        </button>

        <button
          onClick={onViewRecommendations}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '11px 18px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            color: '#cbd5e1',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            fontSize: '0.86rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#cbd5e1';
          }}
        >
          <Sparkles size={15} style={{ color: '#818cf8' }} />
          <span>View recommendations</span>
        </button>
      </div>
    </section>
  );
};
