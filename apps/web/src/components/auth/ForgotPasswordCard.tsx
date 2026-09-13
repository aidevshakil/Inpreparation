import React, { useState, useEffect } from 'react';
import {
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { ForgotStateMode } from './ForgotPrototypeBar';

interface ForgotPasswordCardProps {
  mode: ForgotStateMode;
  onNavigateLogin: () => void;
  onNavigateSignup: () => void;
  onNavigateReset?: () => void;
}

export const ForgotPasswordCard: React.FC<ForgotPasswordCardProps> = ({
  mode,
  onNavigateLogin,
  onNavigateSignup,
  onNavigateReset
}) => {
  const [email, setEmail] = useState('alex.rivera@example.com');
  const [localStatus, setLocalStatus] = useState<ForgotStateMode>(mode);
  const [cooldownSeconds, setCooldownSeconds] = useState(28);

  useEffect(() => {
    setLocalStatus(mode);
    if (mode === 'empty-error') {
      setEmail('');
    } else if (mode === 'invalid-format') {
      setEmail('alex.rivera-invalid-email');
    } else if (mode === 'default' || mode === 'sending' || mode === 'sent-success' || mode === 'cooldown') {
      setEmail('alex.rivera@example.com');
      if (mode === 'cooldown') {
        setCooldownSeconds(28);
      }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setLocalStatus('empty-error');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setLocalStatus('invalid-format');
      return;
    }
    setLocalStatus('sending');
    setTimeout(() => {
      setLocalStatus('sent-success');
    }, 1400);
  };

  return (
    <div style={{
      background: '#090d16',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '24px',
      padding: '36px 32px',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(99, 102, 241, 0.06)',
      width: '100%',
      maxWidth: '480px'
    }}>
      
      {/* Top Header & Step Indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '16px'
      }}>
        {/* Security Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '100px',
          background: 'rgba(124, 58, 237, 0.15)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          fontSize: '11px',
          fontWeight: 700,
          color: '#c084fc'
        }}>
          <Lock size={12} color="#c084fc" />
          <span>Account Security & Credential Recovery</span>
        </div>

        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.05em' }}>
          Step 1 of 3
        </span>
      </div>

      {/* Heading & Subtitle */}
      <h1 style={{
        fontSize: '28px',
        fontWeight: 800,
        color: '#ffffff',
        letterSpacing: '-0.025em',
        marginBottom: '8px'
      }}>
        Forgot Your Password?
      </h1>

      <p style={{
        fontSize: '13.5px',
        color: '#94a3b8',
        lineHeight: 1.55,
        marginBottom: '24px'
      }}>
        No worries. Enter the email address associated with your Inprep AI account and we’ll send you secure instructions to reset your password.
      </p>

      {/* Error & Success Notifications */}
      {localStatus === 'empty-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Please enter your registered email address.</span>
        </div>
      )}

      {localStatus === 'invalid-format' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Please enter a valid email format (e.g. name@domain.com).</span>
        </div>
      )}

      {localStatus === 'rate-limit' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Too many recovery attempts. Please wait 15 minutes before retrying.</span>
        </div>
      )}

      {localStatus === 'network-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Recovery service unreachable. Please verify your connection.</span>
        </div>
      )}

      {localStatus === 'sent-success' && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '10px',
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          fontSize: '12.5px',
          color: '#34d399',
          lineHeight: 1.5,
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>
              Recovery email dispatched to <strong>{email || 'your email'}</strong>. Check your inbox and spam folder.
            </span>
          </div>

          {onNavigateReset && (
            <button
              type="button"
              onClick={onNavigateReset}
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '6px',
                color: '#ffffff',
                padding: '6px 12px',
                fontSize: '11.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                width: 'fit-content',
                marginTop: '4px'
              }}
            >
              <span>Test Reset Password Screen →</span>
            </button>
          )}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        
        {/* Email Address */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: 800,
            color: '#cbd5e1',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            EMAIL ADDRESS <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#0e1320',
            border: localStatus === 'empty-error' || localStatus === 'invalid-format' ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '12px 14px',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ color: '#64748b', marginRight: '10px', fontWeight: 600, fontSize: '15px' }}>
              @
            </span>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex.rivera@example.com"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '6px' }}>
            We’ll dispatch an authenticated one-time recovery token valid for 30 minutes.
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={localStatus === 'sending' || (localStatus === 'cooldown' && cooldownSeconds > 0)}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            padding: '13px',
            fontSize: '14.5px',
            fontWeight: 700,
            cursor: localStatus === 'sending' || (localStatus === 'cooldown' && cooldownSeconds > 0) ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
            transition: 'all 0.2s ease',
            marginTop: '8px'
          }}
          onMouseEnter={(e) => {
            if (localStatus !== 'sending' && localStatus !== 'cooldown') {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.55)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
          }}
        >
          {localStatus === 'sending' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Sending Recovery Link...</span>
            </>
          ) : localStatus === 'cooldown' && cooldownSeconds > 0 ? (
            <>
              <Clock size={16} />
              <span>Resend in {cooldownSeconds}s</span>
            </>
          ) : localStatus === 'sent-success' ? (
            <>
              <CheckCircle2 size={16} />
              <span>Link Dispatched (Resend)</span>
            </>
          ) : (
            <>
              <span>Send Reset Link</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

      </form>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginTop: '24px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
      }}>
        <button
          onClick={onNavigateLogin}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#cbd5e1',
            fontSize: '12.5px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: 0,
            transition: 'color 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
        >
          <ArrowLeft size={14} />
          <span>Back to Log In</span>
        </button>

        <div style={{ fontSize: '12.5px', color: '#94a3b8' }}>
          New candidate?{' '}
          <button
            onClick={onNavigateSignup}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#818cf8',
              fontWeight: 700,
              cursor: 'pointer',
              padding: 0
            }}
          >
            Create Account
          </button>
        </div>
      </div>

      {/* Security Footnote */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
        marginTop: '18px',
        fontSize: '11px',
        color: '#64748b',
        lineHeight: 1.5
      }}>
        <ShieldCheck size={14} color="#64748b" style={{ flexShrink: 0, marginTop: '1px' }} />
        <span>Your account credentials are encrypted. Never share your password or one-time reset link with anyone.</span>
      </div>

    </div>
  );
};

const errorBoxStyle: React.CSSProperties = {
  background: 'rgba(239, 68, 68, 0.12)',
  border: '1px solid rgba(239, 68, 68, 0.3)',
  borderRadius: '10px',
  padding: '10px 14px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '12.5px',
  color: '#f87171',
  marginBottom: '18px'
};
