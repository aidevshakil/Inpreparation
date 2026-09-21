import React from 'react';
import { Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

interface CvExecutiveAiSynthesisCardProps {
  onEnhanceWithAi?: () => void;
  candidateRole?: string;
  skills?: string[];
  strengths?: string[];
  improvements?: string[];
}

export const CvExecutiveAiSynthesisCard: React.FC<CvExecutiveAiSynthesisCardProps> = ({
  onEnhanceWithAi,
  candidateRole = 'Fullstack Flutter Developer',
  skills = [],
  strengths,
  improvements,
}) => {
  const topSkillsList = skills.length > 0 ? skills.slice(0, 4).join(', ') : 'Flutter, Dart, Firebase, REST APIs';

  const defaultStrengths = strengths && strengths.length > 0
    ? strengths
    : [
        `Production competence in ${topSkillsList} verified through project structure and architectural patterns.`,
        `Demonstrated end-to-end full-stack capability aligned with ${candidateRole} expectations.`,
      ];

  const defaultImprovements = improvements && improvements.length > 0
    ? improvements
    : [
        `Quantify business impact: Add benchmark performance numbers, app store user counts, or latency reductions.`,
        `Include automated testing metrics (e.g., unit/widget coverage, CI/CD pipeline deployment speed).`,
      ];

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '16px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <Sparkles size={16} style={{ color: 'var(--primary-color)' }} />
        <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
          Executive AI Synthesis
        </h3>
      </div>

      {/* Section 1: Key Competitive Strengths */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', fontWeight: 700, color: '#059669', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: '6px' }}>
          <CheckCircle2 size={12} />
          <span>Key Competitive Strengths</span>
        </div>

        <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {defaultStrengths.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Section 2: Targeted Polish Opportunities */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', fontWeight: 700, color: '#d97706', letterSpacing: '0.6px', textTransform: 'uppercase', marginBottom: '6px' }}>
          <TrendingUp size={12} />
          <span>Targeted Polish Opportunities</span>
        </div>

        <ul style={{ margin: 0, paddingLeft: '14px', fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {defaultImprovements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={onEnhanceWithAi}
        style={{
          width: '100%',
          padding: '8px 14px',
          backgroundColor: 'rgba(168, 85, 247, 0.12)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          borderRadius: '9px',
          color: '#7c3aed',
          fontSize: '0.76rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.18s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.22)';
          e.currentTarget.style.color = '#6d28d9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.12)';
          e.currentTarget.style.color = '#7c3aed';
        }}
      >
        <Sparkles size={13} />
        <span>Enhance CV with AI Coach</span>
      </button>
    </div>
  );
};
