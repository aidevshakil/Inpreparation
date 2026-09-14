import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Mail,
  ExternalLink,
  RotateCw,
  ArrowRight,
  Info,
  Check,
  CheckCircle2,
  AlertCircle,
  Loader2,
  KeyRound,
} from 'lucide-react';
import { EmailVerificationStateMode } from './EmailVerificationPrototypeBar';
import { verifyEmailOtp, sendVerificationOtp } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

interface EmailVerificationCardProps {
  mode?: EmailVerificationStateMode;
  emailAddress?: string;
  onNavigateHome: () => void;
  onNavigateLogin: () => void;
  onNavigateSignup: () => void;
  onVerificationSuccess?: () => void;
}

export const EmailVerificationCard: React.FC<EmailVerificationCardProps> = ({
  mode = 'default',
  emailAddress: propEmailAddress,
  onNavigateHome: _onNavigateHome,
  onNavigateLogin,
  onNavigateSignup,
  onVerificationSuccess,
}) => {
  const { user, updateUser } = useAuth();
  const emailAddress = propEmailAddress || user?.email || 'candidate@inprep.ai';

  const [localStatus, setLocalStatus] = useState<EmailVerificationStateMode>(mode);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setLocalStatus(mode);
    if (mode === 'cooldown') {
      setCooldownSeconds(30);
    }
  }, [mode]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (cooldownSeconds > 0) {
      timer = setInterval(() => {
        setCooldownSeconds((prev) => (prev > 1 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  const handleOtpChange = (index: number, value: string) => {
    // Only accept numbers
    const cleanValue = value.replace(/\D/g, '');
    const newDigits = [...otpDigits];

    if (cleanValue.length > 1) {
      // Handle paste
      const pastedDigits = cleanValue.slice(0, 6).split('');
      for (let i = 0; i < 6; i++) {
        newDigits[i] = pastedDigits[i] || '';
      }
      setOtpDigits(newDigits);
      const nextFocus = Math.min(pastedDigits.length, 5);
      inputRefs.current[nextFocus]?.focus();
      if (pastedDigits.length === 6) {
        handleVerify(newDigits.join(''));
      }
      return;
    }

    newDigits[index] = cleanValue.slice(-1);
    setOtpDigits(newDigits);
    setErrorMessage(null);

    // Auto-focus next box
    if (cleanValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if all 6 digits are filled
    const fullCode = newDigits.join('');
    if (fullCode.length === 6 && !newDigits.includes('')) {
      handleVerify(fullCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (codeToVerify?: string) => {
    const code = codeToVerify || otpDigits.join('');
    if (code.length < 6) {
      setErrorMessage('Please enter the full 6-digit code sent to your email.');
      return;
    }

    setIsVerifying(true);
    setErrorMessage(null);

    try {
      const response = await verifyEmailOtp(emailAddress, code);
      if (response && response.success) {
        updateUser({ isEmailVerified: true });
        setLocalStatus('verified-success');
        setTimeout(() => {
          if (onVerificationSuccess) {
            onVerificationSuccess();
          } else {
            onNavigateLogin();
          }
        }, 1200);
      } else {
        setErrorMessage(response.error || 'Invalid verification code.');
        setLocalStatus('validation-error' as any);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Verification failed. Please check your code.');
      setLocalStatus('validation-error' as any);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (cooldownSeconds > 0 || isResending) return;
    setIsResending(true);
    setErrorMessage(null);

    try {
      await sendVerificationOtp(emailAddress, 'signup');
      setLocalStatus('resent-banner');
      setCooldownSeconds(30);
      setOtpDigits(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      setErrorMessage('Failed to resend code. Please try again in a moment.');
    } finally {
      setIsResending(false);
    }
  };

  const handleOpenEmailApp = () => {
    const domain = emailAddress.split('@')[1]?.toLowerCase();
    if (domain === 'gmail.com') {
      window.open('https://mail.google.com', '_blank');
    } else if (domain === 'outlook.com' || domain === 'hotmail.com') {
      window.open('https://outlook.live.com', '_blank');
    } else if (domain === 'yahoo.com') {
      window.open('https://mail.yahoo.com', '_blank');
    } else {
      window.open(`https://${domain || 'mail.google.com'}`, '_blank');
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Main Glassmorphic Card */}
      <div
        style={{
          background: 'rgba(10, 14, 23, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Top Header Badge & Step Counter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div
            style={{
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
              letterSpacing: '0.02em',
            }}
          >
            <Shield size={13} color="#818cf8" />
            <span>Account Security &amp; Identity</span>
          </div>

          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#64748b',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            STEP 2 OF 3
          </div>
        </div>

        {/* Centered Email Envelope Illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px', marginBottom: '2px' }}>
          <div
            style={{
              position: 'relative',
              width: '76px',
              height: '76px',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, #182035 0%, #0d1322 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Mail size={32} color="#818cf8" strokeWidth={1.8} />

            {/* Small badge overlay on bottom-right */}
            <div
              style={{
                position: 'absolute',
                bottom: '-3px',
                right: '-3px',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: '#6366f1',
                border: '2.5px solid #0a0e17',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(99, 102, 241, 0.6)',
              }}
            >
              <Check size={12} color="#ffffff" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Headings */}
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '0 0 8px 0',
            }}
          >
            Verify Your Email
          </h1>
          <p
            style={{
              fontSize: '13px',
              color: '#94a3b8',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            We've sent a 6-digit verification code to:
          </p>
          <div
            style={{
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#818cf8',
              marginTop: '4px',
              fontFamily: 'monospace',
            }}
          >
            {emailAddress}
          </div>
        </div>

        {/* Dynamic State Alerts */}
        {localStatus === 'resent-banner' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '11px 14px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '12px',
              lineHeight: 1.4,
            }}
          >
            <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
            <span>New 6-digit verification code dispatched. Valid for 15 minutes.</span>
          </div>
        )}

        {localStatus === 'verified-success' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 14px',
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              color: '#a5b4fc',
              fontSize: '12px',
              lineHeight: 1.4,
            }}
          >
            <CheckCircle2 size={16} color="#818cf8" style={{ flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <strong style={{ color: '#ffffff' }}>Account Verified Successfully!</strong>
              <span>Redirecting you to candidate onboarding &amp; cockpit...</span>
            </div>
          </div>
        )}

        {errorMessage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '11px 14px',
              borderRadius: '10px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              fontSize: '12px',
              lineHeight: 1.4,
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 6-DIGIT OTP INPUTS CONTAINER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <KeyRound size={13} color="#818cf8" />
            <span>Enter 6-Digit Code</span>
          </label>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
            {otpDigits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputRefs.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                style={{
                  width: '46px',
                  height: '52px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  color: '#ffffff',
                  backgroundColor: digit ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                  border: digit ? '2px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.18s ease',
                  boxShadow: digit ? '0 0 12px rgba(99, 102, 241, 0.3)' : 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#818cf8';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(99, 102, 241, 0.35)';
                }}
                onBlur={(e) => {
                  if (!otpDigits[idx]) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
          {/* 1. Primary Button: Verify Code */}
          <button
            type="button"
            disabled={isVerifying || localStatus === 'verified-success'}
            onClick={() => handleVerify()}
            style={{
              width: '100%',
              padding: '13px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              border: 'none',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: isVerifying ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!isVerifying) {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.45)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(99, 102, 241, 0.35)';
            }}
          >
            {isVerifying ? (
              <>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Verifying Code...</span>
              </>
            ) : localStatus === 'verified-success' ? (
              <>
                <CheckCircle2 size={16} />
                <span>Verified! Redirecting...</span>
              </>
            ) : (
              <>
                <ArrowRight size={16} />
                <span>Verify &amp; Activate Account</span>
              </>
            )}
          </button>

          {/* 2. Secondary Button: Open Webmail */}
          <button
            type="button"
            onClick={handleOpenEmailApp}
            style={{
              width: '100%',
              padding: '11px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.color = '#f1f5f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            <ExternalLink size={14} />
            <span>Open Email Inbox</span>
          </button>

          {/* 3. Resend Code Trigger */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px' }}>
            <button
              type="button"
              disabled={isResending || cooldownSeconds > 0}
              onClick={handleResend}
              style={{
                background: 'transparent',
                border: 'none',
                color: cooldownSeconds > 0 ? '#64748b' : '#818cf8',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: cooldownSeconds > 0 ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 8px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                if (cooldownSeconds === 0) e.currentTarget.style.color = '#a5b4fc';
              }}
              onMouseLeave={(e) => {
                if (cooldownSeconds === 0) e.currentTarget.style.color = '#818cf8';
              }}
            >
              {isResending ? (
                <>
                  <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} />
                  <span>Sending code...</span>
                </>
              ) : cooldownSeconds > 0 ? (
                <>
                  <RotateCw size={13} />
                  <span>Resend code in {cooldownSeconds}s</span>
                </>
              ) : (
                <>
                  <RotateCw size={13} />
                  <span>Didn't receive the code? Resend</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Change Email Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#64748b',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '12px',
          }}
        >
          <span>Wrong email address?</span>
          <button
            type="button"
            onClick={onNavigateSignup}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#818cf8',
              fontWeight: 600,
              cursor: 'pointer',
              marginLeft: '6px',
              padding: 0,
            }}
          >
            Change email
          </button>
        </div>
      </div>

      {/* Security & Spam Notice */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '11.5px',
          color: '#64748b',
          lineHeight: 1.5,
        }}
      >
        <Info size={14} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
        <span>
          Can't find the email? Check your <strong>Spam / Junk</strong> folder or make sure your SMTP credentials in{' '}
          <code>.env</code> are active. (In local dev mode, code is also logged to backend terminal).
        </span>
      </div>
    </div>
  );
};

