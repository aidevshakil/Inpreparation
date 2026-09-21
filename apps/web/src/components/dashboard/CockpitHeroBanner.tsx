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
    <section className="flex flex-wrap items-start justify-between gap-6" style={{ padding: '32px 0 24px 0' }}>
      <div className="flex-col gap-3" style={{ maxWidth: '720px' }}>
        {/* Breadcrumb Tags */}
        <div className="flex items-center gap-2 text-muted" style={{ fontSize: '13px' }}>
          <span className="badge" style={{ backgroundColor: 'var(--bg-surface)' }}>
            Candidate Cockpit
          </span>
          <span>•</span>
          <span>
            Target Role: <strong style={{ color: 'var(--text-main)' }}>{targetRole}</strong>
          </span>
        </div>

        {/* Welcome Headline */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, margin: 0 }}>
          Welcome back, {userName} 👋
        </h1>

        {/* Dynamic Context / Calibrated Drill Description */}
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '660px', margin: 0 }}>
          Ready to improve your interview performance today? Your next calibrated drill focuses on{' '}
          <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>{focusArea}</strong>.
        </p>
      </div>

      {/* Hero Action Buttons */}
      <div className="flex items-center gap-3 self-center">
        <button onClick={onStartInterview} className="btn btn-primary">
          <Play size={16} fill="currentColor" />
          <span>Start an Interview</span>
        </button>

        <button onClick={onViewRecommendations} className="btn btn-outline">
          <Sparkles size={16} />
          <span>View recommendations</span>
        </button>
      </div>
    </section>
  );
};
