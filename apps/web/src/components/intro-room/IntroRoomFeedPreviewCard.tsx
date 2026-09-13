import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, Sliders } from 'lucide-react';

interface IntroRoomFeedPreviewCardProps {
  isCameraOn?: boolean;
}

export const IntroRoomFeedPreviewCard: React.FC<IntroRoomFeedPreviewCardProps> = ({
  isCameraOn = true,
}) => {
  const [camActive, setCamActive] = useState(isCameraOn);
  const [micActive, setMicActive] = useState(true);
  const [isMirrored, setIsMirrored] = useState(true);
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px',
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
          marginBottom: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
          <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            YOUR FEED PREVIEW
          </h4>
        </div>

        <span
          style={{
            fontSize: '0.66rem',
            color: '#64748b',
            padding: '2px 6px',
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          }}
        >
          1080p @ 30fps
        </span>
      </div>

      {/* Live Sensor Feed Box */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          backgroundColor: '#030712',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {camActive ? (
          <>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              alt="Live sensor preview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isMirrored ? 'scaleX(-1)' : 'none',
                filter: filterActive ? 'contrast(1.1) brightness(1.05)' : 'none',
              }}
            />

            {/* Top Left Status Tag */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                fontSize: '0.64rem',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <span>LIVE SENSOR FEED</span>
            </div>

            {/* Bottom Telemetry Overlay Row */}
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                right: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '4px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                fontSize: '0.66rem',
              }}
            >
              <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                <Mic size={10} />
                <span>Mic Level: -18.4 dBFS</span>
              </span>

              <span style={{ color: '#38bdf8', fontWeight: 600 }}>Framing: Optimal</span>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', color: '#64748b' }}>
            <VideoOff size={28} style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '0.74rem' }}>Audio-Only Mode Active</div>
          </div>
        )}
      </div>

      {/* Quick Controls */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '6px',
        }}
      >
        <button
          onClick={() => setCamActive(!camActive)}
          style={{
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: camActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: camActive ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
            color: camActive ? '#a5b4fc' : '#f87171',
            fontSize: '0.68rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          {camActive ? <Video size={11} /> : <VideoOff size={11} />}
          <span>{camActive ? 'Cam: On' : 'Cam: Off'}</span>
        </button>

        <button
          onClick={() => setMicActive(!micActive)}
          style={{
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: micActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: micActive ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
            color: micActive ? '#a5b4fc' : '#f87171',
            fontSize: '0.68rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          {micActive ? <Mic size={11} /> : <MicOff size={11} />}
          <span>{micActive ? 'Mic: On' : 'Mic: Off'}</span>
        </button>

        <button
          onClick={() => setIsMirrored(!isMirrored)}
          style={{
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#cbd5e1',
            fontSize: '0.68rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Mirror
        </button>

        <button
          onClick={() => setFilterActive(!filterActive)}
          style={{
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: filterActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
            border: filterActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
            color: filterActive ? '#38bdf8' : '#cbd5e1',
            fontSize: '0.68rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
          }}
        >
          <Sliders size={11} />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};
