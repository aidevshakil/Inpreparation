import React from 'react';
import { Lock, X, Check, TrendingUp, Download, Share2, ArrowRight } from 'lucide-react';

export interface DossierSessionDetail {
  id: string;
  codeBadge: string;
  title: string;
  date: string;
  overallScore: number;
  seniorityLevel: string;
  wpm: number;
  fillerRatePct: number;
  gazeScore: number;
  strengths: string[];
  growthVector?: string;
  growthDetail?: string;
}

interface InterviewHistoryDossierDrawerProps {
  session: DossierSessionDetail | null;
  onOpenDebrief?: () => void;
  onClose?: () => void;
}

export const InterviewHistoryDossierDrawer: React.FC<InterviewHistoryDossierDrawerProps> = ({
  session,
  onOpenDebrief,
  onClose,
}) => {
  if (!session) {
    return (
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px dashed rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '32px 24px',
          textAlign: 'center',
          color: '#94a3b8',
          position: 'sticky',
          top: '24px',
        }}
      >
        <Lock size={20} color="#475569" style={{ marginBottom: '12px' }} />
        <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>
          Select a session
        </div>
        <div style={{ fontSize: '0.74rem', lineHeight: 1.5 }}>
          Choose a mock interview from the list to view its cryptographic dossier.
        </div>
      </div>
    );
  }

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const scorePct = Math.max(0, Math.min(100, session.overallScore));
  const strokeDashoffset = circumference - (circumference * scorePct) / 100;

  const seniorityBadge =
    scorePct >= 85 ? 'Strong L6+' : scorePct >= 75 ? 'Solid L5' : 'Developing';

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
        position: 'sticky',
        top: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.66rem', fontWeight: 700, color: '#818cf8', letterSpacing: '0.5px' }}>
            <Lock size={12} /> CRYPTOGRAPHIC DOSSIER
          </div>
          {onClose && (
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
              <X size={15} />
            </button>
          )}
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 2px 0' }}>
          {session.title}
        </h3>
        <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'monospace' }}>
          {session.codeBadge} • {session.date}
        </div>
      </div>

      {/* Score Donut Card */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '0.64rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
            OVERALL DEFENDED SCORE
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
              {session.overallScore}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>/ 100</span>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.15)', padding: '2px 8px', borderRadius: '100px', marginLeft: '6px' }}>
              {seniorityBadge}
            </span>
          </div>
        </div>

        <div style={{ width: 56, height: 56, position: 'relative' }}>
          <svg width="56" height="56" viewBox="0 0 56 56" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="28" cy="28" r={radius} stroke="rgba(255, 255, 255, 0.08)" strokeWidth="5" fill="none" />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#818cf8"
              strokeWidth="5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 800, color: '#f8fafc' }}>
            {session.overallScore}%
          </div>
        </div>
      </div>

      {/* Key Defended Strengths */}
      {session.strengths.length > 0 && (
        <div>
          <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
            KEY DEFENDED STRENGTHS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {session.strengths.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <Check size={14} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Priority Growth Vector */}
      {session.growthVector && (
        <div
          style={{
            background: 'rgba(245, 158, 11, 0.04)',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '10px',
            padding: '12px 14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#fbbf24', marginBottom: '4px' }}>
            <TrendingUp size={13} /> Priority Growth Vector: {session.growthVector}
          </div>
          {session.growthDetail && (
            <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
              {session.growthDetail}
            </p>
          )}
        </div>
      )}

      {/* Biometric Delivery Telemetry */}
      <div>
        <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
          BIOMETRIC DELIVERY TELEMETRY
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc' }}>{session.wpm}</div>
            <div style={{ fontSize: '0.64rem', color: '#64748b' }}>WPM Pace</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#34d399' }}>
              {session.fillerRatePct.toFixed(1)}%
            </div>
            <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Fillers</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38bdf8' }}>{session.gazeScore}%</div>
            <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Frame Eye-line</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
        <button
          onClick={onOpenDebrief}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            color: '#ffffff',
            border: 'none',
            padding: '11px',
            borderRadius: '8px',
            fontSize: '0.82rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
          }}
        >
          <span>Open Full Debrief Dossier</span>
          <ArrowRight size={14} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <button
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              padding: '8px',
              borderRadius: '6px',
              fontSize: '0.74rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <Download size={13} /> JSON Dossier
          </button>
          <button
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              padding: '8px',
              borderRadius: '6px',
              fontSize: '0.74rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <Share2 size={13} /> Share Link
          </button>
        </div>
      </div>
    </div>
  );
};
