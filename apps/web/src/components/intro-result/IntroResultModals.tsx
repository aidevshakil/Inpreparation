import React from 'react';
import { X, RotateCcw, AlertTriangle, Play, Volume2, CheckCircle2 } from 'lucide-react';
import { IntroResultState } from './IntroResultSimulatorBar';

interface IntroResultModalsProps {
  state: IntroResultState;
  onCloseSimulatorModal: () => void;
  onConfirmRetake: () => void;
  showResponsesDrawer: boolean;
  onCloseResponsesDrawer: () => void;
  showEditProfileModal: boolean;
  onCloseEditProfileModal: () => void;
}

export const IntroResultModals: React.FC<IntroResultModalsProps> = ({
  state,
  onCloseSimulatorModal,
  onConfirmRetake,
  showResponsesDrawer,
  onCloseResponsesDrawer,
  showEditProfileModal,
  onCloseEditProfileModal,
}) => {
  const allResponses = [
    {
      id: 1,
      title: 'Prompt 1: Professional Trajectory & Technical Ownership',
      duration: '1m 48s',
      fidelity: '98.2%',
      quote:
        'I am a Senior Backend and Distributed Systems Engineer with over 6 years of experience... focusing on event-driven streaming with Kafka and PostgreSQL concurrency patterns... looking forward to leading architecture reviews at scale.',
    },
    {
      id: 2,
      title: 'Prompt 2: Scalable Architecture & System Design',
      duration: '2m 12s',
      fidelity: '97.8%',
      quote:
        'When designing our financial settlement pipeline, we decomposed the monolith into asynchronous ledger workers using transactional outbox and Kafka idempotent producers.',
    },
    {
      id: 3,
      title: 'Prompt 3: Concurrency & Lock Contention Mitigations',
      duration: '1m 34s',
      fidelity: '99.1%',
      quote:
        'To avoid distributed lock bottlenecks in PostgreSQL under high transaction bursts, we implemented optimistic locking with version columns and partitioned hot row buckets.',
    },
    {
      id: 4,
      title: 'Prompt 4: CAP Theorem Trade-offs in Production',
      duration: '2m 05s',
      fidelity: '96.5%',
      quote:
        'We prioritized partition tolerance and eventual consistency for analytical reporting streams, while retaining strong consistency for direct payment authorizations.',
    },
    {
      id: 5,
      title: 'Prompt 5: Technical Leadership & Cross-Functional Mentorship',
      duration: '1m 55s',
      fidelity: '98.4%',
      quote:
        'I established automated architectural RFC reviews, mentored 4 junior engineers on distributed debugging, and standardized our zero-downtime database migration checklist.',
    },
    {
      id: 6,
      title: 'Prompt 6: Multi-Datacenter Failover & Disaster Recovery',
      duration: '1m 40s',
      fidelity: '97.2%',
      quote:
        'Our disaster recovery strategy relied on active-passive cross-region replication with automatic DNS failover and Kafka MirrorMaker2 for zero-loss topic replication.',
    },
    {
      id: 7,
      title: 'Prompt 7: API Governance & Microservices Decoupling',
      duration: '1m 28s',
      fidelity: '98.9%',
      quote:
        'We transitioned inter-service communication to protobuf-backed gRPC with strict schema compatibility checks in CI to eliminate breaking runtime contracts.',
    },
    {
      id: 8,
      title: 'Prompt 8: Career Objectives & Staff Engineering Goals',
      duration: '1m 15s',
      fidelity: '99.5%',
      quote:
        'My goal is to step into a Staff Backend Architect role where I can drive large-scale platform resilience, lead engineering strategy, and scale distributed backend systems.',
    },
  ];

  // 1. Retake Confirmation Modal
  if (state === 'retake_confirm') {
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
            maxWidth: '500px',
            backgroundColor: '#0c101c',
            border: '1px solid rgba(251, 191, 36, 0.4)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(251, 191, 36, 0.15)',
                  color: '#fbbf24',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <RotateCcw size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                Retake Career Introduction?
              </h3>
            </div>

            <button onClick={onCloseSimulatorModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
            Retaking the Career Introduction will clear your 8 recorded prompts and recalibrate your AI synthesis baseline from scratch.
          </p>

          <div
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.74rem',
              color: '#94a3b8',
              marginBottom: '20px',
            }}
          >
            💡 <strong style={{ color: '#cbd5e1' }}>Tip:</strong> You can also simply edit specific profile details without re-recording all responses.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              onClick={onCloseSimulatorModal}
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
              onClick={onConfirmRetake}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 18px',
                backgroundColor: '#ef4444',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>Yes, Reset &amp; Retake</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Partial Processing Alert Modal (Simulator State 3)
  if (state === 'partial_alert') {
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
            border: '1px solid rgba(56, 189, 248, 0.4)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={20} style={{ color: '#38bdf8' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                High-Quality Transcription Notice
              </h3>
            </div>
            <button onClick={onCloseSimulatorModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
            All 8 prompts were parsed successfully. Audio channels experienced minor background ambient noise during Question 4, but our neural filtering achieved 96.5% token fidelity.
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
              Understood
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Full Responses Drawer
  if (showResponsesDrawer || state === 'full_responses_drawer') {
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
          {/* Drawer Header */}
          <div
            style={{
              padding: '20px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 2px 0' }}>
                All Submitted Responses (8/8)
              </h3>
              <p style={{ fontSize: '0.74rem', color: '#94a3b8', margin: 0 }}>
                Multi-prompt recording transcripts and audio waveforms
              </p>
            </div>

            <button
              onClick={() => {
                onCloseResponsesDrawer();
                if (state === 'full_responses_drawer') onCloseSimulatorModal();
              }}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Body List */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {allResponses.map((r) => (
              <div
                key={r.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
                    {r.title}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
                    {r.duration}
                  </span>
                </div>

                {/* Scrubber Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    marginBottom: '10px',
                  }}
                >
                  <button
                    onClick={() => alert(`Playing audio stream for ${r.title}`)}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#4f46e5',
                      border: 'none',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Play size={10} style={{ marginLeft: '1px' }} />
                  </button>

                  <div style={{ flex: 1, height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px' }} />

                  <Volume2 size={12} style={{ color: '#64748b' }} />
                </div>

                <p style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, fontStyle: 'italic', margin: '0 0 8px 0' }}>
                  &ldquo;{r.quote}&rdquo;
                </p>

                <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '0.66rem', color: '#38bdf8', fontWeight: 600 }}>
                  Fidelity: {r.fidelity}
                </div>
              </div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              onClick={() => {
                onCloseResponsesDrawer();
                if (state === 'full_responses_drawer') onCloseSimulatorModal();
              }}
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
              Close Drawer
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 4. Edit Profile Modal
  if (showEditProfileModal) {
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
            maxWidth: '520px',
            backgroundColor: '#0c101c',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Edit Career Baseline Parameters
            </h3>
            <button onClick={onCloseEditProfileModal} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', color: '#94a3b8', marginBottom: '4px' }}>
                Current Background / Title
              </label>
              <input
                type="text"
                defaultValue="Senior Backend Engineer (Distributed Systems, Kafka)"
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
                Target Role
              </label>
              <input
                type="text"
                defaultValue="Staff Backend & Architect (L6+ Systems)"
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
                Experience Level
              </label>
              <input
                type="text"
                defaultValue="Senior (6+ Years)"
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
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              onClick={onCloseEditProfileModal}
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
                onCloseEditProfileModal();
                alert('Profile updated and synchronized with AI radar baseline!');
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
              <span>Save &amp; Update Baseline</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
