import React from 'react';
import {
  Laptop,
  SunMedium,
  MoveHorizontal,
  Square,
  Sparkles,
} from 'lucide-react';

export const StudioRecommendationsCards: React.FC = () => {
  const recommendations = [
    {
      title: 'Camera at Eye Level',
      icon: Laptop,
      iconColor: '#38bdf8',
      description:
        'Elevate laptop stand 2–3 inches to keep gaze aligned horizontally with interviewers without neck strain.',
    },
    {
      title: 'Key Light in Front',
      icon: SunMedium,
      iconColor: '#f59e0b',
      description:
        'Position primary desk illumination directly behind or above your screen to eliminate dark facial shadowing.',
    },
    {
      title: '2-Foot Sensor Distance',
      icon: MoveHorizontal,
      iconColor: '#c084fc',
      description:
        'Maintain approximately arm’s length (20–28 inches) for standard chest-up proportions without wide-angle distortion.',
    },
    {
      title: 'Solid Neutral Background',
      icon: Square,
      iconColor: '#34d399',
      description:
        'Minimize bright rear windows or chaotic background movements to optimize video encoding and focus.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sparkles size={16} style={{ color: '#c084fc' }} />
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
          PHYSICAL STUDIO RECOMMENDATIONS
        </h3>
      </div>

      {/* 4 Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '14px',
        }}
      >
        {recommendations.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              style={{
                backgroundColor: '#0d1322',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '7px',
                    backgroundColor: `${item.iconColor}15`,
                    border: `1px solid ${item.iconColor}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} style={{ color: item.iconColor }} />
                </div>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
                  {item.title}
                </h4>
              </div>

              <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
