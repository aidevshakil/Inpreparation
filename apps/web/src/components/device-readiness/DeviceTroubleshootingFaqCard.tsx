import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const DeviceTroubleshootingFaqCard: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 'permissions',
      question: 'Camera or Mic permission blocked in browser?',
      answer:
        'Click the lock or camera icon in your browser address bar (top left), switch Camera & Microphone permissions to "Allow", and reload this calibration screen.',
    },
    {
      id: 'levels',
      question: 'Microphone not picking up audio levels?',
      answer:
        'Check that your hardware microphone is selected in the dropdown menu. Ensure your system input volume is above 60% and check for any physical mute toggles.',
    },
    {
      id: 'vpn',
      question: 'High latency or VPN warning detected?',
      answer:
        'Corporate VPNs can introduce packet jitter or throttle UDP WebRTC traffic. Disconnecting VPN or whitelisting Inprep AI domains ensures sub-50ms conversational latency.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <HelpCircle size={16} style={{ color: '#38bdf8' }} />
        <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          Troubleshooting &amp; FAQs
        </h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div
              key={faq.id}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'transparent',
                  border: 'none',
                  color: '#e2e8f0',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  gap: '8px',
                }}
              >
                <span>{faq.question}</span>
                {isOpen ? <ChevronUp size={14} style={{ color: '#818cf8', flexShrink: 0 }} /> : <ChevronDown size={14} style={{ color: '#64748b', flexShrink: 0 }} />}
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 12px 10px 12px',
                    fontSize: '0.72rem',
                    color: '#94a3b8',
                    lineHeight: 1.45,
                    borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                    marginTop: '2px',
                    paddingTop: '6px',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
