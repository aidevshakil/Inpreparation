import React, { useState } from 'react';
import { Search, RotateCcw, Bookmark, X, ChevronDown } from 'lucide-react';

interface RecommendedInterviewsFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedRole: string;
  onRoleChange: (r: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (d: string) => void;
  onResetFilters: () => void;
}

export const RecommendedInterviewsFilterBar: React.FC<RecommendedInterviewsFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
  selectedDifficulty,
  onDifficultyChange,
  onResetFilters,
}) => {
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: '16px',
        padding: '16px 20px',
        marginBottom: '24px',
      }}
    >
      {/* Top Search & Filter Dropdowns Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '12px',
        }}
      >
        {/* Search Input */}
        <div
          style={{
            flex: '1 1 240px',
            minWidth: '220px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '10px',
            padding: '8px 12px',
          }}
        >
          <Search size={14} style={{ color: '#64748b' }} />
          <input
            type="text"
            placeholder="Search by role, skill, or area..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontSize: '0.78rem',
            }}
          />
          <span
            style={{
              fontSize: '0.62rem',
              color: '#64748b',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '2px 5px',
              borderRadius: '4px',
              fontFamily: 'monospace',
            }}
          >
            ⌘K
          </span>
        </div>

        {/* Dropdown 1: Role */}
        <div style={{ position: 'relative' }}>
          <select
            value={selectedRole}
            onChange={(e) => onRoleChange(e.target.value)}
            style={{
              appearance: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '8px 28px 8px 12px',
              color: '#cbd5e1',
              fontSize: '0.76rem',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="all" style={{ backgroundColor: '#0c101c' }}>Role: All Roles (4 Tailored)</option>
            <option value="staff-backend" style={{ backgroundColor: '#0c101c' }}>Role: Staff Backend Architect</option>
            <option value="distributed" style={{ backgroundColor: '#0c101c' }}>Role: Distributed Systems</option>
            <option value="leadership" style={{ backgroundColor: '#0c101c' }}>Role: Engineering Leadership</option>
          </select>
          <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }} />
        </div>

        {/* Dropdown 2: Difficulty */}
        <div style={{ position: 'relative' }}>
          <select
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            style={{
              appearance: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '8px 28px 8px 12px',
              color: '#cbd5e1',
              fontSize: '0.76rem',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="all" style={{ backgroundColor: '#0c101c' }}>Difficulty: All Levels</option>
            <option value="advanced" style={{ backgroundColor: '#0c101c' }}>Difficulty: Advanced (L6+)</option>
            <option value="intermediate" style={{ backgroundColor: '#0c101c' }}>Difficulty: Intermediate (L5)</option>
          </select>
          <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }} />
        </div>

        {/* Dropdown 3: Duration */}
        <div style={{ position: 'relative' }}>
          <select
            defaultValue="all"
            style={{
              appearance: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '8px 28px 8px 12px',
              color: '#cbd5e1',
              fontSize: '0.76rem',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="all" style={{ backgroundColor: '#0c101c' }}>Duration: 10–20 Mins</option>
            <option value="short" style={{ backgroundColor: '#0c101c' }}>Duration: &lt; 15 Mins</option>
            <option value="long" style={{ backgroundColor: '#0c101c' }}>Duration: 20+ Mins</option>
          </select>
          <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }} />
        </div>

        {/* Reset & Saved Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
          <button
            onClick={onResetFilters}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              color: '#94a3b8',
              fontSize: '0.74rem',
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={11} />
            <span>Reset</span>
          </button>

          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 12px',
              backgroundColor: showSavedOnly ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              border: showSavedOnly ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              color: showSavedOnly ? '#c084fc' : '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Bookmark size={11} fill={showSavedOnly ? '#c084fc' : 'none'} />
            <span>Saved (1)</span>
          </button>
        </div>
      </div>

      {/* Active Filter Pills Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '0.7rem' }}>
        <span style={{ color: '#64748b', fontWeight: 600 }}>Active Filters:</span>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          <span>Match: 80%+</span>
          <X size={10} style={{ cursor: 'pointer' }} onClick={onResetFilters} />
        </span>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          <span>Seniority: Senior / Staff</span>
          <X size={10} style={{ cursor: 'pointer' }} onClick={onResetFilters} />
        </span>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#a5b4fc',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          <span>Domain: Distributed</span>
          <X size={10} style={{ cursor: 'pointer' }} onClick={onResetFilters} />
        </span>

        <button
          onClick={onResetFilters}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#818cf8',
            fontSize: '0.7rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '0 4px',
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
