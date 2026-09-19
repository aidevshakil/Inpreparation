import React from 'react';

export interface TrajectoryQuestion {
  id: string;
  tag: string;
  score: number;
  title: string;
  isRemediation?: boolean;
}

interface QuestionTrajectoryStepperProps {
  selectedQuestionId: string;
  onSelectQuestion: (questionId: string) => void;
}

export const QuestionTrajectoryStepper: React.FC<QuestionTrajectoryStepperProps> = ({
  selectedQuestionId,
  onSelectQuestion,
}) => {
  const questions: TrajectoryQuestion[] = [
    {
      id: 'Q1',
      tag: 'Q1 • Starvation',
      score: 88,
      title: 'Asyncio Event Loop Star...',
    },
    {
      id: 'Q2',
      tag: 'Q2 • GIL Contention',
      score: 86,
      title: 'Multiprocessing & IPC',
    },
    {
      id: 'Q3',
      tag: 'Q3 • Locks',
      score: 82,
      title: 'Distributed Lock Lease E...',
    },
    {
      id: 'Q4',
      tag: 'Q4 • Rate Limiter',
      score: 69,
      title: 'Token-Bucket Backpres...',
      isRemediation: true,
    },
    {
      id: 'Q5',
      tag: 'Q5 • DB Pools',
      score: 85,
      title: 'Postgres & PgBouncer S...',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
      {/* Stepper Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          5-Question Session Trajectory • <span style={{ color: '#c084fc' }}>Select question below to update dossier inspect view</span>
        </div>
        <span style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 600 }}>
          Standard 5-Question Defense Flow
        </span>
      </div>

      {/* 5 Cards Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}
      >
        {questions.map((q) => {
          const isSelected = selectedQuestionId === q.id;
          const scoreColor = q.score >= 85 ? '#34d399' : q.score >= 80 ? '#38bdf8' : '#f87171';
          const scoreBg = q.score >= 85 ? 'rgba(16, 185, 129, 0.12)' : q.score >= 80 ? 'rgba(56, 189, 248, 0.12)' : 'rgba(239, 68, 68, 0.15)';
          const scoreBorder = q.score >= 85 ? 'rgba(16, 185, 129, 0.3)' : q.score >= 80 ? 'rgba(56, 189, 248, 0.3)' : 'rgba(239, 68, 68, 0.4)';

          return (
            <div
              key={q.id}
              onClick={() => onSelectQuestion(q.id)}
              style={{
                backgroundColor: isSelected ? '#121829' : '#0d1322',
                borderRadius: '10px',
                border: isSelected
                  ? '1.5px solid #818cf8'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '12px 14px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px',
                transition: 'all 0.15s ease',
                boxShadow: isSelected ? '0 0 14px rgba(99, 102, 241, 0.25)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = '#0d1322';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: isSelected ? '#f8fafc' : '#cbd5e1' }}>
                  {q.tag}
                </span>
                <span
                  style={{
                    padding: '2px 6px',
                    borderRadius: '5px',
                    backgroundColor: scoreBg,
                    border: `1px solid ${scoreBorder}`,
                    color: scoreColor,
                    fontSize: '0.68rem',
                    fontWeight: 800,
                  }}
                >
                  {q.score} / 100
                </span>
              </div>

              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                {q.title}
              </div>

              {q.isRemediation && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.64rem', color: '#f87171', fontWeight: 600 }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span>Sub-80 Remediation Focus {isSelected ? '(Inspecting)' : ''}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
