import React from 'react';
import { X, CheckCircle2, Maximize2, AlertTriangle, FileCode } from 'lucide-react';
import { ProfileAnalysisState } from './ProfileAnalysisSimulatorBar';

interface ProfileAnalysisModalsProps {
  state: ProfileAnalysisState;
  onCloseSimulatorModal: () => void;
  showEditModal: boolean;
  onCloseEditModal: () => void;
  showRadarModal: boolean;
  onCloseRadarModal: () => void;
  userName?: string;
  targetRole?: string;
  dossierData?: any;
}

export const ProfileAnalysisModals: React.FC<ProfileAnalysisModalsProps> = ({
  state,
  onCloseSimulatorModal,
  showEditModal,
  onCloseEditModal,
  showRadarModal,
  onCloseRadarModal,
  userName = 'User',
  targetRole = 'Target Role',
  dossierData,
}) => {
  // 1. Edit Profile Modal (Simulator State 2 or trigger)
  if (showEditModal || state === 'edit_summary_modal') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '560px',
            backgroundColor: '#0c101c',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Edit Professional Dossier &amp; Identity
            </h3>
            <button
              onClick={() => {
                onCloseEditModal();
                if (state === 'edit_summary_modal') onCloseSimulatorModal();
              }}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', color: '#94a3b8', marginBottom: '4px' }}>
                Full Name &amp; Title
              </label>
              <input
                type="text"
                defaultValue={`${userName} • ${dossierData ? 'Professional Dossier' : 'General Background'}`}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', color: '#94a3b8', marginBottom: '4px' }}>
                Primary Target Role
              </label>
              <input
                type="text"
                defaultValue={targetRole}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', color: '#94a3b8', marginBottom: '4px' }}>
                Executive Career Narrative
              </label>
              <textarea
                rows={4}
                defaultValue={dossierData ? `${userName} is targeting ${targetRole} roles...` : `Awaiting AI synthesis based on ingested profile.`}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              onClick={() => {
                onCloseEditModal();
                if (state === 'edit_summary_modal') onCloseSimulatorModal();
              }}
              style={{
                padding: '9px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#cbd5e1',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>

            <button
              onClick={() => {
                onCloseEditModal();
                if (state === 'edit_summary_modal') onCloseSimulatorModal();
                alert('Profile updated and vectors recalculated!');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 18px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <CheckCircle2 size={13} />
              <span>Save &amp; Recalculate Vectors</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Radar Focus View Modal (Simulator State 3 or trigger)
  if (showRadarModal || state === 'radar_focus_view') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '680px',
            backgroundColor: '#0c101c',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Maximize2 size={18} style={{ color: '#818cf8' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                High-Resolution Competency Radar Decomposition
              </h3>
            </div>
            <button
              onClick={() => {
                onCloseRadarModal();
                if (state === 'radar_focus_view') onCloseSimulatorModal();
              }}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            {[
              { axis: 'Distributed Consensus', score: '88%', desc: 'Raft, Paxos, partition tolerance, and split-brain mitigation.' },
              { axis: 'High-Throughput IO', score: '92%', desc: 'Kafka streaming, batching, and sub-50ms p99 optimization.' },
              { axis: 'CAP Trade-Offs', score: '82%', desc: 'Consistency vs availability boundary defense under network partition.' },
              { axis: 'System Resilience', score: '85%', desc: 'Active-active multi-datacenter failover and circuit breakers.' },
              { axis: 'Staff Mentorship', score: '76%', desc: 'Junior engineering coaching and cross-team RFC standardization.' },
              { axis: 'Architecture Reviews', score: '90%', desc: 'Whiteboard system defense and executive trade-off presentation.' },
            ].map((item) => (
              <div
                key={item.axis}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px',
                  padding: '12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>{item.axis}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8' }}>{item.score}</span>
                </div>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => {
                onCloseRadarModal();
                if (state === 'radar_focus_view') onCloseSimulatorModal();
              }}
              style={{
                padding: '9px 18px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Close Decomposition
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Empty State Alert (Simulator State 5)
  if (state === 'empty_state_alert') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '480px',
            backgroundColor: '#0c101c',
            border: '1px solid rgba(251, 191, 36, 0.4)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={20} style={{ color: '#fbbf24' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                Low Ingestion Parameter Warning
              </h3>
            </div>
            <button onClick={onCloseSimulatorModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
            We detected that your CV has fewer than 2 parsed projects. Radar calibration accuracy is currently 78%. Complete remaining profile details to achieve 100% calibration.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={onCloseSimulatorModal}
              style={{
                padding: '9px 18px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Continue to Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 4. Full Synthesis Drawer (Simulator State 6)
  if (state === 'full_synthesis_drawer') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '560px',
            height: '100vh',
            backgroundColor: '#0c101c',
            borderLeft: '1px solid rgba(99, 102, 241, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)',
          }}
        >
          <div
            style={{
              padding: '20px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileCode size={18} style={{ color: '#818cf8' }} />
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                  Raw Synthesis Vector Vectors (JSON)
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0 }}>
                  Deterministic vector embeddings and citation checkpoints
                </p>
              </div>
            </div>

            <button onClick={onCloseSimulatorModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 24px',
              fontFamily: 'monospace',
              fontSize: '0.72rem',
              color: '#34d399',
              backgroundColor: '#04060c',
              lineHeight: 1.6,
            }}
          >
            <pre style={{ margin: 0 }}>
{`{
  "candidateId": "cand_840921a",
  "dossierVersion": "4.2.0",
  "radarTaxonomy": "Staff_Systems_Architect_L6",
  "confidenceScore": 0.946,
  "sources": {
    "cvAST": { "pages": 6, "checksum": "sha256:8f4b...39a1" },
    "audioTokens": 2640,
    "wpm": 138
  },
  "vectors": {
    "consensus": 0.88,
    "highThroughputIO": 0.92,
    "capTradeOffs": 0.82,
    "resilience": 0.85,
    "mentorship": 0.76,
    "archReviews": 0.90
  }
}`}
            </pre>
          </div>

          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              onClick={onCloseSimulatorModal}
              style={{
                padding: '9px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Close Vector Drawer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
