import React from 'react';
import { Compass, Check } from 'lucide-react';

export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
export type WorkModality = 'remote' | 'hybrid' | 'onsite';
export type SimulationDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'adaptive';

interface ProfileCareerPreferencesProps {
  isEditing: boolean;
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
  isEditing,
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
    <div className="card">
      {/* Section Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
        <div className="flex items-center gap-3">
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)',
          }}>
            <Compass size={16} />
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Career Preferences & Focus</h3>
            {isEditing && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>Work modality and preparation objectives</p>}
          </div>
        </div>

        {isEditing && (
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            STEP 4 / 4
          </span>
        )}
      </div>

      {!isEditing ? (
        // VIEW MODE
        <div className="flex-col gap-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div>
              <span className="label">Job Types</span>
              <div className="flex items-center gap-2 flex-wrap mt-1">
                {jobTypes.length > 0 ? jobTypes.map((t) => (
                  <span key={t} className="badge">{allJobTypes.find(o => o.id === t)?.label}</span>
                )) : <span style={{ color: 'var(--text-muted)' }}>None specified</span>}
              </div>
            </div>
            
            <div>
              <span className="label">Work Modalities</span>
              <div className="flex items-center gap-2 flex-wrap mt-1">
                {workModalities.length > 0 ? workModalities.map((m) => (
                  <span key={m} className="badge">{allModalities.find(o => o.id === m)?.label}</span>
                )) : <span style={{ color: 'var(--text-muted)' }}>None specified</span>}
              </div>
            </div>

            <div>
              <span className="label">Simulation Difficulty</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="badge" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--primary-color)' }}>
                  {difficulties.find(o => o.id === difficulty)?.label}
                </span>
              </div>
            </div>
          </div>
          
          <div className="divider" style={{ margin: '8px 0' }} />
          
          <div>
            <span className="label">Interview Focus Areas</span>
            <div className="flex items-center gap-2 flex-wrap mt-1">
              {interviewFocusAreas.length > 0 ? interviewFocusAreas.map((f) => (
                <span key={f} className="badge" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-color)', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                  <Check size={10} /> {focusOptions.find(o => o.id === f)?.label}
                </span>
              )) : <span style={{ color: 'var(--text-muted)' }}>None specified</span>}
            </div>
          </div>

          {careerGoal && (
            <div style={{ padding: '16px', backgroundColor: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <span className="label" style={{ marginBottom: '8px' }}>Career Goal & Target Milestone</span>
              <p style={{ color: 'var(--text-main)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                {careerGoal}
              </p>
            </div>
          )}
        </div>
      ) : (
        // EDIT MODE
        <div className="flex-col gap-6">
          {/* 1. Preferred Job Type */}
          <div>
            <label className="label" style={{ marginBottom: '8px' }}>Preferred Job Type</label>
            <div className="flex items-center flex-wrap gap-2">
              {allJobTypes.map((item) => {
                const isSelected = jobTypes.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onToggleJobType(item.id)}
                    className={isSelected ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Work Preference */}
          <div>
            <label className="label" style={{ marginBottom: '8px' }}>Work Preference</label>
            <div className="flex items-center flex-wrap gap-2">
              {allModalities.map((item) => {
                const isSelected = workModalities.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onToggleWorkModality(item.id)}
                    className={isSelected ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Preferred Interview Focus Checkboxes */}
          <div>
            <label className="label" style={{ marginBottom: '8px' }}>
              Preferred Interview Focus <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Select all relevant)</span>
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {focusOptions.map((opt) => {
                const checked = interviewFocusAreas.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    onClick={() => onToggleFocusArea(opt.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px',
                      borderRadius: '8px', cursor: 'pointer', userSelect: 'none',
                      backgroundColor: checked ? 'var(--bg-surface)' : 'var(--bg-main)',
                      border: checked ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                      color: checked ? 'var(--text-main)' : 'var(--text-muted)',
                      fontSize: '13px',
                    }}
                  >
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '4px',
                      backgroundColor: checked ? 'var(--text-main)' : 'transparent',
                      border: checked ? '1px solid var(--text-main)' : '1px solid var(--border-focus)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {checked && <Check size={12} strokeWidth={3} color="var(--bg-main)" />}
                    </div>
                    <span>{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 4. Preferred Simulation Difficulty */}
          <div>
            <label className="label" style={{ marginBottom: '8px' }}>Preferred Simulation Difficulty</label>
            <div className="flex items-center flex-wrap gap-2">
              {difficulties.map((item) => {
                const isSelected = difficulty === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onChangeDifficulty(item.id)}
                    className={isSelected ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Career Goal & Target Milestone */}
          <div>
            <label className="label" style={{ marginBottom: '8px' }}>
              Career Goal & Target Milestone <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
            </label>
            <textarea
              className="input"
              rows={4}
              value={careerGoal}
              onChange={(e) => onChangeCareerGoal(e.target.value)}
              placeholder="Describe your career transition goal, target companies, or specific technical competencies you wish to conquer..."
              style={{ resize: 'vertical', lineHeight: 1.5 }}
            />
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
              This helps synthesize your personalized AI improvement plan and recommended mock questions.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
