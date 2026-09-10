import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How realistic are the AI interviewers?',
      a: 'Our AI interviewers utilize ultra-low latency conversational voice models coupled with state-of-the-art reasoning engines. They do not just read scripted questions; they actively listen to your answers, detect ambiguities or missing trade-offs, and dynamically ask contextual follow-up questions just like real human hiring managers.'
    },
    {
      q: 'Can I upload my resume and target job description?',
      a: 'Yes! In the Pro and Career Fast-Track tiers, you can paste any custom Job Description (JD) and upload your resume. InPrep AI will parse key competencies and calibrate all mock questions specifically around your target role and background.'
    },
    {
      q: 'What camera and microphone setup do I need?',
      a: 'Any standard laptop webcam or USB camera and microphone will work effortlessly in your browser. No software downloads or extensions are required. If you prefer, you can also practice in text/audio-only mode.'
    },
    {
      q: 'How does the body language and eye contact tracking work?',
      a: 'Our computer vision engine runs locally in your browser using secure client-side models. It analyzes facial alignment, eye gaze consistency toward the camera, and postural steadiness to help you eliminate nervous habits without storing your raw video on external servers.'
    },
    {
      q: 'Is my audio, video, and personal data secure and private?',
      a: 'Absolutely. We adhere to enterprise-grade security and privacy protocols. We do not sell your data or use your interview recordings to train public third-party foundation models. You can purge your practice transcripts anytime with 1-click.'
    },
    {
      q: 'Can I practice coding and system design whiteboard sessions?',
      a: 'Yes! InPrep AI provides integrated code evaluation sandboxes and interactive architecture whiteboard tools where you can draw system blocks, define API schemas, and explain trade-offs to the AI interviewer in real-time.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge-pill badge-purple" style={{ marginBottom: '14px' }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            Questions About InPrep AI
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8' }}>
            Everything you need to know about the product, simulations, and privacy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '0',
                  background: isOpen ? '#131828' : '#0e121c',
                  borderColor: isOpen ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.07)',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    color: '#f8fafc',
                    fontSize: '16px',
                    fontWeight: 700,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: isOpen ? '#818cf8' : '#64748b'
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px',
                    color: '#94a3b8',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingTop: '16px'
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
