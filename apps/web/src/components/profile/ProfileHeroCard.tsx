import React from 'react';
import { Mail, Briefcase, Clock, Check, Upload } from 'lucide-react';

interface ProfileHeroCardProps {
  name?: string;
  email?: string;
  currentRole?: string;
  targetRole?: string;
  experience?: string;
  completionPercent?: number;
  remainingItem?: string;
  onUploadPhoto?: () => void;
  onReplacePhoto?: () => void;
  onRemovePhoto?: () => void;
}

export const ProfileHeroCard: React.FC<ProfileHeroCardProps> = ({
  name = 'Shakil Ahamed',
  email = 'shakil.ahamed@example.com',
  currentRole = 'Flutter Developer',
  targetRole = 'Senior Backend',
  experience = 'Intermediate (3.5 yrs exp)',
  completionPercent = 85,
  remainingItem = 'Career Assessment',
  onUploadPhoto,
  onReplacePhoto,
  onRemovePhoto,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Accent Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Left Avatar + Candidate Information */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flex: 1, minWidth: '320px' }}>
        {/* Avatar with Verified Badge */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
              border: '2px solid rgba(129, 140, 248, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '1.75rem',
              fontWeight: 800,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            }}
          >
            SA
          </div>
          {/* Verified Check Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '-4px',
              right: '-4px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #0e121c',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
            }}
          >
            <Check size={14} strokeWidth={3} color="#ffffff" />
          </div>
        </div>

        {/* Details and Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Name & Tier Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              {name}
            </h2>

            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '2px 9px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(99, 102, 241, 0.18)',
                color: '#a5b4fc',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              Pro Candidate
            </span>

            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '2px 9px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>Verified</span>
              <Check size={12} strokeWidth={2.5} />
            </span>
          </div>

          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              fontSize: '0.78rem',
              color: '#94a3b8',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} style={{ color: '#64748b' }} />
              <span>{email}</span>
            </div>

            <span style={{ color: '#334155' }}>•</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Briefcase size={14} style={{ color: '#64748b' }} />
              <span>
                {currentRole} <span style={{ color: '#818cf8' }}>➔</span> {targetRole}
              </span>
            </div>

            <span style={{ color: '#334155' }}>•</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} style={{ color: '#64748b' }} />
              <span>{experience}</span>
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '4px' }}>
            <button
              onClick={onUploadPhoto}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#e2e8f0',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Upload size={12} />
              <span>Upload Photo</span>
            </button>

            <button
              onClick={onReplacePhoto}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                fontSize: '0.74rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Replace
            </button>

            <button
              onClick={onRemovePhoto}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#f43f5e',
                fontSize: '0.74rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Right Profile Completion Progress Box */}
      <div
        style={{
          minWidth: '240px',
          padding: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '14px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: 600 }}>Profile Completion</span>
          <span style={{ fontSize: '0.86rem', color: '#818cf8', fontWeight: 800 }}>{completionPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '7px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            overflow: 'hidden',
            marginBottom: '8px',
          }}
        >
          <div
            style={{
              width: `${completionPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1, #a855f7)',
              borderRadius: '9999px',
            }}
          />
        </div>

        <div style={{ fontSize: '0.72rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>1 item remaining: <strong style={{ color: '#fef3c7' }}>{remainingItem}</strong></span>
        </div>
      </div>
    </div>
  );
};
