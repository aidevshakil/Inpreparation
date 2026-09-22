import React from 'react';
import { Sparkles, ArrowRight, Search } from 'lucide-react';

interface FaqHeroSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onStartPracticing: () => void;
  onExploreHowItWorks: () => void;
  onSelectSuggestedQuery: (query: string) => void;
}

export const FaqHeroSearch: React.FC<FaqHeroSearchProps> = ({
  searchQuery,
  onSearchChange,
  onStartPracticing,
  onExploreHowItWorks,
  onSelectSuggestedQuery
}) => {
  const suggestedQueries = [
    'How does AI evaluate my interview?',
    'How many questions are in an interview?',
    'What are AI credits?',
    'How does camera analysis work?',
    'Can I retake an interview?'
  ];

  const valuePillars = [
    'Transparent Scoring',
    'Observable Signals Only',
    'Zero Psychological Profiling',
    '256-bit Encrypted Vault'
  ];

  return (
    <section style={{ padding: '40px 0 30px', position: 'relative' }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '240px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 80%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Center Badge */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '100px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--primary-color)'
          }}>
            <Sparkles size={13} color="var(--primary-color)" />
            <span>HELP CENTER & KNOWLEDGE BASE</span>
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            margin: 0
          }}>
            <span style={{ color: 'var(--text-main)' }}>Questions? </span>
            <span style={{
              background: 'linear-gradient(135deg, var(--primary-color) 0%, #8b5cf6 50%, #0284c7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              We’ve Got Answers.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p style={{
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto 28px',
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: 1.65
        }}>
          Learn how Inprep AI conducts multimodal evaluations, how your AI credits are spent, and the strict zero-psychological-profiling privacy protocols guarding your voice and video.
        </p>

        {/* 2 CTA Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '28px'
        }}>
          <button
            onClick={onStartPracticing}
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '100px',
              padding: '12px 26px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.opacity = '0.92';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            <span>Start Practicing Free</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onExploreHowItWorks}
            style={{
              background: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '100px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-card-hover)';
              e.currentTarget.style.borderColor = 'var(--border-accent)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-surface)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <span>Explore How It Works</span>
          </button>
        </div>

        {/* 4 Value Bullets Ribbon */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '18px',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            padding: '8px 20px',
            borderRadius: '100px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                <span style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#0284c7',
                  display: 'inline-block'
                }} />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Search Bar */}
        <div style={{
          maxWidth: '780px',
          margin: '0 auto 16px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding: '12px 18px',
            boxShadow: 'var(--shadow-md)',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}>
            <Search size={18} color="var(--text-muted)" style={{ marginRight: '12px', flexShrink: 0 }} />
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search your question (e.g. 'How does AI evaluate my interview?', 'What are AI credits?')..."
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-main)',
                fontSize: '14px',
                fontFamily: 'inherit'
              }}
            />

            <div style={{
              padding: '2px 8px',
              borderRadius: '6px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontWeight: 600,
              marginLeft: '12px',
              flexShrink: 0
            }}>
              /
            </div>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            TRY:
          </span>
          {suggestedQueries.map((query, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSuggestedQuery(query)}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '100px',
                padding: '5px 12px',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-card-hover)';
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.color = 'var(--text-main)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-surface)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {query}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
