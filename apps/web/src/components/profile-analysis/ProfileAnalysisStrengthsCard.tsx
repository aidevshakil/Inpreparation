import React from 'react';
import { Sparkles } from 'lucide-react';
interface ProfileAnalysisStrengthsCardProps {
  dossierData?: any;
}

export const ProfileAnalysisStrengthsCard: React.FC<ProfileAnalysisStrengthsCardProps> = ({ dossierData }) => {
  const strengths = dossierData?.strengths || [];


  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <Sparkles size={18} style={{ color: '#c084fc' }} />
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Evidence-Based Potential Strengths
        </h3>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.45 }}>
        Key technical signals extracted directly from your spoken explanations and CV metrics:
      </p>

      {/* 2x2 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
          marginBottom: '14px',
        }}
      >
        {strengths.length > 0 ? strengths.map((s: any, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>
                {s.title || `Strength ${idx + 1}`}
              </div>
              <span style={{ fontSize: '0.64rem', color: s.badgeColor || '#38bdf8', fontFamily: 'monospace', fontWeight: 600 }}>
                {s.citation || '[Analyzed]'}
              </span>
            </div>

            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              {s.description || s}
            </p>
          </div>
        )) : (
          <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Awaiting strengths synthesis...</div>
        )}
      </div>

      <p style={{ fontSize: '0.68rem', color: '#64748b', margin: 0 }}>
        * Insights are strictly fact-based. No psychological profiling or personality inference.
      </p>
    </div>
  );
};
