import React from 'react';
import { Target, Award, ArrowLeftRight, Fingerprint } from 'lucide-react';

export const SkillAnalyticsKpiCards: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {/* 1. EVALUATED DEPTH */}
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
            EVALUATED DEPTH
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Fingerprint size={14} color="#94a3b8" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            14
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#38bdf8', marginBottom: '6px' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} />
          <span style={{ fontWeight: 600 }}>14 Technical Competencies</span>
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          Synthesized from 6 validated sessions & 30 defended questions.
        </div>
      </div>

      {/* 2. MOST PRACTICED DOMAIN */}
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
            MOST PRACTICED DOMAIN
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeftRight size={14} color="#38bdf8" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            88.0
          </span>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ 100 avg</span>
        </div>

        <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px' }}>
          Python Asyncio & Concurrency
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          6 sessions • 12 defended architectural questions.
        </div>
      </div>

      {/* 3. TOP EXEMPLAR SCORE */}
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
            TOP EXEMPLAR SCORE
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Award size={14} color="#a5b4fc" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            89.4
          </span>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ 100</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, color: '#a5b4fc', marginBottom: '6px' }}>
          <span>★</span>
          <span>Process Isolation & Memory</span>
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          Calibrated against Staff Engineering Exemplar Rubric.
        </div>
      </div>

      {/* 4. TARGETED REMEDIATION */}
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
            TARGETED REMEDIATION
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(239, 68, 68, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Target size={14} color="#f87171" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            3 Vectors
          </span>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#f87171', background: 'rgba(239, 68, 68, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>
            Sub-80
          </span>
        </div>

        <div style={{ fontSize: '0.72rem', color: '#cbd5e1', marginBottom: '6px' }}>
          Backpressure (74.0) • Rate Limit (76.5)
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          Requires targeted deliberate micro-drills to secure threshold.
        </div>
      </div>
    </div>
  );
};
