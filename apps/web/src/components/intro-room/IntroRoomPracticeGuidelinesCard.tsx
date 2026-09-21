import React from 'react';
import { AlertCircle } from 'lucide-react';

export const IntroRoomPracticeGuidelinesCard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <AlertCircle size={16} style={{ color: '#fbbf24' }} />
        <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#f8fafc', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
          HELPFUL PRACTICE GUIDELINES
        </h4>
      </div>

      <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <li style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
          <strong style={{ color: '#f8fafc' }}>Structure with STAR:</strong> Situation, Task, Action, and Measurable Result where appropriate.
        </li>
        <li style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
          <strong style={{ color: '#f8fafc' }}>Take thinking time:</strong> Pausing 5–10 seconds to organize your architectural trade-offs is encouraged.
        </li>
        <li style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
          <strong style={{ color: '#f8fafc' }}>No trick scoring:</strong> We calibrate to your actual experience; honesty about limits yields better drills.
        </li>
        <li style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45 }}>
          <strong style={{ color: '#f8fafc' }}>Retake if needed:</strong> After each question, you can listen back and re-record if you want another take.
        </li>
      </ul>
    </div>
  );
};
