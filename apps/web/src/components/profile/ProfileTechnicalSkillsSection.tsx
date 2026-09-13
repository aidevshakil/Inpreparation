import React, { useState } from 'react';
import { Cpu, X, Plus } from 'lucide-react';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SkillDepthItem {
  id: string;
  name: string;
  level: SkillLevel;
  dotColor: string;
}

interface ProfileTechnicalSkillsProps {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
  skillDepths: SkillDepthItem[];
  onChangeSkillDepth: (id: string, level: SkillLevel) => void;
}

export const ProfileTechnicalSkillsSection: React.FC<ProfileTechnicalSkillsProps> = ({
  skills,
  onAddSkill,
  onRemoveSkill,
  skillDepths,
  onChangeSkillDepth,
}) => {
  const [newSkillInput, setNewSkillInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkillInput.trim()) {
      e.preventDefault();
      onAddSkill(newSkillInput.trim());
      setNewSkillInput('');
    }
  };

  const suggestions = ['Kubernetes', 'Redis', 'Celery', 'Go', 'GraphQL', 'CI/CD'];

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
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399',
            }}
          >
            <Cpu size={16} />
          </div>
          <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Technical Skills &amp; Self-Reported Proficiency
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
          STEP 3 / 4
        </span>
      </div>

      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 18px 0' }}>
        Used by AI to calibrate technical rubrics and architectural trade-off questions.
      </p>

      {/* Tags Section */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '10px' }}>
          Technical Stack Tags <span style={{ color: '#64748b', fontWeight: 400 }}>(Click &apos;x&apos; to remove, or add new skills)</span>
        </label>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            alignItems: 'center',
            padding: '10px 12px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            minHeight: '52px',
          }}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#f8fafc',
                fontSize: '0.78rem',
                fontWeight: 500,
              }}
            >
              <span>{skill}</span>
              <button
                onClick={() => onRemoveSkill(skill)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title={`Remove ${skill}`}
              >
                <X size={13} />
              </button>
            </span>
          ))}

          {/* Add skill input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Plus size={14} style={{ color: '#818cf8' }} />
            <input
              type="text"
              value={newSkillInput}
              onChange={(e) => setNewSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add skill (press Enter)"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#f8fafc',
                fontSize: '0.78rem',
                outline: 'none',
                padding: '4px 6px',
                minWidth: '150px',
              }}
            />
          </div>
        </div>

        {/* Suggestions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', fontSize: '0.72rem', color: '#64748b', flexWrap: 'wrap' }}>
          <span>Suggestions: {suggestions.join(', ')}</span>
          <button
            onClick={() => onAddSkill('Redis')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#818cf8',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
              fontSize: '0.72rem',
            }}
          >
            + Add Redis
          </button>
        </div>
      </div>

      {/* Self-Reported Skill Depth Matrix */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1' }}>
            Self-Reported Skill Depth
          </label>
          <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
            Rubric level - Placed in AI eval framework
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {skillDepths.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              {/* Skill Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: item.dotColor,
                    boxShadow: `0 0 6px ${item.dotColor}`,
                  }}
                />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f1f5f9' }}>
                  {item.name}
                </span>
              </div>

              {/* Segmented Depth Control */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                  padding: '3px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {(['beginner', 'intermediate', 'advanced'] as SkillLevel[]).map((lvl) => {
                  const isActive = item.level === lvl;
                  return (
                    <button
                      key={lvl}
                      onClick={() => onChangeSkillDepth(item.id, lvl)}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: isActive ? 600 : 400,
                        backgroundColor: isActive ? '#4f46e5' : 'transparent',
                        color: isActive ? '#ffffff' : '#94a3b8',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
