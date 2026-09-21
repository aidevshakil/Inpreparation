import React from 'react';
import {
  Activity,
  Clock,
  PauseCircle,
  MessageSquareQuote,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

export const SpeechAnalyticsKpiCards: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {/* 1. AVERAGE SPEAKING RATE */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            Average Speaking Rate
          </span>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Activity size={14} style={{ color: '#38bdf8' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              138
            </span>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#38bdf8' }}>
              WPM
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.74rem', color: '#34d399', fontWeight: 700 }}>
              <TrendingUp size={13} />
              +6 WPM
            </span>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              vs baseline across 25 Qs
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: '14px',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.7rem',
            color: '#64748b',
          }}
        >
          Optimal Technical Range: <strong style={{ color: '#cbd5e1' }}>130 - 160 WPM</strong>
        </div>
      </div>

      {/* 2. AVERAGE ANSWER DURATION */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            Average Answer Duration
          </span>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              backgroundColor: 'rgba(129, 140, 248, 0.12)',
              border: '1px solid rgba(129, 140, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Clock size={14} style={{ color: '#818cf8' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              1m 32s
            </span>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '6px' }}>
            Median: <strong style={{ color: '#cbd5e1' }}>1m 24s</strong> | 24 defended spoken
          </div>
        </div>

        {/* Visual Target Bar */}
        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: '#64748b', marginBottom: '4px' }}>
            <span>Cadence Target:</span>
            <span style={{ color: '#cbd5e1' }}>Max: 2m / Min: 45s</span>
          </div>
          <div
            style={{
              position: 'relative',
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              overflow: 'hidden',
            }}
          >
            {/* Ideal target range zone: 45s to 120s => normalized */}
            <div
              style={{
                position: 'absolute',
                left: '20%',
                width: '60%',
                height: '100%',
                backgroundColor: 'rgba(99, 102, 241, 0.3)',
              }}
            />
            {/* Current mark: 92s in a 120s scale ~ 76% */}
            <div
              style={{
                position: 'absolute',
                left: '0%',
                width: '76%',
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
                borderRadius: '9999px',
              }}
            />
          </div>
        </div>
      </div>

      {/* 3. AVERAGE PAUSE INTERVAL */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            Average Pause Interval
          </span>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              backgroundColor: 'rgba(168, 85, 247, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PauseCircle size={14} style={{ color: '#c084fc' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              1.6s
            </span>
            <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#94a3b8' }}>
              /pause
            </span>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '6px' }}>
            Avg Frequency: <strong style={{ color: '#cbd5e1' }}>3.8 pauses / defense</strong>
          </div>
        </div>

        <div
          style={{
            marginTop: '14px',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.7rem',
            color: '#38bdf8',
            fontWeight: 600,
          }}
        >
          Classified: Deliberate syntactical structuring
        </div>
      </div>

      {/* 4. FILLER WORD DENSITY */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(13, 19, 34, 0.9) 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            Filler Word Density
          </span>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MessageSquareQuote size={14} style={{ color: '#38bdf8' }} />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
              1.2%
            </span>
            <span
              style={{
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                fontSize: '0.68rem',
                fontWeight: 700,
              }}
            >
              Elite Tier
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.74rem', color: '#34d399', fontWeight: 700 }}>
              <TrendingDown size={13} />
              -0.7%
            </span>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              (14 total in 3,450 words)
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: '14px',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.7rem',
            color: '#64748b',
          }}
        >
          Benchmark: <strong style={{ color: '#cbd5e1' }}>Top 5% among Staff candidates (&lt; 2.5%)</strong>
        </div>
      </div>
    </div>
  );
};
