import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const InterviewLibraryFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How are interview categories selected?',
      a: 'Our categories and rubrics are reverse-engineered from 2026 hiring debriefs and rubrics at Tier-1 companies (FAANG, top enterprise SaaS, and high-growth startups), organized by engineering domains and seniority tiers.'
    },
    {
      q: 'Can AI recommend a category for me?',
      a: 'Yes! Use our Intelligent Track Matching tool above by uploading your resume or specifying your target competencies to receive personalized track recommendations with match confidence scores.'
    },
    {
      q: 'Does every interview have the same questions?',
      a: 'No. Our dynamic question generator selects from a calibrated bank of over 500+ real-world engineering prompts, ensuring each practice round tests unique architectural trade-offs, edge cases, and technical scenarios.'
    },
    {
      q: 'How many questions are in an interview?',
      a: 'Every standard interview simulation contains precisely 5 focused questions to prevent cognitive fatigue while rigorously evaluating technical depth, communication, and real-time reasoning (~12–20 mins).'
    },
    {
      q: 'Can I practice the same category again?',
      a: 'Yes, unlimited times. Each session dynamically generates different questions and adaptive follow-up probing based on your responses and previous growth areas.'
    }
  ];

  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--primary-color)',
            marginBottom: '10px'
          }}>
            COMMON INQUIRIES
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            margin: 0
          }}>
            Everything you need to know about categories, rubrics, and dynamic track selection.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: isOpen ? '1px solid var(--primary-color)' : '1px solid var(--border-subtle)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'none'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    color: isOpen ? 'var(--primary-color)' : 'var(--text-main)',
                    fontSize: '15.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isOpen ? 'var(--primary-color)' : 'var(--text-main)';
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--primary-color)' : 'var(--text-muted)',
                      flexShrink: 0,
                      marginLeft: '12px'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px',
                    fontSize: '13.5px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    borderTop: '1px solid var(--border-subtle)',
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
