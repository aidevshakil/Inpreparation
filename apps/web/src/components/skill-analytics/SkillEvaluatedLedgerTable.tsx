import React from 'react';
import { ArrowRight, AlertCircle, TrendingUp } from 'lucide-react';

interface LedgerItem {
  name: string;
  category: string;
  defendedText: string;
  score: number;
  trajectory: string;
  trajectoryType: 'pos' | 'crit';
  lastDefended: string;
  actionText: string;
  actionType: 'debrief' | 'inspect';
  isAlert?: boolean;
}

interface SkillEvaluatedLedgerTableProps {
  onInspectDossier?: (competency: string) => void;
}

export const SkillEvaluatedLedgerTable: React.FC<SkillEvaluatedLedgerTableProps> = ({
  onInspectDossier,
}) => {
  const ledger: LedgerItem[] = [
    {
      name: 'Process Isolation & Memory',
      category: 'Systems',
      defendedText: '5 Qs (2 Sess)',
      score: 89.4,
      trajectory: '+6.1',
      trajectoryType: 'pos',
      lastDefended: 'May 14, 2024',
      actionText: 'Debrief Dossier',
      actionType: 'debrief',
    },
    {
      name: 'Python Concurrency & Asyncio',
      category: 'Programming',
      defendedText: '12 Qs (6 Sess)',
      score: 88.0,
      trajectory: '+5.4',
      trajectoryType: 'pos',
      lastDefended: 'May 18, 2024',
      actionText: 'Debrief Dossier',
      actionType: 'debrief',
    },
    {
      name: 'Distributed Systems Architecture',
      category: 'Architecture',
      defendedText: '8 Qs (4 Sess)',
      score: 84.5,
      trajectory: '+4.2',
      trajectoryType: 'pos',
      lastDefended: 'May 17, 2024',
      actionText: 'Debrief Dossier',
      actionType: 'debrief',
    },
    {
      name: 'PostgreSQL Starvation & Pooling',
      category: 'Storage',
      defendedText: '6 Qs (3 Sess)',
      score: 82.0,
      trajectory: '+2.0',
      trajectoryType: 'pos',
      lastDefended: 'May 12, 2024',
      actionText: 'Debrief Dossier',
      actionType: 'debrief',
    },
    {
      name: 'Distributed Backpressure & Throttling',
      category: 'Reliability',
      defendedText: '4 Qs (2 Sess)',
      score: 74.0,
      trajectory: '! Critical',
      trajectoryType: 'crit',
      lastDefended: 'May 19, 2024',
      actionText: 'Inspect Gap',
      actionType: 'inspect',
      isAlert: true,
    },
  ];

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
          Evaluated Skills Ledger
        </h3>
        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
          Showing 5 of 14 Competencies
        </span>
      </div>
      <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0 0 18px 0' }}>
        Auditable trail linking back to session debriefs and rubrics.
      </p>

      {/* Table container */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>COMPETENCY</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CATEGORY</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DEFENDED QS</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SCORE</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TRAJECTORY</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LAST DEFENDED</th>
              <th style={{ padding: '8px 12px', fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {ledger.map((row) => (
              <tr
                key={row.name}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.015)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Competency Name */}
                <td style={{ padding: '12px', fontSize: '0.76rem', fontWeight: 600, color: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: row.isAlert ? '#ef4444' : '#6366f1',
                      }}
                    />
                    <span>{row.name}</span>
                  </div>
                </td>

                {/* Category Badge */}
                <td style={{ padding: '12px' }}>
                  {row.category === 'Reliability' ? (
                    <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#f87171', background: 'rgba(239, 68, 68, 0.12)', padding: '2px 6px', borderRadius: '4px' }}>
                      {row.category}
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.64rem', color: '#94a3b8', background: 'rgba(255, 255, 255, 0.04)', padding: '2px 6px', borderRadius: '4px' }}>
                      {row.category}
                    </span>
                  )}
                </td>

                {/* Defended Qs */}
                <td style={{ padding: '12px', fontSize: '0.72rem', color: '#94a3b8' }}>
                  {row.defendedText}
                </td>

                {/* Score */}
                <td style={{ padding: '12px', fontSize: '0.84rem', fontWeight: 800, color: '#f8fafc' }}>
                  {row.score.toFixed(1)}
                </td>

                {/* Trajectory */}
                <td style={{ padding: '12px' }}>
                  {row.trajectoryType === 'crit' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.68rem', fontWeight: 700, color: '#f87171' }}>
                      <AlertCircle size={12} /> {row.trajectory}
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.68rem', fontWeight: 700, color: '#34d399' }}>
                      <TrendingUp size={12} /> {row.trajectory}
                    </span>
                  )}
                </td>

                {/* Last Defended */}
                <td style={{ padding: '12px', fontSize: '0.72rem', color: '#64748b' }}>
                  {row.lastDefended}
                </td>

                {/* Action */}
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  <button
                    onClick={() => onInspectDossier && onInspectDossier(row.name)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: row.actionType === 'inspect' ? '#fbbf24' : '#38bdf8',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>{row.actionText}</span>
                    <ArrowRight size={11} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
          fontSize: '0.7rem',
          color: '#64748b',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span>Showing calibrated data linked to Candidate ID #CK-89410</span>
        <span style={{ color: '#818cf8', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>View Full 14 Competency Ledger</span>
          <ArrowRight size={11} />
        </span>
      </div>
    </div>
  );
};
