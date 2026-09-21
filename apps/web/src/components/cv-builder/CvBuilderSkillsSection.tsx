import React, { useState } from 'react';
import { Cpu, Plus, X } from 'lucide-react';

export interface SkillCategoryGroup {
  category: string;
  skills: string[];
}

interface CvBuilderSkillsSectionProps {
  skillGroups: SkillCategoryGroup[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (categoryIndex: number, skillIndex: number) => void;
}

export const CvBuilderSkillsSection: React.FC<CvBuilderSkillsSectionProps> = ({
  skillGroups,
  onAddSkill,
  onRemoveSkill,
}) => {
  const [newSkillInput, setNewSkillInput] = useState('');

  const totalSkillsCount = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkillInput.trim()) {
      e.preventDefault();
      onAddSkill(newSkillInput.trim());
      setNewSkillInput('');
    }
  };

  const handleAddClick = () => {
    if (newSkillInput.trim()) {
      onAddSkill(newSkillInput.trim());
      setNewSkillInput('');
    }
  };

  return (
    <div
      id="section-skills"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
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
          marginBottom: '4px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#818cf8',
            }}
          >
            <Cpu size={14} />
          </span>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            5. Technical Competencies &amp; Skills
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          {totalSkillsCount} Skills Tagged
        </span>
      </div>

      <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', margin: '0 0 16px 0' }}>
        Add technical competencies. Inprep AI prompts custom-tailor to each skill category.
      </p>

      {/* Skill Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '16px' }}>
        {skillGroups.map((group, gIdx) => (
          <div key={group.category}>
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.8px',
                color: '#64748b',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              {group.category}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {group.skills.map((skill, sIdx) => (
                <div
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.76rem',
                    color: '#e2e8f0',
                    fontWeight: 500,
                  }}
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => onRemoveSkill(gIdx, sIdx)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#64748b',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    title="Remove skill"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Add Input Field */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={newSkillInput}
          onChange={(e) => setNewSkillInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter (e.g. Docker, Kubernetes, AWS)..."
          style={{
            flex: 1,
            padding: '9px 12px',
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            color: 'var(--text-main)',
            fontSize: '0.8rem',
            outline: 'none',
          }}
        />

        <button
          onClick={handleAddClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '9px 16px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '8px',
            color: '#a5b4fc',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Plus size={13} />
          <span>Add Skill</span>
        </button>
      </div>
    </div>
  );
};
