import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export const DiagnosticResponsibleAiCard: React.FC = () => {
  const [audioTranscription, setAudioTranscription] = useState(true);
  const [presentationAnalytics, setPresentationAnalytics] = useState(false);

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <ShieldCheck size={16} style={{ color: '#10b981' }} />
        <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Responsible AI Guarantee
        </h4>
      </div>

      <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 16px 0' }}>
        Your responses directly personalize synthetic mock interviewer rubrics. Responses are strictly private, never graded pass/fail, and never sold or revealed to employers.
      </p>

      {/* Toggles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Toggle 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.74rem', color: '#cbd5e1', fontWeight: 500 }}>
            Audio Transcription
          </span>
          <button
            onClick={() => setAudioTranscription(!audioTranscription)}
            style={{
              width: '36px',
              height: '20px',
              borderRadius: '9999px',
              backgroundColor: audioTranscription ? '#4f46e5' : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background-color 0.2s ease',
              padding: 0,
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                position: 'absolute',
                top: '3px',
                left: audioTranscription ? '19px' : '3px',
                transition: 'left 0.2s ease',
              }}
            />
          </button>
        </div>

        {/* Toggle 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.74rem', color: '#cbd5e1', fontWeight: 500 }}>
            Presentation Analytics
          </span>
          <button
            onClick={() => setPresentationAnalytics(!presentationAnalytics)}
            style={{
              width: '36px',
              height: '20px',
              borderRadius: '9999px',
              backgroundColor: presentationAnalytics ? '#4f46e5' : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background-color 0.2s ease',
              padding: 0,
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                position: 'absolute',
                top: '3px',
                left: presentationAnalytics ? '19px' : '3px',
                transition: 'left 0.2s ease',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
