import React from 'react';
import {
  PauseCircle,
  MessageSquareQuote,
  Repeat,
  TrendingDown,
  Info,
} from 'lucide-react';

export const SpeechDeepDiveCards: React.FC = () => {
  const pauseTiers = [
    { label: '< 1.0s (Syntactical Breathing)', percent: 64, occurrences: 61, color: '#38bdf8' },
    { label: '1.0s - 2.0s (Cognitive structuring)', percent: 26, occurrences: 24, color: '#818cf8' },
    { label: '2.1s - 3.0s (Unmarked pause)', percent: 8, occurrences: 8, color: '#f59e0b' },
    { label: '3.0s+ (Dysfluent)', percent: 2, occurrences: 2, color: '#ef4444' },
  ];

  const fillerWords = [
    { word: '"um" / "uh"', count: 24, percent: '0.7%', barWidth: '60%' },
    { word: '"like"', count: 22, percent: '0.6%', barWidth: '52%' },
    { word: '"you know"', count: 14, percent: '0.4%', barWidth: '36%' },
    { word: '"basically"', count: 10, percent: '0.3%', barWidth: '25%' },
    { word: '"actually"', count: 4, percent: '0.1%', barWidth: '10%' },
  ];

  const lexicalIdioms = [
    {
      phrase: '"In terms of the trade-off"',
      context: '4 sessions • High utility technical bridge',
      count: '4x',
    },
    {
      phrase: '"Under high load conditions"',
      context: '3 sessions • Contextual performance framing',
      count: '3x',
    },
    {
      phrase: '"From an architectural standpoint"',
      context: '3 sessions • System viewpoint wrap/anchor',
      count: '3x',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px',
        marginBottom: '24px',
      }}
    >
      {/* 1. PAUSE ANALYSIS CARD */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PauseCircle size={17} style={{ color: '#818cf8' }} />
              <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Pause Analysis
              </h3>
            </div>
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#94a3b8',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              Total: 416 Spoken Pauses
            </span>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 14px 0', lineHeight: 1.4 }}>
            Breakdown of pauses classified by syntactical length and cognitive problem formulation.
          </p>

          {/* 3 Mini Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                backgroundColor: '#090d18',
                padding: '8px 10px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Avg Pause</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>1.6s</div>
            </div>

            <div
              style={{
                backgroundColor: '#090d18',
                padding: '8px 10px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Per Answer</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>3.8</div>
            </div>

            <div
              style={{
                backgroundColor: '#090d18',
                padding: '8px 10px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Pause / Spoken</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>11%</div>
            </div>
          </div>

          {/* Categorized Tier Progress Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {pauseTiers.map((tier) => (
              <div key={tier.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>{tier.label}</span>
                  <span style={{ color: tier.color, fontWeight: 700 }}>
                    {tier.percent}% • {tier.occurrences} occurrences
                  </span>
                </div>
                <div
                  style={{
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${tier.percent}%`,
                      backgroundColor: tier.color,
                      borderRadius: '9999px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Callout */}
        <div
          style={{
            marginTop: '16px',
            padding: '10px 12px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
          }}
        >
          <Info size={13} style={{ color: '#64748b', flexShrink: 0, marginTop: '2px' }} />
          <span style={{ fontSize: '0.66rem', color: '#94a3b8', lineHeight: 1.4 }}>
            Notice: Pauses are measured as positive pauses for problem formulation and not interpreted as hesitation or nervousness.
          </span>
        </div>
      </div>

      {/* 2. FILLER WORD DETECTIONS CARD */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquareQuote size={17} style={{ color: '#38bdf8' }} />
              <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Filler Word Detections
              </h3>
            </div>
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                color: '#38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.25)',
              }}
            >
              1.2% Latest
            </span>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.4 }}>
            Automated n-gram matching against spoken transcripts (3,450 analyzed tokens).
          </p>

          {/* List of filler words with progress bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {fillerWords.map((item) => (
              <div key={item.word} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.74rem' }}>
                  <span style={{ color: '#f1f5f9', fontWeight: 600 }}>{item.word}</span>
                  <span style={{ color: '#94a3b8', fontSize: '0.7rem' }}>
                    <strong style={{ color: '#e2e8f0' }}>{item.count} cnt</strong> ({item.percent})
                  </span>
                </div>
                <div
                  style={{
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: item.barWidth,
                      background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                      borderRadius: '9999px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trajectory Reduction Footer */}
        <div
          style={{
            marginTop: '20px',
            padding: '10px 14px',
            borderRadius: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <TrendingDown size={14} style={{ color: '#10b981' }} />
          <span style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 600 }}>
            Trajectory: -0.7% • 47% reduction in 5 sessions
          </span>
        </div>
      </div>

      {/* 3. REPEATED LEXICAL IDIOMS CARD */}
      <div
        style={{
          backgroundColor: '#0d1322',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Repeat size={17} style={{ color: '#c084fc' }} />
              <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Repeated Lexical Idioms
              </h3>
            </div>
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(192, 132, 252, 0.12)',
                color: '#c084fc',
                border: '1px solid rgba(192, 132, 252, 0.25)',
              }}
            >
              Syntactical Anchors
            </span>
          </div>

          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.4 }}>
            Frequently deployed multi-token idioms during architecture trade-offs.
          </p>

          {/* List of Idioms */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {lexicalIdioms.map((item) => (
              <div
                key={item.phrase}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f1f5f9' }}>
                    {item.phrase}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>
                    {item.context}
                  </div>
                </div>
                <span
                  style={{
                    padding: '3px 7px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(129, 140, 248, 0.15)',
                    color: '#a5b4fc',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}
                >
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lexicon Variety Score Card */}
        <div
          style={{
            marginTop: '20px',
            padding: '12px 14px',
            backgroundColor: '#090d18',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.66rem', color: '#94a3b8' }}>Lexicon Variety Score</div>
            <div style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 600, marginTop: '2px' }}>
              Broad engineering lexicon
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>78</span>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>/ 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};
