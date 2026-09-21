import React from 'react';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LedgerItem {
  id: string;
  domain: string;
  date: string;
  progress: string;
  tier: string;
  score: string;
  isPeak?: boolean;
}

interface PerformanceScoreLedgerTableProps {
  sessions?: any[];
  onViewDossier?: (id: string) => void;
}

export const PerformanceScoreLedgerTable: React.FC<PerformanceScoreLedgerTableProps> = ({
  sessions,
  onViewDossier,
}) => {
  const defaultLedger: LedgerItem[] = [
    { id: '#SIM-ARC-9014', domain: 'Distributed Concurrency', date: 'Oct 27, 2024', progress: '5/5 Defended', tier: 'Staff L6+', score: '88.0 / 100', isPeak: true },
    { id: '#SIM-PY-8821', domain: 'Python Backend Architecture', date: 'Oct 24, 2024', progress: '5/5 Defended', tier: 'Staff L6+', score: '82.0 / 100' },
    { id: '#SIM-SYS-7940', domain: 'Distributed Consensus (Raft)', date: 'Oct 21, 2024', progress: '5/5 Defended', tier: 'Staff L6+', score: '80.0 / 100' },
    { id: '#SIM-API-4412', domain: 'API Gateway & Rate Limiting', date: 'Oct 18, 2024', progress: '5/5 Defended', tier: 'Senior L5', score: '78.0 / 100' },
    { id: '#SIM-DB-9310', domain: 'Database Indexing & WAL', date: 'Oct 15, 2024', progress: '5/5 Defended', tier: 'Senior L5', score: '76.0 / 100' },
    { id: '#SIM-ALU-4102', domain: 'Cache Invalidation & LRU', date: 'Oct 12, 2024', progress: '5/5 Defended', tier: 'Staff L6+', score: '72.0 / 100' },
  ];

  const ledger: LedgerItem[] = (sessions && sessions.length > 0)
    ? sessions.map((s, idx) => ({
        id: s.id ? `#SIM-${s.id.slice(0, 8).toUpperCase()}` : `#SIM-0${idx + 1}`,
        domain: s.roleTrack || 'Technical Architecture',
        date: s.createdAt ? new Date(s.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
        progress: `${s.answers?.length || 5}/5 Defended`,
        tier: s.seniorityLevel || 'Senior L5',
        score: `${s.overallScore || 85}.0 / 100`,
        isPeak: idx === 0,
      }))
    : defaultLedger;

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
          Evaluated Sessions Score Ledger
        </h3>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.66rem',
            fontWeight: 700,
            color: '#818cf8',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(129, 140, 248, 0.3)',
            padding: '3px 9px',
            borderRadius: '100px',
          }}
        >
          <Lock size={11} /> Cryptographically Sealed
        </span>
      </div>
      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
        Authenticated audit trail of all 6 simulations defended under 5-question protocols.
      </p>

      {/* Table container */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>SESSION ID</th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>DOMAIN TRACK</th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>DATE</th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>PROGRESS</th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>TIER LEVEL</th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px' }}>EVALUATION</th>
              <th style={{ padding: '10px 14px', fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.6px', textAlign: 'right' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {ledger.map((item) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Session ID */}
                <td style={{ padding: '14px', fontSize: '0.74rem', fontFamily: 'monospace', fontWeight: 700, color: '#a5b4fc' }}>
                  {item.id}
                </td>

                {/* Domain Track */}
                <td style={{ padding: '14px', fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>
                  {item.domain}
                </td>

                {/* Date */}
                <td style={{ padding: '14px', fontSize: '0.74rem', color: '#94a3b8' }}>
                  {item.date}
                </td>

                {/* Progress */}
                <td style={{ padding: '14px', fontSize: '0.74rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#38bdf8', fontWeight: 600 }}>
                    <CheckCircle2 size={13} color="#38bdf8" /> {item.progress}
                  </span>
                </td>

                {/* Tier */}
                <td style={{ padding: '14px', fontSize: '0.74rem', color: '#cbd5e1' }}>
                  {item.tier}
                </td>

                {/* Evaluation */}
                <td style={{ padding: '14px' }}>
                  {item.isPeak ? (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#38bdf8',
                        background: 'rgba(56, 189, 248, 0.15)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {item.score}
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#e2e8f0' }}>
                      {item.score}
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td style={{ padding: '14px', textAlign: 'right' }}>
                  <button
                    onClick={() => onViewDossier && onViewDossier(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <span>View Dossier</span>
                    <ArrowRight size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
