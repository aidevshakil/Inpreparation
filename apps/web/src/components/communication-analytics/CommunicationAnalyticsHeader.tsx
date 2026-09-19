import React, { useState } from 'react';
import { Download, ChevronDown, Play, Shield, Mic } from 'lucide-react';

interface CommunicationAnalyticsHeaderProps {
  onExportPdf?: () => void;
  onPracticeCommunication?: () => void;
}

export const CommunicationAnalyticsHeader: React.FC<CommunicationAnalyticsHeaderProps> = ({
  onExportPdf,
  onPracticeCommunication,
}) => {
  const [selectedWindow, setSelectedWindow] = useState('Last 30 Days');
  const windows = ['7D', 'Last 30 Days', '90D', '6M', 'All Time'];

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Breadcrumb with Web #38 Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.74rem', color: '#64748b' }}>
        <span>Dashboard</span>
        <span>›</span>
        <span>Performance</span>
        <span>›</span>
        <span style={{ color: '#f8fafc', fontWeight: 600 }}>Communication Analytics</span>
        <span
          style={{
            fontSize: '0.64rem',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: '#a5b4fc',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            padding: '1px 6px',
            borderRadius: '4px',
            marginLeft: '4px',
          }}
        >
          Web #38
        </span>
      </div>

      {/* Main Row: Title/Description on Left, Controls on Right */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: '620px' }}>
          <h1
            style={{
              fontSize: '2.1rem',
              fontWeight: 800,
              color: '#f8fafc',
              margin: '0 0 8px 0',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}
          >
            Communication Analytics
          </h1>
          <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
            Understand how clearly, completely, and effectively your interview answers are evaluated across structured verbal and textual dimensions.
          </p>
        </div>

        {/* Right Controls: Windows, Dropdowns & Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
          {/* Upper row: Windows and Dropdowns */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Window Pills */}
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
                      padding: '5px 10px',
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

            {/* Dropdown 1: All Evaluated Tracks */}
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
              <Mic size={12} color="#38bdf8" />
              <span>All Evaluated Tracks</span>
              <ChevronDown size={13} color="#64748b" />
            </div>

            {/* Dropdown 2: Staff L6+ Standard */}
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
              <Shield size={12} color="#a5b4fc" />
              <span>Staff L6+ Standard</span>
              <ChevronDown size={13} color="#64748b" />
            </div>
          </div>

          {/* Lower row: Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={onExportPdf}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                padding: '7px 14px',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Download size={13} />
              <span>Export (PDF)</span>
            </button>

            <button
              onClick={onPracticeCommunication}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                color: '#ffffff',
                border: 'none',
                padding: '7px 16px',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
              }}
            >
              <Play size={12} fill="#ffffff" />
              <span>Practice Communication</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
