import React, { useState, useEffect } from 'react';
import {
  KeyRound,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Loader2,
  ShieldCheck,
  Check,
  X
} from 'lucide-react';
import { ResetStateMode } from './ResetPrototypeBar';

interface ResetPasswordCardProps {
  mode: ResetStateMode;
  onNavigateLogin: () => void;
  onNavigateForgot: () => void;
  onResetSuccess?: () => void;
}

export const ResetPasswordCard: React.FC<ResetPasswordCardProps> = ({
  mode,
  onNavigateLogin,
  onNavigateForgot,
  onResetSuccess
}) => {
  const [password, setPassword] = useState('SuperSecret#2026!');
  const [confirmPassword, setConfirmPassword] = useState('SuperSecret#2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [localStatus, setLocalStatus] = useState<ResetStateMode>(mode);

  useEffect(() => {
    setLocalStatus(mode);
    if (mode === 'weak-password') {
      setPassword('weak');
      setConfirmPassword('weak');
    } else if (mode === 'mismatch') {
      setPassword('SuperSecret#2026!');
      setConfirmPassword('DifferentPassword#2026!');
    } else if (mode === 'default' || mode === 'updating' || mode === 'reset-success') {
      setPassword('SuperSecret#2026!');
      setConfirmPassword('SuperSecret#2026!');
    }
  }, [mode]);

  // Password criteria checks
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const isMatch = password === confirmPassword && password.length > 0;

  const passedCount = [hasMinLength, hasUppercase, hasNumber, hasSpecial].filter(Boolean).length;
  
  const getStrengthLabel = () => {
    if (password.length === 0) return { label: 'Empty', color: '#64748b', bars: 0 };
    if (passedCount <= 1) return { label: 'Very Weak', color: '#ef4444', bars: 1 };
    if (passedCount === 2) return { label: 'Weak', color: '#f59e0b', bars: 2 };
    if (passedCount === 3) return { label: 'Good', color: '#38bdf8', bars: 3 };
    return { label: 'Strong & Resilient', color: '#10b981', bars: 4 };
  };

  const strength = getStrengthLabel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localStatus === 'updating') return;
    if (passedCount < 3 || !isMatch) return;

    setLocalStatus('updating');
    setTimeout(() => {
      setLocalStatus('reset-success');
    }, 1000);
  };

  return (
    <div style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Main Glassmorphic Card */}
      <div style={{
        background: 'rgba(10, 14, 23, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>

        {/* Top Header Badge & Step Counter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 12px',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            fontSize: '11px',
            fontWeight: 600,
            color: '#a5b4fc',
            letterSpacing: '0.02em'
          }}>
            <KeyRound size={13} color="#818cf8" />
            <span>Account Security &amp; Credential Recovery</span>
          </div>

          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            STEP 3 OF 3
          </div>
        </div>

        {/* Headline */}
        <div>
          <h1 style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 8px 0'
          }}>
            Set New Password
          </h1>
          <p style={{
            fontSize: '13px',
            color: '#94a3b8',
            lineHeight: 1.5,
            margin: 0
          }}>
            Choose a strong, unique password for your Inprep AI candidate studio account. Reused credentials are automatically flagged.
          </p>
        </div>

        {/* Dynamic State Alerts */}
        {localStatus === 'reset-success' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '13px 15px',
            borderRadius: '12px',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            color: '#34d399',
            fontSize: '12.5px',
            lineHeight: 1.45
          }}>
            <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <strong style={{ color: '#ffffff' }}>Password Updated Successfully!</strong>
              <span>All active sessions refreshed. You may now sign in with your new credentials.</span>
            </div>
          </div>
        )}

        {localStatus === 'token-expired' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '13px 15px',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            color: '#fbbf24',
            fontSize: '12.5px',
            lineHeight: 1.45
          }}>
            <AlertTriangle size={18} style={{ flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <strong style={{ color: '#ffffff' }}>Reset Token Expired</strong>
              <span>This password reset link is invalid or has expired. Please request a fresh one.</span>
              <button
                type="button"
                onClick={onNavigateForgot}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#818cf8',
                  fontSize: '12px',
                  fontWeight: 600,
                  textAlign: 'left',
                  padding: 0,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Request New Reset Link →
              </button>
            </div>
          </div>
        )}

        {localStatus === 'network-error' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 14px',
            borderRadius: '10px',
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            fontSize: '12px',
            lineHeight: 1.4
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>Network timeout while contacting authorization server. Please try again.</span>
          </div>
        )}

        {/* Password Reset Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Field 1: New Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <label style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#94a3b8',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}>
              NEW PASSWORD *
            </label>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div style={{
                position: 'absolute',
                left: '14px',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none'
              }}>
                <Lock size={15} />
              </div>

              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new strong password"
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: localStatus === 'weak-password'
                    ? '1px solid #ef4444'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#f8fafc',
                  fontSize: '13.5px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = localStatus === 'weak-password'
                    ? '#ef4444'
                    : 'rgba(255, 255, 255, 0.1)';
                }}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Password Strength Meter */}
            <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px' }}>
                <span style={{ color: '#64748b' }}>Password Strength:</span>
                <span style={{ fontWeight: 600, color: strength.color }}>{strength.label}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    style={{
                      height: '3px',
                      borderRadius: '2px',
                      background: bar <= strength.bars ? strength.color : 'rgba(255, 255, 255, 0.08)',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Criteria Checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              marginTop: '4px',
              fontSize: '11px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasMinLength ? '#34d399' : '#64748b' }}>
                {hasMinLength ? <Check size={12} strokeWidth={3} /> : <X size={12} />}
                <span>8+ characters</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasUppercase ? '#34d399' : '#64748b' }}>
                {hasUppercase ? <Check size={12} strokeWidth={3} /> : <X size={12} />}
                <span>1 uppercase letter</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasNumber ? '#34d399' : '#64748b' }}>
                {hasNumber ? <Check size={12} strokeWidth={3} /> : <X size={12} />}
                <span>1 number</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasSpecial ? '#34d399' : '#64748b' }}>
                {hasSpecial ? <Check size={12} strokeWidth={3} /> : <X size={12} />}
                <span>1 symbol/special</span>
              </div>
            </div>
          </div>

          {/* Field 2: Confirm New Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#94a3b8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>
                CONFIRM NEW PASSWORD *
              </label>

              {confirmPassword.length > 0 && (
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: isMatch ? '#34d399' : '#ef4444'
                }}>
                  {isMatch ? 'Passwords match' : 'Passwords do not match'}
                </span>
              )}
            </div>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div style={{
                position: 'absolute',
                left: '14px',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none'
              }}>
                <Lock size={15} />
              </div>

              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: localStatus === 'mismatch' || (confirmPassword.length > 0 && !isMatch)
                    ? '1px solid #ef4444'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#f8fafc',
                  fontSize: '13.5px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = localStatus === 'mismatch' || (confirmPassword.length > 0 && !isMatch)
                    ? '#ef4444'
                    : 'rgba(255, 255, 255, 0.1)';
                }}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px'
                }}
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Primary Submit Button */}
          {localStatus === 'reset-success' ? (
            <button
              type="button"
              onClick={onResetSuccess || onNavigateLogin}
              style={{
                width: '100%',
                padding: '13px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                border: 'none',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)',
                marginTop: '4px'
              }}
            >
              <span>Continue to Log In</span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={localStatus === 'updating' || localStatus === 'token-expired'}
              style={{
                width: '100%',
                padding: '13px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                border: 'none',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: localStatus === 'updating' || localStatus === 'token-expired' ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.35)',
                marginTop: '4px',
                opacity: localStatus === 'updating' || localStatus === 'token-expired' ? 0.7 : 1,
                transition: 'all 0.2s ease'
              }}
            >
              {localStatus === 'updating' ? (
                <>
                  <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                  <span>Updating Credentials...</span>
                </>
              ) : (
                <>
                  <span>Update Password &amp; Log In</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          )}

        </form>

        {/* Navigation & Support Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12.5px',
          paddingTop: '4px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <button
            type="button"
            onClick={onNavigateLogin}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12.5px'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
          >
            <ArrowLeft size={13} />
            <span>Back to Log In</span>
          </button>

          <button
            type="button"
            onClick={onNavigateForgot}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '12.5px'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#818cf8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
          >
            Request New Link
          </button>
        </div>

        {/* Argon2id Security Footnote */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          fontSize: '11px',
          color: '#64748b',
          lineHeight: 1.45
        }}>
          <ShieldCheck size={13} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Passwords are salted and cryptographically hashed with Argon2id. We enforce zero-knowledge authentication across all candidate records.
          </span>
        </div>

      </div>

    </div>
  );
};
