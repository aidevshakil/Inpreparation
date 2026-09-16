import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Mail,
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
      setCooldownSeconds(120);
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

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const cleanNumbers = pastedText.replace(/\D/g, '').slice(0, 6);
    if (!cleanNumbers) return;

    const newDigits = ['', '', '', '', '', ''];
    for (let i = 0; i < cleanNumbers.length; i++) {
      newDigits[i] = cleanNumbers[i];
    }
    setOtpDigits(newDigits);
    setErrorMessage(null);

    const nextFocusIndex = Math.min(cleanNumbers.length, 5);
    inputRefs.current[nextFocusIndex]?.focus();

    if (cleanNumbers.length === 6) {
      handleVerify(cleanNumbers);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const cleanValue = value.replace(/\D/g, '');

    if (cleanValue.length > 1) {
      const cleanNumbers = cleanValue.slice(0, 6);
      const newDigits = ['', '', '', '', '', ''];
      for (let i = 0; i < cleanNumbers.length; i++) {
        newDigits[i] = cleanNumbers[i];
      }
      setOtpDigits(newDigits);
      setErrorMessage(null);

      const nextFocus = Math.min(cleanNumbers.length, 5);
      inputRefs.current[nextFocus]?.focus();

      if (cleanNumbers.length === 6) {
        handleVerify(cleanNumbers);
      }
      return;
    }

    const newDigits = [...otpDigits];
    newDigits[index] = cleanValue.slice(-1);
    setOtpDigits(newDigits);
    setErrorMessage(null);

    if (cleanValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

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
      setCooldownSeconds(120);
      setOtpDigits(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      setErrorMessage('Failed to resend code. Please try again in a moment.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="card flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Top Header Badge & Step Counter */}
        <div className="flex items-center justify-between">
          <div className="badge">
            <Shield size={12} /> Account Security
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            STEP 2 OF 3
          </div>
        </div>

        {/* Centered Email Envelope Illustration */}
        <div className="flex justify-center">
          <div style={{
            position: 'relative',
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Mail size={28} color="var(--text-main)" strokeWidth={1.5} />
            <div style={{
              position: 'absolute',
              bottom: '-4px',
              right: '-4px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-color)',
              border: '2px solid var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Check size={12} color="#ffffff" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Headings */}
        <div className="text-center">
          <h1 style={{ fontSize: '22px', marginBottom: '8px' }}>Verify Your Email</h1>
          <p style={{ fontSize: '14px', margin: 0 }}>We've sent a 6-digit code to:</p>
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginTop: '4px' }}>
            {emailAddress}
          </div>
        </div>

        {/* Dynamic State Alerts */}
        {localStatus === 'resent-banner' && (
          <div style={{
            display: 'flex', gap: '8px', padding: '12px', borderRadius: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)',
            color: 'var(--color-success)', fontSize: '13px'
          }}>
            <CheckCircle2 size={16} />
            <span>New verification code dispatched. Valid for 5 minutes.</span>
          </div>
        )}

        {localStatus === 'verified-success' && (
          <div style={{
            display: 'flex', gap: '8px', padding: '12px', borderRadius: '8px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)',
            color: 'var(--color-info)', fontSize: '13px'
          }}>
            <CheckCircle2 size={16} />
            <div className="flex-col">
              <strong>Account Verified!</strong>
              <span>Redirecting you...</span>
            </div>
          </div>
        )}

        {errorMessage && (
          <div style={{
            display: 'flex', gap: '8px', padding: '12px', borderRadius: '8px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)',
            color: 'var(--color-error)', fontSize: '13px'
          }}>
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 6-DIGIT OTP INPUTS CONTAINER */}
        <div className="flex-col gap-2">
          <label className="label flex items-center gap-2">
            <KeyRound size={14} /> Enter 6-Digit Code
          </label>
          <div className="flex justify-between gap-2" onPaste={handlePaste}>
            {otpDigits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputRefs.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={handlePaste}
                style={{
                  width: '100%',
                  height: '48px',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  backgroundColor: 'var(--bg-surface)',
                  border: digit ? '1px solid var(--border-focus)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => {
                  if (!otpDigits[idx]) e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex-col gap-4">
          <button
            type="button"
            disabled={isVerifying || localStatus === 'verified-success'}
            onClick={() => handleVerify()}
            className="btn btn-primary w-full"
            style={{ height: '44px' }}
          >
            {isVerifying ? (
              <><Loader2 size={16} className="spin-animate" /> Verifying...</>
            ) : localStatus === 'verified-success' ? (
              <><CheckCircle2 size={16} /> Verified!</>
            ) : (
              <><ArrowRight size={16} /> Verify &amp; Activate Account</>
            )}
          </button>

          <div className="flex justify-center">
            <button
              type="button"
              disabled={isResending || cooldownSeconds > 0}
              onClick={handleResend}
              style={{
                background: 'transparent', border: 'none',
                color: cooldownSeconds > 0 ? 'var(--text-muted)' : 'var(--text-secondary)',
                fontSize: '13px', fontWeight: 500,
                cursor: cooldownSeconds > 0 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', gap: '6px'
              }}
            >
              {isResending ? (
                <><Loader2 size={14} className="spin-animate" /> Sending code...</>
              ) : cooldownSeconds > 0 ? (
                <><RotateCw size={14} /> Resend code in {cooldownSeconds}s</>
              ) : (
                <><RotateCw size={14} /> Didn't receive the code? Resend</>
              )}
            </button>
          </div>
        </div>

        {/* Change Email Link */}
        <div style={{
          display: 'flex', justifyContent: 'center', fontSize: '13px', color: 'var(--text-muted)',
          borderTop: '1px solid var(--border-subtle)', paddingTop: '16px'
        }}>
          Wrong email address? 
          <button
            onClick={onNavigateSignup}
            style={{ background: 'transparent', border: 'none', color: 'var(--primary-color)', fontWeight: 500, cursor: 'pointer', marginLeft: '4px' }}
          >
            Change email
          </button>
        </div>
      </div>

      {/* Security & Spam Notice */}
      <div style={{
        display: 'flex', gap: '10px', padding: '12px 16px', borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
        fontSize: '12px', color: 'var(--text-secondary)'
      }}>
        <Info size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
        <span>
          Can't find the email? Check your <strong>Spam / Junk</strong> folder or make sure your SMTP credentials in <code>.env</code> are active.
        </span>
      </div>
    </div>
  );
};
