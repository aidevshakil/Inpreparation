import React from 'react';
import { MessageSquare, Lightbulb, Target, CheckCircle2, TrendingUp } from 'lucide-react';

export const CommunicationKpiCards: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}
    >
      {/* 1. OVERALL COMMUNICATION */}
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
            OVERALL COMMUNICATION
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '6px', background: 'rgba(99, 102, 241, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare size={14} color="#a5b4fc" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            81.8
          </span>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ 100</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#38bdf8', marginBottom: '6px' }}>
          <TrendingUp size={13} />
          <span style={{ fontWeight: 700 }}>+4.2 pts vs baseline</span>
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          Across 6 completed simulations • 30 defended questions
        </div>
      </div>

      {/* 2. ANSWER CLARITY INDEX */}
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
            ANSWER CLARITY INDEX
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '6px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lightbulb size={14} color="#38bdf8" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            84.6
          </span>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ 100</span>
        </div>

        <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#38bdf8', marginBottom: '6px' }}>
          High Conceptual Lucidity
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          Systematic bottom-line up-front answer framing.
        </div>
      </div>

      {/* 3. TOPICAL RELEVANCE */}
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
            TOPICAL RELEVANCE
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '6px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Target size={14} color="#c084fc" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            86.2
          </span>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ 100</span>
        </div>

        <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#a5b4fc', marginBottom: '6px' }}>
          Exemplary Direct Alignment
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          Zero tangential drift on technical trade-off questions.
        </div>
      </div>

      {/* 4. RESPONSE COMPLETENESS */}
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
            RESPONSE COMPLETENESS
          </span>
          <div style={{ width: 28, height: 28, borderRadius: '6px', background: 'rgba(239, 68, 68, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={14} color="#f87171" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
            76.4
          </span>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ 100</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#f87171', background: 'rgba(239, 68, 68, 0.12)', padding: '2px 8px', borderRadius: '4px' }}>
            Sub-80 Target Velocity
          </span>
        </div>

        <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.4 }}>
          Primary gaps in boundary conditions & failure mode drifts.
        </div>
      </div>
    </div>
  );
};
