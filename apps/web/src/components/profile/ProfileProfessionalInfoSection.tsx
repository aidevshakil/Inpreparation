import React from 'react';
import { Briefcase, AlertCircle } from 'lucide-react';

interface ProfileProfessionalInfoProps {
  currentRole: string;
  targetRole: string;
  seniority: string;
  yearsOfExperience: string;
  currentIndustry: string;
  targetIndustry: string;
  onChangeCurrentRole: (val: string) => void;
  onChangeTargetRole: (val: string) => void;
  onChangeSeniority: (val: string) => void;
  onChangeYearsOfExperience: (val: string) => void;
  onChangeCurrentIndustry: (val: string) => void;
  onChangeTargetIndustry: (val: string) => void;
  showValidationError?: boolean;
}

export const ProfileProfessionalInfoSection: React.FC<ProfileProfessionalInfoProps> = ({
  currentRole,
  targetRole,
  seniority,
  yearsOfExperience,
  currentIndustry,
  targetIndustry,
  onChangeCurrentRole,
  onChangeTargetRole,
  onChangeSeniority,
  onChangeYearsOfExperience,
  onChangeCurrentIndustry,
  onChangeTargetIndustry,
  showValidationError = false,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: showValidationError
          ? '1px solid rgba(244, 63, 94, 0.45)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
            }}
          >
            <Briefcase size={16} />
          </div>
          <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Professional Information
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.8px',
            color: '#64748b',
            textTransform: 'uppercase',
          }}
        >
          STEP 2 / 4
        </span>
      </div>

      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
        Directly informs seniority benchmarks and rubric evaluation depth.
      </p>

      {/* Form Fields Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
        {/* Current Role */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Current Role <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <input
            type="text"
            value={currentRole}
            onChange={(e) => onChangeCurrentRole(e.target.value)}
            placeholder="e.g. Flutter Developer"
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: showValidationError && !currentRole
                ? '1px solid #f43f5e'
                : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
            }}
          />
          {showValidationError && !currentRole && (
            <span style={{ fontSize: '0.72rem', color: '#fb7185', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <AlertCircle size={12} /> Current role is required.
            </span>
          )}
        </div>

        {/* Target Role */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Target Role <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <input
            type="text"
            value={targetRole}
            onChange={(e) => onChangeTargetRole(e.target.value)}
            placeholder="e.g. Backend Developer (Python / Go)"
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: showValidationError && !targetRole
                ? '1px solid #f43f5e'
                : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
            }}
          />
          {showValidationError && !targetRole && (
            <span style={{ fontSize: '0.72rem', color: '#fb7185', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <AlertCircle size={12} /> Target role is required.
            </span>
          )}
        </div>

        {/* Seniority Level */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Seniority / Experience Level
          </label>
          <select
            value={seniority}
            onChange={(e) => onChangeSeniority(e.target.value)}
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: '#0c101a',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="junior">Junior (0 - 2 years)</option>
            <option value="mid">Mid-Level (2 - 5 years)</option>
            <option value="senior">Senior (5 - 8 years)</option>
            <option value="lead">Staff / Lead (8+ years)</option>
            <option value="principal">Principal / Architect</option>
          </select>
        </div>

        {/* Years of Experience */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Years of Experience <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <input
            type="text"
            value={yearsOfExperience}
            onChange={(e) => onChangeYearsOfExperience(e.target.value)}
            placeholder="e.g. 3.5"
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
            }}
          />
        </div>

        {/* Current Industry */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Current Industry
          </label>
          <select
            value={currentIndustry}
            onChange={(e) => onChangeCurrentIndustry(e.target.value)}
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: '#0c101a',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="fintech">FinTech &amp; Payments</option>
            <option value="saas">Enterprise SaaS</option>
            <option value="health">Healthcare &amp; MedTech</option>
            <option value="ecommerce">E-Commerce &amp; Retail</option>
            <option value="gaming">Gaming &amp; Entertainment</option>
          </select>
        </div>

        {/* Target Industry */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Target Industry
          </label>
          <select
            value={targetIndustry}
            onChange={(e) => onChangeTargetIndustry(e.target.value)}
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: '#0c101a',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            <option value="high-scale-saas">High-Scale Distributed SaaS</option>
            <option value="ai-ml">Artificial Intelligence &amp; LLM Platforms</option>
            <option value="fintech-crypto">FinTech &amp; High-Frequency Trading</option>
            <option value="cloud-infra">Cloud &amp; DevOps Infrastructure</option>
            <option value="defense-aerospace">Aerospace &amp; Deep Tech</option>
          </select>
        </div>
      </div>
    </div>
  );
};
