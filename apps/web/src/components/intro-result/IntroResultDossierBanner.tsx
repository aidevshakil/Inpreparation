import React from 'react';
import { Sparkles, Edit3, Download } from 'lucide-react';

interface IntroResultDossierBannerProps {
  onEditProfile?: () => void;
  onDownloadPdf?: () => void;
}

export const IntroResultDossierBanner: React.FC<IntroResultDossierBannerProps> = ({
  onEditProfile,
  onDownloadPdf,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px 24px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              color: '#818cf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={16} />
          </div>

          <div>
            <div style={{ fontSize: '0.66rem', color: '#818cf8', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              SYNTHESIS DOSSIER
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              Your Career Direction at a Glance
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={onEditProfile}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Edit3 size={12} />
            <span>Edit Profile Information</span>
          </button>

          <button
            onClick={onDownloadPdf}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Download size={12} />
            <span>Download Summary PDF</span>
          </button>
        </div>
      </div>

      {/* 4-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}
      >
        {/* Col 1 */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '14px',
          }}
        >
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
            CURRENT BACKGROUND
          </div>
          <div style={{ fontSize: '0.86rem', color: '#f8fafc', fontWeight: 700, marginBottom: '4px' }}>
            Senior Backend Engineer
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
            Distributed Systems, Kafka, Go/Python
          </div>
        </div>

        {/* Col 2 - Target Role Highlight */}
        <div
          style={{
            backgroundColor: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(129, 140, 248, 0.45)',
            borderRadius: '12px',
            padding: '14px',
            boxShadow: '0 0 16px rgba(99, 102, 241, 0.15)',
          }}
        >
          <div style={{ fontSize: '0.64rem', color: '#a5b4fc', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
            TARGET ROLE
          </div>
          <div style={{ fontSize: '0.86rem', color: '#ffffff', fontWeight: 800, marginBottom: '4px' }}>
            Staff Backend &amp; Architect
          </div>
          <div style={{ fontSize: '0.72rem', color: '#c084fc', lineHeight: 1.4 }}>
            L6+ Scale &amp; Systems Governance
          </div>
        </div>

        {/* Col 3 */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '14px',
          }}
        >
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
            EXPERIENCE LEVEL
          </div>
          <div style={{ fontSize: '0.86rem', color: '#f8fafc', fontWeight: 700, marginBottom: '4px' }}>
            Senior (6+ Years)
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
            Tier-1 FinTech &amp; Cloud Infra
          </div>
        </div>

        {/* Col 4 */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '14px',
          }}
        >
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
            PRIMARY DIAGNOSTIC FOCUS
          </div>
          <div style={{ fontSize: '0.86rem', color: '#f8fafc', fontWeight: 700, marginBottom: '4px' }}>
            High-Throughput Microservices
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
            Concurrency patterns &amp; trade-off defense
          </div>
        </div>
      </div>
    </div>
  );
};
