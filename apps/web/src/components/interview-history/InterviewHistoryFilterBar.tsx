import React, { useState } from 'react';
import { Search, ChevronDown, Lock, X, SlidersHorizontal } from 'lucide-react';

interface InterviewHistoryFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusFilter: string;
  onStatusFilterChange: (s: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const InterviewHistoryFilterBar: React.FC<InterviewHistoryFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  totalCount = 8,
  filteredCount = 6,
}) => {
  const [activeTags, setActiveTags] = useState<{ id: string; label: string }[]>([
    { id: 'status', label: 'Status: Completed' },
    { id: 'date', label: 'Date: Last 30 Days' },
  ]);

  const removeTag = (id: string) => {
    setActiveTags(activeTags.filter((t) => t.id !== id));
    if (id === 'status') {
      onStatusFilterChange('all');
    }
  };

  const clearAll = () => {
    setActiveTags([]);
    onStatusFilterChange('all');
    onSearchChange('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
      {/* Top Filter Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
          padding: '8px 12px',
        }}
      >
        {/* Search Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '8px',
            padding: '6px 12px',
            minWidth: '220px',
            flex: '1 1 200px',
          }}
        >
          <Search size={14} color="#64748b" />
          <input
            type="text"
            placeholder="Search mock simulations, competencies, responses..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontSize: '0.78rem',
              width: '100%',
            }}
          />
          <span style={{ fontSize: '0.64rem', color: '#64748b', background: 'rgba(255, 255, 255, 0.06)', padding: '1px 5px', borderRadius: '4px' }}>
            ⌘K
          </span>
        </div>

        {/* Dropdown 1: Status */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.74rem',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          <span>Status: {statusFilter === 'all' ? `All (${totalCount})` : statusFilter}</span>
          <ChevronDown size={13} color="#64748b" />
        </div>

        {/* Dropdown 2: Domain */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.74rem',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          <span>Domain: All Categories</span>
          <ChevronDown size={13} color="#64748b" />
        </div>

        {/* Dropdown 3: Seniority */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.74rem',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          <span>Seniority: All Levels</span>
          <ChevronDown size={13} color="#64748b" />
        </div>

        {/* Dropdown 4: Telemetry */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.74rem',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          <span>Telemetry: All Modes</span>
          <ChevronDown size={13} color="#64748b" />
        </div>

        {/* Dropdown 5: Sort */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.74rem',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          <SlidersHorizontal size={12} color="#818cf8" />
          <span>Sort: Newest First</span>
        </div>
      </div>

      {/* Active Tags Strip + Encrypted Vault Note */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.72rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ color: '#64748b', fontWeight: 700 }}>ACTIVE:</span>
          {activeTags.map((tag) => (
            <span
              key={tag.id}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '3px 8px',
                borderRadius: '6px',
                color: '#cbd5e1',
              }}
            >
              <span>{tag.label}</span>
              <X
                size={12}
                style={{ cursor: 'pointer', color: '#94a3b8' }}
                onClick={() => removeTag(tag.id)}
              />
            </span>
          ))}

          {activeTags.length > 0 && (
            <span
              onClick={clearAll}
              style={{ color: '#818cf8', cursor: 'pointer', textDecoration: 'underline', marginLeft: '4px' }}
            >
              Clear All Filters
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Lock size={12} color="#38bdf8" />
          <span>
            Showing <strong style={{ color: '#f8fafc' }}>{filteredCount} of {totalCount} sessions</strong> • 100% AES-256 Client-side Encrypted Vault
          </span>
        </div>
      </div>
    </div>
  );
};
