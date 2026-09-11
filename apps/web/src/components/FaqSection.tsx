import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'What is Inprep AI and who is it built for?',
    a: 'Inprep AI is a multimodal interview preparation studio built for software engineers, tech leads, engineering managers, and tech professionals. It combines realistic conversational voice AI interviewers with objective setup diagnostics to simulate real-world hiring bars and deliver actionable, rubrics-based feedback.'
  },
  {
    q: 'Why are interviews strictly 5 questions per practice session?',
    a: 'We purposefully structure practice into calibrated 5-question rounds (~15 minutes). Cognitive science proves that focused, deliberate practice with immediate post-session feedback loops yields 3x faster skill retention and confidence gains than exhausting 60-minute marathons.'
  },
  {
    q: 'Does Inprep AI analyze my emotions or personality?',
    a: 'No. We uphold strict ethical AI standards with an explicit No-Personality and No-Emotion guarantee. Our camera telemetry analyzes only objective physical setup factors—such as camera eye-level framing, room lighting, and gaze orientation—with zero psychological or emotional conjecture.'
  },
  {
    q: 'Can I upload my CV to tailor the questions?',
    a: 'Yes! Inprep AI automatically parses your uploaded CV/resume and optional target Job Description (JD) to calibrate question difficulty, architecture trade-offs, and technical domain depth specifically around your background and target role.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '70px 0 80px', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            display: 'block',
            marginBottom: '12px'
          }}>
            FREQUENTLY ANSWERED
          </span>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            lineHeight: 1.2
          }}>
            Questions About Inprep AI
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 21, 35, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  backdropFilter: 'blur(12px)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease, background 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                >
                  <span style={{ lineHeight: 1.4 }}>{faq.q}</span>
                  <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: isOpen ? '#818cf8' : '#64748b',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px',
                    color: '#94a3b8',
                    fontSize: '13.5px',
                    lineHeight: 1.65,
                    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                    paddingTop: '14px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
