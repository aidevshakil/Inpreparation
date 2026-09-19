import React, { useState } from 'react';
import {
  Shield,
  ChevronDown,
  Sparkles,
  Download,
  Play,
  Bell,
  Moon,
  CheckCircle2,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AiImprovementPlanHeaderProps {
  selectedRole?: string;
  activeDays?: number;
  onRefreshPlan?: () => void;
  onExportDossier?: () => void;
  onMockInterview?: () => void;
  onRoleSelect?: (role: string) => void;
  onSelectDaysFilter?: (days: number) => void;
}

export const AiImprovementPlanHeader: React.FC<AiImprovementPlanHeaderProps> = ({
  selectedRole: controlledRole,
  activeDays: controlledDays,
  onRefreshPlan,
  onExportDossier,
  onMockInterview,
  onRoleSelect,
  onSelectDaysFilter,
}) => {
  const { user } = useAuth();
  const [internalRole, setInternalRole] = useState('Staff Backend & Distributed Systems Architecture');
  const [internalDays, setInternalDays] = useState(7);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const currentRole = controlledRole || internalRole;
  const currentDays = controlledDays || internalDays;

  const roleOptions = [
    'Staff Backend & Distributed Systems Architecture',
    'Principal Distributed Systems Architect',
    'Senior Site Reliability & Concurrency Engineer',
    'Staff Infrastructure & Platform Lead',
  ];

  const handleRoleClick = (role: string) => {
    setInternalRole(role);
    setRoleDropdownOpen(false);
    if (onRoleSelect) onRoleSelect(role);
  };

  const handleDaysClick = (days: number) => {
    setInternalDays(days);
    if (onSelectDaysFilter) onSelectDaysFilter(days);
  };

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
          paddingBottom: '14px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#94a3b8' }}>
          <span style={{ cursor: 'pointer' }}>Candidate Studio</span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ cursor: 'pointer' }}>Diagnostics &amp; Growth</span>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>AI Improvement Plan #42</span>
        </div>

        {/* Right utility items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Mock Interview Launch Button */}
          <button
            onClick={onMockInterview}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: '#6366f1',
              color: '#ffffff',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(99, 102, 241, 0.4)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4f46e5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6366f1')}
          >
            <Play size={12} fill="#ffffff" />
            <span>Mock Interview</span>
          </button>

          {/* Notifications */}
          <button
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <Bell size={14} />
            <span
              style={{
                position: 'absolute',
                top: '7px',
                right: '7px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#ef4444',
              }}
            />
          </button>

          {/* Dark Mode Icon */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <Moon size={14} />
          </button>

          {/* User Profile Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px 4px 6px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#6366f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '0.68rem',
                fontWeight: 700,
              }}
            >
              SA
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.1 }}>
                {user?.name || 'Shakil Ahamed'}
              </span>
              <span style={{ fontSize: '0.62rem', color: '#818cf8', lineHeight: 1 }}>Pro Tier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '12px 18px',
          borderRadius: '12px',
          backgroundColor: '#0c1322',
          border: '1px solid rgba(99, 102, 241, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#818cf8',
              flexShrink: 0,
            }}
          >
            <Shield size={16} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#f8fafc' }}>
              Deterministic Calibration Protocol
            </span>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
              <strong style={{ color: '#cbd5e1' }}>AUDIT TRAIL #ISYN-4209</strong> • Synthesizes observable evidence
              across 6 validated sessions &amp; 30 defended questions • Zero psychometrics or affective profiling.
            </span>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* Target Role Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#f8fafc',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>{currentRole}</span>
              <ChevronDown size={13} color="#94a3b8" />
            </button>

            {roleDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '4px',
                  width: '320px',
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                  zIndex: 50,
                  overflow: 'hidden',
                }}
              >
                {roleOptions.map((role) => (
                  <button
                    key={role}
                    onClick={() => handleRoleClick(role)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '9px 14px',
                      background: role === currentRole ? 'rgba(99, 102, 241, 0.18)' : 'transparent',
                      color: role === currentRole ? '#a5b4fc' : '#cbd5e1',
                      border: 'none',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      fontSize: '0.74rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{role}</span>
                    {role === currentRole && <CheckCircle2 size={13} color="#818cf8" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Duration Pills */}
          {[7, 14, 30].map((days) => (
            <button
              key={days}
              onClick={() => handleDaysClick(days)}
              style={{
                padding: '6px 10px',
                borderRadius: '8px',
                border: currentDays === days ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: currentDays === days ? '#6366f1' : 'rgba(255, 255, 255, 0.03)',
                color: currentDays === days ? '#ffffff' : '#94a3b8',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {days} Days {currentDays === days && '(Active)'}
            </button>
          ))}

          {/* Refresh Plan Button */}
          <button
            onClick={onRefreshPlan}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Sparkles size={12} color="#818cf8" />
            <span>Refresh Plan</span>
          </button>

          {/* Export Dossier Button */}
          <button
            onClick={onExportDossier}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              color: '#c7d2fe',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Download size={12} />
            <span>Export Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
};
