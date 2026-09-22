import React from 'react';
import { Video, Code2, MessageSquare, Volume2, Camera, RefreshCw, CheckCheck } from 'lucide-react';

export const SystemTelemetrySection: React.FC = () => {
  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: '10px'
          }}>
            SYSTEM TELEMETRY
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            One Interview. Multiple Intelligence Layers.
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Visualizing how Inprep transforms 15 minutes of raw audio-video recording into clear, compound action levers.
          </p>
        </div>

        {/* Pipeline Container Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '36px 30px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}>
            {/* Node 1: Raw Session */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '12px'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Video size={22} color="var(--primary-color)" />
              </div>
              <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                Raw Session
              </h4>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                AV Stream (WebRTC)
              </div>
              <span style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '4px 12px',
                borderRadius: '6px'
              }}>
                5 Strict Questions
              </span>
            </div>

            {/* Node 2: 4 Parallel Pipelines */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {[
                { icon: Code2, label: 'Technical Pipeline', color: '#818cf8' },
                { icon: MessageSquare, label: 'Communication NLP', color: '#38bdf8' },
                { icon: Volume2, label: 'Acoustic Engine', color: '#c084fc' },
                { icon: Camera, label: 'Optical Frame Mesh', color: '#38bdf8' }
              ].map((pipe, i) => {
                const IconComp = pipe.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <IconComp size={14} color={pipe.color} />
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        {pipe.label}
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600 }}>
                      Active
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Node 3: Multimodal Engine */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '12px'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <RefreshCw size={22} color="#c084fc" />
              </div>
              <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                Multimodal Engine
              </h4>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                Cross-Sensor Correlation
              </div>
              <span style={{
                fontSize: '11.5px',
                color: '#ffffff',
                background: '#6366f1',
                padding: '4px 12px',
                borderRadius: '6px',
                fontWeight: 600,
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.4)'
              }}>
                82 Composite Score
              </span>
            </div>

            {/* Node 4: Action Blueprint */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '12px'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <CheckCheck size={22} color="#38bdf8" />
              </div>
              <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                Action Blueprint
              </h4>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                Staff-Tier Benchmark
              </div>
              <span style={{
                fontSize: '11px',
                color: '#38bdf8',
                background: 'var(--bg-surface)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '4px 12px',
                borderRadius: '6px',
                fontWeight: 600
              }}>
                Ready for Retake
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

