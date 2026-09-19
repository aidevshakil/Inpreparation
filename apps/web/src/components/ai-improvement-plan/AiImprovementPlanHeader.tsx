import React, { useState } from 'react';
import {
  Shield,
  ChevronDown,
  Sparkles,
  Download,
  Play,
  Bell,
  Moon,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AiImprovementPlanHeaderProps {
  onRefreshPlan?: () => void;
  onExportDossier?: () => void;
  onMockInterview?: () => void;
  onRoleSelect?: (role: string) => void;
}

export const AiImprovementPlanHeader: React.FC<AiImprovementPlanHeaderProps> = ({
  onRefreshPlan,
  onExportDossier,
  onMockInterview,
  onRoleSelect,
}) => {
  const { user } = useAuth();
  const [selectedRole, setSelectedRole] = useState('Staff Backend & Distributed Systems Architecture');
  const [selectedDuration, setSelectedDuration] = useState('7 Days (Active)');
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const durationOptions = ['7 Days (Active)', '14 Days', '30 Days'];
  const roleOptions = [
    'Staff Backend & Distributed Systems Architecture',
    'Principal Distributed Systems Engineer',
    'Senior L5 Backend Platform Engineer',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
      {/* Top Navbar Row: Breadcrumb left, user status right */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem' }}>
          <span style={{ color: '#94a3b8' }}>Candidate Studio</span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#94a3b8' }}>Diagnostics &amp; Growth</span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>AI Improvement Plan #42</span>
        </div>

        {/* Top Right Quick Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onMockInterview}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)',
            }}
          >
            <Play size={12} fill="#ffffff" />
            <span>Mock Interview</span>
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Bell size={16} />
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Moon size={16} />
          </button>

          {/* User Profile Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#4f46e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              {user?.name ? user.name.slice(0, 2).toUpperCase() : 'SA'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1 }}>
                {user?.name || 'Shakil Ahamed'}
              </span>
              <span style={{ fontSize: '0.62rem', color: '#818cf8', marginTop: '2px' }}>
                Pro Tier
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Banner & Controls Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 2.15fr)',
          gap: '16px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Protocol Box */}
        <div
          style={{
            backgroundColor: '#090d18',
            borderRadius: '12px',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(13, 20, 37, 0.7) 100%)',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              backgroundColor: 'rgba(99, 102, 241, 0.18)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '1px',
            }}
          >
            <Shield size={15} style={{ color: '#818cf8' }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f1f5f9' }}>
                Deterministic Calibration Protocol
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
            </div>

            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '3px', lineHeight: 1.4 }}>
              <strong>AUDIT TRAIL #ISYN-4209:</strong> Synthesizes observable evidence across 6 validated sessions &amp; 30 defended questions • Zero psychometrics or affective profiling.
            </div>
          </div>
        </div>

        {/* Right Role Selector, Time Range & Action Buttons */}
        <div
          style={{
            backgroundColor: '#090d18',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Target Role Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                backgroundColor: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#e2e8f0',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>{selectedRole}</span>
              <ChevronDown size={13} style={{ color: '#64748b' }} />
            </button>

            {roleDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '110%',
                  left: 0,
                  zIndex: 50,
                  minWidth: '340px',
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.6)',
                  padding: '4px',
                }}
              >
                {roleOptions.map((r) => (
                  <div
                    key={r}
                    onClick={() => {
                      setSelectedRole(r);
                      setRoleDropdownOpen(false);
                      onRoleSelect?.(r);
                    }}
                    style={{
                      padding: '8px 12px',
                      fontSize: '0.74rem',
                      color: selectedRole === r ? '#818cf8' : '#cbd5e1',
                      backgroundColor: selectedRole === r ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: selectedRole === r ? 700 : 500,
                    }}
                  >
                    {r}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Time Filter Pills: 7 Days | 14 Days | 30 Days */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#0d1322',
              borderRadius: '7px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2px',
              gap: '2px',
            }}
          >
            {durationOptions.map((d) => {
              const isSelected = selectedDuration === d;
              return (
                <button
                  key={d}
                  onClick={() => setSelectedDuration(d)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: isSelected ? '#4f46e5' : 'transparent',
                    color: isSelected ? '#ffffff' : '#94a3b8',
                    fontSize: '0.7rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                  }}
                >
                  {d}
                </button>
              );
            })}
          </div>

          {/* Buttons: Refresh Plan & Export Dossier */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={onRefreshPlan}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '7px',
                color: '#cbd5e1',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Sparkles size={12} style={{ color: '#818cf8' }} />
              <span>Refresh Plan</span>
            </button>

            <button
              onClick={onExportDossier}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                border: 'none',
                borderRadius: '7px',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.35)',
              }}
            >
              <Download size={12} />
              <span>Export Dossier</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
