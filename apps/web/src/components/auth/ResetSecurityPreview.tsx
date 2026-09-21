import React from 'react';
import {
  ShieldCheck,
  Lock,
  RefreshCw,
  Fingerprint,
  FileCheck,
  ShieldAlert
} from 'lucide-react';

export const ResetSecurityPreview: React.FC = () => {
  return (
    <div style={{ width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      
      {/* Top Section Header */}
      <div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px',
          borderRadius: '9999px',
          background: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          fontSize: '11px',
          fontWeight: 700,
          color: '#818cf8',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '14px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8' }} />
          <span>CREDENTIAL INTEGRITY &amp; SESSION DEFENSE</span>
        </div>

        <h2 style={{
          fontSize: '36px',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          margin: '0 0 14px 0'
        }}>
          Fortify Your Candidate Records &amp; Interview Telemetry.
        </h2>

        <p style={{
          fontSize: '14px',
          color: '#94a3b8',
          lineHeight: 1.6,
          margin: 0
        }}>
          Updating your credentials resets your cryptographic token ring, invalidates compromised device sessions, and safeguards your private simulation transcripts, video metrics, and STAR scoring evaluations.
        </p>
      </div>

      {/* Security Defense Card */}
      <div style={{
        background: 'rgba(12, 17, 29, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Card Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#a5b4fc',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            <ShieldCheck size={16} color="#818cf8" />
            <span>AUTHENTICATION &amp; TELEMETRY SAFEGUARDS</span>
          </div>

          <div style={{
            padding: '3px 10px',
            borderRadius: '9999px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            fontSize: '11px',
            fontWeight: 600,
            color: '#34d399',
            background: 'rgba(16, 185, 129, 0.1)'
          }}>
            Argon2id Enforced
          </div>
        </div>

        {/* 2x2 Grid of Safeguards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px'
        }}>
          
          {/* Card 1: Zero-Knowledge Key Derivation */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8'
              }}>
                <Lock size={14} />
              </div>
              <h3 style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Argon2id Derivation
              </h3>
            </div>
            <p style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
              Credentials are never persisted in plaintext. Memory-hard salted key derivation protects against GPU-accelerated brute force attacks.
            </p>
          </div>

          {/* Card 2: Universal Session Invalidation */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34d399'
              }}>
                <RefreshCw size={14} />
              </div>
              <h3 style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Session Invalidation
              </h3>
            </div>
            <p style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
              Resetting your password immediately revokes active refresh tokens and terminates previous browser and client sessions.
            </p>
          </div>

          {/* Card 3: Encrypted Telemetry Vault */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fbbf24'
              }}>
                <FileCheck size={14} />
              </div>
              <h3 style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Telemetry Vault
              </h3>
            </div>
            <p style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
              Your mock practice recordings, acoustic WPM benchmarks, and AI scoring rubrics remain locked in your encrypted candidate vault.
            </p>
          </div>

          {/* Card 4: Biometric & 2FA Ready */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'rgba(56, 189, 248, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8'
              }}>
                <Fingerprint size={14} />
              </div>
              <h3 style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Biometric 2FA Ready
              </h3>
            </div>
            <p style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
              Once signed in, you can enroll in Passkeys (WebAuthn) or time-based one-time password (TOTP) authenticators for zero-phishing access.
            </p>
          </div>

        </div>
      </div>

      {/* Responsible AI & Candidate Data Sovereignty */}
      <div style={{
        background: 'rgba(12, 17, 29, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '14px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px'
      }}>
        <ShieldAlert size={20} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0
          }}>
            Responsible AI &amp; Candidate Data Sovereignty
          </h4>
          <p style={{
            fontSize: '12px',
            color: '#94a3b8',
            lineHeight: 1.55,
            margin: 0
          }}>
            Inprep AI strictly adheres to candidate privacy principles. Your mock simulations, scoring rubrics, and diagnostic telemetry are encrypted at rest and never shared with employers without your explicit affirmative action.
          </p>
        </div>
      </div>

    </div>
  );
};
