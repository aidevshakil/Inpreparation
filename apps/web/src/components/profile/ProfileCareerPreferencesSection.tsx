import React from 'react';
import { Compass, Check } from 'lucide-react';

export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
export type WorkModality = 'remote' | 'hybrid' | 'onsite';
export type SimulationDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'adaptive';

interface ProfileCareerPreferencesProps {
  jobTypes: JobType[];
  onToggleJobType: (type: JobType) => void;
  workModalities: WorkModality[];
  onToggleWorkModality: (modality: WorkModality) => void;
  interviewFocusAreas: string[];
  onToggleFocusArea: (area: string) => void;
  difficulty: SimulationDifficulty;
  onChangeDifficulty: (diff: SimulationDifficulty) => void;
  careerGoal: string;
  onChangeCareerGoal: (goal: string) => void;
}

export const ProfileCareerPreferencesSection: React.FC<ProfileCareerPreferencesProps> = ({
  jobTypes,
  onToggleJobType,
  workModalities,
  onToggleWorkModality,
  interviewFocusAreas,
  onToggleFocusArea,
  difficulty,
  onChangeDifficulty,
  careerGoal,
  onChangeCareerGoal,
}) => {
  const allJobTypes: { id: JobType; label: string }[] = [
    { id: 'full-time', label: 'Full-Time' },
    { id: 'part-time', label: 'Part-Time' },
    { id: 'contract', label: 'Contract' },
    { id: 'internship', label: 'Internship' },
    { id: 'freelance', label: 'Freelance' },
  ];

  const allModalities: { id: WorkModality; label: string }[] = [
    { id: 'remote', label: 'Remote First' },
    { id: 'hybrid', label: 'Hybrid' },
    { id: 'onsite', label: 'On-site' },
  ];

  const focusOptions = [
    { id: 'tech_depth', label: 'Technical Depth' },
    { id: 'sys_design', label: 'System Design' },
    { id: 'prob_solving', label: 'Problem Solving' },
    { id: 'behavioral', label: 'Behavioral (STAR)' },
    { id: 'comm_pacing', label: 'Communication & Pacing' },
    { id: 'role_spec', label: 'Role Specific' },
  ];

  const difficulties: { id: SimulationDifficulty; label: string }[] = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'adaptive', label: 'Mixed Adaptive' },
  ];

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
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fbbf24',
            }}
          >
            <Compass size={16} />
          </div>
          <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Career Preferences &amp; Interview Focus
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
          STEP 4 / 4
        </span>
      </div>

      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
        Specify work modality, question difficulty, and preparation objectives.
      </p>

      {/* 1. Preferred Job Type */}
      <div style={{ marginBottom: '18px' }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
          Preferred Job Type
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {allJobTypes.map((item) => {
            const isSelected = jobTypes.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onToggleJobType(item.id)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  border: isSelected
                    ? '1px solid rgba(129, 140, 248, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Work Preference */}
      <div style={{ marginBottom: '18px' }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
          Work Preference
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {allModalities.map((item) => {
            const isSelected = workModalities.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onToggleWorkModality(item.id)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  border: isSelected
                    ? '1px solid rgba(129, 140, 248, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Preferred Interview Focus Checkboxes */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
          Preferred Interview Focus <span style={{ color: '#64748b', fontWeight: 400 }}>(Select all relevant drill areas)</span>
        </label>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {focusOptions.map((opt) => {
            const checked = interviewFocusAreas.includes(opt.id);
            return (
              <label
                key={opt.id}
                onClick={() => onToggleFocusArea(opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: checked ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: checked ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontSize: '0.78rem',
                  color: checked ? '#f8fafc' : '#94a3b8',
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '4px',
                    backgroundColor: checked ? '#4f46e5' : 'rgba(255, 255, 255, 0.06)',
                    border: checked ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {checked && <Check size={11} strokeWidth={3} color="#ffffff" />}
                </div>
                <span>{opt.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. Preferred Simulation Difficulty */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
          Preferred Simulation Difficulty
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {difficulties.map((item) => {
            const isSelected = difficulty === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChangeDifficulty(item.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected ? '#4f46e5' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  border: isSelected
                    ? '1px solid rgba(129, 140, 248, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Career Goal & Target Milestone */}
      <div>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
          Career Goal &amp; Target Milestone <span style={{ color: '#64748b', fontWeight: 400 }}>(Optional)</span>
        </label>
        <textarea
          rows={4}
          value={careerGoal}
          onChange={(e) => onChangeCareerGoal(e.target.value)}
          placeholder="Describe your career transition goal, target companies, or specific technical competencies you wish to conquer..."
          style={{
            width: '100%',
            padding: '12px 14px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            color: '#f8fafc',
            fontSize: '0.82rem',
            lineHeight: 1.5,
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
        />
        <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block', marginTop: '4px' }}>
          This helps synthesize your personalized AI improvement plan and recommended mock questions.
        </span>
      </div>
    </div>
  );
};
