import React from 'react';
import { User, Lock, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface ProfileBasicInfoProps {
  isEditing: boolean;
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
  isEditing,
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
    <div className="card">
      {/* Section Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
        <div className="flex items-center gap-3">
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)',
          }}>
            <User size={16} />
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Basic Information</h3>
            {isEditing && <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>General candidate identity</p>}
          </div>
        </div>

        {isEditing && (
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            STEP 1 / 4
          </span>
        )}
      </div>

      {!isEditing ? (
        // VIEW MODE
        <div className="flex-col gap-4">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div>
              <span className="label">Full Name</span>
              <div className="flex items-center gap-2">
                <User size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{fullName}</span>
              </div>
            </div>
            
            <div>
              <span className="label">Email Address</span>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)' }}>{email}</span>
                <span className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-success)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                  <CheckCircle2 size={10} /> Verified
                </span>
              </div>
            </div>

            <div>
              <span className="label">Phone Number</span>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)' }}>{phone || 'Not provided'}</span>
              </div>
            </div>

            <div>
              <span className="label">Location</span>
              <div className="flex items-center gap-2">
                <MapPin size={14} style={{ color: 'var(--text-muted)' }} />
                <span style={{ color: 'var(--text-main)' }}>{location || 'Not provided'}</span>
              </div>
            </div>
          </div>
          
          <div className="divider" style={{ margin: '8px 0' }} />
          
          <div>
            <span className="label">Preferred Language</span>
            <div className="flex items-center gap-2">
              <Globe size={14} style={{ color: 'var(--text-muted)' }} />
              <span style={{ color: 'var(--text-main)' }}>{language === 'en-US' ? 'English (US)' : language}</span>
            </div>
          </div>
        </div>
      ) : (
        // EDIT MODE
        <div className="flex-col gap-4">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            {/* Full Name */}
            <div>
              <label className="label">Full Name <span style={{ color: 'var(--color-error)' }}>*</span></label>
              <input
                type="text"
                className="input"
                value={fullName}
                onChange={(e) => onChangeFullName(e.target.value)}
                placeholder="e.g. Shakil Ahamed"
                style={showValidationError && !fullName ? { borderColor: 'var(--color-error)' } : {}}
              />
              {showValidationError && !fullName && (
                <span style={{ fontSize: '11px', color: 'var(--color-error)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  <AlertCircle size={12} /> Full name cannot be empty.
                </span>
              )}
            </div>

            {/* Email Address */}
            <div>
              <div className="flex items-center justify-between" style={{ marginBottom: '6px' }}>
                <label className="label" style={{ margin: 0 }}>Email Address <span style={{ color: 'var(--color-error)' }}>*</span></label>
                <div className="flex items-center gap-2">
                  <span className="badge" style={{ padding: '2px 6px', fontSize: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-success)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                    <CheckCircle2 size={10} /> Verified
                  </span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Lock size={10} /> Protected
                  </span>
                </div>
              </div>
              <input
                type="email"
                className="input"
                value={email}
                readOnly
                style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)', cursor: 'not-allowed' }}
              />
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                Changing email requires one-time re-verification token.
              </span>
            </div>

            {/* Phone Number */}
            <div>
              <label className="label">Phone Number <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span></label>
              <input
                type="tel"
                className="input"
                value={phone}
                onChange={(e) => onChangePhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Location / City */}
            <div>
              <label className="label">Location / City <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span></label>
              <input
                type="text"
                className="input"
                value={location}
                onChange={(e) => onChangeLocation(e.target.value)}
                placeholder="San Francisco, CA, United States"
              />
            </div>
          </div>

          {/* Language Preference */}
          <div style={{ marginTop: '8px' }}>
            <label className="label">Preferred Communication &amp; AI Interview Language</label>
            <select
              className="input"
              value={language}
              onChange={(e) => onChangeLanguage(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
              <option value="en-US">English (Default International tech interview standard)</option>
              <option value="en-GB">English (British Standard)</option>
              <option value="de-DE">German (Deutsch)</option>
              <option value="fr-FR">French (Français)</option>
              <option value="es-ES">Spanish (Español)</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
