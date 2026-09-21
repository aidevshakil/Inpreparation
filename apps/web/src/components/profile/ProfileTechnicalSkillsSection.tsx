import React, { useState } from 'react';
import { Code, Activity, X } from 'lucide-react';

export type SkillLevel = 'basic' | 'intermediate' | 'advanced' | 'expert';

export interface SkillDepthItem {
  id: string;
  name: string;
  level: SkillLevel;
  dotColor?: string;
}

interface ProfileTechnicalSkillsProps {
  isEditing: boolean;
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
  skillDepths: SkillDepthItem[];
  onChangeSkillDepth: (id: string, level: SkillLevel) => void;
}

export const ProfileTechnicalSkillsSection: React.FC<ProfileTechnicalSkillsProps> = ({
  isEditing,
  skills,
  onAddSkill,
  onRemoveSkill,
  skillDepths,
  onChangeSkillDepth,
}) => {
  const [newSkillInput, setNewSkillInput] = useState('');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkillInput.trim()) {
      onAddSkill(newSkillInput.trim());
      setNewSkillInput('');
    }
  };

  const getLevelLabel = (level: SkillLevel) => {
    switch (level) {
      case 'basic': return 'Basic';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      case 'expert': return 'Expert';
    }
  };

  const getLevelColor = (level: SkillLevel) => {
    switch (level) {
      case 'basic': return 'var(--text-muted)';
      case 'intermediate': return 'var(--color-info)';
      case 'advanced': return 'var(--primary-color)';
      case 'expert': return 'var(--color-warning)';
    }
  };

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
            <Code size={16} />
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Technical Arsenal</h3>
            {isEditing && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>Core competencies & depth calibration</p>}
          </div>
        </div>

        {isEditing && (
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            STEP 3 / 4
          </span>
        )}
      </div>

      {!isEditing ? (
        // VIEW MODE
        <div className="flex-col gap-6">
          {/* Top Level Skills */}
          <div>
            <span className="label" style={{ marginBottom: '8px' }}>Core Technologies</span>
            <div className="flex items-center flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
              {skills.length === 0 && <span style={{ color: 'var(--text-muted)' }}>No skills listed.</span>}
            </div>
          </div>

          {/* Deep Dives */}
          <div>
            <span className="label" style={{ marginBottom: '8px' }}>Specialized Depth Areas</span>
            <div className="flex-col gap-2">
              {skillDepths.map((item) => (
                <div key={item.id} className="flex items-center justify-between" style={{ padding: '12px 16px', backgroundColor: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.dotColor || 'var(--primary-color)' }} />
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-main)' }}>{item.name}</span>
                  </div>
                  <span className="badge" style={{ backgroundColor: 'transparent', borderColor: getLevelColor(item.level), color: getLevelColor(item.level) }}>
                    <Activity size={12} />
                    {getLevelLabel(item.level)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // EDIT MODE
        <div className="flex-col gap-6">
          {/* 1. Skill Tags Input */}
          <div>
            <label className="label">Core Technologies &amp; Languages</label>
            <div className="flex items-center flex-wrap gap-2" style={{ padding: '12px', minHeight: '48px', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-subtle)', borderRadius: '10px', marginBottom: '8px' }}>
              {skills.map((skill) => (
                <div key={skill} className="badge" style={{ padding: '4px 8px', gap: '4px' }}>
                  <span>{skill}</span>
                  <button
                    onClick={() => onRemoveSkill(skill)}
                    style={{
                      background: 'transparent', border: 'none', color: 'var(--text-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', padding: '2px', borderRadius: '50%',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-error)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}

              {/* Inline Add Input */}
              <form onSubmit={handleAddSubmit} style={{ flex: 1, minWidth: '120px' }}>
                <input
                  type="text"
                  value={newSkillInput}
                  onChange={(e) => setNewSkillInput(e.target.value)}
                  placeholder="Type skill & press Enter..."
                  style={{
                    width: '100%', border: 'none', background: 'transparent',
                    color: 'var(--text-main)', fontSize: '13px', outline: 'none',
                  }}
                />
              </form>
            </div>
          </div>

          {/* 2. Skill Depth Configurator */}
          <div>
            <label className="label">Specialized Depth Calibration</label>
            
            <div className="flex-col gap-2">
              {skillDepths.map((item) => (
                <div key={item.id} className="flex items-center justify-between flex-wrap gap-4" style={{ padding: '12px 16px', backgroundColor: 'var(--bg-surface)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.dotColor || 'var(--primary-color)', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>{item.name}</span>
                  </div>

                  {/* Level Selector */}
                  <div className="flex items-center gap-1" style={{ backgroundColor: 'var(--bg-main)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                    {(['basic', 'intermediate', 'advanced', 'expert'] as SkillLevel[]).map((level) => {
                      const isSelected = item.level === level;
                      return (
                        <button
                          key={level}
                          onClick={() => onChangeSkillDepth(item.id, level)}
                          style={{
                            padding: '4px 10px',
                            backgroundColor: isSelected ? 'var(--text-main)' : 'transparent',
                            color: isSelected ? 'var(--bg-main)' : 'var(--text-muted)',
                            borderRadius: '6px',
                            border: 'none',
                            fontSize: '11px',
                            fontWeight: isSelected ? 600 : 500,
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {level}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
