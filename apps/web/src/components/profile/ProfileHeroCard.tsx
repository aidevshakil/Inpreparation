import React from 'react';
import { Mail, Briefcase, Clock, Check, Upload, ChevronRight } from 'lucide-react';

interface ProfileHeroCardProps {
  name: string;
  email: string;
  currentRole: string;
  targetRole: string;
  experience: string;
  completionPercent: number;
  remainingItem: string;
  avatarUrl?: string | null;
  isEmailVerified?: boolean;
  plan?: string;
  onUploadPhoto?: () => void;
  onReplacePhoto?: () => void;
  onRemovePhoto?: () => void;
}

const computeInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const ProfileHeroCard: React.FC<ProfileHeroCardProps> = ({
  name,
  email,
  currentRole,
  targetRole,
  experience,
  completionPercent,
  remainingItem,
  avatarUrl,
  isEmailVerified = false,
  plan = 'free',
  onUploadPhoto,
  onReplacePhoto,
  onRemovePhoto,
}) => {
  const initials = computeInitials(name);
  const hasAvatar = Boolean(avatarUrl);
  return (
    <div
      className="card flex flex-wrap"
      style={{ gap: '24px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Left Avatar + Candidate Information */}
      <div className="flex items-start" style={{ gap: '22px', flex: 1, minWidth: '320px' }}>
        {/* Avatar with Verified Badge */}
        <div style={{ position: 'relative' }}>
          {hasAvatar ? (
            <img
              src={avatarUrl!}
              alt={name}
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '20px',
                objectFit: 'cover',
                border: '1px solid var(--border-subtle)',
              }}
            />
          ) : (
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '20px',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                fontSize: '28px',
                fontWeight: 800,
              }}
            >
              {initials}
            </div>
          )}
          {/* Verified Check Badge - only shown when email is verified */}
          {isEmailVerified && (
            <div
              style={{
                position: 'absolute',
                bottom: '-4px',
                right: '-4px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--bg-surface)',
              }}
            >
              <Check size={14} strokeWidth={3} color="#ffffff" />
            </div>
          )}
        </div>

        {/* Details and Tagline */}
        <div className="flex-col" style={{ gap: '8px' }}>
          {/* Name & Tier Pills */}
          <div className="flex items-center flex-wrap" style={{ gap: '10px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.02em' }}>
              {name}
            </h2>

            {(!plan || plan.toLowerCase() === 'free') ? (
              <span
                className="badge"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  fontWeight: 500,
                }}
              >
                Free Candidate
              </span>
            ) : plan.toLowerCase() === 'pro' ? (
              <span
                className="badge"
                style={{
                  backgroundColor: 'rgba(99, 102, 241, 0.12)',
                  color: 'var(--primary-color, #6366f1)',
                  borderColor: 'rgba(99, 102, 241, 0.3)',
                  fontWeight: 600,
                }}
              >
                Pro Candidate
              </span>
            ) : (
              <span
                className="badge"
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  color: '#f59e0b',
                  borderColor: 'rgba(245, 158, 11, 0.3)',
                  fontWeight: 600,
                }}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)} Candidate
              </span>
            )}

            {isEmailVerified && (
              <span className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-success)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                <span>Verified</span>
                <Check size={12} strokeWidth={2.5} />
              </span>
            )}
          </div>

          {/* Metadata Row */}
          <div className="flex items-center flex-wrap" style={{ gap: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <div className="flex items-center" style={{ gap: '6px' }}>
              <Mail size={14} style={{ color: 'var(--text-muted)' }} />
              <span>{email}</span>
            </div>

            <span style={{ color: 'var(--border-subtle)' }}>•</span>

            <div className="flex items-center" style={{ gap: '6px' }}>
              <Briefcase size={14} style={{ color: 'var(--text-muted)' }} />
              <div className="flex items-center gap-1">
                <span>{currentRole}</span>
                <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
                <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{targetRole}</span>
              </div>
            </div>

            <span style={{ color: 'var(--border-subtle)' }}>•</span>

            <div className="flex items-center" style={{ gap: '6px' }}>
              <Clock size={14} style={{ color: 'var(--text-muted)' }} />
              <span>{experience}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center" style={{ gap: '14px', marginTop: '4px' }}>
            {!hasAvatar ? (
              <button
                onClick={onUploadPhoto}
                className="btn btn-outline btn-sm"
                style={{ padding: '6px 12px' }}
              >
                <Upload size={12} />
                <span>Upload Photo</span>
              </button>
            ) : (
              <>
                <button
                  onClick={onReplacePhoto}
                  className="btn btn-outline btn-sm"
                  style={{ padding: '6px 12px' }}
                >
                  <Upload size={12} />
                  <span>Replace Photo</span>
                </button>
                <button
                  onClick={onRemovePhoto}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-error)',
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  Remove
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Profile Completion Progress Box */}
      <div
        className="flex-col justify-center"
        style={{
          minWidth: '240px',
          maxWidth: '300px',
          padding: '16px',
          backgroundColor: 'var(--bg-main)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
        }}
      >
        <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Profile Completion</span>
          <span style={{ fontSize: '14px', color: 'var(--primary-color)', fontWeight: 700 }}>{completionPercent}%</span>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: 'var(--border-subtle)',
            borderRadius: '9999px',
            overflow: 'hidden',
            marginBottom: '8px',
          }}
        >
          <div
            style={{
              width: `${completionPercent}%`,
              height: '100%',
              backgroundColor: 'var(--primary-color)',
              borderRadius: '9999px',
            }}
          />
        </div>

        <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>1 item remaining: <strong style={{ color: 'var(--text-main)', fontWeight: 500 }}>{remainingItem}</strong></span>
        </div>
      </div>
    </div>
  );
};
