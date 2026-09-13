import React from 'react';
import { Bot, Info } from 'lucide-react';

export const IntroRoomWelcomeCard: React.FC = () => {
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
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 14px rgba(124, 58, 237, 0.4)',
              flexShrink: 0,
            }}
          >
            <Bot size={20} />
          </div>

          <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
            Welcome to Your Career Introduction
          </h3>
        </div>

        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}
        >
          Inprep AI Coach Ready
        </span>
      </div>

      <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.55, margin: '0 0 16px 0' }}>
        This short session helps Inprep AI understand your background, engineering interests, and target roles to construct your personalized prep curriculum. There are no right or wrong answers, and no stressful trick questions.
      </p>

      {/* Supportive Coach Guidance Box */}
      <div
        style={{
          backgroundColor: 'rgba(99, 102, 241, 0.06)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '12px',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <Info size={16} style={{ color: '#818cf8', flexShrink: 0, marginTop: '2px' }} />
        <p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
          <strong style={{ color: '#a5b4fc' }}>Supportive Coach Guidance:</strong> Speak naturally as you would to a trusted engineering mentor. You can pause, review your responses, or adjust modes anytime.
        </p>
      </div>
    </div>
  );
};
