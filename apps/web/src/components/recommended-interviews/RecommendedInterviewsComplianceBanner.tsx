import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface RecommendedInterviewsComplianceBannerProps {
  onUpdateProfile?: () => void;
  onReviewAnalysis?: () => void;
}

export const RecommendedInterviewsComplianceBanner: React.FC<RecommendedInterviewsComplianceBannerProps> = ({
  onUpdateProfile,
  onReviewAnalysis,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '16px 22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px',
        fontSize: '0.74rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', maxWidth: '780px' }}>
        <ShieldCheck size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
        <div>
          <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
            Keep Your Recommendations Relevant &amp; Transparent
          </div>
          <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.45, fontSize: '0.72rem' }}>
            Recommendations are deterministic practice suggestions calibrated from your submitted dossier, not hiring predictions. Zero facial emotion analysis or psychological profiling; feeds measure technical answers and observable presentation framing only.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.74rem', fontWeight: 600 }}>
        <button
          onClick={onUpdateProfile}
          style={{ background: 'transparent', border: 'none', color: '#818cf8', cursor: 'pointer', padding: 0 }}
        >
          Update Profile
        </button>
        <span style={{ color: '#475569' }}>•</span>
        <button
          onClick={onReviewAnalysis}
          style={{ background: 'transparent', border: 'none', color: '#818cf8', cursor: 'pointer', padding: 0 }}
        >
          Review Analysis (#24)
        </button>
        <span style={{ color: '#475569' }}>•</span>
        <a
          href="#algorithm"
          onClick={(e) => {
            e.preventDefault();
            alert('Inprep AI Recommendation Engine matches AST-extracted skill tags with rubric difficulty tiers.');
          }}
          style={{ color: '#818cf8', textDecoration: 'none' }}
        >
          Learn Algorithm
        </a>
      </div>
    </div>
  );
};
