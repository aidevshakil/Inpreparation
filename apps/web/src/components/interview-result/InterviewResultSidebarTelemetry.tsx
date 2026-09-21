import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Lock,
  Video,
  Eye,
  Activity,
  List,
  ChevronRight,
} from 'lucide-react';

interface InterviewResultSidebarTelemetryProps {
  onGeneratePlan?: () => void;
  onStartNextPractice?: () => void;
  onBackToDashboard?: () => void;
  onOpenTelemetryDrawer?: () => void;
  onSelectDrill?: (drillName: string) => void;
}

export const InterviewResultSidebarTelemetry: React.FC<InterviewResultSidebarTelemetryProps> = ({
  onGeneratePlan,
  onStartNextPractice,
  onBackToDashboard,
  onOpenTelemetryDrawer,
  onSelectDrill,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. Next Actions: Drill & AI Improvement Pathways */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '16px',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.16) 0%, rgba(12, 15, 23, 0.95) 100%)',
          boxShadow: '0 8px 24px rgba(79, 70, 229, 0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#c7d2fe',
            }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Next Actions: Drill & AI Improvement Pathways
            </h4>
            <span style={{ fontSize: '0.7rem', color: '#a5b4fc', fontWeight: 500 }}>
              Targeted improvement pathways
            </span>
          </div>
        </div>

        <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.55, margin: '0 0 16px 0' }}>
          Synthesize your 82/100 score into a customized learning trajectory focusing on backpressure
          mathematics and distributed race condition debugging.
        </p>

        {/* Buttons stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={onGeneratePlan}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '11px 16px',
              borderRadius: '10px',
              backgroundColor: '#6366f1',
              color: '#ffffff',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4f46e5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6366f1')}
          >
            <span>Generate AI Improvement Plan (Lesson #12)</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={onStartNextPractice}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '9px 16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              color: '#e2e8f0',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)')}
          >
            <span>Start Next Practice Session (Scenario #29)</span>
            <ArrowRight size={13} />
          </button>

          <button
            onClick={onBackToDashboard}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '7px 12px',
              background: 'transparent',
              color: '#94a3b8',
              border: 'none',
              fontSize: '0.74rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <span>Back to Performance Dashboard (Screen #14)</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 2. Communication & Speech Telemetry Card */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={16} style={{ color: '#38bdf8' }} />
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Communication & speech telemetry
            </h4>
          </div>
          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 700,
              color: '#38bdf8',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              padding: '2px 8px',
              borderRadius: '9999px',
            }}
          >
            Verified
          </span>
        </div>
        <p style={{ fontSize: '0.74rem', color: '#64748b', margin: '0 0 16px 0' }}>
          Objective acoustic cadence and lexical articulation signals.
        </p>

        {/* 2x2 Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {/* Tile 1 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              SPEAKING CADENCE
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: '4px 0 2px 0' }}>
              138 WPM
            </div>
            <div style={{ fontSize: '0.68rem', color: '#38bdf8', fontWeight: 600 }}>
              Optimal Staff Benchmark: 130-150
            </div>
          </div>

          {/* Tile 2 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              PAUSE DENSITY
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: '4px 0 2px 0' }}>
              1.4s avg
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
              Reflective deliberation pacing
            </div>
          </div>

          {/* Tile 3 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              FILLER FREQUENCY
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399', margin: '4px 0 2px 0' }}>
              1.1%
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
              Exceptionally clean: &lt;3% "like", "um"
            </div>
          </div>

          {/* Tile 4 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              ACOUSTIC CLARITY
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c084fc', margin: '4px 0 2px 0' }}>
              98.2%
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
              SNR Score 28dB (Optimal)
            </div>
          </div>
        </div>

        {onOpenTelemetryDrawer && (
          <button
            onClick={onOpenTelemetryDrawer}
            style={{
              marginTop: '12px',
              width: '100%',
              padding: '7px',
              borderRadius: '8px',
              backgroundColor: 'rgba(56, 189, 248, 0.06)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            View Full Acoustic Spectrogram Timeline →
          </button>
        )}
      </div>

      {/* 3. Observable Presentation Framing Card */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Video size={16} style={{ color: '#818cf8' }} />
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Observable Presentation Framing
            </h4>
          </div>
          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 600,
              color: '#94a3b8',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2px 8px',
              borderRadius: '9999px',
            }}
          >
            1080p Stream
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Row 1 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.78rem',
            }}
          >
            <span style={{ color: '#94a3b8' }}>Eye-line Headroom Ratio</span>
            <span style={{ color: '#34d399', fontWeight: 700 }}>0.82 (Balanced)</span>
          </div>

          {/* Row 2 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.78rem',
            }}
          >
            <span style={{ color: '#94a3b8' }}>Webcam Framing Stability</span>
            <span style={{ color: '#38bdf8', fontWeight: 700 }}>97% In-bounds</span>
          </div>

          {/* Row 3 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.78rem',
            }}
          >
            <span style={{ color: '#94a3b8' }}>Gamma & Illumination</span>
            <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Optimal Studio Balance</span>
          </div>
        </div>

        {/* Footnote */}
        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            fontSize: '0.7rem',
            color: '#64748b',
            lineHeight: 1.45,
          }}
        >
          <Eye size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Camera analysis measures purely posture, framing, signals; zero emotion, personality, or psychometric estimation.
          </span>
        </div>
      </div>

      {/* 4. Recommended Next Steps Card */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <List size={16} style={{ color: '#a5b4fc' }} />
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Recommended Next Steps
            </h4>
          </div>
          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 600,
              color: '#c7d2fe',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              padding: '2px 8px',
              borderRadius: '9999px',
            }}
          >
            3 Prioritized
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Step 1 */}
          <div
            onClick={() => onSelectDrill && onSelectDrill('Tail-Call Token-Bucket Rate Limiting')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
            }}
          >
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                Tail-Call Token-Bucket Rate Limiting
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                10 min targeted micro-drill
              </div>
            </div>
            <ChevronRight size={15} style={{ color: '#64748b' }} />
          </div>

          {/* Step 2 */}
          <div
            onClick={() => onSelectDrill && onSelectDrill('Study Exemplar: Distributed MVCC Idempotency')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
            }}
          >
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                Study Exemplar: Distributed MVCC Idempotency
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                Staff L6 architecture walkthrough
              </div>
            </div>
            <ChevronRight size={15} style={{ color: '#64748b' }} />
          </div>

          {/* Step 3 */}
          <div
            onClick={() => onSelectDrill && onSelectDrill('Schedule a follow-up: Concurrency in FastAPI/Go')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
            }}
          >
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                Schedule a follow-up: Concurrency in FastAPI/Go
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                Target higher scale thresholds
              </div>
            </div>
            <ChevronRight size={15} style={{ color: '#64748b' }} />
          </div>
        </div>
      </div>

      {/* 5. Transparent Scoring Governance Card */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Shield size={16} style={{ color: '#38bdf8' }} />
          <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Transparent Scoring Governance
          </h4>
        </div>

        <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.55, margin: '0 0 14px 0' }}>
          How was my score calculated? Inprep AI scores are strictly determined from deterministic mathematical
          weights applied to engineering rubric assertions. Audio/video artifacts remain encrypted under AES-256 and
          are subject to your self-delete protocol.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <Lock size={13} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Self-delete protocol active (30-day retention window)
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <Shield size={13} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Verifiable cryptographic telemetry signature attached to your dossier
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
