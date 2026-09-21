import React from 'react';
import { Award, Plus, CheckCircle2, Trash2 } from 'lucide-react';

export interface CertItem {
  id: string;
  title: string;
  issuerDate: string;
  isVerified: boolean;
}

interface CvBuilderCertsSectionProps {
  certs: CertItem[];
  onAddCredential: () => void;
  onDeleteCredential?: (id: string) => void;
}

export const CvBuilderCertsSection: React.FC<CvBuilderCertsSectionProps> = ({
  certs,
  onAddCredential,
  onDeleteCredential,
}) => {
  return (
    <div
      id="section-certs"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
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
              color: 'var(--primary-color)',
            }}
          >
            <Award size={14} />
          </span>
          <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
            7. Certifications &amp; Additional Info
          </h3>
        </div>

        <button
          onClick={onAddCredential}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: 'var(--primary-color)',
            fontSize: '0.74rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Plus size={13} />
          <span>Add Credential</span>
        </button>
      </div>

      {/* Certs List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {certs.map((cert) => (
          <div
            key={cert.id}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 4px 0' }}>
                {cert.title}
              </h4>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                {cert.issuerDate}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {cert.isVerified && (
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <CheckCircle2 size={12} />
                  <span>Credential Verified</span>
                </span>
              )}

              {onDeleteCredential && (
                <button
                  onClick={() => onDeleteCredential(cert.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#f87171',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                  title="Delete Credential"
                >
                  <Trash2 size={13} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
