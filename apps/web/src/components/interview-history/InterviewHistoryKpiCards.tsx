import React from 'react';
import { FileText, Sparkles, TrendingUp } from 'lucide-react';

export const InterviewHistoryKpiCards: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {/* 1. TOTAL MOCK SESSIONS */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            TOTAL MOCK SESSIONS
          </span>
          <div style={{ width: 26, height: 26, borderRadius: '6px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={13} color="#a5b4fc" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            8
          </span>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>
            Registered
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', color: '#94a3b8', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#38bdf8' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} /> 6 Completed
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#c084fc' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c084fc' }} /> 1 In Progress
          </span>
          <span>•</span>
          <span style={{ color: '#64748b' }}>1 Processing</span>
        </div>
      </div>

      {/* 2. EVALUATED DEFENSES */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            EVALUATED DEFENSES
          </span>
          <div style={{ width: 26, height: 26, borderRadius: '6px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={13} color="#c084fc" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            30
          </span>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>
            Defended Questions
          </span>
        </div>

        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
          Deterministic 5-Q format across...
        </div>
      </div>

      {/* 3. AVERAGE BENCHMARK */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            AVERAGE BENCHMARK
          </span>
          <div style={{ width: 26, height: 26, borderRadius: '6px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrendingUp size={13} color="#34d399" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            81.4
          </span>
          <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
            / 100
          </span>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#34d399', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 7px', borderRadius: '100px', marginLeft: '6px' }}>
            +3.2 vs Baseline
          </span>
        </div>

        <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '100px', overflow: 'hidden' }}>
          <div style={{ width: '81.4%', height: '100%', background: 'linear-gradient(90deg, #38bdf8, #34d399)', borderRadius: '100px' }} />
        </div>
      </div>

      {/* 4. LATEST SESSION */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
            LATEST SESSION
          </span>
          <span style={{ fontSize: '0.66rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.05)', padding: '2px 8px', borderRadius: '100px' }}>
            Oct 24, 2024
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>
            #SIM-PY-8...
          </span>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c084fc' }}>82</span>
            <span style={{ fontSize: '0.7rem', color: '#64748b' }}> / 100</span>
          </div>
        </div>

        <div style={{ fontSize: '0.72rem', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Python Backend Concurrenc...
        </div>
      </div>
    </div>
  );
};
