import React from 'react';

interface SegmentTrack {
  title: string;
  focusBadge: string;
  rate: string;
  avgLength: string;
  fillers: string;
  note: string;
  meterPercent: number;
}

export const SpeechSegmentedTelemetry: React.FC = () => {
  const tracks: SegmentTrack[] = [
    {
      title: 'Backend & Concurrency',
      focusBadge: 'Staff L6+ Focus • 10 Spoken',
      rate: '139 WPM',
      avgLength: '1m 28s',
      fillers: '1.1%',
      note: '92% cadence consistency across multiprocessing defenses',
      meterPercent: 92,
    },
    {
      title: 'Distributed Systems',
      focusBadge: 'Staff L6+ Focus • 10 Spoken',
      rate: '134 WPM',
      avgLength: '1m 45s',
      fillers: '1.4%',
      note: 'Deliberate, slow cadence during consensus protocol explanations',
      meterPercent: 86,
    },
    {
      title: 'Database & Storage',
      focusBadge: 'Senior L5 Focus • 5 Spoken',
      rate: '142 WPM',
      avgLength: '1m 18s',
      fillers: '1.0%',
      note: 'Concise high-velocity answers with crisp termination',
      meterPercent: 95,
    },
  ];

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
            Segmented Speech Telemetry
          </h3>
          <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '3px 0 0 0' }}>
            Speech rate and duration decomposed across technical subject tracks and question complexity
          </p>
        </div>

        <span
          style={{
            padding: '4px 10px',
            borderRadius: '6px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: '#38bdf8',
            fontSize: '0.7rem',
            fontWeight: 700,
          }}
        >
          Target Band: 130–160 WPM
        </span>
      </div>

      {/* 3 Track Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {tracks.map((track) => (
          <div
            key={track.title}
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
            {/* Title & Badge */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  {track.title}
                </h4>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 600, marginTop: '3px' }}>
                {track.focusBadge}
              </div>
            </div>

            {/* Metrics Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                padding: '10px 12px',
                backgroundColor: '#090d18',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Rate</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>
                  {track.rate}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Avg Length</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>
                  {track.avgLength}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.62rem', color: '#64748b' }}>Fillers</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#34d399', marginTop: '2px' }}>
                  {track.fillers}
                </div>
              </div>
            </div>

            {/* Note and meter bar */}
            <div>
              <div
                style={{
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${track.meterPercent}%`,
                    background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                    borderRadius: '9999px',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                {track.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
