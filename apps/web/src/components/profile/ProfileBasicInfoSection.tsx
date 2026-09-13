import React from 'react';
import { User, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProfileBasicInfoProps {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  language: string;
  onChangeFullName: (val: string) => void;
  onChangePhone: (val: string) => void;
  onChangeLocation: (val: string) => void;
  onChangeLanguage: (val: string) => void;
  showValidationError?: boolean;
}

export const ProfileBasicInfoSection: React.FC<ProfileBasicInfoProps> = ({
  fullName,
  email,
  phone,
  location,
  language,
  onChangeFullName,
  onChangePhone,
  onChangeLocation,
  onChangeLanguage,
  showValidationError = false,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: showValidationError
          ? '1px solid rgba(244, 63, 94, 0.45)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#818cf8',
            }}
          >
            <User size={16} />
          </div>
          <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Basic Information
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.8px',
            color: '#64748b',
            textTransform: 'uppercase',
          }}
        >
          STEP 1 / 4
        </span>
      </div>

      <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
        General candidate identity, used in candidate communications.
      </p>

      {/* Form Fields Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Full Name <span style={{ color: '#f43f5e' }}>*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => onChangeFullName(e.target.value)}
            placeholder="e.g. Shakil Ahamed"
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: showValidationError && !fullName
                ? '1px solid #f43f5e'
                : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          {showValidationError && !fullName && (
            <span style={{ fontSize: '0.72rem', color: '#fb7185', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <AlertCircle size={12} /> Full name cannot be empty.
            </span>
          )}
        </div>

        {/* Email Address */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1' }}>
              Email Address <span style={{ color: '#f43f5e' }}>*</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 600,
                  padding: '1px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                <CheckCircle2 size={10} /> Verified
              </span>
              <span
                style={{
                  fontSize: '0.66rem',
                  color: '#64748b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <Lock size={10} /> Protected
              </span>
            </div>
          </div>

          <input
            type="email"
            value={email}
            readOnly
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '10px',
              color: '#94a3b8',
              fontSize: '0.84rem',
              cursor: 'not-allowed',
            }}
          />
          <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block', marginTop: '4px' }}>
            Changing email requires one-time re-verification token.
          </span>
        </div>

        {/* Phone Number */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Phone Number <span style={{ color: '#64748b', fontWeight: 400 }}>(Optional)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => onChangePhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
            }}
          />
        </div>

        {/* Location / City */}
        <div>
          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
            Location / City <span style={{ color: '#64748b', fontWeight: 400 }}>(Optional)</span>
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => onChangeLocation(e.target.value)}
            placeholder="San Francisco, CA, United States"
            style={{
              width: '100%',
              height: '42px',
              padding: '0 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#f8fafc',
              fontSize: '0.84rem',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Language Preference */}
      <div style={{ marginTop: '18px' }}>
        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
          Preferred Communication &amp; AI Interview Language
        </label>
        <select
          value={language}
          onChange={(e) => onChangeLanguage(e.target.value)}
          style={{
            width: '100%',
            height: '42px',
            padding: '0 14px',
            backgroundColor: '#0c101a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            color: '#f8fafc',
            fontSize: '0.84rem',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          <option value="en-US">English (Default International tech interview standard)</option>
          <option value="en-GB">English (British Standard)</option>
          <option value="de-DE">German (Deutsch)</option>
          <option value="fr-FR">French (Français)</option>
          <option value="es-ES">Spanish (Español)</option>
        </select>
        <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block', marginTop: '4px' }}>
          Interview speech acoustic models will adapt to your accent and chosen language.
        </span>
      </div>
    </div>
  );
};
