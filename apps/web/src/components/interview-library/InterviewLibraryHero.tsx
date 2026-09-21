import React from 'react';
import { Sparkles, ArrowRight, Search, Mic, GitFork, BarChart3, ShieldCheck, ChevronDown } from 'lucide-react';

interface InterviewLibraryHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectPopularTag: (tag: string) => void;
  selectedRoleDomain: string;
  onSelectRoleDomain: (domain: string) => void;
  selectedLevel: string;
  onSelectLevel: (level: string) => void;
  selectedDifficulty: string;
  onSelectDifficulty: (diff: string) => void;
  selectedFormat: string;
  onSelectFormat: (fmt: string) => void;
  onResetFilters: () => void;
  onExploreInterviews: () => void;
  onGetRecommendations: () => void;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export const InterviewLibraryHero: React.FC<InterviewLibraryHeroProps> = ({
  searchQuery,
  onSearchChange,
  onSelectPopularTag,
  selectedRoleDomain,
  onSelectRoleDomain,
  selectedLevel,
  onSelectLevel,
  selectedDifficulty,
  onSelectDifficulty,
  selectedFormat,
  onSelectFormat,
  onResetFilters,
  onExploreInterviews,
  onGetRecommendations,
  primaryCtaText = 'Explore Interviews',
  secondaryCtaText = 'Get Personalized Recommendations'
}) => {
  const popularTags = [
    'Python Developer',
    'Flutter Developer',
    'Data Analyst',
    'Machine Learning',
    'React Developer',
    'Backend Developer'
  ];

  const activeFiltersCount = 
    (selectedRoleDomain !== 'All' ? 1 : 0) +
    (selectedLevel !== 'All' ? 1 : 0) +
    (selectedDifficulty !== 'All' ? 1 : 0) +
    (selectedFormat !== 'All' ? 1 : 0) +
    (searchQuery.trim() !== '' ? 1 : 0);

  return (
    <section style={{ padding: '48px 0 32px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.18) 0%, rgba(56, 189, 248, 0.08) 45%, rgba(0, 0, 0, 0) 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Centered Content */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
          {/* Badge: INTERVIEW CATEGORIES */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '5px 14px', borderRadius: '100px', marginBottom: '22px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)', boxShadow: '0 0 8px var(--primary-color)' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              INTERVIEW CATEGORIES
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(32px, 4.2vw, 48px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.025em',
            lineHeight: 1.18,
            marginBottom: '18px'
          }}>
            Practice the Interview That<br />
            <span style={{ color: 'var(--primary-color)' }}>Matches Your Career</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '15.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto 32px'
          }}>
            Explore interview categories designed around real-world roles, technologies, experience levels, and career paths calibrated by hiring leaders.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '38px' }}>
            <button
              onClick={onExploreInterviews}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                border: 'none',
                borderRadius: '28px',
                padding: '13px 26px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(99, 102, 241, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
              }}
            >
              <span>{primaryCtaText}</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={onGetRecommendations}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '28px',
                padding: '13px 24px',
                color: 'var(--text-main)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <Sparkles size={15} color="var(--primary-color)" />
              <span>{secondaryCtaText}</span>
            </button>
          </div>

          {/* 4 Value Badges Ribbon */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {[
              { label: 'AI-Powered Interviews', icon: <Mic size={14} color="#818cf8" /> },
              { label: 'Multiple Career Paths', icon: <GitFork size={14} color="#38bdf8" /> },
              { label: 'Beginner to Advanced', icon: <BarChart3 size={14} color="#c084fc" /> },
              { label: 'Precision Matching', icon: <ShieldCheck size={14} color="#38bdf8" /> }
            ].map((badge, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '100px',
                  padding: '7px 16px',
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {badge.icon}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Search & Filter Console Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '24px 28px',
          boxShadow: 'var(--shadow-md)'
        }}>
          {/* Top Search Input */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '12px 18px',
            marginBottom: '18px',
            transition: 'border-color 0.2s ease'
          }}>
            <Search size={18} color="var(--text-muted)" style={{ marginRight: '12px', flexShrink: 0 }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search roles, technologies, or interview topics..."
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
            <span style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '2px 8px',
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontWeight: 600,
              flexShrink: 0
            }}>
              /
            </span>
          </div>

          {/* Middle Popular Tags */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginRight: '4px' }}>
              Popular:
            </span>
            {popularTags.map((tag, idx) => {
              const isActive = searchQuery.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={idx}
                  onClick={() => onSelectPopularTag(tag)}
                  style={{
                    background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-surface)',
                    border: isActive ? '1px solid var(--primary-color)' : '1px solid var(--border-subtle)',
                    borderRadius: '100px',
                    padding: '5px 14px',
                    fontSize: '12px',
                    color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--primary-color)';
                      e.currentTarget.style.color = 'var(--primary-color)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Bottom Dropdowns Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              {/* Role Domains */}
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedRoleDomain}
                  onChange={(e) => onSelectRoleDomain(e.target.value)}
                  style={{
                    appearance: 'none',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '100px',
                    padding: '8px 32px 8px 16px',
                    fontSize: '12.5px',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="All">All Role Domains</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Product">Product Management</option>
                  <option value="Data & AI">Data & AI</option>
                  <option value="Design">Design</option>
                </select>
                <ChevronDown size={14} color="var(--text-muted)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>

              {/* Levels */}
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedLevel}
                  onChange={(e) => onSelectLevel(e.target.value)}
                  style={{
                    appearance: 'none',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '100px',
                    padding: '8px 32px 8px 16px',
                    fontSize: '12.5px',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="All">All Levels</option>
                  <option value="Entry">Entry Level</option>
                  <option value="Mid">Mid Level (L4)</option>
                  <option value="Senior">Senior (L5)</option>
                  <option value="Staff">Staff / Lead (L6+)</option>
                </select>
                <ChevronDown size={14} color="var(--text-muted)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>

              {/* Difficulties */}
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => onSelectDifficulty(e.target.value)}
                  style={{
                    appearance: 'none',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '100px',
                    padding: '8px 32px 8px 16px',
                    fontSize: '12.5px',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="All">All Difficulties</option>
                  <option value="Standard">Standard</option>
                  <option value="Hard">Hard</option>
                  <option value="Expert">Expert</option>
                </select>
                <ChevronDown size={14} color="var(--text-muted)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>

              {/* Formats */}
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedFormat}
                  onChange={(e) => onSelectFormat(e.target.value)}
                  style={{
                    appearance: 'none',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '100px',
                    padding: '8px 32px 8px 16px',
                    fontSize: '12.5px',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="All">All Formats</option>
                  <option value="5-Question">5-Question Mock</option>
                  <option value="System Design">System Design Deep-Dive</option>
                  <option value="Behavioral">Behavioral STAR</option>
                </select>
                <ChevronDown size={14} color="var(--text-muted)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Right Status & Reset */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{
                fontSize: '11.5px',
                color: 'var(--text-muted)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '4px 10px',
                borderRadius: '6px'
              }}>
                Filters Active: <strong style={{ color: activeFiltersCount > 0 ? 'var(--primary-color)' : 'var(--text-secondary)' }}>{activeFiltersCount}</strong>
              </span>

              {activeFiltersCount > 0 && (
                <button
                  onClick={onResetFilters}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-color)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
