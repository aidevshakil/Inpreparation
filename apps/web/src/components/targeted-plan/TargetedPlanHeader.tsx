import React, { useState } from 'react';
import {
  Play,
  Bell,
  Moon,
  ChevronDown,
  RefreshCw,
  Share2,
  CheckCircle2,
} from 'lucide-react';

interface TargetedPlanHeaderProps {
  onStartDay4Practice?: () => void;
  onRefreshPlan?: () => void;
  onExportPlan?: () => void;
  onNavigateToAiPlan42?: () => void;
  onNavigateToDiagnostics?: () => void;
  onNavigateToStudio?: () => void;
  onSelectDaysFilter?: (days: number) => void;
  onSelectRole?: (role: string) => void;
  onMockInterview?: () => void;
}

export const TargetedPlanHeader: React.FC<TargetedPlanHeaderProps> = ({
  onStartDay4Practice,
  onRefreshPlan,
  onExportPlan,
  onNavigateToAiPlan42,
  onNavigateToDiagnostics,
  onNavigateToStudio,
  onSelectDaysFilter,
  onSelectRole,
  onMockInterview,
}) => {
  const [activeDays, setActiveDays] = useState<number>(7);
  const [selectedRole, setSelectedRole] = useState<string>('Staff Backend & Distributed Systems');
  const [roleDropdownOpen, setRoleDropdownOpen] = useState<boolean>(false);

  const roles = [
    'Staff Backend & Distributed Systems',
    'Principal Distributed Systems Architect',
    'Senior Site Reliability & Concurrency Engineer',
    'Staff Infrastructure & Platform Lead',
  ];

  const handleDaysClick = (days: number) => {
    setActiveDays(days);
    if (onSelectDaysFilter) onSelectDaysFilter(days);
  };

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
    setRoleDropdownOpen(false);
    if (onSelectRole) onSelectRole(role);
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Top Navbar Row with Breadcrumbs and Quick Profile Action */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#94a3b8' }}>
          <button
            onClick={onNavigateToStudio}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: 0,
              fontSize: '0.78rem',
            }}
          >
            Candidate Studio
          </button>
          <span style={{ color: '#475569' }}>/</span>
          <button
            onClick={onNavigateToDiagnostics}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: 0,
              fontSize: '0.78rem',
            }}
          >
            Diagnostics & Growth
          </button>
          <span style={{ color: '#475569' }}>/</span>
          <button
            onClick={onNavigateToAiPlan42}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: 0,
              fontSize: '0.78rem',
            }}
          >
            AI Improvement Plan #42
          </button>
        </div>

        {/* Quick Utilities */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onMockInterview}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#6366f1',
              border: 'none',
              borderRadius: '9999px',
              padding: '6px 14px',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(99, 102, 241, 0.35)',
            }}
          >
            <Play size={13} fill="#ffffff" />
            <span>Mock Interview</span>
          </button>

          <button
            style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
                backgroundColor: '#f43f5e',
              }}
            />
          </button>

          <button
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <Moon size={14} />
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px 4px 6px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '9999px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
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
                Shakil Ahamed
              </span>
              <span style={{ fontSize: '0.62rem', color: '#818cf8', lineHeight: 1 }}>Pro Tier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Specific Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#64748b', marginTop: '14px' }}>
        <span>Candidate Studio</span>
        <span>/</span>
        <span>Diagnostics & Growth</span>
        <span>/</span>
        <button
          onClick={onNavigateToAiPlan42}
          style={{
            background: 'none',
            border: 'none',
            color: '#818cf8',
            cursor: 'pointer',
            padding: 0,
            fontSize: '0.72rem',
          }}
        >
          AI Plan #42
        </button>
        <span>/</span>
        <span style={{ color: '#cbd5e1', fontWeight: 600 }}>7-Day Targeted Plan (#43)</span>
      </div>

      {/* Main Title & Action Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '10px',
        }}
      >
        {/* Left Title & Description */}
        <div style={{ maxWidth: '680px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <h1
              style={{
                margin: 0,
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#ffffff',
              }}
            >
              7-Day AI Improvement Plan
            </h1>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 10px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.4)',
                color: '#a5b4fc',
                fontSize: '0.72rem',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#6366f1',
                  boxShadow: '0 0 8px #6366f1',
                }}
              />
              Cycle Active • Day 4 of 7
            </span>
          </div>

          <p
            style={{
              margin: '8px 0 0 0',
              fontSize: '0.82rem',
              color: '#94a3b8',
              lineHeight: 1.5,
            }}
          >
            A focused, evidence-based 7-day deliberate practice schedule synthesized from 6 completed interviews (30
            defended questions across Screens #34 – #41).
          </p>
        </div>

        {/* Right Controls and Launch Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
          {/* Day Filter Pills & Role Select */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleDaysClick(7)}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: activeDays === 7 ? '#6366f1' : 'rgba(255, 255, 255, 0.04)',
                color: activeDays === 7 ? '#ffffff' : '#94a3b8',
                border: activeDays === 7 ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.15s ease',
              }}
            >
              7 Days (Active)
            </button>
            <button
              onClick={() => handleDaysClick(14)}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: activeDays === 14 ? '#6366f1' : 'rgba(255, 255, 255, 0.04)',
                color: activeDays === 14 ? '#ffffff' : '#94a3b8',
                border: activeDays === 14 ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.15s ease',
              }}
            >
              14 Days (#44)
            </button>
            <button
              onClick={() => handleDaysClick(30)}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: activeDays === 30 ? '#6366f1' : 'rgba(255, 255, 255, 0.04)',
                color: activeDays === 30 ? '#ffffff' : '#94a3b8',
                border: activeDays === 30 ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.15s ease',
              }}
            >
              30 Days (#45)
            </button>

            {/* Role Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <span>{selectedRole}</span>
                <ChevronDown size={13} color="#94a3b8" />
              </button>

              {roleDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '4px',
                    width: '280px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                    zIndex: 50,
                    overflow: 'hidden',
                  }}
                >
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => handleRoleClick(role)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 12px',
                        background: role === selectedRole ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                        color: role === selectedRole ? '#a5b4fc' : '#cbd5e1',
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
                      {role === selectedRole && <CheckCircle2 size={12} color="#818cf8" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Action Icons */}
            <button
              onClick={onRefreshPlan}
              title="Refresh Plan"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '6px 8px',
                color: '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <RefreshCw size={14} />
            </button>
            <button
              onClick={onExportPlan}
              title="Export Plan Dossier"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '6px 8px',
                color: '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Share2 size={14} />
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onStartDay4Practice}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              backgroundColor: '#6366f1',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
              transition: 'transform 0.15s ease, background-color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4f46e5';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#6366f1';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span>Start Day 4 Practice (5 Qs)</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
