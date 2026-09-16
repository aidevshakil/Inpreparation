import React from 'react';
import { Briefcase, Target, Sliders } from 'lucide-react';

interface IntroResultWhatYouSharedCardProps {
  diagnosticData?: any;
  targetRole?: string;
}

export const IntroResultWhatYouSharedCard: React.FC<IntroResultWhatYouSharedCardProps> = ({
  diagnosticData,
  targetRole = 'General Assessment',
}) => {
  const skills = diagnosticData?.focusAreas || [];

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          What You Shared (Synthesized Dossier)
        </h3>

        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
          Extracted from CV &amp; Audio Prompts
        </span>
      </div>

      {/* 2-Column Split */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '14px',
          marginBottom: '20px',
        }}
      >
        {/* Left Column */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '14px 16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Briefcase size={14} style={{ color: '#38bdf8' }} />
            <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700 }}>
              Background &amp; Trajectory
            </span>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600, marginBottom: '2px' }}>
            {diagnosticData ? 'Company Target: ' + (diagnosticData?.targetCompanyTypes?.[0] || 'Not specified') : 'Awaiting data'}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
            {diagnosticData ? 'Targeting: ' + (diagnosticData?.seniorityTier || 'Not specified') : ''}
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '14px 16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Target size={14} style={{ color: '#c084fc' }} />
            <span style={{ fontSize: '0.78rem', color: '#c084fc', fontWeight: 700 }}>
              Career &amp; Learning Goals
            </span>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600, marginBottom: '2px' }}>
            {targetRole}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
            {diagnosticData ? 'Focusing on architectural articulation' : 'Pending Synthesis'}
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div style={{ marginBottom: '18px' }}>
        <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
          TECHNICAL STACK &amp; VALIDATED SKILLS
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.length > 0 ? skills.map((skill: string) => (
            <span
              key={skill}
              style={{
                fontSize: '0.72rem',
                color: '#cbd5e1',
                padding: '4px 10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {skill}
            </span>
          )) : (
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>No verified skills yet</span>
          )}
        </div>
      </div>

      {/* Preferred Interview Mode Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sliders size={14} style={{ color: '#818cf8' }} />
          <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Preferred Interview Mode:</span>
          <span style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 600 }}>
            {targetRole} Interview Mode
          </span>
        </div>

        <span
          style={{
            fontSize: '0.66rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            border: '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          Calibrated
        </span>
      </div>
    </div>
  );
};
