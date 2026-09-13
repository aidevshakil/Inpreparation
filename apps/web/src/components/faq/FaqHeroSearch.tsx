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
            background: 'rgba(124, 58, 237, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#c084fc',
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.25)'
          }}>
            <Sparkles size={13} color="#c084fc" />
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
            <span style={{ color: '#ffffff' }}>Questions? </span>
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #38bdf8 100%)',
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
          color: '#94a3b8',
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
              background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
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
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4), 0 0 15px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(124, 58, 237, 0.5), 0 0 20px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.4), 0 0 15px rgba(99, 102, 241, 0.3)';
            }}
          >
            <span>Start Practicing Free</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onExploreHowItWorks}
            style={{
              background: '#0e1320',
              color: '#e2e8f0',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#141c2e';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0e1320';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
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
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: '#94a3b8',
                  fontWeight: 500
                }}
              >
                <span style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#38bdf8',
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
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            padding: '12px 18px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}>
            <Search size={18} color="#64748b" style={{ marginRight: '12px', flexShrink: 0 }} />
            
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
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'inherit'
              }}
            />

            <div style={{
              padding: '2px 8px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '11px',
              color: '#64748b',
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
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
            TRY:
          </span>
          {suggestedQueries.map((query, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSuggestedQuery(query)}
              style={{
                background: '#0e1320',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '100px',
                padding: '5px 12px',
                fontSize: '12px',
                color: '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#151c2e';
                e.currentTarget.style.borderColor = 'rgba(129, 140, 248, 0.3)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0e1320';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.color = '#cbd5e1';
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
