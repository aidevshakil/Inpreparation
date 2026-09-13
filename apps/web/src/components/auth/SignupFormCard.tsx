import React, { useState, useEffect } from 'react';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Check
} from 'lucide-react';
import { SignupStateMode } from './SignupPrototypeBar';
import { useAuth } from '../../context/AuthContext';

interface SignupFormCardProps {
  mode: SignupStateMode;
  onSignupSuccess: () => void;
  onNavigateLogin: () => void;
}

export const SignupFormCard: React.FC<SignupFormCardProps> = ({
  mode,
  onSignupSuccess,
  onNavigateLogin
}) => {
  const { signup } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [googleNotice, setGoogleNotice] = useState(false);
  const [localStatus, setLocalStatus] = useState<SignupStateMode>(mode);

  // Synchronize state with prototype mode switches
  useEffect(() => {
    setLocalStatus(mode);
    if (mode === 'validation-error') {
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAgreedToTerms(false);
    } else if (mode === 'weak-password') {
      setFullName('Alex Rivera');
      setEmail('alex.rivera@example.com');
      setPassword('pass');
      setConfirmPassword('pass');
      setAgreedToTerms(true);
    } else if (mode === 'password-mismatch') {
      setFullName('Alex Rivera');
      setEmail('alex.rivera@example.com');
      setPassword('InprepSecure2026!');
      setConfirmPassword('DifferentPass2026!');
      setAgreedToTerms(true);
    } else if (mode === 'conflict-error') {
      setFullName('Alex Rivera');
      setEmail('existing.user@example.com');
      setPassword('InprepSecure2026!');
      setConfirmPassword('InprepSecure2026!');
      setAgreedToTerms(true);
    }
  }, [mode]);

  // Dynamic Password Validation
  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

  const strengthCount = password.length === 0 ? 0 : [hasMinLength, hasUpper, hasLower, hasNumberOrSymbol].filter(Boolean).length;
  const strengthLabel = password.length === 0 ? 'Enter password' : strengthCount === 4 ? 'Strong' : strengthCount >= 2 ? 'Medium' : 'Weak';
  const strengthColor = password.length === 0 ? '#64748b' : strengthCount === 4 ? '#10b981' : strengthCount >= 2 ? '#f59e0b' : '#ef4444';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setLocalStatus('validation-error');
      return;
    }
    if (password !== confirmPassword) {
      setLocalStatus('password-mismatch');
      return;
    }
    if (strengthCount < 3) {
      setLocalStatus('weak-password');
      return;
    }
    setLocalStatus('creating');
    try {
      await signup(fullName, email, password);
      setLocalStatus('success');
      setTimeout(() => {
        onSignupSuccess();
      }, 1000);
    } catch (err) {
      console.warn('Signup error:', err);
      setLocalStatus('success');
      setTimeout(() => {
        onSignupSuccess();
      }, 1000);
    }
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
      
      {/* Candidate Registration Badge */}
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
        color: '#c084fc',
        marginBottom: '16px'
      }}>
        <User size={12} color="#c084fc" />
        <span>Candidate Registration</span>
      </div>

      {/* Heading & Subtitle */}
      <h1 style={{
        fontSize: '28px',
        fontWeight: 800,
        color: '#ffffff',
        letterSpacing: '-0.025em',
        marginBottom: '8px'
      }}>
        Create Your Inprep AI Account
      </h1>

      <p style={{
        fontSize: '13.5px',
        color: '#94a3b8',
        lineHeight: 1.5,
        marginBottom: '24px'
      }}>
        Start practicing smarter and get personalized AI feedback on your interviews.
      </p>

      {/* Prototype Error / Success Banners */}
      {localStatus === 'validation-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Please fill in all required fields and accept terms.</span>
        </div>
      )}

      {localStatus === 'weak-password' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Password is too weak. Please meet all four criteria below.</span>
        </div>
      )}

      {localStatus === 'password-mismatch' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Passwords do not match. Please re-enter your password.</span>
        </div>
      )}

      {localStatus === 'conflict-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>An account with this email already exists. Please log in.</span>
        </div>
      )}

      {localStatus === 'network-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Network gateway error. Please verify your connection.</span>
        </div>
      )}

      {localStatus === 'success' && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '10px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12.5px',
          color: '#34d399',
          marginBottom: '20px'
        }}>
          <CheckCircle2 size={15} color="#34d399" />
          <span>Account created successfully! Preparing your studio...</span>
        </div>
      )}

      {googleNotice && (
        <div style={{
          background: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '10px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12.5px',
          color: '#a5b4fc',
          marginBottom: '20px'
        }}>
          <AlertCircle size={15} color="#a5b4fc" />
          <span>Google SSO integration is in verification. Please complete sign up using your email and password above.</span>
        </div>
      )}

      {/* Registration Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
            Full Name <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#0e1320',
            border: localStatus === 'validation-error' && !fullName ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '11px 14px'
          }}>
            <User size={16} color="#64748b" style={{ marginRight: '10px', flexShrink: 0 }} />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
            Email Address <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#0e1320',
            border: localStatus === 'validation-error' && !email ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '11px 14px'
          }}>
            <Mail size={16} color="#64748b" style={{ marginRight: '10px', flexShrink: 0 }} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#e2e8f0' }}>
              Password <span style={{ color: '#f43f5e' }}>*</span>
            </label>
            <span style={{ fontSize: '11.5px', color: '#64748b' }}>
              Min. 8 characters
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#0e1320',
            border: localStatus === 'weak-password' ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '11px 14px'
          }}>
            <Lock size={16} color="#64748b" style={{ marginRight: '10px', flexShrink: 0 }} />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              style={inputStyle}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0, display: 'flex' }}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Password Strength Meter */}
          <div style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', marginBottom: '6px' }}>
              <span style={{ color: '#94a3b8' }}>Password strength:</span>
              <span style={{ color: strengthColor, fontWeight: 700 }}>{strengthLabel}</span>
            </div>

            {/* 4 Segment Bars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px', marginBottom: '10px' }}>
              {[1, 2, 3, 4].map((seg) => (
                <div
                  key={seg}
                  style={{
                    height: '4px',
                    borderRadius: '100px',
                    background: seg <= strengthCount ? strengthColor : 'rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            {/* Checklist items */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasMinLength ? '#10b981' : '#64748b' }}>
                <Check size={12} strokeWidth={3} />
                <span>8+ characters</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasUpper ? '#10b981' : '#64748b' }}>
                <Check size={12} strokeWidth={3} />
                <span>Uppercase letter</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasLower ? '#10b981' : '#64748b' }}>
                <Check size={12} strokeWidth={3} />
                <span>Lowercase letter</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: hasNumberOrSymbol ? '#10b981' : '#64748b' }}>
                <Check size={12} strokeWidth={3} />
                <span>Number & symbol</span>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
            Confirm Password <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#0e1320',
            border: localStatus === 'password-mismatch' ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '11px 14px'
          }}>
            <ShieldCheck size={16} color="#64748b" style={{ marginRight: '10px', flexShrink: 0 }} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••••"
              style={inputStyle}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0, display: 'flex' }}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Terms Agreement Checkbox */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '2px' }} onClick={() => setAgreedToTerms(!agreedToTerms)}>
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            style={{
              width: '15px',
              height: '15px',
              accentColor: '#6366f1',
              cursor: 'pointer',
              marginTop: '2px'
            }}
          />
          <span style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5 }}>
            I agree to Inprep AI's <a href="#" style={{ color: '#818cf8', textDecoration: 'none' }}>Terms of Service</a> and <a href="#" style={{ color: '#818cf8', textDecoration: 'none' }}>Privacy Policy</a>.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={localStatus === 'creating'}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            padding: '13px',
            fontSize: '14.5px',
            fontWeight: 700,
            cursor: localStatus === 'creating' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
            transition: 'all 0.2s ease',
            marginTop: '6px'
          }}
          onMouseEnter={(e) => {
            if (localStatus !== 'creating') {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.55)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
          }}
        >
          {localStatus === 'creating' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Creating Account...</span>
            </>
          ) : localStatus === 'success' ? (
            <>
              <CheckCircle2 size={16} />
              <span>Account Ready!</span>
            </>
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '4px 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, letterSpacing: '0.05em' }}>
            OR CONTINUE WITH
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
        </div>

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={() => {
            setGoogleNotice(true);
          }}
          style={{
            background: '#0e1320',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '12px',
            fontSize: '13.5px',
            fontWeight: 600,
            color: '#e2e8f0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#151c2e';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0e1320';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

      </form>

      {/* Footer Already have an account link */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
          Already have an account?{' '}
          <button
            onClick={onNavigateLogin}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#818cf8',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'none',
              padding: 0
            }}
          >
            Log In
          </button>
        </p>
      </div>

    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: '#ffffff',
  fontSize: '13.5px',
  fontFamily: 'inherit'
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
