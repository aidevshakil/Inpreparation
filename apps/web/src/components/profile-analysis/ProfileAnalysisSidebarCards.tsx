import React from 'react';
import { Activity, ShieldCheck, ExternalLink } from 'lucide-react';

export const ProfileAnalysisSidebarCards: React.FC = () => {
  const activities = [
    { time: '14:38:12', text: 'Profile Dossier Synthesized', isDone: true },
    { time: '14:38:09', text: '6-Vector Competency Radar Calibrated', isDone: true },
    { time: '14:38:05', text: 'Audio Prosody & Tokens Synchronized', isDone: true },
    { time: '14:38:01', text: 'Ingested CV AST & Entity Extraction Complete', isDone: true },
    { time: '14:37:45', text: 'WebRTC Ingestion Checksums Verified', isDone: true },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. Synthesis Activity Card */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '22px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Activity size={16} style={{ color: '#818cf8' }} />
          <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Synthesis Activity
          </h4>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {activities.map((act, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  flexShrink: 0,
                }}
              />
              <span style={{ color: '#64748b', fontFamily: 'monospace' }}>[{act.time}]</span>
              <span style={{ color: '#cbd5e1' }}>{act.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Responsible AI & Privacy Policy Card */}
      <div
        style={{
          backgroundColor: 'rgba(14, 18, 28, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '22px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <ShieldCheck size={16} style={{ color: '#10b981' }} />
          <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Responsible AI &amp; Privacy Policy
          </h4>
        </div>

        <ul style={{ margin: '0 0 14px 0', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45 }}>
            <strong style={{ color: '#f8fafc' }}>Deterministic Evaluation:</strong> Insights are derived strictly from technical facts without emotional or personality inferences.
          </li>
          <li style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45 }}>
            <strong style={{ color: '#f8fafc' }}>Zero External Ingestion:</strong> Raw audio &amp; video streams are never shared with prospective employers or external LLMs.
          </li>
          <li style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45 }}>
            <strong style={{ color: '#f8fafc' }}>Data Encrypted with AES-256:</strong> Stored in high-security vaults with strict candidate data ownership.
          </li>
        </ul>

        <a
          href="#privacy-standards"
          onClick={(e) => {
            e.preventDefault();
            alert('Opening Inprep AI Data Protection & Privacy Standards...');
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: '#818cf8',
            fontSize: '0.72rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <span>Read Data Protection &amp; Privacy Standards</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};
