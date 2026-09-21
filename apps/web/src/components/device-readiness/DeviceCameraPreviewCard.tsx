import React, { useState, useEffect, useRef } from 'react';
import { Video, VideoOff, Grid } from 'lucide-react';

interface DeviceCameraPreviewCardProps {
  isCameraOn?: boolean;
  onToggleCamera?: () => void;
  isPoorLighting?: boolean;
}

export const DeviceCameraPreviewCard: React.FC<DeviceCameraPreviewCardProps> = ({
  isCameraOn = true,
  onToggleCamera,
  isPoorLighting = false,
}) => {
  const [isMirrored, setIsMirrored] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('');
  const [hasLiveStream, setHasLiveStream] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Enumerate video devices
  useEffect(() => {
    if (navigator.mediaDevices?.enumerateDevices) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const cameras = devices.filter((d) => d.kind === 'videoinput');
        setVideoDevices(cameras);
        if (cameras.length > 0 && !selectedDeviceId) {
          setSelectedDeviceId(cameras[0].deviceId);
        }
      }).catch((e) => console.warn('Camera enumeration error:', e));
    }
  }, []);

  // Attach real camera stream
  useEffect(() => {
    let activeStream: MediaStream | null = null;

    if (isCameraOn && navigator.mediaDevices?.getUserMedia) {
      const constraints: MediaStreamConstraints = {
        video: selectedDeviceId ? { deviceId: { exact: selectedDeviceId } } : true,
        audio: false,
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          activeStream = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            setHasLiveStream(true);
          }
        })
        .catch((err) => {
          console.warn('Live webcam not accessible or permission denied, using preview fallback:', err);
          setHasLiveStream(false);
        });
    } else {
      setHasLiveStream(false);
    }

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach((track) => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [isCameraOn, selectedDeviceId]);

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
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Video size={16} style={{ color: '#38bdf8' }} />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Camera Preview
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Camera selector dropdown */}
          <select
            value={selectedDeviceId}
            onChange={(e) => setSelectedDeviceId(e.target.value)}
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
            {videoDevices.length > 0 ? (
              videoDevices.map((dev, idx) => (
                <option key={dev.deviceId || idx} value={dev.deviceId}>
                  {dev.label || `Camera ${idx + 1}`}
                </option>
              ))
            ) : (
              <>
                <option value="builtin">FaceTime HD Camera (Built-in)</option>
                <option value="external">External 4K Pro Webcam</option>
              </>
            )}
          </select>

          {/* Resolution Badge */}
          <span
            style={{
              fontSize: '0.68rem',
              color: '#34d399',
              padding: '3px 8px',
              borderRadius: '6px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span>{hasLiveStream ? 'Live Webcam 1080p' : 'Preview Mode'}</span>
          </span>
        </div>
      </div>

      {/* Video Viewport Frame */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '340px',
          backgroundColor: '#030712',
          borderRadius: '14px',
          overflow: 'hidden',
          border: isPoorLighting ? '2px solid #f59e0b' : '1px solid rgba(99, 102, 241, 0.3)',
          marginBottom: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isCameraOn ? (
          <>
            {/* Live Camera Video Feed */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isMirrored ? 'scaleX(-1)' : 'none',
                filter: isPoorLighting ? 'brightness(0.6) contrast(1.2)' : 'none',
                display: hasLiveStream ? 'block' : 'none',
              }}
            />

            {!hasLiveStream && (
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Live candidate camera preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: isMirrored ? 'scaleX(-1)' : 'none',
                  filter: isPoorLighting ? 'brightness(0.6) contrast(1.2)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              />
            )}

            {/* Grid Overlay */}
            {showGrid && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pointerEvents: 'none',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gridTemplateRows: '1fr 1fr 1fr',
                }}
              >
                <div style={{ borderRight: '1px dashed rgba(255, 255, 255, 0.12)', borderBottom: '1px dashed rgba(255, 255, 255, 0.12)' }} />
                <div style={{ borderRight: '1px dashed rgba(255, 255, 255, 0.12)', borderBottom: '1px dashed rgba(255, 255, 255, 0.12)' }} />
                <div style={{ borderBottom: '1px dashed rgba(255, 255, 255, 0.12)' }} />
                <div style={{ borderRight: '1px dashed rgba(255, 255, 255, 0.12)', borderBottom: '1px dashed rgba(255, 255, 255, 0.12)' }} />
                <div
                  style={{
                    borderRight: '1px dashed rgba(255, 255, 255, 0.12)',
                    borderBottom: '1px dashed rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Head Oval Framing Target */}
                  <div
                    style={{
                      width: '110px',
                      height: '150px',
                      borderRadius: '50%',
                      border: '2px dashed rgba(56, 189, 248, 0.6)',
                      boxShadow: '0 0 14px rgba(56, 189, 248, 0.25)',
                    }}
                  />
                </div>
                <div style={{ borderBottom: '1px dashed rgba(255, 255, 255, 0.12)' }} />
                <div style={{ borderRight: '1px dashed rgba(255, 255, 255, 0.12)' }} />
                <div style={{ borderRight: '1px dashed rgba(255, 255, 255, 0.12)' }} />
                <div />
              </div>
            )}

            {/* Top Left Status Overlays */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 9px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(8px)',
                  fontSize: '0.68rem',
                  color: '#ffffff',
                  fontWeight: 600,
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span>LIVE PREVIEW</span>
              </span>

              <span
                style={{
                  fontSize: '0.64rem',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(0, 0, 0, 0.55)',
                  color: '#94a3b8',
                  fontWeight: 600,
                }}
              >
                AE: LOCKED
              </span>
            </div>

            {/* Bottom Target Alignment Banner */}
            <div
              style={{
                position: 'absolute',
                bottom: '48px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '4px 14px',
                borderRadius: '9999px',
                backgroundColor: isPoorLighting ? 'rgba(245, 158, 11, 0.85)' : 'rgba(16, 185, 129, 0.85)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.72rem',
                color: '#ffffff',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}
            >
              {isPoorLighting
                ? '⚠️ LOW LIGHT DETECTED • Face shadowed, consider front light'
                : '✓ GOOD FRAMING • Head & shoulders centered'}
            </div>

            {/* Bottom Action Controls inside Viewport */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '12px',
                right: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setIsMirrored(!isMirrored)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    cursor: 'pointer',
                  }}
                >
                  [] Mirror: {isMirrored ? 'ON' : 'OFF'}
                </button>

                <button
                  onClick={() => setShowGrid(!showGrid)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Grid size={11} />
                  <span>Grid</span>
                </button>
              </div>

              <button
                onClick={onToggleCamera}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(239, 68, 68, 0.85)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <VideoOff size={11} />
                <span>Turn Off Cam</span>
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 20px' }}>
            <VideoOff size={36} style={{ color: '#64748b', marginBottom: '10px' }} />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0' }}>
              Camera Stream Disabled
            </h4>
            <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 14px 0' }}>
              You are conducting this interview in Audio-Only Mode.
            </p>
            <button
              onClick={onToggleCamera}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.76rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Turn Camera On
            </button>
          </div>
        )}
      </div>

      {/* 3 Telemetry Metrics */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px',
          marginBottom: '12px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
          }}
        >
          <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>Face Visibility</div>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc', margin: '2px 0' }}>
            Centered &amp; Visible (98%)
          </div>
          <div style={{ fontSize: '0.68rem', color: '#34d399' }}>Clear gaze vector</div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
          }}
        >
          <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>Framing &amp; Distance</div>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc', margin: '2px 0' }}>
            Optimal (~55cm)
          </div>
          <div style={{ fontSize: '0.68rem', color: '#38bdf8' }}>Adequate headroom</div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            padding: '10px 12px',
          }}
        >
          <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>Ambient Lighting</div>
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: isPoorLighting ? '#fbbf24' : '#f8fafc',
              margin: '2px 0',
            }}
          >
            {isPoorLighting ? 'Dim Ambient Light' : 'Even Illumination'}
          </div>
          <div style={{ fontSize: '0.68rem', color: isPoorLighting ? '#f59e0b' : '#34d399' }}>
            {isPoorLighting ? 'Low contrast on face' : 'No backlighting clips'}
          </div>
        </div>
      </div>

      {/* Ethics notice */}
      <div style={{ fontSize: '0.68rem', color: '#64748b', fontStyle: 'italic', lineHeight: 1.4 }}>
        *Technical presentation signals only. Inprep AI strictly does not infer emotion, personality, honesty, nervousness, or intelligence.
      </div>
    </div>
  );
};
