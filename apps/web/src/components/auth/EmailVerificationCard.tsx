import React, { useState, useEffect } from 'react';
import {
  Shield,
  Mail,
  ExternalLink,
  RotateCw,
  Edit3,
  ArrowRight,
  Info,
  Lock,
  Check,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Loader2
} from 'lucide-react';
import { EmailVerificationStateMode } from './EmailVerificationPrototypeBar';

interface EmailVerificationCardProps {
  mode: EmailVerificationStateMode;
  emailAddress?: string;
  onNavigateHome: () => void;
  onNavigateLogin: () => void;
  onNavigateSignup: () => void;
  onVerificationSuccess?: () => void;
}

export const EmailVerificationCard: React.FC<EmailVerificationCardProps> = ({
  mode,
  emailAddress = 's•••••@example.com',
  onNavigateHome,
  onNavigateLogin,
  onNavigateSignup,
  onVerificationSuccess
}) => {
  const [localStatus, setLocalStatus] = useState<EmailVerificationStateMode>(mode);
  const [cooldownSeconds, setCooldownSeconds] = useState(28);

  useEffect(() => {
    setLocalStatus(mode);
    if (mode === 'cooldown') {
      setCooldownSeconds(28);
    }
  }, [mode]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (localStatus === 'cooldown' && cooldownSeconds > 0) {
      timer = setInterval(() => {
        setCooldownSeconds((prev) => (prev > 1 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [localStatus, cooldownSeconds]);

  const handleResend = () => {
    if (localStatus === 'cooldown' && cooldownSeconds > 0) return;
    setLocalStatus('resending');
    setTimeout(() => {
      setLocalStatus('resent-banner');
    }, 900);
  };

  const handleOpenEmailApp = () => {
    // Attempt standard mailto / webmail redirect or mock
    window.open('https://mail.google.com', '_blank');
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
        gap: '22px'
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
            <Shield size={13} color="#818cf8" />
            <span>Account Security &amp; Identity</span>
          </div>

          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#64748b',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            STEP 2 OF 3
          </div>
        </div>

        {/* Centered Email Envelope Illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px', marginBottom: '2px' }}>
          <div style={{
            position: 'relative',
            width: '82px',
            height: '82px',
            borderRadius: '20px',
            background: 'linear-gradient(145deg, #182035 0%, #0d1322 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mail size={36} color="#818cf8" strokeWidth={1.8} />
            
            {/* Small checkmark badge overlay on bottom-right */}
            <div style={{
              position: 'absolute',
              bottom: '-3px',
              right: '-3px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#6366f1',
              border: '2.5px solid #0a0e17',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(99, 102, 241, 0.6)'
            }}>
              <Check size={13} color="#ffffff" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Headings */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 10px 0'
          }}>
            Verify Your Email
          </h1>
          <p style={{
            fontSize: '13px',
            color: '#94a3b8',
            lineHeight: 1.55,
            margin: 0
          }}>
            We've sent an authenticated verification link to your email address. Please check your inbox to activate your account.
          </p>
        </div>

        {/* Dynamic State Alerts */}
        {localStatus === 'resent-banner' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '11px 14px',
            borderRadius: '10px',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#34d399',
            fontSize: '12px',
            lineHeight: 1.4
          }}>
            <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
            <span>Verification token resent successfully. Valid for 30 minutes.</span>
          </div>
        )}

        {localStatus === 'verified-success' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 14px',
            borderRadius: '10px',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            color: '#a5b4fc',
            fontSize: '12px',
            lineHeight: 1.4
          }}>
            <CheckCircle2 size={16} color="#818cf8" style={{ flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <strong style={{ color: '#ffffff' }}>Account Verified Successfully!</strong>
              <span>Redirecting you to candidate onboarding &amp; sandbox...</span>
            </div>
          </div>
        )}

        {localStatus === 'link-expired' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '11px 14px',
            borderRadius: '10px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#fbbf24',
            fontSize: '12px',
            lineHeight: 1.4
          }}>
            <AlertTriangle size={16} style={{ flexShrink: 0 }} />
            <span>This verification link has expired. Request a new token below.</span>
          </div>
        )}

        {localStatus === 'rate-limit' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '11px 14px',
            borderRadius: '10px',
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            fontSize: '12px',
            lineHeight: 1.4
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>Rate limit reached: Maximum 3 token dispatches per 15 minutes.</span>
          </div>
        )}

        {localStatus === 'network-error' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '11px 14px',
            borderRadius: '10px',
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            fontSize: '12px',
            lineHeight: 1.4
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>Gateway connection timeout. Check network connection and retry.</span>
          </div>
        )}

        {/* Destination Account Container */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '12px 14px',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8'
            }}>
              <Mail size={16} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontSize: '10.5px',
                fontWeight: 600,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                Destination Account
              </span>
              <span style={{
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#f1f5f9',
                fontFamily: 'monospace'
              }}>
                {emailAddress}
              </span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            borderRadius: '9999px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            fontSize: '11px',
            fontWeight: 600,
            color: '#34d399',
            whiteSpace: 'nowrap'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 6px #10b981'
            }} />
            <span>Link Sent</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* 1. Primary Button: Open Email App */}
          <button
            type="button"
            onClick={() => {
              if (localStatus === 'verified-success') {
                if (onVerificationSuccess) {
                  onVerificationSuccess();
                } else {
                  onNavigateLogin();
                }
              } else {
                handleOpenEmailApp();
              }
            }}
            style={{
              width: '100%',
              padding: '13px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              border: 'none',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.35)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(99, 102, 241, 0.35)';
            }}
          >
            {localStatus === 'verified-success' ? <ArrowRight size={16} /> : <ExternalLink size={16} />}
            <span>{localStatus === 'verified-success' ? 'Start Introduction Interview' : 'Open Email App'}</span>
          </button>

          {/* 2. Secondary Button: Resend Verification Email */}
          <button
            type="button"
            disabled={localStatus === 'resending' || (localStatus === 'cooldown' && cooldownSeconds > 0)}
            onClick={handleResend}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: localStatus === 'resending' || (localStatus === 'cooldown' && cooldownSeconds > 0) ? '#64748b' : '#e2e8f0',
              fontSize: '13.5px',
              fontWeight: 500,
              cursor: localStatus === 'resending' || (localStatus === 'cooldown' && cooldownSeconds > 0) ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (localStatus !== 'resending' && !(localStatus === 'cooldown' && cooldownSeconds > 0)) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (localStatus !== 'resending' && !(localStatus === 'cooldown' && cooldownSeconds > 0)) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }
            }}
          >
            {localStatus === 'resending' ? (
              <>
                <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Dispatching Token...</span>
              </>
            ) : localStatus === 'cooldown' && cooldownSeconds > 0 ? (
              <>
                <RotateCw size={15} />
                <span>Resend available in {cooldownSeconds}s</span>
              </>
            ) : (
              <>
                <RotateCw size={15} />
                <span>Resend Verification Email</span>
              </>
            )}
          </button>
        </div>

        {/* Change Email & Wrong Account Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12.5px',
          color: '#94a3b8',
          paddingTop: '2px'
        }}>
          <button
            type="button"
            onClick={onNavigateSignup}
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
            <Edit3 size={13} />
            <span>Change Email Address</span>
          </button>

          <button
            type="button"
            onClick={onNavigateSignup}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12.5px'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#818cf8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
          >
            <span>Wrong account? Sign Up</span>
            <ArrowRight size={12} />
          </button>
        </div>

        {/* Info Callout Box */}
        <div style={{
          display: 'flex',
          gap: '10px',
          padding: '12px 14px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          color: '#94a3b8',
          fontSize: '11.5px',
          lineHeight: 1.5
        }}>
          <Info size={15} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Didn't receive the email? Check your spam or junk folder, or wait 30 seconds to request a fresh token. Delivery depends on external email provider filters.
          </span>
        </div>

        {/* Security / Encryption Guarantee */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          fontSize: '11px',
          color: '#64748b',
          lineHeight: 1.45,
          paddingTop: '2px'
        }}>
          <Lock size={12} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Your email helps protect your mock recordings, telemetry benchmarks, and multi-vector interview results.
          </span>
        </div>

      </div>

      {/* Return to Homepage Link */}
      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          onClick={onNavigateHome}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#64748b',
            fontSize: '12.5px',
            cursor: 'pointer',
            transition: 'color 0.15s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
        >
          ← Return to Inprep AI homepage
        </button>
      </div>

    </div>
  );
};
