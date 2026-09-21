import React from 'react';
import { User, CheckCircle2, Camera, Trash2, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

export interface PersonalInfoData {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  avatarUrl: string;
}

interface CvBuilderPersonalInfoSectionProps {
  data: PersonalInfoData;
  onChange: (field: keyof PersonalInfoData, value: string) => void;
}

export const CvBuilderPersonalInfoSection: React.FC<CvBuilderPersonalInfoSectionProps> = ({
  data,
  onChange,
}) => {
  return (
    <div
      id="section-personal"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
            }}
          >
            <User size={14} />
          </span>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            1. Personal Information
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            border: '1px solid rgba(56, 189, 248, 0.25)',
          }}
        >
          Required for Export
        </span>
      </div>

      {/* Profile Photo Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px',
          padding: '14px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
          <img
            src={data.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
            alt="Candidate Avatar"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              objectFit: 'cover',
              border: '2px solid rgba(99, 102, 241, 0.4)',
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px' }}>
            Profile Photo (Optional)
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '0 0 6px 0', lineHeight: 1.4 }}>
            Supported JPG, PNG, WebP up to 5MB. Suitable for international format CVs.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => alert('Photo upload dialog')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--primary-color)',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Camera size={12} />
              <span>Change Photo</span>
            </button>

            <span style={{ color: 'var(--text-muted)' }}>•</span>

            <button
              onClick={() => onChange('avatarUrl', '')}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#f87171',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Trash2 size={12} />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2-Column Form Fields */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '14px',
        }}
      >
        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
            Full Name
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            placeholder="e.g. Shakil Ahamed"
            style={{
              width: '100%',
              padding: '9px 12px',
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Professional Title */}
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
            Professional Title
          </label>
          <input
            type="text"
            value={data.professionalTitle}
            onChange={(e) => onChange('professionalTitle', e.target.value)}
            placeholder="e.g. Senior Backend Engineer & Distributed Systems"
            style={{
              width: '100%',
              padding: '9px 12px',
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Email */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
            <label style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Email Address
            </label>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.66rem', color: '#34d399', fontWeight: 600 }}>
              <CheckCircle2 size={11} /> Verified
            </span>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="e.g. shakil.ahamed@example.com"
              style={{
                width: '100%',
                padding: '9px 12px 9px 34px',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Mail size={14} style={{ position: 'absolute', left: '10px', top: '11px', color: '#64748b' }} />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
            Phone Number
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={data.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              placeholder="e.g. +1 (555) 349-8201"
              style={{
                width: '100%',
                padding: '9px 12px 9px 34px',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Phone size={14} style={{ position: 'absolute', left: '10px', top: '11px', color: '#64748b' }} />
          </div>
        </div>

        {/* Location */}
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
            Location
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={data.location}
              onChange={(e) => onChange('location', e.target.value)}
              placeholder="e.g. San Francisco, CA"
              style={{
                width: '100%',
                padding: '9px 12px 9px 34px',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <MapPin size={14} style={{ position: 'absolute', left: '10px', top: '11px', color: '#64748b' }} />
          </div>
        </div>

        {/* LinkedIn Profile */}
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
            LinkedIn Profile URL
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={data.linkedin}
              onChange={(e) => onChange('linkedin', e.target.value)}
              placeholder="linkedin.com/in/shakilahamed"
              style={{
                width: '100%',
                padding: '9px 12px 9px 34px',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Linkedin size={14} style={{ position: 'absolute', left: '10px', top: '11px', color: '#64748b' }} />
          </div>
        </div>

        {/* GitHub Repository */}
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
            GitHub Repository URL
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={data.github}
              onChange={(e) => onChange('github', e.target.value)}
              placeholder="github.com/shakilahamed"
              style={{
                width: '100%',
                padding: '9px 12px 9px 34px',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Github size={14} style={{ position: 'absolute', left: '10px', top: '11px', color: '#64748b' }} />
          </div>
        </div>

        {/* Portfolio or Personal Site */}
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>
            Portfolio or Personal Site
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={data.portfolio}
              onChange={(e) => onChange('portfolio', e.target.value)}
              placeholder="shakil.dev"
              style={{
                width: '100%',
                padding: '9px 12px 9px 34px',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Globe size={14} style={{ position: 'absolute', left: '10px', top: '11px', color: '#64748b' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
