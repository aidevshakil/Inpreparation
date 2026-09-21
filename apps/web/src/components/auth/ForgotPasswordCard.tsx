import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Clock,
  KeyRound,
  RotateCcw
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
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [localStatus, setLocalStatus] = useState<ForgotStateMode>(mode);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setLocalStatus(mode);
    if (mode === 'empty-error') {
      setEmail('');
      setStep('email');
    } else if (mode === 'invalid-format') {
      setEmail('invalid-email');
      setStep('email');
    } else if (mode === 'otp-sent' || mode === 'sent-success') {
      setStep('otp');
    } else if (mode === 'invalid-code') {
      setStep('otp');
      setOtpDigits(['0', '0', '0', '0', '0', '0']);
    } else if (mode === 'cooldown') {
      setCooldownSeconds(28);
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

  // Handle email submit -> send OTP
  const handleEmailSubmit = (e: React.FormEvent) => {
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
      setLocalStatus('otp-sent');
      setStep('otp');
      setCooldownSeconds(30);
    }, 1200);
  };

  // Handle OTP digit changes
  const handleDigitChange = (index: number, val: string) => {
    const cleanVal = val.replace(/[^0-9]/g, '');
    const newDigits = [...otpDigits];
    
    if (cleanVal.length > 1) {
      // Paste handling
      const pasted = cleanVal.slice(0, 6).split('');
      for (let i = 0; i < 6; i++) {
        newDigits[i] = pasted[i] || '';
      }
      setOtpDigits(newDigits);
      inputRefs.current[Math.min(pasted.length, 5)]?.focus();
      return;
    }

    newDigits[index] = cleanVal;
    setOtpDigits(newDigits);

    if (cleanVal && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP verification submit -> proceed to reset password
  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = otpDigits.join('');
    if (fullCode.length < 6) {
      setLocalStatus('invalid-code');
      return;
    }

    setLocalStatus('sending');
    setTimeout(() => {
      if (fullCode === '000000') {
        setLocalStatus('invalid-code');
      } else {
        if (onNavigateReset) {
          onNavigateReset();
        }
      }
    }, 900);
  };

  const handleResendCode = () => {
    if (cooldownSeconds > 0) return;
    setCooldownSeconds(30);
    setLocalStatus('otp-sent');
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
          <KeyRound size={12} color="#c084fc" />
          <span>6-Digit Verification Code Recovery</span>
        </div>

        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.05em' }}>
          {step === 'email' ? 'Step 1 of 3' : 'Step 2 of 3'}
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
        {step === 'email' ? 'Forgot Your Password?' : 'Enter 6-Digit Code'}
      </h1>

      <p style={{
        fontSize: '13.5px',
        color: '#94a3b8',
        lineHeight: 1.55,
        marginBottom: '24px'
      }}>
        {step === 'email'
          ? 'Enter the email address associated with your Inprep AI account and we’ll send a secure 6-digit verification code.'
          : <>We sent a 6-digit verification code to <strong style={{ color: '#f8fafc' }}>{email}</strong>. Enter it below to reset your password.</>}
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

      {localStatus === 'invalid-code' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Invalid or expired verification code. Please check and try again.</span>
        </div>
      )}

      {localStatus === 'rate-limit' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Too many attempts. Please wait a few minutes before retrying.</span>
        </div>
      )}

      {localStatus === 'network-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Recovery service unreachable. Please verify your connection.</span>
        </div>
      )}

      {step === 'email' ? (
        /* STEP 1: EMAIL ENTRY FORM */
        <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
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
              REGISTERED EMAIL ADDRESS <span style={{ color: '#f43f5e' }}>*</span>
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
                placeholder="name@example.com"
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
              We'll send a 6-digit verification code valid for 10 minutes.
            </div>
          </div>

          <button
            type="submit"
            disabled={localStatus === 'sending'}
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '13px',
              fontSize: '14.5px',
              fontWeight: 700,
              cursor: localStatus === 'sending' ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
              transition: 'all 0.2s ease',
              marginTop: '8px'
            }}
          >
            {localStatus === 'sending' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending 6-Digit Code...</span>
              </>
            ) : (
              <>
                <span>Send 6-Digit Verification Code</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>

        </form>
      ) : (
        /* STEP 2: 6-DIGIT OTP ENTRY FORM */
        <form onSubmit={handleOtpVerify} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#cbd5e1',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                6-DIGIT VERIFICATION CODE <span style={{ color: '#f43f5e' }}>*</span>
              </label>
              <button
                type="button"
                onClick={() => setStep('email')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#818cf8',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Change Email
              </button>
            </div>

            {/* 6 Digit Input Boxes */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
              {otpDigits.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleDigitChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  style={{
                    width: '46px',
                    height: '52px',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#ffffff',
                    background: '#0e1320',
                    border: digit ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    outline: 'none',
                    boxShadow: digit ? '0 0 12px rgba(129, 140, 248, 0.25)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                />
              ))}
            </div>

            {/* Resend Timer & Action */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', fontSize: '11.5px' }}>
              <span style={{ color: '#64748b' }}>
                Code expires in 10:00
              </span>
              {cooldownSeconds > 0 ? (
                <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> Resend in {cooldownSeconds}s
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendCode}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#818cf8',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: 0
                  }}
                >
                  <RotateCcw size={12} /> Resend Code
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={localStatus === 'sending'}
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '13px',
              fontSize: '14.5px',
              fontWeight: 700,
              cursor: localStatus === 'sending' ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
              transition: 'all 0.2s ease',
              marginTop: '4px'
            }}
          >
            {localStatus === 'sending' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Verifying Code...</span>
              </>
            ) : (
              <>
                <span>Verify Code &amp; Reset Password</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>

        </form>
      )}

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
        <span>Verification codes are cryptographically secured and valid for a single recovery session. Never share your OTP with anyone.</span>
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

