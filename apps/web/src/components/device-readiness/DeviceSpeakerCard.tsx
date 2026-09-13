import React, { useState } from 'react';
import { Volume2, Play, CheckCircle2, VolumeX } from 'lucide-react';

interface DeviceSpeakerCardProps {
  onPlayTestChime?: () => void;
}

export const DeviceSpeakerCard: React.FC<DeviceSpeakerCardProps> = ({
  onPlayTestChime,
}) => {
  const [volume, setVolume] = useState(75);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (onPlayTestChime) onPlayTestChime();
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
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
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Volume2 size={16} style={{ color: '#38bdf8' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Speaker &amp; Output Playback
          </h3>
        </div>

        <select
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#cbd5e1',
            padding: '5px 10px',
            fontSize: '0.74rem',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          <option value="builtin">Built-in Speakers (Stereo 2.0)</option>
          <option value="headphones">AirPods Pro (Spatial Audio)</option>
        </select>
      </div>

      {/* Playback Test Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '14px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          marginBottom: '12px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={handlePlay}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
          }}
        >
          <Play size={13} fill={isPlaying ? '#ffffff' : 'none'} />
          <span>{isPlaying ? 'Playing Chime...' : 'Play Test Chime'}</span>
        </button>

        {/* Volume icon & Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '180px' }}>
          {volume === 0 ? <VolumeX size={15} style={{ color: '#94a3b8' }} /> : <Volume2 size={15} style={{ color: '#94a3b8' }} />}
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            style={{
              flex: 1,
              height: '4px',
              accentColor: '#818cf8',
              cursor: 'pointer',
            }}
          />
          <span style={{ fontSize: '0.74rem', color: '#cbd5e1', minWidth: '34px', textAlign: 'right', fontWeight: 600 }}>
            {volume}%
          </span>
        </div>
      </div>

      {/* Confirmation text */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.74rem',
          color: '#34d399',
          fontWeight: 500,
        }}
      >
        <CheckCircle2 size={13} />
        <span>Audio output confirmed. Ensure speaker volume is set to a comfortable conversational level.</span>
      </div>
    </div>
  );
};
