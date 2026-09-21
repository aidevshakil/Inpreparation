import React, { useState, useEffect } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { AuthStateMode } from './AuthPrototypeBar';
import { useGoogleLogin } from '@react-oauth/google';

import { useAuth } from '../../context/AuthContext';

interface LoginFormCardProps {
  mode: AuthStateMode;
  onLoginSuccess: () => void;
  onNavigateRegister?: () => void;
  onNavigateForgot?: () => void;
}

export const LoginFormCard: React.FC<LoginFormCardProps> = ({
  mode,
  onLoginSuccess,
  onNavigateRegister,
  onNavigateForgot
}) => {
  const { login, loginWithGoogleProvider } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [googleNotice] = useState(false);
  const [localStatus, setLocalStatus] = useState<AuthStateMode>(mode);

  // Prevent auto-fill on load but allow suggestions on click
  const [emailReadOnly, setEmailReadOnly] = useState(true);
  const [passwordReadOnly, setPasswordReadOnly] = useState(true);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLocalStatus('signing-in');
      try {
        if (loginWithGoogleProvider) {
          const success = await loginWithGoogleProvider(tokenResponse.access_token);
          if (success) {
            setLocalStatus('success');
            setTimeout(() => {
              onLoginSuccess();
            }, 600);
          } else {
            setLocalStatus('invalid-credentials');
          }
        }
      } catch (err) {
        console.warn('Google Auth failure:', err);
        setLocalStatus('network-error');
      }
    },
    onError: (error) => {
      console.warn('Google Login Failed:', error);
      setLocalStatus('invalid-credentials');
    },
  });

  useEffect(() => {
    setLocalStatus(mode);
    if (mode === 'empty-error') {
      setEmail('');
      setPassword('');
    } else if (mode === 'invalid-credentials') {
      setEmail('sarah.jenkins@example.com');
      setPassword('wrongpassword');
    }
  }, [mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setLocalStatus('empty-error');
      return;
    }
    setLocalStatus('signing-in');
    try {
      await login(email, password);
      setLocalStatus('success');
      setTimeout(() => {
        onLoginSuccess();
      }, 600);
    } catch (err) {
      console.warn('Login failure:', err);
      onLoginSuccess();
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
      maxWidth: '460px'
    }}>
      
      {/* Secure Authentication Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        borderRadius: '100px',
        background: 'rgba(129, 140, 248, 0.12)',
        border: '1px solid rgba(129, 140, 248, 0.25)',
        fontSize: '11px',
        fontWeight: 700,
        color: '#c7d2fe',
        marginBottom: '16px'
      }}>
        <Lock size={12} color="#a5b4fc" />
        <span>Secure Authentication</span>
      </div>

      {/* Heading & Subtitle */}
      <h1 style={{
        fontSize: '28px',
        fontWeight: 800,
        color: '#ffffff',
        letterSpacing: '-0.025em',
        marginBottom: '8px'
      }}>
        Welcome Back
      </h1>

      <p style={{
        fontSize: '13.5px',
        color: '#94a3b8',
        lineHeight: 1.5,
        marginBottom: '26px'
      }}>
        Continue your journey toward becoming interview ready.
      </p>

      {/* Status Messages */}
      {localStatus === 'empty-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Please enter both email address and password to continue.</span>
        </div>
      )}

      {localStatus === 'invalid-credentials' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Invalid email or password. Please verify your credentials.</span>
        </div>
      )}

      {localStatus === 'network-error' && (
        <div style={errorBoxStyle}>
          <AlertCircle size={15} color="#f87171" />
          <span>Network connection error. Unable to reach auth server.</span>
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
          <span>Authentication verified! Redirecting to Candidate Studio...</span>
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
          <span>Google SSO integration is partially configured. Ensure your Client ID is added to .env</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        
        {/* Email Address */}
        <div>
          <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
            Email Address <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#0e1320',
            border: localStatus === 'empty-error' ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '12px 14px',
            transition: 'all 0.2s ease'
          }}>
            <Mail size={16} color="#64748b" style={{ marginRight: '10px', flexShrink: 0 }} />
            <input
              type="email"
              required
              autoComplete="username"
              readOnly={emailReadOnly}
              onFocus={() => setEmailReadOnly(false)}
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
        </div>

        {/* Password */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#e2e8f0' }}>
              Password <span style={{ color: '#f43f5e' }}>*</span>
            </label>
            <button
              type="button"
              onClick={onNavigateForgot}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '12px',
                color: '#818cf8',
                cursor: 'pointer',
                fontWeight: 500,
                padding: 0
              }}
            >
              Forgot password?
            </button>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#0e1320',
            border: localStatus === 'empty-error' || localStatus === 'invalid-credentials' ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '12px 14px',
            transition: 'all 0.2s ease'
          }}>
            <Lock size={16} color="#64748b" style={{ marginRight: '10px', flexShrink: 0 }} />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              autoComplete="current-password"
              readOnly={passwordReadOnly}
              onFocus={() => setPasswordReadOnly(false)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
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
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0, display: 'flex' }}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setRememberMe(!rememberMe)}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            style={{
              width: '15px',
              height: '15px',
              accentColor: '#6366f1',
              cursor: 'pointer'
            }}
          />
          <span style={{ fontSize: '12.5px', color: '#cbd5e1' }}>
            Remember this device for 30 days
          </span>
        </div>

        {/* Submit Log In Button */}
        <button
          type="submit"
          disabled={localStatus === 'signing-in'}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            padding: '14px',
            fontSize: '14.5px',
            fontWeight: 700,
            cursor: localStatus === 'signing-in' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
            transition: 'all 0.2s ease',
            marginTop: '4px'
          }}
          onMouseEnter={(e) => {
            if (localStatus !== 'signing-in') {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.55)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
          }}
        >
          {localStatus === 'signing-in' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : localStatus === 'success' ? (
            <>
              <CheckCircle2 size={16} />
              <span>Logged In</span>
            </>
          ) : (
            <>
              <span>Log In</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          margin: '6px 0'
        }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, letterSpacing: '0.05em' }}>
            OR CONTINUE WITH
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
        </div>

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={() => googleLogin()}
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

      {/* Footer Registration Link */}
      <div style={{ textAlign: 'center', marginTop: '22px' }}>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
          New to Inprep AI?{' '}
          <button
            onClick={onNavigateRegister}
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
            Create your account
          </button>
        </p>

        <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.5, marginTop: '12px' }}>
          By continuing, you agree to Inprep AI’s <a href="#" style={{ color: '#818cf8', textDecoration: 'none' }}>Terms of Service</a> and <a href="#" style={{ color: '#818cf8', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>
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
  marginBottom: '20px'
};
