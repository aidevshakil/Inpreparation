import React, { useState } from 'react';
import {
  FileText,
  Trophy,
  CheckSquare,
  Mic,
  Calendar,
  ChevronDown,
  Shield,
  Video,
  Radio,
} from 'lucide-react';

interface QuestionPerformanceHeaderProps {
  onSelectSession?: (sessionId: string) => void;
  onPaperAudioDocker?: () => void;
}

export const QuestionPerformanceHeader: React.FC<QuestionPerformanceHeaderProps> = ({
  onSelectSession,
  onPaperAudioDocker,
}) => {
  const [selectedSession, setSelectedSession] = useState('Python Concurrency (#SIM-PY-8821)');
  const [sessionOpen, setSessionOpen] = useState(false);
  const [mediaFilter, setMediaFilter] = useState<'camera-voice' | 'audio-only'>('camera-voice');

  const sessionList = [
    'Python Concurrency (#SIM-PY-8821)',
    'Distributed Systems Consensus (#SIM-SYS-7940)',
    'PostgreSQL Database Internals (#SIM-DB-6510)',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '24px' }}>
      {/* Top Breadcrumbs & Privacy Protocol Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem' }}>
          <span style={{ color: '#94a3b8' }}>Workspace</span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#94a3b8' }}>Performance Analytics</span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Question Performance (#41)</span>
        </div>

        {/* Protocol Banner Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            borderRadius: '8px',
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            fontSize: '0.68rem',
            color: '#38bdf8',
            fontWeight: 600,
          }}
        >
          <Shield size={12} />
          <span>Zero Affective Inference Protocol • Evaluates Answer Quality &amp; Observable Signals Only • AES-256 Encrypted</span>
        </div>
      </div>

      {/* Title & Top Action Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '18px',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Question Performance Analytics
          </h1>
          <p
            style={{
              fontSize: '0.84rem',
              color: '#94a3b8',
              marginTop: '6px',
              marginBottom: 0,
              maxWidth: '780px',
              lineHeight: 1.45,
            }}
          >
            Inspect granular question-by-question evidence, rubric weights, multimodal telemetry, and deterministic coaching recommendations under Inprep&apos;s 5-Question Interview Standard.
          </p>
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Active Session Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setSessionOpen(!sessionOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 14px',
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span>Active: {selectedSession}</span>
                <ChevronDown size={13} style={{ color: '#64748b' }} />
              </button>

              {sessionOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    zIndex: 50,
                    minWidth: '280px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.6)',
                    padding: '4px',
                  }}
                >
                  {sessionList.map((s) => (
                    <div
                      key={s}
                      onClick={() => {
                        setSelectedSession(s);
                        setSessionOpen(false);
                        onSelectSession?.(s);
                      }}
                      style={{
                        padding: '8px 12px',
                        fontSize: '0.74rem',
                        color: selectedSession === s ? '#818cf8' : '#cbd5e1',
                        backgroundColor: selectedSession === s ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: selectedSession === s ? 700 : 500,
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Date Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                backgroundColor: '#0d1322',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                fontSize: '0.72rem',
                color: '#cbd5e1',
              }}
            >
              <Calendar size={13} style={{ color: '#94a3b8' }} />
              <span>Last 30 Days</span>
            </div>
          </div>

          {/* Filter Pills: Camera + Voice / Paper Audio Docker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setMediaFilter('camera-voice')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '6px',
                border: mediaFilter === 'camera-voice' ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: mediaFilter === 'camera-voice' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: mediaFilter === 'camera-voice' ? '#a5b4fc' : '#94a3b8',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Video size={12} />
              <span>Camera + Voice</span>
            </button>

            <button
              onClick={() => {
                setMediaFilter('audio-only');
                onPaperAudioDocker?.();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '6px',
                border: mediaFilter === 'audio-only' ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: mediaFilter === 'audio-only' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: mediaFilter === 'audio-only' ? '#a5b4fc' : '#94a3b8',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <FileText size={12} />
              <span>Paper / Audio Docker</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Summary Cards Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '14px',
        }}
      >
        {/* Card 1: Interview Session */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <FileText size={18} style={{ color: '#818cf8' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Interview Session
            </div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>
              Python Concurr...
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
              #SIM-PY-8821 • Staff L6+ Target
            </div>
          </div>
        </div>

        {/* Card 2: Session Composite Score */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Trophy size={18} style={{ color: '#c084fc' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Session Composite Score
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '2px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>82</span>
              <span style={{ fontSize: '0.74rem', color: '#64748b' }}>/ 100</span>
              <span style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: 700 }}>+5.4 pts</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#a5b4fc', marginTop: '2px' }}>
              Staff Qualified Benchmark
            </div>
          </div>
        </div>

        {/* Card 3: Question Standard */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <CheckSquare size={18} style={{ color: '#38bdf8' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Question Standard
            </div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>
              5 of 5 Defended
            </div>
            <div style={{ fontSize: '0.68rem', color: '#34d399', marginTop: '2px' }}>
              100% Usable Telemetry • 0 Drops
            </div>
          </div>
        </div>

        {/* Card 4: Sensory Capture */}
        <div
          style={{
            backgroundColor: '#0d1322',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Mic size={18} style={{ color: '#34d399' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                Sensory Capture
              </span>
              <span
                style={{
                  padding: '1px 5px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                }}
              >
                48k
              </span>
            </div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f1f5f9', marginTop: '2px' }}>
              Whisper-v3
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Radio size={10} style={{ color: '#10b981' }} />
              <span>Synchronized 720p/30fps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
