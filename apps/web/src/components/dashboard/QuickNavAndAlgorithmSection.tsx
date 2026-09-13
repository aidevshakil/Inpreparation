import React from 'react';
import {
  Play,
  BookOpen,
  UploadCloud,
  Compass,
  CalendarCheck,
  CreditCard,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface QuickNavAndAlgorithmSectionProps {
  onStartInterview?: () => void;
  onBrowseLibrary?: () => void;
  onUploadCV?: () => void;
  onCareerBaseline?: () => void;
  onImprovementPlan?: () => void;
  onManageCredits?: () => void;
}

export const QuickNavAndAlgorithmSection: React.FC<QuickNavAndAlgorithmSectionProps> = ({
  onStartInterview,
  onBrowseLibrary,
  onUploadCV,
  onCareerBaseline,
  onImprovementPlan,
  onManageCredits,
}) => {
  const actionTiles = [
    {
      id: 'start',
      title: 'Start Interview',
      subtitle: '5-Question mock',
      icon: Play,
      iconBg: 'rgba(99, 102, 241, 0.15)',
      iconColor: '#818cf8',
      onClick: onStartInterview,
    },
    {
      id: 'browse',
      title: 'Browse Library',
      subtitle: '18+ Tech disciplines',
      icon: BookOpen,
      iconBg: 'rgba(56, 189, 248, 0.15)',
      iconColor: '#38bdf8',
      onClick: onBrowseLibrary,
    },
    {
      id: 'upload_cv',
      title: 'Upload New CV',
      subtitle: 'Sync latest skills',
      icon: UploadCloud,
      iconBg: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#34d399',
      onClick: onUploadCV,
    },
    {
      id: 'baseline',
      title: 'Career Baseline',
      subtitle: 'Diagnostic test',
      icon: Compass,
      iconBg: 'rgba(168, 85, 247, 0.15)',
      iconColor: '#c084fc',
      onClick: onCareerBaseline,
    },
    {
      id: 'plan',
      title: 'Improvement Plan',
      subtitle: 'Tailored study plan',
      icon: CalendarCheck,
      iconBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#fbbf24',
      onClick: onImprovementPlan,
    },
    {
      id: 'credits',
      title: 'Manage Credits',
      subtitle: '78 remaining',
      icon: CreditCard,
      iconBg: 'rgba(244, 63, 94, 0.15)',
      iconColor: '#fb7185',
      onClick: onManageCredits,
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '18px',
        marginBottom: '28px',
      }}
    >
      {/* Left Card: Quick Navigation & Actions */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>
          Quick Navigation &amp; Actions
        </h3>

        {/* 2x3 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '10px',
          }}
        >
          {actionTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <button
                key={tile.id}
                onClick={tile.onClick}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '14px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: tile.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: tile.iconColor,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.2 }}>
                    {tile.title}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '3px' }}>
                    {tile.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Card: How Your Recommendations Form */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              How Your Recommendations Form
            </h3>

            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
              }}
            >
              Algorithm v3.4 Live
            </span>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
            Inprep AI continuously fuses multiple signals to generate your next mock challenge:
          </p>

          {/* Flowchart Steps Pipeline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '14px 10px',
              marginBottom: '16px',
            }}
          >
            {/* Step 1 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>Profile</div>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Title &amp; Goals</div>
            </div>

            <ArrowRight size={14} style={{ color: '#475569', flexShrink: 0 }} />

            {/* Step 2 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>CV Analysis</div>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Skill Graph</div>
            </div>

            <ArrowRight size={14} style={{ color: '#475569', flexShrink: 0 }} />

            {/* Step 3 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>5-Q Practice</div>
              <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Telemetry</div>
            </div>

            <ArrowRight size={14} style={{ color: '#475569', flexShrink: 0 }} />

            {/* Step 4 */}
            <div
              style={{
                textAlign: 'center',
                flex: 1,
                padding: '4px 6px',
                borderRadius: '8px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#34d399' }}>Next Drill</div>
              <div style={{ fontSize: '0.65rem', color: '#10b981' }}>Calibrated</div>
            </div>
          </div>
        </div>

        {/* Ethics & Privacy Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            padding: '10px 12px',
            backgroundColor: 'rgba(99, 102, 241, 0.05)',
            border: '1px solid rgba(99, 102, 241, 0.15)',
            borderRadius: '10px',
            fontSize: '0.71rem',
            color: '#94a3b8',
            lineHeight: 1.45,
          }}
        >
          <ShieldCheck size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Predictions strictly derive from observable technical outputs, score items, speech pacing, and camera framing hygiene. Zero-retention detection or psychological claims.
          </span>
        </div>
      </div>
    </div>
  );
};
