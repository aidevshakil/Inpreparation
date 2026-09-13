import React from 'react';
import { MessageSquare, Mic, Video, Trash2, Save, CheckCircle2, AlertTriangle, Square } from 'lucide-react';

export type ResponseMode = 'text' | 'voice' | 'camera';

interface DiagnosticResponseInputProps {
  mode: ResponseMode;
  onModeChange: (mode: ResponseMode) => void;
  textValue: string;
  onTextChange: (value: string) => void;
  onClearText: () => void;
  onSaveDraft?: () => void;
  onAddPromptChip?: (chipText: string) => void;
  isRecording?: boolean;
  onToggleRecording?: () => void;
  hasPermissionError?: boolean;
}

export const DiagnosticResponseInput: React.FC<DiagnosticResponseInputProps> = ({
  mode,
  onModeChange,
  textValue,
  onTextChange,
  onClearText,
  onSaveDraft,
  onAddPromptChip,
  isRecording = false,
  onToggleRecording,
  hasPermissionError = false,
}) => {
  const recordingSeconds = 14;

  const promptChips = [
    { label: '+ Add target seniority (Staff/Lead)', insert: ' Target Role: Staff Backend Engineer.' },
    { label: '+ Highlight recent scalability win', insert: ' Scaled core transaction coordinator to 12,000+ QPS.' },
    { label: '+ Add stack anchors', insert: ' Core Stack: Python, FastAPI, Go, Apache Kafka, PostgreSQL.' },
  ];

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
      {/* Mode Switcher Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '18px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          paddingBottom: '12px',
          flexWrap: 'wrap',
        }}
      >
        {/* Text Mode */}
        <button
          onClick={() => onModeChange('text')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 14px',
            borderRadius: '8px',
            backgroundColor: mode === 'text' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
            border: mode === 'text' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
            color: mode === 'text' ? '#ffffff' : '#94a3b8',
            fontSize: '0.78rem',
            fontWeight: mode === 'text' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <MessageSquare size={13} />
          <span>Text Response</span>
        </button>

        {/* Voice Mode */}
        <button
          onClick={() => onModeChange('voice')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 14px',
            borderRadius: '8px',
            backgroundColor: mode === 'voice' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
            border: mode === 'voice' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
            color: mode === 'voice' ? '#ffffff' : '#94a3b8',
            fontSize: '0.78rem',
            fontWeight: mode === 'voice' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <Mic size={13} />
          <span>Voice Response</span>
          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              padding: '1px 6px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.3)',
              color: '#a5b4fc',
              textTransform: 'uppercase',
            }}
          >
            RECOMMENDED
          </span>
        </button>

        {/* Camera Mode */}
        <button
          onClick={() => onModeChange('camera')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 14px',
            borderRadius: '8px',
            backgroundColor: mode === 'camera' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
            border: mode === 'camera' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
            color: mode === 'camera' ? '#ffffff' : '#94a3b8',
            fontSize: '0.78rem',
            fontWeight: mode === 'camera' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <Video size={13} />
          <span>Camera Mode</span>
          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 600,
              padding: '1px 6px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              color: '#94a3b8',
            }}
          >
            Optional
          </span>
        </button>
      </div>

      {/* Permission Fallback Notice */}
      {hasPermissionError && (
        <div
          style={{
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '12px',
            padding: '12px 14px',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={16} style={{ color: '#fbbf24' }} />
            <span style={{ fontSize: '0.76rem', color: '#fde68a' }}>
              Microphone permission not granted. Switched to Text Response fallback automatically.
            </span>
          </div>

          <button
            onClick={() => onModeChange('text')}
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fef3c7',
              fontSize: '0.72rem',
              cursor: 'pointer',
            }}
          >
            Stay in Text Mode
          </button>
        </div>
      )}

      {/* Mode 1: Text Response */}
      {mode === 'text' && (
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}
          >
            <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>
              Your Background Narrative <span style={{ color: '#64748b', fontWeight: 400 }}>(Pre-seeded from parsed CV)</span>
            </label>

            <button
              onClick={onClearText}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                fontSize: '0.72rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: 0,
              }}
            >
              <Trash2 size={12} />
              <span>Clear</span>
            </button>
          </div>

          <textarea
            rows={7}
            value={textValue}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Type your background narrative or talk about your experience and target role..."
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              borderRadius: '12px',
              color: '#f8fafc',
              fontSize: '0.82rem',
              lineHeight: 1.6,
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              marginBottom: '10px',
              resize: 'vertical',
            }}
          />

          {/* Character count & Save draft */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: '#34d399' }}>
              <CheckCircle2 size={12} />
              <span>{textValue.length} / 2,000 characters (Sufficient depth)</span>
            </div>

            <button
              onClick={onSaveDraft}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: '6px',
                color: '#cbd5e1',
                fontSize: '0.74rem',
                cursor: 'pointer',
              }}
            >
              <Save size={12} />
              <span>Save Draft</span>
            </button>
          </div>

          {/* Quick Prompt Additions */}
          <div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, marginBottom: '6px' }}>
              Quick prompt additions:
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {promptChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (onAddPromptChip) onAddPromptChip(chip.insert);
                    else onTextChange(textValue + chip.insert);
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    color: '#cbd5e1',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Voice Response */}
      {mode === 'voice' && (
        <div
          style={{
            padding: '24px 16px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Waveform / Mic Animation */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: isRecording ? 'rgba(239, 68, 68, 0.15)' : 'rgba(99, 102, 241, 0.15)',
              border: isRecording ? '2px solid #ef4444' : '2px solid #818cf8',
              marginBottom: '16px',
              cursor: 'pointer',
              boxShadow: isRecording ? '0 0 20px rgba(239, 68, 68, 0.4)' : '0 0 20px rgba(99, 102, 241, 0.3)',
            }}
            onClick={onToggleRecording}
          >
            {isRecording ? <Square size={24} style={{ color: '#ef4444' }} /> : <Mic size={28} style={{ color: '#818cf8' }} />}
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 4px 0' }}>
            {isRecording ? 'Listening & Transcribing in Real-Time...' : 'Click to Begin Speaking'}
          </h4>

          <p style={{ fontSize: '0.76rem', color: '#94a3b8', maxWidth: '400px', margin: '0 auto 16px auto' }}>
            {isRecording
              ? `Recording active (${recordingSeconds}s). Speak naturally as you would in a technical screening.`
              : 'Our on-device model transcribes your response and extracts key technical anchors with zero latency.'}
          </p>

          {/* Transcript Preview */}
          <div
            style={{
              textAlign: 'left',
              padding: '12px 14px',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.78rem',
              color: '#cbd5e1',
              lineHeight: 1.5,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <div style={{ fontSize: '0.66rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
              Live Transcript:
            </div>
            &quot;{textValue || 'I am a Senior Backend Engineer focusing on high-throughput microservices in Python and Go...'}&quot;
          </div>
        </div>
      )}

      {/* Mode 3: Camera Mode */}
      {mode === 'camera' && (
        <div
          style={{
            padding: '24px 16px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Simulated Camera Window */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              height: '240px',
              margin: '0 auto 16px auto',
              backgroundColor: '#030712',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
              alt="Live video frame preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
            />

            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                fontSize: '0.68rem',
                color: '#34d399',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399' }} />
              <span>Camera Connected • 1080p</span>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                display: 'flex',
                gap: '8px',
              }}
            >
              <button
                onClick={onToggleRecording}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: isRecording ? '#ef4444' : '#4f46e5',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                {isRecording ? 'Stop Recording' : 'Start Video Intake'}
              </button>
            </div>
          </div>

          <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: 0 }}>
            Camera intake assesses eye contact and conversational cadence during introductory questions.
          </p>
        </div>
      )}
    </div>
  );
};
