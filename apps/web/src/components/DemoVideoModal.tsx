import React, { useState } from 'react';
import { X, Sparkles, Zap } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartPractice: () => void;
}

export const DemoVideoModal: React.FC<DemoVideoModalProps> = ({ isOpen, onClose, onStartPractice }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const demoChapters = [
    { title: '1. Persona & Track Selection', desc: 'Customizing question strictness, company rubric, and role seniority.' },
    { title: '2. Live Video & Voice Stream', desc: 'Real-time multi-modal evaluation of speech cadence, tone, and eye gaze.' },
    { title: '3. Adaptive Contextual Probing', desc: 'AI dynamically digs into answers with smart architectural follow-ups.' },
    { title: '4. Instant Diagnostic Scorecard', desc: 'Sub-second breakdown with STAR analysis and model answer audio.' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0d121c',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '860px',
          overflow: 'hidden',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.9), 0 0 50px rgba(124, 58, 237, 0.35)',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '16px 24px',
          background: '#131828',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#818cf8" />
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#f8fafc' }}>
              InPrep AI Product Demo Walkthrough
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Simulation Canvas */}
        <div style={{
          position: 'relative',
          height: '380px',
          background: 'radial-gradient(circle at center, #172033 0%, #080c14 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          {/* Mock Video Graphic */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '560px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(99, 102, 241, 0.15)',
              color: '#818cf8',
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 700,
              marginBottom: '12px'
            }}>
              <Zap size={13} /> {demoChapters[activeStep].title}
            </div>

            <div style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
              Simulating Real-World Engineering Interview
            </div>

            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              {demoChapters[activeStep].desc}
            </p>

            {/* Interactive Step Navigator */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {demoChapters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    width: '32px',
                    height: '6px',
                    borderRadius: '3px',
                    background: activeStep === i ? '#818cf8' : 'rgba(255, 255, 255, 0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div style={{
          padding: '20px 24px',
          background: '#0d121c',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '13px', color: '#94a3b8' }}>
            Ready to experience an authentic simulation yourself?
          </div>

          <button
            onClick={() => {
              onClose();
              onStartPractice();
            }}
            className="btn-primary btn-sm"
          >
            <span>Launch Live Simulator</span>
          </button>
        </div>
      </div>
    </div>
  );
};
