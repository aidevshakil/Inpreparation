import React from 'react';
import { Loader2, Mic, Eye, Cpu, Activity } from 'lucide-react';

export const DashboardProcessingState: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.9)',
        border: '1px solid rgba(245, 158, 11, 0.35)',
        borderRadius: '20px',
        padding: '28px',
        margin: '20px 0',
        boxShadow: '0 8px 32px rgba(245, 158, 11, 0.15)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fbbf24',
            }}
          >
            <Activity size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
              Live Telemetry Stream Processing
            </h3>
            <span style={{ fontSize: '0.76rem', color: '#fbbf24' }}>
              Multimodal ML inference running on 5 recorded answers
            </span>
          </div>
        </div>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#fbbf24',
            fontSize: '0.74rem',
            fontWeight: 600,
          }}
        >
          <Loader2 size={12} className="spin-animate" />
          <span>Fusing Telemetry (74%)</span>
        </span>
      </div>

      {/* 3 Pipeline Stream Telemetry Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '14px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            padding: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Cpu size={16} color="#818cf8" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
              Semantic Accuracy
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
            Embedding vector comparison against Staff-level gold rubric. Complete.
          </p>
        </div>

        <div
          style={{
            padding: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Mic size={16} color="#fbbf24" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
              Acoustic &amp; Cadence
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
            WPM pacing calculation &amp; filler phrase detection: 1.2 fillers/min.
          </p>
        </div>

        <div
          style={{
            padding: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Eye size={16} color="#34d399" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
              Vision &amp; Framing
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
            Head tilt angle &amp; lighting hygiene check complete.
          </p>
        </div>
      </div>
    </div>
  );
};
