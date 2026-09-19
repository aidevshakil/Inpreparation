import React, { useState } from 'react';
import {
  Shield,
  Video,
  Calendar,
  ChevronDown,
  Download,
  Camera,
  AlertOctagon,
  Sparkles,
} from 'lucide-react';

interface PresentationAnalyticsHeaderProps {
  onExportDiagnostics?: () => void;
  onCalibrateCamera?: () => void;
  onTabSelect?: (tab: string) => void;
}

export const PresentationAnalyticsHeader: React.FC<PresentationAnalyticsHeaderProps> = ({
  onExportDiagnostics,
  onCalibrateCamera,
  onTabSelect,
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 30 Days');
  const [selectedSession, setSelectedSession] = useState('4 Camera Sessions Evaluated');
  const [sessionDropdownOpen, setSessionDropdownOpen] = useState(false);

  const timeRanges = ['7D', 'Last 30 Days', '90D', '6M', 'All Time'];
  const sessionOptions = [
    '4 Camera Sessions Evaluated',
    'SIM-PY-8821 (Backend Concurrency)',
    'SIM-SYS-7940 (Distributed Systems)',
    'SIM-DB-6510 (Database Storage)',
  ];

  const subTabs = [
    { key: 'dashboard', label: 'Dashboard #35', active: false },
    { key: 'score', label: 'Score #36', active: false },
    { key: 'skill', label: 'Skill #37', active: false },
    { key: 'communication', label: 'Communication #38', active: false },
    { key: 'speech', label: 'Speech Analytics #39', active: false },
    { key: 'presentation', label: 'Presentation Analytics #40', active: true },
    { key: 'question', label: 'Question Performance', active: false },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
      {/* Top Breadcrumb & Metadata Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '4px',
        }}
      >
        {/* Breadcrumb path */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem' }}>
          <span style={{ color: '#94a3b8', cursor: 'pointer' }} onClick={() => onTabSelect?.('dashboard')}>
            Candidate Studio
          </span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#94a3b8', cursor: 'pointer' }} onClick={() => onTabSelect?.('performance')}>
            Diagnostics &amp; Growth
          </span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Presentation Analytics</span>
          <span
            style={{
              padding: '2px 6px',
              borderRadius: '5px',
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: '#c084fc',
              fontSize: '0.68rem',
              fontWeight: 700,
            }}
          >
            #40
          </span>
        </div>

        {/* Right Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Camera Telemetry Active */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '8px',
              backgroundColor: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              fontSize: '0.7rem',
              color: '#38bdf8',
              fontWeight: 600,
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
            <span>Camera Telemetry Active</span>
          </div>

          {/* 720p/30fps Optical Stream */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.7rem',
              color: '#cbd5e1',
            }}
          >
            <Video size={12} style={{ color: '#94a3b8' }} />
            <span>720p/30fps Optical Stream</span>
          </div>

          {/* AES-256 Client-Side Encrypted */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              fontSize: '0.7rem',
              color: '#34d399',
              fontWeight: 600,
            }}
          >
            <Shield size={12} />
            <span>AES-256 Client-Side Encrypted</span>
          </div>
        </div>
      </div>

      {/* Secondary Horizontal Navigation Sub-tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '4px',
        }}
      >
        {subTabs.map((tab) => {
          return (
            <button
              key={tab.key}
              onClick={() => onTabSelect?.(tab.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: tab.active ? '6px 14px' : '6px 12px',
                borderRadius: '8px',
                border: tab.active
                  ? '1px solid rgba(168, 85, 247, 0.6)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                backgroundColor: tab.active ? '#7c3aed' : 'rgba(255, 255, 255, 0.02)',
                color: tab.active ? '#ffffff' : '#94a3b8',
                fontSize: '0.74rem',
                fontWeight: tab.active ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
                boxShadow: tab.active ? '0 0 16px rgba(168, 85, 247, 0.4)' : 'none',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Title & Action Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '18px',
        }}
      >
        {/* Title */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                margin: 0,
              }}
            >
              Presentation Analytics
            </h1>
            <span
              style={{
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.35)',
                color: '#c084fc',
                fontSize: '0.72rem',
                fontWeight: 700,
              }}
            >
              #40
            </span>
          </div>
          <p
            style={{
              fontSize: '0.84rem',
              color: '#94a3b8',
              marginTop: '6px',
              marginBottom: 0,
              maxWidth: '720px',
              lineHeight: 1.45,
            }}
          >
            Evaluates strictly observable, technical physical video parameters from camera-enabled interviews: framing centering, face visibility ratio, head/camera alignment, posture stability bounds, and environmental lux.
          </p>
        </div>

        {/* Right Controls: Filter Pills & Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
          {/* Top Row: Time filters */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#0d1322',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '3px',
              gap: '2px',
            }}
          >
            {timeRanges.map((range) => {
              const isSelected = selectedTimeRange === range;
              return (
                <button
                  key={range}
                  onClick={() => setSelectedTimeRange(range)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: isSelected ? '#7c3aed' : 'transparent',
                    color: isSelected ? '#ffffff' : '#94a3b8',
                    fontSize: '0.72rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {range}
                </button>
              );
            })}
          </div>

          {/* Bottom Row: Sessions Dropdown + Export Diagnostics + Calibrate Camera */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Sessions Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setSessionDropdownOpen(!sessionDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 12px',
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Calendar size={13} style={{ color: '#c084fc' }} />
                <span>{selectedSession}</span>
                <ChevronDown size={13} style={{ color: '#64748b' }} />
              </button>

              {sessionDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    zIndex: 40,
                    minWidth: '240px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    padding: '4px',
                  }}
                >
                  {sessionOptions.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setSelectedSession(opt);
                        setSessionDropdownOpen(false);
                      }}
                      style={{
                        padding: '8px 12px',
                        fontSize: '0.74rem',
                        color: selectedSession === opt ? '#c084fc' : '#cbd5e1',
                        backgroundColor: selectedSession === opt ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: selectedSession === opt ? 700 : 500,
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Export Optical Diagnostics */}
            <button
              onClick={onExportDiagnostics}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Download size={13} />
              <span>Export Optical Diagnostics</span>
            </button>

            {/* Calibrate Camera Setup */}
            <button
              onClick={onCalibrateCamera}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)',
                transition: 'all 0.15s ease',
              }}
            >
              <Camera size={14} />
              <span>Calibrate Camera Setup</span>
            </button>
          </div>
        </div>
      </div>

      {/* Optical Telemetry Protocol Banner */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '16px 20px',
          borderRadius: '12px',
          backgroundColor: '#090f1e',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.09) 0%, rgba(13, 20, 37, 0.7) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', maxWidth: '820px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              <Sparkles size={16} style={{ color: '#c084fc' }} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f1f5f9' }}>
                  Technical Optical Telemetry
                </span>
                <span
                  style={{
                    padding: '2px 7px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: '#38bdf8',
                    fontSize: '0.64rem',
                    fontWeight: 700,
                  }}
                >
                  ZERO-INFERENCE PROTOCOL
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px', lineHeight: 1.45 }}>
                <strong style={{ color: '#cbd5e1' }}>About Presentation Analytics:</strong> Evaluates strictly observable, technical physical video parameters from camera-enabled interviews: framing centering, face visibility ratio, head/camera alignment, posture stability bounds, and environmental lux.
              </div>
            </div>
          </div>

          {/* Right Session Counter */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#e2e8f0' }}>
              4 of 6 Sessions With Video | 20 Qs Defended
            </div>
            <div style={{ fontSize: '0.68rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>99.1% decode frames • 0 dropped sync • Sample Rate Calibrated</span>
            </div>
          </div>
        </div>

        {/* Critical Disclaimer Warning Box */}
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '8px',
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <AlertOctagon size={16} style={{ color: '#f87171', flexShrink: 0 }} />
          <span style={{ fontSize: '0.7rem', color: '#fca5a5', lineHeight: 1.4 }}>
            <strong>CRITICAL DISCLAIMER:</strong> InprepAI explicitly DOES NOT infer or classify emotion, confidence, nervousness, anxiety, honesty, intelligence, personality traits, attentiveness, or psychological intent.
          </span>
        </div>
      </div>
    </div>
  );
};
