import React, { useState } from 'react';
import { ChevronDown, SlidersHorizontal, Search, RotateCcw } from 'lucide-react';

interface SkillAnalyticsFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onRefresh?: () => void;
}

export const SkillAnalyticsFilterBar: React.FC<SkillAnalyticsFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  onRefresh,
}) => {
  const [selectedWindow, setSelectedWindow] = useState('Last 30 Days');
  const windows = ['7D', 'Last 30 Days', '90D', '6M', 'All Time'];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '24px',
      }}
    >
      {/* Left: Window Filter Pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          WINDOW:
        </span>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '3px',
            gap: '2px',
          }}
        >
          {windows.map((w) => {
            const isActive = selectedWindow === w;
            return (
              <button
                key={w}
                onClick={() => setSelectedWindow(w)}
                style={{
                  background: isActive ? '#4f46e5' : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '5px 12px',
                  fontSize: '0.72rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {w}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: Dropdowns + Search + Refresh */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {/* Dropdown 1: All Competency Categories */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.74rem',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          <span>All Competency Categories</span>
          <ChevronDown size={13} color="#64748b" />
        </div>

        {/* Dropdown 2: Target: Staff / Senior Backend */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.74rem',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          <span>Target: Staff / Senior Backend</span>
          <SlidersHorizontal size={12} color="#818cf8" />
        </div>

        {/* Search Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '6px 10px',
            width: '170px',
          }}
        >
          <Search size={13} color="#64748b" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontSize: '0.74rem',
              width: '100%',
            }}
          />
          <span style={{ fontSize: '0.62rem', color: '#64748b', background: 'rgba(255, 255, 255, 0.06)', padding: '1px 4px', borderRadius: '4px' }}>
            ⌘K
          </span>
        </div>

        {/* Refresh Button */}
        <button
          onClick={onRefresh}
          style={{
            width: 32,
            height: 32,
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
          }}
        >
          <RotateCcw size={13} />
        </button>
      </div>
    </div>
  );
};
