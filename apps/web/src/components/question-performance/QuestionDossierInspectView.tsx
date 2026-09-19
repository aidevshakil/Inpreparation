import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Play,
  Pause,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Mic,
  Video,
  MessageSquare,
  Layers,
} from 'lucide-react';
import { QUESTION_DATA_MAP, QuestionDossierItem } from '../../services/questionDataStore';

interface QuestionDossierInspectViewProps {
  selectedQuestionId?: string;
  onPrevQuestion?: () => void;
  onNextQuestion?: () => void;
  onDrillSimilar?: (drillTitle: string) => void;
  onGeneratePlan?: () => void;
  onNavigateSpeech?: () => void;
  onNavigatePresentation?: () => void;
  onNavigateCommunication?: () => void;
}

export const QuestionDossierInspectView: React.FC<QuestionDossierInspectViewProps> = ({
  selectedQuestionId = 'Q4',
  onPrevQuestion,
  onNextQuestion,
  onDrillSimilar,
  onGeneratePlan,
  onNavigateSpeech,
  onNavigatePresentation,
  onNavigateCommunication,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const qData: QuestionDossierItem =
    QUESTION_DATA_MAP[selectedQuestionId] || QUESTION_DATA_MAP['Q4'];

  const handleCopy = () => {
    navigator.clipboard?.writeText(qData.candidateTranscript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const durationMin = Math.floor(qData.durationSeconds / 60);
  const durationSec = qData.durationSeconds % 60;

  return (
    <div
      style={{
        backgroundColor: '#0d1322',
        borderRadius: '14px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '22px 24px',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Dossier Top Navigation Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '3px 10px',
              borderRadius: '6px',
              backgroundColor: qData.flagged ? '#dc2626' : '#4f46e5',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.4px',
            }}
          >
            {qData.number.toUpperCase()} OF 05 {qData.flagged && '• REMEDIATION VECTOR'}
          </span>

          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            {qData.title}
          </h2>

          <span
            style={{
              padding: '3px 9px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontSize: '0.7rem',
              fontWeight: 600,
            }}
          >
            Topic: {qData.category}
          </span>
        </div>

        {/* Prev / Next Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onPrevQuestion}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '7px',
              backgroundColor: '#090d18',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={13} />
            <span>Prev</span>
          </button>

          <button
            onClick={onNextQuestion}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '7px',
              backgroundColor: '#090d18',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span>Next</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* 2-Column Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.85fr) minmax(320px, 1.15fr)',
          gap: '24px',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Prompt, Audio, Highlights, Strengths, Multimodal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Defended Prompt */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '16px 18px',
            }}
          >
            <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              DEFENDED PROMPT
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f1f5f9', lineHeight: 1.5 }}>
              &ldquo;{qData.questionPrompt}&rdquo;
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '8px' }}>
              Spoken Duration: <strong style={{ color: '#cbd5e1' }}>{durationMin}m {durationSec}s</strong> • Staff L6 Scope • Score: <strong style={{ color: qData.score >= 80 ? '#34d399' : '#f87171' }}>{qData.score.toFixed(1)}/100</strong>
            </div>
          </div>

          {/* Candidate Spoken Response & Transcript Excerpt */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f8fafc' }}>
                Candidate Spoken Response &amp; Transcript Excerpt
              </div>

              <button
                onClick={handleCopy}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: copied ? '#34d399' : '#cbd5e1',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Copy size={11} />
                <span>{copied ? 'Copied!' : 'Copy Full Transcript'}</span>
              </button>
            </div>

            {/* Audio Waveform Player Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '9px',
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#4f46e5',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
              </button>

              <div style={{ fontSize: '0.68rem', color: '#94a3b8', width: '38px' }}>
                {isPlaying ? '0:42' : '0:00'}
              </div>

              {/* Simulated Waveform Bars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', flex: 1, height: '24px' }}>
                {[
                  30, 45, 70, 85, 60, 40, 65, 90, 100, 80, 55, 40, 60, 75, 95, 80, 60, 45, 30, 50,
                  70, 85, 90, 65, 45, 35, 55, 75, 85, 70, 50, 65, 80, 95, 70, 55, 40, 30, 45, 60,
                ].map((height, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${isPlaying ? Math.max(15, (height * (1 + (i % 3) * 0.2)) % 100) : height * 0.7}%`,
                      backgroundColor: i < 16 ? '#818cf8' : 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '2px',
                      transition: 'height 0.15s ease',
                    }}
                  />
                ))}
              </div>

              <div style={{ fontSize: '0.68rem', color: '#64748b', width: '38px', textAlign: 'right' }}>
                {durationMin}:{durationSec < 10 ? `0${durationSec}` : durationSec}
              </div>

              <Volume2 size={15} color="#94a3b8" />
            </div>

            {/* Transcript Body */}
            <div
              style={{
                fontSize: '0.8rem',
                lineHeight: 1.65,
                color: '#cbd5e1',
                padding: '12px 14px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                borderLeft: `3px solid ${qData.score >= 80 ? '#34d399' : '#f87171'}`,
              }}
            >
              {qData.candidateTranscript}
            </div>

            {/* Inline Evaluator Annotations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.66rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                SYNTAX &amp; ARCHITECTURE EVIDENCE TOKENS
              </div>

              {qData.highlightTokens.map((token, tIdx) => {
                const isErr = token.type === 'error';
                return (
                  <div
                    key={tIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '7px',
                      backgroundColor: isErr ? 'rgba(239, 68, 68, 0.08)' : 'rgba(16, 185, 129, 0.08)',
                      border: `1px solid ${isErr ? 'rgba(239, 68, 68, 0.25)' : 'rgba(16, 185, 129, 0.25)'}`,
                      fontSize: '0.72rem',
                    }}
                  >
                    {isErr ? (
                      <AlertTriangle size={13} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                    ) : (
                      <CheckCircle2 size={13} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    )}
                    <div>
                      <strong style={{ color: isErr ? '#fca5a5' : '#86efac' }}>&ldquo;{token.text}&rdquo;</strong>
                      <div style={{ color: '#94a3b8', marginTop: '2px' }}>{token.note}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Strengths and Critical Gaps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
            }}
          >
            {/* Strengths */}
            <div
              style={{
                backgroundColor: '#090d18',
                borderRadius: '10px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, color: '#34d399', marginBottom: '8px' }}>
                <CheckCircle2 size={13} />
                <span>Demonstrated Strengths</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.7rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                {qData.coachingCritique.strengths.map((str, sIdx) => (
                  <li key={sIdx} style={{ marginBottom: '4px' }}>
                    {str}
                  </li>
                ))}
              </ul>
            </div>

            {/* Critical Gaps */}
            <div
              style={{
                backgroundColor: '#090d18',
                borderRadius: '10px',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, color: '#f87171', marginBottom: '8px' }}>
                <AlertTriangle size={13} />
                <span>Identified Deficiencies</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.7rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                {qData.coachingCritique.criticalGaps.map((gap, gIdx) => (
                  <li key={gIdx} style={{ marginBottom: '4px' }}>
                    {gap}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Multimodal Telemetry Triangulation */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={15} style={{ color: '#c084fc' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ffffff' }}>
                  Multimodal Telemetry Triangulation ({qData.id} Window)
                </span>
              </div>
              <span style={{ fontSize: '0.66rem', color: '#94a3b8' }}>
                Synchronous Window: 00:00 - {durationMin}:00
              </span>
            </div>

            {/* 3 Telemetry Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {/* Speech Telemetry #39 */}
              <div
                onClick={onNavigateSpeech}
                style={{
                  backgroundColor: '#0d1322',
                  borderRadius: '9px',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', fontWeight: 700, color: '#38bdf8' }}>
                    <Mic size={12} />
                    <span>SPEECH TELEMETRY</span>
                  </div>
                  <span style={{ fontSize: '0.64rem', color: '#38bdf8', fontWeight: 700 }}>#39</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>{qData.wpm} WPM</div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  • {qData.fillerTokens} Filler tokens detected<br />
                  • Optimal band: 135–150 WPM<br />
                  • Pacing stability: 92%
                </div>
              </div>

              {/* Presentation Telemetry #40 */}
              <div
                onClick={onNavigatePresentation}
                style={{
                  backgroundColor: '#0d1322',
                  borderRadius: '9px',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', fontWeight: 700, color: '#c084fc' }}>
                    <Video size={12} />
                    <span>PRESENTATION TELEMETRY</span>
                  </div>
                  <span style={{ fontSize: '0.64rem', color: '#c084fc', fontWeight: 700 }}>#40</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>{qData.gazeAlignment}% Gaze Lock</div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  • Primary cone framing: {qData.gazeAlignment}%<br />
                  • Posture drift: Minimal<br />
                  • Whiteboard diagramming: Active
                </div>
              </div>

              {/* Communication Telemetry #38 */}
              <div
                onClick={onNavigateCommunication}
                style={{
                  backgroundColor: '#0d1322',
                  borderRadius: '9px',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', fontWeight: 700, color: '#818cf8' }}>
                    <MessageSquare size={12} />
                    <span>COMMUNICATION TELEMETRY</span>
                  </div>
                  <span style={{ fontSize: '0.64rem', color: '#818cf8', fontWeight: 700 }}>#38</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                  {Math.round((qData.starRubric.actionExecution + qData.starRubric.systemsDepth) / 2)}% Completeness
                </div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  • Minto Hierarchy: High<br />
                  • Quantitative Evidence: {qData.starRubric.resultMetrics}%<br />
                  • Trade-off Depth: {qData.starRubric.architecturalTradeoffs}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Weighted Rubric Breakdown & Exemplar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Weighted Rubric Breakdown */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    DETERMINISTIC EVALUATION
                  </div>
                  <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: '2px 0 0 0' }}>
                    Weighted Rubric Breakdown
                  </h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: qData.score >= 80 ? '#34d399' : '#f87171' }}>
                    {qData.score.toFixed(1)}
                  </div>
                  <div style={{ fontSize: '0.64rem', color: '#64748b' }}>/ 100 PTS</div>
                </div>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '4px' }}>
                Benchmarked: Staff L6 Engineering Standard
              </div>
            </div>

            {/* Rubric Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Systems &amp; Invariants (25% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>{qData.starRubric.systemsDepth} / 100</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: `${qData.starRubric.systemsDepth}%`, height: '100%', backgroundColor: '#818cf8' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Architectural Trade-offs (25% wt)</span>
                  <span style={{ color: qData.starRubric.architecturalTradeoffs < 75 ? '#f87171' : '#f1f5f9', fontWeight: 700 }}>
                    {qData.starRubric.architecturalTradeoffs} / 100
                  </span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div
                    style={{
                      width: `${qData.starRubric.architecturalTradeoffs}%`,
                      height: '100%',
                      backgroundColor: qData.starRubric.architecturalTradeoffs < 75 ? '#ef4444' : '#818cf8',
                    }}
                  />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Execution &amp; Action (20% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>{qData.starRubric.actionExecution} / 100</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: `${qData.starRubric.actionExecution}%`, height: '100%', backgroundColor: '#818cf8' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Quantitative Metrics (15% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>{qData.starRubric.resultMetrics} / 100</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: `${qData.starRubric.resultMetrics}%`, height: '100%', backgroundColor: '#818cf8' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Context &amp; Situation (15% wt)</span>
                  <span style={{ color: '#f1f5f9', fontWeight: 700 }}>{qData.starRubric.situationTask} / 100</span>
                </div>
                <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden', marginTop: '4px' }}>
                  <div style={{ width: `${qData.starRubric.situationTask}%`, height: '100%', backgroundColor: '#818cf8' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Model Suggested Rewrite */}
          <div
            style={{
              backgroundColor: '#090d18',
              borderRadius: '12px',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              padding: '16px 18px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 700, color: '#a5b4fc', marginBottom: '8px' }}>
              <Sparkles size={13} />
              <span>Model Exemplar Rewrite</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.5, fontStyle: 'italic' }}>
              {qData.coachingCritique.modelSuggestedRewrite}
            </p>
          </div>

          {/* Recommended Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => {
                if (onDrillSimilar) onDrillSimilar(qData.drillPrompt);
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 16px',
                background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                border: 'none',
                borderRadius: '9px',
                color: '#ffffff',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.15s ease',
              }}
            >
              <span>Launch Targeted Drill: {qData.title.split('&')[0]}</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={onGeneratePlan}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '9px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '9px',
                color: '#e2e8f0',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Sparkles size={13} style={{ color: '#818cf8' }} />
              <span>Open AI Improvement Plan for Decomposition (#42)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
