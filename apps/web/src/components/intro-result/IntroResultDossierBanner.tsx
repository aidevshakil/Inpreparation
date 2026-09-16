import React from 'react';
import { Sparkles, Edit3, Download } from 'lucide-react';

interface IntroResultDossierBannerProps {
  onEditProfile?: () => void;
  onDownloadPdf?: () => void;
  targetRole?: string;
  diagnosticData?: any;
}

export const IntroResultDossierBanner: React.FC<IntroResultDossierBannerProps> = ({
  onEditProfile,
  onDownloadPdf,
  targetRole = 'General Assessment',
  diagnosticData,
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
        <div style={{ padding: '0 16px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', flex: '1 1 200px' }}>
          <h5 style={{ fontSize: '0.64rem', color: '#94a3b8', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Current Background
          </h5>
          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
            General Background
          </div>
          <div style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
            Not Specified
          </div>
        </div>

        <div style={{ padding: '0 16px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', flex: '1 1 200px' }}>
          <h5 style={{ fontSize: '0.64rem', color: '#94a3b8', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Target Role
          </h5>
          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
            {targetRole}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
            {diagnosticData ? 'L6+ Scale & Systems Governance' : 'Pending Selection'}
          </div>
        </div>

        <div style={{ padding: '0 16px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', flex: '1 1 200px' }}>
          <h5 style={{ fontSize: '0.64rem', color: '#94a3b8', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Experience Level
          </h5>
          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
            {diagnosticData?.seniorityTier || 'Not Specified'}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
            {diagnosticData ? 'Tier-1 FinTech & Cloud Infra' : ''}
          </div>
        </div>

        <div style={{ padding: '0 16px', flex: '1 1 200px' }}>
          <h5 style={{ fontSize: '0.64rem', color: '#94a3b8', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            Primary Diagnostic Focus
          </h5>
          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
            {diagnosticData ? 'High-Throughput Microservices' : 'General Fundamentals'}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
            {diagnosticData ? 'Concurrency patterns & trade-off defense' : 'Pending Analysis'}
          </div>
        </div>
      </div>
    </div>
  );
};
