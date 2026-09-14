import React from 'react';
import { Briefcase, Building, ChevronRight, Award, Target, Hash } from 'lucide-react';

interface ProfileProfessionalInfoProps {
  isEditing: boolean;
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
  isEditing,
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
}) => {
  return (
    <div className="card">
      {/* Section Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
        <div className="flex items-center gap-3">
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)',
          }}>
            <Briefcase size={16} />
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Professional Status</h3>
            {isEditing && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>Current trajectory and target goals</p>}
          </div>
        </div>

        {isEditing && (
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            STEP 2 / 4
          </span>
        )}
      </div>

      {!isEditing ? (
        // VIEW MODE
        <div className="flex-col gap-4">
          <div className="flex-col gap-3">
            <span className="label">Career Trajectory</span>
            <div className="flex items-center flex-wrap gap-3" style={{ padding: '16px', backgroundColor: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <Briefcase size={16} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{currentRole}</span>
              </div>
              
              <ChevronRight size={16} style={{ color: 'var(--primary-color)' }} />
              
              <div className="flex items-center gap-2">
                <Target size={16} style={{ color: 'var(--primary-color)' }} />
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{targetRole}</span>
              </div>
            </div>
          </div>

          <div className="divider" style={{ margin: '8px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div>
              <span className="label">Seniority Level</span>
              <div className="flex items-center gap-2">
                <Award size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)', textTransform: 'capitalize' }}>{seniority}</span>
              </div>
            </div>
            
            <div>
              <span className="label">Years of Experience</span>
              <div className="flex items-center gap-2">
                <Hash size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)' }}>{yearsOfExperience} years</span>
              </div>
            </div>

            <div>
              <span className="label">Current Industry</span>
              <div className="flex items-center gap-2">
                <Building size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)' }}>{currentIndustry}</span>
              </div>
            </div>

            <div>
              <span className="label">Target Industry</span>
              <div className="flex items-center gap-2">
                <Target size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)' }}>{targetIndustry}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // EDIT MODE
        <div className="flex-col gap-4">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            {/* Current Role */}
            <div>
              <label className="label">Current Job Title / Role</label>
              <input
                type="text"
                className="input"
                value={currentRole}
                onChange={(e) => onChangeCurrentRole(e.target.value)}
                placeholder="e.g. Frontend Developer"
              />
            </div>

            {/* Target Role */}
            <div>
              <label className="label">Target Job Title (Goal)</label>
              <input
                type="text"
                className="input"
                value={targetRole}
                onChange={(e) => onChangeTargetRole(e.target.value)}
                placeholder="e.g. Senior Backend Developer"
              />
            </div>

            {/* Seniority Level */}
            <div>
              <label className="label">Target Seniority Level</label>
              <select
                className="input"
                value={seniority}
                onChange={(e) => onChangeSeniority(e.target.value)}
                style={{ cursor: 'pointer' }}
              >
                <option value="junior">Junior / Entry Level</option>
                <option value="mid">Mid-Level</option>
                <option value="senior">Senior</option>
                <option value="staff">Staff / Principal</option>
                <option value="lead">Lead / Manager</option>
              </select>
            </div>

            {/* Years of Experience */}
            <div>
              <label className="label">Total Years of Experience</label>
              <input
                type="number"
                step="0.5"
                min="0"
                className="input"
                value={yearsOfExperience}
                onChange={(e) => onChangeYearsOfExperience(e.target.value)}
                placeholder="e.g. 3.5"
              />
            </div>

            {/* Current Industry */}
            <div>
              <label className="label">Current Industry</label>
              <input
                type="text"
                className="input"
                value={currentIndustry}
                onChange={(e) => onChangeCurrentIndustry(e.target.value)}
                placeholder="e.g. FinTech, E-commerce"
              />
            </div>

            {/* Target Industry */}
            <div>
              <label className="label">Target Industry</label>
              <input
                type="text"
                className="input"
                value={targetIndustry}
                onChange={(e) => onChangeTargetIndustry(e.target.value)}
                placeholder="e.g. DeepTech SaaS, AI"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
