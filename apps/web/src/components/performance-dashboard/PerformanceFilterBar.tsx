import React, { useState } from 'react';
import { ChevronDown, X, RefreshCw } from 'lucide-react';

interface PerformanceFilterBarProps {
  onTimeRangeChange?: (range: string) => void;
}

export const PerformanceFilterBar: React.FC<PerformanceFilterBarProps> = ({
  onTimeRangeChange,
}) => {
  const [selectedRange, setSelectedRange] = useState('Last 30 Days');
  const [activeTags, setActiveTags] = useState<string[]>([
    'Domain: Sys Architecture',
    'L6 Calibrated',
  ]);

  const ranges = ['Last 30 Days', '7D', '90D', '6M', 'All Time'];

  const handleRangeClick = (r: string) => {
    setSelectedRange(r);
    if (onTimeRangeChange) onTimeRangeChange(r);
  };

  const removeTag = (tag: string) => {
    setActiveTags(activeTags.filter((t) => t !== tag));
  };

  const resetFilters = () => {
    setActiveTags(['Domain: Sys Architecture', 'L6 Calibrated']);
    setSelectedRange('Last 30 Days');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* Top Filter Bar Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {/* Left: Time Range Pills */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '10px',
            padding: '4px',
            gap: '2px',
          }}
        >
          {ranges.map((range) => {
            const isActive = selectedRange === range;
            return (
              <button
                key={range}
                onClick={() => handleRangeClick(range)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #4f46e5, #6366f1)' : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '7px',
                  padding: '6px 14px',
                  fontSize: '0.74rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 2px 8px rgba(79, 70, 229, 0.35)' : 'none',
                }}
              >
                {range}
              </button>
            );
          })}
        </div>

        {/* Right: Dropdowns */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Tests Dropdown */}
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
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} />
            <span>All Tests (6 Evaluated)</span>
            <ChevronDown size={13} color="#64748b" />
          </div>

          {/* Difficulty Dropdown */}
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
            <span>Difficulty: Staff L6+</span>
            <ChevronDown size={13} color="#64748b" />
          </div>
        </div>
      </div>

      {/* Active Tags Strip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '0.72rem' }}>
        {activeTags.map((tag) => (
          <span
            key={tag}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '3px 8px',
              borderRadius: '6px',
              color: '#cbd5e1',
            }}
          >
            <span>{tag}</span>
            <X
              size={12}
              style={{ cursor: 'pointer', color: '#94a3b8' }}
              onClick={() => removeTag(tag)}
            />
          </span>
        ))}

        <span
          onClick={resetFilters}
          style={{
            color: '#818cf8',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontWeight: 600,
            marginLeft: '4px',
          }}
        >
          <RefreshCw size={11} /> Reset
        </span>
      </div>
    </div>
  );
};
