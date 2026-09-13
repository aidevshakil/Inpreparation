import React from 'react';
import { FileText, Sliders, Video, ArrowRight } from 'lucide-react';

interface ProfileAnalysisTransparencyCardProps {
  onViewCv?: () => void;
  onEditProfile?: () => void;
  onReviewResponses?: () => void;
}

export const ProfileAnalysisTransparencyCard: React.FC<ProfileAnalysisTransparencyCardProps> = ({
  onViewCv,
  onEditProfile,
  onReviewResponses,
}) => {
  const sources = [
    {
      icon: <FileText size={16} style={{ color: '#10b981' }} />,
      title: 'CV Resume Document',
      badge: 'Uploaded',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeColor: '#34d399',
      badgeBorder: 'rgba(16, 185, 129, 0.3)',
      description: 'Parsed 6 pages, 8 projects, 3 tier-1 tech stacks with AST-driven verification across experience timeline.',
      actionText: 'View CV Details',
      action: onViewCv,
    },
    {
      icon: <Sliders size={16} style={{ color: '#38bdf8' }} />,
      title: 'Profile Preferences',
      badge: 'Direct Input',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      badgeColor: '#38bdf8',
      badgeBorder: 'rgba(56, 189, 248, 0.3)',
      description: 'Explicit technical domain choices, target role seniority aspirations, and preferred mock mode.',
      actionText: 'Edit Profile',
      action: onEditProfile,
    },
    {
      icon: <Video size={16} style={{ color: '#c084fc' }} />,
      title: 'Intro Audio/Video',
      badge: 'Analyzed',
      badgeBg: 'rgba(168, 85, 247, 0.15)',
      badgeColor: '#c084fc',
      badgeBorder: 'rgba(168, 85, 247, 0.3)',
      description: 'Transcribed 8 audio answers, 14m 22s duration, extracted technical depth, pacing, and STAR story nuances.',
      actionText: 'Review Responses',
      action: onReviewResponses,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '6px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Information Source Transparency
        </h3>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            border: '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          3 Sources Validated
        </span>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
        Every assertion is cross-referenced against three distinct telemetry streams to guarantee non-hallucinatory evaluation.
      </p>

      {/* 3 Source Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}
      >
        {sources.map((src, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {src.icon}
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
                    {src.title}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: src.badgeBg,
                    color: src.badgeColor,
                    border: `1px solid ${src.badgeBorder}`,
                  }}
                >
                  {src.badge}
                </span>
              </div>

              <p style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.45, margin: '0 0 12px 0' }}>
                {src.description}
              </p>
            </div>

            <button
              onClick={src.action}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#818cf8',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>{src.actionText}</span>
              <ArrowRight size={11} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
