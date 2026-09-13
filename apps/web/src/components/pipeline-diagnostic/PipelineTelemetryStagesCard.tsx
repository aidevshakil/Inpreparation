import React from 'react';
import { CheckCircle2, Zap, Hourglass, Sparkles, AlertTriangle } from 'lucide-react';
import { PipelineDiagnosticState } from './PipelineDiagnosticSimulatorBar';

interface PipelineTelemetryStagesCardProps {
  state: PipelineDiagnosticState;
}

type StageStatus = 'completed' | 'in_progress' | 'queued' | 'warning';

export const PipelineTelemetryStagesCard: React.FC<PipelineTelemetryStagesCardProps> = ({
  state,
}) => {
  const getStageStatuses = (): { [key: number]: StageStatus } => {
    switch (state) {
      case 'initializing':
        return {
          1: 'in_progress',
          2: 'queued',
          3: 'queued',
          4: 'queued',
          5: 'queued',
        };
      case 'step_3_active':
        return {
          1: 'completed',
          2: 'completed',
          3: 'in_progress',
          4: 'queued',
          5: 'queued',
        };
      case 'step_5_finishing':
        return {
          1: 'completed',
          2: 'completed',
          3: 'completed',
          4: 'completed',
          5: 'in_progress',
        };
      case 'completed':
        return {
          1: 'completed',
          2: 'completed',
          3: 'completed',
          4: 'completed',
          5: 'completed',
        };
      case 'partial_fallback':
        return {
          1: 'completed',
          2: 'completed',
          3: 'warning',
          4: 'queued',
          5: 'queued',
        };
      case 'failure_dialog':
        return {
          1: 'completed',
          2: 'completed',
          3: 'warning',
          4: 'queued',
          5: 'queued',
        };
      default:
        return {
          1: 'completed',
          2: 'completed',
          3: 'in_progress',
          4: 'queued',
          5: 'queued',
        };
    }
  };

  const statuses = getStageStatuses();

  const stages = [
    {
      id: 1,
      title: '1. Collecting & Validating Responses',
      description: '8 of 8 multimodal prompts captured, sha256 checksums verified, payload unpacked.',
      status: statuses[1],
    },
    {
      id: 2,
      title: '2. Transcribing Audio & Speech Prosody',
      description: 'Converted 8 audio streams into 2,640 synchronized tokens; pace mapped at ~138 WPM.',
      status: statuses[2],
    },
    {
      id: 3,
      title: '3. Organizing Career Information & Skills',
      description: 'Structuring background, distributed systems stack, and Staff-level career objectives from parsed transcript and CV.',
      status: statuses[3],
    },
    {
      id: 4,
      title: '4. Generating Career Insights & Radar',
      description: 'Identifying technical strengths, architectural trade-off depth, and personalized preparation milestones.',
      status: statuses[4],
    },
    {
      id: 5,
      title: '5. Preparing Tailored Interview Recommendations',
      description: 'Mapping stated goals with Staff Backend & Systems Architect drill tracks.',
      status: statuses[5],
    },
  ];

  const renderBadge = (status: StageStatus) => {
    switch (status) {
      case 'completed':
        return (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>Completed ✓</span>
          </span>
        );
      case 'in_progress':
        return (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>In Progress ⚡</span>
          </span>
        );
      case 'warning':
        return (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(251, 191, 36, 0.15)',
              color: '#fbbf24',
              border: '1px solid rgba(251, 191, 36, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>Fallback Active ⚠️</span>
          </span>
        );
      default:
        return (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              color: '#64748b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>Queued ⏳</span>
          </span>
        );
    }
  };

  const renderIcon = (status: StageStatus, stageId: number) => {
    if (status === 'completed') {
      return (
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <CheckCircle2 size={16} />
        </div>
      );
    }

    if (status === 'in_progress') {
      return (
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'rgba(99, 102, 241, 0.25)',
            color: '#a5b4fc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)',
            flexShrink: 0,
          }}
        >
          <Zap size={15} />
        </div>
      );
    }

    if (status === 'warning') {
      return (
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'rgba(251, 191, 36, 0.15)',
            color: '#fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <AlertTriangle size={15} />
        </div>
      );
    }

    return (
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {stageId === 4 ? <Hourglass size={14} /> : <Sparkles size={14} />}
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#818cf8',
              boxShadow: '0 0 8px #818cf8',
            }}
          />
          <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            Telemetry Stages
          </h3>
        </div>

        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Deterministic Evaluation Pipeline</span>
      </div>

      {/* 5 Stage Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {stages.map((stage) => {
          const isActive = stage.status === 'in_progress';
          return (
            <div
              key={stage.id}
              style={{
                backgroundColor: isActive ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                border: isActive ? '1px solid rgba(129, 140, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                transition: 'all 0.18s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                {renderIcon(stage.status, stage.id)}

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 2px 0' }}>
                    {stage.title}
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {stage.description}
                  </p>
                </div>
              </div>

              <div style={{ flexShrink: 0 }}>
                {renderBadge(stage.status)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
