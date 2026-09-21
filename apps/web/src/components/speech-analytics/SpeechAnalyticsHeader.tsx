import React, { useState } from 'react';
import {
  Shield,
  Activity,
  Calendar,
  ChevronDown,
  Download,
  Sparkles,
  Mic,
  Cpu,
  Radio,
} from 'lucide-react';

interface SpeechAnalyticsHeaderProps {
  onExportLog?: () => void;
  onPracticeCadence?: () => void;
  onTabSelect?: (tab: string) => void;
}

export const SpeechAnalyticsHeader: React.FC<SpeechAnalyticsHeaderProps> = ({
  onExportLog,
  onPracticeCadence,
  onTabSelect,
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 30 Days');
  const [selectedSession, setSelectedSession] = useState('5 Calibrated Sessions');
  const [sessionDropdownOpen, setSessionDropdownOpen] = useState(false);

  const timeRanges = ['7D', 'Last 30 Days', '90D', '6M', 'All Time'];
  const sessionOptions = [
    '5 Calibrated Sessions',
    'SIM-8821 (Backend Concurrency)',
    'SIM-7940 (Distributed Systems)',
    'SIM-6510 (Database Isolation)',
  ];

  const subTabs = [
    { key: 'dashboard', label: 'Dashboard #35', active: false },
    { key: 'score', label: 'Score #36', active: false },
    { key: 'skill', label: 'Skill #37', active: false },
    { key: 'communication', label: 'Communication #38', active: false },
    { key: 'speech', label: 'Speech Analytics ACTIVE #39', active: true },
    { key: 'presentation', label: 'Presentation #40', active: false },
    { key: 'overall', label: 'Overall Performance', active: false },
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
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Speech Analytics</span>
        </div>

        {/* Right Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Web #39 Badge */}
          <span
            style={{
              padding: '3px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#94a3b8',
              letterSpacing: '0.5px',
            }}
          >
            WEB #39
          </span>

          {/* Whisper-v3 Acoustic Parser */}
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
            <Activity size={12} style={{ color: '#10b981' }} />
            <span>Whisper-v3 Acoustic Parser • 48kHz Calibrated</span>
          </div>

          {/* AES-256 E2E */}
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
            <Shield size={12} />
            <span>AES-256 E2E</span>
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
                  ? '1px solid rgba(129, 140, 248, 0.5)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                backgroundColor: tab.active ? '#4f46e5' : 'rgba(255, 255, 255, 0.02)',
                color: tab.active ? '#ffffff' : '#94a3b8',
                fontSize: '0.74rem',
                fontWeight: tab.active ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
                boxShadow: tab.active ? '0 0 16px rgba(99, 102, 241, 0.35)' : 'none',
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
        {/* Title + Voice Track Validated badge */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <h1
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                margin: 0,
              }}
            >
              Speech Analytics
            </h1>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(129, 140, 248, 0.15)',
                border: '1px solid rgba(129, 140, 248, 0.35)',
                color: '#a5b4fc',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.3px',
              }}
            >
              <Radio size={11} style={{ color: '#818cf8' }} />
              Voice Track Validated
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
            Understand measurable speech patterns, pace cadence, pause intervals, and verbal density from your voice-enabled interview responses.
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
                    backgroundColor: isSelected ? '#4f46e5' : 'transparent',
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

          {/* Bottom Row: Sessions Dropdown + Export CSV + Practice Cadence */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Calibrated Sessions Dropdown */}
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
                <Calendar size={13} style={{ color: '#818cf8' }} />
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
                    minWidth: '220px',
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
                        color: selectedSession === opt ? '#818cf8' : '#cbd5e1',
                        backgroundColor: selectedSession === opt ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
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

            {/* Export CSV / Audio Log */}
            <button
              onClick={onExportLog}
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
              <span>Export CSV / Audio Log</span>
            </button>

            {/* Practice Speech Cadence */}
            <button
              onClick={onPracticeCadence}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.15s ease',
              }}
            >
              <Sparkles size={14} />
              <span>Practice Speech Cadence</span>
            </button>
          </div>
        </div>
      </div>

      {/* Acoustic Telemetry Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          padding: '12px 18px',
          borderRadius: '12px',
          backgroundColor: '#090f1e',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(13, 20, 37, 0.6) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', maxWidth: '780px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Mic size={16} style={{ color: '#818cf8' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f1f5f9' }}>
              Voice-Based Telemetry Active
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.4 }}>
              Speech analytics is computed solely from calibrated 48kHz audio streams of voice dialogs. 1 out of 6 (5 of 6 calibrated sessions). Text-only interviews are excluded.
            </div>
          </div>
        </div>

        {/* Technical Specs Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <div
            style={{
              padding: '3px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.68rem',
              color: '#cbd5e1',
            }}
          >
            <span style={{ color: '#64748b' }}>Language: </span>
            <strong style={{ color: '#e2e8f0' }}>English (US)</strong>
          </div>

          <div
            style={{
              padding: '3px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.68rem',
              color: '#cbd5e1',
            }}
          >
            <span style={{ color: '#64748b' }}>Sample Rate: </span>
            <strong style={{ color: '#38bdf8' }}>48,000 Hz</strong>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '3px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              fontSize: '0.68rem',
              color: '#cbd5e1',
            }}
          >
            <Cpu size={11} style={{ color: '#818cf8' }} />
            <span style={{ color: '#64748b' }}>Engine: </span>
            <strong style={{ color: '#a5b4fc' }}>Whisper-v3 Large</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
