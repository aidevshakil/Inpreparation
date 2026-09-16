import React from 'react';
import { Briefcase, FolderGit2, Award } from 'lucide-react';
interface ProfileAnalysisBackgroundCardProps {
  dossierData?: any;
}

export const ProfileAnalysisBackgroundCard: React.FC<ProfileAnalysisBackgroundCardProps> = ({ dossierData }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
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
          <Briefcase size={18} style={{ color: '#818cf8' }} />
          <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Background Summary
          </h3>
        </div>

        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Detailed Chronology</span>
      </div>

      {dossierData ? (
        <>
          {/* Role Box */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
              <div>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#f8fafc' }}>
                  Senior Systems Engineer
                </span>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem', marginLeft: '6px' }}>
                  • FinScale Labs
                </span>
              </div>

              <span
                style={{
                  fontSize: '0.66rem',
                  color: '#a5b4fc',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                }}
              >
                2021 — Present • 3 yrs
              </span>
            </div>

            <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                Architected event-streamed settlement pipeline processing 120k events/sec under strict sub-50ms SLA.
              </li>
              <li style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                Reduced tail latency by 35% on critical settlement flows through PostgreSQL lock mitigation and Redis write-behind caching.
              </li>
              <li style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                Standardized distributed transaction outbox pattern across 6 core microservices.
              </li>
            </ul>
          </div>

          {/* Flagship Project Box */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <FolderGit2 size={15} style={{ color: '#38bdf8' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                Flagship Project: Multi-Region Event-Driven &amp; Distributed Coordinator
              </span>
            </div>

            <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45, margin: '0 0 10px 0' }}>
              High-volume financial transaction routing coordinator with Kafka topic replication and PostgreSQL concurrency control.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Go', 'Kafka', 'PostgreSQL', 'Docker', 'Redis'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.66rem',
                    color: '#cbd5e1',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={15} style={{ color: '#c084fc' }} />
              <span style={{ fontSize: '0.76rem', color: '#f8fafc', fontWeight: 600 }}>
                B.S. Computer Science • 2018
              </span>
            </div>

            <span
              style={{
                fontSize: '0.68rem',
                color: '#34d399',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              Certified Kubernetes Administrator (CKA)
            </span>
          </div>
        </>
      ) : (
        <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
          Awaiting background extraction from profile and audio...
        </div>
      )}
    </div>
  );
};
