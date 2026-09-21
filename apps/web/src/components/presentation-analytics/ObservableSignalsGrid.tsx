import React from 'react';
import { Smile, Crosshair, UserCheck, SunMedium } from 'lucide-react';

export const ObservableSignalsGrid: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Observable Presentation Signal Breakdown
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '3px 0 0 0' }}>
            Deterministic physical camera measurements extracted frame-by-frame
          </p>
        </div>

        <span
          style={{
            padding: '3px 8px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#94a3b8',
            fontSize: '0.68rem',
            fontWeight: 600,
          }}
        >
          Zero Psychological Inferences
        </span>
      </div>

      {/* 4 Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
        }}
      >
        {/* Card 1: Face Visibility Ratio */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Smile size={16} style={{ color: '#38bdf8' }} />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#ffffff' }}>
                  Face Visibility Ratio
                </span>
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8' }}>
                94.8%
              </span>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: '6px 0 0 0', lineHeight: 1.4 }}>
              Unobstructed visual facial bounding box over interview duration.
            </p>
          </div>

          <div>
            {/* Segmented bar */}
            <div
              style={{
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '9999px',
                overflow: 'hidden',
                display: 'flex',
                gap: '2px',
                marginBottom: '6px',
              }}
            >
              <div style={{ width: '94.8%', backgroundColor: '#38bdf8' }} />
              <div style={{ width: '4.1%', backgroundColor: '#a855f7' }} />
              <div style={{ width: '1.1%', backgroundColor: '#475569' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.64rem', color: '#94a3b8' }}>
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>94.8% Fully Visible</span>
              <span>4.1% Partial/Hand</span>
              <span>1.1% Out</span>
            </div>
          </div>

          <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.68rem', color: '#64748b' }}>
            Visible: <strong style={{ color: '#cbd5e1' }}>22m 14s</strong> sample: 20 Qs
          </div>
        </div>

        {/* Card 2: Camera & Head Alignment */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Crosshair size={16} style={{ color: '#34d399' }} />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#ffffff' }}>
                  Camera &amp; Head Alignment
                </span>
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399' }}>
                88.4%
              </span>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: '6px 0 0 0', lineHeight: 1.4 }}>
              Head orientation aligned within ±15° of primary optical sensor cone.
            </p>
          </div>

          {/* Deviation chips */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ padding: '6px 10px', backgroundColor: '#090d18', borderRadius: '7px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Horiz. Dev</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>3.2°</div>
            </div>
            <div style={{ padding: '6px 10px', backgroundColor: '#090d18', borderRadius: '7px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Vert. Tilt</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>4.1°</div>
            </div>
          </div>

          <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.68rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
            <span>0° Extreme Pitch</span>
            <span style={{ color: '#34d399', fontWeight: 600 }}>Axis: Calibrated</span>
          </div>
        </div>

        {/* Card 3: Upper-Body Stability */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UserCheck size={16} style={{ color: '#c084fc' }} />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#ffffff' }}>
                  Upper-Body Stability
                </span>
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#c084fc' }}>
                91.2%
              </span>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: '6px 0 0 0', lineHeight: 1.4 }}>
              Absence of excessive lateral sway or sudden frame departures.
            </p>
          </div>

          <div>
            <div
              style={{
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '9999px',
                overflow: 'hidden',
                marginBottom: '6px',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: '91.2%',
                  background: 'linear-gradient(90deg, #a855f7, #c084fc)',
                  borderRadius: '9999px',
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.64rem', color: '#94a3b8' }}>
              <span style={{ color: '#c084fc', fontWeight: 600 }}>Stable Upper Quadrant</span>
              <span>Low Sway</span>
            </div>
          </div>

          <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.68rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
            <span>2 Minor Re-positions</span>
            <span>Duration: 13s</span>
          </div>
        </div>

        {/* Card 4: Lighting & Exposure (Lux) */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SunMedium size={16} style={{ color: '#f59e0b' }} />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#ffffff' }}>
                  Lighting &amp; Exposure (Lux)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f59e0b' }}>88.5</span>
                <span style={{ fontSize: '0.7rem', color: '#64748b' }}>/ 100</span>
              </div>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: '6px 0 0 0', lineHeight: 1.4 }}>
              Adequate frontal light; minimal backlighting blowout.
            </p>
          </div>

          {/* Metric chips */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ padding: '6px 10px', backgroundColor: '#090d18', borderRadius: '7px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Contrast</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>78.2%</div>
            </div>
            <div style={{ padding: '6px 10px', backgroundColor: '#090d18', borderRadius: '7px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Backlight</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#34d399', marginTop: '2px' }}>Low</div>
            </div>
          </div>

          <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.68rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#cbd5e1' }}>Clear Foreground Sep</span>
            <span style={{ color: '#f59e0b', fontWeight: 600 }}>Lux: Optimal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
