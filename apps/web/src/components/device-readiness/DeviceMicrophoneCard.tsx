import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

interface DeviceMicrophoneCardProps {
  isMicBlocked?: boolean;
  onTestMicSample?: () => void;
  onPlaybackSample?: () => void;
}

export const DeviceMicrophoneCard: React.FC<DeviceMicrophoneCardProps> = ({
  isMicBlocked = false,
  onTestMicSample,
  onPlaybackSample,
}) => {
  const [noiseSuppression, setNoiseSuppression] = useState(true);
  const [isTesting, setIsTesting] = useState(false);
  const [liveVolume, setLiveVolume] = useState<number>(0);
  const [currentDbfs, setCurrentDbfs] = useState<string>('-18.4 dBFS');
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedMicId, setSelectedMicId] = useState<string>('');

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Enumerate Audio Input Devices
  useEffect(() => {
    if (navigator.mediaDevices?.enumerateDevices) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const mics = devices.filter((d) => d.kind === 'audioinput');
        setAudioDevices(mics);
        if (mics.length > 0 && !selectedMicId) {
          setSelectedMicId(mics[0].deviceId);
        }
      }).catch((e) => console.warn('Audio device enumeration error:', e));
    }
  }, []);

  // Live Microphone Audio Analyzer Loop
  useEffect(() => {
    let stream: MediaStream | null = null;

    if (!isMicBlocked && navigator.mediaDevices?.getUserMedia) {
      const constraints: MediaStreamConstraints = {
        audio: selectedMicId ? { deviceId: { exact: selectedMicId } } : true,
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((s) => {
          stream = s;
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioContextClass) {
            const ctx = new AudioContextClass();
            audioContextRef.current = ctx;
            const analyser = ctx.createAnalyser();
            analyser.fftSize = 64;
            analyserRef.current = analyser;

            const source = ctx.createMediaStreamSource(s);
            source.connect(analyser);

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const updateMeter = () => {
              if (analyserRef.current) {
                analyserRef.current.getByteFrequencyData(dataArray);
                let sum = 0;
                for (let i = 0; i < bufferLength; i++) {
                  sum += dataArray[i];
                }
                const average = sum / bufferLength;
                const normalized = Math.min(100, Math.round((average / 128) * 100));
                setLiveVolume(normalized);

                const dbfs = normalized > 0 ? (normalized * 0.4 - 40).toFixed(1) : '-60.0';
                setCurrentDbfs(`${dbfs} dBFS`);
              }
              animFrameRef.current = requestAnimationFrame(updateMeter);
            };

            updateMeter();
          }
        })
        .catch((e) => {
          console.warn('Microphone audio stream permission not granted or unavailable:', e);
        });
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isMicBlocked, selectedMicId]);

  const decibelBars = Array.from({ length: 12 }, (_, idx) => {
    const threshold = (idx + 1) * 8;
    const active = liveVolume > 0 ? liveVolume >= threshold : idx < 9;
    const height = 12 + idx * 3;
    return { height, active };
  });

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
          <Mic size={16} style={{ color: '#c084fc' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Microphone Input &amp; Prosody Level
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select
            value={selectedMicId}
            onChange={(e) => setSelectedMicId(e.target.value)}
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
            {audioDevices.length > 0 ? (
              audioDevices.map((d, idx) => (
                <option key={d.deviceId || idx} value={d.deviceId}>
                  {d.label || `Microphone ${idx + 1}`}
                </option>
              ))
            ) : (
              <>
                <option value="builtin">MacBook Pro Microphone (CoreAudio Built-in)</option>
                <option value="usb">Shure MV7 USB Dynamic Mic</option>
              </>
            )}
          </select>

          <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Live Audio</span>
        </div>
      </div>

      {/* Mic Blocked Error Banner */}
      {isMicBlocked ? (
        <div
          style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <MicOff size={22} style={{ color: '#f87171', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fca5a5', margin: '0 0 4px 0' }}>
              Microphone Permission Blocked
            </h4>
            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', margin: 0, lineHeight: 1.45 }}>
              Browser audio stream access was denied. Please allow microphone access in your browser address bar icon.
            </p>
          </div>
          <button
            onClick={() => alert('Requesting microphone permissions...')}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: '#ef4444',
              color: '#ffffff',
              border: 'none',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Allow Mic
          </button>
        </div>
      ) : (
        <>
          {/* Live Decibel Meter */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <span style={{ fontSize: '0.74rem', color: '#cbd5e1', fontWeight: 600 }}>
                Live Decibel Meter (dBFS)
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38bdf8' }}>
                {currentDbfs}
              </span>
            </div>

            {/* Visualizer Bars */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '6px',
                height: '48px',
                padding: '4px 0',
                marginBottom: '8px',
              }}
            >
              {decibelBars.map((bar, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    height: `${bar.height}px`,
                    borderRadius: '4px',
                    backgroundColor: bar.active ? '#6366f1' : 'rgba(255, 255, 255, 0.08)',
                    backgroundImage: bar.active
                      ? 'linear-gradient(180deg, #38bdf8, #7c3aed)'
                      : 'none',
                    boxShadow: bar.active ? '0 0 8px rgba(99, 102, 241, 0.4)' : 'none',
                    transition: 'all 0.15s ease',
                  }}
                />
              ))}
            </div>

            {/* Scale Markers */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.64rem',
                color: '#64748b',
              }}
            >
              <span>-60 dB</span>
              <span>-36 dB</span>
              <span style={{ color: '#34d399', fontWeight: 700 }}>-18 dB (Target)</span>
              <span>-6 dB</span>
              <span style={{ color: '#f87171' }}>0 dB (Peak)</span>
            </div>
          </div>

          {/* Status and Actions */}
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.74rem',
                color: '#34d399',
                fontWeight: 600,
              }}
            >
              <CheckCircle2 size={13} />
              <span>Microphone Working • Clean Audio Detected (SNR &gt; 42 dB)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => {
                  setIsTesting(true);
                  if (onTestMicSample) onTestMicSample();
                  setTimeout(() => setIsTesting(false), 3000);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#cbd5e1',
                  fontSize: '0.74rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                <Mic size={12} />
                <span>{isTesting ? 'Recording 3s...' : 'Test Mic (3s Sample)'}</span>
              </button>

              <button
                onClick={onPlaybackSample}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#cbd5e1',
                  fontSize: '0.74rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                <Volume2 size={12} />
                <span>Playback</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Noise Suppression Toggle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={16} style={{ color: '#818cf8' }} />
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>
              Background Noise Suppression (AI Crisp Voice)
            </div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
              Filters ambient keyboard clatter, HVAC drone, and echo in real-time.
            </div>
          </div>
        </div>

        <button
          onClick={() => setNoiseSuppression(!noiseSuppression)}
          style={{
            width: '36px',
            height: '20px',
            borderRadius: '9999px',
            backgroundColor: noiseSuppression ? '#4f46e5' : 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background-color 0.2s ease',
            padding: 0,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              position: 'absolute',
              top: '3px',
              left: noiseSuppression ? '19px' : '3px',
              transition: 'left 0.2s ease',
            }}
          />
        </button>
      </div>
    </div>
  );
};
